(this["webpackJsonpgit-browser"]=this["webpackJsonpgit-browser"]||[]).push([[0],{151:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(42),o=n.n(r),l=(n(50),n(7)),i=n(1),u=(n(51),n(10)),m=n(13),s=n.n(m),d=function(){var e=Object(i.f)(),t=Object(a.useState)(""),n=Object(u.a)(t,2),r=n[0],o=n[1];return Object(a.useEffect)((function(){var t=function(t){"Enter"!==t.code&&"NumpadEnter"!==t.code||e.push(r)};return document.addEventListener("keydown",t),function(){document.removeEventListener("keydown",t)}})),c.a.createElement("div",null,c.a.createElement("div",{className:"row center"},c.a.createElement("div",{className:"input-field col s6"},c.a.createElement("input",{id:"username",type:"text",value:r,onChange:function(e){o(e.target.value)}}),c.a.createElement("label",{htmlFor:"username"},"Username"),c.a.createElement("button",{id:"search-btn",type:"button",className:"waves-effect waves-light btn",onClick:function(){e.push(r)}},"Search"))))},f=function(e){var t=e.repoList,n=Object(i.g)().userName;return c.a.createElement("div",null,c.a.createElement("div",{className:"collection center"},t.map((function(e){return c.a.createElement("div",{key:e,className:"collection-item"},c.a.createElement(l.b,{to:"/".concat(n,"/").concat(e)},e))}))))},p=n(44),E=n.n(p),h=function(e){var t=e.readme;return c.a.createElement("div",null,c.a.createElement(E.a,{source:t}))},v=function(){var e=Object(i.g)(),t=e.userName,n=e.repositoryName;return c.a.createElement("nav",{className:"teal lighten-2"},c.a.createElement("div",{id:"repository-name",className:"left hide-on-med-and-down"},n||t||"Welcome"),t&&c.a.createElement(l.b,{className:"right hide-on-med-and-down",to:"/",id:"go-back"},"Go Home"),n&&c.a.createElement(l.b,{to:"/".concat(t),className:"right hide-on-med-and-down",id:"go-repository-list"},"Go Back"))},b=function(){var e=Object(i.g)(),t=e.userName,n=e.repositoryName,r=Object(a.useState)([]),o=Object(u.a)(r,2),l=o[0],m=o[1],p="https://api.github.com/users/".concat(t,"/repos");Object(a.useEffect)((function(){"undefined"!==typeof t&&s()(p).then((function(e){m(e.data.map((function(e){return e.name})))}))}),[p,t]);var E=Object(a.useState)(""),b=Object(u.a)(E,2),N=b[0],g=b[1],w="https://api.github.com/repos/".concat(t,"/").concat(n,"/readme");return Object(a.useEffect)((function(){"undefined"!==typeof t&&"undefined"!==typeof n&&s()(w).then((function(e){var t=e.data;s()(t.download_url).then((function(e){var t=e.data;g(t)}))}))}),[n,t,w]),c.a.createElement("div",null,c.a.createElement(v,null),c.a.createElement(i.c,null,c.a.createElement(i.a,{exact:!0,path:"/",component:function(){return c.a.createElement(d,null)}}),c.a.createElement(i.a,{exact:!0,path:"/:userName",component:function(){return c.a.createElement(f,{repoList:l})}}),c.a.createElement(i.a,{exact:!0,path:"/:userName/:repositoryName",component:function(){return c.a.createElement(h,{readme:N})}})))};var N=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(l.a,{basename:"/git-browser"},c.a.createElement(i.c,null,c.a.createElement(i.a,{exact:!0,path:"/",component:function(){return c.a.createElement(b,null)}}),c.a.createElement(i.a,{exact:!0,path:"/:userName",component:function(){return c.a.createElement(b,null)}}),c.a.createElement(i.a,{exact:!0,path:"/:userName/:repositoryName",component:function(){return c.a.createElement(b,null)}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},45:function(e,t,n){e.exports=n(151)},50:function(e,t,n){}},[[45,1,2]]]);
//# sourceMappingURL=main.33f43749.chunk.js.map