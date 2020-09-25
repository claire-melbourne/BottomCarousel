const db = require('./index.js');
const faker = require('faker');
const Furniture = require('./Furniture.js');

//use faker.js
const sampleFurniture = {
    name: faker.commerce.productName(),
    category: faker.commerce.product(),
    price: faker.random.number({min: 20, max: 300}),
    rating: faker.random.number({min: 1, max: 5}),
    imageUrl: faker.image.animals()
};

//create 100 copies of sample furniture
const furnitureArr = [];

const bulkCreate = () => {
    for (let i = 0; i < 100; i++) {
        furnitureArr.push(Object.create(sampleFurniture));
    }
};

bulkCreate();

//store the 100 copies of sample furnitures
Furniture.collection.insertMany(furnitureArr, (error, data) => {
    if (error) {
        console.log(error);
    } else {
        console.log(`Successfully stored ${data.length} items into the database!`);
    }
});

