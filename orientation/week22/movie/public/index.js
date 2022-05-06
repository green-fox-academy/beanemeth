async function getGenres() {
    try {
        // GET is the default request method.
        const response = await fetch('/api/genres');
        console.log(response)
        if (response.ok) {
            const dataObject =  await response.json(); //this is the whole BIG object with 3 arrays in it, and there is an object in each array
            //console.log(genres); you cannot type return const something, it needs to be as it is typed now. don't ever do that again!
            return dataObject.genres; //postmanben megnezve ez a key neve, marmint a genres, ez egy egesz object es ez a key neve
        } else {
            console.error(response.statusText);
        }
    } catch (error) {
        console.error(error);
    }
}

async function getMovies(genre) {
    try {
        let response; //itt kell  mert igy van if-en kivul
       if(genre){
        response = await fetch(`/api/movies?genre=${genre}`); 
       }else{ 
        response = await fetch('/api/movies');
        console.log(response)
    }if (response.ok) {
            const dataObject =  await response.json(); 
            
            return dataObject.movies; 
        } else {
            console.error(response.statusText);
        }
    } catch (error) {
        console.error(error);
    }
}


async function createMovieList(genre) {
    let selectedMovies = await getMovies(genre);
    
    let newElems = '<option value="">Select a movie</option>';
    selectedMovies.forEach((movie) => {
        newElems += `<option value="${movie.title}">${movie.title}</option>`;
    });

    return newElems;
}

document.addEventListener('DOMContentLoaded', async () => { // * conitunuing from 3 rows before: therefore this needs an async
    const genreSelect = document.querySelector('#genre-select');
    const movieSelect = document.querySelector('#movie-select');
    const genres = await getGenres(); //* as this needs an await
    console.log(genres)
    genres.forEach((genre) => {
        const newOption = `<option value="${genre.id}">${genre.genre}</option>`;
        genreSelect.innerHTML += newOption;
    });

    movieSelect.innerHTML = await createMovieList();

    const titleElem = document.querySelector('#selected-movie');
    
    genreSelect.onchange = async () => {
        movieSelect.innerHTML = await createMovieList(genreSelect.value); //Uncaught SyntaxError: Unexpected reserved word (at index.js:60:33)
        titleElem.textContent = '-';
    }

    movieSelect.onchange = () => {
        titleElem.textContent = movieSelect.value || '-';
    };
});