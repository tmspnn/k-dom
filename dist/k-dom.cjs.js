"use strict";function $(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document;return kUtil.isString(t)&&(t=e.querySelector(t)),t&&kUtil.assign(t,{addClass:addClass,removeClass:removeClass,hasClass:hasClass,show:show,hide:hide,append:append,prepend:prepend,before:before,after:after,remove:remove,html:html,text:text,clear:clear,prop:prop,data:data,css:css,val:val,on:on,off:off,one:one,trigger:trigger})}function $$(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document;return kUtil.assign(kUtil.toArray(e.querySelectorAll(t)),{each:each})}function addClass(t){var e;return~t.indexOf(" ")?(e=this.classList).add.apply(e,toConsumableArray(t.split(" "))):this.classList.add(t),this}function removeClass(t){var e;return~t.indexOf(" ")?(e=this.classList).remove.apply(e,toConsumableArray(t.split(" "))):this.classList.remove(t),this}function hasClass(t){return this.classList.contains(t)}function show(){return this.style.display="",this}function hide(){return this.style.display="none",this}function append(t){if(t instanceof Node)this.appendChild(t);else{if(!kUtil.isString(t))throw new TypeError("append: invalid parameter");this.insertAdjacentHTML("beforeend",t)}return this}function prepend(t){if(t instanceof Node)this.firstChild?this.insertBefore(t,this.firstChild):this.appendChild(t);else{if(!kUtil.isString(t))throw new TypeError("prepend: invalid parameter");this.insertAdjacentHTML("afterbegin",t)}return this}function before(t){if(t instanceof Node)this.parentNode.insertBefore(t,this);else{if(!kUtil.isString(t))throw new TypeError("before: invalid parameter");this.insertAdjacentHTML("beforebegin",t)}return this}function after(t){if(t instanceof Node)this.nextElementSibling?this.parentNode.insertBefore(t,this.nextElementSibling):this.parentNode.appendChild(t);else{if(!kUtil.isString(t))throw new TypeError("after: invalid parameter");this.insertAdjacentHTML("afterend",t)}return this}function remove(){this.parentNode&&this.parentNode.removeChild(this)}function html(t){return kUtil.isNull(t)?this.innerHTML:(this.innerHTML=""+t,this)}function text(t){return kUtil.isNull(t)?this.textContent:(this.textContent=""+t,this)}function clear(){for(;this.firstChild;)this.removeChild(this.firstChild);return this}function prop(t){return kUtil.isString(t)?this[t]:kUtil.assign(this,t)}function data(t){return kUtil.isString(t)?this.dataset[t]:(kUtil.assign(this.dataset,t),this)}function css(t){return kUtil.assign(this.style,t),this}function val(t){return kUtil.isNull(t)?this.value:(this.value=t,this)}function on(t,e){var i=this;return~t.indexOf(" ")?t.split(" ").forEach(function(t){return i.addEventListener(t,e,!1)}):this.addEventListener(t,e,!1),this}function off(t,e){var i=this;return~t.indexOf(" ")?t.split(" ").forEach(function(t){return i.removeEventListener(t,e,!1)}):this.removeEventListener(t,e,!1),this}function one(t,e){function i(){e.call.apply(e,[this].concat(Array.prototype.slice.call(arguments))),this.off(t,i)}return this.on(t,i)}function trigger(t){return this.dispatchEvent(t instanceof Event?t:new Event(t)),this}function each(t){for(var e=0;e<this.length;e++)t($(this[e]),e,this)}Object.defineProperty(exports,"__esModule",{value:!0});var kUtil=require("k-util"),get=function t(e,i,r){null===e&&(e=Function.prototype);var n=Object.getOwnPropertyDescriptor(e,i);if(void 0===n){var s=Object.getPrototypeOf(e);return null===s?void 0:t(s,i,r)}if("value"in n)return n.value;var o=n.get;if(void 0!==o)return o.call(r)},set=function t(e,i,r,n){var s=Object.getOwnPropertyDescriptor(e,i);if(void 0===s){var o=Object.getPrototypeOf(e);null!==o&&t(o,i,r,n)}else if("value"in s&&s.writable)s.value=r;else{var a=s.set;void 0!==a&&a.call(n,r)}return r},toConsumableArray=function(t){if(Array.isArray(t)){for(var e=0,i=Array(t.length);e<t.length;e++)i[e]=t[e];return i}return Array.from(t)};exports.$=$,exports.$$=$$;