document.addEventListener("DOMContentLoaded", function () {
    // === Contact Form Submission (basic simulation) ===
    const form = document.querySelector('.contact-form');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            const name = form.querySelector('input[type="text"]').value.trim();
            const email = form.querySelector('input[type="email"]').value.trim();
            const message = form.querySelector('textarea').value.trim();

            if (!name || !email || !message) {
                alert('Please fill in all fields.');
                return;
            }

            alert(`Thank you, ${name}! Your message has been sent.`);
            form.reset();
        });
    }

    // === Navbar Background on Scroll ===
    const navbar = document.querySelector('.header');
    if (navbar) {
        window.addEventListener('scroll', () => {
            navbar.classList.toggle('scrolled', window.scrollY > 50);
        });
    }

    // === Fade-in Animations on Scroll ===
    const fadeElements = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    fadeElements.forEach(el => observer.observe(el));
});
