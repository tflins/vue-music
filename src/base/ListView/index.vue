<template>
  <scroll class="listview" :data="data">
    <ul>
      <li v-for="group in data" :key="group.title" class="list-group">
        <h2 class="list-group-title">{{ group.title }}</h2>
        <ul>
          <li v-for="item in group.items" :key="item.id" class="list-group-item" @click="undone">
            <img v-lazy="item.avater" class="avater">
            <span class="name">{{ item.name | handleName}}</span>
          </li>
        </ul>
      </li>
    </ul>
  </scroll>
</template>

<script>
import Scroll from '@/base/Scroll'

export default {
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
    }
  }
}
</script>

<style lang="scss">
@import "@/common/scss/const.scss";

.listview {
  position: absolute;
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
