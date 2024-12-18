let currentSlide = 0;
const slides = document.querySelector('.slides');
const totalSlides = slides.children.length;

function changeSlide(direction) {
    currentSlide += direction;
    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    } else if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }
    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}

