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
          <div class="img"  :title='item.name' v-lazy:background-image="item.urlsToLogos.small" >
            <div class="loader loader--style1" title="0">
						  <svg version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
						   width="40px" height="40px" viewBox="0 0 40 40" enable-background="new 0 0 40 40" xml:space="preserve">
						  <path opacity="0.2" fill="#000" d="M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946
						    s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634
						    c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"/>
						  <path fill="#000" d="M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0
						    C22.32,8.481,24.301,9.057,26.013,10.047z">
						    <animateTransform attributeType="xml"
						      attributeName="transform"
						      type="rotate"
						      from="0 20 20"
						      to="360 20 20"
						      dur="0.5s"
						      repeatCount="indefinite"/>
						    </path>
						  </svg>
						</div>
          </div>
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
      background-image: none !important;
    }
    & .source-list a:active{
      background: #ccc;
    }
    & .source-list .img{
      background-position: center center;
      background-repeat: no-repeat;
      background-size: contain;
      transition: all ease .3s;
      height: 100px;
      width: 90%;
      margin-top: 10px;
      margin-left: auto;
      margin-right: auto;
    }
    & .source-list .img .loader{
      display: none;
      margin: 0 0 2em;
  		height: 100px;
  		width: 20%;
  		text-align: center;
  		padding: 1em;
  		margin: 0 auto 1em;
  		vertical-align: top;
    }
    & .source-list .img[lazy=loading] .loader{
      display: block;
    }

  }
	svg path,
	svg rect{
	  fill: #3C4B57;
	}
</style>
