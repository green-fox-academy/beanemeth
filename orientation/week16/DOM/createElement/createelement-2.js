// Remove the king from the list.
      const li = document.querySelector('ul li');
      const list = document.querySelector('.asteroids');
      list.removeChild(li);

      // Fill the list based on the following list of objects.
      // Only add the asteroids to the list.
      // Each list item should have its category as a class and its content as text content. -->

      const planetData = [
        {
          category: 'inhabited',
          content: 'Foxes',
          asteroid: true,
        },
        {
          category: 'inhabited',
          content: 'Whales and Rabbits',
          asteroid: true,
        },
        {
          category: 'uninhabited',
          content: 'Baobabs and Roses',
          asteroid: true,
        },
        {
          category: 'inhabited',
          content: 'Giant monsters',
          asteroid: false,
        },
        {
          category: 'inhabited',
          content: 'Sheep',
          asteroid: true,
        },
      ];

      const ul = document.querySelector('ul');
      const asteroids = planetData.filter((planet) => planet.asteroid);
      asteroids.forEach((asteroid) => {
        const newLi = document.createElement('li');
        newLi.setAttribute('class', asteroid.category);
        newLi.textContent = asteroid.content;
        ul.appendChild(newLi);
      });