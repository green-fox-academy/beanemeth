// Assignment

// 1: If you choose Dog or Cat, it should enable the sign up button
// 2: If you choose Yes for cat facts, it should enable the I love cats button
// 3: Clicking on a button should alert:
// Thank you, you've successfully signed up for cat facts
// 4: If you pick Victor and no to cat facts it should enable the sign up button only
// 5: Clicking this time should display: Sigh, we still added you to the cat facts list 

// https://www.w3schools.com/jsref/prop_checkbox_checked.asp

const favouritePet = document.querySelectorAll('[name="favouritePet"]');
const signUpButton = document.getElementById('signUpButton');
let chosenPet = '';


favouritePet.forEach((pet) =>   
pet.addEventListener('change', (event) => {
        chosenPet = event.target.id;
        enableSignUp(chosenPet)
    })
);
const noButton = document.getElementById('no');
// 1: If you choose Dog or Cat, it should enable the sign up button
function enableSignUp(chosenPet) {
    if (chosenPet === 'cat' || 'dog') {
        signUpButton.disabled =
            false;
    } // if (chosenPet === 'fish' && noButton.checked) {
    //     signUpButton.disabled = false;
    // }
};

// 2: If you choose Yes for cat facts, it should enable the I love cats button

const yesButton = document.getElementById('yes');
const loveCatsButton = document.getElementById('loveCatsButton');

yesButton.addEventListener('change', (event) => {
    enableIloveCats(yesButton)
});

function enableIloveCats() {    
    loveCatsButton.disabled =
            false;   
};

// 3: Clicking on a button should alert:
// Thank you, you've successfully signed up for cat facts
const buttons = document.querySelectorAll("button");
buttons[0].addEventListener('click', () => {
    alert("Thank you, you've successfully signed up for cat facts");
});
// https://www.w3schools.com/howto/howto_js_display_checkbox_text.asp
// 4: If you pick Victor and no to cat facts it should enable the sign up button only
const form = document.forms[0];
const fishBtn = document.getElementById('fish');
form.addEventListener('click', (e) => {
if (fishBtn.checked && noButton.checked) {
    alert('Sigh, we still added you to the cat facts list');
  }
});

// VERSION NO. 2:

// https://www.w3schools.com/jsref/coll_doc_forms.asp

const form = document.forms[0];

const catBtn = document.getElementById('cat');
const dogBtn = document.getElementById('dog');
const fishBtn = document.getElementById('fish');
const signUpButton = document.getElementById('signUpButton');
const loveCatsButton = document.getElementById('loveCatsButton');
const yesButton = document.getElementById('yes');
const noButton = document.getElementById('no');

form.addEventListener('click', (e) => {
  if (dogBtn.checked || catBtn.checked) {
    signUpButton.disabled = false;
  } else {
    signUpButton.disabled = true;
  }
  if (yesButton.checked) {
    catBtn.disabled = false;
  } else {
    catBtn.disabled = true;
  }
  if (fishBtn.checked && noButton.checked) {
    signUpButton.disabled = false;
  }
  if (e.target === signUpButton) {
    if (fishBtn.checked && noButton.checked) {
      alert('Sigh, we still added you to the cat facts list');
    } else {
      alert("Thank you, you've successfully signed up for cat facts");
    }
  }
  if (e.target === loveCatsButton) {
    alert("Thank you, you've successfully signed up for cat facts");
  }
});