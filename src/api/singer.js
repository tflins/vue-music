import jsonp from '@/common/js/jsonp'
import { commonParams, options } from './config'

/**
 * jsonp 抓取歌手页数据
 * 接口： https://c.y.qq.com/v8/fcg-bin/v8.fcg
 * 提供方： QQ音乐
 */
export function getSingerList() {
  const url = 'https://c.y.qq.com/v8/fcg-bin/v8.fcg'

  const data = Object.assign({}, commonParams, {
    channel: 'singer',
    page: 'list',
    key: 'all_all_all',
    pagesize: 100,
    pagenum: 1,
    hostUin: 0,
    platform: 'yqq',
    needNewCode: 0
  })

  return jsonp(url, data, options)
}

/**
 * jsonp 抓取歌手歌曲列表数据
 * 接口： https://c.y.qq.com/v8/fcg-bin/v8.fcg
 * 提供方： QQ音乐
 */
export function getSingerDetail(singerId) {
  const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg'

  const data = Object.assign({}, commonParams, {
    hostUin: 0,
    needNewCode: 0,
    platform: 'yqq.json',
    order: 'listen',
    begin: 0,
    num: 100,
    songstatus: 1,
    singermid: singerId
  })

  return jsonp(url, data, options)
}
