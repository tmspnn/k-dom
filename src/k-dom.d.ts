export as namespace kDom;

export function $(sel: string, ctx?: HTMLElement): HTMLElement | null;

export function createEvent(name: string, props: object): CustomEvent;

export function DocFrag(...els: Array<HTMLElement>): DocumentFragment;

export function h(tagName: string, props?: object, ...children: Array<HTMLElement>): HTMLElement;

export function cloneNode(el: Node): Node;

export function replaceNode(el: Node, newEl: Node): void;

export function style(el: HTMLElement, styles: object): void;

export function svg(tagName: string, props: any, ...children: Array<Element>): Element;

export function readFileAsDataURL(file: File): Promise<string>;

export function append(parent: Node, child: Node): void;

export function prepend(parent: Node, child: Node): void;

export function string2El(s: string): Element | null;
