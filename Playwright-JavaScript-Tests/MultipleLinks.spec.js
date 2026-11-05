const {test, expect, devices} = require('@playwright/test');

test('LocateMultipleElements', async ({ page }) => {
  await page.goto('https://demoblaze.com/');
  await expect(page).toHaveTitle('STORE');  
  const allLinks = await page.locator('css=a').all();
  console.log('Total links on the page: ' + allLinks.length);
  for (let i = 0; i < allLinks.length; i++) {
    const linkText = await allLinks[i].innerText();
    console.log('Link ' + (i + 1) + ': ' + linkText);
  }

  console.log('Total links on the page: ' + allLinks.length);
    for (let i = 0; i < allLinks.length; i++) {
    const linkText = await allLinks[i].textContent();
    console.log('Link ' + (i + 1) + ': ' + linkText);
  }
});