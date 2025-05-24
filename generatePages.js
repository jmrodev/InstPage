const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, 'materias');
const outputBase = path.join(__dirname, 'output');

function getIcon(filename) {
  const ext = path.extname(filename).toLowerCase();
  if (ext === '.pdf') return '📄';
  if (['.png', '.jpg', '.jpeg', '.gif', '.webp'].includes(ext)) return '🖼️';
  if (['.mp3', '.wav', '.ogg'].includes(ext)) return '🔊';
  if (['.doc', '.docx', '.odt'].includes(ext)) return '📦';
  if (ext === '.html') return '📝';
  return '📦';
}

function generatePage(dirPath, relativePath = '') {
  const items = fs.readdirSync(dirPath, { withFileTypes: true });

  let html = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${relativePath || 'Inicio'}</title>
  <style>
    body { font-family: sans-serif; max-width: 800px; margin: auto; padding: 1rem; }
    ul { list-style: none; padding: 0; }
    li { margin-bottom: 0.5rem; font-size: 1.1rem; }
    a { text-decoration: none; color: #007acc; }
    a:hover { text-decoration: underline; }
  </style>
</head>
<body>
  <h1>${relativePath || 'Inicio'}</h1>
  <ul>
`;

  items.forEach(item => {
    const itemName = item.name;
    const fullItemPath = path.join(dirPath, itemName);
    const relItemPath = path.join(relativePath, itemName);
    const outputDir = path.join(outputBase, relativePath);

    if (item.isDirectory()) {
      const folderItems = fs.readdirSync(fullItemPath);
      const htmlFiles = folderItems.filter(f => f.toLowerCase().endsWith('.html') && f.toLowerCase() !== 'index.html');

    if (itemName.toLowerCase() === 'scripts') {
      const destFolder = path.join(outputBase, relItemPath);
      fs.mkdirSync(destFolder, { recursive: true });
      fs.cpSync(fullItemPath, destFolder, { recursive: true });
      console.log(`Copied Scripts directory: ${fullItemPath} to ${destFolder}`); // Added for logging
      html += `<li>📦 <a href="${itemName}/">${itemName}/ (Scripts)</a></li>
`; // Link to it in parent index
      // Continue to next item in forEach loop to prevent further processing of 'Scripts' dir by later else-if blocks
      return; 
    }
      if (htmlFiles.length > 0) {
        // 📚 carpeta con materiales HTML (ej: capítulos)
        const destFolder = path.join(outputBase, relItemPath);
        fs.mkdirSync(destFolder, { recursive: true });
        fs.cpSync(fullItemPath, destFolder, { recursive: true });

        htmlFiles.forEach(htmlFile => {
          html += `<li>📚 <a href="${itemName}/${htmlFile}">${itemName} → ${htmlFile}</a></li>\n`;
        });
      } else {
        // 📁 carpeta navegable (con index.html)
        generatePage(fullItemPath, relItemPath);
        html += `<li>📁 <a href="${itemName}/index.html">${itemName}</a></li>\n`;
      }
    } else {
      const ext = path.extname(itemName).toLowerCase();
      const isIndex = itemName.toLowerCase() === 'index.html';
      const isHTML = ext === '.html';

      fs.mkdirSync(outputDir, { recursive: true });

      if (isHTML && !isIndex) {
        fs.copyFileSync(fullItemPath, path.join(outputDir, itemName));
        html += `<li>📝 <a href="${itemName}">${itemName}</a></li>\n`;
      } else if (!isHTML) {
        const showable = ['.pdf', '.png', '.jpg', '.jpeg', '.mp3', '.doc', '.docx', '.md'].includes(ext);
        if (showable) {
          fs.copyFileSync(fullItemPath, path.join(outputDir, itemName));
          html += `<li>${getIcon(itemName)} <a href="${itemName}">${itemName}</a></li>\n`;
        }
      }
    }
  });

  html += `  </ul>\n</body>\n</html>`;

  const outputDir = path.join(outputBase, relativePath);
  fs.mkdirSync(outputDir, { recursive: true });
  fs.writeFileSync(path.join(outputDir, 'index.html'), html, 'utf-8');
}

// Ejecutar
generatePage(rootDir);
console.log('✅ Generación completa con íconos y compatibilidad móvil 🎉');
