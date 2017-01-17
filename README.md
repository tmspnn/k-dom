# k-dom
Lightweight DOM manipulation

## Installation
#### Node
```
npm install k-dom
```
#### Browser
```
<script src="node_modules/k-dom/dist/k-dom.min.js"></script>
```

## Methods
```$(sel: String|Element, [cxt: Node]): Element``` return an extended DOM Element, use querySelector

```$$(sel: String, [cxt: Node]): Array``` return an extended Array, use querySelectorAll

```addClass(classNames: String): this```

```removeClass(classNames: String): this```

```hasClass(className: String): Bool```

```show(): this```

```hide(): this```

```append(Element|String): this```

```prepend(Element|String): this```

```before(Element|String): this```

```after(Element|String): this```

```remove(): undefined```

```html(Undefined|String): String|this```

```text(Undefined|String): String|this```

```clear(): this```

```prop(String|Object): String|this```

```data(String|Object): String|this```

```css(String|Object): String|this```

```value(Undefined|String|Number): String|this```

```on(e: String, h: Function): this```

```one(e: String, h: Function): this```

```off(e: String, h: Function): this```

```trigger(e: String|Event): this```

```each(f: Function(v: Element, i: Number, this)): Undefined```
