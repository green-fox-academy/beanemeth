const express = require('express');
const path = require('path');

const app = express();
const PORT = 8080;
// Add serving static assets to serve your assets folder
app.use(express.static('assets'));
// Render the static index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`The server is up and running on ${PORT}`);
});

app.use(express.json());


// Create a logic that can double the provided number
app.get('/doubling', (req, res) => {
  const { input } = req.query;

  if (!input) {
    res.json({ error: 'Please provide an input!' });
  }
  const output = {
    received: Number(input),
    result: input * 2,
  };
  res.json(output);
});
//localhost:8080\doubling\?input=5 ezt kell pl beirni a postmanbe

// Create a GET /greeter endpoint
// that can receive a query parameter like name=Petike&title=student

app.get('/greeter', (req, res) => {
  const { name, title } = req.query;

  if (!name && !title) {
    res
      .status(400)
      .json({ error: 'Please provide a name and a title!' });
  }
  else if (!title) {
    res.status(400).json({ error: 'Please provide a title!' });
  }
  else if (!name) {
    res.status(400).json({ error: 'Please provide a name!' });
  } else {
    res.json({ welcome_message: `Oh, hi there ${name}, my dear ${title}!` });
  }
});
//localhost:8080\greeter\?name=peti&title=student

// Create a dynamic GET /appenda/{appendable} endpoint
// that responds with the appended a:
// eg. /appenda/kuty
// responds with:
// {
//   "appended": "kutya"
// }

app.get('/appenda/:appendable', (req, res) => {
  const { appendable } = req.params;

  if (!appendable) {
    res.status(404).send("Page not found");
  }
  res.json({ appended: appendable + 'a' }); //"appended": `${appendable}a`
});

//localhost:8080\appenda\kuty

//add endpoint for do until
app.post('/dountil/:operation', (req, res) => {
  const { until } = req.body;
  
  if (!until) {
    res.status(404);
    res.json({ error: 'Please provide a number!' });
    return;
  }
  let sum = 0;
  for (let i = 1; i <= until; i++) {
    sum += i;
  }
  let factNumber = 1;
  for (let i = 1; i <= until; i++) {
    factNumber *= i;
  }

  const factOutput = {
    result: factNumber,
  };

  const sumOutput = {
    result: sum,
  };

  if (req.params.operation === 'factor') {
    res.json(factOutput);
    res.status(201).send();
  }
  if (req.params.operation === 'sum') {
    res.json(sumOutput);
    res.status(201).send();
  }
});


// // Create a logic that can do an operation until a specific number



//Npm init -y
//Npm i express nodemon
//package jsonba bele kell irni a startot a scriptbe
////(ha nem lenne git ignore akkor kellene egy)
//Nodemon folyamatosan futtatja a servert
//npm start

