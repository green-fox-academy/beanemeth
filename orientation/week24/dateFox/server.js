const express = require('express');
const mysql = require('mysql2');

const app = express();

const port = 5680;

app.use(express.json());

app.use(express.static('public'));

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'bea',
    database: 'datingApp',
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

app.post('/api/users', (req, res) => {
    const data = {
        username: req.body.username,
        nickname: req.body.nickname,
        birth_year: req.body.birth_year,
        gender: req.body.gender,
        target_gender: req.body.target_gender,
        self_description: req.body.self_description,
        profile_picture_url: req.body.profile_picture_url,
    };

    // Validation
    if (data.birth_year >= (new Date().getFullYear()-18)) {
        res.status(400).send({ message: 'your are too young to register, go play in the sandpit'});
        return;
    }
    // if (!data.profile_picture_url || !data.profile_picture_url.includes(':')) {
    //     res.status(400).send({ message: 'missing or invalid picture URL' });
    //     return;
    // }
    // if (!data.profile_picture_url || !data.nickname || !data.username || !data.birth_year || !data.gender || !data.target_gender) {
    //     res.status(400).send({ message: 'missing or invalid data' });
    //     return;
    // }
    const query = 'SELECT * FROM datingApp WHERE username = ?';
    conn.query(query, [data.username], (error, result) => {
       console.log(result);
               if (error) {
            res.status(500).send({ message: 'Error' });
            return;
        } if (result.length !== 0) {
            return res.status(400).send({ message: 'username is already in use!' });
        }

        const query2 = `
    INSERT INTO datingApp (username, nickname, birth_year, gender, target_gender, self_description, profile_picture_url )
    VALUES (?, ?, ?, ?, ?, ?, ?)`;
        const params = [data.username, data.nickname, data.birth_year, data.gender, data.target_gender, data.self_description, data.profile_picture_url ];

        conn.query(query2, params, (error, result) => {
            if (error) {
                console.error(error);
                res.status(500).send({ message: 'DB error' });
                return;
            }
            res.status(201).send({message: 'Succesful registration!' });  //ha lenne id akkor azt vissza kellene kuldeni
        });
    });
});

//GET /api/users/{username}
app.get('/api/users/:username', (req, res) => {
   
    const username = req.params.username; //req.params az a teljes object, 
    const age = new Date().getFullYear()-Number(req.body.birth_year);
    //console.log(age);
    
    if (!username) {
        return res.status(404).json({
            error: 'username not found!',
        });
    }
   
    const query2 = 'SELECT username, nickname, gender, target_gender, self_description, profile_picture_url FROM datingApp WHERE username = ?';
    conn.query(query2, [username], (err2, result2) => {
        if (err2) {
            console.error(err2);
            res.status(500).send({ message: err2.sqlMessage }); //server oldali hiba
            return;
        }  if (!result2[0]) {
            res.status(404).send();
            return;
        }
        res.status(200).send({age, ...result2[0]});
    });
});

// GET /profiles/{username}
// Loads the user's Profile page.
app.get('/profile/:username', (req, res) => {
console.log(req.params.username);
    // const username = req.params.username; //req.params az a teljes object, 
    // if (!username) {
    //     return res.status(404).json({ //404 hogyha nincs olyan username
    //         error: 'username not found!',
    //     });
    // }
 
    res.sendFile(__dirname + '/public/profile.html');
        });
 

// }); // query es params az urlbol szedi ki a dolgokat. /post/3 az ugy lenne h post/:id; 
//putba a bodyba rakjuk az adatokat, post szamat a paramsbol kapjuk meg, id-val jeloljuk ki h melyiket akarjuk updatelni
//post, put - body
//getnel nincs body
//localhost:3000/api/posts/2/vote - itt a 2 a req.params, postmanben a params a query stringnek egy parametere.
//params: azonositani adatbazis adattablajaban egy sort, pl alias vagy 2es azoosit egy sort!
//postnal meg nem tudjuk az id-t
//get, put delete, itt azonositani kell ezert berakjuk paramsba az id-t
//




app.listen(port, () => console.log(`Server started on port: ${port}`));