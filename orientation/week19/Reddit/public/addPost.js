window.onload = () => {
    const button = document.querySelector('button')
    button.addEventListener('click', async (event) => {
        const url = document.querySelector('#url');
        const title = document.querySelector('#title'); 
        //console.log(event);
        event.preventDefault();
        await loadPage();
        url.innerHTML ='';
        title.innerHTML ='';
    });
};
const mainURL = '/posts';


// POST /api/movies
async function loadPage() {
    

    const url = document.querySelector('#url');
    const title = document.querySelector('#title');
    
    const newPost = {
        url: url.value,
        title: title.value,
    };

    try {
        // The second argument is an object that contains the request
        // parameters.
        const response = await fetch(`${mainURL}`, {
            method: 'POST',
            // JSON.stringify converts the `newMovie` object into a JSON string.
            body: JSON.stringify(newPost), //req bodyba rakja bele az adatokat
            headers: {
                // The backend needs to know the format of the request body
                // so that it can decide how to decode it.
                'Content-Type': 'application/json',
            },
        });
        const data = await response.json(); //response bodyjabol kiszedi az adatokat
        console.log(data)
        if (response.ok) {
            window.location.href = '/index.html';
        } 
        // There might not be any useful data in the response body. In this
        // case we don't need to wait for it to download.
        if (!response.ok) {
        console.error(response.statusText);
        }
    } catch (error) {
        console.error(error);

    }
}

