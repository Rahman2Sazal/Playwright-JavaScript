const {test, expect, devices} = require('@playwright/test');

test('Checking Title', async ({ page }) => {
  await page.goto('https://demoblaze.com/');
  await expect(page).toHaveTitle('STORE');
  await page.waitForTimeout(5000); // wait 5 seconds
  const title=await page.title();
  console.log('Title is: ' + title);
  if (title === 'STORE') {
  console.log('Title is correct');
  }
  else {
  console.log('Title is incorrect');
  }
});