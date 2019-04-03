<template>
  <div class="progress-bar" ref="progressBar" @click="progressClick">
    <div class="bar-inner">
      <div class="progress" ref="progress"></div>
      <div class="progress-btn-wrapper"
           ref="progressBtn"
           @touchstart.prevent="progressTouchStart"
           @touchmove.prevent="progressTouchMove"
           @touchend.prevent="progressTouchEnd"
      >
        <div class="progress-btn"></div>
      </div>
    </div>
  </div>
</template>

<script>
import {prefixStyle} from '@/common/js/dom'

const PROGRESS_BTN_WIDTH = 16
const transform = prefixStyle('transform')

export default {
  name: 'ProgressBar',
  props: {
    precent: {
      type: Number,
      default: 0
    }
  },
  watch: {
    precent(newPrecent) {
      if (newPrecent >= 0 && !this.touch.initiated) {
        const barWidth = this.$refs.progressBar.clientWidth - PROGRESS_BTN_WIDTH
        const offsetWidth = newPrecent * barWidth
        this._offest(offsetWidth)
      }
    }
  },
  created() {
    // 用于各个函数间共享的数据
    this.touch = {}
  },
  methods: {
    progressClick(e) {
      this._offest(e.offsetX)
      this._triggerPerent()
    },
    progressTouchStart(e) {
      this.touch.initiated = true
      this.touch.startX = e.touches[0].pageX
      this.touch.left = this.$refs.progress.clientWidth
    },
    progressTouchMove(e) {
      // 未经过 TouchStart 则 return
      if (!this.touch.initiated) {
        return
      }
      // 偏移量
      const deltaX = e.touches[0].pageX - this.touch.startX
      const offsetWidth = Math.max(0, this.touch.left + deltaX)
      this._offest(offsetWidth)
    },
    progressTouchEnd() {
      this.touch.initiated = false
      // 派发一个事件，告诉外部组件，滑动到哪里
      this._triggerPerent()
    },
    _triggerPerent() {
      const barWidth = this.$refs.progressBar.clientWidth - PROGRESS_BTN_WIDTH
      const perent = this.$refs.progress.clientWidth / barWidth
      this.$emit('percentChange', perent)
    },
    _offest(offsetWidth) {
      this.$refs.progress.style.width = `${offsetWidth}px`
      this.$refs.progressBtn.style[transform] = `translateX(${offsetWidth}px)`
      this.$refs.progressBtn.style[transform] = `translateX(${offsetWidth}px)`
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/common/scss/const.scss";
@import "@/common/scss/mixin.scss";

.progress-bar {
  height: 30px;
  .bar-inner {
    position: relative;
    top: 13px;
    height: 4px;
    background: rgba(0, 0, 0, 0.3);
    .progress {
      position: absolute;
      height: 100%;
      background: $color-theme;
    }
    .progress-btn-wrapper {
      position: absolute;
      left: -8px;
      top: -13px;
      width: 30px;
      height: 30px;
      .progress-btn {
        position: relative;
        top: 7px;
        left: 7px;
        box-sizing: border-box;
        width: 16px;
        height: 16px;
        border: 3px solid $color-text;
        border-radius: 50%;
        background: $color-theme;
      }
    }
  }
}
</style>
