<template>
  <div class="edit-page">
    <div class="edit-page__head-panel">
      <button
        @click="deleteNote"
        :disabled="!getNoteById(getDefaultNote.id)"
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
import { mapGetters, mapMutations, mapActions } from 'vuex'
import EditTitle from '@/components/EditTitle.vue'
import EditTodoList from '@/components/EditTodoList.vue'

export default {
  name: 'Edit',
  components: {
    EditTitle,
    EditTodoList
  },

  computed: {
    ...mapGetters(['getNoteById']),
    ...mapGetters('modals', ['isAllowLeavePage', 'getLeaveToPagePath']),
    ...mapGetters('defaultNote', ['getDefaultNote'])
  },

  methods: {
    ...mapActions(['addNote']),
    ...mapMutations(['setIntoNoteDeafultTodos']),
    ...mapMutations('modals', ['showModal', 'showCurrentModal', 'setLeaveToPagePath', 'setAllowLeavePage']),
    ...mapMutations('defaultNote', ['copyNote', 'setDefaultNoteTitle', 'createDefaultNote']),

    changeTitle(title) {
      this.setDefaultNoteTitle(title)
    },

    deleteNote() {
      this.showModal(true)
      this.showCurrentModal('modal-delete')
    },

    cancelNote() {
      this.$router.push('/')
    },

    saveNote() {
      this.addNote(this.getDefaultNote)
      this.setAllowLeavePage(true)
      this.$router.push('/')
    }
  },

  created() {
    const routId = this.$route.params.id
    const note = this.getNoteById(routId)

    if (note) {
      this.copyNote(note)
    }
    else {
      this.createDefaultNote()
    }
  },

  beforeRouteLeave(to, from, next) {
    if (!this.isAllowLeavePage) {
      this.showModal(true)
      this.showCurrentModal('modal-leave')
      this.setLeaveToPagePath(to.path)
    }
    else {
      this.setAllowLeavePage(false)
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
      justify-content: flex-end;
      margin-bottom: 30px;
    }

    .btn-flat {
      &:hover {
        text-decoration: underline;
      }
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
