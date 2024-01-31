"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[750],{839:(e,n,t)=>{t.d(n,{a:()=>o});var r=t(3239),a=t(184);function o(){return(0,a.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"},children:(0,a.jsx)(r.Z,{})})}},7750:(e,n,t)=>{t.r(n),t.d(n,{default:()=>Te});var r=t(168),a=t(2791),o=t(4420),i=t(3553);const l=e=>e.contacts.contacts,s=e=>e.contacts.isLoading,c=(0,i.P1)([l,e=>e.filter.value],((e,n)=>e.filter((e=>{let{name:t}=e;return t.toLowerCase().includes(n.toLowerCase())}))));var d=t(1634),u=t(960),h=t(2419),m=t(3239),p=t(890),x=t(697);const g=e=>e.trim()?/^[a-zA-Z\u0430-\u044f\u0410-\u042f\s-]{1,30}$/.test(e)?null:"Check the name you entered. The name can contain only letters and special character: -":"Name is required.",f=e=>e.trim()?/^[\d()-]{1,15}$/.test(e)?null:"Check the number you entered. The number can contain only digits and special characters: () and -":"Number is required.";var v,b,Z,j,y,k,w=t(3457),C=t(9164),S=t(8383),z=t(4294);const P=(0,w.Z)(C.Z)(v||(v=(0,r.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 20px;\n  background-color: #fff;\n  border-radius: 8px;\n  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);\n\n  @media (max-width: 600px) {\n    width: 100%;\n    padding: 10px;\n  }\n"]))),M=((0,w.Z)(p.Z)(b||(b=(0,r.Z)(["\n  font-size: 28px;\n"]))),(0,w.Z)(p.Z)(Z||(Z=(0,r.Z)(["\n  color: red;\n  font-size: 14px;\n  margin-bottom: 10px;\n"]))),(0,w.Z)("form")(j||(j=(0,r.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n\n  @media (min-width: 600px) {\n    max-width: 300px;\n    margin: 0 auto;\n  }\n"])))),A=(0,w.Z)(S.Z)(y||(y=(0,r.Z)(["\n  && {\n    width: 100%;\n\n    @media (min-width: 600px) {\n      width: 250px;\n    }\n  }\n"]))),D=(0,w.Z)(z.Z)(k||(k=(0,r.Z)(["\n  && {\n    width: 100%;\n\n    @media (min-width: 600px) {\n      width: 250px;\n    }\n  }\n"])));var I=t(184);const T=e=>{let{onAddContact:n}=e;const[t,r]=(0,a.useState)(""),[o,i]=(0,a.useState)(""),[l,s]=(0,a.useState)(!1),c={name:t,number:o},d=(e,n)=>{switch(e){case"name":r(n);break;case"number":i(n);break;default:return null}},u=()=>{r(""),i("")};return(0,I.jsxs)(P,{children:[(0,I.jsx)(p.Z,{variant:"h5",children:"Phonebook"}),(0,I.jsxs)(M,{onSubmit:async e=>{e.preventDefault();const r=g(t),a=f(o);if(r||a)console.error("Validation error:",r||a);else{s(!0);try{n(c),u()}catch(i){console.error("Error during async operation:",i)}finally{s(!1)}}},children:[(0,I.jsx)(x.Z,{sx:{marginBottom:2},children:(0,I.jsx)(A,{onChange:e=>d("name",e.target.value),value:t,type:"text",name:"name",required:!0,label:"Name",fullWidth:!0,variant:"outlined",error:!!t&&!!g(t),helperText:!!t&&g(t)})}),(0,I.jsx)(x.Z,{sx:{marginBottom:2},children:(0,I.jsx)(A,{onChange:e=>d("number",e.target.value),value:o,type:"tel",name:"number",required:!0,label:"Number",fullWidth:!0,variant:"outlined",error:!!o&&!!f(o),helperText:!!o&&f(o)})}),(0,I.jsx)(D,{type:"submit",variant:"outlined",endIcon:l?(0,I.jsx)(m.Z,{size:24}):(0,I.jsx)(h.Z,{}),disabled:l,children:l?"Adding...":"Add contact"})]})]})};var R=t(3400),B=t(6189);const N=(0,B.Z)((0,I.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"}),"Edit"),W=(0,B.Z)((0,I.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM8 9h8v10H8zm7.5-5-1-1h-5l-1 1H5v2h14V4z"}),"DeleteOutline");var F=t(3366),E=t(7462),q=t(3733),O=t(4419),L=t(6934),H=t(1402);const V=(0,B.Z)((0,I.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");var _=t(5878),U=t(1217);function $(e){return(0,U.ZP)("MuiAvatar",e)}(0,_.Z)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);const G=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],J=(0,L.ZP)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.root,n[t.variant],t.colorDefault&&n.colorDefault]}})((e=>{let{theme:n}=e;return{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:n.typography.fontFamily,fontSize:n.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none",variants:[{props:{variant:"rounded"},style:{borderRadius:(n.vars||n).shape.borderRadius}},{props:{variant:"square"},style:{borderRadius:0}},{props:{colorDefault:!0},style:(0,E.Z)({color:(n.vars||n).palette.background.default},n.vars?{backgroundColor:n.vars.palette.Avatar.defaultBg}:(0,E.Z)({backgroundColor:n.palette.grey[400]},n.applyDarkStyles({backgroundColor:n.palette.grey[600]})))}]}})),K=(0,L.ZP)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(e,n)=>n.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),Q=(0,L.ZP)(V,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(e,n)=>n.fallback})({width:"75%",height:"75%"});const X=a.forwardRef((function(e,n){const t=(0,H.Z)({props:e,name:"MuiAvatar"}),{alt:r,children:o,className:i,component:l="div",imgProps:s,sizes:c,src:d,srcSet:u,variant:h="circular"}=t,m=(0,F.Z)(t,G);let p=null;const x=function(e){let{crossOrigin:n,referrerPolicy:t,src:r,srcSet:o}=e;const[i,l]=a.useState(!1);return a.useEffect((()=>{if(!r&&!o)return;l(!1);let e=!0;const a=new Image;return a.onload=()=>{e&&l("loaded")},a.onerror=()=>{e&&l("error")},a.crossOrigin=n,a.referrerPolicy=t,a.src=r,o&&(a.srcset=o),()=>{e=!1}}),[n,t,r,o]),i}((0,E.Z)({},s,{src:d,srcSet:u})),g=d||u,f=g&&"error"!==x,v=(0,E.Z)({},t,{colorDefault:!f,component:l,variant:h}),b=(e=>{const{classes:n,variant:t,colorDefault:r}=e,a={root:["root",t,r&&"colorDefault"],img:["img"],fallback:["fallback"]};return(0,O.Z)(a,$,n)})(v);return p=f?(0,I.jsx)(K,(0,E.Z)({alt:r,srcSet:u,src:d,sizes:c,ownerState:v,className:b.img},s)):null!=o?o:g&&r?r[0]:(0,I.jsx)(Q,{ownerState:v,className:b.fallback}),(0,I.jsx)(J,(0,E.Z)({as:l,ownerState:v,className:(0,q.Z)(b.root,i),ref:n},m,{children:p}))}));var Y=t(5711),ee=t(2739),ne=t(627);const te=(0,B.Z)((0,I.jsx)("path",{d:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"}),"Check");var re,ae;const oe=(0,w.Z)("form")(re||(re=(0,r.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-top: 10px;\n"]))),ie=(0,w.Z)(S.Z)(ae||(ae=(0,r.Z)(["\n  margin-bottom: 15px;\n\n  &:hover {\n    background-color: #f0f0f0;\n  }\n\n  &:focus {\n    border-color: #2196f3;\n  }\n"]))),le=e=>{let{onCloseModal:n,updateContactId:t}=e;const r=(0,o.v9)(l),i=(0,o.I0)(),s=r.filter((e=>e.id===t)),{id:c,name:d,number:h}=s[0],[m,v]=(0,a.useState)(d),[b,Z]=(0,a.useState)(h),[j,y]=(0,a.useState)(""),[k,w]=(0,a.useState)(""),C={id:c,name:m,number:b},S=(e,n)=>{switch(e){case"name":v(n),y(g(n));break;case"number":Z(n),w(f(n));break;default:return null}},P=()=>{v(""),Z(""),y(""),w("")};return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(p.Z,{variant:"h4",children:"Update contact"}),(0,I.jsxs)(p.Z,{vatiant:"h6",children:["Edit contact with name ",m]}),(0,I.jsxs)(oe,{onSubmit:e=>{e.preventDefault(),j||k||(i((0,u.Tk)(C)),n(),P())},children:[(0,I.jsx)(x.Z,{sx:{marginBottom:2},children:(0,I.jsx)(ie,{onChange:e=>S("name",e.target.value),type:"text",name:"name",value:m,required:!0,fullWidth:!0,variant:"outlined",label:"Name",error:!!j,helperText:j})}),(0,I.jsx)(x.Z,{sx:{marginBottom:2},children:(0,I.jsx)(ie,{onChange:e=>S("number",e.target.value),value:b,type:"tel",name:"number",required:!0,fullWidth:!0,variant:"outlined",label:"Number",error:!!k,helperText:k})}),(0,I.jsx)(z.Z,{type:"submit",variant:"outlined",endIcon:(0,I.jsx)(te,{}),children:"Save changes"})]})]})},se=e=>{let{onCloseModal:n,updateContactId:t}=e;return(0,a.useEffect)((()=>{const e=e=>{"Escape"===e.code&&n()};return window.addEventListener("keydown",e),()=>{window.removeEventListener("keydown",e)}}),[n]),(0,I.jsx)(Y.Z,{open:!0,onClose:n,BackdropComponent:ee.Z,BackdropProps:{timeout:500},children:(0,I.jsx)(ne.Z,{in:!0,children:(0,I.jsx)(x.Z,{sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"80%",bgcolor:"background.paper",borderRadius:"4px",boxShadow:24,p:4},children:(0,I.jsx)(le,{onCloseModal:n,updateContactId:t})})})})},ce=e=>{let{isOpen:n,onClose:t,onDelete:r}=e;return(0,I.jsx)(Y.Z,{open:n,onClose:t,children:(0,I.jsxs)("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",backgroundColor:"white",padding:"20px",borderRadius:"8px",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.1)",textAlign:"center"},children:[(0,I.jsx)(p.Z,{variant:"h6",gutterBottom:!0,children:"Delete Contact"}),(0,I.jsx)(p.Z,{variant:"body1",id:"simple-modal-description",children:"Are you sure you want to delete this contact?"}),(0,I.jsx)(z.Z,{variant:"contained",color:"primary",style:{marginRight:"10px"},onClick:r,children:"Delete"}),(0,I.jsx)(z.Z,{variant:"outlined",color:"primary",onClick:t,children:"Cancel"})]})})};var de,ue,he,me,pe=t(8445),xe=t(493);const ge=pe.ZP.div(de||(de=(0,r.Z)(["\n  margin-top: 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),fe=(0,pe.ZP)(xe.Z)(ue||(ue=(0,r.Z)(["\n  list-style: none;\n  padding: 0;\n  margin: 0;\n"]))),ve=(0,pe.ZP)("li")(he||(he=(0,r.Z)(["\n  background-color: #ffffff;\n  border: 1px solid #e0e0e0;\n  border-radius: 8px;\n  padding: 10px;\n  margin-bottom: 10px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  &:hover {\n    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);\n  }\n"]))),be=(0,pe.ZP)(p.Z)(me||(me=(0,r.Z)(["\n  font-size: 18px;\n  border: 1px solid #e0e0e0;\n  border-radius: 8px;\n  background-color: #ffffff;\n"]))),Ze=()=>{const[e,n]=(0,a.useState)(!1),[t,r]=(0,a.useState)(!1),[i,s]=(0,a.useState)(null),d=(0,o.I0)(),h=(0,o.v9)(l),m=(0,o.v9)(c);return(0,I.jsxs)(ge,{children:[!h.length&&(0,I.jsx)(be,{children:"There are no contacts"}),m.length>0?(0,I.jsx)(fe,{children:m.map((e=>{let{name:t,number:a,id:o}=e;return(0,I.jsxs)(ve,{children:[(0,I.jsx)(X,{sx:{width:40,height:40,backgroundColor:"#2196f3"},children:t.charAt(0).toUpperCase()}),(0,I.jsx)("div",{children:(0,I.jsxs)(p.Z,{variant:"body1",children:[t,"-",a]})}),(0,I.jsx)(R.Z,{onClick:()=>(e=>{s(e),n(!0)})(o),size:"small",color:"primary",children:(0,I.jsx)(N,{})}),(0,I.jsx)(R.Z,{onClick:()=>(e=>{s(e),r(!0)})(o),size:"small",color:"error",children:(0,I.jsx)(W,{})})]},o)}))}):h.length>0&&(0,I.jsx)(be,{children:"There are no contacts."}),e&&(0,I.jsx)(se,{onCloseModal:()=>{n(!1)},updateContactId:i}),t&&(0,I.jsx)(ce,{isOpen:t,onClose:()=>{r(!1)},onDelete:()=>{d((0,u._f)(i)),r(!1)}})]})};var je;const ye=(0,w.Z)(S.Z)(je||(je=(0,r.Z)(["\n  && {\n    display: block;\n    margin: 0 auto;\n    margin-bottom: 15px;\n    width: 300px;\n\n    @media (max-width: 600px) {\n      width: 100%;\n    }\n  }\n"]))),ke=e=>{let{onChangeFilter:n}=e;return(0,I.jsx)(ye,{label:"Search contacts",variant:"standard",onChange:e=>n(e),type:"text",name:"filter",fullWidth:!0,margin:"normal"})};var we=t(839),Ce=t(1540);const Se=(e,n)=>(0,E.Z)({WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box",WebkitTextSizeAdjust:"100%"},n&&!e.vars&&{colorScheme:e.palette.mode}),ze=e=>(0,E.Z)({color:(e.vars||e).palette.text.primary},e.typography.body1,{backgroundColor:(e.vars||e).palette.background.default,"@media print":{backgroundColor:(e.vars||e).palette.common.white}});const Pe=function(e){const n=(0,H.Z)({props:e,name:"MuiCssBaseline"}),{children:t,enableColorScheme:r=!1}=n;return(0,I.jsxs)(a.Fragment,{children:[(0,I.jsx)(Ce.Z,{styles:e=>function(e){let n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];var t;const r={};n&&e.colorSchemes&&Object.entries(e.colorSchemes).forEach((n=>{let[t,a]=n;var o;r[e.getColorSchemeSelector(t).replace(/\s*&/,"")]={colorScheme:null==(o=a.palette)?void 0:o.mode}}));let a=(0,E.Z)({html:Se(e,n),"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:e.typography.fontWeightBold},body:(0,E.Z)({margin:0},ze(e),{"&::backdrop":{backgroundColor:(e.vars||e).palette.background.default}})},r);const o=null==(t=e.components)||null==(t=t.MuiCssBaseline)?void 0:t.styleOverrides;return o&&(a=[a,o]),a}(e,r)}),t]})};var Me,Ae=t(1889),De=t(5985);const Ie=(0,pe.ZP)(C.Z)(Me||(Me=(0,r.Z)(["\n  background-color: #f0f0f0;\n  border-radius: 8px;\n  padding: 20px;\n  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);\n\n  @media (max-width: 600px) {\n    padding: 10px;\n  }\n"]))),Te=()=>{const e=(0,o.v9)(l),n=(0,o.v9)(s),t=(0,o.I0)();return(0,I.jsxs)(Ie,{component:"main",maxWidth:"md",style:{marginTop:"15px"},children:[(0,I.jsx)(Pe,{}),(0,I.jsxs)(Ae.ZP,{container:!0,spacing:2,style:{marginTop:"15px"},children:[(0,I.jsx)(Ae.ZP,{item:!0,xs:12,children:(0,I.jsx)(T,{onAddContact:n=>{const r=e.find((e=>{let{name:t}=e;return t===n.name}));r?De.Am.info('"'.concat(r.name,'" is already in contacts')):t((0,u.el)(n))}})}),(0,I.jsx)(Ae.ZP,{item:!0,xs:12,children:(0,I.jsx)(ke,{onChangeFilter:e=>{t((0,d.a)(e.target.value))}})}),(0,I.jsx)(Ae.ZP,{item:!0,xs:12,children:(0,I.jsx)(C.Z,{maxWidth:"sm",style:{paddingTop:"20px",paddingBottom:"20px"},children:(0,I.jsx)(Ze,{})})}),n&&(0,I.jsx)(Ae.ZP,{item:!0,xs:12,children:(0,I.jsx)(we.a,{})})]})]})}},2419:(e,n,t)=>{var r=t(4836);n.Z=void 0;var a=r(t(5649)),o=t(184);n.Z=(0,a.default)((0,o.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"}),"Add")}}]);
//# sourceMappingURL=750.808a7de7.chunk.js.map