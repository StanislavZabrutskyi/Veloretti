const menu = document.getElementById('menu');
const close_btn = document.getElementById('burger-close');

close_btn.addEventListener('click', () => {
  menu.classList.toggle('_open');
});