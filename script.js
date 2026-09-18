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