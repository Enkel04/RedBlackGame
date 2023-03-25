'use strict';

const red = document.querySelector('.btn--red');
const black = document.querySelector('.btn--black');
const newgame = document.querySelector('.btn--green');
const text = document.querySelector('.textcheck');
const image = document.querySelector('.stableimage');
const jackpot = document.querySelector('.jackpot');
const withdraw = document.querySelector('.btn--withdraw');
const appDiv = document.getElementById('app');
const money = document.getElementById('money');
const availableCash = document.getElementById('availableCash');
const enterCashBtn = document.getElementById('enterCash');
const winningPrice = document.querySelector('.winningprice');

var score = 0;

let cash = 0;

enterCashBtn.addEventListener('click', () => {
  if (money.value) {
    cash = cash + money.value * 1;
    availableCash.innerText = cash;
    money.value = '';
  }
});

red.addEventListener('click', function () {
  if (cash !== 0) {
    const card = Math.trunc(Math.random() * 52) + 1;
    image.src = `./cards/${card}.png`;
    if (card >= 27) {
      text.textContent = `You win!`;
      score++;
      jackpot.textContent = `Jackpot scores: ${score}x`;
      cash *= 2;
      availableCash.innerText = cash;
      enterCashBtn.disabled = true;
    } else {
      text.textContent = `Lose!`;
      score = 0;
      jackpot.textContent = `Jackpot scores: 0`;
      cash *= 0;
      availableCash.innerText = cash;
      enterCashBtn.disabled = true;
    }

    if (card >= 27 && score === 8) {
      text.textContent = `You won Jackpot!`;
    } else if (card <= 26 && score === 8) {
      text.textContent = `You won Jackpot!`;
    }
  } else {
    alert('ENTER MONEY!');
  }
});

black.addEventListener('click', function () {
  if (cash !== 0) {
    const card = Math.trunc(Math.random() * 52) + 1;
    image.src = `./cards/${card}.png`;
    if (card <= 26) {
      score++;
      jackpot.textContent = `Jackpot scores: ${score}x`;
      text.textContent = `You win!`;
      cash *= 2;
      availableCash.innerText = cash;
      enterCashBtn.disabled = true;
    } else {
      text.textContent = `Lose!`;
      score = 0;
      jackpot.textContent = `Jackpot scores: 0`;
      cash *= 0;
      availableCash.innerText = cash;
      enterCashBtn.disabled = true;
    }

    if (card >= 27 && score === 8) {
      text.textContent = `You won Jackpot!`;
    } else if (card <= 26 && score === 8) {
      text.textContent = `You won Jackpot!`;
    }
  } else {
    alert('ENTER MONEY!');
  }
});

newgame.addEventListener('click', function () {
  text.textContent = `𝕷𝖊𝖙'𝖘 𝖘𝖙𝖆𝖗𝖙 𝖕𝖑𝖆𝖞𝖎𝖓𝖌!`;
  image.src = `./cards/default-card.png`;
  score = 0;
  jackpot.textContent = `Jackpot scores: 0`;
  enterCashBtn.disabled = false;
  winningPrice.textContent = ``;
  cash *= 0;
  availableCash.innerText = cash;
});

withdraw.addEventListener('click', function () {
  text.textContent = `𝕰𝖓𝖉 𝖔𝖋 𝖌𝖆𝖒𝖊!`;
  image.src = `./cards/default-card.png`;
  score = 0;
  jackpot.textContent = `Jackpot scores: 0`;
  enterCashBtn.disabled = false;
  winningPrice.textContent = `YOU WON ${cash}$`;
});
