<template>
  <div class="music-list">
    <div class="back">
      <i class="icon-back"></i>
    </div>
    <h1 class="title" v-html="handleName"></h1>
    <div class="bg-image" :style="bgStyle" ref="bgImage">
      <div class="filter" ref="filter"></div>
    </div>
    <div class="bg-layer" ref="layer"></div>
    <scroll @scroll="scroll" :data="songs" class="list" ref="list" :probe-type="probeType" :listen-scroll="listenScroll">
      <div class="song-list-wrapper">
        <song-list :songs="songs"></song-list>
      </div>
    </scroll>
  </div>
</template>

<script>
import Scroll from '@/base/Scroll'
import SongList from '@/base/SongList'

// 预留顶部的高度，不滚动到此处
const RESERVED_HEIGHT = 40

export default {
  props: {
    bgImage: {
      type: String,
      default: ''
    },
    songs: {
      type: Array,
      default: () => []
    },
    title: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      scrollY: 0
    }
  },
  created() {
    this.probeType = 3
    this.listenScroll = true
  },
  computed: {
    bgStyle() {
      return `background-image: url("${this.bgImage}")`
    },
    handleName() {
      const nameDictionary = {
        '薛之谦': '(傻逼歌手)',
        '周杰伦': '(华语第一)',
        '林俊杰': '(华语之光)',
        'TFBOYS': '(掏粪男孩)'
      }
      return `${this.title}${nameDictionary[this.title] || ''}`
    }
  },
  mounted() {
    this.imageHeight = this.$refs.bgImage.clientHeight
    this.minTranslatrY = -this.imageHeight + RESERVED_HEIGHT
    this.$refs.list.$el.style.top = `${this.$refs.bgImage.clientHeight}px`
  },
  components: {
    Scroll,
    SongList
  },
  methods: {
    scroll(pos) {
      this.scrollY = pos.y
      console.log(this.scrollY)
    }
  },
  watch: {
    scrollY(newY) {
      // 最大滚动距离为minminTranslatrY，也就是歌手详情页歌手图片的高度
      let translateY = Math.max(this.minTranslatrY, newY)
      let zIndex = 0
      let scale = 1
      let blur = 0
      this.$refs.layer.style[`transform`] = `translate3d(0, ${translateY}px, 0)`
      this.$refs.layer.style['webkitTransform'] = `translate3d(0, ${translateY}px, 0)`
      // 滑动的比例
      const percent = Math.abs(newY / this.imageHeight)
      if (newY > 0) {
        scale = 1 + percent
        zIndex = 10
      } else {
        blur = Math.min(20 * percent, 20)
      }
      this.$refs.filter.style['filter'] =`blur(${blur}px)`
      this.$refs.filter.style['webkitBackdrop-filter'] =`blur(${blur})`
      if (newY < this.minTranslatrY) {
        zIndex = 10
        this.$refs.bgImage.style.paddingTop = 0
        this.$refs.bgImage.style.height = `${RESERVED_HEIGHT}px`
      } else {
        // 重置回去
        this.$refs.bgImage.style.paddingTop = '70%'
        this.$refs.bgImage.style.height = '0'
      }
      this.$refs.bgImage.style.zIndex = zIndex
      this.$refs.bgImage.style[`transform`] = `scale(${scale})`
      this.$refs.bgImage.style['webkitTransform'] = `scale(${scale})`
    }
  }
}
</script>

<style lang="scss">
@import '@/common/scss/mixin.scss';
@import '@/common/scss/const.scss';
.music-list {
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 100;
  background: $color-background;
  .back {
    position: absolute;
    top: 0;
    left: 6px;
    z-index: 100;
    .icon-back {
      display: block;
      padding: 10px;
      font-size: $font-size-large-x;
      color: $color-theme;
    }
  }
  .title {
    position: absolute;
    top: 0;
    left: 10%;
    z-index: 40;
    width: 80%;
    @include no-wrap();
    text-align: center;
    line-height: 40px;
    font-size: 18px;
    color: #fff;
  }
  .bg-image {
    position: relative;
    width: 100%;
    height: 0;
    padding-top: 70%;
    transform-origin: top;
    background-size: cover;
    .play-wrapper {
      position: absolute;
      bottom: 20px;
      z-index: 50;
      width: 100%;
      .play {
        box-sizing: border-box;
        width: 135px;
        padding: 7px 0;
        margin: 0 auto;
        text-align: center;
        border: 1px solid $color-theme;
        color: $color-theme;
        border-radius: 100px;
        font-size: 0;
        .icon-play {
          display: inline-block;
          vertical-align: middle;
          margin-right: 6px;
          font-size: $font-size-medium-x;
        }
        .text {
          display: inline-block;
          vertical-align: middle;
          font-size: $font-size-small;
        }
      }
    }
    .filter {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background: rgba(7, 17, 27, .4);
    }
  }
  .bg-layer {
    position: relative;
    height: 100%;
    background: $color-background;
  }
  .list {
    position: absolute;
    top: 0;
    bottom: 0;
    // overflow: hidden;
    width: 100%;
    background: $color-background;
  }
  .song-list-wrapper {
    padding: 20px 30px;
  }
  .loading-container {
    position: absolute;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>
