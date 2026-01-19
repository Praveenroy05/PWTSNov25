// Drop down

// There are always 2 types of DD

// 1. Static Drop Down - The value will never change
      // a. Single select DD
      // b. Multi select DD
// 2. Dynamic drop down - The value will be changable
      // a. Single select DD
      // b. Multi select DD


// Development of a drop down element

// 1. <select> tag
// 2. NON <select> - div, li, ul,....


// 1. DD developed using <select> tag
// Step by step process to select the value from the DD

// 1. Launch the url
// 2. Locate the drop down element by writing the locator
// 3. Get the value from the drop down by using - selectOption("AS" or {label or value or index}) - This method by default accept the "value" attribute of the element inside the DD. 
// Example - page.locator("#dd").selectOption("AS") or page.locator("#dd").selectOption({label : 'Afganistan'}) or page.locator("#dd").selectOption({index : 10})
// 4. If the drop down is multi select - selectOption(["AS", "AF", "BS"])
// selectOption([{label :'India'}, {label :'USA'}, {index : 20}])


//**************************************************************** */

// 1. DD developed using NON <select> tag
// Step by step process to select the value from the DD

// 1. Launch the url
// 2. Locate the drop down element by writing the locator
// 3. Click on the drop down element identified in the step #2
// 4. Identify and click on the element that you want to select from the drop down


import {test, expect} from '@playwright/test'

test("Drop down developed using SELECT tag handling", async ({page})=>{

    await page.goto("https://practice.expandtesting.com/dropdown")

    // selectOption() - Selects option or options in <select>.
    await page.locator("#country").selectOption("AR") // Default value attribute
    await page.locator("#country").selectOption({value : 'FI'})
    await page.locator("#country").selectOption({label : 'Bermuda'})
    await page.locator("#country").selectOption({index : 150})

    await page.goto("https://demoqa.com/select-menu")
    await page.locator("#cars").selectOption(['volvo', "opel"])
    await page.waitForTimeout(2000)
    await page.locator("#cars").selectOption([{label :'Saab'}, {index :3}, {value : 'volvo'}])
    await page.waitForTimeout(2000)

    await page.goBack()
    await page.goForward()

})

test("Drop down developed using SELECT tag handling using browser fixture", async ({browser})=>{

    const context= await browser.newContext() 
    const page  = await context.newPage() 

    await page.goto("https://practice.expandtesting.com/dropdown")

    // selectOption() - Selects option or options in <select>.
    await page.locator("#country").selectOption("AR") // Default value attribute
    await page.locator("#country").selectOption({value : 'FI'})
    await page.locator("#country").selectOption({label : 'Bermuda'})
    await page.locator("#country").selectOption({index : 150})

    const page1  = await context.newPage() 
    await page1.goto("https://demoqa.com/select-menu")
    await page1.locator("#cars").selectOption(['volvo', "opel"])
    await page1.waitForTimeout(2000)
    await page1.locator("#cars").selectOption([{label :'Saab'}, {index :3}, {value : 'volvo'}])
    await page1.waitForTimeout(2000)

    await page.goBack()
    await page.goForward()

})

test("Drop down developed using non SELECT tag handling", async ({page})=>{
    await page.goto("https://demoqa.com/select-menu")
    await page.locator("#withOptGroup").click()
    await page.getByText("Another root option", {exact : true}).click()

    // first() - Identify the first matching element with the locator
    // last() - Identify the last matching element with the locator
    // nth(index) - Identify the index+1 matching element with the locator. index starts with 0
    await page.locator("div.css-1hwfws3").last().click()
    await page.locator("#react-select-4-option-0").click()
    await page.getByText("Black", {exact: true}).last().click()

    await page.waitForTimeout(2000)


})