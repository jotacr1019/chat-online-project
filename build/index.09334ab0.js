var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n={},i={},r=e.parcelRequireca0a;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in i){var t=i[e];delete i[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){i[e]=t},e.parcelRequireca0a=r),r.register("f504n",(function(e,t){var n=r("23YZo"),i=r("fiQnm"),s=t&&!t.nodeType&&t,o=s&&e&&!e.nodeType&&e,a=o&&o.exports===s?n.Buffer:void 0,l=(a?a.isBuffer:void 0)||i;e.exports=l})),r.register("23YZo",(function(e,t){var n=r("ljJ8G"),i="object"==typeof self&&self&&self.Object===Object&&self,s=n||i||Function("return this")();e.exports=s})),r.register("ljJ8G",(function(t,n){var i="object"==typeof e&&e&&e.Object===Object&&e;t.exports=i})),r.register("fiQnm",(function(e,t){e.exports=function(){return!1}})),r.register("jIny1",(function(e,t){var n=r("ljJ8G"),i=t&&!t.nodeType&&t,s=i&&e&&!e.nodeType&&e,o=s&&s.exports===i&&n.process,a=function(){try{var e=s&&s.require&&s.require("util").types;return e||o&&o.binding&&o.binding("util")}catch(e){}}();e.exports=a}));class s extends HTMLElement{constructor(){super(),this.render()}render(){const e=this.attachShadow({mode:"open"}),t=document.createElement("div");document.createElement("style");t.style.backgroundColor="#FF8282",t.style.width="100%",t.style.height="56px",e.appendChild(t)}}customElements.define("custom-header",s);class o extends HTMLElement{constructor(){super(),this.render()}render(){const e=this.attachShadow({mode:"open"}),t=this.getAttribute("variant")||"normal-high",n=this.getAttribute("label"),i=document.createElement("span"),r=document.createElement("style");r.innerHTML="\n            .title{\n                font-family: 'Roboto';\n                font-size: 3.2rem;\n                font-weight: 700;\n            }\n            .normal-high{\n                font-family: 'Roboto';\n                font-size: 1.4rem;\n                font-weight: 500;\n            }\n            .normal-short{\n                font-family: 'Roboto';\n                font-size: 1.1rem;\n                font-weight: 400;\n            }\n        ",i.className=t,i.textContent=n,e.appendChild(r),e.appendChild(i)}}customElements.define("custom-text",o);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var a,l,c={},h=c={};function u(){throw new Error("setTimeout has not been defined")}function d(){throw new Error("clearTimeout has not been defined")}function p(e){if(a===setTimeout)return setTimeout(e,0);if((a===u||!a)&&setTimeout)return a=setTimeout,setTimeout(e,0);try{return a(e,0)}catch(t){try{return a.call(null,e,0)}catch(t){return a.call(this,e,0)}}}!function(){try{a="function"==typeof setTimeout?setTimeout:u}catch(e){a=u}try{l="function"==typeof clearTimeout?clearTimeout:d}catch(e){l=d}}();var f,_=[],m=!1,g=-1;function y(){m&&f&&(m=!1,f.length?_=f.concat(_):g=-1,_.length&&v())}function v(){if(!m){var e=p(y);m=!0;for(var t=_.length;t;){for(f=_,_=[];++g<t;)f&&f[g].run();g=-1,t=_.length}f=null,m=!1,function(e){if(l===clearTimeout)return clearTimeout(e);if((l===d||!l)&&clearTimeout)return l=clearTimeout,clearTimeout(e);try{return l(e)}catch(t){try{return l.call(null,e)}catch(t){return l.call(this,e)}}}(e)}}function b(e,t){this.fun=e,this.array=t}function C(){}h.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];_.push(new b(e,t)),1!==_.length||m||p(v)},b.prototype.run=function(){this.fun.apply(null,this.array)},h.title="browser",h.browser=!0,h.env={},h.argv=[],h.version="",h.versions={},h.on=C,h.addListener=C,h.once=C,h.off=C,h.removeListener=C,h.removeAllListeners=C,h.emit=C,h.prependListener=C,h.prependOnceListener=C,h.listeners=function(e){return[]},h.binding=function(e){throw new Error("process.binding is not supported")},h.cwd=function(){return"/"},h.chdir=function(e){throw new Error("process.chdir is not supported")},h.umask=function(){return 0};const w={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"},I=function(e,t){if(!e)throw E(t)},E=function(e){return new Error("Firebase Database ("+w.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)},T=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=63&r|128):55296==(64512&r)&&i+1<e.length&&56320==(64512&e.charCodeAt(i+1))?(r=65536+((1023&r)<<10)+(1023&e.charCodeAt(++i)),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=63&r|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=63&r|128)}return t},S={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let t=0;t<e.length;t+=3){const r=e[t],s=t+1<e.length,o=s?e[t+1]:0,a=t+2<e.length,l=a?e[t+2]:0,c=r>>2,h=(3&r)<<4|o>>4;let u=(15&o)<<2|l>>6,d=63&l;a||(d=64,s||(u=64)),i.push(n[c],n[h],n[u],n[d])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(T(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,i=0;for(;n<e.length;){const r=e[n++];if(r<128)t[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=e[n++];t[i++]=String.fromCharCode((31&r)<<6|63&s)}else if(r>239&&r<365){const s=((7&r)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[i++]=String.fromCharCode(55296+(s>>10)),t[i++]=String.fromCharCode(56320+(1023&s))}else{const s=e[n++],o=e[n++];t[i++]=String.fromCharCode((15&r)<<12|(63&s)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let t=0;t<e.length;){const r=n[e.charAt(t++)],s=t<e.length?n[e.charAt(t)]:0;++t;const o=t<e.length?n[e.charAt(t)]:64;++t;const a=t<e.length?n[e.charAt(t)]:64;if(++t,null==r||null==s||null==o||null==a)throw Error();const l=r<<2|s>>4;if(i.push(l),64!==o){const e=s<<4&240|o>>2;if(i.push(e),64!==a){const e=o<<6&192|a;i.push(e)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},k=function(e){const t=T(e);return S.encodeByteArray(t,!0)},x=function(e){return k(e).replace(/\./g,"")},N=function(e){try{return S.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function P(e){return R(void 0,e)}function R(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&"__proto__"!==n&&(e[n]=R(e[n],t[n]));return e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const D=()=>
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==e)return e;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,O=()=>{try{return D()||(()=>{if(void 0===c||void 0===c.env)return})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const t=e&&N(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},A=e=>{const t=(e=>{var t,n;return null===(n=null===(t=O())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]})(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const i=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),i]:[t.substring(0,n),i]},M=()=>{var e;return null===(e=O())||void 0===e?void 0:e.config};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class L{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=t||"demo-project",i=e.iat||0,r=e.sub||e.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},e);return[x(JSON.stringify({alg:"none",type:"JWT"})),x(JSON.stringify(s)),""].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function q(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(j())}function U(){return!0===w.NODE_CLIENT||!0===w.NODE_ADMIN}function B(){try{return"object"==typeof indexedDB}catch(e){return!1}}class z extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,z.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,W.prototype.create)}}class W{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],s=r?function(e,t){return e.replace(H,((e,n)=>{const i=t[n];return null!=i?String(i):`<${n}?>`}))}(r,n):"Error",o=`${this.serviceName}: ${s} (${i}).`;return new z(i,o,n)}}const H=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(e){return JSON.parse(e)}function V(e){return JSON.stringify(e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y=function(e){let t={},n={},i={},r="";try{const s=e.split(".");t=$(N(s[0])||""),n=$(N(s[1])||""),r=s[2],i=n.d||{},delete n.d}catch(e){}return{header:t,claims:n,data:i,signature:r}},K=function(e){const t=Y(e).claims;return!!t&&"object"==typeof t&&t.hasOwnProperty("iat")},G=function(e){const t=Y(e).claims;return"object"==typeof t&&!0===t.admin};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Q(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function J(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function Z(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function X(e,t,n){const i={};for(const r in e)Object.prototype.hasOwnProperty.call(e,r)&&(i[r]=t.call(n,e[r],r,e));return i}function ee(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const r of n){if(!i.includes(r))return!1;const n=e[r],s=t[r];if(te(n)&&te(s)){if(!ee(n,s))return!1}else if(n!==s)return!1}for(const e of i)if(!n.includes(e))return!1;return!0}function te(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ne(e){const t=[];for(const[n,i]of Object.entries(e))Array.isArray(i)?i.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ie{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const n=this.W_;if("string"==typeof e)for(let i=0;i<16;i++)n[i]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let i=0;i<16;i++)n[i]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let e=16;e<80;e++){const t=n[e-3]^n[e-8]^n[e-14]^n[e-16];n[e]=4294967295&(t<<1|t>>>31)}let i,r,s=this.chain_[0],o=this.chain_[1],a=this.chain_[2],l=this.chain_[3],c=this.chain_[4];for(let e=0;e<80;e++){e<40?e<20?(i=l^o&(a^l),r=1518500249):(i=o^a^l,r=1859775393):e<60?(i=o&a|l&(o|a),r=2400959708):(i=o^a^l,r=3395469782);const t=(s<<5|s>>>27)+i+c+r+n[e]&4294967295;c=l,l=a,a=4294967295&(o<<30|o>>>2),o=s,s=t}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,t){if(null==e)return;void 0===t&&(t=e.length);const n=t-this.blockSize;let i=0;const r=this.buf_;let s=this.inbuf_;for(;i<t;){if(0===s)for(;i<=n;)this.compress_(e,i),i+=this.blockSize;if("string"==typeof e){for(;i<t;)if(r[s]=e.charCodeAt(i),++s,++i,s===this.blockSize){this.compress_(r),s=0;break}}else for(;i<t;)if(r[s]=e[i],++s,++i,s===this.blockSize){this.compress_(r),s=0;break}}this.inbuf_=s,this.total_+=t}digest(){const e=[];let t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let e=this.blockSize-1;e>=56;e--)this.buf_[e]=255&t,t/=256;this.compress_(this.buf_);let n=0;for(let t=0;t<5;t++)for(let i=24;i>=0;i-=8)e[n]=this.chain_[t]>>i&255,++n;return e}}function re(e,t){return`${e} failed: ${t} argument `}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const se=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);if(r>=55296&&r<=56319){const t=r-55296;i++,I(i<e.length,"Surrogate pair missing trail surrogate.");r=65536+(t<<10)+(e.charCodeAt(i)-56320)}r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=63&r|128):r<65536?(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=63&r|128):(t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=63&r|128)}return t},oe=function(e){let t=0;for(let n=0;n<e.length;n++){const i=e.charCodeAt(n);i<128?t++:i<2048?t+=2:i>=55296&&i<=56319?(t+=4,n++):t+=3}return t};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ae(e){return e&&e._delegate?e._delegate:e}class le{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ce="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new L;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),i=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(i)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:ce})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e=ce){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=ce){return this.instances.has(e)}getOptions(e=ce){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(i)}return i}onInit(e,t){var n;const i=this.normalizeInstanceIdentifier(t),r=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;r.add(e),this.onInitCallbacks.set(i,r);const s=this.instances.get(i);return s&&e(s,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(i=e,i===ce?void 0:i),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var i;return n||null}normalizeInstanceIdentifier(e=ce){return this.component?this.component.multipleInstances?e:ce:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class ue{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new he(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const de=[];var pe,fe;(fe=pe||(pe={}))[fe.DEBUG=0]="DEBUG",fe[fe.VERBOSE=1]="VERBOSE",fe[fe.INFO=2]="INFO",fe[fe.WARN=3]="WARN",fe[fe.ERROR=4]="ERROR",fe[fe.SILENT=5]="SILENT";const _e={debug:pe.DEBUG,verbose:pe.VERBOSE,info:pe.INFO,warn:pe.WARN,error:pe.ERROR,silent:pe.SILENT},me=pe.INFO,ge={[pe.DEBUG]:"log",[pe.VERBOSE]:"log",[pe.INFO]:"info",[pe.WARN]:"warn",[pe.ERROR]:"error"},ye=(e,t,...n)=>{if(t<e.logLevel)return;const i=(new Date).toISOString(),r=ge[t];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[r](`[${i}]  ${e.name}:`,...n)};class ve{constructor(e){this.name=e,this._logLevel=me,this._logHandler=ye,this._userLogHandler=null,de.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?_e[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,pe.DEBUG,...e),this._logHandler(this,pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,pe.VERBOSE,...e),this._logHandler(this,pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,pe.INFO,...e),this._logHandler(this,pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,pe.WARN,...e),this._logHandler(this,pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,pe.ERROR,...e),this._logHandler(this,pe.ERROR,...e)}}const be=(e,t)=>t.some((t=>e instanceof t));let Ce,we;const Ie=new WeakMap,Ee=new WeakMap,Te=new WeakMap,Se=new WeakMap,ke=new WeakMap;let xe={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return Ee.get(e);if("objectStoreNames"===t)return e.objectStoreNames||Te.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Re(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function Ne(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(we||(we=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(De(this),t),Re(Ie.get(this))}:function(...t){return Re(e.apply(De(this),t))}:function(t,...n){const i=e.call(De(this),t,...n);return Te.set(i,t.sort?t.sort():[t]),Re(i)}}function Pe(e){return"function"==typeof e?Ne(e):(e instanceof IDBTransaction&&function(e){if(Ee.has(e))return;const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",s),e.removeEventListener("abort",s)},r=()=>{t(),i()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",r),e.addEventListener("error",s),e.addEventListener("abort",s)}));Ee.set(e,t)}(e),be(e,Ce||(Ce=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(e,xe):e)}function Re(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("success",r),e.removeEventListener("error",s)},r=()=>{t(Re(e.result)),i()},s=()=>{n(e.error),i()};e.addEventListener("success",r),e.addEventListener("error",s)}));return t.then((t=>{t instanceof IDBCursor&&Ie.set(t,e)})).catch((()=>{})),ke.set(t,e),t}(e);if(Se.has(e))return Se.get(e);const t=Pe(e);return t!==e&&(Se.set(e,t),ke.set(t,e)),t}const De=e=>ke.get(e);function Oe(e,t,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(e,t),a=Re(o);return i&&o.addEventListener("upgradeneeded",(e=>{i(Re(o.result),e.oldVersion,e.newVersion,Re(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((e=>{s&&e.addEventListener("close",(()=>s())),r&&e.addEventListener("versionchange",(()=>r()))})).catch((()=>{})),a}const Ae=["get","getKey","getAll","getAllKeys","count"],Me=["put","add","delete","clear"],Le=new Map;function Fe(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(Le.get(t))return Le.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,r=Me.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!r&&!Ae.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,r?"readwrite":"readonly");let o=s.store;return i&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),r&&s.done]))[0]};return Le.set(t,s),s}xe=(e=>({...e,get:(t,n,i)=>Fe(t,n)||e.get(t,n,i),has:(t,n)=>!!Fe(t,n)||e.has(t,n)}))(xe);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class je{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const qe="@firebase/app",Ue="0.9.3",Be=new ve("@firebase/app"),ze="[DEFAULT]",We={[qe]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},He=new Map,$e=new Map;function Ve(e,t){try{e.container.addComponent(t)}catch(n){Be.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Ye(e){const t=e.name;if($e.has(t))return Be.debug(`There were multiple attempts to register component ${t}.`),!1;$e.set(t,e);for(const t of He.values())Ve(t,e);return!0}function Ke(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ge=new W("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qe{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new le("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ge.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Je="9.17.1";function Ze(e,t={}){let n=e;if("object"!=typeof t){t={name:t}}const i=Object.assign({name:ze,automaticDataCollectionEnabled:!1},t),r=i.name;if("string"!=typeof r||!r)throw Ge.create("bad-app-name",{appName:String(r)});if(n||(n=M()),!n)throw Ge.create("no-options");const s=He.get(r);if(s){if(ee(n,s.options)&&ee(i,s.config))return s;throw Ge.create("duplicate-app",{appName:r})}const o=new ue(r);for(const e of $e.values())o.addComponent(e);const a=new Qe(n,i,o);return He.set(r,a),a}function Xe(e=ze){const t=He.get(e);if(!t&&e===ze)return Ze();if(!t)throw Ge.create("no-app",{appName:e});return t}function et(e,t,n){var i;let r=null!==(i=We[e])&&void 0!==i?i:e;n&&(r+=`-${n}`);const s=r.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const e=[`Unable to register library "${r}" with version "${t}":`];return s&&e.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void Be.warn(e.join(" "))}Ye(new le(`${r}-version`,(()=>({library:r,version:t})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const tt="firebase-heartbeat-database",nt=1,it="firebase-heartbeat-store";let rt=null;function st(){return rt||(rt=Oe(tt,nt,{upgrade:(e,t)=>{if(0===t)e.createObjectStore(it)}}).catch((e=>{throw Ge.create("idb-open",{originalErrorMessage:e.message})}))),rt}async function ot(e,t){try{const n=(await st()).transaction(it,"readwrite"),i=n.objectStore(it);return await i.put(t,at(e)),n.done}catch(e){if(e instanceof z)Be.warn(e.message);else{const t=Ge.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});Be.warn(t.message)}}}function at(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lt=1024;class ct{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new ut(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=ht();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=ht(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=lt){const n=[];let i=e.slice();for(const r of e){const e=n.find((e=>e.agent===r.agent));if(e){if(e.dates.push(r.date),dt(n)>t){e.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),dt(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}(this._heartbeatsCache.heartbeats),i=x(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function ht(){return(new Date).toISOString().substring(0,10)}class ut{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!B()&&new Promise(((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var e;t((null===(e=r.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(e){try{return(await st()).transaction(it).objectStore(it).get(at(e))}catch(e){if(e instanceof z)Be.warn(e.message);else{const t=Ge.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});Be.warn(t.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return ot(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return ot(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function dt(e){return x(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pt;pt="",Ye(new le("platform-logger",(e=>new je(e)),"PRIVATE")),Ye(new le("heartbeat",(e=>new ct(e)),"PRIVATE")),et(qe,Ue,pt),et(qe,Ue,"esm2017"),et("fire-js","");const ft="@firebase/database",_t="0.14.3";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mt="";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gt{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),V(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:$(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return Q(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vt=function(e){try{if("undefined"!=typeof window&&void 0!==window[e]){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new gt(t)}}catch(e){}return new yt},bt=vt("localStorage"),Ct=vt("sessionStorage"),wt=new ve("@firebase/database"),It=function(){let e=1;return function(){return e++}}(),Et=function(e){const t=se(e),n=new ie;n.update(t);const i=n.digest();return S.encodeByteArray(i)},Tt=function(...e){let t="";for(let n=0;n<e.length;n++){const i=e[n];Array.isArray(i)||i&&"object"==typeof i&&"number"==typeof i.length?t+=Tt.apply(null,i):t+="object"==typeof i?V(i):i,t+=" "}return t};let St=null,kt=!0;const xt=function(e,t){I(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(wt.logLevel=pe.VERBOSE,St=wt.log.bind(wt),t&&Ct.set("logging_enabled",!0)):"function"==typeof e?St=e:(St=null,Ct.remove("logging_enabled"))},Nt=function(...e){if(!0===kt&&(kt=!1,null===St&&!0===Ct.get("logging_enabled")&&xt(!0)),St){const t=Tt.apply(null,e);St(t)}},Pt=function(e){return function(...t){Nt(e,...t)}},Rt=function(...e){const t="FIREBASE INTERNAL ERROR: "+Tt(...e);wt.error(t)},Dt=function(...e){const t=`FIREBASE FATAL ERROR: ${Tt(...e)}`;throw wt.error(t),new Error(t)},Ot=function(...e){const t="FIREBASE WARNING: "+Tt(...e);wt.warn(t)},At=function(e){return"number"==typeof e&&(e!=e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},Mt="[MIN_NAME]",Lt="[MAX_NAME]",Ft=function(e,t){if(e===t)return 0;if(e===Mt||t===Lt)return-1;if(t===Mt||e===Lt)return 1;{const n=$t(e),i=$t(t);return null!==n?null!==i?n-i==0?e.length-t.length:n-i:-1:null!==i?1:e<t?-1:1}},jt=function(e,t){return e===t?0:e<t?-1:1},qt=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+V(t))},Ut=function(e){if("object"!=typeof e||null===e)return V(e);const t=[];for(const n in e)t.push(n);t.sort();let n="{";for(let i=0;i<t.length;i++)0!==i&&(n+=","),n+=V(t[i]),n+=":",n+=Ut(e[t[i]]);return n+="}",n},Bt=function(e,t){const n=e.length;if(n<=t)return[e];const i=[];for(let r=0;r<n;r+=t)r+t>n?i.push(e.substring(r,n)):i.push(e.substring(r,r+t));return i};function zt(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const Wt=function(e){I(!At(e),"Invalid JSON number");const t=1023;let n,i,r,s,o;0===e?(i=0,r=0,n=1/e==-1/0?1:0):(n=e<0,(e=Math.abs(e))>=Math.pow(2,-1022)?(s=Math.min(Math.floor(Math.log(e)/Math.LN2),t),i=s+t,r=Math.round(e*Math.pow(2,52-s)-Math.pow(2,52))):(i=0,r=Math.round(e/Math.pow(2,-1074))));const a=[];for(o=52;o;o-=1)a.push(r%2?1:0),r=Math.floor(r/2);for(o=11;o;o-=1)a.push(i%2?1:0),i=Math.floor(i/2);a.push(n?1:0),a.reverse();const l=a.join("");let c="";for(o=0;o<64;o+=8){let e=parseInt(l.substr(o,8),2).toString(16);1===e.length&&(e="0"+e),c+=e}return c.toLowerCase()};const Ht=new RegExp("^-?(0*)\\d{1,10}$"),$t=function(e){if(Ht.test(e)){const t=Number(e);if(t>=-2147483648&&t<=2147483647)return t}return null},Vt=function(e){try{e()}catch(e){setTimeout((()=>{const t=e.stack||"";throw Ot("Exception was thrown by user callback.",t),e}),Math.floor(0))}},Yt=function(){return("object"==typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Kt=function(e,t){const n=setTimeout(e,t);return"number"==typeof n&&"undefined"!=typeof Deno&&Deno.unrefTimer?Deno.unrefTimer(n):"object"==typeof n&&n.unref&&n.unref(),n};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Gt{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null==t?void 0:t.getImmediate({optional:!0}),this.appCheck||null==t||t.get().then((e=>this.appCheck=e))}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise(((t,n)=>{setTimeout((()=>{this.appCheck?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then((t=>t.addTokenListener(e)))}notifyForInvalidToken(){Ot(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit((e=>this.auth_=e))}getToken(e){return this.auth_?this.auth_.getToken(e).catch((e=>e&&"auth/token-not-initialized"===e.code?(Nt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e))):new Promise(((t,n)=>{setTimeout((()=>{this.auth_?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then((t=>t.addAuthTokenListener(e)))}removeTokenChangeListener(e){this.authProvider_.get().then((t=>t.removeAuthTokenListener(e)))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ot(e)}}class Jt{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Jt.OWNER="owner";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Zt="5",Xt=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,en="ac",tn="websocket",nn="long_polling";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class rn{constructor(e,t,n,i,r=!1,s="",o=!1,a=!1){this.secure=t,this.namespace=n,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=s,this.includeNamespaceInQueryParams=o,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=bt.get("host:"+e)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&bt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function sn(e,t,n){let i;if(I("string"==typeof t,"typeof type must == string"),I("object"==typeof n,"typeof params must == object"),t===tn)i=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if(t!==nn)throw new Error("Unknown connection type: "+t);i=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}(function(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams})(e)&&(n.ns=e.namespace);const r=[];return zt(n,((e,t)=>{r.push(e+"="+t)})),i+r.join("&")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(){this.counters_={}}incrementCounter(e,t=1){Q(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return P(this.counters_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const an={},ln={};function cn(e){const t=e.toString();return an[t]||(an[t]=new on),an[t]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class hn{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&Vt((()=>{this.onMessage_(e[t])}));if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const un="start";class dn{constructor(e,t,n,i,r,s,o){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=i,this.authToken=r,this.transportSessionId=s,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Pt(e),this.stats_=cn(t),this.urlFn=e=>(this.appCheckToken&&(e[en]=this.appCheckToken),sn(t,nn,e))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new hn(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null}),Math.floor(3e4)),function(e){if(U()||"complete"===document.readyState)e();else{let t=!1;const n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(()=>{"complete"===document.readyState&&n()})),window.attachEvent("onload",n))}}((()=>{if(this.isClosed_)return;this.scriptTagHolder=new pn(((...e)=>{const[t,n,i,r,s]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,t===un)this.id=n,this.password=i;else{if("close"!==t)throw new Error("Unrecognized command received: "+t);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,(()=>{this.onClosed_()}))):this.onClosed_()}}),((...e)=>{const[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)}),(()=>{this.onClosed_()}),this.urlFn);const e={};e[un]="t",e.ser=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e.cb=this.scriptTagHolder.uniqueCallbackIdentifier),e.v=Zt,this.transportSessionId&&(e.s=this.transportSessionId),this.lastSessionId&&(e.ls=this.lastSessionId),this.applicationId&&(e.p=this.applicationId),this.appCheckToken&&(e[en]=this.appCheckToken),"undefined"!=typeof location&&location.hostname&&Xt.test(location.hostname)&&(e.r="f");const t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,(()=>{}))}))}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){dn.forceAllow_=!0}static forceDisallow(){dn.forceDisallow_=!0}static isAvailable(){return!U()&&(!!dn.forceAllow_||!(dn.forceDisallow_||"undefined"==typeof document||null==document.createElement||"object"==typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href)||"object"==typeof Windows&&"object"==typeof Windows.UI))}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=V(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=k(t),i=Bt(n,1840);for(let e=0;e<i.length;e++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[e]),this.curSegmentNum++}addDisconnectPingFrame(e,t){if(U())return;this.myDisconnFrame=document.createElement("iframe");const n={dframe:"t"};n.id=e,n.pw=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=V(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class pn{constructor(e,t,n,i){if(this.onDisconnect=n,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,U())this.commandCB=e,this.onMessageCB=t;else{this.uniqueCallbackIdentifier=It(),window["pLPCommand"+this.uniqueCallbackIdentifier]=e,window["pRTLPCB"+this.uniqueCallbackIdentifier]=t,this.myIFrame=pn.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,11)){n='<script>document.domain="'+document.domain+'";<\/script>'}const i="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(i),this.myIFrame.doc.close()}catch(e){Nt("frame writing exception"),e.stack&&Nt(e.stack),Nt(e)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{e.contentWindow.document||Nt("No IE domain setting required")}catch(t){const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout((()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)}),Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e.id=this.myID,e.pw=this.myPW,e.ser=this.currentSerial;let t=this.urlFn(e),n="",i=0;for(;this.pendingSegs.length>0;){if(!(this.pendingSegs[0].d.length+30+n.length<=1870))break;{const e=this.pendingSegs.shift();n=n+"&seg"+i+"="+e.seg+"&ts"+i+"="+e.ts+"&d"+i+"="+e.d,i++}}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(n,Math.floor(25e3));this.addTag(e,(()=>{clearTimeout(i),n()}))}addTag(e,t){U()?this.doNodeLongPoll(e,t):setTimeout((()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{Nt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(e){}}),Math.floor(1))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fn=null;"undefined"!=typeof MozWebSocket?fn=MozWebSocket:"undefined"!=typeof WebSocket&&(fn=WebSocket);class _n{constructor(e,t,n,i,r,s,o){this.connId=e,this.applicationId=n,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Pt(this.connId),this.stats_=cn(t),this.connURL=_n.connectionURL_(t,s,o,i,n),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,n,i,r){const s={};return s.v=Zt,!U()&&"undefined"!=typeof location&&location.hostname&&Xt.test(location.hostname)&&(s.r="f"),t&&(s.s=t),n&&(s.ls=n),i&&(s[en]=i),r&&(s.p=r),sn(e,tn,s)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,bt.set("previous_websocket_failure",!0);try{let e;if(U()){const t=this.nodeAdmin?"AdminNode":"Node";e={headers:{"User-Agent":`Firebase/${Zt}/${mt}/${c.platform}/${t}`,"X-Firebase-GMPID":this.applicationId||""}},this.authToken&&(e.headers.Authorization=`Bearer ${this.authToken}`),this.appCheckToken&&(e.headers["X-Firebase-AppCheck"]=this.appCheckToken);const n={},i=0===this.connURL.indexOf("wss://")?n.HTTPS_PROXY||n.https_proxy:n.HTTP_PROXY||n.http_proxy;i&&(e.proxy={origin:i})}this.mySock=new fn(this.connURL,[],e)}catch(e){this.log_("Error instantiating WebSocket.");const t=e.message||e.data;return t&&this.log_(t),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");const t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){_n.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!=typeof navigator&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==fn&&!_n.forceDisallow_}static previouslyFailed(){return bt.isInMemoryStorage||!0===bt.get("previous_websocket_failure")}markConnectionHealthy(){bt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const e=this.frames.join("");this.frames=null;const t=$(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(I(null===this.frames,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{const e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();const t=V(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=Bt(t,16384);n.length>1&&this.sendString_(String(n.length));for(let e=0;e<n.length;e++)this.sendString_(n[e])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()}),Math.floor(45e3))}sendString_(e){try{this.mySock.send(e)}catch(e){this.log_("Exception thrown from WebSocket.send():",e.message||e.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}_n.responsesRequiredToBeHealthy=2,_n.healthyTimeout=3e4;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class mn{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[dn,_n]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=_n&&_n.isAvailable();let n=t&&!_n.previouslyFailed();if(e.webSocketOnly&&(t||Ot("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[_n];else{const e=this.transports_=[];for(const t of mn.ALL_TRANSPORTS)t&&t.isAvailable()&&e.push(t);mn.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}mn.globalTransportInitialized_=!1;class gn{constructor(e,t,n,i,r,s,o,a,l,c){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=s,this.onReady_=o,this.onDisconnect_=a,this.onKill_=l,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Pt("c:"+this.id+":"),this.transportManager_=new mn(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((()=>{this.conn_&&this.conn_.open(t,n)}),Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Kt((()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>102400?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>10240?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))}),Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if("t"in e){const t=e.t;"a"===t?this.upgradeIfSecondaryHealthy_():"r"===t?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):"o"===t&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=qt("t",e),n=qt("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:"p",d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:"a",d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:"n",d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=qt("t",e),n=qt("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=qt("t",e);if("d"in e){const n=e.d;if("h"===t){const e=Object.assign({},n);this.repoInfo_.isUsingEmulator&&(e.h=this.repoInfo_.host),this.onHandshake_(e)}else if("n"===t){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else"s"===t?this.onConnectionShutdown_(n):"r"===t?this.onReset_(n):"e"===t?Rt("Server Error: "+n):"o"===t?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Rt("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Zt!==n&&Ot("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),Kt((()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())}),Math.floor(6e4))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Kt((()=>{this.sendPingOnPrimaryIfNecessary_()}),Math.floor(5e3))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:"p",d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(bt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{put(e,t,n,i){}merge(e,t,n,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(e){this.allowedEvents_=e,this.listeners_={},I(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const i=this.getInitialEvent(e);i&&t.apply(n,i)}off(e,t,n){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let e=0;e<i.length;e++)if(i[e].callback===t&&(!n||n===i[e].context))return void i.splice(e,1)}validateEventType_(e){I(this.allowedEvents_.find((t=>t===e)),"Unknown event: "+e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn extends vn{constructor(){super(["online"]),this.online_=!0,"undefined"==typeof window||void 0===window.addEventListener||q()||(window.addEventListener("online",(()=>{this.online_||(this.online_=!0,this.trigger("online",!0))}),!1),window.addEventListener("offline",(()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))}),!1))}static getInstance(){return new bn}getInitialEvent(e){return I("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cn=32,wn=768;class In{constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}}function En(){return new In("")}function Tn(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function Sn(e){return e.pieces_.length-e.pieceNum_}function kn(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new In(e.pieces_,t)}function xn(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function Nn(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function Pn(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new In(t,0)}function Rn(e,t){const n=[];for(let t=e.pieceNum_;t<e.pieces_.length;t++)n.push(e.pieces_[t]);if(t instanceof In)for(let e=t.pieceNum_;e<t.pieces_.length;e++)n.push(t.pieces_[e]);else{const e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new In(n,0)}function Dn(e){return e.pieceNum_>=e.pieces_.length}function On(e,t){const n=Tn(e),i=Tn(t);if(null===n)return t;if(n===i)return On(kn(e),kn(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function An(e,t){if(Sn(e)!==Sn(t))return!1;for(let n=e.pieceNum_,i=t.pieceNum_;n<=e.pieces_.length;n++,i++)if(e.pieces_[n]!==t.pieces_[i])return!1;return!0}function Mn(e,t){let n=e.pieceNum_,i=t.pieceNum_;if(Sn(e)>Sn(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[i])return!1;++n,++i}return!0}class Ln{constructor(e,t){this.errorPrefix_=t,this.parts_=Nn(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let e=0;e<this.parts_.length;e++)this.byteLength_+=oe(this.parts_[e]);Fn(this)}}function Fn(e){if(e.byteLength_>wn)throw new Error(e.errorPrefix_+"has a key path longer than "+wn+" bytes ("+e.byteLength_+").");if(e.parts_.length>Cn)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Cn+") or object contains a cycle "+jn(e))}function jn(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn extends vn{constructor(){let e,t;super(["visible"]),"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(t="visibilitychange",e="hidden"):void 0!==document.mozHidden?(t="mozvisibilitychange",e="mozHidden"):void 0!==document.msHidden?(t="msvisibilitychange",e="msHidden"):void 0!==document.webkitHidden&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,(()=>{const t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))}),!1)}static getInstance(){return new qn}getInitialEvent(e){return I("visible"===e,"Unknown event type: "+e),[this.visible_]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Un=1e3;class Bn extends yn{constructor(e,t,n,i,r,s,o,a){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=s,this.appCheckTokenProvider_=o,this.authOverride_=a,this.id=Bn.nextPersistentConnectionId_++,this.log_=Pt("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Un,this.maxReconnectDelay_=3e5,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!U())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");qn.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&bn.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,n){const i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_(V(r)),I(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),n&&(this.requestCBHash_[i]=n)}get(e){this.initConnection_();const t=new L,n={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:e=>{const n=e.d;"ok"===e.s?t.resolve(n):t.reject(n)}};this.outstandingGets_.push(n),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),t.promise}listen(e,t,n,i){this.initConnection_();const r=e._queryIdentifier,s=e._path.toString();this.log_("Listen called for "+s+" "+r),this.listens.has(s)||this.listens.set(s,new Map),I(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),I(!this.listens.get(s).has(r),"listen() called twice for same path/queryId.");const o={onComplete:i,hashFn:t,query:e,tag:n};this.listens.get(s).set(r,o),this.connected_&&this.sendListen_(o)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,(n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)}))}sendListen_(e){const t=e.query,n=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+n+" for "+i);const r={p:n};e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest("q",r,(r=>{const s=r.d,o=r.s;Bn.warnOnListenWarnings_(s,t);(this.listens.get(n)&&this.listens.get(n).get(i))===e&&(this.log_("listen response",r),"ok"!==o&&this.removeListen_(n,i),e.onComplete&&e.onComplete(o,s))}))}static warnOnListenWarnings_(e,t){if(e&&"object"==typeof e&&Q(e,"w")){const n=J(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',n=t._path.toString();Ot(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at ${n} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(()=>{})),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&40===e.length||G(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=3e4)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(()=>{}))}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=K(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n.noauth=!0:"object"==typeof this.authOverride_&&(n.authvar=this.authOverride_),this.sendRequest(t,n,(t=>{const n=t.s,i=t.d||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,i))}))}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(e=>{const t=e.s,n=e.d||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)}))}unlisten(e,t){const n=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+i),I(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");this.removeListen_(n,i)&&this.connected_&&this.sendUnlisten_(n,i,e._queryObject,t)}sendUnlisten_(e,t,n,i){this.log_("Unlisten on "+e+" for "+t);const r={p:e};i&&(r.q=n,r.t=i),this.sendRequest("n",r)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,i){const r={p:t,d:n};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,(e=>{i&&setTimeout((()=>{i(e.s,e.d)}),Math.floor(0))}))}put(e,t,n,i){this.putInternal("p",e,t,n,i)}merge(e,t,n,i){this.putInternal("m",e,t,n,i)}putInternal(e,t,n,i,r){this.initConnection_();const s={p:t,d:n};void 0!==r&&(s.h=r),this.outstandingPuts_.push({action:e,request:s,onComplete:i}),this.outstandingPutCount_++;const o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,(n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),i&&i(n.s,n.d)}))}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,(e=>{if("ok"!==e.s){const t=e.d;this.log_("reportStats","Error sending stats: "+t)}}))}}onDataMessage_(e){if("r"in e){this.log_("from server: "+V(e));const t=e.r,n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t.p,t.d,!1,t.t):"m"===e?this.onDataUpdate_(t.p,t.d,!0,t.t):"c"===e?this.onListenRevoked_(t.p,t.q):"ac"===e?this.onAuthRevoked_(t.s,t.d):"apc"===e?this.onAppCheckRevoked_(t.s,t.d):"sd"===e?this.onSecurityDebugPacket_(t):Rt("Unrecognized action received from server: "+V(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){I(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((()=>{this.establishConnectionTimer_=null,this.establishConnection_()}),Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Un,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Un,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){(new Date).getTime()-this.lastConnectionEstablishedTime_>3e4&&(this.reconnectDelay_=Un),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const e=(new Date).getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,1.3*this.reconnectDelay_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Bn.nextConnectionId_++,r=this.lastSessionId;let s=!1,o=null;const a=function(){o?o.close():(s=!0,n())},l=function(e){I(o,"sendRequest call when we're not connected not allowed."),o.sendRequest(e)};this.realtime_={close:a,sendRequest:l};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[a,l]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);s?Nt("getToken() completed but was canceled"):(Nt("getToken() completed. Creating connection."),this.authToken_=a&&a.accessToken,this.appCheckToken_=l&&l.token,o=new gn(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,(e=>{Ot(e+" ("+this.repoInfo_.toString()+")"),this.interrupt("server_kill")}),r))}catch(e){this.log_("Failed to get token: "+e),s||(this.repoInfo_.nodeAdmin&&Ot(e),a())}}}interrupt(e){Nt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Nt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Z(this.interruptReasons_)&&(this.reconnectDelay_=Un,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map((e=>Ut(e))).join("$"):"default";const i=this.removeListen_(e,n);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const n=new In(e).toString();let i;if(this.listens.has(n)){const e=this.listens.get(n);i=e.get(t),e.delete(t),0===e.size&&this.listens.delete(n)}else i=void 0;return i}onAuthRevoked_(e,t){Nt("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=3&&(this.reconnectDelay_=3e4,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){Nt("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=3&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";U()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+mt.replace(/\./g,"-")]=1,q()?e["framework.cordova"]=1:"object"==typeof navigator&&"ReactNative"===navigator.product&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=bn.getInstance().currentlyOnline();return Z(this.interruptReasons_)&&e}}Bn.nextPersistentConnectionId_=0,Bn.nextConnectionId_=0;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class zn{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new zn(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new zn(Mt,e),i=new zn(Mt,t);return 0!==this.compare(n,i)}minPost(){return zn.MIN}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hn;class $n extends Wn{static get __EMPTY_NODE(){return Hn}static set __EMPTY_NODE(e){Hn=e}compare(e,t){return Ft(e.name,t.name)}isDefinedOn(e){throw E("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return zn.MIN}maxPost(){return new zn(Lt,Hn)}makePost(e,t){return I("string"==typeof e,"KeyIndex indexValue must always be a string."),new zn(e,Hn)}toString(){return".key"}}const Vn=new $n;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(e,t,n,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let s=1;for(;!e.isEmpty();)if(s=t?n(e.key,t):1,i&&(s*=-1),s<0)e=this.isReverse_?e.left:e.right;else{if(0===s){this.nodeStack_.push(e);break}this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}}getNext(){if(0===this.nodeStack_.length)return null;let e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Kn{constructor(e,t,n,i,r){this.key=e,this.value=t,this.color=null!=n?n:Kn.RED,this.left=null!=i?i:Gn.EMPTY_NODE,this.right=null!=r?r:Gn.EMPTY_NODE}copy(e,t,n,i,r){return new Kn(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=r?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const r=n(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===r?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Gn.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,i;if(n=this,t(e,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return Gn.EMPTY_NODE;i=n.right.min_(),n=n.copy(i.key,i.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Kn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Kn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Kn.RED=!0,Kn.BLACK=!1;class Gn{constructor(e,t=Gn.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Gn(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Kn.BLACK,null,null))}remove(e){return new Gn(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Kn.BLACK,null,null))}get(e){let t,n=this.root_;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,i=null;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t){if(n.left.isEmpty())return i?i.key:null;for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}t<0?n=n.left:t>0&&(i=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Yn(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Yn(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Yn(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Yn(this.root_,null,this.comparator_,!0,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Qn(e,t){return Ft(e.name,t.name)}function Jn(e,t){return Ft(e,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zn;Gn.EMPTY_NODE=new class{copy(e,t,n,i,r){return this}insert(e,t,n){return new Kn(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}};const Xn=function(e){return"number"==typeof e?"number:"+Wt(e):"string:"+e},ei=function(e){if(e.isLeafNode()){const t=e.val();I("string"==typeof t||"number"==typeof t||"object"==typeof t&&Q(t,".sv"),"Priority must be a string or number.")}else I(e===Zn||e.isEmpty(),"priority of unexpected type.");I(e===Zn||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let ti,ni,ii;class ri{constructor(e,t=ri.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,I(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),ei(this.priorityNode_)}static set __childrenNodeConstructor(e){ti=e}static get __childrenNodeConstructor(){return ti}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ri(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:ri.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Dn(e)?this:".priority"===Tn(e)?this.priorityNode_:ri.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:ri.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=Tn(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:(I(".priority"!==n||1===Sn(e),".priority must be the last token in a path"),this.updateImmediateChild(n,ri.__childrenNodeConstructor.EMPTY_NODE.updateChild(kn(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Xn(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",e+="number"===t?Wt(this.value_):this.value_,this.lazyHash_=Et(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ri.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ri.__childrenNodeConstructor?-1:(I(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,i=ri.VALUE_TYPE_ORDER.indexOf(t),r=ri.VALUE_TYPE_ORDER.indexOf(n);return I(i>=0,"Unknown leaf type: "+t),I(r>=0,"Unknown leaf type: "+n),i===r?"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}}ri.VALUE_TYPE_ORDER=["object","boolean","number","string"];const si=new class extends Wn{compare(e,t){const n=e.node.getPriority(),i=t.node.getPriority(),r=n.compareTo(i);return 0===r?Ft(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return zn.MIN}maxPost(){return new zn(Lt,new ri("[PRIORITY-POST]",ii))}makePost(e,t){const n=ni(e);return new zn(t,new ri("[PRIORITY-POST]",n))}toString(){return".priority"}},oi=Math.log(2);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(e){var t;this.count=(t=e+1,parseInt(Math.log(t)/oi,10)),this.current_=this.count-1;const n=(i=this.count,parseInt(Array(i+1).join("1"),2));var i;this.bits_=e+1&n}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const li=function(e,t,n,i){e.sort(t);const r=function(t,i){const s=i-t;let o,a;if(0===s)return null;if(1===s)return o=e[t],a=n?n(o):o,new Kn(a,o.node,Kn.BLACK,null,null);{const l=parseInt(s/2,10)+t,c=r(t,l),h=r(l+1,i);return o=e[l],a=n?n(o):o,new Kn(a,o.node,Kn.BLACK,c,h)}},s=function(t){let i=null,s=null,o=e.length;const a=function(t,i){const s=o-t,a=o;o-=t;const c=r(s+1,a),h=e[s],u=n?n(h):h;l(new Kn(u,h.node,i,null,c))},l=function(e){i?(i.left=e,i=e):(s=e,i=e)};for(let e=0;e<t.count;++e){const n=t.nextBitIsOne(),i=Math.pow(2,t.count-(e+1));n?a(i,Kn.BLACK):(a(i,Kn.BLACK),a(i,Kn.RED))}return s}(new ai(e.length));return new Gn(i||t,s)};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ci;const hi={};class ui{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return I(hi&&si,"ChildrenNode.ts has not been loaded"),ci=ci||new ui({".priority":hi},{".priority":si}),ci}get(e){const t=J(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Gn?t:null}hasIndex(e){return Q(this.indexSet_,e.toString())}addIndex(e,t){I(e!==Vn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let i=!1;const r=t.getIterator(zn.Wrap);let s,o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),n.push(o),o=r.getNext();s=i?li(n,e.getCompare()):hi;const a=e.toString(),l=Object.assign({},this.indexSet_);l[a]=e;const c=Object.assign({},this.indexes_);return c[a]=s,new ui(c,l)}addToIndexes(e,t){const n=X(this.indexes_,((n,i)=>{const r=J(this.indexSet_,i);if(I(r,"Missing index implementation for "+i),n===hi){if(r.isDefinedOn(e.node)){const n=[],i=t.getIterator(zn.Wrap);let s=i.getNext();for(;s;)s.name!==e.name&&n.push(s),s=i.getNext();return n.push(e),li(n,r.getCompare())}return hi}{const i=t.get(e.name);let r=n;return i&&(r=r.remove(new zn(e.name,i))),r.insert(e,e.node)}}));return new ui(n,this.indexSet_)}removeFromIndexes(e,t){const n=X(this.indexes_,(n=>{if(n===hi)return n;{const i=t.get(e.name);return i?n.remove(new zn(e.name,i)):n}}));return new ui(n,this.indexSet_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let di;class pi{constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&ei(this.priorityNode_),this.children_.isEmpty()&&I(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return di||(di=new pi(new Gn(Jn),null,ui.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||di}updatePriority(e){return this.children_.isEmpty()?this:new pi(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{const t=this.children_.get(e);return null===t?di:t}}getChild(e){const t=Tn(e);return null===t?this:this.getImmediateChild(t).getChild(kn(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if(I(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{const n=new zn(e,t);let i,r;t.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(n,this.children_)):(i=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(n,this.children_));const s=i.isEmpty()?di:this.priorityNode_;return new pi(i,s,r)}}updateChild(e,t){const n=Tn(e);if(null===n)return t;{I(".priority"!==Tn(e)||1===Sn(e),".priority must be the last token in a path");const i=this.getImmediateChild(n).updateChild(kn(e),t);return this.updateImmediateChild(n,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,i=0,r=!0;if(this.forEachChild(si,((s,o)=>{t[s]=o.val(e),n++,r&&pi.INTEGER_REGEXP_.test(s)?i=Math.max(i,Number(s)):r=!1})),!e&&r&&i<2*n){const e=[];for(const n in t)e[n]=t[n];return e}return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+Xn(this.getPriority().val())+":"),this.forEachChild(si,((t,n)=>{const i=n.hash();""!==i&&(e+=":"+t+":"+i)})),this.lazyHash_=""===e?"":Et(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const i=this.resolveIndex_(n);if(i){const n=i.getPredecessorKey(new zn(e,t));return n?n.name:null}return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.minKey();return e&&e.name}return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new zn(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.maxKey();return e&&e.name}return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new zn(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal((e=>t(e.name,e.node))):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,(e=>e));{const n=this.children_.getIteratorFrom(e.name,zn.Wrap);let i=n.peek();for(;null!=i&&t.compare(i,e)<0;)n.getNext(),i=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,(e=>e));{const n=this.children_.getReverseIteratorFrom(e.name,zn.Wrap);let i=n.peek();for(;null!=i&&t.compare(i,e)>0;)n.getNext(),i=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===fi?-1:0}withIndex(e){if(e===Vn||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new pi(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Vn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){const e=this.getIterator(si),n=t.getIterator(si);let i=e.getNext(),r=n.getNext();for(;i&&r;){if(i.name!==r.name||!i.node.equals(r.node))return!1;i=e.getNext(),r=n.getNext()}return null===i&&null===r}return!1}return!1}}resolveIndex_(e){return e===Vn?null:this.indexMap_.get(e.toString())}}pi.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;const fi=new class extends pi{constructor(){super(new Gn(Jn),pi.EMPTY_NODE,ui.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return pi.EMPTY_NODE}isEmpty(){return!1}};Object.defineProperties(zn,{MIN:{value:new zn(Mt,pi.EMPTY_NODE)},MAX:{value:new zn(Lt,fi)}}),$n.__EMPTY_NODE=pi.EMPTY_NODE,ri.__childrenNodeConstructor=pi,Zn=fi,function(e){ii=e}(fi);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const _i=!0;function mi(e,t=null){if(null===e)return pi.EMPTY_NODE;if("object"==typeof e&&".priority"in e&&(t=e[".priority"]),I(null===t||"string"==typeof t||"number"==typeof t||"object"==typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"==typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!=typeof e||".sv"in e){return new ri(e,mi(t))}if(e instanceof Array||!_i){let n=pi.EMPTY_NODE;return zt(e,((t,i)=>{if(Q(e,t)&&"."!==t.substring(0,1)){const e=mi(i);!e.isLeafNode()&&e.isEmpty()||(n=n.updateImmediateChild(t,e))}})),n.updatePriority(mi(t))}{const n=[];let i=!1;if(zt(e,((e,t)=>{if("."!==e.substring(0,1)){const r=mi(t);r.isEmpty()||(i=i||!r.getPriority().isEmpty(),n.push(new zn(e,r)))}})),0===n.length)return pi.EMPTY_NODE;const r=li(n,Qn,(e=>e.name),Jn);if(i){const e=li(n,si.getCompare());return new pi(r,mi(t),new ui({".priority":e},{".priority":si}))}return new pi(r,mi(t),ui.Default)}}!function(e){ni=e}(mi);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gi extends Wn{constructor(e){super(),this.indexPath_=e,I(!Dn(e)&&".priority"!==Tn(e),"Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),i=this.extractChild(t.node),r=n.compareTo(i);return 0===r?Ft(e.name,t.name):r}makePost(e,t){const n=mi(e),i=pi.EMPTY_NODE.updateChild(this.indexPath_,n);return new zn(t,i)}maxPost(){const e=pi.EMPTY_NODE.updateChild(this.indexPath_,fi);return new zn(Lt,e)}toString(){return Nn(this.indexPath_,0).join("/")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yi=new class extends Wn{compare(e,t){const n=e.node.compareTo(t.node);return 0===n?Ft(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return zn.MIN}maxPost(){return zn.MAX}makePost(e,t){const n=mi(e);return new zn(t,n)}toString(){return".value"}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vi(e){return{type:"value",snapshotNode:e}}function bi(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function Ci(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function wi(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ii{constructor(e){this.index_=e}updateChild(e,t,n,i,r,s){I(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const o=e.getImmediateChild(t);return o.getChild(i).equals(n.getChild(i))&&o.isEmpty()===n.isEmpty()?e:(null!=s&&(n.isEmpty()?e.hasChild(t)?s.trackChildChange(Ci(t,o)):I(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):o.isEmpty()?s.trackChildChange(bi(t,n)):s.trackChildChange(wi(t,n,o))),e.isLeafNode()&&n.isEmpty()?e:e.updateImmediateChild(t,n).withIndex(this.index_))}updateFullNode(e,t,n){return null!=n&&(e.isLeafNode()||e.forEachChild(si,((e,i)=>{t.hasChild(e)||n.trackChildChange(Ci(e,i))})),t.isLeafNode()||t.forEachChild(si,((t,i)=>{if(e.hasChild(t)){const r=e.getImmediateChild(t);r.equals(i)||n.trackChildChange(wi(t,i,r))}else n.trackChildChange(bi(t,i))}))),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?pi.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(e){this.indexedFilter_=new Ii(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Ei.getStartPost_(e),this.endPost_=Ei.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,n=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&n}updateChild(e,t,n,i,r,s){return this.matches(new zn(t,n))||(n=pi.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,i,r,s)}updateFullNode(e,t,n){t.isLeafNode()&&(t=pi.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(pi.EMPTY_NODE);const r=this;return t.forEachChild(si,((e,t)=>{r.matches(new zn(e,t))||(i=i.updateImmediateChild(e,pi.EMPTY_NODE))})),this.indexedFilter_.updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}return e.getIndex().maxPost()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(e){this.withinDirectionalStart=e=>this.reverse_?this.withinEndPost(e):this.withinStartPost(e),this.withinDirectionalEnd=e=>this.reverse_?this.withinStartPost(e):this.withinEndPost(e),this.withinStartPost=e=>{const t=this.index_.compare(this.rangedFilter_.getStartPost(),e);return this.startIsInclusive_?t<=0:t<0},this.withinEndPost=e=>{const t=this.index_.compare(e,this.rangedFilter_.getEndPost());return this.endIsInclusive_?t<=0:t<0},this.rangedFilter_=new Ei(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,n,i,r,s){return this.rangedFilter_.matches(new zn(t,n))||(n=pi.EMPTY_NODE),e.getImmediateChild(t).equals(n)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,i,r,s):this.fullLimitUpdateChild_(e,t,n,r,s)}updateFullNode(e,t,n){let i;if(t.isLeafNode()||t.isEmpty())i=pi.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<t.numChildren()&&t.isIndexed(this.index_)){let e;i=pi.EMPTY_NODE.withIndex(this.index_),e=this.reverse_?t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let n=0;for(;e.hasNext()&&n<this.limit_;){const t=e.getNext();if(this.withinDirectionalStart(t)){if(!this.withinDirectionalEnd(t))break;i=i.updateImmediateChild(t.name,t.node),n++}}}else{let e;i=t.withIndex(this.index_),i=i.updatePriority(pi.EMPTY_NODE),e=this.reverse_?i.getReverseIterator(this.index_):i.getIterator(this.index_);let n=0;for(;e.hasNext();){const t=e.getNext();n<this.limit_&&this.withinDirectionalStart(t)&&this.withinDirectionalEnd(t)?n++:i=i.updateImmediateChild(t.name,pi.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,n,i,r){let s;if(this.reverse_){const e=this.index_.getCompare();s=(t,n)=>e(n,t)}else s=this.index_.getCompare();const o=e;I(o.numChildren()===this.limit_,"");const a=new zn(t,n),l=this.reverse_?o.getFirstChild(this.index_):o.getLastChild(this.index_),c=this.rangedFilter_.matches(a);if(o.hasChild(t)){const e=o.getImmediateChild(t);let h=i.getChildAfterChild(this.index_,l,this.reverse_);for(;null!=h&&(h.name===t||o.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const u=null==h?1:s(h,a);if(c&&!n.isEmpty()&&u>=0)return null!=r&&r.trackChildChange(wi(t,n,e)),o.updateImmediateChild(t,n);{null!=r&&r.trackChildChange(Ci(t,e));const n=o.updateImmediateChild(t,pi.EMPTY_NODE);return null!=h&&this.rangedFilter_.matches(h)?(null!=r&&r.trackChildChange(bi(h.name,h.node)),n.updateImmediateChild(h.name,h.node)):n}}return n.isEmpty()?e:c&&s(l,a)>=0?(null!=r&&(r.trackChildChange(Ci(l.name,l.node)),r.trackChildChange(bi(t,n))),o.updateImmediateChild(t,n).updateImmediateChild(l.name,pi.EMPTY_NODE)):e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=si}hasStart(){return this.startSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return I(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return I(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Mt}hasEnd(){return this.endSet_}getIndexEndValue(){return I(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return I(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Lt}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return I(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===si}copy(){const e=new Si;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function ki(e){const t={};if(e.isDefault())return t;let n;if(e.index_===si?n="$priority":e.index_===yi?n="$value":e.index_===Vn?n="$key":(I(e.index_ instanceof gi,"Unrecognized index type!"),n=e.index_.toString()),t.orderBy=V(n),e.startSet_){const n=e.startAfterSet_?"startAfter":"startAt";t[n]=V(e.indexStartValue_),e.startNameSet_&&(t[n]+=","+V(e.indexStartName_))}if(e.endSet_){const n=e.endBeforeSet_?"endBefore":"endAt";t[n]=V(e.indexEndValue_),e.endNameSet_&&(t[n]+=","+V(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?t.limitToFirst=e.limit_:t.limitToLast=e.limit_),t}function xi(e){const t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_),t.sin=!e.startAfterSet_),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_),t.ein=!e.endBeforeSet_),e.limitSet_){t.l=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t.vf=n}return e.index_!==si&&(t.i=e.index_.toString()),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni extends yn{constructor(e,t,n,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=i,this.log_=Pt("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:(I(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,n,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const s=Ni.getListenId_(e,n),o={};this.listens_[s]=o;const a=ki(e._queryParams);this.restRequest_(r+".json",a,((e,t)=>{let a=t;if(404===e&&(a=null,e=null),null===e&&this.onDataUpdate_(r,a,!1,n),J(this.listens_,s)===o){let t;t=e?401===e?"permission_denied":"rest_error:"+e:"ok",i(t,null)}}))}unlisten(e,t){const n=Ni.getListenId_(e,t);delete this.listens_[n]}get(e){const t=ki(e._queryParams),n=e._path.toString(),i=new L;return this.restRequest_(n+".json",t,((e,t)=>{let r=t;404===e&&(r=null,e=null),null===e?(this.onDataUpdate_(n,r,!1,null),i.resolve(r)):i.reject(new Error(r))})),i.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((([i,r])=>{i&&i.accessToken&&(t.auth=i.accessToken),r&&r.token&&(t.ac=r.token);const s=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ne(t);this.log_("Sending REST request for "+s);const o=new XMLHttpRequest;o.onreadystatechange=()=>{if(n&&4===o.readyState){this.log_("REST Response for "+s+" received. status:",o.status,"response:",o.responseText);let e=null;if(o.status>=200&&o.status<300){try{e=$(o.responseText)}catch(e){Ot("Failed to parse JSON response for "+s+": "+o.responseText)}n(null,e)}else 401!==o.status&&404!==o.status&&Ot("Got unsuccessful REST response for "+s+" Status: "+o.status),n(o.status);n=null}},o.open("GET",s,!0),o.send()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(){this.rootNode_=pi.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ri(){return{value:null,children:new Map}}function Di(e,t,n){if(Dn(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{const i=Tn(t);e.children.has(i)||e.children.set(i,Ri());Di(e.children.get(i),t=kn(t),n)}}function Oi(e,t,n){null!==e.value?n(t,e.value):function(e,t){e.children.forEach(((e,n)=>{t(n,e)}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,((e,i)=>{Oi(i,new In(t.toString()+"/"+e),n)}))}class Ai{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&zt(this.last_,((e,n)=>{t[e]=t[e]-n})),this.last_=e,t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Ai(e);const n=1e4+2e4*Math.random();Kt(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;zt(e,((e,i)=>{i>0&&Q(this.statsToReport_,e)&&(t[e]=i,n=!0)})),n&&this.server_.reportStats(t),Kt(this.reportStats_.bind(this),Math.floor(2*Math.random()*3e5))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Li,Fi;function ji(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(Fi=Li||(Li={}))[Fi.OVERWRITE=0]="OVERWRITE",Fi[Fi.MERGE=1]="MERGE",Fi[Fi.ACK_USER_WRITE=2]="ACK_USER_WRITE",Fi[Fi.LISTEN_COMPLETE=3]="LISTEN_COMPLETE";class qi{constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=Li.ACK_USER_WRITE,this.source={fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}operationForChild(e){if(Dn(this.path)){if(null!=this.affectedTree.value)return I(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new In(e));return new qi(En(),t,this.revert)}}return I(Tn(this.path)===e,"operationForChild called for unrelated child."),new qi(kn(this.path),this.affectedTree,this.revert)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(e,t){this.source=e,this.path=t,this.type=Li.LISTEN_COMPLETE}operationForChild(e){return Dn(this.path)?new Ui(this.source,En()):new Ui(this.source,kn(this.path))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=Li.OVERWRITE}operationForChild(e){return Dn(this.path)?new Bi(this.source,En(),this.snap.getImmediateChild(e)):new Bi(this.source,kn(this.path),this.snap)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=Li.MERGE}operationForChild(e){if(Dn(this.path)){const t=this.children.subtree(new In(e));return t.isEmpty()?null:t.value?new Bi(this.source,En(),t.value):new zi(this.source,En(),t)}return I(Tn(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new zi(this.source,kn(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi{constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Dn(e))return this.isFullyInitialized()&&!this.filtered_;const t=Tn(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function $i(e,t,n,i,r,s){const o=i.filter((e=>e.type===n));o.sort(((t,n)=>function(e,t,n){if(null==t.childName||null==n.childName)throw E("Should only compare child_ events.");const i=new zn(t.childName,t.snapshotNode),r=new zn(n.childName,n.snapshotNode);return e.index_.compare(i,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t,n))),o.forEach((n=>{const i=function(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}(e,n,s);r.forEach((r=>{r.respondsTo(n.type)&&t.push(r.createEvent(i,e.query_))}))}))}function Vi(e,t){return{eventCache:e,serverCache:t}}function Yi(e,t,n,i){return Vi(new Wi(t,n,i),e.serverCache)}function Ki(e,t,n,i){return Vi(e.eventCache,new Wi(t,n,i))}function Gi(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function Qi(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ji;class Zi{constructor(e,t=(()=>(Ji||(Ji=new Gn(jt)),Ji))()){this.value=e,this.children=t}static fromObject(e){let t=new Zi(null);return zt(e,((e,n)=>{t=t.set(new In(e),n)})),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:En(),value:this.value};if(Dn(e))return null;{const n=Tn(e),i=this.children.get(n);if(null!==i){const r=i.findRootMostMatchingPathAndValue(kn(e),t);if(null!=r){return{path:Rn(new In(n),r.path),value:r.value}}return null}return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,(()=>!0))}subtree(e){if(Dn(e))return this;{const t=Tn(e),n=this.children.get(t);return null!==n?n.subtree(kn(e)):new Zi(null)}}set(e,t){if(Dn(e))return new Zi(t,this.children);{const n=Tn(e),i=(this.children.get(n)||new Zi(null)).set(kn(e),t),r=this.children.insert(n,i);return new Zi(this.value,r)}}remove(e){if(Dn(e))return this.children.isEmpty()?new Zi(null):new Zi(null,this.children);{const t=Tn(e),n=this.children.get(t);if(n){const i=n.remove(kn(e));let r;return r=i.isEmpty()?this.children.remove(t):this.children.insert(t,i),null===this.value&&r.isEmpty()?new Zi(null):new Zi(this.value,r)}return this}}get(e){if(Dn(e))return this.value;{const t=Tn(e),n=this.children.get(t);return n?n.get(kn(e)):null}}setTree(e,t){if(Dn(e))return t;{const n=Tn(e),i=(this.children.get(n)||new Zi(null)).setTree(kn(e),t);let r;return r=i.isEmpty()?this.children.remove(n):this.children.insert(n,i),new Zi(this.value,r)}}fold(e){return this.fold_(En(),e)}fold_(e,t){const n={};return this.children.inorderTraversal(((i,r)=>{n[i]=r.fold_(Rn(e,i),t)})),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,En(),t)}findOnPath_(e,t,n){const i=!!this.value&&n(t,this.value);if(i)return i;if(Dn(e))return null;{const i=Tn(e),r=this.children.get(i);return r?r.findOnPath_(kn(e),Rn(t,i),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,En(),t)}foreachOnPath_(e,t,n){if(Dn(e))return this;{this.value&&n(t,this.value);const i=Tn(e),r=this.children.get(i);return r?r.foreachOnPath_(kn(e),Rn(t,i),n):new Zi(null)}}foreach(e){this.foreach_(En(),e)}foreach_(e,t){this.children.inorderTraversal(((n,i)=>{i.foreach_(Rn(e,n),t)})),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal(((t,n)=>{n.value&&e(t,n.value)}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(e){this.writeTree_=e}static empty(){return new Xi(new Zi(null))}}function er(e,t,n){if(Dn(t))return new Xi(new Zi(n));{const i=e.writeTree_.findRootMostValueAndPath(t);if(null!=i){const r=i.path;let s=i.value;const o=On(r,t);return s=s.updateChild(o,n),new Xi(e.writeTree_.set(r,s))}{const i=new Zi(n),r=e.writeTree_.setTree(t,i);return new Xi(r)}}}function tr(e,t,n){let i=e;return zt(n,((e,n)=>{i=er(i,Rn(t,e),n)})),i}function nr(e,t){if(Dn(t))return Xi.empty();{const n=e.writeTree_.setTree(t,new Zi(null));return new Xi(n)}}function ir(e,t){return null!=rr(e,t)}function rr(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(On(n.path,t)):null}function sr(e){const t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(si,((e,n)=>{t.push(new zn(e,n))})):e.writeTree_.children.inorderTraversal(((e,n)=>{null!=n.value&&t.push(new zn(e,n.value))})),t}function or(e,t){if(Dn(t))return e;{const n=rr(e,t);return new Xi(null!=n?new Zi(n):e.writeTree_.subtree(t))}}function ar(e){return e.writeTree_.isEmpty()}function lr(e,t){return cr(En(),e.writeTree_,t)}function cr(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);{let i=null;return t.children.inorderTraversal(((t,r)=>{".priority"===t?(I(null!==r.value,"Priority writes must always be leaf nodes"),i=r.value):n=cr(Rn(e,t),r,n)})),n.getChild(e).isEmpty()||null===i||(n=n.updateChild(Rn(e,".priority"),i)),n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hr(e,t){return Ir(t,e)}function ur(e,t){const n=e.allWrites.findIndex((e=>e.writeId===t));I(n>=0,"removeWrite called with nonexistent writeId.");const i=e.allWrites[n];e.allWrites.splice(n,1);let r=i.visible,s=!1,o=e.allWrites.length-1;for(;r&&o>=0;){const t=e.allWrites[o];t.visible&&(o>=n&&dr(t,i.path)?r=!1:Mn(i.path,t.path)&&(s=!0)),o--}if(r){if(s)return function(e){e.visibleWrites=fr(e.allWrites,pr,En()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}(e),!0;if(i.snap)e.visibleWrites=nr(e.visibleWrites,i.path);else{zt(i.children,(t=>{e.visibleWrites=nr(e.visibleWrites,Rn(i.path,t))}))}return!0}return!1}function dr(e,t){if(e.snap)return Mn(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&Mn(Rn(e.path,n),t))return!0;return!1}function pr(e){return e.visible}function fr(e,t,n){let i=Xi.empty();for(let r=0;r<e.length;++r){const s=e[r];if(t(s)){const e=s.path;let t;if(s.snap)Mn(n,e)?(t=On(n,e),i=er(i,t,s.snap)):Mn(e,n)&&(t=On(e,n),i=er(i,En(),s.snap.getChild(t)));else{if(!s.children)throw E("WriteRecord should have .snap or .children");if(Mn(n,e))t=On(n,e),i=tr(i,t,s.children);else if(Mn(e,n))if(t=On(e,n),Dn(t))i=tr(i,En(),s.children);else{const e=J(s.children,Tn(t));if(e){const n=e.getChild(kn(t));i=er(i,En(),n)}}}}}return i}function _r(e,t,n,i,r){if(i||r){const s=or(e.visibleWrites,t);if(!r&&ar(s))return n;if(r||null!=n||ir(s,En())){const s=function(e){return(e.visible||r)&&(!i||!~i.indexOf(e.writeId))&&(Mn(e.path,t)||Mn(t,e.path))};return lr(fr(e.allWrites,s,t),n||pi.EMPTY_NODE)}return null}{const i=rr(e.visibleWrites,t);if(null!=i)return i;{const i=or(e.visibleWrites,t);if(ar(i))return n;if(null!=n||ir(i,En())){return lr(i,n||pi.EMPTY_NODE)}return null}}}function mr(e,t,n,i){return _r(e.writeTree,e.treePath,t,n,i)}function gr(e,t){return function(e,t,n){let i=pi.EMPTY_NODE;const r=rr(e.visibleWrites,t);if(r)return r.isLeafNode()||r.forEachChild(si,((e,t)=>{i=i.updateImmediateChild(e,t)})),i;if(n){const r=or(e.visibleWrites,t);return n.forEachChild(si,((e,t)=>{const n=lr(or(r,new In(e)),t);i=i.updateImmediateChild(e,n)})),sr(r).forEach((e=>{i=i.updateImmediateChild(e.name,e.node)})),i}return sr(or(e.visibleWrites,t)).forEach((e=>{i=i.updateImmediateChild(e.name,e.node)})),i}(e.writeTree,e.treePath,t)}function yr(e,t,n,i){return function(e,t,n,i,r){I(i||r,"Either existingEventSnap or existingServerSnap must exist");const s=Rn(t,n);if(ir(e.visibleWrites,s))return null;{const t=or(e.visibleWrites,s);return ar(t)?r.getChild(n):lr(t,r.getChild(n))}}(e.writeTree,e.treePath,t,n,i)}function vr(e,t){return function(e,t){return rr(e.visibleWrites,t)}(e.writeTree,Rn(e.treePath,t))}function br(e,t,n,i,r,s){return function(e,t,n,i,r,s,o){let a;const l=or(e.visibleWrites,t),c=rr(l,En());if(null!=c)a=c;else{if(null==n)return[];a=lr(l,n)}if(a=a.withIndex(o),a.isEmpty()||a.isLeafNode())return[];{const e=[],t=o.getCompare(),n=s?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let l=n.getNext();for(;l&&e.length<r;)0!==t(l,i)&&e.push(l),l=n.getNext();return e}}(e.writeTree,e.treePath,t,n,i,r,s)}function Cr(e,t,n){return function(e,t,n,i){const r=Rn(t,n),s=rr(e.visibleWrites,r);if(null!=s)return s;if(i.isCompleteForChild(n))return lr(or(e.visibleWrites,r),i.getNode().getImmediateChild(n));return null}(e.writeTree,e.treePath,t,n)}function wr(e,t){return Ir(Rn(e.treePath,t),e.writeTree)}function Ir(e,t){return{treePath:e,writeTree:t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,n=e.childName;I("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),I(".priority"!==n,"Only non-priority child changes can be tracked.");const i=this.changeMap.get(n);if(i){const r=i.type;if("child_added"===t&&"child_removed"===r)this.changeMap.set(n,wi(n,e.snapshotNode,i.snapshotNode));else if("child_removed"===t&&"child_added"===r)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===r)this.changeMap.set(n,Ci(n,i.oldSnap));else if("child_changed"===t&&"child_added"===r)this.changeMap.set(n,bi(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==r)throw E("Illegal combination of changes: "+e+" occurred after "+i);this.changeMap.set(n,wi(n,e.snapshotNode,i.oldSnap))}}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tr=new class{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}};class Sr{constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const t=null!=this.optCompleteServerCache_?new Wi(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Cr(this.writes_,e,t)}}getChildAfterChild(e,t,n){const i=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:Qi(this.viewCache_),r=br(this.writes_,i,t,1,n,e);return 0===r.length?null:r[0]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kr(e,t,n,i,r){const s=new Er;let o,a;if(n.type===Li.OVERWRITE){const l=n;l.source.fromUser?o=Pr(e,t,l.path,l.snap,i,r,s):(I(l.source.fromServer,"Unknown source."),a=l.source.tagged||t.serverCache.isFiltered()&&!Dn(l.path),o=Nr(e,t,l.path,l.snap,i,r,a,s))}else if(n.type===Li.MERGE){const l=n;l.source.fromUser?o=function(e,t,n,i,r,s,o){let a=t;return i.foreach(((i,l)=>{const c=Rn(n,i);Rr(t,Tn(c))&&(a=Pr(e,a,c,l,r,s,o))})),i.foreach(((i,l)=>{const c=Rn(n,i);Rr(t,Tn(c))||(a=Pr(e,a,c,l,r,s,o))})),a}(e,t,l.path,l.children,i,r,s):(I(l.source.fromServer,"Unknown source."),a=l.source.tagged||t.serverCache.isFiltered(),o=Or(e,t,l.path,l.children,i,r,a,s))}else if(n.type===Li.ACK_USER_WRITE){const a=n;o=a.revert?function(e,t,n,i,r,s){let o;if(null!=vr(i,n))return t;{const a=new Sr(i,t,r),l=t.eventCache.getNode();let c;if(Dn(n)||".priority"===Tn(n)){let n;if(t.serverCache.isFullyInitialized())n=mr(i,Qi(t));else{const e=t.serverCache.getNode();I(e instanceof pi,"serverChildren would be complete if leaf node"),n=gr(i,e)}c=e.filter.updateFullNode(l,n,s)}else{const r=Tn(n);let h=Cr(i,r,t.serverCache);null==h&&t.serverCache.isCompleteForChild(r)&&(h=l.getImmediateChild(r)),c=null!=h?e.filter.updateChild(l,r,h,kn(n),a,s):t.eventCache.getNode().hasChild(r)?e.filter.updateChild(l,r,pi.EMPTY_NODE,kn(n),a,s):l,c.isEmpty()&&t.serverCache.isFullyInitialized()&&(o=mr(i,Qi(t)),o.isLeafNode()&&(c=e.filter.updateFullNode(c,o,s)))}return o=t.serverCache.isFullyInitialized()||null!=vr(i,En()),Yi(t,c,o,e.filter.filtersNodes())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t,a.path,i,r,s):function(e,t,n,i,r,s,o){if(null!=vr(r,n))return t;const a=t.serverCache.isFiltered(),l=t.serverCache;if(null!=i.value){if(Dn(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Nr(e,t,n,l.getNode().getChild(n),r,s,a,o);if(Dn(n)){let i=new Zi(null);return l.getNode().forEachChild(Vn,((e,t)=>{i=i.set(new In(e),t)})),Or(e,t,n,i,r,s,a,o)}return t}{let c=new Zi(null);return i.foreach(((e,t)=>{const i=Rn(n,e);l.isCompleteForPath(i)&&(c=c.set(e,l.getNode().getChild(i)))})),Or(e,t,n,c,r,s,a,o)}}(e,t,a.path,a.affectedTree,i,r,s)}else{if(n.type!==Li.LISTEN_COMPLETE)throw E("Unknown operation type: "+n.type);o=function(e,t,n,i,r){const s=t.serverCache,o=Ki(t,s.getNode(),s.isFullyInitialized()||Dn(n),s.isFiltered());return xr(e,o,n,i,Tr,r)}(e,t,n.path,i,s)}const l=s.getChanges();return function(e,t,n){const i=t.eventCache;if(i.isFullyInitialized()){const r=i.getNode().isLeafNode()||i.getNode().isEmpty(),s=Gi(e);(n.length>0||!e.eventCache.isFullyInitialized()||r&&!i.getNode().equals(s)||!i.getNode().getPriority().equals(s.getPriority()))&&n.push(vi(Gi(t)))}}(t,o,l),{viewCache:o,changes:l}}function xr(e,t,n,i,r,s){const o=t.eventCache;if(null!=vr(i,n))return t;{let a,l;if(Dn(n))if(I(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const n=Qi(t),r=gr(i,n instanceof pi?n:pi.EMPTY_NODE);a=e.filter.updateFullNode(t.eventCache.getNode(),r,s)}else{const n=mr(i,Qi(t));a=e.filter.updateFullNode(t.eventCache.getNode(),n,s)}else{const c=Tn(n);if(".priority"===c){I(1===Sn(n),"Can't have a priority with additional path components");const r=o.getNode();l=t.serverCache.getNode();const s=yr(i,n,r,l);a=null!=s?e.filter.updatePriority(r,s):o.getNode()}else{const h=kn(n);let u;if(o.isCompleteForChild(c)){l=t.serverCache.getNode();const e=yr(i,n,o.getNode(),l);u=null!=e?o.getNode().getImmediateChild(c).updateChild(h,e):o.getNode().getImmediateChild(c)}else u=Cr(i,c,t.serverCache);a=null!=u?e.filter.updateChild(o.getNode(),c,u,h,r,s):o.getNode()}}return Yi(t,a,o.isFullyInitialized()||Dn(n),e.filter.filtersNodes())}}function Nr(e,t,n,i,r,s,o,a){const l=t.serverCache;let c;const h=o?e.filter:e.filter.getIndexedFilter();if(Dn(n))c=h.updateFullNode(l.getNode(),i,null);else if(h.filtersNodes()&&!l.isFiltered()){const e=l.getNode().updateChild(n,i);c=h.updateFullNode(l.getNode(),e,null)}else{const e=Tn(n);if(!l.isCompleteForPath(n)&&Sn(n)>1)return t;const r=kn(n),s=l.getNode().getImmediateChild(e).updateChild(r,i);c=".priority"===e?h.updatePriority(l.getNode(),s):h.updateChild(l.getNode(),e,s,r,Tr,null)}const u=Ki(t,c,l.isFullyInitialized()||Dn(n),h.filtersNodes());return xr(e,u,n,r,new Sr(r,u,s),a)}function Pr(e,t,n,i,r,s,o){const a=t.eventCache;let l,c;const h=new Sr(r,t,s);if(Dn(n))c=e.filter.updateFullNode(t.eventCache.getNode(),i,o),l=Yi(t,c,!0,e.filter.filtersNodes());else{const r=Tn(n);if(".priority"===r)c=e.filter.updatePriority(t.eventCache.getNode(),i),l=Yi(t,c,a.isFullyInitialized(),a.isFiltered());else{const s=kn(n),c=a.getNode().getImmediateChild(r);let u;if(Dn(s))u=i;else{const e=h.getCompleteChild(r);u=null!=e?".priority"===xn(s)&&e.getChild(Pn(s)).isEmpty()?e:e.updateChild(s,i):pi.EMPTY_NODE}if(c.equals(u))l=t;else{l=Yi(t,e.filter.updateChild(a.getNode(),r,u,s,h,o),a.isFullyInitialized(),e.filter.filtersNodes())}}}return l}function Rr(e,t){return e.eventCache.isCompleteForChild(t)}function Dr(e,t,n){return n.foreach(((e,n)=>{t=t.updateChild(e,n)})),t}function Or(e,t,n,i,r,s,o,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let l,c=t;l=Dn(n)?i:new Zi(null).setTree(n,i);const h=t.serverCache.getNode();return l.children.inorderTraversal(((n,i)=>{if(h.hasChild(n)){const l=Dr(0,t.serverCache.getNode().getImmediateChild(n),i);c=Nr(e,c,new In(n),l,r,s,o,a)}})),l.children.inorderTraversal(((n,i)=>{const l=!t.serverCache.isCompleteForChild(n)&&null===i.value;if(!h.hasChild(n)&&!l){const l=Dr(0,t.serverCache.getNode().getImmediateChild(n),i);c=Nr(e,c,new In(n),l,r,s,o,a)}})),c}class Ar{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const n=this.query_._queryParams,i=new Ii(n.getIndex()),r=(s=n).loadsAllData()?new Ii(s.getIndex()):s.hasLimit()?new Ti(s):new Ei(s);var s;this.processor_=function(e){return{filter:e}}(r);const o=t.serverCache,a=t.eventCache,l=i.updateFullNode(pi.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(pi.EMPTY_NODE,a.getNode(),null),h=new Wi(l,o.isFullyInitialized(),i.filtersNodes()),u=new Wi(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=Vi(u,h),this.eventGenerator_=new Hi(this.query_)}get query(){return this.query_}}function Mr(e,t){const n=Qi(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!Dn(t)&&!n.getImmediateChild(Tn(t)).isEmpty())?n.getChild(t):null}function Lr(e){return 0===e.eventRegistrations_.length}function Fr(e,t,n){const i=[];if(n){I(null==t,"A cancel should cancel all event registrations.");const r=e.query._path;e.eventRegistrations_.forEach((e=>{const t=e.createCancelEvent(n,r);t&&i.push(t)}))}if(t){let n=[];for(let i=0;i<e.eventRegistrations_.length;++i){const r=e.eventRegistrations_[i];if(r.matches(t)){if(t.hasAnyCallback()){n=n.concat(e.eventRegistrations_.slice(i+1));break}}else n.push(r)}e.eventRegistrations_=n}else e.eventRegistrations_=[];return i}function jr(e,t,n,i){t.type===Li.MERGE&&null!==t.source.queryId&&(I(Qi(e.viewCache_),"We should always have a full cache before handling merges"),I(Gi(e.viewCache_),"Missing event cache, even though we have a server cache"));const r=e.viewCache_,s=kr(e.processor_,r,t,n,i);var o,a;return o=e.processor_,a=s.viewCache,I(a.eventCache.getNode().isIndexed(o.filter.getIndex()),"Event snap not indexed"),I(a.serverCache.getNode().isIndexed(o.filter.getIndex()),"Server snap not indexed"),I(s.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=s.viewCache,qr(e,s.changes,s.viewCache.eventCache.getNode(),null)}function qr(e,t,n,i){const r=i?[i]:e.eventRegistrations_;return function(e,t,n,i){const r=[],s=[];return t.forEach((t=>{var n;"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&s.push((n=t.childName,{type:"child_moved",snapshotNode:t.snapshotNode,childName:n}))})),$i(e,r,"child_removed",t,i,n),$i(e,r,"child_added",t,i,n),$i(e,r,"child_moved",s,i,n),$i(e,r,"child_changed",t,i,n),$i(e,r,"value",t,i,n),r}(e.eventGenerator_,t,n,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ur,Br;class zr{constructor(){this.views=new Map}}function Wr(e,t,n,i){const r=t.source.queryId;if(null!==r){const s=e.views.get(r);return I(null!=s,"SyncTree gave us an op for an invalid query."),jr(s,t,n,i)}{let r=[];for(const s of e.views.values())r=r.concat(jr(s,t,n,i));return r}}function Hr(e,t,n,i,r){const s=t._queryIdentifier,o=e.views.get(s);if(!o){let e=mr(n,r?i:null),s=!1;e?s=!0:i instanceof pi?(e=gr(n,i),s=!1):(e=pi.EMPTY_NODE,s=!1);const o=Vi(new Wi(e,s,!1),new Wi(i,r,!1));return new Ar(t,o)}return o}function $r(e,t,n,i,r,s){const o=Hr(e,t,i,r,s);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,o),function(e,t){e.eventRegistrations_.push(t)}(o,n),function(e,t){const n=e.viewCache_.eventCache,i=[];n.getNode().isLeafNode()||n.getNode().forEachChild(si,((e,t)=>{i.push(bi(e,t))}));return n.isFullyInitialized()&&i.push(vi(n.getNode())),qr(e,i,n.getNode(),t)}(o,n)}function Vr(e,t,n,i){const r=t._queryIdentifier,s=[];let o=[];const a=Jr(e);if("default"===r)for(const[t,r]of e.views.entries())o=o.concat(Fr(r,n,i)),Lr(r)&&(e.views.delete(t),r.query._queryParams.loadsAllData()||s.push(r.query));else{const t=e.views.get(r);t&&(o=o.concat(Fr(t,n,i)),Lr(t)&&(e.views.delete(r),t.query._queryParams.loadsAllData()||s.push(t.query)))}return a&&!Jr(e)&&s.push(new(I(Ur,"Reference.ts has not been loaded"),Ur)(t._repo,t._path)),{removed:s,events:o}}function Yr(e){const t=[];for(const n of e.views.values())n.query._queryParams.loadsAllData()||t.push(n);return t}function Kr(e,t){let n=null;for(const i of e.views.values())n=n||Mr(i,t);return n}function Gr(e,t){if(t._queryParams.loadsAllData())return Zr(e);{const n=t._queryIdentifier;return e.views.get(n)}}function Qr(e,t){return null!=Gr(e,t)}function Jr(e){return null!=Zr(e)}function Zr(e){for(const t of e.views.values())if(t.query._queryParams.loadsAllData())return t;return null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xr=1;class es{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Zi(null),this.pendingWriteTree_={visibleWrites:Xi.empty(),allWrites:[],lastWriteId:-1},this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function ts(e,t,n,i,r){return function(e,t,n,i,r){I(i>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===r&&(r=!0),e.allWrites.push({path:t,snap:n,writeId:i,visible:r}),r&&(e.visibleWrites=er(e.visibleWrites,t,n)),e.lastWriteId=i}(e.pendingWriteTree_,t,n,i,r),r?ls(e,new Bi({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},t,n)):[]}function ns(e,t,n=!1){const i=function(e,t){for(let n=0;n<e.allWrites.length;n++){const i=e.allWrites[n];if(i.writeId===t)return i}return null}(e.pendingWriteTree_,t);if(ur(e.pendingWriteTree_,t)){let t=new Zi(null);return null!=i.snap?t=t.set(En(),!0):zt(i.children,(e=>{t=t.set(new In(e),!0)})),ls(e,new qi(i.path,t,n))}return[]}function is(e,t,n){return ls(e,new Bi({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,n))}function rs(e,t,n,i,r=!1){const s=t._path,o=e.syncPointTree_.get(s);let a=[];if(o&&("default"===t._queryIdentifier||Qr(o,t))){const l=Vr(o,t,n,i);0===o.views.size&&(e.syncPointTree_=e.syncPointTree_.remove(s));const c=l.removed;if(a=l.events,!r){const n=-1!==c.findIndex((e=>e._queryParams.loadsAllData())),r=e.syncPointTree_.findOnPath(s,((e,t)=>Jr(t)));if(n&&!r){const t=e.syncPointTree_.subtree(s);if(!t.isEmpty()){const n=function(e){return e.fold(((e,t,n)=>{if(t&&Jr(t)){return[Zr(t)]}{let e=[];return t&&(e=Yr(t)),zt(n,((t,n)=>{e=e.concat(n)})),e}}))}(t);for(let t=0;t<n.length;++t){const i=n[t],r=i.query,s=us(e,i);e.listenProvider_.startListening(gs(r),ds(e,r),s.hashFn,s.onComplete)}}}if(!r&&c.length>0&&!i)if(n){const n=null;e.listenProvider_.stopListening(gs(t),n)}else c.forEach((t=>{const n=e.queryToTagMap.get(ps(t));e.listenProvider_.stopListening(gs(t),n)}))}!function(e,t){for(let n=0;n<t.length;++n){const i=t[n];if(!i._queryParams.loadsAllData()){const t=ps(i),n=e.queryToTagMap.get(t);e.queryToTagMap.delete(t),e.tagToQueryMap.delete(n)}}}(e,c)}return a}function ss(e,t,n,i){const r=fs(e,i);if(null!=r){const i=_s(r),s=i.path,o=i.queryId,a=On(s,t);return ms(e,s,new Bi(ji(o),a,n))}return[]}function os(e,t,n,i=!1){const r=t._path;let s=null,o=!1;e.syncPointTree_.foreachOnPath(r,((e,t)=>{const n=On(e,r);s=s||Kr(t,n),o=o||Jr(t)}));let a,l=e.syncPointTree_.get(r);if(l?(o=o||Jr(l),s=s||Kr(l,En())):(l=new zr,e.syncPointTree_=e.syncPointTree_.set(r,l)),null!=s)a=!0;else{a=!1,s=pi.EMPTY_NODE;e.syncPointTree_.subtree(r).foreachChild(((e,t)=>{const n=Kr(t,En());n&&(s=s.updateImmediateChild(e,n))}))}const c=Qr(l,t);if(!c&&!t._queryParams.loadsAllData()){const n=ps(t);I(!e.queryToTagMap.has(n),"View does not exist, but we have a tag");const i=Xr++;e.queryToTagMap.set(n,i),e.tagToQueryMap.set(i,n)}let h=$r(l,t,n,hr(e.pendingWriteTree_,r),s,a);if(!c&&!o&&!i){const n=Gr(l,t);h=h.concat(function(e,t,n){const i=t._path,r=ds(e,t),s=us(e,n),o=e.listenProvider_.startListening(gs(t),r,s.hashFn,s.onComplete),a=e.syncPointTree_.subtree(i);if(r)I(!Jr(a.value),"If we're adding a query, it shouldn't be shadowed");else{const t=a.fold(((e,t,n)=>{if(!Dn(e)&&t&&Jr(t))return[Zr(t).query];{let e=[];return t&&(e=e.concat(Yr(t).map((e=>e.query)))),zt(n,((t,n)=>{e=e.concat(n)})),e}}));for(let n=0;n<t.length;++n){const i=t[n];e.listenProvider_.stopListening(gs(i),ds(e,i))}}return o}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t,n))}return h}function as(e,t,n){const i=e.pendingWriteTree_,r=e.syncPointTree_.findOnPath(t,((e,n)=>{const i=Kr(n,On(e,t));if(i)return i}));return _r(i,t,r,n,!0)}function ls(e,t){return cs(t,e.syncPointTree_,null,hr(e.pendingWriteTree_,En()))}function cs(e,t,n,i){if(Dn(e.path))return hs(e,t,n,i);{const r=t.get(En());null==n&&null!=r&&(n=Kr(r,En()));let s=[];const o=Tn(e.path),a=e.operationForChild(o),l=t.children.get(o);if(l&&a){const e=n?n.getImmediateChild(o):null,t=wr(i,o);s=s.concat(cs(a,l,e,t))}return r&&(s=s.concat(Wr(r,e,i,n))),s}}function hs(e,t,n,i){const r=t.get(En());null==n&&null!=r&&(n=Kr(r,En()));let s=[];return t.children.inorderTraversal(((t,r)=>{const o=n?n.getImmediateChild(t):null,a=wr(i,t),l=e.operationForChild(t);l&&(s=s.concat(hs(l,r,o,a)))})),r&&(s=s.concat(Wr(r,e,i,n))),s}function us(e,t){const n=t.query,i=ds(e,n);return{hashFn:()=>{const e=function(e){return e.viewCache_.serverCache.getNode()}(t)||pi.EMPTY_NODE;return e.hash()},onComplete:t=>{if("ok"===t)return i?function(e,t,n){const i=fs(e,n);if(i){const n=_s(i),r=n.path,s=n.queryId,o=On(r,t);return ms(e,r,new Ui(ji(s),o))}return[]}(e,n._path,i):function(e,t){return ls(e,new Ui({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t))}(e,n._path);{const i=function(e,t){let n="Unknown Error";"too_big"===e?n="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"===e?n="Client doesn't have permission to access the desired data.":"unavailable"===e&&(n="The service is unavailable");const i=new Error(e+" at "+t._path.toString()+": "+n);return i.code=e.toUpperCase(),i}(t,n);return rs(e,n,null,i)}}}}function ds(e,t){const n=ps(t);return e.queryToTagMap.get(n)}function ps(e){return e._path.toString()+"$"+e._queryIdentifier}function fs(e,t){return e.tagToQueryMap.get(t)}function _s(e){const t=e.indexOf("$");return I(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new In(e.substr(0,t))}}function ms(e,t,n){const i=e.syncPointTree_.get(t);I(i,"Missing sync point for query tag that we're tracking");return Wr(i,n,hr(e.pendingWriteTree_,t),null)}function gs(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new(I(Br,"Reference.ts has not been loaded"),Br)(e._repo,e._path):e}class ys{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new ys(t)}node(){return this.node_}}class vs{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=Rn(this.path_,e);return new vs(this.syncTree_,t)}node(){return as(this.syncTree_,this.path_)}}const bs=function(e){return(e=e||{}).timestamp=e.timestamp||(new Date).getTime(),e},Cs=function(e,t,n){return e&&"object"==typeof e?(I(".sv"in e,"Unexpected leaf node or priority contents"),"string"==typeof e[".sv"]?ws(e[".sv"],t,n):"object"==typeof e[".sv"]?Is(e[".sv"],t):void I(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},ws=function(e,t,n){if("timestamp"===e)return n.timestamp;I(!1,"Unexpected server value: "+e)},Is=function(e,t,n){e.hasOwnProperty("increment")||I(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const i=e.increment;"number"!=typeof i&&I(!1,"Unexpected increment value: "+i);const r=t.node();if(I(null!=r,"Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return i;const s=r.getValue();return"number"!=typeof s?i:s+i},Es=function(e,t,n,i){return Ss(t,new vs(n,e),i)},Ts=function(e,t,n){return Ss(e,new ys(t),n)};function Ss(e,t,n){const i=e.getPriority().val(),r=Cs(i,t.getImmediateChild(".priority"),n);let s;if(e.isLeafNode()){const i=e,s=Cs(i.getValue(),t,n);return s!==i.getValue()||r!==i.getPriority().val()?new ri(s,mi(r)):e}{const i=e;return s=i,r!==i.getPriority().val()&&(s=s.updatePriority(new ri(r))),i.forEachChild(si,((e,i)=>{const r=Ss(i,t.getImmediateChild(e),n);r!==i&&(s=s.updateImmediateChild(e,r))})),s}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function xs(e,t){let n=t instanceof In?t:new In(t),i=e,r=Tn(n);for(;null!==r;){const e=J(i.node.children,r)||{children:{},childCount:0};i=new ks(r,i,e),n=kn(n),r=Tn(n)}return i}function Ns(e){return e.node.value}function Ps(e,t){e.node.value=t,Ms(e)}function Rs(e){return e.node.childCount>0}function Ds(e,t){zt(e.node.children,((n,i)=>{t(new ks(n,e,i))}))}function Os(e,t,n,i){n&&!i&&t(e),Ds(e,(e=>{Os(e,t,!0,i)})),n&&i&&t(e)}function As(e){return new In(null===e.parent?e.name:As(e.parent)+"/"+e.name)}function Ms(e){null!==e.parent&&function(e,t,n){const i=function(e){return void 0===Ns(e)&&!Rs(e)}(n),r=Q(e.node.children,t);i&&r?(delete e.node.children[t],e.node.childCount--,Ms(e)):i||r||(e.node.children[t]=n.node,e.node.childCount++,Ms(e))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e.parent,e.name,e)}const Ls=/[\[\].#$\/\u0000-\u001F\u007F]/,Fs=/[\[\].#$\u0000-\u001F\u007F]/,js=10485760,qs=function(e){return"string"==typeof e&&0!==e.length&&!Ls.test(e)},Us=function(e){return"string"==typeof e&&0!==e.length&&!Fs.test(e)},Bs=function(e,t,n){const i=n instanceof In?new Ln(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+jn(i));if("function"==typeof t)throw new Error(e+"contains a function "+jn(i)+" with contents = "+t.toString());if(At(t))throw new Error(e+"contains "+t.toString()+" "+jn(i));if("string"==typeof t&&t.length>3495253.3333333335&&oe(t)>js)throw new Error(e+"contains a string greater than "+js+" utf8 bytes "+jn(i)+" ('"+t.substring(0,50)+"...')");if(t&&"object"==typeof t){let n=!1,r=!1;if(zt(t,((t,s)=>{if(".value"===t)n=!0;else if(".priority"!==t&&".sv"!==t&&(r=!0,!qs(t)))throw new Error(e+" contains an invalid key ("+t+") "+jn(i)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');var o,a;a=t,(o=i).parts_.length>0&&(o.byteLength_+=1),o.parts_.push(a),o.byteLength_+=oe(a),Fn(o),Bs(e,s,i),function(e){const t=e.parts_.pop();e.byteLength_-=oe(t),e.parts_.length>0&&(e.byteLength_-=1)}(i)})),n&&r)throw new Error(e+' contains ".value" child '+jn(i)+" in addition to actual children.")}},zs=function(e,t,n,i){if(!(i&&void 0===n||Us(n)))throw new Error(re(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},Ws=function(e,t,n,i){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),zs(e,t,n,i)},Hs=function(e,t){const n=t.path.toString();if("string"!=typeof t.repoInfo.host||0===t.repoInfo.host.length||!qs(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),Us(e)}(n))throw new Error(re(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $s{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Vs(e,t){let n=null;for(let i=0;i<t.length;i++){const r=t[i],s=r.getPath();null===n||An(s,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:s}),n.events.push(r)}n&&e.eventLists_.push(n)}function Ys(e,t,n){Vs(e,n),Gs(e,(e=>An(e,t)))}function Ks(e,t,n){Vs(e,n),Gs(e,(e=>Mn(e,t)||Mn(t,e)))}function Gs(e,t){e.recursionDepth_++;let n=!0;for(let i=0;i<e.eventLists_.length;i++){const r=e.eventLists_[i];if(r){t(r.path)?(Qs(e.eventLists_[i]),e.eventLists_[i]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function Qs(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(null!==n){e.events[t]=null;const i=n.getEventRunner();St&&Nt("event: "+n.toString()),Vt(i)}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Js="repo_interrupt",Zs=25;class Xs{constructor(e,t,n,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new $s,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ri(),this.transactionQueueTree_=new ks,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function eo(e,t,n){if(e.stats_=cn(e.repoInfo_),e.forceRestClient_||Yt())e.server_=new Ni(e.repoInfo_,((t,n,i,r)=>{io(e,t,n,i,r)}),e.authTokenProvider_,e.appCheckProvider_),setTimeout((()=>ro(e,!0)),0);else{if(null!=n){if("object"!=typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{V(n)}catch(e){throw new Error("Invalid authOverride provided: "+e)}}e.persistentConnection_=new Bn(e.repoInfo_,t,((t,n,i,r)=>{io(e,t,n,i,r)}),(t=>{ro(e,t)}),(t=>{!function(e,t){zt(t,((t,n)=>{so(e,t,n)}))}(e,t)}),e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener((t=>{e.server_.refreshAuthToken(t)})),e.appCheckProvider_.addTokenChangeListener((t=>{e.server_.refreshAppCheckToken(t.token)})),e.statsReporter_=function(e,t){const n=e.toString();return ln[n]||(ln[n]=t()),ln[n]}(e.repoInfo_,(()=>new Mi(e.stats_,e.server_))),e.infoData_=new Pi,e.infoSyncTree_=new es({startListening:(t,n,i,r)=>{let s=[];const o=e.infoData_.getNode(t._path);return o.isEmpty()||(s=is(e.infoSyncTree_,t._path,o),setTimeout((()=>{r("ok")}),0)),s},stopListening:()=>{}}),so(e,"connected",!1),e.serverSyncTree_=new es({startListening:(t,n,i,r)=>(e.server_.listen(t,i,n,((n,i)=>{const s=r(n,i);Ks(e.eventQueue_,t._path,s)})),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}function to(e){const t=e.infoData_.getNode(new In(".info/serverTimeOffset")).val()||0;return(new Date).getTime()+t}function no(e){return bs({timestamp:to(e)})}function io(e,t,n,i,r){e.dataUpdateCount++;const s=new In(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let o=[];if(r)if(i){const t=X(n,(e=>mi(e)));o=function(e,t,n,i){const r=fs(e,i);if(r){const i=_s(r),s=i.path,o=i.queryId,a=On(s,t),l=Zi.fromObject(n);return ms(e,s,new zi(ji(o),a,l))}return[]}(e.serverSyncTree_,s,t,r)}else{const t=mi(n);o=ss(e.serverSyncTree_,s,t,r)}else if(i){const t=X(n,(e=>mi(e)));o=function(e,t,n){const i=Zi.fromObject(n);return ls(e,new zi({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,i))}(e.serverSyncTree_,s,t)}else{const t=mi(n);o=is(e.serverSyncTree_,s,t)}let a=s;o.length>0&&(a=po(e,s)),Ks(e.eventQueue_,a,o)}function ro(e,t){so(e,"connected",t),!1===t&&function(e){co(e,"onDisconnectEvents");const t=no(e),n=Ri();Oi(e.onDisconnect_,En(),((i,r)=>{const s=Es(i,r,e.serverSyncTree_,t);Di(n,i,s)}));let i=[];Oi(n,En(),((t,n)=>{i=i.concat(is(e.serverSyncTree_,t,n));const r=yo(e,t);po(e,r)})),e.onDisconnect_=Ri(),Ks(e.eventQueue_,En(),i)}(e)}function so(e,t,n){const i=new In("/.info/"+t),r=mi(n);e.infoData_.updateSnapshot(i,r);const s=is(e.infoSyncTree_,i,r);Ks(e.eventQueue_,i,s)}function oo(e){return e.nextWriteId_++}function ao(e,t,n){let i;i=".info"===Tn(t._path)?rs(e.infoSyncTree_,t,n):rs(e.serverSyncTree_,t,n),Ys(e.eventQueue_,t._path,i)}function lo(e){e.persistentConnection_&&e.persistentConnection_.interrupt(Js)}function co(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),Nt(n,...t)}function ho(e,t,n){return as(e.serverSyncTree_,t,n)||pi.EMPTY_NODE}function uo(e,t=e.transactionQueueTree_){if(t||go(e,t),Ns(t)){const n=_o(e,t);I(n.length>0,"Sending zero length transaction queue");n.every((e=>0===e.status))&&function(e,t,n){const i=n.map((e=>e.currentWriteId)),r=ho(e,t,i);let s=r;const o=r.hash();for(let e=0;e<n.length;e++){const i=n[e];I(0===i.status,"tryToSendTransactionQueue_: items in queue should all be run."),i.status=1,i.retryCount++;const r=On(t,i.path);s=s.updateChild(r,i.currentOutputSnapshotRaw)}const a=s.val(!0),l=t;e.server_.put(l.toString(),a,(i=>{co(e,"transaction put response",{path:l.toString(),status:i});let r=[];if("ok"===i){const i=[];for(let t=0;t<n.length;t++)n[t].status=2,r=r.concat(ns(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&i.push((()=>n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved))),n[t].unwatcher();go(e,xs(e.transactionQueueTree_,t)),uo(e,e.transactionQueueTree_),Ks(e.eventQueue_,t,r);for(let e=0;e<i.length;e++)Vt(i[e])}else{if("datastale"===i)for(let e=0;e<n.length;e++)3===n[e].status?n[e].status=4:n[e].status=0;else{Ot("transaction at "+l.toString()+" failed: "+i);for(let e=0;e<n.length;e++)n[e].status=4,n[e].abortReason=i}po(e,t)}}),o)}(e,As(t),n)}else Rs(t)&&Ds(t,(t=>{uo(e,t)}))}function po(e,t){const n=fo(e,t),i=As(n);return function(e,t,n){if(0===t.length)return;const i=[];let r=[];const s=t.filter((e=>0===e.status)),o=s.map((e=>e.currentWriteId));for(let s=0;s<t.length;s++){const l=t[s],c=On(n,l.path);let h,u=!1;if(I(null!==c,"rerunTransactionsUnderNode_: relativePath should not be null."),4===l.status)u=!0,h=l.abortReason,r=r.concat(ns(e.serverSyncTree_,l.currentWriteId,!0));else if(0===l.status)if(l.retryCount>=Zs)u=!0,h="maxretry",r=r.concat(ns(e.serverSyncTree_,l.currentWriteId,!0));else{const n=ho(e,l.path,o);l.currentInputSnapshot=n;const i=t[s].update(n.val());if(void 0!==i){Bs("transaction failed: Data returned ",i,l.path);let t=mi(i);"object"==typeof i&&null!=i&&Q(i,".priority")||(t=t.updatePriority(n.getPriority()));const s=l.currentWriteId,a=no(e),c=Ts(t,n,a);l.currentOutputSnapshotRaw=t,l.currentOutputSnapshotResolved=c,l.currentWriteId=oo(e),o.splice(o.indexOf(s),1),r=r.concat(ts(e.serverSyncTree_,l.path,c,l.currentWriteId,l.applyLocally)),r=r.concat(ns(e.serverSyncTree_,s,!0))}else u=!0,h="nodata",r=r.concat(ns(e.serverSyncTree_,l.currentWriteId,!0))}Ks(e.eventQueue_,n,r),r=[],u&&(t[s].status=2,a=t[s].unwatcher,setTimeout(a,Math.floor(0)),t[s].onComplete&&("nodata"===h?i.push((()=>t[s].onComplete(null,!1,t[s].currentInputSnapshot))):i.push((()=>t[s].onComplete(new Error(h),!1,null)))))}var a;go(e,e.transactionQueueTree_);for(let e=0;e<i.length;e++)Vt(i[e]);uo(e,e.transactionQueueTree_)}(e,_o(e,n),i),i}function fo(e,t){let n,i=e.transactionQueueTree_;for(n=Tn(t);null!==n&&void 0===Ns(i);)i=xs(i,n),n=Tn(t=kn(t));return i}function _o(e,t){const n=[];return mo(e,t,n),n.sort(((e,t)=>e.order-t.order)),n}function mo(e,t,n){const i=Ns(t);if(i)for(let e=0;e<i.length;e++)n.push(i[e]);Ds(t,(t=>{mo(e,t,n)}))}function go(e,t){const n=Ns(t);if(n){let e=0;for(let t=0;t<n.length;t++)2!==n[t].status&&(n[e]=n[t],e++);n.length=e,Ps(t,n.length>0?n:void 0)}Ds(t,(t=>{go(e,t)}))}function yo(e,t){const n=As(fo(e,t)),i=xs(e.transactionQueueTree_,t);return function(e,t,n){let i=n?e:e.parent;for(;null!==i;){if(t(i))return!0;i=i.parent}}(i,(t=>{vo(e,t)})),vo(e,i),Os(i,(t=>{vo(e,t)})),n}function vo(e,t){const n=Ns(t);if(n){const i=[];let r=[],s=-1;for(let t=0;t<n.length;t++)3===n[t].status||(1===n[t].status?(I(s===t-1,"All SENT items should be at beginning of queue."),s=t,n[t].status=3,n[t].abortReason="set"):(I(0===n[t].status,"Unexpected transaction status in abort"),n[t].unwatcher(),r=r.concat(ns(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&i.push(n[t].onComplete.bind(null,new Error("set"),!1,null))));-1===s?Ps(t,void 0):n.length=s+1,Ks(e.eventQueue_,As(t),r);for(let e=0;e<i.length;e++)Vt(i[e])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bo=function(e,t){const n=Co(e),i=n.namespace;"firebase.com"===n.domain&&Dt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),i&&"undefined"!==i||"localhost"===n.domain||Dt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&Ot("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");const r="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new rn(n.host,n.secure,i,r,t,"",i!==n.subdomain),path:new In(n.pathString)}},Co=function(e){let t="",n="",i="",r="",s="",o=!0,a="https",l=443;if("string"==typeof e){let c=e.indexOf("//");c>=0&&(a=e.substring(0,c-1),e=e.substring(c+2));let h=e.indexOf("/");-1===h&&(h=e.length);let u=e.indexOf("?");-1===u&&(u=e.length),t=e.substring(0,Math.min(h,u)),h<u&&(r=function(e){let t="";const n=e.split("/");for(let e=0;e<n.length;e++)if(n[e].length>0){let i=n[e];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch(e){}t+="/"+i}return t}(e.substring(h,u)));const d=function(e){const t={};"?"===e.charAt(0)&&(e=e.substring(1));for(const n of e.split("&")){if(0===n.length)continue;const i=n.split("=");2===i.length?t[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):Ot(`Invalid query segment '${n}' in query '${e}'`)}return t}(e.substring(Math.min(e.length,u)));c=t.indexOf(":"),c>=0?(o="https"===a||"wss"===a,l=parseInt(t.substring(c+1),10)):c=t.length;const p=t.slice(0,c);if("localhost"===p.toLowerCase())n="localhost";else if(p.split(".").length<=2)n=p;else{const e=t.indexOf(".");i=t.substring(0,e).toLowerCase(),n=t.substring(e+1),s=i}"ns"in d&&(s=d.ns)}return{host:t,port:l,domain:n,subdomain:i,secure:o,scheme:a,pathString:r,namespace:s}},wo="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz";!function(){let e=0;const t=[]}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Io{constructor(e,t,n,i){this.eventType=e,this.eventRegistration=t,this.snapshot=n,this.prevName=i}getPath(){const e=this.snapshot.ref;return"value"===this.eventType?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+V(this.snapshot.exportVal())}}class Eo{constructor(e,t,n){this.eventRegistration=e,this.error=t,this.path=n}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return I(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||void 0!==this.snapshotCallback.userCallback&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class So{constructor(e,t,n,i){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=i}get key(){return Dn(this._path)?null:xn(this._path)}get ref(){return new ko(this._repo,this._path)}get _queryIdentifier(){const e=xi(this._queryParams),t=Ut(e);return"{}"===t?"default":t}get _queryObject(){return xi(this._queryParams)}isEqual(e){if(!((e=ae(e))instanceof So))return!1;const t=this._repo===e._repo,n=An(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&n&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+function(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}(this._path)}}class ko extends So{constructor(e,t){super(e,t,new Si,!1)}get parent(){const e=Pn(this._path);return null===e?null:new ko(this._repo,e)}get root(){let e=this;for(;null!==e.parent;)e=e.parent;return e}}class xo{constructor(e,t,n){this._node=e,this.ref=t,this._index=n}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new In(e),n=Po(this.ref,e);return new xo(this._node.getChild(t),n,si)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){if(this._node.isLeafNode())return!1;return!!this._node.forEachChild(this._index,((t,n)=>e(new xo(n,Po(this.ref,t),si))))}hasChild(e){const t=new In(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return!this._node.isLeafNode()&&!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function No(e,t){return(e=ae(e))._checkNotDeleted("ref"),void 0!==t?Po(e._root,t):e._root}function Po(e,t){return null===Tn((e=ae(e))._path)?Ws("child","path",t,!1):zs("child","path",t,!1),new ko(e._repo,Rn(e._path,t))}class Ro{constructor(e){this.callbackContext=e}respondsTo(e){return"value"===e}createEvent(e,t){const n=t._queryParams.getIndex();return new Io("value",this,new xo(e.snapshotNode,new ko(t._repo,t._path),n))}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Eo(this,e,t):null}matches(e){return e instanceof Ro&&(!e.callbackContext||!this.callbackContext||e.callbackContext.matches(this.callbackContext))}hasAnyCallback(){return null!==this.callbackContext}}class Do{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t="children_added"===e?"child_added":e;return t="children_removed"===t?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Eo(this,e,t):null}createEvent(e,t){I(null!=e.childName,"Child events should have a childName.");const n=Po(new ko(t._repo,t._path),e.childName),i=t._queryParams.getIndex();return new Io(e.type,this,new xo(e.snapshotNode,n,i),e.prevName)}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Do&&(this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)))}hasAnyCallback(){return!!this.callbackContext}}function Oo(e,t,n,i,r){let s;if("object"==typeof i&&(s=void 0,r=i),"function"==typeof i&&(s=i),r&&r.onlyOnce){const t=n,i=(n,i)=>{ao(e._repo,e,a),t(n,i)};i.userCallback=n.userCallback,i.context=n.context,n=i}const o=new To(n,s||void 0),a="value"===t?new Ro(o):new Do(t,o);return function(e,t,n){let i;i=".info"===Tn(t._path)?os(e.infoSyncTree_,t,n):os(e.serverSyncTree_,t,n),Ys(e.eventQueue_,t._path,i)}(e._repo,e,a),()=>ao(e._repo,e,a)}function Ao(e,t,n,i){return Oo(e,"value",t,n,i)}!function(e){I(!Ur,"__referenceConstructor has already been defined"),Ur=e}(ko),function(e){I(!Br,"__referenceConstructor has already been defined"),Br=e}(ko);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Mo="FIREBASE_DATABASE_EMULATOR_HOST",Lo={};let Fo=!1;function jo(e,t,n,i,r){let s=i||e.options.databaseURL;void 0===s&&(e.options.projectId||Dt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Nt("Using default host for project ",e.options.projectId),s=`${e.options.projectId}-default-rtdb.firebaseio.com`);let o,a,l=bo(s,r),h=l.repoInfo;void 0!==c&&c.env&&(a=c.env[Mo]),a?(o=!0,s=`http://${a}?ns=${h.namespace}`,l=bo(s,r),h=l.repoInfo):o=!l.repoInfo.secure;const u=r&&o?new Jt(Jt.OWNER):new Qt(e.name,e.options,t);Hs("Invalid Firebase Database URL",l),Dn(l.path)||Dt("Database URL must point to the root of a Firebase Database (not including a child path).");const d=function(e,t,n,i){let r=Lo[t.name];r||(r={},Lo[t.name]=r);let s=r[e.toURLString()];s&&Dt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call.");return s=new Xs(e,Fo,n,i),r[e.toURLString()]=s,s}(h,e,u,new Gt(e.name,n));return new qo(d,e)}class qo{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(eo(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new ko(this._repo,En())),this._rootInternal}_delete(){return null!==this._rootInternal&&(!function(e,t){const n=Lo[t];n&&n[e.key]===e||Dt(`Database ${t}(${e.repoInfo_}) has already been deleted.`),lo(e),delete n[e.key]}(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&Dt("Cannot call "+e+" on a deleted database.")}}Bn.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},Bn.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};!
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){mt=Je,Ye(new le("database",((e,{instanceIdentifier:t})=>jo(e.getProvider("app").getImmediate(),e.getProvider("auth-internal"),e.getProvider("app-check-internal"),t)),"PUBLIC").setMultipleInstances(!0)),et(ft,_t,e),et(ft,_t,"esm2017")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
et("firebase","9.17.1","app");Ze({apiKey:"ODU5YdhqH0c9vwPmMyHhK46h1VuNuVgn7zG1GZZh",authDomain:"cap3-mod6-apx.firebaseapp.com",databaseURL:"https://cap3-mod6-apx-default-rtdb.firebaseio.com",projectId:"cap3-mod6-apx"});const Uo=function(e=Xe(),t){const n=Ke(e,"database").getImmediate({identifier:t});if(!n._instanceStarted){const e=A("database");e&&function(e,t,n,i={}){e=ae(e),e._checkNotDeleted("useEmulator"),e._instanceStarted&&Dt("Cannot call useEmulator() after instance has already been initialized.");const r=e._repoInternal;let s;if(r.repoInfo_.nodeAdmin)i.mockUserToken&&Dt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new Jt(Jt.OWNER);else if(i.mockUserToken){const t="string"==typeof i.mockUserToken?i.mockUserToken:F(i.mockUserToken,e.app.options.projectId);s=new Jt(t)}!function(e,t,n,i){e.repoInfo_=new rn(`${t}:${n}`,!1,e.repoInfo_.namespace,e.repoInfo_.webSocketOnly,e.repoInfo_.nodeAdmin,e.repoInfo_.persistenceKey,e.repoInfo_.includeNamespaceInQueryParams,!0),i&&(e.authTokenProvider_=i)}(r,t,n,s)}(n,...e)}return n}();var Bo,zo={};zo=function(e,t){for(var n=-1,i=null==e?0:e.length,r=Array(i);++n<i;)r[n]=t(e[n],n,e);return r};var Wo,Ho={},$o={},Vo={},Yo={},Ko={};Wo=function(){this.__data__=[],this.size=0};var Go,Qo={},Jo={};Jo=function(e,t){return e===t||e!=e&&t!=t},Qo=function(e,t){for(var n=e.length;n--;)if(Jo(e[n][0],t))return n;return-1};var Zo=Array.prototype.splice;Go=function(e){var t=this.__data__,n=Qo(t,e);return!(n<0)&&(n==t.length-1?t.pop():Zo.call(t,n,1),--this.size,!0)};var Xo;Xo=function(e){var t=this.__data__,n=Qo(t,e);return n<0?void 0:t[n][1]};var ea;ea=function(e){return Qo(this.__data__,e)>-1};var ta;function na(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var i=e[t];this.set(i[0],i[1])}}ta=function(e,t){var n=this.__data__,i=Qo(n,e);return i<0?(++this.size,n.push([e,t])):n[i][1]=t,this},na.prototype.clear=Wo,na.prototype.delete=Go,na.prototype.get=Xo,na.prototype.has=ea,na.prototype.set=ta,Ko=na;var ia;ia=function(){this.__data__=new Ko,this.size=0};var ra;ra=function(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n};var sa;sa=function(e){return this.__data__.get(e)};var oa;oa=function(e){return this.__data__.has(e)};var aa,la,ca={},ha={},ua={},da={},pa={};la=r("23YZo").Symbol;var fa={},_a=Object.prototype,ma=_a.hasOwnProperty,ga=_a.toString,ya=la?la.toStringTag:void 0;fa=function(e){var t=ma.call(e,ya),n=e[ya];try{e[ya]=void 0;var i=!0}catch(e){}var r=ga.call(e);return i&&(t?e[ya]=n:delete e[ya]),r};var va={},ba=Object.prototype.toString;va=function(e){return ba.call(e)};var Ca="[object Null]",wa="[object Undefined]",Ia=la?la.toStringTag:void 0;pa=function(e){return null==e?void 0===e?wa:Ca:Ia&&Ia in Object(e)?fa(e):va(e)};var Ea={};Ea=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)};var Ta="[object AsyncFunction]",Sa="[object Function]",ka="[object GeneratorFunction]",xa="[object Proxy]";da=function(e){if(!Ea(e))return!1;var t=pa(e);return t==Sa||t==ka||t==Ta||t==xa};var Na,Pa,Ra={},Da=r("23YZo")["__core-js_shared__"],Oa=(Pa=/[^.]+$/.exec((Na=Da)&&Na.keys&&Na.keys.IE_PROTO||""))?"Symbol(src)_1."+Pa:"";Ra=function(e){return!!Oa&&Oa in e};var Aa={},Ma=Function.prototype.toString;Aa=function(e){if(null!=e){try{return Ma.call(e)}catch(e){}try{return e+""}catch(e){}}return""};var La=/^\[object .+?Constructor\]$/,Fa=Function.prototype,ja=Object.prototype,qa=Fa.toString,Ua=ja.hasOwnProperty,Ba=RegExp("^"+qa.call(Ua).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");ua=function(e){return!(!Ea(e)||Ra(e))&&(da(e)?Ba:La).test(Aa(e))};var za={};za=function(e,t){return null==e?void 0:e[t]};var Wa=(ha=function(e,t){var n=za(e,t);return ua(n)?n:void 0})(r("23YZo"),"Map");ca=Wa;var Ha,$a,Va={},Ya={},Ka={},Ga=ha(Object,"create");Ka=Ga,$a=function(){this.__data__=Ka?Ka(null):{},this.size=0};var Qa;Qa=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t};var Ja,Za="__lodash_hash_undefined__",Xa=Object.prototype.hasOwnProperty;Ja=function(e){var t=this.__data__;if(Ka){var n=t[e];return n===Za?void 0:n}return Xa.call(t,e)?t[e]:void 0};var el,tl=Object.prototype.hasOwnProperty;el=function(e){var t=this.__data__;return Ka?void 0!==t[e]:tl.call(t,e)};var nl,il="__lodash_hash_undefined__";function rl(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var i=e[t];this.set(i[0],i[1])}}nl=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=Ka&&void 0===t?il:t,this},rl.prototype.clear=$a,rl.prototype.delete=Qa,rl.prototype.get=Ja,rl.prototype.has=el,rl.prototype.set=nl,Ya=rl,Ha=function(){this.size=0,this.__data__={hash:new Ya,map:new(ca||Ko),string:new Ya}};var sl,ol={},al={};al=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e},ol=function(e,t){var n=e.__data__;return al(t)?n["string"==typeof t?"string":"hash"]:n.map},sl=function(e){var t=ol(this,e).delete(e);return this.size-=t?1:0,t};var ll;ll=function(e){return ol(this,e).get(e)};var cl;cl=function(e){return ol(this,e).has(e)};var hl;function ul(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var i=e[t];this.set(i[0],i[1])}}hl=function(e,t){var n=ol(this,e),i=n.size;return n.set(e,t),this.size+=n.size==i?0:1,this},ul.prototype.clear=Ha,ul.prototype.delete=sl,ul.prototype.get=ll,ul.prototype.has=cl,ul.prototype.set=hl,Va=ul;var dl=200;function pl(e){var t=this.__data__=new Ko(e);this.size=t.size}aa=function(e,t){var n=this.__data__;if(n instanceof Ko){var i=n.__data__;if(!ca||i.length<dl-1)return i.push([e,t]),this.size=++n.size,this;n=this.__data__=new Va(i)}return n.set(e,t),this.size=n.size,this},pl.prototype.clear=ia,pl.prototype.delete=ra,pl.prototype.get=sa,pl.prototype.has=oa,pl.prototype.set=aa,Yo=pl;var fl,_l={},ml={},gl={},yl={},vl="__lodash_hash_undefined__";fl=function(e){return this.__data__.set(e,vl),this};var bl;function Cl(e){var t=-1,n=null==e?0:e.length;for(this.__data__=new Va;++t<n;)this.add(e[t])}bl=function(e){return this.__data__.has(e)},Cl.prototype.add=Cl.prototype.push=fl,Cl.prototype.has=bl,yl=Cl;var wl={};wl=function(e,t){for(var n=-1,i=null==e?0:e.length;++n<i;)if(t(e[n],n,e))return!0;return!1};var Il={};Il=function(e,t){return e.has(t)};var El=1,Tl=2;gl=function(e,t,n,i,r,s){var o=n&El,a=e.length,l=t.length;if(a!=l&&!(o&&l>a))return!1;var c=s.get(e),h=s.get(t);if(c&&h)return c==t&&h==e;var u=-1,d=!0,p=n&Tl?new yl:void 0;for(s.set(e,t),s.set(t,e);++u<a;){var f=e[u],_=t[u];if(i)var m=o?i(_,f,u,t,e,s):i(f,_,u,e,t,s);if(void 0!==m){if(m)continue;d=!1;break}if(p){if(!wl(t,(function(e,t){if(!Il(p,t)&&(f===e||r(f,e,n,i,s)))return p.push(t)}))){d=!1;break}}else if(f!==_&&!r(f,_,n,i,s)){d=!1;break}}return s.delete(e),s.delete(t),d};var Sl={},kl={},xl=r("23YZo").Uint8Array;kl=xl;var Nl={};Nl=function(e){var t=-1,n=Array(e.size);return e.forEach((function(e,i){n[++t]=[i,e]})),n};var Pl={};Pl=function(e){var t=-1,n=Array(e.size);return e.forEach((function(e){n[++t]=e})),n};var Rl=1,Dl=2,Ol="[object Boolean]",Al="[object Date]",Ml="[object Error]",Ll="[object Map]",Fl="[object Number]",jl="[object RegExp]",ql="[object Set]",Ul="[object String]",Bl="[object Symbol]",zl="[object ArrayBuffer]",Wl="[object DataView]",Hl=la?la.prototype:void 0,$l=Hl?Hl.valueOf:void 0;Sl=function(e,t,n,i,r,s,o){switch(n){case Wl:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case zl:return!(e.byteLength!=t.byteLength||!s(new kl(e),new kl(t)));case Ol:case Al:case Fl:return Jo(+e,+t);case Ml:return e.name==t.name&&e.message==t.message;case jl:case Ul:return e==t+"";case Ll:var a=Nl;case ql:var l=i&Rl;if(a||(a=Pl),e.size!=t.size&&!l)return!1;var c=o.get(e);if(c)return c==t;i|=Dl,o.set(e,t);var h=gl(a(e),a(t),i,r,s,o);return o.delete(e),h;case Bl:if($l)return $l.call(e)==$l.call(t)}return!1};var Vl={},Yl={},Kl={},Gl={};Gl=function(e,t){for(var n=-1,i=t.length,r=e.length;++n<i;)e[r+n]=t[n];return e};var Ql={},Jl=Array.isArray;Ql=Jl,Kl=function(e,t,n){var i=t(e);return Ql(e)?i:Gl(i,n(e))};var Zl={},Xl={};Xl=function(e,t){for(var n=-1,i=null==e?0:e.length,r=0,s=[];++n<i;){var o=e[n];t(o,n,e)&&(s[r++]=o)}return s};var ec;ec=function(){return[]};var tc=Object.prototype.propertyIsEnumerable,nc=Object.getOwnPropertySymbols;Zl=nc?function(e){return null==e?[]:(e=Object(e),Xl(nc(e),(function(t){return tc.call(e,t)})))}:ec;var ic={},rc={},sc={};sc=function(e,t){for(var n=-1,i=Array(e);++n<e;)i[n]=t(n);return i};var oc={},ac={},lc={};lc=function(e){return null!=e&&"object"==typeof e};var cc="[object Arguments]";ac=function(e){return lc(e)&&pa(e)==cc};var hc=Object.prototype,uc=hc.hasOwnProperty,dc=hc.propertyIsEnumerable,pc=ac(function(){return arguments}())?ac:function(e){return lc(e)&&uc.call(e,"callee")&&!dc.call(e,"callee")};oc=pc;var fc=r("f504n"),_c={},mc=9007199254740991,gc=/^(?:0|[1-9]\d*)$/;_c=function(e,t){var n=typeof e;return!!(t=null==t?mc:t)&&("number"==n||"symbol"!=n&&gc.test(e))&&e>-1&&e%1==0&&e<t};var yc,vc={},bc={},Cc=9007199254740991;bc=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=Cc};var wc={};wc["[object Float32Array]"]=wc["[object Float64Array]"]=wc["[object Int8Array]"]=wc["[object Int16Array]"]=wc["[object Int32Array]"]=wc["[object Uint8Array]"]=wc["[object Uint8ClampedArray]"]=wc["[object Uint16Array]"]=wc["[object Uint32Array]"]=!0,wc["[object Arguments]"]=wc["[object Array]"]=wc["[object ArrayBuffer]"]=wc["[object Boolean]"]=wc["[object DataView]"]=wc["[object Date]"]=wc["[object Error]"]=wc["[object Function]"]=wc["[object Map]"]=wc["[object Number]"]=wc["[object Object]"]=wc["[object RegExp]"]=wc["[object Set]"]=wc["[object String]"]=wc["[object WeakMap]"]=!1,yc=function(e){return lc(e)&&bc(e.length)&&!!wc[pa(e)]};var Ic={};Ic=function(e){return function(t){return e(t)}};var Ec=r("jIny1"),Tc=Ec&&Ec.isTypedArray,Sc=Tc?Ic(Tc):yc;vc=Sc;var kc=Object.prototype.hasOwnProperty;rc=function(e,t){var n=Ql(e),i=!n&&oc(e),r=!n&&!i&&fc(e),s=!n&&!i&&!r&&vc(e),o=n||i||r||s,a=o?sc(e.length,String):[],l=a.length;for(var c in e)!t&&!kc.call(e,c)||o&&("length"==c||r&&("offset"==c||"parent"==c)||s&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||_c(c,l))||a.push(c);return a};var xc={},Nc={},Pc=Object.prototype;Nc=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||Pc)};var Rc={};var Dc=function(e,t){return function(n){return e(t(n))}}(Object.keys,Object);Rc=Dc;var Oc=Object.prototype.hasOwnProperty;xc=function(e){if(!Nc(e))return Rc(e);var t=[];for(var n in Object(e))Oc.call(e,n)&&"constructor"!=n&&t.push(n);return t};var Ac={};Ac=function(e){return null!=e&&bc(e.length)&&!da(e)},ic=function(e){return Ac(e)?rc(e):xc(e)},Yl=function(e){return Kl(e,ic,Zl)};var Mc=1,Lc=Object.prototype.hasOwnProperty;Vl=function(e,t,n,i,r,s){var o=n&Mc,a=Yl(e),l=a.length;if(l!=Yl(t).length&&!o)return!1;for(var c=l;c--;){var h=a[c];if(!(o?h in t:Lc.call(t,h)))return!1}var u=s.get(e),d=s.get(t);if(u&&d)return u==t&&d==e;var p=!0;s.set(e,t),s.set(t,e);for(var f=o;++c<l;){var _=e[h=a[c]],m=t[h];if(i)var g=o?i(m,_,h,t,e,s):i(_,m,h,e,t,s);if(!(void 0===g?_===m||r(_,m,n,i,s):g)){p=!1;break}f||(f="constructor"==h)}if(p&&!f){var y=e.constructor,v=t.constructor;y==v||!("constructor"in e)||!("constructor"in t)||"function"==typeof y&&y instanceof y&&"function"==typeof v&&v instanceof v||(p=!1)}return s.delete(e),s.delete(t),p};var Fc={},jc={};jc=ha(r("23YZo"),"DataView");var qc={};qc=ha(r("23YZo"),"Promise");var Uc={};Uc=ha(r("23YZo"),"Set");var Bc={};Bc=ha(r("23YZo"),"WeakMap");var zc="[object Map]",Wc="[object Promise]",Hc="[object Set]",$c="[object WeakMap]",Vc="[object DataView]",Yc=Aa(jc),Kc=Aa(ca),Gc=Aa(qc),Qc=Aa(Uc),Jc=Aa(Bc),Zc=pa;(jc&&Zc(new jc(new ArrayBuffer(1)))!=Vc||ca&&Zc(new ca)!=zc||qc&&Zc(qc.resolve())!=Wc||Uc&&Zc(new Uc)!=Hc||Bc&&Zc(new Bc)!=$c)&&(Zc=function(e){var t=pa(e),n="[object Object]"==t?e.constructor:void 0,i=n?Aa(n):"";if(i)switch(i){case Yc:return Vc;case Kc:return zc;case Gc:return Wc;case Qc:return Hc;case Jc:return $c}return t}),Fc=Zc;fc=r("f504n");var Xc=1,eh="[object Arguments]",th="[object Array]",nh="[object Object]",ih=Object.prototype.hasOwnProperty;ml=function(e,t,n,i,r,s){var o=Ql(e),a=Ql(t),l=o?th:Fc(e),c=a?th:Fc(t),h=(l=l==eh?nh:l)==nh,u=(c=c==eh?nh:c)==nh,d=l==c;if(d&&fc(e)){if(!fc(t))return!1;o=!0,h=!1}if(d&&!h)return s||(s=new Yo),o||vc(e)?gl(e,t,n,i,r,s):Sl(e,t,l,n,i,r,s);if(!(n&Xc)){var p=h&&ih.call(e,"__wrapped__"),f=u&&ih.call(t,"__wrapped__");if(p||f){var _=p?e.value():e,m=f?t.value():t;return s||(s=new Yo),r(_,m,n,i,s)}}return!!d&&(s||(s=new Yo),Vl(e,t,n,i,r,s))},_l=function e(t,n,i,r,s){return t===n||(null==t||null==n||!lc(t)&&!lc(n)?t!=t&&n!=n:ml(t,n,i,r,e,s))};var rh=1,sh=2;Vo=function(e,t,n,i){var r=n.length,s=r,o=!i;if(null==e)return!s;for(e=Object(e);r--;){var a=n[r];if(o&&a[2]?a[1]!==e[a[0]]:!(a[0]in e))return!1}for(;++r<s;){var l=(a=n[r])[0],c=e[l],h=a[1];if(o&&a[2]){if(void 0===c&&!(l in e))return!1}else{var u=new Yo;if(i)var d=i(c,h,l,e,t,u);if(!(void 0===d?_l(h,c,rh|sh,i,u):d))return!1}}return!0};var oh={},ah={};ah=function(e){return e==e&&!Ea(e)},oh=function(e){for(var t=ic(e),n=t.length;n--;){var i=t[n],r=e[i];t[n]=[i,r,ah(r)]}return t};var lh={};lh=function(e,t){return function(n){return null!=n&&(n[e]===t&&(void 0!==t||e in Object(n)))}},$o=function(e){var t=oh(e);return 1==t.length&&t[0][2]?lh(t[0][0],t[0][1]):function(n){return n===e||Vo(n,e,t)}};var ch={},hh={},uh={},dh={},ph={},fh={},_h="[object Symbol]";fh=function(e){return"symbol"==typeof e||lc(e)&&pa(e)==_h};var mh=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,gh=/^\w*$/;ph=function(e,t){if(Ql(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!fh(e))||(gh.test(e)||!mh.test(e)||null!=t&&e in Object(t))};var yh={},vh={},bh="Expected a function";function Ch(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError(bh);var n=function(){var i=arguments,r=t?t.apply(this,i):i[0],s=n.cache;if(s.has(r))return s.get(r);var o=e.apply(this,i);return n.cache=s.set(r,o)||s,o};return n.cache=new(Ch.Cache||Va),n}Ch.Cache=Va,vh=Ch;var wh=500;var Ih=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Eh=/\\(\\)?/g,Th=function(e){var t=vh(e,(function(e){return n.size===wh&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(Ih,(function(e,n,i,r){t.push(i?r.replace(Eh,"$1"):n||e)})),t}));yh=Th;var Sh={},kh={},xh=1/0,Nh=la?la.prototype:void 0,Ph=Nh?Nh.toString:void 0;kh=function e(t){if("string"==typeof t)return t;if(Ql(t))return zo(t,e)+"";if(fh(t))return Ph?Ph.call(t):"";var n=t+"";return"0"==n&&1/t==-xh?"-0":n},Sh=function(e){return null==e?"":kh(e)},dh=function(e,t){return Ql(e)?e:ph(e,t)?[e]:yh(Sh(e))};var Rh={},Dh=1/0;Rh=function(e){if("string"==typeof e||fh(e))return e;var t=e+"";return"0"==t&&1/e==-Dh?"-0":t},uh=function(e,t){for(var n=0,i=(t=dh(t,e)).length;null!=e&&n<i;)e=e[Rh(t[n++])];return n&&n==i?e:void 0},hh=function(e,t,n){var i=null==e?void 0:uh(e,t);return void 0===i?n:i};var Oh={},Ah={};Ah=function(e,t){return null!=e&&t in Object(e)};var Mh={};Mh=function(e,t,n){for(var i=-1,r=(t=dh(t,e)).length,s=!1;++i<r;){var o=Rh(t[i]);if(!(s=null!=e&&n(e,o)))break;e=e[o]}return s||++i!=r?s:!!(r=null==e?0:e.length)&&bc(r)&&_c(o,r)&&(Ql(e)||oc(e))},Oh=function(e,t){return null!=e&&Mh(e,t,Ah)};var Lh=1,Fh=2;ch=function(e,t){return ph(e)&&ah(t)?lh(Rh(e),t):function(n){var i=hh(n,e);return void 0===i&&i===t?Oh(n,e):_l(t,i,Lh|Fh)}};var jh={};jh=function(e){return e};var qh={},Uh={};Uh=function(e){return function(t){return null==t?void 0:t[e]}};var Bh={};Bh=function(e){return function(t){return uh(t,e)}},qh=function(e){return ph(e)?Uh(Rh(e)):Bh(e)},Ho=function(e){return"function"==typeof e?e:null==e?jh:"object"==typeof e?Ql(e)?ch(e[0],e[1]):$o(e):qh(e)};var zh={},Wh={},Hh={};var $h=function(e){return function(t,n,i){for(var r=-1,s=Object(t),o=i(t),a=o.length;a--;){var l=o[e?a:++r];if(!1===n(s[l],l,s))break}return t}}();Hh=$h;var Vh=function(e,t){return function(n,i){if(null==n)return n;if(!Ac(n))return e(n,i);for(var r=n.length,s=t?r:-1,o=Object(n);(t?s--:++s<r)&&!1!==i(o[s],s,o););return n}}((function(e,t){return e&&Hh(e,t,ic)}));Wh=Vh,zh=function(e,t){var n=-1,i=Ac(e)?Array(e.length):[];return Wh(e,(function(e,r,s){i[++n]=t(e,r,s)})),i},Bo=function(e,t){return(Ql(e)?zo:zh)(e,Ho(t,3))};const Yh="http://localhost:10000",Kh={data:{user:"",email:"",messages:[],roomId:"",longRoomId:"",userId:""},listeners:[],getState(){return this.data},init(){const e=this.getState();console.log("soy init()",e);Ao(No(Uo,`/rooms/${e.longRoomId}/messages`),(n=>{const i=n.val(),r=t(Bo)(i);e.messages=r,this.setState(e),console.log("soy init() al final",e)}))},setState(e){this.data=e,console.log("soy setState",Kh.getState());for(const e of this.listeners)e()},subscribe(e){this.listeners.push(e)},setUser(e,t){const n=this.getState();n.user=e,n.email=t,this.setState(n)},setRoomId(e){const t=this.getState;t.roomId=e,this.setState(t)},authUser(e){const t=this.getState();fetch(Yh+"/api/auth",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({email:t.email,name:t.user})}).then((e=>e.json())).then((n=>{t.userId=n.id,this.setState(t),e()}))},async createUserInDB(e){const t=this.getState(),n=await fetch(Yh+"/api/signup",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({email:this.data.email,name:this.data.user})}),i=await n.json();t.userId=i.id,this.setState(t),e()},createRoom(){const e=this.getState();fetch(Yh+"/api/rooms",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({userId:e.userId})}).then((e=>e.json())).then((t=>{console.log(t),e.roomId=t.id,e.longRoomId=t.longId,this.setState(e),console.log(e),this.init()}))},getRoom(){const e=this.getState();fetch(Yh+"/api/rooms/"+e.roomId+"?userId="+e.userId,{method:"GET"}).then((e=>e.json())).then((t=>{e.longRoomId=t.rtdbRoomId,this.setState(e),this.init()}))},setMessage(e){fetch(Yh+"/api/messages",{method:"post",headers:{"content-type":"application/json"},body:JSON.stringify({user:this.data.user,longId:this.data.longRoomId,message:e})})}};class Gh extends HTMLElement{shadowDom=this.attachShadow({mode:"open"});constructor(){super(),this.render()}render(){const e=this.getAttribute("textBtn");this.shadowDom.innerHTML=`\n            <Form class="form" style="\n                                display: flex;\n                                flex-direction: column;\n                                gap: 8px;\n                                padding: 4px;\n                                // border: solid 1px #000;\n                                border-radius: 4px;\n            ">\n                <div style="\n                            display: flex;\n                            flex-direction: column;\n                            gap: 6px;\n                    ">\n                    <custom-text label="email"></custom-text>\n                    <input type="text" name="email" placeholder="Ingresa un email" style="\n                                                                                    box-sizing: border-box;\n                                                                                    font-size: 1.2rem;\n                                                                                    font-weight: 500;\n                                                                                    height: 50px;\n                                                                                    width: 100%;\n                                                                                    padding: 0 8px;\n                                                                                    color: var(--color-principal);\n                                                                                    // background-color: #e1f3f0;\n                                                                                    border: 2px solid #000;\n                                                                                    border-radius: 4px;\n                    "></input>\n                </div>\n                <div style="\n                            display: flex;\n                            flex-direction: column;\n                            gap: 6px;\n                    ">\n                    <custom-text label="Tu nombre:"></custom-text>\n                    <input type="text" name="name" placeholder="Ingresa un nombre" style="\n                                                                                    box-sizing: border-box;\n                                                                                    font-size: 1.2rem;\n                                                                                    font-weight: 500;\n                                                                                    height: 50px;\n                                                                                    width: 100%;\n                                                                                    padding: 0 8px;\n                                                                                    color: var(--color-principal);\n                                                                                    // background-color: #e1f3f0;\n                                                                                    border: 2px solid #000;\n                                                                                    border-radius: 4px;\n                    "></input>\n                </div>\n                <div style="\n                            display: flex;\n                            flex-direction: column;\n                            gap: 6px;\n                    ">\n                    <custom-text label="Room" for="room-select"></custom-text>    \n                    <select class="id" name="rooms" id="room-select" style="\n                                                            box-sizing: border-box;\n                                                            font-size: 1.2rem;\n                                                            font-weight: 500;\n                                                            height: 50px;\n                                                            width: 100%;\n                                                            padding: 0 8px;\n                                                            color: var(--color-principal);\n                                                            // background-color: #e1f3f0;\n                                                            border: 2px solid #000;\n                                                            border-radius: 4px;\n                    ">\n                        <option value="">--Elige una opción--</option>\n                        <option value="nuevo">Nuevo room</option>\n                        <option value="existente">Room existente</option>\n                    </select>\n                </div>\n                <div class="div-id" style="\n                            display: flex;\n                            flex-direction: column;\n                            gap: 6px;\n                            visibility: hidden;\n                    ">\n                    <custom-text label="Room id:"></custom-text>\n                    <input type="text" name="id" placeholder="Ingresa un id" style="\n                                                                                    box-sizing: border-box;\n                                                                                    font-size: 1.2rem;\n                                                                                    font-weight: 500;\n                                                                                    height: 50px;\n                                                                                    width: 100%;\n                                                                                    padding: 0 8px;\n                                                                                    color: var(--color-principal);\n                                                                                    // background-color: #e1f3f0;\n                                                                                    border: 2px solid #000;\n                                                                                    border-radius: 4px;\n                    "></input>\n                </div>\n                <button style="\n                    font-family: 'Roboto';\n                    font-size: 1.3rem;\n                    font-weight: 500;\n                    height: 50px;\n                    width: 100%;\n                    margin-top: 14px;\n                    color: #000;\n                    background-color: #9CBBE9;\n                    border: none;\n                    border-radius: 4px;\n        ">${e}</button>\n            </Form>\n        `;const t=this.shadowDom.querySelector(".form"),n=t.querySelector(".id"),i=this.shadowDom.querySelector(".div-id");n.addEventListener("change",(e=>{"existente"===e.target.value&&(i.style.visibility="visible")})),t?.addEventListener("submit",(e=>{e.preventDefault();const t=new FormData(e.target),n=Object.fromEntries(t.entries());console.log(n),"existente"===n.rooms?(Kh.setRoomId(n.id),Kh.setUser(n.name,n.email),Kh.authUser((()=>{Kh.getRoom()}))):(Kh.setUser(n.name,n.email),Kh.createUserInDB((()=>{Kh.createRoom()})))}))}}function Qh(e){const t=document.createElement("div");t.innerHTML='\n        <custom-header class="header-welcome"></custom-header>\n        <div class="container">\n            <custom-text class="text-welcome" variant="title" label="Bienvenido(a) al chat"></custom-text>\n            <custom-form-u class="form-welcome" label="Tu nombre:" placeHolder="Ingresa tu nombre" textBtn="Agregar"></custom-form-u>\n            <button class="btn">Comenzar</button>\n        </div>\n        ',t.className="root-welcome";const n=t.querySelector(".btn");return n&&n.addEventListener("click",(()=>{Kh.getState().user,e.goTo("/chat")})),t}customElements.define("custom-form-u",Gh);class Jh extends HTMLElement{shadowDom=this.attachShadow({mode:"open"});constructor(){super(),this.render()}render(){const e=this.getAttribute("label")||"",t=this.getAttribute("placeHolder"),n=this.getAttribute("textBtn");this.shadowDom.innerHTML=`\n            <Form class="form" style="\n                                display: flex;\n                                flex-direction: column;\n                                gap: 4px;\n                                padding: 4px;\n                                // border: solid 1px #000;\n                                border-radius: 4px;\n            ">\n                    <custom-text label="${e}"></custom-text>\n                    <div style="\n                            display:grid;\n                            grid-template-columns: 70% 1fr;\n                            gap: 5px;\n                    ">\n                    <input type="text" name="text" placeholder="${t}" style="\n                                                                                    box-sizing: border-box;\n                                                                                    font-size: 1.2rem;\n                                                                                    font-weight: 500;\n                                                                                    height: 50px;\n                                                                                    width: 100%;\n                                                                                    padding: 0 8px;\n                                                                                    color: var(--color-principal);\n                                                                                    // background-color: #e1f3f0;\n                                                                                    border: 1px solid #000;\n                                                                                    border-radius: 4px;\n                    "></input>\n                    <button style="\n                                font-family: 'Roboto';\n                                font-size: 1.3rem;\n                                font-weight: 500;\n                                height: 50px;\n                                width: 100%;\n                                // margin-top: 14px;\n                                color: #000;\n                                background-color: #9CBBE9;\n                                border: none;\n                                border-radius: 4px;\n                    ">${n}</button>\n                    </div>\n            </Form>\n        `;const i=this.shadowDom.querySelector(".form");i?.addEventListener("submit",(e=>{e.preventDefault();const t=e.target,n=t.text.value;Kh.setMessage(n),console.log(Kh.getState()),t.text.value=""}))}}customElements.define("custom-form-m",Jh);class Zh extends HTMLElement{connectedCallback(){Kh.subscribe((()=>{const e=Kh.getState();this.messages=e,console.log(e),this.render()})),this.render()}messages=[];render(){const e=Kh.getState();this.messages=e,console.log(this.messages),this.innerHTML=`\n        <div class="messages-container container2" style="\n                                            display: flex;\n                                            flex-direction: column;\n                                            gap: 4px;\n                                            height: 100%;\n                                            padding: 10px 12px;\n                                            border-top: 1px solid;\n                                            overflow-y: auto;\n                                            // scroll-snap-type: y proximity;\n                                            // overscroll-behavior-y: contain;\n                                            // position : relative; \n                                            // bottom:0;\n                                            // z-index: -1;\n        ">\n            ${this.messages.messages.map((t=>e.user===t.user?`\n                    <div class="div-uni-1">\n                        <span class="span-1">${t.user||"Usuario"}</span>\n                        <div class="msjs-1">${t.message}</div>\n                    </div>\n                    `:`\n                    <div class="div-uni-2">\n                        <span>${t.user||"Usuario"}</span>\n                        <div class="msjs-2">${t.message}</div>\n                    </div>\n                    `)).join("")}\n        </div>\n        `}}function Xh(e){const t=document.createElement("div"),n=Kh.getState();return t.innerHTML=`\n        <custom-header class="header-welcome"></custom-header>\n        <div class="container-chat">\n            <custom-text class="chat-title" label="Chat" variant="title"></custom-text>\n            <label>Room id: ${n.roomId}</label>\n            <custom-chat class="messages-container"></custom-chat>\n            <custom-form-m placeHolder="Ingresa un mensaje" textBtn="Enviar"></custom-form-m>\n            </div>\n            `,t.className="root-chat",t}customElements.define("custom-chat",Zh);const eu="/chat-project";function tu(){return location.host.includes("github.io")}!function(e){function t(e){const t=tu()?eu+e:e;history.pushState({},"",t),n(t)}function n(n){tu()&&n.replace(eu,"");const i=[{path:/\/welcome/,component:Qh},{path:/\/chat/,component:Xh}];for(const r of i)if(r.path.test(n)){const n=r.component({goTo:t});e?.firstChild&&e.firstChild.remove(),e?.appendChild(n)}}"/"===location.pathname||location.host.includes("github.io")?t("/welcome"):n(location.pathname),window.onpopstate=function(){n(location.pathname)}}(document.querySelector(".contenedor"));
//# sourceMappingURL=index.09334ab0.js.map
