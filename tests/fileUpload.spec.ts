// setInputFiles("path of the file")
// setInputFiles(["",""])
import { test, expect } from '@playwright/test';
import path from 'path'


test("handling file uploads", async ({page})=>{
    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php")

    const filePath1 = path.join(__dirname, '../TestData/Courses.txt')
    const filePath2 = path.join(__dirname, '../TestData/Cypress.txt')

    await page.locator("#filesToUpload").setInputFiles([filePath1, filePath2])

    await expect(page.locator("#fileList li").first()).toHaveText("Courses.txt")
    await expect(page.locator("#fileList li").last()).toHaveText("Cypress.txt")

})