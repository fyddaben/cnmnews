import Vuex from 'vuex';
import Vue from 'vue';
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    // 屏幕高度
    winhei: 0,
    // 屏幕宽度
    winwid: 0,
    // 是否显示loader
    isshowloader: false,
  },
  mutations: {
    setloadershow(state, n) {
      state.isshowloader = n
    },
    setWinHei (state, n) {
      state.winhei = n
    },
    setWinWid(state, n) {
      state.winwid = n
    },
  },
  actions: {
    // 初始化更新数据
    setWinHei (context, obj) {
      context.commit('setWinHei', obj);
    },
    setWinWid (context, obj) {
      context.commit('setWinWid', obj);
    },
    setloadershow(context, obj) {
      context.commit('setloadershow', obj);
    },
  }
});

export {store};
