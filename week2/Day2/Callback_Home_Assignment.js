//Declare a Golbal Variable
let browser = "Chrome";

// Accepts callback function
function checkBrowserVersion(callback){

   setTimeout(() => {
    // pass the browser value to the function
    callback(browser);
  }, 2000);

}

//Actual callback function
function browserVersion(version) {
 console.log ("Browser version using callback: ",version )
}

//call the function
checkBrowserVersion(browserVersion)