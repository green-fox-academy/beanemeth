const button = document.querySelector('button');
const textContainer = document.querySelector('.text-container');
let counter = 0;

setTimeout(() => {
  button.addEventListener('click', () => {
    counter++;
    if (counter >= 3) {
      const text = '5 seconds ellapsed and clicked 3 times';
      textContainer.textContent = text;
    }
  });
}, 5000);
    
    // Click Three Times
    // Create a simple HTML document with one button.
    // If the user clicks the button 3 times, and 5 seconds is already elapsed since the page is loaded,
    // a text should appear under the button:
    // 5 seconds elapsed and clicked 3 times
    // If the user starts clicking before the first 5 seconds, nothing should be printed