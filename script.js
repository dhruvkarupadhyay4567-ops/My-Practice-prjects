// // Slide-animation
// document.addEventListener("DOMContentLoaded", function () {

//     const slider = document.querySelector(".moving-slider");
//     const images = slider.querySelectorAll("img");

//     let position = 0;
//     let speed = 0.8;

//     function getLoopWidth() {
//         let width = 0;

//         for (let i = 0; i < images.length / 2; i++) {
//             width += images[i].offsetWidth;
//         }

//         width += (images.length / 2 - 1) * 40;

//         return width;
//     }

//     function animateSlider() {

//         position -= speed;

//         const loopWidth = getLoopWidth();

//         if (Math.abs(position) >= loopWidth) {
//             position += loopWidth;
//         }

//         slider.style.transform = `translate3d(${position}px, 0, 0)`;

//         requestAnimationFrame(animateSlider);
//     }

//     // Images load hone ke baad start
//     window.addEventListener("load", function () {
//         requestAnimationFrame(animateSlider);
//     });

// });


// New Arrival Slider
const newArrivalSlider = document.querySelector(".new-arival-grid-container");

let isDragging = false;
let startX;
let startScrollLeft;

newArrivalSlider.addEventListener("mousedown", (e) => {
    isDragging = true;
    startX = e.pageX - newArrivalSlider.offsetLeft;
    startScrollLeft = newArrivalSlider.scrollLeft;
});

newArrivalSlider.addEventListener("mouseleave", () => {
    isDragging = false;
});

newArrivalSlider.addEventListener("mouseup", () => {
    isDragging = false;
});

newArrivalSlider.addEventListener("mousemove", (e) => {
    if (!isDragging) return;

    e.preventDefault();

    const x = e.pageX - newArrivalSlider.offsetLeft;
    const walk = (x - startX) * 1.5;

    newArrivalSlider.scrollLeft = startScrollLeft - walk;
});


// Testimonial Slider
const testimonialSlider = document.querySelector(".testimonial-slider");
const leftArrow = document.querySelector(".left");
const rightArrow = document.querySelector(".right");

let currentPosition = 0;

rightArrow.addEventListener("click", () => {

    const card = document.querySelector(".testimonial-card");
    const gap = 14;

    const moveAmount = card.offsetWidth + gap;

    currentPosition -= moveAmount;

    const maxPosition =
        -(testimonialSlider.scrollWidth - testimonialSlider.parentElement.offsetWidth);

    if (currentPosition < maxPosition) {
        currentPosition = maxPosition;
    }

    testimonialSlider.style.transform =
        `translateX(${currentPosition}px)`;

});


leftArrow.addEventListener("click", () => {

    const card = document.querySelector(".testimonial-card");
    const gap = 14;

    const moveAmount = card.offsetWidth + gap;

    currentPosition += moveAmount;

    if (currentPosition > 0) {
        currentPosition = 0;
    }

    testimonialSlider.style.transform =
        `translateX(${currentPosition}px)`;

});

                                                                                                                                                             
const filterButton = document.querySelector(".mobile-filter-btn");
const filterSidebar = document.querySelector(".filter-sidebar");
const filterIcon = document.querySelector(".filter-title i");

filterButton.addEventListener("click", () => {
    filterSidebar.classList.add("active");
    document.body.classList.add("filter-open");
    filterIcon.className = "fa-solid fa-xmark";
});

filterIcon.addEventListener("click", () => {
    filterSidebar.classList.remove("active");
    document.body.classList.remove("filter-open");
    filterIcon.className = "fa-solid fa-sliders";
});