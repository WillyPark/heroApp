(this["webpackJsonpheroes-app"]=this["webpackJsonpheroes-app"]||[]).push([[0],Array(29).concat([function(e,a,r){var t={"./dc-arrow.jpg":30,"./dc-batman.jpg":31,"./dc-black.jpg":32,"./dc-blue.jpg":33,"./dc-flash.jpg":34,"./dc-green.jpg":35,"./dc-martian.jpg":36,"./dc-robin.jpg":37,"./dc-superman.jpg":38,"./dc-wonder.jpg":39,"./marvel-captain.jpg":40,"./marvel-cyclops.jpg":41,"./marvel-daredevil.jpg":42,"./marvel-hawkeye.jpg":43,"./marvel-hulk.jpg":44,"./marvel-iron.jpg":45,"./marvel-silver.jpg":46,"./marvel-spider.jpg":47,"./marvel-thor.jpg":48,"./marvel-wolverine.jpg":49};function c(e){var a=s(e);return r(a)}function s(e){if(!r.o(t,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t[e]}c.keys=function(){return Object.keys(t)},c.resolve=s,e.exports=c,c.id=29},function(e,a,r){"use strict";r.r(a),a.default=r.p+"static/media/dc-arrow.15b27bc2.jpg"},function(e,a,r){"use strict";r.r(a),a.default=r.p+"static/media/dc-batman.ab9eadc3.jpg"},function(e,a,r){"use strict";r.r(a),a.default=r.p+"static/media/dc-black.3747c663.jpg"},function(e,a,r){"use strict";r.r(a),a.default=r.p+"static/media/dc-blue.cc8169a3.jpg"},function(e,a,r){"use strict";r.r(a),a.default=r.p+"static/media/dc-flash.b3922f25.jpg"},function(e,a,r){"use strict";r.r(a),a.default=r.p+"static/media/dc-green.01c54ee1.jpg"},function(e,a,r){"use strict";r.r(a),a.default=r.p+"static/media/dc-martian.78565f7d.jpg"},function(e,a,r){"use strict";r.r(a),a.default=r.p+"static/media/dc-robin.ea4afe99.jpg"},function(e,a,r){"use strict";r.r(a),a.default=r.p+"static/media/dc-superman.e9391474.jpg"},function(e,a,r){"use strict";r.r(a),a.default=r.p+"static/media/dc-wonder.970ba2d6.jpg"},function(e,a,r){"use strict";r.r(a),a.default=r.p+"static/media/marvel-captain.d2c7774d.jpg"},function(e,a,r){"use strict";r.r(a),a.default=r.p+"static/media/marvel-cyclops.f1442408.jpg"},function(e,a,r){"use strict";r.r(a),a.default=r.p+"static/media/marvel-daredevil.2f4f1a57.jpg"},function(e,a,r){"use strict";r.r(a),a.default=r.p+"static/media/marvel-hawkeye.1f78e874.jpg"},function(e,a,r){"use strict";r.r(a),a.default=r.p+"static/media/marvel-hulk.d1af5fe5.jpg"},function(e,a,r){"use strict";r.r(a),a.default=r.p+"static/media/marvel-iron.b394df11.jpg"},function(e,a,r){"use strict";r.r(a),a.default=r.p+"static/media/marvel-silver.1d43a08b.jpg"},function(e,a,r){"use strict";r.r(a),a.default=r.p+"static/media/marvel-spider.054016b4.jpg"},function(e,a,r){"use strict";r.r(a),a.default=r.p+"static/media/marvel-thor.c63e651c.jpg"},function(e,a,r){"use strict";r.r(a),a.default=r.p+"static/media/marvel-wolverine.ee676488.jpg"},function(e,a,r){},,,,,,,,,,,,,,,,,,,,function(e,a,r){},function(e,a,r){"use strict";r.r(a);var t=r(21),c=r.n(t),s=r(10),n=r(1),i=Object(n.createContext)(),l=r(4),o="[auth] login",d="[auth] logout",u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case o:return Object(l.a)(Object(l.a)({},a.payload),{},{logged:!0});case d:return{logged:!1};default:return e}},j=r(5),p=r(2),h=r(0),m=function(e){var a=e.history,r=Object(n.useContext)(i).dispatch;return Object(h.jsxs)("div",{className:"container mt-5",children:[Object(h.jsx)("h1",{children:"Login"}),Object(h.jsx)("hr",{}),Object(h.jsx)("button",{className:"btn btn-primary",onClick:function(){var e=localStorage.getItem("lastPath")||"/";r({type:o,payload:{name:"Fernando"}}),a.replace(e)},children:"Ingresar"})]})},b=[{id:"dc-batman",superhero:"Batman",publisher:"DC Comics",alter_ego:"Bruce Wayne",first_appearance:"Detective Comics #27",characters:"Bruce Wayne"},{id:"dc-superman",superhero:"Superman",publisher:"DC Comics",alter_ego:"Kal-El",first_appearance:"Action Comics #1",characters:"Kal-El"},{id:"dc-flash",superhero:"Flash",publisher:"DC Comics",alter_ego:"Jay Garrick",first_appearance:"Flash Comics #1",characters:"Jay Garrick, Barry Allen, Wally West, Bart Allen"},{id:"dc-green",superhero:"Green Lantern",publisher:"DC Comics",alter_ego:"Alan Scott",first_appearance:"All-American Comics #16",characters:"Alan Scott, Hal Jordan, Guy Gardner, John Stewart, Kyle Raynor, Jade, Sinestro, Simon Baz"},{id:"dc-arrow",superhero:"Green Arrow",publisher:"DC Comics",alter_ego:"Oliver Queen",first_appearance:"More Fun Comics #73",characters:"Oliver Queen"},{id:"dc-wonder",superhero:"Wonder Woman",publisher:"DC Comics",alter_ego:"Princess Diana",first_appearance:"All Star Comics #8",characters:"Princess Diana"},{id:"dc-martian",superhero:"Martian Manhunter",publisher:"DC Comics",alter_ego:"J'onn J'onzz",first_appearance:"Detective Comics #225",characters:"Martian Manhunter"},{id:"dc-robin",superhero:"Robin/Nightwing",publisher:"DC Comics",alter_ego:"Dick Grayson",first_appearance:"Detective Comics #38",characters:"Dick Grayson"},{id:"dc-blue",superhero:"Blue Beetle",publisher:"DC Comics",alter_ego:"Dan Garret",first_appearance:"Mystery Men Comics #1",characters:"Dan Garret, Ted Kord, Jaime Reyes"},{id:"dc-black",superhero:"Black Canary",publisher:"DC Comics",alter_ego:"Dinah Drake",first_appearance:"Flash Comics #86",characters:"Dinah Drake, Dinah Lance"},{id:"marvel-spider",superhero:"Spider Man",publisher:"Marvel Comics",alter_ego:"Peter Parker",first_appearance:"Amazing Fantasy #15",characters:"Peter Parker"},{id:"marvel-captain",superhero:"Captain America",publisher:"Marvel Comics",alter_ego:"Steve Rogers",first_appearance:"Captain America Comics #1",characters:"Steve Rogers"},{id:"marvel-iron",superhero:"Iron Man",publisher:"Marvel Comics",alter_ego:"Tony Stark",first_appearance:"Tales of Suspense #39",characters:"Tony Stark"},{id:"marvel-thor",superhero:"Thor",publisher:"Marvel Comics",alter_ego:"Thor Odinson",first_appearance:"Journey into Myster #83",characters:"Thor Odinson"},{id:"marvel-hulk",superhero:"Hulk",publisher:"Marvel Comics",alter_ego:"Bruce Banner",first_appearance:"The Incredible Hulk #1",characters:"Bruce Banner"},{id:"marvel-wolverine",superhero:"Wolverine",publisher:"Marvel Comics",alter_ego:"James Howlett",first_appearance:"The Incredible Hulk #180",characters:"James Howlett"},{id:"marvel-daredevil",superhero:"Daredevil",publisher:"Marvel Comics",alter_ego:"Matthew Michael Murdock",first_appearance:"Daredevil #1",characters:"Matthew Michael Murdock"},{id:"marvel-hawkeye",superhero:"Hawkeye",publisher:"Marvel Comics",alter_ego:"Clinton Francis Barton",first_appearance:"Tales of Suspense #57",characters:"Clinton Francis Barton"},{id:"marvel-cyclops",superhero:"Cyclops",publisher:"Marvel Comics",alter_ego:"Scott Summers",first_appearance:"X-Men #1",characters:"Scott Summers"},{id:"marvel-silver",superhero:"Silver Surfer",publisher:"Marvel Comics",alter_ego:"Norrin Radd",first_appearance:"The Fantastic Four #48",characters:"Norrin Radd"}],f=r(29),v=(r(50),function(e){var a=e.id,r=e.superhero,t=e.publisher,c=e.alter_ego,s=e.first_appearance,n=e.characters;return Object(h.jsxs)(j.b,{to:"./hero/".concat(a),className:"my-card",children:[Object(h.jsx)("img",{src:f("./".concat(a,".jpg")).default,className:"img img-responsive",alt:r}),Object(h.jsx)("div",{className:"profile-name",children:r}),Object(h.jsx)("div",{className:"profile-position",children:c}),Object(h.jsx)("div",{className:"profile-overview",children:Object(h.jsx)("div",{className:"row",children:Object(h.jsx)("div",{className:"col-ms-4",children:Object(h.jsxs)("div",{className:"card-body",children:[Object(h.jsx)("h3",{children:t}),Object(h.jsxs)("p",{children:["Primera aparici\xf3n: ",Object(h.jsx)("br",{}),s]}),c!==n&&Object(h.jsx)("p",{className:"card-text",children:n})]})})})})]})}),O=function(e){var a=e.publisher,r=Object(n.useMemo)((function(){return function(e){if(!["DC Comics","Marvel Comics"].includes(e))throw new Error('Publiser "'.concat(e,'" no es correcto'));return b.filter((function(a){return a.publisher===e}))}(a)}),[a]);return Object(h.jsx)("div",{className:"row row-cols-1 row-cols-md-3 g-4 mt-3 animate__animated animate__fadeIn",children:r.map((function(e){return Object(h.jsx)(v,Object(l.a)({},e),e.id)}))})},g=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"DC Screen"}),Object(h.jsx)("hr",{}),Object(h.jsx)(O,{publisher:"DC Comics"})]})},x=function(e){var a=e.history,r=Object(p.i)().heroeId,t=Object(n.useMemo)((function(){return e=r,b.find((function(a){return a.id===e}));var e}),[r]);if(!t)return Object(h.jsx)(p.a,{to:"/"});var c=t.superhero,s=t.publisher,i=t.alter_ego,l=t.first_appearance,o=t.characters;return Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("div",{className:"col-4",children:Object(h.jsx)("img",{src:f("./".concat(r,".jpg")).default,className:"img-thumbnail animate__animated animate__fadeInLeft",alt:c})}),Object(h.jsxs)("div",{className:"col-8 animate__animated animate__fadeInRight",children:[Object(h.jsx)("h3",{children:c}),Object(h.jsxs)("ul",{className:"list-group list-group-flush",children:[Object(h.jsxs)("li",{className:"list-group-item",children:[Object(h.jsx)("b",{children:"Alter ego:"})," ",i]}),Object(h.jsxs)("li",{className:"list-group-item",children:[Object(h.jsx)("b",{children:"Publisher:"})," ",s]}),Object(h.jsxs)("li",{className:"list-group-item",children:[Object(h.jsx)("b",{children:"First appearance:"})," ",l]})]}),Object(h.jsx)("h5",{children:"Characters"}),Object(h.jsx)("p",{children:o}),Object(h.jsx)("button",{className:"btn btn-outline-info",onClick:function(){a.length<=2?a.push("/".concat(r.split("-")[0])):a.goBack()},children:"Return"})]})]})},C=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"MarvelScreen"}),Object(h.jsx)("hr",{}),Object(h.jsx)(O,{publisher:"Marvel Comics"})]})},_=r(23),N=r.n(_),y=r(12),k=function(e){var a=e.history,r=Object(p.h)(),t=N.a.parse(r.search).q,c=void 0===t?"":t,i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=Object(n.useState)(e),r=Object(s.a)(a,2),t=r[0],c=r[1];return[t,function(e){var a=e.target;c(Object(l.a)(Object(l.a)({},t),{},Object(y.a)({},a.name,a.value)))},function(){c(e)}]}({searchText:c}),o=Object(s.a)(i,2),d=o[0],u=o[1],j=d.searchText,m=Object(n.useMemo)((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return""===e?[]:(e=e.toLocaleLowerCase(),b.filter((function(a){return a.superhero.toLocaleLowerCase().includes(e)})))}(c)}),[c]);return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"SearchScreen"}),Object(h.jsx)("hr",{}),Object(h.jsxs)("div",{className:"row",children:[Object(h.jsxs)("div",{className:"col-5",children:[Object(h.jsx)("h4",{children:"Search Form"}),Object(h.jsx)("hr",{}),Object(h.jsxs)("form",{className:"d-grid gap-2",onSubmit:function(e){e.preventDefault(),a.push("?q=".concat(j))},children:[Object(h.jsx)("input",{type:"text",placeholder:"Find your hero",className:"form-control mt-2",name:"searchText",autoComplete:"off",value:j,onChange:u}),Object(h.jsx)("button",{type:"submit",className:"btn btn-outline-primary mt-2",children:"Search..."})]})]}),Object(h.jsxs)("div",{className:"col-7",children:[Object(h.jsx)("h4",{children:"Results"}),Object(h.jsx)("hr",{}),""===c&&Object(h.jsx)("div",{className:"alert alert-info",children:"Search a hero"}),""!==c&&0===m.length&&Object(h.jsxs)("div",{className:"alert alert-danger",children:["There is no a hero with ",c]}),Object(h.jsx)("div",{className:"d-flex justify-content-between flex-wrap animate__animated animate__fadeIn",children:m.map((function(e){return Object(h.jsx)(v,Object(l.a)({},e),e.id)}))})]})]})]})},w=function(){var e=Object(n.useContext)(i),a=e.user,r=e.dispatch,t=Object(p.g)();return Object(h.jsxs)("nav",{className:"navbar navbar-expand-sm navbar-dark bg-dark ps-4 pe-4",children:[Object(h.jsx)(j.b,{className:"navbar-brand",to:"/",children:"Asociaciones"}),Object(h.jsx)("div",{className:"navbar-collapse",children:Object(h.jsxs)("div",{className:"navbar-nav",children:[Object(h.jsx)(j.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/marvel",children:"Marvel"}),Object(h.jsx)(j.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/dc",children:"DC"}),Object(h.jsx)(j.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/search",children:"Search"})]})}),Object(h.jsx)("div",{className:"navbar-collapse collapse w-100 order-3 dual-collapse2 justify-content-end",children:Object(h.jsxs)("ul",{className:"navbar-nav ml-auto ",children:[Object(h.jsx)("span",{className:"nav-item nav-link text-info",children:a.name}),Object(h.jsx)("button",{className:"btn nav-item nav-link",onClick:function(){t.replace("/login"),r({type:d})},children:"Logout"})]})})]})},S=(r(70),function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(w,{}),Object(h.jsx)("div",{className:"contenedor mt-3",children:Object(h.jsxs)(p.d,{children:[Object(h.jsx)(p.b,{exact:!0,path:"/marvel",component:C}),Object(h.jsx)(p.b,{exact:!0,path:"/hero/:heroeId",component:x}),Object(h.jsx)(p.b,{exact:!0,path:"/dc",component:g}),Object(h.jsx)(p.b,{exact:!0,path:"/search",component:k}),Object(h.jsx)(p.a,{to:"/marvel"})]})}),Object(h.jsx)("footer",{className:"bg-dark p-3 text-center text-white mt-3",children:Object(h.jsx)("p",{className:"m-0",children:"William Park Todos los Derechos Reservados 2021 \xa9"})})]})}),M=r(13),D=["isAuthenticated","component"],A=function(e){var a=e.isAuthenticated,r=e.component,t=Object(M.a)(e,D);return localStorage.setItem("lastPath",t.location.pathname),Object(h.jsx)(p.b,Object(l.a)(Object(l.a)({},t),{},{component:function(e){return a?Object(h.jsx)(r,Object(l.a)({},e)):Object(h.jsx)(p.a,{to:"/login"})}}))},B=["isAuthenticated","component"],T=function(e){var a=e.isAuthenticated,r=e.component,t=Object(M.a)(e,B);return Object(h.jsx)(p.b,Object(l.a)(Object(l.a)({},t),{},{component:function(e){return a?Object(h.jsx)(p.a,{to:"/"}):Object(h.jsx)(r,Object(l.a)({},e))}}))},F=function(){var e=Object(n.useContext)(i).user;return Object(h.jsx)(j.a,{children:Object(h.jsx)("div",{children:Object(h.jsxs)(p.d,{children:[Object(h.jsx)(T,{exact:!0,path:"/login",component:m,isAuthenticated:e.logged}),Object(h.jsx)(A,{path:"/",component:S,isAuthenticated:e.logged})]})})})},I=function(){return JSON.parse(localStorage.getItem("user"))||{logged:!1}},J=function(){var e=Object(n.useReducer)(u,{},I),a=Object(s.a)(e,2),r=a[0],t=a[1];return Object(n.useEffect)((function(){localStorage.setItem("user",JSON.stringify(r))}),[r]),Object(h.jsx)(i.Provider,{value:{user:r,dispatch:t},children:Object(h.jsx)(F,{})})};c.a.render(Object(h.jsx)(J,{}),document.getElementById("root"))}]),[[71,1,2]]]);
//# sourceMappingURL=main.c770cf41.chunk.js.map