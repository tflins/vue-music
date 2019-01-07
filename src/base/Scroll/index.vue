<template>
  <div ref="wrapper">
    <slot></slot>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: 'Scroll',
  props: {
    // 探测器类型
    probeType: {
      type: Number,
      default: 1
    },
    // 是否派发点击事件
    click: {
      type: Boolean,
      default: true
    },
    // 主要是为了有个可以监听数据的变化，好refresh重新计算高度
    data: {
      type: Array,
      default: null
    }
  },
  mounted() {
    // 为了确保DOM已经渲染了
    setTimeout(() => {
      this._initScroll()
    }, 20)
  },
  methods: {
    // 初始化Scroll
    _initScroll() {
      // 确保不出错，因为初始化 Scroll 的时候，若 DOM 为 undefind 会报错
      if (!this.$refs.wrapper) return
      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType: this.probeType,
        click: this.click
      })
    },
    // 启用Scroll
    enable() {
      this.scroll && this.scroll.enable()
    },
    // 禁用better-scroll
    disable() {
      this.scroll && this.scroll.disable()
    },
    // 刷新better-scroll
    refresh() {
      this.scroll && this.scroll.refresh()
    }
  },
  watch: {
    // 监听数据变化时刷新 better-scroll 重新计算高度
    data() {
      setTimeout(() => {
        this.refresh()
      }, 20)
    }
  }
}
</script>

<style lang="scss">
</style>
