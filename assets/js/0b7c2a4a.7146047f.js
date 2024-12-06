"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["27591"],{72581:function(e,n,r){r.d(n,{Z:function(){return s}});let s=r.p+"assets/images/social-card-3239a62bb56c9529ff255bc2c72e94f6.png"},20788:function(e,n,r){r.d(n,{Z:function(){return s}});let s=r.p+"assets/images/navbar-error-15eefab8e8d77aa4d605939956987164.jpg"},92539:function(e,n,r){r.d(n,{Z:function(){return s}});let s=r.p+"assets/images/sidebar-item-description-f38981b17f486bc09fb811c6992ef668.jpg"},17414:function(e,n,r){r.d(n,{Z:function(){return s}});let s=r.p+"assets/images/social-card-3239a62bb56c9529ff255bc2c72e94f6.png"},69204:function(e,n,r){r.r(n),r.d(n,{assets:function(){return p},contentTitle:function(){return h},default:function(){return f},frontMatter:function(){return d},metadata:function(){return s},toc:function(){return g}});var s=r(68707),t=r(24246),a=r(80980),i=r(46291),o=r(67860),l=r(11678),c=r(19428),u=r(14916);let d={title:"Docusaurus 2.4",authors:["slorber"],tags:["release"],image:"./img/social-card.png",date:new Date("2023-03-23T00:00:00.000Z")},h=void 0,p={image:r(72581).Z,authorsImageUrls:[void 0]},g=[{value:"Highlights",id:"highlights",level:2},{value:"Sidebar item description",id:"sidebar-item-description",level:3},{value:"Theme Query String",id:"theme-query-string",level:3},{value:"Remark plugin npm2yarn upgrade",id:"remark-plugin-npm2yarn-upgrade",level:3},{value:"gtag support for multiple tracking IDs",id:"gtag-support-for-multiple-tracking-ids",level:3},{value:"Developer Experience",id:"developer-experience",level:3},{value:"Translations",id:"translations",level:3},{value:"Other changes",id:"other-changes",level:2}];function m(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["We are happy to announce ",(0,t.jsx)(n.strong,{children:"Docusaurus 2.4"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["The upgrade should be easy: as explained in our ",(0,t.jsx)(n.a,{href:"/community/release-process",children:"release process documentation"}),", minor versions respect ",(0,t.jsx)(n.a,{href:"https://semver.org/",children:"Semantic Versioning"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Docusaurus blog post social card",src:r(17414).Z+"",width:"1200",height:"600"})}),"\n","\n",(0,t.jsx)(n.h2,{id:"highlights",children:"Highlights"}),"\n",(0,t.jsx)(n.h3,{id:"sidebar-item-description",children:"Sidebar item description"}),"\n",(0,t.jsxs)(n.p,{children:["In ",(0,t.jsx)(n.a,{href:"https://github.com/facebook/docusaurus/pull/8236",children:"#8236"}),", we made it possible to provide a new ",(0,t.jsx)(n.code,{children:"description"})," attribute for docs sidebar items of type ",(0,t.jsx)(n.code,{children:"link"})," and ",(0,t.jsx)(n.code,{children:"category"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",metastring:'title="sidebars.js"',children:"[\n  {\n    type: 'link',\n    label: 'Link with description',\n    href: 'https://docusaurus.io',\n    // highlight-next-line\n    description: 'Some link description',\n  },\n  {\n    type: 'category',\n    label: 'Category with description',\n    // highlight-next-line\n    description: 'Some category description',\n    items: [],\n  },\n];\n"})}),"\n",(0,t.jsx)(n.p,{children:"These descriptions will be used in category generated index pages."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Show sidebar category generated index with custom descriptions",src:r(92539).Z+"",width:"1400",height:"691"})}),"\n",(0,t.jsx)(n.h3,{id:"theme-query-string",children:"Theme Query String"}),"\n",(0,t.jsxs)(n.p,{children:["In ",(0,t.jsx)(n.a,{href:"https://github.com/facebook/docusaurus/pull/8708",children:"#8708"}),", we added the possibility to force Docusaurus to initialize itself in ",(0,t.jsx)(n.code,{children:"light"})," or ",(0,t.jsx)(n.code,{children:"dark"})," mode through a new ",(0,t.jsx)(n.code,{children:"docusaurus-theme"})," query-string parameter."]}),"\n",(0,t.jsx)(n.p,{children:"This is useful to ensure a consistent theme when embedding an existing Docusaurus page into an iframe or WebView."}),"\n",(0,t.jsx)(c.Z,{url:"/docs/?docusaurus-theme=light"}),"\n",(0,t.jsx)(c.Z,{url:"/docs/?docusaurus-theme=dark"}),"\n",(0,t.jsx)(n.h3,{id:"remark-plugin-npm2yarn-upgrade",children:"Remark plugin npm2yarn upgrade"}),"\n",(0,t.jsxs)(n.p,{children:["In ",(0,t.jsx)(n.a,{href:"https://github.com/facebook/docusaurus/pull/8690",children:"#8690"}),", we upgraded our Remark plugin ",(0,t.jsx)(n.a,{href:"https://github.com/facebook/docusaurus/tree/main/packages/docusaurus-remark-plugin-npm2yarn",children:"@docusaurus/remark-plugin-npm2yarn"})," with many conversion bug fixes, first-class support for pnpm, and the ability to register custom converters producing new tabs."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-markdown",children:"Run these commands!\n\n```bash npm2yarn\nnpm install\nnpm run build\nnpm run myCustomScript -- --some-arg\n```\n"})}),"\n",(0,t.jsx)(l.Z,{children:(0,t.jsxs)(i.Z,{children:[(0,t.jsx)(o.Z,{value:"npm",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm install\nnpm run build\nnpm run myCustomScript -- --some-arg\n"})})}),(0,t.jsx)(o.Z,{value:"yarn",label:"Yarn",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"yarn install\nyarn build\nyarn myCustomScript --some-arg\n"})})}),(0,t.jsx)(o.Z,{value:"pnpm",label:"pnpm",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"pnpm install\npnpm run build\npnpm run myCustomScript --some-arg\n"})})})]})}),"\n",(0,t.jsx)(n.h3,{id:"gtag-support-for-multiple-tracking-ids",children:"gtag support for multiple tracking IDs"}),"\n",(0,t.jsxs)(n.p,{children:["In ",(0,t.jsx)(n.a,{href:"https://github.com/facebook/docusaurus/pull/8620",children:"#8620"})," we added support for the ",(0,t.jsx)(n.a,{href:"/docs/api/plugins/@docusaurus/plugin-google-gtag",children:"@docusaurus/plugin-google-gtag"})," plugin to declare multiple tracking IDs."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"module.exports = {\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        gtag: {\n          trackingID: [\n            // highlight-next-line\n            'G-<YOUR-NEW-GA4-ID>',\n            // highlight-next-line\n            'UA-<YOUR-OLD-UA-ID>',\n          ],\n        },\n      },\n    ],\n  ],\n};\n"})}),"\n",(0,t.jsxs)(n.admonition,{title:"Google is sunsetting Universal Analytics",type:"warning",children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.a,{href:"https://blog.google/products/marketingplatform/analytics/prepare-for-future-with-google-analytics-4/",children:"Google will sunset its Universal Analytics"})})," on ",(0,t.jsx)(n.strong,{children:"July 1, 2023"}),"."]}),(0,t.jsxs)(n.p,{children:["Docusaurus users should migrate to Google Analytics 4. Google ",(0,t.jsx)(n.strong,{children:"does not permit to migrate your existing Universal Analytics data"})," to your new Google Analytics 4 property."]}),(0,t.jsxs)(n.p,{children:["To preserve the continuity of your analytics, we temporarily recommend that you report events to 2 tracking IDs at the same time: the old one (",(0,t.jsx)(n.code,{children:"UA-*"}),") and new one (",(0,t.jsx)(n.code,{children:"G-*"}),"). Refer to the ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.a,{href:"https://github.com/facebook/docusaurus/issues/7221",children:"dedicated issue"})})," for details."]})]}),"\n",(0,t.jsx)(n.h3,{id:"developer-experience",children:"Developer Experience"}),"\n",(0,t.jsxs)(n.p,{children:["In ",(0,t.jsx)(n.a,{href:"https://github.com/facebook/docusaurus/pull/8736",children:"#8736"}),", we improved how we render error messages and added initial support to render the full causal chain of an error (see ",(0,t.jsx)(n.a,{href:"https://h3manth.com/ES2022/#error-cause",children:"ES2022 Error Cause"}),")."]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["To see it in action, click here: ",(0,t.jsx)(u.Z,{cause:"Probably undefined is not a function \uD83D\uDE04"})]})}),"\n",(0,t.jsxs)(n.p,{children:["In ",(0,t.jsx)(n.a,{href:"https://github.com/facebook/docusaurus/pull/8735",children:"#8735"})," we also made navbar-related error messages clearer to help users understand what they did wrong."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Docusaurus navbar error message screenshot",src:r(20788).Z+"",width:"1676",height:"1614"})}),"\n",(0,t.jsx)(n.h3,{id:"translations",children:"Translations"}),"\n",(0,t.jsx)(n.p,{children:"We made it possible to translate some new elements:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/facebook/docusaurus/pull/8677",children:"#8677"})," introduces a new ",(0,t.jsx)(n.code,{children:"process.env.DOCUSAURUS_CURRENT_LOCALE"})," (experimental) allowing you to localize your config file, including site title, tagline, announcement bar, baseUrl..."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/facebook/docusaurus/pull/8616",children:"#8616"})," allows to translate the navbar and footer logo alt text"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"We added default theme translation support for multiple languages:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\uD83C\uDDED\uD83C\uDDFA ",(0,t.jsx)(n.a,{href:"https://github.com/facebook/docusaurus/pull/8668",children:"#8668"}),": Hungarian"]}),"\n",(0,t.jsxs)(n.li,{children:["\uD83C\uDDF3\uD83C\uDDF4 ",(0,t.jsx)(n.a,{href:"https://github.com/facebook/docusaurus/pull/8631",children:"#8631"}),": Norwegian (Bokm\xe5l)"]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["Completing theme translations is an ",(0,t.jsx)(n.a,{href:"https://github.com/facebook/docusaurus/issues/3526",children:"ongoing effort"})," and an easy way to contribute to Docusaurus. We add new theme features regularly, for which we often ",(0,t.jsx)(n.a,{href:"https://github.com/facebook/docusaurus/issues/3526",children:"need new translations"}),"."]})}),"\n",(0,t.jsx)(n.h2,{id:"other-changes",children:"Other changes"}),"\n",(0,t.jsx)(n.p,{children:"Other notable changes include:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/facebook/docusaurus/pull/8674",children:"#8674"}),": respect ",(0,t.jsx)(n.code,{children:"prefers-reduced-motion: reduce"})," media query"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/facebook/docusaurus/pull/8712",children:"#8712"}),": use a navbar item of type ",(0,t.jsx)(n.code,{children:"docSidebar"})," in template"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/facebook/docusaurus/pull/8801",children:"#8801"}),": allow tabs children to be falsy"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/facebook/docusaurus/pull/8757",children:"#8757"}),": make search page react to external query-string changes"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/facebook/docusaurus/pull/8803",children:"#8803"}),": fix code block buttons position in RTL"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/facebook/docusaurus/pull/8615",children:"#8615"}),": fix color mode toggle when using dark navbar"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/facebook/docusaurus/pull/8699",children:"#8699"}),": fix navbar dropdown tab focus bug"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Check the ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.a,{href:"/changelog/2.4.0",children:"2.4.0 changelog entry"})})," for an exhaustive list of changes."]})]})}function f(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},67860:function(e,n,r){r.d(n,{Z:()=>i});var s=r("24246");r("27378");var t=r("90496");let a="tabItem_pnkT";function i(e){let{children:n,hidden:r,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.Z)(a,i),hidden:r,children:n})}},46291:function(e,n,r){r.d(n,{Z:()=>y});var s=r("24246"),t=r("27378"),a=r("90496"),i=r("12451"),o=r("3620"),l=r("89637"),c=r("74417"),u=r("46918"),d=r("58247");function h(e){return t.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||t.isValidElement(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function p(e){let{value:n,tabValues:r}=e;return r.some(e=>e.value===n)}var g=r("8903");let m="tabList_Qoir",f="tabItem_AQgk";function b(e){let{className:n,block:r,selectedValue:t,selectValue:o,tabValues:l}=e,c=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.o5)(),d=e=>{let n=e.currentTarget,r=l[c.indexOf(n)].value;r!==t&&(u(n),o(r))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let r=c.indexOf(e.currentTarget)+1;n=c[r]??c[0];break}case"ArrowLeft":{let r=c.indexOf(e.currentTarget)-1;n=c[r]??c[c.length-1]}}n?.focus()};return(0,s.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},n),children:l.map(e=>{let{value:n,label:r,attributes:i}=e;return(0,s.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>c.push(e),onKeyDown:h,onClick:d,...i,className:(0,a.Z)("tabs__item",f,i?.className,{"tabs__item--active":t===n}),children:r??n},n)})})}function x(e){let{lazy:n,children:r,selectedValue:i}=e,o=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){let e=o.find(e=>e.props.value===i);return e?(0,t.cloneElement)(e,{className:(0,a.Z)("margin-top--md",e.props.className)}):null}return(0,s.jsx)("div",{className:"margin-top--md",children:o.map((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==i}))})}function j(e){let n=function(e){let{defaultValue:n,queryString:r=!1,groupId:s}=e,a=function(e){let{values:n,children:r}=e;return(0,t.useMemo)(()=>{let e=n??h(r).map(e=>{let{props:{value:n,label:r,attributes:s,default:t}}=e;return{value:n,label:r,attributes:s,default:t}});return!function(e){let n=(0,u.lx)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error(`Docusaurus error: Duplicate values "${n.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[n,r])}(e),[i,g]=(0,t.useState)(()=>(function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}let s=r.find(e=>e.default)??r[0];if(!s)throw Error("Unexpected error: 0 tabValues");return s.value})({defaultValue:n,tabValues:a})),[m,f]=function(e){let{queryString:n=!1,groupId:r}=e,s=(0,o.k6)(),a=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r}),i=(0,c._X)(a);return[i,(0,t.useCallback)(e=>{if(!a)return;let n=new URLSearchParams(s.location.search);n.set(a,e),s.replace({...s.location,search:n.toString()})},[a,s])]}({queryString:r,groupId:s}),[b,x]=function(e){var n;let{groupId:r}=e;let s=(n=r)?`docusaurus.tab.${n}`:null,[a,i]=(0,d.Nk)(s);return[a,(0,t.useCallback)(e=>{if(!!s)i.set(e)},[s,i])]}({groupId:s}),j=(()=>{let e=m??b;return p({value:e,tabValues:a})?e:null})();return(0,l.Z)(()=>{j&&g(j)},[j]),{selectedValue:i,selectValue:(0,t.useCallback)(e=>{if(!p({value:e,tabValues:a}))throw Error(`Can't select invalid tab value=${e}`);g(e),f(e),x(e)},[f,x,a]),tabValues:a}}(e);return(0,s.jsxs)("div",{className:(0,a.Z)("tabs-container",m),children:[(0,s.jsx)(b,{...n,...e}),(0,s.jsx)(x,{...n,...e})]})}function y(e){let n=(0,g.Z)();return(0,s.jsx)(j,{...e,children:h(e.children)},String(n))}},19428:function(e,n,r){r.d(n,{Z:function(){return a}});var s=r(24246);r(27378);var t=r(11678);function a(e){let{url:n}=e;return(0,s.jsx)("div",{style:{padding:10},children:(0,s.jsx)(t.Z,{url:n,style:{minWidth:"min(100%,45vw)",width:800,maxWidth:"100%",overflow:"hidden"},bodyStyle:{padding:0},children:(0,s.jsx)("iframe",{src:n,title:n,style:{display:"block",width:"100%",height:300}})})})}},11678:function(e,n,r){r.d(n,{Z:()=>p});var s=r("24246");r("27378");var t=r("90496");let a="browserWindow_my1Q",i="browserWindowHeader_jXSR",o="buttons_uHc7",l="browserWindowAddressBar_Pd8y",c="dot_giz1",u="browserWindowMenuIcon_Vhuh",d="bar_rrRL",h="browserWindowBody_Idgs";function p(e){let{children:n,minHeight:r,url:p="http://localhost:3000",style:g,bodyStyle:m}=e;return(0,s.jsxs)("div",{className:a,style:{...g,minHeight:r},children:[(0,s.jsxs)("div",{className:i,children:[(0,s.jsxs)("div",{className:o,children:[(0,s.jsx)("span",{className:c,style:{background:"#f25f58"}}),(0,s.jsx)("span",{className:c,style:{background:"#fbbe3c"}}),(0,s.jsx)("span",{className:c,style:{background:"#58cb42"}})]}),(0,s.jsx)("div",{className:(0,t.Z)(l,"text--truncate"),children:p}),(0,s.jsx)("div",{className:u,children:(0,s.jsxs)("div",{children:[(0,s.jsx)("span",{className:d}),(0,s.jsx)("span",{className:d}),(0,s.jsx)("span",{className:d})]})})]}),(0,s.jsx)("div",{className:h,style:m,children:n})]})}},14916:function(e,n,r){r.d(n,{Z:function(){return a}});var s=r(24246),t=r(27378);function a(e){let{children:n="Boom!",message:r="Boom!\nSomething bad happened, but you can try again!",cause:a}=e,[i,o]=(0,t.useState)(!1);if(i)throw Error(r,{cause:a?Error(a):void 0});return(0,s.jsx)("button",{className:"button button--danger",type:"button",onClick:()=>o(!0),children:n})}},80980:function(e,n,r){r.d(n,{Z:function(){return o},a:function(){return i}});var s=r(27378);let t={},a=s.createContext(t);function i(e){let n=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(a.Provider,{value:n},e.children)}},68707:function(e){e.exports=JSON.parse('{"permalink":"/blog/releases/2.4","editUrl":"https://github.com/facebook/docusaurus/edit/main/website/blog/releases/2.4/index.mdx","source":"@site/blog/releases/2.4/index.mdx","title":"Docusaurus 2.4","description":"We are happy to announce Docusaurus 2.4.","date":"2023-03-23T00:00:00.000Z","tags":[{"inline":false,"label":"Release","permalink":"/blog/tags/release","description":"Blog posts about Docusaurus\' new releases"}],"readingTime":3.05,"hasTruncateMarker":true,"authors":[{"name":"S\xe9bastien Lorber","title":"Docusaurus maintainer, This Week In React editor","url":"https://thisweekinreact.com","page":{"permalink":"/blog/authors/slorber"},"description":"A freelance React and React-Native developer near Paris and Docusaurus maintainer. Also runs ThisWeekInReact.com, a newsletter to stay updated with the React ecosystem.\\n","socials":{"x":"https://x.com/sebastienlorber","linkedin":"https://www.linkedin.com/in/sebastienlorber/","github":"https://github.com/slorber","newsletter":"https://thisweekinreact.com"},"imageURL":"https://github.com/slorber.png","key":"slorber"}],"frontMatter":{"title":"Docusaurus 2.4","authors":["slorber"],"tags":["release"],"image":"./img/social-card.png","date":"2023-03-23T00:00:00.000Z"},"unlisted":false,"lastUpdatedAt":1733482372000,"lastUpdatedBy":"S\xe9bastien Lorber","prevItem":{"title":"Upgrading frontend dependencies with confidence","permalink":"/blog/upgrading-frontend-dependencies-with-confidence-using-visual-regression-testing"},"nextItem":{"title":"Docusaurus 2.3","permalink":"/blog/releases/2.3"}}')}}]);