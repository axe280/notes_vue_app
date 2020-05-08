const state = {
  defaultTodos: []
}

const getters = {
  getDefaultTodos(state) {
    return state.defaultTodos
  },

  getTodo: state => id => {
    return state.defaultTodos.find(todo => todo.id === id)
  }
}

const mutations = {
  updateDefaultTodos(state, todos) {
    state.defaultTodos = []

    todos.forEach(todo => {
      const updTodo = {...todo}
      state.defaultTodos.push(updTodo)
    })
  },

  createTodo(state) {
    const todo = {
      id: String(Date.now()),
      title: '',
      checkedIn: false
    }

    state.defaultTodos.push(todo)
  },

  todoEditTitle(state, { id, value }) {
    const todoIndex = state.defaultTodos.findIndex(todo => todo.id === id)
    state.defaultTodos[todoIndex].title = value
  },

  todoChecked(state, { id, checked }) {
    const todoIndex = state.defaultTodos.findIndex(todo => todo.id === id)
    state.defaultTodos[todoIndex].checkedIn = checked
  },

  todoRemove(state, id) {
    const todoIndex = state.defaultTodos.findIndex(todo => todo.id === id)
    state.defaultTodos.splice(todoIndex, 1)
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