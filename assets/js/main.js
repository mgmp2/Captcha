var iRandom = document.getElementById("random");
var textRandom = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'@/!?¿";
window.addEventListener('load', newCaptcha);
    document.getElementById("reload").addEventListener("click", newCaptcha);
    document.getElementById("tick").addEventListener("click", checkCaptcha);

function newCaptcha(){
    iRandom.value = randomCaptcha(textRandom,7);
    iRandom.style.color = randomColor();
}
function randomCaptcha(char, long){
    var captcha = "";
    for (var i=0; i < long; i++) {
        rand = Math.floor(Math.random()*char.length);
        captcha += char.substr(rand, 1);
  } return captcha;
}
function randomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}
function checkCaptcha(){
    var iTexto = document.getElementById("textIn");
    if(iRandom.value == iTexto.value) {
        alert("correct");
        iTexto.value="";
        newCaptcha();
    } else {
        alert("incorrect");
        iTexto.value="";
        newCaptcha();
    }
}
