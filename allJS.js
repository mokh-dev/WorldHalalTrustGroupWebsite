
// #region Header Show/Hide on Scroll
const header = document.querySelector(".header");

let oldValue = 0;

document.addEventListener("DOMContentLoaded", showHeader);

function showHeader() {
    header.classList.remove("hideHeader");
    header.classList.add("showHeader");
}

function hideHeader() {
    header.classList.remove("showHeader");
    header.classList.add("hideHeader");
}

window.addEventListener('scroll', function(e){

    newValue = window.scrollY;

    if(oldValue - newValue < 0){
        hideHeader();
    } else if(oldValue - newValue > 0){
        showHeader();
    }

    oldValue = newValue;
});

// #endregion