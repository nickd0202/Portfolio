// Menu button
const nav = document.getElementById('nav');
const navBtn = document.getElementById('navToggle');
const navContent = document.getElementById('navContent');

function openNav() {
  nav.classList.add('open');
  navBtn.setAttribute('aria-expanded', 'true');
}
function closeNav() {
  nav.classList.remove('open');
  navBtn.setAttribute('aria-expanded', 'false');
}
function toggleNav() {
  nav.classList.contains('open') ? closeNav() : openNav();
}
navBtn.addEventListener('click', (e) => {
  e.stopPropagation();  
  toggleNav();
});
document.addEventListener('click', (e) => {
  if (nav.classList.contains('open') && !nav.contains(e.target)) closeNav();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeNav();
});
navContent.querySelectorAll('a').forEach(a => a.addEventListener('click', closeNav));

// Project Links
document.getElementById('projectsLink').addEventListener('click', e => {
  e.preventDefault();
  document.getElementById('projectDisplay')
          .scrollIntoView({ behavior: 'smooth', block: 'start' });
});
window.addEventListener('load', () => {
    window.scrollTo(0, 0);
  });





  document.getElementById('year').textContent = new Date().getFullYear();