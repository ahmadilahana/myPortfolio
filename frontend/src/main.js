import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueMeta from 'vue-meta'
import {
  BootstrapVue,
  IconsPlugin
} from 'bootstrap-vue'
import {
  FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'


Vue.component('font-awesome-icon', FontAwesomeIcon)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap-vue/dist/bootstrap-vue-icons.min.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueMeta)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
