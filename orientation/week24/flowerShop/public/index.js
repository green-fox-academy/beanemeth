window.onload = () => {
    
    const button = document.querySelector('button')
    button.addEventListener('click', async (event) => {
        
        //console.log(event);
        event.preventDefault();
        await loadPage();
    });
};
const mainURL = '/api/flowers';


async function loadPage() {
    
    const name = document.querySelector('#name');
    const address = document.querySelector('#address');
    const flowerType= document.querySelector('input[name="flower"]:checked');
   

    
    const newOrder = {
        name: name.value,
        address: address.value,
        flowerType: flowerType.value,
    };

    try {
     
        const response = await fetch(`${mainURL}`, {
            method: 'POST',
            body: JSON.stringify(newOrder), //req bodyba rakja bele az adatokat
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await response.json(); //response bodyjabol kiszedi az adatokat
        console.log(data)
        if (response.ok) {
            window.location.href = `/flowers/${data.id}`;
        }  
        
        //     console.error(response.statusText);
        // }
    } catch (error) {
        console.error(error);

    }
}


