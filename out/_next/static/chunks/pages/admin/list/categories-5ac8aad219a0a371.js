(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[532],{2065:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/list/categories",function(){return a(9027)}])},9027:function(e,t,a){"use strict";a.r(t),a.d(t,{__N_SSG:function(){return m},default:function(){return g}});var s=a(5893),n=a(9417),i=a(8433),r=a(9008),c=a.n(r),o=a(7294),u=a(3709),l=a(2577),d=a(7741),m=!0;function g(e){let{categories:t}=e,[a,r]=(0,o.useState)(!1),[m,g]=(0,o.useState)({}),[p,f]=(0,o.useState)({status:"idle",message:""}),_=e=>{g(e),r(!0)},x=()=>{f({status:"loading",message:"Guardando cambios..."});let e=new FormData;e.append("name",m.name),e.append("description",m.description),m.image&&e.append("images",m.image),i.Z.put("".concat(l.Z.API_URL,"/category/").concat(m._id),e).then(e=>f({status:"success",message:"\xa1Cambios guardados!"})).catch(e=>f({status:"error",message:"Error al guardar cambios."}))},h=e=>console.log(e);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(c(),{children:(0,s.jsx)("title",{children:"Modificaci\xf3n | Categor\xedas"})}),(0,s.jsxs)("main",{children:[(0,s.jsx)("h1",{children:"Lista de categorias"}),a&&(0,s.jsx)(d.Z,{inputs:[{name:"name",type:"text",label:"Nombre"},{name:"description",type:"textarea",label:"Descripci\xf3n"},{name:"image",type:"file",label:"Im\xe1gen"}],title:"Editar categoria",editing:!0,item:a,form:m,setForm:g,setter:a,setSetter:r,submitText:"Editar",defaultValues:a,onSubmit:()=>x(),status:p}),(0,s.jsx)(u.Z,{items:t,actionsList:[{icon:n.Xcf,color:"var(--color-success)",handler:_},{icon:n.$aW,color:"var(--color-danger)",handler:h}],listItemTitle:"name"})]})]})}}},function(e){e.O(0,[433,875,774,888,179],function(){return e(e.s=2065)}),_N_E=e.O()}]);