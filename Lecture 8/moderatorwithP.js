let puppeteer = require("puppeteer");
let cFile = process.argv[2];
let fs = require("fs");
(async function(){
    let browser = await puppeteer.launch({
        headless : false,
        defaultViewport : null,
        slowMo : 100,
        args :["--start-maximized"]
    });
    let pages = await browser.pages();
    let apge = pages[0];
    let data = await fs.promises.readFile(cFile);
    let { url, pwd, user } = JSON.parse(data);
    //login page
    //normal websites
    //spa => socket maintain => networkidle2
    await page.goto(url, {waitUntil : "networkidle0"});
    await.page.type("#input-1",user);
    await.page.type("#input-2",pwd);
    await click("button[data-analytics=LoginPassword]");
    await page.waitForNavigation({waitUntil : "networkidle0"});
    await page.waitForSelector("a[data-analytics=NavBarProfileDropDown]",{visible:true});
    await page.click("a[data-analytics=NavBarProfileDropDown]");
    await page.click("a[data-analytics=NavBarProfileDropDownAdministration]");
    //find elements
    await waitForLoader(page);
    let tabs = await page.$$(".administration header ul li");
    await tabs[1].click();
    let mpUrl = await page.url();
    let qidx = 0;
    while(true){
        let question = await getMeQuestionElement(page,qidx,mpUrl);
        if(question == null){
            console.lohg("All question processed");
            return;
        }
        await handleQuestion(page, question, process.argv[3]);
        qidx++;
    }

})();

async function getMeQuestionElement(page,qidx,mpUrl){
    let pidx = Math.floor(qidx/10);
    let pQidx = qidx%10;
    console.log(pidx +""+pQidx);
    await page.goto(mpUrl);
    await waitForLoader(page);
    //you will wait for pagination
    await page.waitForSelector(".pagination ul li",{visible:true});
    let paginations = await.page.$$(".pagination ul li")
    let nxtBtn = pagination[paginations.length - 2];
    let className = await.page.evaluate(function (el){
        return el.getAttribute("class");
    },nextBtn);
    for(let i = 0;i<pidx;i++){
        if(className == "disabled"){
            return null;
        }
        await nxtBtn.click();

        //wait page visible
        await page.waitForSelector(".pagination ul li",{visible:true});
        //find elements
        paginations = await.page.$$(".pagination ul li");
        nxtBtn = paginations[paginations.length - 2];
        //attribute
        className = await page.evaluate(function (el){
            return el..getAttribute("class");
    },nextBtn);
        //pageQuestion
        let challengeList = await page.$$(".backbone.block-center");
        if(challengeList.length > pQidx){

        }
    }
}

//wait until 
// wait for selector
async function waitForLoader(page){
    await page.waitForSelector("#ajax-msg",{
        visible:true
    });
}
async function handleQuestion(page, question, uToAdd){
    let qUrl = await page.evaluate(function (el){
        return el.getAttribute("href");
    },question);
    console.log(qUrl);
    await page.goto(qUrl);
    await waitForLoader(page);
    await page.waitForSelector("li[data-tab=moderators]",{"visible":true})
    await page.click("li[data-tab=moderators]");
    await page.type("#moderator",uToAdd);
    await page.keyboard.press("Enter");
    await page.click(".save-challenge.btn.btn-green");
}