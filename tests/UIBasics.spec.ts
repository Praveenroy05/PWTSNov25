import {test, expect} from '@playwright/test'

test("Fill and validate the textbox", async function({page}){
    // goto the url
    // fill the username
    // Validate if the username has been entered successfully
    // fill the password
    // Validate of the password has been entered successfully
    // click on the submit button

    // goto("url") - This method perform the launching of the url on the browser
    // fill('value') - set the value in the input field

    // toHaveValue("value") - Ensures the Locator points to an element with the given input value. It will ONLY work for input field or textbox.
    // click() - Click on an element

    // toHaveText("Exact text value of an element")
    // toBeVisible() - Ensure that the element is visible on the pgae

    await page.goto("https://practicetestautomation.com/practice-test-login/")
    await page.locator("input#username").fill("student")
    await expect(page.locator('input#username')).toHaveValue("student")
    await page.locator("input#password").fill("Password123")
    await expect(page.locator('input#password')).toHaveValue("Password123")
    await page.getByRole('button', {name:'Submit'}).click()
    await expect(page.locator("h1.post-title")).toHaveText("Logged In Successfully")
    await expect(page.locator("h1.post-title")).toContainText("Successfully")
    await expect(page.getByText("Log out")).toBeVisible()

})

test("Handling radio button and checkbox", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    // click()
    // check() - Ensure that checkbox or radio element is checked.
    // uncheck() - Ensure that checkbox or radio element is unchecked.

    await page.getByRole('radio', {name:'Female'}).check()
    await expect(page.getByRole('radio', {name:'Female'})).toBeChecked()

    await page.getByRole('checkbox', {name:'Tuesday'}).check()
    await expect(page.getByRole('checkbox', {name:'Tuesday'})).toBeChecked()
    await page.getByRole('checkbox', {name:'Tuesday'}).uncheck()
    await expect(page.getByRole('checkbox', {name:'Tuesday'})).not.toBeChecked()

    await page.locator("#saturday").check()
    await page.waitForTimeout(3000)
    // strict mode violation - Locator is not unique

})


test("Get text from an element", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    // textContent() - Retrun the text value from an element including the hidden element
    // innerText() - Return the text value only from visible element
    
    const text = await page.locator("h1.title").textContent()
    const innerText = await page.locator("h1.title").innerText()
    await expect(text).toContain("Automation Testing Practice")
    
    await expect(page.locator("h1.title")).toContainText("Automation Testing Practice")
    console.log(text)
    console.log(innerText);
})

test("Get text from multiple elements", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    // allTextContents()
    // allInnerTexts()
    const allTexts = await page.locator("h2.title").allTextContents()
    console.log(allTexts);
})

