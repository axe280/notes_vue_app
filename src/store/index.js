import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [
      {
        id: Date.now(),
        title: 'title',
        checkedIn: false
      }
    ],
  },

  getters: {
    getTodos(state) {
      return state.todos
    }
  },

  mutations: {
    createTodo(state, todo) {
      state.todos.push(todo)
    },

    updateTodo(state, {id, title, checkedIn}) {
      const todos = state.todos.concat()
      const todoIndex = state.todos.findIndex(todo => todo.id === id)

      todos[todoIndex] = {id, title, checkedIn}
      state.todos = todos
    },

    removeTodo(state, id) {
      state.todos = state.todos.filter(todo => todo.id !== id)
    }
  }
})
