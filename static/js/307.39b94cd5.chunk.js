"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[307],{839:(e,n,t)=>{t.d(n,{a:()=>o});var r=t(3239),a=t(184);function o(){return(0,a.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"},children:(0,a.jsx)(r.Z,{})})}},307:(e,n,t)=>{t.r(n),t.d(n,{default:()=>Te});var r=t(4420),a=t(3553);const o=e=>e.contacts.contacts,l=e=>e.contacts.isLoading,i=(0,a.P1)([o,e=>e.filter.value],((e,n)=>e.filter((e=>{let{name:t}=e;return t.toLowerCase().includes(n.toLowerCase())}))));var s=t(1634),c=t(960),d=t(2791),u=t(2419),p=t(3239),h=t(890),m=t(697);const x=e=>e.trim()?/^[a-zA-Z\u0430-\u044f\u0410-\u042f\s-]{1,30}$/.test(e)?null:"Check the name you entered. The name can contain only letters and special character: -":"Name is required.",g=e=>e.trim()?/^[\d()-]{1,15}$/.test(e)?null:"Check the number you entered. The number can contain only digits and special characters: () and -":"Number is required.";var f,v,b,Z,j,y,k=t(168),C=t(3457),w=t(9164),S=t(9489),z=t(4294);const A=(0,C.Z)(w.Z)(f||(f=(0,k.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 20px;\n  background-color: #fff;\n  border-radius: 8px;\n  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);\n\n  @media (max-width: 600px) {\n    width: 100%;\n    padding: 10px;\n  }\n"]))),M=((0,C.Z)(h.Z)(v||(v=(0,k.Z)(["\n  font-size: 28px;\n"]))),(0,C.Z)(h.Z)(b||(b=(0,k.Z)(["\n  color: red;\n  font-size: 14px;\n  margin-bottom: 10px;\n"]))),(0,C.Z)("form")(Z||(Z=(0,k.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 200px;\n  margin: 0 auto;\n\n  @media (max-width: 600px) {\n    width: 100%;\n  }\n"])))),P=(0,C.Z)(S.Z)(j||(j=(0,k.Z)(["\n  && {\n    width: 250px;\n  }\n"]))),D=(0,C.Z)(z.Z)(y||(y=(0,k.Z)(["\n  && {\n    width: 250px;\n  }\n"])));var I=t(184);const R=e=>{let{onAddContact:n}=e;const[t,r]=(0,d.useState)(""),[a,o]=(0,d.useState)(""),[l,i]=(0,d.useState)(!1),s={name:t,number:a},c=(e,n)=>{switch(e){case"name":r(n);break;case"number":o(n);break;default:return null}},f=()=>{r(""),o("")};return(0,I.jsxs)(A,{children:[(0,I.jsx)(h.Z,{variant:"h5",children:"Phonebook"}),(0,I.jsxs)(M,{onSubmit:async e=>{e.preventDefault();const r=x(t),o=g(a);if(r||o)console.error("Validation error:",r||o);else{i(!0);try{n(s),f()}catch(l){console.error("Error during async operation:",l)}finally{i(!1)}}},children:[(0,I.jsx)(m.Z,{sx:{marginBottom:2},children:(0,I.jsx)(P,{onChange:e=>c("name",e.target.value),value:t,type:"text",name:"name",required:!0,label:"Name",fullWidth:!0,variant:"outlined",error:!!t&&!!x(t),helperText:!!t&&x(t)})}),(0,I.jsx)(m.Z,{sx:{marginBottom:2},children:(0,I.jsx)(P,{onChange:e=>c("number",e.target.value),value:a,type:"tel",name:"number",required:!0,label:"Number",fullWidth:!0,variant:"outlined",placeholder:"099-999-99-99",error:!!a&&!!g(a),helperText:!!a&&g(a)})}),(0,I.jsx)(D,{type:"submit",variant:"outlined",endIcon:l?(0,I.jsx)(p.Z,{size:24}):(0,I.jsx)(u.Z,{}),disabled:l,children:l?"Adding...":"Add contact"})]})]})};var N=t(3400),B=t(6189);const F=(0,B.Z)((0,I.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"}),"Edit"),T=(0,B.Z)((0,I.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM8 9h8v10H8zm7.5-5-1-1h-5l-1 1H5v2h14V4z"}),"DeleteOutline");var W=t(3366),q=t(7462),E=t(3733),L=t(4419),O=t(6934),H=t(1402);const V=(0,B.Z)((0,I.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");var _=t(5878),U=t(1217);function $(e){return(0,U.ZP)("MuiAvatar",e)}(0,_.Z)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);const G=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],J=(0,O.ZP)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.root,n[t.variant],t.colorDefault&&n.colorDefault]}})((e=>{let{theme:n}=e;return{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:n.typography.fontFamily,fontSize:n.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none",variants:[{props:{variant:"rounded"},style:{borderRadius:(n.vars||n).shape.borderRadius}},{props:{variant:"square"},style:{borderRadius:0}},{props:{colorDefault:!0},style:(0,q.Z)({color:(n.vars||n).palette.background.default},n.vars?{backgroundColor:n.vars.palette.Avatar.defaultBg}:(0,q.Z)({backgroundColor:n.palette.grey[400]},n.applyDarkStyles({backgroundColor:n.palette.grey[600]})))}]}})),K=(0,O.ZP)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(e,n)=>n.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),Q=(0,O.ZP)(V,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(e,n)=>n.fallback})({width:"75%",height:"75%"});const X=d.forwardRef((function(e,n){const t=(0,H.Z)({props:e,name:"MuiAvatar"}),{alt:r,children:a,className:o,component:l="div",imgProps:i,sizes:s,src:c,srcSet:u,variant:p="circular"}=t,h=(0,W.Z)(t,G);let m=null;const x=function(e){let{crossOrigin:n,referrerPolicy:t,src:r,srcSet:a}=e;const[o,l]=d.useState(!1);return d.useEffect((()=>{if(!r&&!a)return;l(!1);let e=!0;const o=new Image;return o.onload=()=>{e&&l("loaded")},o.onerror=()=>{e&&l("error")},o.crossOrigin=n,o.referrerPolicy=t,o.src=r,a&&(o.srcset=a),()=>{e=!1}}),[n,t,r,a]),o}((0,q.Z)({},i,{src:c,srcSet:u})),g=c||u,f=g&&"error"!==x,v=(0,q.Z)({},t,{colorDefault:!f,component:l,variant:p}),b=(e=>{const{classes:n,variant:t,colorDefault:r}=e,a={root:["root",t,r&&"colorDefault"],img:["img"],fallback:["fallback"]};return(0,L.Z)(a,$,n)})(v);return m=f?(0,I.jsx)(K,(0,q.Z)({alt:r,srcSet:u,src:c,sizes:s,ownerState:v,className:b.img},i)):null!=a?a:g&&r?r[0]:(0,I.jsx)(Q,{ownerState:v,className:b.fallback}),(0,I.jsx)(J,(0,q.Z)({as:l,ownerState:v,className:(0,E.Z)(b.root,o),ref:n},h,{children:m}))}));var Y=t(5711),ee=t(2739),ne=t(2003);const te=(0,B.Z)((0,I.jsx)("path",{d:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"}),"Check");var re,ae;const oe=(0,C.Z)("form")(re||(re=(0,k.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-top: 10px;\n"]))),le=(0,C.Z)(S.Z)(ae||(ae=(0,k.Z)(["\n  margin-bottom: 15px;\n\n  &:hover {\n    background-color: #f0f0f0;\n  }\n\n  &:focus {\n    border-color: #2196f3;\n  }\n"]))),ie=e=>{let{onCloseModal:n,updateContactId:t}=e;const a=(0,r.v9)(o),l=(0,r.I0)(),i=a.filter((e=>e.id===t)),{id:s,name:u,number:p}=i[0],[f,v]=(0,d.useState)(u),[b,Z]=(0,d.useState)(p),[j,y]=(0,d.useState)(""),[k,C]=(0,d.useState)(""),w={id:s,name:f,number:b},S=(e,n)=>{switch(e){case"name":v(n),y(x(n));break;case"number":Z(n),C(g(n));break;default:return null}},A=()=>{v(""),Z(""),y(""),C("")};return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(h.Z,{variant:"h4",children:"Update contact"}),(0,I.jsxs)(oe,{onSubmit:e=>{e.preventDefault(),j||k||(l((0,c.Tk)(w)),n(),A())},children:[(0,I.jsx)(m.Z,{sx:{marginBottom:2},children:(0,I.jsx)(le,{onChange:e=>S("name",e.target.value),type:"text",name:"name",value:f,required:!0,fullWidth:!0,variant:"outlined",label:"Name",error:!!j,helperText:j})}),(0,I.jsx)(m.Z,{sx:{marginBottom:2},children:(0,I.jsx)(le,{onChange:e=>S("number",e.target.value),value:b,type:"tel",name:"number",required:!0,fullWidth:!0,variant:"outlined",label:"Number",error:!!k,helperText:k})}),(0,I.jsx)(z.Z,{type:"submit",variant:"outlined",endIcon:(0,I.jsx)(te,{}),children:"Save changes"})]})]})},se=e=>{let{onCloseModal:n,updateContactId:t}=e;return(0,d.useEffect)((()=>{const e=e=>{"Escape"===e.code&&n()};return window.addEventListener("keydown",e),()=>{window.removeEventListener("keydown",e)}}),[n]),(0,I.jsx)(Y.Z,{open:!0,onClose:n,BackdropComponent:ee.Z,BackdropProps:{timeout:500},children:(0,I.jsx)(ne.Z,{in:!0,children:(0,I.jsx)(m.Z,{sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",bgcolor:"background.paper",borderRadius:"4px",boxShadow:24,p:4},children:(0,I.jsx)(ie,{onCloseModal:n,updateContactId:t})})})})},ce=e=>{let{isOpen:n,onClose:t,onDelete:r}=e;return(0,I.jsx)(Y.Z,{open:n,onClose:t,children:(0,I.jsxs)("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",backgroundColor:"white",padding:"20px",borderRadius:"8px",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.1)",textAlign:"center"},children:[(0,I.jsx)(h.Z,{variant:"h6",gutterBottom:!0,children:"Delete Contact"}),(0,I.jsx)(h.Z,{variant:"body1",id:"simple-modal-description",children:"Are you sure you want to delete this contact?"}),(0,I.jsx)(z.Z,{variant:"contained",color:"primary",style:{marginRight:"10px"},onClick:r,children:"Delete"}),(0,I.jsx)(z.Z,{variant:"outlined",color:"primary",onClick:t,children:"Cancel"})]})})};var de,ue,pe,he,me=t(8445),xe=t(7225);const ge=me.ZP.div(de||(de=(0,k.Z)(["\n  margin-top: 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),fe=(0,me.ZP)(xe.Z)(ue||(ue=(0,k.Z)(["\n  list-style: none;\n  padding: 0;\n  margin: 0;\n"]))),ve=(0,me.ZP)("li")(pe||(pe=(0,k.Z)(["\n  background-color: #ffffff;\n  border: 1px solid #e0e0e0;\n  border-radius: 8px;\n  padding: 10px;\n  margin-bottom: 10px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  &:hover {\n    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);\n  }\n"]))),be=(0,me.ZP)(h.Z)(he||(he=(0,k.Z)(["\n  font-size: 18px;\n  border: 1px solid #e0e0e0;\n  border-radius: 8px;\n  background-color: #ffffff;\n"]))),Ze=()=>{const[e,n]=(0,d.useState)(!1),[t,a]=(0,d.useState)(!1),[l,s]=(0,d.useState)(null),u=(0,r.I0)(),p=(0,r.v9)(o),m=(0,r.v9)(i);return(0,I.jsxs)(ge,{children:[!p.length&&(0,I.jsx)(be,{children:"There are no contacts"}),m.length>0?(0,I.jsx)(fe,{children:m.map((e=>{let{name:t,number:r,id:o}=e;return(0,I.jsxs)(ve,{children:[(0,I.jsx)(X,{sx:{width:40,height:40,backgroundColor:"#2196f3"},children:t.charAt(0).toUpperCase()}),(0,I.jsx)("div",{children:(0,I.jsxs)(h.Z,{variant:"body1",children:[t,"-",r]})}),(0,I.jsx)(N.Z,{onClick:()=>(e=>{s(e),n(!0)})(o),size:"small",color:"primary",children:(0,I.jsx)(F,{})}),(0,I.jsx)(N.Z,{onClick:()=>(e=>{s(e),a(!0)})(o),size:"small",color:"error",children:(0,I.jsx)(T,{})})]},o)}))}):p.length>0&&(0,I.jsx)(be,{children:"Nothing was found"}),e&&(0,I.jsx)(se,{onCloseModal:()=>{n(!1)},updateContactId:l}),t&&(0,I.jsx)(ce,{isOpen:t,onClose:()=>{a(!1)},onDelete:()=>{u((0,c._f)(l)),a(!1)}})]})};var je;const ye=(0,C.Z)(S.Z)(je||(je=(0,k.Z)(["\n  && {\n    display: block;\n    margin: 0 auto;\n    margin-bottom: 15px;\n    width: 300px;\n  }\n"]))),ke=e=>{let{onChangeFilter:n}=e;return(0,I.jsx)(ye,{label:"Search contacts",variant:"standard",onChange:e=>n(e),type:"text",name:"filter",fullWidth:!0,margin:"normal"})};var Ce,we;const Se=me.ZP.h2(Ce||(Ce=(0,k.Z)(["\n  margin-bottom: 15px;\n  \n  text-align: center;\n"]))),ze=me.ZP.section(we||(we=(0,k.Z)(["\n  margin: 15px auto;\n"]))),Ae=e=>{let{title:n,children:t}=e;return(0,I.jsxs)(ze,{children:[(0,I.jsx)(Se,{children:n}),(0,I.jsx)("div",{children:t})]})};var Me=t(839),Pe=t(6199);const De=(e,n)=>(0,q.Z)({WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box",WebkitTextSizeAdjust:"100%"},n&&!e.vars&&{colorScheme:e.palette.mode}),Ie=e=>(0,q.Z)({color:(e.vars||e).palette.text.primary},e.typography.body1,{backgroundColor:(e.vars||e).palette.background.default,"@media print":{backgroundColor:(e.vars||e).palette.common.white}});const Re=function(e){const n=(0,H.Z)({props:e,name:"MuiCssBaseline"}),{children:t,enableColorScheme:r=!1}=n;return(0,I.jsxs)(d.Fragment,{children:[(0,I.jsx)(Pe.Z,{styles:e=>function(e){let n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];var t;const r={};n&&e.colorSchemes&&Object.entries(e.colorSchemes).forEach((n=>{let[t,a]=n;var o;r[e.getColorSchemeSelector(t).replace(/\s*&/,"")]={colorScheme:null==(o=a.palette)?void 0:o.mode}}));let a=(0,q.Z)({html:De(e,n),"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:e.typography.fontWeightBold},body:(0,q.Z)({margin:0},Ie(e),{"&::backdrop":{backgroundColor:(e.vars||e).palette.background.default}})},r);const o=null==(t=e.components)||null==(t=t.MuiCssBaseline)?void 0:t.styleOverrides;return o&&(a=[a,o]),a}(e,r)}),t]})};var Ne,Be=t(5985);const Fe=me.ZP.main(Ne||(Ne=(0,k.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n  max-width: 900px;\n  background: #ecf1f3; /* Light background color */\n  margin-top: 32px;\n  margin-bottom: 0;\n  margin-left: auto;\n  margin-right: auto;\n  padding: 26px 32px; /* Added padding */\n  border-radius: 6px;\n  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1); /* Adjusted box shadow */\n"]))),Te=()=>{const e=(0,r.v9)(o),n=(0,r.v9)(l),t=(0,r.I0)();return(0,I.jsxs)(Fe,{children:[(0,I.jsx)(Re,{}),(0,I.jsxs)(w.Z,{component:"main",maxWidth:"md",children:[(0,I.jsx)(Ae,{children:(0,I.jsx)(R,{onAddContact:n=>{const r=e.find((e=>{let{name:t}=e;return t===n.name}));r?Be.Am.info('"'.concat(r.name,'" is already in contacts')):t((0,c.el)(n))}})}),(0,I.jsxs)(Ae,{children:[(0,I.jsx)(ke,{onChangeFilter:e=>{t((0,s.a)(e.target.value))}}),(0,I.jsx)(Ze,{})]}),n&&(0,I.jsx)(Me.a,{})]})]})}},2419:(e,n,t)=>{var r=t(4836);n.Z=void 0;var a=r(t(5649)),o=t(184);n.Z=(0,a.default)((0,o.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"}),"Add")}}]);
//# sourceMappingURL=307.39b94cd5.chunk.js.map