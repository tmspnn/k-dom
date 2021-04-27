EventTarget.prototype.on = EventTarget.prototype.addEventListener;
EventTarget.prototype.off = EventTarget.prototype.removeEventListener;

export function $(sel, ctx = document) {
  return ctx.querySelector(sel);
}

export function $$(sel, ctx = document) {
  return Array.prototype.slice.call(ctx.querySelectorAll(sel));
}

export function DocFrag(...els) {
  const frag = document.createDocumentFragment();
  els.forEach((el) => frag.appendChild(el));
  return frag;
}

export function cloneNode(el) {
  return el.cloneNode(true);
}

export function clearNode(node) {
  while (node.firstChild) {
    node.removeChild(node.firstChild);
  }
}

export function replaceNode(newEl, el) {
  if (el.parentNode) {
    el.parentNode.replaceChild(newEl, el);
  }
}

export function removeNode(node) {
  if (typeof node.remove == "function") {
    node.remove();
  } else if (node.parentNode) {
    node.parentNode.removeChild(node);
  }
}

export function addClass(el, ...classNames) {
  el.classList.add(...classNames);
}

export function removeClass(el, ...classNames) {
  el.classList.remove(...classNames);
}

export function toggleClass(el, ...classNames) {
  el.classList.toggle(...classNames);
}

export function hasClass(el, className) {
  return el.classList.contains(className);
}

export function cloneScriptElement(el) {
  const script = document.createElement("script");

  if (el.src) {
    script.src = el.src;
  } else {
    script.textContent = el.textContent;
  }

  if (el.id) script.id = el.id;
  if (el.type) script.type = el.type;

  return script;
}

export function createStyleElement(texts) {
  const style = document.createElement("style");
  style.textContent = texts;
  return style;
}

export function filterVisibleElements(els) {
  const visibleElements = [];

  for (let i = 0; i < els.length; i++) {
    const el = els[i];
    if (el.offsetParent || el.offsetWidth > 0) {
      visibleElements.push(el);
    }
  }

  return visibleElements;
}

const parser = new DOMParser();

export function html2DOM(html) {
  const doc = parser.parseFromString(html, "text/html");
  return doc.body.firstChild;
}

export default {
  $,
  $$,
  DocFrag,
  cloneNode,
  clearNode,
  replaceNode,
  removeNode,
  addClass,
  removeClass,
  toggleClass,
  hasClass,
  cloneScriptElement,
  createStyleElement,
  filterVisibleElements,
  html2DOM
};
