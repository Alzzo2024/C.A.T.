document.addEventListener('DOMContentLoaded', () => {
    const translateBtn = document.querySelector('.translate-btn');
    const languageSelector = document.querySelector('.language-selector');

    translateBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        languageSelector.classList.toggle('active');
    });

    document.addEventListener('click', () => {
        languageSelector.classList.remove('active');
    });

    // Language selection handling
    const languageOptions = document.querySelectorAll('.language-option');
    languageOptions.forEach(option => {
        option.addEventListener('click', (e) => {
            const lang = e.currentTarget.dataset.lang;
            // Handle language change here
            console.log(`Changed language to: ${lang}`);
            languageSelector.classList.remove('active');
        });
    });
});

// Add to your existing script.js
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    // Show first slide
    slides[0].classList.add('active');

    function rotateSlides() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    // Rotate every 5 seconds
    setInterval(rotateSlides, 5000);
});