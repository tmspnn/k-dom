export as namespace kdom;

export function $(sel: string, ctx?: HTMLElement): HTMLElement | null;

export function $$(sel: string, ctx?: HTMLElement): Array<HTMLElement>;

export function DocFrag(...els: Array<HTMLElement>): DocumentFragment;

export function cloneNode(el: Node): Node;

export function clearNode(el: Node): void;

export function replaceNode(newEl: Node, el: Node): void;

export function removeNode(el: Node): void;

export function cloneScript(el: HTMLScriptElement): HTMLScriptElement;

export function createStyle(texts: string): HTMLStyleElement;

export function filterVisible(els: Array<HTMLElement> | NodeList): Array<HTMLElement>;

export function DOM(html: string): null | HTMLElement;

export function scrollTo(el: HTMLElement, scrollTop: number): void;
