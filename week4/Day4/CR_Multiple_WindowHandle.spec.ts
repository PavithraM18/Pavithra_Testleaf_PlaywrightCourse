import test from '@playwright/test'


test("Multiple Window Handleing",async({page,context})=>{

    await page.goto("https://www.leafground.com/window.xhtml")
    const parentWindow=context.waitForEvent('page')
    await page.locator("//span[text()='Open']").click()    
    const childwindow=await parentWindow

    await childwindow.locator("#message").fill('sample data')
    await page.waitForTimeout(3000)
    childwindow.close()

    await page.waitForTimeout(3000)
    await page.locator("//span[text()='Open Multiple']").click()


})