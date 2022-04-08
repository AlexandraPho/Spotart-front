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
    findAll() {
        return apiClient.get('/artist?_embed');
    },
    find(id) {
        return apiClient.get(`/artist/${id}?_embed`);
    },
    createPostArtist(id, data, callback) {
        apiClient.post(`/artist/${id}`, data, {
        headers: {
            'Authorization': 'Bearer ' + store.state.token 
        }
    }).then( 
        (response) => {
            callback(response);
        }
    )
    },

    //Suppression de l'utilisateur dans la BDD
    delete(id, callback) {
        apiClient.delete(`/artwork/${id}`,{
            headers: {
                'Authorization': 'Bearer ' + store.state.token
            }
        })
        .then(
            (response) => {
                callback(response);
            }
        )
    },
}