<template>
  <div class="song-list">
    <ul>
      <li class="item" v-for="(song, index) in songs" :key="song.id" @click="selectItem(song, index)">
        <div class="content">
          <h2 class="name">{{ song.name }}</h2>
          <p class="desc">{{song | getDesc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    songs: {
      type: Array,
      default: () => []
    }
  },
  filters: {
    getDesc(song) {
      return `${song.singer}-${song.album}`
    }
  },
  methods: {
    selectItem(song, index) {
      this.$emit('select', song, index)
    }
  }
}
</script>

<style lang="scss">
@import "@/common/scss/const.scss";
@import "@/common/scss/mixin.scss";

.song-list {
  .item {
    display: flex;
    align-items: center;
    box-sizing: border-box;
    height: 64px;
    font-size: $font-size-medium;
    .rank {
      flex: 0 0 25px;
      width: 25px;
      margin-right: 30px;
      text-align: center;
      .icon {
        display: inline-block;
        width: 25px;
        height: 24px;
        background-size: 25px 24px;
      }
      .text {
        color: $color-theme;
        font-size: $font-size-large;
      }
    }
    .content {
      flex: 1;
      line-height: 20px;
      overflow: hidden;
      .name {
        @include no-wrap();
        color: $color-text;
      }
      .desc {
        @include no-wrap();
        margin-top: 4px;
        color: $color-text-d;
      }
    }
  }
}
</style>
