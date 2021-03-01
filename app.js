// changing background color of button on mouse down.

const enter = document.querySelector('button');
const error = document.querySelector('#errorIcon');
const errorMessage = document.querySelector('.errorMessage');
const input = document.querySelector('#emailInput');

function validateEmail(input) {

  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (input != validRegex) {

    enter.style.background = 'pink';
    error.style.visibility = 'visible';
    errorMessage.style.visibility = 'visible';

    return false;

  } else {
    return true;

  }

}
