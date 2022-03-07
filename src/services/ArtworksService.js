import axios from 'axios';
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
    },

    //Function permitting to find all artworks linked to a category
    findByCategory(id) {
        return apiClient.get(`artwork?category=${id}&_embed`); //Why &_embed? Find explainations
    }

}  