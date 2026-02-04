import test from "@playwright/test";

test("Using page fixture",async({page})=>{

    //1. Navigate to the URL: http://leaftaps.com/opentaps/control/main
    await page.goto("http://leaftaps.com/opentaps/control/main")
    //2. Enter the username as Demosalesmanager
    await page.locator("#username").fill("Demosalesmanager")
    //3. Enter the password as crmsfa
    await page.locator("#password").fill("crmsfa")
    //4. Click the Login button
    await page.locator("input[value= 'Login']").click()
    await page.waitForTimeout(2000)
    //5. Click CRM/SFA
    await page.locator("#label a:has-text('CRM/SFA')").click()
    //6. Click Leads
    await page.locator("//a[text() = 'Leads']").click()
    //7. Click Create Lead
    await page.locator("//a[text() = 'Create Lead']").click()
    //8. Fill the Company Name
    await page.locator("input[id='createLeadForm_companyName']").fill("TestDataPW")
    //9. Fill the First Name
    await page.locator("#createLeadForm_firstName").fill("TestFirstName")
    //10. Fill the Last Name
    await page.locator("#createLeadForm_lastName").fill("TestLastName")
    //11. Fill the Salutation
    await page.locator("input[name='personalTitle']").fill("random text")
    //12. Fill the Title
    await page.locator("#createLeadForm_generalProfTitle").fill("random title")
    //13. Fill the Annual Revenue
    await page.locator("#createLeadForm_annualRevenue").fill("91515465")
    //14. Fill the Department
    await page.locator("input[name= 'departmentName']").fill("Health")
    //15. Fill the Phone Number
    await page.locator("input[id= 'createLeadForm_primaryPhoneNumber']").fill("1234567890")
    //16. Click Create Lead button
    await page.locator(".smallSubmit").click()

})