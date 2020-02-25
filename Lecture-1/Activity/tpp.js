let arr= process.argv;
// console.log(arr);
let cmd = arr[2];
// let src = arr[3];
// let mode = arr[4];

let viewFile = require("./commands/view");
let treefyFile = require("./commands/treefy");
let untreefyFile = require("./commands/untreefy");
let moniterFile = require("./commands/monitor");
let helpFile = require("./commands/help");

// console.log(`${cmd} ${src} ${mode}`);

switch(cmd){
    case "view":
        // console.log("view command");
        viewFile.view(arr[3],arr[4]);
        break;
    case "untreefy":
        // console.log("untreefy command");
        untreefyFile.untreefy(arr[3],arr[4]);
         break;
    case "treefy":
        // console.log("treefy command");
        treefyFile.treefy(arr[3],arr[4]);
        break;
    case "monitor":
        // console.log("monitor command");
        moniterFile.monitor(arr[3],arr[4]);
        break;
    case "help":
        // console.log("help command");
        helpFile.help();
    default:
        console.log("wrong command");
}