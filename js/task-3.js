const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', (event) => {
const inputName = event.currentTarget.value.trim();

if (inputName === '') nameOutput.textContent = 'Anonymous';
else nameOutput.textContent = inputName;

});