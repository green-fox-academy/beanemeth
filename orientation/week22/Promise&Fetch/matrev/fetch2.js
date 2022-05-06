// Parts of a HTTP response:
// - status code |
// - headers     |
// - body        V
// They are downloaded in this order.

// `fetch` returns a promise that we will call `fetchPromise`. The promise gets
// resolved as soon as the status code and the headers have been downloaded.
const fetchPromise = fetch('https://v2.jokeapi.dev/joke/Any');

// `response` is the value that `fetchPromise` is resolved with. It is passed
// into the callback of the `fetchPromise.then` method.
//
// The `fetchPromise.then` method returns a promise that we will call
// `jsonPromise`.
const jsonPromise = fetchPromise.then((response) => {
    console.log('Response:', response);

    // `response.ok` is `true` if the response has a 2xx status code, `false`
    // otherwise.
    if (response.ok) {
        // The `response.json` method returns a new promise. It needs to be
        // asynchronous because the response body is still downloading at this
        // point.
        return response.json();
    } else {
        // We can reject `jsonPromise` by throwing an exception. In this case
        // we will jump into the next `catch` callback (or interrupt the
        // program execution if there is none).
        throw new Error(response.statusText);
    }
});

// `data` is the value that the promise that the `response.json` method
// returned is resolved with. Because we returned that promise from the
// callback of `fetchPromise.then`, this is going to be the value that
// `jsonPromise` gets resolved with.
//
// It is passed into the callback of the `jsonPromise.then` method.
//
// The `jsonPromise.then` method returns a promise that we will call
// `jokePromise`.
const jokePromise = jsonPromise.then((data) => {
    console.log('Data:', data);
    return data.joke;
});

// `joke` is the value that we returned from the callback of the
// `jsonPromise.then` method. This is going to be the value that `jokePromise`
// gets resolved with.
//
// It is passed into the callback of the `jokePromise.then` method.
//
// Even though we don't return any value from the callback, the
// `jokePromise.then` method still returns a promise that we will call
// `emptyPromise`. It will get resolved with `undefined`.
const emptyPromise = jokePromise.then((joke) => {
    console.log('Joke:', joke);
    console.log(joke);
});

// The callback of the `emptyPromise.catch` method handles every rejection that
// occurred in any of the promises before it.
//
// The `emptyPromise.catch` method also returns a promise, but we won't use it.
emptyPromise.catch((error) => {
    console.error(error);
});


// As we can trust that the `then` and `catch` methods always return promises,
// we don't need to create variables, but we can chain the `then` and `catch`
// methods together.

fetch('https://v2.jokeapi.dev/joke/Any')
    // This `then` method belongs to the promise that the `fetch` method
    // returned.
    .then((response) => {
        console.log('Response:', response);
        if (response.ok) {
            return response.json();
        } else {
            throw new Error(response.statusText);
        }
    })
    // This `then` method belongs to the promise that the first `then` method
    // returned.
    .then((data) => {
        console.log('Data:', data);
        return data.joke;
    })
    // This `then` method belongs to the promise that the second `then` method
    // returned.
    .then((joke) => {
        console.log('Joke:', joke);
    })
    // This `catch` method belongs to the promise that the third `then` method
    // returned. Nevertheless, it can handle any rejection that occurred in any
    // of the promises before.
    .catch((error) => {
        console.error(error);
    });

// We can do the same without callback functions using async/await.

// We need to use the `async` function modifier when there is an `await` inside
// the function.
async function fetchJoke() {
    try {
        // The `fetch` method returns a promise, but with the `await` keyword
        // it is waiting for the promise to resolve, and returns the value that
        // the promise got resolved with.
        const response = await fetch('https://v2.jokeapi.dev/joke/Any');

        if (response.ok) {
            // Similarly, the `json` method returns a promise, but with the
            // `await` keyword it is waiting for the promise to resolve, and
            // returns the value that the promise got resolved with.
            const data = await response.json();
            const joke = data.joke;
            console.log(joke);
        } else {
            console.error(response.statusText);
        }
    } catch (error) {
        // If a promise is rejected while we're waiting for it to resolve, it
        // raises an exception that we can handle in a traditional `catch`
        // block.
        console.error(error);
    }
}

// Don't forget to call the async function.
fetchJoke();