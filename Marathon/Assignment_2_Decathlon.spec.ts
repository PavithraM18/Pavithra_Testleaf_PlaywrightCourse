import { expect ,test } from "@playwright/test"

test("Decathlon Assignment" ,async({page})=>{
    await page.goto("https://www.decathlon.in/")
    await page.waitForTimeout(2000)
    // Verify the user is navigated to the Decathlon home page
    await expect(page).toHaveURL(/decathlon\.in/)
    // Click on the Search icon on the home page
    const searchIcon =  page.getByText("Search for").first()
    await searchIcon.click()
    // Verify the search input field is enabled
    await page.locator("//input[contains(@placeholder,'Search For')]").isEnabled()
    // Enter the product name as "shoes" in the search field
    await page.locator("//input[contains(@placeholder,'Search For')]").fill("Shoes")
    // Press Enter to search the product
    await searchIcon.press('Enter')
    await page.waitForTimeout(2000)
    // Capture and print the page title in the console
    const title = await page.title()
    console.log('Page Title : ', title)
    await expect(page).toHaveTitle("Search | Shoes")
    // Click on the "Running" category filter
    await page.locator("//span[@class='aisRefinementListLabelText'][contains(.,'Running')]").click()
    // Click on the "Men" gender filter
     await page.locator("//span[@class='aisRefinementListLabelText'][contains(.,'Men')]").click()
    // Click on the shoe size filter "UK 10.5"
    await page.locator("//span[@class='aisRefinementListLabelText'][contains(.,'Uk 10.5')]").click()
    // Click on the Sort option
    await page.locator("//p[contains(@class,'py-2 pl-5 pr-9 cursor-pointer')]").click()
    await page.getByText("Price: High to Low").click()
    // Click on the first product from the displayed product list
    await page.locator("(//div[@class= 'algolia-clicks py-4 border-t border-grey-100 px-2 pb-2'])[1]").first().click()
    // Select the shoe size "UK 10.5 - EU 45" on the product detail page
    await page.getByText("UK 10.5 - EU 45").click()
    // Click on the "Add to Cart" button
    await page.locator("//span[.='ADD TO CART']").click()
    await page.waitForTimeout(2000)
    const successMsg = await page.locator(".pMeahS ").innerText()
    console.log("Success Message: ", successMsg)
    await page.waitForTimeout(3000)
     // Click on the Cart option
    await page.getByRole('link', { name: 'cart', exact: true }).click()
    
    // Fetch the total cart value
    const totalAMt = await page.locator("div[data-test-id='cart:cart-checkout-total-cart-value'] p").innerText()
   
    // Print the total cart amount in the console
    console.log("Total amount : ", totalAMt)

})
 