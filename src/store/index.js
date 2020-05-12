import Vue from 'vue'
import Vuex from 'vuex'
import defaultNote from './modules/defaultNote'
import modals from './modules/modals'

Vue.use(Vuex)

const state = {
  notes: [
    { 
      id: 'tuho',
      title: 'time itme',
      todos: [
        { title: 'Todo 1', id: 'uthonuhnountouo', checkedIn: true },
        { title: 'Todo 2', id: 'uouuo', checkedIn: false },
        { title: 'Todo 3', id: '24hnuonuo', checkedIn: false },
        { title: 'Todo 4', id: 'noh2p235235', checkedIn: true }
      ]
    },

    { 
      id: '34242342345551',
      title: '1 hntoh enuoh e',
      todos: [
        { title: '1 item', id: '24234234234', checkedIn: false }
      ]
    }
  ]
}

const getters = {
  getNotes(state) {
    return state.notes
  },

  getNoteById: state => id => {
    return state.notes.find(note => note.id === id)
  },
}

const mutations = {
  addNote(state, newNote) {
    const noteIndex = state.notes.findIndex(note => note.id === newNote.id)

    if (noteIndex !== -1) {
      const notes = state.notes.concat()

      notes[noteIndex] = {...newNote}
      state.notes = notes
    } else {
      state.notes.unshift({...newNote})
    }
  },

  removeNote(state, id) {
    const noteIndex = state.notes.findIndex(note => note.id === id)
    state.notes.splice(noteIndex, 1)
  }
}

const actions = {
  removeNote({ commit }, id) {
    commit('removeNote', id)
    commit('defaultNote/createDefaultNote', null, {root: true})
  },

  addNote({ commit }, newNote) {
    commit('addNote', newNote)
    commit('defaultNote/createDefaultNote', null, {root: true})
  }
}

const modules = {
  defaultNote,
  modals
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules
})
