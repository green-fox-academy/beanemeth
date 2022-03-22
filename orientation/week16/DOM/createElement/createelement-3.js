
const kids = [
    { 'petName': 'Wattled crane', 'owner': 'Bryant' },
    { 'petName': 'Devil, tasmanian', 'owner': 'Alejandro' },
    { 'petName': 'Mynah, common', 'owner': 'Nelie' },
    { 'petName': 'Dolphin, common', 'owner': 'Mariele' },
    { 'petName': 'Gray duiker', 'owner': 'Maddalena' },
    { 'petName': 'Crab (unidentified)', 'owner': 'Lucine' },
    { 'petName': 'Ant (unidentified)', 'owner': 'Lorianna' },
    { 'petName': 'Bison, american', 'owner': 'Tommie' },
    { 'petName': 'Yellow mongoose', 'owner': 'Vivyan' },
    { 'petName': 'Carpet snake', 'owner': 'Veda' },
    { 'petName': 'Lesser mouse lemur', 'owner': 'Isidor' },
];
//   1) Create an <article> element for each kid
//   2) Create a <h3> and a <p> element for each article and append them as a child to the <article>
//       - The H3 should contain the owner's name
//       - The p should contain the pet's name
//   3) Add the article to the pets main.

const main = document.querySelector('main');

kids.forEach((kid) => {
    const article = document.createElement('article');
    const header3 = document.createElement('h3');
    const paragraph = document.createElement('p');

    article.appendChild(header3);
    article.appendChild(paragraph);

    header3.innerText = kid.owner;
    paragraph.innerText = kid.petName;

    main.appendChild(article);
});




//Solution 2:
    // for (let i = 0; i < kids.length; i ++) {
    //   const article = document.createElement('article');
    //   const header3 = document.createElement('h3');
    //   const paragraph = document.createElement('p');
    //   header3.textContent = kids[i].owner;
    //   paragraph.textContent = kids[i].petName;

    //   article.appendChild(header3);
    //   article.appendChild(paragraph);
    //   main.appendChild(article);
    // }