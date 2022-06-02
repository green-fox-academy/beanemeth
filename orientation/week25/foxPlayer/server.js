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
    const query = `SELECT * FROM playlists`;
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
// System playlists cannot be created by the client !!!!!!!!!!!!!!!!!!! favourites, 

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

app.delete('/api/playlists/:id', (req, res) => {
    const id = parseInt(req.params.id);

    if (!id || isNaN(id)) {
        res.status(404).send({ message: 'Not found' });
        return;
    }

    const query2 = 'SELECT * FROM playlists WHERE id = ?';
    conn.query(query2, [id], (err2, result) => {
        if (err2) {
            console.error(err2);
            res.status(500).send({ message: err2.sqlMessage });
            return;
        }

        if (!result[0]) {
            res.status(404).send('Sorry cannot delete, id does not match');
            return;
        }
        if (parseInt(result[0].system_rank) == 1) {
            res.status(400).send('Sorry cannot delete, as system rank is 1');
            return;
        }
        const query = `DELETE FROM playlists WHERE id = ?`;
        conn.query(query, [id], (error) => {
            if (error) {
                res.status(500).send({ message: 'Error, unable to delete' });
                return;
            }
            res.status(204).send('Deleted playlist');
        });
    });
});

// GET /playlist-tracks/

// Without a playlist_id it should return all tracks in the root folder. Subfolders should be explored recursively.
app.get('/api/playlist-tracks', (req, res) => {
    const query = `SELECT * FROM tracks`;
    conn.query(query, (err, rows) => {
        if (err) {
            console.error(err);
            res.status(500).send(err.sqlMessage);
            return;
        }
        res.send(rows);
    });
});

// GET /playlist-tracks/:playlist_id

// Lists all the tracks added to the playlist, left outer join: kilistazza azokat is 
//amik nincsenek egy playlistben sem, inner join: csak azokat amik bennevannak vlmelyik playlistben

app.get('/api/playlist-tracks/:playlist_id', (req, res) => {
        const query = `
            SELECT * FROM tracks
            INNER JOIN playlists_tracks
            ON tracks.id = playlists_tracks.tracks_id
            WHERE playlists_tracks.playlists_id = ?
        `;
        const params = [parseInt(req.params.playlist_id)];
    
    console.log(params)
    console.log(req.params)
    //console.log(req.params.id) // eloszor veletlen play;ist id helyett siman id-t irtam es akkor NAN lett 
    //[ NaN ]
    // { playlist_id: '1' }
    // undefined

        conn.query(query, params, (err, rows) => {
            if (err) {
                console.error(err);
                res.status(500).send({ message: err.sqlMessage });
                return;
            }
            if (rows.length === 0) {
                res.status(404).send({ message: 'Not found' });
                return;
            }
            res.send(rows[0]);
        });
    });
    
//     POST /playlist-tracks/:playlist_id

// Adds the track to the playlist identified by playlist_id

app.post('/api/playlist-tracks/:playlist_id', (req, res) => {

    const query = `
            INSERT INTO playlists_tracks (playlists_id, tracks_id)
            VALUES (?, ?)
        `;
        const params = [parseInt(req.params.playlist_id), req.body.tracks_id];

        conn.query(query, params, (err2) => {
            if (err2) {
                console.error(err2);
                res.status(500).send({ message: err2.sqlMessage });
                return;
            }

            res.status(201).send({ message: 'Success' });
        });
    });

    // DELETE /playlist-tracks/:playlist_id/:track_id

    // Deletes the track with track_id from the playlist with playlist_id
    // If one of the id parameters is not present or not a number, return an error in JSON format. 
    // You might explain the error briefly.
    app.delete('/api/playlist-tracks/:playlist_id/:track_id', (req, res) => {

        const query1 = `DELETE FROM playlists_tracks WHERE playlists_id = ? AND tracks_id = ? `;
        const params = [parseInt(req.params.playlist_id), parseInt(req.params.track_id)];
    
        conn.query(query1, params, (err1) => {
            if (err1) {
                console.error(err1);
                res.status(500).send({ message: err1.sqlMessage });
                return;
            }
            res.status(204).send('Deleted track');
        });
    });



app.listen(port, () => console.log(`Server started on port: ${port}`));
// npm i express mysql2
// npm i --save-dev nodemon
//Npm init -y