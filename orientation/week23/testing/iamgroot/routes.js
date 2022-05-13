const express = require('express');
const app = express();
//localhost:3100/groot/?message=
app.get('/groot', (req, res) => {
  // TODO: implement this method
  const { message } = req.query;
  if (!message) {
    return res.status(400).json({ error: 'I am Groot!' });
  }
  const responseData = { received: message, translated: 'I am Groot!' };
  res.status(200).json(responseData);
});

module.exports = app;

//localhost:3000\groot\?message=hello
   
// mkdir iamgroot && cd iamgroot
// mkdir test && touch test/test-routes.js
// npm init -f
// npm install tape supertest --save-dev
// npm install express --save
// touch server.js routes.js