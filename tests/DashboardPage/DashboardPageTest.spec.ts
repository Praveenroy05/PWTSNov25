import {test, expect} from '@playwright/test'
import { LoginPage } from '../../pages/LoginPage'

let url = "https://google.com"

test("Ddsdf", async ({page})=>{
    const lp = new LoginPage(page)
    await lp.launchURL(url)
})