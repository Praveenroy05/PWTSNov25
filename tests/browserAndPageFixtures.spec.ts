// browser(1%) - page(99%)
// Built-in fixtures - browser, page - setup and tear down
// browser  - Browser
// page - Represent a single tab or page within a browser


import {test, expect} from '@playwright/test'

test("Browser Fixture", async ({browser})=>{
    const context= await browser.newContext() // Browser context will be created
    const page  = await context.newPage() // Create a page on the browser context
    await page.goto("https://google.com")
    const page1 = await context.newPage()
    await page1.goto("https://facebook.com")

    const context1= await browser.newContext() 
    const newPage = await context1.newPage()
    await newPage.goto("https://linkedin.com")



    await page.waitForTimeout(3000)
})

test("Page Fixture", async ({page})=>{
    
})


// Difference between browser and page fixture
// 1. page fixture will auto launch the browser and creates a single page on the browser whereas browser fixture requires a couple of line ofcode initialte the browser and creates a page on that browser to work with.

// 2. page fixture represents a single page on the browser whereas using browser fixture you can create multiple pages on the same browser or you can create multiple browsers as well.