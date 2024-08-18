const button = document.getElementById("share");
const color1 = getComputedStyle(document.documentElement).getPropertyValue('--LightGrayishBlue');
const color2 = getComputedStyle(document.documentElement).getPropertyValue('--DesaturatedDarkBlue');
button.addEventListener('click', myfunction);
const openshare = document.getElementById("openshare");
var flag = true;
function myfunction(){
    if(flag){
        openshare.classList.add("active");
        button.style.backgroundColor = color2;
        document.querySelector(".shareimg").style.filter = "invert(100%) sepia(100%) saturate(0%) hue-rotate(206deg) brightness(200%) contrast(101%)"
        flag=false;
    }
    else{
        openshare.classList.remove("active");
        button.style.backgroundColor = color1;
        document.querySelector(".shareimg").style.filter = "none"
        flag=true;
    }
}