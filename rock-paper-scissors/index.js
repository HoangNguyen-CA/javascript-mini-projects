let score1 = document.getElementById('score1');
let score2 = document.getElementById('score2');

let userscore = 0;
let computerscore = 0;

let display = document.getElementById('display');

let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');

function calculateResult() {
  let rand = Math.random();
  let choice = '';
  if (rand <= 0.33) {
    choice = 1;
  } else if (rand <= 0.66) {
    choice = 2;
  } else {
    choice = 3;
  }
  return choice;
}
function userWin(choice1, choice2) {
  display.innerHTML = `You chose <span class="highlight">${convertChoice(
    choice1
  )}</span> and the computer chose <span class="highlight">${convertChoice(
    choice2
  )}</span>, you win!`;
  userscore++;
  score1.innerText = userscore;
}

function computerWin(choice1, choice2) {
  display.innerHTML = `You chose <span class="highlight">${convertChoice(
    choice1
  )}</span> and the computer chose <span class="highlight">${convertChoice(
    choice2
  )}</span>, you lost!`;
  computerscore++;
  score2.innerText = computerscore;
}

function tie(choice) {
  display.innerHTML = `You and the computer both chose <span class="highlight">${convertChoice(
    choice
  )}</span>, its a tie!`;
}

function convertChoice(choice) {
  if (choice === 1) return 'rock';
  if (choice === 2) return 'paper';
  if (choice === 3) return 'scissors';
}

function handle(res1, res2) {
  if (res1 === 1) {
    if (res2 === 1) {
      tie(res1);
    } else if (res2 === 2) {
      computerWin(res1, res2);
    } else {
      userWin(res1, res2);
    }
  }

  if (res1 === 2) {
    if (res2 === 1) {
      userWin(res1, res2);
    } else if (res2 === 2) {
      tie(res1);
    } else {
      computerWin(res1, res2);
    }
  }

  if (res1 === 3) {
    if (res2 === 1) {
      computerWin(res1, res2);
    } else if (res2 === 2) {
      userWin(res1, res2);
    } else {
      tie(res1);
    }
  }
}

rock.addEventListener('click', () => {
  let comp = calculateResult();
  handle(1, comp);
});

paper.addEventListener('click', () => {
  let comp = calculateResult();
  handle(2, comp);
});

scissors.addEventListener('click', () => {
  let comp = calculateResult();
  handle(3, comp);
});
