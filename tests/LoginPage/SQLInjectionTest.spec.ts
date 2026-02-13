// spec: specs/ComprehensiveTestLoginPlan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test'
import { LoginPage } from '../../pages/LoginPage'

const url = 'https://practicetestautomation.com/practice-test-login/'
const username = 'student'
const sqlPayload = "' OR '1'='1"

let loginPage: LoginPage

test.describe('Login Functionality Tests', () => {
  test('SQL Injection Test', async ({ page }) => {
    loginPage = new LoginPage(page)
    await loginPage.launchURL(url)

    // 1. Open the login page

    // 2. Type username 'student' into Username field
    // 3. Type password ' OR '1'='1 into Password field
    // 4. Click the Submit button
    await loginPage.loginIntoApplication(username, sqlPayload)

    // 5. Verify error message is displayed
    await expect(loginPage.errorMsg).toBeVisible()

    // 6. Verify error message text is 'Your password is invalid!'
    await expect(loginPage.errorMsg).toHaveText('Your password is invalid!')
  })
})
