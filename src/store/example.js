import axios from 'axios'
const state = {
  user: [],
  games: [],
  guild: {}
}

const getters = {
  user: (state) => {
    return state.user
  },
  games: (state) => {
    return state.games
  },
  guild: (state) => {
    return state.guild
  }
}

const actions = {
  async getUserInfo ({ commit }) {
    await axios.get('http://localhost:3000/user')
      .then((res) => {
        commit('setUserInfo', res.data)
      })
  },
  async getGamesInfo ({ commit }) {
    await axios.get('http://localhost:3000/games')
      .then((res) => {
        commit('setGamesInfo', res.data)
      })
  },
  async getGuildInfo ({ commit }) {
    await axios.get('http://localhost:3000/guild')
      .then((res) => {
        commit('setGuildInfo', res.data)
      })
  }
}

const mutations = {
  setUserInfo (state, data) {
    state.user = data
  },
  setGamesInfo (state, data) {
    state.games = data
  },
  setGuildInfo (state, data) {
    state.guild = data
  }
}

export default {
  state, getters, actions, mutations
}
