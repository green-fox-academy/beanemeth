const express = require('express');
const app = express();
const PORT = 8700;

// set the view engine to ejs
app.set('view engine', 'ejs');

app.use(express.urlencoded());
//ha nem javascript coddal, hanem form submittal kuldunk adatot akkor kell ez bele
// render the static index.html here:
// res.sendFile(__dirname + '/index.html');
app.get('/signup', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/signup1', (req, res) => {
  const { username, email } = req.body;

  if (!username || !email) {
    return response.status(400).send('Please enter your username and email!');
  }
  res.send(
    `<h1>Thanks ${username}, we will send updates to ${email}</h1>`
  );
});


// start express app on port 3000
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

//npx nodemon index.js
//Npm init -y
//Npm i express nodemon
//npm install express ejs 

//package jsonba bele kell irni a startot a scriptbe
//Nodemon folyamatosan futtatja a servert
//npm start
//a html-ben kell atirni a kodot ahoz h mindkettot tudjam tesztelni 
app.post("/signup2",(req,res)=>{
 
  const { username, email } = req.body;

    if (!username || !email) {
      return response.status(400).send('Please enter your username and email!');
    }
      res.render('success',{username: username, email: email});
  }) // ami az ejs neve, azt kel ideirni, az elso string ami a template neve. masodik egy object amire hivatkozunk a templateben

//apinal nem toltod ujra az oldalt
//ha van javascript akkor hasznalhatunk apit
//ha formos post akkor template
//javascriptes postolas es nem ujratolt oldal vizsga