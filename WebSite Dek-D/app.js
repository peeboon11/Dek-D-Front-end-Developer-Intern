const slideImage = document.querySelectorAll(".slide-image");
const slidesContainer = document.querySelector(".carousel-slide");
const nextBtn = document.querySelector(".nextBtn");
const preBtn = document.querySelector(".preBtn");
const navigationDots = document.querySelector(".navigation-dots");

let numberOfImages = slideImage.length;
let slideWidth = slideImage[0].clientWidth;
let currentSlide = 0;

// Set up the slider

function init(){
    slideImage.forEach((img, i) =>{
        img.style.left = i * 900 + "px";
    });

    slideImage[0].classList.add("active");
    createNavigationDots()
}

init();

function createNavigationDots(){
    for (let i = 0; i < numberOfImages; i++){
        const dot = document.createElement("div");
        dot.classList.add("single-dot");
        navigationDots.appendChild(dot);

        dot.addEventListener("click", ()=>{
            goToSlide(i);
        });
    }

    navigationDots.children[0].classList.add("active");
}

// Next Button

nextBtn.addEventListener("click", () => {
    if(currentSlide >= numberOfImages -1){
        goToSlide(0);
        return;
    }
    currentSlide++;
    goToSlide(currentSlide);
});

//Pre Button
preBtn.addEventListener("click", () => {
    if(currentSlide <= 0){
        goToSlide(numberOfImages -1);
        return;
    }
    currentSlide--;
    goToSlide(currentSlide);
});

// Got To Silde
function goToSlide(slideNumber) {
    slidesContainer.style.transform = "translateX(-" + slideWidth * slideNumber + "px)";
    currentSlide = slideNumber;
    setActiveClass();
}
// SET Active Class
function setActiveClass(){
    // Set active class

    let currentActive = document.querySelector(".slide-image.active");
    currentActive.classList.remove("active");
    slideImage[currentSlide].classList.add("active");

    // set active class for navigation dots
    let currentDot = document.querySelector(".single-dot.active");
    currentDot.classList.remove("active");
    navigationDots.children[currentSlide].classList.add("active");
}