<template>
  <div id="app">
    <router-view></router-view>
    <loader></loader>
    <div class="footer">
     Copyright © <a href='https://fyddaben.github.io/blog/'>CNMNEWS</a> 2017.  <br>Powered by  <a href='https://newsapi.org/'>News API</a>.
    </div>
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
  }
  .footer{
    font-size: 12px;
    text-align: center;
    color: #ccc;
    margin-top: 20px;
    & a{
      color: #ccc;
    }
  }
</style>
<script >
import Loader from '../components/loader.vue';
import moment from 'moment';
export default {
  data() {
    return {
      isupatenews: false,
    }
  },
  computed: {
    isupatenews() {
      return this.$store.state.isupdatenews;
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
    //this.$store.dispatch('setloadershow', true);
    document.body.addEventListener('touchstart', function () {
      //...空函数即可
    });

    //获取所有source-list值
    this.getSourceList();

    var attachFastClick = require('fastclick');
    attachFastClick(document.body);
  },
  watch: {
    isupatenews() {
      this.getNewsList();
    }
  },
  methods: {
    // 获取来源列表
    getSourceList() {
      let that = this;
      this.$http.get('//newsapi.org/v1/sources?language=en').then((response) => {
        // success callback
        let sourcelist = response.body.sources;
        sourcelist[0].isactive = true;
        let _id = sourcelist[0].id;
        if (!localStorage.source) {
          localStorage.source = _id;
        }
        let updatenews = that.isupatenews + 1;
        that.$store.dispatch('setSourceList', sourcelist);
        that.$store.dispatch('setIsupdateNews', updatenews);

      }, (response) => {
        console.log(response);
      });
    },

    // 获取新闻列表
    getNewsList() {
      let  _id = localStorage.source;
      let that = this;
      that.$http.get('//newsapi.org/v1/articles?source=' + _id + '&apiKey=b7ea162d98c54afd98004b2761a81c73').then((response) => {
        let newslist = response.body.articles;
        for (let i in newslist) {
          let author = newslist[i].author;
          if (author) {
            newslist[i].first = author.substring(0, 1);
          } else {
            newslist[i].first = 'N';
            newslist[i].author = newslist[i].url;
          }
          newslist[i].time = moment(newslist[i].publishedAt).fromNow();
        }
        that.$store.dispatch('setNewsList', newslist);
        that.$store.dispatch('setloadershow', false);
      }, (response) => {
        console.log(response);
      });
    },

  },
  components: {
    Loader,
  }
}
</script>
