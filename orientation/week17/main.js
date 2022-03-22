
let express = require('express');
let app = express();
const port = 4000;
// Add serving static assets to serve your assets folder
// const path = require('path')
// app.use('/static', express.static(path.join(__dirname, 'public')))
app.use(express.static(__dirname + '/assets'));
// Create a route for getting /
// render the static index.html here:
// res.sendFile(__dirname + '/index.html');
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// app.get('/assets/style.css', (req, res) => {
//     res.sendFile(__dirname + '/assets/style.css')
    
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

//middlewear lefut minden egyes request handler elott