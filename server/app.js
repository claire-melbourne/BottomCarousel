const express = require('express');
const Furniture = require('../database-mongodb/Furniture');
const app = express();
const path = require('path');

app.use(express.static(__dirname + '/../client/dist'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/api/similarProducts/products/:id', (request, response) => {
    Furniture.find({id: request.params.id})
        .then((res) => {
            response.json(res);
        })
        .catch((error) => {
            response.end(error);
        });
});

app.get('/products/:id', (request, response) => {
    response.sendFile(path.join(__dirname, "/../client/dist", "index.html"));
});

module.exports = app;