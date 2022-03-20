
//   Add an item that says 'The Green Fox' to the asteroid list.
const asteroidList = document.querySelector('ul.asteroids');
const newLi1 = document.createElement('li');
newLi1.innerText = 'The Green Fox';
asteroidList.appendChild(newLi1);

//   Add an item that says 'The Lamplighter' to the asteroid list.
const newLi2 = document.createElement('li');
newLi2.innerText = 'The Lamplighter';
asteroidList.appendChild(newLi2);
//   Add a heading saying 'I can add elements to the DOM!' to the .container.
let heading = document.createElement('h2');
heading.textContent = 'I can add elements to the DOM!';
document.querySelector('div.container').appendChild(heading);
//   Add an image, any image, to the container.

const container = document.querySelector('.container');
const image = document.createElement('img');
image.setAttribute(
    'src',
    'https://scontent.fbud6-4.fna.fbcdn.net/v/t31.18172-8/17038705_411918015823336_7087304435784229950_o.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=FeDIKIrSPiYAX9-BVD1&_nc_ht=scontent.fbud6-4.fna&oh=00_AT_rP1sG7BB_g2edaAEQEh5SQv_TVc8crW0qHZBxTs0skw&oe=625A46B3'
);
container.appendChild(image);

