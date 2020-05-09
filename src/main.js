import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'materialize-css/dist/css/materialize.min.css'

import Modal from '@/components/Modal.vue'

Vue.config.productionTip = false

Vue.directive('focus', {
  inserted(el) {
    el.focus()
  }
})

Vue.component('modal', Modal)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
