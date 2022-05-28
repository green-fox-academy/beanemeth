const body = document.querySelector('body');
window.onload = async () => {

    const like = document.querySelector('#like');
    like.addEventListener('click', async (event) => {

        await insertRandomProfileData();
        await fetchMatch() //csak a likenal hivjuk meg
    });

    const dislike = document.querySelector('#dislike');
    dislike.addEventListener('click', async (event) => {

        await insertRandomProfileData();
    });

};

async function fetchMatch() {

    try {

        const response = await fetch('/api/likes', {
            method: 'POST',

            body: JSON.stringify({ source_username, target_username }),
            headers: {

                'Content-Type': 'application/json',
            },
        });
        const data = await response.json();
        console.log(data)
        if (response.ok && data.matched) {
            alert("It's a match")
        }
        target_username = await getRandomProfile();

    } catch (error) {
        console.error(error);

    }
}


async function insertRandomProfileData() {
    const username = window.location.href.split("/")[4];
    try {

        const response = await fetch(`/api/random-user?username=${username}`);
        console.log(response)
        if (response.ok) {
            const data = await response.json();
            console.log(data);


            const h4 = document.createElement('h4');
            h4.innerText = `You are logged in as ${username}`

            const h1 = document.createElement('h1');
            h1.innerText = data.nickname + "(" + data.age + ',' + data.gender + ")";

            const image = document.createElement('img');
            image.src = data.profile_picture_url;
            image.className = 'profile_picture_url';
            image.alt = "error, image not found";

            const p = document.createElement('p');
            p.innerText = data.self_description;
            body.appendChild(h4);
            body.appendChild(h1);
            body.appendChild(image);
            body.append(p);

            return data.username;

        } else {
            window.location.assign(`/public/error.html`);
        }
    } catch (error) {
        console.error(error);
    }
}





