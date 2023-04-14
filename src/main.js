import Vue from 'vue'
import App from './App.vue'
import axios from "axios"
import router from './router'
import store from './store/index'
import vuetify from './plugins/vuetify'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.config.productionTip = false

new Vue({
  axios,
  router,
  store,
  vuetify,
  render: function (h) { return h(App) }
}).$mount('#app')
