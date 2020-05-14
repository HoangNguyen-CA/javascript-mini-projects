let slideshow = document.querySelector('#slideshow');

let images = [];
images[0] = 'img-1.jpg';
images[1] = 'img-2.jpg';
images[2] = 'img-3.jpg';

let i = 0;
let slide = function () {
  console.log('wow');
  slideshow.src = `./images/${images[i]}`;
  i++;
  if (i >= images.length) i = 0;
  setTimeout(slide, 1000);
};

window.onload = slide;
