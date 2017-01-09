<template>
  <div class='main source-block'>
    <div class="header">
      <div class="header-container">
        <h2 class='header-back' @touchend='goback'>
          <i class="material-icons">arrow_back</i>
        </h2>
        <div class="header-source-title">
          News Source List
        </div>
        <div></div>
      </div>
    </div>
    <ul class="source-list" >
      <li v-for="item in sourcelist">
        <a :class="{ active: item.isactive }">
          <div class="img" :title='item.name' :style="{backgroundImage: 'url(' + item.urlsToLogos.small + ')'}"></div>
          <div class="angle">
            <i class="material-icons">check</i>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        sourcelist: [],
      }
    },
    mounted() {
      let that = this;
      this.$http.get('//newsapi.org/v1/sources?language=en').then((response) => {
        // success callback
        that.sourcelist = response.body.sources;
        that.sourcelist[0].isactive = true;
      }, (response) => {
        console.log(response);
      });
    },
    methods: {
      goback() {
        this.$router.push({
          path: '/'
        });
      }
    }
  }
</script>
<style>
  .source-block{
    position: relative;
    overflow: hidden;
    & .header-container{
      justify-content: space-between;
    }
    & .header-back{
      position: relative;
      width: 40px;
      height: 40px;
      position: relative;
      border-radius: 50%;
    }
    & .header-back:active{
      background: #151313;
    }
    & .header-source-title{
      font-size: 18px;
      color: #fff;
    }
    & .header-back .material-icons{
      margin-left: 0px;
    }
    & .source-list{
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      list-style-type: none;
      width: 90%;
      border-radius: 4px;
      margin-left: auto;
      margin-right: auto;
      background: #fff;
      position: relative;
      margin-top: 68px;
    }
    & .source-list li{
      width: 50%;
      height: 120px;
      position: relative;
      display: flex;
      justify-content: center;
    }
    & .source-list a{
      display: block;
      width: 94%;
      margin: 0 auto;
      height: 94%;
      margin-top: 3%;
      border-radius: 4px;
    }
    & .source-list .angle{
      position: absolute;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background: #ea1d4f;
      top: -5px;
      right: -5px;
      color: #fff;
      line-height: 30px;
      text-align: center;
      display:none;
    }
    & .source-list .material-icons{
      font-size: 12px;
      margin-left: 0px;
      font-weight: bold;
    }
    & .source-list .active{
      background: rgb(128, 225, 239);
    }
    & .source-list .active .angle{
      display: block;
    }
    & .source-list a:active{
      background: #ccc;
    }
    & .source-list .img{
      background-position: center center;
      background-repeat: no-repeat;
      background-size: contain;
      height: 100px;
      width: 90%;
      margin-top: 10px;
      margin-left: auto;
      margin-right: auto;
    }

  }
</style>
