let Income = document.getElementById('income');
let Expense = document.getElementById('expense');
let Balance = document.getElementById('balance');

let Name = document.getElementById('name');
let Cost = document.getElementById('cost');
let Button = document.getElementById('button');

let historyContainer = document.querySelector('.history-container');

let dummyTransactions = [];
if (localStorage.getItem('transaction') != null) {
  dummyTransactions = JSON.parse(localStorage.getItem('transaction'));
}

function removeHistory(id) {
  dummyTransactions = dummyTransactions.filter((trans) => {
    return trans.id != id;
  });
  updateLocalStorage();
  init();
}
function createHistory(transaction) {
  let name = transaction.name;
  let cost = transaction.cost;
  let item = document.createElement('div');
  item.classList.add('history-item');

  let sign = '';
  if (cost < 0) {
    item.classList.add('history-failure');
    sign = '-';
  } else {
    item.classList.add('history-success');
    sign = '+';
  }

  item.innerHTML = `
  <p class="history-name">${name}</p>
  <p class="history-price">${sign}$${Math.abs(cost).toFixed(2)}</p>
  <a class="delete-button" onclick="removeHistory(${transaction.id})">x</a>
  `;

  historyContainer.appendChild(item);
}

function addTransaction() {
  if (Name.value.trim() === '' || Cost.value.trim() === '') {
    alert('please add name and amount');
  } else {
    let transaction = {
      id: generateId(),
      name: Name.value,
      cost: +Cost.value,
    };
    dummyTransactions.push(transaction);
    createHistory(transaction);
    updateLocalStorage();
    updateValues();
    Name.value = '';
    Cost.value = '';
  }
}

function updateValues() {
  let income = dummyTransactions.filter((trans) => trans.cost >= 0);

  income = income.reduce((prev, curr) => prev + curr.cost, 0).toFixed(2);

  let expense = dummyTransactions.filter((trans) => trans.cost < 0);
  expense = expense
    .reduce((prev, curr) => {
      return prev + curr.cost;
    }, 0)
    .toFixed(2);

  let total = dummyTransactions
    .reduce((prev, curr) => prev + curr.cost, 0)
    .toFixed(2);

  Income.innerText = `$${income}`;
  Expense.innerText = `$${expense}`;

  Balance.innerText = `$${total}`;
}

function updateLocalStorage() {
  localStorage.setItem('transaction', JSON.stringify(dummyTransactions));
}

function generateId() {
  return Math.floor(Math.random() * 100000000);
}
function init() {
  historyContainer.innerHTML = '';
  dummyTransactions.forEach(createHistory);
  updateValues();
}

Button.addEventListener('click', () => {
  addTransaction();
});

init();
