const menuBtn = document.querySelector('.menu-btn');
const fullscreenMenu = document.querySelector('.fullscreen-menu');
const closeBtn = document.querySelector('.close-btn');
let menuOpen = false;

// Eventos do menu
menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        fullscreenMenu.classList.add('active');
        menuOpen = true;
    }
});

closeBtn.addEventListener('click', () => {
    fullscreenMenu.classList.remove('active');
    menuOpen = false;
});


//Eventos do Carousel

const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let currentSlide = 0;

function showSlide(n) {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => showSlide(index));
});

// Auto-play
setInterval(nextSlide, 5000);

