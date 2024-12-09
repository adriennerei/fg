// Select DOM elements
const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.next-btn');
const prevButton = document.querySelector('.prev-btn');

let currentSlideIndex = 0;

// Function to calculate the slide width dynamically
function getSlideWidth() {
    return track.getBoundingClientRect().width;
}

// Function to update carousel position
function updateCarousel(index) {
    const slideWidth = getSlideWidth();
    track.style.transform = `translateX(-${slideWidth * index}px)`;
}

// Function to handle the next button click
nextButton.addEventListener('click', () => {
    if (currentSlideIndex < slides.length - 1) {
        currentSlideIndex++;
        updateCarousel(currentSlideIndex);
    }
});

// Function to handle the previous button click
prevButton.addEventListener('click', () => {
    if (currentSlideIndex > 0) {
        currentSlideIndex--;
        updateCarousel(currentSlideIndex);
    }
});

// Ensure proper resizing for responsiveness
window.addEventListener('resize', () => {
    // Recalculate positions on resize
    updateCarousel(currentSlideIndex);
});

// Initialize carousel on page load
window.addEventListener('DOMContentLoaded', () => {
    updateCarousel(currentSlideIndex);
});