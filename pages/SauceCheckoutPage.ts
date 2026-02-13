import { Locator, Page } from "playwright";

export class SauceCheckoutPage{
    page: Page
    firstName: Locator
    lastName: Locator
    postalCode: Locator
    continueBtn: Locator
    finishBtn: Locator
    orderCompleteMsg: Locator

    constructor(page: Page){
        this.page = page
        this.firstName = this.page.locator('#first-name')
        this.lastName = this.page.locator('#last-name')
        this.postalCode = this.page.locator('#postal-code')
        this.continueBtn = this.page.locator('#continue')
        this.finishBtn = this.page.locator('#finish')
        this.orderCompleteMsg = this.page.locator('.complete-header')
    }

    async fillCheckoutInformation(first:string, last:string, zip:string){
        await this.firstName.fill(first)
        await this.lastName.fill(last)
        await this.postalCode.fill(zip)
        await this.continueBtn.click()
    }

    async finishCheckout(){
        await this.finishBtn.click()
    }
}
