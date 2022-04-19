import axios from 'axios'
const state = {
  user: [],
  games: [],
  guild: {},
  p2e_experience: [],
  userNft: [
    { name: 'nftName', img: 'imgUrl' },
    { name: 'nftName', img: 'imgUrl' },
    { name: 'nftName', img: 'imgUrl' },
    { name: 'nftName', img: 'imgUrl' }
  ]
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
  },
  p2e_experience: (state) => {
    return state.p2e_experience
  },
  userNft: (state) => {
    return state.userNft
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
  },
  async getExperienceInfo ({ commit }) {
    await axios.get('http://localhost:3000/experience')
      .then((res) => {
        console.log(res.data)
        commit('setExperienceInfo', res.data)
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
  },
  setExperienceInfo (state, data) {
    state.p2e_experience = data
  }
}

export default {
  state, getters, actions, mutations
}
