(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{157:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return b}));var n=r(3),a=r(7),c=(r(0),r(209)),o={id:"weather",title:"weather",sidebar_label:"weather"},i={unversionedId:"commands/detailed/weather",id:"commands/detailed/weather",isDocsHomePage:!1,title:"weather",description:"|                       Description                        |    Argument     | Accessible | Cooldown |",source:"@site/docs/commands/detailed/weather.md",slug:"/commands/detailed/weather",permalink:"/docs/commands/detailed/weather",editUrl:"https://portal-bot.xyz/docs/commands/detailed/weather.md",version:"current",sidebar_label:"weather",sidebar:"docs",previous:{title:"url",permalink:"/docs/commands/detailed/url"},next:{title:"whoami",permalink:"/docs/commands/detailed/whoami"}},l=[{value:"Examples",id:"examples",children:[]}],p={toc:l};function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:"center"},"Description"),Object(c.b)("th",{parentName:"tr",align:"center"},"Argument"),Object(c.b)("th",{parentName:"tr",align:"center"},"Accessible"),Object(c.b)("th",{parentName:"tr",align:"center"},"Cooldown"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"Replies with the current whether for the requested city"),Object(c.b)("td",{parentName:"tr",align:"center"},Object(c.b)("strong",{parentName:"td"},"!city","_","name")),Object(c.b)("td",{parentName:"tr",align:"center"},Object(c.b)("inlineCode",{parentName:"td"},"everyone")),Object(c.b)("td",{parentName:"tr",align:"center"},Object(c.b)("inlineCode",{parentName:"td"},"none"))))),Object(c.b)("h2",{id:"examples"},"Examples"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"Lets say you want to get current weather forcast for Athens Greece, you would type"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",{parentName:"pre",className:"language-bash"},"./weather Athens\n")),Object(c.b)("p",{parentName:"li"},"  Portal will reply with a ",Object(c.b)("em",{parentName:"p"},"current weather data for Athens Greece")," in an embedded card."))))}b.isMDXComponent=!0},209:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return u}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),b=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=b(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=b(r),s=n,u=d["".concat(o,".").concat(s)]||d[s]||m[s]||c;return r?a.a.createElement(u,i(i({ref:t},p),{},{components:r})):a.a.createElement(u,i({ref:t},p))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,o=new Array(c);o[0]=s;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var p=2;p<c;p++)o[p]=r[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"}}]);