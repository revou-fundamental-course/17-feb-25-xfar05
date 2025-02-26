document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.contact-form form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const interestSelect = document.getElementById('interest');

    const options = ['Travel Packages', 'Custom Itinerary', 'General Inquiry'];
    options.forEach(option => {
        const opt = document.createElement('option');
        opt.value = option;
        opt.textContent = option;
        interestSelect.appendChild(opt);
    });

    form.addEventListener('submit', function (event) {
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
        alert("Successfully contacted")
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

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
        setTimeout(showSlides, 3000);
    }

    showSlides();

    const scrollElements = document.querySelectorAll('.scroll-element');

    const elementInView = (el, dividend = 1) => {
        const elementTop = el.getBoundingClientRect().top;
        return elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend;
    };

    const displayScrollElement = (element) => {
        element.classList.add('scroll-in-view');
    };

    const hideScrollElement = (element) => {
        element.classList.remove('scroll-in-view');
    };

    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 1.25)) {
                displayScrollElement(el);
            } else {
                hideScrollElement(el);
            }
        });
    };

    window.addEventListener('scroll', () => {
        handleScrollAnimation();
    });

    handleScrollAnimation();
});
