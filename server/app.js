const express = require('express');
const Furniture = require('../database-mongodb/Furniture');
const app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/product/:id', (request, response) => {
    Furniture.find({id: request.params.id})
        .then((res) => {
            response.json(res);
        })
        .catch((error) => {
            response.end(error);
        });
});

module.exports = app;