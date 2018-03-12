/* jshint esversion: 6 */
const express = require('express');
const circulo = require('./circle');
app = express();

app.use('/static', express.static(__dirname + '/public'));

app.get(/^\/circle\/area\/(\d+)$/, function(req, res) {
    res.status(200).send({
        response: circulo.area(req.params[0])
    });
});

console.log(__dirname);

app.listen(8080);
