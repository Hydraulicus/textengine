(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{123:function(e,t,a){e.exports=a.p+"static/media/elephant.43105bae.svg"},124:function(e,t,a){e.exports=a.p+"static/media/horse.aa2e0ee6.svg"},125:function(e,t,a){e.exports=a.p+"static/media/react.5d5d9eef.svg"},126:function(e,t,a){e.exports=a.p+"static/media/rooster.0da0e356.svg"},135:function(e,t,a){e.exports=a(321)},140:function(e,t,a){},320:function(e,t,a){},321:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(9),r=a.n(o),l=(a(140),a(13)),c=a(41),s=a(55),u=a.n(s),d=a(354),h=a(362),m=a(364),f=a(363),v=a(361),g=a(356),p=a(357),x=a(359),w=a(358),b=a(360),y=a(123),E=a.n(y),O=a(124),S=a.n(O),T=a(125),k=a.n(T),j=a(126),C=a.n(j),N={elephant:E.a,horse:S.a,react:k.a,rooster:C.a},A=Object(d.a)(function(e){return{root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden",backgroundColor:e.palette.background.paper},gridList:{cursor:"pointer",textTransform:"capitalize",width:500,height:450},icon:{color:"gray",backgroundColor:"rgba(255, 255, 255, 0.54)",borderRadius:"50%",width:"1.2rem",height:"1.2rem",marginRight:"1rem"},info:{fontSize:"0.5rem"}}}),P=[{img:N.elephant,title:"elephant",author:"Nature"},{img:N.horse,title:"horse",author:"Nature"},{img:N.rooster,title:"rooster",author:"Nature"},{img:N.react,title:"react",author:"Facebook"}],F=function(e){var t=e.eventHandler,a=A();return i.a.createElement("div",{className:a.root},i.a.createElement(g.a,{cellHeight:180,className:a.gridList},i.a.createElement(p.a,{key:"Subheader",cols:2,style:{height:"auto"}},i.a.createElement(w.a,{component:"div"},"Please choose mascot")),P.map(function(e){return i.a.createElement(p.a,{key:e.img},i.a.createElement("img",{src:e.img,alt:e.title,onClick:function(e){t({mascot:e.target.alt})}}),i.a.createElement(x.a,{title:e.title,subtitle:i.a.createElement("span",null,"by: ",e.author),actionIcon:i.a.createElement(b.a,{"aria-label":"info about ".concat(e.title),className:a.icon},i.a.createElement("span",{className:a.info},"i"))}))})))},I=a(40),D=a(82),R=a.n(D),H=a(122),B=[{value:"Arvo",label:"Arvo"},{value:"AtomicAge",label:"AtomicAge"},{value:"Bahiana",label:"Bahiana"},{value:"BerkshireSwash",label:"BerkshireSwash"},{value:"BlendaScript",label:"BlendaScript"},{value:"LilitaOne",label:"LilitaOne"},{value:"GrandHotel",label:"GrandHotel"},{value:"MedulaOne",label:"MedulaOne"},{value:"PirataOne",label:"PirataOne"},{value:"Teko",label:"Teko"}],L=Object(d.a)(function(e){return{root:{padding:e.spacing(1,2),margin:e.spacing(3,2)},container:{display:"flex",flexWrap:"nowrap"},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1),width:"15rem",fontFamily:"AtomicAge"},colorPicker:{backgroundColor:"red"},dense:{marginTop:19},menu:{width:200}}}),M=function(e){var t,a=e.eventHandler,o=e.props,r=o.texts,c=L(),s=function(e,t){return function(t){var n=r;n[e]=Object(l.a)({},r[e],{text:t.target.value.toUpperCase()}),a({texts:n})}},d=function(e,t){return function(n){var i=r;i[e]=Object(l.a)({},r[e],Object(I.a)({},t,n)),a({texts:i})}};return i.a.createElement(n.Fragment,null,i.a.createElement("h3",{style:{fontFamily:o.fontFamily}},"Please select options"),i.a.createElement(H.a,{id:"standard-select-currency-native",select:!0,label:"Select font",className:c.textField,value:o.fontFamily,onChange:(t="fontFamily",function(e){a(Object(I.a)({},t,e.target.value))}),SelectProps:{native:!0,MenuProps:{className:c.menu}},helperText:"Please select font",margin:"normal"},B.map(function(e){return i.a.createElement("option",{key:e.value,value:e.value,style:{fontFamily:e.value}},e.label)})),r.map(function(e,t){return i.a.createElement(v.a,{className:c.root,key:e.id},i.a.createElement(H.a,{id:e.id,label:e.label,defaultValue:e.text,onChange:s(t),className:u()(c.textField,c.dense)}),i.a.createElement(h.a,{container:!0,justify:"center",spacing:3},i.a.createElement(h.a,{item:!0,xs:5},i.a.createElement(R.a,{name:"color",label:"strokeStyle",value:e.strokeStyle,onChange:d(t,"strokeStyle")})),i.a.createElement(h.a,{item:!0,xs:5},i.a.createElement(R.a,{name:"color",label:"filling",value:e.fillStyle,onChange:d(t,"fillStyle")}))))}))},Q=a(35),W=a.n(Q),_=a(60),z=a(128),G={width:3600,height:3600},Y={fontFamily:"AtomicAge",texts:[{id:"topText",label:"top text",text:"TOP STRING",fontSize:1e3,width:3200,offsetTop:100,lineWidth:6,fillStyle:"#c35",strokeStyle:"#226",distortion:500},{id:"bottomText",label:"bottom text",text:"BOTTOM STRING",fontSize:900,width:3200,offsetTop:2200,lineWidth:6,fillStyle:"#eeaa59",strokeStyle:"#226",distortion:-500}],saveHQ:!1,saveLQ:!1,canva:Object(l.a)({},{width:720,height:720})},J=function(e,t){var a=document.createElement("div");a.style.position="fixed",a.style.top="0px",a.style.left="0px",a.style.width="0px",a.style.height="0px",a.style.overflow="hidden";var n=document.createElement("span");n.style.font=t,n.innerText=e,document.body.appendChild(n);var i=n.getBoundingClientRect();return document.body.removeChild(n),i};function q(e,t){this.x=0,this.y=0,this.index=0,this.moveRight=function(){this.arePixelsToTheRight()?(this.x++,this.index+=4):this.moveDown()},this.moveDown=function(){this.x=0,this.y++,this.index=this.y*e*4},this.arePixelsToTheRight=function(){return this.x<e-1},this.noMorePixels=function(){return this.index>=e*t*4-4}}var U=function(e){for(var t,a=new q(e.width,e.height),n=!1,i=!1,o=null,r=null;!a.noMorePixels();)if(n){if(!a.arePixelsToTheRight()){if(t){r=a.y,i=!0;break}t=!0,a.moveDown()}V(e.imageData,a.index)?a.moveRight():(t=!1,a.moveDown())}else V(e.imageData,a.index)?a.moveRight():(o=a.y,n=!0,a.moveDown());return{foundTopText:n,foundBottomText:i,topTextY:o,bottomTextY:r}};function V(e,t){return 0===e.data[t+3]}function X(e,t){return e?window.getComputedStyle(e)[t]:null}var K=function(e){for(var t=e.ctx,a=e.imageData,n=e.amplitude,i=e.curve,o=.5*a.width||t.width/2,r=n<0?-1:0,l=t.createImageData(a.width,a.height+Math.abs(n)),c=0;c<a.height;c++)for(var s=0;s<a.width;s++){var u=[a.data[4*(c*a.width+s)+0],a.data[4*(c*a.width+s)+1],a.data[4*(c*a.width+s)+2],a.data[4*(c*a.width+s)+3]],d=(s-o)/o,h=c+(Math.round(n*i(d))+r*n);l.data[4*(h*l.width+s)+0]=u[0],l.data[4*(h*l.width+s)+1]=u[1],l.data[4*(h*l.width+s)+2]=u[2],l.data[4*(h*l.width+s)+3]=u[3]}return l},Z=function(e){var t=e.ctx,a=e.tCtx,n=e.text,i=void 0===n?"1234567890abcdefghihklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ":n,o=e.fontSize,r=void 0===o?80:o,l=e.fontFamily,c=void 0===l?"AtomicAge":l,s=e.width,u=void 0===s?3400:s,d=e.offsetTop,h=void 0===d?50:d,m=e.distortion,f=void 0===m?0:m,v=e.lineWidth,g=void 0===v?3:v,p=e.fillStyle,x=void 0===p?"#4444f1":p,w=e.strokeStyle,b=void 0===w?"#4444f1":w,y=e.designedSize,E=void 0===y?{width:3600,height:3600}:y,O=E.width,S=E.height,T=t.canvas,k=T.width,j=T.height,C=k/O,N=j/S,A=(O-u)*C/2;t.fillStyle="rgba(10,0,0, 0.05)",t.fillRect(0,0,k,j);var P=function(e){var t=e.fontSize||X(e.element,"font-size")||"100px",a=(e.fontWeight||X(e.element,"font-weight")||"normal")+" "+t+" "+(e.fontFamily||X(e.element,"font-family")||"Arial"),n=J(e.text,a),i=document.createElement("canvas"),o=i.getContext("2d");i.width=n.width,i.height=1.2*n.height,o.font=a,o.fillText(e.text,0,t.replace("px",""));var r=o.getImageData(0,0,i.width,i.height),l=U({width:i.width,height:i.height,imageData:r,options:e});return l.foundTopText?l.foundBottomText?{width:n.width,height:l.bottomTextY-l.topTextY,yOffset:-l.topTextY}:{width:n.width,height:i.height-l.topTextY,yOffset:-l.topTextY}:{width:n.width,height:0,yOffset:0}}({text:i,fontSize:"".concat(N*r,"px"),fontFamily:c}),F=P.width,I=P.height,D=(P.yOffset,C*u/F>1?C*u/F:1),R=3,H=3;a.strokeStyle=b,a.fillStyle=x,a.lineWidth=g,a.stroke(),a.textAlign="left",a.font="".concat(N*r,"px ").concat(c),a.fillText(i,R,I+3,C*u),a.strokeText(i,R,I+3,C*u);var B=f*N;if(0!==f){var L=a.getImageData(R-3,H-3,C*u/D+6+3+3,I+6+3+3),M=K({ctx:a,imageData:L,amplitude:B,curve:function(e){return e*e}});a.putImageData(M,R-3,H-3)}var Q=new Image;return Q.src=a.canvas.toDataURL(),a.clearRect(0,0,a.canvas.width,a.canvas.height),new Promise(function(e){Q.onload=function(){t.drawImage(Q,0,0,u*C/D+6+3,I+6+3+2*Math.abs(B),A,h*N,u*C,I+2*Math.abs(B)),e("drown")}})},$=function(e){var t=e.ctx,a=e.id,n=void 0===a?"elephant":a,i=new Image(t.canvas.width,t.canvas.height);return i.src=N[n],new Promise(function(e){i.onload=function(){t.drawImage(i,0,0,t.canvas.width,t.canvas.height),e("drown")}})},ee=function(e,t,a){return te.apply(this,arguments)};function te(){return(te=Object(_.a)(W.a.mark(function e(t,a,n){var i;return W.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return i=n.fontFamily,t.fillStyle="#fff",t.save(),e.next=5,$({ctx:t,id:n.mascot});case 5:return e.next=7,Z(Object(l.a)({ctx:t,tCtx:a,fontFamily:i},n.texts[0]));case 7:return e.next=9,Z(Object(l.a)({ctx:t,tCtx:a,fontFamily:i},n.texts[1]));case 9:return e.abrupt("return",new Promise(function(e){t.restore(),e("all are drown")}));case 10:case"end":return e.stop()}},e)}))).apply(this,arguments)}function ae(e){var t=function(e){var t=Object(n.useState)(Object(l.a)({},JSON.parse(localStorage.getItem("draw-app")),e)),a=Object(c.a)(t,2),i=a[0],o=a[1];return Object(n.useEffect)(function(){localStorage.setItem("draw-app",JSON.stringify(i))}),[i,o]}(e),a=Object(c.a)(t,2),i=a[0],o=a[1],r=Object(n.useRef)(null),s=Object(n.useRef)(null),u=function(e){r.current.toBlob(function(t){Object(z.saveAs)(t,e)})};function d(){return(d=Object(_.a)(W.a.mark(function e(t,a,n){return W.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ee(t,a,n);case 2:(n.saveLQ||n.saveHQ)&&(u("export_LQ_".concat(Date.now(),".png")),o(Object(l.a)({},n,{saveLQ:!1,saveHQ:!1})));case 3:case"end":return e.stop()}},e)}))).apply(this,arguments)}return Object(n.useEffect)(function(){var e=r.current,t=s.current,a=e.getContext("2d"),n=t.getContext("2d"),o=i.saveHQ?Object(l.a)({},G):i.canva;e.setAttribute("width",o.width),e.setAttribute("height",o.height),t.setAttribute("width",o.width),t.setAttribute("height",o.height),a.clearRect(0,0,window.innerWidth,window.innerHeight),function(e,t,a){d.apply(this,arguments)}(a,n,i)}),[i,o,r,s]}var ne=a(42),ie=a.n(ne),oe=(a(320),Object(d.a)(function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),textAlign:"center",margin:"auto",color:e.palette.text.secondary}}}));var re=function(){var e=ae(Object(l.a)({},Y)),t=Object(c.a)(e,4),a=t[0],o=t[1],r=t[2],s=t[3];function d(e){o(Object(l.a)({},a,e))}var g=oe();return i.a.createElement(n.Fragment,null,i.a.createElement(h.a,{container:!0,spacing:3,className:g.root},i.a.createElement(h.a,{item:!0,xs:12},i.a.createElement(F,{eventHandler:d})),i.a.createElement(h.a,{item:!0,xs:4},i.a.createElement(v.a,{className:g.paper},i.a.createElement(M,{eventHandler:d,props:a}))),i.a.createElement(h.a,{item:!0,xs:8},i.a.createElement("div",{className:ie.a.canvaContainer},i.a.createElement("canvas",{id:"THEMAINCANVAS",className:ie.a.canvases,ref:r}))),i.a.createElement(h.a,{container:!0,justify:"center"},i.a.createElement(f.a,{variant:"contained","aria-label":"small contained button group"},i.a.createElement(m.a,{onClick:function(){o(Object(l.a)({},a,{saveLQ:!0}))}},"Save as low-quality PNG (72 DPI)"),i.a.createElement(m.a,{onClick:function(){o(Object(l.a)({},a,{saveHQ:!0},G))}},"Save as high-quality PNG (300 DPI)")))),i.a.createElement("canvas",{className:u()(ie.a.serviceCanvas,ie.a.canvases),ref:s}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(re,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},42:function(e,t,a){e.exports={canvases:"Index_canvases__1jvry",canvaContainer:"Index_canvaContainer__18NXF",serviceCanvas:"Index_serviceCanvas__uD8GG"}}},[[135,1,2]]]);
//# sourceMappingURL=main.e3b61679.chunk.js.map