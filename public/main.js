// consts
const empty = '';


// dom elements
let form = null;


// auto initialization
init();


function init() {
  // get dom elements
  form = document.getElementById('form');

  // add event listeners
  form.addEventListener('submit', onFormSubmit);
}

// events
function onFormSubmit(event) {
  event.preventDefault();
  event.stopPropagation();

  // soil form
  form.dataset.dirty = true;

  const isValid = validateForm();
  if (!isValid) {
    return;
  }
}

function soilForm() {
  form.dataset.dirty = true;
}

function validateForm() {
  const isNameValid = validateName();
  form.dataset.validName = isNameValid;
  
  const isPasswordValid = validatePassword();
  form.dataset.validPassword = isPasswordValid;

  return isNameValid && isPasswordValid;
}

function validateName() {
  let errorMessage = empty;

  const value = form.username.value;

  if (value === empty) {
    errorMessage = 'Name is required.'
  }

  form.username.setCustomValidity(errorMessage);

  return errorMessage === empty;
}

function validatePassword() {
  let errorMessage = empty;

  const value = form.password.value;

  if (value === empty) {
    errorMessage = 'Password is required.'
  }

  form.password.setCustomValidity(errorMessage);

  return errorMessage === empty;
}
