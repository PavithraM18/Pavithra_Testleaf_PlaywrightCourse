import test from "@playwright/test"

test("Select Tag", async ({ page }) => {

  await page.goto("https://www.telerik.com/contact")

  await page.selectOption("[name= 'DropdownListFieldController_0']", {label: 'Account activation'})

  await page.selectOption("[name = 'DropdownListFieldController']", { index: 5})

  await page.selectOption("[title= 'Country dropdown']", { value: 'Antarctica'})
 
  await page.waitForTimeout(2000)  

})