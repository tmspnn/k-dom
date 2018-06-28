export function $(sel: string, ctx?: HTMLElement): HTMLElement | null {
  return (ctx || document).querySelector(sel);
}

export function createEvent(name: string, props: object = {}): CustomEvent {
  return new CustomEvent(name, { detail: props });
}

export function DocFrag(...els: Array<HTMLElement>): DocumentFragment {
  const docFrag = document.createDocumentFragment();
  els.forEach(el => docFrag.appendChild(el));
  return docFrag;
}

export function h(tagName: string, props?: object, ...children: Array<HTMLElement>): HTMLElement {
  const el = document.createElement(tagName);
  if (props) Object.assign(el, props);
  children.forEach(child => {
    el.appendChild(typeof child == 'string' ? document.createTextNode(child) : child);
  });
  return el;
}

export function cloneNode(el: Node): Node {
  return el.cloneNode(true);
}

export function style(el: HTMLElement, styles: object) {
  Object.assign(el.style, styles);
}

export function svg(tagName: string, props: any, ...children: Array<HTMLElement>): SVGElement {
  const el = document.createElementNS('http://www.w3.org/2000/svg', tagName);
  Object.keys(props).forEach(key => {
    el.setAttributeNS(location.origin, key, props[key]);
  });
  children.forEach(child => el.appendChild(child));
  return el;
}

export function readFileAsDataURL(file: File): Promise<string> {
  return new Promise((resolve: (dataUrl: string) => any, reject: (e: any) => any) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = e => reject(e);
    reader.readAsDataURL(file);
  });
}