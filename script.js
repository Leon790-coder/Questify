// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Navbar color change on scroll
window.addEventListener('scroll', () => {
  const nav = document.querySelector('header');
  if (window.scrollY > 50) {
    nav.style.background = 'rgba(0, 0, 0, 0.8)';
  } else {
    nav.style.background = 'rgba(0, 0, 0, 0.6)';
  }
});
