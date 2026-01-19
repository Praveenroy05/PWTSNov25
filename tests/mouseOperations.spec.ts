// Mouse Operations

// click - click()
// right click - click({button:'right'})
// double click - dblclick()
// scroll down - scrollIntoViewIfNeeded()
// Mouse Hover - hover()
// Drag and Drop - SourceLocator.dragTo(TargetLocation)

import {test, expect} from '@playwright/test'

test("Double click and right click operations", async ({page})=>{
     
    await page.goto("https://demo.guru99.com/test/simple_context_menu.html")

    //Double click - dblclick() - double click on an element
    await page.getByText("Double-Click Me To See Alert", {exact:true}).dblclick()

    // Right click() - Right click on an element
    await page.getByText("right click me", {exact: true}).click({button:'right'})
    await expect(page.getByText("Delete", {exact:true})).toBeVisible()
    await page.getByText("Delete", {exact:true}).click()

    // Note : Playwright auto handles the alert/popup. "dialog" event refers to alert
})

test("Scrolling  on the page", async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.getByText("Download Files").scrollIntoViewIfNeeded()
    await page.getByText("Download Files").click()
    await expect(page).toHaveURL("https://testautomationpractice.blogspot.com/p/download-files_25.html")

})

test("Mouse over on an element", async ({page})=>{
    await page.goto("https://www.spicejet.com/")

    await page.getByText("Travel Policies", {exact:true}).hover({timeout: 60000})
    await page.waitForTimeout(2000)
    await expect(page.getByTestId("test-id-Baggage Information")).toBeVisible()
    

})

test("Handling Drag and drop", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    const sourceElement = page.locator("div#draggable")
    const targetElement = page.locator("div#droppable")

    // sourceElement.dragTo(targetElement)
    await sourceElement.dragTo(targetElement)
    await expect(page.locator("div#droppable p")).toHaveText("Dropped!")
})