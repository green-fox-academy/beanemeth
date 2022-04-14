window.addEventListener('DOMContentLoaded', () => {
const button = document.querySelector('button');
const textContainer = document.querySelector('.text-container');

button.addEventListener('click', () => {
  const text = '2 seconds ellapsed';
  setTimeout(() => {
    textContainer.textContent = text;
  }, 2000);
});
});

// Delayed Click
// Create a simple HTML document with one button.
//  If the user clicks the button it should wait 2 seconds 
//  and it should show a text under the button: 2 seconds ellapsed