// 1: generate 100 divs to the <section> element and add index numbers to it as
// the element's textContent
const section = document.querySelector('section');
for (let i = 1; i <= 100; i++) {
  const div = document.createElement('div');
  div.textContent = i;
  section.appendChild(div);
}

// 2: Create a function that adds a 'not-prime' class to a div if it's not a
// prime and 'prime' if it is
const primesFound = [];

function isPrime(num) {
  console.table(primesFound);
  console.log('Current number', num);

  if (num === 1) {
    return false;
  }
  for (let i = 0; i < primesFound.length; i++) {
    if (num % primesFound[i] === 0) {
      return false;
    }
  }
  primesFound.push(num);
  return true;
}

const divs = document.querySelectorAll('div');
divs.forEach((div) => {
  const num = parseInt(div.textContent);

  if (isPrime(num)) {
    div.classList.add('prime');
  } else {
    div.classList.add('not-prime');
  }
});

// 3: Create a timer that keeps calling the prime validatior function until it
// reaches the end of elements - the timer should fire every 100ms - the timer
// should stop when there are no more elements left to be colored

// Solution 1
let currentIndex = 0;

const interval = setInterval(() => {
  const currentElem = divs[currentIndex];
  const num = parseInt(currentElem.textContent);

  if (isPrime(num)) {
    currentElem.classList.add('prime');
  } else {
    currentElem.classList.add('not-prime');
  }

  if (currentIndex === divs.length - 1) {
    clearInterval(interval);
  }

  currentIndex++;
}, 100);

// Solution 2
divs.forEach((div, index) => {
  setTimeout(() => {
    const num = parseInt(div.textContent);

    if (isPrime(num)) {
      div.classList.add('prime');
    } else {
      div.classList.add('not-prime');
    }
  }, 100 * index);
});