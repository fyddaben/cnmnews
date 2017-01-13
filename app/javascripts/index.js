import Vue from 'vue';
import VueLazyload from 'vue-lazyload'
var VueResource = require('vue-resource');
Vue.use(VueResource);
Vue.use(VueLazyload, {
  preLoad: 1.3,
})
import {router} from './router.js'
import {store}  from './store.js'

import App from './app.vue'

import * as filters from './filter.js'

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

const app = new Vue({
  router: router,
  store : store,
  render: h => h(App)
}).$mount('#root')


