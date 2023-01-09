const express = require('express');
const api = require('./routes/api')
const html = require('./routes/html')
const PORT = process.env.port || 3001;
const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Shows static files
app.use(express.static('public'));

app.use('/api', api);
app.use('/', html);

app.listen(PORT, () =>
console.log(`Example app listening at http://localhost:${PORT}`)
);


