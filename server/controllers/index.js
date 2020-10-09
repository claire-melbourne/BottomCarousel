const axios = require('axios');

module.exports = {
    getFurnitures: (id) => {
        if (id) {
            console.log(id);
            return axios.get(`/api/similarProducts/products/${id}`);
        }
            return axios.get(`/api/similarProducts/products/1`);
    }
}