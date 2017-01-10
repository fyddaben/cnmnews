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
    // 来源列表
    sourcelist: [],
    // 新闻列表
    newslist: [],
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
    setSourceList(state, n) {
      state.sourcelist = n
    },
    setNewsList(state, n) {
      state.newslist = n
    }
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
    setSourceList(context, obj) {
      context.commit('setSourceList', obj);
    },
    setNewsList(context, obj) {
      context.commit('setNewsList', obj);
    }
  }
});

export {store};
