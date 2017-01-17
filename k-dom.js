import { assign, isNull, isString, toArray } from 'k-util'

export function $(el, cxt = document) {
  if (isString(el)) {
    el = cxt.querySelector(el)
  }
  return el && assign(el, {
    addClass,
    removeClass,
    hasClass,
    show,
    hide,
    append,
    prepend,
    before,
    after,
    remove,
    html,
    text,
    clear,
    prop,
    data,
    css,
    val,
    on,
    off,
    one,
    trigger
  })
}

export function $$(sel, cxt = document) {
  return assign(toArray(cxt.querySelectorAll(sel)), { each })
}

function addClass(c) {
  ~c.indexOf(' ') ? this.classList.add(...c.split(' ')) : this.classList.add(c)
  return this
}

function removeClass(c) {
  ~c.indexOf(' ') ? this.classList.remove(...c.split(' ')) : this.classList.remove(c)
  return this
}

function hasClass(c) {
  return this.classList.contains(c)
}

function show() {
  this.style.display = ''
  return this
}

function hide() {
  this.style.display = 'none'
  return this
}

function append(arg) {
  if (arg instanceof Node) {
    this.appendChild(arg)
  } else if (isString(arg)) {
    this.insertAdjacentHTML('beforeend', arg)
  } else {
    throw new TypeError('append: invalid parameter')
  }
  return this
}

function prepend(arg) {
  if (arg instanceof Node) {
    this.firstChild ? this.insertBefore(arg, this.firstChild) : this.appendChild(arg)
  } else if (isString(arg)) {
    this.insertAdjacentHTML('afterbegin', arg)
  } else {
    throw new TypeError('prepend: invalid parameter')
  }
  return this
}

function before(arg) {
  if (arg instanceof Node) {
    this.parentNode.insertBefore(arg, this)
  } else if (isString(arg)) {
    this.insertAdjacentHTML('beforebegin', arg)
  } else {
    throw new TypeError('before: invalid parameter')
  }
  return this
}

function after(arg) {
  if (arg instanceof Node) {
    this.nextElementSibling ? this.parentNode.insertBefore(arg, this.nextElementSibling) : this.parentNode.appendChild(arg)
  } else if (isString(arg)) {
    this.insertAdjacentHTML('afterend', arg)
  } else {
    throw new TypeError('after: invalid parameter')
  }
  return this
}

function remove() {
  if (this.parentNode) {
    this.parentNode.removeChild(this)
  }
}

function html(innerHTML) {
  if (isNull(innerHTML)) {
    return this.innerHTML
  }
  this.innerHTML = '' + innerHTML
  return this
}

function text(textContent) {
  if (isNull(textContent)) {
    return this.textContent
  }
  this.textContent = '' + textContent
  return this
}

function clear() {
  while (this.firstChild) {
    this.removeChild(this.firstChild)
  }
  return this
}

function prop(props) {
  if (isString(props)) {
    return this[props]
  }
  return assign(this, props)
}

function data(props) {
  if (isString(props)) {
    return this.dataset[props]
  }
  assign(this.dataset, props)
  return this
}

function css(props) {
  assign(this.style, props)
  return this
}

function val(v) {
  if (isNull(v)) {
    return this.value
  }
  this.value = v
  return this
}

function on(e, h) {
  ~e.indexOf(' ') ? e.split(' ').forEach(ev => this.addEventListener(ev, h, false)) : this.addEventListener(e, h, false)
  return this
}

function off(e, h) {
  ~e.indexOf(' ') ? e.split(' ').forEach(ev => this.removeEventListener(ev, h, false)) : this.removeEventListener(e, h, false)
  return this
}

function one(e, h) {
  return this.on(e, wrapFunc)

  function wrapFunc() {
    h.call(this, ...arguments)
    this.off(e, wrapFunc)
  }
}

function trigger(e) {
  this.dispatchEvent(e instanceof Event ? e : new Event(e))
  return this
}

function each(f) {
  for (let i = 0; i < this.length; i++) {
    f($(this[i]), i, this)
  }
}
