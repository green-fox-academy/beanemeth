const api_key = 'G6n4EGdVrsdYXaAEXFPS8h6H2FI5lHFt';
const body = document.querySelector('body');
const request_url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=apollo11&api-key=${api_key}`;

// Search interesting articles on The New York Times.

// Create an Account and register an app using localhost as the website URL to get your API key.

// Use the Article Search API
// Find articles about the moon landing by Apollo 11
// Display the following fields in a list
// Headline
// Snippet
// Publication date
// Create a permalink for each article

window.onload = () => {
    getArticles();
};


async function getArticles() {

    try {
        const response = await fetch(request_url);
        if (response.ok) {
            const data = await response.json();
            console.log(data)
            let articleList = data.response.docs;
            for (let index = 0; index < articleList.length; index++) {
            let headline = document.createElement('h2');
            headline.innerText = articleList[index].headline.main;
            body.appendChild(headline);
            let snippet = document.createElement('h3');
            snippet.innerText = articleList[index].snippet;
            body.appendChild(snippet);
            let pubDate = document.createElement('h4');
            pubDate.innerText = articleList[index].pub_date;
            body.appendChild(pubDate);
            let a = document.createElement('a');
            a.innerHTML = 'click me';
            body.appendChild(a);
            a.addEventListener('click', () => {
                a.setAttribute('href', articleList[index].web_url);
            });
        }
        } else {
            console.error(response.statusText);
            return;
        }
    } catch (error) {
        console.error(error);
        return;
    }
}






