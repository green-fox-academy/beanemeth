const request = require('supertest');
const { app, conn } = require('../server');



// Testing with async/await
test('GET /api/genres returns the genres', async () => {
    const response = await request(app)
        .get('/api/genres')
        .expect(200)
        .expect('Content-Type', /json/);

    expect(response.body.genres[0].genre).toBe('sci-fi');
});

test('GET /api/movies returns the movies', async () => {
    const response = await request(app)
        .get('/api/movies')
        .expect(200)
        .expect('Content-Type', /json/);

    expect(response.body.movies[1].title).toBe('Contact');
});

afterAll(() => {
    // Clear the database
    conn.end(); // Close the DB connection
});

//npm install jest
//npx jest
//modules needed to be exported from the server.js