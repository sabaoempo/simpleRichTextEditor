function boldText(){
    formatText('b')
}

function italicText(){
    formatText('i')
}

function underlineText(){
    formatText('u')
}

function alignLeft(){

}

function alignCenter(){

}

function alignRight(){

}

function formatText(style){
    var selection = window.getSelection();
    if(selection.rangeCount){
        var e = document.createElement(style);
        e.innerHTML = selection.toString()
        var range = selection.getRangeAt(0);
        range.deleteContents();
        range.insertNode(e);
    }   
}

//TO-DO: export textarea content to separated html file

// function exportHTML(){
//     let value = document.getElementsByClassName('textarea');
//     const newDocument = document.implementation.createHTMLDocument("Teste")
//     newDocument.innerHTML = value;
// }