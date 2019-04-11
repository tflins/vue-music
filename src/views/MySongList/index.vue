<template>
<transition name="slide">
  <div class="my-song-list">
    <div class="back" @click="back">
        <i class="icon-back"></i>
    </div>
    <div class="title">
      <span>我的歌单</span>
    </div>
    <scroll>
      <div>
        <div class="recommend-list">
          <ul>
            <li class="item" v-for="item in mySongList" :key="item._id" @click="selectItem(item)">
              <p>{{ item.name }}</p>
            </li>
          </ul>
        </div>
      </div>
    </scroll>
    <router-view></router-view>
  </div>
</transition>
</template>

<script>
import Scroll from '@/base/Scroll'
import {getsonglist} from '@/api/user'

export default {
  data() {
    return {
      mySongList: []
    }
  },
  created() {
    this._getsonglist()
  },
  methods: {
    back() {
      this.$router.back()
    },
    selectItem(item) {
      console.log(item._id)
      this.$router.push({
        path: `/user/mysonglist/${item._id}`
      })
    },
    _getsonglist() {
      getsonglist().then(res => {
        if (res.success) {
          this.mySongList = res.data.data
        }
      })
    }
  },
  components: {
    Scroll
  }
}
</script>

<style lang="scss" scoped>
@import "@/common/scss/const.scss";

.my-song-list {
  position: fixed;
    top: 0;
    bottom: 0;
    z-index: 101;
    width: 100%;
    background: $color-background;
    &.slide-enter-active, &.slide-leave-active {
      transition: all 0.3s;
    }
    &.slide-enter, &.slide-leave-to {
      transform: translate3d(100%, 0, 0);
    }
    .back {
      position: absolute;
      top: 0;
      left: 6px;
      z-index: 50;
      .icon-back {
        display: block;
        padding: 10px;
        font-size: $font-size-large-x;
        color: $color-theme;
      }
  }
  .title {
    position: absolute;
    top: 6px;
    left: 50%;
    transform: translateX(-50%);
    color: $color-theme;
    text-align: center;
    font-size: $font-size-large;
  }
  .recommend-list {
    position: absolute;
    top: 44px;
    width: 100%;
    .item {
      margin: 10px;
      background-color: $color-highlight-background;
      padding: 10px;
      width: 89%;
      p {
        text-align: center;
      }
    }
  }
}
</style>
