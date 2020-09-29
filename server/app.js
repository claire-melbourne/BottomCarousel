const express = require('express');
const Furniture = require('../database-mongodb/Furniture');
const app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/relatedFurnitures', (request, response) => {
    Furniture.find({}, (error, data) => {
        console.log(error);
        //console.log(data);
        response.send(JSON.stringify(data));
        response.end();
    });
});

module.exports = app;