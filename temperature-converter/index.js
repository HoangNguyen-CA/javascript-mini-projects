let label = document.querySelector('#label');
let temperature = document.querySelector('#temperature');

let temperatureDisplay = document.querySelector('.temperature-display');
let converted = document.querySelector('.converted');

let swap = document.querySelector('.swap-btn');
let calculate = document.querySelector('#submit');

let celsius = true;

let convertFahrenheit = (temp) => Math.round(temp * (9 / 5) + 32);
let convertCelsius = (temp) => Math.round((temp - 32) * (5 / 9));

swap.addEventListener('click', (e) => {
  e.preventDefault();
  if (celsius) {
    label.innerText = 'Temperature in fahrenheit:';
    temperatureDisplay.innerText = 'Temperature in celsius:';
    converted.innerText = `${convertCelsius(temperature.value)}`;

    celsius = false;
  } else {
    label.innerText = 'Temperature in celsius:';
    temperatureDisplay.innerText = 'Temperature in fahrenheit:';
    converted.innerText = `${convertFahrenheit(temperature.value)}`;

    celsius = true;
  }
});

calculate.addEventListener('click', (e) => {
  e.preventDefault();
  if (celsius) {
    converted.innerText = convertFahrenheit(temperature.value);
  } else {
    converted.innerText = convertCelsius(temperature.value);
  }
});
