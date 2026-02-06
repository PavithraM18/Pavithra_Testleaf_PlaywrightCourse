import {test,expect} from "@playwright/test"

test("CR_Assignment: Create Opportunity", async ({ page }) => {

    //Login into URL
    await page.goto("https://login.salesforce.com/")
    await page.locator("#username").fill("dilipkumar.rajendran@testleaf.com")
    await page.locator("#password").fill("TestLeaf@2025")
    await page.locator("#Login").click()
    
    // Click on Menu
    await page.locator("div[class= 'slds-icon-waffle']").click()
    await page.getByLabel("View All Applications").click()
    await page.waitForTimeout(5000)

    //Click Sales
    await page.getByPlaceholder("Search apps or items...").fill('sales')
    await page.waitForTimeout(5000)
    await page.locator("//p[normalize-space()='Sales']").click()

    //Go to Opportunity tab
    await page.locator("a[title='Opportunities']").click()
    await page.locator("div[title='New']").click()

    //Create a new
    const name = 'pavithra'
    await page.locator("input[name='Name']").fill(name)
    //select date
    await page.locator("input[name='CloseDate']").click()
    await page.locator("td[class='slds-is-today']").click()
    await page.getByPlaceholder("Search Accounts...").click()
    await page.waitForTimeout(2000)
    await page.locator("(//span[@class='slds-listbox__option-text slds-listbox__option-text_entity']/span)[1]").click()
    //Select Stage
    await page.locator("//button[@aria-label='Stage']").click()
    await page.locator("[data-value= 'Needs Analysis']").click()
    await page.waitForTimeout(2000)
    //save
    await page.locator("//button[@name='SaveEdit']").click()
    //await page.getByRole('button',{name: /saveedit/i}).click()
    const OppName = page.locator("//slot[@name='primaryField']");
    await expect(OppName).toHaveText(name)
    await expect(OppName).toContainText(name)
})
