import Vue from 'vue'
import Vuex from 'vuex'
import defaultNote from './modules/defaultNote'
import modals from './modules/modals'

Vue.use(Vuex)

const state = {
  notes: JSON.parse(localStorage.getItem('notes') || '[]')
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

    localStorage.setItem('notes', JSON.stringify(state.notes))
  },

  removeNote(state, id) {
    const noteIndex = state.notes.findIndex(note => note.id === id)
    state.notes.splice(noteIndex, 1)

    localStorage.setItem('notes', JSON.stringify(state.notes))
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
