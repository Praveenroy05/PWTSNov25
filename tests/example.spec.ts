// Playwright is having auto wating feature by default before every action
// By default waiting time of 30 seconds is given

import {test, expect} from '@playwright/test';

test("title", function(){

})


// async await

test('get started link',  async ({ page }) => {
   await page.goto("https://practicetestautomation.com/practice-test-login/")
   await page.locator("input#username").fill("student")
   await page.locator("input[name='password']").fill("Password123")
   await page.locator("button.btn").click()
   await expect(page.locator("h1.post-title")).toHaveText("Logged In Successfully")
   //page.getByRole()

  /*
  1. Launch the url
  2. Fill the username
  3. Fill the password
  4. Click on the login button
  5. Verify the login is successful or not

  */

  //Note : await means to wait for completion of the step and then only move to the next step, it is not working as waiting for an element to display on the page. Waiting for element to display on the page will be taken care by Playwright auto wait.
});

// JS /TS are asynchronous in nature

