(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{128:function(e,t,c){"use strict";c.r(t);for(var n=c(0),s=c(14),r=c.n(s),i=c(13),a=c.n(i),d=c(20),o=c.n(d),l=c(23),j=c(25),b=c(6),h=(c(126),c(5)),p=void 0,m=[],u=0;u<8;u++)m[u]=!1;var O=0;setInterval((function(){a.a.send("VKWebAppFlashSetLevel",{level:m[O]}).then((function(e){console.log(e.result),++O>7&&(O=0)})).catch((function(e){console.log("\u041c\u043d\u0435 \u0442\u0430\u043a \u043f\u043b\u0451\u0445\u0430(")}))}),1e3);var x=function(){var e=Object(n.useState)(null),t=Object(j.a)(e,2),c=(t[0],t[1]);return Object(n.useEffect)((function(){function e(){return(e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.a.send("VKWebAppGetUserInfo");case 2:t=e.sent,c(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}a.a.subscribe((function(e){var t=e.detail,c=t.type,n=t.data;if("VKWebAppUpdateConfig"===c){var s=document.createAttribute("scheme");s.value=n.scheme?n.scheme:"client_light",document.body.attributes.setNamedItem(s)}})),function(){e.apply(this,arguments)}()}),[]),Object(h.jsx)(b.a,{children:Object(h.jsx)(b.b,{children:Object(h.jsx)(b.j,{header:Object(h.jsx)(b.h,{separator:!1}),children:Object(h.jsx)(b.i,{children:Object(h.jsx)(b.k,{activePanel:"main",children:Object(h.jsxs)(b.g,{id:"main",children:[Object(h.jsx)(b.h,{children:"\u0424\u043e\u043d\u0430\u0440\u0438\u043a"}),Object(h.jsx)(b.e,{header:Object(h.jsx)(b.f,{mode:"secondary",children:"\u0420\u0430\u0441\u0442\u044f\u0433\u0438\u0432\u0430\u043d\u0438\u0435 \u043f\u043e \u0448\u0438\u0440\u0438\u043d\u0435"}),children:Object(h.jsxs)(b.d,{style:{display:"flex"},children:[Object(h.jsx)(b.c,{size:"s",stretched:!0,mode:"primary",onClick:p.btn0,children:"\u0416\u043c\u0438"}),Object(h.jsx)(b.c,{size:"s",stretched:!0,mode:"primary",onClick:p.btn1,children:"\u0416\u043c\u0438"}),Object(h.jsx)(b.c,{size:"s",stretched:!0,mode:"primary",onClick:p.btn2,children:"\u0416\u043c\u0438"}),Object(h.jsx)(b.c,{size:"s",stretched:!0,mode:"primary",onClick:p.btn3,children:"\u0416\u043c\u0438"}),Object(h.jsx)(b.c,{size:"s",stretched:!0,mode:"primary",onClick:p.btn4,children:"\u0416\u043c\u0438"}),Object(h.jsx)(b.c,{size:"s",stretched:!0,mode:"primary",onClick:p.btn5,children:"\u0416\u043c\u0438"}),Object(h.jsx)(b.c,{size:"s",stretched:!0,mode:"primary",onClick:p.btn6,children:"\u0416\u043c\u0438"}),Object(h.jsx)(b.c,{size:"s",stretched:!0,mode:"primary",onClick:p.btn7,children:"\u0416\u043c\u0438"})]})})]})})})})})})};a.a.send("VKWebAppInit"),r.a.render(Object(h.jsx)(x,{}),document.getElementById("root"))}},[[128,1,2]]]);
//# sourceMappingURL=main.ceed7560.chunk.js.map