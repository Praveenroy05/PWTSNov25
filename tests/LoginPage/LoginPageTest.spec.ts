import {test, expect} from '@playwright/test'
import { LoginPage } from '../../pages/LoginPage'

const url = "https://rahulshettyacademy.com/client"
const email = "testnHNk@gmail.com"
const password = "Testing@1234"
const incorrectPassword = "Test"


let loginPage :LoginPage
test.beforeEach("Pre-condition for the test cases", async ({page})=>{
    loginPage = new LoginPage(page)
    await loginPage.launchURL(url)
})

test.describe("Login Page Test case", async ()=>{

    test("@smoke @regression Valid Login test", async ()=>{
        test.step(" Login into application", async()=>{
            await loginPage.loginIntoApplication(email, password)
        })
        test.step("Validate if the login is successful", async()=>{
            await expect(loginPage.homePageIdentifier).toBeVisible()

        })
    })

    test("invalid Login test", {tag : '@regression'}, async ()=>{
        await loginPage.invalidLogin(email, incorrectPassword)
        await expect(loginPage.errorMsg).toHaveText("Incorrect email or password.")
    })

})


