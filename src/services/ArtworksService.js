import axios from 'axios';
<<<<<<< HEAD
=======
import store from '@/store/index.js';
// import of AXIOS to be able to contact our WP API
>>>>>>> c7aca956fd8a3472779cb659f01b5aae1496edc0

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
<<<<<<< HEAD

    //Function permitting to find all artworks linked to a category
    findByCategory(id) {
        return apiClient.get(`artwork?category=${id}&_embed`);
    }
}
=======
    
    findAll() {
        return apiClient.get('/artwork?_embed');
        // http://spotart.local/wp-json/wp/v2/artwork?posts => Get all posts of artwork
    },

    //Function permitting to find all artworks linked to a category
    findByCategory(id) {
        return apiClient.get(`artwork?category=${id}`);
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
    /* CreatePost(data, callback) {
    return apiClient.post('/jwt-auth/v1/token', data)
    .catch(
        (error) => {
            // On execute la callback avec un objet contenant l'erreur
            callback({
                "type": "error",
                "message": error.response.data.code
            });
        },
    )   */
        /* .then(
        (response) => {
            console.log(response);
            store.commit('setToken', response.data.data.token);
            store.commit('setUserID', response.data.data.id);
            // On execute la callback avec un objet contenant le succes
            callback({
                "type": "success",
                "message": response.data.message
            });
        }
    );  */
 

}  
>>>>>>> c7aca956fd8a3472779cb659f01b5aae1496edc0
