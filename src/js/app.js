import {cashback} from "./lib.js";

const amountEl = document.getElementById('amount');
const calculateEl = document.getElementById('calculate');
const resultEl = document.getElementById('result');

function reactToClick() {
    const amount = amountEl.value;
    resultEl.textContent = cashback(amount);
}

calculateEl.addEventListener('click', reactToClick);
