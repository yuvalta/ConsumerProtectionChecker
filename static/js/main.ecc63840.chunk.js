(this["webpackJsonpweb-consumer-checker"]=this["webpackJsonpweb-consumer-checker"]||[]).push([[0],{122:function(e,t,s){"use strict";s.r(t);var c=s(0),n=s(15),a=s.n(n),i=s(9),r=s.p+"static/media/lighthouse.96933509.png",o=s(5),j=s(14),l=s(50),b=s(2),d=function(){var e=Object(o.f)();return Object(b.jsxs)("div",{className:"appbar-container",children:[Object(b.jsx)("img",{src:r,className:"logo",onClick:function(){e.replace("/")}}),Object(b.jsxs)("div",{className:"appbar-buttons-container",children:[Object(b.jsx)(l.a,{smooth:!0,className:"appbar-link",to:"/#contact-us",children:Object(b.jsx)("button",{className:"appbar-button",children:"\u05d3\u05d1\u05e8\u05d5 \u05d0\u05d9\u05ea\u05e0\u05d5"})}),Object(b.jsx)(l.a,{smooth:!0,className:"appbar-link",to:"/#about-us-section",children:Object(b.jsx)("button",{className:"appbar-button",children:"\u05de\u05d9 \u05d0\u05e0\u05d7\u05e0\u05d5"})}),Object(b.jsx)(j.b,{className:"appbar-link",to:"/",children:Object(b.jsx)("button",{className:"appbar-button",children:"\u05d3\u05e3 \u05d4\u05d1\u05d9\u05ea"})})]})]})},u=Object(c.createContext)("default website"),m=function(e){var t=e.children,s=Object(c.useState)("None"),n=Object(i.a)(s,2),a=n[0],r=n[1],o=Object(c.useState)(!1),j=Object(i.a)(o,2),l=j[0],d=j[1],m=Object(c.useState)("info"),O=Object(i.a)(m,2),h=O[0],p=O[1],x=Object(c.useState)(!1),g=Object(i.a)(x,2),f=g[0],v=g[1],N=Object(c.useState)(0),_=Object(i.a)(N,2),k=_[0],w=_[1],S=Object(c.useState)("empty"),T=Object(i.a)(S,2),y=T[0],C=T[1],D=Object(c.useState)("empty"),E=Object(i.a)(D,2),P=E[0],F=E[1],G=Object(c.useState)("empty"),R=Object(i.a)(G,2),U=R[0],I=R[1],W=Object(c.useState)("empty"),L=Object(i.a)(W,2),z=L[0],A=L[1];return Object(b.jsx)(u.Provider,{value:{website:a,setWebsite:r,openToast:l,setOpenToast:d,statusToast:h,setStatusToast:p,messageToast:f,setMessageToast:v,progress:k,setProgress:w,userEmail:y,setUserEmail:C,userFullName:P,setUserFullName:F,userPhone:U,setUserPhone:I,submitDate:z,setSubmitDate:A},children:t})},O=s(69),h=s.n(O)()("https://consumer-checker.herokuapp.com"),p=function(){var e=Object(c.useContext)(u),t=e.setOpenToast,s=e.setStatusToast,n=e.setMessageToast,a=e.setProgress;Object(c.useEffect)((function(){h.on("connect",(function(){console.log("connected")})),h.on("disconnect",(function(){console.log("disconnected")})),h.on("error",(function(e){console.log("error!"),n(e),s("error")})),h.on("final_score",(function(e){console.log(e),a(0),t(!1),n(" \u05dc\u05d9\u05e7\u05d5\u05d9\u05d9\u05dd \u05d1\u05e9\u05d5\u05d5\u05d9 \u05e9\u05dc ".concat(e))})),h.on("status_update",(function(e){var t=parseInt(e.percentages);console.log(e),a(t),n(e.phase)}))}),[]);return[function(e){t(!0),n("\u05e1\u05e8\u05d9\u05e7\u05d4 \u05d4\u05ea\u05d7\u05d9\u05dc\u05d4"),s("info"),h.emit("start_checking",e)}]},x=s(143),g="#F1F1EF",f="#1C201D",v="#71916D",N=(Object(x.a)((function(e){return{main_content:{margin:e.spacing(8),flexGrow:1},side_by_side:{alignItems:"center",display:"flex",flexDirection:"row",flexGrow:1,justifyContent:"center",alignContent:"space-around"},center:{marginTop:e.spacing(15)},root_disabled:{margin:e.spacing(5),flexGrow:1,pointerEvents:"none",opacity:"0.7"},simple_button:{margin:e.spacing(2),size:"medium",borderRadius:"50px",padding:"0 30px",height:48},root:{background:"transparent",flexGrow:1,direction:"rtl",boxShadow:"none"},buttons_header:{paddingTop:e.spacing(2),alignItems:"center",background:"transparent",flexGrow:1,direction:"rtl",boxShadow:"none"},button_dark_text:{flexGrow:1,color:f},button_light_text:{variant:"h6",flexGrow:1,color:g}}})),s(68),function(){var e=Object(c.useContext)(u),t=p(),s=Object(i.a)(t,1)[0],n=Object(o.f)(),a=Object(c.useState)(""),r=Object(i.a)(a,2),j=(r[0],r[1]);return Object(c.useEffect)((function(){console.log("abort"),h.emit("abort")}),[]),Object(b.jsx)("form",{className:"searchbar",noValidate:!0,autoComplete:"off",onSubmit:function(t){t.preventDefault(),n.push("/testResult"),s(e.website)},children:Object(b.jsx)("input",{className:"input",onChange:function(t){return function(t){var s=t.target.value;if(s.length>500)return void j("\u05e7\u05d9\u05e9\u05d5\u05e8 \u05d0\u05e8\u05d5\u05da \u05de\u05d9\u05d3\u05d9");j("");e.setWebsite(s)}(t)},type:"text",id:"outlined-basic",name:"Enter website address"})})}),_=s.p+"static/media/website_man_image.7b901eed.png",k=s.p+"static/media/background.2c4ca7a7.png",w=s.p+"static/media/background_gradient.43ed4131.png",S=s.p+"static/media/daniel.35a9c90c.jpg",T=s.p+"static/media/elliot.e908aca1.jpg",y=s.p+"static/media/helen.3e1104e3.jpg",C=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"\u05e4\u05d2\u05e9\u05d5 \u05d0\u05ea \u05d4\u05e6\u05d5\u05d5\u05ea"}),Object(b.jsxs)("div",{className:"ui three column grid",style:{direction:"rtl"},children:[Object(b.jsx)("div",{className:"column",children:Object(b.jsxs)("div",{className:"ui fluid card",children:[Object(b.jsx)("div",{className:"image",children:Object(b.jsx)("img",{src:S})}),Object(b.jsx)("div",{className:"content",children:Object(b.jsx)("a",{className:"header",children:"\u05de\u05d5\u05d8\u05d9 \u05dc\u05d5\u05db\u05d9\u05dd"})})]})}),Object(b.jsx)("div",{className:"column",children:Object(b.jsxs)("div",{className:"ui fluid card",children:[Object(b.jsx)("div",{className:"image",children:Object(b.jsx)("img",{src:T})}),Object(b.jsx)("div",{className:"content",children:Object(b.jsx)("a",{className:"header",children:"\u05d0\u05e1\u05e3 \u05dc\u05d5\u05e5"})})]})}),Object(b.jsx)("div",{className:"column",children:Object(b.jsxs)("div",{className:"ui fluid card",children:[Object(b.jsx)("div",{className:"image",children:Object(b.jsx)("img",{src:y})}),Object(b.jsx)("div",{className:"content",children:Object(b.jsx)("a",{className:"header",children:"\u05ea\u05d9\u05e7\u05d9 \u05e4\u05d5\u05e8"})})]})})]})]})},D=function(){return Object(b.jsxs)("div",{id:"about-us-section",style:{backgroundImage:"url(".concat(w,")"),paddingTop:"5%",paddingBottom:"5%",paddingRight:"10%",paddingLeft:"10%"},children:[Object(b.jsx)("h1",{children:"\u05de\u05d9 \u05d0\u05e0\u05d7\u05e0\u05d5?"}),Object(b.jsx)("p",{children:"\u05dc\u05d5\u05e8\u05dd \u05d0\u05d9\u05e4\u05e1\u05d5\u05dd \u05d3\u05d5\u05dc\u05d5\u05e8 \u05e1\u05d9\u05d8 \u05d0\u05de\u05d8, \u05e7\u05d5\u05e0\u05e1\u05e7\u05d8\u05d5\u05e8\u05e8 \u05d0\u05d3\u05d9\u05e4\u05d9\u05e1\u05d9\u05e0\u05d2 \u05d0\u05dc\u05d9\u05ea \u05e7\u05d5\u05dc\u05d4\u05e2 \u05e6\u05d5\u05e4\u05e2\u05d8 \u05dc\u05de\u05e8\u05e7\u05d5\u05d7 \u05d0\u05d9\u05d1\u05df \u05d0\u05d9\u05e3, \u05d1\u05e8\u05d5\u05de\u05e5 \u05db\u05dc\u05e8\u05e9\u05d8 \u05de\u05d9\u05d7\u05d5\u05e6\u05d9\u05dd. \u05e7\u05dc\u05d0\u05e6\u05d9 \u05e1\u05d7\u05d8\u05d9\u05e8 \u05d1\u05dc\u05d5\u05d1\u05e7. \u05ea\u05e6\u05d8\u05e0\u05e4\u05dc \u05d1\u05dc\u05d9\u05e0\u05d3\u05d5 \u05dc\u05de\u05e8\u05e7\u05dc \u05d0\u05e1 \u05dc\u05db\u05d9\u05de\u05e4\u05d5, \u05d3\u05d5\u05dc, \u05e6\u05d5\u05d8 \u05d5\u05de\u05e2\u05d9\u05d5\u05d8 - \u05dc\u05e4\u05ea\u05d9\u05e2\u05dd \u05d1\u05e8\u05e9\u05d2 - \u05d5\u05dc\u05ea\u05d9\u05e2\u05dd \u05d2\u05d3\u05d3\u05d9\u05e9. \u05e7\u05d5\u05d5\u05d9\u05d6 \u05d3\u05d5\u05de\u05d5\u05e8 \u05dc\u05d9\u05d0\u05de\u05d5\u05dd \u05d1\u05dc\u05d9\u05e0\u05da \u05e8\u05d5\u05d2\u05e6\u05d4. \u05dc\u05e4\u05de\u05e2\u05d8 \u05de\u05d5\u05e1\u05df \u05de\u05e0\u05ea. \u05d4\u05d5\u05e2\u05e0\u05d9\u05d1 \u05d4\u05d9\u05d5\u05e9\u05d1\u05d1 \u05e9\u05e2\u05e8\u05e9 \u05e9\u05de\u05d7\u05d5\u05d9\u05d8 - \u05e9\u05dc\u05d5\u05e9\u05e2 \u05d5\u05ea\u05dc\u05d1\u05e8\u05d5 \u05d7\u05e9\u05dc\u05d5 \u05e9\u05e2\u05d5\u05ea\u05dc\u05e9\u05da \u05d5\u05d7\u05d0\u05d9\u05ea \u05e0\u05d5\u05d1\u05e9 \u05e2\u05e8\u05e9\u05e9\u05e3. \u05d6\u05d5\u05ea\u05d4 \u05de\u05e0\u05e7 \u05d4\u05d1\u05e7\u05d9\u05e5 \u05d0\u05e4\u05d0\u05d7 \u05d3\u05dc\u05d0\u05de\u05ea \u05d9\u05d1\u05e9, \u05db\u05d0\u05e0\u05d4 \u05e0\u05d9\u05e6\u05d0\u05d7\u05d5 \u05e0\u05de\u05e8\u05d2\u05d9 \u05e9\u05d4\u05db\u05d9\u05dd \u05ea\u05d5\u05e7, \u05d4\u05d3\u05e9 \u05e9\u05e0\u05e8\u05d0 \u05d4\u05ea\u05d9\u05d3\u05dd \u05d4\u05db\u05d9\u05d9\u05e8 \u05d5\u05e7."}),Object(b.jsx)("p",{children:"\u05d5\u05dc\u05d5\u05e8\u05e1 \u05de\u05d5\u05e0\u05e4\u05e8\u05d3 \u05d0\u05d3\u05e0\u05d3\u05d5\u05dd \u05e1\u05d9\u05dc\u05e7\u05d5\u05e3, \u05de\u05e8\u05d2\u05e9\u05d9 \u05d5\u05de\u05e8\u05d2\u05e9\u05d7. \u05e2\u05de\u05d7\u05dc\u05d9\u05e3 \u05e7\u05d5\u05e0\u05d3\u05d9\u05de\u05e0\u05d8\u05d5\u05dd \u05e7\u05d5\u05e8\u05d5\u05e1 \u05d1\u05dc\u05d9\u05e7\u05e8\u05d4, \u05e0\u05d5\u05e0\u05e1\u05d8\u05d9 \u05e7\u05dc\u05d5\u05d1\u05e8 \u05d1\u05e8\u05d9\u05e7\u05e0\u05d4 \u05e1\u05d8\u05d5\u05dd, \u05dc\u05e4\u05e8\u05d9\u05e7\u05da \u05ea\u05e6\u05d8\u05e8\u05d9\u05e7 \u05dc\u05e8\u05d8\u05d9."}),Object(b.jsx)(C,{})]})},E=s(70),P=s.n(E),F=(s(120),s(71)),G=s(146),R=s(147);function U(e){return Object(b.jsx)(G.a,Object(F.a)({elevation:6,variant:"filled"},e))}var I=function(){var e=Object(c.useContext)(u),t=e.openToast,s=e.setOpenToast,n=e.statusToast,a=e.messageToast;return Object(b.jsx)(R.a,{open:t,onClose:"error"===n||"success"===n?function(){s(!1)}:null,children:Object(b.jsx)(U,{className:"bottom_toast",severity:n,icon:!1,children:a})})},W=function(){var e=Object(c.useContext)(u),t=e.setSubmitDate,s=e.userEmail,n=e.userPhone,a=e.userFullName,i=e.submitDate,r=e.setUserEmail,j=e.setUserFullName,l=e.setUserPhone,d=Object(o.f)();return Object(b.jsxs)("form",{children:[Object(b.jsxs)("p",{children:["\u05e9\u05dd \u05de\u05dc\u05d0:",Object(b.jsx)("input",{className:"input",name:"full_name",type:"text",onChange:function(e){j(e.target.value)}})]}),Object(b.jsxs)("p",{children:["\u05d0\u05d9\u05de\u05d9\u05d9\u05dc:",Object(b.jsx)("input",{className:"input",name:"email",type:"text",onChange:function(e){r(e.target.value)}})]}),Object(b.jsxs)("p",{children:["\u05d8\u05dc\u05e4\u05d5\u05df:",Object(b.jsx)("input",{className:"input",name:"phone",type:"text",onChange:function(e){l(e.target.value)}})]}),Object(b.jsx)("br",{}),Object(b.jsx)("div",{className:"send-form-button",children:Object(b.jsx)("button",{className:"button",onClick:function(){t((new Date).getDate()),alert("\u05e0\u05e9\u05dc\u05d7!\n"+a+" "+n+" "+s+" "+i),h.emit("user_form_data",{user_full_name:a,user_phone:n,user_email:s}),d.replace("/")},children:"\u05e9\u05dc\u05d7\\\u05d9"})})]})},L=function(){var e=Object(c.useContext)(u),t=e.openToast,s=e.statusToast,n=e.progress,a=e.messageToast,i=(e.setSubmitDate,e.userEmail,e.userPhone,e.userFullName,e.submitDate,Object(o.f)(),Object(b.jsx)("div",{className:"loadingio-spinner-dual-ring-4pm97gr5npk",children:Object(b.jsxs)("div",{className:"ldio-9o242xdhv0o",children:[Object(b.jsx)("div",{}),Object(b.jsx)("div",{children:Object(b.jsx)("div",{})})]})}));return Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{className:"test_result_progressbar_container",children:t&&"error"!==s&&"success"!==s?Object(b.jsx)("div",{className:"progressbar",children:"\u05e1\u05e8\u05d9\u05e7\u05d4 \u05d4\u05ea\u05d7\u05d9\u05dc\u05d4"===a||"\u05de\u05d7\u05e9\u05d1..."===a?i:Object(b.jsx)("div",{children:Object(b.jsx)(P.a,{progress:n,cut:120,rotate:-210,initialAnimation:!0,initialAnimationDelay:500,strokeWidth:28,strokeColor:v,trackStrokeWidth:14,trackStrokeLinecap:"butt"})})}):Object(b.jsxs)("div",{children:[" ",Object(b.jsxs)("div",{className:"user-form-container",children:[Object(b.jsx)("h1",{children:"\u05d4\u05d1\u05d3\u05d9\u05e7\u05d4 \u05d4\u05e1\u05ea\u05d9\u05d9\u05de\u05d4!"}),Object(b.jsx)("p",{children:a}),Object(b.jsx)(W,{})]})," "]})}),Object(b.jsx)(I,{})]})},z=(s.p,function(){return Object(b.jsxs)("div",{id:"contact-us",style:{paddingTop:"5%",paddingBottom:"5%",paddingRight:"30%",paddingLeft:"30%"},children:[Object(b.jsx)("h1",{children:"\u05d3\u05d1\u05e8\u05d5 \u05d0\u05d9\u05ea\u05e0\u05d5"}),Object(b.jsx)(W,{})]})}),A=function(){var e=Object(c.useContext)(u).website,t=p(),s=Object(i.a)(t,1)[0];return Object(b.jsx)("div",{style:{backgroundImage:"url(".concat(k,")"),backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat",width:"100vw",height:"100vh",marginTop:"-9px"},children:Object(b.jsx)("div",{children:Object(b.jsxs)(j.a,{children:[Object(b.jsx)(d,{}),Object(b.jsxs)(o.c,{children:[Object(b.jsx)(o.a,{path:"/testResult",children:Object(b.jsx)(L,{})}),Object(b.jsx)(o.a,{path:"/",children:Object(b.jsxs)("div",{className:"all-page-container",children:[Object(b.jsx)("div",{className:"one-page-part",children:Object(b.jsxs)("div",{className:"main_content_side_by_side_container",children:[Object(b.jsxs)("div",{className:"content",children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"\u05d4\u05d0\u05ea\u05e8 \u05d4\u05d9\u05d7\u05d9\u05d3\u05d9 \u05e9\u05d3\u05d5\u05d0\u05d2 \u05dc\u05d0\u05ea\u05e8 \u05e9\u05dc\u05da"}),Object(b.jsxs)("p",{children:["\u05de\u05d4 \u05e2\u05d5\u05e9\u05d9\u05dd?",Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),"\u05de\u05db\u05e0\u05d9\u05e1\u05d9\u05dd \u05d0\u05ea \u05d4\u05db\u05ea\u05d5\u05d1\u05ea \u05e9\u05dc \u05d4\u05d0\u05ea\u05e8 \u05de\u05e1\u05d7\u05e8 \u05e9\u05dc\u05db\u05dd \u05de\u05de\u05e9 \u05e4\u05d4 \u05de\u05ea\u05d7\u05ea, \u05d5\u05de\u05d2\u05dc\u05d9\u05dd \u05dc\u05d9\u05e7\u05d5\u05d9\u05d9\u05dd \u05d0\u05e4\u05e9\u05e8\u05d9\u05d9\u05dd \u05d1\u05d0\u05ea\u05e8",Object(b.jsx)("br",{}),Object(b.jsx)("br",{})]})]}),Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(j.b,{className:"button-link",to:"/testResult",children:Object(b.jsx)("button",{className:"button",onClick:function(){return s(e)},children:"\u05ea\u05d1\u05d3\u05e7\u05d5 \u05dc\u05d9"})}),Object(b.jsx)(N,{})]})]}),Object(b.jsx)("img",{className:"main_image",src:_,width:"45%",height:"45%"})]})}),Object(b.jsx)(D,{className:"one-page-part"}),Object(b.jsx)(z,{className:"one-page-part"})]})})]})]})})})};a.a.render(Object(b.jsx)(m,{children:Object(b.jsx)(A,{dir:"rtl"})}),document.querySelector("#root"))},68:function(e,t,s){}},[[122,1,2]]]);
//# sourceMappingURL=main.ecc63840.chunk.js.map