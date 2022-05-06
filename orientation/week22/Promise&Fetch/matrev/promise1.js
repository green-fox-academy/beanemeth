// Promises can be created with the Promise constructor. The constructor has
// one argument, a callback function that will run asynchronously.
//
// The callback function has two parameters, conventionally called `resolve`
// and `reject`. Both are functions.
const myPromise = new Promise((resolve, reject) => {
    // This is the place to do some lengthy I/O operation. During the I/O
    // operation this function is waiting in the background while some other
    // piece of code is using the CPU.

    if (error) {
        // `reject` is a function that sends its argument to the callback
        // function of the `catch` method of the promise.
        reject(error);
    } else {
        // `resolve` is a function that sends its argument to the callback
        // function of the `then` method of the promise.
        resolve(data);
    }
});

// A promise is an object that has a `then` and a `catch` method (among others).
myPromise
    // The callback of the `then` method of the promise is called when the
    // function above calls `resolve`. This is when the promise gets "resolved"
    // or "fulfilled".
    .then((data) => {
        // `data` is the argument that `resolve` is called with in the function
        // above.
        console.log(data);
    })
    // The callback of the `catch` method of the promise is called when the
    // function above calls `reject`. This is when the promise gets "rejected".
    .catch((error) => {
        // `error` is the argument that `reject` is called with in the function
        // above.
        console.error(error);
    });

// This is how to wrap `setTimeout` into a promise.
function sleep(duration) {
    return new Promise((resolve) => {
        setTimeout(resolve, duration);
    });
}

// This is how to wrap `connection.query` from the `mysql` package into a
// promise.
function query(sqlCommand, params) {
    return new Promise((resolve, reject) => {
        connection.query(sqlCommand, params, (error, result) => {
            if (error) {
                reject(error);
            } else {
                resolve(result);
            }
        });
    });
}