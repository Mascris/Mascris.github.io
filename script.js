// 1. TYPEWRITER EFFECT
const words = ["Scalable Applications.", "Interactive UIs.", "Digital Products."];
let i = 0;
let timer;

function typeWriter() {
    const heading = document.querySelector('.typewriter');
    if (!heading) return;
    
    let word = words[i];
    let current = heading.textContent;
    
    if (current.length < word.length) {
        // Typing
        heading.textContent = word.substring(0, current.length + 1);
        timer = setTimeout(typeWriter, 100);
    } else {
        // Wait then delete (simulate next word logic simply by restarting or clearing)
        setTimeout(() => {
           deleteWriter();
        }, 2000);
    }
}

function deleteWriter() {
    const heading = document.querySelector('.typewriter');
    let current = heading.textContent;
    
    if (current.length > 0) {
        heading.textContent = current.substring(0, current.length - 1);
        setTimeout(deleteWriter, 50);
    } else {
        i = (i + 1) % words.length;
        typeWriter();
    }
}

// Start Typing
document.addEventListener('DOMContentLoaded', typeWriter);


// 2. SCROLL ANIMATION (THE "GASP" EFFECT)
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.1 });

const hiddenElements = document.querySelectorAll('.reveal');
hiddenElements.forEach((el) => observer.observe(el));