import jsonp from '@/common/js/jsonp'
import { commonParams, options } from './config'
import axios from 'axios'

/**
 * jsonp 抓取推荐页面轮播图数据
 * 接口：https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg
 * 提供方：QQ音乐
 */
export function getRecommend() {
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'

  const data = Object.assign({}, commonParams, {
    platform: 'h5',
    uin: 0,
    needNewCode: 1
  })

  return jsonp(url, data, options)
}

/**
 * jsonp 抓取推荐页面推荐歌单列表
 * 接口：https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg
 * 提供方：QQ音乐
 */
export function getDiscList() {
  const url = 'api/getDiscList'

  const data = Object.assign({}, commonParams, {
    format: 'json',
    platform: 'yqq',
    hostUin: 0,
    sin: 0,
    ein: 29,
    sortId: 5,
    needNewCode: 0,
    categoryId: 10000000,
    rnd: Math.random()
  })

  return axios.get(url, {
    params: data
  }).then(response => {
    return Promise.resolve(response.data)
  }).catch(err => {
    throw err
  })
}

/**
 * jsonp 抓取推荐页歌单数据
 * 接口：https://c.y.qq.com/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg
 * 提供方：https://y.qq.com/n/yqq/playlist/1471714611.html#
 */
export function getSongList(disstid) {
  const url = '/api/recommendSong'

  const data = Object.assign({}, commonParams, {
    disstid,
    type: 1,
    json: 1,
    utf8: 1,
    onlysong: 0,
    platform: 'yqq',
    hostUin: 0,
    needNewCode: 0
  })
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
