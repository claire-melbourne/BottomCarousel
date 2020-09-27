const express = require('express');
const Furniture = require('../database-mongodb/Furniture');
const app = express();
const port = 3000;

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

app.listen(port, () => {
    console.log(`Server listening at port: ${port}`);
});

module.exports = app;