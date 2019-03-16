export function addClass(el, className) {
  if (hasClass(el, className)) {
    return
  }

  const newClass = el.className.split(' ')
  newClass.push(className)
  el.className = newClass.join(' ')
}

export function hasClass(el, className) {
  const reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
  return reg.test(el.className)
}

export function getData(el, name, val) {
  const prefix = 'data-'
  if (val) {
    return el.setAttribute(prefix + name, val)
  } else {
    return el.getAttribute(prefix + name)
  }
}

// 获取浏览器内核信息
const elementStyle = document.createElement('div').style
let vendor = (() => {
  const transformNames = {
    webkit: 'webkitTransform',
    Moz: 'MozTransform',
    O: 'OTransform',
    ms: 'msTransform',
    standard: 'transfrom'
  }
  for (let key in transformNames) {
    if (elementStyle[transformNames[key]] !== void 0) {
      return key
    }
  }
  return false
})()

export function prefixStyle(style) {
  if (!vendor) return
  if (vendor === 'standard') return style
  return `${vendor}${style.charAt(0).toUpperCase()}${style.substr(1)}`
}
