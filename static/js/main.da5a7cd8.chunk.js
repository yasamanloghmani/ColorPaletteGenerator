(this.webpackJsonpcolorpalettegenerator=this.webpackJsonpcolorpalettegenerator||[]).push([[0],{196:function(e,t,a){},267:function(e,t,a){},272:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(22),c=a.n(r),l=(a(96),a(14)),i=a(15),s=a(17),h=a(16),u=(a(97),a(98),a(1)),d=a.n(u),m=a(34),p=(a(196),function(e){Object(s.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={value:"",copied:!1},e.showHuePicker=function(e){var t=e.target.querySelector("p");console.log(t),t.style.display="block"},e.hideHuePicker=function(e){e.target.querySelector("p").style.display="none"},e}return Object(i.a)(a,[{key:"render",value:function(){var e=d()({default:{card:{backgroundColor:this.props.color,boxShadow:"0 2px 4px rgba(0,0,0,.15)"}}});return o.a.createElement("div",{className:"ColorPeg",style:e.card,id:this.props.id,onMouseOver:this.showHuePicker,onMouseOut:this.hideHuePicker},o.a.createElement("div",{className:"pContainer"},o.a.createElement("p",{className:"colorCode"},this.props.color)))}}]),a}(n.Component)),C=a(35),g=(a(267),a(268),function(e){Object(s.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).handleChange=function(e){n.setState({background:e.hex}),n.state.colors[n.state.id]=e.hex},n.handlePickColor=function(e){var t=e.target,a=t.style.backgroundColor;a=a.toString(),n.setState({background:a}),n.setState({id:t.id})},n.state={pictures:"",background:"#f35c87",colors:["#845EC2","#845EC2","#FF9671","#FFC75F","#B39CD0","#00C9A7"],id:0,p1:["#845EC2","#EDC0FF","#7652B4","#08004F","#07226F","#1DC0FF"],p2:["#356275","#98AFBA","#657A85","#6E546C","#08A1BA","#A56875"],p3:["#8F4454","#7E4564","#66486C","#4E4A6C","#00486C","#1E406C"]},n.onDrop=n.onDrop.bind(Object(m.a)(n)),n}return Object(i.a)(a,[{key:"onDrop",value:function(e,t){this.setState({pictures:t})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement("main",null,o.a.createElement("section",null,o.a.createElement(C.SwatchesPicker,{color:this.state.background,onChange:this.handleChange,height:"100%"})),o.a.createElement("div",{className:"sections"},o.a.createElement("div",{className:"Pallets",onClick:this.handlePickColor},this.state.colors.map((function(t,a){return o.a.createElement(p,{color:t,key:a,id:a,onChangen:e.handleChange})})))),o.a.createElement("section",null,o.a.createElement(C.SketchPicker,{color:this.state.background,onChange:this.handleChange,width:"60%"}),o.a.createElement("div",{className:"marg"},o.a.createElement(C.MaterialPicker,{color:this.state.background,onChange:this.handleChange})))),o.a.createElement("div",null,o.a.createElement("h1",null,"Some famouse Pallets"),o.a.createElement("div",{className:"Pallets",onClick:this.handlePickColor},this.state.p1.map((function(t,a){return o.a.createElement(p,{color:t,key:a,id:a,onChangen:e.handleChange})}))),o.a.createElement("div",{className:"Pallets",onClick:this.handlePickColor},this.state.p2.map((function(t,a){return o.a.createElement(p,{color:t,key:a,id:a,onChangen:e.handleChange})}))),o.a.createElement("div",{className:"Pallets",onClick:this.handlePickColor},this.state.p3.map((function(t,a){return o.a.createElement(p,{color:t,key:a,id:a,onChangen:e.handleChange})})))))}}]),a}(n.Component)),k=function(e){Object(s.a)(a,e);var t=Object(h.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",null,o.a.createElement("h1",null,"cute colors")),o.a.createElement(g,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},91:function(e,t,a){e.exports=a(272)},96:function(e,t,a){},97:function(e,t,a){}},[[91,1,2]]]);
//# sourceMappingURL=main.da5a7cd8.chunk.js.map