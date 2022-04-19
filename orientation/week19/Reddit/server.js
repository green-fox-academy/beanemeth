//Npm init -y
const express = require('express');
const mysql = require('mysql2');

const app = express();

const port = 3000;

app.use(express.json());

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

    const query = `INSERT INTO reddit (title, url, timestamp) VALUES (?, ?, ?)`;
    const params = [data.title, data.url, data.timestamp];

    conn.query(query, params, (error, result) => {
        if (error) {
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
        conn.query(query, [id], (error, result) => {
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