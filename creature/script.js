document.addEventListener('DOMContentLoaded', () => {
    // Toggle Menu for Mobile View
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Form Submission Handler
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the default form submission
        
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);

        // Simulate form submission
        setTimeout(() => {
            alert('Form submitted successfully!');
            contactForm.reset(); // Reset the form after submission
        }, 500);
    });
});
