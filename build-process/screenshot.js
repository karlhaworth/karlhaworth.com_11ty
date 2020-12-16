const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');
const { PDFDocument, StandardFonts } = require('pdf-lib');

(async () => {
  const browser = await puppeteer.launch({
    args: [
      '--window-size=1280,800',
    ],
  });
  const page = await browser.newPage();
  await page.goto(`file:${path.join(__dirname, '../_site/index.html')}`);
  await page._client.send('Emulation.clearDeviceMetricsOverride');
  await page.screenshot({path: 'karl_haworth_resume.png'});
  await page.pdf({
    path: './_site/assets/karl_haworth_resume.pdf',
    printBackground: true,
    format: 'letter',
    margin: {
          top: "30px",
          left: "0px",
          right: "0px",
          bottom: "30px"
    }
  });

  await browser.close();

  const readPdf = fs.readFileSync(`./_site/assets/karl_haworth_resume.pdf`);
  const pdfDoc = await PDFDocument.load(readPdf, { 
    updateMetadata: true 
  })
  pdfDoc.setTitle('Karl Haworth - Resume')
  pdfDoc.setAuthor('Karl J Haworth')
  pdfDoc.setProducer('KH PDF App 9000 🤖')
  pdfDoc.setSubject('Karl Haworth Resume')
  pdfDoc.setCreator('karlhaworth.com (https://karlhaworth.com)')
  const pdfBytes = await pdfDoc.save()
  fs.writeFileSync('./_site/assets/karl_haworth_resume.pdf', pdfBytes);
})();