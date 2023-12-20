(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var s,a=c(7),n=c.n(a),l=c(2),i=c(1),d=(c(13),c(14),c(3)),o=c.n(d),r=c(0),j=function(e){var t=e.todos,c=e.selectTodo,s=e.setSelectTodo;return Object(r.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"#"}),Object(r.jsx)("th",{children:Object(r.jsx)("span",{className:"icon",children:Object(r.jsx)("i",{className:"fas fa-check"})})}),Object(r.jsx)("th",{children:"Title"}),Object(r.jsx)("th",{children:" "})]})}),Object(r.jsx)("tbody",{children:t.map((function(e){return Object(r.jsxs)("tr",{"data-cy":"todo",className:o()({"has-background-info-light":e.id===(null===c||void 0===c?void 0:c.id)}),children:[Object(r.jsx)("td",{className:"is-vcentered",children:e.id}),Object(r.jsx)("td",{className:"is-vcentered",children:e.completed&&Object(r.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(r.jsx)("i",{className:"fas fa-check"})})}),Object(r.jsx)("td",{className:"is-vcentered is-expanded",children:Object(r.jsx)("p",{className:o()({"has-text-danger":!e.completed},{"has-text-success":e.completed}),children:e.title})}),Object(r.jsx)("td",{className:"has-text-right is-vcentered",children:Object(r.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return s(e)},children:Object(r.jsx)("span",{className:"icon",children:Object(r.jsx)("i",{className:o()("far",{"fa-eye":e.id!==(null===c||void 0===c?void 0:c.id)},{"fa-eye-slash":e.id===(null===c||void 0===c?void 0:c.id)})})})})})]},e.id)}))})]})},b=c(8);!function(e){e.All="all",e.Active="active",e.Completed="completed"}(s||(s={}));var u=function(e){var t=e.todos,c=e.setFilterTodos,a=Object(i.useState)(""),n=Object(l.a)(a,2),d=n[0],o=n[1],j=Object(i.useState)(""),u=Object(l.a)(j,2),h=u[0],m=u[1];return Object(i.useEffect)((function(){var e=function(e,t,c){var a=Object(b.a)(e);switch(c&&(a=a.filter((function(e){return e.title.toLowerCase().includes(c.trim().toLowerCase())}))),t){case s.Active:return a.filter((function(e){return!e.completed}));case s.Completed:return a.filter((function(e){return e.completed}));default:return a}}(t,d,h);c(e)}),[d,h,t,c]),Object(r.jsxs)("form",{className:"field has-addons",children:[Object(r.jsx)("p",{className:"control",children:Object(r.jsx)("span",{className:"select",children:Object(r.jsxs)("select",{"data-cy":"statusSelect",onChange:function(e){return o(e.target.value)},children:[Object(r.jsx)("option",{value:"all",children:s.All}),Object(r.jsx)("option",{value:"active",children:s.Active}),Object(r.jsx)("option",{value:"completed",children:s.Completed})]})})}),Object(r.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(r.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:h,onChange:function(e){return m(e.target.value)}}),Object(r.jsx)("span",{className:"icon is-left",children:Object(r.jsx)("i",{className:"fas fa-magnifying-glass"})}),h&&Object(r.jsx)("span",{className:"icon is-right",children:Object(r.jsx)("button",{"aria-label":"Search Clear","data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return m("")}})})]})]})},h=(c(16),function(){return Object(r.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(r.jsx)("div",{className:"Loader__content"})})});function m(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var O=function(e){var t=e.todo,c=e.setSelectTodo,s=Object(i.useState)(null),a=Object(l.a)(s,2),n=a[0],d=a[1],j=Object(i.useState)(!0),b=Object(l.a)(j,2),u=b[0],O=b[1];return Object(i.useEffect)((function(){var e;t&&(e=t.userId,m("/users/".concat(e))).then((function(e){d(e),O(!1)}))}),[t]),Object(r.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(r.jsx)("div",{className:"modal-background"}),u?Object(r.jsx)(h,{}):Object(r.jsxs)("div",{className:"modal-card",children:[Object(r.jsxs)("header",{className:"modal-card-head",children:[Object(r.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(t.id)}),Object(r.jsx)("button",{"aria-label":"Close Modal",type:"button",className:"delete","data-cy":"modal-close",onClick:function(){return c(null)}})]}),Object(r.jsxs)("div",{className:"modal-card-body",children:[Object(r.jsx)("p",{className:"block","data-cy":"modal-title",children:t.title}),Object(r.jsxs)("p",{className:"block","data-cy":"modal-user",children:[Object(r.jsx)("strong",{className:o()({"has-text-success":t.completed},{"has-text-danger":!t.completed}),children:t.completed?"Done":"Planned"}),n&&Object(r.jsxs)(r.Fragment,{children:[" by ",Object(r.jsx)("a",{href:"mailto:".concat(n.email),children:n.name})]})]})]})]})]})},x=function(){var e=Object(i.useState)([]),t=Object(l.a)(e,2),c=t[0],s=t[1],a=Object(i.useState)(!0),n=Object(l.a)(a,2),d=n[0],o=n[1],b=Object(i.useState)([]),x=Object(l.a)(b,2),f=x[0],p=x[1],v=Object(i.useState)(null),N=Object(l.a)(v,2),y=N[0],g=N[1];return Object(i.useEffect)((function(){m("/todos").then((function(e){s(e),p(e),o(!1)}))}),[]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:"section",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"box",children:[Object(r.jsx)("h1",{className:"title",children:"Todos:"}),Object(r.jsx)("div",{className:"block",children:Object(r.jsx)(u,{todos:c,setFilterTodos:p})}),Object(r.jsx)("div",{className:"block",children:d?Object(r.jsx)(h,{}):Object(r.jsx)(j,{todos:f,selectTodo:y,setSelectTodo:g})})]})})}),y&&Object(r.jsx)(O,{todo:y,setSelectTodo:g})]})};n.a.render(Object(r.jsx)(x,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.18f0a5cf.chunk.js.map