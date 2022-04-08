import { createStore } from 'vuex';
import createPersistedState from "vuex-persistedstate";


export default createStore({
    state: {
        token: null,
        userID: null,
        userRole: null,
        users : []
    },
    getters: {
        checkUserRole: (state) => (roles) => {
          console.log(state.userRole, roles)
          return roles.includes(state.userRole);
        }
    },
    mutations: {
        setToken(state, newToken) {
            state.token = newToken;
        },
        setUserID(state, newUserID) {
            state.userID = newUserID;
        },
        setUserRole(state, newUserRole) {
            state.userRole = newUserRole;
        },
        deleteUser(state, userId) {
            let users = state.users.filter(u => u.id != userId)
            state.users = users;
        }
    },
    actions: {},
    modules: {},
    plugins: [createPersistedState()]
})
