// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const icon = themeToggle.querySelector('.icon');

// Toggle theme
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  
  if (document.body.classList.contains('dark-theme')) {
    icon.textContent = '☀️';
  } else {
    icon.textContent = '🌙';
  }
});

// Close mobile menu when clicking menu items
const menuLinks = document.querySelectorAll('.menu a');
const burgerIcon = document.getElementById('burger-icon');

menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    burgerIcon.checked = false;
  });
});

// //////////////////////////////
document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const nextButton = document.querySelector('.next-button');
    const prevButton = document.querySelector('.prev-button');
    const nav = document.querySelector('.carousel-nav');

    if (slides.length === 0) return; // Exit if there are no slides

    // Get the width of a single slide
    const slideWidth = slides[0].getBoundingClientRect().width;

    // --- Create Navigation Dots ---
    slides.forEach((slide, index) => {
        const dot = document.createElement('button');
        dot.classList.add('nav-dot');
        if (index === 0) dot.classList.add('active'); // Set first dot as active
        
        dot.addEventListener('click', () => {
            moveToSlide(index);
        });
        nav.appendChild(dot);
    });

    const dots = Array.from(nav.children);
    let currentIndex = 0;

    // --- Function to move to a specific slide ---
    const moveToSlide = (targetIndex) => {
        // Check bounds
        if (targetIndex >= slides.length) {
            targetIndex = 0;
        }
        if (targetIndex < 0) {
            targetIndex = slides.length - 1;
        }

        track.style.transform = 'translateX(-' + slideWidth * targetIndex + 'px)';
        
        // Update active dot
        if (dots.length > 0) {
            dots[currentIndex].classList.remove('active');
            dots[targetIndex].classList.add('active');
        }

        currentIndex = targetIndex;
    };

    // --- Button Event Listeners ---
    nextButton.addEventListener('click', () => {
        moveToSlide(currentIndex + 1);
    });

    prevButton.addEventListener('click', () => {
        moveToSlide(currentIndex - 1);
    });
    
    // --- Recalculate slide width on window resize for responsiveness ---
    window.addEventListener('resize', () => {
        const newSlideWidth = slides[0].getBoundingClientRect().width;
        track.style.transition = 'none'; // Disable transition during resize
        track.style.transform = 'translateX(-' + newSlideWidth * currentIndex + 'px)';
        setTimeout(() => {
            track.style.transition = 'transform 0.5s ease-in-out'; // Re-enable after a moment
        }, 10);
    });
});