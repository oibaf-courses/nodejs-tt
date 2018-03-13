/* jshint esversion: 6 */

const date = (new Date()).toJSON();
const express = require('express');
const target = require('./controllers/target');

app = express();

app.post('/api/target/cadastra', function (req, res) {
    res.send(target.post());
    res.end();
});

app.get('/api/target/lista', function (req, res) {
    res.send(target.get());
    res.end();
});

app.put('/api/target/altera', function (req, res) {
    res.send(target.put());
    res.end();
});

app.delete('/api/target/exclui', function (req, res) {
    res.send(target.delete());
    res.end();
});


app.listen(3000);