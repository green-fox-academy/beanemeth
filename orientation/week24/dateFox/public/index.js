window.onload = () => {
    // getCheckedValue();
    const button = document.querySelector('button')
    button.addEventListener('click', async (event) => {
        
        //console.log(event);
        event.preventDefault();
        await loadPage();
    });
};
const mainURL = '/api/users';


async function loadPage() {
    
    const username = document.querySelector('#username');
    const nickname = document.querySelector('#nickname');
    const iAmbutton= document.querySelector('input[name="iam"]:checked');
    const birth_year = document.querySelector('#year');
    const target_gender = document.querySelector('input[name="looking-for"]:checked');
    const aboutMe = document.querySelector('#aboutme');
    const profile_picture_url = document.querySelector('#url');

    
    const newProfile = {
        username: username.value,
        nickname: nickname.value,
        birth_year: birth_year.value,
        gender: iAmbutton.value,
        target_gender: target_gender.value,
        self_description: aboutMe.value,
        profile_picture_url: profile_picture_url.value,

    };

    try {
     
        const response = await fetch(`${mainURL}`, {
            method: 'POST',
            body: JSON.stringify(newProfile), //req bodyba rakja bele az adatokat
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await response.json(); //response bodyjabol kiszedi az adatokat
        console.log(data)
        if (response.ok) {
            window.location.href = `/profile/${username.value}`;
        }  
        // There might not be any useful data in the response body. In this
        // case we don't need to wait for it to download.
        // if (!response.ok) {
        //     console.error(response.statusText);
        // }
    } catch (error) {
        console.error(error);

    }
}



// function getCheckedValue() {
//     let checkedValue = '';
//     radioButtons.forEach((button) => {
//     if (button.checked) {
//       checkedValue = button.value;
//     }
//   });
//   return checkedValue;
// }