
function toggleNav() {
    const navToggle = document.querySelector('.nav-toggle');
    navToggle.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', () => {
    const fadeInElements = document.querySelectorAll('.fade-in-content');

    if (fadeInElements.length > 0) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1
        });

        fadeInElements.forEach(element => observer.observe(element));
    }
});

window.addEventListener('load', function () {
    if (!localStorage.getItem('popupDismissed')) {
        const popup = document.getElementById('popup');
        if (popup) {
            popup.style.display = 'flex';
            document.body.classList.add('no-scroll');
        }
    }
});

const privacyBtn = document.getElementById('privacyBtn');
if (privacyBtn) {
    privacyBtn.addEventListener('click', function () {
        window.location.href = 'privacy.html';
    });
}

const tosBtn = document.getElementById('tosBtn');
if (tosBtn) {
    tosBtn.addEventListener('click', function () {
        window.location.href = 'tos.html';
    });
}

const okBtn = document.getElementById('okBtn');
if (okBtn) {
    okBtn.addEventListener('click', function () {
        document.getElementById('popup').style.display = 'none';
        document.body.classList.remove('no-scroll');
        localStorage.setItem('popupDismissed', 'true');
    });
}
