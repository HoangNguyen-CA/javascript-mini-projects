let nextButton = document.querySelector('#carousel-next');
let prevButton = document.querySelector('#carousel-prev');

let carouselSlide = document.querySelector('.carousel__slide');
let carouselItems = document.querySelectorAll(
  '.carousel__slide .carousel__item'
);

let counter = 1;
carouselSlide.style.transform = `translateX(${-100 * counter}%)`;

nextButton.addEventListener('click', () => {
  if (counter >= carouselItems.length - 1) return;
  carouselSlide.style.transition = `transform 0.4s ease-in-out`;
  counter++;
  carouselSlide.style.transform = `translateX(${-100 * counter}%)`;
});

prevButton.addEventListener('click', () => {
  if (counter <= 0) return;

  carouselSlide.style.transition = `transform 0.4s ease-in-out`;
  counter--;
  carouselSlide.style.transform = `translateX(${-100 * counter}%)`;
});

carouselSlide.addEventListener('transitionend', () => {
  if (counter === 0) {
    carouselSlide.style.transition = `none`;
    counter = carouselItems.length - 2;
    carouselSlide.style.transform = `translateX(${-100 * counter}%)`;
  } else if (counter === carouselItems.length - 1) {
    carouselSlide.style.transition = `none`;
    counter = 1;
    carouselSlide.style.transform = `translateX(${-100 * counter}%)`;
  }
});
