const body = document.querySelector('body');
window.onload = async () => {
    //window.location.href = `/profile/${username.value}`
    const link= window.location.href.split("/");
    console.log(link);
    let param= link[4];
    console.log(param)
    await insertProfileData(param);
    
};


async function insertProfileData(username) {
    
    try {

        const response = await fetch(`/api/users/${username}`); 
        console.log(response)
        if (response.ok) {
            const dataObject = await response.json(); //shift command L - to change all variable at the same time
            console.log(dataObject); //itt lattuk meg h ez nem egy array, hanem egy object, a bongeszoben es ezert nem kell for loop es 
            console.log(dataObject.age);
                const h1 = document.createElement('h1');
                h1.innerText = dataObject.nickname + "(" + dataObject.age +','+ dataObject.gender +")";

                const image = document.createElement('img');
                image.src = dataObject.profile_picture_url;
                image.className = 'profile_picture_url';
                
                const p = document.createElement('p');
                p.innerText = dataObject.self_description;
                body.appendChild(h1);
                body.appendChild(image);
                body.append(p);
            
            
        } else {
            console.error(response.statusText);
        }
    } catch (error) {
        console.error(error);
    }
}