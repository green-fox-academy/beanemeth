// import TimeAgo from 'javascript-time-ago'

// // English.
// import en from 'javascript-time-ago/locale/en.json'

// TimeAgo.addDefaultLocale(en)

// // Create formatter (English).
// const timeAgo = new TimeAgo('en-US')

window.onload = () => {
    getPosts();
    upVotePost(id);
    downVotePost(id);
    //event.preventDefault();
};


const mainURL = '/posts';


async function upVotePost(id) {
    try {
        // GET is the default request method.
        const response = await fetch(`${mainURL}/${id}/upvote`, { method: 'PUT' });
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            return data;
        } else {
            console.error(response.statusText);
        }
    } catch (error) {
        console.error(error);
    }
}

async function downVotePost(id) {
    try {
        // GET is the default request method.
        const response = await fetch(`${mainURL}/${id}/downvote`, { method: 'PUT' });
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            return data;
        } else {
            console.error(response.statusText);
        }
    } catch (error) {
        console.error(error);
    }
}


async function getPosts() {
    //const posts = document.querySelector('.post');
    const posts = document.createElement('div');
    posts.className = 'posts';
    const postCard = document.createElement('div');
    postCard.className = 'post-card';
    const leftContainer = document.querySelector(".left-container")
    try {

        const response = await fetch('/post'); //ezt csak siman ugy teszteljuk h http://localhost:3400/ , nem kell utana /post
        console.log(response)
        if (response.ok) {
            const dataArray = await response.json();
            for (let index = 0; index < dataArray.length; index++) {
                let submittedTime = 
                new Date((dataArray[index].timestamp)); //elosztani 60al //new Date(element.timestamp *1000).toLocaleString();
                let timeP = document.createElement('p');
                timeP.innerHTML = `submitted on ${submittedTime}`;
            
                let title = document.createElement('h4');
                title.innerText = dataArray[index].title;
                posts.appendChild(title);
                //const br = createElement('br');
                //posts.appendChild(br);
                title.addEventListener('click', () => {
                    title.setAttribute('href', dataArray[index].url);
                });
                const votes = document.createElement('div');
                votes.className = 'votes';

                const arrowUp = document.createElement('img');
                arrowUp.src = './upvote.png';
                arrowUp.className = 'arrow up';
                arrowUp.setAttribute('currentId', dataArray[index].id);

                const score = document.createElement('h4');
                score.className = 'score';
                score.innerText = dataArray[index].score;

                const arrowDown = document.createElement('img');
                arrowDown.src = './downvote.png';
                arrowDown.className = 'arrow down';
                arrowDown.setAttribute('currentId', dataArray[index].id); 

                votes.appendChild(arrowUp);
                votes.appendChild(score);
                votes.appendChild(arrowDown);
                posts.appendChild(votes);
                posts.appendChild(timeP);
                postCard.appendChild(posts)
                leftContainer.appendChild(postCard);

                arrowUp.addEventListener('click', async (event) => {
                        const result = await upVotePost(Number(event.target.getAttribute('currentId')));
                                score.innerText = result.score;  
                    
                });

                arrowDown.addEventListener('click', async (event) => {
                    const result = await downVotePost(Number(event.target.getAttribute('currentId')));         
                      score.innerText = result.score;    
                
            });

            }
            //return dataArray; 
        } else {
            console.error(response.statusText);
        }
    } catch (error) {
        console.error(error);
    }
}


//document.addEventListener('DOMContentLoaded', async () => { });


        
      
 