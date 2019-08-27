export as namespace kDom;

export function $(sel: string, ctx?: HTMLElement): HTMLElement | null;

export function $$(sel: string, ctx?: HTMLElement): Array<HTMLElement>;

export function createEvent(name: string, props: { [k: string]: any }): CustomEvent;

export function DocFrag(...els: Array<HTMLElement>): DocumentFragment;

export function cloneNode(el: Node): Node;

export function replaceNode(el: Node, newEl: Node): void;

export function createSVGElement(
    tagName: string,
    props: { [k: string]: any },
    ...children: Array<SVGElement>
): SVGElement;

export function append(parent: Node, child: Node): void;

export function prepend(parent: Node, child: Node): void;

export function html2DOM(html: string): null | HTMLElement;

export function addClass(el: HTMLElement, ...classNames: string[]): void;

export function removeClass(el: HTMLElement, ...classNames: string[]): void;

export function hasClass(el: HTMLElement, className: string): boolean;

export function on(el: HTMLElement, eventNames: string, handler: (e: Event) => void): void;

export function off(el: HTMLElement, eventNames: string, handler: (e: Event) => void): void;
