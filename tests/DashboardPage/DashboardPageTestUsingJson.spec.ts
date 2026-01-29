import {test, expect} from '@playwright/test'
import { LoginPage } from '../../pages/LoginPage'
import { DashboardPage } from '../../pages/DashboardPage'
import data from '../../TestData/logindata.json'

let loginPage : LoginPage
let dashboardPage : DashboardPage
test.beforeEach(async ({page})=>{
    // Object creation of diff pages
    // launch the url
    // Login into application

    loginPage = new LoginPage(page)
    dashboardPage = new DashboardPage(page)
    await loginPage.launchURL(data.url)
    await loginPage.loginIntoApplication(data.email, data.password)
})

test("Validate user is able to add the product to the cart", async ()=>{
    await dashboardPage.searchAndAddToCart(data.productName)
    await expect(dashboardPage.addToCartSuccMsg).toHaveText("Product Added To Cart")
})

test("Validate if the user is able to view the product details", async()=>{
    await dashboardPage.searchAndViewProductDetails(data.productName)
    await expect(dashboardPage.pdpProductName).toHaveText(data.productName)
})

