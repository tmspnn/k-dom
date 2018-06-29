"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function $(sel, ctx) {
    return (ctx || document).querySelector(sel);
}
exports.$ = $;
function createEvent(name, props) {
    if (props === void 0) { props = {}; }
    return new CustomEvent(name, { detail: props });
}
exports.createEvent = createEvent;
function DocFrag() {
    var els = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        els[_i] = arguments[_i];
    }
    var docFrag = document.createDocumentFragment();
    els.forEach(function (el) { return docFrag.appendChild(el); });
    return docFrag;
}
exports.DocFrag = DocFrag;
function h(tagName, props) {
    var children = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        children[_i - 2] = arguments[_i];
    }
    var el = document.createElement(tagName);
    if (props)
        Object.assign(el, props);
    children.forEach(function (child) {
        el.appendChild(typeof child == 'string' ? document.createTextNode(child) : child);
    });
    return el;
}
exports.h = h;
function cloneNode(el) {
    return el.cloneNode(true);
}
exports.cloneNode = cloneNode;
function replaceNode(el, newEl) {
    if (el.parentNode) {
        el.parentNode.replaceChild(newEl, el);
    }
}
exports.replaceNode = replaceNode;
function style(el, styles) {
    Object.assign(el.style, styles);
}
exports.style = style;
function svg(tagName, props) {
    if (props === void 0) { props = {}; }
    var children = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        children[_i - 2] = arguments[_i];
    }
    var el = document.createElementNS('http://www.w3.org/2000/svg', tagName);
    Object.keys(props).forEach(function (key) {
        el.setAttributeNS(location.origin, key, props[key]);
    });
    children.forEach(function (child) { return el.appendChild(child); });
    return el;
}
exports.svg = svg;
function readFileAsDataURL(file) {
    return new Promise(function (resolve, reject) {
        var reader = new FileReader();
        reader.onload = function () { return resolve(reader.result); };
        reader.onerror = function (e) { return reject(e); };
        reader.readAsDataURL(file);
    });
}
exports.readFileAsDataURL = readFileAsDataURL;
function sendOnClose(url, data) {
    window.navigator.sendBeacon(url, data);
}
exports.sendOnClose = sendOnClose;
function append(parent, child) {
    parent.appendChild(child);
}
exports.append = append;
function prepend(parent, child) {
    parent.insertBefore(child, parent.firstChild);
}
exports.prepend = prepend;
function string2El(s) {
    var div = document.createElement('div');
    div.innerHTML = s;
    return div.firstElementChild;
}
exports.string2El = string2El;
//# sourceMappingURL=k-dom.js.map