import{r as o,ad as F,ae as re,af as V,ag as Ae,ah as K,ai as Re,aj as qe,ak as Pe,al as G,am as we,an as J,ao as De,ap as _e,aq as Te,j as r,L as _,g as te,h as g,c as W,a1 as ne,a2 as se,m as ae,C as Q,R as E,p as c,ar as oe,as as le,n as ce,q as R,O as T,a3 as ie,B as ue,o as me,f as de,k as Be,a4 as Me,_ as $e,Y as He,Z as k,a0 as ze}from"./index-CTSUDM6F.js";import{t as D}from"./index-CFAwDCnn.js";import{u as pe,R as he}from"./useOtpModal-Bin5lSGu.js";import"./index-C0e1T4uR.js";const B=e=>{let{children:s}=e;const{getPrefixCls:a}=o.useContext(F),t=a("breadcrumb");return o.createElement("li",{className:`${t}-separator`,"aria-hidden":"true"},s===""?s:s||"/")};B.__ANT_BREADCRUMB_SEPARATOR=!0;var Le=function(e,s){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&s.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(e);n<t.length;n++)s.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(e,t[n])&&(a[t[n]]=e[t[n]]);return a};function ke(e,s){if(e.title===void 0||e.title===null)return null;const a=Object.keys(s).join("|");return typeof e.title=="object"?e.title:String(e.title).replace(new RegExp(`:(${a})`,"g"),(t,n)=>s[n]||t)}function be(e,s,a,t){if(a==null)return null;const{className:n,onClick:i}=s,u=Le(s,["className","onClick"]),h=Object.assign(Object.assign({},re(u,{data:!0,aria:!0})),{onClick:i});return t!==void 0?o.createElement("a",Object.assign({},h,{className:V(`${e}-link`,n),href:t}),a):o.createElement("span",Object.assign({},h,{className:V(`${e}-link`,n)}),a)}function Ve(e,s){return(t,n,i,u,h)=>{if(s)return s(t,n,i,u);const j=ke(t,n);return be(e,t,j,h)}}var X=function(e,s){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&s.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(e);n<t.length;n++)s.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(e,t[n])&&(a[t[n]]=e[t[n]]);return a};const ge=e=>{const{prefixCls:s,separator:a="/",children:t,menu:n,overlay:i,dropdownProps:u,href:h}=e,v=(f=>{if(n||i){const m=Object.assign({},u);if(n){const N=n||{},{items:d}=N,b=X(N,["items"]);m.menu=Object.assign(Object.assign({},b),{items:d?.map((y,x)=>{var{key:S,title:O,label:l,path:p}=y,M=X(y,["key","title","label","path"]);let q=l??O;return p&&(q=o.createElement("a",{href:`${h}${p}`},q)),Object.assign(Object.assign({},M),{key:S??x,label:q})})})}else i&&(m.overlay=i);return o.createElement(Ae,Object.assign({placement:"bottom"},m),o.createElement("span",{className:`${s}-overlay-link`},f,o.createElement(K,null)))}return f})(t);return v!=null?o.createElement(o.Fragment,null,o.createElement("li",null,v),a&&o.createElement(B,null,a)):null},fe=e=>{const{prefixCls:s,children:a,href:t}=e,n=X(e,["prefixCls","children","href"]),{getPrefixCls:i}=o.useContext(F),u=i("breadcrumb",s);return o.createElement(ge,Object.assign({},n,{prefixCls:u}),be(u,n,a,t))};fe.__ANT_BREADCRUMB_ITEM=!0;const Xe=fe,Fe=e=>{const{componentCls:s,iconCls:a,calc:t}=e;return{[s]:Object.assign(Object.assign({},Pe(e)),{color:e.itemColor,fontSize:e.fontSize,[a]:{fontSize:e.iconFontSize},ol:{display:"flex",flexWrap:"wrap",margin:0,padding:0,listStyle:"none"},a:Object.assign({color:e.linkColor,transition:`color ${e.motionDurationMid}`,padding:`0 ${G(e.paddingXXS)}`,borderRadius:e.borderRadiusSM,height:e.fontHeight,display:"inline-block",marginInline:t(e.marginXXS).mul(-1).equal(),"&:hover":{color:e.linkHoverColor,backgroundColor:e.colorBgTextHover}},we(e)),"li:last-child":{color:e.lastItemColor},[`${s}-separator`]:{marginInline:e.separatorMargin,color:e.separatorColor},[`${s}-link`]:{[`
          > ${a} + span,
          > ${a} + a
        `]:{marginInlineStart:e.marginXXS}},[`${s}-overlay-link`]:{borderRadius:e.borderRadiusSM,height:e.fontHeight,display:"inline-block",padding:`0 ${G(e.paddingXXS)}`,marginInline:t(e.marginXXS).mul(-1).equal(),[`> ${a}`]:{marginInlineStart:e.marginXXS,fontSize:e.fontSizeIcon},"&:hover":{color:e.linkHoverColor,backgroundColor:e.colorBgTextHover,a:{color:e.linkHoverColor}},a:{"&:hover":{backgroundColor:"transparent"}}},[`&${e.componentCls}-rtl`]:{direction:"rtl"}})}},Ke=e=>({itemColor:e.colorTextDescription,lastItemColor:e.colorText,iconFontSize:e.fontSize,linkColor:e.colorTextDescription,linkHoverColor:e.colorText,separatorColor:e.colorTextDescription,separatorMargin:e.marginXS}),We=Re("Breadcrumb",e=>{const s=qe(e,{});return Fe(s)},Ke);var ee=function(e,s){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&s.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(e);n<t.length;n++)s.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(e,t[n])&&(a[t[n]]=e[t[n]]);return a};function Qe(e){const{breadcrumbName:s,children:a}=e,t=ee(e,["breadcrumbName","children"]),n=Object.assign({title:s},t);return a&&(n.menu={items:a.map(i=>{var{breadcrumbName:u}=i,h=ee(i,["breadcrumbName"]);return Object.assign(Object.assign({},h),{title:u})})}),n}function Ue(e,s){return o.useMemo(()=>e||(s?s.map(Qe):null),[e,s])}var Ye=function(e,s){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&s.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(e);n<t.length;n++)s.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(e,t[n])&&(a[t[n]]=e[t[n]]);return a};const Ze=(e,s)=>{if(s===void 0)return s;let a=(s||"").replace(/^\//,"");return Object.keys(e).forEach(t=>{a=a.replace(`:${t}`,e[t])}),a},C=e=>{const{prefixCls:s,separator:a="/",style:t,className:n,rootClassName:i,routes:u,items:h,children:j,itemRender:v,params:f={}}=e,m=Ye(e,["prefixCls","separator","style","className","rootClassName","routes","items","children","itemRender","params"]),{getPrefixCls:N,direction:d,breadcrumb:b}=o.useContext(F);let y;const x=N("breadcrumb",s),[S,O,l]=We(x),p=Ue(h,u),M=Ve(x,v);if(p&&p.length>0){const A=[],P=h||u;y=p.map((I,w)=>{const{path:Ce,key:$,type:ve,menu:U,overlay:Y,onClick:Se,className:Ne,separator:Oe,dropdownProps:Ie}=I,H=Ze(f,Ce);H!==void 0&&A.push(H);const Z=$??w;if(ve==="separator")return o.createElement(B,{key:Z},Oe);const z={},Ee=w===p.length-1;U?z.menu=U:Y&&(z.overlay=Y);let{href:L}=I;return A.length&&H!==void 0&&(L=`#/${A.join("/")}`),o.createElement(ge,Object.assign({key:Z},z,re(I,{data:!0,aria:!0}),{className:Ne,dropdownProps:Ie,href:L,separator:Ee?"":a,onClick:Se,prefixCls:x}),M(I,f,P,A,L))})}else if(j){const A=J(j).length;y=J(j).map((P,I)=>{if(!P)return P;const w=I===A-1;return De(P,{separator:w?"":a,key:I})})}const q=V(x,b?.className,{[`${x}-rtl`]:d==="rtl"},n,i,O,l),ye=Object.assign(Object.assign({},b?.style),t);return S(o.createElement("nav",Object.assign({className:q,style:ye},m),o.createElement("ol",null,y)))};C.Item=Xe;C.Separator=B;var Ge={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 00-44.4 0L77.5 505a63.9 63.9 0 00-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0018.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"}}]},name:"home",theme:"outlined"},Je=function(s,a){return o.createElement(_e,Te({},s,{ref:a,icon:Ge}))},xe=o.forwardRef(Je);const je=[{key:"1",label:r.jsx(_,{to:"/teller-service/cash-deposit",children:"Cash Deposit"})},{key:"2",label:r.jsx(_,{to:"/teller-service/cheque-deposit",children:"Cheque Deposit"})}],er=te().shape({accountNumber:g(),depositAccountNumber:g().required("Deposit account number is required."),depositAccountName:g().required("Deposit account holder name is required."),currency:g().required("Currency is required."),branch:g().required("Branch is required."),phone:g().required("Mobile number is required.")}),rr=te().shape({accountNumber:g(),depositAccountNumber:g().required("Deposit account number is required."),depositAccountName:g().required("Deposit account holder name is required."),currency:g().required("Currency is required."),branch:g().required("Branch is required."),phone:g().required("Mobile number is required.")}),tr="6LeWQqgZAAAAAMukTuTY7rFn2HDG-BIwSRffXtFM",nr=()=>{const e=W(),[s,a]=ne.useMessage(),[t,n]=o.useState(null),[i,u]=o.useState(null),[h,j]=o.useState(null),[v,{isLoading:f}]=se(),{control:m,handleSubmit:N,formState:{errors:d}}=ae({defaultValues:{},resolver:me(er)}),b=l=>{n(l)},y=l=>{if(!t){s.error("Please complete the reCAPTCHA to submit the form.");return}l.accountNumber=l.depositAccountNumber,v({accountName:l.depositAccountName,accountNumber:l.accountNumber,phone:l.phone,prop_values:{...l},product:"TELLER_SERVICE",service_type:"CASH_DEPOSIT"}).unwrap().then(p=>{u(p.data.service_type),j(p.data.ref_number),S()}).catch(p=>{de(p)})},x=()=>{e("/")},{showModal:S,OtpModalComponent:O}=pe({serviceId:i,refNumber:h,handleServiceSubmission:x});return r.jsxs(r.Fragment,{children:[a,r.jsxs(Q,{width:"sm",children:[r.jsx(E,{children:r.jsx(c,{xs:24,style:{marginBottom:"2rem"},children:r.jsxs(C,{children:[r.jsx(C.Item,{children:r.jsx(_,{to:"/",children:r.jsx(xe,{})})}),r.jsx(C.Item,{children:r.jsx(oe,{menu:{items:je},children:r.jsx("a",{href:"#",onClick:l=>l.preventDefault(),children:r.jsxs(le,{children:["Teller Services",r.jsx(K,{})]})})})}),r.jsx(C.Item,{children:"Cash Deposit"})]})})}),r.jsx(E,{children:r.jsx(c,{xs:24,children:r.jsx(ce,{title:"Cash Deposit",children:r.jsxs("form",{onSubmit:N(y),children:[r.jsxs(E,{gutter:30,children:[r.jsx(c,{xs:24,md:8,children:r.jsx(R,{label:"Deposit Account Number",name:"depositAccountNumber",control:m,error:d.depositAccountNumber?.message??"",placeholder:"Enter deposit account number",size:"large",required:!0})}),r.jsx(c,{xs:24,md:8,children:r.jsx(R,{label:"Deposit Account Holder's Name",name:"depositAccountName",control:m,error:d.depositAccountName?.message??"",placeholder:"Enter deposit account holder's name",size:"large",required:!0})}),r.jsx(c,{xs:24,md:8,children:r.jsx(R,{label:"Mobile Number",name:"phone",control:m,error:d.phone?.message??"",placeholder:"Enter you registered mobile number",size:"large",required:!0})}),r.jsx(c,{xs:24,md:8,children:r.jsx(T,{options:[{label:"NPR",value:"npr"}],label:"Currency",name:"currency",control:m,error:d.currency?.message??"",placeholder:"Please select currency",size:"large",required:!0})}),r.jsx(c,{xs:24,md:8,children:r.jsx(T,{options:ie,label:"Branch",name:"branch",control:m,error:d.branch?.message??"",placeholder:"Branch",size:"large",required:!0,showSearch:!0,fieldNames:{label:"branchName",value:"id"}})}),r.jsx(c,{xs:24,children:r.jsx(he,{sitekey:tr,onChange:b})})]}),r.jsx(c,{xs:24,style:{marginTop:"1rem"},children:r.jsx(ue,{type:"primary",htmlType:"submit",size:"large",loading:f,disabled:f,children:"Submit"})})]})})})})]}),O]})},sr="6LeWQqgZAAAAAMukTuTY7rFn2HDG-BIwSRffXtFM",ar=()=>{const e=W(),[s,a]=ne.useMessage(),[t,n]=o.useState(null),[i,u]=o.useState(null),[h,j]=o.useState(null),[v,{isLoading:f}]=se(),{control:m,handleSubmit:N,formState:{errors:d}}=ae({defaultValues:{},resolver:me(rr)}),b=l=>{n(l)},y=l=>{if(!t){s.error("Please complete the reCAPTCHA to submit the form.");return}l.accountNumber=l.depositAccountNumber,v({accountName:l.depositAccountName,accountNumber:l.accountNumber,phone:l.phone,prop_values:{...l},product:"TELLER_SERVICE",service_type:"CHEQUE_DEPOSIT"}).unwrap().then(p=>{u(p.data.service_type),j(p.data.ref_number),S()}).catch(p=>{de(p)})},x=()=>{e("/")},{showModal:S,OtpModalComponent:O}=pe({serviceId:i,refNumber:h,handleServiceSubmission:x});return r.jsxs(r.Fragment,{children:[a,r.jsxs(Q,{width:"sm",children:[r.jsx(E,{children:r.jsx(c,{xs:24,style:{marginBottom:"2rem"},children:r.jsxs(C,{children:[r.jsx(C.Item,{children:r.jsx(_,{to:"/",children:r.jsx(xe,{})})}),r.jsx(C.Item,{children:r.jsx(oe,{menu:{items:je},children:r.jsx("a",{href:"#",onClick:l=>l.preventDefault(),children:r.jsxs(le,{children:["Teller Services",r.jsx(K,{})]})})})}),r.jsx(C.Item,{children:"Cheque Deposit"})]})})}),r.jsx(E,{children:r.jsx(c,{xs:24,children:r.jsx(ce,{title:"Cheque Deposit",children:r.jsxs("form",{onSubmit:N(y),children:[r.jsxs(E,{gutter:30,children:[r.jsx(c,{xs:24,md:8,children:r.jsx(R,{label:"Deposit Account Number",name:"depositAccountNumber",control:m,error:d.depositAccountNumber?.message??"",placeholder:"Enter deposit account number",size:"large",required:!0})}),r.jsx(c,{xs:24,md:8,children:r.jsx(R,{label:"Deposit Account Holder's Name",name:"depositAccountName",control:m,error:d.depositAccountName?.message??"",placeholder:"Enter deposit account holder's name",size:"large",required:!0})}),r.jsx(c,{xs:24,md:8,children:r.jsx(R,{label:"Mobile Number",name:"phone",control:m,error:d.phone?.message??"",placeholder:"Enter you registered mobile number",size:"large",required:!0})}),r.jsx(c,{xs:24,md:8,children:r.jsx(T,{options:[{label:"NPR",value:"npr"}],label:"Currency",name:"currency",control:m,error:d.currency?.message??"",placeholder:"Please select currency",size:"large",required:!0})}),r.jsx(c,{xs:24,md:8,children:r.jsx(T,{options:ie,label:"Branch",name:"branch",control:m,error:d.branch?.message??"",placeholder:"Branch",size:"large",required:!0,showSearch:!0,fieldNames:{label:"branchName",value:"id"}})}),r.jsx(c,{xs:24,children:r.jsx(he,{sitekey:sr,onChange:b})})]}),r.jsx(c,{xs:24,style:{marginTop:"1rem"},children:r.jsx(ue,{type:"primary",htmlType:"submit",size:"large",loading:f,disabled:f,children:"Submit"})})]})})})})]}),O]})},ur=()=>{const e=W(),s=Be(),a=n=>{e(n)},t=D.find(n=>s.pathname.endsWith(n.link))?.link||D[0].link;return r.jsx(Q,{children:r.jsx(E,{children:r.jsx(c,{xs:24,md:24,children:r.jsx(Me,{activeKey:t,tabPosition:"left",onChange:a,items:D.map(n=>({label:r.jsxs("span",{children:[r.jsx($e,{icon:n.icon,style:{marginRight:8}}),n.title]}),key:n.link,children:r.jsxs(He,{children:[r.jsx(k,{path:"cash-deposit",element:r.jsx(nr,{})}),r.jsx(k,{path:"cheque-deposit",element:r.jsx(ar,{})}),r.jsx(k,{path:"*",element:r.jsx(ze,{to:D[0].link,replace:!0})})]})}))})})})})};export{ur as TellerRoutes};
//# sourceMappingURL=index-C-KhYPH_.js.map
