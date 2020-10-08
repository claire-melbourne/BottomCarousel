const axios = require('axios');

module.exports = {
    getFurnitures: () => {
        return axios.get('/api/similarProducts/products/1');
    }
}