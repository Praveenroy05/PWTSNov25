// spec: specs/ComprehensiveTestLoginPlan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test'
import { LoginPage } from '../../pages/LoginPage'

const url = 'https://practicetestautomation.com/practice-test-login/'
const username = 'student'
const longPassword = 'P'.repeat(255)

let loginPage: LoginPage

test.describe('Login Functionality Tests', () => {
  test('Boundary Password Length Test', async ({ page }) => {
    loginPage = new LoginPage(page)
    await loginPage.launchURL(url)

    // 1. Open the login page

    // 2. Type username 'student' into Username field
    // 3. Type password with 255 characters into Password field
    // 4. Click the Submit button
    await loginPage.loginIntoApplication(username, longPassword)

    // 5. Verify error message is displayed
    await expect(loginPage.errorMsg).toBeVisible()

    // 6. Verify error message text is 'Your password is invalid!'
    await expect(loginPage.errorMsg).toHaveText('Your password is invalid!')
  })
})
