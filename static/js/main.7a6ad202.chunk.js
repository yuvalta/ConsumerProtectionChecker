(this["webpackJsonpweb-consumer-checker"]=this["webpackJsonpweb-consumer-checker"]||[]).push([[0],{127:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(9),s=n.n(a),o=n(15),i=n(167),c=n(169),l=n(170),b=n(164),d="#F1F1EF",u="#595949",x="#1C201D",j="#71916D",g=Object(b.a)((function(e){return{main_content:{margin:e.spacing(8),flexGrow:1},main_content_margin_left_right:{marginLeft:e.spacing(8),marginRight:e.spacing(1),flexGrow:1},side_by_side:{alignItems:"center",display:"flex",flexDirection:"row",flexGrow:1,justifyContent:"center",alignContent:"space-around"},text_h1:{direction:"rtl",textAlign:"right",flexGrow:1,fontFamily:"Rubik"},text_h2:{direction:"rtl",textAlign:"right",flexGrow:1,color:x,fontFamily:"Rubik"},center:{marginTop:e.spacing(15)},root_disabled:{margin:e.spacing(5),flexGrow:1,pointerEvents:"none",opacity:"0.7"},button_red_gradient:{marginRight:e.spacing(2),variant:"contained",background:"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",border:0,borderRadius:"50px",boxShadow:"0 3px 5px 2px rgba(255, 105, 135, .3)",color:"white",height:48,padding:"0 30px"},button_gray:{marginRight:e.spacing(2),variant:"contained",background:"#423f3c",border:0,borderRadius:"50px",boxShadow:"5px 5px 5px 5px rgba(126, 125, 124, .3)",color:"white",height:48,padding:"0 30px"},button_blue_gradient:{margin:e.spacing(2),variant:"contained",background:"linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",border:0,borderRadius:"50px",boxShadow:"0 3px 5px 2px rgba(255, 105, 135, .3)",color:"white",height:48,padding:"0 30px"},simple_button:{margin:e.spacing(2),size:"medium",borderRadius:"50px",padding:"0 30px",height:48},root:{background:"transparent",flexGrow:1,direction:"rtl",boxShadow:"none"},buttons_header:{paddingTop:e.spacing(2),alignItems:"center",background:"transparent",flexGrow:1,direction:"rtl",boxShadow:"none"},title:{variant:"h5",flexGrow:1,color:u},searchbar:{flexGrow:1,margin:e.spacing(2),borderRadius:20},bottomToast:{direction:"rtl"},button_dark_text:{flexGrow:1,color:x},button_light_text:{variant:"h6",flexGrow:1,color:d}}})),h=(n.p,n(5)),p=function(){var e=g();return Object(h.jsx)(i.a,{position:"static",className:e.buttons_header,children:Object(h.jsxs)(c.a,{children:[Object(h.jsx)(l.a,{variant:"text",className:e.simple_button,children:Object(h.jsx)("h3",{className:e.button_dark_text,children:"\u05db\u05e0\u05d9\u05e1\u05d4"})}),Object(h.jsx)(l.a,{variant:"text",className:e.simple_button,children:Object(h.jsx)("h3",{className:e.button_dark_text,children:"\u05d4\u05e8\u05e9\u05de\u05d4"})}),Object(h.jsx)(l.a,{variant:"text",className:e.simple_button,children:Object(h.jsx)("h3",{className:e.button_dark_text,children:"\u05de\u05d9 \u05d0\u05e0\u05d7\u05e0\u05d5"})})]})})},m=n(172),O=Object(r.createContext)("default website"),f=function(e){var t=e.children,n=Object(r.useState)("None"),a=Object(o.a)(n,2),s=a[0],i=a[1],c=Object(r.useState)(!1),l=Object(o.a)(c,2),b=l[0],d=l[1],u=Object(r.useState)("info"),x=Object(o.a)(u,2),j=x[0],g=x[1],p=Object(r.useState)(!1),m=Object(o.a)(p,2),f=m[0],_=m[1],v=Object(r.useState)(0),w=Object(o.a)(v,2),k=w[0],S=w[1];return Object(h.jsx)(O.Provider,{value:{website:s,setWebsite:i,openToast:b,setOpenToast:d,statusToast:j,setStatusToast:g,messageToast:f,setMessageToast:_,progress:k,setProgress:S},children:t})},_=n(69),v=n.n(_)()("https://consumer-checker.herokuapp.com"),w=function(){var e=Object(r.useContext)(O),t=e.setOpenToast,n=e.setStatusToast,a=e.setMessageToast,s=e.setProgress;Object(r.useEffect)((function(){v.on("connect",(function(){console.log("connected")})),v.on("disconnect",(function(){console.log("disconnected")})),v.on("error",(function(){console.log("error!"),a("error"),n("error")})),v.on("final_score",(function(e){console.log(e),s(0),a("\u05e1\u05e8\u05d9\u05e7\u05d4 \u05d4\u05e1\u05ea\u05d9\u05d9\u05de\u05d4 \u05d1\u05d4\u05e6\u05dc\u05d7\u05d4 - \u05dc\u05d9\u05e7\u05d5\u05d9\u05d9\u05dd \u05d1\u05e9\u05d5\u05d5\u05d9 \u05e9\u05dc ".concat(e)),n("success")})),v.on("status_update",(function(e){var t=parseInt(e.percentages);console.log(e),s(t),a(e.phase)}))}),[]);return[function(e){t(!0),a("\u05e1\u05e8\u05d9\u05e7\u05d4 \u05d4\u05ea\u05d7\u05d9\u05dc\u05d4"),n("info"),v.emit("start_checking",e)}]},k=function(){g();var e=Object(r.useContext)(O),t=w(),n=Object(o.a)(t,1)[0],a=Object(r.useState)(""),s=Object(o.a)(a,2),i=s[0],c=s[1];return Object(h.jsx)("form",{style:{width:"65vh",boxShadow:"5px rgba(126, 125, 124, .3)"},noValidate:!0,autoComplete:"off",onSubmit:function(t){t.preventDefault(),n(e.website)},children:Object(h.jsx)(m.a,{onChange:function(t){return function(t){var n=t.target.value;if(n.length>500)return void c("\u05e7\u05d9\u05e9\u05d5\u05e8 \u05d0\u05e8\u05d5\u05da \u05de\u05d9\u05d3\u05d9");c("");e.setWebsite(n)}(t)},error:""!==i,helperText:""!==i?i:" ",id:"outlined-basic",label:"Enter website address",fullWidth:!0,variant:"outlined"})})},S=n(71),T=n(173),y=n(175);function N(e){return Object(h.jsx)(T.a,Object(S.a)({elevation:6,variant:"filled"},e))}var C=function(){var e=g(),t=Object(r.useContext)(O),n=t.openToast,a=t.setOpenToast,s=t.statusToast,o=t.messageToast;return Object(h.jsx)(y.a,{open:n,onClose:"error"===s||"success"===s?function(){a(!1)}:null,children:Object(h.jsx)(N,{className:e.bottomToast,severity:s,icon:!1,children:o})})},G=n(70),R=n.n(G),F=n(171),E=n(45),D=n.p+"static/media/website_man_image.7b901eed.png",M=n.p+"static/media/background.2c4ca7a7.png",P=function(){var e=Object(r.useContext)(O),t=e.website,n=e.openToast,a=e.statusToast,s=e.progress,i=(e.setProgress,w()),c=Object(o.a)(i,1)[0],b=g(),d=function(){return Object(h.jsxs)("div",{className:b.side_by_side,children:[Object(h.jsx)(l.a,{onClick:function(){return c(t)},className:b.button_gray,children:Object(h.jsx)(F.a,{className:b.button_light_text,children:"\u05ea\u05d1\u05d3\u05e7\u05d5 \u05dc\u05d9"})}),Object(h.jsx)(k,{})]})};return Object(h.jsx)("div",{style:{backgroundImage:"url(".concat(M,")"),backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat",width:"96vw",height:"100vh",marginTop:"-9px"},className:b.main_content_margin_left_right,children:Object(h.jsxs)("div",{children:[Object(h.jsx)(p,{}),Object(h.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:n&&"error"!==a&&"success"!==a?Object(h.jsx)(R.a,{className:b.center,radius:E.isMobile?150:250,progress:s,cut:120,rotate:-210,initialAnimation:!0,initialAnimationDelay:500,strokeWidth:28,strokeColor:j,trackStrokeWidth:14,trackStrokeLinecap:"butt"}):Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{className:b.side_by_side,children:[Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("p",{className:b.text_h1,style:{fontSize:"3.5vw",color:x},children:Object(h.jsx)("b",{children:"\u05d4\u05d0\u05ea\u05e8 \u05d4\u05d9\u05d7\u05d9\u05d3\u05d9 \u05e9\u05d3\u05d5\u05d0\u05d2 \u05dc\u05d0\u05ea\u05e8 \u05e9\u05dc\u05da"})}),Object(h.jsxs)("p",{className:b.text_h1,style:{fontSize:"1.75vw",color:u},children:["\u05de\u05d4 \u05e2\u05d5\u05e9\u05d9\u05dd?",Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),"\u05de\u05db\u05e0\u05d9\u05e1\u05d9\u05dd \u05d0\u05ea \u05d4\u05db\u05ea\u05d5\u05d1\u05ea \u05e9\u05dc \u05d4\u05d0\u05ea\u05e8 \u05de\u05e1\u05d7\u05e8 \u05e9\u05dc\u05db\u05dd \u05de\u05de\u05e9 \u05e4\u05d4 \u05de\u05ea\u05d7\u05ea, \u05d5\u05de\u05d2\u05dc\u05d9\u05dd \u05dc\u05d9\u05e7\u05d5\u05d9\u05d9\u05dd \u05d0\u05e4\u05e9\u05e8\u05d9\u05d9\u05dd \u05d1\u05d0\u05ea\u05e8",Object(h.jsx)("br",{})]})]}),E.isMobile?null:d()]}),Object(h.jsx)("img",{src:D,width:"50%",height:"50%"})]}),E.isMobile?d():null]})}),Object(h.jsx)(C,{})]})})};s.a.render(Object(h.jsx)(f,{children:Object(h.jsx)(P,{dir:"rtl"})}),document.querySelector("#root"))}},[[127,1,2]]]);
//# sourceMappingURL=main.7a6ad202.chunk.js.map