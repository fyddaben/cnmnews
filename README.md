#CNMNEWS


> 利用`newsapi.org`里面的免费新闻api, 做了个新闻列表,主要测试`PWA`的离线功能


## TODOLIST

- 添加service worker 缓存内容 `done`
- 增加下拉刷新，参考微博，腾讯的组件 `done`
- 增加图片缓存加载逻辑 `done`
- 增加选择新闻源逻辑 `error` (api里面的图片资源不是https,所以去掉这个功能)

## 总结

- 所有资源必须`https`,否则不能使用`servicd worker`缓存

## [访问地址](https://cnm.sb)

## 制作流程

### 1. 框架选择

- 前端利用`vue`,`vue-router`, `vuex`等一系列Vue 工具进行快速开发
- 利用`Webpack`进行编译
- CDN利用`Firebase`只需要一个页面
- 发布工具，利用`https://travis-ci.org` 

### 2.理想中的Service Woker

- 解决程序离线，无法访问的问题(Done)
- 快速打开App，减少等待时间(Done)
- 支持推送通知（Waiting)

### 3. 现实中的Service Worker

- `Safari` 不支持
- 所有的资源,必须支持`https`
- `Api`类型的资源，每次访问都要更新，并且缓存
- `图片` 等固定的资源，每次访问，只要缓存过，以后访问，全部读取缓存

## 参考链接
- [新闻API来源](https://newsapi.org/)
- [ServcieWokerDemo](https://github.com/w3c-webmob/ServiceWorkersDemos)
- [The Service Worker Lifecycle](https://developers.google.com/web/fundamentals/instant-and-offline/service-worker/lifecycle)


