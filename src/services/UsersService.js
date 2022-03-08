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
    connect(data, callback) {
        return apiClient.post('/jwt-auth/v1/token', data)
        .catch(
            (error) => {
                callback({
                    "type": "error",
                    "message": error.response.data.code
                });
            }
        )
        .then(
            (response) => {
                console.log(response);
                store.commit('setToken', response.data.data.token);
                store.commit('setUserID', response.data.data.id);

                callback({
                    "type": "success",
                    "message": response.data.message
                });
            }
        )
    }
}