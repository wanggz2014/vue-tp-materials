import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import User from './module/user'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
   
  },
  mutations: {
   
  },
  actions: {
   
  },
  modules: {
    User
  },
  plugins: [createPersistedState()]
})
