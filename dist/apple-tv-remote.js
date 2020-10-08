/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function t(t,e,n,i){var s,r=arguments.length,o=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(r<3?s(o):r>3?s(e,n,o):s(e,n))||o);return r>3&&o&&Object.defineProperty(e,n,o),o
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */}const e="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,n=(t,e,n=null)=>{for(;e!==n;){const n=e.nextSibling;t.removeChild(e),e=n}},i=`{{lit-${String(Math.random()).slice(2)}}}`,s=`\x3c!--${i}--\x3e`,r=new RegExp(`${i}|${s}`);class o{constructor(t,e){this.parts=[],this.element=e;const n=[],s=[],o=document.createTreeWalker(e.content,133,null,!1);let c=0,h=-1,u=0;const{strings:p,values:{length:m}}=t;for(;u<m;){const t=o.nextNode();if(null!==t){if(h++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:n}=e;let i=0;for(let t=0;t<n;t++)a(e[t].name,"$lit$")&&i++;for(;i-- >0;){const e=p[u],n=d.exec(e)[2],i=n.toLowerCase()+"$lit$",s=t.getAttribute(i);t.removeAttribute(i);const o=s.split(r);this.parts.push({type:"attribute",index:h,name:n,strings:o}),u+=o.length-1}}"TEMPLATE"===t.tagName&&(s.push(t),o.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(i)>=0){const i=t.parentNode,s=e.split(r),o=s.length-1;for(let e=0;e<o;e++){let n,r=s[e];if(""===r)n=l();else{const t=d.exec(r);null!==t&&a(t[2],"$lit$")&&(r=r.slice(0,t.index)+t[1]+t[2].slice(0,-"$lit$".length)+t[3]),n=document.createTextNode(r)}i.insertBefore(n,t),this.parts.push({type:"node",index:++h})}""===s[o]?(i.insertBefore(l(),t),n.push(t)):t.data=s[o],u+=o}}else if(8===t.nodeType)if(t.data===i){const e=t.parentNode;null!==t.previousSibling&&h!==c||(h++,e.insertBefore(l(),t)),c=h,this.parts.push({type:"node",index:h}),null===t.nextSibling?t.data="":(n.push(t),h--),u++}else{let e=-1;for(;-1!==(e=t.data.indexOf(i,e+1));)this.parts.push({type:"node",index:-1}),u++}}else o.currentNode=s.pop()}for(const t of n)t.parentNode.removeChild(t)}}const a=(t,e)=>{const n=t.length-e.length;return n>=0&&t.slice(n)===e},c=t=>-1!==t.index,l=()=>document.createComment(""),d=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function h(t,e){const{element:{content:n},parts:i}=t,s=document.createTreeWalker(n,133,null,!1);let r=p(i),o=i[r],a=-1,c=0;const l=[];let d=null;for(;s.nextNode();){a++;const t=s.currentNode;for(t.previousSibling===d&&(d=null),e.has(t)&&(l.push(t),null===d&&(d=t)),null!==d&&c++;void 0!==o&&o.index===a;)o.index=null!==d?-1:o.index-c,r=p(i,r),o=i[r]}l.forEach(t=>t.parentNode.removeChild(t))}const u=t=>{let e=11===t.nodeType?0:1;const n=document.createTreeWalker(t,133,null,!1);for(;n.nextNode();)e++;return e},p=(t,e=-1)=>{for(let n=e+1;n<t.length;n++){const e=t[n];if(c(e))return n}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const m=new WeakMap,f=t=>"function"==typeof t&&m.has(t),g={},_={};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class v{constructor(t,e,n){this.__parts=[],this.template=t,this.processor=e,this.options=n}update(t){let e=0;for(const n of this.__parts)void 0!==n&&n.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=e?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),n=[],i=this.template.parts,s=document.createTreeWalker(t,133,null,!1);let r,o=0,a=0,l=s.nextNode();for(;o<i.length;)if(r=i[o],c(r)){for(;a<r.index;)a++,"TEMPLATE"===l.nodeName&&(n.push(l),s.currentNode=l.content),null===(l=s.nextNode())&&(s.currentNode=n.pop(),l=s.nextNode());if("node"===r.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(l.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(l,r.name,r.strings,this.options));o++}else this.__parts.push(void 0),o++;return e&&(document.adoptNode(t),customElements.upgrade(t)),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const y=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:t=>t}),w=` ${i} `;class S{constructor(t,e,n,i){this.strings=t,this.values=e,this.type=n,this.processor=i}getHTML(){const t=this.strings.length-1;let e="",n=!1;for(let r=0;r<t;r++){const t=this.strings[r],o=t.lastIndexOf("\x3c!--");n=(o>-1||n)&&-1===t.indexOf("--\x3e",o+1);const a=d.exec(t);e+=null===a?t+(n?w:s):t.substr(0,a.index)+a[1]+a[2]+"$lit$"+a[3]+i}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");let e=this.getHTML();return void 0!==y&&(e=y.createHTML(e)),t.innerHTML=e,t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const b=t=>null===t||!("object"==typeof t||"function"==typeof t),x=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class P{constructor(t,e,n){this.dirty=!0,this.element=t,this.name=e,this.strings=n,this.parts=[];for(let t=0;t<n.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new C(this)}_getValue(){const t=this.strings,e=t.length-1,n=this.parts;if(1===e&&""===t[0]&&""===t[1]){const t=n[0].value;if("symbol"==typeof t)return String(t);if("string"==typeof t||!x(t))return t}let i="";for(let s=0;s<e;s++){i+=t[s];const e=n[s];if(void 0!==e){const t=e.value;if(b(t)||!x(t))i+="string"==typeof t?t:String(t);else for(const e of t)i+="string"==typeof e?e:String(e)}}return i+=t[e],i}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class C{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===g||b(t)&&t===this.value||(this.value=t,f(t)||(this.committer.dirty=!0))}commit(){for(;f(this.value);){const t=this.value;this.value=g,t(this)}this.value!==g&&this.committer.commit()}}class T{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(l()),this.endNode=t.appendChild(l())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=l()),t.__insert(this.endNode=l())}insertAfterPart(t){t.__insert(this.startNode=l()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){if(null===this.startNode.parentNode)return;for(;f(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=g,t(this)}const t=this.__pendingValue;t!==g&&(b(t)?t!==this.value&&this.__commitText(t):t instanceof S?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):x(t)?this.__commitIterable(t):t===_?(this.value=_,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,n="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=n:this.__commitNode(document.createTextNode(n)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof v&&this.value.template===e)this.value.update(t.values);else{const n=new v(e,t.processor,this.options),i=n._clone();n.update(t.values),this.__commitNode(i),this.value=n}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let n,i=0;for(const s of t)n=e[i],void 0===n&&(n=new T(this.options),e.push(n),0===i?n.appendIntoPart(this):n.insertAfterPart(e[i-1])),n.setValue(s),n.commit(),i++;i<e.length&&(e.length=i,this.clear(n&&n.endNode))}clear(t=this.startNode){n(this.startNode.parentNode,t.nextSibling,this.endNode)}}class N{constructor(t,e,n){if(this.value=void 0,this.__pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=n}setValue(t){this.__pendingValue=t}commit(){for(;f(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=g,t(this)}if(this.__pendingValue===g)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=g}}class M extends P{constructor(t,e,n){super(t,e,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new E(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class E extends C{}let A=!1;(()=>{try{const t={get capture(){return A=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}})();class k{constructor(t,e,n){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=n,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;f(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=g,t(this)}if(this.__pendingValue===g)return;const t=this.__pendingValue,e=this.value,n=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),i=null!=t&&(null==e||n);n&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),i&&(this.__options=V(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=g}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const V=t=>t&&(A?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */;function O(t){let e=D.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},D.set(t.type,e));let n=e.stringsArray.get(t.strings);if(void 0!==n)return n;const s=t.strings.join(i);return n=e.keyString.get(s),void 0===n&&(n=new o(t,t.getTemplateElement()),e.keyString.set(s,n)),e.stringsArray.set(t.strings,n),n}const D=new Map,$=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const H=new
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class{handleAttributeExpressions(t,e,n,i){const s=e[0];if("."===s){return new M(t,e.slice(1),n).parts}if("@"===s)return[new k(t,e.slice(1),i.eventContext)];if("?"===s)return[new N(t,e.slice(1),n)];return new P(t,e,n).parts}handleTextExpression(t){return new T(t)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.3.0");const R=(t,...e)=>new S(t,e,"html",H)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */,Y=(t,e)=>`${t}--${e}`;let U=!0;void 0===window.ShadyCSS?U=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),U=!1);const L=t=>e=>{const n=Y(e.type,t);let s=D.get(n);void 0===s&&(s={stringsArray:new WeakMap,keyString:new Map},D.set(n,s));let r=s.stringsArray.get(e.strings);if(void 0!==r)return r;const a=e.strings.join(i);if(r=s.keyString.get(a),void 0===r){const n=e.getTemplateElement();U&&window.ShadyCSS.prepareTemplateDom(n,t),r=new o(e,n),s.keyString.set(a,r)}return s.stringsArray.set(e.strings,r),r},j=["html","svg"],z=new Set,q=(t,e,n)=>{z.add(t);const i=n?n.element:document.createElement("template"),s=e.querySelectorAll("style"),{length:r}=s;if(0===r)return void window.ShadyCSS.prepareTemplateStyles(i,t);const o=document.createElement("style");for(let t=0;t<r;t++){const e=s[t];e.parentNode.removeChild(e),o.textContent+=e.textContent}(t=>{j.forEach(e=>{const n=D.get(Y(e,t));void 0!==n&&n.keyString.forEach(t=>{const{element:{content:e}}=t,n=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{n.add(t)}),h(t,n)})})})(t);const a=i.content;n?function(t,e,n=null){const{element:{content:i},parts:s}=t;if(null==n)return void i.appendChild(e);const r=document.createTreeWalker(i,133,null,!1);let o=p(s),a=0,c=-1;for(;r.nextNode();){c++;for(r.currentNode===n&&(a=u(e),n.parentNode.insertBefore(e,n));-1!==o&&s[o].index===c;){if(a>0){for(;-1!==o;)s[o].index+=a,o=p(s,o);return}o=p(s,o)}}}(n,o,a.firstChild):a.insertBefore(o,a.firstChild),window.ShadyCSS.prepareTemplateStyles(i,t);const c=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==c)e.insertBefore(c.cloneNode(!0),e.firstChild);else if(n){a.insertBefore(o,a.firstChild);const t=new Set;t.add(o),h(n,t)}};window.JSCompiler_renameProperty=(t,e)=>t;const B={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},I=(t,e)=>e!==t&&(e==e||t==t),F={attribute:!0,type:String,converter:B,reflect:!1,hasChanged:I};class W extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((e,n)=>{const i=this._attributeNameForProperty(n,e);void 0!==i&&(this._attributeToPropertyMap.set(i,n),t.push(i))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}}static createProperty(t,e=F){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const n="symbol"==typeof t?Symbol():"__"+t,i=this.getPropertyDescriptor(t,n,e);void 0!==i&&Object.defineProperty(this.prototype,t,i)}static getPropertyDescriptor(t,e,n){return{get(){return this[e]},set(i){const s=this[t];this[e]=i,this.requestUpdateInternal(t,s,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||F}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty("finalized")||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const n of e)this.createProperty(n,t[n])}}static _attributeNameForProperty(t,e){const n=e.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,n=I){return n(t,e)}static _propertyValueFromAttribute(t,e){const n=e.type,i=e.converter||B,s="function"==typeof i?i:i.fromAttribute;return s?s(t,n):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const n=e.type,i=e.converter;return(i&&i.toAttribute||B.toAttribute)(t,n)}initialize(){this._updateState=0,this._updatePromise=new Promise(t=>this._enableUpdatingResolver=t),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,n){e!==n&&this._attributeToProperty(t,n)}_propertyToAttribute(t,e,n=F){const i=this.constructor,s=i._attributeNameForProperty(t,n);if(void 0!==s){const t=i._propertyValueToAttribute(e,n);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(s):this.setAttribute(s,t),this._updateState=-9&this._updateState}}_attributeToProperty(t,e){if(8&this._updateState)return;const n=this.constructor,i=n._attributeToPropertyMap.get(t);if(void 0!==i){const t=n.getPropertyOptions(i);this._updateState=16|this._updateState,this[i]=n._propertyValueFromAttribute(e,t),this._updateState=-17&this._updateState}}requestUpdateInternal(t,e,n){let i=!0;if(void 0!==t){const s=this.constructor;n=n||s.getPropertyOptions(t),s._valueHasChanged(this[t],e,n.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==n.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,n))):i=!1}!this._hasRequestedUpdate&&i&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,e){return this.requestUpdateInternal(t,e),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(t){}const t=this.performUpdate();return null!=t&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t?this.update(e):this._markUpdated()}catch(e){throw t=!1,this._markUpdated(),e}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,e)=>this._propertyToAttribute(e,this[e],t)),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}W.finalized=!0;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const J=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:n,elements:i}=e;return{kind:n,elements:i,finisher(e){window.customElements.define(t,e)}}})(t,e),Z=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?Object.assign(Object.assign({},e),{finisher(n){n.createProperty(e.key,t)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(n){n.createProperty(e.key,t)}};function X(t){return(e,n)=>void 0!==n?((t,e,n)=>{e.constructor.createProperty(n,t)})(t,e,n):Z(t,e)}
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const G=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,K=Symbol();class Q{constructor(t,e){if(e!==K)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(G?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const tt=(t,...e)=>{const n=e.reduce((e,n,i)=>e+(t=>{if(t instanceof Q)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+t[i+1],t[0]);return new Q(n,K)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.4.0");const et={};class nt extends W{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const t=this.getStyles();if(Array.isArray(t)){const e=(t,n)=>t.reduceRight((t,n)=>Array.isArray(n)?e(n,t):(t.add(n),t),n),n=e(t,new Set),i=[];n.forEach(t=>i.unshift(t)),this._styles=i}else this._styles=void 0===t?[]:[t];this._styles=this._styles.map(t=>{if(t instanceof CSSStyleSheet&&!G){const e=Array.prototype.slice.call(t.cssRules).reduce((t,e)=>t+e.cssText,"");return new Q(String(e),K)}return t})}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?G?this.renderRoot.adoptedStyleSheets=t.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){const e=this.render();super.update(t),e!==et&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)}))}render(){return et}}nt.finalized=!0,nt.render=(t,e,i)=>{if(!i||"object"!=typeof i||!i.scopeName)throw new Error("The `scopeName` option is required.");const s=i.scopeName,r=$.has(e),o=U&&11===e.nodeType&&!!e.host,a=o&&!z.has(s),c=a?document.createDocumentFragment():e;if(((t,e,i)=>{let s=$.get(e);void 0===s&&(n(e,e.firstChild),$.set(e,s=new T(Object.assign({templateFactory:O},i))),s.appendInto(e)),s.setValue(t),s.commit()})(t,c,Object.assign({templateFactory:L(s)},i)),a){const t=$.get(c);$.delete(c);const i=t.value instanceof v?t.value.template:void 0;q(s,c,i),n(e,e.firstChild),e.appendChild(c),$.set(e,t)}!r&&o&&window.ShadyCSS.styleElement(e.host)};var it=/d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|Z|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g,st="[^\\s]+",rt=/\[([^]*?)\]/gm;function ot(t,e){for(var n=[],i=0,s=t.length;i<s;i++)n.push(t[i].substr(0,e));return n}var at=function(t){return function(e,n){var i=n[t].map((function(t){return t.toLowerCase()})).indexOf(e.toLowerCase());return i>-1?i:null}};function ct(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];for(var i=0,s=e;i<s.length;i++){var r=s[i];for(var o in r)t[o]=r[o]}return t}var lt=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dt=["January","February","March","April","May","June","July","August","September","October","November","December"],ht=ot(dt,3),ut={dayNamesShort:ot(lt,3),dayNames:lt,monthNamesShort:ht,monthNames:dt,amPm:["am","pm"],DoFn:function(t){return t+["th","st","nd","rd"][t%10>3?0:(t-t%10!=10?1:0)*t%10]}},pt=ct({},ut),mt=function(t,e){for(void 0===e&&(e=2),t=String(t);t.length<e;)t="0"+t;return t},ft={D:function(t){return String(t.getDate())},DD:function(t){return mt(t.getDate())},Do:function(t,e){return e.DoFn(t.getDate())},d:function(t){return String(t.getDay())},dd:function(t){return mt(t.getDay())},ddd:function(t,e){return e.dayNamesShort[t.getDay()]},dddd:function(t,e){return e.dayNames[t.getDay()]},M:function(t){return String(t.getMonth()+1)},MM:function(t){return mt(t.getMonth()+1)},MMM:function(t,e){return e.monthNamesShort[t.getMonth()]},MMMM:function(t,e){return e.monthNames[t.getMonth()]},YY:function(t){return mt(String(t.getFullYear()),4).substr(2)},YYYY:function(t){return mt(t.getFullYear(),4)},h:function(t){return String(t.getHours()%12||12)},hh:function(t){return mt(t.getHours()%12||12)},H:function(t){return String(t.getHours())},HH:function(t){return mt(t.getHours())},m:function(t){return String(t.getMinutes())},mm:function(t){return mt(t.getMinutes())},s:function(t){return String(t.getSeconds())},ss:function(t){return mt(t.getSeconds())},S:function(t){return String(Math.round(t.getMilliseconds()/100))},SS:function(t){return mt(Math.round(t.getMilliseconds()/10),2)},SSS:function(t){return mt(t.getMilliseconds(),3)},a:function(t,e){return t.getHours()<12?e.amPm[0]:e.amPm[1]},A:function(t,e){return t.getHours()<12?e.amPm[0].toUpperCase():e.amPm[1].toUpperCase()},ZZ:function(t){var e=t.getTimezoneOffset();return(e>0?"-":"+")+mt(100*Math.floor(Math.abs(e)/60)+Math.abs(e)%60,4)},Z:function(t){var e=t.getTimezoneOffset();return(e>0?"-":"+")+mt(Math.floor(Math.abs(e)/60),2)+":"+mt(Math.abs(e)%60,2)}},gt=function(t){return+t-1},_t=[null,"[1-9]\\d?"],vt=[null,st],yt=["isPm",st,function(t,e){var n=t.toLowerCase();return n===e.amPm[0]?0:n===e.amPm[1]?1:null}],wt=["timezoneOffset","[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z?",function(t){var e=(t+"").match(/([+-]|\d\d)/gi);if(e){var n=60*+e[1]+parseInt(e[2],10);return"+"===e[0]?n:-n}return 0}],St=(at("monthNamesShort"),at("monthNames"),{default:"ddd MMM DD YYYY HH:mm:ss",shortDate:"M/D/YY",mediumDate:"MMM D, YYYY",longDate:"MMMM D, YYYY",fullDate:"dddd, MMMM D, YYYY",isoDate:"YYYY-MM-DD",isoDateTime:"YYYY-MM-DDTHH:mm:ssZ",shortTime:"HH:mm",mediumTime:"HH:mm:ss",longTime:"HH:mm:ss.SSS"});var bt=function(t,e,n){if(void 0===e&&(e=St.default),void 0===n&&(n={}),"number"==typeof t&&(t=new Date(t)),"[object Date]"!==Object.prototype.toString.call(t)||isNaN(t.getTime()))throw new Error("Invalid Date pass to format");var i=[];e=(e=St[e]||e).replace(rt,(function(t,e){return i.push(e),"@@@"}));var s=ct(ct({},pt),n);return(e=e.replace(it,(function(e){return ft[e](t,s)}))).replace(/@@@/g,(function(){return i.shift()}))};(function(){try{(new Date).toLocaleDateString("i")}catch(t){return"RangeError"===t.name}})(),function(){try{(new Date).toLocaleString("i")}catch(t){return"RangeError"===t.name}}(),function(){try{(new Date).toLocaleTimeString("i")}catch(t){return"RangeError"===t.name}}();var xt=["closed","locked","off"],Pt=function(t,e,n,i){i=i||{},n=null==n?{}:n;var s=new Event(e,{bubbles:void 0===i.bubbles||i.bubbles,cancelable:Boolean(i.cancelable),composed:void 0===i.composed||i.composed});return s.detail=n,t.dispatchEvent(s),s},Ct=function(t){Pt(window,"haptic",t)},Tt=function(t,e,n,i){var s;if("double_tap"===i&&n.double_tap_action?s=n.double_tap_action:"hold"===i&&n.hold_action?s=n.hold_action:"tap"===i&&n.tap_action&&(s=n.tap_action),s||(s={action:"more-info"}),!s.confirmation||s.confirmation.exemptions&&s.confirmation.exemptions.some((function(t){return t.user===e.user.id}))||(Ct("warning"),confirm(s.confirmation.text||"Are you sure you want to "+s.action+"?")))switch(s.action){case"more-info":(n.entity||n.camera_image)&&Pt(t,"hass-more-info",{entityId:n.entity?n.entity:n.camera_image});break;case"navigate":s.navigation_path&&function(t,e,n){void 0===n&&(n=!1),n?history.replaceState(null,"",e):history.pushState(null,"",e),Pt(window,"location-changed",{replace:n})}(0,s.navigation_path);break;case"url":s.url_path&&window.open(s.url_path);break;case"toggle":n.entity&&(function(t,e){(function(t,e,n){void 0===n&&(n=!0);var i,s=function(t){return t.substr(0,t.indexOf("."))}(e),r="group"===s?"homeassistant":s;switch(s){case"lock":i=n?"unlock":"lock";break;case"cover":i=n?"open_cover":"close_cover";break;default:i=n?"turn_on":"turn_off"}t.callService(r,i,{entity_id:e})})(t,e,xt.includes(t.states[e].state))}(e,n.entity),Ct("success"));break;case"call-service":if(!s.service)return void Ct("failure");var r=s.service.split(".",2);e.callService(r[0],r[1],s.service_data),Ct("success")}};let Nt=class extends nt{setConfig(t){this._config=t}get _name(){return this._config&&this._config.name||""}get _entity(){return this._config&&this._config.entity||""}get _show_warning(){return this._config&&this._config.show_warning||!1}get _show_error(){return this._config&&this._config.show_error||!1}render(){if(!this.hass)return R``;const t=Object.keys(this.hass.states).filter(t=>"remote"===t.substr(0,t.indexOf(".")));return R`
      <div class="card-config">
        <div class="values">
          <paper-dropdown-menu
            label="Apple TV Entity (Required)"
            @value-changed=${this._valueChanged}
            .configValue=${"entity"}
          >
            <paper-listbox slot="dropdown-content" .selected=${t.indexOf(this._entity)}>
              ${t.map(t=>R`
                  <paper-item>${t}</paper-item>
                `)}
            </paper-listbox>
          </paper-dropdown-menu>
        </div>
      </div>
    `}_valueChanged(t){if(!this._config||!this.hass)return;const e=t.target;this["_"+e.configValue]!==e.value&&(e.configValue&&(""===e.value?delete this._config[e.configValue]:this._config=Object.assign(Object.assign({},this._config),{[e.configValue]:void 0!==e.checked?e.checked:e.value})),Pt(this,"config-changed",{config:this._config}))}static get styles(){return tt`
      .option {
        padding: 4px 0px;
        cursor: pointer;
      }
      .row {
        display: flex;
        margin-bottom: -14px;
        pointer-events: none;
      }
      .title {
        padding-left: 16px;
        margin-top: -6px;
        pointer-events: none;
      }
      .secondary {
        padding-left: 40px;
        color: var(--secondary-text-color);
        pointer-events: none;
      }
      .values {
        padding-left: 16px;
        background: var(--secondary-background-color);
      }
      ha-switch {
        padding-bottom: 8px;
      }
    `}};t([X()],Nt.prototype,"hass",void 0),t([X()],Nt.prototype,"_config",void 0),Nt=t([J("apple-tv-remote-editor")],Nt);const Mt="ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0;class Et extends HTMLElement{constructor(){super(),this.holdTime=500,this.held=!1,this.ripple=document.createElement("mwc-ripple")}connectedCallback(){Object.assign(this.style,{position:"absolute",width:Mt?"100px":"50px",height:Mt?"100px":"50px",transform:"translate(-50%, -50%)",pointerEvents:"none",zIndex:"999"}),this.appendChild(this.ripple),this.ripple.primary=!0,["touchcancel","mouseout","mouseup","touchmove","mousewheel","wheel","scroll"].forEach(t=>{document.addEventListener(t,()=>{clearTimeout(this.timer),this.stopAnimation(),this.timer=void 0},{passive:!0})})}bind(t,e){if(t.actionHandler)return;t.actionHandler=!0,t.addEventListener("contextmenu",t=>{const e=t||window.event;return e.preventDefault&&e.preventDefault(),e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0,e.returnValue=!1,!1});const n=t=>{let e,n;this.held=!1,t.touches?(e=t.touches[0].pageX,n=t.touches[0].pageY):(e=t.pageX,n=t.pageY),this.timer=window.setTimeout(()=>{this.startAnimation(e,n),this.held=!0},this.holdTime)},i=n=>{n.preventDefault(),["touchend","touchcancel"].includes(n.type)&&void 0===this.timer||(clearTimeout(this.timer),this.stopAnimation(),this.timer=void 0,this.held?Pt(t,"action",{action:"hold"}):e.hasDoubleClick?"click"===n.type&&n.detail<2||!this.dblClickTimeout?this.dblClickTimeout=window.setTimeout(()=>{this.dblClickTimeout=void 0,Pt(t,"action",{action:"tap"})},250):(clearTimeout(this.dblClickTimeout),this.dblClickTimeout=void 0,Pt(t,"action",{action:"double_tap"})):Pt(t,"action",{action:"tap"}))};t.addEventListener("touchstart",n,{passive:!0}),t.addEventListener("touchend",i),t.addEventListener("touchcancel",i),t.addEventListener("mousedown",n,{passive:!0}),t.addEventListener("click",i),t.addEventListener("keyup",t=>{13===t.keyCode&&i(t)})}startAnimation(t,e){Object.assign(this.style,{left:t+"px",top:e+"px",display:null}),this.ripple.disabled=!1,this.ripple.active=!0,this.ripple.unbounded=!0}stopAnimation(){this.ripple.active=!1,this.ripple.disabled=!0,this.style.display="none"}}customElements.define("action-handler-apple-tv-remote",Et);const At=(t,e)=>{const n=(()=>{const t=document.body;if(t.querySelector("action-handler-apple-tv-remote"))return t.querySelector("action-handler-apple-tv-remote");const e=document.createElement("action-handler-apple-tv-remote");return t.appendChild(e),e})();n&&n.bind(t,e)},kt=(Vt=(t={})=>e=>{At(e.committer.element,t)},(...t)=>{const e=Vt(...t);return m.set(e,!0),e});var Vt;var Ot={version:"Version",invalid_configuration:"Invalid configuration",show_warning:"Show Warning"},Dt={common:Ot},$t={version:"Versjon",invalid_configuration:"Ikke gyldig konfiguration",show_warning:"Vis advarsel"},Ht={common:$t},Rt={en:Object.freeze({__proto__:null,common:Ot,default:Dt}),nb:Object.freeze({__proto__:null,common:$t,default:Ht})};function Yt(t,e="",n=""){const i=(localStorage.getItem("selectedLanguage")||"en").replace(/['"]+/g,"").replace("-","_");var s;try{s=t.split(".").reduce((t,e)=>t[e],Rt[i])}catch(e){s=t.split(".").reduce((t,e)=>t[e],Rt.en)}return void 0===s&&(s=t.split(".").reduce((t,e)=>t[e],Rt.en)),""!==e&&""!==n&&(s=s.replace(e,n)),s}console.info(`%c  Apple TV Remote  \n%c  ${Yt("common.version")} 1.0.0    `,"color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray"),window.customCards=window.customCards||[],window.customCards.push({type:"apple-tv-remote",name:"Apple TV Remote",description:"A remote to control Apple TV"});let Ut=class extends nt{static async getConfigElement(){return document.createElement("apple-tv-remote-editor")}getCardSize(){return 5}static getStubConfig(){return{}}setConfig(t){if(!t||!t.entity||t.show_error)throw new Error(Yt("common.invalid_configuration"));t.test_gui&&function(){var t=document.querySelector("home-assistant");if(t=(t=(t=(t=(t=(t=(t=(t=t&&t.shadowRoot)&&t.querySelector("home-assistant-main"))&&t.shadowRoot)&&t.querySelector("app-drawer-layout partial-panel-resolver"))&&t.shadowRoot||t)&&t.querySelector("ha-panel-lovelace"))&&t.shadowRoot)&&t.querySelector("hui-root")){var e=t.lovelace;return e.current_view=t.___curView,e}return null}().setEditMode(!0),this._config=Object.assign({name:"Apple TV Remote"},t)}render(){if(!this._config||!this.hass)return R``;if(this._config.show_warning||!this._config.entity)return this.showWarning(Yt("common.show_warning"));const t=this.hass.states[this._config.entity];return this._config.entity&&!t?R`
        <ha-card>
          <div class="warning">Entity Unavailable</div>
        </ha-card>
      `:R`
      <ha-card
        @action=${this._handleAction}
        .actionHandler=${kt({hasHold:(e=this._config.hold_action,void 0!==e&&"none"!==e.action)})}
        tabindex="0"
        aria-label=${"Apple TV"}
        class="card"
      >
        <div class="header">
          <div class="logo">
            <svg xmlns="http://www.w3.org/2000/svg" width="33.626" height="17.091" viewBox="0 0 33.626 17.091">
              <path
                fill="rgb(255, 255, 255)"
                fill-rule="evenodd"
                d="M10.31636186 0c.07168857.99331665-.24367824 1.97589111-.88000858 2.7420044-.60822088.77493286-1.54501435 1.21929931-2.52997751 1.19998168-.06200432-.96179199.2619148-1.90866088.90000592-2.63098144C8.44082549.56436157 9.34108295.0941162 10.31636186 0zm6.4700188 2.10702515V5h-1.74001983v1.89001465h1.79001316v6.95599365c0 2.29901123.9100046 3.21600342 3.27000474 3.21600342.45201527.0057373.90371611-.02770996 1.35000888-.1000061v-1.8999939c-.27203924.03500366-.54577637.05505371-.82001658.05999756-.9999926 0-1.44999556-.51400757-1.44999556-1.52200318V6.84500122h2.2800108V4.96002197h-2.2800108V2.105011l-2.39999482.00201416zM8.01377544 4.62713623c.62325033-.24771118 1.39233029-.55334473 2.2425944-.50415039V4.1210022c1.24165853.05307007 2.3877323.68154907 3.10002737 1.69998169-1.12381258.70367431-1.81315474 1.93014526-1.83000784 3.25601196.00767194 1.50216675.8964215 2.8598938 2.27001214 3.46798706-.2709702.85897827-.66506866 1.6741333-1.17003285 2.42001343-.69996967 1.0920105-1.47999157 2.07498169-2.5999682 2.1000061-.5472227.01220703-.91780228-.14865112-1.30416592-.31637573-.40441154-.17556763-.82611639-.35864258-1.48583984-.35864258-1.29001687 0-1.63997026.66101074-2.77000844.7000122-1.12997529.03900147-1.97998786-1.16000365-2.69001908-2.16601562C.31637296 12.80700684-.78360633 8.93399048.71638258 6.33398437 1.41748417 5.04611207 2.75063994 4.228302 4.21641957 4.1869812c.62381628-.01132202 1.22197561.22692871 1.74511349.43533325.399255.1590271.75480513.3006897 1.0448294.3006897.26304672 0 .60469933-.13580322 1.00741299-.29586792zM31.18641246 5h2.4399895l-4.190008 11.95800781h-2.4999815L22.73640581 5h2.48998283l2.95004735 9.6080017h.05999201L31.18641246 5z"
              />
            </svg>
          </div>
          <div class="title">${t.attributes.friendly_name}</div>
        </div>
        <div class="remote">
          <div class="row">
            ${this._renderButton("up","mdi:chevron-up","Up")}
          </div>
          <div class="row">
            ${this._renderButton("left","mdi:chevron-left","Left")}
            ${this._renderButton("select","mdi:checkbox-blank-circle","Select")}
            ${this._renderButton("right","mdi:chevron-right","Right")}
          </div>
          <div class="row">
            ${this._renderButton("down","mdi:chevron-down","Down")}
          </div>
          <div class="row">
            ${this._renderButton("menu","mdi:menu","Menu")} ${this._renderButton("home","mdi:home","Home")}
          </div>
          <div class="row">
            <div style="width: 48px;"></div>
            ${this._renderButton("play_pause","mdi:play-pause","Play/Pause")}
          </div>
        </div>
      </ha-card>
    `;var e}_handleAction(t){if(this.hass&&this._config&&t.currentTarget&&t.currentTarget.button){const e=t.currentTarget.button,n=this._config.entity,i={tap_action:{action:"call-service",service:"remote.send_command",service_data:{entity_id:n,command:e}},hold_action:"home"===e||"menu"===e?{action:"call-service",service:"remote.send_command",service_data:{entity_id:n,command:"home"===e?"home_hold":"top_menu"}}:void 0};Tt(this,this.hass,i,t.detail.action)}}_renderButton(t,e,n){return this._config?R`
        <ha-icon-button
          .button=${t}
          icon=${e}
          title=${n}
          @action=${this._handleAction}
          .actionHandler=${kt({hasHold:"home"===t||"menu"===t})}
        ></ha-icon-button>
      `:R``}showWarning(t){return R`
      <hui-warning>${t}</hui-warning>
    `}showError(t){const e=document.createElement("hui-error-card");return e.setConfig({type:"error",error:t,origConfig:this._config}),R`
      ${e}
    `}static get styles(){return tt`
      .card {
        background-color: #222233;
      }
      .header {
        padding: 16px 16px 0 16px;
        color: white;
        display: flex;
      }
      .title {
        margin-left: 10px;
      }
      .remote {
        padding: 16px;
        display: flex;
        flex-direction: column;
        color: white;
      }
      .row {
        display: flex;
        padding: 10px;
        justify-content: space-evenly;
      }
    `}};t([X()],Ut.prototype,"hass",void 0),t([X()],Ut.prototype,"_config",void 0),Ut=t([J("apple-tv-remote")],Ut);export{Ut as AppleTVRemote};
