(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3],{496:function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/producto/[name]",function(){return a(5048)}])},5048:function(e,n,a){"use strict";a.r(n),a.d(n,{__N_SSG:function(){return E},default:function(){return A}});var i=a(5893),t=a(1857),s=a.n(t),o=a(9008),r=a.n(o),c=a(7294),l=a(25),d=a.n(l),m=a(5675),p=a.n(m),u=a(9417),_=a(9603),x=a(3282),h=a.n(x);function f(e){let{images:n,setZoom:a}=e,[t,s]=(0,c.useState)(!1),[o,r]=(0,c.useState)(0),[l,d]=(0,c.useState)(0),m=e=>{if(t){let{left:n,top:a,width:i,height:t}=e.currentTarget.getBoundingClientRect(),s=e.clientX,o=e.clientY;r(s/i*20),d(o/t*70)}},x=e=>{let{left:n,top:a,width:i,height:o}=e.currentTarget.getBoundingClientRect(),c=e.clientX,l=e.clientY;r(c/i*20),d(l/o*70),s(!t)};return(0,i.jsxs)("section",{className:h().zoom_image_container,onMouseMove:m,children:[(0,i.jsx)(_.G,{icon:u.g82,className:h().close_icon,onClick:()=>a(!1)}),(0,i.jsxs)("div",{className:h().zoom_image,style:{width:t?"1500px":"100%",height:t?"1500px":"100%",cursor:t?"zoom-out":"zoom-in"},onClick:()=>s(!t),children:[!t&&(0,i.jsx)(p(),{src:n[0],alt:"Zoomed image",fill:!0,style:{objectFit:"contain",cursor:"zoom-in"},onClick:x}),t&&(0,i.jsx)(p(),{src:n[0],alt:"Zoomed image",width:1500,height:1500,style:{objectFit:"contain",cursor:"zoom-out",transform:"translate(-".concat(o,"%, -").concat(l,"%)")},onMouseMove:m,onClick:()=>s(!t)})]})]})}function g(e){let{variant:n,product:a}=e,[t,s]=(0,c.useState)(n.image),[o,r]=(0,c.useState)(n.gallery),[l,m]=(0,c.useState)(!1),x=e=>{s(e);let a=[...n.gallery,n.image];console.log(a);let i=a.filter(n=>n!==e);console.log(i),r(i)};return(0,i.jsxs)("section",{className:d().images_slider,children:[l&&(0,i.jsx)(f,{images:[l],setZoom:m}),(0,i.jsxs)("div",{className:d().principal_image_container,onClick:e=>m(t),children:[(0,i.jsx)(_.G,{icon:u.wlW,className:d().zoom_icon}),(0,i.jsx)(p(),{src:t,alt:"".concat(a.name," en color ").concat(n.color.name),fill:!0,style:{objectFit:"contain"}})]}),(0,i.jsx)("div",{className:d().gallery_images_container,children:o.filter(e=>null!==e).map((e,t)=>(0,i.jsx)("div",{className:d().gallery_image_container,children:(0,i.jsx)(p(),{src:e,alt:"".concat(a.name," en color ").concat(n.color.name),fill:!0,style:{objectFit:"contain"},onClick:()=>x(e)})},t))})]})}var j=a(5791),y=a.n(j);let b=e=>e.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1.");var v=a(2577);function z(e){let{product:n,sizes:a,colors:t,variant:s}=e,o='\xa1Hola! me gustar\xeda saber m\xe1s sobre el producto "'.concat(n.name,'"\n\xbfPodr\xedas enviarme m\xe1s informaci\xf3n? 人(_ _*)\n\xa1Muchas gracias! :D\n\nPara que las cosas nos sean m\xe1s f\xe1cil a los dos: \n').concat(v.Z.FRONTEND_URL,"/producto/").concat(encodeURIComponent(n.name),"\n");return(0,i.jsxs)("section",{className:y().product_presentation,children:[(0,i.jsx)("h1",{children:n.name}),(0,i.jsxs)("h2",{children:[n.clothe_type.name," ",n.category.name," ",n.subCategory.name]}),(0,i.jsx)("div",{className:y().product_presentation_description,children:(0,i.jsx)("p",{children:n.description})}),(0,i.jsx)("div",{className:y().product_presentation_sizes,children:(0,i.jsx)("ul",{children:a.map((e,n)=>(0,i.jsx)("li",{children:e.name},n))})}),(0,i.jsx)("div",{className:y().product_presentation_colors,children:(0,i.jsx)("ul",{children:t.map((e,n)=>(0,i.jsx)("li",{style:{background:e._id===s.color._id?"var(--color-secondary)":e.color},children:e._id===s.color._id&&(0,i.jsx)(_.G,{icon:u.LEp,color:"var(--color-success)"})},n))})}),(0,i.jsx)("div",{className:y().product_presentation_price,children:(0,i.jsx)("p",{className:y().product_price,children:n.discount>0?(0,i.jsxs)(i.Fragment,{children:["ARS $",b(n.priceWithOffer),(0,i.jsxs)("span",{className:y().product_price__discount,children:["ARS ",b(n.price)]})]}):"ARS $".concat(b(n.price))})}),(0,i.jsx)("a",{target:"_blank",href:v.Z.FUKU_WHATSAPP+encodeURIComponent(o),className:y().product_presentation_actions,children:(0,i.jsx)("button",{className:"button_design",children:(0,i.jsx)("p",{children:"\xa1Quiero este producto!"})})})]})}var N=a(7990),S=a(4091),k=a.n(S);function D(e){let{title:n,children:a}=e;return(0,i.jsxs)("section",{className:k().text_section,children:[(0,i.jsx)("h2",{children:n}),a]})}var F=a(9830),P=a.n(F);function w(e){let{title:n}=e;return(0,i.jsxs)("section",{className:P().section_dtf,children:[(0,i.jsx)("h2",{children:n}),(0,i.jsx)("p",{children:"El m\xe9todo de impresi\xf3n DTF utiliza una pel\xedcula especial que se imprime con la imagen deseada y se adhiere a la prenda mediante calor y presi\xf3n. A diferencia de la serigraf\xeda y la impresi\xf3n directa sobre prendas de vestir (DTG), el DTF permite imprimir dise\xf1os detallados y complejos en una amplia variedad de colores, incluyendo tonos vibrantes y ne\xf3n. Adem\xe1s, el DTF se puede usar para imprimir en una amplia variedad de materiales, incluidos algod\xf3n, poli\xe9ster y mezclas."}),(0,i.jsx)("h3",{children:"Ventajas de la impresi\xf3n DTF"}),(0,i.jsxs)("ul",{children:[(0,i.jsxs)("li",{children:[(0,i.jsx)(_.G,{icon:u.yOZ}),"Calidad de imagen superior: El DTF produce una imagen n\xedtida y detallada que se ve casi como una impresi\xf3n fotogr\xe1fica. La pel\xedcula de impresi\xf3n se adhiere firmemente a la prenda, lo que garantiza que la imagen no se desvanezca ni se desprenda con el tiempo."]}),(0,i.jsxs)("li",{children:[(0,i.jsx)(_.G,{icon:u.yOZ}),"Colores brillantes y vibrantes: La impresi\xf3n DTF permite imprimir colores brillantes y vibrantes, incluyendo tonos fluorescentes y ne\xf3n, que no son posibles de lograr con otros m\xe9todos de impresi\xf3n. Esto se debe a que la pel\xedcula de impresi\xf3n DTF es m\xe1s densa y permite la absorci\xf3n completa de la tinta, lo que resulta en una imagen de alta calidad."]}),(0,i.jsxs)("li",{children:[(0,i.jsx)(_.G,{icon:u.yOZ}),"Durabilidad y resistencia: La impresi\xf3n DTF es muy duradera y resistente al lavado y al desgaste. La pel\xedcula de impresi\xf3n se adhiere firmemente a la prenda, lo que garantiza que la imagen no se desvanezca ni se desprenda con el tiempo. Adem\xe1s, la impresi\xf3n DTF no se agrieta ni se pela, lo que significa que la prenda se ver\xe1 como nueva durante mucho tiempo."]})]})]})}function T(e){let{product:n,sizes:a}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(D,{title:n.clothe_type.name,children:(0,i.jsx)("p",{children:n.clothe_type.description})}),(0,i.jsx)(w,{title:"Impresion DTF"}),(0,i.jsx)(N.Z,{sizes:a,title:"Tabla de talles",titleAlign:"left",padding:0})]})}var E=!0;function A(e){let{product:n}=e,[a,t]=(0,c.useState)(!1),[o,l]=(0,c.useState)([]),[d,m]=(0,c.useState)([]),[p,u]=(0,c.useState)([]);if((0,c.useEffect)(()=>{if(n.variants.length>0){let e=n.variants.find(e=>"black"===e.color);e?t(e):t(n.variants[0])}let e=n.variants.map(e=>e.color),a=e.map(e=>JSON.stringify(e)).filter((e,n,a)=>a.indexOf(e)===n).map(e=>JSON.parse(e)),i=n.variants.map(e=>e.size),s=i.filter((e,n,a)=>a.indexOf(e)===n);m(a),u(s)},[n]),(0,c.useEffect)(()=>{if(a){let e=n.variants.filter(e=>e.color._id===a.color._id),i=e.map(e=>e.size);l(i)}},[a]),a)return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(r(),{children:[(0,i.jsxs)("title",{children:[n.name," | Fuku Shop"]}),(0,i.jsx)("meta",{name:"description",content:"\xa1Bienvenidos a Fuku Shop! ✌️ Descubre nuestra amplia selecci\xf3n de ropa de estilo asi\xe1tico y anime, con dise\xf1os exclusivos y de tendencia. \uD83E\uDD73\uD83E\uDD73 Compra prendas hechas sin maltrato animal y disfruta de la moda de una forma m\xe1s consciente. \xa1Vis\xedtanos ahora y vive la experiencia Fuku Shop!"}),(0,i.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,i.jsx)("meta",{name:"keywords",content:"ropa anime, ropa japonesa, moda anime, moda japonesa, cosplay, ropa de anime para mujeres, ropa de anime para hombres, tienda de ropa anime, anime, remeras anime, sakura"}),(0,i.jsx)("meta",{property:"og:title",content:"".concat(n.name," | Fuku Shop")}),(0,i.jsx)("meta",{property:"og:description",content:"\xa1Bienvenidos a Fuku Shop! ✌️ Descubre nuestra amplia selecci\xf3n de ropa de estilo asi\xe1tico y anime, con dise\xf1os exclusivos y de tendencia. \uD83E\uDD73\uD83E\uDD73"}),(0,i.jsx)("meta",{property:"og:image",content:a.image}),(0,i.jsx)("link",{rel:"canonical",href:"https://fukushop.com.ar/".concat(n.name.replaceAll(" ","_"))})]}),(0,i.jsxs)("main",{className:"jsx-16ac772962a0141d",children:[(0,i.jsxs)("section",{className:"jsx-16ac772962a0141d product",children:[(0,i.jsx)(g,{variant:a,product:n}),(0,i.jsx)(z,{product:n,variant:a,sizes:o,colors:d})]}),(0,i.jsx)(T,{product:n,sizes:p}),(0,i.jsx)(s(),{id:"16ac772962a0141d",children:"main.jsx-16ac772962a0141d{margin-top:3rem;padding:70px var(--padding-from-borders)}.product.jsx-16ac772962a0141d{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:start;-webkit-align-items:flex-start;-moz-box-align:start;-ms-flex-align:start;align-items:flex-start}@media screen and (max-width:768px){.product.jsx-16ac772962a0141d{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column}}"})]})]})}},7990:function(e,n,a){"use strict";a.d(n,{Z:function(){return o}});var i=a(5893);a(7294);var t=a(6668),s=a.n(t);function o(e){let{title:n,sizes:a,titleAlign:t="center",padding:o="var(--padding-from-borders)"}=e;return(0,i.jsxs)("section",{className:s().sizes_table,style:{padding:o},children:[(0,i.jsx)("h2",{style:{textAlign:t},children:n}),(0,i.jsxs)("div",{className:s().table,children:[(0,i.jsx)("img",{src:"https://res.cloudinary.com/dmoqdwvnr/image/upload/v1678643458/TALLE_REMERA_OVERSIZE_xas5wz.png",alt:"Talles remera oversize"}),(0,i.jsxs)("table",{children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Talle"}),(0,i.jsx)("th",{children:"Ancho"}),(0,i.jsx)("th",{children:"Alto"}),(0,i.jsx)("th",{children:"Hombros"}),(0,i.jsx)("th",{children:"Mangas"})]})}),(0,i.jsx)("tbody",{children:a.map((e,n)=>(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:e.name}),(0,i.jsx)("td",{children:e.width}),(0,i.jsx)("td",{children:e.height}),(0,i.jsx)("td",{children:e.shoulders}),(0,i.jsx)("td",{children:e.sleeves})]},n))})]})]})]})}},2577:function(e,n){"use strict";n.Z={FUKU_WHATSAPP:"https://wa.me/543492287151?text=",API_URL:"https://fukushop.com.ar/api",FRONTEND_URL:"https://fukushop.com.ar"}},25:function(e){e.exports={images_slider:"ImagesSlider_images_slider__dseUt",principal_image_container:"ImagesSlider_principal_image_container__e_6Hm",zoom_icon:"ImagesSlider_zoom_icon__uRmjo",gallery_images_container:"ImagesSlider_gallery_images_container__nOJLq",gallery_image_container:"ImagesSlider_gallery_image_container__Ev7fs"}},5791:function(e){e.exports={product_presentation:"ProductPresentation_product_presentation__YUjKy",product_presentation_description:"ProductPresentation_product_presentation_description__fZW5A",product_presentation_sizes:"ProductPresentation_product_presentation_sizes__aLB9R",product_presentation_colors:"ProductPresentation_product_presentation_colors__leJgt",product_presentation_price:"ProductPresentation_product_presentation_price__nWx9h",product_price:"ProductPresentation_product_price__bVSuW",product_price__discount:"ProductPresentation_product_price__discount__5GKuW",product_presentation_actions:"ProductPresentation_product_presentation_actions__fiJsQ",product_presentation_action:"ProductPresentation_product_presentation_action__VVwqE"}},3282:function(e){e.exports={zoom_image_container:"ZoomImage_zoom_image_container__ktz85",close_icon:"ZoomImage_close_icon__Dbj_g",zoom_image:"ZoomImage_zoom_image__eK2Rw"}},6668:function(e){e.exports={sizes_table:"SizesTable_sizes_table__qwsXm",table:"SizesTable_table__P3UPF"}},9830:function(e){e.exports={section_dtf:"DTFText_section_dtf__Y5NJf"}},4091:function(e){e.exports={text_section:"TextSection_text_section__ccqgF"}},9008:function(e,n,a){e.exports=a(3121)}},function(e){e.O(0,[857,774,888,179],function(){return e(e.s=496)}),_N_E=e.O()}]);