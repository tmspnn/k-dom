export function $(sel: string, ctx?: HTMLElement): HTMLElement | null {
  return (ctx || document).querySelector(sel);
}

export function $$(sel: string, ctx?: HTMLElement): Array<HTMLElement> {
  return Array.prototype.slice.call((ctx || document).querySelectorAll(sel));
}

export function createEvent(name: string, props: { [k: string]: any } = {}): CustomEvent {
  return new CustomEvent(name, { detail: props });
}

export function DocFrag(...els: Array<HTMLElement>): DocumentFragment {
  const docFrag = document.createDocumentFragment();
  els.forEach(el => docFrag.appendChild(el));
  return docFrag;
}

export function cloneNode(el: Node): Node {
  return el.cloneNode(true);
}

export function replaceNode(el: Node, newEl: Node) {
  if (el.parentNode) {
    el.parentNode.replaceChild(newEl, el);
  }
}

export function createSVGElement(
  tagName: string,
  props: { [k: string]: any } = {},
  ...children: Array<SVGElement>
): SVGElement {
  const el = document.createElementNS("http://www.w3.org/2000/svg", tagName);
  for (let k in props) {
    if (props.hasOwnProperty(k)) {
      el.setAttributeNS(
        k == "xlink:href" ? "http://www.w3.org/1999/xlink" : location.origin,
        k,
        props[k]
      );
    }
  }
  children.forEach(child => el.appendChild(child));
  return el;
}

export function append(parent: Node, child: Node) {
  parent.appendChild(child);
}

export function prepend(parent: Node, child: Node) {
  parent.insertBefore(child, parent.firstChild);
}

const parser = typeof DOMParser == "undefined" ? null : new DOMParser();
export function html2DOM(html: string): null | HTMLElement {
  if (!parser) return null;
  const doc = parser.parseFromString(html, "text/html");
  return doc.body.firstChild as HTMLElement;
}

export function addClass(el: HTMLElement, ...classNames: string[]) {
  el.classList.add(...classNames);
}

export function removeClass(el: HTMLElement, ...classNames: string[]) {
  el.classList.remove(...classNames);
}

export function hasClass(el: HTMLElement, className: string) {
  return el.classList.contains(className);
}

export function on(el: HTMLElement, eventNames: string, handler: (e: Event) => void) {
  eventNames.trim().split(" ").forEach(eventName => {
    el.addEventListener(eventName, handler);
  });
}

export function off(el: HTMLElement, eventNames: string, handler: (e: Event) => void) {
  eventNames.trim().split(" ").forEach(eventName => {
    el.removeEventListener(eventName, handler);
  });
}
