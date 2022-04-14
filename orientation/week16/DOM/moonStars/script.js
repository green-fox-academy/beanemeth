// At the beginning, add (append) ten stars to random coordinates via JavaScript. 
// You'll have to create an element with class 'star' and set it an inline style. 
// The left and top coordinates should be in % or vw/vh units so that the stars move 
// if the window size changes.
const myWorld = document.querySelector('.world');
let numberOfStars = 10;

for (let i = 0; i < numberOfStars; i++) {
  const widthCoordinate = Math.floor(Math.random()*100);
  const heightCoordinate = Math.floor(Math.random()*100);
// You'll have to create an element with class 'star' and set it an inline style. 
  const newStar = document.createElement('div');
  newStar.className = 'star';
  newStar.style.left = `${widthCoordinate}vw`;
  newStar.style.top = `${heightCoordinate}vh`;

  myWorld.appendChild(newStar);
}

// On click anywhere on section.world, add a star beneath the cursor.
document.onclick = function (e) {
    let cursorX = (e.pageX / window.innerWidth) * 100;
    let cursorY = (e.pageY / window.innerHeight) * 100;
    const newStar = document.createElement('div');
    newStar.setAttribute('class', 'star');
    newStar.setAttribute('style', `left:${cursorX}vw;top:${cursorY}vh;`);
    document.querySelector('.world').appendChild(newStar);
  //tree grow:
    const newSpan = document.createElement('span');
    const treesOnScreen = document.getElementsByClassName('tree');
    for (let i = 0; i < treesOnScreen.length; i++) {
      treesOnScreen[i].insertBefore(
        newSpan,
        treesOnScreen[i].getElementsByTagName('span')[0]
      );
    }
  };


