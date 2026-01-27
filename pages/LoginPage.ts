// Locators related to Login page and methods related to login page

import { Locator, Page } from "playwright";


// username - page.locator("#username")
// password
// loginBtn

// loginIntoApplication()
// invalidLogin()


export class LoginPage{

    // Locators related to Login Page only
    page : Page
    username : Locator
    password : Locator
    loginBtn : Locator
    errorMsg : Locator
    homePageIdentifier : Locator


    // Constructor - initializing the variables

    constructor(page:Page){
        this.page = page
        this.username = this.page.getByPlaceholder("email@example.com")
        this.password = this.page.getByPlaceholder("enter your passsword")
        this.loginBtn = this.page.locator("#login")
        this.errorMsg = this.page.locator("#toast-container")
        this.homePageIdentifier = this.page.locator("[routerlink='/dashboard/myorders']")
    }
    

    // Methods related to Login Page

    async launchURL(url:string){
        await this.page.goto(url)
    }

    async loginIntoApplication(username:string, password:string){
        await this.username.fill(username)
        await this.password.fill(password)
        await this.loginBtn.click()
    }

    async invalidLogin(username:string, incorrectPassword:string){
        await this.username.fill(username)
        await this.password.fill(incorrectPassword)
        await this.loginBtn.click()
    }





}





