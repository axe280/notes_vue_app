const state = {
  show: false,
  leavePage: false,
  leaveToPagePath: '',
  currentModal: null
}

const getters = {
  isShow(state) {
    return state.show
  },

  getCurrentModal(state) {
    return state.currentModal
  },

  isLeavePage(state) {
    return state.leavePage
  },

  getLeaveToPagePath(state) {
    return state.leaveToPagePath
  }
}

const mutations = {
  showModal(state, payload) {
    state.show = payload
  },

  showCurrentModal(state, modalName) {
    state.currentModal = modalName
  },

  setLeavePage(state, payload) {
    state.leavePage = payload
  },

  setLeaveToPagePath(state, path) {
    state.leaveToPagePath = path
  }
}

const actions = {

}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}