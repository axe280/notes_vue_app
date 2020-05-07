<template>
  <div class="edit-page">
    <div class="edit-page__head-panel">
      <edit-nav></edit-nav>
      <button class="btn-flat btn-pd-0 red-text">Delete note</button>
    </div>

    <edit-title></edit-title>

    <edit-todo-list></edit-todo-list>
  </div>
</template>

<script>
import EditTitle from '@/components/EditTitle.vue'
import EditNav from '@/components/EditNav.vue'
import EditTodoList from '@/components/EditTodoList.vue'

export default {
  name: 'Edit',
  components: {
    EditTitle,
    EditNav,
    EditTodoList
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
</style>
