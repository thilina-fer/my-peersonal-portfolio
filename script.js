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