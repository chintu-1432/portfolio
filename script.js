// Theme toggle
const toggleBtn = document.getElementById('theme-toggle');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  toggleBtn.textContent =
    document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});


// Load saved theme on page load
window.onload = function () {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
  }

  // Initialize AOS scroll animations
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 1000,
      offset: 100,
      once: true
    });
  }
};
const typedHero = new Typed("#hero-typed-text", {
  strings: [
    "Java Developer ☕",
    "Web Developer 🌐",
    "Let’s Build Something Unique 💡",
    "Open to Collaborations 🤝",
    "Passionate Coder 👨‍💻",
    "Turning Ideas into Code 🔧",
    "Always Learning 🌱"
  ],
  typeSpeed: 60,
  backSpeed: 35,
  backDelay: 1500,
  loop: true,
});
