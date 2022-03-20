// 1)  Append every paragraph with the last one's content.


const paragraphs = document.querySelectorAll('.apple, .balloon, .cat');

paragraphs.forEach((paragraph) => {
  const animals = document.querySelector('.animals').textContent;
  paragraph.textContent += ` ${animals}`;
}); // += " " + animals


// 2)  Do the same again, but you should keep the cat strong.

paragraphs.forEach((paragraph) => {
    const animals = document.querySelector('.animals').innerHTML;
    paragraph.innerHTML += ` ${animals}`;
  });