// Alerts/popup handling

// "dialog" event is used to handle alerts, confirms, prompts

// page.on('dialog', function(dialog){
// })
// dialog.accept(argument) - to click on OK button
// dialog.dismiss() - to click on Cancel button
// dialog.message() - to get the text of the alert

import { test, expect } from '@playwright/test';

test('Handling alerts', async ({ page }) => {

    await page.goto("https://demoqa.com/alerts")

    // Handling simple alert

    const text = "Testing"

    page.on('dialog', (dialog)=>{
        console.log(dialog.message())
        dialog.accept(text)
    })
    await page.locator("#alertButton").click()
    await page.locator("#confirmButton").click()

    await expect(page.locator("#confirmResult")).toHaveText("You selected Ok")

    await page.locator("#promtButton").click()
    await expect(page.locator("#promptResult")).toHaveText(`You entered ${text}`)
})