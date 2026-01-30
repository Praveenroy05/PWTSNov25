import {test, expect} from '@playwright/test'
import { LoginPage } from '../../pages/LoginPage'
import data from '../../TestData/logindata.json'


let loginPage :LoginPage
test.beforeEach("Pre-condition for the test cases", async ({page})=>{
    loginPage = new LoginPage(page)
    await loginPage.launchURL(data.url)
})

test("Valid Login test", async ()=>{
    await loginPage.loginIntoApplication(data.email, data.password)
    await expect(loginPage.homePageIdentifier).toBeVisible()
})

test("invalid Login test", async ()=>{
    await loginPage.invalidLogin(data.email, data.incorrectPassword)
    await expect(loginPage.errorMsg).toHaveText("Incorrect email or password.")
})


let i = 10

let i1 = [10,20,30,40]


