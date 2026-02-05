import {test, expect} from '@playwright/test'
import { LoginPage } from '../../pages/LoginPage'
import { DashboardPage } from '../../pages/DashboardPage'


const url = "https://rahulshettyacademy.com/client"
const email = "testnHNk@gmail.com"
const password = "Testing@1234"
let productName = "ZARA COAT 3"

let loginPage : LoginPage
let dashboardPage : DashboardPage
test.beforeEach(async ({page})=>{
    // Object creation of diff pages
    // launch the url
    // Login into application

    loginPage = new LoginPage(page)
    dashboardPage = new DashboardPage(page)
    await loginPage.launchURL(url)
    await loginPage.loginIntoApplication(email, password)
})

test("Validate user is able to add the product to the cart", {tag: '@smoke'}, async ()=>{
    await dashboardPage.searchAndAddToCart(productName)
    await expect(dashboardPage.addToCartSuccMsg).toHaveText("Product Added To Cart")
})

test("Validate if the user is able to view the product details",{tag : ['@smoke', '@regression']}, async()=>{
    await dashboardPage.searchAndViewProductDetails(productName)
    await expect(dashboardPage.pdpProductName).toHaveText(productName)
})



