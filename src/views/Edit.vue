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
      :title="getDefaultNote.title"
      @title-changed="changeTitle"
    ></edit-title>

    <edit-todo-list
      :todos="getDefaultNote.todos"
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

  computed: {
    ...mapGetters([
      'getNoteById'
    ]),

    ...mapGetters(
      'modals', ['isAllowLeavePage', 'getLeaveToPagePath']
    ),

    ...mapGetters(
      'defaultNote', ['getDefaultNote']
    ),

    isThisStoreNote() {
      return this.getNoteById(this.getDefaultNote.id) ? true : false
    }
  },

  methods: {
    ...mapMutations([
      'addNote',
      'removeNote',
      'setIntoNoteDeafultTodos'
    ]),

    ...mapMutations(
      'modals', ['showModal', 'showCurrentModal', 'setLeaveToPagePath', 'setLeavePage']
    ),

    ...mapMutations(
      'defaultNote', ['copyNote', 'setDefaultNoteTitle']
    ),

    changeTitle(title) {
      this.setDefaultNoteTitle(title)
    },

    deleteNote() {
      this.showModal(true)
      this.showCurrentModal('modal-delete')
      // this.removeNote(this.note.id)
      // this.$router.push('/')
    },

    cancelNote() {
      this.$router.push('/')
    },

    saveNote() {
      this.addNote(this.note)
      this.setLeavePage(true)
      this.$router.push('/')
    }
  },

  created() {
    const routId = this.$route.params.id
    const note = this.getNoteById(routId)

    if (note) this.copyNote(note)
  },

  beforeRouteLeave(to, from, next) {
    if (!this.isAllowLeavePage) {
      this.showModal(true)
      this.showCurrentModal('modal-leave')
      this.setLeaveToPagePath(to.path)
    }
    else {
      this.setLeavePage(false)
      next()
    }
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
