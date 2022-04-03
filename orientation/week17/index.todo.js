const express = require('express');
const app = express();
const port = 9000;

app.use('/assets', express.static('assets'));
app.set('view engine', 'ejs');

app.get('/greeting', (req, res) => {
  let name = req.query.name;
  if (!name) {
      name = 'Guest';
  }
  res.render('greeting', {name: name});
});

app.get('/todos', (req, res) => {
  const todos = ['get up', 'survive', 'go back to bed'];
  res.render('todo', {todos: todos});
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
//npm install  nodemon 
//npx nodemon index.todo.js