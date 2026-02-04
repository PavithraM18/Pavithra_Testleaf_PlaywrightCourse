import {test,expect} from "@playwright/test"

//Assignment: 1 Create Lead
test("Assignment_1 Create Lead", async ({ page }) => {

    //Login into URL
    await page.goto("https://login.salesforce.com/")
    await page.locator("#username").fill("dilipkumar.rajendran@testleaf.com")
    await page.locator("#password").fill("TestLeaf@2025")
    await page.locator("#Login").click()
    
    // Click on Menu
    await page.locator("div[class= 'slds-icon-waffle']").click()
    await page.locator("//button[text()= 'View All']").click()
    //Click Sales
   // await page.locator("//input[@placeholder='Search apps or items...']").fill('sales')
    await page.waitForTimeout(10000)
    await page.locator("//p[normalize-space()='Sales']").click()
    // Click on leads tab and new button
    await page.locator("a[title= 'Leads']").click()
    await page.locator("a[title= 'New']").click()
    //Select Salutation dropdown 
    await page.locator("//button[@name='salutation']").click()
    await page.locator("span[title= 'Mrs.']").click()
    // Enter the Lastname and company name
    const lastName = 'Mathivanan'
    await page.locator("input[name='lastName']").fill(lastName)
    await page.locator("input[name='Company']").fill('Test company')
    // Save and verify
    await page.locator("button[name='SaveEdit']").click()
    const leadName = page.locator("//slot[@name='primaryField']");
    await expect(leadName).toContainText(lastName)

})

//Assignment: 2 Edit Lead 
test("Assignment_2 Edit Lead ", async ({ page }) => {

    //Login into URL
    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.locator("#username").fill("Demosalesmanager")
    await page.locator("#password").fill("crmsfa")
    await page.locator("input[value= 'Login']").click()
    // Click CRM/SFA
    await page.locator("#label a:has-text('CRM/SFA')").click()
    await page.locator("//a[text() = 'Leads']").click()
    // Create New Lead
    await page.locator("//a[text() = 'Create Lead']").click()
    await page.locator("input[id='createLeadForm_companyName']").fill("TestDataPW")
    await page.locator("#createLeadForm_firstName").fill("TestFirstName")
    await page.locator("#createLeadForm_lastName").fill("TestLastName")
    await page.locator(".smallSubmit").click()
    //Edit and change the company name
    await page.locator("//a[contains(.,'Edit')]").click()
    await page.locator("input[id='updateLeadForm_companyName']").fill("UpdatedNewCompanyName")
    await page.locator("input[value='Update']").click()

})

//Assignment: 3 Create Individuals 
test("Assignment_3 Create Individuals", async ({ page }) => {

    //Login into URL
    await page.goto("https://login.salesforce.com/")
    await page.locator("#username").fill("dilipkumar.rajendran@testleaf.com")
    await page.locator("#password").fill("TestLeaf@2025")
    await page.locator("#Login").click()
    
    // Click on Menu
    await page.locator("div[class= 'slds-icon-waffle']").click()
    await page.locator("//button[text()= 'View All']").click()
    await page.waitForTimeout(10000)
    //Click Individuals
    await page.locator("//input[@placeholder='Search apps or items...']").fill('Individuals')
    await page.waitForTimeout(10000)
    await page.locator("//mark[contains(text(),'Individuals')]").click()
    // Click on Individuals dropdown and new button
    await page.locator("//span[normalize-space()='Individuals List']").click()
    await page.locator("//span[contains(text(),'New Individual')]").click()
    // Enter the Lastname
    const lastName = 'Mathivanan'
    await page.locator("//input[contains(@class,'lastName')]").fill(lastName)
    // Save and verify
    await page.locator("//span[text()='Save']").click()
    const individualName = page.locator("//div[contains(@class,'slds-page-header__title')]");
    await expect(individualName).toContainText(lastName)

})

//Assignment: 4 Edit Individuals 
test("Assignment_3 Edit Individuals", async ({ page }) => {

    //Login into URL
    await page.goto("https://login.salesforce.com/")
    await page.locator("#username").fill("dilipkumar.rajendran@testleaf.com")
    await page.locator("#password").fill("TestLeaf@2025")
    await page.locator("#Login").click()
    
    // Click on Menu
    await page.locator("div[class= 'slds-icon-waffle']").click()
    await page.locator("//button[text()= 'View All']").click()
    await page.waitForTimeout(10000)
    //Click Individuals
    await page.locator("//input[@placeholder='Search apps or items...']").fill('Individuals')
    await page.waitForTimeout(10000)
    await page.locator("//mark[contains(text(),'Individuals')]").click()
    // Search the Individuals last name and Edit ,enter firstname
    const lastName = 'Mathivanan'
    await page.locator("input[name='Individual-search-input']").fill(lastName)
    await page.locator("button[title='Refresh']").click()
    await page.waitForTimeout(3000)
    await page.locator("//button[@class='slds-button slds-button_icon-border slds-button_icon-x-small']").click()
    await page.locator("//a[@title='Edit']").click()
    await page.locator("//div[contains(@class ,'salutation')]").click()
    await page.locator("a[title= 'Mr.']").click()
    const firstName = 'Pavithra'
    await page.locator("input[placeholder='First Name']").fill(firstName)
    // Save and verify
    await page.locator("//span[text()='Save']").click()
    await page.locator("(//div[contains(@class,'slds-grid')]/a/slot/span)[1]").click()

    const individualName = page.locator("//div[contains(@class,'slds-page-header__title')]");
    await expect(individualName).toContainText(firstName)

})