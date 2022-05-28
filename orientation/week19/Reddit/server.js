//Npm init -y
const express = require('express');
const mysql = require('mysql2');
//import TimeAgo from 'javascript-time-ago'

const app = express();

const port = 3400;

app.use(express.json());

app.use(express.static('public'));

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'bea',
    database: 'reddit',
});

conn.connect((err) => {
    if (err) {
        console.log('Cannot connect to the database', err);
        return;
    }
    console.log('Connection established');
});


app.get('/hello', (req, res) => {
    res.send('hello world');
});

app.get('/', (req, res) => {
    res.send(req.headers);
});

app.get('/post', (req, res) => {
    conn.query('SELECT * FROM reddit', (err, posts) => {
        if (err) {
            console.log(err.message);
            return res.status(500).json(err);
        }
        return res.json(posts);
    });
});

// Resource: posts
// CRUD
// - POST /posts
// - GET /posts 
// - GET /posts/:id
// - PUT /posts/:id
// - DELETE /posts/:id

const defaultScore = 0;

app.post('/posts', (req, res) => {
    const data = {
        title: req.body.title,
        url: req.body.url,
        // owner: req.body.owner,
        timestamp: Date.now(),
    };

    // Validation
    if (!data.title) {
        res.status(400).send({ message: 'missing title' });
        return;
    }
    if (!data.url || !data.url.includes(':')) {
        res.status(400).send({ message: 'missing or invalid URL' });
        return;
    }
    // if (!data.owner) {
    //     res.status(400).send({ message: 'missing owner' });
    //      return;
    // }

    const query = `
        INSERT INTO reddit (title, url, timestamp) 
        VALUES (?, ?, ?) 
    `; //itt kivettem az ownert, es egy kerdojelet is ?!
    const params = [data.title, data.url, data.timestamp]; //data.owner,

    conn.query(query, params, (error, result) => {
        if (error) {
            console.error(error);
            res.status(500).send({ message: 'DB error' });
            return;
        }
        res.status(201).send({
            id: result.insertId,
            score: defaultScore,
            ...data
        });
    });
});

// app.post('/posts', (req, res) => {
//     const post = req.body; //postba mindig body van, params pedig az urlbol szedi ki az adatot
//     conn.query(
//         `INSERT INTO reddit (title, url, timestamp) VALUE (?,?, ?)`,
//         [post.title, post.url, Date.now()],
//         (err, result) => {
//             if (err) {
//                 console.error(err);
//                 res.status(500).send({ message: err.sqlMessage });
//                 return;
//             } return res.json({ post: result });
//         }
//     );
// }); // query es params az urlbol szedi ki a dolgokat. /post/3 az ugy lenne h post/:id; 
//putba a bodyba rakjuk az adatokat, post szamat a paramsbol kapjuk meg, id-val jeloljuk ki h melyiket akarjuk updatelni
//post, put - body
//getnel nincs body
//localhost:3000/api/posts/2/vote - itt a 2 a req.params, postmanben a params a query stringnek egy parametere.
//params: azonositani adatbazis adattablajaban egy sort, pl alias vagy 2es azoosit egy sort!
//postnal meg nem tudjuk az id-t
//get, put delete, itt azonositani kell ezert berakjuk paramsba az id-t
//

//localhost:3000/posts/2/upvote
app.put('/posts/:id/upvote', (req, res) => {

    const id = Number(req.params.id); //req.params az a teljes object, 
    if (!id || isNaN(parseInt(id))) {
        return res.status(404).json({ //404 hogyha nincs olyan id
            error: 'ID not found!',
        });
    }
    const query = `UPDATE reddit SET score = score + 1 WHERE id = ?`;
    conn.query(query, [id], (error, result) => {
        if (error) {
            res.status(500).send({ message: 'Error, unable to increase score' });
            return;
        }
        const query2 = 'SELECT * FROM reddit WHERE id = ?';
        conn.query(query2, [id], (err2, result2) => {
            if (err2) {
                console.error(err2);
                res.status(500).send({ message: err2.sqlMessage });
                return;
            }
            res.status(200).send(result2[0] //a result az egy array es mivel egy nagy array ezert kell ugy hivatkozni ra h [0], es ki lehetett torolni a kapcsos {}
            );
        });
    });
});

app.put('/posts/:id/downvote', (req, res) => {

    const id = Number(req.params.id); //req.params az a teljes object, 
    if (!id || isNaN(parseInt(id))) {
        return res.status(404).json({ //404 hogyha nincs olyan id
            error: 'ID not found!',
        });
    }
    const query = `UPDATE reddit SET score = score - 1 WHERE id = ?`;

    conn.query(query, [id], (error, result) => {
        if (error) {
            res.status(500).send({ message: 'Error, unable to increase score' });
            return;
        }
        const query2 = 'SELECT * FROM reddit WHERE id = ?';
        conn.query(query2, [id], (err2, result2) => {
            if (err2) {
                console.error(err2);
                res.status(500).send({ message: err2.sqlMessage }); //server oldali hiba
                return;
            }
            res.status(200).send(result2[0] //a result az egy array es mivel egy nagy array ezert kell ugy hivatkozni ra h [0], es ki lehetett torolni a kapcsos {}
            );
        });
    });
});

//localhost:3400/posts/1
app.delete('/posts/:id', (req, res) => {
    const id = Number(req.params.id); //req.params az a teljes object, 
    if (!id || isNaN(parseInt(id))) {
        return res.status(404).json({
            error: 'ID not found!',
        });
    }
    const query2 = 'SELECT * FROM reddit WHERE id = ?';
    conn.query(query2, [id], (err2, result2) => {
        if (err2) {
            console.error(err2);
            res.status(500).send({ message: err2.sqlMessage }); //server oldali hiba
            return;
        }
        res.status(200).send(result2[0] //a result az egy array es mivel egy nagy array ezert kell ugy hivatkozni ra h [0], es ki lehetett torolni a kapcsos {}
        );

        const query = `DELETE FROM reddit WHERE id = ?`;
        conn.query(query, [id], (error) => {
            if (error) {
                res.status(500).send({ message: 'Error, unable to delete' });
                return;
            }
        });
    });
});






// app.delete('/posts/:id', (req, res) => {
//     const id = Number(req.params.id); //req.params az a teljes object, 
//     if (!id || isNaN(parseInt(id))) {
//         return res.status(404).json({ 
//             error: 'ID not found!',
//         });
//     } 
//     const query = `DELETE FROM reddit WHERE id = ?`;
//     conn.query(query, [id], (error, result) => {
//         if (error) {
//             res.status(500).send({ message: 'Error, unable to delete' });
//             return;
//         }
//         const query2 = 'SELECT * FROM reddit WHERE id = ?';
//         conn.query(query2, [id], (err2, result2) => {
//             if (err2) {
//                 console.error(err2);
//                 res.status(500).send({ message: err2.sqlMessage }); //server oldali hiba
//                 return;
//             }
//             res.status(200).send(result2[0] //a result az egy array es mivel egy nagy array ezert kell ugy hivatkozni ra h [0], es ki lehetett torolni a kapcsos {}
//             );
//         });
//     });
//   });

module.exports = {app, conn}; //!!!!!!!!!!!!!!!!!


if (process.env.NODE_ENV != 'test') {
    app.listen(port, () => console.log(`Server started on port: ${port}`));
} ///this is needed for testing only!!!!!

// npm i express mysql2
// npm i --save-dev nodemon
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


///ez jo, Mate megoldasa:

// function vote(req, res, operator) {
//     const id = Number(req.params.id);
//     if (isNaN(id)) {
//         res.status(400).send({ message: 'invalid ID' });
//         return;
//     }

//     const updateQuery = `
//         UPDATE posts SET score = score ${operator} 1 WHERE id = ?
//     `;
//     const params = [id];

// //     conn.query(updateQuery, params, (updateErr, updateResult) => {
// //         if (updateErr) {
// //             console.error(updateErr);
// //             res.status(500).send({ message: 'DB error' });
// //             return;
// //         }

// //         if (updateResult.affectedRows === 0) {
// //             // No row has been updated
// //             res.status(404).send({ message: 'not found' });
// //             return;
// //         }

// //         const selectQuery = `SELECT * FROM posts WHERE id = ?`;

// //         conn.query(selectQuery, params, (selectErr, rows) => {
// //             if (selectErr) {
// //                 console.error(selectErr);
// //                 res.status(500).send({ message: 'DB error' });
// //                 return;
// //             }

// //             if (rows.length === 0) {
// //                 // Someone has deleted the post since the update
// //                 res.status(410).send({ message: 'Gone' });
// //                 return;
// //             }

// //             res.send(rows[0]);
// //         });
// //     });
// // }

// // app.put('/posts/:id/upvote', (req, res) => vote(req, res, '+'));
// // app.put('/posts/:id/downvote', (req, res) => vote(req, res, '-'));

// app.delete('/posts/:id', (req, res) => {
//     const id = Number(req.params.id);
//     if (isNaN(id)) {
//         res.status(400).send({ message: 'invalid ID' });
//         return;
//     }

//     const username = req.headers.username;
//     if (!username) {
//         res.status(401).send({ message: 'Unauthorized' });
//         return;
//     }

//     const selectQuery = `SELECT * FROM posts WHERE id = ?`;
//     const params = [id];

//     conn.query(selectQuery, params, (selectErr, rows) => {
//         if (selectErr) {
//             console.error(selectErr);
//             res.status(500).send({ message: 'DB error' });
//             return;
//         }

//         if (rows.length === 0) {
//             res.status(404).send({ message: 'Not found' });
//             return;
//         }

//         const owner = rows[0].owner;

//         if (username !== owner) {
//             res.status(401).send({ message: 'Unauthorized' });
//             return;
//         }

//         const deleteQuery = `DELETE FROM posts WHERE id = ?`;
//         conn.query(deleteQuery, params, (deleteErr) => {
//             if (deleteErr) {
//                 console.error(deleteErr);
//                 res.status(500).send({ message: 'DB error' });
//                 return;
//             }

//             // The usual response for a DELETE request is
//             // 204 No Content with empty response body
//             res.status(204).send();
//         });
//     });
// });


