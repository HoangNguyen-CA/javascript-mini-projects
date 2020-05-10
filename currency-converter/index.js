let currency1 = document.querySelector('#currency-1');
let currency2 = document.querySelector('#currency-2');

let amount1 = document.querySelector('#amount-1');
let amount2 = document.querySelector('#amount-2');

const rate = document.querySelector('#rate');
const swap = document.querySelector('#swap');

function calculate() {
  fetch(' https://api.exchangerate-api.com/v6/latest');
}

currency1.addEventListener('change', calculate);
currency2.addEventListener('input', calculate);
amount1.addEventListener('change', calculate);
amount2.addEventListener('input', calculate);
