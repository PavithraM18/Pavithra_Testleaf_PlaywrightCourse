import test, { expect } from '@playwright/test'

test("Alert Home Assignment" , async ({page}) =>{
    await page.goto('https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm')
    page.on('dialog',alertType =>{
     
    console.log('Type: ' , alertType.type())
    console.log('Message: ',alertType.message())
    alertType.accept()
    
   })

   const frame = page.frameLocator("#iframeResult")
   frame.locator("//button").click()
   await page.waitForTimeout(3000)
   const text = await frame.locator("#demo").innerText()
   expect(text).toEqual("You pressed OK!")

})