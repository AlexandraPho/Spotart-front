import {
  createStore
} from 'vuex'
export default createStore({
  state: {
    token: null,
    userID: null,
    userRole: null
  },
  getters: {
    checkUserRole: (state) => (roles) => {
      console.log(state.userRole, roles)
      return roles.includes(state.userRole);
    }

  },
  mutations: {
    setToken(state, newToken) {
      // On pourrait ajouter des traitements et des
      // validations avant de mettre a jour la donnée
      state.token = newToken;
    },
    setUserID(state, newUserID) {
      state.userID = newUserID;
    },
    setUserRole(state, newUserRole) {
      state.userRole = newUserRole;
    }
  },
  actions: {},
  modules: {}
})

