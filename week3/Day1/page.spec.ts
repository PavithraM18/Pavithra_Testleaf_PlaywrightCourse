import test from "@playwright/test";

test("Using page fixture",async({page})=>{

    await page.goto("https://www.redbus.in");
    await page.waitForTimeout(1000);
})