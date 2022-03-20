//If the fourth p has a 'dolphin' class, replace apple's content with 'pear'

const paragraphs = document.querySelectorAll('p')
console.log(paragraphs)

for (let index = 0; index < paragraphs.length; index++) {
    if (paragraphs[3].classList.contains('dolphin')) {
        paragraphs[0].innerText = 'pear';
    }
}
//If the first p has an 'apple' class, replace cat's content with 'dog'

for (let index = 0; index < paragraphs.length; index++) {
    if (paragraphs[0].classList.contains('apple')) {
        paragraphs[2].innerText = 'dog';
    }
}

// Make apple red by adding a .red class
paragraphs[0].classList.add('red');

// Make balloon less balloon-like (change its shape)

paragraphs[1].style.borderRadius = '0%';