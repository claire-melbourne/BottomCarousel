const axios = require('axios');

module.exports = {
    getFurnitures: () => {
        return axios.get('/product/5');
    }
}