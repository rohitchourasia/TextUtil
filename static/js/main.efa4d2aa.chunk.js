(this["webpackJsonptodos-list"]=this["webpackJsonptodos-list"]||[]).push([[0],{10:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),n=a(4),l=a.n(n),r=(a(9),a(2)),o=(a.p,a(10),a(0));function i(e){var t=Object(c.useState)("ENABLE MODE "),a=Object(r.a)(t,2);a[0],a[1];return Object(o.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(o.jsxs)("div",{className:"container-fluid",children:[Object(o.jsx)("a",{className:"navbar-brand",href:"#",children:e.title}),Object(o.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(o.jsx)("span",{className:"navbar-toggler-icon"})}),Object(o.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(o.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:"Home"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-link",href:"#",children:e.abouttext})})]}),Object(o.jsxs)("form",{className:"d-flex",children:[Object(o.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),Object(o.jsx)("button",{className:"btn btn-outline-success",type:"submit",children:"Search"})]}),Object(o.jsxs)("div",{class:"form-check form-switch text-primary",children:[Object(o.jsx)("input",{className:"form-check-input",onClick:e.togglemode,type:"checkbox",role:"switch",id:"flexSwitchCheckDefault"}),Object(o.jsx)("label",{className:"form-check-label",htmlfor:"flexSwitchCheckDefault",children:"ENABLE THE MODE"})]})]})]})})}function b(e){var t=Object(c.useState)("Enter the text "),a=Object(r.a)(t,2),s=a[0],n=a[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"new",style:{color:"light"===e.mode?"black":"white"},children:[Object(o.jsx)("h1",{children:e.heading}),Object(o.jsxs)("div",{className:"mb-3",children:[Object(o.jsx)("textarea",{className:"form-control",onChange:function(t){n(t.target.value),e.showAlert("TEXT changed","succes")},value:s,id:"exampleFormControlTextarea1",rows:"8",style:{backgroundColor:"light"===e.mode?"white":"grey"}}),Object(o.jsx)("button",{className:"btn",onClick:function(){var t=s.toUpperCase();n(t),e.showAlert("changed to uppercase","danger")},class:"btn btn-success",children:" Convert to uppercase"}),Object(o.jsx)("button",{className:"btn",onClick:function(){var t=s.toLowerCase();n(t),e.showAlert("changed to lowercase","danger")},class:"btn btn-success",children:" Convert to lowercase"})]})]}),Object(o.jsxs)("div",{className:"my container my-3",style:{color:"light"===e.mode?"black":"white"},children:[Object(o.jsx)("h1",{children:'"Your text summary "'}),Object(o.jsxs)("p",{children:[s.split(" ").length,"words and ",s.length,"characters"]}),Object(o.jsxs)("p",{children:[.008*s.split(" ").length,"minutes to read"]})]})]})}function d(e){return e.alert&&Object(o.jsx)("div",{children:Object(o.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(o.jsx)("strong",{children:e.alert.msg}),Object(o.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"alert","aria-label":"Close"})]})})}var j=function(){var e=Object(c.useState)("light"),t=Object(r.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)(null),l=Object(r.a)(n,2),j=l[0],h=l[1],u=function(e,t){h({msg:e,type:t}),setTimeout((function(){h(null)}),2e3)};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(i,{title:"text",abouttext:"about text",mode:a,togglemode:function(){"light"==a?(s("dark"),document.body.style.backgroundColor="#042743",document.title="TEXTUTIL-DARK MODE",u("DARK Mode enabled","success")):(s("light"),document.title="TEXTUTIL-LIGHT MODE",document.body.style.backgroundColor="white",u("LIGHT Mode enabled","success"))}}),Object(o.jsx)(d,{alert:j}),Object(o.jsx)(b,{heading:"Enter the Text ",mode:a,showAlert:u})]})},h=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,13)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,l=t.getTTFB;a(e),c(e),s(e),n(e),l(e)}))};l.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(j,{})}),document.getElementById("root")),h()},9:function(e,t,a){}},[[12,1,2]]]);
//# sourceMappingURL=main.efa4d2aa.chunk.js.map