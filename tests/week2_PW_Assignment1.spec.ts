import { chromium, test, webkit } from "@playwright/test";

test("To launch a browser" ,async()=>{
    //Launching Redbus in a Edge Browser
    const edgeBrowser = await chromium.launch({ headless: false, channel:"msedge"});
    const edgeContext = await edgeBrowser.newContext();
    const edgePage = await edgeContext.newPage();
    await edgePage.goto("https://www.redbus.in");
    let rbTitle = await edgePage.title();
    let rbUrl =  edgePage.url();
    console.log('Red Bus Title:',rbTitle);
    console.log('Red Bus URL:', rbUrl);

    //Launching Flipkart in a Webkit browser
    const webkitBrowser = await webkit.launch({ headless: false});
    const webkitContext = await webkitBrowser.newContext();
    const webkitPage = await webkitContext.newPage();
    await webkitPage.goto("https://www.flipkart.com");
    let fkTitle = await webkitPage.title();
    let fkUrl =  webkitPage.url();
    console.log('Flipkart Title:',fkTitle);
    console.log('Flipkart URL:', fkUrl);

})
