const {test, expect} = require('@playwright/test');

test ('UsingCodeGen', async ({ page }) => {
await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
await page.getByRole('textbox', { name: 'Username' }).press('Tab');
await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
await page.getByRole('textbox', { name: 'Password' }).press('Enter');
await page.getByRole('link', { name: 'Leave' }).click();
await page.locator('.oxd-icon.bi-calendar').first().click();
await page.getByRole('textbox', { name: 'yyyy-dd-mm' }).first().click();
await page.getByRole('textbox', { name: 'yyyy-dd-mm' }).first().fill('2026-15-11');
await page.getByRole('textbox', { name: 'yyyy-dd-mm' }).nth(1).click();
await page.getByRole('textbox', { name: 'yyyy-dd-mm' }).nth(1).fill('2026-18-12');
await page.getByText('-- Select --').first().click();
await page.locator('.oxd-icon.bi-caret-up-fill.oxd-select-text--arrow').click();
await page.getByText('-- Select --').nth(1).click();
await page.getByText('-- Select --').nth(1).click();
await page.getByRole('button', { name: 'Search' }).click();
await page.getByRole('textbox', { name: 'yyyy-dd-mm' }).first().click();
await page.getByRole('textbox', { name: 'yyyy-dd-mm' }).first().click();
await page.getByRole('textbox', { name: 'yyyy-dd-mm' }).first().click();
await page.getByRole('textbox', { name: 'yyyy-dd-mm' }).first().fill('2025-01-01');
await page.getByRole('textbox', { name: 'yyyy-dd-mm' }).nth(1).click();
await page.getByRole('textbox', { name: 'yyyy-dd-mm' }).nth(1).fill('2026-31-12');
await page.getByRole('button', { name: 'Search' }).click();
await page.getByRole('button', { name: 'Search' }).click();
const errormessage = await page.locator('#oxd-toaster_1').getByText('No Records Found');
await expect(errormessage).toBeVisible();
if (errormessage){
    console.log("Test successful");
}

});