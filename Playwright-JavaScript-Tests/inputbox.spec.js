
const {test, expect, devices} = require('@playwright/test');


test ('handle inputbox', async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    //Asserstions
    await expect (page.locator('#name')).toBeVisible();
    await expect (await page.locator('#email')).toBeEnabled();
    await expect (await page.locator('#phone')).toBeEditable();
    await expect (await page.locator('#textarea')).toBeEmpty();
    await page.waitForTimeout (2000);

    //using inputs
    await page.locator('#name').fill("Mahfuzur")
    await page.locator('#email').fill("abc@examlple.com");
    await page.locator('#phone').fill("0123456789");
    await page.locator('#textarea').fill("France");
    await page.waitForTimeout (2000);

    //radio button
    await page.locator('#female').check()

    if (await page.locator('#female').isChecked()) 
       console.log('Checked'); 
    else 
        console.log('Not checked');
        

    await page.locator('#tuesday').check();
    await expect(page.locator('#tuesday')).toBeChecked() ;
    if (await page.locator('#tuesday').isChecked()) 
        console.log('Multiselect is Checked'); 
    else 
        console.log('Multiselect is Not checked');

    const checkboxlocators= ['#monday', '#tuesday', '#wednesday']

    for ( const locators of checkboxlocators)
        await page.locator(locators).check();

});
