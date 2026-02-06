import test from '@playwright/test'

test("Playwright Inbulid Locator",async({page})=>{

await page.goto("https://parabank.parasoft.com/parabank/index.htm")

await page.getByRole('link',{name:'Admin Page'}).click()
await page.waitForTimeout(3000)
await page.getByAltText("ParaBank").click()
await page.waitForTimeout(3000)
//await page.getByTitle("ParaBank").click()
await page.getByText("Locations").first().click()
await page.waitForTimeout(3000)
await page.getByRole('button',{name:'Search',exact:true}).click()
await page.waitForTimeout(3000)
await page.getByPlaceholder("Search").fill("HI")

//await page.getByTestId('directions').click()
//<button data-testid="directions">Itinéraire</button>


})