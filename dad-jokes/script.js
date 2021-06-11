const jokeEl = document.querySelector('#joke');
const buttonEl = document.querySelector('#generate');

let mainJoke = '';

const fetchJoke = async () => {
  const res = await fetch('https://icanhazdadjoke.com', {
    headers: { Accept: 'application/json' },
  });
  const joke = await res.json();
  changeMainJoke(joke.joke);
};

const changeMainJoke = (joke) => {
  mainJoke = joke;
  jokeEl.innerText = mainJoke;
};

buttonEl.addEventListener('click', () => {
  fetchJoke();
});

fetchJoke();
