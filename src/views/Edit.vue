<template>
  <div class="edit-page">
    <div class="edit-page__head-panel">
      <edit-nav></edit-nav>
      <button
        @click="deleteNote"
        :disabled="!isThisStoreNote"
        class="btn-flat btn-pd-0 red-text"
      >Delete note</button>
    </div>

    <edit-title 
      :title="note.title"
      @title-changed="changeTitle"
    ></edit-title>

    <edit-todo-list
      :todos="note.todos"
    ></edit-todo-list>

    <div class="edit-buttons">
      <button 
        class="btn red"
        @click="cancelNote"
      >Cancel</button>
      <button
        @click="saveNote"
        class="btn"
      >Save</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import EditTitle from '@/components/EditTitle.vue'
import EditNav from '@/components/EditNav.vue'
import EditTodoList from '@/components/EditTodoList.vue'

export default {
  name: 'Edit',
  components: {
    EditTitle,
    EditNav,
    EditTodoList
  },

  data() {
    return {
      note: {
        id: String(Date.now()),
        title: 'Note title',
        todos: null
      }
    }
  },

  computed: {
    ...mapGetters([
      'getNoteById'
    ]),

    ...mapGetters(
      'defaultTodos', ['getDefaultTodos']
    ),

    isThisStoreNote() {
      return this.getNoteById(this.note.id) ? true : false
    }
  },

  methods: {
    ...mapMutations([
      'addNote',
      'removeNote',
      'setIntoNoteDeafultTodos'
    ]),

    ...mapMutations(
      'defaultTodos', ['updateDefaultTodos']
    ),

    changeTitle(title) {
      this.note.title = title
    },

    deleteNote() {
      this.removeNote(this.note.id)
      this.$router.push('/')
    },

    cancelNote() {
      this.$router.push('/')
      // this.setIntoNoteDeafultTodos(this.note.id)
    },

    saveNote() {
      this.addNote(this.note)
      this.$router.push('/')
    }
  },

  created() {
    const noteId = this.$route.params.id

    if (noteId) {
      const {id, title, todos} = this.getNoteById(noteId)
      this.updateDefaultTodos(todos)

      this.note.id = id
      this.note.title = title
    }

    this.note.todos = this.getDefaultTodos
  }
}
</script>

<style lang="scss">
  .edit-page {
    &__head-panel {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 30px;
    }
  }
  
  .edit-buttons {
    margin-top: 40px;
    display: flex;
    justify-content: flex-end;

    .btn {
      margin-left: 20px;
    }
  }
</style>
