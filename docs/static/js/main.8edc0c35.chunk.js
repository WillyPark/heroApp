(this["webpackJsonpheroes-app"]=this["webpackJsonpheroes-app"]||[]).push([[0],{29:function(e,a,r){},49:function(e,a,r){},50:function(e,a,r){"use strict";r.r(a);var t=r(21),c=r.n(t),s=r(10),n=r(1),i=Object(n.createContext)(),o=r(4),l="[auth] login",h="[auth] logout",j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case l:return Object(o.a)(Object(o.a)({},a.payload),{},{logged:!0});case h:return{logged:!1};default:return e}},d=r(5),u=r(2),b=r(0),m=function(e){var a=e.history,r=Object(n.useContext)(i).dispatch;return Object(b.jsxs)("div",{className:"container mt-5",children:[Object(b.jsx)("h1",{children:"Login"}),Object(b.jsx)("hr",{}),Object(b.jsx)("button",{className:"btn btn-primary",onClick:function(){var e=localStorage.getItem("lastPath")||"/";r({type:l,payload:{name:"Fernando"}}),a.replace(e)},children:"Ingresar"})]})},p=[{id:"dc-batman",superhero:"Batman",publisher:"DC Comics",alter_ego:"Bruce Wayne",first_appearance:"Detective Comics #27",characters:"Bruce Wayne"},{id:"dc-superman",superhero:"Superman",publisher:"DC Comics",alter_ego:"Kal-El",first_appearance:"Action Comics #1",characters:"Kal-El"},{id:"dc-flash",superhero:"Flash",publisher:"DC Comics",alter_ego:"Jay Garrick",first_appearance:"Flash Comics #1",characters:"Jay Garrick, Barry Allen, Wally West, Bart Allen"},{id:"dc-green",superhero:"Green Lantern",publisher:"DC Comics",alter_ego:"Alan Scott",first_appearance:"All-American Comics #16",characters:"Alan Scott, Hal Jordan, Guy Gardner, John Stewart, Kyle Raynor, Jade, Sinestro, Simon Baz"},{id:"dc-arrow",superhero:"Green Arrow",publisher:"DC Comics",alter_ego:"Oliver Queen",first_appearance:"More Fun Comics #73",characters:"Oliver Queen"},{id:"dc-wonder",superhero:"Wonder Woman",publisher:"DC Comics",alter_ego:"Princess Diana",first_appearance:"All Star Comics #8",characters:"Princess Diana"},{id:"dc-martian",superhero:"Martian Manhunter",publisher:"DC Comics",alter_ego:"J'onn J'onzz",first_appearance:"Detective Comics #225",characters:"Martian Manhunter"},{id:"dc-robin",superhero:"Robin/Nightwing",publisher:"DC Comics",alter_ego:"Dick Grayson",first_appearance:"Detective Comics #38",characters:"Dick Grayson"},{id:"dc-blue",superhero:"Blue Beetle",publisher:"DC Comics",alter_ego:"Dan Garret",first_appearance:"Mystery Men Comics #1",characters:"Dan Garret, Ted Kord, Jaime Reyes"},{id:"dc-black",superhero:"Black Canary",publisher:"DC Comics",alter_ego:"Dinah Drake",first_appearance:"Flash Comics #86",characters:"Dinah Drake, Dinah Lance"},{id:"marvel-spider",superhero:"Spider Man",publisher:"Marvel Comics",alter_ego:"Peter Parker",first_appearance:"Amazing Fantasy #15",characters:"Peter Parker"},{id:"marvel-captain",superhero:"Captain America",publisher:"Marvel Comics",alter_ego:"Steve Rogers",first_appearance:"Captain America Comics #1",characters:"Steve Rogers"},{id:"marvel-iron",superhero:"Iron Man",publisher:"Marvel Comics",alter_ego:"Tony Stark",first_appearance:"Tales of Suspense #39",characters:"Tony Stark"},{id:"marvel-thor",superhero:"Thor",publisher:"Marvel Comics",alter_ego:"Thor Odinson",first_appearance:"Journey into Myster #83",characters:"Thor Odinson"},{id:"marvel-hulk",superhero:"Hulk",publisher:"Marvel Comics",alter_ego:"Bruce Banner",first_appearance:"The Incredible Hulk #1",characters:"Bruce Banner"},{id:"marvel-wolverine",superhero:"Wolverine",publisher:"Marvel Comics",alter_ego:"James Howlett",first_appearance:"The Incredible Hulk #180",characters:"James Howlett"},{id:"marvel-daredevil",superhero:"Daredevil",publisher:"Marvel Comics",alter_ego:"Matthew Michael Murdock",first_appearance:"Daredevil #1",characters:"Matthew Michael Murdock"},{id:"marvel-hawkeye",superhero:"Hawkeye",publisher:"Marvel Comics",alter_ego:"Clinton Francis Barton",first_appearance:"Tales of Suspense #57",characters:"Clinton Francis Barton"},{id:"marvel-cyclops",superhero:"Cyclops",publisher:"Marvel Comics",alter_ego:"Scott Summers",first_appearance:"X-Men #1",characters:"Scott Summers"},{id:"marvel-silver",superhero:"Silver Surfer",publisher:"Marvel Comics",alter_ego:"Norrin Radd",first_appearance:"The Fantastic Four #48",characters:"Norrin Radd"}],O=(r(29),function(e){var a=e.id,r=e.superhero,t=e.publisher,c=e.alter_ego,s=e.first_appearance,n=e.characters,i=Object(u.g)();return console.log("desde el HeroCard: "+i.location.pathname),Object(b.jsxs)(d.b,{to:"./hero/".concat(a),className:"my-card",children:[Object(b.jsx)("img",{src:"./../../assets/heroes/".concat(a,".jpg"),className:"img img-responsive",alt:r}),Object(b.jsx)("div",{className:"profile-name",children:r}),Object(b.jsx)("div",{className:"profile-position",children:c}),Object(b.jsx)("div",{className:"profile-overview",children:Object(b.jsx)("div",{className:"row",children:Object(b.jsx)("div",{className:"col-ms-4",children:Object(b.jsxs)("div",{className:"card-body",children:[Object(b.jsx)("h3",{children:t}),Object(b.jsxs)("p",{children:["Primera aparici\xf3n: ",Object(b.jsx)("br",{}),s]}),c!==n&&Object(b.jsx)("p",{className:"card-text",children:n})]})})})})]})}),v=function(e){var a=e.publisher,r=Object(n.useMemo)((function(){return function(e){if(!["DC Comics","Marvel Comics"].includes(e))throw new Error('Publiser "'.concat(e,'" no es correcto'));return p.filter((function(a){return a.publisher===e}))}(a)}),[a]);return Object(b.jsx)("div",{className:"row row-cols-1 row-cols-md-3 g-4 mt-3 animate__animated animate__fadeIn",children:r.map((function(e){return Object(b.jsx)(O,Object(o.a)({},e),e.id)}))})},x=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"DC Screen"}),Object(b.jsx)("hr",{}),Object(b.jsx)(v,{publisher:"DC Comics"})]})},f=function(e){var a=e.history,r=Object(u.i)().heroeId,t=Object(n.useMemo)((function(){return e=r,p.find((function(a){return a.id===e}));var e}),[r]);if(!t)return Object(b.jsx)(u.a,{to:"/"});var c=t.superhero,s=t.publisher,i=t.alter_ego,o=t.first_appearance,l=t.characters;return console.log(a.location.pathname),Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"col-4",children:Object(b.jsx)("img",{src:"./assets/heroes/".concat(r,".jpg"),className:"img-thumbnail animate__animated animate__fadeInLeft",alt:c})}),Object(b.jsxs)("div",{className:"col-8 animate__animated animate__fadeInRight",children:[Object(b.jsx)("h3",{children:c}),Object(b.jsxs)("ul",{className:"list-group list-group-flush",children:[Object(b.jsxs)("li",{className:"list-group-item",children:[Object(b.jsx)("b",{children:"Alter ego:"})," ",i]}),Object(b.jsxs)("li",{className:"list-group-item",children:[Object(b.jsx)("b",{children:"Publisher:"})," ",s]}),Object(b.jsxs)("li",{className:"list-group-item",children:[Object(b.jsx)("b",{children:"First appearance:"})," ",o]})]}),Object(b.jsx)("h5",{children:"Characters"}),Object(b.jsx)("p",{children:l}),Object(b.jsx)("button",{className:"btn btn-outline-info",onClick:function(){a.length<=2?a.push("/".concat(r.split("-")[0])):a.goBack()},children:"Return"})]})]})},g=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"MarvelScreen"}),Object(b.jsx)("hr",{}),Object(b.jsx)(v,{publisher:"Marvel Comics"})]})},C=r(23),_=r.n(C),N=r(12),y=function(e){var a=e.history,r=Object(u.h)(),t=_.a.parse(r.search).q,c=void 0===t?"":t,i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=Object(n.useState)(e),r=Object(s.a)(a,2),t=r[0],c=r[1];return[t,function(e){var a=e.target;c(Object(o.a)(Object(o.a)({},t),{},Object(N.a)({},a.name,a.value)))},function(){c(e)}]}({searchText:c}),l=Object(s.a)(i,2),h=l[0],j=l[1],d=h.searchText,m=Object(n.useMemo)((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return""===e?[]:(e=e.toLocaleLowerCase(),p.filter((function(a){return a.superhero.toLocaleLowerCase().includes(e)})))}(c)}),[c]);return Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"SearchScreen"}),Object(b.jsx)("hr",{}),Object(b.jsxs)("div",{className:"row",children:[Object(b.jsxs)("div",{className:"col-5",children:[Object(b.jsx)("h4",{children:"Search Form"}),Object(b.jsx)("hr",{}),Object(b.jsxs)("form",{className:"d-grid gap-2",onSubmit:function(e){e.preventDefault(),a.push("?q=".concat(d))},children:[Object(b.jsx)("input",{type:"text",placeholder:"Find your hero",className:"form-control mt-2",name:"searchText",autoComplete:"off",value:d,onChange:j}),Object(b.jsx)("button",{type:"submit",className:"btn btn-outline-primary mt-2",children:"Search..."})]})]}),Object(b.jsxs)("div",{className:"col-7",children:[Object(b.jsx)("h4",{children:"Results"}),Object(b.jsx)("hr",{}),""===c&&Object(b.jsx)("div",{className:"alert alert-info",children:"Search a hero"}),""!==c&&0===m.length&&Object(b.jsxs)("div",{className:"alert alert-danger",children:["There is no a hero with ",c]}),Object(b.jsx)("div",{className:"d-flex justify-content-between flex-wrap animate__animated animate__fadeIn",children:m.map((function(e){return Object(b.jsx)(O,Object(o.a)({},e),e.id)}))})]})]})]})},S=function(){var e=Object(n.useContext)(i),a=e.user,r=e.dispatch,t=Object(u.g)();return Object(b.jsxs)("nav",{className:"navbar navbar-expand-sm navbar-dark bg-dark ps-4 pe-4",children:[Object(b.jsx)(d.b,{className:"navbar-brand",to:"/",children:"Asociaciones"}),Object(b.jsx)("div",{className:"navbar-collapse",children:Object(b.jsxs)("div",{className:"navbar-nav",children:[Object(b.jsx)(d.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/marvel",children:"Marvel"}),Object(b.jsx)(d.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/dc",children:"DC"}),Object(b.jsx)(d.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/search",children:"Search"})]})}),Object(b.jsx)("div",{className:"navbar-collapse collapse w-100 order-3 dual-collapse2 justify-content-end",children:Object(b.jsxs)("ul",{className:"navbar-nav ml-auto ",children:[Object(b.jsx)("span",{className:"nav-item nav-link text-info",children:a.name}),Object(b.jsx)("button",{className:"btn nav-item nav-link",onClick:function(){t.replace("/login"),r({type:h})},children:"Logout"})]})})]})},k=(r(49),function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(S,{}),Object(b.jsx)("div",{className:"contenedor mt-3",children:Object(b.jsxs)(u.d,{children:[Object(b.jsx)(u.b,{exact:!0,path:"/marvel",component:g}),Object(b.jsx)(u.b,{exact:!0,path:"/hero/:heroeId",component:f}),Object(b.jsx)(u.b,{exact:!0,path:"/dc",component:x}),Object(b.jsx)(u.b,{exact:!0,path:"/search",component:y}),Object(b.jsx)(u.a,{to:"/marvel"})]})}),Object(b.jsx)("footer",{className:"bg-dark p-3 text-center text-white mt-3",children:Object(b.jsx)("p",{className:"m-0",children:"William Park Todos los Derechos Reservados 2021 \xa9"})})]})}),M=r(13),D=["isAuthenticated","component"],w=function(e){var a=e.isAuthenticated,r=e.component,t=Object(M.a)(e,D);return localStorage.setItem("lastPath",t.location.pathname),Object(b.jsx)(u.b,Object(o.a)(Object(o.a)({},t),{},{component:function(e){return a?Object(b.jsx)(r,Object(o.a)({},e)):Object(b.jsx)(u.a,{to:"/login"})}}))},A=["isAuthenticated","component"],B=function(e){var a=e.isAuthenticated,r=e.component,t=Object(M.a)(e,A);return Object(b.jsx)(u.b,Object(o.a)(Object(o.a)({},t),{},{component:function(e){return a?Object(b.jsx)(u.a,{to:"/"}):Object(b.jsx)(r,Object(o.a)({},e))}}))},T=function(){var e=Object(n.useContext)(i).user;return Object(b.jsx)(d.a,{children:Object(b.jsx)("div",{children:Object(b.jsxs)(u.d,{children:[Object(b.jsx)(B,{exact:!0,path:"/login",component:m,isAuthenticated:e.logged}),Object(b.jsx)(w,{path:"/",component:k,isAuthenticated:e.logged})]})})})},I=function(){return JSON.parse(localStorage.getItem("user"))||{logged:!1}},J=function(){var e=Object(n.useReducer)(j,{},I),a=Object(s.a)(e,2),r=a[0],t=a[1];return Object(n.useEffect)((function(){localStorage.setItem("user",JSON.stringify(r))}),[r]),Object(b.jsx)(i.Provider,{value:{user:r,dispatch:t},children:Object(b.jsx)(T,{})})};c.a.render(Object(b.jsx)(J,{}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.8edc0c35.chunk.js.map