const contents = document.querySelectorAll('.content');

const checkBoxes = () => {
  const triggerPoint = window.innerHeight - 200;

  for (let content of contents) {
    const top = content.getBoundingClientRect().top;

    console.log(top, triggerPoint);

    if (top < triggerPoint) {
      content.classList.add('content--show');
    } else {
      content.classList.remove('content--show');
    }
  }
};

window.addEventListener('scroll', checkBoxes);

checkBoxes();
