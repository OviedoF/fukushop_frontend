(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[463],{5041:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/list/clotheTypes",function(){return a(8463)}])},8463:function(e,t,a){"use strict";a.r(t),a.d(t,{__N_SSG:function(){return m},default:function(){return p}});var n=a(5893),s=a(9417),i=a(9008),r=a.n(i),c=a(7294),o=a(3709),u=a(2577),d=a(7741),l=a(8433),m=!0;function p(e){let{types:t}=e,[a,i]=(0,c.useState)(!1),[m,p]=(0,c.useState)({}),[f,_]=(0,c.useState)({status:"idle",message:""}),g=e=>{p(e),i(!0)},h=()=>{_({status:"loading",message:"Guardando cambios..."});let e=new FormData;e.append("name",m.name),e.append("description",m.description),m.image&&e.append("images",m.image),l.Z.put("".concat(u.Z.API_URL,"/types/").concat(m._id),e).then(e=>_({status:"success",message:"\xa1Cambios guardados!"})).catch(e=>_({status:"error",message:"Error al guardar cambios."}))},x=e=>console.log(e);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r(),{children:(0,n.jsx)("title",{children:"Modificaci\xf3n | prendas"})}),(0,n.jsxs)("main",{children:[(0,n.jsx)("h1",{children:"Lista de prendas"}),a&&(0,n.jsx)(d.Z,{inputs:[{name:"name",type:"text",label:"Nombre"},{name:"description",type:"textarea",label:"Descripci\xf3n"},{name:"image",type:"file",label:"Im\xe1gen"}],title:"Editar prenda",editing:!0,item:a,form:m,setForm:p,setter:a,setSetter:i,submitText:"Editar",defaultValues:a,onSubmit:()=>h(),status:f}),(0,n.jsx)(o.Z,{items:t,actionsList:[{icon:s.Xcf,color:"var(--color-success)",handler:g},{icon:s.$aW,color:"var(--color-danger)",handler:x}],listItemTitle:"name"})]})]})}}},function(e){e.O(0,[433,875,774,888,179],function(){return e(e.s=5041)}),_N_E=e.O()}]);