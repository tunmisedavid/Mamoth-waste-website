const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.headers');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
}); 
document.querySelectorAll('.link').forEach(n => {
  n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  });
});