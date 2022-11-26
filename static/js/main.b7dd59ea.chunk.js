(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var a=c(5),s=c.n(a),n=c(2),l=c(1),i=(c(10),c(11),c(4)),r=c.n(i),o=c(0),d=function(e){var t=e.todos,c=e.handleClick,a=e.activeID;return Object(o.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"#"}),Object(o.jsx)("th",{children:Object(o.jsx)("span",{className:"icon",children:Object(o.jsx)("i",{className:"fas fa-check"})})}),Object(o.jsx)("th",{children:"Title"}),Object(o.jsx)("th",{"aria-label":"gap"})]})}),Object(o.jsx)("tbody",{children:t.map((function(e){var t=a===e.id;return Object(o.jsxs)("tr",{"data-cy":"todo",className:r()({"has-background-info-light":t}),children:[Object(o.jsx)("td",{className:"is-vcentered",children:e.id}),Object(o.jsx)("td",{className:"is-vcentered",children:e.completed?Object(o.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(o.jsx)("i",{className:"fas fa-check"})}):""}),Object(o.jsx)("td",{className:"is-vcentered is-expanded",children:Object(o.jsx)("p",{className:r()({"has-text-success":e.completed,"has-text-danger":!e.completed}),children:e.title})}),Object(o.jsx)("td",{className:"has-text-right is-vcentered",children:Object(o.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return c(e)},children:Object(o.jsxs)("span",{className:"icon",children:[!t&&Object(o.jsx)("i",{className:"far fa-eye"}),t&&Object(o.jsx)("i",{className:"far fa-eye-slash"})]})})})]},e.id)}))})]})},j=function(e){var t=e.onChangeSelector,c=e.selectorValue,a=e.onChangeInput,s=e.inputValue,n=e.clear;return Object(o.jsxs)("form",{className:"field has-addons",children:[Object(o.jsx)("p",{className:"control",children:Object(o.jsx)("span",{className:"select",children:Object(o.jsxs)("select",{"data-cy":"statusSelect",value:c,onChange:function(e){t(e.target.value)},children:[Object(o.jsx)("option",{value:"all",children:"All"}),Object(o.jsx)("option",{value:"active",children:"Active"}),Object(o.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(o.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(o.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:s,onChange:function(e){a(e.target.value.toLowerCase())}}),Object(o.jsx)("span",{className:"icon is-left",children:Object(o.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(o.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:s&&Object(o.jsx)("button",{"data-cy":"clearSearchButton","aria-label":"delete",type:"button",className:"delete",onClick:n})})]})]})},b=(c(13),function(){return Object(o.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(o.jsx)("div",{className:"Loader__content"})})});function u(e){var t,c="".concat("https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e,".json");return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var h=function(){return u("/todos")},m=function(e){var t=e.todo,c=e.reset,a=Object(l.useState)(),s=Object(n.a)(a,2),i=s[0],r=s[1];return Object(l.useEffect)((function(){var e;(e=t.userId,u("/users/".concat(e))).then((function(e){return r(e)}))}),[t.id]),Object(o.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(o.jsx)("div",{className:"modal-background"}),!i&&Object(o.jsx)(b,{}),i&&Object(o.jsxs)("div",{className:"modal-card",children:[Object(o.jsxs)("header",{className:"modal-card-head",children:[Object(o.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(t.id)}),Object(o.jsx)("button",{type:"button","aria-label":"delete",className:"delete","data-cy":"modal-close",onClick:c})]}),Object(o.jsxs)("div",{className:"modal-card-body",children:[Object(o.jsx)("p",{className:"block","data-cy":"modal-title",children:t.title}),Object(o.jsxs)("p",{className:"block","data-cy":"modal-user",children:[t.completed&&Object(o.jsx)("strong",{className:"has-text-success",children:"Done"}),!t.completed&&Object(o.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(o.jsx)("a",{href:"mailto:".concat(i.email),children:i.name})]})]})]})]})},O=function(){var e=Object(l.useState)([]),t=Object(n.a)(e,2),c=t[0],a=t[1],s=Object(l.useState)("all"),i=Object(n.a)(s,2),r=i[0],u=i[1],O=Object(l.useState)(""),x=Object(n.a)(O,2),f=x[0],p=x[1],N=Object(l.useState)(!1),v=Object(n.a)(N,2),y=v[0],g=v[1],k=Object(l.useState)(),C=Object(n.a)(k,2),S=C[0],w=C[1],I=Object(l.useState)(0),_=Object(n.a)(I,2),E=_[0],L=_[1],T=function(){switch(r){case"active":return h().then((function(e){return e.filter((function(e){return!e.completed}))}));case"completed":return h().then((function(e){return e.filter((function(e){return e.completed}))}));default:return h()}};Object(l.useEffect)((function(){T().then((function(e){return a(e)}))}),[r]);var V=Object(l.useMemo)((function(){return c.filter((function(e){return e.title.toLowerCase().includes(f)}))}),[c,f]),B=Object(l.useCallback)((function(){g(!1),L(0)}),[]),D=Object(l.useCallback)((function(){p("")}),[]);return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"section",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"box",children:[Object(o.jsx)("h1",{className:"title",children:"Todos:"}),Object(o.jsx)("div",{className:"block",children:Object(o.jsx)(j,{onChangeSelector:u,selectorValue:r,onChangeInput:p,inputValue:f,clear:D})}),Object(o.jsx)("div",{className:"block",children:0===c.length?Object(o.jsx)(b,{}):Object(o.jsx)(d,{todos:V,handleClick:function(e){g(!0),w(e),L(e.id)},activeID:E})})]})})}),y&&S&&Object(o.jsx)(m,{todo:S,reset:B})]})};s.a.render(Object(o.jsx)(O,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.b7dd59ea.chunk.js.map