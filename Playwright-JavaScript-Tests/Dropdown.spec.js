
const {test, expect, devices} = require('@playwright/test');


test ('handleDropdown', async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.locator('#cookieChoiceDismiss').waitFor({ state: 'visible' });
    await page.locator('#cookieChoiceDismiss').click();

    //selecting any options
    const country1= await page.locator("#country").selectOption({value: 'india'});
    console.log(country1);
    const country2= await page.locator("#country").selectOption({index: 1});
    console.log(country2);
    const country3= await page.locator("#country").selectOption('United Kingdom');
    console.log(country3);
    const country4= await page.locator("#country").selectOption({label: 'Germany'});
    console.log(country4);

   const countryList = await page.locator('#country option').allTextContents();
   for (const country1 of countryList){
        console.log(country1.trim());
   }
    for (const country2 of countryList){
       const specificCountry= country2.trim();
        if (specificCountry=='France')
        {
            console.log(specificCountry)
            break;
        }
   };
 
});