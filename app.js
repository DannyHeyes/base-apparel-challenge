
// changing background color of button on mouse down.

const enter = document.querySelector('button');
const error = document.querySelector('#errorIcon');
const errorMessage = document.querySelector('.errorMessage');

enter.addEventListener('click', () => {
  enter.style.background = 'pink';
  error.style.visibility = 'visible';
  errorMessage.style.visibility = 'visible';
});
