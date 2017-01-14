#CNMNEWS


> 利用`newsapi.org`里面的免费新闻api, 做了个新闻列表,主要测试`PWA`的离线功能


## TODOLIST

- 添加service worker 缓存内容 `done`
- 增加下拉刷新，参考微博，腾讯的组件 `done`
- 增加图片缓存加载逻辑 `done`
- 增加选择新闻源逻辑 `error` (api里面的图片资源不是https,所以去掉这个功能)

## 总结

- 所有资源必须`https`,否则不能使用`servicd worker`缓存

