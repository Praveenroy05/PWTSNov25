import {test, expect} from '@playwright/test'
import { LoginPage } from '../../pages/LoginPage'

const url = "https://rahulshettyacademy.com/client"
const email = "testnHNk@gmail.com"
const password = "Testing@1234"
const incorrectPassword = "Test"

test("Valid Login test", async ({page})=>{
    const loginPage = new LoginPage(page)
    await loginPage.launchURL(url)
    await loginPage.loginIntoApplication(email, password)
    await expect(loginPage.homePageIdentifier).toBeVisible()
})

test("invalid Login test", async ({page})=>{
    const loginPage = new LoginPage(page)
    await loginPage.launchURL(url)
    await loginPage.invalidLogin(email, incorrectPassword)
    await expect(loginPage.errorMsg).toHaveText("Incorrect email or password.")
})


