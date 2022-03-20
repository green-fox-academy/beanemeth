//Turn the party (i.e. the whole page background) on and off by clicking the button.

'use strict';

const body = document.querySelector('body');
const button = document.querySelector('button');

button.onclick = () => {
    body.classList.toggle('party');
};