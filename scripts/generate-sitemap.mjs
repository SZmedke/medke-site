// Generates public/sitemap.xml from the shared route table in route-meta.mjs.
// Run: node scripts/generate-sitemap.mjs   (also wired into `npm run build`)
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { ROUTES, ORIGIN } from './route-meta.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const today = new Date().toISOString().slice(0, 10);

// Alias URLs canonicalise elsewhere; listing them would ask Google to index
// duplicates of a page we already submit.
const indexable = ROUTES.filter((r) => !r.isDuplicate);

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${indexable.map(
  ({ path, priority, changefreq }) =>
    `  <url>\n    <loc>${ORIGIN}${path}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority.toFixed(1)}</priority>\n  </url>`
).join('\n')}
</urlset>
`;

mkdirSync(resolve(root, 'public'), { recursive: true });
writeFileSync(resolve(root, 'public/sitemap.xml'), xml, 'utf8');
console.log(
  `sitemap.xml written: ${indexable.length} URLs (${ROUTES.length - indexable.length} aliases excluded)`
);
