const { exec, spawn } = require("child_process");
const path = require("path");
const express = require("express");

console.log("🚧 Generando sitio...");
exec("node generatePages.js", (err, stdout, stderr) => {
  if (err) {
    console.error("❌ Error generando la página:", err);
    return;
  }

  const app = express();
  const outputDir = path.join(__dirname, "output");
  const PORT = 3000;

  app.use(express.static(outputDir));

  app.listen(PORT, () => {
    console.log(`✅ Servidor local en: http://localhost:${PORT}`);

    console.log("🌐 Iniciando túnel Ngrok...");

    // Lanzar ngrok con spawn
    const ngrokProcess = spawn("ngrok", ["http", PORT]);

    // Función para buscar URL pública en la salida
    const buscarURL = (data) => {
      const text = data.toString();
      const regex = /https:\/\/[a-z0-9\-]+\.ngrok-free\.app/;  // Ajusta según dominio actual
      const match = text.match(regex);
      if (match) {
        console.log(`🔗 URL pública: ${match[0]}`);
      }
    };

    ngrokProcess.stdout.on("data", buscarURL);
    ngrokProcess.stderr.on("data", buscarURL);

    ngrokProcess.on("close", (code) => {
      console.log(`ngrok terminó con código ${code}`);
    });
  });
});

