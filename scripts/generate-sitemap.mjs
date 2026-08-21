// Generates public/sitemap.xml from the real routes in App.jsx + catalog data.
// Run: node scripts/generate-sitemap.mjs   (also wired into `npm run build`)
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { CATEGORIES, BRANDS, PRODUCTS, APPLICATIONS } from '../src/data/catalog.js';

const ORIGIN = 'https://www.spo2sensorcable.com';
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');

// Mirrors BrandDetailPage.jsx slug logic - keep in sync if that changes.
const SLUG_OVERRIDES = { 'Fukuda Denshi': 'fukuda' };
const toSlug = (name) => SLUG_OVERRIDES[name] || name.toLowerCase().replace(/\s+/g, '-');

const subcategorySlugs = CATEGORIES.flatMap((c) =>
  (c.children || c.subcategories || []).map((s) => s.slug)
);

// priority: 1.0 home, 0.9 key hubs, 0.8 category/product-line, 0.7 detail, 0.5 minor
const entries = [
  ['/', 1.0, 'weekly'],
  ['/products', 0.9, 'weekly'],
  ['/brands', 0.9, 'monthly'],
  ['/applications', 0.8, 'monthly'],
  ['/about-us', 0.7, 'monthly'],
  ['/oem-solution', 0.8, 'monthly'],
  ['/contact', 0.8, 'monthly'],
  ['/blog', 0.6, 'weekly'],
  ['/team', 0.5, 'yearly'],
  ['/faq', 0.6, 'monthly'],
  // pretty product-line URLs (must match PRODUCT_LINE_PATHS in App.jsx)
  ...['/spo2', '/ecg', '/nibp', '/ibp', '/temperature', '/esu', '/aed', '/eeg'].map((p) => [p, 0.8, 'monthly']),
  // pretty application URLs (must match APPLICATION_LINE_ROUTES in App.jsx)
  ...['/icu', '/or', '/emergency', '/ward'].map((p) => [p, 0.7, 'monthly']),
  ...CATEGORIES.map((c) => [`/product-category/${c.slug}`, 0.8, 'monthly']),
  ...subcategorySlugs.map((s) => [`/product-category/${s}`, 0.7, 'monthly']),
  ...BRANDS.map((b) => [`/brands/${toSlug(b)}`, 0.7, 'monthly']),
  ...APPLICATIONS.map((a) => [`/applications/${a.slug}`, 0.7, 'monthly']),
  ...PRODUCTS.map((p) => [`/product/${p.id}`, 0.6, 'monthly']),
];

// de-duplicate by path, keeping the first (highest-intent) declaration
const seen = new Set();
const unique = entries.filter(([p]) => !seen.has(p) && seen.add(p));

const today = new Date().toISOString().slice(0, 10);
const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${unique
  .map(
    ([path, priority, changefreq]) =>
      `  <url>\n    <loc>${ORIGIN}${path}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority.toFixed(1)}</priority>\n  </url>`
  )
  .join('\n')}
</urlset>
`;

mkdirSync(resolve(root, 'public'), { recursive: true });
writeFileSync(resolve(root, 'public/sitemap.xml'), xml, 'utf8');
console.log(`sitemap.xml written: ${unique.length} URLs`);
