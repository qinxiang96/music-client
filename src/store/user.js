const user = {
  state: {
    userId: '',
    username: '',
    avator: '',
    collectToken: ''
  },
  getters: {
    userId: state => {
      let userId = state.userId
      if (!userId) {
        userId = JSON.parse(window.localStorage.getItem('userId') || null)
      }
      return userId
    },
    username: state => {
      let username = state.username
      if (!username) {
        username = JSON.parse(window.localStorage.getItem('username') || null)
      }
      return username
    },
    avator: state => {
      let avator = state.avator
      if (!avator) {
        avator = JSON.parse(window.localStorage.getItem('avator') || null)
      }
      return avator
    },
    collectToken: state => {
      let collectToken = state.collectToken
      if (!collectToken) {
        collectToken = JSON.parse(window.localStorage.getItem('collectToken') == undefined? null: window.localStorage.getItem('collectToken') == undefined|| null)
      }
      return collectToken
    }
  },
  mutations: {
    setUserId: (state, userId) => {
      state.userId = userId
      window.localStorage.setItem('userId', JSON.stringify(userId))
    },
    setUsername: (state, username) => {
      state.username = username
      window.localStorage.setItem('username', JSON.stringify(username))
    },
    setAvator: (state, avator) => {
      state.avator = avator
      window.localStorage.setItem('avator', JSON.stringify(avator))
    },
    setCollectToken: (state, collectToken) => {
      state.collectToken = collectToken
      window.localStorage.setItem('collectToken', JSON.stringify(collectToken))
    }
  },
  actions: {}
}

export default user
