import { Locator, Page } from "playwright";

export class SauceLoginPage{
    page: Page
    username: Locator
    password: Locator
    loginBtn: Locator

    constructor(page: Page){
        this.page = page
        this.username = this.page.locator('#user-name')
        this.password = this.page.locator('#password')
        this.loginBtn = this.page.locator('#login-button')
    }

    async launchURL(url: string){
        await this.page.goto(url)
    }

    async loginIntoApplication(username: string, password: string){
        await this.username.fill(username)
        await this.password.fill(password)
        await this.loginBtn.click()
    }
}
