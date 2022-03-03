import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://spotart.local/wp-json/wp/v2',
    headers:  {
        Accept: 'application/json',
        'content-Type': 'application/json',
    },
    timeout: 5000
});

export default {
    findAll() {
        return apiClient.get('/artwork?_embed');
    },

    find(id) {
        return apiClient.get(`/artwork/${id}?_embed`);
    },

    //Function permitting to find all artworks linked to a category
    findByCategory(id) {
        return apiClient.get(`artwork?category=${id}`);
    }
}