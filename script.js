
function scrollToElement(elementSelector, instance = 0) {
    // Select all elements that match the given selector
    const elements = document.querySelectorAll(elementSelector);
    // Check if there are elements matching the selector and if the requested instance exists
    if (elements.length > instance) {
        // Scroll to the specified instance of the element
        elements[instance].scrollIntoView({ behavior: 'smooth' });
    }
}

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");
const link4 = document.getElementById("link4");
const link5 = document.getElementById("link5");

link1.addEventListener('click', () => {
    scrollToElement('.header');
});

link2.addEventListener('click', () => {
    // Scroll to the second element with "header" class
    scrollToElement('.header', 1);
});

link3.addEventListener('click', () => {
    scrollToElement('.column');
});

link4.addEventListener('click', () => {
    window.location.href = '404.html';
});

link5.addEventListener('click', () => {
    window.location.href = '404.html';
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleNav() {
    const navToggle = document.querySelector('.nav-toggle');
    navToggle.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', () => {
    const fadeInElements = document.querySelectorAll('.fade-in-content');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    });

    fadeInElements.forEach(element => observer.observe(element));
});




document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.9  // Adjust this value to trigger the animation sooner or later
    });

    const fadeInElements = document.querySelectorAll('.fade-in-content');
    fadeInElements.forEach(el => observer.observe(el));
});

// Show the popup when the page loads and disable scrolling
window.addEventListener('load', function () {
    // Check if the user has already dismissed the popup
    if (!localStorage.getItem('popupDismissed')) {
        document.getElementById('popup').style.display = 'flex'; // Show popup
        document.body.classList.add('no-scroll'); // Disable scrolling
    }
});

// Redirect to Privacy Policy
document.getElementById('privacyBtn').addEventListener('click', function () {
    window.location.href = 'privacy.html';
});

// Redirect to Terms of Service
document.getElementById('tosBtn').addEventListener('click', function () {
    window.location.href = 'tos.html';
});

// Hide popup, enable scrolling, and unblur background
document.getElementById('okBtn').addEventListener('click', function () {
    document.getElementById('popup').style.display = 'none'; // Hide popup
    document.body.classList.remove('no-scroll'); // Enable scrolling
    localStorage.setItem('popupDismissed', 'true'); // Store dismissal in localStorage
});
