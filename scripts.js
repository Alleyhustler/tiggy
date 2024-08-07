// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Carousel functionality
let currentSlide = 1;
function showSlide(n) {
    const slides = document.querySelectorAll('.carousel-slide');
    if (n > slides.length) { currentSlide = 1 }
    if (n < 1) { currentSlide = slides.length }
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${-100 * (currentSlide - 1)}%)`;
    });
}

document.querySelectorAll('.carousel-buttons button').forEach((button, index) => {
    button.addEventListener('click', () => {
        showSlide(index + 1);
        currentSlide = index + 1;
    });
});

showSlide(currentSlide);
