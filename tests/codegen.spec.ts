// Codegen - Record and Playback tool
// To open the codegen tool use the below command:
// npx playwright codegen <website url>
// Example:
// npx playwright codegen "https://practicetestautomation.com/practice-test-login/"

import { test, expect } from '@playwright/test';

test('Multiple windows handling by using Codegen', async ({ page }) => {

  await page.goto('https://demo.automationtesting.in/Windows.html');

  const page1Promise = page.waitForEvent('popup');

  await page.getByRole('button', { name: 'click' }).click();

  const page1 = await page1Promise;

  await page1.getByRole('link', { name: 'Downloads' }).click();
  await expect(page1.locator('#bindings')).toContainText('Selenium Clients');
  
  await page.getByRole('link', { name: 'Home' }).click();
  await expect(page.getByRole('textbox', { name: 'Email id for Sign Up' })).toBeVisible();
});


test("Handling multiple windows", async ({page})=>{
   await page.goto("https://demo.automationtesting.in/Windows.html")

   const page1 =  page.waitForEvent('popup') // Pending, Successful, Rejected

   await page.getByRole('button', { name: 'click' }).click();

   const newPage = await page1

  await newPage.getByRole('link', { name: 'Downloads' }).click();
  await expect(newPage.locator('#bindings')).toContainText('Selenium Clients');


  await page.bringToFront()
  
  await page.getByRole('link', { name: 'Home' }).click();
  await expect(page.getByRole('textbox', { name: 'Email id for Sign Up' })).toBeVisible();


})