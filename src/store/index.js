import { createStore } from 'vuex'

export default createStore({
  state: {
    token: '',
    userId: ''
  },
  mutations: {
/*       // 'state' is filled automatically when the mutation is called
      setToken(state, newToken) {
          // We could also add processes and validations before updating the data
          state.token = newToken;
      },
      setUserID(state, newUserID) {
          state.userID = newUserID;
      } */
  },
  actions: {
  },
  modules: {
  }
})
