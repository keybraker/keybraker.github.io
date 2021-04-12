(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{104:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(7),o=(r(0),r(242)),c={slug:"0.6.7",title:"0.6.7",author:"Ioannis Tsiakkas",author_title:"developer",author_url:"https://github.com/keybraker",author_image_url:"https://avatars.githubusercontent.com/u/23459466?s=400&u=dcee0bcfb1acb1136df98cedcdc5c77000e402c8&v=4",tags:["discordjs","discord","bot"]},l={permalink:"/blog/0.6.7",editUrl:"https://portal-bot.xyz/blog/blog/2021-04-07-0.6.7.md",source:"@site/blog/2021-04-07-0.6.7.md",description:"NEW command ./invite, to create server invites",date:"2021-04-07T00:00:00.000Z",tags:[{label:"discordjs",permalink:"/blog/tags/discordjs"},{label:"discord",permalink:"/blog/tags/discord"},{label:"bot",permalink:"/blog/tags/bot"}],title:"0.6.7",readingTime:.41,truncated:!0,prevItem:{title:"0.6.8",permalink:"/blog/0.6.8"},nextItem:{title:"0.6.6",permalink:"/blog/0.6.6"}},i=[],p={toc:i};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"NEW command ",Object(o.b)("a",{parentName:"p",href:"/docs/commands/detailed/invite"},"./invite"),", to create server invites",Object(o.b)("br",null),"\nNEW attribute ",Object(o.b)("a",{parentName:"p",href:"/docs/interpreter/objects/attributes/detailed/portal/p.allowed_roles"},"p.allowed_roles")," and ",Object(o.b)("a",{parentName:"p",href:"/docs/interpreter/objects/attributes/detailed/voice/v.allowed_roles"},"v.allowed_roles"),", to allow only a certain role to be able to join",Object(o.b)("br",null)),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Redesigned entire help system to focus on online documentation."),Object(o.b)("li",{parentName:"ul"},"Updated music gif to always display the correct state of the music player."),Object(o.b)("li",{parentName:"ul"},"Refactored all Portal interfaces and removed all unnecessary descriptions."),Object(o.b)("li",{parentName:"ul"},"Redesigned ping reply."),Object(o.b)("li",{parentName:"ul"},"Fixed the way members are added at later date."),Object(o.b)("li",{parentName:"ul"},"Made music image transparent."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("em",{parentName:"li"},"much more"))))}u.isMDXComponent=!0},242:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=u(r),d=n,m=s["".concat(c,".").concat(d)]||s[d]||b[d]||o;return r?a.a.createElement(m,l(l({ref:t},p),{},{components:r})):a.a.createElement(m,l({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var p=2;p<o;p++)c[p]=r[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);