import './css/style.css';

const form = document.getElementById('form');
const email = document.getElementById('email');
const country = document.getElementById('country');
const postal = document.getElementById('postal');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const successMsg = document.getElementById('success-msg');

const fields = [email, country, postal, password, confirmPassword];

fields.forEach((field) => {
  field.addEventListener('blur', () => validateField(field));
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let isValid = true;

  fields.forEach((field) => {
    const valid = validateField(field);
    if (!valid) isValid = false;
  });

  if (isValid) {
    successMsg.textContent = 'Form submitted.';
    form.reset();
    fields.forEach((f) => f.classList.remove('invalid'));
  }
});

function validateField(field) {
  const error = field.nextElementSibling;
  let msg = '';

  if (field.validity.valueMissing) {
    msg = 'This field is required.';
  } else if (field.validity.typeMismatch) {
    msg = 'Invalid format.';
  } else if (field.validity.tooShort) {
    msg = `Minimum length: ${field.minLength}`;
  } else if (field === confirmPassword && field.value !== password.value) {
    msg = 'Passwords do not match.';
  } else if (!field.validity.valid) {
    msg = 'Invalid input.';
  }

  if (msg) {
    error.textContent = msg;
    field.classList.add('invalid');
    return false;
  } else {
    error.textContent = '';
    field.classList.remove('invalid');
    return true;
  }
}
