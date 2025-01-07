// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Theme Switcher (Dark Mode)
const themeToggleButton = document.getElementById('theme-toggle');
themeToggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        themeToggleButton.textContent = '🌞'; // Sun icon for light mode
    } else {
        themeToggleButton.textContent = '🌙'; // Moon icon for dark mode
    }
});

// Testimonial Carousel Navigation
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial-item');
const testimonialPrev = document.getElementById('testimonial-prev');
const testimonialNext = document.getElementById('testimonial-next');

testimonialPrev.addEventListener('click', () => {
    if (currentTestimonial > 0) {
        currentTestimonial--;
    }
    updateTestimonial();
});

testimonialNext.addEventListener('click', () => {
    if (currentTestimonial < testimonials.length - 1) {
        currentTestimonial++;
    }
    updateTestimonial();
});

function updateTestimonial() {
    testimonials.forEach((item, index) => {
        item.style.transform = `translateX(-${currentTestimonial * 100}%)`;
    });
}

// Contact Form Submission (mock)
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Your message has been sent!');
});
