import {test,expect} from '@playwright/test'

const username = 'admin'
const password = 'mf=3hp^0UJMZ'

test('Assignment3 ServiceNow', async({page})=> {

    //1. Launch the ServiceNow application using the given URL.
    await page.goto("https://dev363522.service-now.com/")
    //2. Enter User name as admin.
    await page.locator("#user_name").fill(username)
    //3. Enter Password with valid credentials.
    await page.locator('#user_password').fill(password)
    //4. Click on the Log in button.
    await page.getByRole('button', {name:'Log in'}).click()
    //5. Wait for the ServiceNow home page to load successfully.
    await page.waitForLoadState();
    await expect(page).toHaveURL(/service-now/);
    //6. Click on the All menu from the left navigation panel.
    await page.getByRole('menuitem', { name: 'All' }).click()
    //7. Click on Service Catalog from the menu options.
    await page.getByPlaceholder('Filter').fill('Service Catalog')
    await page.waitForLoadState();
    await page.getByLabel('Service Catalog').nth(1).click()
    //8. Switch to the Service Catalog iframe.
    const catalogFrame = page.frameLocator('#gsft_main')
    //9. Click on the Mobiles category.
    await catalogFrame.getByRole('link', { name: 'Mobiles', exact: true }).click()
    //10. Select Apple iPhone 13 Pro from the product list.
    await catalogFrame.getByText('Apple iPhone 13 pro').first().click()
    await page.waitForLoadState();
    //11. Choose Yes for the Lost or Broken iPhone option.
    await catalogFrame.locator('label:has-text("Yes")').click();
    //12. Enter 99 in the Original phone number field.
    await catalogFrame.locator(".cat_item_option.sc-content-pad.form-control").first().fill('99')
    //13. Select Unlimited from the Monthly data allowance dropdown.
    await catalogFrame.getByRole('combobox', { name: 'Monthly data allowance' }).selectOption({ label: 'Unlimited [add $4.00]' })
    //14. Select Sierra Blue as the color option.
    await catalogFrame.locator('label:has-text("Sierra Blue")').click()
    //15. Select 512 GB as the storage option.
    await catalogFrame.locator("//label[contains(text(),'512 GB')]").click()
    //16. Click on the Order Now button.
    await catalogFrame.locator('#oi_order_now_button').click()
    await page.waitForLoadState();
    //17. Verify the confirmation message is displayed.
    const confirmation_msg = catalogFrame.locator('.notification.notification-success')
    console.log("Confirmation message: " + await confirmation_msg.innerText())
    await expect(confirmation_msg).toBeVisible()
    //18. Capture a full-page screenshot of the order confirmation page.
    await page.screenshot({ path: 'order-confirmation.png', fullPage: true });

}   
)








