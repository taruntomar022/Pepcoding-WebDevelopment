module.exports.view = function(){
    console.log("view command");
    let src = arguments[0];
    console.log(src);

    let mode = arguments[1];
    console.log(mode);

    if(mode=="-t"){
        viewAsTree(src);
    }else if(mode=="-f"){
        viewAsFlatFiles(src);
    }else{
        console.log("wrong parameter")
    }
};

function viewAsTree(){
    console.log("view as tree");
}
function viewAsFlatFiles(){
    console.log("view as flat files");
}