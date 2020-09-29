const axios = require('axios');

module.exports = {
    getFurnitures: () => {
        return axios.get('/relatedFurnitures');
    }
}