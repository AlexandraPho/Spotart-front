import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://spotart.local/wp-json/wp/v2',
    headers:  {
        Accept: 'application/json',
        'content-Type': 'application/json',
    },
    timeout: 5000
});

export default {
// Function permitting to find all favourites artworks with the ID of the user
    findFavouriteByUserID(id) {
        return apiClient.get(`/favouriteartworks/${id}`);
    },

// Function permitting to register a new relation user / artwork
    createNewRelation(data, callback) {
        apiClient.post(`/favouriteartworks`, data).catch(
            (error) => {
                callback(error.response.data.message);
            }
        )
        .then(
            (response) => {
                console.log(response);
                /*store.commit('setToken', response.data.data.token);*/
                /*store.commit('setUserID', response.data.data.id);
                this.getRole();
                store.commit('setUserRole', response.data.data.id);*/

                /* On execute la callback avec un objet contenant le succes*/
                callback({
                    "type": "success",
                    "message": response.data.message
                });
            }
        );
    },

}
