const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const db = require('./queries');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/', (req, res) => res.json({
    info: 'node.js, express, postgresql demo'
}));

app.listen(port, () => {console.log(`App is running at port ${port}`)});


app.get('/users', db.getUsers);

app.get('/user/:id', db.getUserById);