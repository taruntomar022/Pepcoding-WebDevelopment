require("chromedriver");

let swd = require("selenium-webdriver");
let fs = require("fs");
let credentialFile = process.argv[2];
let username,password;
let builder = new swd.Builder();
let driver = builder.forBrowser("chrome").build();

let credentialwillbereadpromise = fs.promises.readFile(credentialFile);
credentialwillbereadpromise
.then(function(credential){
    credential = JSON.parse(credential);
    username = credential.username;
    password = credential.password;
    let googlewillbeopenedpromise = driver.get("http://pepcoding.com/login");
    return googlewillbeopenedpromise;

})


.then(function(){
    let emailWillBeSelectedpromise = driver.findElement(swd.By.css("input[type=email]"));
    let passwordWillBeSelectedPromise = driver.findElement(swd.By.css("input[type= password]"));
    return combinedPromise;
}).then(function(returnedCombined){
    let emailWillBeInputed = returnedCombined[0].sendKeys(username);
    let passWillBeInputed = returnedCombined[1].sendKeys(password);
    // console.log(emailwillbeinputed);
    return emailwillbeinputed;
 
}).then(function(){
    console.log("email hass ben send");
}).then(function(){
    
    return passwordwillbe;
}).then(function(pass){
    
}).then(function(){
    let click = driver.findElement(swd.By.css("button[type =submit]")).click();
}).then(function(){
    // console.log("login succesfull");
    let carwillbeselectedpromise = driver.findElement(swd.By.css(".resourse"));
    return carwillbeselectedpromise;
}).then(function(cardClick){
    let cardclick = cardClick.getAttribute("href");
    return cardClick;
}).then(function(rpagelink){
    let rpageopen = driver.get(rpagelink);
}).then(function(){
    console.log("reached");
})
.catch(function(err){
    console.log(err);
})
