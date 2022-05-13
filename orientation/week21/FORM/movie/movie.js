

const form = document.forms[0];
const selectGenre = document.querySelector('#genre');
const selectMovie = document.querySelector('#movie-selector');
const selectedTag = document.querySelector('.selectedTag');
const resultTag = document.querySelector('.resultTag');

form.addEventListener('change', (e) => {
    if (e.target === selectGenre) {
        for (let i = 0; i < selectMovie.length; i++) {
            if (
                selectMovie.options[i].className !==
                selectGenre.value
            ) {
                selectMovie.options[i].hidden = true;
            } else {
                selectMovie.options[i].hidden = false;
            }
        }
    }
    if (e.target === selectMovie) {
        resultTag.textContent = selectMovie.value;
        selectedTag.appendChild(resultTag);
    }
});





