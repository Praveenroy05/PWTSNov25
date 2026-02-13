// spec: specs/ComprehensiveTestLoginPlan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test'
import { LoginPage } from '../../pages/LoginPage'

const url = 'https://practicetestautomation.com/practice-test-login/'
const longUsername = 'a'.repeat(255)
const password = 'Password123'

let loginPage: LoginPage

test.describe('Login Functionality Tests', () => {
  test('Boundary Username Length Test', async ({ page }) => {
    loginPage = new LoginPage(page)
    await loginPage.launchURL(url)

    // 1. Open the login page

    // 2. Type username with 255 characters into Username field
    // 3. Type password 'Password123' into Password field
    // 4. Click the Submit button
    await loginPage.loginIntoApplication(longUsername, password)

    // 5. Verify error message is displayed
    await expect(loginPage.errorMsg).toBeVisible()

    // 6. Verify error message text is 'Your username is invalid!'
    await expect(loginPage.errorMsg).toHaveText('Your username is invalid!')
  })
})
