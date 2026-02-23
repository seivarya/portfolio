// --- Interactive Gradient Background Logic ---
const interactiveBg = document.querySelector('.interactive-bg');

document.addEventListener('mousemove', (e) => {
    // Update CSS variables with mouse coordinates
    interactiveBg.style.setProperty('--mouse-x', `${e.clientX}px`);
    interactiveBg.style.setProperty('--mouse-y', `${e.clientY}px`);
});

// --- Night & Day Theme Toggle Logic ---
const themeToggleBtn = document.getElementById('themeToggle');
const body = document.body;

themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        themeToggleBtn.textContent = '☀️';
    } else {
        themeToggleBtn.textContent = '🌙';
    }
});

// --- Scroll Reveal SaaS Animation Logic ---
const revealElements = document.querySelectorAll('.reveal');

const revealOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
};

const revealOnScroll = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
    });
}, revealOptions);

revealElements.forEach(el => {
    revealOnScroll.observe(el);
    if (el.getBoundingClientRect().top < window.innerHeight) {
        el.classList.add('active');
    }
});

// --- Hover to Play Video Logic ---
const portfolioItems = document.querySelectorAll('.portfolio-item');

portfolioItems.forEach(item => {
    const video = item.querySelector('.portfolio-video');
    if (!video) return;

    item.addEventListener('mouseenter', () => {
        video.play().catch(err => {
            console.log("Playback failed or interrupted", err);
        });
    });

    item.addEventListener('mouseleave', () => {
        video.pause();
        // Optional: Reset to beginning if you want a clean start next time
        // video.currentTime = 0; 
    });
});

// --- Contact Form Mailto Logic ---
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const self_email = "anshul.bisht.inquiry@gmail.com";
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        const subject = encodeURIComponent(`New Project Inquiry from ${name}`);
        const bodyFormat = `Hi Anshul,\n\n${message}\n\nBest, ${name}`;
        const body = encodeURIComponent(bodyFormat);

        // This explicitly opens Gmail in a new tab with the subject and body pre-filled!
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${self_email}&su=${subject}&body=${body}`;
        window.open(gmailUrl, '_blank');
    });
}

// --- Meow Audio on Cat Click ---
const catContainer = document.querySelector('.cat-container');
if (catContainer) {
    catContainer.addEventListener('click', () => {
        const meowAudio = new Audio('assets/audio.port/meow.mp3');
        meowAudio.play().catch(err => console.log("Meow playback failed:", err));
    });
}

// --- Auto-updating Footer Year ---
const yearSpan = document.getElementById('currentYear');
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}
