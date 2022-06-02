document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.add-button');
    button.addEventListener('click', async (event) => {
        //event.preventDefault();

        const text = document.querySelector('#todo-input').value;


        const response = await fetch('/api/todos', {
            method: 'POST',
            body: JSON.stringify({ text }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const data = await response.json();

    });
    getTodos();
});



async function getTodos() {


    const todos = document.querySelector('.todo');
    todos.innerHTML = ''; //mindig kitorli a regi todokat, nem pedig hozzaadja es lesz ezer, hanem igy mindig csak annyi lesz amennyi tenyleg van
    try {

        const response = await fetch('/api/todos'); 
        console.log(response)
        if (response.ok) {
            const dataArray = await response.json();
            console.log(dataArray)
            for (let index = 0; index < dataArray.length; index++) {

                console.log(dataArray[index]);

                const div = document.createElement('div');
                div.className = 'div';
                const title = document.createElement('span');
                title.innerHTML = dataArray[index].text;
                div.appendChild(title)
                //todos.appendChild(title);

                const bin = document.createElement('button');
                bin.className = 'bin';
                bin.setAttribute('currentId', dataArray[index].id);
                div.appendChild(bin)


                bin.addEventListener('click', async (event) => {
                    const binID = bin.getAttribute('currentId');
                    await deleteTodoItem(binID);
                    getTodos();
                });

                const checkbox = document.createElement('input');
                checkbox.className = 'checkbox';
                checkbox.setAttribute('type', 'checkbox');
                checkbox.setAttribute('currentId', dataArray[index].id);
                //checkbox.autocomplete=("off");
                checkbox.checked= dataArray[index].completed;
                console.log(dataArray[index])


                checkbox.addEventListener('change', async (event) => {
                event.preventDefault();
                    const checkboxID = checkbox.getAttribute('currentId'); 
                
                   
                    await updateTodoItem(checkboxID, event.currentTarget.checked);
                    
                
                getTodos();
                });

////
async function updateTodoItem(id, isChecked) {
    //const completed = document.querySelector('.checkbox').checked;
    try {
        const response = await fetch(`/api/todos/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ completed: isChecked }), 
            headers: {
             
                'Content-Type': 'application/json',
            },

        });
        const data = await response.json();

        if (!response.ok) {
            console.error(response.statusText);
        }
    } catch (error) {
        console.error(error);
    }
}
///

                div.appendChild(checkbox);

                todos.appendChild(div);

            }
            //return dataArray; 
        } else {
            console.error(response.statusText);
        }
    } catch (error) {
        console.error(error);
    }
};


async function deleteTodoItem(id) {
    try {
        const response = await fetch(`/api/todos/${id}`, {
            method: 'DELETE',

        });
        const data = await response.json();

        if (!response.ok) {
            console.error(response.statusText);
        }
    } catch (error) {
        console.error(error);
    }
}

