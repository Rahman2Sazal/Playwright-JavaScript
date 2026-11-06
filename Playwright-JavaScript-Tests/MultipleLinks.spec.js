const {test, expect, devices} = require('@playwright/test');

test('LocateMultipleElements', async ({ page }) => {
  await page.goto('https://demoblaze.com/');
  await expect(page).toHaveTitle('STORE');  
  await page.locator('xpath=//*[@id="login2"]').click();
  await page.locator('css=#loginusername').fill("pavanol");
  await page.locator('css=#loginpassword').fill("test@123");
  await page.locator('css=#logInModal > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > button:nth-child(2)').click();
 
  //collecting all the links on the page
  const allLinks = await page.locator('css=a').all();
  console.log('Total links on the page: ' + allLinks.length);
  for (let i = 0; i < allLinks.length; i++) {
    const linkText = await allLinks[i].innerText();
    console.log('Link ' + (i + 1) + ': ' + linkText);
  }
console.log('================================ =====================================');

  //collecting all procucts on the page
  const allProducts = await page.locator('xpath=//h4[@class="card-title"]').all();
  console.log('Total products on the page: ' + allProducts.length);
  for (const Product of allProducts) {
    const ProductText = await Product.innerText();
    console.log('Product: ' + ProductText);
  }
});

test('linkonotherpage', async ({ page }) => {
  await page.goto('https://automationpanda.com/');
  //const allLinksOnOtherPage = await page.locator('xpath=//a[@href]').all();
  const allLinksOnOtherPage = await page.locator('xpath=//a[contains(@class,"tag-cloud-link")]').all();
  console.log('Total links on the page: ' + allLinksOnOtherPage.length);
  for (const link of allLinksOnOtherPage) {
    const linkText = await link.innerText();
    console.log('Link: ' + linkText);
  }
});


