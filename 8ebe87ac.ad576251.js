(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{169:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),a=(n(0),n(238)),c={id:"build",title:"Build",sidebar_label:"Build"},i={unversionedId:"hosting/docker/build",id:"hosting/docker/build",isDocsHomePage:!1,title:"Build",description:"docker-compose",source:"@site/docs/hosting/docker/build.md",slug:"/hosting/docker/build",permalink:"/docs/hosting/docker/build",editUrl:"https://portal-bot.xyz/docs/hosting/docker/build.md",version:"current",sidebar_label:"Build",sidebar:"docs",previous:{title:"Prerequisites",permalink:"/docs/hosting/docker/prerequisites"},next:{title:"Configuration",permalink:"/docs/hosting/docker/configuration"}},l=[{value:"docker-compose",id:"docker-compose",children:[]},{value:"standalone docker container",id:"standalone-docker-container",children:[]}],d={toc:l};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h3",{id:"docker-compose"},"docker-compose"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Go to Portal directory"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",{parentName:"pre"},"$ cd Portal\n"))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Create Portal image and download mongo image"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",{parentName:"pre"},"$ docker-compose build\n"))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Check if everything went well"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",{parentName:"pre"},"$ docker images\n\nREPOSITORY   TAG       IMAGE ID       CREATED          SIZE\nportal       latest    4cfb856dc61d   2 minutes ago   1.27GB\nnode         14        e2885a998904   5 minutes ago    943MB\nmongo        4.4.3     ca8e14b1fda6   4 minutes ago    493MB\n")))),Object(a.b)("hr",null),Object(a.b)("h3",{id:"standalone-docker-container"},"standalone docker container"),Object(a.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"Creating a standalone Portal container means that you have to\nprovide your own mongo database, if you do not know how to it\nbetter use ",Object(a.b)("a",{parentName:"p",href:"/docs/hosting/docker/build/#portal-docker"},"docker-compose")))),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"build Portal"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",{parentName:"pre"},"$ docker build . -f docker/Dockerfile -t portal\n"))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Check if everything went well"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",{parentName:"pre"},"$ docker images\nREPOSITORY   TAG       IMAGE ID       CREATED          SIZE\nportal       latest    4cfb856dc61d   15 minutes ago   1.27GB\n")))))}p.isMDXComponent=!0},238:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=o.a.createContext({}),p=function(e){var t=o.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=p(e.components);return o.a.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),b=p(n),u=r,m=b["".concat(c,".").concat(u)]||b[u]||s[u]||a;return n?o.a.createElement(m,i(i({ref:t},d),{},{components:n})):o.a.createElement(m,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var d=2;d<a;d++)c[d]=n[d];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);