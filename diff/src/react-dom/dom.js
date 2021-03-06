export function setAttribute(dom, name, value) {
  // class
  if (name === 'className') name = 'class'

  // 事件
  if (/on\w+/.test(name)) {
    name = name.toLowerCase()
    dom[name] = value || ''
  } else if (name === 'style') {
    // 样式
    if (!value || typeof value === 'string') {
      dom.style.cssText = value
    } else if (value && typeof value === 'object') {
      for (let name in value) {
        dom.style[name] = typeof value[name] === 'number' ? value[name] + 'px' : value[name]
      }
    }
  } else {
    if (name in dom) {
      dom[name] = value || ''
    }

    if (value) {
      dom.setAttribute(name, value)      
    } else {
      dom.removeAttribute(name, value)
    }
  }
}