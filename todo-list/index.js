let input = document.querySelector('#todoInput');
let submit = document.querySelector('#submitButton');
let clear = document.querySelector('#clearButton');

let todoList = document.querySelector('#todoList');

let todos = [];
if (localStorage.getItem('todos') != null) {
  console.log(`fetched all todos: ${localStorage.getItem('todos')}`);
  todos = JSON.parse(localStorage.getItem('todos'));
}

let doneTodos = [];
if (localStorage.getItem('doneTodos') != null) {
  console.log(`fetched done todos: ${localStorage.getItem('doneTodos')}`);
  doneTodos = JSON.parse(localStorage.getItem('doneTodos'));
}

function addTodo(text) {
  let todo = { id: generateId(), text };
  todos.push(todo);
  updateLocalStorage();

  addToDom(todo);
}

function addToDom(todo) {
  let todoItem = document.createElement('li');
  todoItem.id = todo.id;
  let found = doneTodos.findIndex((temp) => {
    return temp === todo.id;
  });
  if (found >= 0) {
    todoItem.classList.add('todo__list__item--done');
  }

  todoItem.classList.add('todo__list__item');
  todoItem.innerHTML = ` <p class="todo__item__text">${todo.text}</p>
    <button class="todo__item__button" onclick="removeTodo(${todo.id})">X</button>`;
  todoList.appendChild(todoItem);
}

function removeTodo(id) {
  let found = doneTodos.findIndex((temp) => {
    return temp === id;
  });
  if (found !== -1) {
    doneTodos.splice(found, 1);
  } else {
    doneTodos.push(id);
  }
  updateLocalStorage();
  let domItem = document.getElementById(`${id}`);

  domItem.classList.toggle('todo__list__item--done');
}

function clearTodos() {
  todos = todos.filter((todo) => {
    for (temp of doneTodos) {
      if (todo.id === temp) return false;
    }
    return true;
  });
  doneTodos = [];
  updateLocalStorage();
  init();
}

function updateLocalStorage() {
  localStorage.setItem('todos', JSON.stringify(todos));
  localStorage.setItem('doneTodos', JSON.stringify(doneTodos));
}

function init() {
  todoList.innerHTML = '';

  todos.forEach((todo) => {
    addToDom(todo);
  });
}

function generateId() {
  return Math.round(Math.random() * 100000000);
}

submit.addEventListener('click', () => {
  addTodo(input.value);
});

clear.addEventListener('click', () => {
  clearTodos();
});
init();
