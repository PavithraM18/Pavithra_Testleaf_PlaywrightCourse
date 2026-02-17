/* https://www.leafground.com/alert.xhtml
page.once -> 
type, message
1st confirm alert -> accept
2nd prompt alert -> autodismiss

page.on->
type , message
1st confirm alert -> accept
2nd prompt alert -> accept("Message")

sweet:
Sweet Alert (Confirmation)
click on yes button */

import test from "@playwright/test"
//page.once
test("Using page.once concept ", async ({ page }) => {

    await page.goto("https://www.leafground.com/alert.xhtml")
    page.once('dialog',alertType =>{
    const type = alertType.type()
    console.log(type)
    const msg = alertType.message()
    console.log(msg)
    alertType.accept()
   })
   await page.locator("//h5[contains(.,'Alert (Confirm Dialog)')]/following-sibling::button").click()
   await page.waitForTimeout(3000)
   await page.locator("//h5[contains(.,'Alert (Prompt Dialog)')]/following-sibling::button").click()
   await page.waitForTimeout(3000)

})

//page.on 
test("Using page.on concept ", async ({ page }) => {

    await page.goto("https://www.leafground.com/alert.xhtml")
    page.on('dialog',alertType =>{
    const type = alertType.type()
    console.log(type)
    const msg = alertType.message()
    console.log(msg)
    //action
    if (type === 'confirm'){
        alertType.accept()
    }
    else if (type === 'prompt')
    {
        alertType.accept("message")
    }
        
   })
   await page.locator("//h5[contains(.,'Alert (Confirm Dialog)')]/following-sibling::button").click()
   await page.waitForTimeout(3000)
   await page.locator("//h5[contains(.,'Alert (Prompt Dialog)')]/following-sibling::button").click()
   await page.waitForTimeout(3000)

})
//sweet alert
test("Using sweet alert concept ", async ({ page }) => {

    await page.goto("https://www.leafground.com/alert.xhtml")
   
   await page.locator("//h5[contains(.,'Sweet Alert (Confirmation)')]/following-sibling::button").click()
   await page.waitForTimeout(3000)
   await page.locator(".ui-confirmdialog-yes").click()
   await page.waitForTimeout(3000)

})