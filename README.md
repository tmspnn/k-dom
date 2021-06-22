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
  cloneScript,
  createStyle,
  filterVisible,
  DOM,
  scrollTo
} from "k-dom";

$(".foo").addClass("foo", "bar", "zoo");

$$(".bar").forEach((el) => el.removeClass("foo", "bar"));

// Create a DocumentFragment with children
const frag = DocFrag(
  document.createElement("div"),
  document.createElement("ul"),
  document.createElement("p")
);

const clonedEl = cloneNode($(".foo"));

// Remove all its children
clearNode(clonedEl);

// Replace myElement with clonedEl
replaceNode(clonedEl, myElement);

removeNode(clonedEl);

const script = cloneScript($("script"));

const style = createStyle(`
  body {
    color: red;
  }
`);

// Visible UI elements
const visibleElements = filterVisible(document.body.children);

// HTML to DOM Element
const ul = DOM(`
  <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
  </ul>
`);

// Set scrollTop of document body
scrollTo(document.body, 100);
```
