(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[534],{9768:function(e,t,a){e.exports=function(){"use strict";var e="undefined"!=typeof window?window:void 0!==a.g?a.g:"undefined"!=typeof self?self:{},t="Expected a function",n=NaN,r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,s=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof e&&e&&e.Object===Object&&e,d="object"==typeof self&&self&&self.Object===Object&&self,u=l||d||Function("return this")(),m=Object.prototype.toString,f=Math.max,h=Math.min,p=function(){return u.Date.now()};function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if("symbol"==typeof(t=e)||t&&"object"==typeof t&&"[object Symbol]"==m.call(t))return n;if(v(e)){var t,a="function"==typeof e.valueOf?e.valueOf():e;e=v(a)?a+"":a}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var l=o.test(e);return l||s.test(e)?c(e.slice(2),l?2:8):i.test(e)?n:+e}var x=function(e,a,n){var r=!0,i=!0;if("function"!=typeof e)throw TypeError(t);return v(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),function(e,a,n){var r,i,o,s,c,l,d=0,u=!1,m=!1,x=!0;if("function"!=typeof e)throw TypeError(t);function g(t){var a=r,n=i;return r=i=void 0,d=t,s=e.apply(n,a)}function y(e){var t=e-l;return void 0===l||t>=a||t<0||m&&e-d>=o}function w(){var e,t=p();if(y(t))return j(t);c=setTimeout(w,(e=a-(t-l),m?h(e,o-(t-d)):e))}function j(e){return c=void 0,x&&r?g(e):(r=i=void 0,s)}function N(){var e,t=p(),n=y(t);if(r=arguments,i=this,l=t,n){if(void 0===c)return d=e=l,c=setTimeout(w,a),u?g(e):s;if(m)return c=setTimeout(w,a),g(l)}return void 0===c&&(c=setTimeout(w,a)),s}return a=b(a)||0,v(n)&&(u=!!n.leading,o=(m="maxWait"in n)?f(b(n.maxWait)||0,a):o,x="trailing"in n?!!n.trailing:x),N.cancel=function(){void 0!==c&&clearTimeout(c),d=0,r=l=i=c=void 0},N.flush=function(){return void 0===c?s:j(p())},N}(e,a,{leading:r,maxWait:a,trailing:i})},g=NaN,y=/^\s+|\s+$/g,w=/^[-+]0x[0-9a-f]+$/i,j=/^0b[01]+$/i,N=/^0o[0-7]+$/i,k=parseInt,O="object"==typeof e&&e&&e.Object===Object&&e,E="object"==typeof self&&self&&self.Object===Object&&self,C=O||E||Function("return this")(),z=Object.prototype.toString,_=Math.max,S=Math.min,L=function(){return C.Date.now()};function T(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function A(e){if("number"==typeof e)return e;if("symbol"==typeof(t=e)||t&&"object"==typeof t&&"[object Symbol]"==z.call(t))return g;if(T(e)){var t,a="function"==typeof e.valueOf?e.valueOf():e;e=T(a)?a+"":a}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(y,"");var n=j.test(e);return n||N.test(e)?k(e.slice(2),n?2:8):w.test(e)?g:+e}var M=function(e,t,a){var n,r,i,o,s,c,l=0,d=!1,u=!1,m=!0;if("function"!=typeof e)throw TypeError("Expected a function");function f(t){var a=n,i=r;return n=r=void 0,l=t,o=e.apply(i,a)}function h(e){var a=e-c;return void 0===c||a>=t||a<0||u&&e-l>=i}function p(){var e,a=L();if(h(a))return v(a);s=setTimeout(p,(e=t-(a-c),u?S(e,i-(a-l)):e))}function v(e){return s=void 0,m&&n?f(e):(n=r=void 0,o)}function b(){var e,a=L(),i=h(a);if(n=arguments,r=this,c=a,i){if(void 0===s)return l=e=c,s=setTimeout(p,t),d?f(e):o;if(u)return s=setTimeout(p,t),f(c)}return void 0===s&&(s=setTimeout(p,t)),o}return t=A(t)||0,T(a)&&(d=!!a.leading,i=(u="maxWait"in a)?_(A(a.maxWait)||0,t):i,m="trailing"in a?!!a.trailing:m),b.cancel=function(){void 0!==s&&clearTimeout(s),l=0,n=c=r=s=void 0},b.flush=function(){return void 0===s?o:v(L())},b},q=function(){};function D(e){e&&e.forEach(function(e){var t=Array.prototype.slice.call(e.addedNodes),a=Array.prototype.slice.call(e.removedNodes);if(function e(t){var a=void 0,n=void 0;for(a=0;a<t.length;a+=1)if((n=t[a]).dataset&&n.dataset.aos||n.children&&e(n.children))return!0;return!1}(t.concat(a)))return q()})}function P(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}var H={isSupported:function(){return!!P()},ready:function(e,t){var a=window.document,n=new(P())(D);q=t,n.observe(a.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}},B=function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")},F=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),$=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},R=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,W=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,I=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,Y=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;function G(){return navigator.userAgent||navigator.vendor||window.opera||""}var U=new(function(){function e(){B(this,e)}return F(e,[{key:"phone",value:function(){var e=G();return!(!R.test(e)&&!W.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=G();return!(!I.test(e)&&!Y.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}},{key:"ie11",value:function(){return"-ms-scroll-limit"in document.documentElement.style&&"-ms-ime-align"in document.documentElement.style}}]),e}()),V=function(e,t){var a=void 0;return U.ie11()?(a=document.createEvent("CustomEvent")).initCustomEvent(e,!0,!0,{detail:t}):a=new CustomEvent(e,{detail:t}),document.dispatchEvent(a)},Z=function(e){return e.forEach(function(e,t){var a,n,r,i,o,s;return a=window.pageYOffset,n=e.options,r=e.position,i=e.node,e.data,o=function(){var t;e.animated&&((t=n.animatedClassNames)&&t.forEach(function(e){return i.classList.remove(e)}),V("aos:out",i),e.options.id&&V("aos:in:"+e.options.id,i),e.animated=!1)},void(n.mirror&&a>=r.out&&!n.once?o():a>=r.in?e.animated||((s=n.animatedClassNames)&&s.forEach(function(e){return i.classList.add(e)}),V("aos:in",i),e.options.id&&V("aos:in:"+e.options.id,i),e.animated=!0):e.animated&&!n.once&&o())})},K=function(e){for(var t=0,a=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),a+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:a,left:t}},J=function(e,t,a){var n=e.getAttribute("data-aos-"+t);if(void 0!==n){if("true"===n)return!0;if("false"===n)return!1}return n||a},Q=function(){var e=document.querySelectorAll("[data-aos]");return Array.prototype.map.call(e,function(e){return{node:e}})},X=[],ee=!1,et={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,mirror:!1,anchorPlacement:"top-bottom",startEvent:"DOMContentLoaded",animatedClassName:"aos-animate",initClassName:"aos-init",useClassNames:!1,disableMutationObserver:!1,throttleDelay:99,debounceDelay:50},ea=function(){return document.all&&!window.atob},en=function(){var e,t;arguments.length>0&&void 0!==arguments[0]&&arguments[0]&&(ee=!0),ee&&(e=X,t=et,e.forEach(function(e,a){var n,r,i,o,s,c=J(e.node,"mirror",t.mirror),l=J(e.node,"once",t.once),d=J(e.node,"id"),u=t.useClassNames&&e.node.getAttribute("data-aos"),m=[t.animatedClassName].concat(u?u.split(" "):[]).filter(function(e){return"string"==typeof e});t.initClassName&&e.node.classList.add(t.initClassName),e.position={in:function(e,t,a){var n=window.innerHeight,r=J(e,"anchor"),i=J(e,"anchor-placement"),o=Number(J(e,"offset",i?0:t)),s=i||a,c=e;r&&document.querySelectorAll(r)&&(c=document.querySelectorAll(r)[0]);var l=K(c).top-n;switch(s){case"top-bottom":break;case"center-bottom":l+=c.offsetHeight/2;break;case"bottom-bottom":l+=c.offsetHeight;break;case"top-center":l+=n/2;break;case"center-center":l+=n/2+c.offsetHeight/2;break;case"bottom-center":l+=n/2+c.offsetHeight;break;case"top-top":l+=n;break;case"bottom-top":l+=n+c.offsetHeight;break;case"center-top":l+=n+c.offsetHeight/2}return l+o}(e.node,t.offset,t.anchorPlacement),out:c&&(n=e.node,r=t.offset,window.innerHeight,i=J(n,"anchor"),o=J(n,"offset",r),s=n,i&&document.querySelectorAll(i)&&(s=document.querySelectorAll(i)[0]),K(s).top+s.offsetHeight-o)},e.options={once:l,mirror:c,animatedClassNames:m,id:d}}),Z(X=e),window.addEventListener("scroll",x(function(){Z(X,et.once)},et.throttleDelay)))},er=function(){if(X=Q(),eo(et.disable)||ea())return ei();en()},ei=function(){X.forEach(function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay"),et.initClassName&&e.node.classList.remove(et.initClassName),et.animatedClassName&&e.node.classList.remove(et.animatedClassName)})},eo=function(e){return!0===e||"mobile"===e&&U.mobile()||"phone"===e&&U.phone()||"tablet"===e&&U.tablet()||"function"==typeof e&&!0===e()};return{init:function(e){return et=$(et,e),X=Q(),et.disableMutationObserver||H.isSupported()||(console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),et.disableMutationObserver=!0),et.disableMutationObserver||H.ready("[data-aos]",er),eo(et.disable)||ea()?ei():(document.querySelector("body").setAttribute("data-aos-easing",et.easing),document.querySelector("body").setAttribute("data-aos-duration",et.duration),document.querySelector("body").setAttribute("data-aos-delay",et.delay),-1===["DOMContentLoaded","load"].indexOf(et.startEvent)?document.addEventListener(et.startEvent,function(){en(!0)}):window.addEventListener("load",function(){en(!0)}),"DOMContentLoaded"===et.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1&&en(!0),window.addEventListener("resize",M(en,et.debounceDelay,!0)),window.addEventListener("orientationchange",M(en,et.debounceDelay,!0)),X)},refresh:en,refreshHard:er}}()},2015:function(e,t,a){Promise.resolve().then(a.bind(a,1999))},1999:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return l}});var n=a(9268),r=a(6006),i=a(9768),o=a.n(i);a(3263);var s=a(4508);function c(){return(0,n.jsx)("footer",{children:(0,n.jsxs)("div",{className:"max-w-6xl mx-auto px-4 sm:px-6",children:[(0,n.jsxs)("div",{className:"grid sm:grid-cols-12 gap-8 py-8 md:py-12 border-t border-gray-200",children:[(0,n.jsxs)("div",{className:"sm:col-span-12 lg:col-span-3",children:[(0,n.jsx)("div",{className:"mb-2",children:(0,n.jsx)(s.Z,{})}),(0,n.jsxs)("div",{className:"text-sm text-gray-600",children:[(0,n.jsx)("a",{href:"/terms",className:"text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out",children:"Terms"})," ","\xb7"," ",(0,n.jsx)("a",{href:"/privacy",className:"text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out",children:"Privacy Policy"})]})]}),(0,n.jsxs)("div",{className:"sm:col-span-6 md:col-span-3 lg:col-span-2",children:[(0,n.jsx)("h6",{className:"text-gray-800 font-medium mb-2",children:"Products"}),(0,n.jsxs)("ul",{className:"text-sm",children:[(0,n.jsx)("li",{className:"mb-2",children:(0,n.jsx)("a",{href:"#0",className:"text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out",children:"Web Studio"})}),(0,n.jsx)("li",{className:"mb-2",children:(0,n.jsx)("a",{href:"#0",className:"text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out",children:"DynamicBox Flex"})}),(0,n.jsx)("li",{className:"mb-2",children:(0,n.jsx)("a",{href:"#0",className:"text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out",children:"Programming Forms"})}),(0,n.jsx)("li",{className:"mb-2",children:(0,n.jsx)("a",{href:"#0",className:"text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out",children:"Integrations"})}),(0,n.jsx)("li",{className:"mb-2",children:(0,n.jsx)("a",{href:"#0",className:"text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out",children:"Command-line"})})]})]}),(0,n.jsxs)("div",{className:"sm:col-span-6 md:col-span-3 lg:col-span-2",children:[(0,n.jsx)("h6",{className:"text-gray-800 font-medium mb-2",children:"Resources"}),(0,n.jsxs)("ul",{className:"text-sm",children:[(0,n.jsx)("li",{className:"mb-2",children:(0,n.jsx)("a",{href:"#0",className:"text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out",children:"Documentation"})}),(0,n.jsx)("li",{className:"mb-2",children:(0,n.jsx)("a",{href:"#0",className:"text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out",children:"Tutorials & Guides"})}),(0,n.jsx)("li",{className:"mb-2",children:(0,n.jsx)("a",{href:"#0",className:"text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out",children:"Blog"})}),(0,n.jsx)("li",{className:"mb-2",children:(0,n.jsx)("a",{href:"#0",className:"text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out",children:"Support Center"})}),(0,n.jsx)("li",{className:"mb-2",children:(0,n.jsx)("a",{href:"#0",className:"text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out",children:"Partners"})})]})]}),(0,n.jsxs)("div",{className:"sm:col-span-6 md:col-span-3 lg:col-span-2",children:[(0,n.jsx)("h6",{className:"text-gray-800 font-medium mb-2",children:"Company"}),(0,n.jsxs)("ul",{className:"text-sm",children:[(0,n.jsx)("li",{className:"mb-2",children:(0,n.jsx)("a",{href:"#0",className:"text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out",children:"Home"})}),(0,n.jsx)("li",{className:"mb-2",children:(0,n.jsx)("a",{href:"#0",className:"text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out",children:"About us"})}),(0,n.jsx)("li",{className:"mb-2",children:(0,n.jsx)("a",{href:"#0",className:"text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out",children:"Company values"})}),(0,n.jsx)("li",{className:"mb-2",children:(0,n.jsx)("a",{href:"#0",className:"text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out",children:"Pricing"})}),(0,n.jsx)("li",{className:"mb-2",children:(0,n.jsx)("a",{href:"/privacy",className:"text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out",children:"Privacy Policy"})})]})]}),(0,n.jsxs)("div",{className:"sm:col-span-6 md:col-span-3 lg:col-span-3",children:[(0,n.jsx)("h6",{className:"text-gray-800 font-medium mb-2",children:"Subscribe"}),(0,n.jsx)("p",{className:"text-sm text-gray-600 mb-4",children:"Get the latest news and articles to your inbox every month."}),(0,n.jsx)("form",{children:(0,n.jsx)("div",{className:"flex flex-wrap mb-4",children:(0,n.jsxs)("div",{className:"w-full",children:[(0,n.jsx)("label",{className:"block text-sm sr-only",htmlFor:"newsletter",children:"Email"}),(0,n.jsxs)("div",{className:"relative flex items-center max-w-xs",children:[(0,n.jsx)("input",{id:"newsletter",type:"email",className:"form-input w-full text-gray-800 px-3 py-2 pr-12 text-sm",placeholder:"Your email",required:!0}),(0,n.jsxs)("button",{type:"submit",className:"absolute inset-0 left-auto","aria-label":"Subscribe",children:[(0,n.jsx)("span",{className:"absolute inset-0 right-auto w-px -ml-px my-2 bg-gray-300","aria-hidden":"true"}),(0,n.jsx)("svg",{className:"w-3 h-3 fill-current text-blue-600 mx-3 shrink-0",viewBox:"0 0 12 12",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z",fillRule:"nonzero"})})]})]})]})})})]})]}),(0,n.jsxs)("div",{className:"md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-gray-200",children:[(0,n.jsxs)("ul",{className:"flex mb-4 md:order-1 md:ml-4 md:mb-0",children:[(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"#0",className:"flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out","aria-label":"Twitter",children:(0,n.jsx)("svg",{className:"w-8 h-8 fill-current",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z"})})})}),(0,n.jsx)("li",{className:"ml-4",children:(0,n.jsx)("a",{href:"#0",className:"flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out","aria-label":"Github",children:(0,n.jsx)("svg",{className:"w-8 h-8 fill-current",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z"})})})}),(0,n.jsx)("li",{className:"ml-4",children:(0,n.jsx)("a",{href:"#0",className:"flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out","aria-label":"Facebook",children:(0,n.jsx)("svg",{className:"w-8 h-8 fill-current",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z"})})})})]}),(0,n.jsx)("div",{className:"text-sm text-gray-600 mr-4",children:"\xa9 Breadcrumb Studio, Inc. All rights reserved."})]})]})})}function l(e){let{children:t}=e;return(0,r.useEffect)(()=>{o().init({once:!0,disable:"phone",duration:700,easing:"ease-out-cubic"})}),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("main",{className:"grow",children:t}),(0,n.jsx)(c,{})]})}},4508:function(e,t,a){"use strict";a.d(t,{Z:function(){return o}});var n=a(9268),r=a(5846),i=a.n(r);function o(){return(0,n.jsx)(i(),{href:"/",className:"block","aria-label":"Cruip",children:(0,n.jsxs)("svg",{className:"w-8 h-8",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:[(0,n.jsx)("defs",{children:(0,n.jsxs)("radialGradient",{cx:"21.152%",cy:"86.063%",fx:"21.152%",fy:"86.063%",r:"79.941%",id:"footer-logo",children:[(0,n.jsx)("stop",{stopColor:"#4FD1C5",offset:"0%"}),(0,n.jsx)("stop",{stopColor:"#81E6D9",offset:"25.871%"}),(0,n.jsx)("stop",{stopColor:"#338CF5",offset:"100%"})]})}),(0,n.jsx)("rect",{width:"32",height:"32",rx:"16",fill:"url(#footer-logo)",fillRule:"nonzero"})]})})}},3263:function(){},3177:function(e,t,a){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=a(6006),r=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,a){var n,i={},l=null,d=null;for(n in void 0!==a&&(l=""+a),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(d=t.ref),t)o.call(t,n)&&!c.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===i[n]&&(i[n]=t[n]);return{$$typeof:r,type:e,key:l,ref:d,props:i,_owner:s.current}}t.Fragment=i,t.jsx=l,t.jsxs=l},9268:function(e,t,a){"use strict";e.exports=a(3177)},5846:function(e,t,a){e.exports=a(8920)}},function(e){e.O(0,[920,2,667,488,744],function(){return e(e.s=2015)}),_N_E=e.O()}]);