/* jshint esversion: 6 */

const date = (new Date()).toJSON();
const express = require('express');
const bodyParser = require('body-parser');
const target = require('./controllers/target');

app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
  })); 

app.post('/api/target/cadastra', function (req, res) {
    res.send(target.post(req.body));
    res.end();
});

app.get('/api/target/lista', function (req, res) {
    res.send(target.get());
    res.end();
});

app.get(/^\/api\/target\/(\d+)$/, function (req, res) {
    res.send(target.get(req.params[0]));
    res.end();
});

app.put('/api/target/altera', function (req, res) {
    res.send(target.put());
    res.end();
});

app.delete(/^\/api\/target\/exclui\/(\d+)$/, function (req, res) {
    res.send(target.delete(req.params[0]));
    res.end();
});


app.listen(3000);