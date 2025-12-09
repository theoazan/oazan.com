const fs = require('fs');
const path = require('path');
const pdfParseLib = require('pdf-parse');
const pdfParse = pdfParseLib && pdfParseLib.default ? pdfParseLib.default : pdfParseLib;

async function main() {
  try {
    const pdfPath = path.resolve(__dirname, '..', 'public', 'Welcome to the Oazan Technologies.pdf');
    if (!fs.existsSync(pdfPath)) {
      console.error('PDF not found at:', pdfPath);
      process.exit(1);
    }
    const dataBuffer = fs.readFileSync(pdfPath);
    const data = await pdfParse(dataBuffer);

    const outDir = path.resolve(__dirname, '..', 'src', 'content', 'pdf-extract');
    fs.mkdirSync(outDir, { recursive: true });

    const txtOut = path.join(outDir, 'welcome-oazan.txt');
    const jsonOut = path.join(outDir, 'welcome-oazan.json');

    fs.writeFileSync(txtOut, data.text, 'utf8');

    const meta = {
      numpages: data.numpages,
      numrender: data.numrender,
      info: data.info,
      metadata: data.metadata ? data.metadata._metadata : null,
      version: data.version,
    };
    fs.writeFileSync(jsonOut, JSON.stringify({ meta, text: data.text }, null, 2), 'utf8');

    console.log('Extraction complete ->', txtOut);
  } catch (err) {
    console.error('Failed to extract PDF:', err);
    process.exit(1);
  }
}

main();
