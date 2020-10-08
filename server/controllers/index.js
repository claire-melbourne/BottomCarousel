const axios = require('axios');

module.exports = {
    getFurnitures: (id) => {
            return axios.get(`/api/similarProducts/products/${id}`);
    }
}