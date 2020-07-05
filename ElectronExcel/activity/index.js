const $ = require("jquery");
const electron = require("electron");
const fsp = require("fs");
const dialog = require("electron").remote.dialog;
$(document).ready(
    function () {
        let db;
        $("#grid .cell").on("click", function () {
            let rid = Number($(this).attr("ri"));
            let cid = Number($(this).attr("ci"));
            let ciAdrr = String.fromCharCode(cid + 65);
            $("#address-container").val(ciAdrr +( rid+1));
        })

        $(".menu-items").on("click", function(){
            $(".menu-options-item").removeClass("selected");
            let id = $(this).attr("id");
            $(`#${id}-options`).addClass("selected");
        })
        
        $("#New").on("click", function (){
            db = [];

            let rows = $("#grid").find(".row");
            for(let i=0;i<rows.length;i++){
                let row = [];
                let cRowCells = $(rows[i]).find(".cell");
                for(let j=0;j<cRowCells.length;j++){
                    // Db
                    let cell = false;
                    row.push(cell);
                    // UI
                    $(cRowCells[j]).html("false");
                }
                db.push(row);
            }
            console.log(db);
        })
        $("#grid .cell").on("keyup",function () {
            // updates db
            let rowId = $(this).attr("ri");
            let colId = $(this).attr("ci");
            db[rowId][colId] = $(this).html();
            console.log(db);
        })
        $("#Save").on("click", function () {
            let sdb = dialog.showSaveDialogSync();
            let jsonData = JSON.stringify(db);
            sdb.writeFileSync(sdb.filePaths[0],jsonData);
        })
        $("#Save").on("click", function () {
            let sdb = dialog.showOpenDialogSync();
            let jsonData = JSON.stringify(db);
            // fs.writeFileSync(sdb.filePaths[0],jsonData);
        })
        function init(){
            $("#File").trigger("click");
            $("#New").click();
        }
        init();
    }
);