<template>
  <transition name="slide">
    <music-list :title="title" :bg-image="bgImage" :songs="songs"></music-list>
  </transition>
</template>

<script>
import MusicList from '@/components/MusicList'
import {mapGetters} from 'vuex'
import {getSongList} from '@/api/recommend'
import {ERR_OK} from '@/api/config'
import {createSong} from '@/common/js/SongClass'

export default {
  data() {
    return {
      songs: []
    }
  },
  created() {
    this._getSongList()
  },
  methods: {
    back() {
      this.$router.back()
    },
    _getSongList() {
      const _this = this
      if (!this.disc.dissid) {
        this.$router.push('/recommend')
        return
      }
      function jsonCallback(result) {// eslint-disable-line
        if (ERR_OK === result.code) {
          _this.songs = _this._normalizeSongs(result.cdlist[0].songlist)
        }
      }
      getSongList(this.disc.dissid).then(res => {
        if (typeof res === 'string') {
          eval(res)// eslint-disable-line
        }
        if (ERR_OK === res.code) {
          this.songs = this._normalizeSongs(res.cdlist[0].songlist)
        }
      })
    },
    _normalizeSongs(list) {
      const ret = []
      list.forEach(d => {
        ret.push(createSong(d))
      })
      return ret
    }
  },
  components: {
    MusicList
  },
  computed: {
    ...mapGetters([
      'disc'
    ]),
    title() {
      return this.disc.dissname
    },
    bgImage() {
      return this.disc.imgurl
    }
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
  z-index: 100111;
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
