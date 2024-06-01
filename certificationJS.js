

// #region Policy Display Menu

const divs = document.querySelectorAll(".policydisplaymenu div");
let divIndex = 0;
let intervalId = null;


document.addEventListener("DOMContentLoaded", initializeDisplayMenu);

function initializeDisplayMenu() {
    
    if (divs.length > 0){
        divs[divIndex].classList.add("DisplayedButtons");
        //intervalId = setInterval(nextSlideAuto, 4000)
    }
}

function showDiv(index) {;

    if (index >= divs.length){
        divIndex = 0;
    }
    else if (index < 0){
        divIndex = divs.length - 1;
    }

    divs.forEach(div => {
        div.classList.remove("DisplayedButtons");
    });

    divs[index].classList.add("DisplayedButtons")
}

// #endregion