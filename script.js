'use strict';

const display = document.getElementById('password-display');
const copyBtn = document.getElementById('copy-btn');
const lengthSlider = document.getElementById('length-slider');
const lengthValue = document.getElementById('length-value');
const generateBtn = document.getElementById('generate-btn');

const lowercaseChk = document.getElementById('lowercase');
const uppercaseChk = document.getElementById('uppercase');
const numbersChk = document.getElementById('numbers');
const symbolsChk = document.getElementById('symbols');

const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

lengthSlider.addEventListener('input', () => {
    lengthValue.textContent = lengthSlider.value;
});

generateBtn.addEventListener('click', () => {
    let allowedChars = "";
    let password = "";
    const length = parseInt(lengthSlider.value);

    if (lowercaseChk.checked) allowedChars += lowerLetters;
    if (uppercaseChk.checked) allowedChars += upperLetters;
    if (numbersChk.checked) allowedChars += numbers;
    if (symbolsChk.checked) allowedChars += symbols;

    if (allowedChars === "") {
        display.value = "Select settings!";
        return;
    }

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    display.value = password;
});

copyBtn.addEventListener('click', () => {
    const password = display.value;
    if (!password || password.includes("Select")) return;

    navigator.clipboard.writeText(password).then(() => {
        copyBtn.textContent = "DONE!";
        setTimeout(() => {
            copyBtn.textContent = "COPY";
        }, 1000);
    });
});