(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{2764:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),l=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return o(t,e),t},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=l(n(0)),u=n(2765),c=n(754),d=n(8),s=n(17),f=i(n(2771)),p=i(n(2773)),m=i(n(2775)),v=n(993),h=i(n(2779)),_=i(n(916)),b=i(n(1787)),E=i(n(2780)),y=n(2781);t.default=function(e){var t=e.close,n=e.isOpen,r=e.suggestedArticles,o=void 0===r?[]:r,l=e.hideAcademy,i=void 0!==l&&l,k=u.useZendesk();a.useEffect((function(){n&&c.logHelpCenterOpened()}),[n]),a.useEffect((function(){"loaded"===k.status&&u.ZendeskAPI("webWidget:on","open",t)}),[k.status]);var g,w;return a.default.createElement(m.default,Object.assign({onDismiss:t,title:"Help center",type:"positive",footer:(g={label:"Get in touch",iconPositon:"start",icon:_.default,primary:!0},w={label:"Leave a message",iconPositon:"start",icon:b.default,primary:!0},a.default.createElement("div",{className:y.footerWrapper},"loading"===k.status?a.default.createElement(s.Button,{label:"Loading..."}):a.default.createElement(s.Button,Object.assign({onClick:function(){u.ZendeskAPI("webWidget","open")},fullWidth:!0},k.isLiveSupportEnabled?g:w))))},{isOpen:n,hideAcademy:i}),a.default.createElement("div",null,a.default.createElement(p.default,{title:"Take on-demand training",link:v.TRAINING_PATH,illustration:E.default}),!i&&a.default.createElement(p.default,{title:"Visit the Support Guide",link:v.ACADEMY_URL,illustration:h.default})),o.length>0&&a.default.createElement("div",{className:y.suggestedArticles},o.map((function(e){return a.default.createElement(f.default,{title:e.title,url:e.url,key:e.title})}))),a.default.createElement("div",{className:y.communityLinks},a.default.createElement(d.Box,{ml:1},a.default.createElement(d.Heading,{variant:"heading-6",tag:"h3"},"From the community")),a.default.createElement(f.default,{title:"Visit the Culture Amp community 'People Geeks'",url:v.PEOPLE_GEEKS_URL}),a.default.createElement(f.default,{title:"Visit Culture Amp's blog",url:v.CA_BLOG_URL})))}},2771:function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,o,l=[],i=!0,a=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(l.push(r.value),!t||l.length!==t);i=!0);}catch(e){a=!0,o=e}finally{try{i||null==n.return||n.return()}finally{if(a)throw o}}return l}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=n(1407),a=l(n(0)),u=l(n(755)),c=n(754),d=n(8),s=n(807),f=l(n(440)),p=l(n(1792)),m=n(2772);t.default=function(e){var t=e.title,n=e.url,o=r(i.useStateWithCallbackLazy(!1),2),l=o[0],v=o[1];return a.default.createElement("div",{className:m.root},a.default.createElement("a",{onClick:c.logOutboundLinkClick,className:m.article,target:"_blank",href:n,"data-tip":"Opens in a new tab","data-event":l?"focus":"","data-event-off":l?"focusout":"",onFocus:function(){v(!0,(function(){return u.default.rebuild()}))},onBlur:function(){v(!1,(function(){return u.default.rebuild()}))}},a.default.createElement("div",{className:m.fileIcon},a.default.createElement(d.Icon,{icon:p.default,role:"presentation",inheritSize:!0})),a.default.createElement("span",{className:m.articleTitle},t),a.default.createElement("div",{className:m.arrowIcon},a.default.createElement(d.Icon,{icon:f.default,role:"presentation"})),a.default.createElement(s.VisuallyHidden,null,"Opens in a new tab")))}},2772:function(e,t,n){e.exports={article:"components-Article__article--1_kHA",articleTitle:"components-Article__articleTitle--2ZgEa",arrowIcon:"components-Article__arrowIcon--1elrp",root:"components-Article__root--2ePPr",fileIcon:"components-Article__fileIcon--WfB7L"}},2773:function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,o,l=[],i=!0,a=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(l.push(r.value),!t||l.length!==t);i=!0);}catch(e){a=!0,o=e}finally{try{i||null==n.return||n.return()}finally{if(a)throw o}}return l}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=n(1407),a=l(n(0)),u=l(n(755)),c=n(8),d=n(754),s=n(807),f=l(n(440)),p=n(2774);t.default=function(e){var t=e.title,n=e.link,o=e.illustration,l=r(i.useStateWithCallbackLazy(!1),2),m=l[0],v=l[1];return a.default.createElement("div",{className:p.root},a.default.createElement("a",{onClick:d.logOutboundLinkClick,className:p.mainLink,href:n,target:"_blank","data-tip":"Opens in a new tab","data-event":m?"focus":"","data-event-off":m?"focusout":"",onFocus:function(){v(!0,(function(){return u.default.rebuild()}))},onBlur:function(){v(!1,(function(){return u.default.rebuild()}))}},a.default.createElement("div",{className:p.leftContent},a.default.createElement("div",{className:p.illustration},a.default.createElement(c.Icon,{icon:o,role:"presentation",inheritSize:!0})),a.default.createElement("p",{className:p.title},t)),a.default.createElement("div",{className:p.arrowIcon},a.default.createElement(c.Icon,{icon:f.default,role:"presentation"})),a.default.createElement(s.VisuallyHidden,null,"Opens in a new tab")))}},2774:function(e,t,n){e.exports={mainLink:"components-MainLink__mainLink--3QsLq",title:"components-MainLink__title--2QT0U",arrowIcon:"components-MainLink__arrowIcon--1UR_1",root:"components-MainLink__root--3WrxZ",illustration:"components-MainLink__illustration--3L0rq",leftContent:"components-MainLink__leftContent--2HE7q"}},2775:function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,o,l=[],i=!0,a=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(l.push(r.value),!t||l.length!==t);i=!0);}catch(e){a=!0,o=e}finally{try{i||null==n.return||n.return()}finally{if(a)throw o}}return l}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var l=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&l(t,e,n);return i(t,e),t},u=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var c=n(8),d=n(17),s=n(3701),f=n(2776),p=u(n(3710)),m=a(n(0)),v=u(n(755)),h=u(n(2777)),_=u(n(7)),b=u(n(154)),E=n(2778);var y=function(e){var t,n,o,l=e.children,i=e.footer,a=e.hideAcademy,u=e.onDismiss,s=e.title,f=e.headerRef,p=function(){var e=r(m.useState(void 0),2),t=e[0],n=e[1];return m.useEffect((function(){function e(){n(window.innerHeight)}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),t}(),y=r(m.useState(!1),2),k=y[0],g=y[1],w=m.useRef(null);return m.useLayoutEffect((function(){if(i&&w.current){var e=w.current.getBoundingClientRect().height;g(w.current.scrollHeight>e)}}),[i,p,w]),m.default.createElement(m.default.Fragment,null,m.default.createElement(v.default,{place:"left",effect:"solid"}),m.default.createElement("div",{className:E.overflowWrapper,ref:w},m.default.createElement("div",{className:E.topContent},m.default.createElement("div",{className:E.closeButton},m.default.createElement(d.IconButton,{icon:b.default,label:"close","data-automation-id":"close-helper-center-button",onClick:u,reversed:!0})),m.default.createElement("div",{className:E.header,ref:f,"data-testid":"help-center-header",tabIndex:-1},m.default.createElement(c.Heading,{variant:"heading-2",tag:"h2",color:"white"},s)),!a&&m.default.createElement(h.default,null)),m.default.createElement("div",{className:E.middleContent},l)),!a&&i&&m.default.createElement("div",{className:_.default((t={},n=E.boxShadow,o=k,n in t?Object.defineProperty(t,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[n]=o,t))},i))};t.default=function(e){var t=e.isOpen,n=e.title,o=e.onDismiss,l=e.children,i=e.footer,a=e.hideAcademy,u=void 0!==a&&a;m.useEffect((function(){function e(e){"Escape"===e.key&&o()}return window.addEventListener("keyup",e),function(){return window.removeEventListener("keyup",e)}}),[]);var c=m.useRef(null),d=m.useRef(null),v=r(m.useState((function(){return function(){}})),2),h=v[0],_=v[1];return m.useEffect((function(){if(t){var e=f.createAriaHider(c.current,!0);_((function(){return e}))}else h();return h}),[t]),m.default.createElement("div",{ref:c},m.default.createElement(s.Transition,{show:t,beforeEnter:function(){var e;return null===(e=null==d?void 0:d.current)||void 0===e?void 0:e.focus()}},m.default.createElement(s.Transition.Child,{className:E.backdropLayer,enter:E.fadeAnimation,leave:E.fadeAnimation,enterFrom:E.backdropHidden,enterTo:E.backdropShown,leaveFrom:E.backdropShown,leaveTo:E.backdropHidden,onClick:o}),m.default.createElement(s.Transition.Child,{className:E.sidePanel,enter:E.slideAnimation,leave:E.slideAnimation,enterFrom:E.isClosed,enterTo:E.isOpen,leaveFrom:E.isOpen,leaveTo:E.isClosed},m.default.createElement(p.default,{returnFocus:!0,autoFocus:!1,lockProps:{"data-testid":"focus-lock"}},m.default.createElement(y,{footer:i,hideAcademy:u,onDismiss:o,title:n,headerRef:d},l)))))}},2776:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createAriaHider=void 0;var r=["SCRIPT","STYLE"],o=[];function l(e){for(var t=[],n=e.nextElementSibling;n;)r.includes(n.nodeName)||t.push(n),n=n.nextElementSibling;for(var o=e.previousElementSibling;o;)r.includes(o.nodeName)||t.push(o),o=o.previousElementSibling;return t}t.createAriaHider=function e(t){var n,r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return r&&(o=[]),l(t).forEach((function(e){var t=e.getAttribute("aria-hidden");"true"!==t&&(e.setAttribute("aria-hidden","true"),o.push({node:e,attr:t}))})),"BODY"!=(null===(n=t.parentNode)||void 0===n?void 0:n.nodeName)&&e(t.parentNode),function(){o.forEach((function(e){"string"!=typeof e.attr?e.node.removeAttribute("aria-hidden"):e.node.setAttribute("aria-hidden",e.attr)}))}}},2777:function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,o,l=[],i=!0,a=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(l.push(r.value),!t||l.length!==t);i=!0);}catch(e){a=!0,o=e}finally{try{i||null==n.return||n.return()}finally{if(a)throw o}}return l}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var l=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&l(t,e,n);return i(t,e),t};Object.defineProperty(t,"__esModule",{value:!0});var u=a(n(0)),c=n(754),d=n(993),s=n(24);t.default=function(){var e=r(u.useState(""),2),t=e[0],n=e[1];return u.default.createElement("form",{action:d.SUPPORT_SEARCH_URL,method:"get",onSubmit:function(){c.logOutboundLink(t,d.SUPPORT_SEARCH_URL)},target:"_blank"},u.default.createElement(s.SearchField,{secondary:!0,labelText:"Search the Support Guide...",name:"query",value:t,placeholder:"Search the Support Guide...",onChange:function(e){return n(e.currentTarget.value)},onClear:function(){return n("")}}))}},2778:function(e,t,n){e.exports={sidePanel:"components-Modal__sidePanel--Fb7JR",backdropLayer:"components-Modal__backdropLayer--ga4LC",overflowWrapper:"components-Modal__overflowWrapper--1QJaB",topContent:"components-Modal__topContent--2lFB6",closeButton:"components-Modal__closeButton--280pY",header:"components-Modal__header--SBrjj",fadeAnimation:"components-Modal__fadeAnimation--1b4_D",boxShadow:"components-Modal__boxShadow--qXO-U",backdropHidden:"components-Modal__backdropHidden--2mSYR",backdropShown:"components-Modal__backdropShown--CUycU",slideAnimation:"components-Modal__slideAnimation--R3q7a",isClosed:"components-Modal__isClosed--4Alnp",isOpen:"components-Modal__isOpen--3da7b"}},2779:function(e,t,n){"use strict";n.r(t);var r=n(9),o=n.n(r),l=n(10),i=new o.a({id:"ca-icon-book.icon",use:"ca-icon-book.icon-usage",viewBox:"0 0 94 94",content:'<symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 94 94" id="ca-icon-book.icon"><path fill-rule="evenodd" clip-rule="evenodd" d="M86.18 47.013c0 21.631-17.536 39.167-39.167 39.167S7.846 68.644 7.846 47.013 25.382 7.846 47.013 7.846 86.18 25.382 86.18 47.013z" fill="#F9F9F9" /><path fill-rule="evenodd" clip-rule="evenodd" d="M47.276 20.024c5.467-7.816 29.27-6.93 29.27-6.93v41.68s-20.08-.748-27.613 5.21h-3.315c-7.532-5.958-27.612-5.21-27.612-5.21v-41.68s23.803-.885 29.27 6.93z" fill="#EBEBEB" /><path d="M47.276 20.024c5.467-7.816 29.27-6.93 29.27-6.93v41.68s-20.08-.748-27.613 5.21h-3.315c-7.532-5.958-27.612-5.21-27.612-5.21v-41.68s23.803-.885 29.27 6.93" stroke="#3D4442" stroke-width=".784" stroke-linecap="round" stroke-linejoin="round" /><path fill-rule="evenodd" clip-rule="evenodd" d="M20.555 11.802s21.786-.799 26.721 6.256V58.96c-4.935-7.054-26.721-6.255-26.721-6.255V11.802z" fill="#fff" /><path clip-rule="evenodd" d="M20.555 11.802s21.786-.799 26.721 6.256V58.96c-4.935-7.054-26.721-6.255-26.721-6.255V11.802z" stroke="#3D4442" stroke-width=".392" stroke-linecap="round" stroke-linejoin="round" /><path fill-rule="evenodd" clip-rule="evenodd" d="M73.997 11.802s-21.786-.799-26.721 6.256V58.96c4.935-7.054 26.721-6.255 26.721-6.255v-40.93" fill="#fff" /><path d="M73.997 11.802s-21.786-.799-26.721 6.256V58.96c4.935-7.054 26.721-6.255 26.721-6.255v-40.93" stroke="#3D4442" stroke-width=".392" stroke-linecap="round" stroke-linejoin="round" /><path fill-rule="evenodd" clip-rule="evenodd" d="M50.835 19.396v32.81c2.932-1.193 6.67-2.038 11.254-2.554a89.601 89.601 0 018.35-.52V15.33c-7.277.121-16.472 1.337-19.604 4.066z" fill="#7CC6B1" /><path fill-rule="evenodd" clip-rule="evenodd" d="M66.25 31.925a5.943 5.943 0 11-11.886 0 5.943 5.943 0 0111.886 0z" fill="#fff" /><path clip-rule="evenodd" d="M57.468 34.702a.478.478 0 01-.472-.553 3.357 3.357 0 016.621 0 .478.478 0 01-.472.553h-5.677z" stroke="#3D4442" stroke-width=".392" /><path clip-rule="evenodd" d="M61.42 29.61a1.113 1.113 0 11-2.226 0 1.113 1.113 0 012.225 0z" stroke="#3D4442" stroke-width=".392" stroke-linecap="round" stroke-linejoin="round" /><path fill-rule="evenodd" clip-rule="evenodd" d="M69.854 71.388c0 1.255-10.226 2.272-22.84 2.272-12.616 0-22.842-1.017-22.842-2.272s10.226-2.272 22.841-2.272 22.841 1.017 22.841 2.272zM44.03 23.775V22c-5.193-2.778-13.948-3.44-19.173-3.574" fill="#EBEBEB" /><path d="M44.03 23.775V22c-5.193-2.778-13.948-3.44-19.173-3.574" stroke="#3D4442" stroke-width=".392" stroke-linecap="round" stroke-linejoin="round" /><path fill-rule="evenodd" clip-rule="evenodd" d="M44.03 31.704V29.93c-5.193-2.778-13.948-3.44-19.173-3.574" fill="#EBEBEB" /><path d="M44.03 31.704V29.93c-5.193-2.778-13.948-3.44-19.173-3.574" stroke="#3D4442" stroke-width=".392" stroke-linecap="round" stroke-linejoin="round" /><path fill-rule="evenodd" clip-rule="evenodd" d="M44.03 39.632v-1.774c-5.193-2.777-13.948-3.44-19.173-3.573" fill="#EBEBEB" /><path d="M44.03 39.632v-1.774c-5.193-2.777-13.948-3.44-19.173-3.573" stroke="#3D4442" stroke-width=".392" stroke-linecap="round" stroke-linejoin="round" /><path fill-rule="evenodd" clip-rule="evenodd" d="M44.03 47.413V45.64c-5.193-2.777-13.948-3.44-19.173-3.573" fill="#EBEBEB" /><path d="M44.03 47.413V45.64c-5.193-2.777-13.948-3.44-19.173-3.573" stroke="#3D4442" stroke-width=".392" stroke-linecap="round" stroke-linejoin="round" /></symbol>'});l.a.add(i);t.default=i},2780:function(e,t,n){"use strict";n.r(t);var r=n(9),o=n.n(r),l=n(10),i=new o.a({id:"ca-icon-video.icon",use:"ca-icon-video.icon-usage",viewBox:"0 0 94 94",content:'<symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 94 94" id="ca-icon-video.icon"><mask id="ca-icon-video.icon_a" maskUnits="userSpaceOnUse" x="7" y="7" width="80" height="80"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.833 7.833H86.22V86.22H7.833V7.833z" fill="#fff" /></mask><g mask="url(#ca-icon-video.icon_a)"><path fill-rule="evenodd" clip-rule="evenodd" d="M86.22 47.027c0 21.645-17.548 39.193-39.194 39.193-21.645 0-39.193-17.548-39.193-39.193 0-21.646 17.548-39.194 39.193-39.194 21.646 0 39.193 17.548 39.193 39.194z" fill="#F9F9F9" /></g><path fill-rule="evenodd" clip-rule="evenodd" d="M69.883 72.202c0 1.256-10.233 2.274-22.857 2.274-12.623 0-22.856-1.018-22.856-2.274s10.233-2.274 22.856-2.274c12.624 0 22.857 1.018 22.857 2.274z" fill="#EBEBEB" /><path fill-rule="evenodd" clip-rule="evenodd" d="M18.404 20.133v-1.822a2.677 2.677 0 012.67-2.67h51.879a2.677 2.677 0 012.67 2.67v1.822h-57.22z" fill="#fff" /><path fill-rule="evenodd" clip-rule="evenodd" d="M75.622 20.133v32.516a2.677 2.677 0 01-2.669 2.67h-51.88a2.677 2.677 0 01-2.669-2.67V20.133h57.218z" fill="#F6939E" /><path clip-rule="evenodd" d="M72.953 55.318h-51.88a2.677 2.677 0 01-2.669-2.669V18.311a2.677 2.677 0 012.67-2.67h51.879a2.677 2.677 0 012.67 2.67v34.338a2.677 2.677 0 01-2.67 2.67z" stroke="#3D4442" stroke-width=".783" stroke-linecap="round" stroke-linejoin="round" /><path fill-rule="evenodd" clip-rule="evenodd" d="M55.648 36.904l-6.864 3.963-6.863 3.962V28.98l6.863 3.963 6.864 3.962z" fill="#fff" /><path d="M18.404 20.133h57.218" stroke="#3D4442" stroke-width=".783" stroke-linecap="round" stroke-linejoin="round" /><path clip-rule="evenodd" d="M22.839 17.887a.242.242 0 11-.483 0 .242.242 0 01.483 0zm2.245 0a.242.242 0 11-.483 0 .242.242 0 01.483 0zm2.246 0a.242.242 0 11-.484 0 .242.242 0 01.483 0z" stroke="#3D4442" stroke-width=".783" stroke-linecap="round" stroke-linejoin="round" /></symbol>'});l.a.add(i);t.default=i},2781:function(e,t,n){e.exports={suggestedArticles:"lib-HelpCenter__suggestedArticles--2i2LW",communityLinks:"lib-HelpCenter__communityLinks--3AHa9",footerWrapper:"lib-HelpCenter__footerWrapper--1wm0W"}},2782:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.HelpCenterEventListener=t.onHelpCenterToggle=t.toggleHelpCenter=void 0;var o=r(n(0)),l=n(2783),i=l.createEventBus("TOGGLE_HELP_CENTER"),a=i.subscribeFn,u=i.publishFn;t.toggleHelpCenter=u,t.onHelpCenterToggle=a;t.HelpCenterEventListener=function(e){var n=e.children,r=l.useEventBus(t.onHelpCenterToggle,"closed");return o.default.createElement(o.default.Fragment,null,n({isOpen:"open"===r,close:function(){return t.toggleHelpCenter("closed")}}))}},754:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.logSuccessfulSupportTicket=t.logHelpCenterOpened=t.logOutboundLinkClick=t.logOutboundLink=void 0;var r=n(2768),o=n(993);t.logOutboundLink=function(e,t){r.logEvent("Outbound Destination Visited",{Context:o.GLOBAL_CONTEXT,"Element clicked name":e,"Destination domain":new URL(t).hostname})};t.logOutboundLinkClick=function(e){var n=e.currentTarget,r=n.href,o=n.innerText;t.logOutboundLink(o,r)};t.logHelpCenterOpened=function(){var e;r.logEvent("Help Panel Viewed",{Context:null===(e=window.location)||void 0===e?void 0:e.pathname})};t.logSuccessfulSupportTicket=function(){r.logEvent("Support Ticket Created",{Context:o.GLOBAL_CONTEXT})}},993:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.GLOBAL_CONTEXT=t.CA_BLOG_URL=t.SUPPORT_SEARCH_URL=t.PEOPLE_GEEKS_URL=t.ACADEMY_URL=t.TRAINING_PATH=void 0,t.TRAINING_PATH="/redirect/training",t.ACADEMY_URL="https://academy.cultureamp.com",t.PEOPLE_GEEKS_URL="https://answers.peoplegeeks.com",t.SUPPORT_SEARCH_URL="https://support.cultureamp.com/hc/en-us/search",t.CA_BLOG_URL="https://cultureamp.com/blog",t.GLOBAL_CONTEXT="Global help panel"}}]);
//# sourceMappingURL=https://ui.perform-preprod.usw2.staging-us.cultureamp-cdn.com/chunk-vendor~2627291b-6162340c53db7655aacd.bundle.js.map