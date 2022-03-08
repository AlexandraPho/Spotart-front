import { createStore } from 'vuex'

export default createStore({
    state: {
        token: null,
        userID: null
    },
    mutations: {
        setToken(state, newToken) {
            state.token = newToken;
        },
        setUserID(state, newUserID) {
            state.userID = newUserID;
        }
    },
    actions: {
    },
    modules: {
    }
})
