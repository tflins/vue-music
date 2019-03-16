import * as types from '@/store/mutation-types'

// 封装一个动作，选择播放
export const selectPlay = function({commit, state}, {list, index}) {
  console.log(list)
  commit(types.SET_SEQUENCE_LIST, list)
  commit(types.SET_PLAYLIST, list)
  commit(types.SET_CURRENT_INDEX, index)
  commit(types.SET_FULL_SCREEN, true)
  commit(types.SET_PLAYING_STATE, true)
}
