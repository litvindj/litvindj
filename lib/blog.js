import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

const contentDir = path.join(process.cwd(), 'content/blog');

export function getAllPosts(lang) {
  const dir = path.join(contentDir, lang);
  if (!fs.existsSync(dir)) return [];

  const files = fs.readdirSync(dir).filter((f) => f.endsWith('.md'));

  return files
    .map((filename) => {
      const slug = filename.replace('.md', '');
      const fullPath = path.join(dir, filename);
      const { data } = matter(fs.readFileSync(fullPath, 'utf8'));
      return { slug, title: data.title, date: data.date, description: data.description };
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function getPost(lang, slug) {
  const fullPath = path.join(contentDir, lang, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;

  const { data, content } = matter(fs.readFileSync(fullPath, 'utf8'));
  const contentHtml = marked(content);

  return {
    slug,
    title: data.title,
    date: data.date,
    description: data.description,
    contentHtml,
  };
}

export function getAllSlugs(lang) {
  const dir = path.join(contentDir, lang);
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter((f) => f.endsWith('.md')).map((f) => f.replace('.md', ''));
}
