(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,a){e.exports={canvases:"Index_canvases__1jvry",canvaContainer:"Index_canvaContainer__18NXF",serviceCanvas:"Index_serviceCanvas__uD8GG"}},39:function(e,t,a){e.exports=a.p+"static/media/elephant.43105bae.svg"},40:function(e,t,a){e.exports=a.p+"static/media/horse.aa2e0ee6.svg"},41:function(e,t,a){e.exports=a.p+"static/media/react.5d5d9eef.svg"},42:function(e,t,a){e.exports=a.p+"static/media/rooster.0da0e356.svg"},52:function(e,t,a){e.exports=a(64)},57:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(8),r=a.n(o),l=(a(57),a(11)),c=a(24),s=a(28),h=a.n(s),d=a(99),u=a(107),m=a(109),f=a(108),v=a(106),g=a(101),p=a(102),x=a(104),w=a(103),b=a(105),y=a(39),O=a.n(y),E=a(40),T=a.n(E),S=a(41),j=a.n(S),C=a(42),k=a.n(C),N={elephant:O.a,horse:T.a,react:j.a,rooster:k.a},A=Object(d.a)(function(e){return{root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden",backgroundColor:e.palette.background.paper},gridList:{cursor:"pointer",textTransform:"capitalize",width:500,height:450},icon:{color:"gray",backgroundColor:"rgba(255, 255, 255, 0.54)",borderRadius:"50%",width:"1.2rem",height:"1.2rem",marginRight:"1rem"},info:{fontSize:"0.5rem"}}}),F=[{img:N.elephant,title:"elephant",author:"Nature"},{img:N.horse,title:"horse",author:"Nature"},{img:N.rooster,title:"rooster",author:"Nature"},{img:N.react,title:"react",author:"Facebook"}],D=function(e){var t=e.eventHandler,a=A();return i.a.createElement("div",{className:a.root},i.a.createElement(g.a,{cellHeight:180,className:a.gridList},i.a.createElement(p.a,{key:"Subheader",cols:2,style:{height:"auto"}},i.a.createElement(w.a,{component:"div"},"Please choose mascot")),F.map(function(e){return i.a.createElement(p.a,{key:e.img},i.a.createElement("img",{src:e.img,alt:e.title,onClick:function(e){t({mascot:e.target.alt})}}),i.a.createElement(x.a,{title:e.title,subtitle:i.a.createElement("span",null,"by: ",e.author),actionIcon:i.a.createElement(b.a,{"aria-label":"info about ".concat(e.title),className:a.icon},i.a.createElement("span",{className:a.info},"i"))}))})))},I=a(27),P=a(110),R=[{value:"Arvo",label:"Arvo"},{value:"AtomicAge",label:"AtomicAge"},{value:"Bahiana",label:"Bahiana"},{value:"BerkshireSwash",label:"BerkshireSwash"},{value:"BlendaScript",label:"BlendaScript"},{value:"LilitaOne",label:"LilitaOne"},{value:"GrandHotel",label:"GrandHotel"},{value:"MedulaOne",label:"MedulaOne"},{value:"PirataOne",label:"PirataOne"},{value:"Teko",label:"Teko"}],H=Object(d.a)(function(e){return{container:{display:"flex",flexWrap:"wrap"},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1),width:"15rem",fontFamily:"AtomicAge"},dense:{marginTop:19},menu:{width:200}}}),B=function(e){var t,a=e.eventHandler,o=e.props,r=o.texts,c=H(),s=function(e,t){return function(t){var n=r;n[e]=Object(l.a)({},r[e],{text:t.target.value.toUpperCase()}),a({texts:n})}};return i.a.createElement(n.Fragment,null,i.a.createElement("h3",{style:{fontFamily:o.fontFamily}},"Please select options"),i.a.createElement(P.a,{id:"standard-select-currency-native",select:!0,label:"Select font",className:c.textField,value:o.fontFamily,onChange:(t="fontFamily",function(e){a(Object(I.a)({},t,e.target.value))}),SelectProps:{native:!0,MenuProps:{className:c.menu}},helperText:"Please select font",margin:"normal"},R.map(function(e){return i.a.createElement("option",{key:e.value,value:e.value,style:{fontFamily:e.value}},e.label)})),r.map(function(e,t){return i.a.createElement(n.Fragment,{key:e.id},i.a.createElement(P.a,{id:e.id,label:e.label,defaultValue:e.text,onChange:s(t),className:h()(c.textField,c.dense),margin:"dense",variant:"outlined"}))}))},_=a(23),L=a.n(_),M=a(33),z=a(44),Q=function(e){var t=e.fontSize||q(e.element,"font-size")||"100px",a=(e.fontWeight||q(e.element,"font-weight")||"normal")+" "+t+" "+(e.fontFamily||q(e.element,"font-family")||"Arial"),n=W(e.text,a),i=document.createElement("canvas"),o=i.getContext("2d");i.width=n.width,i.height=1.2*n.height,o.font=a,o.fillText(e.text,0,t.replace("px",""));var r=o.getImageData(0,0,i.width,i.height),l=Y({width:i.width,height:i.height,imageData:r,options:e});return l.foundTopText?l.foundBottomText?{width:n.width,height:l.bottomTextY-l.topTextY,yOffset:-l.topTextY}:{width:n.width,height:i.height-l.topTextY,yOffset:-l.topTextY}:{width:n.width,height:0,yOffset:0}},W=function(e,t){var a=document.createElement("div");a.style.position="fixed",a.style.top="0px",a.style.left="0px",a.style.width="0px",a.style.height="0px",a.style.overflow="hidden";var n=document.createElement("span");n.style.font=t,n.innerText=e,document.body.appendChild(n);var i=n.getBoundingClientRect();return document.body.removeChild(n),i};function G(e,t){this.x=0,this.y=0,this.index=0,this.moveRight=function(){this.arePixelsToTheRight()?(this.x++,this.index+=4):this.moveDown()},this.moveDown=function(){this.x=0,this.y++,this.index=this.y*e*4},this.arePixelsToTheRight=function(){return this.x<e-1},this.noMorePixels=function(){return this.index>=e*t*4-4}}var Y=function(e){for(var t,a=new G(e.width,e.height),n=!1,i=!1,o=null,r=null;!a.noMorePixels();)if(n){if(!a.arePixelsToTheRight()){if(t){r=a.y,i=!0;break}t=!0,a.moveDown()}J(e.imageData,a.index)?a.moveRight():(t=!1,a.moveDown())}else J(e.imageData,a.index)?a.moveRight():(o=a.y,n=!0,a.moveDown());return{foundTopText:n,foundBottomText:i,topTextY:o,bottomTextY:r}};function J(e,t){return 0===e.data[t+3]}function q(e,t){return e?window.getComputedStyle(e)[t]:null}var U=function(e){for(var t=e.ctx,a=e.imageData,n=e.amplitude,i=e.curve,o=.5*a.width||t.width/2,r=n<0?-1:0,l=t.createImageData(a.width,a.height+n),c=0;c<a.height;c++)for(var s=0;s<a.width;s++){var h=[a.data[4*(c*a.width+s)+0],a.data[4*(c*a.width+s)+1],a.data[4*(c*a.width+s)+2],a.data[4*(c*a.width+s)+3]],d=(s-o)/o,u=c+(Math.round(n*i(d))+r*n);l.data[4*(u*l.width+s)+0]=h[0],l.data[4*(u*l.width+s)+1]=h[1],l.data[4*(u*l.width+s)+2]=h[2],l.data[4*(u*l.width+s)+3]=h[3]}return l},V=function(e){var t=e.ctx,a=e.tCtx,n=e.text,i=void 0===n?"1234567890abcdefghihklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ":n,o=e.fontSize,r=void 0===o?80:o,l=e.fontFamily,c=void 0===l?"AtomicAge":l,s=e.width,h=void 0===s?3400:s,d=e.offsetTop,u=void 0===d?50:d,m=e.distortion,f=void 0===m?0:m,v=e.lineWidth,g=void 0===v?3:v,p=e.fillStyle,x=void 0===p?"#4444f1":p,w=e.designedSize,b=(void 0===w?{width:3600,height:3600}:w).height,y=t.canvas,O=y.width,E=y.height,T=E/b;t.fillStyle="rgba(10,0,0, 0.05)",t.fillRect(0,0,O,E);var S=Q({text:i,fontSize:"".concat(T*r,"px"),fontFamily:c}),j=S.width,C=S.height,k=h/j>1?h/j:1,N=Q({text:i,fontSize:"".concat(T*r*k,"px"),fontFamily:c}).height,A={x0:O/2-h/2,y0:0,x:O/2,y:N};if(a.fillStyle=x,a.lineWidth=g,a.stroke(),a.textAlign="center",a.font="".concat(T*r*k,"px ").concat(c),a.fillText(i,A.x,N/1.025,h),a.strokeText(i,A.x,N/1.025,h),0!==f){var F=a.getImageData(A.x0-1,A.y0-1,h+2,N+2*Math.abs(T*f)),D=U({ctx:a,imageData:F,amplitude:T*f,curve:function(e){return e*e}});a.putImageData(D,A.x0-1,A.y0-1)}var I=new Image;return I.src=a.canvas.toDataURL(),a.clearRect(0,0,a.canvas.width,a.canvas.height),new Promise(function(e){I.onload=function(){t.drawImage(I,0,0-T*u,O,N+2*Math.abs(T*f)+T*u,0,A.y0,O,C+2*Math.abs(T*f)+T*u),e("drown")}})},X=function(e){var t=e.ctx,a=e.id,n=void 0===a?"elephant":a,i=new Image(t.canvas.width,t.canvas.height);return i.src=N[n],new Promise(function(e){i.onload=function(){t.drawImage(i,0,0,t.canvas.width,t.canvas.height),e("drown")}})},K=function(e,t,a){return Z.apply(this,arguments)};function Z(){return(Z=Object(M.a)(L.a.mark(function e(t,a,n){var i;return L.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return i=n.fontFamily,t.fillStyle="#fff",t.save(),e.next=5,X({ctx:t,id:n.mascot});case 5:return e.next=7,V(Object(l.a)({ctx:t,tCtx:a,fontFamily:i},n.texts[0]));case 7:return e.next=9,V(Object(l.a)({ctx:t,tCtx:a,fontFamily:i},n.texts[1]));case 9:return e.abrupt("return",new Promise(function(e){t.restore(),e("all are drown")}));case 10:case"end":return e.stop()}},e)}))).apply(this,arguments)}function $(e){var t=function(e){var t=Object(n.useState)(Object(l.a)({},JSON.parse(localStorage.getItem("draw-app")),e)),a=Object(c.a)(t,2),i=a[0],o=a[1];return Object(n.useEffect)(function(){localStorage.setItem("draw-app",JSON.stringify(i))}),[i,o]}(e),a=Object(c.a)(t,2),i=a[0],o=a[1],r=Object(n.useRef)(null),s=Object(n.useRef)(null),h=function(e){r.current.toBlob(function(t){Object(z.saveAs)(t,e)})};function d(){return(d=Object(M.a)(L.a.mark(function e(t,a,n){return L.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K(t,a,n);case 2:n.saveLQ&&(h("export_LQ_".concat(Date.now(),".png")),o(Object(l.a)({},n,{saveLQ:!1}))),n.saveHQ&&(h("export_HQ_".concat(Date.now(),".png")),o(Object(l.a)({},n,{saveHQ:!1,canva:{width:720,height:720}})));case 4:case"end":return e.stop()}},e)}))).apply(this,arguments)}return Object(n.useEffect)(function(){var e=i.canva,t=r.current,a=s.current,n=t.getContext("2d"),o=a.getContext("2d");t.setAttribute("width",e.width),t.setAttribute("height",e.height),a.setAttribute("width",e.width),a.setAttribute("height",e.height),n.clearRect(0,0,window.innerWidth,window.innerHeight),function(e,t,a){d.apply(this,arguments)}(n,o,i)}),[i,o,r,s]}var ee={width:3600,height:3600},te={width:720,height:720},ae={fontFamily:"AtomicAge",texts:[{id:"topText",label:"top text",text:"TOP STRING",fontSize:1200,width:.85*te.width,offsetTop:100,lineWidth:6,fillStyle:"#226",distortion:500},{id:"bottomText",label:"bottom text",text:"BOTTOM STRING",fontSize:1e3,width:.85*te.width,offsetTop:2300,lineWidth:6,fillStyle:"#226",distortion:-500}],saveHQ:!1,saveLQ:!1,canva:Object(l.a)({},te)},ne=a(25),ie=a.n(ne),oe=(a(63),Object(d.a)(function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),textAlign:"center",margin:"auto",color:e.palette.text.secondary}}}));var re=function(){var e=$(Object(l.a)({},ae)),t=Object(c.a)(e,4),a=t[0],o=t[1],r=t[2],s=t[3];function d(e){o(Object(l.a)({},a,e))}var g=oe();return i.a.createElement(n.Fragment,null,i.a.createElement(u.a,{container:!0,spacing:3,className:g.root},i.a.createElement(u.a,{item:!0,xs:12},i.a.createElement(D,{eventHandler:d})),i.a.createElement(u.a,{item:!0,xs:5},i.a.createElement(v.a,{className:g.paper},i.a.createElement(B,{eventHandler:d,props:a}))),i.a.createElement(u.a,{item:!0,xs:7},i.a.createElement("div",{className:ie.a.canvaContainer},i.a.createElement("canvas",{id:"THEMAINCANVAS",className:ie.a.canvases,ref:r}))),i.a.createElement(u.a,{container:!0,justify:"center"},i.a.createElement(f.a,{variant:"contained","aria-label":"small contained button group"},i.a.createElement(m.a,{onClick:function(){o(Object(l.a)({},a,{saveLQ:!0}))}},"Save as low-quality PNG (72 DPI)"),i.a.createElement(m.a,{onClick:function(){o(Object(l.a)({},a,{saveHQ:!0},ee))}},"Save as high-quality PNG (300 DPI)")))),i.a.createElement("canvas",{className:h()(ie.a.serviceCanvas,ie.a.canvases),ref:s}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(re,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[52,1,2]]]);
//# sourceMappingURL=main.7951e409.chunk.js.map