import fs from 'fs';
import path from 'path';
import { CLIENT_LOGOS } from './clients';

// Same visual area for every logo: wide wordmarks get shorter, square marks get narrower.
const AREA = 3800; // px² at desktop size
const MAX_W = 150;
const MAX_H = 58;

// Read pixel size from the file header (PNG, WebP, JPEG, SVG) without extra dependencies
function imageSize(file) {
  const b = fs.readFileSync(file);
  if (b.toString('ascii', 1, 4) === 'PNG') return { width: b.readUInt32BE(16), height: b.readUInt32BE(20) };
  if (b.toString('ascii', 0, 4) === 'RIFF' && b.toString('ascii', 8, 12) === 'WEBP') {
    const chunk = b.toString('ascii', 12, 16);
    if (chunk === 'VP8X') return { width: 1 + b.readUIntLE(24, 3), height: 1 + b.readUIntLE(27, 3) };
    if (chunk === 'VP8L') {
      const bits = b.readUInt32LE(21);
      return { width: (bits & 0x3fff) + 1, height: ((bits >> 14) & 0x3fff) + 1 };
    }
    if (chunk === 'VP8 ') return { width: b.readUInt16LE(26) & 0x3fff, height: b.readUInt16LE(28) & 0x3fff };
  }
  if (b[0] === 0xff && b[1] === 0xd8) {
    let i = 2;
    while (i < b.length) {
      const marker = b[i + 1];
      const len = b.readUInt16BE(i + 2);
      if (marker >= 0xc0 && marker <= 0xcf && ![0xc4, 0xc8, 0xcc].includes(marker)) {
        return { width: b.readUInt16BE(i + 7), height: b.readUInt16BE(i + 5) };
      }
      i += 2 + len;
    }
  }
  const svg = b.toString('utf8');
  const vb = svg.match(/viewBox="[\d.\-]+[ ,]+[\d.\-]+[ ,]+([\d.]+)[ ,]+([\d.]+)"/);
  if (vb) return { width: parseFloat(vb[1]), height: parseFloat(vb[2]) };
  throw new Error(`Unknown image format: ${file}`);
}

export async function getClientLogos() {
  return CLIENT_LOGOS.map((logo) => {
    const { width, height } = imageSize(path.join(process.cwd(), 'public', logo.src));
    const ratio = width / height;
    let w = Math.sqrt(AREA * ratio) * (logo.scale || 1);
    let h = w / ratio;
    if (w > MAX_W) { w = MAX_W; h = w / ratio; }
    if (h > MAX_H) { h = MAX_H; w = h * ratio; }
    return { ...logo, width: Math.round(width), height: Math.round(height), displayWidth: Math.round(w) };
  });
}
