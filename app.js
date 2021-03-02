/* what needs to be done:

1. add an event listener to the submit button to initiate the validation testing
2. need to test the email input against the RegEx to see if it works.
3. if the input is valid, then the form can submit
4. if not, then the form cannot submit, and the error messages must show
5. must be able to re submit the form

more or less in this order! */

// getting the form and the submit button from the document.
const form = document.querySelector('form');
const submit = document.querySelector('#submitBtn')



// testing input against the RegEx

function validateEmail(input) {
  const regEx = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  if (regEx.test(input)) {
    return true;
  }
};

// add an event listener to the submit button

submit.addEventListener('click', (e) => {
  e.preventDefault()
  if (validate()) {} 
});

// function to show error messages if the email is not valid.

function validate() {

  // select the input field, error message and error icon
  const email = document.querySelector('.emailInput');
  const message = document.querySelector('.errorMessage');
  const icon = document.querySelector('.errorIcon')

  // if the there is nothing entered in the email input
  if (email.value == '') {
    email.classList.add('visible');
    message.classList.add('visible');
    icon.classList.add('visible');
    return false;
  }

  // if the email doesn't match the RegEx
  if (!validateEmail(email.value)) {
    email.classList.add('visible');
    message.classList.add('visible');
    icon.classList.add('visible');
    return false;
  } else {
    email.classList.remove('visible');
    message.classList.remove('visible');
    icon.classList.remove('visible');
    return true;
  }

};
