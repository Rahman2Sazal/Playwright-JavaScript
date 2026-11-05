const {test, expect, devices} = require('@playwright/test');

test ('Locators', async ({ page }) => {
  await page.goto('https://demoblaze.com/');
  await expect(page).toHaveTitle('STORE');
  await page.locator('xpath=//*[@id="login2"]').click();
  await page.locator('css=#loginusername').fill("pavanol");
  await page.locator('css=#loginpassword').fill("test@123");
  await page.locator('css=#logInModal > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > button:nth-child(2)').click();
  
  const LogOut= await page.locator('xpath=//*[@id="logout2"]'); 
  await expect(LogOut).toBeVisible();
  console.log(LogOut ? 'Login is successful' : 'Login is unsuccessful');
  await page.waitForTimeout(5000);
});


