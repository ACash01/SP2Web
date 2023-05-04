const logo = document.querySelector(".logo");
const header = document.querySelector(".Hnav")
window.addEventListener("scroll",changeHead);
logo.addEventListener("click",returnHome);
let iniView = 0

function changeHead() {
    var viewing = window.scrollY;

    if(viewing < iniView) {
        logo.classList.replace("logo-center","logo-left")
        header.classList.replace("nav-hide","nav-show")
    } else {
        logo.classList.replace("logo-left","logo-center")
        header.classList.replace("nav-show","nav-hide")
    }

    iniView = window.scrollY
}

function returnHome() {
}
