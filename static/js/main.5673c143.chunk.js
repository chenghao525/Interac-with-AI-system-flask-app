(this.webpackJsonpdeploy=this.webpackJsonpdeploy||[]).push([[0],{153:function(e,t,a){},154:function(e,t,a){},159:function(e,t,a){},177:function(e,t,a){},179:function(e,t,a){},180:function(e,t,a){},181:function(e,t,a){},182:function(e,t,a){},251:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(19),i=a.n(s),o=(a(153),a(154),a(17)),l=a(129),r=a(9),j=(a(250),a(257)),d=(a(159),a(259)),u=a(253),b=a(254),m=a(258),O=a(51),h="";window.location.origin||(window.location.origin=window.location.protocol+"//"+window.location.hostname+(window.location.port?":"+window.location.port:"")),h=window.location.origin;var x=a(73);function g(e){return e}function p(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=localStorage.getItem("user-id"),a=e,n=a.data,c=a.url;return(e=Object(x.a)({},e)).mode="cors",delete e.url,n&&(delete e.data,e.body=JSON.stringify(n)),e.headers={"user-ID":t,"Content-Type":"application/json;charset=UTF-8"},fetch(c,e,{mode:"cors",credentials:"include"}).then(g).then((function(e){return 200===e.code||console.log("error",e),e})).catch((function(e){return{err:e}}))}var f=a(3),v=function(e){var t=j.a.Countdown,a=Object(n.useState)(Date.now()+1e6),c=Object(r.a)(a,2),s=c[0],i=c[1],o=Object(n.useState)(0),l=Object(r.a)(o,2),x=l[0],g=l[1],v=Object(n.useState)(0),y=Object(r.a)(v,2),w=y[0],N=y[1],S=Object(n.useState)(!1),C=Object(r.a)(S,2),T=C[0],D=C[1],I=Object(n.useState)(Date.now()),k=Object(r.a)(I,2),F=k[0],P=k[1],_=Object(n.useState)(Date.now()),A=Object(r.a)(_,2),E=A[0],B=A[1],U=Object(n.useState)(""),q=Object(r.a)(U,2),z=q[0],H=q[1],M=Object(n.useState)(0),J=Object(r.a)(M,2),Y=J[0],W=J[1],G=Object(n.useState)(!1),L=Object(r.a)(G,2),R=L[0],Z=L[1],Q=Object(n.useState)(!1),K=Object(r.a)(Q,2),V=K[0],X=K[1],$=function(t){var a=0;a=0===E?e.modalCountDown:E;var n={user_id:localStorage.getItem("user-id"),q_id:z,resp_time:a,init_guess:x,final_guess:t};p({url:"".concat(h,"answer"),method:"POST",data:n}).then((function(e){console.log(e)}))};return Object(n.useEffect)((function(){if(void 0!==e.imgName){var t=e.imgName.split(".")[0];0!==t.length&&(H(t),function(e){p({url:"".concat(h,"imageInfo?q_id=")+e,method:"GET"}).then((function(e){return e.json()})).then((function(e){var t=e.ai;console.log("aiSugg",t),W(t)}))}(t))}}),[e.imgName]),Object(f.jsx)(d.a,{title:"AI suggestion dialog",centered:!0,visible:e.openModal,footer:null,children:Object(f.jsxs)("div",{className:"pop-container",children:[Object(f.jsx)("div",{children:"Please provide your best estimate of the number of penguins you saw in the image."}),T?Object(f.jsxs)("div",{children:[Object(f.jsxs)(u.a,{gutter:16,style:{marginBottom:"40px"},children:[Object(f.jsx)(b.a,{span:12,children:Object(f.jsxs)("div",{className:"modal-col",children:[Object(f.jsx)("div",{className:"estimate-text",children:"Your estimate:"}),Object(f.jsx)("div",{className:"text-box",children:x})]})}),Object(f.jsx)(b.a,{span:12,children:Object(f.jsxs)("div",{className:"modal-col",children:[Object(f.jsx)("div",{className:"estimate-text",children:"AI's suggestion:"}),Object(f.jsx)("div",{className:"text-box",children:Y})]})})]}),Object(f.jsxs)("div",{className:"lower-modal",children:[Object(f.jsx)("div",{children:"Would you like to update your answer based on the AI's suggestion?"}),Object(f.jsxs)(u.a,{gutter:0,style:{marginBottom:"40px"},children:[Object(f.jsx)(b.a,{span:12,children:Object(f.jsxs)("div",{className:"modal-col",children:[Object(f.jsx)("div",{className:"estimate-text",children:"Update your estimate:"}),Object(f.jsx)(m.a,{className:"text-box",placeholder:x,onChange:function(e){N(e.target.value),B(((Date.now()-F)/1e3).toFixed(2))},disabled:V})]})}),Object(f.jsx)(b.a,{span:12,children:Object(f.jsx)("div",{className:"modal-col",children:Object(f.jsx)("div",{className:"estimate-text",children:Object(f.jsx)(t,{title:"Countdown",value:s,onFinish:function(){0===w?(N(x),$(x)):$(w),Z(!0),X(!0)},format:"mm:ss"})})})})]}),R?Object(f.jsx)("div",{style:{textAlign:"center"},children:Object(f.jsx)(O.a,{type:"primary",size:"large",onClick:function(){e.modalTimesUp(),g(0),N(0),D(!1),X(!1),Z(!1),B(0)},children:"Next Image"})}):Object(f.jsx)("div",{})]})]}):Object(f.jsx)("div",{children:Object(f.jsxs)(u.a,{gutter:16,style:{marginBottom:"40px"},children:[Object(f.jsx)(b.a,{span:12,children:Object(f.jsxs)("div",{className:"modal-col",children:[Object(f.jsx)("div",{className:"estimate-text",children:"Your estimate:"}),Object(f.jsx)(m.a,{className:"text-box",placeholder:"0",onChange:function(e){g(e.target.value)}})]})}),Object(f.jsx)(b.a,{span:12,children:Object(f.jsx)("div",{className:"modal-col",children:Object(f.jsx)(O.a,{type:"primary",size:"large",style:{marginTop:"42px"},onClick:function(){D(!0),i(Date.now()+1e3*e.modalCountDown),P(Date.now())},children:"Confirm"})})})]})})]})})},y=(a(119),"./images/"),w=function(){var e=Object(n.useState)([]),t=Object(r.a)(e,2),a=(t[0],t[1],Object(n.useState)(0)),c=Object(r.a)(a,2),s=c[0],i=c[1],o=Object(n.useState)(""),d=Object(r.a)(o,2),u=d[0],b=d[1],m=Object(n.useState)([]),O=Object(r.a)(m,2),x=O[0],g=O[1],w=Object(n.useState)(!1),N=Object(r.a)(w,2),S=N[0],C=N[1],T=Object(n.useState)(0),D=Object(r.a)(T,2),I=(D[0],D[1],Object(n.useState)(!1)),k=Object(r.a)(I,2),F=k[0],P=k[1],_=Object(n.useState)(Date.now()+1e6),A=Object(r.a)(_,2),E=A[0],B=A[1],U=Object(n.useState)(Date.now()+1e6),q=Object(r.a)(U,2),z=q[0],H=q[1],M=(Date.now(),j.a.Countdown),J=function(e){var t,a=e.split(" "),n=[],c=Object(l.a)(a);try{for(c.s();!(t=c.n()).done;){var s=t.value;s+=".jpg",n.push(s)}}catch(i){c.e(i)}finally{c.f()}b(n[0]),g(n)};return Object(n.useEffect)((function(){p({url:"".concat(h,"/userInfo?userID=")+localStorage.getItem("user-id"),method:"GET"}).then((function(e){return e.json()})).then((function(e){console.log("success",e);var t=e.q_order;J(t),H(e.timing),"E"===t[0]?B(Date.now()+5e3):B(Date.now()+1e4)}))}),[]),Object(n.useEffect)((function(){void 0!==u&&"E"===u[0]?B(Date.now()+5e3):void 0!==u&&"H"===u[0]&&B(Date.now()+1e4)}),[u]),Object(f.jsxs)("div",{className:"page-container",children:[Object(f.jsx)("div",{className:"title",children:"Counting penguins with AI assistance"}),Object(f.jsxs)("div",{className:"row",children:[Object(f.jsx)("div",{className:"column left-panel",children:Object(f.jsx)("div",{className:"img-frame-container",children:Object(f.jsx)("div",{className:"img-frame",children:F?Object(f.jsx)("img",{src:"./images/blank.jpeg"}):Object(f.jsx)("img",{src:y+x[s]})})})}),Object(f.jsx)("div",{className:"column right-panel",children:Object(f.jsx)("div",{className:"countdown-container",children:Object(f.jsx)(M,{title:"Countdown",value:E,onFinish:function(){P(!0),C(!0)},format:"mm:ss"})})})]}),Object(f.jsx)(v,{openModal:S,modalTimesUp:function(){s>=x.length-1&&window.location.assign("/#/questionnaire"),P(!1),C(!1),b(x[s+1]),i(s+1)},modalCountDown:z,imgName:u})]})},N=a(255),S=a(144),C=a(261),T=(a(177),N.a.Title),D=N.a.Text,I=function(){var e=Object(n.useState)(!1),t=Object(r.a)(e,2),a=t[0],c=t[1],s=function(){!0===a?(console.log("Start Study"),function(e){var t={};return t.url="".concat(h,"start"),t.method="POST",t.mode="cors",t.body=JSON.stringify(e),t.headers={"Content-Type":"application/json;charset=UTF-8"},fetch(t.url,t,{credentials:"include"}).then((function(e){return e.json()})).then((function(e){return console.log("success",e),localStorage.setItem("user-id",e.user_id),e})).catch((function(e){return{err:e}}))}({consent:1}).then(window.location.assign("/#/trailPage"))):S.b.warning("Need to give consent to participate in the study.")};return Object(f.jsxs)("div",{className:"page-container",children:[Object(f.jsx)(T,{level:3,children:"Counting Penguins with AI assistance"}),Object(f.jsx)(D,{level:5,children:"You are being asked to join a study for a course project at Johns Hopkins University. Participation in this study is voluntary and you will not receive any compensation. Even if you decide to join now, you can change your mind later. If you want to stop your participation in the study, you can simply close the browser. The  study tasks can be completed within 8-10 minutes. The records and data from the study will only be reviewed by team members involved in the project. We will not ask for information that identifies you, thus, your responses cannot be associated with your identity. By clicking next you accept these conditions, and you agree to  join the study."}),Object(f.jsx)("div",{className:"checkboxMessage",children:Object(f.jsx)(C.a,{onChange:function(e){console.log("consent = ".concat(e.target.checked)),c(e.target.checked)},children:"I give my consent for my data to be used for the study"})}),Object(f.jsx)("div",{children:Object(f.jsx)(O.a,{type:"primary",size:"medium",style:{margin:"0 10px"},onClick:function(){return s()},children:"Start Study"})})]})},k=a(260),F=function(e){return Object(f.jsx)(k.a,{status:"404",title:"404",subTitle:"Sorry, the page you visited does not exist.",extra:Object(f.jsx)(O.a,{type:"primary",onClick:function(){return e.history.push("/")},children:"Back Home"})})},P=(a(179),function(){return Object(n.useEffect)((function(){}),[]),Object(f.jsxs)("div",{className:"page-container",children:[Object(f.jsx)("div",{className:"title",children:"Questionnaire"}),Object(f.jsxs)("div",{style:{fontSize:"22px"},children:["Here is your user id, you will need it for completing the form below(link):"," "]}),Object(f.jsx)(m.a,{className:"id-text-box",value:localStorage.getItem("user-id")}),Object(f.jsx)("div",{children:Object(f.jsx)("a",{href:"https://forms.gle/Ry6HT68adeZ8ihCv8",target:"_blank",children:"https://forms.gle/Ry6HT68adeZ8ihCv8"})})]})}),_=(a(180),function(){return Object(f.jsxs)("div",{className:"ready-page-container",children:[Object(f.jsx)("div",{className:"title",children:"Now you have mastered our application, click the button below to start the real test."}),Object(f.jsx)(O.a,{type:"primary",size:"large",onClick:function(){window.location.assign("/#/mainPage")},children:"Start Test"})]})}),A=(a(181),function(e){var t=j.a.Countdown,a=Object(n.useState)(Date.now()+1e6),c=Object(r.a)(a,2),s=c[0],i=c[1],o=Object(n.useState)(0),l=Object(r.a)(o,2),x=l[0],g=l[1],v=Object(n.useState)(0),y=Object(r.a)(v,2),w=y[0],N=y[1],S=Object(n.useState)(!1),C=Object(r.a)(S,2),T=C[0],D=C[1],I=Object(n.useState)(Date.now()),k=Object(r.a)(I,2),F=k[0],P=k[1],_=Object(n.useState)(Date.now()),A=Object(r.a)(_,2),E=A[0],B=A[1],U=Object(n.useState)(""),q=Object(r.a)(U,2),z=q[0],H=q[1],M=Object(n.useState)(0),J=Object(r.a)(M,2),Y=(J[0],J[1],Object(n.useState)(!1)),W=Object(r.a)(Y,2),G=W[0],L=W[1],R=Object(n.useState)(!1),Z=Object(r.a)(R,2),Q=Z[0],K=Z[1],V=function(e){var t={user_id:localStorage.getItem("user-id"),q_id:z,resp_time:E,init_guess:x,final_guess:e};p({url:"".concat(h,"answer"),method:"POST",data:t}).then((function(e){console.log(e)}))};return Object(n.useEffect)((function(){if(console.log("Once"),void 0!==e.imgName){var t=e.imgName.split(".")[0];H(t)}}),[e.imgName]),Object(f.jsx)(d.a,{title:"AI suggestion dialog",centered:!0,visible:e.openModal,footer:null,children:Object(f.jsxs)("div",{className:"pop-container",children:[Object(f.jsx)("div",{children:"Please provide your best estimate of the number of penguins you saw in the image."}),T?Object(f.jsxs)("div",{children:[Object(f.jsxs)(u.a,{gutter:16,style:{marginBottom:"40px"},children:[Object(f.jsx)(b.a,{span:12,children:Object(f.jsxs)("div",{className:"modal-col",children:[Object(f.jsx)("div",{className:"estimate-text",children:"Your estimate:"}),Object(f.jsx)("div",{className:"text-box",children:x})]})}),Object(f.jsx)(b.a,{span:12,children:Object(f.jsxs)("div",{className:"modal-col",children:[Object(f.jsx)("div",{className:"estimate-text",children:"AI's suggestion:"}),Object(f.jsx)("div",{className:"text-box",children:"25"})]})})]}),Object(f.jsxs)("div",{className:"lower-modal",children:[Object(f.jsx)("div",{children:"Would you like to update your answer based on the AI's suggestion?"}),Object(f.jsxs)(u.a,{gutter:0,style:{marginBottom:"40px"},children:[Object(f.jsx)(b.a,{span:12,children:Object(f.jsxs)("div",{className:"modal-col",children:[Object(f.jsx)("div",{className:"estimate-text",children:"Update your estimate:"}),Object(f.jsx)(m.a,{className:"text-box",placeholder:x,onChange:function(e){N(e.target.value),B(((Date.now()-F)/1e3).toFixed(2))},disabled:Q})]})}),Object(f.jsx)(b.a,{span:12,children:Object(f.jsx)("div",{className:"modal-col",children:Object(f.jsx)("div",{className:"estimate-text",children:Object(f.jsx)(t,{title:"Countdown",value:s,onFinish:function(){0===w?(N(x),V(x)):V(w),L(!0),K(!0)},format:"mm:ss"})})})})]}),G?Object(f.jsx)("div",{style:{textAlign:"center"},children:Object(f.jsx)(O.a,{type:"primary",size:"large",onClick:function(){e.modalTimesUp(),g(0),N(0),D(!1),K(!1),L(!1)},children:"Finish Tryout"})}):Object(f.jsx)("div",{})]})]}):Object(f.jsx)("div",{children:Object(f.jsxs)(u.a,{gutter:16,style:{marginBottom:"40px"},children:[Object(f.jsx)(b.a,{span:12,children:Object(f.jsxs)("div",{className:"modal-col",children:[Object(f.jsx)("div",{className:"estimate-text",children:"Your estimate:"}),Object(f.jsx)(m.a,{className:"text-box",placeholder:"0",onChange:function(e){g(e.target.value)}})]})}),Object(f.jsx)(b.a,{span:12,children:Object(f.jsx)("div",{className:"modal-col",children:Object(f.jsx)(O.a,{type:"primary",size:"large",style:{marginTop:"42px"},onClick:function(){D(!0),i(Date.now()+15e3),P(Date.now())},children:"Confirm"})})})]})})]})})}),E=(a(119),function(){var e=Object(n.useState)([]),t=Object(r.a)(e,2),a=(t[0],t[1],Object(n.useState)(0)),c=Object(r.a)(a,2),s=(c[0],c[1],Object(n.useState)("")),i=Object(r.a)(s,2),o=i[0],l=(i[1],Object(n.useState)([])),d=Object(r.a)(l,2),u=(d[0],d[1],Object(n.useState)(!1)),b=Object(r.a)(u,2),m=b[0],O=b[1],h=Object(n.useState)(0),x=Object(r.a)(h,2),g=(x[0],x[1],Object(n.useState)(!1)),p=Object(r.a)(g,2),v=p[0],y=p[1],w=Object(n.useState)(Date.now()+1e6),N=Object(r.a)(w,2),S=(N[0],N[1],Object(n.useState)(Date.now()+1e6)),C=Object(r.a)(S,2),T=C[0],D=(C[1],Date.now()+1e4),I=j.a.Countdown;return Object(n.useEffect)((function(){}),[]),Object(f.jsxs)("div",{className:"page-container",children:[Object(f.jsx)("div",{className:"title",children:"Counting penguins with AI assistance (Tryout)"}),Object(f.jsxs)("div",{className:"row",children:[Object(f.jsx)("div",{className:"column left-panel",children:Object(f.jsx)("div",{className:"img-frame-container",children:Object(f.jsx)("div",{className:"img-frame",children:v?Object(f.jsx)("img",{src:"./images/blank.jpeg"}):Object(f.jsx)("img",{src:"./images/trail.jpg"})})})}),Object(f.jsx)("div",{className:"column right-panel",children:Object(f.jsx)("div",{className:"countdown-container",children:Object(f.jsx)(I,{title:"Countdown",value:D,onFinish:function(){y(!0),O(!0)},format:"mm:ss"})})})]}),Object(f.jsx)(A,{openModal:m,modalTimesUp:function(){window.location.assign("/#/readyPage"),y(!1),O(!1)},modalCountDown:T,imgName:o})]})}),B=(a(182),a(256)),U={labelCol:{span:4},wrapperCol:{span:14}},q=(N.a.Title,N.a.Text,function(){var e=Object(n.useState)(!1),t=Object(r.a)(e,2);t[0],t[1];return Object(f.jsxs)(B.a,Object(x.a)(Object(x.a)({},U),{},{layout:"horizontal",onFinish:function(e){console.log("Success:",e)},onFinishFailed:function(e){console.log("Failed:",e)},children:[Object(f.jsx)(B.a.Item,{label:"Username",name:"username",rules:[{required:!0,message:"Please input your username!"}],children:Object(f.jsx)(m.a,{})}),Object(f.jsx)(B.a.Item,{label:"Password",name:"password",rules:[{required:!0,message:"Please input your password!"}],children:Object(f.jsx)(m.a,{})}),Object(f.jsx)(B.a.Item,{children:Object(f.jsx)(O.a,{type:"primary",htmlType:"submit",children:"Submit"})})]}))}),z=function(){return Object(f.jsxs)(o.c,{children:[Object(f.jsx)(o.a,{path:"/",component:I}),Object(f.jsx)(o.a,{exact:!0,path:"/trailPage",component:E}),Object(f.jsx)(o.a,{exact:!0,path:"/readyPage",component:_}),Object(f.jsx)(o.a,{exact:!0,path:"/demographic",component:q}),Object(f.jsx)(o.a,{exact:!0,path:"/questionnaire",component:P}),Object(f.jsx)(o.a,{exact:!0,path:"/mainpage",component:w}),Object(f.jsx)(o.a,{exact:!0,path:"/404",component:F})]})},H=a(141);var M=function(){return Object(f.jsx)(H.a,{children:Object(f.jsx)("div",{className:"App",children:Object(f.jsx)(z,{})})})},J=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,262)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),s(e),i(e)}))};a(249);i.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(M,{})}),document.getElementById("root")),J()}},[[251,1,2]]]);
//# sourceMappingURL=main.5673c143.chunk.js.map