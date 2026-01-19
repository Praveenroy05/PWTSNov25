import {test, expect} from '@playwright/test'

// screenshot of the page
// screenshot of an element
// screenshot of the full page

test("Screenshot of the page", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.screenshot({path: 'screenshots/page.png'})
})

test("Screenshot of an element", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.getByPlaceholder("Enter Name").screenshot({path: 'screenshots/element.png'})
})

test("Screenshot of full page", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.screenshot({path: 'screenshots/fullPage.png', fullPage:true})
})