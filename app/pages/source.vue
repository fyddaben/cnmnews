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
      <li v-for="(item, index) in sourcelist" @click='activeTab(index)' >
        <a :class="{ active: item.isactive }" >
          <div class="img"  :title='item.name' :style="{backgroundImage: 'url(' + item.urlsToLogos.small + ')'}"></div>
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
    computed: {
      sourcelist() {
        return this.$store.state.sourcelist;
      }
    },
    mounted() {
      let that = this;
    },
    methods: {
      // 激活当前tab
      activeTab(index) {
        let sourcelist = [];
        this.sourcelist.forEach((e, i) => {
          e.isactive = false;
          sourcelist.push(e);
        });
        sourcelist[index].isactive = true;
        localStorage.source = sourcelist[index].id;
        this.$store.dispatch('setSourceList', sourcelist);
      },
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
      margin-top: 8px;
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
      background: rgb(153, 170, 173);
    }
    & .source-list .active .angle{
      display: block;
    }
    & .source-list a{
      transition: background .3s ease;
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
