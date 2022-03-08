import axios from 'axios';
import store from '@/store/index.js';
// import of AXIOS to be able to contact our WP API


// PREPARATION OF OUR REQUEST with all information we need to connect to the API
const apiClient = axios.create({
    baseURL: 'http://spotart.local/wp-json/wp/v2', // URL de base que vont avoir toutes nos requetes (communes)
    headers: { //What we accept to receive from the API
        Accept: 'application/json',
        'Content-Type': 'application/json',
    }, 
    timeout: 10000 // After 10s we cut the connexion
});


// Every thing we put in the "export default" will be available in the other components and fileswith an import
export default {

    // Function permitting to find one specific artwork (with its ID)
    find(id) {
        return apiClient.get(`/artwork/${id}?_embed`);
    },
    
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