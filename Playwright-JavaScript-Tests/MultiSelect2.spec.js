const {test, expect, devices} = require('@playwright/test');

test ('linkonotherpage', async ({ page }) => {
  await page.goto('https://automationpanda.com/');
  //const allLinksOnOtherPage = await page.locator('xpath=//a[@href]').all();
  const allLinksOnOtherPage = await page.locator('xpath=//a[contains(@class,"tag-cloud-link")]').all();
  console.log('Total links on the page: ' + allLinksOnOtherPage.length);
  for (const link of allLinksOnOtherPage) {
    const linkText = await link.innerText();
    console.log('Link: ' + linkText);
  }
});