// Locators and methods related to Dashboard page

import { Locator, Page } from "playwright";

export class DashboardPage{
    
    page :Page
    products : Locator
    addToCartSuccMsg : Locator
    pdpProductName : Locator
    pdpProductPrice : Locator

    constructor(page: Page){
        this.page = page
        this.products = this.page.locator("div.card-body")
        this.addToCartSuccMsg = this.page.locator("#toast-container")
        this.pdpProductName = this.page.locator("div.container h2")
        this.pdpProductPrice = this.page.locator("div.container h3")
    }


    async searchAndAddToCart(productName:string){
        await this.products.first().waitFor()
        // count() - Which return the total number of matching elements with the locator
        const countOfProduct = await this.products.count() // 5 [0,1,2,3,4]

        for(let i=0; i<countOfProduct; i++){
            // Get the text value of all the producr one by one and compare if it is matching with IPhone 13 pro or not. If it is matching click on add to cart

            const productText = await this.products.nth(i).locator("h5").textContent() // 
            if(productText === productName){
                await this.products.nth(i).locator("button").last().click()
                break
            }
        }
    }


    async searchAndViewProductDetails(productName:string){
        await this.products.first().waitFor()
        const countOfProduct = await this.products.count() // 5 [0,1,2,3,4]

        for(let i=0; i<countOfProduct; i++){
            const productText = await this.products.nth(i).locator("h5").textContent() // 
            if(productText === productName){
                await this.products.nth(i).locator("button").first().click()
                break
            }
        }
    }
}