import { playMode } from '@/common/js/config'

const state = {
  singer: {},
  // 正在播放中
  playing: false,
  // 播放器展开或收起
  fullScreen: false,
  // 播放列表
  playList: [],
  // 歌曲顺序列表
  sequenceList: [],
  // 播放模式
  mode: playMode,
  // 当前播放索引
  currentIndex: -1,
  // 系统推荐歌单
  disc: {}
}

export default state
