<template>
  <transition name="slide">
    <music-list :title="title" :bg-image="bgImage" :songs="songs" :showBtn="showBtn"></music-list>
  </transition>
</template>

<script>
import MusicList from '@/components/MusicList'
import {onesonglist} from '@/api/user'

export default {
  data() {
    return {
      songs: [],
      title: '',
      showBtn: false,
      bgImage: 'data:image/jpeg;base64,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'
    }
  },
  created() {
    this._getOnesonglist()
  },
  methods: {
    back() {
      this.$router.back()
    },
    _getOnesonglist() {
      onesonglist(this.$route.params.id).then(res => {
        if (res.success) {
          this.songs = res.data.data.list
          this.title = res.data.data.name
        }
      })
    }
  },
  components: {
    MusicList
  }
}
</script>

<style scoped lang="scss">
@import '@/common/scss/mixin.scss';
@import '@/common/scss/const.scss';

.recommend-detail {
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 10001;
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
  h1 {
    margin-left: 100px;
  }
}

.slide-enter-active, .slide-leave-active {
  transition: all 0.3s;
}
.slide-enter, .slide-leave-to {
  transform: translate3d(100%, 0, 0)
}
</style>
