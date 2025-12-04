// JavaScript for smooth scrolling
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        // Smooth scroll to the target section
        const targetSection = document.querySelector(this.getAttribute('href'));
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });

        // Highlight "Join" buttons in specific sections
        if (this.getAttribute('href') === '#farmers-section') {
            highlightButton('#farmer-btn');
        } else if (this.getAttribute('href') === '#customers-section') {
            highlightButton('#customer-btn');
        }
    });
});

// Function to add a temporary highlight effect to a button
function highlightButton(buttonId) {
    const button = document.querySelector(buttonId);
    button.classList.add('highlighted');
    setTimeout(() => {
        button.classList.remove('highlighted');
    }, 1000); // Highlight lasts 1 second
}




