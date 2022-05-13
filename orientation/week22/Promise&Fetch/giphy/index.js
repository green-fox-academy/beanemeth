// DO NOT ever store API keys in production code!
const apiKey = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';

const limit = 16;
const topic = 'kitten';

document.addEventListener('DOMContentLoaded', async () => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${topic}&limit=${limit}`;
    const container = document.querySelector('#container');

    try {
        const response = await fetch(url);
        if (response.ok) {
            const result = await response.json();

            result.data.forEach((gif) => {
                const div = document.createElement('div');
                div.innerHTML = `
                    <a href="${gif.images.original.url}">
                        <img src="${gif.images.downsized.url}" alt="Picture of a kitten">
                    </a>
                `;
                container.appendChild(div);
            });
        } else {
            console.error(response.statusText);
            container.innerText = 'Something went wrong'; 
        }
    } catch (error) {
        console.error(error);
        container.innerText = 'Something went wrong';
    }
});