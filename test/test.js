// External modules
const fs = require("fs");
const JSDOM = require("jsdom").JSDOM;
const test = require("ava");

// Setup the testing environment
const kdomJS = fs.readFileSync(__dirname + "/../dist/k-dom.js", "utf8");
const dom = new JSDOM(
  `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>Testing</title>
</head>
<body>
  <div id="test">Testing</div>
  <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
  </ul>
  <div class="replace-me">Replace Me</div>
  <div class="remove-me">Remove Me</div>
  <script>${kdomJS}</script>
</body>
</html>`,
  {
    runScripts: "dangerously"
  }
);

test("Global variable", (t) => {
  with (dom.window) {
    t.is(typeof kdom, "object");
  }
});

test("Prototype manipulation", (t) => {
  with (dom.window) {
    t.is(EventTarget.prototype.on, EventTarget.prototype.addEventListener);
    t.is(EventTarget.prototype.off, EventTarget.prototype.removeEventListener);
    t.is(typeof Element.prototype.addClass, "function");
    t.is(typeof Element.prototype.removeClass, "function");
    t.is(typeof Element.prototype.toggleClass, "function");
    t.is(typeof Element.prototype.hasClass, "function");
  }
});

test("$ and $$", (t) => {
  with (dom.window) {
    const { $, $$ } = kdom;

    const testDiv = $("#test");
    const bodyChildren = $$("*", document.body);

    t.is(testDiv instanceof HTMLDivElement, true);
    t.is(bodyChildren instanceof Array, true);
  }
});

test("DocFrag", (t) => {
  with (dom.window) {
    const { DocFrag } = kdom;

    t.is(
      DocFrag(
        document.createElement("div"),
        document.createElement("ul"),
        document.createElement("a")
      ) instanceof DocumentFragment,
      true
    );
  }
});

test("cloneNode", (t) => {
  with (dom.window) {
    const { $, cloneNode } = kdom;

    const testDiv = $("#test");
    const clonedDiv = cloneNode(testDiv);

    t.is(clonedDiv instanceof HTMLDivElement, true);
    t.is(clonedDiv.id, "test");
    t.is(clonedDiv.textContent, "Testing");
  }
});

test("clearNode", (t) => {
  with (dom.window) {
    const { $, clearNode } = kdom;

    const ul = $("ul");
    clearNode(ul);

    t.is(ul.children.length, 0);
  }
});

test("replaceNode", (t) => {
  with (dom.window) {
    const { $, replaceNode } = kdom;

    const newDiv = document.createElement("div");
    newDiv.className = "replaced";
    newDiv.textContent = "Replaced";
    const target = $(".replace-me");
    replaceNode(newDiv, target);

    t.is($(".replace-me"), null);
    t.is($(".replaced").textContent, "Replaced");
  }
});

test("removeNode", (t) => {
  with (dom.window) {
    const { $, removeNode } = kdom;

    const target = $(".remove-me");
    removeNode(target);

    t.is(document.contains(target), false);
  }
});

test("cloneScript", (t) => {
  with (dom.window) {
    const { $, cloneScript } = kdom;

    const target = $("script");
    const script = cloneScript(target);

    t.is(script.textContent, kdomJS);
  }
});

test("createStyle", (t) => {
  with (dom.window) {
    const { $, createStyle } = kdom;

    const style = createStyle(`
      body {
        color: red;
      }
    `);
    document.head.appendChild(style);
    const bodyStyle = getComputedStyle(document.body);

    t.is(bodyStyle.color, "red");
  }
});

test("filterVisible", (t) => {
  with (dom.window) {
    const { $, filterVisible } = kdom;

    const filtered = filterVisible(document.body);

    t.is(filtered.length, 0);
  }
});

test("DOM", (t) => {
  with (dom.window) {
    const { DOM } = kdom;

    const ul = DOM(`
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    `);

    t.is(ul instanceof HTMLUListElement, true);
    t.is(ul.children.length, 3);
  }
});

test("scrollTo", (t) => {
  with (dom.window) {
    const { scrollTo } = kdom;

    scrollTo(document.body, 100);

    t.is(document.body.scrollTop, 100);
  }
});
