(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{DL4o:function(e,t,n){},"QV/D":function(e,t,n){},jk3P:function(e,t,n){},wCYt:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),i=(n("E9XD"),n("17x9")),o=n.n(i);function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function c(e,t,n){return t&&s(e.prototype,t),n&&s(e,n),e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function m(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&function(e,t){(Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}(e,t)}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?g(e):t}function _(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=f(e);if(t){var r=f(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return y(this,n)}}var w={return:13,arrowLeft:37,arrowUp:38,arrowRight:39,arrowDown:40,space:32};w.keyCodes=Object.keys(w).reduce((function(e,t){return e[w[t]]=t,e}),{});var v={"faq-row-wrapper":"styles_faq-row-wrapper__3vA1D","faq-row":"styles_faq-row__2YF3c","row-body":"styles_row-body__1NvUo","row-title":"styles_row-title__1YiiY","no-tabfocus":"styles_no-tabfocus__1HmyD","row-title-text":"styles_row-title-text__1MuhU","icon-wrapper":"styles_icon-wrapper__2cftw",closed:"styles_closed__39w54","row-content":"styles_row-content__QOGZd",animate:"styles_animate__3ecdr",static:"styles_static__3chYW",expanded:"styles_expanded__3elPy",expanding:"styles_expanding__2OAFB","row-content-text":"styles_row-content-text__2sgAB"};!function(e,t){void 0===t&&(t={});var n=t.insertAt;if("undefined"!=typeof document){var a=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===n&&a.firstChild?a.insertBefore(r,a.firstChild):a.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}(".styles_faq-row-wrapper__3vA1D {\n  background-color: var(--faq-bg-color, white); }\n  .styles_faq-row-wrapper__3vA1D h2 {\n    margin: 0;\n    color: var(--title-text-color, black);\n    font-size: var(--title-text-size, 30px); }\n  .styles_faq-row-wrapper__3vA1D .styles_faq-row__2YF3c {\n    display: flex;\n    justify-content: space-between;\n    padding: 5px 0;\n    border-bottom: 1px solid #ccc; }\n  .styles_faq-row-wrapper__3vA1D .styles_row-body__1NvUo .styles_faq-row__2YF3c {\n    flex-direction: column;\n    position: relative; }\n    .styles_faq-row-wrapper__3vA1D .styles_row-body__1NvUo .styles_faq-row__2YF3c .styles_row-title__1YiiY {\n      padding: 10px 0;\n      display: flex;\n      justify-content: space-between;\n      color: var(--row-title-color, black);\n      font-size: var(--row-title-text-size, large);\n      cursor: pointer;\n      align-items: center; }\n      .styles_faq-row-wrapper__3vA1D .styles_row-body__1NvUo .styles_faq-row__2YF3c .styles_row-title__1YiiY.styles_no-tabfocus__1HmyD {\n        outline: none; }\n      .styles_faq-row-wrapper__3vA1D .styles_row-body__1NvUo .styles_faq-row__2YF3c .styles_row-title__1YiiY .styles_row-title-text__1MuhU {\n        padding-right: 3em; }\n      .styles_faq-row-wrapper__3vA1D .styles_row-body__1NvUo .styles_faq-row__2YF3c .styles_row-title__1YiiY .styles_icon-wrapper__2cftw {\n        max-width: 25px;\n        max-height: 25px;\n        margin: 0;\n        padding: 0;\n        color: var(--arrow-color, black);\n        transform: rotate(0deg);\n        transition: transform var(--transition-duration, 0.3s);\n        position: absolute;\n        top: 13px;\n        right: 12px; }\n        .styles_faq-row-wrapper__3vA1D .styles_row-body__1NvUo .styles_faq-row__2YF3c .styles_row-title__1YiiY .styles_icon-wrapper__2cftw svg {\n          width: 100%;\n          height: 100%; }\n        .styles_faq-row-wrapper__3vA1D .styles_row-body__1NvUo .styles_faq-row__2YF3c .styles_row-title__1YiiY .styles_icon-wrapper__2cftw svg {\n          fill: var(--arrow-color, black); }\n      .styles_faq-row-wrapper__3vA1D .styles_row-body__1NvUo .styles_faq-row__2YF3c .styles_row-title__1YiiY.styles_closed__39w54 + .styles_row-content__QOGZd {\n        visibility: hidden; }\n        .styles_faq-row-wrapper__3vA1D .styles_row-body__1NvUo .styles_faq-row__2YF3c .styles_row-title__1YiiY.styles_closed__39w54 + .styles_row-content__QOGZd.styles_animate__3ecdr {\n          opacity: 0;\n          transition: height var(--transition-duration, 0.3s); }\n        .styles_faq-row-wrapper__3vA1D .styles_row-body__1NvUo .styles_faq-row__2YF3c .styles_row-title__1YiiY.styles_closed__39w54 + .styles_row-content__QOGZd.styles_static__3chYW {\n          display: none; }\n      .styles_faq-row-wrapper__3vA1D .styles_row-body__1NvUo .styles_faq-row__2YF3c .styles_row-title__1YiiY.styles_expanded__3elPy + .styles_row-content__QOGZd {\n        visibility: visible; }\n        .styles_faq-row-wrapper__3vA1D .styles_row-body__1NvUo .styles_faq-row__2YF3c .styles_row-title__1YiiY.styles_expanded__3elPy + .styles_row-content__QOGZd.styles_static__3chYW {\n          display: block; }\n      .styles_faq-row-wrapper__3vA1D .styles_row-body__1NvUo .styles_faq-row__2YF3c .styles_row-title__1YiiY.styles_expanded__3elPy .styles_icon-wrapper__2cftw {\n        transform: rotate(180deg); }\n      .styles_faq-row-wrapper__3vA1D .styles_row-body__1NvUo .styles_faq-row__2YF3c .styles_row-title__1YiiY.styles_expanding__2OAFB .styles_icon-wrapper__2cftw {\n        transform: rotate(180deg); }\n    .styles_faq-row-wrapper__3vA1D .styles_row-body__1NvUo .styles_faq-row__2YF3c .styles_row-content__QOGZd {\n      overflow: hidden;\n      transition: height var(--transition-duration, 0.3s);\n      transition-timing-function: var(--timing-function, ease); }\n      .styles_faq-row-wrapper__3vA1D .styles_row-body__1NvUo .styles_faq-row__2YF3c .styles_row-content__QOGZd .styles_row-content-text__2sgAB {\n        color: var(--row-content-color, black);\n        font-size: var(--row-content-text-size, medium);\n        padding: var(--row-content-padding-top, 0) var(--row-content-padding-right, 0) var(--row-content-padding-bottom, 0) var(--row-content-padding-left, 0); }\n");var h=function(e){m(n,a.PureComponent);var t=_(n);function n(){var e;l(this,n);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return u(g(e=t.call.apply(t,[this].concat(i))),"state",{isExpanded:!1,ref:r.a.createRef(),rowRef:r.a.createRef(),height:0,rowClassName:"closed"}),u(g(e),"finishTransition",(function(){var t=e.state.isExpanded;e.setState({rowClassName:t?"expanded":"closed"})})),u(g(e),"toggle",(function(t){e.setState((function(){return{isExpanded:t}}))})),u(g(e),"expand",(function(){e.setState((function(e){return{isExpanded:!e.isExpanded}}))})),u(g(e),"keyPress",(function(t){var n=t.keyCode?t.keyCode:t.which;switch(w.keyCodes[n]){case"space":case"return":t.preventDefault(),t.stopPropagation(),e.expand()}})),u(g(e),"setHeight",(function(){var t=e.state,n=t.ref,a=t.isExpanded,r=n.current.scrollHeight;e.setState({height:a?r:0})})),e}return c(n,[{key:"getSnapshotBeforeUpdate",value:function(e,t){var n=t.isExpanded,a=this.state.isExpanded,r=this.props.config,i=(r=void 0===r?{}:r).animate,o=void 0===i||i;return a!==n?{rowClassName:a?o?"expanding":"expanded":o?"closing":"closed"}:null}},{key:"componentDidUpdate",value:function(e,t,n){var a=this.props.config,r=(a=void 0===a?{}:a).animate,i=void 0===r||r;null!==n&&this.setState(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},n),i?this.setHeight:void 0)}},{key:"componentDidMount",value:function(){var e=this,t=this.state.rowRef;if(this.props.getRowOptions){var n={expand:function(){e.toggle(!0)},close:function(){e.toggle(!1)},scrollIntoView:function(e){e?t.current.scrollIntoView(e):t.current.scrollIntoView()}};this.props.getRowOptions(n)}}},{key:"render",value:function(){var e=this.props,t=e.data,n=t.title,a=t.content,i=e.config,o=(i=void 0===i?{}:i).animate,l=void 0===o||o,s=i.arrowIcon,c=i.tabFocus,u=void 0!==c&&c,p=this.state,m=p.isExpanded,f=p.ref,g=p.height,y=p.rowClassName,_=p.rowRef,w={onClick:this.expand,role:"button","aria-expanded":m,"aria-controls":"react-faq-rowcontent-".concat(this.props.rowid),onKeyPress:this.keyPress,onKeyDown:this.keyPress};u&&(w.tabIndex=0);var h={role:"region",id:"react-faq-rowcontent-".concat(this.props.rowid),"aria-expanded":m,"aria-hidden":!m,onTransitionEnd:this.finishTransition};l&&(h.style={height:g});var b=["row-title",y,v["row-title"],v[y],u?"":v["no-tabfocus"]].filter(Boolean).join(" "),E=s||r.a.createElement("div",{dangerouslySetInnerHTML:{__html:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="36px" height="36px"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/><path d="M0 0h24v24H0V0z" fill="none"/></svg>'},className:"arrow-image ".concat(v["arrow-image"]),alt:"Expand arrow"}),q=[v["row-content"],"row-content",l?v.animate:v.static].join(" "),x=[v["row-content-text"],"row-content-text"].join(" "),P=a&&"string"==typeof a?r.a.createElement("div",{className:x,dangerouslySetInnerHTML:{__html:a}}):r.a.createElement("div",{className:x},a);return r.a.createElement("section",{className:"faq-row ".concat(v["faq-row"]),role:"listitem",ref:_},r.a.createElement("div",d({className:b},w),r.a.createElement("div",{className:"row-title-text ".concat(v["row-title-text"]),id:"react-faq-rowtitle-".concat(this.props.rowid)},n),r.a.createElement("span",{className:"icon-wrapper ".concat(v["icon-wrapper"]),"aria-hidden":"true"},E)),r.a.createElement("div",d({className:q},h,{ref:f}),P))}}]),n}();u(h,"propTypes",{config:o.a.object,data:o.a.object,rowid:o.a.number,getRowOptions:o.a.func});var b=function(e){m(n,a.PureComponent);var t=_(n);function n(){var e;l(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return u(g(e=t.call.apply(t,[this].concat(r))),"state",{rowsOption:[]}),e}return c(n,[{key:"componentDidMount",value:function(){this.props.getRowOptions&&this.props.getRowOptions(this.state.rowsOption)}},{key:"render",value:function(){var e=this,t=this.props.data||{},n=t.title,a=t.rows,i=void 0===a?[]:a,o=this.props,l=o.styles,s=void 0===l?{}:l,c=o.config,u=((c=void 0===c?{}:c).animate,{"--faq-bg-color":s.bgColor,"--title-text-color":s.titleTextColor,"--title-text-size":s.titleTextSize,"--row-title-color":s.rowTitleColor,"--row-title-text-size":s.rowTitleTextSize,"--row-content-color":s.rowContentColor,"--row-content-text-size":s.rowContentTextSize,"--row-content-padding-top":s.rowContentPaddingTop,"--row-content-padding-bottom":s.rowContentPaddingBottom,"--row-content-padding-right":s.rowContentPaddingRight,"--row-content-padding-left":s.rowContentPaddingLeft,"--arrow-color":s.arrowColor,"--transition-duration":s.transitionDuration,"--timing-function":s.timingFunc}),d="faq-row-wrapper ".concat(v["faq-row-wrapper"]),p="faq-title ".concat(v["faq-row"]),m="faq-body ".concat(v["row-body"]);return r.a.createElement("div",{className:d,style:u},n?r.a.createElement("section",{className:p},r.a.createElement("h2",null,n)):null,i.length?r.a.createElement("section",{className:m,role:"list"},i.map((function(t,n){return r.a.createElement(h,{data:t,key:n,rowid:n+1,config:e.props.config,getRowOptions:function(t){return e.state.rowsOption[n]=t}})}))):null)}}]),n}();u(b,"propTypes",{data:o.a.object,styles:o.a.object,config:o.a.object,getRowOptions:o.a.func});var E=b,q=n("Wbzz"),x=n("Bl7J"),P=n("vrFN"),k=(n("DL4o"),n("jk3P"),n("QV/D"),function(e,t){var n=e.data.site.siteMetadata.title,a={rows:[{title:"Full pharmacovigilance Support",content:r.a.createElement("div",null,"Medwork's dedicated professionals will ensure full compliance of Marketing Authorization Holders with their regulatory obligations. We provide full pharmacovigilance coverage as well as tailored services that cover specific needs. Our services include:",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("b",null,"Full Post-Marketing Pharmacovigilance Support:"),r.a.createElement("br",null),r.a.createElement("ul",null,r.a.createElement("li",null,"Establishment of a pharmacovigilance System"),r.a.createElement("li",null,"Undertaking EU QPPV/deputy EU QPPV responsibility"),r.a.createElement("li",null,"Local & global literature review"),r.a.createElement("li",null,"Compilation and maintenance of the PSMF"),r.a.createElement("li",null,"Safety information processing"),r.a.createElement("li",null,"Writing and/or reviewing periodic reports"),r.a.createElement("li",null,"Writing RMPs"),r.a.createElement("li",null,"Interaction with Eudravigilance database including XEVMPD"),r.a.createElement("li",null,"DHPC management"),r.a.createElement("li",null,"Pharmacovigilance personnel back-up"),r.a.createElement("li",null,"Training of pharmacovigilance and non-pharmacovigilance personnel"),r.a.createElement("li",null,"Consulting")),r.a.createElement("b",null,"Clinical Trials Pharmacovigilance Support:"),r.a.createElement("ul",null,r.a.createElement("li",null,"Provision of Responsible Person for pharmacovigilance (RP) for clinical trials"),r.a.createElement("li",null,"Eudravigilance registration"),r.a.createElement("li",null,"Assessment and medical review of serious adverse events"),r.a.createElement("li",null,"SUSAR reporting to Eudravigilance and Competent Authorities"),r.a.createElement("li",null,"Ongoing risk/benefit assessment of the IMP"),r.a.createElement("li",null,"Compilation and update of the DSUR")))},{title:"Local literature review for Greece & Cyprus",content:r.a.createElement("div",null,"Medwork operates a comprehensive medical literature monitoring service for Greece and Cyprus.We identify and report to contracted Marketing Authorization Holders safety information that qualifies for ICSR reporting, ongoing product risk- benefit evaluation and PSUR preparation.",r.a.createElement("ul",null,r.a.createElement("li",null,"GREECE: The local Medical Literature Monitoring(service) for Greece includes the review of over 94 Greek medical journals, as well as the published proceedings of local medical conferences.The service is currently provided to a total of 72 companies[Dec 2021 data], ranging from small Greek and European companies to local affiliates of international pharmaceutical companies(including eight of the top 10 global pharmaceutical companies)."),r.a.createElement("li",null,"CYPRUS: The local Medical Literature Monitoring(service) includes the review of 2 Cypriot medical journals as well as published proceedings of local medical conferences.There are currently active contracts with a total of 30 pharmaceutical companies [Dec 2021 data], mainly European and local affiliates of international pharmaceutical companies.")))},{title:"Local QP for Greece & Cyprus",content:r.a.createElement("div",null,"Greece and Cyprus are among the EU countries that"," ",r.a.createElement("b",null,"require the appointment of a local Qualified Person for pharmacovigilance"),", as per the article 104 of Directive 2010/84/EU: “national competent authorities may request the nomination of a contact person for pharmacovigilance issues at national level reporting to the qualified person responsible for pharmacovigilance activities.” Medwork has dedicated, properly qualified, local staff in both countries, who can assume the role and responsibilities of the local QP for pharmacovigilance as well as her/his deputy. Further local pharmacovigilance services include:",r.a.createElement("ul",null,r.a.createElement("li",null,"Handling of safety information as per relevant local regulations"),r.a.createElement("li",null,"Medical information handling"),r.a.createElement("li",null,"Handling of technical complaints about products"),r.a.createElement("li",null,"Regulatory intelligence-monitoring of local legislation governing pharmacovigilance, medical information and PTC handling and informing contracted MAHs")))},{title:"Consultancy & Training",content:r.a.createElement("div",null,r.a.createElement("b",null,"Consultancy services"),r.a.createElement("br",null),"Medwork ",r.a.createElement("b",null,"consults")," Marketing Authorization Holders on all aspects of pharmacovigilance obligations, such as:",r.a.createElement("br",null),"Establishment of a suitable and adequate pharmacovigilance system Management of safety agreements Handling of risk management plans Setting up of a suitable risk-benefit evaluation process Establishment of the appropriate quality structure to support the pharmacovigilance system Special local pharmacovigilance obligations in Greece & Cyprus",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("b",null,"Training services"),r.a.createElement("br",null),"Medwork offers complete ",r.a.createElement("b",null,"training solutions"),", aimed at educating your staff, improving sustainability practices and productivity, as well as optimizing your operational efficiency.",r.a.createElement("br",null),"Each course is delivered by senior practitioners and structured to provide a tangible return on investment.",r.a.createElement("br",null),"Tailored to your specific needs and designed for all skill levels, training can take several forms, including, among others, short courses, long-term structured programmes, group sessions and individual coaching.")},{title:"Pharmacovigilance Auditing",content:r.a.createElement("div",null,"Medwork’s auditing process is similar to the approach taken by the EU Competent Authorities. We offer a very well-structured, low-budget pharmacovigilance audit programme in compliance with EU legislation. We perform pharmacovigilance system audits of main functions, affiliates and contractual partners.",r.a.createElement("br",null),r.a.createElement("br",null),"We can ",r.a.createElement("b",null,"support")," and ",r.a.createElement("b",null,"coach")," Marketing Authorization Holders before and after regulatory inspections. We perform mock inspections to ensure adequacy and compliance of pharmacovigilance systems.")}]},i={rows:[{title:"Full pharmacovigilance Support",content:r.a.createElement("div",null,r.a.createElement("b",null,"Quality management system development / improvement / monitoring according to GCP, GVP, GDP and ISO 9001"),r.a.createElement("br",null),r.a.createElement("ul",null,r.a.createElement("li",null,"Setup and implementation of quality management systems adapted to your business needs with standardized processes reflecting the particularities of your organization, in compliance with legal/regulatory requirements;"),r.a.createElement("li",null,"Review of existing quality management systems for compliance/effectiveness/efficiency and suggestion of alternative solutions;"),r.a.createElement("li",null,"Reengineering of existing quality management systems to improve their compliance, effectiveness and efficiency, and to reduce the effort and resources required;"),r.a.createElement("li",null,"Development and review of quality management system documents;"),r.a.createElement("li",null,"Assumption of quality management responsibilities and duties.")),r.a.createElement("b",null,"Quality management consulting"),r.a.createElement("ul",null,r.a.createElement("li",null,"Identification of improvement areas and development of appropriate risk-based action plans"),r.a.createElement("li",null,"Consulting on individual quality-related issues"),r.a.createElement("li",null,"Consulting on and/or support for GCP, GVP and GDP audits/regulatory inspections (preparation and follow-up)")))},{title:"Local literature review for Greece & Cyprus",content:r.a.createElement("div",null,"Medwork is ideally situated in a geographical area with increasing need for pharmaceutical quality services. Clinical trials and pharmacovigilance systems in Southeast Europe and the Middle East need to be audited against the same quality standards as those in Northwest Europe. Cooperation with a reliable regional partner can contribute to reducing travel and frustration for your staff as well as lowering expenses for your organization.",r.a.createElement("br",null),r.a.createElement("b",null,"We offer:"),r.a.createElement("br",null),"GVP audits (system and/or project/activity specific audits)",r.a.createElement("ul",null,r.a.createElement("li",null,"Internal audits"),r.a.createElement("li",null,"Vendor/external partner audits")))}]},o={bgColor:"none",rowContentColor:"grey"},l={};return r.a.createElement(x.a,{title:n},r.a.createElement(P.a,{title:"Services",keywords:["blog"]}),r.a.createElement("article",{className:"post-content page-template no-image"},r.a.createElement("div",{className:"post-content-body"},r.a.createElement("h2",null,"Services"),r.a.createElement("i",null,"With over ",(new Date).getFullYear()-2005," years of experience Medwork is the leader, with a proven record and a trusted name. Our services include Pharmacovigilance, Quality Management and Materiovigilance and Cosmetovigilance."),r.a.createElement("h5",null,r.a.createElement("a",{href:"/pharmacovigilance"},"Pharmacovigilance")),r.a.createElement("span",null,"Compliance with pharmacovigilance requirements is becoming an increasing challenge for pharmaceutical companies worldwide. In this very demanding environment, Medwork offers a reliable solution for every need related to drug safety. We have an extensive Pharmacovigilance Department composed of a team of 21 pharmacovigilance professionals and four medical advisors. Our clients range from small local companies to large international corporations. Currently [Dec 2021 data], we have over 117 active contracts with more than 77 clients relating to pharmacovigilance activities. Our services may be fully customized to cover all of a Marketing Authorization Holder’s responsibilities related to drug safety."),r.a.createElement(E,{data:a,styles:o,config:l}),r.a.createElement("h5",null,r.a.createElement("a",{href:"/quality-managment"},"Quality Managment")),r.a.createElement("span",null,"Combining an excellent knowledge of the pharmaceutical environment, a deep understanding of European and international pharmaceutical quality standards and an unwavering commitment to quality, Medwork provides tailored and cost-effective quality management services in the area of ",r.a.createElement("b",null,"Pharmacovigilance (GVP)"),". Medwork can assist you with:",r.a.createElement("ul",null,r.a.createElement("li",null,"Building a corporate quality-oriented mind-set by improving your personnel’s understanding of quality requirements, and communicating and enforcing this message at all levels and functions throughout your organization;"),r.a.createElement("li",null,"Integrating quality into your daily working environment by building quality into all processes, while maintaining flexibility as appropriate to the size and particularities of your organization;"),r.a.createElement("li",null,"Ensuring compliance and minimizing regulatory risk by improving your responsiveness to a demanding and fast-changing environment."))),r.a.createElement(E,{data:i,styles:o,config:l}),r.a.createElement("h5",null,r.a.createElement("a",{href:"/materiovigilance"},"Materiovigilance")),r.a.createElement("span",null,"The principal purpose of materiovigilance is to improve the protection of the health and safety of patients, users and others by reducing the likelihood that incidents related to the use of a medical device will reoccur.",r.a.createElement("br",null),"Medical Devices Directives ensure that adverse incidents are evaluated and, where appropriate, information is disseminated in the form of a National Competent Authority Report (NCAR) with the objective of preventing the repetition of such incidents through the adoption of appropriate corrective actions to be taken in the field.",r.a.createElement("br",null),"Medwork can provide you with a vigilance reporting system that is compliant with MEDDEV 2.12-1 r 6, and develop all the standard operating procedures required.",r.a.createElement("br",null),"Our services include:",r.a.createElement("ul",null,r.a.createElement("li",null,"Pre- and post-marketing vigilance services for all classes of Medical Devices according to the European guideline MEDDEV 2.12-1 rev. 5, including:"),r.a.createElement("li",null,"Preparation of customized Standard Operating Procedures (SOPs) for a Medical Device Vigilance system and reporting procedures for Incidents/Near Incidents;"),r.a.createElement("li",null,"Management of Incidents/Near Incidents: case reception, Quality Control Assessment and preparation of narratives;"),r.a.createElement("li",null,"Expedited reporting of Incidents/Near Incidents: preparation and submission of Manufacturer Incident Reports and Field Safety Notice (FSN) to multiple regulatory authorities where necessary;"),r.a.createElement("li",null,"Periodic Vigilance Reports: complete and submit Periodic Summary/Trend Reports to National Competent Authorities."))),r.a.createElement("h5",null,r.a.createElement("a",{href:"/cosmetovigilance"},"Cosmetovigilance")),r.a.createElement("span",null,"Medwork provides a comprehensive and customizable set of services to assist cosmetics companies in complying with the regulatory directives.",r.a.createElement("br",null),"Our services include:",r.a.createElement("ul",null,r.a.createElement("li",null,"Establishing a cosmetovigilance system"),r.a.createElement("li",null,"Collection and assessment of undesirable events"),r.a.createElement("li",null,"Handling of Serious Undesirable Effects (SUE), including expedited reporting to Competent Authorities"),r.a.createElement("li",null,"Appointment of qualified Medwork personnel as a local contact person"),r.a.createElement("li",null,"Training of personnel on cosmetovigilance, as legally required"))))))});t.default=function(e){return r.a.createElement(q.StaticQuery,{query:"4063793609",render:function(t){return r.a.createElement(k,Object.assign({location:e.location,data:t},e))}})}}}]);
//# sourceMappingURL=component---src-pages-services-js-c18b9742f279d474310e.js.map