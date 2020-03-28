(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{294:function(t,e,o){var content=o(345);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(11).default)("0092f28b",content,!0,{sourceMap:!1})},344:function(t,e,o){"use strict";var n=o(294);o.n(n).a},345:function(t,e,o){(e=o(10)(!1)).push([t.i,"li.has-text-weight-bold[data-v-30d9f118]{list-style:none}.hero-body[data-v-30d9f118]{padding:0}",""]),t.exports=e},371:function(t,e,o){"use strict";o.r(e);o(25),o(14),o(7),o(4),o(18);var n=o(1),r=o(76);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}var c={components:{Steps:function(){return o.e(12).then(o.bind(null,370))},Form:function(){return Promise.all([o.e(1),o.e(2)]).then(o.bind(null,369))}},created:function(){},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(r.b)(["showResult","diagnosis","covid"])),data:function(){return{dialog:!1,help:!1,notifications:!1,sound:!0,widgets:!1,diseases:["","ALERGIA","Coronavirus","INFECCIÓN RESPIRATORIA","RESFRIADO"],forecast:[{day:"Nada",icon:"1.svg",temp:"1"},{day:"Poco",icon:"2.svg",temp:"2"},{day:"Moderado",icon:"3.svg",temp:"3"},{day:"Mucho",icon:"4.svg",temp:"4"}]}}},v=(o(344),o(5)),d=o(22),_=o.n(d),m=o(280),h=o(272),f=o(270),w=o(374),C=o(286),y=o(298),x=o(292),S=o(281),O=o(293),I=o(364),V=o(365),j=o(291),T=o(283),component=Object(v.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("v-row",{attrs:{justify:"center"}},[o("v-btn",{staticClass:"ma-2",attrs:{color:"secondary",flat:"",elevation:"4",large:"",rounded:""},on:{click:function(e){t.dialog=!0}}},[t._v("\n      INICIAR ASISTENTE\n    ")]),t._v(" "),o("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition",scrollable:""},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[o("v-card",{attrs:{tile:""}},[o("v-toolbar",{attrs:{flat:"",dark:"",color:"primary"}},[o("v-btn",{attrs:{icon:"",dark:""},on:{click:function(e){t.dialog=!1,t.$store.commit("RESET_ASSISTANT")}}},[o("v-icon",[t._v("mdi-close")])],1),t._v(" "),o("v-toolbar-title",[t._v("Asistente")]),t._v(" "),o("v-spacer"),t._v(" "),o("v-toolbar-items")],1),t._v(" "),o("v-card-text",[o("section",{directives:[{name:"show",rawName:"v-show",value:t.showResult,expression:"showResult"}],staticClass:"hero is-bold is-small"},[o("div",{staticClass:"hero-body"},[o("div",{staticClass:"has-text-centered"},[o("b-message",{attrs:{type:t.covid?"is-danger":"is-info"}},[t.covid?[o("h1",{staticClass:"title is-3"},[t._v("\n                      Tus síntomas similares con aquellos presentados en\n                      algunos casos de "),o("b",[t._v("COVID-19 ")]),t._v(". "),o("br"),t._v("\n                      No entres en pánico y continúa tomando todas las medidas\n                      de seguridad.\n                    ")]),t._v(" "),o("br"),t._v(" "),o("h2",{staticClass:"subtitle "},[t._v("\n                      Sin embargo, te recomendamos revisar una lista más\n                      completa de los síntomas asociados a esta condición en\n                      "),o("br"),t._v(" "),o("a",{attrs:{href:"https://salud.nih.gov/articulo/resfrio-gripe-o-alergia/"}},[t._v("https://salud.nih.gov/articulo/resfrio-gripe-o-alergia/ ")]),t._v(". "),o("br"),t._v("\n                      Te recomendamos "),o("b",[t._v("quedarte en casa ")]),t._v(", revisar los\n                      síntomas en\n                      "),o("br"),t._v(" "),o("a",{attrs:{href:"https://coronavirus.gob.mx/"}},[t._v("https://coronavirus.gob.mx/\n                      ")]),t._v("\n                      y comunicarte al teléfono "),o("b",[t._v("800 00 44 800 ")]),t._v(" "),o("br"),t._v("\n                      o con algún profesional de la salud vía telefónica.\n                    ")])]:[o("h1",{staticClass:"title is-3"},[t._v("\n                      Tus síntomas parecen estar más asociados con aquellos\n                      presentados en casos de\n                      "),o("b",[t._v(t._s(t.diseases[t.diagnosis])+" ")]),t._v(".\n                    ")]),t._v(" "),o("br"),t._v(" "),o("h2",{staticClass:"subtitle "},[t._v("\n                      Sin embargo, te recomendamos revisar los síntomas de\n                      estas condiciones en "),o("br"),t._v(" "),o("a",{attrs:{href:"https://salud.nih.gov/articulo/resfrio-gripe-o-alergia/"}},[t._v("https://salud.nih.gov/articulo/resfrio-gripe-o-alergia/ ")]),t._v(". "),o("br"),t._v("\n                      Si sospechas estar contagiado de "),o("b",[t._v("COVID-19")]),t._v(", acorde\n                      a las disposiciones oficiales, "),o("br"),t._v("\n                      te recomendamos "),o("b",[t._v("quedarte en casa ")]),t._v(", revisar los\n                      síntomas en\n                      "),o("br"),t._v(" "),o("a",{attrs:{href:"https://coronavirus.gob.mx/"}},[t._v("https://coronavirus.gob.mx/\n                      ")]),t._v("\n                      y comunicarte al teléfono "),o("b",[t._v("800 00 44 800 ")]),t._v(" "),o("br"),t._v("\n                      o con algún profesional de la salud vía telefónica.\n                    ")])]],2),t._v(" "),o("div",{staticClass:"experience"},[o("div",{staticClass:"title is-size-5 has-text-info has-text-weight-bold"},[t._v("\n                    Independientemente del diagnóstico, si:\n                  ")]),t._v(" "),o("div",{staticClass:"item"},[o("div",{staticClass:"is-size-5"},[t._v("\n                      La frecuencia de tu respiración es mayor a\n\n                      "),o("b",[t._v("30 respiraciones por minuto")])]),t._v(" "),o("br"),t._v(" "),o("div",{staticClass:"is-size-5 has-text-weight-bold"},[t._v("O")]),t._v(" "),o("br")]),t._v(" "),o("div",{staticClass:"item"},[o("div",{staticClass:"is-size-5"},[t._v("\n                      presentas dificultad para\n                      "),o("b",[t._v("respirar, comer o mantenerte despierto,")])]),t._v(" "),o("br"),t._v(" "),o("div",{staticClass:"is-size-5 has-text-weight-bold"},[t._v("Y/O")]),t._v(" "),o("br")]),t._v(" "),o("div",{staticClass:"item"},[o("div",{staticClass:"is-size-5"},[t._v("\n                      presentas\n                      "),o("b",[t._v(" llenado capilar de más de 5 segundos")]),t._v(" "),o("br"),t._v(" "),o("b",[t._v("Y/O")]),t._v(" tienes dos o más de los siguientes:\n                    ")]),t._v(" "),o("br"),t._v(" "),o("ul",{staticStyle:{"list-style":"disc"}},[o("li",{staticClass:"has-text-weight-bold"},[t._v("\n                        — más de 65 años o menos de 5 años\n                      ")]),t._v(" "),o("li",{staticClass:"has-text-weight-bold"},[t._v("\n                        — fiebre mayor a 38°C\n                      ")]),t._v(" "),o("li",{staticClass:"has-text-weight-bold"},[t._v("\n                        — tos seca persistente\n                      ")]),t._v(" "),o("li",{staticClass:"has-text-weight-bold"},[t._v("\n                        — dificultad leve o moderada para respirar\n                      ")])])]),t._v(" "),o("br"),t._v(" "),o("div",{staticClass:"item"},[o("div",{staticClass:"is-size-5"},[t._v("\n                      es necesario que te comuniques al teléfono\n                      "),o("b",[t._v("800 00 44 800 ")]),t._v(" lo antes posible, "),o("br"),t._v("\n                      debido a que te encuentras en una situación más\n                      vulnerable.\n                    ")])]),t._v(" "),o("br"),t._v(" "),o("div",{staticClass:"item"},[o("div",{staticClass:"is-size-5"},[t._v("\n                      Te recomendamos también reforzar medidas de prevención\n                      como:\n                    ")]),t._v(" "),o("br"),t._v(" "),o("ul",{staticStyle:{"list-style":"disc"}},[o("li",{staticClass:"has-text-weight-bold"},[t._v("\n                        — Lavar tus manos con agua y jabón\n                      ")]),t._v(" "),o("li",{staticClass:"has-text-weight-bold"},[t._v("\n                        — Toser o estornudar en un pañuelo desechable o con el\n                        ángulo interno del codo\n                      ")]),t._v(" "),o("li",{staticClass:"has-text-weight-bold"},[t._v("\n                        — Usar gel antibacterial con alcohol al 70%\n                      ")]),t._v(" "),o("li",{staticClass:"has-text-weight-bold"},[t._v("\n                        — Evitar tocarte la boca, nariz y los ojos\n                      ")]),t._v(" "),o("li",{staticClass:"has-text-weight-bold"},[t._v("\n                        — Limpiar las superficies con jabón y cloro\n                      ")])])]),t._v(" "),o("br"),t._v(" "),o("div",{staticClass:"item"},[o("div",{staticClass:"is-size-5"},[t._v("\n                      Sigue la información publicada por la\n                      "),o("b",[t._v("Secretaría de Salud ")]),t._v(" en:\n                    ")]),t._v(" "),o("br"),t._v(" "),o("ul",[o("li",[o("strong",[t._v("Twitter:")]),t._v(" "),o("a",{attrs:{href:"https://twitter.com/SSalud_mx"}},[t._v("@SSalud_mx\n                        ")])]),t._v(" "),o("li",[o("strong",[t._v("Facebook:")]),t._v(" "),o("a",{attrs:{href:"https://web.facebook.com/SecretariadeSaludMX/"}},[t._v("SecretariadeSaludMX")])]),t._v(" "),o("li",[o("strong",[t._v("Instagram:")]),t._v(" "),o("a",{attrs:{href:"https://www.instagram.com/ssalud_mx/"}},[t._v("ssalud_mx\n                        ")])]),t._v(" "),o("li",[o("strong",[t._v("Youtube:")]),t._v(" "),o("a",{attrs:{href:"https://www.youtube.com/channel/UCu2Uc7YeJmE9mvGG9OK-zbQ"}},[t._v("Secretaría de Salud México\n                        ")])])])])])],1)])]),t._v(" "),o("v-list",{directives:[{name:"show",rawName:"v-show",value:!t.showResult,expression:"!showResult"}],attrs:{"three-line":"",subheader:""}},[o("v-list-item",[o("v-list-item-content",[o("Steps")],1)],1)],1)],1),t._v(" "),o("div",{staticStyle:{flex:"1 1 auto"}})],1)],1)],1),t._v(" "),o("v-row",{attrs:{justify:"center"}},[o("v-dialog",{attrs:{scrollable:"",width:"500px"},model:{value:t.help,callback:function(e){t.help=e},expression:"help"}},[o("v-card",{attrs:{outlined:""}},[o("v-card-title",[t._v("\n          Cuantificadores\n        ")]),t._v(" "),o("v-card-text",[o("v-card",{staticClass:"mx-auto",attrs:{flat:"",outlined:""}},[o("v-list",{staticClass:"transparent"},t._l(t.forecast,(function(e){return o("v-list-item",{key:e.day},[o("v-list-item-title",[t._v(t._s(e.day))]),t._v(" "),o("v-list-item-icon",[o("img",{attrs:{width:"30px",src:t.$store.state.base+"/feelings/"+e.icon,alt:""}})]),t._v(" "),o("v-list-item-subtitle",{staticClass:"text-right"},[t._v(t._s(e.temp))])],1)})),1)],1)],1),t._v(" "),o("v-card-actions",[o("v-spacer"),t._v(" "),o("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(e){t.help=!1}}},[t._v("Cerrar")])],1)],1)],1)],1)],1)}),[],!1,null,"30d9f118",null);e.default=component.exports;_()(component,{VBtn:m.a,VCard:h.a,VCardActions:f.a,VCardText:f.b,VCardTitle:f.c,VDialog:w.a,VIcon:C.a,VList:y.a,VListItem:x.a,VListItemContent:S.a,VListItemIcon:O.a,VListItemSubtitle:S.b,VListItemTitle:S.c,VRow:I.a,VSpacer:V.a,VToolbar:j.a,VToolbarItems:T.a,VToolbarTitle:T.b})}}]);