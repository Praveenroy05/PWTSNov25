// spec: specs/ComprehensiveTestLoginPlan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test'
import { LoginPage } from '../../pages/LoginPage'

const url = 'https://practicetestautomation.com/practice-test-login/'
const username = 'student'
const password = 'Password123'

let loginPage: LoginPage

test.describe('Login Functionality Tests', () => {
  test('Positive Login Test', async ({ page }) => {
    loginPage = new LoginPage(page)
    await loginPage.launchURL(url)

    // 1. Open the login page
    // (covered by launchURL)

    // 2. Type username 'student' into Username field
    // 3. Type password 'Password123' into Password field
    // 4. Click the Submit button
    await loginPage.loginIntoApplication(username, password)

    // 5. Verify new page URL contains 'practicetestautomation.com/logged-in-successfully/'
    await expect(page).toHaveURL(/logged-in-successfully/)

    // 6. Verify new page contains expected text 'Congratulations' or 'successfully logged in'
    await expect(page.locator('text=Congratulations')).toBeVisible()

    // 7. Verify button 'Log out' is displayed on the new page
    await expect(page.locator('text=Log out')).toBeVisible()
  })
})
