import axios from 'axios';
import store from '@/store/index.js';

const apiClient = axios.create({
    baseURL: 'http://spotart.local/wp-json/wp/v2',
    headers:  {
        Accept: 'application/json',
        'content-Type': 'application/json',
    },
    timeout: 10000
});

export default {
    find(id) {
        return apiClient.get(`/artworks/${id}?_embed`);
    }, 
    findByCategory(id) {
        return apiClient.get(`artworks?artforms=${id}&_embed`);
    }, 
    findAll() {
        return apiClient.get('/artworks?_embed');
    },
    CreatePost(data, callback) {
        apiClient.post(`/artworks`, data, {
        headers: {
            'Authorization': 'Bearer ' + store.state.token
        }
    })  
    .then(
        (response) => {
            console.log(response);
            callback();
        }
    )  
    },
}