import { test, expect } from '@playwright/test'
import { SauceLoginPage } from '../../pages/SauceLoginPage'
import { SauceProductsPage } from '../../pages/SauceProductsPage'
import { SauceCartPage } from '../../pages/SauceCartPage'
import { SauceCheckoutPage } from '../../pages/SauceCheckoutPage'

const url = 'https://www.saucedemo.com/'
const username = 'standard_user'
const password = 'secret_sauce'
const productName = 'Sauce Labs Backpack'

let loginPage: SauceLoginPage
let productsPage: SauceProductsPage
let cartPage: SauceCartPage
let checkoutPage: SauceCheckoutPage

test.beforeEach(async ({ page }) => {
  loginPage = new SauceLoginPage(page)
  productsPage = new SauceProductsPage(page)
  cartPage = new SauceCartPage(page)
  checkoutPage = new SauceCheckoutPage(page)

  await loginPage.launchURL(url)
  await loginPage.loginIntoApplication(username, password)
})

test('Complete order flow for Sauce Labs Backpack', async ({ page }) => {
  await productsPage.addProductToCart(productName)
  await productsPage.openCart()
  await cartPage.clickCheckout()

  const first = 'First' + Math.floor(Math.random() * 10000)
  const last = 'Last' + Math.floor(Math.random() * 10000)
  const zip = '1' + Math.floor(Math.random() * 90000)

  await checkoutPage.fillCheckoutInformation(first, last, zip)
  await checkoutPage.finishCheckout()

  await expect(checkoutPage.orderCompleteMsg).toHaveText(/Thank you for your order/i)
})

// Playwright - Agent
