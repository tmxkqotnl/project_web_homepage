// use only local storage of chrome
var content = document.getElementsByClassName('content')[0];
var inputText = document.getElementById('letter');

function LoadContent(context){
    for(let i=0;i<localStorage.length;i++){
        var paragraph = document.createElement('div');
        var text = localStorage.getItem(localStorage.key(i));
        paragraph.innerText = text;
        content.appendChild(paragraph);
    }
}
$(document).ready(function(){
    LoadContent();
    $('#send').click(function(){
        let text = inputText.value;
        localStorage.setItem(Date.now(),text);
        LoadContent();
    });
});


