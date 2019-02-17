<template>
  <scroll
    class="listview"
    :data="data"
    ref="listview"
    :listenScroll="listenScroll"
    @scroll="scroll"
    >
    <ul>
      <li v-for="group in data" :key="group.title" class="list-group" ref="listGroup">
        <h2 class="list-group-title">{{ group.title }}</h2>
        <ul>
          <li v-for="item in group.items" :key="item.id" class="list-group-item" @click="undone">
            <img v-lazy="item.avater" class="avater">
            <span class="name">{{ item.name | handleName}}</span>
          </li>
        </ul>
      </li>
    </ul>
    <div class="list-shortcut" @touchstart="onShortcutTouchStart" @touchmove.stop.prevent="onShortcutTouchMove">
      <ul>
        <li v-for="(item, index) in shortcutList" :key="item" :data-index="index" class="item">{{ item }}</li>
      </ul>
    </div>
  </scroll>
</template>

<script>
import Scroll from '@/base/Scroll'
import {getData} from '@/common/js/dom.js'

// 快速入口的每个锚点高度
const ANCHOR_HEIGHT = 18

export default {
  created() {
    /**
     * 在vue实例创建之前添加一个对象实现touch位置的数据共享
     * 解释：为什么不在data或props中设置该属性呢？
     * 因为，再vue中，不管是data或props中的东西，它都会被添加上一个getter、setter
     * 也就是说，它会监测data、props及computed中的数据变化，已实现双向绑定
     * 所以我们将touch对象在此处创建，因为我不想多此一举，不想监测数据的变化
     */
    this.touch = {}
    this.listenScroll = true
  },
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  components: {
    Scroll
  },
  filters: {
    handleName(name) {
      const nameDictionary = {
        '薛之谦': '(傻逼)',
        '周杰伦': '(华语第一)',
        '林俊杰': '(华语之光)'
      }
      return `${name}${nameDictionary[name] || ''}`
    }
  },
  methods: {
    undone() {
      alert('在家过年呢，别急！')
    },
    onShortcutTouchStart(e) {
      let anchorIndex = getData(e.target, 'index')
      // 首次按下屏幕的位置
      let firstTouch = e.touches[0]
      this.touch.y1 = firstTouch.pageY
      this.touch.anchorIndex = anchorIndex
      this._scrollTo(anchorIndex)
    },
    onShortcutTouchMove(e) {
      let firstTouch = e.touches[0]
      this.touch.y2 = firstTouch.pageY
      let delta = (this.touch.y2 - this.touch.y1) / ANCHOR_HEIGHT | 0
      let anchorIndex = parseInt(this.touch.anchorIndex) + delta
      this._scrollTo(anchorIndex)
    },
    scroll(pos) {
      this.scrollY = pos.y
    },
    _scrollTo(index) {
      this.$refs.listview.scrollToElement(this.$refs.listGroup[index], 0)
    }
  },
  computed: {
    shortcutList() {
      return this.data.map((group) => {
        return group.title.substr(0, 1)
      })
    }
  }
}
</script>

<style lang="scss">
@import "@/common/scss/const.scss";

.listview {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: $color-background;
  .list-group {
    padding-bottom: 30px;
    .list-group-title {
      height: 30px;
      line-height: 30px;
      padding-left: 20px;
      font-size: $font-size-small;
      color: $color-text-l;
      background: $color-highlight-background;
    }
    .list-group-item {
      display: flex;
      align-items: center;
      padding: 20px 0 0 30px;
      .avater {
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }
      .name {
        margin-left: 20px;
        color: $color-text-l;
        font-size: $font-size-medium;
      }
    }
  }
  .list-shortcut {
    position: absolute;
    z-index: 30;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    padding: 20px 0;
    border-radius: 10px;
    text-align: center;
    background-color: $color-background-d;
    font-family: Helvetica;
    .item {
      padding: 3px;
      line-height: 1;
      color: $color-text-l;
      font-size: $font-size-small;
      &.current {
        color: $color-theme;
      }
    }
  }
  .list-fixed {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    .fixed-title {
      height: 30px;
      line-height: 30px;
      padding-left: 20px;
      font-size: $font-size-small;
      color: $color-text-l;
      background: $color-highlight-background;
    }
  }
  .loading-container {
    position: absolute;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>
