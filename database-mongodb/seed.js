const db = require('./index.js');
const faker = require('faker');
const Furniture = require('./Furniture.js');

//use faker.js to generate random data
//create 100 copies of sample furniture
const furnitureArr = [];

const bulkCreate = () => {
    for (let i = 0; i < 100; i++) {
        let sampleFurniture = {
            name: faker.commerce.productName(),
            category: faker.commerce.product(),
            price: faker.random.number({min: 20, max: 300}),
            rating: faker.random.number({min: 1, max: 5, precision: 0.5}),
            imageUrl: faker.image.technics(),
            onSale: faker.random.boolean()
        };
        furnitureArr.push(sampleFurniture);
    }
};

bulkCreate();

//store the 100 copies of sample furnitures
Furniture.insertMany(furnitureArr, (error, data) => {
    if (error) {
        console.log(error);
    } else {
        console.log(`Successfully stored ${data.length} items into the database!`);
    }
});

