const {test, expect} = require('@playwright/test');

test ('Assertions', async({page}) => {
    await page.goto('https://www.saucedemo.com/');
//Top 10 assertions
//1. expect (page).toHaveURL()                > Page has URL
await expect.soft(page).toHaveURL('https://www.saucedqqemo.com/');
//2. expect (page).toHaveTitle()              > Page has title
await expect(page).toHaveTitle('Swag Labs');
//3. expect (locator).toBeVisible()           > Element is Visible
//4. expect (locator).toBeEnabled()           > Element is Enabled
//5. expect (locator).toBeDisabled()          > Element is Disabled
//6. expect (locator).toHaveAttribute()       > Element have attribute
//7. expect (locator).toHaveText()            > Element have text
//8. expect (locator).toBeChecked()           > Radio/checkbox is checked
//9. expect (locator).toContainText(Text)     > Element has specific text
//10. expect (locator).toHaveValue(Value)     > Input has a value
//11. expect (locator).toHaveCount()          > List of elements have given length
 

    
});  

