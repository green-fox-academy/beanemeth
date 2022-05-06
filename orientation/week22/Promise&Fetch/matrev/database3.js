// We need to use the `mysql2` package because `mysql` doesn't support promises.
const mysql = require('mysql2');

const conn = mysql.createConnection({
    host: '0.0.0.0',
    user: 'root',
    password: 'abc123',
    database: 'gfa',
});

// `conn.promise()` returns a modified connection object with a different
// `query` method that returns a promise.
conn.promise().query('DELETE FROM participants_classes WHERE class_id = 1')
    // `result` is the value that the promise that the `query` method returned
    // is resolved with.
    .then((result) => {
        // `result` is an array with 2 elements. The first element is the actual
        // result, the second element is an object of the column definitions.
        // We are only interested in the actual result (the first element).
        console.log('Result of query 1:', result[0]);

        // We are returning a new promise from the `then` method that the
        // `query` method returns.
        return conn.promise().query('DELETE FROM cohorts WHERE id = 1');
    })
    // `result` is the value that the promise that is returned from the
    // previous `then` callback is resolved with.
    .then((result) => {
        console.log('Result of query 2:', result[0]);
        // From here we'll jump into the callback of the `finally` method,
        // skipping `catch` because there was no error.
    })
    // The callback of the `catch` method handles any promise rejection that
    // occurred anywhere before.
    .catch((error) => {
        console.error(error);
        // From here we'll also jump into the callback of the `finally` method.
    })
    .finally(() => {
        // We need to close the connection otherwise it will stay open forever.
        // We don't have to do it on a web server because there that is exactly
        // what we want.
        conn.close();
    });

// We can do the same without callback functions using async/await.

// We need to use the `async` function modifier when there is an `await` inside
// the function.
async function deleteCohort() {
    try {
        // The `query` method returns a promise, but with the `await` keyword
        // it is waiting for the promise to resolve, and returns the value that
        // the promise got resolved with.
        const result1 = await conn.promise()
            .query('DELETE FROM classes WHERE cohort_id = 1');
        console.log('Result of query 1:', result1[0]);

        const result2 = await conn.promise()
            .query('DELETE FROM cohorts WHERE id = 1');
        console.log('Result of query 2:', result2[0]);
    } catch (error) {
        // If a promise is rejected while we're waiting for it to resolve, it
        // raises an exception that we can handle in a traditional `catch`
        // block.
        console.error(error);
    } finally {
        // The finally block always runs.
        conn.close();
    }
}

// Don't forget to call the async function.
deleteCohort();