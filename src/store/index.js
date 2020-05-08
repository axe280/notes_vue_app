import Vue from 'vue'
import Vuex from 'vuex'
import defaultTodos from './modules/defaultTodos'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // defaultTodos: [],
    notes: [
      { 
        id: 'tuho',
        title: 'time itme',
        todos: [
          { title: 'todos item', id: 'uthonuhnountouo', checkedIn: true }
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
  },

  getters: {
    getNotes(state) {
      return state.notes
    },

    getNoteById: state => id => {
      return state.notes.find(note => note.id === id)
    },

    // getDefaultTodos(state) {
    //   return state.activeTodos
    // }
  },

  mutations: {
    createNote(state, note) {
      state.notes.push(note)
    },

    addNote(state, newNote) {
      const noteIndex = state.notes.findIndex(note => note.id === newNote.id)

      if (noteIndex !== -1) {
        const notes = state.notes.concat()
  
        notes[noteIndex] = {...newNote}
        state.notes = notes
      } else {
        state.notes.unshift(newNote)
      }
    },

    removeNote(state, id) {
      const note = state.notes.find(note => note.id === id)
      state.notes.splice(note, 1)
    },

    setIntoNoteDeafultTodos(state, id) {
      const updTodos = []
      state.defaultTodos.forEach(todo => {
        const updTodo = {...todo}
        updTodos.push(updTodo)
      })

      const noteIndex = state.notes.findIndex(note => note.id === id)
      state.notes[noteIndex].todos = updTodos
    }
  },

  modules: {
    defaultTodos
  }
})
