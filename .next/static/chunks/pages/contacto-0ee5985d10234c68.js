(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[986],{2529:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contacto",function(){return t(7231)}])},7231:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return g}});var n=t(5893),o=t(1857),c=t.n(o),s=t(9008),r=t.n(s),i=t(7294),l=t(8433),d=t(215),x=t(2577);function u(){let[e,a]=(0,i.useState)({}),[t,o]=(0,i.useState)({status:"idle",message:""}),s=t=>{a({...e,[t.target.name]:t.target.value})},r=t=>{t.preventDefault(),o({status:"loading"}),l.Z.post("".concat(x.Z.API_URL,"/email/contact"),e).then(e=>{o({status:"success",message:"\xa1Gracias por contactarnos! Te responderemos lo m\xe1s pronto posible \uD83E\uDDD0"}),a({})}).catch(e=>{o({status:"error",message:"\xa1Ups! Algo sali\xf3 mal, intenta de nuevo m\xe1s tarde."})})};return"loading"===t.status?(0,n.jsx)("div",{className:"contact-form",style:{width:"100%",padding:"20px 0 0 50px",display:"flex",justifyContent:"center"},children:(0,n.jsx)(d.Z,{color:"#fff",loading:!0,size:100})}):(0,n.jsxs)("div",{style:{width:"100%",padding:"20px 0 0 50px"},animation:"appear",className:"jsx-fb7afb6ed7016cb9 contact-form",children:[(0,n.jsxs)("form",{method:"POST",className:"jsx-fb7afb6ed7016cb9 glassmorphism_form",children:[(0,n.jsxs)("div",{className:"jsx-fb7afb6ed7016cb9 form_group",children:[(0,n.jsx)("label",{htmlFor:"name",className:"jsx-fb7afb6ed7016cb9",children:"Name"}),(0,n.jsx)("input",{onChange:e=>s(e),type:"text",name:"name",id:"name",placeholder:"Tu nombre",className:"jsx-fb7afb6ed7016cb9 form-control"})]}),(0,n.jsxs)("div",{className:"jsx-fb7afb6ed7016cb9 form_group",children:[(0,n.jsx)("label",{htmlFor:"subject",className:"jsx-fb7afb6ed7016cb9",children:"Asunto"}),(0,n.jsx)("input",{onChange:e=>s(e),type:"text",name:"subject",id:"subject",placeholder:"\xbfDe qu\xe9 quieres hablarnos?",className:"jsx-fb7afb6ed7016cb9 form-control"})]}),(0,n.jsxs)("div",{className:"jsx-fb7afb6ed7016cb9 form_group full",children:[(0,n.jsx)("label",{htmlFor:"email",className:"jsx-fb7afb6ed7016cb9",children:"Email"}),(0,n.jsx)("input",{onChange:e=>s(e),type:"email",name:"email",id:"email",placeholder:"Escribe para poder contactarte :D",className:"jsx-fb7afb6ed7016cb9 form-control"})]}),(0,n.jsxs)("div",{className:"jsx-fb7afb6ed7016cb9 form_group full",children:[(0,n.jsx)("label",{htmlFor:"message",className:"jsx-fb7afb6ed7016cb9",children:"Message"}),(0,n.jsx)("textarea",{onChange:e=>s(e),name:"message",id:"message",rows:"5",placeholder:"Escribe tu mensaje, \xa1puedes dejarnos redes sociales o n\xfameros de tel\xe9fono si quieres otro medio de respuesta!",className:"jsx-fb7afb6ed7016cb9 form-control"})]}),(0,n.jsx)("button",{onClick:e=>r(e),type:"submit",style:{background:"transparent",border:"none"},className:"jsx-fb7afb6ed7016cb9 button_design",children:(0,n.jsx)("p",{className:"jsx-fb7afb6ed7016cb9",children:"Enviar"})})]}),"success"===t.status&&(0,n.jsx)("p",{animation:"appear",style:{textAlign:"center",color:"var(--color-success"},className:"jsx-fb7afb6ed7016cb9",children:t.message}),"error"===t.status&&(0,n.jsx)("p",{animation:"appear",style:{textAlign:"center",color:"var(--color-danger"},className:"jsx-fb7afb6ed7016cb9",children:t.message}),(0,n.jsx)(c(),{id:"fb7afb6ed7016cb9",children:""})]})}var p=t(3024),m=t(9417),b=t(9603),f=t(750),h=t.n(f);function j(){return(0,n.jsxs)("div",{className:h().message_container,animation:"appear",children:[(0,n.jsx)("h4",{children:"\xa1Hola! \xa1Qu\xe9 gusto tenerte por aqu\xed! \uD83D\uDE03"}),(0,n.jsx)("p",{children:"Nos encanta estar en contacto contigo y queremos que sepas que estamos disponibles para cualquier duda o consulta."}),(0,n.jsx)("p",{children:"Si necesitas ayuda con tu pedido, tienes alguna pregunta sobre nuestros productos o simplemente quieres saludarnos, \xa1no dudes en escribirnos! Estamos aqu\xed para ayudarte en todo lo que necesites."}),(0,n.jsx)("p",{children:"Adem\xe1s, si tienes alguna sugerencia o reclamo que quieras compartir con nosotros, tambi\xe9n puedes hacerlo a trav\xe9s de este formulario y nos pondremos en contacto contigo lo antes posible para solucionarlo."}),(0,n.jsx)("p",{children:"Por \xfaltimo, si prefieres comunicarte con nosotros a trav\xe9s de las redes sociales, \xa1estamos ah\xed tambi\xe9n! \xa1S\xedguenos y mantente al d\xeda con nuestras novedades!"}),(0,n.jsx)("p",{children:"\xa1Much\xedsimas gracias por tu inter\xe9s en Fuku Shop! Estamos ansiosos de poder ayudarte y ser parte de tu experiencia."}),(0,n.jsx)("p",{children:"\xa1Un abrazo! \uD83E\uDD17 Equipo de Fuku Shop"}),(0,n.jsxs)("ul",{className:h().social_media,children:[(0,n.jsx)("li",{children:(0,n.jsxs)("a",{href:"https://www.instagram.com/",target:"_blank",rel:"noreferrer",children:[(0,n.jsx)(b.G,{icon:p.Zzi}),"@fukushop (prox)"]})}),(0,n.jsx)("li",{children:(0,n.jsxs)("a",{href:"mailto:contacto@fukushop.com.ar",target:"_blank",rel:"noreferrer",children:[(0,n.jsx)(b.G,{icon:m.FU$}),"contacto@fukushop.com.ar"]})}),(0,n.jsx)("li",{children:(0,n.jsxs)("a",{href:"https://wa.me/543492287151",target:"_blank",rel:"noreferrer",children:[(0,n.jsx)(b.G,{icon:p.VHX}),"+54 3492 287151"]})})]})]})}function g(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r(),{children:(0,n.jsx)("title",{children:"Fuku Shop | Contacto"})}),(0,n.jsxs)("main",{className:"jsx-24ee0fb54b1646b6",children:[(0,n.jsx)("h1",{className:"jsx-24ee0fb54b1646b6",children:"Contacto"}),(0,n.jsxs)("section",{id:"contact_section",className:"jsx-24ee0fb54b1646b6",children:[(0,n.jsx)(j,{}),(0,n.jsx)(u,{})]}),(0,n.jsx)(c(),{id:"24ee0fb54b1646b6",children:"main.jsx-24ee0fb54b1646b6{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;padding:0 7rem;margin:3rem auto 6rem;width:100vw}h1.jsx-24ee0fb54b1646b6{font-size:2rem;font-weight:600;margin:2rem}#contact_section.jsx-24ee0fb54b1646b6{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;width:100%;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}@media screen and (max-width:900px){main.jsx-24ee0fb54b1646b6{padding:0 1rem}#contact_section.jsx-24ee0fb54b1646b6{-webkit-box-orient:vertical;-webkit-box-direction:reverse;-webkit-flex-direction:column-reverse;-moz-box-orient:vertical;-moz-box-direction:reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse}}"})]})]})}},2577:function(e,a){"use strict";a.Z={FUKU_WHATSAPP:"https://wa.me/543492287151?text=",API_URL:"https://fukushop.com.ar/api",FRONTEND_URL:"https://fukushop.com.ar"}},750:function(e){e.exports={message_container:"ContactText_message_container__XgmYH",social_media:"ContactText_social_media__GiNG3"}},9008:function(e,a,t){e.exports=t(3121)},215:function(e,a,t){"use strict";t.d(a,{Z:function(){return p}});var n,o,c=t(7294);(n=o||(o={})).maroon="#800000",n.red="#FF0000",n.orange="#FFA500",n.yellow="#FFFF00",n.olive="#808000",n.green="#008000",n.purple="#800080",n.fuchsia="#FF00FF",n.lime="#00FF00",n.teal="#008080",n.aqua="#00FFFF",n.blue="#0000FF",n.navy="#000080",n.black="#000000",n.gray="#808080",n.silver="#C0C0C0",n.white="#FFFFFF";var s=function(e,a){if(Object.keys(o).includes(e)&&(e=o[e]),"#"===e[0]&&(e=e.slice(1)),3===e.length){var t="";e.split("").forEach(function(e){t+=e+e}),e=t}var n=(e.match(/.{2}/g)||[]).map(function(e){return parseInt(e,16)}).join(", ");return"rgba(".concat(n,", ").concat(a,")")},r={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function i(e){if("number"==typeof e)return{value:e,unit:"px"};var a,t=(e.match(/^[0-9.]*/)||"").toString();a=t.includes(".")?parseFloat(t):parseInt(t,10);var n=(e.match(/[^0-9]*$/)||"").toString();return r[n]?{value:a,unit:n}:(console.warn("React Spinners: ".concat(e," is not a valid css value. Defaulting to ").concat(a,"px.")),{value:a,unit:"px"})}function l(e){var a=i(e);return"".concat(a.value).concat(a.unit)}var d=function(e,a,t){var n="react-spinners-".concat(e,"-").concat(t);if("undefined"==typeof window||!window.document)return n;var o=document.createElement("style");document.head.appendChild(o);var c=o.sheet,s="\n    @keyframes ".concat(n," {\n      ").concat(a,"\n    }\n  ");return c&&c.insertRule(s,0),n},x=function(){return(x=Object.assign||function(e){for(var a,t=1,n=arguments.length;t<n;t++)for(var o in a=arguments[t])Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o]);return e}).apply(this,arguments)},u=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>a.indexOf(n)&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)0>a.indexOf(n[o])&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(t[n[o]]=e[n[o]]);return t},p=function(e){var a=e.loading,t=e.color,n=void 0===t?"#000000":t,o=e.speedMultiplier,r=void 0===o?1:o,p=e.cssOverride,m=e.size,b=void 0===m?50:m,f=u(e,["loading","color","speedMultiplier","cssOverride","size"]),h=i(b),j=h.value,g=h.unit,v=x({display:"inherit",position:"relative",width:l(b),height:l(b),transform:"rotate(165deg)"},void 0===p?{}:p),w=j/5,y=(j-w)/2,k=y-w,_=s(n,.75),F=d("HashLoader","0% {width: ".concat(w,"px; box-shadow: ").concat(y,"px ").concat(-k,"px ").concat(_,", ").concat(-y,"px ").concat(k,"px ").concat(_,"}\n    35% {width: ").concat(l(b),"; box-shadow: 0 ").concat(-k,"px ").concat(_,", 0 ").concat(k,"px ").concat(_,"}\n    70% {width: ").concat(w,"px; box-shadow: ").concat(-y,"px ").concat(-k,"px ").concat(_,", ").concat(y,"px ").concat(k,"px ").concat(_,"}\n    100% {box-shadow: ").concat(y,"px ").concat(-k,"px ").concat(_,", ").concat(-y,"px ").concat(k,"px ").concat(_,"}"),"before"),N=d("HashLoader","0% {height: ".concat(w,"px; box-shadow: ").concat(k,"px ").concat(y,"px ").concat(n,", ").concat(-k,"px ").concat(-y,"px ").concat(n,"}\n    35% {height: ").concat(l(b),"; box-shadow: ").concat(k,"px 0 ").concat(n,", ").concat(-k,"px 0 ").concat(n,"}\n    70% {height: ").concat(w,"px; box-shadow: ").concat(k,"px ").concat(-y,"px ").concat(n,", ").concat(-k,"px ").concat(y,"px ").concat(n,"}\n    100% {box-shadow: ").concat(k,"px ").concat(y,"px ").concat(n,", ").concat(-k,"px ").concat(-y,"px ").concat(n,"}"),"after"),E=function(e){return{position:"absolute",top:"50%",left:"50%",display:"block",width:"".concat(j/5).concat(g),height:"".concat(j/5).concat(g),borderRadius:"".concat(j/10).concat(g),transform:"translate(-50%, -50%)",animationFillMode:"none",animation:"".concat(1===e?F:N," ").concat(2/r,"s infinite")}};return void 0===a||a?c.createElement("span",x({style:v},f),c.createElement("span",{style:E(1)}),c.createElement("span",{style:E(2)})):null}}},function(e){e.O(0,[433,857,774,888,179],function(){return e(e.s=2529)}),_N_E=e.O()}]);