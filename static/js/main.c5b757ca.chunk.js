(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{12:function(t,e,c){},13:function(t,e,c){"use strict";c.r(e);var n=c(3),a=c.n(n),i=(c(10),c(5)),s=c(1),d=c(4),b=c.n(d),l=c(0),r=function(t){var e=t.tabs,c=t.selectedTabId,n=t.onTabSelected,a=t.children;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"tabs is-boxed",children:Object(l.jsx)("ul",{children:e.map((function(t){return Object(l.jsx)("li",{className:b()({"is-active":c===t.id}),children:Object(l.jsx)("a",{href:"#".concat(t.id),onClick:function(){return n(t)},children:t.title})},t.id)}))})}),a]})},o=(c(12),[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}]),j=function(){var t=Object(s.useState)(o[0]),e=Object(i.a)(t,2),c=e[0],n=e[1];return Object(l.jsxs)("div",{className:"section",children:[Object(l.jsx)("h1",{className:"title",children:"Selected tab is ".concat(c.title)}),Object(l.jsx)(r,{tabs:o,selectedTabId:c.id,onTabSelected:function(t){t.id!==c.id&&n(t)},children:Object(l.jsx)("div",{className:"block","data-cy":"tab-content",children:c.content})})]})};a.a.render(Object(l.jsx)(j,{}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.c5b757ca.chunk.js.map