import axios from 'axios';
//import store from '../store/index.js';

const apiClient = axios.create({
    baseURL: 'http://spotart.local/wp-json/wp/v2',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
        //'Authorization': 'Bearer ' + sessionStorage.getItem('token')
    },
    timeout: 10000
});

export default {
    
    find(id) {
        return apiClient.get(`/artist/${id}?_embed`);
    },
    
}
