const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({
    args: [
      '--window-size=1280,800',
    ],
  });
  const page = await browser.newPage();
  await page.goto(`file:${path.join(__dirname, '_site/index.html')}`);
  await page._client.send('Emulation.clearDeviceMetricsOverride');
  await page.screenshot({path: 'karl_haworth_resume.png'});
  await page.pdf({
    path: '_site/assets/karl_haworth_resume.pdf',
    printBackground: true,
    format: 'A4',
    margin: {
          top: "30px",
          left: "0px",
          right: "0px",
          bottom: "30px"
    }
  });

  await browser.close();
})();