const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

const furnitureSchema = new mongoose.Schema({
    name: String,
    category: String,
    price: Number,
    rating: Number,
    imageUrl: String,
    onSale: Boolean
},
{
    timestamps: false
});

const Furniture = mongoose.model('Furniture', furnitureSchema);

module.exports = Furniture;