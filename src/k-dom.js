EventTarget.prototype.on = EventTarget.prototype.addEventListener;
EventTarget.prototype.off = EventTarget.prototype.removeEventListener;

Element.prototype.addClass = function (...classNames) {
  this.classList.add(...classNames);
};

Element.prototype.removeClass = function (...classNames) {
  this.classList.remove(...classNames);
};

Element.prototype.toggleClass = function (className) {
  this.classList.toggle(className);
};

Element.prototype.hasClass = function (className) {
  return this.classList.contains(className);
};

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
  if (node.parentNode) {
    node.parentNode.removeChild(node);
  }
}

export function cloneScript(el) {
  const script = document.createElement("script");

  if (el.src) {
    script.src = el.src;
  } else {
    script.textContent = el.textContent;
  }

  if (el.type) script.type = el.type;

  return script;
}

export function createStyle(text) {
  const style = document.createElement("style");
  style.textContent = text;
  return style;
}

export function filterVisible(els) {
  const visibleElements = [];

  for (let i = 0; i < els.length; ++i) {
    const el = els[i];
    if (el.offsetParent || el.offsetWidth > 0) {
      visibleElements.push(el);
    }
  }

  return visibleElements;
}

export function DOM(html) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");
  return doc.body.firstChild;
}

export function scrollTo(el, scrollTop) {
  el.scrollTop = scrollTop;
}

export default {
  $,
  $$,
  DocFrag,
  cloneNode,
  clearNode,
  replaceNode,
  removeNode,
  cloneScript,
  createStyle,
  filterVisible,
  DOM,
  scrollTo
};
