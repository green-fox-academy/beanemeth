const express = require('express');
const mysql = require('mysql2');

const app = express();

const port = 7690;

app.use(express.json());

app.use(express.static('public'));

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'bea',
    database: 'toDo',
});


conn.connect((err) => {
    if (err) {
        console.log('Cannot connect to the database', err);
        return;
    }
    console.log('Connection established');

});

// GET /todos
// List all todo items.

app.get('/api/todos', (req, res) => {
    const query = `SELECT id, text, completed FROM todos`;
    conn.query(query, (err, rows) => {
        if (err) {
            console.error(err);
            res.status(500).send(err.sqlMessage);
            return;
        }
        res.send(rows);
    });
});

// GET /todos/:id
// Get a single todo item.

app.get('/api/todos/:id', (req, res) => {
    const query = `
    SELECT id, text, completed FROM todos
        WHERE id = ?
    `;
    const params = [parseInt(req.params.id)];


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

// POST /todos
// Create a new todo item. Use the body of the POST request. 
// The request must have the Content-Type header set to application/json



app.post('/api/todos', (req, res) => {
    const data = {
        text: req.body.text,
        completed: req.body.completed,

    };

    // Validation
    if (!data.text) {
        res.status(400).send({ message: 'missing text' });
        return;
    }

    const query = `
        INSERT INTO todos (text) 
        VALUES (?) 
    `;
    const params = [data.text];

    conn.query(query, params, (error, result) => {
        if (error) {
            console.error(error);
            res.status(500).send({ message: 'DB error' });
            return;
        }
        res.status(201).send({
            id: result.insertId,
            ...data
        }); //itt nem adja vissza a completedet vlmiert, kell meg egy query?
    });
});

// PUT /todos/:id
// Update a todo item.


app.put('/api/todos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
        res.status(400).send({ message: 'invalid ID' });
        return;
    }

    const updateQuery = `
UPDATE todos
SET text = ?, completed = ? WHERE id = ?
`;
    const params = [req.body.text, req.body.completed, id]; //itt ugyanaz legyen a sorrend mint a queryben!!!!!!!!!!

    conn.query(updateQuery, params, (updateErr, updateResult) => {
        if (updateErr) {
            console.error(updateErr);
            res.status(500).send({ message: 'DB error' });
            return;
        }

        if (updateResult.affectedRows === 0) {
            // No row has been updated
            res.status(404).send({ message: 'not found' });
            return;
        }

        const selectQuery = `SELECT id, text, completed FROM todos
    WHERE id = ?`;

        conn.query(selectQuery, id, (selectErr, rows) => {
            if (selectErr) {
                console.error(selectErr);
                res.status(500).send({ message: 'DB error' });
                return;
            }

            res.send(rows[0]); //me nem latszodik?
        });
    });
});

// DELETE /todos/:id
// Delete a todo item.

app.delete('/api/todos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
        res.status(400).send({ message: 'invalid ID' });
        return;
    }

    const updateQuery = `UPDATE todos
    SET completed = ?, destroyed= ? WHERE id = ?
    `;
    const params = [req.body.completed, req.body.destroyed, id]; 

    conn.query(updateQuery, params, (updateErr, updateResult) => {
        if (updateErr) {
            console.error(updateErr);
            res.status(500).send({ message: 'DB error' });
            return;
        }

        if (updateResult.affectedRows === 0) {
            // No row has been updated
            res.status(404).send({ message: 'not found' });
            return;
        }

        const selectQuery = `SELECT * FROM todos
    WHERE id = ?`;

        conn.query(selectQuery, id, (selectErr, rows) => {
            if (selectErr) {
                console.error(selectErr);
                res.status(500).send({ message: 'DB error' });
                return;
            }

            res.send(rows[0]); //me nem latszodik?
        });
    });
});



app.listen(port, () => console.log(`Server started on port: ${port}`));
// npm i express mysql2
// npm i --save-dev nodemon
//Npm init -y