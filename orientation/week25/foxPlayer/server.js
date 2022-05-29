const express = require('express');
const mysql = require('mysql2');

const app = express();

const port = 6680;

app.use(express.json());

app.use(express.static('public'));

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'bea',
    database: 'foxPlayer',
});


conn.connect((err) => {
    if (err) {
        console.log('Cannot connect to the database', err);
        return;
    }
    console.log('Connection established');

});

// Playlists
// GET /playlists
// Lists all the playlists
//Return playlists in the order they were added

app.get('/api/playlists', (req, res) => {
    const query = `SELECT * FROM playlists`;  //order by id?
    conn.query(query, (err, rows) => {
        if (err) {
            console.error(err);
            res.status(500).send(err.sqlMessage);
            return;
        }
        res.send(rows);
    });
});

// POST /playlists

// Creates a new playlist
// The only required field is a title property that contains the name of the playlist
// System playlists cannot be created by the client !!!!!!!!!!!!!!!!!!!

app.post('/api/playlists', (req, res) => {
    if (!req.body.playlist_title) {
        res.status(400).send('Missing playlist title');
        return;
    }


    const query1 = `SELECT * FROM playlists WHERE playlist_title = ?`;
    const params = [req.body.playlist_title];

    conn.query(query1, params, (err1, rows) => {
        if (err1) {
            console.error(err1);
            res.status(500).send(err1.sqlMessage);
            return;
        }

        if (rows.length > 0) {
            res.status(400).send('Your playlist title is already in use!');
            return;
        }

        const query2 = `
            INSERT INTO playlists (playlist_title)
            VALUES (?)
        `;

        conn.query(query2, params, (err2, result) => {
            if (err2) {
                console.error(err2);
                res.status(500).send(err2.sqlMessage);
                return;
            }
            const data = {
                id: result.insertId,
                playlist_title: req.body.playlist_title,
            };
            res.status(201).send(data);
        });
    });
});

// DELETE /playlists/:id

// Deletes the given playlist
// if the id parameter is not present or not a number, return an error in JSON format. You might explain the error briefly.
// If the system_rank field is set to 1, you mustn't delete the playlist

app.delete('/playlists/:id', (req, res) => {
    const id = parseInt(req.params.id);

    if (!id || isNaN(id)) {
        res.status(404).send({ message: 'Not found' });
        return;
    }
    if (parseInt(req.params.system_rank) == 1) {
        res.status(400).send('Sorry cannot delete, as system rank is 1');
        return;
    }
    const query2 = 'SELECT * FROM playlists WHERE id = ?';
    conn.query(query2, [id], (err2) => {
        if (err2) {
            console.error(err2);
            res.status(500).send({ message: err2.sqlMessage }); //server oldali hiba
            return;
        }
        res.status(204).send('Deleted playlist');

        const query = `DELETE FROM playlists WHERE id = ?`;
        conn.query(query, [id], (error) => {
            if (error) {
                res.status(500).send({ message: 'Error, unable to delete' });
                return;
            }
        });
    });
});



app.listen(port, () => console.log(`Server started on port: ${port}`));
// npm i express mysql2
// npm i --save-dev nodemon
//Npm init -y