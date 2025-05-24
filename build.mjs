import axios from 'axios';
import { load } from 'cheerio';
import fs from 'fs';
import { execSync } from 'child_process';
import path from 'path';

// 1. SCRAPING DE ARTÍCULOS
console.log('🔎 Obteniendo artículos de Xataka...');
const { data: html } = await axios.get('https://www.xataka.com/tag/tecnologia', {
  headers: {
    'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
  }
});
const $ = load(html);
const articles = [];
$('article').each((_, article) => {
  const titleElement = $(article).find('h2 a');
  const title = titleElement.text();
  const link = titleElement.attr('href');
  const pElement = $(article).find('p').first();
  const summary = pElement.length ? pElement.text().substring(0, 100) : '';
  // Extraer imagen
  const imgElement = $(article).find('div a picture img').first();
  const image = imgElement.length ? imgElement.attr('src') : '';
  articles.push({
    title,
    link,
    summary,
    image
  });
});
fs.writeFileSync('articulos.json', JSON.stringify(articles, null, 2), 'utf-8');
console.log('✅ Artículos guardados en articulos.json');

// 2. GENERAR PÁGINAS ESTÁTICAS
console.log('⚙️ Generando páginas estáticas...');
const generatePagesPath = path.join(process.cwd(), 'generatePages.js');
execSync(`node "${generatePagesPath}"`, { stdio: 'inherit' });
console.log('🎉 Sitio generado correctamente.');