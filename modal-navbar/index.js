let hamburger = document.querySelector('.hamburger');
let nav = document.querySelector('.nav-links');
let button = document.querySelector('.btn');
let modal = document.querySelector('#modal');
let backdrop = document.querySelector('#backdrop');
let closeBtn = document.querySelector('#modal a');

let closeModal = () => {
  modal.classList.remove('modal-active');
  backdrop.classList.remove('backdrop-active');
};

hamburger.addEventListener('click', () => {
  nav.classList.toggle('nav-active');
});

button.addEventListener('click', () => {
  modal.classList.add('modal-active');
  backdrop.classList.add('backdrop-active');
});

backdrop.addEventListener('click', closeModal);
closeBtn.addEventListener('click', closeModal);
