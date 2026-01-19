// Frames - 


/*

abc.com
<html> - page
    <body>
       <iframe src="frame.html" name="frame1"> - const fp = page.frameLocator('iframe') - frame
                <html>  </html> - fp.locator()
       </iframe>
    </body>
    ..... - page.locator()
</html>


google.com
<html>
  <html> </html>
</html>


*/


import { test, expect } from '@playwright/test';

test('Handling frames', async ({ page }) => {

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
    await page.locator("#checkBoxOption1").check()

    // frameLocator() - It help us in terms of entering inside the iframe and then using that variable where we store the framelocator we can access and perform the validations or actions inside that iframe

    const framePage = await page.frameLocator("#courses-iframe")

    await framePage.getByText("All Access plan").first().click()
    await expect(framePage.locator(".inner-box h1")).toHaveText("All Access Subscription")

    await page.locator("[value='radio2']").check()


})