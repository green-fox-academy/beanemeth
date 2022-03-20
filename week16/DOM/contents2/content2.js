//   1) replace the list items' content with items from this list
//   ['apple', 'banana', 'cat', 'dog']

const listItems = document.querySelectorAll('li');
const items = ['apple', 'banana', 'cat', 'dog'];

listItems.forEach(
    (element, index) => (element.textContent = items[index])
);
// let listItems = document.querySelectorAll('li');
// let items = ['apple', 'banana', 'cat', 'dog'];
// let newList = [];

// for (let i = 0; i < listItems.length; i++) {
//     newList.push(listItems[i].textContent = items[i]);
// }


//   2) change the <ul> element's background color to 'limegreen'
//     - use css class to change the color instead of the style property

// SEE CSS FILE!