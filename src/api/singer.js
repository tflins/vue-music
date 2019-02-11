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
