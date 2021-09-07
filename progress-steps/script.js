const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');
const progress = document.querySelector('#progress');

const stepsItems = document.querySelectorAll('.steps__item');

let step = 0;
let MAX_STEPS = stepsItems.length;

const resetSteps = () => {
  for (let item of stepsItems) {
    item.classList.remove('steps__item--active');
  }
};

const renderSteps = (step) => {
  const segments = MAX_STEPS - 1;
  const width = step / segments;

  progress.style.width = `${width * 100}%`;

  resetSteps();
  for (let i = 0; i <= step; i++) {
    stepsItems[i].classList.add('steps__item--active');
  }
};

const renderBtns = (step) => {
  nextBtn.disabled = false;
  prevBtn.disabled = false;
  if (step === 0) {
    prevBtn.disabled = true;
  } else if (step === MAX_STEPS - 1) {
    nextBtn.disabled = true;
  }
};

const handleNext = () => {
  step++;
  step = Math.min(step, MAX_STEPS - 1);
  renderSteps(step);
  renderBtns(step);
};

const handlePrev = () => {
  step--;
  step = Math.max(0, step);
  renderSteps(step);
  renderBtns(step);
};

prevBtn.addEventListener('click', handlePrev);

nextBtn.addEventListener('click', handleNext);
