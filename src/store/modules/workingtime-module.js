import axios from 'axios'

const state = {
  workingTime: []
}

const getters = {
  workingTimeList: state => state.workingTime
}

const actions = {
  async createWorkingTime ({ commit }, id) {
    const response = await axios.post(`http://localhost:3000/workingTime/${id}`)
    commit('createWorkingTime', response.data)
  },

  async updateWorkingTime ({ commit }, id, wtId) {
    const response = await axios.put(`http://localhost:3000/workingTime/${id}/${wtId}`)
    commit('updateWorkingTime', response.data)
  },

  async deleteWorkingTime ({ commit }, id, wtId) {
    const response = await axios.delete(`http://localhost:3000/workingTime/${id}/${wtId}`)
    commit('deleteWorkingTime', response.data)
  }
}

const mutations = {
  createWorkingTime: (state, workingTime) => state.workingTime.unshift(workingTime),

  updateWorkingTime: (state, id) => (
    state.workingTime.id = id
  ),

  deleteWorkingTime: (state, id) => (
    state.workingTime.filter(workingTime => workingTime.id !== id)
  )
}

export default {
  state,
  getters,
  actions,
  mutations
}
