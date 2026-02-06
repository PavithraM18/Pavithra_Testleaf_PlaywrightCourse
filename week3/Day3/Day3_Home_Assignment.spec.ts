import test from "@playwright/test"

test("Home Assignment: Leafground Dropdown ", async ({ page }) => {

    await page.goto("https://leafground.com/select.xhtml")
    await page.selectOption(".ui-selectonemenu", { label: 'Playwright' })

    //get the count
    const select_locator = page.locator('select.ui-selectonemenu')
    const options_list = select_locator.locator("option");
    const total_count = await options_list.count()
    console.log("Total count of the select options: ", total_count)

    //print all the values
    const allValues = await options_list.allInnerTexts();
    for (const value of allValues) {
        console.log("Listed Tools: ", value);
    }

    // choose your country
    await page.locator("//label[text()='Select Country']").click()
    await page.getByRole("option", { name: "India" }).click();

    //Confirm Cities belongs to Country is loaded 
    await page.locator("//label[text()='Select City']").click()
    await page.getByRole("option", { name: "Chennai" }).click();
    await page.waitForTimeout(2000)

    //choose any 3 courses
    let courses = ['Playwright', 'PostMan', 'JMeter']
    const courseDropdown = page.locator("//ul[contains(@class,'ui-autocomplete-multiple-container')]/../button")
    for (let i = 0; i < courses.length; i++) {
        await courseDropdown.click();
        await page.locator(`li[data-item-label='${courses[i]}']`).click();
    }

    //Choose a language
    await page.locator("//label[.='Select Language']").click()
    await page.getByRole("option", { name: "English" }).click();

    //print all the languages
    const lang = page.locator("select[id='j_idt87:lang_input']")
    const lang_list = lang.locator("option");
    const lists = await lang_list.allInnerTexts();
    for (const list of lists) {
        console.log("Listed Languages: ", list);
    }

    //Select 'Two' irrespective of the language chosen
    await page.locator("//label[text()='Select Values']").click()
    await page.getByRole("option", { name: "Two" }).click();

})
