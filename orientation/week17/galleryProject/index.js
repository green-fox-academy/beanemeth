window.addEventListener("DOMContentLoaded", () => {
    const chosenImage = document.querySelector(".chosen-image"); /*big image*/
    chosenImage.style.backgroundImage = `url(${images[0].file})`;

    const contentDiv = document.createElement("div");
    contentDiv.setAttribute("class", "content-div");

    const imageTilte = document.createElement("h3");
    imageTilte.textContent = images[0].title;

    const imageText = document.createElement("p");
    imageText.textContent = images[0].description;

    contentDiv.appendChild(imageTilte);
    contentDiv.appendChild(imageText);
    chosenImage.appendChild(contentDiv);

    const thumbnails = document.querySelector(".thumbnails");
    let counter = 0;
    for (let i = 0; i < images.length; i++) {
        const thumbnailDiv = document.createElement("div");
        thumbnailDiv.style.backgroundImage = `url(${images[i].file})`;
        thumbnailDiv.setAttribute("class", "thumbnail-image");
        thumbnails.appendChild(thumbnailDiv);
    }

    document.querySelectorAll(".thumbnail-image")[0].classList.add("selected");

    document.querySelectorAll(".thumbnail-image").forEach((div, index) => {
        div.addEventListener("click", () => {
            chosenImage.style.backgroundImage = `url(${images[index].file})`;
            imageTilte.textContent = images[index].title;
            imageText.textContent = images[index].description;
            counter = index;
        });
    });

    document.querySelectorAll(".thumbnail-image").forEach((div) => {
        div.addEventListener("click", (event) => {
          const selected = document.querySelector(".selected");
          selected.classList.remove("selected");
          event.target.classList.add("selected");
        });
      });

      const previousButton = document.querySelector(".previous-button");
      const nextButton = document.querySelector(".next-button");
      

      nextButton.addEventListener("click", () => {
        counter++;
        if (counter === images.length) {
          counter = 0;
        }
        chosenImage.style.backgroundImage = `url(${images[counter].file})`;
        imageTilte.textContent = images[counter].title;
        imageText.textContent = images[counter].description;
        const selected = document.querySelector(".selected");
        selected.classList.remove("selected");
        document
          .querySelectorAll(".thumbnail-image")
          [counter].classList.add("selected");
      });

      previousButton.addEventListener("click", () => {
        counter--;
        if (counter === -1) {
          counter = images.length - 1;
        }
        chosenImage.style.backgroundImage = `url(${images[counter].file})`;
        imageTilte.textContent = images[counter].title;
        imageText.textContent = images[counter].description;
        const selected = document.querySelector(".selected");
        selected.classList.remove("selected");
        document
          .querySelectorAll(".thumbnail-item")
          [counter].classList.add("selected");
      });
});