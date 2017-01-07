<template>
  <div id="app">
    <router-view></router-view>
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
    font-family: -apple-system-font, "Helvetica Neue",Helvetica,Arial,sans-serif;
  }
  * {
    margin: 0;
    padding: 0;
  }
  a {
    text-decoration: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  a, img {
    border: 0;
    touch-callout: none; /* 禁止长按链接与图片弹出菜单 */
  }
</style>
<script >
export default {
  data() {
    return {

    }
  }
}
</script>
