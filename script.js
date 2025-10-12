const themeToggle = document.getElementById('theme-toggle');
const icon = themeToggle.querySelector('.icon');
 document.body.classList.toggle('dark-theme');

// Toggle theme
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  
  if (document.body.classList.contains('dark-theme')) {
    icon.textContent = '☀️';
  } else {
    icon.textContent = '🌙';
  }
});

const lines = [
  "I'm always exploring new ways to grow as a developer.",
  "I love turning creative ideas into real time projects."
];

const el1 = document.getElementById("typing-text-1");
const el2 = document.getElementById("typing-text-2");

let lineIndex = 0;
let charIndex = 0;
let isDeleting = false;
let activeElement = el1;

const typingSpeed = 100;
const eraseSpeed = 60;
const pauseTime = 1200;

function type() {
  const currentLine = lines[lineIndex];
  activeElement.textContent = currentLine.substring(0, charIndex);

  if (!isDeleting && charIndex < currentLine.length) {
    charIndex++;
    setTimeout(type, typingSpeed);
  } 
  else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(type, eraseSpeed);
  } 
  else {
    if (!isDeleting) {
      isDeleting = true;
      setTimeout(type, pauseTime);
    } else {
      isDeleting = false;
      charIndex = 0;
      activeElement.textContent = "";
      
      // Switch between line 1 and 2
      if (lineIndex === 0) {
        activeElement = el2;
      } else {
        activeElement = el1;
      }
      
      lineIndex = (lineIndex + 1) % lines.length;
      setTimeout(type, 500);
    }
  }
}

type();

if (window.innerWidth >= 480) {
  type(); // Run typing only on desktop
} else {
  // Just show static text for mobile
  el1.textContent = "I'm always exploring new ways to grow as a developer.";
  el2.textContent = "I love turning creative ideas into real projects.";
}