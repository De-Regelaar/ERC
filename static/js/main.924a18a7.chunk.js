(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{66:function(e,a,t){e.exports=t(76)},71:function(e,a,t){},75:function(e,a,t){},76:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(8),o=t.n(l),i=(t(71),t(131)),s=t(132),c=t(128),m=t(49),d=t(33),h=t(19),u=t(43),g=t(34),v=t(15),E=t(44),b=t(77),k=t(126),p=t(127),f=t(129),z=t(134),C=t(130),y=t(84),j=t(136),B=t(81),O=t(80),w=t(83),x=t(119),I=t(125),S=t(124),N=t(122),V=t(123),G=function(e){function a(){return Object(d.a)(this,a),Object(u.a)(this,Object(g.a)(a).apply(this,arguments))}return Object(E.a)(a,e),Object(h.a)(a,[{key:"render",value:function(){return r.a.createElement(x.a,{size:"small"},r.a.createElement(N.a,null,r.a.createElement(V.a,null,r.a.createElement(S.a,null),r.a.createElement(S.a,{colspan:1},"Uitkomst"),r.a.createElement(S.a,{colspan:1},"Grens"))),r.a.createElement(I.a,null,this.props.rows.map(function(e){return r.a.createElement(V.a,{key:e.method},r.a.createElement(S.a,null,e.name),r.a.createElement(S.a,null,e.uitkomst),r.a.createElement(S.a,null,e.grens))})))}}]),a}(r.a.Component),T=function(e){function a(e){var t;return Object(d.a)(this,a),(t=Object(u.a)(this,Object(g.a)(a).call(this,e))).state={bezoekers:100,gezelschap:10,binnen:!1,doorstroom:!1,terras:!1},t.handleBezoekersChange=t.handleBezoekersChange.bind(Object(v.a)(t)),t.handleGezelschapChange=t.handleGezelschapChange.bind(Object(v.a)(t)),t.handleVeiligheidsregioChange=t.handleVeiligheidsregioChange.bind(Object(v.a)(t)),t.handleBinnenChange=t.handleBinnenChange.bind(Object(v.a)(t)),t.handleDoorstroomChange=t.handleDoorstroomChange.bind(Object(v.a)(t)),t.handleTerrasChange=t.handleTerrasChange.bind(Object(v.a)(t)),t}return Object(E.a)(a,e),Object(h.a)(a,[{key:"handleBezoekersChange",value:function(e){isNaN(parseInt(e.target.value))||this.setState(Object(m.a)({},e.target.name,parseInt(e.target.value)))}},{key:"handleGezelschapChange",value:function(e){isNaN(parseInt(e.target.value))||this.setState({gezelschap:parseInt(e.target.value)})}},{key:"handleVeiligheidsregioChange",value:function(e){this.setState({veiligheidsregio:e.target.value})}},{key:"handleBinnenChange",value:function(e){this.setState({binnen:e.target.checked})}},{key:"handleDoorstroomChange",value:function(e){this.setState({doorstroom:e.target.checked})}},{key:"handleTerrasChange",value:function(e){this.setState({terras:e.target.checked})}},{key:"render",value:function(){var e={name:"Verboden?",uitkomst:this.state.gezelschap>=50&&this.state.veiligheidsregio>=70?r.a.createElement(b.a,{color:"Secondary"},"ja"):"nee",grens:"In categorie 2 regio's kunnen geen evenementen plaatsvinden met grote gezelschappen. Ook niet na een melding."},a={name:"Melding doen",uitkomst:this.state.bezoekers>=50&&this.state.veiligheidsregio>=70?r.a.createElement(b.a,{color:"Secondary"},"ja"):"nee",grens:"50 of meer bezoekers in regio's in categorie 2"},t={name:"Bezoeker placeren",uitkomst:this.state.bezoekers>=250&&this.state.binnen<1&&this.state.doorstroom<1||this.state.binnen>=1&&this.state.doorstroom<1||this.state.terras>=1?r.a.createElement(b.a,{color:"Secondary"},"ja"):"nee",grens:"Binnen moet altijd worden geplaceerd. Buiten is dat verplict vanaf 250 bezoekers. Bij doorstroom evenement nooit."},n={name:"Gezondheidscheck",uitkomst:this.state.bezoekers>=250&&this.state.binnen<1&&this.state.doorstroom<1||this.state.bezoekers>=100&&this.state.binnen>=1&&this.state.doorstroom<1||this.state.terras>=1?r.a.createElement(b.a,{color:"Secondary"},"ja"):"nee",grens:"Binnen vanaf 100 bezoekers, buiten bij vanaf 250. Bij doorstroom evenement nooit."};return r.a.createElement(r.a.Fragment,null,r.a.createElement(k.a,{container:!0,spacing:2,justify:"flex-start"},r.a.createElement(k.a,{item:!0,xs:12},r.a.createElement(b.a,{variant:"h4"},"Corona regels bij evenementen ")),r.a.createElement(k.a,{item:!0,xs:12},r.a.createElement(b.a,{color:"TextSecondary"},"Versie 25 September 2020 "),r.a.createElement(b.a,{variant:"body2",color:"secondary"}," Dit formulier is een hulpmiddel, er kunnen geen rechten ontleend worden aan de uitslag. "),r.a.createElement(b.a,{variant:"body2",color:"secondary"}," In verschillende regio's gelden aanvullende maatregelen die niet in dit formulier zijn opgenomen. "),r.a.createElement(b.a,{variant:"body1",color:"TextSecondary"}," Vul het formulier volledig in voor het beste resultaat ")),r.a.createElement(k.a,{item:!0,xs:12},r.a.createElement(p.a,{id:"bezoekers",name:"bezoekers",label:"Totaal aantal bezoekers",type:"number",fullWidth:!0,value:this.state.bezoekers,onChange:this.handleBezoekersChange})),r.a.createElement(k.a,{item:!0,xs:12},r.a.createElement(p.a,{id:"gezelschap",name:"gezelschap",label:"Hoeveel personen in het grootste aanwezige gezelschap?",type:"number",fullWidth:!0,value:this.state.gezelschap,onChange:this.handleGezelschapChange})),r.a.createElement(k.a,{item:!0,xs:12,align:"left"},r.a.createElement(O.a,{required:!0},r.a.createElement(y.a,{id:"VR"},"Veiligheidsregio"),r.a.createElement(w.a,{labelId:"veiligheidsregio",id:"veiligheidsregio",value:this.state.veiligheidsregio,onChange:this.handleVeiligheidsregioChange},r.a.createElement(j.a,{value:""},r.a.createElement("em",null,"None")),r.a.createElement(j.a,{value:100},"     Amsterdam-Amstelland  "),r.a.createElement(j.a,{value:2},"     Brabant-Noord  "),r.a.createElement(j.a,{value:3},"     Brabant-Zuidoost  "),r.a.createElement(j.a,{value:4},"     Drenthe  "),r.a.createElement(j.a,{value:5},"     Flevoland  "),r.a.createElement(j.a,{value:6},"     Friesland  "),r.a.createElement(j.a,{value:7},"     Gelderland-Midden  "),r.a.createElement(j.a,{value:8},"     Gelderland-Zuid  "),r.a.createElement(j.a,{value:9},"     Gooi en Vechtstreek  "),r.a.createElement(j.a,{value:10},"     Groningen  "),r.a.createElement(j.a,{value:1100},"     Haaglanden  "),r.a.createElement(j.a,{value:1200},"     Hollands Midden  "),r.a.createElement(j.a,{value:13},"     IJsselland  "),r.a.createElement(j.a,{value:1400},"     Kennemerland  "),r.a.createElement(j.a,{value:15},"     Limburg-Noord  "),r.a.createElement(j.a,{value:16},"     Midden- en West-Brabant  "),r.a.createElement(j.a,{value:17},"     Noord- en Oost-Gelderland  "),r.a.createElement(j.a,{value:18},"     Noord-Holland Noord  "),r.a.createElement(j.a,{value:1900},"     Rotterdam-Rijnmond  "),r.a.createElement(j.a,{value:20},"     Twente  "),r.a.createElement(j.a,{value:2100},"     Utrecht  "),r.a.createElement(j.a,{value:22},"     Zaanstreek-Waterland  "),r.a.createElement(j.a,{value:23},"     Zeeland  "),r.a.createElement(j.a,{value:24},"     Zuid-Holland Zuid  "),r.a.createElement(j.a,{value:25},"     Zuid-Limburg  ")),r.a.createElement(B.a,null,"In welke Veiligheidsregio vind het plaats?"))),r.a.createElement(k.a,{item:!0,xs:12},r.a.createElement(b.a,{variant:"h5"},"Is er op het evenement sprake van een hieronder staande situatie? ")),r.a.createElement(k.a,{item:!0,xs:12,align:"left"},r.a.createElement(f.a,{control:r.a.createElement(z.a,{checked:this.state.doorstroom,onChange:this.handleDoorstroomChange,value:"checkedB",color:"primary"}),label:r.a.createElement(b.a,{variant:"body2"},"Is er sprake van een evenement met doorstroom?")})),r.a.createElement(k.a,{item:!0,xs:12,align:"left"},r.a.createElement(f.a,{control:r.a.createElement(z.a,{checked:this.state.binnen,onChange:this.handleBinnenChange,value:"checkedB",color:"primary"}),label:r.a.createElement(b.a,{variant:"body2"},"Vind het evenement binnen plaats?")})),r.a.createElement(k.a,{item:!0,xs:12,align:"left"},r.a.createElement(f.a,{control:r.a.createElement(z.a,{checked:this.state.terras,onChange:this.handleTerrasChange,value:"checkedB",color:"primary"}),label:r.a.createElement(b.a,{variant:"body2"},"Is er sprake van een buitenterras (eet- of drink gelegenheid)?")}))),r.a.createElement(C.a,{variant:"middle"}),r.a.createElement(k.a,{container:!0,spacing:2},r.a.createElement(k.a,{item:!0,xs:12},r.a.createElement(b.a,{variant:"h5"},"Uitkomst")),r.a.createElement(k.a,{item:!0,xs:12},r.a.createElement(G,{rows:[e,a,t,n]}))))}}]),a}(r.a.Component),W=Object(i.a)(function(e){return{root:{padding:e.spacing(3,2)}}});function Z(){var e=W();return r.a.createElement(s.a,{maxWidth:"md"},r.a.createElement(c.a,{className:e.root},r.a.createElement(T,null)))}t(75);var D=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(Z,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[66,1,2]]]);
//# sourceMappingURL=main.924a18a7.chunk.js.map