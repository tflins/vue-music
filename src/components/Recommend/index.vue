<template>
  <div class="recommend">
    <h1>推荐</h1>
  </div>
</template>

<script>
import {getRecommend} from '@/api/recommend'
import {ERR_OK} from '@/api/config'

export default {
  name: 'Recommend',
  created() {
    this._getRecommend()
  },
  methods: {
    _getRecommend() {
      getRecommend().then(res => {
        if (res.code === ERR_OK) {
          console.log(res)
        } else {
          console.log('出错率');
          
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/common/scss/mixin.scss";
@import "@/common/scss/const.scss";

.recommend {
  h1 {
    color: $color-text;
  }
}
</style>
