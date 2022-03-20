
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

kids.forEach((pet) => {
    const article = document.createElement('article');
    const header3 = document.createElement('h3');
    const paragraph = document.createElement('p');

    article.appendChild(header3);
    article.appendChild(paragraph);

    header3.innerText = pet.owner;
    paragraph.innerText = pet.petName;

    main.appendChild(article);
});
const mainList = document.querySelector('main');




    // for (let i = 0; i < kids.length; i ++) {
    //   const newArticle = document.createElement('article');
    //   const newH3 = document.createElement('h3');
    //   const newP = document.createElement('p');
    //   newH3.textContent = kids[i].owner;
    //   newP.textContent = kids[i].petName;

    //   newArticle.appendChild(newH3);
    //   newArticle.appendChild(newP);
    //   mainList.appendChild(newArticle);
    // }