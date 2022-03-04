import { createStore } from 'vuex'

export default createStore({
  state: {
    token: null,
    userID: null,
    userRole: null
  },
  mutations: {
    //sate est rempli automatiquement lors de l'appel de la mutation
    setToken(state, newToken) {
      state.token = newToken;
    },
    setUserID(state, newUserID) {
      state.userID  = newUserID;
    },
    setUserRole(state, newUserRole) {
      state.userRole = newUserRole;
    },
  },
  actions: {
  },
  modules: {
  },
  getters: {
    checkUserRole: (state) => (roles) => {
      console.log(state.userRole, roles)
      return roles.includes(state.userRole);
    }
  }
})
