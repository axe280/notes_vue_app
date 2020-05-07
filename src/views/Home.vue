<template>
  <div class="home-page">
    <h2>Notes</h2>
    
    
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
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld
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
</style>
