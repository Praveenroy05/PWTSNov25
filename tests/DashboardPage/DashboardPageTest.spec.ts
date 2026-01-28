import {test, expect} from '@playwright/test'
import { LoginPage } from '../../pages/LoginPage'
import { DashboardPage } from '../../pages/DashboardPage'


const url = "https://rahulshettyacademy.com/client"
const email = "testnHNk@gmail.com"
const password = "Testing@1234"
let productName = "iphone 13 pro"

test("Ddsdf", async ({page})=>{
    const lp = new LoginPage(page)
    const dp = new DashboardPage(page)
    await lp.launchURL(url)
    await lp.loginIntoApplication(email, password)
    await dp.searchAndAddToCart(productName)

})