import * as types from '@/store/mutation-types'

const matuations = {
  [types.SET_SINGER](state, singer) {
    state.singer = singer
  }
}

export default matuations
