// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import vueRouter from 'vue-router'  //importaciones para utilizar el router
import router from './router'
Vue.use(vueRouter)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,                //definimos la nueva variable router
  el: '#app',
  components: { App },
  template: '<App/>'
})
