(this.webpackJsonpsriwedspreethi=this.webpackJsonpsriwedspreethi||[]).push([[0],{23:function(e,a,t){e.exports=t(45)},28:function(e,a,t){},29:function(e,a,t){e.exports=t.p+"static/media/logo.ee7cd8ed.svg"},30:function(e,a,t){},33:function(e,a,t){e.exports=t.p+"static/media/Preethi.b9a8b6c1.png"},34:function(e,a,t){e.exports=t.p+"static/media/Sri.4b2c5ac0.png"},42:function(e,a,t){},43:function(e,a,t){},44:function(e,a,t){},45:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),s=t(10),r=t.n(s),c=(t(28),t(12)),o=t(18),i=t(19),m=t(22),u=t(21),h=(t(29),t(30),t(47)),p=t(48),d=t(49),E=t(50),g=t(51),f=t(57),b=t(52),N=t(53),y=t(54),w=t(55),v=t(56),k=t(20),x=(t(33),t(34),function(e){return e<10?"0"+e:e}),S=function(e){var a=e.days,t=e.hours,n=e.minutes,s=e.seconds;return e.completed?l.a.createElement("div",null," Watch Live :) "):l.a.createElement("div",{className:"countdown"},l.a.createElement("div",{className:"block"},l.a.createElement("span",{className:"number"},a),l.a.createElement("span",{className:"text"}," Days ")),l.a.createElement("div",{className:"block"},l.a.createElement("span",{className:"number"},":")),l.a.createElement("div",{className:"block"},l.a.createElement("span",{className:"number"},x(t)),l.a.createElement("span",{className:"text"}," Hours ")),l.a.createElement("div",{className:"block"},l.a.createElement("span",{className:"number"},":")),l.a.createElement("div",{className:"block"},l.a.createElement("span",{className:"number"},x(n)),l.a.createElement("span",{className:"text"}," Mins ")),l.a.createElement("div",{className:"block"},l.a.createElement("span",{className:"number"},":")),l.a.createElement("div",{className:"block"},l.a.createElement("span",{className:"number"},x(s)),l.a.createElement("span",{className:"text"}," Secs ")))},M=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).handleChange=function(e){n.setState(Object(c.a)({},e.target.name,e.target.value))},n.state={wishModal:!1,wish:"",to:"",name:"",alert:""},n}return Object(i.a)(t,[{key:"toggleModal",value:function(e){this.setState({wishModal:!this.state.wishModal,to:e})}},{key:"onSubmit",value:function(){var e=this;this.setState({wishModal:!1}),fetch("https://api.grambox.app/wish",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({wish:this.state.wish,to:this.state.to,name:this.state.name})}).then((function(e){return e.json()})).then((function(a){e.setState({wish:"",to:"",name:"",alert:"Thank you so much for wishing us :)"})}))}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"App"},l.a.createElement("div",null,l.a.createElement("div",{className:"position-relative"},l.a.createElement("section",{className:"section section-hero section-shaped"},l.a.createElement("div",{className:"shape handHoldHero"}),l.a.createElement(h.a,{className:"shape-container d-flex align-items-center py-md"},l.a.createElement("div",{className:"col px-0",style:{marginTop:-60}},l.a.createElement(p.a,{className:"align-items-center justify-content-center"},l.a.createElement(d.a,{className:"text-center",lg:"6"},l.a.createElement("div",null,l.a.createElement("h5",{class:"name"},"Sarjun"),l.a.createElement("h5",{class:"connector"},"weds"),l.a.createElement("h5",{class:"name"},"Jannathul Firthous")),l.a.createElement("div",{className:"btn-wrapper mt-0"},l.a.createElement(k.a,{date:new Date(16154406e5),renderer:S}))))))))),l.a.createElement(h.a,null,l.a.createElement("div",{className:"letter"},l.a.createElement("p",Object(c.a)({className:"biggerText"},"className","h3")," Dear All, "),l.a.createElement("br",null),l.a.createElement("p",{className:"para h5"},"We officially met as kids and fought for chocolates and cakes in some random family marriages.. when I saw her first time she was 4 year old with cute ponytail."),l.a.createElement("br",null),l.a.createElement("p",{className:"para h5"}," Then now we are meeting  again on March 11, its our day to makes us husband and wife in this wondrous world that would find happiness with your presence.."),l.a.createElement("br",null),l.a.createElement("p",{className:"para h5"}," ",l.a.createElement("strong",null,"Location:"),l.a.createElement("br",null)),l.a.createElement("p",{className:"para h5"}," ",l.a.createElement("strong",null,"Marriage Hall:")," ",l.a.createElement("a",{href:"https://bit.ly/3pNn5pE"},"https://bit.ly/3pNn5pE")),l.a.createElement("p",{className:"para h5"}," ",l.a.createElement("strong",null,"Stay hotel:"),"  ",l.a.createElement("a",{href:"https://bit.ly/3pOJenr"},"https://bit.ly/3pOJenr "),"(Kindly confirm with 9738540354)"),l.a.createElement(p.a,null,l.a.createElement(E.a,{href:"javascript:;",className:"wishButton",style:{margin:"10px auto"},onClick:function(){return e.toggleModal("both")},color:"info"},l.a.createElement("img",{className:"photoIcon"})," \xa0 Wish both of us together \xa0 ",l.a.createElement("img",{className:"photoIcon",style:{transform:"rotate(10deg)"}}))),l.a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"}},l.a.createElement(E.a,{href:"javascript:;",className:"wishButton",outline:!0,onClick:function(){return e.toggleModal("sri")}},l.a.createElement("img",{className:"photoIcon",style:{transform:"scaleX(-1) rotate(25deg)"}})," \xa0 Wish Sarjun"),l.a.createElement(E.a,{href:"javascript:;",className:"wishButton",outline:!0,onClick:function(){return e.toggleModal("preethi")}},l.a.createElement("img",{className:"photoIcon"})," \xa0 Wish Jannathul Firthous")),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("p",{className:"h5"}," Your presence is big present for us. We really appreciate if you can donate to Proud Indian NGO who is helping underprivileged people. "),l.a.createElement("br",null),l.a.createElement(p.a,null,l.a.createElement("div",{style:{margin:"0 auto"}})),l.a.createElement(p.a,null,l.a.createElement("div",{style:{margin:"0 auto"}})),l.a.createElement(p.a,null,l.a.createElement("div",{style:{margin:"0 auto"}},l.a.createElement("a",{href:"https://bit.ly/3deKtpz",className:"btn btn-primary donate",target:"_blank"}," Donate to Proud Indian NGO "))),l.a.createElement("br",null),l.a.createElement("p",{className:"para"}," "),""!==this.state.alert&&l.a.createElement("div",{style:{position:"fixed",bottom:10}},l.a.createElement(p.a,{style:{flex:1}},l.a.createElement(g.a,{color:"success"},this.state.alert))))),l.a.createElement(f.a,{className:"modal-dialog-centered",isOpen:this.state.wishModal,toggle:function(){return e.toggleModal("wishModal")}},l.a.createElement(b.a,{className:"form"},l.a.createElement(N.a,{style:{padding:40}},l.a.createElement(p.a,null,l.a.createElement("p",{className:"h6"}," Thank you so much for taking time to wish us. It means a lot to us. You can also feel free to give your advices, wishes or anything which you want to tell us in private. "),l.a.createElement(y.a,{for:"name"},"Name "),l.a.createElement(w.a,{type:"text",name:"name",id:"name",onChange:function(a){return e.handleChange(a)},style:{marginBottom:10}}),l.a.createElement(y.a,{for:"wish"},"Your message "),l.a.createElement(w.a,{type:"textarea",name:"wish",id:"wish",style:{height:200,marginBottom:10},onChange:function(a){return e.handleChange(a)}}),"sri"===this.state.to&&l.a.createElement("p",{className:"h6"}," PS : Your wish can only be seen by Sriraman. No one else can see it including Preethi. "),"preethi"===this.state.to&&l.a.createElement("p",{className:"h6"}," PS : Your wish can only be seen by Preethi. No one else can see it including Sriraman. "))),l.a.createElement(v.a,null,l.a.createElement(E.a,{color:"secondary","data-dismiss":"modal",type:"button",onClick:function(){return e.toggleModal("exampleModal")}},"Close"),l.a.createElement(E.a,{color:"primary",type:"button",onClick:function(){return e.onSubmit()}},"Submit")))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(42),t(43),t(44);r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.051a5529.chunk.js.map