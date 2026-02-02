import {test, expect} from '@playwright/test'
import { LoginPage } from '../../pages/LoginPage'
import { DashboardPage } from '../../pages/DashboardPage'
import { ExcelUtils } from '../../utils/ExcelUtils'
import path from 'path'

const filePath = path.join(__dirname, "../../TestData/excel.xlsx")
const sheetName = "Login"

let datas
try{
   datas = ExcelUtils.getDataFromExcel(filePath, sheetName)
}
catch(error){
  console.log(error);
}



let loginPage : LoginPage
let dashboardPage : DashboardPage
test.beforeEach(async ({page})=>{
    loginPage = new LoginPage(page)
    dashboardPage = new DashboardPage(page)
})

for(let product of datas){
    test(`Add the product to the cart for ${product.productName}`, async ()=>{
        await loginPage.launchURL(product.url)
        await loginPage.loginIntoApplication(product.username, product.password)
        await dashboardPage.searchAndAddToCart(product.productName)
        await expect(dashboardPage.addToCartSuccMsg).toHaveText(product.cartSuccessMsg)
        
    })
}



// 1. Install xlsx library - npm install --dev-save xlsx


