import Vue from 'vue';
import {router} from './router.js'
//import {store}  from './userstore.js'

import App from './app.vue'

import * as filters from './filter.js'

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

const app = new Vue({
  router: router,
  render: h => h(App)
}).$mount('#root')


