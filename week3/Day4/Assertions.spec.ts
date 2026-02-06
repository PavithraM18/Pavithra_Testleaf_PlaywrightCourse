import test, { expect } from '@playwright/test'

//npx playwright test Assertion.spec.ts --debug
test("Assertion ",async({page})=>{

await page.goto("https://www.leafground.com/input.xhtml")

//hard assertion
/*await expect(page.getByPlaceholder("Babu Manickam")).toBeDisabled()
console.log("Disabled field assertion passed")*/

//soft assertion
await expect.soft(page.getByPlaceholder("Babu Manickam")).toBeDisabled()
console.log("Disabled field assertion passed")


//Non retrying assertion
let titleValue='Input components'
let expectedTitle=await page.title()
expect(expectedTitle).toEqual(titleValue)
console.log("Title assertion passed")


})