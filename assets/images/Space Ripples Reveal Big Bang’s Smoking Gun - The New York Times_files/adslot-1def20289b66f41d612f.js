(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"1iyJ":function(e,t,n){"use strict";n.r(t);n("eDyd")},3:function(e,t,n){e.exports=n("1iyJ")},eDyd:function(e,t){!function(){"use strict";function e(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:0,o=3<arguments.length&&void 0!==arguments[3]?arguments[3]:0,i=4<arguments.length&&void 0!==arguments[4]?arguments[4]:0,a=!(5<arguments.length&&void 0!==arguments[5])||arguments[5];if(!e||1!==e.nodeType)return!1;var d=e.getBoundingClientRect(),r=d.top-t,s=d.left,l=d.bottom,c=d.right,u=0,p=0,g=window.innerHeight,f=window.innerWidth;return a?u+o*i<=l&&p+n*i<=c&&r<=g-o*i&&s<=f-n*i:u<=r&&l<=g}function t(e){var t=window.location.href,n=e.replace(/[[]]/g,"\\$&"),o=new RegExp("[?&]".concat(n,"(=([^&#]*)|&|#|$)")).exec(t);return o&&o[2]?decodeURIComponent(o[2].replace(/\+/g,"")):""}function n(e,t,n){var o="".concat(e,"-").concat(t);try{performance.mark(o),performance.measure(e,n,o);var i=performance.getEntriesByName(e).pop();return i?Math.round(i.duration):0}catch(e){return 0}}function o(){var e=document.referrer||"",t=/([a-zA-Z0-9_\-.]+)(@|%40)([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})/;return t.test(e)||t.test(window.location.href)}function i(e){var t=document.cookie.match(new RegExp("".concat(e,"=([^;]+)")));return t?t[1]:""}var a=5,d="f",r="r",s="n",l="c",c="a",u="s";function p(){return i("nyt-purr")[a]||""}function g(){return p()===u}function f(){return p()===c}(function(){var a,c,u=window.AdSlot4||{},v=window.performance&&window.performance.timing&&performance.timing.responseStart,m={},w=[],h=[],b=!1,y=!1,A=!0,E=!1,S=!1,k=p()===l;if(u.init)return u;function z(e){e&&v&&e.setTargeting("request_time",(Date.now()-v).toString())}function O(e,t){window.googletag.cmd.push((function(){z(t),window.googletag.display(e)}))}function T(e,t,n){return window.googletag.defineSlot(e,t,n)}function P(e,t){var n=window.googletag;n.cmd.push((function(){e&&e.forEach((function(e){z(e)})),e&&t?n.pubads().refresh(e,t):e?n.pubads().refresh(e):t?n.pubads().refresh(null,t):n.pubads().refresh()}))}function R(e){var t=e.displayed,o=e.id,i=e.slot;u.events.publish({name:"AdCalled",value:{id:o,timeCalled:n(o,"timeCalled","responseStart")},scope:o}),b&&t?(P([i],y?null:{changeCorrelator:!1}),y=!1):(O(o,i),m[o].displayed=!0)}function L(){h=h.filter((function(t){var n=e(t.AdSlotElement,A?u.props.offset:0,0,0,0,A);return n&&R(t),!n}))}function I(e){var t=e.AdSlotElement,n={root:null,rootMargin:"".concat(u.props.offset,"px"),threshold:0},o=new IntersectionObserver((function(n,o){n[0].isIntersecting&&(R(e),o.unobserve(t))}),n);return o.observe(t),o}function j(){window.IntersectionObserver?(E=!0,window.IntersectionObserver.prototype.POLL_INTERVAL=1e3):document.addEventListener("scroll",function(e){var t=this,n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:1e3,o=null;return function(){for(var i=arguments.length,a=new Array(i),d=0;d<i;d++)a[d]=arguments[d];null===o&&(o=setTimeout((function(){e.apply(t,a),o=null}),n))}}(L,1e3))}function C(e){if(e.data.exclusive&&e.data.div){var t,n=e.data.div;switch(e.data.type){case"only-child":(i=(o={empty:(a=n,d=[],Object.keys(m).forEach((function(e){a!==e&&d.push(m[e])})),d)})&&o.empty||h).length&&i.forEach((function(e){e.observer&&e.observer.unobserve(e.AdSlotElement),u.events.publish({name:"AdEmpty",value:{type:e.id},scope:e.id})})),h=[],k=!0;break;case"family-plan":void 0!==(t=m[n]&&m[n].slot&&(m[n].slot.getResponseInformation()||{}).lineItemId)&&u.updateAdReq({adv:t,excl:"family"});break;case"blank":u.events.publish({name:"AdEmpty",value:{type:n},scope:e.data.div})}}var o,i,a,d}if(u.events=(a={},c={},{publish:function e(t){var n=t.name,o=void 0===n?"":n,i=t.value,d=void 0===i?{}:i,r=t.scope,s=void 0===r?"page":r;"all"!==s&&e({name:o,value:d,scope:"all"}),a[o]||(a[o]={}),a[o][s]||(a[o][s]=[]),a[o][s].push(d),c[o]&&c[o][s]&&c[o][s].forEach((function(e){e(d)}))},subscribe:function(e){var t=e.name,n=void 0===t?"":t,o=e.callback,i=void 0===o?function(){}:o,d=e.scope,r=void 0===d?"page":d;c[n]||(c[n]={}),c[n][r]||(c[n][r]=[]);var s=c[n][r].push(i)-1;return a[n]&&a[n][r]&&a[n][r].length&&a[n][r].forEach((function(e){i(e)})),{remove:function(){return c[n][r].splice(s,1)}}},unsubscribeToAll:function(e){Object.keys(c).forEach((function(t){c[t]&&c[t][e]&&delete c[t][e]})),Object.keys(a).forEach((function(t){a[t]&&a[t][e]&&delete a[t][e]}))}}),u.initializeAd=function(t,i){if(u.props){var a=u.props,d=a.adUnitPath,r=a.sizeMapping,s=a.hideTopAd,l=i.id,c=i.position,p=i.sizeKey,v=i.lazyLoad,b=i.truePosition,y=p||c,S=y in r?r[y]:r.default;if(("top"!==c||!s)&&!w.includes(l)&&l&&d&&S&&t&&t.classList&&!t.classList.contains("placed-ad")&&(!t.parentNode||!t.parentNode.classList.contains("placed-ad"))){var z=d.match(/tragedy/);if(z&&z.length)u.events.publish({name:"AdEmpty",value:{type:"AdsDisabled"},scope:"page"});else if(f()||o()||g())u.events.publish({name:"AdEmpty",value:{type:"AdsDisabled"}});else if(k)u.events.publish({name:"AdEmpty",value:{type:l},scope:l});else{var P=window.googletag;P.cmd.push((function(){var o;if("undefined"!=typeof window&&window.document&&window.document.createElement&&window.self!==window.top){var i=window.outerWidth,a=S.reduce((function(e,t){var n=Number.isInteger(t[0])?t[0]:null,o=e.prevVp;return n<i&&o<n&&(e.prevVp=n,e.sizes=t[1]),e}),{prevVp:-1,sizes:[]});o=T(d,a.sizes,l)}else{o=T(d,[],l);var r=P.sizeMapping();S.forEach((function(e){r.addSize([e[0],0],e[1])})),o.defineSizeMapping(r.build())}var s=b||c;o.setTargeting("div",l),o.setTargeting("pos",s),o.setCollapseEmptyDiv(!0),o.addService(P.pubads());var p,g={id:l,slot:o,AdSlotElement:t,sizes:S};u.events.publish({name:"AdDefined",value:{id:l,sizes:S,truePosition:b,timeDefined:n(l,"timeDefined","responseStart"),slot:o},scope:l}),v&&!e(t,0,0,0,0,A)||(u.events.publish({name:"AdCalled",value:{id:l,timeCalled:n(l,"timeCalled","responseStart")},scope:l}),O(l,o),g.displayed=!0),(p=g).displayed||(E&&(p.observer=I(p)),h.push(p)),m[p.id]=p}))}}}else u.events.subscribe({name:"AdSlotReady",callback:function(){return u.initializeAd(t,i)}})},u.fillPlacements=function(e){var t=document.querySelectorAll(".place-ad:not(.placed-ad)");if(t&&0!==t.length)for(var n=0;n<t.length;n++){var o=t[n],i=o.id,a=o.dataset,d=a.position,r=a.sizeKey,s=a.lazyLoad,l=a.slotId,c="false"!==s,p=o,g=d,f=l&&l!==i;if((i||l)&&d&&(f&&!e||!f)){if(f){g=l;var v=document.createElement("div");v.id=l,v.setAttribute("style","display: block; text-align: center; height: 100%"),p=v,o.appendChild(v)}u.initializeAd(p,{id:p.id,position:g,sizeKey:r,lazyLoad:c}),o.classList.add("placed-ad")}}},u.updateAdReq=function(e,t){window.googletag.cmd.push((function(){var n=u.props&&u.props.adTargeting||{};t||Object.keys(e).forEach((function(t){n[t]=e[t],window.googletag.pubads().setTargeting(t,"".concat(e[t]))})),m[t]&&Object.keys(e).forEach((function(n){m[t].slot.setTargeting(n,"".concat(e[n]))}))}))},u.getAdReq=function(){return u.props&&u.props.adTargeting||{}},u.refreshAds=function(){A=!(y=b=!0),h=[],w=[],E?Object.keys(m).forEach((function(e){var t=m[e],n=t.observer,o=t.displayed,i=t.AdSlotElement;h.push(t),o&&(n&&n.unobserve(i),t.observer=I(t))})):(Object.keys(m).forEach((function(e){h.push(m[e])})),L()),setTimeout((function(){A=!0}),2e3)},u.removeAdPlacement=function(e){window.googletag.cmd.push((function(){var t,n=window.googletag.pubads().getSlots().filter((function(t){return t.getSlotElementId()===e}));window.googletag.destroySlots(n),(t=e)&&w.push(t)}))},u.getSlot=function(e){var t=null;return window.googletag.cmd.push((function(){var n=window.googletag.pubads().getSlots().filter((function(t){return t.getSlotElementId()===e}));t=n[0]||null})),t},u.init=function(e){var a=e||{},l=a.adTargeting,c=void 0===l?{}:l,v=a.adUnitPath,m=void 0===v?"":v,w=a.offset,h=void 0===w?400:w,b=a.haltDFP,y=void 0!==b&&b,A=a.lockdownAds,E=void 0!==A&&A,k=a.hideTopAd,z=void 0!==k&&k,O=a.sizeMapping,T=void 0===O?{}:O,P=y||g()||f();if(!S){var R;c.vp=window.matchMedia("(min-width: 970px)").matches?"large":window.matchMedia("(min-width: 728px)").matches?"medium":"small",c.uap=(R=window.navigator.userAgent).match(/nyt[-_]?ios/i)?"ios":R.match(/nyt[-_]?android/i)?"android":"browser",c.aid=i("nyt-a")||null,p()===d&&(c.purr="full");var L=t("ad-keywords");L&&(c.adv=L);var I=t("debugads");I&&(c.debugAdsQP=I),u.props={adTargeting:c,adUnitPath:m,offset:h,sizeMapping:T,hideTopAd:z},window.googletag=window.googletag||{},window.googletag.cmd=window.googletag.cmd||[],window.googletag.cmd.push((function(){c.gdprUser&&(window.googletag.pubads().setRequestNonPersonalizedAds(1),c.purr="npa"),p()===s&&(window.googletag.pubads().setRequestNonPersonalizedAds(1),c.purr="npa"),p()===r&&(window.googletag.pubads().setPrivacySettings({restrictDataProcessing:!0}),c.purr="rdp");var e,t,o=(e=c,t=window.googletag.pubads().getTargetingKeys(),Object.keys(e).filter((function(e){return t.indexOf(e)<0})).reduce((function(t,n){return t[n]=e[n],t}),{}));Object.keys(o).forEach((function(e){window.googletag.pubads().setTargeting(e,o[e])})),window.googletag.enableServices(),j(),u.fillPlacements(!0),window.googletag.pubads().addEventListener("slotRenderEnded",(function(e){var t=e.slot.getSlotElementId();e.timeRendered=n(t,"timeRendered","".concat(t,"-timeCalled")),e.isEmpty?u.events.publish({name:"AdEmpty",value:{type:t},scope:t}):u.events.publish({name:"AdRendered",value:e,scope:t})})),window.googletag.pubads().addEventListener("slotOnload",(function(e){var t=e.slot.getSlotElementId();e.timeLoaded=n(t,"timeLoaded","".concat(t,"-timeCalled")),u.events.publish({name:"AdLoaded",value:e,scope:t})})),window.googletag.pubads().addEventListener("impressionViewable",(function(e){var t=e.slot.getSlotElementId();e.timeViewed=n(t,"timeViewed","".concat(t,"-timeCalled")),u.events.publish({name:"AdViewable",value:e,scope:t})}))})),E?window.googletag.cmd.push((function(){window.googletag.pubads().setForceSafeFrame(!0)})):window.addEventListener("message",(function(e){(e.origin.match(/(safeframe|tpc)\.googlesyndication\.com$/)||e.origin===window.location.origin)&&C(e)}),!1),function(e){if(o()||e)u.events.publish({name:"AdEmpty",value:{type:"AdsDisabled"}});else{var t,n,i,a,d=function(){var e=window.googletag;e?e.cmd.push((function(){e._loadStarted_?window.advBidxc&&!window.advBidxc.isAdServerLoaded&&(window.advBidxc.isAdServerLoaded=!0):u.events.publish({name:"AdEmpty",value:{type:"AdBlockOn"}})})):u.events.publish({name:"AdEmpty",value:{type:"GptError"}})};window.googletag&&window.googletag.apiReady?d():("https://securepubads.g.doubleclick.net/tag/js/gpt.js",t=d,n=function(){u.events.publish({name:"AdEmpty",value:{type:"GptError"}})},i=document.getElementsByTagName("head")[0],a=document.createElement("script"),t&&(a.onload=t),n&&(a.onerror=n),a.src="https://securepubads.g.doubleclick.net/tag/js/gpt.js",a.async=!0,i.appendChild(a))}}(P),u.events.publish({name:"AdSlotReady"}),S=!0}},u.cmd)for(;u.cmd.length;)u.cmd.shift()();u.cmd={length:0,push:function(e){e()}},window.AdSlot4=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){var o,i,a;o=e,a=n[i=t],i in o?Object.defineProperty(o,i,{value:a,enumerable:!0,configurable:!0,writable:!0}):o[i]=a}))}return e}({},u,{refreshAdsInView:P}),window.AdSlot={placeDynamicAds:u.fillPlacements,getSlot:u.getSlot,setTargeting:function(e,t){var n={};n[e]=t,u.updateAdReq(n)},setSlotTargeting:function(e,t,n){var o={};o[t]=n,u.updateAdReq(o,e.getSlotElementId())},displayAd:O,removeAdPlacement:u.removeAdPlacement,dispatch:function(){},destroyAdSlots:function(){window.googletag.cmd.push((function(){window.googletag.destroySlots()}))},checkAdsInViewport:L,refresh:u.refreshAds,AdSlotReady:!0,adTargeting:u.props&&u.props.adTargeting||{}}})()}()}},[[3,54]]]);
//# sourceMappingURL=adslot-1def20289b66f41d612f.js.map