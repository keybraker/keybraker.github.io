(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{148:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var m=o.a.createContext({}),b=function(e){var t=o.a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},l=function(e){var t=b(e.components);return o.a.createElement(m.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},s=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),l=b(n),s=r,d=l["".concat(c,".").concat(s)]||l[s]||p[s]||a;return n?o.a.createElement(d,u(u({ref:t},m),{},{components:n})):o.a.createElement(d,u({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=s;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:r,c[1]=u;for(var m=2;m<a;m++)c[m]=n[m];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},98:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return b}));var r=n(3),o=n(7),a=(n(0),n(148)),c={id:"command_about",title:"about",sidebar_label:"about"},u={unversionedId:"commands/command_about",id:"commands/command_about",isDocsHomePage:!1,title:"about",description:"Description: Returns an about Portal message",source:"@site/docs/commands/about.md",slug:"/commands/command_about",permalink:"/docs/commands/command_about",editUrl:"https://portal-bot.xyz/docs/commands/about.md",version:"current",sidebar_label:"about",sidebar:"docs",previous:{title:"Commands",permalink:"/docs/commands"},next:{title:"announce",permalink:"/docs/commands/command_announce"}},i=[],m={toc:i};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Description: ",Object(a.b)("em",{parentName:"p"},"Returns an about Portal message"),Object(a.b)("br",null),"\nArguments  : ",Object(a.b)("em",{parentName:"p"},"none"),Object(a.b)("br",null),"\nAccessible : ",Object(a.b)("em",{parentName:"p"},"everyone"),Object(a.b)("br",null),"\nCooldown   : ",Object(a.b)("em",{parentName:"p"},"-"),Object(a.b)("br",null))))}b.isMDXComponent=!0}}]);