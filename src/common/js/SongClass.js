/* 对歌曲的抽象，很多地方都要使用歌曲，所以抽离出来 */
export default class Song {
  constructor({id, mid, singer, name, album, duration, image, url}) {
    this.id = id
    this.mid = mid
    this.singer = singer
    this.name = name
    this.album = album // 专辑名称
    this.duration = duration // 歌曲时长
    this.image = image
    this.url = url // 歌曲播放地址
  }
}

/* 创建Song类的工厂方法 */
export function createSong(musicData) {
  return new Song({
    id: musicData.songid,
    mid: musicData.songmid,
    singer: filterSinger(musicData.singer),
    name: musicData.songname,
    album: musicData.albumname,
    duration: musicData.interval,
    image: `https://y.gtimg.cn/music/photo_new/T002R300x300M000${musicData.albummid}.jpg?max_age=2592000`,
    // 这个播放接口真滴难找
    url: `https://api.bzqll.com/music/tencent/url?id=${musicData.songmid}&key=579621905&br=320`
  })
}

/* 格式化歌手，将多个歌手拼接成一个 */
function filterSinger(singer) {
  let ret = []
  if (!singer) return ''
  singer.forEach(s => {
    ret.push(s.name)
  })
  return ret.join('/')
}
