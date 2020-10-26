import axios from 'axios'

const state = {
  workingTimes: []
}

const getters = {
  workingTimesList: state => state.workingTimes
}

const actions = {
  async getWorkingTimes ({ commit }, id) {
    const response = await axios.get(`http://localhost:3000/workingTimes/${id}`)
    commit('getWorkingTimes', response.data)
  }
}

const mutations = {
  getWorkingTimes: (state, workingTimes) => (
    state.workingTimes = workingTimes
  )
}

export default {
  state,
  getters,
  actions,
  mutations
}
