(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{148:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return d}));var r=t(0),o=t.n(r);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var m=o.a.createContext({}),l=function(e){var n=o.a.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},p=function(e){var n=l(e.components);return o.a.createElement(m.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,c=e.originalType,a=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=l(t),b=r,d=p["".concat(a,".").concat(b)]||p[b]||s[b]||c;return t?o.a.createElement(d,u(u({ref:n},m),{},{components:t})):o.a.createElement(d,u({ref:n},m))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=t.length,a=new Array(c);a[0]=b;var u={};for(var i in n)hasOwnProperty.call(n,i)&&(u[i]=n[i]);u.originalType=e,u.mdxType="string"==typeof e?e:r,a[1]=u;for(var m=2;m<c;m++)a[m]=t[m];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},95:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return u})),t.d(n,"toc",(function(){return i})),t.d(n,"default",(function(){return l}));var r=t(3),o=t(7),c=(t(0),t(148)),a={id:"command_run",title:"run",sidebar_label:"run"},u={unversionedId:"commands/command_run",id:"commands/command_run",isDocsHomePage:!1,title:"run",description:"Description: Runs the given command string and returns its output",source:"@site/docs/commands/run.md",slug:"/commands/command_run",permalink:"/docs/commands/command_run",editUrl:"https://portal-bot.xyz/docs/commands/run.md",version:"current",sidebar_label:"run",sidebar:"docs",previous:{title:"roll",permalink:"/docs/commands/command_roll"},next:{title:"set",permalink:"/docs/commands/command_set"}},i=[],m={toc:i};function l(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},m,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"Description: ",Object(c.b)("em",{parentName:"p"},"Runs the given command string and returns its output"),Object(c.b)("br",null),"\nArguments  : ",Object(c.b)("em",{parentName:"p"},"!exec","_","command"),Object(c.b)("br",null),"\nAccessible : ",Object(c.b)("em",{parentName:"p"},"everyone"),Object(c.b)("br",null),"\nCooldown   : ",Object(c.b)("em",{parentName:"p"},"-"),Object(c.b)("br",null))))}l.isMDXComponent=!0}}]);