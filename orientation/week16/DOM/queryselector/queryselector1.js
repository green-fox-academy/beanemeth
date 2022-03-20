        //   1. store the element that says 'The King' in the 'king' variable.
        //   console.log it.
        const king = document.querySelector('#b325')
        console.log(king);
        //let king2 = document.getElementById('#325')

        //   2. store 'The Businessman' and 'The Lamplighter'
        //   in the 'businessLamp' variable.
        //   console.log each of them.
        const businessLamp = document.querySelectorAll('.big');
        businessLamp.forEach((element) => console.log(element.innerText));

        // for (let i = 0; i < businessLamp.length; i++) {
        //     console.log(businessLamp[i].textContent);
        //   }

        //   3. store 'The King' and 'The Conceited Man'
        //   in the 'conceitedKing' variable.
        //   alert them one by one.
        const conceitedKing = document.querySelectorAll('.b325, .b326');
        for (let i = 0; i < conceitedKing.length; i++) {
          alert(conceitedKing[i].textContent);
        };
        //conceitedKing.forEach((element) => alert(element.innerText));

        //   4. store 'The King', 'The Conceited Man' and 'The Lamplighter'
        //   in the 'noBusiness' variable.
        //   console.log each of them.
        const noBusiness = document.querySelectorAll('div')
        noBusiness.forEach((element) => console.log(element.innerText));

