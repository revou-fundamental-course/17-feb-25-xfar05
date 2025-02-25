document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.contact-form form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const interestSelect = document.getElementById('interest');

    // Populate select options
    const options = ['Travel Packages', 'Custom Itinerary', 'General Inquiry'];
    options.forEach(option => {
        const opt = document.createElement('option');
        opt.value = option;
        opt.textContent = option;
        interestSelect.appendChild(opt);
    });

    form.addEventListener('submit', function(event) {
        if (!nameInput.value.trim()) {
            alert('Please enter your name.');
            event.preventDefault();
        } else if (!emailInput.value.trim() || !validateEmail(emailInput.value)) {
            alert('Please enter a valid email address.');
            event.preventDefault();
        } else if (interestSelect.value === 'Select option') {
            alert('Please select an interest.');
            event.preventDefault();
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // Banner slider
    let slideIndex = 0;
    const slides = document.querySelectorAll('.banner-slider .slide');

    function showSlides() {
        slides.forEach((slide, index) => {
            slide.style.display = 'none';
            slide.classList.remove('active');
        });
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }
        slides[slideIndex - 1].style.display = 'block';
        slides[slideIndex - 1].classList.add('active');
        setTimeout(showSlides, 3000); // Change slide every 3 seconds
    }

    showSlides();

    // Image slider
    let currentSlideIndex = 0;
    const imageSlides = document.querySelectorAll('.content .left .image-slider .slide');

    function showImageSlides() {
        imageSlides.forEach((slide, index) => {
            slide.style.display = 'none';
        });
        currentSlideIndex++;
        if (currentSlideIndex > imageSlides.length) {
            currentSlideIndex = 1;
        }
        imageSlides[currentSlideIndex - 1].style.display = 'block';
        setTimeout(showImageSlides, 3000); // Change image every 3 seconds
    }

    showImageSlides();
});
