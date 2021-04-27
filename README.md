# k-dom

Helper functions for DOM manipulation

## Installation

```
npm install k-dom
```

## Quick Start

```javascript
import {
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
} from "k-dom";

const myElement = $(".my-element");

const myElements = $$(".my-elements"); // myElements is an array
myElements.forEach((el) => console.log(el));

const frag = DocFrag(
  document.createElement("div"),
  document.createElement("ul"),
  document.createElement("p")
); // Create a DocumentFragment

const clonedEl = cloneNode(myElement);

clearNode(clonedEl); // Remove all its children

replaceNode(clonedEl, myElement); // Replace myElement with clonedEl

removeNode(clonedEl);

addClass(clonedEl, "cloned", "removed", "invisible");
removeClass(clonedEl, "cloned", "removed", "invisible");
toggleClass(clonedEl, "cloned", "removed", "invisible");
hasClass(clonedEl, "cloned");

const script = cloneScriptElement($("script"));

const style = createStyleElement(`
  body {
    color: red;
  }
`);

const visibleElements = filterVisibleElements(document.body.children);
visibleElements.forEach((el) => console.log(el));

const ul = html2DOM(`
  <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
  </ul>
`);
```
