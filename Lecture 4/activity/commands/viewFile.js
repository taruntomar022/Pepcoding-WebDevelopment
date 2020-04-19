const fs = require("fs");
let path = require("path");
module.exports.view = function (){
    //you can also write it as function(src, mode) --> it will contain the values itself, if
    //you don;t want it to assign as arguments[0] or arguments[1].

    // console.log("view is implemented");
    // console.log(arguments);
    let src = arguments[0];
    let mode = arguments[1];

    if(mode == "-t"){
        viewAsTree(src,"");
    } else if(mode == "-f"){
        viewAsFlatFile(src);
    } else {
        console.log("Wrong mode.");
    }
}
function checkPathisDirectoryOrNot(src){
    let ans = fs.lstatSync(src).isFile();
    return ans;
}

function childrenReader(src){
    let children = fs.readdirSync(src);
    return children;
}


function viewAsTree(src,indent){
    let isFile = checkPathisDirectoryOrNot(src);
        if(isFile == true){
            console.log(indent + path.basename(src)+"*");
        }else{
            console.log(indent + path.basename(src));
            let children = childrenReader(src);
            for(let i=0;i<children.length;i++){
                let child = children[i];

                let childPath = path.join(src,child);

                viewAsTree(childPath,indent +"\t");
            }
        }

}

function viewAsFlatFile(src){
    let isFile = checkPathisDirectoryOrNot(src);
    if (isFile == true) {
        console.log(src + "*");
    }else{
        //print
        console.log(src);
        //children -> content read
        let children = childrenReader(src);
        for(let i=0;i<children.length;i++){
            let child = children[i];
            let childPath = path.join(src,child);
            // d10/d20
            viewAsFlatFile(childPath);
        }
    }    
}