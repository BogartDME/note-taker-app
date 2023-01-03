const express = require('express');
const app = express();
const path = require('path');
const PORT = 3001;

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Shows static files
app.use(express.static('public'));

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);

//html route for index.html
app.get('/', (req, res) => {
    res.sendFile (path.join(__dirname, "/public/index.html")
    );
});

//html route for notes.html
app.get('/notes', (req, res) => {
    res.sendFile (path.join(__dirname, "/public/notes.html")
    );
});
//API route
app.get('/api', (req, res) => res.json(pulls));

