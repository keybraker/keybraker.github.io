(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{172:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return p}));var r=n(3),a=(n(0),n(207));const o={id:"force",title:"force",sidebar_label:"force"},c={unversionedId:"commands/detailed/force",id:"commands/detailed/force",isDocsHomePage:!1,title:"force",description:"|                     Description                      | Argument | Accessible |   Cooldown   |",source:"@site/docs/commands/detailed/force.md",slug:"/commands/detailed/force",permalink:"/docs/commands/detailed/force",editUrl:"https://portal-bot.xyz/docs/commands/detailed/force.md",version:"current",sidebar_label:"force",sidebar:"docs",previous:{title:"focus",permalink:"/docs/commands/detailed/focus"},next:{title:"help",permalink:"/docs/commands/detailed/help"}},i=[{value:"Examples",id:"examples",children:[]}],l={toc:i};function p({components:e,...t}){return Object(a.b)("wrapper",Object(r.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",{parentName:"tr",align:"center"},"Description"),Object(a.b)("th",{parentName:"tr",align:"center"},"Argument"),Object(a.b)("th",{parentName:"tr",align:"center"},"Accessible"),Object(a.b)("th",{parentName:"tr",align:"center"},"Cooldown"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:"center"},"Clones current channel in order to force-update name"),Object(a.b)("td",{parentName:"tr",align:"center"},Object(a.b)("strong",{parentName:"td"},"none")),Object(a.b)("td",{parentName:"tr",align:"center"},Object(a.b)("inlineCode",{parentName:"td"},"admin")),Object(a.b)("td",{parentName:"tr",align:"center"},Object(a.b)("inlineCode",{parentName:"td"},"2min/admin"))))),Object(a.b)("h2",{id:"examples"},"Examples"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Lets say you want to force update your current session, you would type"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",{parentName:"pre",className:"language-bash"},"./force\n")),Object(a.b)("p",{parentName:"li"},"  This will create a copy of your current channel with an updated name and move all users to it\n",Object(a.b)("em",{parentName:"p"},"Main reason of usage is when you have exceeded the allowed once per 5 minutes update and want to refresh your channe's name")))))}p.isMDXComponent=!0},207:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),d=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(n),s=r,m=u["".concat(c,".").concat(s)]||u[s]||b[s]||o;return n?a.a.createElement(m,i(i({ref:t},p),{},{components:n})):a.a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=s;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var p=2;p<o;p++)c[p]=n[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);