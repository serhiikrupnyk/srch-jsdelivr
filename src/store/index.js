import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const state = {
  packages: [],
  selectedPackage: null,
  showDetailsDialog: false
}

const getters = {}

const mutations = {
  setPackages(state, packages) {
    state.packages = packages
  },
  setSelectedPackage(state, item) {
    state.selectedPackage = item
  },
  setShowDetailsDialog(state, value) {
    state.showDetailsDialog = value
  }
}

const actions = {
  async searchPackages({ commit }, searchTerm) {
    const response = await axios.get(`https://api.npms.io/v2/search?q=${searchTerm}`)
    commit('setPackages', response.data.results)
  },
  async getPackageDetails({ commit }, item) {
    const searchParams = `${item.package.name}@${item.package.version}`;
    const response = await axios.get(`https://data.jsdelivr.com/v1/packages/npm/${searchParams}`);
    commit('setSelectedPackage', response.data)
    commit('setShowDetailsDialog', !!response.data)
  },
  closeDetailsDialog({commit}) {
    commit('setShowDetailsDialog', false)
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
