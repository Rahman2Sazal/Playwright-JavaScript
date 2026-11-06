const {test, expect, devices} = require('@playwright/test');


/* page.getByAltText('Store').click(); //to locate items (usually images) by their alt text
page.geyByPlaceholder('Username').fill('myusername'); //to locate input fields by their placeholder text
page.getByRole('button', { name: 'Submit' }).click(); //to locate buttons by their role and name
page.getByText('Welcome').click(); //to locate elements by their visible text
page.getByTitle('My Title').click(); //to locate elements by their title attribute
page.getByLabel('Email').fill('myemail@example.com'); //to locate input fields by their label
page.getByTestId('my-element').click(); //to locate elements by their test ID
*/

test ('Builtin Locators', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    const Logo= await page.getByAltText('company-branding');
    await expect(Logo).toBeVisible();
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button', {type: "submit"}).click();

    const EmpName= await page.locator('xpath=//html/body/div/div[1]/div[1]/header/div[1]/div[3]/ul/li/span/p').textContent();

    await expect(await page.getByText(EmpName)).toBeVisible();
    console.log('The employee name is '+ EmpName);




});

