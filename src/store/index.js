// import '@/firebase-config'
import Vue from 'vue'
import Vuex from 'vuex'
import { modules } from './modules'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  namespaced: false,
  plugins: [createPersistedState()],
  state: {},
  mutations: {},
  actions: {},
  modules
})
