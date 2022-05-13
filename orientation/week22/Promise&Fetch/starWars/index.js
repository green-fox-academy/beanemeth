// documentation, search, postmanbe bemasolhato a link
//van egy results property, abban van tobb object
//1. fetch main api search 
//2. unordered list, results -. name
//3. event handlers -. fetch result.films

/*
    1. Fetch https://swapi.dev/api/people/?search=<search-term>
    2. Unordered list, results -> name
    3. Event handlers -> fetch result.films
    4. Other unordered list, data.title
*/
const searchTextBox = document.querySelector('input');
const button = document.querySelector('button');
const characters = document.querySelector('.characters');
const movieDetails = document.querySelector('.movies');
let movies; //ez fut le eloszor


// window.onload = () => {
//     getFilm();
// };


async function getPeople() {

    const searchTerm = searchTextBox.value; //must be in the function
    const url = `https://swapi.dev/api/people/?search=${searchTerm}`;

    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            return data.results;
        } else {
            console.error(response.statusText);
            return;
        }
    } catch (error) {
        console.error(error);
        return;
    }
}



async function getFilm(filmURL) {
    try {
        const response = await fetch(filmURL);
        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            console.error(response.statusText);
            return;
        }
    } catch (error) {
        console.error(error);
        return;
    }
}

document.addEventListener('DOMContentLoaded', async () => { //ez fut le masodiknak
    const button = document.querySelector('button');
    button.onclick = async function () {
        const searchTextBox = document.querySelector('input');
        //const searchTerm = searchTextBox.value;
        const people = await getPeople();


        const personListUL = document.querySelector('.characters');
        personListUL.innerHTML = ''; //igy torlodik ki az elozo kereses eredmenye

        people.forEach((person) => {
            const personLI = document.createElement('li');
            personLI.textContent = person.name;
            personListUL.appendChild(personLI);

            personLI.onclick = function () {

                const movieListUL = document.querySelector('.movies');
                movieListUL.innerHTML = '';

                person.films.forEach(async (filmURL) => {
                    const filmObject = await getFilm(filmURL);
                    console.log(filmObject);
                    const movieLI = document.createElement('li');
                    movieLI.innerHTML = `${filmObject.title}:(${filmObject.release_date})`;

                    movieListUL.appendChild(movieLI);
                });
            }
        });
    }
});



