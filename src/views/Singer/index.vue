<template>
  <div class="singer">
    <list-view @select="selectSinger" :data="singers"></list-view>
    <router-view></router-view>
  </div>
</template>

<script>
import ListView from '@/base/ListView'
import {getSingerList} from '@/api/singer'
import {ERR_OK} from '@/api/config'
// 导入自定义的一个 Singer 对象，提取了重复的代码
import Singer from '@/common/js/SingerClass'

// 热门歌手标题
const HOT_NAME = '热门'
// 热门歌手条数
const HOT_SINGER_LENGTH = 10

export default {
  data() {
    return {
      singers: []
    }
  },
  created() {
    this._getSingerList()
  },
  methods: {
    selectSinger(singer) {
      console.log(singer)
      this.$router.push({
        path: `/singer/${singer.id}`
      })
    },
    /**
     * 获取歌手信息
     */
    _getSingerList() {
      getSingerList().then(res => {
        if (res.code === ERR_OK) {
          this.singers = this._formatSinger(res.data.list)
        }
      })
    },

    /**
     * 规范歌手数据结构
     */
    _formatSinger(list) {
      let map = {
        hot: {
          title: HOT_NAME,
          items: []
        }
      }

      // 填充歌手数据
      list.forEach((item, index) => {
        // 热门歌手
        if (index < HOT_SINGER_LENGTH) {
          /* eslint-disable */
          map.hot.items.push(new Singer({
            id: item.Fsinger_mid,
            name: item.Fsinger_name
          }))
        }

        // 填充索引 a-z
        const key = item.Findex
        if (!map[key]) {
          map[key] = {
            title: key,
            items: []
          }
        }

        // 填充对应字母歌手数据
        /* eslint-disable */
        map[key].items.push(new Singer({
          id: item.Fsinger_mid,
          name: item.Fsinger_name
        }))
      })

      // 得到有序列表
      const hot = []
      const others = []
      for (let key in map) {
        let val = map[key]
        if (val.title.match(/[a-zA-z]/)) {
          others.push(val)
        } else if (val.title === HOT_NAME) {
          hot.push(val)
        }
      }
      others.sort((a, b) => {
        return a.title.charCodeAt(0) - b.title.charCodeAt(0)
      })
      return hot.concat(others)
    }
  },
  components: {
    ListView
  }
}
</script>

<style lang="scss" scoped>
@import "@/common/scss/mixin.scss";
@import "@/common/scss/const.scss";

.singer {
  position: fixed;
  top: 88px;
  bottom: 0;
  width: 100%;
}
</style>
