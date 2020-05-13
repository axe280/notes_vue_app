<template>
  <div class="home-page">
    <h2>Notes</h2>

    <div class="notes">
      <ul>
        <li
          v-for="note in getNotes"
          :key="note.id"
          class="notes-item"
        >
          <router-link
            :to="`/edit/${note.id}`"
            tag="a"
          >
            <h4>{{ note.title }}</h4>
          </router-link>
          <ul class="note-todos">
            <li
              v-for="todo in note.todos"
              :key="todo.id"
              :class="[todo.checkedIn ? 'checked-t' : '']"
            >{{ todo.title }}</li>
          </ul>
        </li>
      </ul>
    </div>
    
    <div class="create-fix-box">
      <div class="container-st">
        <router-link
          to="/edit"
          tag="button"
          class="btn btn-large green"
        >
          Create new note
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Home',
  computed: {
    ...mapGetters([
      'getNotes'
    ])
  }
}
</script>

<style lang="scss">
  .home-page {
    padding-bottom: 100px;
  }

  .create-fix-box {
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 3;
    padding: 20px 0;
    width: 100%;
    background-color: #f5f5f5;
    box-shadow: 0 0 20px rgba(#f5f5f5, 0.3);

    .btn {
      width: 100%;
    }
  }

  .notes {
    margin-left: 20px;
    padding-top: 5px;
  }

  .notes-item {
    border-bottom: 1px solid rgba(#000, 0.2);
    padding-bottom: 25px;

    &:last-child {
      border: none;
    }
  }

  .note-todos {
    max-height: 80px;
    overflow: hidden;
    position: relative;
    white-space: nowrap;
    overflow: hidden;
    
    &:before {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 60%;
      background: linear-gradient(to bottom, rgba(#f5f5f5, 0.3) 0%, rgba(#f5f5f5, 1) 87%);
    }

    li {
      padding-left: 20px;
      font-style: italic;
      font-size: 16px;
      line-height: 1.5em;
    }
  }

  .checked-t {
    text-decoration: line-through;
  }
</style>
