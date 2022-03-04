import axios from 'axios';
import store from '../store/index.js';

const apiClient = axios.create({
    baseURL: 'http://spotart.local/wp-json',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    },
    timeout: 10000,
});


export default {
    register(data, callback) {
        apiClient.post('/wp/v2/users/register', data)
            .catch(
                (error) => {
                    callback(error.response.data.message);
                }
            )
            .then(
                (response) => {
                    console.log(response);
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