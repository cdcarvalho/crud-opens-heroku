(this.webpackJsonpweb=this.webpackJsonpweb||[]).push([[0],{13:function(e,a,t){"use strict";t.d(a,"a",(function(){return s})),t.d(a,"b",(function(){return u}));var n,r=t(5),c=t.n(r),o=t(9),l=new(t(22).a),s=function(){return localStorage.getItem("token")},u=function(){return setInterval(i,5e4),"true"===localStorage.getItem("token-valid")||(alert("Sess\xe3o expirada. Fa\xe7a o login novamente!"),!1)},i=function(){var e=Object(o.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.tokenValid();case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},15:function(e,a,t){"use strict";var n=t(41),r=t.n(n).a.create({baseURL:"http://localhost:3030/api/"});a.a=r},22:function(e,a,t){"use strict";var n=t(5),r=t.n(n),c=t(9),o=t(23),l=t(24),s=t(15),u=t(13),i=function(){function e(){Object(o.a)(this,e)}return Object(l.a)(e,[{key:"login",value:function(){var e=Object(c.a)(r.a.mark((function e(a){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.a.get("authenticate",{headers:{Authorization:"Basic ".concat(a)}}).then((function(e){localStorage.setItem("token",e.data.token),localStorage.setItem("token-valid","true")}));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),alert("Login ou Senha inv\xe1lido.");case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(a){return e.apply(this,arguments)}}()},{key:"tokenValid",value:function(){var e=Object(c.a)(r.a.mark((function e(){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.a.get("token-valid",{headers:{Authorization:"Basic ".concat(Object(u.a)())}}).then((function(e){return localStorage.setItem("token-valid",e.data),e.data}));case 3:return a=e.sent,e.abrupt("return",a);case 7:return e.prev=7,e.t0=e.catch(0),localStorage.setItem("token-valid",e.t0.data),e.abrupt("return",!1);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}()}]),e}();a.a=i},39:function(e,a,t){},42:function(e,a,t){"use strict";(function(e){var n=t(5),r=t.n(n),c=t(9),o=t(17),l=t(16),s=t(18),u=t(0),i=t.n(u),m=t(7),d=t(11),p=t(84),h=t(85),f=t(86),b=t(46),E=t(47),g=t(87),v=(t(76),t(22));a.a=function(){var a=new v.a,t=Object(m.g)(),n=Object(u.useState)({username:"",password:""}),w=Object(s.a)(n,2),y=w[0],O=w[1];function j(e){var a=e.target,t=a.name,n=a.value;O(Object(l.a)(Object(l.a)({},y),{},Object(o.a)({},t,n)))}function k(){return(k=Object(c.a)(r.a.mark((function n(c){var o,l,s;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c.preventDefault(),o=y.username,l=y.password,s=e.from("".concat(o,":").concat(l),"utf8").toString("base64"),n.prev=3,n.next=6,a.login(s);case 6:t.push("/dashboard"),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(3),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[3,9]])})))).apply(this,arguments)}return i.a.createElement("div",{id:"page-login"},i.a.createElement(p.a,null,i.a.createElement("div",{id:"page-create-user",className:"body_form"},i.a.createElement(h.a,{onSubmit:function(e){return k.apply(this,arguments)}},i.a.createElement(f.a,null,i.a.createElement(b.a,{className:"strong"},"Login:"),i.a.createElement(E.a,{id:"username",type:"text",name:"username",placeholder:"Login",maxLength:11,required:!0,onChange:j}),i.a.createElement(b.a,{className:"strong"},"Senha:"),i.a.createElement(E.a,{id:"nome",type:"password",name:"password",placeholder:"Senha",required:!0,onChange:j})),i.a.createElement(d.b,{id:"cancelar",to:"/",className:"btn btn-primary link-menu"},"Cancelar"),i.a.createElement(g.a,{type:"submit"},"Logar")))))}}).call(this,t(72).Buffer)},48:function(e,a,t){e.exports=t(83)},53:function(e,a,t){},76:function(e,a,t){},81:function(e,a,t){},82:function(e,a,t){},83:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(40),o=t.n(c),l=(t(53),t(45)),s=t(7),u=t(11),i=t(13),m=t(42),d=t(88),p=t(89),h=t(90),f=t(91),b=(t(81),t(21),function(){return r.a.createElement("div",{id:"header",className:"body"},r.a.createElement(d.a,{color:"dark",dark:!0},r.a.createElement(p.a,{href:"/dashboard"},"Inicio"),r.a.createElement(h.a,null,r.a.createElement(f.a,null,r.a.createElement(u.b,{to:"/user/list",className:"btn btn-primary link-menu"},"Usu\xe1rios")),r.a.createElement(f.a,null,r.a.createElement(u.b,{to:"/",onClick:function(){localStorage.clear()},className:"btn btn-secondary link-menu"},"Sair")))))}),E=(t(82),function(){return r.a.createElement("div",{id:"dashbord",className:"body"},r.a.createElement(b,null))}),g=t(5),v=t.n(g),w=t(9),y=t(18),O=t(92),j=t(87),k=t(44),N=(t(39),t(23)),x=t(24),S=t(15),C=function(){function e(){Object(N.a)(this,e)}return Object(x.a)(e,[{key:"getUsers",value:function(){var e=Object(w.a)(v.a.mark((function e(){var a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=S.a.get("users",{headers:{Authorization:"Basic ".concat(Object(i.a)())}}).then((function(e){return e.data})).catch((function(){return alert("Nenhum registro encontrado."),[]})),e.abrupt("return",a);case 5:return e.prev=5,e.t0=e.catch(0),e.abrupt("return",[]);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}()},{key:"delete",value:function(){var e=Object(w.a)(v.a.mark((function e(a){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.a.delete("user/".concat(a),{headers:{Authorization:"Basic ".concat(Object(i.a)())}}).then((function(){alert("Registro removido com sucesso.")})).catch((function(e){alert(e)}));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),alert("Ocorreu um erro ao remover o usu\xe1rio.");case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(a){return e.apply(this,arguments)}}()}]),e}(),B=function(){var e=Object(n.useState)([]),a=Object(y.a)(e,2),t=a[0],c=a[1],o=new C;function l(){try{o.getUsers().then((function(e){c(e)}))}catch(e){alert(e)}}Object(n.useEffect)((function(){var e=!0;try{o.getUsers().then((function(a){e&&c(a)})).catch((function(e){alert(e)}))}catch(a){alert(a)}return function(){e=!1}}),[o]);var s=function(){var e=Object(w.a)(v.a.mark((function e(a,t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.persist();try{o.delete(t).then((function(){l()}))}catch(n){alert(n)}case 2:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"body"},r.a.createElement(d.a,{color:"dark",dark:!0},r.a.createElement(p.a,{href:"/user/list"},"Usu\xe1rios"),r.a.createElement(h.a,null,r.a.createElement(f.a,null,r.a.createElement(u.b,{to:"/user/create",className:"btn btn-primary link-menu"},"Novo")))),r.a.createElement(O.a,{bordered:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{className:"cabecalho"},"ID"),r.a.createElement("th",{className:"cabecalho"},"Nome"),r.a.createElement("th",{className:"cabecalho"},"Email"),r.a.createElement("th",{className:"cabecalho"},"Login"),r.a.createElement("th",{className:"cabecalho"},"A\xe7\xe3o"))),t.map((function(e){return r.a.createElement("tbody",{key:e._id},r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},e._id),r.a.createElement("td",{className:"row_center",style:{width:"20%"}},e.name),r.a.createElement("td",{className:"row_center",style:{width:"25%"}},e.email),r.a.createElement("td",{className:"row_center",style:{width:"15%"}},e.login),r.a.createElement("td",null,r.a.createElement("div",{className:"ml-auto"},r.a.createElement(u.b,{className:"btn btn-warning mr-1",to:"/user/edit/".concat(e._id)},"Editar"),r.a.createElement(j.a,{color:"danger",onClick:function(a){return s(a,e._id)}},"Remover")))))}))),r.a.createElement("footer",null,r.a.createElement(u.b,{to:"/dashboard"},r.a.createElement(k.a,null),"Voltar")))},L=t(17),A=t(16),I=t(84),_=t(85),q=t(86),U=t(46),z=t(47),D=function(){var e=Object(s.g)(),a=Object(n.useState)({login:"",password:"",name:"",email:""}),t=Object(y.a)(a,2),c=t[0],o=t[1];function l(e){var a=e.target,t=a.name,n=a.value;o(Object(A.a)(Object(A.a)({},c),{},Object(L.a)({},t,n)))}function u(){return(u=Object(w.a)(v.a.mark((function a(t){var n,r,o,l,s;return v.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t.preventDefault(),n=c.login,r=c.password,o=c.name,l=c.email,s={login:n,password:r,name:o,email:l},a.next=5,S.a.post("user",s,{headers:{Authorization:"Basic ".concat(Object(i.a)())}});case 5:alert("Usu\xe1rio Cadastrado com Sucesso!"),e.goBack();case 7:case"end":return a.stop()}}),a)})))).apply(this,arguments)}return r.a.createElement(I.a,null,r.a.createElement("div",{id:"page-create-user",className:"body_form"},r.a.createElement(_.a,{onSubmit:function(e){return u.apply(this,arguments)}},r.a.createElement(q.a,null,r.a.createElement(U.a,{className:"strong"},"Nome:"),r.a.createElement(z.a,{id:"nome",type:"text",name:"name",placeholder:"Nome",value:c.name,required:!0,onChange:l}),r.a.createElement(U.a,{className:"strong"},"Email:"),r.a.createElement(z.a,{id:"email",type:"email",name:"email",placeholder:"Email",value:c.email,onChange:l}),r.a.createElement(U.a,{className:"strong"},"Login:"),r.a.createElement(z.a,{id:"login",type:"text",name:"login",placeholder:"Login",maxLength:11,value:c.login,required:!0,onChange:l}),r.a.createElement(U.a,{className:"strong"},"Senha:"),r.a.createElement(z.a,{id:"password",type:"password",name:"password",placeholder:"Senha",value:c.password,required:!0,onChange:l})),r.a.createElement(j.a,{id:"cancelar",onClick:function(){e.goBack()}},"Cancelar"),r.a.createElement(j.a,{type:"submit"},"Salvar"))))},R=function(){var e=Object(s.g)(),a=Object(s.h)().id,t=Object(n.useState)({login:"",password:"",name:"",email:""}),c=Object(y.a)(t,2),o=c[0],l=c[1];function u(e){var a=e.target,t=a.name,n=a.value;l(Object(A.a)(Object(A.a)({},o),{},Object(L.a)({},t,n)))}function m(){return(m=Object(w.a)(v.a.mark((function t(n){var r,c,l,s,u;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),r=o.login,c=o.password,l=o.name,s=o.email,u={login:r,password:c,name:l,email:s},t.next=5,S.a.put("user/".concat(a),u,{headers:{Authorization:"Basic ".concat(Object(i.a)())}});case 5:alert("Usu\xe1rio Alterado com Sucesso!"),e.goBack();case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(){return(d=Object(w.a)(v.a.mark((function e(a){var t,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.a.get("user/".concat(a),{headers:{Authorization:"Basic ".concat(Object(i.a)())}});case 2:t=e.sent,n={login:t.data.login,password:t.data.password,name:t.data.name,email:t.data.email},l(n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(e){d.apply(this,arguments)}(a)}),[a]),r.a.createElement("div",{id:"page-create-user",className:"body_form"},r.a.createElement(_.a,{onSubmit:function(e){return m.apply(this,arguments)}},r.a.createElement(q.a,null,r.a.createElement(U.a,{className:"strong"},"Nome:"),r.a.createElement(z.a,{id:"name",type:"text",name:"name",placeholder:"Nome",value:o.name,required:!0,onChange:u}),r.a.createElement(U.a,{className:"strong"},"Email:"),r.a.createElement(z.a,{id:"email",type:"email",name:"email",placeholder:"Email",value:o.email,onChange:u}),r.a.createElement(U.a,{className:"strong"},"Login:"),r.a.createElement(z.a,{id:"login",type:"text",name:"login",placeholder:"Login",maxLength:11,value:o.login,required:!0,onChange:u}),r.a.createElement(U.a,{className:"strong"},"Senha:"),r.a.createElement(z.a,{id:"password",type:"password",name:"password",placeholder:"Senha",value:o.password,required:!0,onChange:u})),r.a.createElement(j.a,{id:"cancelar",onClick:function(){e.goBack()}},"Cancelar"),r.a.createElement(j.a,{type:"submit"},"Alterar")))},V=function(e){var a=e.component,t=Object(l.a)(e,["component"]);return r.a.createElement(s.b,Object.assign({},t,{render:function(e){return Object(i.b)()?r.a.createElement(a,e):r.a.createElement(s.a,{to:{pathname:"/",state:{from:e.location}}})}}))},J=function(){return r.a.createElement(u.a,null,r.a.createElement(s.d,null,r.a.createElement(s.b,{component:m.a,path:"/",exact:!0}),r.a.createElement(V,{component:E,path:"/dashboard",exact:!0}),r.a.createElement(V,{component:B,path:"/user/list"}),r.a.createElement(V,{component:D,path:"/user/create"}),r.a.createElement(V,{component:R,path:"/user/edit/:id"})))};var F=function(){return r.a.createElement("div",null,r.a.createElement(J,null))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(F,null)),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.e9b230ff.chunk.js.map