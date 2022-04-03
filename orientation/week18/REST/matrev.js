const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());

const posts = [
    { id: 1, text: "askjfboauevbouf", userId: 2 },
    { id: 2, text: "askjfboauevbouf", userId: 4 },
    { id: 3, text: "askjfboauevbouf", userId: 1 },
    { id: 4, text: "askjfboauevbouf", userId: 2 }
]

app.get('/', (req, res) => {
    res.send("mukodik az endpoint");
})


app.get("/posts", (req, res) => {
    if (posts.length === 0) {
        res.status(400).send({ message: "Cannot find any post" })
    }
    res.json(posts)
})

app.post("/posts", (req, res) => {
    const data = req.body;
    const postId = posts[posts.length - 1].id + 1;
    data.id = postId;

    posts.push(data);

    res.status(201).send("Post saved");
})

app.put("/posts/:id", (req, res) => {
    const data = req.body;
    const postId = Number(req.params.id);

    const post = posts.filter((post) => {
        if (post.id === postId) {
            return true
        }
    })
    post[0].text = data.text;

    res.status(201).send({ Message: "modified" })
})

app.delete("/posts/:id", (req, res) => {
    // ...
})

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
})