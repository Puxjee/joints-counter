let count = 0;
let greeting = "Welcome back ";

let countEl = document.getElementById("count-el");
let welcomeEl = document.getElementById("welcome-el");
let saveEl = document.getElementById("save-el");

welcomeEl.innerText = greeting + " 👋";

function increment() {
  count++;
  countEl.innerText = count;
}

function save() {
  let saved = count + " - ";
  saveEl.textContent += saved;
  count = 0;
  countEl.innerText = count;
}

function reset() {
  count = 0;
  countEl.innerText = count;
}

function decrement() {
  count--;
  countEl.innerText = count;
}
