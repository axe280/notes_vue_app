<template>
  <div id="app">
    <modal v-if="isShow"></modal>

    <header class="header grey lighten-2">
      <div class="container-st">
        <div class="logo">
          <router-link to="/" tag="a">logo</router-link>
        </div>
      </div>
    </header>

    <div class="main">
      <div class="container-st">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  computed: {
    ...mapGetters(
      'modals', ['isShow']
    )
  }
}
</script>

<style lang="scss">
  body {
    background-color: #f5f5f5;
    min-width: 280px;
  }

  .container-st {
    max-width: 740px;
    margin-left: auto;
    margin-right: auto;
    padding: 0 20px;
  }

  .header {
    padding: 20px 0;
  }

  .main {
    padding: 40px 0 20px;
  }

  .btn.btn-pd-0,
  .btn-flat.btn-pd-0 {
    padding: 0;

    &:hover,
    &:focus,
    &:active {
      background-color: transparent;
    }
  }
</style>
