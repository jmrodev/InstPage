const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, 'materias');
const outputBase = path.join(__dirname, 'output');

function getIcon(filename) {
  const ext = path.extname(filename).toLowerCase();
  if (ext === '.pdf') return '<span class="material-icons" style="color:#d32f2f">picture_as_pdf</span>';
  if (['.png', '.jpg', '.jpeg', '.gif', '.webp'].includes(ext)) return '<span class="material-icons" style="color:#1976d2">image</span>';
  if (['.mp3', '.wav', '.ogg'].includes(ext)) return '<span class="material-icons" style="color:#388e3c">audiotrack</span>';
  if (['.doc', '.docx', '.odt'].includes(ext)) return '<span class="material-icons" style="color:#1565c0">description</span>';
  if (['.md', '.txt'].includes(ext)) return '<span class="material-icons" style="color:#616161">notes</span>';
  if (ext === '.html') return '<span class="material-icons" style="color:#ff9800">language</span>';
  if (['.zip', '.rar', '.7z', '.tar', '.gz'].includes(ext)) return '<span class="material-icons" style="color:#6d4c41">archive</span>';
  return '<span class="material-icons" style="color:#757575">insert_drive_file</span>';
}

function generatePage(dirPath, relativePath = '') {
  const items = fs.readdirSync(dirPath, { withFileTypes: true });
  // Calcular la ruta relativa al CSS según la profundidad
  const depth = relativePath ? relativePath.split(path.sep).length : 0;
  const cssPath = '../'.repeat(depth + 1) + 'css/main.css';

  let html = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${relativePath || 'Inicio'}</title>
  <link rel="stylesheet" href="${cssPath}">
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
</head>
<body>
  <h1>${relativePath || 'Inicio'}</h1>
`;

  html += `<ul>
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
        html += `<li><span class="material-icons" style="color:#6d4c41">integration_instructions</span> <a href="${itemName}/">${itemName}/ (Scripts)</a></li>\n`;

        const destFolder = path.join(outputBase, relItemPath);
        fs.mkdirSync(destFolder, { recursive: true });
        fs.cpSync(fullItemPath, destFolder, { recursive: true });
        console.log(`Copied Scripts directory: ${fullItemPath} to ${destFolder}`);

        // Generar index.html dentro de Scripts con listado de scripts
        const scriptFiles = fs.readdirSync(fullItemPath)
          .filter(f => !fs.statSync(path.join(fullItemPath, f)).isDirectory());

        let scriptsHtml = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Scripts de la materia</title>
</head>
<body>
  <h1>Scripts de la materia</h1>
  <ul>
`;

        scriptFiles.forEach(f => {
          scriptsHtml += `<li>${getIcon(f)} <a href="${f}" download>${f}</a></li>\n`;
        });

        scriptsHtml += `  </ul>
  <a href="../index.html">⬅ Volver</a>
</body>
</html>
`;

        fs.writeFileSync(path.join(destFolder, 'index.html'), scriptsHtml, 'utf-8');
        return;
      }
      if (htmlFiles.length > 0) {
        // 📚 carpeta con materiales HTML (ej: capítulos)
        const destFolder = path.join(outputBase, relItemPath);
        fs.mkdirSync(destFolder, { recursive: true });
        fs.cpSync(fullItemPath, destFolder, { recursive: true });

        htmlFiles.forEach(htmlFile => {
          html += `<li><span class="material-icons" style="color:#8e24aa">menu_book</span> <a href="${itemName}/${htmlFile}">${itemName} → ${htmlFile}</a></li>\n`;
        });
      } else {
        // 📁 carpeta navegable (con index.html)
        generatePage(fullItemPath, relItemPath);
        html += `<li><span class="material-icons" style="color:#1976d2">folder</span> <a href="${itemName}/index.html">${itemName}</a></li>\n`;
      }
    } else {
      const ext = path.extname(itemName).toLowerCase();
      const isIndex = itemName.toLowerCase() === 'index.html';
      const isHTML = ext === '.html';

      fs.mkdirSync(outputDir, { recursive: true });

      if (isHTML && !isIndex) {
        fs.copyFileSync(fullItemPath, path.join(outputDir, itemName));
        html += `<li>${getIcon(itemName)} <a href="${itemName}">${itemName}</a></li>\n`;
      } else if (!isHTML) {
        const showable = ['.pdf', '.png', '.jpg', '.jpeg', '.mp3', '.doc', '.docx', '.md'].includes(ext);
        if (showable) {
          fs.copyFileSync(fullItemPath, path.join(outputDir, itemName));
          html += `<li>${getIcon(itemName)} <a href="${itemName}">${itemName}</a></li>\n`;
        }
      }
    }
  });

  html += `  </ul>
  <nav>
    ${relativePath ? `<a href="../index.html">⬅ Atrás</a> | ` : ''}
    <a href="${'../'.repeat(relativePath ? relativePath.split(path.sep).length : 0)}index.html">🏠 Inicio</a>
  </nav>
`;

  // Ahora, después de los enlaces, agrega las cards SOLO en el index principal
  if (!relativePath) {
    try {
      const articulos = JSON.parse(fs.readFileSync('articulos.json', 'utf-8'));
      html += `<section><h2>Artículos recientes de Xataka</h2>
      <ul class="cards-xataka">`;
      articulos.forEach(a => {
        html += `<li class="card-xataka">
          ${a.image ? `<img src="${a.image}" alt="Imagen">` : ''}
          <a href="${a.link}" target="_blank">${a.title}</a>
          <small>${a.summary}</small>
        </li>`;
      });
      html += `</ul></section>`;
    } catch (e) {
      html += `<p>No se pudieron cargar los artículos.</p>`;
    }
  }

  html += `
</body>
</html>`;

  const outputDir = path.join(outputBase, relativePath);
  fs.mkdirSync(outputDir, { recursive: true });
  fs.writeFileSync(path.join(outputDir, 'index.html'), html, 'utf-8');
}
// Copiar la carpeta css al output si existe
const cssSrc = path.join(__dirname, 'css');
const cssDest = path.join(outputBase, 'css');
if (fs.existsSync(cssSrc)) {
  fs.mkdirSync(outputBase, { recursive: true });
  fs.cpSync(cssSrc, cssDest, { recursive: true });
}

// Solo ejecutar si es el archivo principal
if (require.main === module) {
  generatePage(rootDir);
  console.log('✅ Generación completa con íconos y compatibilidad móvil 🎉');
}
