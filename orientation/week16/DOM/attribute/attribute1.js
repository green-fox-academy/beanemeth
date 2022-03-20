//   Write the image's url to the console.
const image = document.querySelector('img');
const url = image.getAttribute('src');
console.log(url);
//   Replace the image with a picture of your favorite animal.
image.setAttribute(
    'src',
    'https://cdn.britannica.com/95/206395-050-02B81B30/Red-fox-Vulpes-vulpes.jpg'
);
//   Make the link point to the Green Fox Academy website.
const link = document.querySelector('a');
link.setAttribute('href', 'https://www.greenfoxacademy.com/');
//   Disable the second button.
const button = document.querySelector('.this-one');
button.disabled = true;
//   Replace its text with 'Don't click me!'.

button.innerText = "Don't click me!";