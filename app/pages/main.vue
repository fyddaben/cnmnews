<template>
  <div class='main'>
    <div class="header">
      <div class="header-container">
        <h2 class="header-title">
          CNMNEWS
        </h2>
        <div class="header-more">
          <i class="material-icons">view_module</i>
        </div>
      </div>
    </div>
    <div class="news-panel">
      <div class="cell">
        <div class="cell-card">
          <div class="cell-card-title">
              <img class='cell-card-title-img' src="http://www.codnauts.com/themes/gravity/app/indigo/img/2.jpg" alt="">
              <h2 class="cell-card-title-text">
              Enim labore aliqua consequat ut quis ad occaecat aliquip incididunt. Sunt nulla eu enim irure enim nostrud aliqua consectetur ad consectetur sunt ullamco officia. Ex officia laborum et consequat duis.
              </h2>
          </div>
          <div class="cell-card-content">
              Enim labore aliqua consequat ut quis ad occaecat aliquip incididunt. Sunt nulla eu enim irure enim nostrud aliqua consectetur ad consectetur sunt ullamco officia. Ex officia laborum et consequat duis.
          </div>
          <div class="cell-card-info">
            <div class="cell-user-img">J</div>
            <div class="cell-author-block">
              <h3 class="cell-author-name">JohnaNan</h3>
              <div class="cell-news-date">6 days ago</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
:root {
  --mainColor: red;
}
@b header{
  width: 100%;
  background: #3C4B57;
  color: #fff;
  position: fixed;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12);
  @m container{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-left: 10px;
    padding-right: 10px;
    height: 56px;
    line-height: 56px;
  }
  @m title {
    font-weight: normal;
    font-size: 20px;
  }
  @m more{
    position: relative;
    height: 56px;
  }
}
.news-panel{
  padding-top: 64px;
  padding-left: 8px;
  padding-right: 8px;
}
@b cell {
  width: calc(100% - 16px);
  margin: 8px;
  @m card{
    box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12);
    width: 100%;
    max-width: 100%;
  }
  @m card-title{
    color: #fff;
    padding: 0px;
    position: relative;
  }
  @m card-title-img{
    position: relative;
    width: 100%;
    height: auto;
  }
  @m card-title-text{
    position: absolute;
    left: 0px;
    bottom: 0px;
    margin: 20px;
    color: #fff;
    font-weight: normal;
    font-size: 24px;
    line-height: 30px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
  }
  @m card-content{
    font-size: 13px;
    line-height: 18px;
    overflow: hidden;
    padding: 16px;
    border-top: 1px solid rgba(0,0,0,.1);
    background: #fff;
  }
  @m card-info{
    height: 56px;
    border-top: 1px solid rgba(0,0,0,.1);
    background: #fff;
    display: flex;
    justify-content: flex-start
  }
  @m user-img{
    margin-left: 15px;
    height: 30px;
    width: 30px;
    font-size: 25px;
    font-weight: 400p;
    border-radius: 50%;
    border: 1px solid #ccc;
    background: #c9d1d3;
    line-height: 30px;
    text-align: center;
    margin-top: 10px;
  }
  @m author-block{
    margin-left: 20px;
    font-size: 13px;
    line-height: 18px;
    color: #757575;
  }
  @m author-name{
    width: 200px;
    margin-top: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  @m  news-date{
  }
}

</style>
