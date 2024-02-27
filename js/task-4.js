const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
event.preventDefault(); 

const formElements = event.target.elements;
const formData = {};

for (const element of formElements) {
if (element.tagName === 'INPUT') {
    const value = element.value.trim();
    formData[element.name] = value;
    }
}

const allFieldsFilled = Object.values(formData).every((value) => value !== '');

if (allFieldsFilled) {
    console.log('Form data:', formData);
    loginForm.reset();
} else {
    alert('All form fields must be filled in.');
}
}
