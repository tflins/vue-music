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
    // 探测器类型，这里的配置具体可以去 better-scroll 的官方文档上看
    probeType: {
      type: Number,
      default: 1
    },
    // 是否派发点击事件
    click: {
      type: Boolean,
      default: true
    },
    // 主要是为了有个可以监听数据的变化，好 refresh 重新计算高度
    data: {
      type: Array,
      default: null
    },
    // 是否监听滚动
    lestenScroll: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    /**
     * 再注释一遍，使用 setTimeout 是比较扯淡的行为
     * 当vue将元素挂载在dom上时，要给浏览器去渲染的时间，浏览器刷新一般为17ms一次，这20ms就是给浏览器渲染dom用的
     * 不过这种做法一般比较从扯淡，官方文档明确的说明使用 this.$nextTick() ，就是为了解决dom渲染的问题，
     * 所以不要用 setTimeout
     */
    // 为了确保DOM已经渲染了
    // setTimeout(() => {
    //   this._initScroll()
    // }, 20)
    this.$nextTick(() => {
      this._initScroll()
    })
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

      if (this.lestenScroll) {
        const _this = this
        this.scroll.on('scroll', pos => {
          _this.$emit('scroll', pos)
        })
      }
    },
    // 设置几个代理函数
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
    },
    scrollTo() {
      this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments)
    },
    scrollToElement() {
      this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments)
    }
  },
  watch: {
    // 监听data数据变化时刷新 better-scroll 重新计算高度，使用监听数据变化让组件自己刷新，避免我们使用命令式的编程
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
