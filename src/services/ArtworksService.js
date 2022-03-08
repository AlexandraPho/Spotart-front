import axios from 'axios';
import store from '@/store/index.js';
// import of AXIOS to be able to contact our WP API


const apiClient = axios.create({
    baseURL: 'http://spotart.local/wp-json/wp/v2',
    headers:  {
        Accept: 'application/json',
        'content-Type': 'application/json',
    },
    timeout: 5000
});

export default {
    find(id) {
        return apiClient.get(`/artwork/${id}?_embed`);
    },

    //Function permitting to find all artworks linked to a category
    findByCategory(id) {
        return apiClient.get(`artwork?category=${id}&_embed`);
    },
    
    findAll() {
        return apiClient.get('/artwork?_embed');
        // http://spotart.local/wp-json/wp/v2/artwork?posts => Get all posts of artwork
    },
    CreatePost(data, callback) {
        apiClient.post(`/artwork`, data, {
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

