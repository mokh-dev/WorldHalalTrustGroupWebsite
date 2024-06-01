
// #region Terminated Certificate Slider

const slides = document.querySelectorAll(".terminatedCertificateDisplaySlider div")
let slideIndex = 0;
let intervalId = null;


document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider() {

    if (slides.length > 0){
        slides[slideIndex].classList.add("companyDisplayImgContainer");
        intervalId = setInterval(nextSlideAuto, 4000)
    }
}

function showSlide(index) {

    if (index >= slides.length){
        slideIndex = 0;
    }
    else if (index < 0){
        slideIndex = slides.length - 1;
    }

    slides.forEach(slide => {
        slide.classList.remove("companyDisplayImgContainer");
    });

    slides[slideIndex].classList.add("companyDisplayImgContainer")
}

function prevSlide() {
    clearInterval(intervalId);

    slideIndex--;
    showSlide(slideIndex);
}

function nextSlide() {
    clearInterval(intervalId);

    slideIndex++;
    showSlide(slideIndex);
}

function nextSlideAuto() {
    slideIndex++;
    showSlide(slideIndex);
}

// #endregion