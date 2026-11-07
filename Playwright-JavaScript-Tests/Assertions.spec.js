const {test, expect, devices} = require('@playwright/test');


/*Top 10 assertions
1. expect (page).toHaveURL()                > Page has URL
2. expect (page).toHaveTitle()              > Page has title
3. expect (locator).toBeVisible()           > Element is Visible
4. expect (locator).toBeEnabled()           > Element is Enabled
5. expect (locator).toBeDisabled()          > Element is Disabled
6. expect (locator).toHaveAttribute()       > Element have attribute
7. expect (locator).toHaveText()            > Element have text
8. expect (locator).toBeChecked()           > Radio/checkbox is checked
9. expect (locator).toContainText(Text)     > Element has specific text
10. expect (locator).toHaveValue(Value)     > Input has a value
11. expect (locator).toHaveCount()          > List of elements have given length
*/


test ('Assertions', async({page}) => {
    await page.goto('https://demo.nopcommerce.com/register');
    await page.locator('iframe[src="https://challenges.cloudflare.com/cdn-cgi/challenge-platform/h/b/turnstile/f/av0/rch/96qrk/0x4AAAAAAADnPIDROrmt1Wwj/light/fbE/new/normal?lang=auto"]').contentFrame().locator('body').click();
    

    
});


