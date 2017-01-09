<template>
  <div id="app">
    <router-view></router-view>
    <loader></loader>
  </div>
</template>
<style>
  html {
    text-size-adjust: 100%;
  }
  html, body {
    user-select: none;
  }
  body {
    line-height: 1.6;
    font-family: "Roboto","Helvetica","Arial",sans-serif;
    background: #f1f4f5;
  }
  * {
    margin: 0;
    padding: 0;
  }
  a {
    text-decoration: none;
    -webkit-tap-highlight-color: transparent;
    -webkit-tap-highlight-color: rgba(255,255,255,0);
  }
  a, img {
    border: 0;
    touch-callout: none; /* 禁止长按链接与图片弹出菜单 */
    vertical-align: middle;
  }
  .material-icons{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-12px,-12px);
    line-height: 24px;
    width: 24px;
    margin-left: -12px;
  }
</style>
<script >
import Loader from '../components/loader.vue';
export default {
  data() {
    return {

    }
  },
  mounted() {
    let winHei = 0;
    let winWid = 0;
    if (window.innerHeight && window.innerWidth){
      winHei = window.innerHeight;
      winWid = window.innerWidth;
    } else if ((document.body) && (document.body.clientHeight) && (document.body.clientWidth)){
      winHei = document.body.clientHeight;
      winWid = document.body.clientWidth;
    }
    this.$store.dispatch('setWinHei', winHei);
    this.$store.dispatch('setWinWid', winWid);

    // 显示loader
    this.$store.dispatch('setloadershow', false);
  },
  components: {
    Loader,
  }
}
</script>
