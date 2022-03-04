import axios from 'axios';
import store from '../store';

const apiClient = axios.create({
    baseURL: 'http://spotart.local/wp-json',
    headers:  {
        Accept: 'application/json',
        'content-Type': 'application/json'
    },
    timeout: 5000
});


export default {
    register(data, callback) {
        apiClient.post('/wp/v2/users/register', data)
        .catch(
            //recupérer des erreurs
            (error) => {
                callback(error.response.data.code);
                //console.log(error.response.data.message);
            }
        )
        .then(
            (response) => {
            console.log(response);
            }
        );
    },
    connect(data, callback) {
        return apiClient.post('/jwt-auth/v1/token', data)
        .catch(
            //recupérer des erreurs
            (error) => {
                callback({
                    "type" : "error",
                    "message" :  error.response.data.code
                   
                //console.log(error.response.data.message);
                });
            }
        )
        .then(
            (response) => {
                console.log('response');
                //on passe par le stockage de vuex et non plus par la sessionStorage
                store.commit('setToken',response.data.data.token);
                store.commit('setUserID', response.data.data.id);

                //sessionStorage.setItem('token', response.data.data.token);
                //sessionStorage.setItem('userID', response.data.data.id)
                callback({
                    "type": "success",
                    "message": response.data.message
                });
                // On va inserer le token dans le session storage

                
            }
        );
    },
    getRole() {
        apiClient.get(`wp/v2/users/${store.state.userID}?context=edit`, {
            headers: {
                'Authorization': 'Bearer ' + store.state.token
            }
        })
        .then(
            (response) => {
                store.commit('setUserRole', response.data.roles[0]);
            }
        )
    }
}