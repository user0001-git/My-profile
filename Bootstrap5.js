// Toggle Dark/Light Mode
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  if (body.classList.contains('dark-mode')) {
    themeToggle.innerHTML = '<i class="fas fa-sun"></i> Mode Terang';
  } else {
    themeToggle.innerHTML = '<i class="fas fa-moon"></i> Mode Gelap';
  }
});