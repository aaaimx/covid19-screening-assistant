(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{336:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{scales:[30.66,2.33,3.44,4.33],slider:1,e6:1,value:10,questions:["¿Cómo calificarías tu dolor de cabeza?","¿Cómo calificarías dolores en tu cuerpo?","¿Cómo calificarías tu fatiga o debilidad?","¿Qué tan tapada sientes la nariz?","¿Qué tanto estornudas?","¿Qué tan irritada sientes la garganta?","¿Qué tanta tos tienes?","¿Qué tanto se te dificulta respirar?","¿Qué tanto escurrimiento nasal tienes?","¿Qué tanta diarrea presentas?"],satisfactionEmojis:["😭","😢","☹️","🙁","😐","🙂","😊","😁","😄","😍"],seasons:["Nada","Poco","Moderado","Mucho"],icons:["mdi-snowflake","mdi-leaf","mdi-fire","mdi-water"],svg:[0,1,2,3,4,5,6,7,8]}},methods:{season:function(t){return this.svg[t]+".svg"}}},o=n(6),l=n(21),c=n.n(l),d=n(329),m=n(332),f=n(330),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"overflow-y-auto",staticStyle:{"max-height":"500px"}},[n("v-subheader",{staticClass:"pl-0"},[t._v("1. ¿Cuál es tu temperatura? (°C)")]),t._v(" "),n("v-slider",{attrs:{"thumb-size":20,min:"35",max:"45",ticks:"always","thumb-label":"always"},scopedSlots:t._u([{key:"prepend",fn:function(){return[n("img",{attrs:{width:"30px",src:"/covid19-screening-assistant/symptoms/1.svg",alt:""}})]},proxy:!0}])}),t._v(" "),t._l(t.questions,(function(e,r){return n("div",{key:r},[n("v-subheader",{staticClass:"pl-0"},[t._v(t._s(e))]),t._v(" "),n("v-slider",{attrs:{"tick-labels":t.seasons,min:"0",max:"3",ticks:"always"},scopedSlots:t._u([{key:"prepend",fn:function(){return[n("img",{attrs:{width:"30px",src:"/covid19-screening-assistant/symptoms/"+(r+2)+".svg",alt:""}})]},proxy:!0},{key:"thumb-label",fn:function(e){return[n("img",{attrs:{width:"30px",src:"/covid19-screening-assistant/feelings/"+t.season(e.value),alt:""}})]}}],null,!0)})],1)}))],2)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VContainer:d.a,VSlider:m.a,VSubheader:f.a})}}]);