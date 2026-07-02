// Google Indexing API — submit all sitemap URLs
// Usage: node submit-indexing.js
// Requires: service-account.json in this directory

const https = require('https');
const fs = require('fs');
const path = require('path');

const SITEMAP_URL = 'https://litvindj.com/sitemap.xml';
const KEY_FILE = path.join(__dirname, 'service-account.json');

if (!fs.existsSync(KEY_FILE)) {
  console.error('❌ service-account.json not found. Place it in the project root.');
  process.exit(1);
}

const serviceAccount = JSON.parse(fs.readFileSync(KEY_FILE, 'utf8'));

// Create JWT for Google OAuth2
function base64url(str) {
  return Buffer.from(str).toString('base64').replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
}

async function getAccessToken() {
  const { createSign } = require('crypto');

  const header = base64url(JSON.stringify({ alg: 'RS256', typ: 'JWT' }));
  const now = Math.floor(Date.now() / 1000);
  const payload = base64url(JSON.stringify({
    iss: serviceAccount.client_email,
    scope: 'https://www.googleapis.com/auth/indexing',
    aud: 'https://oauth2.googleapis.com/token',
    iat: now,
    exp: now + 3600,
  }));

  const sign = createSign('RSA-SHA256');
  sign.update(`${header}.${payload}`);
  const signature = sign.sign(serviceAccount.private_key, 'base64')
    .replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');

  const jwt = `${header}.${payload}.${signature}`;

  return new Promise((resolve, reject) => {
    const body = new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion: jwt,
    }).toString();

    const req = https.request({
      hostname: 'oauth2.googleapis.com',
      path: '/token',
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    }, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        const json = JSON.parse(data);
        if (json.access_token) resolve(json.access_token);
        else reject(new Error(`Token error: ${data}`));
      });
    });
    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

function fetchSitemap(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

function extractUrls(xml) {
  const matches = xml.match(/<loc>(.*?)<\/loc>/g) || [];
  return matches.map((m) => m.replace(/<\/?loc>/g, '').trim());
}

function submitUrl(token, url) {
  return new Promise((resolve, reject) => {
    const body = JSON.stringify({ url, type: 'URL_UPDATED' });
    const req = https.request({
      hostname: 'indexing.googleapis.com',
      path: '/v3/urlNotifications:publish',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    }, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => resolve({ status: res.statusCode, body: data }));
    });
    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main() {
  console.log('🔑 Getting access token...');
  const token = await getAccessToken();
  console.log('✅ Token received\n');

  console.log(`📥 Fetching sitemap: ${SITEMAP_URL}`);
  const xml = await fetchSitemap(SITEMAP_URL);
  const urls = extractUrls(xml);
  console.log(`📋 Found ${urls.length} URLs\n`);

  let success = 0;
  let failed = 0;

  for (let i = 0; i < urls.length; i++) {
    const url = urls[i];
    const result = await submitUrl(token, url);

    if (result.status === 200) {
      console.log(`✅ [${i + 1}/${urls.length}] ${url}`);
      success++;
    } else {
      console.log(`❌ [${i + 1}/${urls.length}] ${url} — ${result.status}: ${result.body}`);
      failed++;
    }

    // Small delay to avoid rate limiting
    if (i < urls.length - 1) await sleep(200);
  }

  console.log(`\n🎉 Done: ${success} submitted, ${failed} failed`);
}

main().catch((err) => {
  console.error('Fatal error:', err.message);
  process.exit(1);
});
