import axios from 'axios'

const state = {
  users: []
}

const getters = {
  usersList: state => state.users
}

const actions = {
  async getUsers ({ commit }) {
    const response = await axios.get('http://localhost:3000/users')
    commit('getUsers', response.data)
  },

  async getUser ({ commit }, id) {
    const response = await axios.get(`http://localhost:3000/users/${id}`)
    commit('getUser', response.data)
  },

  async createUser ({ commit }, user) {
    const response = await axios.post('http://localhost:3000/users', user)
    commit('createUser', response.data)
  },
  async deleteUser ({ commit }, id) {
    await axios.delete(`http://localhost:3000/users/${id}`)
    commit('deleteUser', id)
  }

}

const mutations = {
  getUsers: (state, users) => (
    state.users = users
  ),
  getUser: (state, id) => (
    state.users.filter(user => user.id !== id)
  ),
  createUser: (state, user) => state.users.unshift(user),
  deleteUser: (state, id) => (
    state.users.filter(user => user.id !== id)
    // state.users.splice(user => user.id, 1)
  )
}

export default {
  state,
  getters,
  actions,
  mutations
}
