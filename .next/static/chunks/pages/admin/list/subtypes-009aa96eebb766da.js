(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[573],{3:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/list/subtypes",function(){return s(5158)}])},5158:function(e,t,s){"use strict";s.r(t),s.d(t,{__N_SSG:function(){return m},default:function(){return p}});var a=s(5893),n=s(9417),i=s(9008),r=s.n(i),o=s(7294),c=s(3709),u=s(2577),l=s(7741),d=s(8433),m=!0;function p(e){let{subTypes:t}=e,[s,i]=(0,o.useState)(!1),[m,p]=(0,o.useState)({}),[f,_]=(0,o.useState)({status:"idle",message:""}),b=e=>{p(e),i(!0)},g=()=>{_({status:"loading",message:"Guardando cambios..."});let e=new FormData;e.append("name",m.name),e.append("description",m.description),m.image&&e.append("images",m.image),d.Z.put("".concat(u.Z.API_URL,"/subTypes/").concat(m._id),e).then(e=>_({status:"success",message:"\xa1Cambios guardados!"})).catch(e=>_({status:"error",message:"Error al guardar cambios."}))},h=e=>console.log(e);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r(),{children:(0,a.jsx)("title",{children:"Modificaci\xf3n | Sub-Tipos"})}),(0,a.jsxs)("main",{children:[(0,a.jsx)("h1",{children:"Lista de sub-tipos"}),s&&(0,a.jsx)(l.Z,{inputs:[{name:"name",type:"text",label:"Nombre"},{name:"description",type:"textarea",label:"Descripci\xf3n"},{name:"image",type:"file",label:"Im\xe1gen"}],title:"Editar sub tipo",editing:!0,item:s,form:m,setForm:p,setter:s,setSetter:i,submitText:"Editar",defaultValues:s,onSubmit:()=>g(),status:f}),(0,a.jsx)(c.Z,{items:t,actionsList:[{icon:n.Xcf,color:"var(--color-success)",handler:b},{icon:n.$aW,color:"var(--color-danger)",handler:h}],listItemTitle:"name"})]})]})}}},function(e){e.O(0,[433,875,774,888,179],function(){return e(e.s=3)}),_N_E=e.O()}]);