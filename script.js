const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.navigation');
menuButton.addEventListener('click', () => {
  const opened = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(opened));
  menuButton.textContent = opened ? '×' : '☰';
});
document.querySelectorAll('.navigation a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.textContent = '☰';
}));
const themeButton = document.querySelector('.theme-toggle');
const savedTheme = localStorage.getItem('paulo-theme');
if (savedTheme === 'light') document.body.classList.add('light');
themeButton.addEventListener('click', () => {
  document.body.classList.toggle('light');
  localStorage.setItem('paulo-theme', document.body.classList.contains('light') ? 'light' : 'dark');
});
document.getElementById('year').textContent = new Date().getFullYear();
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.section-heading, .about-grid > *, .experience-card, .education-panel, .skills-panel, .project-card, .contact-wrap > *').forEach(el => {
  el.classList.add('reveal');
  observer.observe(el);
});