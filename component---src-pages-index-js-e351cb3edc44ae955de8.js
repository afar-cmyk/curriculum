/*! For license information please see component---src-pages-index-js-e351cb3edc44ae955de8.js.LICENSE.txt */
(self.webpackChunkcurriculum=self.webpackChunkcurriculum||[]).push([[678],{5706:function(e,t,r){"use strict";var n=r(9789),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},a={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},i={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},c={};function u(e){return n.isMemo(e)?i:c[e.$$typeof]||o}c[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},c[n.Memo]=i;var l=Object.defineProperty,s=Object.getOwnPropertyNames,f=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,m=Object.getPrototypeOf,d=Object.prototype;e.exports=function e(t,r,n){if("string"!=typeof r){if(d){var o=m(r);o&&o!==d&&e(t,o,n)}var i=s(r);f&&(i=i.concat(f(r)));for(var c=u(t),b=u(r),x=0;x<i.length;++x){var y=i[x];if(!(a[y]||n&&n[y]||b&&b[y]||c&&c[y])){var v=p(r,y);try{l(t,y,v)}catch(g){}}}}return t}},841:function(e,t){"use strict";var r="function"==typeof Symbol&&Symbol.for,n=r?Symbol.for("react.element"):60103,o=r?Symbol.for("react.portal"):60106,a=r?Symbol.for("react.fragment"):60107,i=r?Symbol.for("react.strict_mode"):60108,c=r?Symbol.for("react.profiler"):60114,u=r?Symbol.for("react.provider"):60109,l=r?Symbol.for("react.context"):60110,s=r?Symbol.for("react.async_mode"):60111,f=r?Symbol.for("react.concurrent_mode"):60111,p=r?Symbol.for("react.forward_ref"):60112,m=r?Symbol.for("react.suspense"):60113,d=r?Symbol.for("react.suspense_list"):60120,b=r?Symbol.for("react.memo"):60115,x=r?Symbol.for("react.lazy"):60116,y=r?Symbol.for("react.block"):60121,v=r?Symbol.for("react.fundamental"):60117,g=r?Symbol.for("react.responder"):60118,M=r?Symbol.for("react.scope"):60119;function h(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case s:case f:case a:case c:case i:case m:return e;default:switch(e=e&&e.$$typeof){case l:case p:case x:case b:case u:return e;default:return t}}case o:return t}}}function w(e){return h(e)===f}t.AsyncMode=s,t.ConcurrentMode=f,t.ContextConsumer=l,t.ContextProvider=u,t.Element=n,t.ForwardRef=p,t.Fragment=a,t.Lazy=x,t.Memo=b,t.Portal=o,t.Profiler=c,t.StrictMode=i,t.Suspense=m,t.isAsyncMode=function(e){return w(e)||h(e)===s},t.isConcurrentMode=w,t.isContextConsumer=function(e){return h(e)===l},t.isContextProvider=function(e){return h(e)===u},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return h(e)===p},t.isFragment=function(e){return h(e)===a},t.isLazy=function(e){return h(e)===x},t.isMemo=function(e){return h(e)===b},t.isPortal=function(e){return h(e)===o},t.isProfiler=function(e){return h(e)===c},t.isStrictMode=function(e){return h(e)===i},t.isSuspense=function(e){return h(e)===m},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===a||e===f||e===c||e===i||e===m||e===d||"object"==typeof e&&null!==e&&(e.$$typeof===x||e.$$typeof===b||e.$$typeof===u||e.$$typeof===l||e.$$typeof===p||e.$$typeof===v||e.$$typeof===g||e.$$typeof===M||e.$$typeof===y)},t.typeOf=h},9789:function(e,t,r){"use strict";e.exports=r(841)},9662:function(e,t,r){var n=r(7854),o=r(614),a=r(6330),i=n.TypeError;e.exports=function(e){if(o(e))return e;throw i(a(e)+" is not a function")}},9670:function(e,t,r){var n=r(7854),o=r(111),a=n.String,i=n.TypeError;e.exports=function(e){if(o(e))return e;throw i(a(e)+" is not an object")}},1318:function(e,t,r){var n=r(5656),o=r(1400),a=r(6244),i=function(e){return function(t,r,i){var c,u=n(t),l=a(u),s=o(i,l);if(e&&r!=r){for(;l>s;)if((c=u[s++])!=c)return!0}else for(;l>s;s++)if((e||s in u)&&u[s]===r)return e||s||0;return!e&&-1}};e.exports={includes:i(!0),indexOf:i(!1)}},4326:function(e,t,r){var n=r(1702),o=n({}.toString),a=n("".slice);e.exports=function(e){return a(o(e),8,-1)}},9920:function(e,t,r){var n=r(2597),o=r(3887),a=r(1236),i=r(3070);e.exports=function(e,t,r){for(var c=o(t),u=i.f,l=a.f,s=0;s<c.length;s++){var f=c[s];n(e,f)||r&&n(r,f)||u(e,f,l(t,f))}}},8880:function(e,t,r){var n=r(9781),o=r(3070),a=r(9114);e.exports=n?function(e,t,r){return o.f(e,t,a(1,r))}:function(e,t,r){return e[t]=r,e}},9114:function(e){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},9781:function(e,t,r){var n=r(7293);e.exports=!n((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:function(e,t,r){var n=r(7854),o=r(111),a=n.document,i=o(a)&&o(a.createElement);e.exports=function(e){return i?a.createElement(e):{}}},8113:function(e,t,r){var n=r(5005);e.exports=n("navigator","userAgent")||""},7392:function(e,t,r){var n,o,a=r(7854),i=r(8113),c=a.process,u=a.Deno,l=c&&c.versions||u&&u.version,s=l&&l.v8;s&&(o=(n=s.split("."))[0]>0&&n[0]<4?1:+(n[0]+n[1])),!o&&i&&(!(n=i.match(/Edge\/(\d+)/))||n[1]>=74)&&(n=i.match(/Chrome\/(\d+)/))&&(o=+n[1]),e.exports=o},748:function(e){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:function(e,t,r){var n=r(7854),o=r(1236).f,a=r(8880),i=r(1320),c=r(3505),u=r(9920),l=r(4705);e.exports=function(e,t){var r,s,f,p,m,d=e.target,b=e.global,x=e.stat;if(r=b?n:x?n[d]||c(d,{}):(n[d]||{}).prototype)for(s in t){if(p=t[s],f=e.noTargetGet?(m=o(r,s))&&m.value:r[s],!l(b?s:d+(x?".":"#")+s,e.forced)&&void 0!==f){if(typeof p==typeof f)continue;u(p,f)}(e.sham||f&&f.sham)&&a(p,"sham",!0),i(r,s,p,e)}}},7293:function(e){e.exports=function(e){try{return!!e()}catch(t){return!0}}},4374:function(e,t,r){var n=r(7293);e.exports=!n((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}))},6916:function(e,t,r){var n=r(4374),o=Function.prototype.call;e.exports=n?o.bind(o):function(){return o.apply(o,arguments)}},6530:function(e,t,r){var n=r(9781),o=r(2597),a=Function.prototype,i=n&&Object.getOwnPropertyDescriptor,c=o(a,"name"),u=c&&"something"===function(){}.name,l=c&&(!n||n&&i(a,"name").configurable);e.exports={EXISTS:c,PROPER:u,CONFIGURABLE:l}},1702:function(e,t,r){var n=r(4374),o=Function.prototype,a=o.bind,i=o.call,c=n&&a.bind(i,i);e.exports=n?function(e){return e&&c(e)}:function(e){return e&&function(){return i.apply(e,arguments)}}},5005:function(e,t,r){var n=r(7854),o=r(614),a=function(e){return o(e)?e:void 0};e.exports=function(e,t){return arguments.length<2?a(n[e]):n[e]&&n[e][t]}},8173:function(e,t,r){var n=r(9662);e.exports=function(e,t){var r=e[t];return null==r?void 0:n(r)}},7854:function(e,t,r){var n=function(e){return e&&e.Math==Math&&e};e.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof r.g&&r.g)||function(){return this}()||Function("return this")()},2597:function(e,t,r){var n=r(1702),o=r(7908),a=n({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return a(o(e),t)}},3501:function(e){e.exports={}},4664:function(e,t,r){var n=r(9781),o=r(7293),a=r(317);e.exports=!n&&!o((function(){return 7!=Object.defineProperty(a("div"),"a",{get:function(){return 7}}).a}))},8361:function(e,t,r){var n=r(7854),o=r(1702),a=r(7293),i=r(4326),c=n.Object,u=o("".split);e.exports=a((function(){return!c("z").propertyIsEnumerable(0)}))?function(e){return"String"==i(e)?u(e,""):c(e)}:c},2788:function(e,t,r){var n=r(1702),o=r(614),a=r(5465),i=n(Function.toString);o(a.inspectSource)||(a.inspectSource=function(e){return i(e)}),e.exports=a.inspectSource},9909:function(e,t,r){var n,o,a,i=r(8536),c=r(7854),u=r(1702),l=r(111),s=r(8880),f=r(2597),p=r(5465),m=r(6200),d=r(3501),b="Object already initialized",x=c.TypeError,y=c.WeakMap;if(i||p.state){var v=p.state||(p.state=new y),g=u(v.get),M=u(v.has),h=u(v.set);n=function(e,t){if(M(v,e))throw new x(b);return t.facade=e,h(v,e,t),t},o=function(e){return g(v,e)||{}},a=function(e){return M(v,e)}}else{var w=m("state");d[w]=!0,n=function(e,t){if(f(e,w))throw new x(b);return t.facade=e,s(e,w,t),t},o=function(e){return f(e,w)?e[w]:{}},a=function(e){return f(e,w)}}e.exports={set:n,get:o,has:a,enforce:function(e){return a(e)?o(e):n(e,{})},getterFor:function(e){return function(t){var r;if(!l(t)||(r=o(t)).type!==e)throw x("Incompatible receiver, "+e+" required");return r}}}},614:function(e){e.exports=function(e){return"function"==typeof e}},4705:function(e,t,r){var n=r(7293),o=r(614),a=/#|\.prototype\./,i=function(e,t){var r=u[c(e)];return r==s||r!=l&&(o(t)?n(t):!!t)},c=i.normalize=function(e){return String(e).replace(a,".").toLowerCase()},u=i.data={},l=i.NATIVE="N",s=i.POLYFILL="P";e.exports=i},111:function(e,t,r){var n=r(614);e.exports=function(e){return"object"==typeof e?null!==e:n(e)}},1913:function(e){e.exports=!1},2190:function(e,t,r){var n=r(7854),o=r(5005),a=r(614),i=r(7976),c=r(3307),u=n.Object;e.exports=c?function(e){return"symbol"==typeof e}:function(e){var t=o("Symbol");return a(t)&&i(t.prototype,u(e))}},6244:function(e,t,r){var n=r(7466);e.exports=function(e){return n(e.length)}},133:function(e,t,r){var n=r(7392),o=r(7293);e.exports=!!Object.getOwnPropertySymbols&&!o((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&n&&n<41}))},8536:function(e,t,r){var n=r(7854),o=r(614),a=r(2788),i=n.WeakMap;e.exports=o(i)&&/native code/.test(a(i))},3070:function(e,t,r){var n=r(7854),o=r(9781),a=r(4664),i=r(3353),c=r(9670),u=r(4948),l=n.TypeError,s=Object.defineProperty,f=Object.getOwnPropertyDescriptor,p="enumerable",m="configurable",d="writable";t.f=o?i?function(e,t,r){if(c(e),t=u(t),c(r),"function"==typeof e&&"prototype"===t&&"value"in r&&d in r&&!r.writable){var n=f(e,t);n&&n.writable&&(e[t]=r.value,r={configurable:m in r?r.configurable:n.configurable,enumerable:p in r?r.enumerable:n.enumerable,writable:!1})}return s(e,t,r)}:s:function(e,t,r){if(c(e),t=u(t),c(r),a)try{return s(e,t,r)}catch(n){}if("get"in r||"set"in r)throw l("Accessors not supported");return"value"in r&&(e[t]=r.value),e}},1236:function(e,t,r){var n=r(9781),o=r(6916),a=r(5296),i=r(9114),c=r(5656),u=r(4948),l=r(2597),s=r(4664),f=Object.getOwnPropertyDescriptor;t.f=n?f:function(e,t){if(e=c(e),t=u(t),s)try{return f(e,t)}catch(r){}if(l(e,t))return i(!o(a.f,e,t),e[t])}},8006:function(e,t,r){var n=r(6324),o=r(748).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return n(e,o)}},5181:function(e,t){t.f=Object.getOwnPropertySymbols},7976:function(e,t,r){var n=r(1702);e.exports=n({}.isPrototypeOf)},6324:function(e,t,r){var n=r(1702),o=r(2597),a=r(5656),i=r(1318).indexOf,c=r(3501),u=n([].push);e.exports=function(e,t){var r,n=a(e),l=0,s=[];for(r in n)!o(c,r)&&o(n,r)&&u(s,r);for(;t.length>l;)o(n,r=t[l++])&&(~i(s,r)||u(s,r));return s}},5296:function(e,t){"use strict";var r={}.propertyIsEnumerable,n=Object.getOwnPropertyDescriptor,o=n&&!r.call({1:2},1);t.f=o?function(e){var t=n(this,e);return!!t&&t.enumerable}:r},2140:function(e,t,r){var n=r(7854),o=r(6916),a=r(614),i=r(111),c=n.TypeError;e.exports=function(e,t){var r,n;if("string"===t&&a(r=e.toString)&&!i(n=o(r,e)))return n;if(a(r=e.valueOf)&&!i(n=o(r,e)))return n;if("string"!==t&&a(r=e.toString)&&!i(n=o(r,e)))return n;throw c("Can't convert object to primitive value")}},3887:function(e,t,r){var n=r(5005),o=r(1702),a=r(8006),i=r(5181),c=r(9670),u=o([].concat);e.exports=n("Reflect","ownKeys")||function(e){var t=a.f(c(e)),r=i.f;return r?u(t,r(e)):t}},1320:function(e,t,r){var n=r(7854),o=r(614),a=r(2597),i=r(8880),c=r(3505),u=r(2788),l=r(9909),s=r(6530).CONFIGURABLE,f=l.get,p=l.enforce,m=String(String).split("String");(e.exports=function(e,t,r,u){var l,f=!!u&&!!u.unsafe,d=!!u&&!!u.enumerable,b=!!u&&!!u.noTargetGet,x=u&&void 0!==u.name?u.name:t;o(r)&&("Symbol("===String(x).slice(0,7)&&(x="["+String(x).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!a(r,"name")||s&&r.name!==x)&&i(r,"name",x),(l=p(r)).source||(l.source=m.join("string"==typeof x?x:""))),e!==n?(f?!b&&e[t]&&(d=!0):delete e[t],d?e[t]=r:i(e,t,r)):d?e[t]=r:c(t,r)})(Function.prototype,"toString",(function(){return o(this)&&f(this).source||u(this)}))},4488:function(e,t,r){var n=r(7854).TypeError;e.exports=function(e){if(null==e)throw n("Can't call method on "+e);return e}},3505:function(e,t,r){var n=r(7854),o=Object.defineProperty;e.exports=function(e,t){try{o(n,e,{value:t,configurable:!0,writable:!0})}catch(r){n[e]=t}return t}},6200:function(e,t,r){var n=r(2309),o=r(9711),a=n("keys");e.exports=function(e){return a[e]||(a[e]=o(e))}},5465:function(e,t,r){var n=r(7854),o=r(3505),a="__core-js_shared__",i=n[a]||o(a,{});e.exports=i},2309:function(e,t,r){var n=r(1913),o=r(5465);(e.exports=function(e,t){return o[e]||(o[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.22.3",mode:n?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.22.3/LICENSE",source:"https://github.com/zloirock/core-js"})},1400:function(e,t,r){var n=r(9303),o=Math.max,a=Math.min;e.exports=function(e,t){var r=n(e);return r<0?o(r+t,0):a(r,t)}},5656:function(e,t,r){var n=r(8361),o=r(4488);e.exports=function(e){return n(o(e))}},9303:function(e){var t=Math.ceil,r=Math.floor;e.exports=function(e){var n=+e;return n!=n||0===n?0:(n>0?r:t)(n)}},7466:function(e,t,r){var n=r(9303),o=Math.min;e.exports=function(e){return e>0?o(n(e),9007199254740991):0}},7908:function(e,t,r){var n=r(7854),o=r(4488),a=n.Object;e.exports=function(e){return a(o(e))}},7593:function(e,t,r){var n=r(7854),o=r(6916),a=r(111),i=r(2190),c=r(8173),u=r(2140),l=r(5112),s=n.TypeError,f=l("toPrimitive");e.exports=function(e,t){if(!a(e)||i(e))return e;var r,n=c(e,f);if(n){if(void 0===t&&(t="default"),r=o(n,e,t),!a(r)||i(r))return r;throw s("Can't convert object to primitive value")}return void 0===t&&(t="number"),u(e,t)}},4948:function(e,t,r){var n=r(7593),o=r(2190);e.exports=function(e){var t=n(e,"string");return o(t)?t:t+""}},6330:function(e,t,r){var n=r(7854).String;e.exports=function(e){try{return n(e)}catch(t){return"Object"}}},9711:function(e,t,r){var n=r(1702),o=0,a=Math.random(),i=n(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+i(++o+a,36)}},3307:function(e,t,r){var n=r(133);e.exports=n&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(e,t,r){var n=r(9781),o=r(7293);e.exports=n&&o((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},5112:function(e,t,r){var n=r(7854),o=r(2309),a=r(2597),i=r(9711),c=r(133),u=r(3307),l=o("wks"),s=n.Symbol,f=s&&s.for,p=u?s:s&&s.withoutSetter||i;e.exports=function(e){if(!a(l,e)||!c&&"string"!=typeof l[e]){var t="Symbol."+e;c&&a(s,e)?l[e]=s[e]:l[e]=u&&f?f(t):p(t)}return l[e]}},5837:function(e,t,r){r(2109)({global:!0},{globalThis:r(7854)})},5743:function(e,t,r){r(5837)},4242:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return de}});var n=r(7294),o=r.t(n,2),a=r(7462),i=r(3366),c=r(5505),u=r(5470),l=r(2037),s=r(2982),f=r(6486),p=r(9665),m=["sx"];function d(e){var t,r=e.sx,n=function(e){var t={systemProps:{},otherProps:{}};return Object.keys(e).forEach((function(r){p.Gc[r]?t.systemProps[r]=e[r]:t.otherProps[r]=e[r]})),t}((0,i.Z)(e,m)),o=n.systemProps,c=n.otherProps;return t=Array.isArray(r)?[o].concat((0,s.Z)(r)):"function"==typeof r?function(){var e=r.apply(void 0,arguments);return(0,f.P)(e)?(0,a.Z)({},o,e):o}:(0,a.Z)({},o,r),(0,a.Z)({},c,{sx:t})}var b=r(7120),x=r(5893),y=["className","component"];var v=r(3090),g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.defaultTheme,r=e.defaultClassName,o=void 0===r?"MuiBox-root":r,s=e.generateClassName,f=e.styleFunctionSx,p=void 0===f?l.Z:f,m=(0,u.ZP)("div")(p),v=n.forwardRef((function(e,r){var n=(0,b.Z)(t),u=d(e),l=u.className,f=u.component,p=void 0===f?"div":f,v=(0,i.Z)(u,y);return(0,x.jsx)(m,(0,a.Z)({as:p,ref:r,className:(0,c.Z)(l,s?s(o):o),theme:n},v))}));return v}({defaultTheme:(0,r(559).Z)(),defaultClassName:"MuiBox-root",generateClassName:v.Z.generate}),M=g,h=n.createContext(),w=function(e){var t=e.children;return n.createElement(h.Provider,{value:{colorPrincipal:"#4aabc980",barrasColorPrincipal:"#4abac9b3",barrasColorSecundario:"#50c5d540"}},t)},L=h,S=r.p+"static/foto-eee3edb539b9ade442003dccdfdafe1d.jpg",j="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48ZyBpZD0iTGF5ZXJfNSIgZGF0YS1uYW1lPSJMYXllciA1Ij48cmVjdCB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgZmlsbD0iIzBkMGQwZCIvPjxwYXRoIGQ9Ik00NDEuNiwzODQuNTFhMTYuODMsMTYuODMsMCwwLDAtMS0yLjM1TDI3MS4zNCw2NS4yN2ExNy4zNSwxNy4zNSwwLDAsMC0yMS40LTguMDhjLS40MS4xNS0uODQuMzItMS4yNC41MWE0Ljc3LDQuNzcsMCwwLDAtLjU2LjI3LDMuMTgsMy4xOCwwLDAsMC0uMzIuMTZsLS42Ni4zNy0uOTIuNTlhNS4wOSw1LjA5LDAsMCwwLS40NS4zMUwyNDMuOTEsNjFjLS4xNS4xNC0uMjguMjktLjQyLjQzbC0uOC44OGMtLjI0LjMtLjQ4LjYtLjcxLjkxbC0uNjYsMWExMS43NCwxMS43NCwwLDAsMC0uNjcsMS4xNEw3MS40MywzODIuMThhMTYuNTEsMTYuNTEsMCwwLDAtMS4wOSwyLjQ5LDIyLjc3LDIyLjc3LDAsMCwwLTEuNTcsOC4xOWMwLDE3LjEsMjAuMjMsMzIuNjIsNTMuMDcsNDRhMjkxLjQxLDI5MS40MSwwLDAsMCwzNC40LDkuMzhjMTEuMzEsMi40LDIzLjQzLDQuNDEsMzYuMTksNS45NSwxMiwxLjQ3LDI0LjY3LDIuNTQsMzcuNzMsMy4xNXExMi42OC41NywyNS44NC41OWM4Ljc2LDAsMTcuNC0uMjEsMjUuODUtLjU5LDEzLjA2LS42MSwyNS42OC0xLjY4LDM3LjczLTMuMTUsMTIuNzYtMS41NSwyNC44OC0zLjU1LDM2LjE5LTUuOTVhMjkxLjIyLDI5MS4yMiwwLDAsMCwzNC4zOS05LjM4YzMyLjg1LTExLjM3LDUzLjA3LTI2Ljg5LDUzLjA3LTQ0QTIyLjYsMjIuNiwwLDAsMCw0NDEuNiwzODQuNTFaTTMwMi4xNSw0MTkuNTZsLTMwLjgxLTU3LjdhMTcuMzUsMTcuMzUsMCwwLDAtMjEuNC04LjA4Yy0uNDEuMTUtLjg0LjMyLTEuMjQuNTFhNC43Nyw0Ljc3LDAsMCwwLS41Ni4yN2wtLjMyLjE2LS42Ni4zNy0uOTIuNTlhNS4wOSw1LjA5LDAsMCwwLS40NS4zMWwtMS44OCwxLjU3Yy0uMTUuMTQtLjI4LjI5LS40Mi40M2wtLjguODhjLS4yNC4zLS40OC42LS43MS45MWwtLjY2LDFhMTEuNzQsMTEuNzQsMCwwLDAtLjY3LDEuMTRsLTMwLjc5LDU3LjY3Yy0xMi44OS0xLjEtMjUuMjYtMi42NS0zNi45Mi00LjZsNjcuMzMtMTI2LjA5YTE3Ljg1LDE3Ljg1LDAsMCwxLDMxLjQ3LDBMMzM5LjA3LDQxNUMzMjcuNCw0MTYuOTEsMzE1LDQxOC40NiwzMDIuMTUsNDE5LjU2Wm04Ni41My0xNi42NHEtNi44MSwyLjMxLTE0LjMsNC4zN2wtMTAzLTE5M2ExNy4zNSwxNy4zNSwwLDAsMC0yMS40LTguMDljLS40MS4xNi0uODQuMzItMS4yNC41MS0uMTkuMDgtLjM3LjE3LS41Ni4yN2wtLjMyLjE2LS42Ni4zOC0uOTIuNThjLS4xNi4xLS4zMS4yMS0uNDUuMzFMMjQzLjkxLDIxMGwtLjQyLjQyLS44Ljg4Yy0uMjQuMy0uNDguNi0uNzEuOTFsLS42NiwxYTExLjksMTEuOSwwLDAsMC0uNjcsMS4xNWwtMTAzLDE5Mi45MmMtNS0xLjM3LTkuNzYtMi44NC0xNC4yOS00LjM3YTE3LjgzLDE3LjgzLDAsMCwxLTEwLTI1LjNsMTI3LTIzNy44MmExNy44NCwxNy44NCwwLDAsMSwzMS40NywwbDEyNywyMzcuODJBMTcuODMsMTcuODMsMCwwLDEsMzg4LjY4LDQwMi45MloiIGZpbGw9IiMzZDk1YTAiLz48L2c+PC9zdmc+",E=function(){var e=n.useContext(L).colorPrincipal,t=n.useState(!0),r=t[0],o=t[1],a=n.useState(j),i=a[0],c=a[1],u=n.useState("pulso"),l=u[0],s=u[1];n.useEffect((function(){r?(c(j),s("pulso")):(c(S),s("unset"))}),[r]);var f={display:"flex",flexDirection:"column","& h1":{fontSize:{xs:"calc(1rem + 3.58vw)",lg:"calc(1rem + 2.8vw)"},textAlignLast:{xs:"center",sm:"unset"},mt:0,mb:0,color:"#f2f2f2",textDecoration:"underline "+e,textUnderlineOffset:"2px"},"& sub":{fontSize:"calc(0.8rem + 1vw)",fontFamily:"Assistant",fontWeight:300,alignSelf:"center"}},p={display:"flex",alignContent:"center",alignItems:"center",flexDirection:"column",flexWrap:"wrap",justifyContent:"space-evenly",mb:{xs:"45px",md:"75px",lg:"75px"},"& img":{borderRadius:"50%",width:{xs:"calc(110px + 10vw)",lg:"calc(110px + 8vw)"},cursor:"pointer",animationName:l}};return n.createElement(M,{component:"header",className:"titulo",sx:Object.assign({},p)},n.createElement(M,{component:"img",alt:"foto de perfil",src:i,onClick:function(){return o(!r)},onKeyDown:function(){return o(!r)}}),n.createElement(M,{component:"div",sx:Object.assign({},f)},n.createElement("h1",null,"Andrés Felipe Alvarez"),n.createElement("sub",null,"Tecnólogo en Producción de Multimedia")))},N=function(){var e={mb:{xs:"27px",md:"30px",lg:"45px"},"& h3":{color:"#f2f2f2",textDecoration:"underline "+n.useContext(L).colorPrincipal,textUnderlineOffset:"2px",fontSize:{xs:"25px",sm:"30px",lg:"2em"},mt:0,mb:{xs:"10px",lg:"15px"}},"& p":{lineHeight:"calc(1ex / 0.32)",width:{lg:"100%"},fontSize:{xs:"1.125em",lg:"1.2em"},m:0},"& strong":{color:"#f2f2f2"}};return n.createElement(M,{component:"section",className:"acerca",sx:Object.assign({},e)},n.createElement("h3",null,"Sobre Mí"),n.createElement("p",null,n.createElement("strong",null,"Diseñador UI/UX"),", ",n.createElement("strong",null,"editor de videos")," y",n.createElement("strong",null," fotógrafo"),", programador de software utilizando JAVA y Python, desarrollador web utilizando ReactJS y JavaScript, llevando un framework de trabajo ágil SCRUM."),n.createElement("br",null),n.createElement("p",null,"Nivel de ingles intermedio, trabajo en equipo, proactivo, de rápido aprendizaje con las habilidades que puedan ser requeridas para llevar a cabo las tareas encomendadas."))},C=function(e){var t=e.titulo,r=e.organizacion,o=e.fecha;return n.createElement(n.Fragment,null,n.createElement(M,{component:"div",sx:Object.assign({},{border:"solid 1px #11c3db26",borderRadius:"8px",p:"12px",marginRight:0,maxWidth:"374px","&:hover":{border:"solid 1px #11c3db96"},"& h4":{width:"fit-content",fontWeight:700,lineHeight:"calc(0.9ex / 0.32)",fontSize:{xs:"1.06em",xl:"1.13em"},color:"#f2f2f2",m:0},"& p":{width:"fit-content",m:0,fontSize:{xs:"16px",lg:"1.1em",xl:"1.1em"}}})},n.createElement("h4",null,t),n.createElement("p",null,r),n.createElement("p",null,o)))},O=function(){var e={mb:{xs:"46px",md:"48px",lg:"45px"},minWidth:"fit-content","& h3":{color:"#f2f2f2",textDecoration:"underline "+n.useContext(L).colorPrincipal,textUnderlineOffset:"2px",fontSize:{xs:"25px",sm:"30px",lg:"2em"},mt:0,mb:{xs:"10px",lg:"15px"}}};return n.createElement(n.Fragment,null,n.createElement(M,{component:"section",className:"formacion",sx:Object.assign({},e)},n.createElement("h3",null,"Formación Académica"),n.createElement(M,{component:"div",sx:{display:"grid",gridTemplateColumns:{xs:"repeat(auto-fill, minmax(340px, 1fr))"},gridGap:"20px",boxSizing:"border-box"}},n.createElement(C,{titulo:"Diplomado en Programación de Software",organizacion:"UTP / MisiónTIC 2022",fecha:"2021"}),n.createElement(C,{titulo:"Tecnologia en Producción de Multimedia",organizacion:"SENA Unigermana",fecha:"2019"}),n.createElement(C,{titulo:"Diplomado de Fotografía de la Naturaleza",organizacion:"Universidad Nacional de Colombia",fecha:"2019"}),n.createElement(C,{titulo:"Diplomado de Fotografía Avanzada",organizacion:"Escuela de Fotografía del Valle",fecha:"2015"}))))};function z(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var D=r(9408),T=(r(5743),r(7411),r(7154),r(5706),r(4418));o.useInsertionEffect?o.useInsertionEffect:n.useLayoutEffect;function P(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,T.O)(t)}var I=function(){var e=P.apply(void 0,arguments),t="animation-"+e.name;return{name:t,styles:"@keyframes "+t+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}};var A=r(7663),Z=r(9240),k=r(9552);var F=r(8348),U=r(2058),Q=r(8416);function Y(e){return(0,Q.Z)("MuiLinearProgress",e)}(0,r(2194).Z)("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"]);var $,R,W,B,G,_,q,H,X,J,V,K,ee=["className","color","value","valueBuffer","variant"],te=I(q||(q=$||($=z(["\n  0% {\n    left: -35%;\n    right: 100%;\n  }\n\n  60% {\n    left: 100%;\n    right: -90%;\n  }\n\n  100% {\n    left: 100%;\n    right: -90%;\n  }\n"])))),re=I(H||(H=R||(R=z(["\n  0% {\n    left: -200%;\n    right: 100%;\n  }\n\n  60% {\n    left: 107%;\n    right: -8%;\n  }\n\n  100% {\n    left: 107%;\n    right: -8%;\n  }\n"])))),ne=I(X||(X=W||(W=z(["\n  0% {\n    opacity: 1;\n    background-position: 0 -23px;\n  }\n\n  60% {\n    opacity: 0;\n    background-position: 0 -23px;\n  }\n\n  100% {\n    opacity: 1;\n    background-position: -200px -23px;\n  }\n"])))),oe=function(e,t){return"inherit"===t?"currentColor":"light"===e.palette.mode?(0,A.$n)(e.palette[t].main,.62):(0,A._j)(e.palette[t].main,.5)},ae=(0,F.ZP)("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[t.root,t["color".concat((0,Z.Z)(r.color))],t[r.variant]]}})((function(e){var t=e.ownerState,r=e.theme;return(0,a.Z)({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},backgroundColor:oe(r,t.color)},"inherit"===t.color&&"buffer"!==t.variant&&{backgroundColor:"none","&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}},"buffer"===t.variant&&{backgroundColor:"transparent"},"query"===t.variant&&{transform:"rotate(180deg)"})})),ie=(0,F.ZP)("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver:function(e,t){var r=e.ownerState;return[t.dashed,t["dashedColor".concat((0,Z.Z)(r.color))]]}})((function(e){var t=e.ownerState,r=e.theme,n=oe(r,t.color);return(0,a.Z)({position:"absolute",marginTop:0,height:"100%",width:"100%"},"inherit"===t.color&&{opacity:.3},{backgroundImage:"radial-gradient(".concat(n," 0%, ").concat(n," 16%, transparent 42%)"),backgroundSize:"10px 10px",backgroundPosition:"0 -23px"})}),P(J||(J=B||(B=z(["\n    animation: "," 3s infinite linear;\n  "]))),ne)),ce=(0,F.ZP)("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver:function(e,t){var r=e.ownerState;return[t.bar,t["barColor".concat((0,Z.Z)(r.color))],("indeterminate"===r.variant||"query"===r.variant)&&t.bar1Indeterminate,"determinate"===r.variant&&t.bar1Determinate,"buffer"===r.variant&&t.bar1Buffer]}})((function(e){var t=e.ownerState,r=e.theme;return(0,a.Z)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",backgroundColor:"inherit"===t.color?"currentColor":r.palette[t.color].main},"determinate"===t.variant&&{transition:"transform .".concat(4,"s linear")},"buffer"===t.variant&&{zIndex:1,transition:"transform .".concat(4,"s linear")})}),(function(e){var t=e.ownerState;return("indeterminate"===t.variant||"query"===t.variant)&&P(V||(V=G||(G=z(["\n      width: auto;\n      animation: "," 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;\n    "]))),te)})),ue=(0,F.ZP)("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver:function(e,t){var r=e.ownerState;return[t.bar,t["barColor".concat((0,Z.Z)(r.color))],("indeterminate"===r.variant||"query"===r.variant)&&t.bar2Indeterminate,"buffer"===r.variant&&t.bar2Buffer]}})((function(e){var t=e.ownerState,r=e.theme;return(0,a.Z)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},"buffer"!==t.variant&&{backgroundColor:"inherit"===t.color?"currentColor":r.palette[t.color].main},"inherit"===t.color&&{opacity:.3},"buffer"===t.variant&&{backgroundColor:oe(r,t.color),transition:"transform .".concat(4,"s linear")})}),(function(e){var t=e.ownerState;return("indeterminate"===t.variant||"query"===t.variant)&&P(K||(K=_||(_=z(["\n      width: auto;\n      animation: "," 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;\n    "]))),re)})),le=n.forwardRef((function(e,t){var r=(0,U.Z)({props:e,name:"MuiLinearProgress"}),n=r.className,o=r.color,u=void 0===o?"primary":o,l=r.value,s=r.valueBuffer,f=r.variant,p=void 0===f?"indeterminate":f,m=(0,i.Z)(r,ee),d=(0,a.Z)({},r,{color:u,variant:p}),y=function(e){var t=e.classes,r=e.variant,n=e.color,o={root:["root","color".concat((0,Z.Z)(n)),r],dashed:["dashed","dashedColor".concat((0,Z.Z)(n))],bar1:["bar","barColor".concat((0,Z.Z)(n)),("indeterminate"===r||"query"===r)&&"bar1Indeterminate","determinate"===r&&"bar1Determinate","buffer"===r&&"bar1Buffer"],bar2:["bar","buffer"!==r&&"barColor".concat((0,Z.Z)(n)),"buffer"===r&&"color".concat((0,Z.Z)(n)),("indeterminate"===r||"query"===r)&&"bar2Indeterminate","buffer"===r&&"bar2Buffer"]};return(0,D.Z)(o,Y,t)}(d),v=(0,b.Z)(k.Z),g={},M={bar1:{},bar2:{}};if("determinate"===p||"buffer"===p)if(void 0!==l){g["aria-valuenow"]=Math.round(l),g["aria-valuemin"]=0,g["aria-valuemax"]=100;var h=l-100;"rtl"===v.direction&&(h=-h),M.bar1.transform="translateX(".concat(h,"%)")}else 0;if("buffer"===p)if(void 0!==s){var w=(s||0)-100;"rtl"===v.direction&&(w=-w),M.bar2.transform="translateX(".concat(w,"%)")}else 0;return(0,x.jsxs)(ae,(0,a.Z)({className:(0,c.Z)(y.root,n),ownerState:d,role:"progressbar"},g,{ref:t},m,{children:["buffer"===p?(0,x.jsx)(ie,{className:y.dashed,ownerState:d}):null,(0,x.jsx)(ce,{className:y.bar1,ownerState:d,style:M.bar1}),"determinate"===p?null:(0,x.jsx)(ue,{className:y.bar2,ownerState:d,style:M.bar2})]}))})),se=[{habilidad:"JavaScript",puntuacion:65},{habilidad:"ReactJS",puntuacion:65},{habilidad:"Python",puntuacion:50},{habilidad:"Java",puntuacion:40},{habilidad:"MYSQL",puntuacion:40},{habilidad:"GraphQL",puntuacion:40},{habilidad:"Figma",puntuacion:80},{habilidad:"Adobe Premiere Pro",puntuacion:85},{habilidad:"Adobe Media Enconder",puntuacion:75},{habilidad:"Adobe Photoshop",puntuacion:70},{habilidad:"Adobe Illustrator",puntuacion:65},{habilidad:"Adobe After Effects",puntuacion:50}],fe=function(){var e=n.useContext(L),t=e.colorPrincipal,r=e.barrasColorPrincipal,o=e.barrasColorSecundario,a={display:"flex",flexDirection:"column",width:{lg:"100%"},mb:{xs:"42px",md:"48px",lg:"45px"},"& h3":{color:"#f2f2f2",textDecoration:"underline "+t,textUnderlineOffset:"2px",fontSize:{xs:"25px",sm:"30px",lg:"2em"},mt:0,mb:{xs:"10px",lg:"15px"},height:"fit-content"}},i={display:"flex",flexDirection:"column",gap:"3px",fontSize:{xs:"16px",lg:"1.2em"},fontWeight:300,color:"#f2f2f2",marginBottom:"6px",width:"47%",height:"fit-content"},c={height:10,borderRadius:5,backgroundColor:o,"& span":{borderRadius:5,backgroundColor:r},"&:hover span":{backgroundColor:"#4abac9e6"}};return n.createElement(n.Fragment,null,n.createElement(M,{component:"section",className:"habilidades",sx:Object.assign({},a)},n.createElement("h3",null,"Habilidades Tecnicas"),n.createElement("div",{style:Object.assign({},{display:"flex",flexDirection:"row",height:"fit-content",flexWrap:"wrap",justifyContent:"space-between"})},se.map((function(e,t){var r=e.habilidad,o=e.puntuacion;return n.createElement("div",{key:t,style:Object.assign({},i)},r,n.createElement(le,{variant:"determinate",value:o,sx:Object.assign({},c)}))})))))},pe=function(e){var t=e.fecha,r=e.empresa;return n.createElement(n.Fragment,null,n.createElement("div",{style:Object.assign({},{display:"flex",flexDirection:"row",flexWrap:"nowrap",alignItems:"center",gap:"12px",marginBottom:{xs:"0.5vw",lg:"5px"}})},n.createElement("p",{className:"experiencia-fecha"},t),n.createElement("h4",null,r)))},me=function(){var e=n.useContext(L),t={minWidth:"fit-content","& h3":{color:"#f2f2f2",textDecoration:"underline "+e.colorPrincipal,textUnderlineOffset:"2px",fontSize:{xs:"25px",sm:"30px",lg:"2em"},mt:0,mb:{xs:"10px",lg:"15px"}},"& h4":{fontWeight:700,fontSize:{xs:"1.08em",lg:"1.23em"},color:"#f2f2f2",m:0},"& ul p":{m:0,fontSize:{xs:"16px",lg:"1.2em"}}},r={margin:0,pl:"22px",width:{xs:"100%"},listStyle:"square","& li:not(:last-child)":{mb:"10px"},"& li::marker":{color:e.barrasColorPrincipal}};return n.createElement(n.Fragment,null,n.createElement(M,{component:"section",className:"experiencia",sx:Object.assign({},t)},n.createElement("h3",null,"Experiencia Laboral"),n.createElement(M,{component:"div",sx:Object.assign({},{display:"flex",flexDirection:{xs:"column",md:"row"},flexWrap:"wrap",justifyContent:"space-between",rowGap:{xs:"25px",md:"37px"}})},n.createElement("div",{className:"experiencias"},n.createElement(pe,{fecha:"2020",empresa:"Grupo Editorial Norma"}),n.createElement(M,{component:"ul",sx:Object.assign({},r)},n.createElement("li",null,n.createElement("p",null,"Emplantillado de proyectos digitales en la plataforma Netex LearningMaker, utilizando HTML y CSS para ajustar el contenido en base a los guiones provistos por el área de diseño.")),n.createElement("li",null,n.createElement("p",null,"Revisión y ajuste de las actividades para estudiantes en HTML, MATLAB y LaTeX.")))),n.createElement("div",{className:"experiencias"},n.createElement(pe,{fecha:"2018",empresa:"Magenta Estudios"}),n.createElement(M,{component:"ul",sx:Object.assign({},r)},n.createElement("li",null,n.createElement("p",null,"Postproducción de videos para la marca Beckett Simonon que serian utilizados para campañas publicitarias")))),n.createElement("div",{className:"experiencias"},n.createElement(pe,{fecha:"2016",empresa:"HAC Promotor de Artistas"}),n.createElement(M,{component:"ul",sx:Object.assign({},r)},n.createElement("li",null,n.createElement("p",null,"Actualización de la imagen corporativa.")),n.createElement("li",null,n.createElement("p",null,"Creación de piezas publicitarias para redes sociales.")),n.createElement("li",null,n.createElement("p",null,"Producción y postpoducción de videos y fotografías para redes sociales.")),n.createElement("li",null,n.createElement("p",null,"Creación de informes sobre el sondeo diario de las canciones sonadas en la radio, utilizando datos recibidos en formato XML.")))),n.createElement("div",{className:"experiencias"},n.createElement(pe,{fecha:"2015",empresa:"XFilms S.A.S"}),n.createElement(M,{component:"ul",sx:Object.assign({},r)},n.createElement("li",null,n.createElement("p",null,"Postproducción de videos para diferentes marcas, utilizando la suite de Adobe para editar, colorizar y componer los videos que luego serían utilizados en campañas publicitarias.")),n.createElement("li",null,n.createElement("p",null,"Transcodificación de material de video utilizando FFMPEG.")))))))};function de(){return n.createElement(n.Fragment,null,n.createElement(M,{component:"main",sx:Object.assign({},be)},n.createElement(w,null,n.createElement(E,null),n.createElement("article",null,n.createElement(N,null),n.createElement(O,null),n.createElement(fe,null),n.createElement(me,null)))))}var be={backgroundColor:"#0d0d0d",py:{xs:"37.5px",md:"107.5px",lg:"75px"},px:{xs:"60px",md:"215px",lg:"20vw",xl:"30vw"},minHeight:"100vh",minWidth:"fit-content",boxSizing:"border-box",blockSize:"auto"}}}]);
//# sourceMappingURL=component---src-pages-index-js-e351cb3edc44ae955de8.js.map