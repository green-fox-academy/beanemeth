// Connect HTML to JS
// Get the title
let mainTitle = document.getElementsByTagName("h1")[0];

// Change the h1 title's content to "xy ..." 
// when the mouse is over
let originalTitle = mainTitle.innerHTML;
let newText = '<span class="selected">this</span> is our new paragraph';
mainTitle.onmouseenter = function () {
    mainTitle.innerHTML = newText;
}

// Restore the original content when the mouse is not over
mainTitle.onmouseleave = function () {
    mainTitle.innerHTML = originalTitle;
}


// Get all the P tags
let articleContent = document.getElementsByClassName("article-content")[0];
let paragraphs = articleContent.getElementsByTagName("p");
// let paragraphs = articleContent.querySelectorAll("p");
// let paragraphs = articleContent.children;
// let paragraphs = document.querySelectorAll(".article-content p"); <------ez tunik legegyszerubbnek

console.log(paragraphs);

// Add background colors to all these 
// (representing highlighted state)
/*for (let p of paragraphs) {
    // p.style.backgroundColor = "red";
    // p.style = "background-Color: red";
    // p.setAttribute("style", "background-Color: red");
    // p.className = "highlighted";
    p.classList.add("highlighted");
}*/

// Add background colors to all these (representing highlighted state) when the mouse is over
// Remove background colors to all these (representing highlighted state) when the mouse is not over
// Change the sytle to something else for the one that is clicked (representing selected state)
// Change the sytle - remove the change for the second click
for (let p of paragraphs) {
    p.onmouseenter = function () {
        p.classList.add("highlighted");
    }

    p.onmouseleave = function () {
        p.classList.remove("highlighted"); //cssben van
    }

    p.onclick = function () {
        p.classList.toggle("selected"); //cssben van
    }
}

// Add a new P tag with the content "xy" at the end of the existing paragraph
let newParagraph = document.createElement("p");
newParagraph.textContent = "mondjatok valamit";
articleContent.appendChild(newParagraph);


// Add this new P tag with the content "xy" before the existing paragraphs
articleContent.insertBefore(newParagraph, paragraphs[0]);


// Add a custom attribute 
newParagraph.setAttribute("data-fox-color", "green")