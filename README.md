# 欣音悦（歌单分享为主的音乐播放webapp） -- 客户端

---

## 项目介绍

这是一个使用 Vue.js + Node.js 技术栈开发的音乐社区，以分享歌单为主，听歌为辅的webapp。歌手及歌曲信息来自 QQ 音乐的接口，歌单信息存储在本地数据库中。

---

## 技术栈

客户端：Vue.js + Vuex + vue-lazyload + vue-router + axios + Sass

服务器：Koa2 + jwt + mongodb ([服务器地址](https://github.com/tflins/music-koa-server))

---

## 如何使用

### 服务器

```
git clone https://github.com/tflins/music-koa-server.git

cd music-koa-server

npm run start

// 如果想热更新
npm run server
```

### 客户端

```
git clone https://github.com/tflins/vue-music.git

cd vue-music

npm run start

// 如果想要编译
npm run build
```
---

## 开发进度

[x] 登录注册
[x] 歌手信息
[x] 播放组件
[x] 歌单推荐
[] 搜索歌曲
[] 歌曲排行
[] 分享歌单
[] 歌单评论
[] 用户管理

---

## 部分截图

![登录](http://ww1.sinaimg.cn/large/006iQgpIly1g19fn9pcbyg30ck0m84qq.gif)

![演示](http://ww1.sinaimg.cn/large/006iQgpIly1g1arr5b5thg30ci0m6e81.gif)
---

## 演示地址（实时更新）

[欣音悦](http://120.79.235.74:8080/)
