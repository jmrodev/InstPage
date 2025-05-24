import { chromium } from 'playwright';
import fs from 'fs';

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();
await page.goto('https://www.xataka.com/tag/tecnologia');

const articles = await page.evaluate(() => {
  const articleElements = document.querySelectorAll('article');
  return Array.from(articleElements).map(article => {
    const titleElement = article.querySelector('h2 a');
    const title = titleElement ? titleElement.innerText : '';
    const link = titleElement ? titleElement.href : '';
    return { title, link };
  });
});
fs.writeFileSync('articulos.json', JSON.stringify(articles, null, 2), 'utf-8');
await browser.close();

