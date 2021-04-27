export as namespace kdom;

export function $(sel: string, ctx?: HTMLElement): HTMLElement | null;

export function $$(sel: string, ctx?: HTMLElement): Array<HTMLElement>;

export function DocFrag(...els: Array<HTMLElement>): DocumentFragment;

export function cloneNode(el: Node): Node;

export function clearNode(el: Node): void;

export function replaceNode(newEl: Node, el: Node): void;

export function removeNode(el: Node): void;

export function addClass(el: HTMLElement, ...classNames: string[]): void;

export function removeClass(el: HTMLElement, ...classNames: string[]): void;

export function toggleClass(el: HTMLElement, ...classNames: string[]): void;

export function hasClass(el: HTMLElement, className: string): boolean;

export function cloneScriptElement(el: HTMLScriptElement): HTMLScriptElement;

export function createStyleElement(texts: string): HTMLStyleElement;

export function filterVisibleElements(els: Array<HTMLElement> | NodeList): Array<HTMLElement>;

export function html2DOM(html: string): null | HTMLElement;
