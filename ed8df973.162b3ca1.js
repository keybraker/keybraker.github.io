(window.webpackJsonp=window.webpackJsonp||[]).push([[152],{224:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(3),o=r(7),a=(r(0),r(238)),c={slug:"0.6.7",title:"0.6.7",author:"Ioannis Tsiakkas",author_title:"developer",author_url:"https://github.com/keybraker",author_image_url:"https://avatars.githubusercontent.com/u/23459466?s=400&u=dcee0bcfb1acb1136df98cedcdc5c77000e402c8&v=4",tags:["discordjs","discord","bot"]},i={permalink:"/blog/0.6.7",editUrl:"https://portal-bot.xyz/blog/blog/2021-04-07-0.6.7.md",source:"@site/blog/2021-04-07-0.6.7.md",description:"NEW command ./invite, to create server invites",date:"2021-04-07T00:00:00.000Z",tags:[{label:"discordjs",permalink:"/blog/tags/discordjs"},{label:"discord",permalink:"/blog/tags/discord"},{label:"bot",permalink:"/blog/tags/bot"}],title:"0.6.7",readingTime:.41,truncated:!0,prevItem:{title:"0.6.8",permalink:"/blog/0.6.8"},nextItem:{title:"0.6.6",permalink:"/blog/0.6.6"}},l=[],p={toc:l};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"NEW command ",Object(a.b)("a",{parentName:"p",href:"/docs/commands/detailed/invite"},"./invite"),", to create server invites",Object(a.b)("br",null),"\nNEW attribute ",Object(a.b)("a",{parentName:"p",href:"/docs/interpreter/objects/attributes/detailed/portal/p.allowed_roles"},"p.allowed_roles")," and ",Object(a.b)("a",{parentName:"p",href:"/docs/interpreter/objects/attributes/detailed/voice/v.allowed_roles"},"v.allowed_roles"),", to allow only a certain role to be able to join",Object(a.b)("br",null)))}u.isMDXComponent=!0},238:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),u=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(r),d=n,f=s["".concat(c,".").concat(d)]||s[d]||b[d]||a;return r?o.a.createElement(f,i(i({ref:t},p),{},{components:r})):o.a.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var p=2;p<a;p++)c[p]=r[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);