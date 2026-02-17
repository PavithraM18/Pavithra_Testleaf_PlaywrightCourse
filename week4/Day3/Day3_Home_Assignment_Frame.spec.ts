import test, { expect } from '@playwright/test'

test("Frames Home Assignment", async ({ page }) => {

    page.goto('https://leafground.com/frame.xhtml')
    //single frame
    const frame1 = page.frameLocator("(//iframe)[1]").locator("#Click")
    frame1.click()
    await page.waitForTimeout(2000)
    const frame1_text = await frame1.innerText()
    expect(frame1_text).toBe('Hurray! You Clicked Me.')
    //frame count
    console.log("Total frames in page:", page.frames.length)
    //nested frame
    const frame2 = page.frameLocator("(//iframe)[3]").frameLocator('#frame2').locator("#Click")
    frame2.click()
    await page.waitForTimeout(2000)
    const frame2_text = await frame2.innerText()
    expect(frame2_text).toBe('Hurray! You Clicked Me.')

})