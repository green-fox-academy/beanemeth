const { response } = require('express');
const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 3500;

app.use(express.json());
app.use(express.static('public'));

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'bea',
  database: 'bookstore',
});

connection.connect((err) => {
  if (err) {
    console.log('Cannot connect to the database', err);
    return;
  }
  console.log('Connection established');
});


// Create an API endpoint that lists all book titles
app.get('/titles', (request, response) => {
  connection.query('SELECT book_name FROM book_mast', (err, result) => {
    if (err) {
      console.log(err);
      return response.status(500).send();
    }
    response.json(result);
  });
});


//localhost:3500/api/books?category=Science&publisher=New Harrold Publication (ezt postmanbe)
app.get('/api/bookss', (req, res) => {
  const query = `SELECT book_name, aut_name, cate_descrip, pub_name, book_price
FROM book_mast JOIN author ON book_mast.aut_id = author.aut_id
JOIN category ON book_mast.cate_id = category.cate_id
JOIN publisher ON book_mast.pub_id = publisher.pub_id`;

  connection.query(query, (err, rows) => {
      if (err) {
          console.error(err);
          res.status(500).send({ message: err.sqlMessage });
          return;
      }
      res.send({ books: rows });
  });
});

// books?category=x,publisher=y
app.get('/api/books', (req, res) => {
  let query = `
      SELECT book_name, aut_name, cate_descrip, pub_name, book_price
      FROM book_mast JOIN author ON book_mast.aut_id = author.aut_id
      JOIN category ON book_mast.cate_id = category.cate_id
      JOIN publisher ON book_mast.pub_id = publisher.pub_id
  `;

  const filters = [];
  const params = [];

  if (req.query.category) {
      filters.push('cate_descrip = ?');
      params.push(req.query.category);
  }

  if (req.query.publisher) {
      filters.push('pub_name = ?');
      params.push(req.query.publisher);
  }

  if (filters.length > 0) {
      query += ' WHERE ' + filters.join(' AND ');
  }

  connection.query(query, params, (err, rows) => {
      if (err) {
          console.error(err);
          res.status(500).send({ message: err.sqlMessage });
          return;
      }
      res.send({ books: rows });
  });
});

app.get('/api/books2', (req, res) => {
  const query = `
      SELECT book_name, aut_name, cate_descrip, pub_name, book_price
      FROM book_mast JOIN author ON book_mast.aut_id = author.aut_id
      JOIN category ON book_mast.cate_id = category.cate_id
      JOIN publisher ON book_mast.pub_id = publisher.pub_id
      WHERE cate_descrip LIKE ? AND pub_name LIKE ?
  `;
  const params = [
      req.query.category || '%',
      req.query.publisher || '%',
  ];

  connection.query(query, params, (err, rows) => {
      if (err) {
          console.error(err);
          res.status(500).send({ message: err.sqlMessage });
          return;
      }
      res.send({ books: rows });
  });
});

//% barmilyen karakterbol akarhany db


app.listen(port, () => console.log(`Server started on port: ${port}`));

//npm i mysql
//npm i mysql2
//npm i mysql2, and mysql = require('mysql2')
//https://stackoverflow.com/questions/50093144/mysql-8-0-client-does-not-support-authentication-protocol-requested-by-server/50131831#50131831
//mindig inditsuk ujra , modifyolas utan
//mysql -u root -p < data.sql
//https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/tables/tables.md