_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=o,t.useAmp=function(){return o(a.default.useContext(i.AmpStateContext))};var r,a=(r=n("q1tI"))&&r.__esModule?r:{default:r},i=n("lwAK");function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,i=e.hasQuery,o=void 0!==i&&i;return n||a&&o}},"2RuU":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/language",function(){return n("5ZRb")}])},"5ZRb":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return _}));var r=n("nKUr");function a(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var i=n("g4pe"),o=n.n(i);function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,i=void 0;try{for(var o,s=e[Symbol.iterator]();!(r=(o=s.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(c){a=!0,i=c}finally{try{r||null==s.return||s.return()}finally{if(a)throw i}}return n}}(e,t)||function(e,t){if(e){if("string"===typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var l=n("q1tI"),u=n("ECCn"),d=n.n(u),g=n("CyL5"),f=n.n(g);function h(e){return function(e,t){var n=e.split("\n");""===n[0]&&(n=n.slice(1));/^ +$/.test(n[n.length-1])&&(n=n.slice(0,n.length-1));var a=n.map((function(e){var t;return null===(t=/^ +/.exec(e))||void 0===t?void 0:t[0].length})).filter((function(e){return e})).reduce((function(e,t){return Math.min(e,t)})),i=" ".repeat(a);return n=n.map((function(e){return e.startsWith(i)?e.substr(a):e})),Object(r.jsx)(p,{language:t,children:n.join("\n")})}(c(e,1)[0],"go")}function p(e){var t=e.language,n=e.children;return Object(r.jsx)("pre",{children:Object(r.jsx)("code",{className:t,children:n})})}function m(e){var t=e.children;return Object(r.jsx)("div",{className:"page",children:t})}d.a.registerLanguage("go",f.a);var b=n("Y4lc"),v=n.n(b);function y(){var e=a(['\n            package main\n\n            import "fmt"\n\n            func main() {\n                fmt.Println("Hello world!")\n            }\n          ']);return y=function(){return e},e}function x(){var e=a(['\n              package main\n\n              import "fmt"\n\n              func main() {\n                  fmt.Println("Hello variables!")\n              }\n            ']);return x=function(){return e},e}function _(){return Object(l.useEffect)((function(){document.querySelectorAll("pre code").forEach((function(e){d.a.highlightBlock(e)}))}),[]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(o.a,{children:[Object(r.jsx)("title",{children:"Go language cheat sheet"}),Object(r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),Object(r.jsxs)(m,{children:[Object(r.jsxs)("header",{className:v.a.header,children:[Object(r.jsx)("h1",{className:v.a.title,children:"Go language cheat sheet"}),Object(r.jsx)("img",{src:"z-gopher-g.png",className:v.a.titleGopher})]}),Object(r.jsx)("main",{className:v.a.main,children:Object(r.jsxs)("section",{className:v.a.section,children:[Object(r.jsx)("h2",{children:"Variables"}),Object(r.jsxs)("p",{children:["Some text blahblah...",Object(r.jsx)("br",{})," Some other text..."]}),h(x())]})})]}),Object(r.jsxs)(m,{children:[Object(r.jsxs)("header",{className:v.a.header,children:[Object(r.jsx)("h1",{className:v.a.title,children:"Go language cheat sheet"}),Object(r.jsx)("img",{src:"z-gopher.png",className:v.a.titleGopher})]}),Object(r.jsx)("main",{className:v.a.main,children:h(y())})]})]})}},"7W2i":function(e,t,n){var r=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=u,t.default=void 0;var r,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var i=r?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(n,a,i):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),i=(r=n("Xuae"))&&r.__esModule?r:{default:r},o=n("lwAK"),s=n("FYa8"),c=n("/0+H");function l(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function u(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var g=["name","httpEquiv","charSet","itemProp"];function f(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(d,[]).reverse().concat(u(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var i=!0,o=!1;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){o=!0;var s=a.key.slice(a.key.indexOf("$")+1);e.has(s)?i=!1:e.add(s)}switch(a.type){case"title":case"base":t.has(a.type)?i=!1:t.add(a.type);break;case"meta":for(var c=0,l=g.length;c<l;c++){var u=g[c];if(a.props.hasOwnProperty(u))if("charSet"===u)n.has(u)?i=!1:n.add(u);else{var d=a.props[u],f=r[u]||new Set;"name"===u&&o||!f.has(d)?(f.add(d),r[u]=f):i=!1}}}return i}}()).reverse().map((function(e,t){var n=e.key||t;return a.default.cloneElement(e,{key:n})}))}function h(e){var t=e.children,n=(0,a.useContext)(o.AmpStateContext),r=(0,a.useContext)(s.HeadManagerContext);return a.default.createElement(i.default,{reduceComponentsToState:f,headManager:r,inAmpMode:(0,c.isInAmpMode)(n)},t)}h.rewind=function(){};var p=h;t.default=p},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},CyL5:function(e,t){e.exports=function(e){const t={keyword:"break default func interface select case map struct chan else goto package switch const fallthrough if range type continue for import return var go defer bool byte complex64 complex128 float32 float64 int8 int16 int32 int64 string uint8 uint16 uint32 uint64 int uint uintptr rune",literal:"true false iota nil",built_in:"append cap close complex copy imag len make new panic print println real recover delete"};return{name:"Go",aliases:["golang"],keywords:t,illegal:"</",contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,{className:"string",variants:[e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,{begin:"`",end:"`"}]},{className:"number",variants:[{begin:e.C_NUMBER_RE+"[i]",relevance:1},e.C_NUMBER_MODE]},{begin:/:=/},{className:"function",beginKeywords:"func",end:"\\s*(\\{|$)",excludeEnd:!0,contains:[e.TITLE_MODE,{className:"params",begin:/\(/,end:/\)/,keywords:t,illegal:/["']/}]}]}}},ECCn:function(e,t){function n(e){return e instanceof Map?e.clear=e.delete=e.set=function(){throw new Error("map is read-only")}:e instanceof Set&&(e.add=e.clear=e.delete=function(){throw new Error("set is read-only")}),Object.freeze(e),Object.getOwnPropertyNames(e).forEach((function(t){var r=e[t];"object"!=typeof r||Object.isFrozen(r)||n(r)})),e}var r=n,a=n;r.default=a;class i{constructor(e){void 0===e.data&&(e.data={}),this.data=e.data}ignoreMatch(){this.ignore=!0}}function o(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function s(e,...t){const n=Object.create(null);for(const r in e)n[r]=e[r];return t.forEach((function(e){for(const t in e)n[t]=e[t]})),n}const c=e=>!!e.kind;class l{constructor(e,t){this.buffer="",this.classPrefix=t.classPrefix,e.walk(this)}addText(e){this.buffer+=o(e)}openNode(e){if(!c(e))return;let t=e.kind;e.sublanguage||(t=`${this.classPrefix}${t}`),this.span(t)}closeNode(e){c(e)&&(this.buffer+="</span>")}value(){return this.buffer}span(e){this.buffer+=`<span class="${e}">`}}class u{constructor(){this.rootNode={children:[]},this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(e){this.top.children.push(e)}openNode(e){const t={kind:e,children:[]};this.add(t),this.stack.push(t)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(e){return this.constructor._walk(e,this.rootNode)}static _walk(e,t){return"string"===typeof t?e.addText(t):t.children&&(e.openNode(t),t.children.forEach((t=>this._walk(e,t))),e.closeNode(t)),e}static _collapse(e){"string"!==typeof e&&e.children&&(e.children.every((e=>"string"===typeof e))?e.children=[e.children.join("")]:e.children.forEach((e=>{u._collapse(e)})))}}class d extends u{constructor(e){super(),this.options=e}addKeyword(e,t){""!==e&&(this.openNode(t),this.addText(e),this.closeNode())}addText(e){""!==e&&this.add(e)}addSublanguage(e,t){const n=e.root;n.kind=t,n.sublanguage=!0,this.add(n)}toHTML(){return new l(this,this.options).value()}finalize(){return!0}}function g(e){return e?"string"===typeof e?e:e.source:null}const f="[a-zA-Z]\\w*",h="[a-zA-Z_]\\w*",p="\\b\\d+(\\.\\d+)?",m="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",b="\\b(0b[01]+)",v={begin:"\\\\[\\s\\S]",relevance:0},y={className:"string",begin:"'",end:"'",illegal:"\\n",contains:[v]},x={className:"string",begin:'"',end:'"',illegal:"\\n",contains:[v]},_={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},w=function(e,t,n={}){const r=s({className:"comment",begin:e,end:t,contains:[]},n);return r.contains.push(_),r.contains.push({className:"doctag",begin:"(?:TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):",relevance:0}),r},E=w("//","$"),O=w("/\\*","\\*/"),N=w("#","$"),j={className:"number",begin:p,relevance:0},M={className:"number",begin:m,relevance:0},R={className:"number",begin:b,relevance:0},k={className:"number",begin:p+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},A={begin:/(?=\/[^/\n]*\/)/,contains:[{className:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[v,{begin:/\[/,end:/\]/,relevance:0,contains:[v]}]}]},S={className:"title",begin:f,relevance:0},I={className:"title",begin:h,relevance:0},P={begin:"\\.\\s*[a-zA-Z_]\\w*",relevance:0};var C=Object.freeze({__proto__:null,MATCH_NOTHING_RE:/\b\B/,IDENT_RE:f,UNDERSCORE_IDENT_RE:h,NUMBER_RE:p,C_NUMBER_RE:m,BINARY_NUMBER_RE:b,RE_STARTERS_RE:"!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",SHEBANG:(e={})=>{const t=/^#![ ]*\//;return e.binary&&(e.begin=function(...e){return e.map((e=>g(e))).join("")}(t,/.*\b/,e.binary,/\b.*/)),s({className:"meta",begin:t,end:/$/,relevance:0,"on:begin":(e,t)=>{0!==e.index&&t.ignoreMatch()}},e)},BACKSLASH_ESCAPE:v,APOS_STRING_MODE:y,QUOTE_STRING_MODE:x,PHRASAL_WORDS_MODE:_,COMMENT:w,C_LINE_COMMENT_MODE:E,C_BLOCK_COMMENT_MODE:O,HASH_COMMENT_MODE:N,NUMBER_MODE:j,C_NUMBER_MODE:M,BINARY_NUMBER_MODE:R,CSS_NUMBER_MODE:k,REGEXP_MODE:A,TITLE_MODE:S,UNDERSCORE_TITLE_MODE:I,METHOD_GUARD:P,END_SAME_AS_BEGIN:function(e){return Object.assign(e,{"on:begin":(e,t)=>{t.data._beginMatch=e[1]},"on:end":(e,t)=>{t.data._beginMatch!==e[1]&&t.ignoreMatch()}})}});function L(e,t){"."===e.input[e.index-1]&&t.ignoreMatch()}function T(e,t){t&&e.beginKeywords&&(e.begin="\\b("+e.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",e.__beforeBegin=L,e.keywords=e.keywords||e.beginKeywords,delete e.beginKeywords,void 0===e.relevance&&(e.relevance=0))}function B(e,t){Array.isArray(e.illegal)&&(e.illegal=function(...e){return"("+e.map((e=>g(e))).join("|")+")"}(...e.illegal))}function D(e,t){if(e.match){if(e.begin||e.end)throw new Error("begin & end are not supported with match");e.begin=e.match,delete e.match}}function H(e,t){void 0===e.relevance&&(e.relevance=1)}const U=["of","and","for","in","not","or","if","then","parent","list","value"];function $(e,t,n="keyword"){const r={};return"string"===typeof e?a(n,e.split(" ")):Array.isArray(e)?a(n,e):Object.keys(e).forEach((function(n){Object.assign(r,$(e[n],t,n))})),r;function a(e,n){t&&(n=n.map((e=>e.toLowerCase()))),n.forEach((function(t){const n=t.split("|");r[n[0]]=[e,G(n[0],n[1])]}))}}function G(e,t){return t?Number(t):function(e){return U.includes(e.toLowerCase())}(e)?0:1}function K(e,{plugins:t}){function n(t,n){return new RegExp(g(t),"m"+(e.case_insensitive?"i":"")+(n?"g":""))}class r{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(e,t){t.position=this.position++,this.matchIndexes[this.matchAt]=t,this.regexes.push([t,e]),this.matchAt+=function(e){return new RegExp(e.toString()+"|").exec("").length-1}(e)+1}compile(){0===this.regexes.length&&(this.exec=()=>null);const e=this.regexes.map((e=>e[1]));this.matcherRe=n(function(e,t="|"){const n=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;let r=0,a="";for(let i=0;i<e.length;i++){r+=1;const o=r;let s=g(e[i]);for(i>0&&(a+=t),a+="(";s.length>0;){const e=n.exec(s);if(null==e){a+=s;break}a+=s.substring(0,e.index),s=s.substring(e.index+e[0].length),"\\"===e[0][0]&&e[1]?a+="\\"+String(Number(e[1])+o):(a+=e[0],"("===e[0]&&r++)}a+=")"}return a}(e),!0),this.lastIndex=0}exec(e){this.matcherRe.lastIndex=this.lastIndex;const t=this.matcherRe.exec(e);if(!t)return null;const n=t.findIndex(((e,t)=>t>0&&void 0!==e)),r=this.matchIndexes[n];return t.splice(0,n),Object.assign(t,r)}}class a{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(e){if(this.multiRegexes[e])return this.multiRegexes[e];const t=new r;return this.rules.slice(e).forEach((([e,n])=>t.addRule(e,n))),t.compile(),this.multiRegexes[e]=t,t}resumingScanAtSamePosition(){return 0!==this.regexIndex}considerAll(){this.regexIndex=0}addRule(e,t){this.rules.push([e,t]),"begin"===t.type&&this.count++}exec(e){const t=this.getMatcher(this.regexIndex);t.lastIndex=this.lastIndex;let n=t.exec(e);if(this.resumingScanAtSamePosition())if(n&&n.index===this.lastIndex);else{const t=this.getMatcher(0);t.lastIndex=this.lastIndex+1,n=t.exec(e)}return n&&(this.regexIndex+=n.position+1,this.regexIndex===this.count&&this.considerAll()),n}}if(e.compilerExtensions||(e.compilerExtensions=[]),e.contains&&e.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return e.classNameAliases=s(e.classNameAliases||{}),function t(r,i){const o=r;if(r.compiled)return o;[D].forEach((e=>e(r,i))),e.compilerExtensions.forEach((e=>e(r,i))),r.__beforeBegin=null,[T,B,H].forEach((e=>e(r,i))),r.compiled=!0;let c=null;if("object"===typeof r.keywords&&(c=r.keywords.$pattern,delete r.keywords.$pattern),r.keywords&&(r.keywords=$(r.keywords,e.case_insensitive)),r.lexemes&&c)throw new Error("ERR: Prefer `keywords.$pattern` to `mode.lexemes`, BOTH are not allowed. (see mode reference) ");return c=c||r.lexemes||/\w+/,o.keywordPatternRe=n(c,!0),i&&(r.begin||(r.begin=/\B|\b/),o.beginRe=n(r.begin),r.endSameAsBegin&&(r.end=r.begin),r.end||r.endsWithParent||(r.end=/\B|\b/),r.end&&(o.endRe=n(r.end)),o.terminatorEnd=g(r.end)||"",r.endsWithParent&&i.terminatorEnd&&(o.terminatorEnd+=(r.end?"|":"")+i.terminatorEnd)),r.illegal&&(o.illegalRe=n(r.illegal)),r.contains||(r.contains=[]),r.contains=[].concat(...r.contains.map((function(e){return function(e){e.variants&&!e.cachedVariants&&(e.cachedVariants=e.variants.map((function(t){return s(e,{variants:null},t)})));if(e.cachedVariants)return e.cachedVariants;if(W(e))return s(e,{starts:e.starts?s(e.starts):null});if(Object.isFrozen(e))return s(e);return e}("self"===e?r:e)}))),r.contains.forEach((function(e){t(e,o)})),r.starts&&t(r.starts,i),o.matcher=function(e){const t=new a;return e.contains.forEach((e=>t.addRule(e.begin,{rule:e,type:"begin"}))),e.terminatorEnd&&t.addRule(e.terminatorEnd,{type:"end"}),e.illegal&&t.addRule(e.illegal,{type:"illegal"}),t}(o),o}(e)}function W(e){return!!e&&(e.endsWithParent||W(e.starts))}function q(e){const t={props:["language","code","autodetect"],data:function(){return{detectedLanguage:"",unknownLanguage:!1}},computed:{className(){return this.unknownLanguage?"":"hljs "+this.detectedLanguage},highlighted(){if(!this.autoDetect&&!e.getLanguage(this.language))return console.warn(`The language "${this.language}" you specified could not be found.`),this.unknownLanguage=!0,o(this.code);let t={};return this.autoDetect?(t=e.highlightAuto(this.code),this.detectedLanguage=t.language):(t=e.highlight(this.language,this.code,this.ignoreIllegals),this.detectedLanguage=this.language),t.value},autoDetect(){return!this.language||(e=this.autodetect,Boolean(e||""===e));var e},ignoreIllegals:()=>!0},render(e){return e("pre",{},[e("code",{class:this.className,domProps:{innerHTML:this.highlighted}})])}};return{Component:t,VuePlugin:{install(e){e.component("highlightjs",t)}}}}const z={"after:highlightBlock":({block:e,result:t,text:n})=>{const r=F(e);if(!r.length)return;const a=document.createElement("div");a.innerHTML=t.value,t.value=function(e,t,n){let r=0,a="";const i=[];function s(){return e.length&&t.length?e[0].offset!==t[0].offset?e[0].offset<t[0].offset?e:t:"start"===t[0].event?e:t:e.length?e:t}function c(e){function t(e){return" "+e.nodeName+'="'+o(e.value)+'"'}a+="<"+Z(e)+[].map.call(e.attributes,t).join("")+">"}function l(e){a+="</"+Z(e)+">"}function u(e){("start"===e.event?c:l)(e.node)}for(;e.length||t.length;){let t=s();if(a+=o(n.substring(r,t[0].offset)),r=t[0].offset,t===e){i.reverse().forEach(l);do{u(t.splice(0,1)[0]),t=s()}while(t===e&&t.length&&t[0].offset===r);i.reverse().forEach(c)}else"start"===t[0].event?i.push(t[0].node):i.pop(),u(t.splice(0,1)[0])}return a+o(n.substr(r))}(r,F(a),n)}};function Z(e){return e.nodeName.toLowerCase()}function F(e){const t=[];return function e(n,r){for(let a=n.firstChild;a;a=a.nextSibling)3===a.nodeType?r+=a.nodeValue.length:1===a.nodeType&&(t.push({event:"start",offset:r,node:a}),r=e(a,r),Z(a).match(/br|hr|img|input/)||t.push({event:"stop",offset:r,node:a}));return r}(e,0),t}const X=e=>{console.error(e)},J=(e,...t)=>{console.log(`WARN: ${e}`,...t)},Y=(e,t)=>{console.log(`Deprecated as of ${e}. ${t}`)},V=o,Q=s,ee=Symbol("nomatch");var te=function(e){const t=Object.create(null),n=Object.create(null),a=[];let o=!0;const s=/(^(<[^>]+>|\t|)+|\n)/gm,c="Could not find the language '{}', did you forget to load/include a language module?",l={disableAutodetect:!0,name:"Plain text",contains:[]};let u={noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:null,__emitter:d};function g(e){return u.noHighlightRe.test(e)}function f(e,t,n,r){const a={code:t,language:e};M("before:highlight",a);const i=a.result?a.result:h(a.language,a.code,n,r);return i.code=a.code,M("after:highlight",i),i}function h(e,n,r,s){const l=n;function d(e,t){const n=w.case_insensitive?t[0].toLowerCase():t[0];return Object.prototype.hasOwnProperty.call(e.keywords,n)&&e.keywords[n]}function g(){null!=j.subLanguage?function(){if(""===k)return;let e=null;if("string"===typeof j.subLanguage){if(!t[j.subLanguage])return void R.addText(k);e=h(j.subLanguage,k,!0,M[j.subLanguage]),M[j.subLanguage]=e.top}else e=p(k,j.subLanguage.length?j.subLanguage:null);j.relevance>0&&(A+=e.relevance),R.addSublanguage(e.emitter,e.language)}():function(){if(!j.keywords)return void R.addText(k);let e=0;j.keywordPatternRe.lastIndex=0;let t=j.keywordPatternRe.exec(k),n="";for(;t;){n+=k.substring(e,t.index);const r=d(j,t);if(r){const[e,a]=r;R.addText(n),n="",A+=a;const i=w.classNameAliases[e]||e;R.addKeyword(t[0],i)}else n+=t[0];e=j.keywordPatternRe.lastIndex,t=j.keywordPatternRe.exec(k)}n+=k.substr(e),R.addText(n)}(),k=""}function f(e){return e.className&&R.openNode(w.classNameAliases[e.className]||e.className),j=Object.create(e,{parent:{value:j}}),j}function m(e,t,n){let r=function(e,t){const n=e&&e.exec(t);return n&&0===n.index}(e.endRe,n);if(r){if(e["on:end"]){const n=new i(e);e["on:end"](t,n),n.ignore&&(r=!1)}if(r){for(;e.endsParent&&e.parent;)e=e.parent;return e}}if(e.endsWithParent)return m(e.parent,t,n)}function b(e){return 0===j.matcher.regexIndex?(k+=e[0],1):(P=!0,0)}function v(e){const t=e[0],n=e.rule,r=new i(n),a=[n.__beforeBegin,n["on:begin"]];for(const i of a)if(i&&(i(e,r),r.ignore))return b(t);return n&&n.endSameAsBegin&&(n.endRe=new RegExp(t.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&"),"m")),n.skip?k+=t:(n.excludeBegin&&(k+=t),g(),n.returnBegin||n.excludeBegin||(k=t)),f(n),n.returnBegin?0:t.length}function y(e){const t=e[0],n=l.substr(e.index),r=m(j,e,n);if(!r)return ee;const a=j;a.skip?k+=t:(a.returnEnd||a.excludeEnd||(k+=t),g(),a.excludeEnd&&(k=t));do{j.className&&R.closeNode(),j.skip||j.subLanguage||(A+=j.relevance),j=j.parent}while(j!==r.parent);return r.starts&&(r.endSameAsBegin&&(r.starts.endRe=r.endRe),f(r.starts)),a.returnEnd?0:t.length}let x={};function _(t,n){const a=n&&n[0];if(k+=t,null==a)return g(),0;if("begin"===x.type&&"end"===n.type&&x.index===n.index&&""===a){if(k+=l.slice(n.index,n.index+1),!o){const t=new Error("0 width match regex");throw t.languageName=e,t.badRule=x.rule,t}return 1}if(x=n,"begin"===n.type)return v(n);if("illegal"===n.type&&!r){const e=new Error('Illegal lexeme "'+a+'" for mode "'+(j.className||"<unnamed>")+'"');throw e.mode=j,e}if("end"===n.type){const e=y(n);if(e!==ee)return e}if("illegal"===n.type&&""===a)return 1;if(I>1e5&&I>3*n.index){throw new Error("potential infinite loop, way more iterations than matches")}return k+=a,a.length}const w=O(e);if(!w)throw X(c.replace("{}",e)),new Error('Unknown language: "'+e+'"');const E=K(w,{plugins:a});let N="",j=s||E;const M={},R=new u.__emitter(u);!function(){const e=[];for(let t=j;t!==w;t=t.parent)t.className&&e.unshift(t.className);e.forEach((e=>R.openNode(e)))}();let k="",A=0,S=0,I=0,P=!1;try{for(j.matcher.considerAll();;){I++,P?P=!1:j.matcher.considerAll(),j.matcher.lastIndex=S;const e=j.matcher.exec(l);if(!e)break;const t=_(l.substring(S,e.index),e);S=e.index+t}return _(l.substr(S)),R.closeAllNodes(),R.finalize(),N=R.toHTML(),{relevance:Math.floor(A),value:N,language:e,illegal:!1,emitter:R,top:j}}catch(C){if(C.message&&C.message.includes("Illegal"))return{illegal:!0,illegalBy:{msg:C.message,context:l.slice(S-100,S+100),mode:C.mode},sofar:N,relevance:0,value:V(l),emitter:R};if(o)return{illegal:!1,relevance:0,value:V(l),emitter:R,language:e,top:j,errorRaised:C};throw C}}function p(e,n){n=n||u.languages||Object.keys(t);const r=function(e){const t={relevance:0,emitter:new u.__emitter(u),value:V(e),illegal:!1,top:l};return t.emitter.addText(e),t}(e),a=n.filter(O).filter(j).map((t=>h(t,e,!1)));a.unshift(r);const i=a.sort(((e,t)=>{if(e.relevance!==t.relevance)return t.relevance-e.relevance;if(e.language&&t.language){if(O(e.language).supersetOf===t.language)return 1;if(O(t.language).supersetOf===e.language)return-1}return 0})),[o,s]=i,c=o;return c.second_best=s,c}const m={"before:highlightBlock":({block:e})=>{u.useBR&&(e.innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ /]*>/g,"\n"))},"after:highlightBlock":({result:e})=>{u.useBR&&(e.value=e.value.replace(/\n/g,"<br>"))}},b=/^(<[^>]+>|\t)+/gm,v={"after:highlightBlock":({result:e})=>{u.tabReplace&&(e.value=e.value.replace(b,(e=>e.replace(/\t/g,u.tabReplace))))}};function y(e){let t=null;const r=function(e){let t=e.className+" ";t+=e.parentNode?e.parentNode.className:"";const n=u.languageDetectRe.exec(t);if(n){const t=O(n[1]);return t||(J(c.replace("{}",n[1])),J("Falling back to no-highlight mode for this block.",e)),t?n[1]:"no-highlight"}return t.split(/\s+/).find((e=>g(e)||O(e)))}(e);if(g(r))return;M("before:highlightBlock",{block:e,language:r}),t=e;const a=t.textContent,i=r?f(r,a,!0):p(a);M("after:highlightBlock",{block:e,result:i,text:a}),e.innerHTML=i.value,function(e,t,r){const a=t?n[t]:r;e.classList.add("hljs"),a&&e.classList.add(a)}(e,r,i.language),e.result={language:i.language,re:i.relevance,relavance:i.relevance},i.second_best&&(e.second_best={language:i.second_best.language,re:i.second_best.relevance,relavance:i.second_best.relevance})}const x=()=>{if(x.called)return;x.called=!0,Y("10.6.0","initHighlighting() is deprecated.  Use highlightAll() instead.");document.querySelectorAll("pre code").forEach(y)};let _=!1,w=!1;function E(){if(!w)return void(_=!0);document.querySelectorAll("pre code").forEach(y)}function O(e){return e=(e||"").toLowerCase(),t[e]||t[n[e]]}function N(e,{languageName:t}){"string"===typeof e&&(e=[e]),e.forEach((e=>{n[e]=t}))}function j(e){const t=O(e);return t&&!t.disableAutodetect}function M(e,t){const n=e;a.forEach((function(e){e[n]&&e[n](t)}))}"undefined"!==typeof window&&window.addEventListener&&window.addEventListener("DOMContentLoaded",(function(){w=!0,_&&E()}),!1),Object.assign(e,{highlight:f,highlightAuto:p,highlightAll:E,fixMarkup:function(e){return Y("10.2.0","fixMarkup will be removed entirely in v11.0"),Y("10.2.0","Please see https://github.com/highlightjs/highlight.js/issues/2534"),t=e,u.tabReplace||u.useBR?t.replace(s,(e=>"\n"===e?u.useBR?"<br>":e:u.tabReplace?e.replace(/\t/g,u.tabReplace):e)):t;var t},highlightBlock:y,configure:function(e){e.useBR&&(Y("10.3.0","'useBR' will be removed entirely in v11.0"),Y("10.3.0","Please see https://github.com/highlightjs/highlight.js/issues/2559")),u=Q(u,e)},initHighlighting:x,initHighlightingOnLoad:function(){Y("10.6.0","initHighlightingOnLoad() is deprecated.  Use highlightAll() instead."),_=!0},registerLanguage:function(n,r){let a=null;try{a=r(e)}catch(i){if(X("Language definition for '{}' could not be registered.".replace("{}",n)),!o)throw i;X(i),a=l}a.name||(a.name=n),t[n]=a,a.rawDefinition=r.bind(null,e),a.aliases&&N(a.aliases,{languageName:n})},listLanguages:function(){return Object.keys(t)},getLanguage:O,registerAliases:N,requireLanguage:function(e){Y("10.4.0","requireLanguage will be removed entirely in v11."),Y("10.4.0","Please see https://github.com/highlightjs/highlight.js/pull/2844");const t=O(e);if(t)return t;throw new Error("The '{}' language is required, but not loaded.".replace("{}",e))},autoDetection:j,inherit:Q,addPlugin:function(e){a.push(e)},vuePlugin:q(e).VuePlugin}),e.debugMode=function(){o=!1},e.safeMode=function(){o=!0},e.versionString="10.6.0";for(const i in C)"object"===typeof C[i]&&r(C[i]);return Object.assign(e,C),e.addPlugin(m),e.addPlugin(z),e.addPlugin(v),e}({});e.exports=te},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=a},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},Qetd:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},RIqP:function(e,t,n){var r=n("Ijbi"),a=n("EbDI"),i=n("ZhPi"),o=n("Bnag");e.exports=function(e){return r(e)||a(e)||i(e)||o()}},SksO:function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},W8MJ:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),a=n("lwsE"),i=n("W8MJ"),o=(n("PJYZ"),n("7W2i")),s=n("a1gu"),c=n("Nsbk");function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var a=c(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return s(this,n)}}t.__esModule=!0,t.default=void 0;var u=n("q1tI"),d=function(e){o(n,e);var t=l(n);function n(e){var i;return a(this,n),(i=t.call(this,e))._hasHeadManager=void 0,i.emitChange=function(){i._hasHeadManager&&i.props.headManager.updateHead(i.props.reduceComponentsToState(r(i.props.headManager.mountedInstances),i.props))},i._hasHeadManager=i.props.headManager&&i.props.headManager.mountedInstances,i}return i(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(u.Component);t.default=d},Y4lc:function(e,t,n){e.exports={header:"language_header__3Zs3Q",title:"language_title__3eT6p",titleGopher:"language_titleGopher__e3SOp",main:"language_main__3LAiM",section:"language_section__3n192"}},ZhPi:function(e,t,n){var r=n("WkPL");e.exports=function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},a1gu:function(e,t,n){var r=n("cDf5"),a=n("PJYZ");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?a(e):t}},cDf5:function(e,t){function n(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},g4pe:function(e,t,n){e.exports=n("8Kt/")},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=a},lwsE:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}}},[["2RuU",0,1]]]);