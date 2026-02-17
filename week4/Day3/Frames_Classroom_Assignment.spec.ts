import test from '@playwright/test'

test("Frames classroom Assignment" , async({page})=> {

    page.goto('https://www.w3schools.com/js/tryit.asp?filename=tryjs_prompt')

    page.on('dialog',alertType =>{
    const type = alertType.type()
    console.log(type)
    const msg = alertType.message()
    console.log(msg)
    //action
    if (type === 'prompt')
    {
        alertType.accept("Pavithra")

    }
        
   })

  await page.frameLocator("#iframeResult").locator("//button").click()
   await page.waitForTimeout(3000)

})