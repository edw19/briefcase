(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[3],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=o,t.useAmp=function(){return o(c.default.useContext(a.AmpStateContext))};var r,c=(r=n("q1tI"))&&r.__esModule?r:{default:r},a=n("lwAK");function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,c=void 0!==r&&r,a=e.hasQuery,o=void 0!==a&&a;return n||c&&o}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=u,t.default=void 0;var r,c=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in e)if(Object.prototype.hasOwnProperty.call(e,c)){var a=r?Object.getOwnPropertyDescriptor(e,c):null;a&&(a.get||a.set)?Object.defineProperty(n,c,a):n[c]=e[c]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),a=(r=n("Xuae"))&&r.__esModule?r:{default:r},o=n("lwAK"),i=n("FYa8"),l=n("/0+H");function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function u(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[c.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(c.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===c.default.Fragment?e.concat(c.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var f=["name","httpEquiv","charSet","itemProp"];function h(e,t){return e.reduce((function(e,t){var n=c.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(d,[]).reverse().concat(u(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(c){var a=!0;if(c.key&&"number"!==typeof c.key&&c.key.indexOf("$")>0){var o=c.key.slice(c.key.indexOf("$")+1);e.has(o)?a=!1:e.add(o)}switch(c.type){case"title":case"base":t.has(c.type)?a=!1:t.add(c.type);break;case"meta":for(var i=0,l=f.length;i<l;i++){var s=f[i];if(c.props.hasOwnProperty(s))if("charSet"===s)n.has(s)?a=!1:n.add(s);else{var u=c.props[s],d=r[s]||new Set;d.has(u)?a=!1:(d.add(u),r[s]=d)}}}return a}}()).reverse().map((function(e,t){var n=e.key||t;return c.default.cloneElement(e,{key:n})}))}function p(e){var t=e.children,n=(0,c.useContext)(o.AmpStateContext),r=(0,c.useContext)(i.HeadManagerContext);return c.default.createElement(a.default,{reduceComponentsToState:h,headManager:r,inAmpMode:(0,l.isInAmpMode)(n)},t)}p.rewind=function(){};var v=p;t.default=v},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},RIqP:function(e,t,n){var r=n("Ijbi"),c=n("EbDI"),a=n("ZhPi"),o=n("Bnag");e.exports=function(e){return r(e)||c(e)||a(e)||o()}},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),c=n("lwsE"),a=n("W8MJ"),o=(n("PJYZ"),n("7W2i")),i=n("a1gu"),l=n("Nsbk");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=l(e);if(t){var c=l(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return i(this,n)}}t.__esModule=!0,t.default=void 0;var u=n("q1tI"),d=function(e){o(n,e);var t=s(n);function n(e){var a;return c(this,n),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(u.Component);t.default=d},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),c=n("284h");t.__esModule=!0,t.default=void 0;var a,o=c(n("q1tI")),i=n("elyg"),l=n("nOHt"),s=new Map,u=window.IntersectionObserver,d={};var f=function(e,t){var n=a||(u?a=new u((function(e){e.forEach((function(e){if(s.has(e.target)){var t=s.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(e.target),s.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),s.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}s.delete(e)}):function(){}};function h(e,t,n,r){(0,i.isLocalURL)(t)&&(e.prefetch(t,n,r).catch((function(e){0})),d[t+"%"+n]=!0)}var p=function(e){var t=!1!==e.prefetch,n=o.default.useState(),c=r(n,2),a=c[0],s=c[1],p=(0,l.useRouter)(),v=p&&p.pathname||"/",b=o.default.useMemo((function(){var t=(0,i.resolveHref)(v,e.href,!0),n=r(t,2),c=n[0],a=n[1];return{href:c,as:e.as?(0,i.resolveHref)(v,e.as):a||c}}),[v,e.href,e.as]),m=b.href,j=b.as;o.default.useEffect((function(){if(t&&u&&a&&a.tagName&&(0,i.isLocalURL)(m)&&!d[m+"%"+j])return f(a,(function(){h(p,m,j)}))}),[t,a,m,j,p]);var y=e.children,x=e.replace,g=e.shallow,O=e.scroll,w=e.locale;"string"===typeof y&&(y=o.default.createElement("a",null,y));var M=o.Children.only(y),k={ref:function(e){e&&s(e),M&&"object"===typeof M&&M.ref&&("function"===typeof M.ref?M.ref(e):"object"===typeof M.ref&&(M.ref.current=e))},onClick:function(e){M.props&&"function"===typeof M.props.onClick&&M.props.onClick(e),e.defaultPrevented||function(e,t,n,r,c,a,o,l){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(n))&&(e.preventDefault(),null==o&&(o=r.indexOf("#")<0),t[c?"replace":"push"](n,r,{shallow:a,locale:l}).then((function(e){e&&o&&(window.scrollTo(0,0),document.body.focus())})))}(e,p,m,j,x,g,O,w)}};return t&&(k.onMouseEnter=function(e){(0,i.isLocalURL)(m)&&(M.props&&"function"===typeof M.props.onMouseEnter&&M.props.onMouseEnter(e),h(p,m,j,{priority:!0}))}),(e.passHref||"a"===M.type&&!("href"in M.props))&&(k.href=(0,i.addBasePath)((0,i.addLocale)(j,"undefined"!==typeof w?w:p&&p.locale,p&&p.defaultLocale))),o.default.cloneElement(M,k)};t.default=p},h7RS:function(e,t,n){"use strict";var r=n("nKUr"),c=n("q1tI"),a=n.n(c),o=n("8Kt/"),i=n.n(o);function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,c=!1,a=void 0;try{for(var o,i=e[Symbol.iterator]();!(r=(o=i.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(l){c=!0,a=l}finally{try{r||null==i.return||i.return()}finally{if(c)throw a}}return n}}(e,t)||function(e,t){if(e){if("string"===typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var u=n("YFqc"),d=n.n(u),f=n("nOHt");var h=function(){var e=Object(f.useRouter)(),t=s(a.a.useState(!1),2),n=t[0],c=t[1];return Object(r.jsxs)("nav",{className:"bg-lightBlue-500 dark:bg-lightBlue-900 md:hidden ",children:[Object(r.jsxs)("div",{className:"flex items-center justify-between px-4 py-3",children:[Object(r.jsx)("div",{className:"uppercase text-white font-medium",children:Object(r.jsx)(d.a,{href:"/",children:"Edwin"})}),Object(r.jsx)("div",{className:"",children:Object(r.jsx)("button",{onClick:function(){return c(!n)},children:n?Object(r.jsx)("svg",{className:"svg-icon",viewBox:"0 0 20 20",children:Object(r.jsx)("path",{fill:"none",d:"M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z"})}):Object(r.jsx)("svg",{className:"svg-icon",viewBox:"0 0 20 20",children:Object(r.jsx)("path",{fill:"none",d:"M3.314,4.8h13.372c0.41,0,0.743-0.333,0.743-0.743c0-0.41-0.333-0.743-0.743-0.743H3.314 c-0.41,0-0.743,0.333-0.743,0.743C2.571,4.467,2.904,4.8,3.314,4.8z M16.686,15.2H3.314c-0.41,0-0.743,0.333-0.743,0.743 s0.333,0.743,0.743,0.743h13.372c0.41,0,0.743-0.333,0.743-0.743S17.096,15.2,16.686,15.2z M16.686,9.257H3.314 c-0.41,0-0.743,0.333-0.743,0.743s0.333,0.743,0.743,0.743h13.372c0.41,0,0.743-0.333,0.743-0.743S17.096,9.257,16.686,9.257z"})})})})]}),Object(r.jsxs)("div",{className:n?"block":"hidden",children:[Object(r.jsx)("div",{style:{cursor:"pointer"},className:"block px-4 text-white py-3 hover:bg-lightBlue-600",onClick:function(){return e.push("/")},children:Object(r.jsx)(d.a,{href:"/",children:"Home"})}),Object(r.jsx)("div",{style:{cursor:"pointer"},className:"block px-4 text-white py-3 hover:bg-lightBlue-600",onClick:function(){return e.push("/about")},children:Object(r.jsx)(d.a,{href:"/about",children:"About"})}),Object(r.jsx)("div",{style:{cursor:"pointer"},className:"block px-4 text-white py-3 hover:bg-lightBlue-600",onClick:function(){return e.push("/skills")},children:Object(r.jsx)(d.a,{href:"/skills",children:"Skills"})})]})]})};var p=function(){var e=Object(f.useRouter)();return Object(r.jsx)("aside",{className:"bg-lightBlue-500 dark:bg-lightBlue-900 hidden md:block md:w-3/12 lg:w-3/12 xl:w-3/12",children:Object(r.jsx)("div",{className:"flex min-h-screen",children:Object(r.jsxs)("nav",{className:"m-auto list-none container text-center",children:[Object(r.jsx)("li",{style:{cursor:"pointer"},onClick:function(){return e.push("/")},className:"py-2 hover:bg-lightBlue-600 hover:dark:bg-blue-500 text-xl  text-white ".concat("/"===e.pathname?"font-bold":""),children:Object(r.jsx)(d.a,{href:"/",children:"Home"})}),Object(r.jsx)("li",{style:{cursor:"pointer"},onClick:function(){return e.push("/skills")},className:"py-2 hover:bg-lightBlue-600 hover:dark:bg-blue-500 text-xl  text-white ".concat("/skills"===e.pathname?"font-bold":""),children:Object(r.jsx)(d.a,{href:"/skills",children:"My Skills"})}),Object(r.jsx)("li",{style:{cursor:"pointer"},onClick:function(){return e.push("/about")},className:"py-2 hover:bg-lightBlue-600 hover:dark:bg-blue-500 text-xl  text-white ".concat("/about"===e.pathname?"font-bold":""),children:Object(r.jsx)(d.a,{href:"/about",children:"About me"})})]})})})};var v=function(){var e=s(a.a.useState(),2),t=e[0],n=e[1];return Object(r.jsx)("div",{className:"absolute w-full md:w-9/12 lg:w-9/12 xl:w-9/12",children:Object(r.jsx)("div",{className:"grid grid-cols-1 justify-items-end",children:Object(r.jsx)("div",{className:"mr-5 pt-3",children:Object(r.jsx)("button",{onClick:function(){return function(){var e=document.querySelector("html").classList;"dark"==localStorage.theme?(n(!1),e.remove("dark"),localStorage.removeItem("theme")):(n(!0),e.add("dark"),localStorage.theme="dark")}()},children:t?Object(r.jsx)("svg",{className:"svg-icon-light",viewBox:"0 0 20 20",children:Object(r.jsx)("path",{fill:"none",d:"M5.114,5.726c0.169,0.168,0.442,0.168,0.611,0c0.168-0.169,0.168-0.442,0-0.61L3.893,3.282c-0.168-0.168-0.442-0.168-0.61,0c-0.169,0.169-0.169,0.442,0,0.611L5.114,5.726z M3.955,10c0-0.239-0.193-0.432-0.432-0.432H0.932C0.693,9.568,0.5,9.761,0.5,10s0.193,0.432,0.432,0.432h2.591C3.761,10.432,3.955,10.239,3.955,10 M10,3.955c0.238,0,0.432-0.193,0.432-0.432v-2.59C10.432,0.693,10.238,0.5,10,0.5S9.568,0.693,9.568,0.932v2.59C9.568,3.762,9.762,3.955,10,3.955 M14.886,5.726l1.832-1.833c0.169-0.168,0.169-0.442,0-0.611c-0.169-0.168-0.442-0.168-0.61,0l-1.833,1.833c-0.169,0.168-0.169,0.441,0,0.61C14.443,5.894,14.717,5.894,14.886,5.726 M5.114,14.274l-1.832,1.833c-0.169,0.168-0.169,0.441,0,0.61c0.168,0.169,0.442,0.169,0.61,0l1.833-1.832c0.168-0.169,0.168-0.442,0-0.611C5.557,14.106,5.283,14.106,5.114,14.274 M19.068,9.568h-2.591c-0.238,0-0.433,0.193-0.433,0.432s0.194,0.432,0.433,0.432h2.591c0.238,0,0.432-0.193,0.432-0.432S19.307,9.568,19.068,9.568 M14.886,14.274c-0.169-0.168-0.442-0.168-0.611,0c-0.169,0.169-0.169,0.442,0,0.611l1.833,1.832c0.168,0.169,0.441,0.169,0.61,0s0.169-0.442,0-0.61L14.886,14.274z M10,4.818c-2.861,0-5.182,2.32-5.182,5.182c0,2.862,2.321,5.182,5.182,5.182s5.182-2.319,5.182-5.182C15.182,7.139,12.861,4.818,10,4.818M10,14.318c-2.385,0-4.318-1.934-4.318-4.318c0-2.385,1.933-4.318,4.318-4.318c2.386,0,4.318,1.933,4.318,4.318C14.318,12.385,12.386,14.318,10,14.318 M10,16.045c-0.238,0-0.432,0.193-0.432,0.433v2.591c0,0.238,0.194,0.432,0.432,0.432s0.432-0.193,0.432-0.432v-2.591C10.432,16.238,10.238,16.045,10,16.045"})}):Object(r.jsx)("svg",{className:"svg-icon",viewBox:"0 0 20 20",children:Object(r.jsx)("path",{fill:"none",d:"M10.544,8.717l1.166-0.855l1.166,0.855l-0.467-1.399l1.012-0.778h-1.244L11.71,5.297l-0.466,1.244H10l1.011,0.778L10.544,8.717z M15.986,9.572l-0.467,1.244h-1.244l1.011,0.777l-0.467,1.4l1.167-0.855l1.165,0.855l-0.466-1.4l1.011-0.777h-1.244L15.986,9.572z M7.007,6.552c0-2.259,0.795-4.33,2.117-5.955C4.34,1.042,0.594,5.07,0.594,9.98c0,5.207,4.211,9.426,9.406,9.426c2.94,0,5.972-1.354,7.696-3.472c-0.289,0.026-0.987,0.044-1.283,0.044C11.219,15.979,7.007,11.759,7.007,6.552 M10,18.55c-4.715,0-8.551-3.845-8.551-8.57c0-3.783,2.407-6.999,5.842-8.131C6.549,3.295,6.152,4.911,6.152,6.552c0,5.368,4.125,9.788,9.365,10.245C13.972,17.893,11.973,18.55,10,18.55 M19.406,2.304h-1.71l-0.642-1.71l-0.642,1.71h-1.71l1.39,1.069l-0.642,1.924l1.604-1.176l1.604,1.176l-0.642-1.924L19.406,2.304z"})})})})})})};t.a=function(e){var t=e.children;return Object(r.jsxs)("div",{children:[Object(r.jsxs)(i.a,{children:[Object(r.jsx)("title",{children:"Edwin Narv\xe1ez"}),Object(r.jsx)("link",{rel:"shortcut icon",href:"briefcase/favicon.ico"})]}),Object(r.jsx)(h,{}),Object(r.jsx)("div",{className:"min-h-screen",children:Object(r.jsxs)("div",{className:"flex min-h-screen",children:[Object(r.jsxs)("div",{className:"min-h-screen w-full md:w-9/12 lg:w-9/12 xl:w-9/12 bg-cyan-50 dark:bg-blueGray-800 ",children:[Object(r.jsx)(v,{}),Object(r.jsx)("main",{children:t})]}),Object(r.jsx)(p,{})]})})]})}},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var c=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=c}}]);