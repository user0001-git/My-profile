// Toggle Dark/Light Mode
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  if (body.classList.contains('dark-mode')) {
    themeToggle.innerHTML = '<i class="fas fa-sun"></i> Mode Terang';
    themeToggle.style.background = '#0f3460';
    themeToggle.style.color = '#fff';
  } else {
    themeToggle.innerHTML = '<i class="fas fa-moon"></i> Mode Gelap';
    themeToggle.style.background = '#fff';
    themeToggle.style.color = '#3f72af';
  }
});

// Animasi Scroll
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

sections.forEach((section) => {
  section.style.opacity = 0;
  section.style.transform = 'translateY(20px)';
  section.style.transition = 'opacity 0.8s, transform 0.8s';
  observer.observe(section);
});