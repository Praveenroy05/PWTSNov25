import {test, expect} from '@playwright/test'
import { LoginPage } from '../../pages/LoginPage'
import { DashboardPage } from '../../pages/DashboardPage'
import datas from '../../TestData/datadriven.json'
//console.log(datas);

let loginPage : LoginPage
let dashboardPage : DashboardPage
test.beforeEach(async ({page})=>{
    loginPage = new LoginPage(page)
    dashboardPage = new DashboardPage(page)
})

for(let product of datas){
    test(`Add the product to the cart for ${product.productName}`, async ()=>{
        await loginPage.launchURL(product.url)
        await loginPage.loginIntoApplication(product.email, product.password)
        await dashboardPage.searchAndAddToCart(product.productName)
        await expect(dashboardPage.addToCartSuccMsg).toHaveText("Product Added To Cart")
    })
}

/*

const data  = 

[
  {
    url: 'https://rahulshettyacademy.com/client',
    email: 'testnHNk@gmail.com',
    password: 'Testing@1234',
    productName: 'ZARA COAT 3'
  },
  {
    url: 'https://rahulshettyacademy.com/client',
    email: 'testnHNk@gmail.com',
    password: 'Testing@1234',
    productName: 'ADIDAS ORIGINAL'
  },
  {
    url: 'https://rahulshettyacademy.com/client',
    email: 'testnHNk@gmail.com',
    password: 'Testing@1234',
    productName: 'iphone 13 pro'
  }
]

// const num = [10,20,30]
// console.log(num[0]);
// console.log(data[0].productName);

for(let product of data){
    console.log(product.productName);
}

*/


// Playwright Agent - 
// API Testing


