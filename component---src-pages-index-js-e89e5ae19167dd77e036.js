(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"2mql":function(e,t,r){"use strict";var n=r("TOwV"),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},a={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},i={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},s={};function c(e){return n.isMemo(e)?i:s[e.$$typeof]||o}s[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},s[n.Memo]=i;var l=Object.defineProperty,u=Object.getOwnPropertyNames,f=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,d=Object.getPrototypeOf,h=Object.prototype;e.exports=function e(t,r,n){if("string"!=typeof r){if(h){var o=d(r);o&&o!==h&&e(t,o,n)}var i=u(r);f&&(i=i.concat(f(r)));for(var s=c(t),y=c(r),m=0;m<i.length;++m){var v=i[m];if(!(a[v]||n&&n[v]||y&&y[v]||s&&s[v])){var g=p(r,v);try{l(t,v,g)}catch(b){}}}}return t}},RXBc:function(e,t,r){"use strict";r.r(t);var n=r("q1tI"),o=r.n(n),a=r("vOnD"),i=r("zLVn");function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var l=r("dI71"),u=r("TOwV"),f=r("2mql"),p=r.n(f);function d(e,t){if(!e){var r=new Error("loadable: "+t);throw r.framesToPop=1,r.name="Invariant Violation",r}}var h=o.a.createContext();var y={initialChunks:{}};var m=function(e){return e};function v(e){var t=e.defaultResolveComponent,r=void 0===t?m:t,n=e.render,a=e.onLoad;function f(e,t){void 0===t&&(t={});var f=function(e){return"function"==typeof e?{requireAsync:e,resolve:function(){},chunkName:function(){}}:e}(e),m={};function v(e){return t.cacheKey?t.cacheKey(e):f.resolve?f.resolve(e):"static"}function g(e,n,o){var a=t.resolveComponent?t.resolveComponent(e,n):r(e);if(t.resolveComponent&&!Object(u.isValidElementType)(a))throw new Error("resolveComponent returned something that is not a React component!");return p()(o,a,{preload:!0}),a}var b,w=function(e){function r(r){var n;return(n=e.call(this,r)||this).state={result:null,error:null,loading:!0,cacheKey:v(r)},d(!r.__chunkExtractor||f.requireSync,"SSR requires `@loadable/babel-plugin`, please install it"),r.__chunkExtractor?(!1===t.ssr||(f.requireAsync(r).catch((function(){return null})),n.loadSync(),r.__chunkExtractor.addChunk(f.chunkName(r))),c(n)):(!1!==t.ssr&&(f.isReady&&f.isReady(r)||f.chunkName&&y.initialChunks[f.chunkName(r)])&&n.loadSync(),n)}Object(l.a)(r,e),r.getDerivedStateFromProps=function(e,t){var r=v(e);return s({},t,{cacheKey:r,loading:t.loading||t.cacheKey!==r})};var o=r.prototype;return o.componentDidMount=function(){this.mounted=!0;var e=this.getCache();e&&"REJECTED"===e.status&&this.setCache(),this.state.loading&&this.loadAsync()},o.componentDidUpdate=function(e,t){t.cacheKey!==this.state.cacheKey&&this.loadAsync()},o.componentWillUnmount=function(){this.mounted=!1},o.safeSetState=function(e,t){this.mounted&&this.setState(e,t)},o.getCacheKey=function(){return v(this.props)},o.getCache=function(){return m[this.getCacheKey()]},o.setCache=function(e){void 0===e&&(e=void 0),m[this.getCacheKey()]=e},o.triggerOnLoad=function(){var e=this;a&&setTimeout((function(){a(e.state.result,e.props)}))},o.loadSync=function(){if(this.state.loading)try{var e=g(f.requireSync(this.props),this.props,k);this.state.result=e,this.state.loading=!1}catch(t){console.error("loadable-components: failed to synchronously load component, which expected to be available",{fileName:f.resolve(this.props),chunkName:f.chunkName(this.props),error:t?t.message:t}),this.state.error=t}},o.loadAsync=function(){var e=this,t=this.resolveAsync();return t.then((function(t){var r=g(t,e.props,{Loadable:k});e.safeSetState({result:r,loading:!1},(function(){return e.triggerOnLoad()}))})).catch((function(t){return e.safeSetState({error:t,loading:!1})})),t},o.resolveAsync=function(){var e=this,t=this.props,r=(t.__chunkExtractor,t.forwardedRef,Object(i.a)(t,["__chunkExtractor","forwardedRef"])),n=this.getCache();return n||((n=f.requireAsync(r)).status="PENDING",this.setCache(n),n.then((function(){n.status="RESOLVED"}),(function(t){console.error("loadable-components: failed to asynchronously load component",{fileName:f.resolve(e.props),chunkName:f.chunkName(e.props),error:t?t.message:t}),n.status="REJECTED"}))),n},o.render=function(){var e=this.props,r=e.forwardedRef,o=e.fallback,a=(e.__chunkExtractor,Object(i.a)(e,["forwardedRef","fallback","__chunkExtractor"])),c=this.state,l=c.error,u=c.loading,f=c.result;if(t.suspense&&"PENDING"===(this.getCache()||this.loadAsync()).status)throw this.loadAsync();if(l)throw l;var p=o||t.fallback||null;return u?p:n({fallback:p,result:f,options:t,props:s({},a,{ref:r})})},r}(o.a.Component),E=(b=w,function(e){return o.a.createElement(h.Consumer,null,(function(t){return o.a.createElement(b,Object.assign({__chunkExtractor:t},e))}))}),k=o.a.forwardRef((function(e,t){return o.a.createElement(E,Object.assign({forwardedRef:t},e))}));return k.preload=function(e){f.requireAsync(e)},k.load=function(e){return f.requireAsync(e)},k}return{loadable:f,lazy:function(e,t){return f(e,s({},t,{suspense:!0}))}}}var g=v({defaultResolveComponent:function(e){return e.__esModule?e.default:e.default||e},render:function(e){var t=e.result,r=e.props;return o.a.createElement(t,r)}}),b=g.loadable,w=g.lazy,E=v({onLoad:function(e,t){e&&t.forwardedRef&&("function"==typeof t.forwardedRef?t.forwardedRef(e):t.forwardedRef.current=e)},render:function(e){var t=e.result,r=e.props;return r.children?r.children(t):null}}),k=E.loadable,C=E.lazy;var O=b;O.lib=k,w.lib=C;var R=r("7oih"),S=a.default.div.withConfig({displayName:"pages__StyledContainer",componentId:"sc-8twvm4-0"})(["height:350px;@media (min-width:520px){height:400px;}@media (min-width:1400px){height:500px;}"]);t.default=function(){return o.a.createElement(R.a,null,o.a.createElement(S,null,"Hello. My name is Ioannis Tsiakkas. I'm a Software Engineer currently working as a backend developer at ",o.a.createElement("a",{href:"https://fairlo.se/",rel:"noopener noreferrer",target:"_blank"},"Fairlo")))}}}]);
//# sourceMappingURL=component---src-pages-index-js-e89e5ae19167dd77e036.js.map