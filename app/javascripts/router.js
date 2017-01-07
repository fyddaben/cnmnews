import Main from '../components/main.vue'
const routes = [
  {
    path: '/index',
    component: Main,
  },
  {
    path: '/',
    component: Main,
  }
];

import VueRouter from 'vuerouter';
import Vue from 'vue';
Vue.use(VueRouter);
const router = new VueRouter({
  routes: routes
})

export {router};

