# k-dom

Helper functions for DOM manipulation

## Installation

### Node.js

```
npm install k-dom
```

### Browser

```
<script src="node_modules/k-http/dist/k-dom.min.js"></script>
```

## Documentation

```javascript
import {
  $,
  createEvent,
  DocFrag,
  h,
  cloneNode,
  replaceNode,
  style,
  svg,
  readFileAsDataUrl,
  append,
  prepend,
  string2El
} from 'k-dom';
```

- `$(sel: string, ctx?: HTMLElement)`

```javascript
$('#app'); // same as document.querySelector('#app')
$('#my-div', myNode); // same as myNode.querySelector('#my-div')
```

- `createEvent(name: string, props: object)`

```javascript
window.addEventListener('myevent', e => console.log(e.detail));
window.dispatchEvent('myevent', { test: true }); // will log { test: true }
```

- `DocFrag(...els: Array<HTMLElement>)`

```javascript
const docFrag = DocFrag(div1, div2, div3); // div1, div2, div3 will be children of the document fragment
```

- `h(tagName: string, props?: object, ...children: Array<HTMLElement>)`

```javascript
const div = h(
  'div',
  { id: 'div1' },
  h(
    'div',
    { id: 'div1-1' },
    h('div', { id: 'div1-1-1' }, h('div', { id: 'div1-1-1-1' }, 'sub divs can be nested blublublu...'))
  ),
  h(
    'div',
    { id: 'div1-2' },
    h('div', { id: 'div1-2-1' }, h('div', { id: 'div1-2-1-1' }, 'sub divs can be nested blublublu...'))
  )
);
```

- `cloneNode(el: Node)`

- `replaceNode(el: Node, newEl: Node)`

- `style(el: HTMLElement, styles: object)`

```javascript
style(div, { color: '#fff' });
```

- `svg(tagName: string, props: any = {}, ...children: Array<HTMLElement>)`

```javascript
const polygon = svg('polygon', { points: '0,100 50,25 50,75 100,0' });
```

- `readFileAsDataURL(file: File)`

```javascript
readFileAsDataURL(input.files[0]).then(dataUrl => {
  console.log(dataUrl);
});
```

- `append(parent: Node, child: Node)`

- `prepend(parent: Node, child: Node)`

- `string2El(s: string)`

```javascript
const div = string2El('<div>My Div</div>');
```
