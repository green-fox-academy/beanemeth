const body = document.querySelector('body');
window.onload = async () => {
    //window.location.href = `/profile/${id}`
    const link= window.location.href.split("/");
    console.log(link);
    let param= link[4];
    console.log(param)
    await insertOrderData(param);
    
};


async function insertOrderData(id) {
    
    try {

        const response = await fetch(`/api/flowers/${id}`); 
        console.log(response)
        if (response.ok) {
            const dataObject = await response.json(); //shift command L - to change all variable at the same time
          console.log(dataObject); //itt lattuk meg h ez nem egy array, hanem egy object, a bongeszoben es ezert nem kell for loop es 
        
                const h1 = document.createElement('h1');
                h1.innerText = ` Dear ${dataObject[0].name}, Thank you for your order!`;

                const h3 = document.createElement('h3');
                h3.innerText = ` Your order id is: ${dataObject[0].id}`;

                const p = document.createElement('p');
                p.innerText = `You have ordered a bouquet of ${dataObject[0].flowerType}`;
                body.appendChild(h1);
                body.appendChild(h3);
                body.append(p);
            
            
        } else {
            console.error(response.statusText);
        }
    } catch (error) {
        console.error(error);
    }
}