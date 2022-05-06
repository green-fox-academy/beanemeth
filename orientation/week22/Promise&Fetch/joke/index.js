window.addEventListener('DOMContentLoaded', () => {
const URLforJoke = 'https://api.icndb.com/jokes/random';
const container = document.querySelector('.main-container');
const button = document.querySelector('button');

// button.addEventListener('click', () => {
//     fetch(URLforJoke)
//         .then((response) => response.json())
//         .then((resultJSON) => {
//             const paragraph = document.createElement('p');
//             paragraph.textContent = resultJSON.value.joke;
//             container.appendChild(paragraph);
//         });
// });

button.addEventListener('click', async () => {

    try {
        // GET is the default request method.
        const response = await fetch(URLforJoke);
        if (response.ok) {
            const data = await response.json();
            console.log(data)
            const paragraph = document.createElement('p');
            paragraph.textContent = data.value.joke; //you must add value.joke, you used inspect on the browser, then clicked on console and saw that the data is a whole BIG object. :)
            container.appendChild(paragraph);
        } else {
            console.error(response.statusText);
        }
    } catch (error) {
        console.error(error);
    }

});
});