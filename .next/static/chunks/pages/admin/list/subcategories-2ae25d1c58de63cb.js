(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[700],{7014:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/list/subcategories",function(){return a(623)}])},623:function(e,t,a){"use strict";a.r(t),a.d(t,{__N_SSG:function(){return m},default:function(){return g}});var s=a(5893),n=a(9417),i=a(9008),r=a.n(i),o=a(7294),c=a(3709),u=a(2577),l=a(7741),d=a(8433),m=!0;function g(e){let{subcategories:t}=e,[a,i]=(0,o.useState)(!1),[m,g]=(0,o.useState)({}),[p,f]=(0,o.useState)({status:"idle",message:""}),_=e=>{g(e),i(!0)},b=()=>{f({status:"loading",message:"Guardando cambios..."});let e=new FormData;e.append("name",m.name),e.append("description",m.description),m.image&&e.append("images",m.image),d.Z.put("".concat(u.Z.API_URL,"/subcategories/").concat(m._id),e).then(e=>f({status:"success",message:"\xa1Cambios guardados!"})).catch(e=>f({status:"error",message:"Error al guardar cambios."}))},x=e=>console.log(e);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r(),{children:(0,s.jsx)("title",{children:"Modificaci\xf3n | Sub-Categor\xedas"})}),(0,s.jsxs)("main",{children:[(0,s.jsx)("h1",{children:"Lista de sub-categorias"}),a&&(0,s.jsx)(l.Z,{inputs:[{name:"name",type:"text",label:"Nombre"},{name:"description",type:"textarea",label:"Descripci\xf3n"},{name:"image",type:"file",label:"Im\xe1gen"}],title:"Editar SubCategoria",editing:!0,item:a,form:m,setForm:g,setter:a,setSetter:i,submitText:"Editar",defaultValues:a,onSubmit:()=>b(),status:p}),(0,s.jsx)(c.Z,{items:t,actionsList:[{icon:n.Xcf,color:"var(--color-success)",handler:_},{icon:n.$aW,color:"var(--color-danger)",handler:x}],listItemTitle:"name"})]})]})}}},function(e){e.O(0,[433,875,774,888,179],function(){return e(e.s=7014)}),_N_E=e.O()}]);