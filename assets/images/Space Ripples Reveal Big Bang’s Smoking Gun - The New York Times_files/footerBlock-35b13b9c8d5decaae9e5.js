(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{"4GNh":function(e,t,n){"use strict";n("2B1R"),n("+2oP"),n("DQNa"),n("07d7"),n("JfAA");var a=n("VkAN"),r=n.n(a),o=n("gcR/"),i=n.n(o),c=(n("q1tI"),n("17x9"),n("Dugd")),l=n.n(c),s=n("XMNT"),d=n.n(s),u=n("rNEd"),p=(n("zHFu"),n("Jqp9")),m=n("wXC7"),f=n.n(m),h=n("nxVm"),g=n.n(h),v=Object(p.css)("font-family:",f.a.font.serifBase,";font-style:italic;font-size:",f.a.font.size(17),";line-height:",f.a.font.size(24),";width:",f.a.breakpoint.mobileFullWidth,";max-width:",f.a.breakpoint.textBodyWidth,"px;margin:1rem auto ",f.a.font.size(12),";",f.a.breakpoint.medium,"{font-size:",f.a.font.size(19),";line-height:",f.a.font.size(28),";margin-bottom:",f.a.font.size(20),";}",f.a.breakpoint.extraLarge,"{width:",f.a.breakpoint.textBodyWidthExtralarge,"px;max-width:",f.a.breakpoint.textBodyWidthExtralarge,"px;}",g.a,";"),b=Object(p.css)("margin-bottom:1rem;"),y=Object(p.css)("font-weight:",f.a.font.weight.bold,";"),w=Object(p.css)(v," font-weight:",f.a.font.weight.bold,";"),k=Object(p.css)("margin-top:1px;");function x(){var e=r()(["\n    fragment Addendum_data on CreativeWork {\n      addendums {\n        type\n        publicationDate\n        legacyHtmlBody\n        body {\n          text\n          content {\n            ...ParagraphBlock_data\n          }\n        }\n      }\n    }\n    ","\n  "]);return x=function(){return e},e}var I=function(e){var t=e.data;return t&&t.addendums?i()("div",{className:v},void 0,t.addendums.map((function(e){return i()("div",{className:b},e.legacyHtmlBody,i()("strong",{className:y},void 0,"EDITORS_NOTE"===(t=e.type)?"Editors’ Note":t.charAt(0).toUpperCase()+t.slice(1).toLowerCase(),":")," ",i()(d.a,{className:w},void 0,e.publicationDate),e.body.content?e.body.content.map((function(e,t){return i()(u.a,{data:e},t.toString())})):i()("div",{className:k,dangerouslySetInnerHTML:{__html:e.legacyHtmlBody?e.legacyHtmlBody:e.body.text}}));var t}))):null};I.displayName="Addendum",I.defaultProps={data:void 0},I.fragments={data:l()(x(),u.a.fragments.data)};t.a=I},"7r5p":function(e,t,n){"use strict";var a=n("gcR/"),r=n.n(a),o=(n("q1tI"),n("Jqp9")),i=n("FawH"),c=n("/giM"),l=n("znry"),s=Object(o.css)("margin-top:100px;margin-bottom:400px;position:relative;"),d=Object(o.css)("> div{border:2px solid rgba(100,100,100,1);border-color:rgba(100,100,100,1) transparent transparent;}"),u=r()("div",{}),p=r()("div",{}),m=function(){var e=Object(i.b)().fastlyAbraConfig;return Object(l.b)(e)?r()("div",{className:Object(o.cx)(c.d,s)},void 0,r()("div",{className:Object(o.cx)(c.e,d)},void 0,u,p)):null};m.displayName="OceanSpinner",t.a=m},IzdK:function(e,t,n){"use strict";n.r(t),n.d(t,"showReviewMetaFooter",(function(){return ke})),n.d(t,"suppressInfobox",(function(){return xe})),n.d(t,"getBottomOfArticleTopRelativeToDocument",(function(){return Ne}));n("pNMO"),n("ma9I"),n("TeQF"),n("QWBl"),n("DQNa"),n("HRxU"),n("eoL8"),n("5DmW"),n("27RR"),n("tkto"),n("07d7"),n("SuFq"),n("JfAA"),n("FZtP");var a=n("gcR/"),r=n.n(a),o=n("lwsE"),i=n.n(o),c=n("W8MJ"),l=n.n(c),s=n("7W2i"),d=n.n(s),u=n("a1gu"),p=n.n(u),m=n("Nsbk"),f=n.n(m),h=n("VkAN"),g=n.n(h),v=n("lSNA"),b=n.n(v),y=n("q1tI"),w=n.n(y),k=(n("17x9"),n("hHXl")),x=n("Dugd"),I=n.n(x),N=n("X6oL"),T=n.n(N),O=n("ZKN5"),B=n("74vb"),R=n.n(B);function D(){var e=g()(["\n    fragment ReviewFooter_article on Article {\n      id\n      compatibility {\n        isDiningReview\n        isMovieReview\n      }\n      reviewItems {\n        overrideLabel\n        isCriticsPick\n        subject {\n          __typename\n          ... on Restaurant {\n            id\n            name\n            contactDetails {\n              addresses {\n                crossStreet\n                neighborhood\n                address {\n                  streetAddress\n                }\n              }\n              phoneNumbers {\n                type\n                number\n              }\n            }\n            accessibilityDescription\n            takesReservations\n            reservationsUrl\n            reservationsNote\n            rating\n            atmosphere\n            openStatus\n            priceCategory\n            wineList\n            recommendedDishes\n            soundLevel\n            alcoholDescription\n            openHours\n            coordinates {\n              latitude\n              longitude\n            }\n            website\n            lastModified\n            singlePlatformId\n          }\n          ... on Movie {\n            title\n            movieRating: rating\n            runtimeUS\n            ticketUrl\n            directors\n            writers\n            genres\n            movieCast: cast {\n              actor\n            }\n            imdbId\n          }\n          ... on TheaterEvent {\n            creators\n            lastModified\n            cast\n            category\n            genre\n            runtime\n            openRun\n            openDate\n            startDate\n            stopDate\n            ticketInfo {\n              website\n            }\n            theaterShow {\n              updated\n              showDate\n              showTime\n              description\n            }\n            venue {\n              name\n              url\n              coordinates {\n                longitude\n                latitude\n              }\n              contactDetails {\n                addresses {\n                  neighborhood\n                  address {\n                    streetAddress\n                  }\n                }\n                phoneNumbers {\n                  number\n                }\n              }\n            }\n            performance {\n              name\n            }\n          }\n        }\n      }\n    }\n  "]);return D=function(){return e},e}function E(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=f()(e);if(t){var r=f()(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return p()(this,n)}}var S=function(e){d()(n,e);var t=E(n);function n(){var e;i()(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).trackClick=function(t){e.props.tracking.trackEvent({event:"moduleInteraction",eventData:{pagetype:"article",trigger:"module",type:"click"},module:{name:"review",context:"",label:"",region:"review-footer",element:{name:"restaurant"===t?"reserve-a-table":"find-tickets",label:"restaurant"===t?"Reserve A Table":"Find Tickets",url:""}}})},e.trackCall=function(){e.props.tracking.trackEvent({event:"moduleInteraction",eventData:{pagetype:"article",trigger:"module",type:"click"},module:{name:"review",context:"",label:"",region:"review-footer",element:{name:"call",label:"Call",url:""}}})},e}return l()(n,[{key:"render",value:function(){return r()(R.a,{article:this.props.article,deviceType:this.props.deviceType,trackClick:this.trackClick,trackCall:this.trackCall})}}]),n}(y.Component);S.displayName="ReviewFooter",S.fragments={article:I()(D())};var W=S,A=n("7r5p"),M=n("HT5m"),j=(n("2B1R"),n("bFGc")),C=n.n(j),P=(n("yWo2"),n("Jqp9")),z=n("wXC7"),H=n.n(z),_=Object(P.css)("margin-left:20px;margin-right:20px;",H.a.breakpoint.small,"{width:",H.a.breakpoint.mobileFullWidth,";max-width:",H.a.breakpoint.textBodyWidth,"px;margin:1.5rem auto 1em;}",H.a.breakpoint.extraLarge,"{width:",H.a.breakpoint.textBodyWidthExtralarge,"px;max-width:",H.a.breakpoint.textBodyWidthExtralarge,"px;margin:1.5rem auto 1em;}",H.a.print,";");function F(){var e=g()(["\n    fragment Bio_data on CreativeWork {\n      bylines {\n        creators {\n          ... on Person {\n            id\n            contactDetails {\n              socialMedia {\n                type\n                account\n              }\n            }\n            legacyData {\n              htmlShortBiography\n            }\n          }\n        }\n      }\n    }\n  "]);return F=function(){return e},e}var L=function(e){var t=e.data;return!!(t&&t.bylines&&t.bylines.length>0)&&r()("div",{className:_},void 0,function(e){var t=0;return e.bylines.map((function(e){return e&&e.creators&&e.creators.length>0?e.creators.map((function(e){var n=null,a=null;return e.contactDetails&&e.contactDetails.socialMedia&&e.contactDetails.socialMedia.map((function(e){return"twitter"===e.type?n=e.account:"facebook"===e.type&&(a=e.account),!0})),e.legacyData&&e.legacyData.htmlShortBiography?(t+=1,r()(C.a,{htmlShortBiography:e.legacyData.htmlShortBiography,twitter:n,facebook:a},t)):null})):null}))}(t))};L.fragments={data:I()(F())};var Y=L,J=n("4GNh"),q=n("nxVm"),Z=n.n(q),V=Object(P.css)("font-family:",H.a.font.franklinBase,";font-size:",H.a.font.size(14),";line-height:",H.a.font.size(20),";color:",H.a.color.gray20,";margin:2rem auto 1rem;width:",H.a.breakpoint.mobileFullWidth,";max-width:",H.a.breakpoint.textBodyWidth,"px;p{margin-bottom:1rem;}a{text-decoration:underline;text-decoration-color:",H.a.color.gray50,";}a:hover,a:focus{color:",H.a.color.gray30,";text-decoration:none;}em{font-style:italic;}strong{font-weight:bold;}",H.a.breakpoint.medium,"{font-size:",H.a.font.size(15),";line-height:",H.a.font.size(22),";a{text-decoration:none;border-bottom:1px solid ",H.a.color.gray50,";}a:hover,a:focus{color:",H.a.color.gray30,";border-bottom:1px solid ",H.a.color.white,";}}",H.a.breakpoint.extraLarge,"{width:",H.a.breakpoint.textBodyWidthExtralarge,"px;max-width:",H.a.breakpoint.textBodyWidthExtralarge,"px;}",Z.a,";");function U(){var e=g()(["\n    fragment ExtendedInformation_data on Article {\n      id\n      compatibility {\n        isOak\n      }\n      legacy {\n        htmlExtendedAuthorOrArticleInformation\n        htmlInfoBox\n      }\n    }\n  "]);return U=function(){return e},e}var Q=function(e){var t=e.data,n=e.suppressInfobox;if(!t||!t.legacy||""===t.legacy.htmlExtendedAuthorOrArticleInformation&&""===t.legacy.htmlInfoBox||n&&""===t.legacy.htmlExtendedAuthorOrArticleInformation||t.compatibility&&t.compatibility.isOak)return null;var a="".concat(t.legacy.htmlExtendedAuthorOrArticleInformation).concat(n?"":" ".concat(t.legacy.htmlInfoBox));return r()("div",{className:V,dangerouslySetInnerHTML:{__html:a}})};Q.displayName="ExtendedInformation",Q.fragments={data:I()(U())},Q.defaultProps={data:void 0,suppressInfobox:!1};var X=Q,G=n("tqOg"),K=n.n(G);function $(){var e=g()(["\n    fragment ReviewInformation_data on Article {\n      id\n      legacy {\n        reviewInformation\n      }\n    }\n  "]);return $=function(){return e},e}var ee=Object(P.css)("width:",H.a.breakpoint.mobileFullWidth,";max-width:",H.a.breakpoint.textBodyWidth,"px;",H.a.breakpoint.extraLarge,"{width:",H.a.breakpoint.textBodyWidthExtralarge,"px;max-width:",H.a.breakpoint.textBodyWidthExtralarge,"px;}",Z.a,";"),te=function(e){var t=e.data;if(!t||!t.legacy||!t.legacy.reviewInformation)return null;var n="".concat(t.legacy.reviewInformation);return r()(K.a,{html:n,className:ee})};te.displayName="ReviewInformation",te.defaultProps={data:void 0},te.fragments={data:I()($())};var ne=te,ae=(n("yq1k"),n("dlEz")),re=n("rI8Z"),oe=Object(P.css)("font-family:",H.a.font.franklinBase,";font-size:",H.a.font.size(12),";line-height:",H.a.font.size(16),";width:",H.a.breakpoint.mobileFullWidth,";max-width:",H.a.breakpoint.textBodyWidth,"px;margin:0 auto 1em;color:",H.a.color.gray30,";a{color:",H.a.color.gray30,";text-decoration:underline;}a:hover{text-decoration:none;}",H.a.breakpoint.extraLarge,"{width:",H.a.breakpoint.textBodyWidthExtralarge,"px;max-width:",H.a.breakpoint.textBodyWidthExtralarge,"px;}",Z.a,";@media print{span{display:none;}}"),ie=Object(P.css)("font-weight:",H.a.font.weight.medium,";display:inline;");function ce(){var e=g()(["\n    fragment PrintInformation_data on Article {\n      id\n      source {\n        id\n        displayName\n      }\n      printInformation {\n        section\n        page\n        publicationDate\n        edition\n        headline @stripHtml\n      }\n    }\n  "]);return ce=function(){return e},e}var le={ofTheSundayMagazine:" of the Sunday Magazine",oftheSundayBookReview:" of the Sunday Book Review",ofTMagazine:" of T Magazine",ofEducationLife:" of Education Life",oftheNewYorkEdition:" of the New York edition",oftheNationaledition:" of the National edition",inTheInternationalNewYorkTimes:" in The New York Times International Edition",inTheInternationalHeraldTribune:" in The International Herald Tribune",aVersionOf:"A version of this article appears in print on ",onPage:", Page ",onSection:", Section ",ofThe:void 0,withTheHeadline:" with the headline: ",links:'. <a href="http://www.nytreprints.com/">Order Reprints</a> | <a href="https://www.nytimes.com/section/todayspaper">Today’s Paper</a> | <a href="https://www.nytimes.com/subscriptions/Multiproduct/lp8HYKU.html?campaignId=48JQY">Subscribe</a>'},se=function(e){var t,n=e.data;if(n&&n.printInformation&&n.printInformation.publicationDate&&(n.printInformation.section||n.printInformation.edition)&&"The New York Times on the Web"!==n.printInformation.edition&&n.source&&n.source.displayName){var a=n.source.displayName,o=n.printInformation,i=o.publicationDate,c=o.section,l=o.page,s=o.edition,d=o.headline,u=function(e,t,n){var a="",r=!0,o=!0;switch(e){case"MM":a=le.ofTheSundayMagazine,r=!1;break;case"BR":a=le.oftheSundayBookReview,r=!1;break;case"M2":a=le.ofTMagazine,r=!1;break;case"ED":a=le.ofEducationLife,r=!1;break;default:switch(a=function(e){return["NewYork","altNewYork","SundayAdvance","LongIsland","Westchester","Connecticut","NewJersey","ManhattanBronx","ZonedLI","ZonedWC","ZonedCN","ZonedNJ","ZonedJN","ZonedJC","ZonedMB","ZonedBC","DTNewYork","The New York Times on the Web"].includes(e)}(t)?le.oftheNewYorkEdition:le.oftheNationaledition,n){case"International New York Times":a=le.inTheInternationalNewYorkTimes,o=!1;break;case"Global":case"International Herald Tribune":a=le.inTheInternationalHeraldTribune,o=!1}}return{printEdition:a,showSection:r,showHeadline:o}}(c,s,a),p=u.printEdition,m=u.showSection,f=u.showHeadline;return r()("div",{className:oe},void 0,le.aVersionOf,r()(ae.a,{className:ie,unix:(t=i,new Date(t).getTime()/1e3),formatter:"abbreviated-date"}),l&&m&&le.onSection,l&&m&&c,l&&le.onPage,l&&+l,le.ofThe,p,f&&d&&le.withTheHeadline,f&&d&&d,Object(re.a)(le.links))}return null};se.defaultProps={data:void 0},se.fragments={data:I()(ce())};var de,ue,pe,me,fe,he=se;n("4l63");function ge(e){var t=e.offsetHeight,n=getComputedStyle(e);return t+=parseInt(n.marginTop,10)+parseInt(n.marginBottom,10)}function ve(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=f()(e);if(t){var r=f()(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return p()(this,n)}}function be(){var e=g()(["\n    query FooterBlockQuery($id: String!) {\n      anyWork(id: $id) {\n        ... on Article {\n          id\n          compatibility {\n            isOak\n            isArtReview\n            isBookReview\n            isTheaterReview\n            isDiningReview\n          }\n          reviewItems {\n            __typename\n          }\n          ...ReviewInformation_data\n          ...Addendum_data\n          ...ReviewFooter_article\n          ...Bio_data\n          ...ExtendedInformation_data\n          ...PrintInformation_data\n          ...OakBodyShareToolbar_share\n        }\n      }\n    }\n    ","\n    ","\n    ","\n    ","\n    ","\n    ","\n    ","\n  "]);return be=function(){return e},e}function ye(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function we(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ye(Object(n),!0).forEach((function(t){b()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ye(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function ke(e){var t=e.article,n=t&&t.reviewItems&&t.reviewItems.length>0;return!!(n&&t&&t.compatibility&&!t.compatibility.isArtReview&&!t.compatibility.isBookReview||n)}function xe(e){var t=e.article,n=t&&t.reviewItems&&t.reviewItems.length>0;return!!(n&&t&&t.compatibility&&(t.compatibility.isTheaterReview||t.compatibility.isDiningReview)||n)}var Ie={event:"impression",module:{name:"article_complete",context:"",label:"",region:"article_complete"}};function Ne(e,t){return e.offsetTop+t.offsetTop}function Te(e){var t=function e(t,n){return(t.tagName||"").toLowerCase()===n?t:t.parentNode?e(t.parentNode,n):void 0}(e,"article")||{},n={top:t.offsetTop,height:ge(t)},a={top:Ne(t,e),height:ge(e)},r={scrollTop:Math.round(document.documentElement.scrollTop||document.body.scrollTop||0),height:Math.max(document.documentElement.clientHeight,window.innerHeight||0),width:Math.max(document.documentElement.clientWidth,window.innerWidth||0),documentHeight:Math.max(document.documentElement.scrollHeight||0),article:n,bottomOfArticle:a};return we(we({},Ie),{},{viewport:r})}var Oe=r()(A.a,{}),Be=(de=Object(k.graphql)(I()(be(),ne.fragments.data,J.a.fragments.data,W.fragments.article,Y.fragments.data,X.fragments.data,he.fragments.data,M.b.fragments.share),{options:function(e){return{variables:{id:e.article.url},fetchPolicy:"cache-first",partialRefetch:!0,ssr:!1}}}),ue=T()({module:{region:"footer"}}),de(pe=Object(O.a)(pe=ue((fe=me=function(e){d()(n,e);var t=ve(n);function n(){var e;i()(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).appearedInViewport=!1,e}return l()(n,[{key:"componentDidMount",value:function(){this.setupIntersectionObserver()}},{key:"componentWillUnmount",value:function(){this.observer&&(this.observer.disconnect(),this.observer=null)}},{key:"setupIntersectionObserver",value:function(){var e=this;this.observer=new IntersectionObserver((function(t){!e.appearedInViewport&&t&&t[0]&&t[0].isIntersecting&&(e.appearedInViewport=!0,e.observer.disconnect(),e.observer=null,e.trackStoryComplete(Te(e.el)))}),{threshold:0}),this.observer.observe(this.el)}},{key:"trackStoryComplete",value:function(e){this.props.tracking.trackEvent(e)}},{key:"render",value:function(){var e,t=this,n=this.props,a=n.data,o=n.deviceType,i=n.tracking,c=n.hasLoadedBelowFold;if(!(null==a?void 0:a.anyWork)||a.loading)e=null;else{var l=a.anyWork,s=ke({article:l}),d=xe({article:l});e=w.a.createElement(w.a.Fragment,null,!c&&Oe,r()(ne,{data:l}),r()(J.a,{data:l}),s&&r()(W,{article:l,deviceType:o,tracking:i}),l&&l.compatibility.isOak&&r()(Y,{data:l}),r()(X,{data:l,suppressInfobox:d}),r()(he,{data:l}),r()(M.b,{share:l,position:M.a.BOTTOM}))}return w.a.createElement("div",{className:"bottom-of-article",ref:function(e){t.el=e}},e)}}]),n}(y.Component),me.defaultProps={data:{},tracking:{trackEvent:function(){},getTrackingData:function(){return{}}},deviceType:"",hasLoadedBelowFold:!1},pe=fe))||pe)||pe)||pe);Be.displayName="FooterBlock";t.default=Be}}]);
//# sourceMappingURL=footerBlock-35b13b9c8d5decaae9e5.js.map