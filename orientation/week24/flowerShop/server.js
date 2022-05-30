const express = require('express');
const mysql = require('mysql2');

const app = express();

const port = 5690;

app.use(express.json());

app.use(express.static('public'));

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'bea',
    database: 'flowershop',
});


conn.connect((err) => {
    if (err) {
        console.log('Cannot connect to the database', err);
        return;
    }
    console.log('Connection established');

});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.post('/api/flowers', (req, res) => {
    if (!req.body.name) {
        res.status(400).send('Missing name');
        return;
    }
    if (!req.body.address) {
        res.status(400).send('Missing address');
        return;
    }
    if (!req.body.flowerType) {
        res.status(400).send('Missing flowertype');
        return;
    }

        const query2 = `
            INSERT INTO flowers (name, address, flowerType)
            VALUES (?, ?, ?)
        `;

        const params2 = [req.body.name, req.body.address, req.body.flowerType];

        conn.query(query2, params2, (err2, result) => {
            if (err2) {
                console.error(err2);
                res.status(500).send(err2.sqlMessage);
                return;
            }
            const data = {
                id: result.insertId,
                name: req.body.name,
                address: req.body.address,
                flowerType: req.body.flowerType,
            };
            res.status(201).send(data);
        });
});

app.get('/api/flowers/:id', (req, res) => {

    const id = req.params.id; 

    const query = `SELECT name, id, flowerType FROM flowers WHERE id = ?`; 
    conn.query(query, [id], (err, rows) => {
        if (err) {
            console.error(err);
            res.status(500).send(err.sqlMessage);
            return;
        }
        res.send(rows);
    });
});

app.get('/api/flowers', (req, res) => {

   

    const query = `SELECT * FROM flowers `; 
    conn.query(query,  (err, rows) => {
        if (err) {
            console.error(err);
            res.status(500).send(err.sqlMessage);
            return;
        }
        res.send(rows);
    });
});

app.get('/flowers/:id', (req, res) => {
    const { id } = req.params;
    res.sendFile(__dirname + '/public/order.html');
});

app.listen(port, () => console.log(`Server started on port: ${port}`));









// }); // query es params az urlbol szedi ki a dolgokat. /post/3 az ugy lenne h post/:id; 
//putba a bodyba rakjuk az adatokat, post szamat a paramsbol kapjuk meg, id-val jeloljuk ki h melyiket akarjuk updatelni
//post, put - body
//getnel nincs body
//localhost:3000/api/posts/2/vote - itt a 2 a req.params, postmanben a params a query stringnek egy parametere.
//params: azonositani adatbazis adattablajaban egy sort, pl alias vagy 2es azoosit egy sort!
//postnal meg nem tudjuk az id-t
//get, put delete, itt azonositani kell ezert berakjuk paramsba az id-t
//


//npm install --save-dev nodemon

// npm i express mysql2
// npm i --save-dev nodemon
























//Npm init -y
//npm i express mysql2
//npm i --save-dev nodemon