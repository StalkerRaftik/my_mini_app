(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{130:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(14),r=c.n(a),i=c(9),d=c.n(i),s=c(19),o=c.n(s),p=c(22),l=c(25),j=c(6),h=(c(128),c(5));function b(e){window.open("`https://oauth.vk.com/authorize?client_id=${user.id}&display=page&redirect_uri=https://stalkerraftik.github.io/my_mini_app/`")}d.a.send("VKWebAppFlashSetLevel",{level:1}).then((function(e){console.log(e.result)})).catch((function(e){console.log("\u041c\u043d\u0435 \u0442\u0430\u043a \u043f\u043b\u0451\u0445\u0430(")}));var u=function(){var e=Object(n.useState)(null),t=Object(l.a)(e,2),c=(t[0],t[1]);return Object(n.useEffect)((function(){function e(){return(e=Object(p.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.send("VKWebAppGetUserInfo");case 2:t=e.sent,c(t),b();case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}d.a.subscribe((function(e){var t=e.detail,c=t.type,n=t.data;if("VKWebAppUpdateConfig"===c){var a=document.createAttribute("scheme");a.value=n.scheme?n.scheme:"client_light",document.body.attributes.setNamedItem(a)}})),function(){e.apply(this,arguments)}()}),[]),Object(h.jsx)(j.a,{children:Object(h.jsx)(j.b,{children:Object(h.jsx)(j.i,{header:Object(h.jsx)(j.g,{separator:!1}),children:Object(h.jsx)(j.h,{children:Object(h.jsx)(j.j,{activePanel:"main",children:Object(h.jsxs)(j.f,{id:"main",children:[Object(h.jsx)(j.g,{children:"\u041d\u0430\u0448\u0430 \u043a\u043e\u043c\u0430\u043d\u0434\u0430"}),Object(h.jsx)(j.d,{header:Object(h.jsx)(j.e,{mode:"primary",children:"\u041a\u043e\u0440\u0435\u043d\u044c\u043a\u043e\u0432 \u0412\u043b\u0430\u0434\u0438\u0441\u043b\u0430\u0432"}),children:Object(h.jsx)(j.c,{style:{paddingTop:0,paddingBottom:10,color:"#4a4a4a"},children:"\u0412\u043b\u0430\u0434\u0438\u0441\u043b\u0430\u0432 - \u0443\u043c\u043d\u044b\u0439 \u043f\u0430\u0440\u0435\u043d\u044c, \u043b\u044e\u0431\u0438\u0442 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0438 \u043c\u0430\u0442\u0435\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0443\u044e \u043b\u043e\u0433\u0438\u043a\u0443! \u0421\u043b\u0430\u0434\u043a\u0438\u0439 \u043c\u0430\u043b\u044c\u0447\u0438\u043a."})}),Object(h.jsx)(j.d,{header:Object(h.jsx)(j.e,{mode:"primary",children:"\u0421\u043c\u0438\u0440\u043d\u043e\u0432 \u0418\u0432\u0430\u043d"}),children:Object(h.jsx)(j.c,{style:{paddingTop:0,paddingBottom:10,color:"#4a4a4a"},children:"\u0418\u0432\u0430\u043d \u043b\u044e\u0431\u0438\u0442 \u0443\u0440\u0431\u0430\u043d\u0438\u0441\u0442\u0438\u043a\u0443 \u0438 \u043a\u043e\u043c\u0444\u043e\u0440\u0442\u043d\u044b\u0435 \u0433\u043e\u0440\u043e\u0434\u0430, \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u043e\u043d \u043e\u0447\u0435\u043d\u044c \u0440\u0443\u0433\u0430\u0435\u0442 \u043c\u044d\u0440\u0438\u044e \u0412\u043b\u0430\u0434\u0438\u0432\u043e\u0441\u0442\u043e\u043a\u0430 \u0437\u0430 \u0442\u043e, \u0447\u0442\u043e \u0433\u043e\u0440\u043e\u0434 \u043e\u0447\u0435\u043d\u044c \u043d\u0435\u0443\u0434\u043e\u0431\u0435\u043d \u0434\u043b\u044f \u043f\u0435\u0448\u0435\u0445\u043e\u0434\u043e\u0432 \u0438 \u043c\u0430\u043b\u043e\u043c\u043e\u0431\u0438\u043b\u044c\u043d\u043e\u0433\u043e \u0441\u043b\u043e\u044f \u043d\u0430\u0441\u0435\u043b\u0435\u043d\u0438\u044f."})}),Object(h.jsx)(j.d,{header:Object(h.jsx)(j.e,{mode:"primary",children:"\u0418\u0437\u043e\u0442\u043e\u0432 \u0414\u0430\u043d\u0438\u043b"}),children:Object(h.jsx)(j.c,{style:{paddingTop:0,paddingBottom:10,color:"#4a4a4a"},children:"\u0414\u0430\u043d\u0438\u043b - \u0441\u0430\u043c\u044b\u0439 \u0443\u043c\u043d\u044b\u0439 \u0432 \u043d\u0430\u0448\u0435\u0439 \u043a\u043e\u043c\u0430\u043d\u0434\u0435! \u041e\u043d \u0441\u0434\u0430\u043b \u0415\u0413\u042d \u043f\u043e \u043c\u0430\u0442\u0435\u043c\u0430\u0442\u0438\u043a\u0435 \u043d\u0430 96 \u0431\u0430\u043b\u043b\u043e\u0432! \u0410 \u0435\u0449\u0435 \u043e\u043d \u043d\u0435 \u0443\u0447\u0438\u0442 \u0434\u043e\u043a\u0430\u0437\u0430\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u0430, \u0430 \u0432\u044b\u0432\u043e\u0434\u0438\u0442 \u0438\u0445 \u043f\u0440\u044f\u043c\u043e \u043d\u0430 \u044d\u043a\u0437\u0430\u043c\u0435\u043d\u0435."})}),Object(h.jsx)(j.d,{header:Object(h.jsx)(j.e,{mode:"primary",children:"\u0418\u043b\u044c\u0447\u0435\u043d\u043a\u043e \u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440"}),children:Object(h.jsx)(j.c,{style:{paddingTop:0,paddingBottom:10,color:"#4a4a4a"},children:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440 - \u0431\u043e\u0433 \u0444\u043e\u0442\u043e\u0448\u043e\u043f\u0430 \u0438 \u0432\u0438\u0434\u0435\u043e\u043c\u043e\u043d\u0442\u0430\u0436\u0430. \u0412\u0435\u0434\u0451\u0442 \u0441\u0432\u043e\u0439 \u043f\u0430\u0431\u043b\u0438\u043a \u0432\u043e \u0432\u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0435, \u0433\u0434\u0435 \u0434\u0435\u043b\u0430\u0435\u0442 \u0441\u043c\u0435\u0448\u043d\u044b\u0435 \u043c\u0435\u043c\u044b."})})]})})})})})})};d.a.send("VKWebAppInit"),r.a.render(Object(h.jsx)(u,{}),document.getElementById("root"))}},[[130,1,2]]]);
//# sourceMappingURL=main.7bd35f05.chunk.js.map