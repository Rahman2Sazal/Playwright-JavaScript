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

  //collecting all procucts on the phone page
  await page.locator('text=Phones').click();
  await page.locator('css=.card-title').first().waitFor({state: 'visible'});
 /* await expect(page.locator('css=.card-title').first()).toBeVisible();
  this line above creates same results again and again*/
  await page.waitForTimeout(1000);
  const allPhones = await page.locator('css=.card-title').all();
  console.log('Total products on the page: ' + allPhones.length);
  for (const Phone of allPhones) {
    const PhoneText = await Phone.innerText();
    console.log('Product: ' + PhoneText);
    
  }
  

  console.log('================================ =====================================');

  //collecting all procucts on the page
  await page.locator('text=Laptops').click();
  await page.locator('css=.card-title').first().waitFor({state: 'visible'})
  await page.waitForTimeout(1000);
  /* await expect(page.locator('css=.card-title').first()).toBeVisible();
  this line above creates same results again and again*/
  const allLaptops = await page.locator('css=.card-title').all();
  console.log('Total products on the page: ' + allLaptops.length);
  for (const Laptop of allLaptops) {
    const LaptopText = await Laptop.innerText();
    console.log('Product: ' + LaptopText);
  }

  console.log('================================ =====================================');

  //collecting all procucts on the page
  await page.locator('text=Monitors').click();
  await page.locator('css=.card-title').first().waitFor({state: 'visible'})
  await page.waitForTimeout(1000);
  /* await expect(page.locator('css=.card-title').first()).toBeVisible();
  this line above creates same results again and again*/

  const allMonitors = await page.locator('css=.card-title').all();
  console.log('Total products on the page: ' + allMonitors.length);
  for (const Monitor of allMonitors) {
    const MonitorText = await Monitor.innerText();
    console.log('Product: ' + MonitorText);
  }
  await page.waitForTimeout(2000);
});




