const express = require('express');
const app = express();
const PORT = 5000;

// set the view engine to ejs
app.set('view engine', 'ejs');

// home page
app.get('/', (req, res) => {
  // render `home.ejs`
  res.render('home', {
    title: 'Hello World'
  });
});

// start express app on port 3000
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

//Npm init -y
//Npm i express nodemon
////(ha nem lenne git ignore akkor kellene egy)
//Nodemon folyamatosan futtatja a servert
//npm start