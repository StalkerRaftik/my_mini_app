(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{129:function(t,n,e){"use strict";e.r(n);var s=e(0),c=e(15),i=e.n(c),b=e(14),r=e.n(b),o=e(23),a=e(24),h=e(8),l=e(27),u=e(26),d=e(6),j=(e(127),e(5)),O=function(t){Object(l.a)(e,t);var n=Object(u.a)(e);function e(t){var s;Object(o.a)(this,e),(s=n.call(this,t)).state=e.getInitState(),s.buttons=[];for(var c=0;c<8;c++)s.buttons[c]=!1;return s.curbtn=0,s.btn0=s.btn0.bind(Object(h.a)(s)),s.btn1=s.btn1.bind(Object(h.a)(s)),s.btn2=s.btn2.bind(Object(h.a)(s)),s.btn3=s.btn3.bind(Object(h.a)(s)),s.btn4=s.btn4.bind(Object(h.a)(s)),s.btn5=s.btn5.bind(Object(h.a)(s)),s.btn6=s.btn6.bind(Object(h.a)(s)),s.btn7=s.btn7.bind(Object(h.a)(s)),s.IntervalInit=s.IntervalInit.bind(Object(h.a)(s)),s}return Object(a.a)(e,[{key:"IntervalInit",value:function(){var t=this;setInterval((function(){var n;n=0==t.buttons[t.curbtn]?0:1,console.log(t.curbtn),console.log(n),r.a.send("VKWebAppFlashSetLevel",{level:n}).then((function(n){console.log(n.result),t.curbtn++,t.curbtn>7&&(t.curbtn=0)})).catch((function(t){console.log("\u041c\u043d\u0435 \u0442\u0430\u043a \u043f\u043b\u0451\u0445\u0430(")}))}),1e3)}},{key:"btn0",value:function(){this.buttons[0]=!this.buttons[0]}},{key:"btn1",value:function(){this.buttons[1]=!this.buttons[1]}},{key:"btn2",value:function(){this.buttons[2]=!this.buttons[2]}},{key:"btn3",value:function(){this.buttons[3]=!this.buttons[3]}},{key:"btn4",value:function(){this.buttons[4]=!this.buttons[4]}},{key:"btn5",value:function(){this.buttons[5]=!this.buttons[5]}},{key:"btn6",value:function(){this.buttons[6]=!this.buttons[6]}},{key:"btn7",value:function(){this.buttons[7]=!this.buttons[7]}},{key:"render",value:function(){return Object(j.jsx)(d.a,{children:Object(j.jsx)(d.b,{children:Object(j.jsx)(d.j,{header:Object(j.jsx)(d.h,{separator:!1}),children:Object(j.jsx)(d.i,{children:Object(j.jsx)(d.k,{activePanel:"main",children:Object(j.jsxs)(d.g,{id:"main",children:[Object(j.jsx)(d.h,{children:"\u0424\u043e\u043d\u0430\u0440\u0438\u043a"}),Object(j.jsx)(d.e,{header:Object(j.jsx)(d.f,{mode:"secondary",children:"\u0420\u0430\u0441\u0442\u044f\u0433\u0438\u0432\u0430\u043d\u0438\u0435 \u043f\u043e \u0448\u0438\u0440\u0438\u043d\u0435"}),children:Object(j.jsxs)(d.d,{style:{display:"flex"},children:[Object(j.jsx)(d.c,{size:"s",stretched:!0,mode:"primary",onClick:this.btn0,children:"\u0416\u043c\u0438"}),Object(j.jsx)(d.c,{size:"s",stretched:!0,mode:"primary",onClick:this.btn1,children:"\u0416\u043c\u0438"}),Object(j.jsx)(d.c,{size:"s",stretched:!0,mode:"primary",onClick:this.btn2,children:"\u0416\u043c\u0438"}),Object(j.jsx)(d.c,{size:"s",stretched:!0,mode:"primary",onClick:this.btn3,children:"\u0416\u043c\u0438"}),Object(j.jsx)(d.c,{size:"s",stretched:!0,mode:"primary",onClick:this.btn4,children:"\u0416\u043c\u0438"}),Object(j.jsx)(d.c,{size:"s",stretched:!0,mode:"primary",onClick:this.btn5,children:"\u0416\u043c\u0438"}),Object(j.jsx)(d.c,{size:"s",stretched:!0,mode:"primary",onClick:this.btn6,children:"\u0416\u043c\u0438"}),Object(j.jsx)(d.c,{size:"s",stretched:!0,mode:"primary",onClick:this.btn7,children:"\u0416\u043c\u0438"})]})})]})})})})})})}}]),e}(s.Component);r.a.send("VKWebAppInit"),i.a.render(Object(j.jsx)(O,{}),document.getElementById("root"))}},[[129,1,2]]]);
//# sourceMappingURL=main.56ebc811.chunk.js.map