// Movie Selector

// GET /api/movies
async function getMovies() {
    try {
        // GET is the default request method.
        const response = await fetch('/api/movies');
        if (response.ok) {
            const data = await response.json();
            console.log(data);
        } else {
            console.error(response.statusText);
        }
    } catch (error) {
        console.error(error);
    }
}

// POST /api/movies
async function addMovie() {
    const newMovie = {
        title: 'Sunset Boulevard',
        genre_id: 2,
    };

    try {
        // The second argument is an object that contains the request
        // parameters.
        const response = await fetch('/api/movies', {
            method: 'POST',
            // JSON.stringify converts the `newMovie` object into a JSON string.
            body: JSON.stringify(newMovie),
            headers: {
                // The backend needs to know the format of the request body
                // so that it can decide how to decode it.
                'Content-Type': 'application/json',
            },
        });

        // There might not be any useful data in the response body. In this
        // case we don't need to wait for it to download.
        if (!response.ok) {
            console.error(response.statusText);
        }
    } catch (error) {
        console.error(error);
    }
}