const state = {
  defaultNote: {
    id: null,
    title: '',
    todos: []
  }
}

const getters = {
  getDefaultNote(state) {
    return state.defaultNote;
  },

  getTodo: state => id => {
    return state.defaultNote.todos.find(todo => todo.id === id)
  }
}

const mutations = {
  copyNote(state, {id, title, todos}) {
    state.defaultNote.id = id
    state.defaultNote.title = title

    state.defaultNote.todos = []

    todos.forEach(todo => {
      const updTodo = {...todo}
      state.defaultNote.todos.push(updTodo)
    })
  },

  setDefaultNoteTitle(state, title) {
    state.defaultNote.title = title
  },

  createDefaultNote(state) {
    state.defaultNote.id = String(Date.now()),
    state.defaultNote.title = 'Note title',
    state.defaultNote.todos = []
  },

  createTodo(state) {
    const todo = {
      id: String(Date.now()),
      title: '',
      checkedIn: false
    }

    state.defaultNote.todos.push(todo)
  },

  todoEditTitle(state, { id, value }) {
    const todos = state.defaultNote.todos
    const todoIndex = todos.findIndex(todo => todo.id === id)
    todos[todoIndex].title = value
  },

  todoChecked(state, { id, checked }) {
    const todos = state.defaultNote.todos
    const todoIndex = todos.findIndex(todo => todo.id === id)
    todos[todoIndex].checkedIn = checked
  },

  todoRemove(state, id) {
    const todos = state.defaultNote.todos
    const todoIndex = todos.findIndex(todo => todo.id === id)
    todos.splice(todoIndex, 1)
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