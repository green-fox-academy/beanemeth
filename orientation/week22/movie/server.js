
// Movie Selector
// Create a backend for the Movie Selector form.

// Create a genres database table.
// Create a movies database table that has a foreign key to the genres table.
// Create a GET / endpoint that serves the Movie Selector frontend.
// Create a GET /api/genres endpoint that returns the genres in JSON format.
// Create a GET /api/movies endpoint that returns all movies.
// Add a genre filter to the GET /api/movies endpoint.
// Modify the frontend to fetch the genres and the movies from the API.
// Note: the option values should contain the IDs of the movies and the genres, not their names.


const express = require('express');
const mysql = require('mysql2');

const app = express();

const port = 3650;

app.use(express.json());

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'bea',
    database: 'movieSelector',
});

conn.connect((err) => {
    if (err) {
        console.log('Cannot connect to the database', err);
        return;
    }
    console.log('Connection established');
});



app.get('/movies', (req, res) => {
    conn.query('SELECT title FROM movies', (err, title) => {
        if (err) {
            console.log(err.message);
            return res.status(500).json(err);
        }
        return res.json(title);
    });
});

app.get('/genres', (req, res) => {
    conn.query('SELECT * FROM genres', (err, genre) => {
        if (err) {
            console.log(err.message);
            return res.status(500).json(err);
        }
        return res.json(genre);
    });
});



app.listen(port, () => console.log(`Server started on port: ${port}`));
//Npm init -y
//Npm i express nodemon
////(ha nem lenne git ignore akkor kellene egy)
//Nodemon folyamatosan futtatja a servert
//npm start
//npm i mysql
//npm i mysql2
//npm i mysql2, and mysql = require('mysql2')
//tablat ugy kellene hivni mint az endpointot!
//notes to Bea: first create the sql file, then copy it to workbench (sql button on top left with a + sign)
//then run it with the thunder icon
// CRUD
// - POST 
// - GET 
// - GET 
// - PUT 
// - DELETE 