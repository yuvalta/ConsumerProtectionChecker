(this["webpackJsonpweb-consumer-checker"]=this["webpackJsonpweb-consumer-checker"]||[]).push([[0],{121:function(e,t,s){"use strict";s.r(t);var c=s(0),r=s(14),n=s.n(r),a=s(9),b=s.p+"static/media/lighthouse.96933509.png",j=s(5),i=s(26),o=s(1),l=function(){var e=Object(j.f)();return Object(o.jsxs)("div",{className:"appbar-container",children:[Object(o.jsx)("img",{src:b,className:"logo",onClick:function(){e.replace("/")}}),Object(o.jsxs)("div",{className:"appbar-buttons-container",children:[Object(o.jsx)(i.b,{className:"appbar-link",to:"/",children:Object(o.jsx)("button",{className:"appbar-button",children:"\u05d3\u05e3 \u05d4\u05d1\u05d9\u05ea"})}),Object(o.jsx)(i.b,{className:"appbar-link",to:"/#second-part",children:Object(o.jsx)("button",{className:"appbar-button",children:"\u05de\u05d9 \u05d0\u05e0\u05d7\u05e0\u05d5"})})]})]})},O=Object(c.createContext)("default website"),x=function(e){var t=e.children,s=Object(c.useState)("None"),r=Object(a.a)(s,2),n=r[0],b=r[1],j=Object(c.useState)(!1),i=Object(a.a)(j,2),l=i[0],x=i[1],u=Object(c.useState)("info"),d=Object(a.a)(u,2),p=d[0],h=d[1],m=Object(c.useState)(!1),g=Object(a.a)(m,2),f=g[0],v=g[1],N=Object(c.useState)(0),_=Object(a.a)(N,2),k=_[0],S=_[1],w=Object(c.useState)("empty"),T=Object(a.a)(w,2),C=T[0],y=T[1],D=Object(c.useState)("empty"),E=Object(a.a)(D,2),P=E[0],F=E[1],G=Object(c.useState)("empty"),U=Object(a.a)(G,2),I=U[0],R=U[1],W=Object(c.useState)("empty"),A=Object(a.a)(W,2),M=A[0],z=A[1];return Object(o.jsx)(O.Provider,{value:{website:n,setWebsite:b,openToast:l,setOpenToast:x,statusToast:p,setStatusToast:h,messageToast:f,setMessageToast:v,progress:k,setProgress:S,userEmail:C,setUserEmail:y,userFullName:P,setUserFullName:F,userPhone:I,setUserPhone:R,submitDate:M,setSubmitDate:z},children:t})},u=s(68),d=s.n(u)()("https://consumer-checker.herokuapp.com"),p=function(){var e=Object(c.useContext)(O),t=e.setOpenToast,s=e.setStatusToast,r=e.setMessageToast,n=e.setProgress;Object(c.useEffect)((function(){d.on("connect",(function(){console.log("connected")})),d.on("disconnect",(function(){console.log("disconnected")})),d.on("error",(function(e){console.log("error!"),r(e),s("error")})),d.on("final_score",(function(e){console.log(e),n(0),t(!1),r(" \u05dc\u05d9\u05e7\u05d5\u05d9\u05d9\u05dd \u05d1\u05e9\u05d5\u05d5\u05d9 \u05e9\u05dc ".concat(e))})),d.on("status_update",(function(e){var t=parseInt(e.percentages);console.log(e),n(t),r(e.phase)}))}),[]);return[function(e){t(!0),r("\u05e1\u05e8\u05d9\u05e7\u05d4 \u05d4\u05ea\u05d7\u05d9\u05dc\u05d4"),s("info"),d.emit("start_checking",e)}]},h=s(142),m="#F1F1EF",g="#1C201D",f="#71916D",v=(Object(h.a)((function(e){return{main_content:{margin:e.spacing(8),flexGrow:1},side_by_side:{alignItems:"center",display:"flex",flexDirection:"row",flexGrow:1,justifyContent:"center",alignContent:"space-around"},center:{marginTop:e.spacing(15)},root_disabled:{margin:e.spacing(5),flexGrow:1,pointerEvents:"none",opacity:"0.7"},simple_button:{margin:e.spacing(2),size:"medium",borderRadius:"50px",padding:"0 30px",height:48},root:{background:"transparent",flexGrow:1,direction:"rtl",boxShadow:"none"},buttons_header:{paddingTop:e.spacing(2),alignItems:"center",background:"transparent",flexGrow:1,direction:"rtl",boxShadow:"none"},button_dark_text:{flexGrow:1,color:g},button_light_text:{variant:"h6",flexGrow:1,color:m}}})),s(67),function(){var e=Object(c.useContext)(O),t=p(),s=Object(a.a)(t,1)[0],r=Object(j.f)(),n=Object(c.useState)(""),b=Object(a.a)(n,2),i=(b[0],b[1]);return Object(o.jsx)("form",{className:"searchbar",noValidate:!0,autoComplete:"off",onSubmit:function(t){t.preventDefault(),r.push("/testResult"),s(e.website)},children:Object(o.jsx)("input",{className:"input",onChange:function(t){return function(t){var s=t.target.value;if(s.length>500)return void i("\u05e7\u05d9\u05e9\u05d5\u05e8 \u05d0\u05e8\u05d5\u05da \u05de\u05d9\u05d3\u05d9");i("");e.setWebsite(s)}(t)},type:"text",id:"outlined-basic",name:"Enter website address"})})}),N=s.p+"static/media/website_man_image.7b901eed.png",_=s.p+"static/media/background.2c4ca7a7.png",k=s.p+"static/media/about_background.558598f9.png",S=function(){return Object(o.jsx)("div",{children:"About"})},w=s(69),T=s.n(w),C=s(70),y=s(71),D=s(145),E=s(146);function P(e){return Object(o.jsx)(D.a,Object(y.a)({elevation:6,variant:"filled"},e))}var F=function(){var e=Object(c.useContext)(O),t=e.openToast,s=e.setOpenToast,r=e.statusToast,n=e.messageToast;return Object(o.jsx)(E.a,{open:t,onClose:"error"===r||"success"===r?function(){s(!1)}:null,children:Object(o.jsx)(P,{className:"bottom_toast",severity:r,icon:!1,children:n})})},G=function(){var e=Object(c.useContext)(O),t=e.setUserEmail,s=e.setUserFullName,r=e.setUserPhone;return Object(o.jsxs)("form",{children:[Object(o.jsxs)("p",{children:["\u05e9\u05dd \u05de\u05dc\u05d0:",Object(o.jsx)("input",{className:"input",name:"full_name",type:"text",onChange:function(e){s(e.target.value)}})]}),Object(o.jsxs)("p",{children:["\u05d0\u05d9\u05de\u05d9\u05d9\u05dc:",Object(o.jsx)("input",{className:"input",name:"email",type:"text",onChange:function(e){t(e.target.value)}})]}),Object(o.jsxs)("p",{children:["\u05d8\u05dc\u05e4\u05d5\u05df:",Object(o.jsx)("input",{className:"input",name:"phone",type:"text",onChange:function(e){r(e.target.value)}})]}),Object(o.jsx)("br",{})]})},U=function(){var e=Object(c.useContext)(O),t=e.openToast,s=e.statusToast,r=e.progress,n=e.messageToast,a=e.setSubmitDate,b=e.userEmail,i=e.userPhone,l=e.userFullName,x=e.submitDate,u=Object(j.f)(),p=Object(o.jsx)("div",{className:"loadingio-spinner-dual-ring-4pm97gr5npk",children:Object(o.jsxs)("div",{className:"ldio-9o242xdhv0o",children:[Object(o.jsx)("div",{}),Object(o.jsx)("div",{children:Object(o.jsx)("div",{})})]})});return Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:"test_result_progressbar_container",children:t&&"error"!==s&&"success"!==s?Object(o.jsx)("div",{children:"\u05e1\u05e8\u05d9\u05e7\u05d4 \u05d4\u05ea\u05d7\u05d9\u05dc\u05d4"===n||"\u05de\u05d7\u05e9\u05d1..."===n?p:Object(o.jsx)(T.a,{className:"progressbar",radius:C.isMobile?150:250,progress:r,cut:120,rotate:-210,initialAnimation:!0,initialAnimationDelay:500,strokeWidth:28,strokeColor:f,trackStrokeWidth:14,trackStrokeLinecap:"butt"})}):Object(o.jsxs)("div",{children:[" ",Object(o.jsxs)("div",{className:"user-form-container",children:[Object(o.jsx)("h1",{children:"\u05d4\u05d1\u05d3\u05d9\u05e7\u05d4 \u05d4\u05e1\u05ea\u05d9\u05d9\u05de\u05d4!"}),Object(o.jsx)("p",{children:n}),Object(o.jsx)(G,{}),Object(o.jsx)("div",{className:"send-form-button",children:Object(o.jsx)("button",{className:"button",onClick:function(){a((new Date).getDate()),alert("\u05e0\u05e9\u05dc\u05d7!\n"+l+" "+i+" "+b+" "+x),d.emit("user_form_data",{user_full_name:l,user_phone:i,user_email:b}),u.replace("/")},children:"\u05e9\u05dc\u05d7\\\u05d9"})})]})," "]})}),Object(o.jsx)(F,{})]})},I=function(){var e=Object(c.useContext)(O).website,t=p(),s=Object(a.a)(t,1)[0];Object(c.useEffect)((function(){console.log("abort"),d.emit("abort")}),[]);return Object(o.jsx)("div",{style:{backgroundImage:"url(".concat(_,")"),backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat",width:"100vw",height:"100vh",marginTop:"-9px"},children:Object(o.jsx)("div",{children:Object(o.jsxs)(i.a,{children:[Object(o.jsx)(l,{}),Object(o.jsxs)(j.c,{children:[Object(o.jsx)(j.a,{path:"/testResult",children:Object(o.jsx)(U,{})}),Object(o.jsx)(j.a,{path:"/about",children:Object(o.jsx)(S,{})}),Object(o.jsx)(j.a,{path:"/",children:Object(o.jsxs)("div",{className:"all-page-container",children:[Object(o.jsx)("div",{className:"one-page-part",children:Object(o.jsx)("div",{children:Object(o.jsxs)("div",{className:"main_content_side_by_side_container",children:[Object(o.jsxs)("div",{className:"content",children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{children:"\u05d4\u05d0\u05ea\u05e8 \u05d4\u05d9\u05d7\u05d9\u05d3\u05d9 \u05e9\u05d3\u05d5\u05d0\u05d2 \u05dc\u05d0\u05ea\u05e8 \u05e9\u05dc\u05da"}),Object(o.jsxs)("p",{children:["\u05de\u05d4 \u05e2\u05d5\u05e9\u05d9\u05dd?",Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),"\u05de\u05db\u05e0\u05d9\u05e1\u05d9\u05dd \u05d0\u05ea \u05d4\u05db\u05ea\u05d5\u05d1\u05ea \u05e9\u05dc \u05d4\u05d0\u05ea\u05e8 \u05de\u05e1\u05d7\u05e8 \u05e9\u05dc\u05db\u05dd \u05de\u05de\u05e9 \u05e4\u05d4 \u05de\u05ea\u05d7\u05ea, \u05d5\u05de\u05d2\u05dc\u05d9\u05dd \u05dc\u05d9\u05e7\u05d5\u05d9\u05d9\u05dd \u05d0\u05e4\u05e9\u05e8\u05d9\u05d9\u05dd \u05d1\u05d0\u05ea\u05e8",Object(o.jsx)("br",{})]})]}),Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)(i.b,{className:"button-link",to:"/testResult",children:Object(o.jsx)("button",{className:"button",onClick:function(){return s(e)},children:"\u05ea\u05d1\u05d3\u05e7\u05d5 \u05dc\u05d9"})}),Object(o.jsx)(v,{})]})]}),Object(o.jsx)("img",{className:"main_image",src:N,width:"45%",height:"45%"})]})})}),Object(o.jsxs)("div",{id:"second-part",className:"one-page-part",style:{backgroundImage:"url(".concat(k,")")},children:["Second part ",Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),"Second part ",Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),"Second part ",Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),"Second part ",Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),"Second part ",Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),"Second part ",Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{})]}),Object(o.jsxs)("div",{id:"third-part",className:"one-page-part",children:["Third part ",Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),"Third part ",Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),"Third part ",Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),"Third part ",Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),"Third part ",Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{})]})]})})]})]})})})};n.a.render(Object(o.jsx)(x,{children:Object(o.jsx)(I,{dir:"rtl"})}),document.querySelector("#root"))},67:function(e,t,s){}},[[121,1,2]]]);
//# sourceMappingURL=main.e3a560ac.chunk.js.map