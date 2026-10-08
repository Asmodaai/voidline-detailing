import { build } from 'vite';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';
await build({ build: { emptyOutDir: false, manifest: true } });
await build({ build: { ssr: 'src/entry-server.js', outDir: '.i18n-ssr', emptyOutDir: false, copyPublicDir: false } });
const { render } = await import(pathToFileURL(resolve('.i18n-ssr/entry-server.js')).href);
const template = await readFile('dist/index.html', 'utf8');
const metadata = JSON.parse(await readFile('locales/meta.json', 'utf8'));
const escape = value => value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
for (const language of ['cs', 'en']) {
  const meta = metadata[language], url = metadata.origin + (language === 'en' ? '/en/' : '/');
  const otherLocale = language === 'en' ? 'cs_CZ' : 'en_GB';
  const head = `<link rel="canonical" href="${url}">
    <link rel="alternate" hreflang="cs-CZ" href="${metadata.origin}/">
    <link rel="alternate" hreflang="en" href="${metadata.origin}/en/">
    <link rel="alternate" hreflang="x-default" href="${metadata.origin}/">
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="${metadata.brand}">
    <meta property="og:title" content="${escape(meta.title)}">
    <meta property="og:description" content="${escape(meta.description)}">
    <meta property="og:url" content="${url}">
    <meta property="og:locale" content="${language === 'en' ? 'en_GB' : 'cs_CZ'}">
    <meta property="og:locale:alternate" content="${otherLocale}">
    <meta name="twitter:card" content="summary">`;
  let html = template.replace(/<html lang="cs">/, `<html lang="${language}">`)
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${escape(meta.title)}</title>`)
    .replace(/(<meta\s+name="description"\s+content=")[^"]*("\s*\/?>)/, `$1${escape(meta.description)}$2`)
    .replace(/<div id="app"><\/div>/, `<div id="app">${await render(language)}</div>`)
    .replace(/<noscript\b[\s\S]*?<\/noscript\s*>/g, '')
    .replace('</head>', head + '\n  </head>');
  const directory = language === 'en' ? 'dist/en' : 'dist';
  await mkdir(directory, { recursive: true });
  await writeFile(directory + '/index.html', html);
  console.log(`Static ${language.toUpperCase()}: ${url}`);
}
await writeFile('dist/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${['/', '/en/'].map(path => `<url><loc>${metadata.origin}${path}</loc><xhtml:link rel="alternate" hreflang="cs-CZ" href="${metadata.origin}/"/><xhtml:link rel="alternate" hreflang="en" href="${metadata.origin}/en/"/><xhtml:link rel="alternate" hreflang="x-default" href="${metadata.origin}/"/></url>`).join('\n')}
</urlset>\n`);
