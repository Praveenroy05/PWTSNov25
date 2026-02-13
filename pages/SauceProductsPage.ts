import { Locator, Page } from "playwright";

export class SauceProductsPage{
    page: Page
    inventoryItems: Locator
    cartIcon: Locator

    constructor(page: Page){
        this.page = page
        this.inventoryItems = this.page.locator('.inventory_item')
        this.cartIcon = this.page.locator('.shopping_cart_link')
    }

    async addProductToCart(productName: string){
        await this.inventoryItems.first().waitFor()
        const count = await this.inventoryItems.count()
        for(let i=0;i<count;i++){
            const name = await this.inventoryItems.nth(i).locator('.inventory_item_name').textContent()
            if(name && name.trim() === productName){
                await this.inventoryItems.nth(i).locator('button').click()
                break
            }
        }
    }

    async openCart(){
        await this.cartIcon.click()
    }

}
