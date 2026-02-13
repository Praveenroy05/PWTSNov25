import { Locator, Page } from "playwright";

export class SauceCartPage{
    page: Page
    cartItems: Locator
    checkoutBtn: Locator

    constructor(page: Page){
        this.page = page
        this.cartItems = this.page.locator('.cart_item')
        this.checkoutBtn = this.page.getByText('Checkout')
    }

    async clickCheckout(){
        await this.checkoutBtn.click()
    }
}
