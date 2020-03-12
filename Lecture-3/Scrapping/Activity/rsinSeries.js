let request = require("request");
let fs = require("fs");
let cheerio = require("cheerio");
let seriesId = process.argv[2];

request('https://www.espncricinfo.com/scores/series/${seriesId}/',
    function (err,res,html) {
        if(err == null && res.statusCode == 200){
            parseHTML(html);
        }else if(res,statusCode==404){
            console.log("page not found");
        }else{
            console.log(err);
            console.log(res.statusCode);
        }
    });

function parseHTML(html){
    let co = cheerio.load(html);

    let cardsHtml = co(".cscore.csore--final.cricket.cscore--watchNotes");
    for(let i =0;i<cardsHtml.length;i++){
        let format = co(cardsHtml[i]).find(".cscore_info-overview")
        for(let i =0;i<cardsHtml.length;i++){
            
        }
    }
}
