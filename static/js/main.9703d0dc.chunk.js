(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{176:function(e,t,a){},177:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(11),i=a.n(o),s=a(10),r=a(28),l=a(225),d=a(220),j=a(251),u=a(14),b=a(227),h=a(55),p=a(216),m=a(218),O=a(115),x=a.n(O).a.create({baseURL:"https://aakogako.herokuapp.com/api/v1/",timeout:5e3,withCredentials:!0,headers:{"Content-Type":"application/json",accept:"application/json"}}),g="auth/token/refresh/";x.interceptors.response.use((function(e){return e}),(function(e){var t=e.config;return 401===e.response.status&&t.url===g?(window.location.pathname="/logout",Promise.reject(e)):401!==e.response.status||t._retry?Promise.reject(e):(t._retry=!0,x.post(g).then((function(e){if(200===e.status)return x(t)})))}));var f=x,v=a(17),y=a(13),w=function(e){return{type:"INSERT_USER",payload:e}},C=a(226),S=a(81),k=a(1),N=function(e){var t=e.message,a=e.type;return Object(k.jsxs)("div",{className:"alert alert-".concat(a," alert-dismissible fade show"),role:"alert",children:[t,Object(k.jsx)("button",{type:"button",className:"close","data-dismiss":"alert","aria-label":"Close",children:Object(k.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]})},_=Object(p.a)((function(e){return{buttonProgress:{color:S.a[500],position:"absolute",top:"50%",left:"50%",marginTop:-12,marginLeft:-12},buttonWrapper:{margin:e.spacing(1),position:"relative"},paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function E(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],c=t[1],o=Object(v.b)(),i=Object(y.g)(),p=_(),O=Object(n.useState)(!1),x=Object(s.a)(O,2),g=x[0],S=x[1],E=Object(n.useState)(!1),T=Object(s.a)(E,2),D=(T[0],T[1]),I=Object(r.a)({initialValues:{username:"",password:""},onSubmit:function(e){S(!0),f.post("auth/login/",e,{withCredentials:!0}).then((function(e){console.clear(),localStorage.setItem("access_token",e.data.access_token),localStorage.setItem("user",JSON.stringify(e.data.user)),o({type:"TRUE"}),o(w(e.data.user)),i.push("/accounts"),D(!0)})).catch((function(e){D(!1),c([{message:e.response.data.non_field_errors[0],type:"danger"}])})).finally((function(){return S(!1)}))}});return Object(k.jsxs)(m.a,{component:"main",maxWidth:"xs",children:[Object(k.jsx)(d.a,{}),Object(k.jsxs)("div",{className:p.paper,children:[Object(k.jsx)(h.a,{component:"h1",variant:"h5",children:"Sign in"}),Object(k.jsxs)("form",{className:p.form,onSubmit:I.handleSubmit,children:[Object(k.jsx)(j.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"username",label:"Username",name:"username",onChange:I.handleChange,value:I.values.username,autoFocus:!0}),Object(k.jsx)(j.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:I.handleChange,value:I.values.password}),Object(k.jsxs)("div",{className:p.buttonWrapper,children:[Object(k.jsx)(l.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",disabled:g,className:p.submit,children:"Sign In"}),g&&Object(k.jsx)(C.a,{size:24,className:p.buttonProgress})]}),Object(k.jsxs)(b.a,{container:!0,children:[Object(k.jsx)(b.a,{item:!0,xs:!0,children:Object(k.jsx)(u.b,{href:"#",variant:"body2",children:"Forgot password?"})}),Object(k.jsx)(b.a,{item:!0,children:Object(k.jsx)(u.b,{to:"/register",variant:"body2",children:"Don't have an account? Sign Up"})})]})]})]}),a.map((function(e){return Object(k.jsx)(N,{message:e.message,type:e.type})}))]})}var T=function(){var e=Object(v.b)();return Object(n.useEffect)((function(){f.post("auth/logout/").then((function(t){localStorage.removeItem("access_token"),localStorage.removeItem("user"),e(w({})),e({type:"REMOVE_BOOKS",payload:{}}),e({type:"FALSE"})}))}),[]),Object(k.jsxs)("div",{className:"white-container",style:{padding:"2vh 5vw",margin:"2vh"},children:[Object(k.jsx)("h1",{children:"You are Logged Out!"}),Object(k.jsx)("hr",{}),Object(k.jsx)(u.b,{to:"/login",children:"Log in again?"})]})},D=a(23),I=a(24),W=a(253),P=a(247),R=a(121),B=a.n(R);function F(){var e=Object(y.g)(),t=Object.freeze({email:"",username:"",password1:"",password2:""}),a=Object(n.useState)([]),c=Object(s.a)(a,2),o=c[0],i=c[1],r=Object(n.useState)(!1),O=Object(s.a)(r,2),x=O[0],g=O[1],v=Object(n.useState)(!1),w=Object(s.a)(v,2),_=(w[0],w[1]),E=Object(n.useState)(t),T=Object(s.a)(E,2),R=T[0],F=T[1],A=function(e){F(Object(I.a)(Object(I.a)({},R),{},Object(D.a)({},e.target.name,e.target.value.trim())))},U=Object(p.a)((function(e){return{buttonProgress:{color:S.a[500],position:"absolute",top:"50%",left:"50%",marginTop:-12,marginLeft:-12},buttonWrapper:{margin:e.spacing(1),position:"relative"},paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}}))();return Object(k.jsxs)(m.a,{component:"main",maxWidth:"xs",children:[Object(k.jsxs)("div",{className:"white-container",children:[Object(k.jsx)(d.a,{}),Object(k.jsxs)("div",{className:U.paper,children:[Object(k.jsx)(W.a,{className:U.avatar,children:Object(k.jsx)(B.a,{})}),Object(k.jsx)(h.a,{component:"h1",variant:"h5",children:"Sign up"}),Object(k.jsxs)("form",{className:U.form,noValidate:!0,children:[Object(k.jsxs)(b.a,{container:!0,spacing:2,children:[Object(k.jsx)(b.a,{item:!0,xs:12,children:Object(k.jsx)(j.a,{autoComplete:"username",name:"username",variant:"outlined",required:!0,fullWidth:!0,id:"username",label:"Username",autoFocus:!0,onChange:function(e){return A(e)}})}),Object(k.jsx)(b.a,{item:!0,xs:12,children:Object(k.jsx)(j.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",onChange:function(e){return A(e)}})}),Object(k.jsx)(b.a,{item:!0,xs:12,children:Object(k.jsx)(j.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password1",label:"Password",type:"password",id:"password1",autoComplete:"current-password1",onChange:function(e){return A(e)}})}),Object(k.jsx)(b.a,{item:!0,xs:12,children:Object(k.jsx)(j.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password2",label:"Confirm Password",type:"password",id:"password2",autoComplete:"current-password2",onChange:function(e){return A(e)}})})]}),Object(k.jsxs)("div",{className:U.buttonWrapper,children:[Object(k.jsx)(l.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:U.submit,disabled:x,onClick:function(t){return function(t){t.preventDefault(),g(!0),f.post("auth/register/",R).then((function(t){_(!0),e.push("/login")})).catch((function(e){_(!1),console.log(e);var t=Object.entries(e.response.data)[0][1];i([{message:t,type:"warning"}])})).finally((function(){return g(!1)}))}(t)},children:"Sign Up"}),x&&Object(k.jsx)(C.a,{size:24,className:U.buttonProgress})]}),Object(k.jsx)(b.a,{container:!0,justify:"flex-end",children:Object(k.jsx)(b.a,{item:!0,children:Object(k.jsx)(u.b,{to:"/login",variant:"body2",children:"Already have an account? Sign in"})})})]})]}),Object(k.jsx)(P.a,{mt:5})]}),o.map((function(e){return Object(k.jsx)(N,{message:e.message,type:e.type})}))]})}var A=a(127),U=["component"],L=function(e){var t=e.component,a=Object(A.a)(e,U);return Object(k.jsx)(y.b,Object(I.a)(Object(I.a)({},a),{},{render:function(e){return localStorage.getItem("access_token")?Object(k.jsx)(t,Object(I.a)({},e)):Object(k.jsx)(y.a,{to:{pathname:"login/",state:{from:e.location}}})}}))},V=(a(176),Object(p.a)({root:{textDecoration:"none"},card:{boxSizing:"border-box",border:"4px solid #1a61bd",borderRadius:"5px",textDecoration:"none",padding:"15px 5px",minHeight:"100%"},cardTitle:{fontSize:"26px",textDecoration:"none",color:"#1a61bd"},cardBalance:{color:"green",right:"0"}})),z=function(e){var t=e.id,a=e.title,n=e.balance,c=V(),o="accounts/".concat(t);return Object(k.jsx)("div",{className:c.card,children:Object(k.jsxs)(u.b,{className:c.root,to:o,children:[Object(k.jsx)("div",{className:c.cardTitle,children:a}),Object(k.jsxs)("div",{className:c.cardBalance,children:["Rs. ",n]})]})})},M=a(78),q=a.n(M),K=a(228),Y=a(231),H=a(230),J=a(229);function X(e){var t=e.account_book,a=e._type,n=e.refreshForm,o=c.a.useState(!1),i=Object(s.a)(o,2),d=i[0],u=i[1],b=function(){h.handleReset(),u(!1)},h=Object(r.a)({initialValues:{description:"",amount:0,_type:a},onSubmit:function(e){f.post("account-books/".concat(t,"/transactions/"),e,{withCredentials:!0}).then((function(e){b(),n()})).catch((function(e){return console.log(e)}))}});return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(l.a,{variant:"contained",color:"primary",onClick:function(){u(!0)},disableElevation:!0,fullWidth:!0,children:"DEBIT"===a?"Add Income":"Add Expense"}),Object(k.jsxs)(K.a,{open:d,onClose:b,"aria-labelledby":"form-dialog-title",children:[Object(k.jsxs)(J.a,{id:"form-dialog-title",children:["Add ","DEBIT"===a?"Income":"Expense"," Transaction"]}),Object(k.jsxs)("form",{action:"",onSubmit:h.handleSubmit,children:[Object(k.jsxs)(H.a,{children:[Object(k.jsx)(j.a,{autoFocus:!0,margin:"dense",id:"description",label:"Description",type:"text",fullWidth:!0,onChange:h.handleChange,value:h.values.description,placeholder:"Description"}),Object(k.jsx)(j.a,{margin:"dense",id:"amount",label:"Amount",type:"number",fullWidth:!0,onChange:h.handleChange,value:h.values.amount})]}),Object(k.jsxs)(Y.a,{children:[Object(k.jsx)(l.a,{onClick:b,color:"primary",children:"Cancel"}),Object(k.jsx)(l.a,{onClick:h.handleSubmit,color:"primary",children:"DEBIT"===a?"Add Income":"Add Expense"})]})]})]})]})}var G=a(250),Q=a(248),Z=Object(p.a)({paginationContainer:{display:"flex",right:"0px",justifyContent:"flex-end"},paginationItem:{padding:"10px 0px",alignSelf:"center"}}),$=function(e){var t=e.dataCount,a=e.rowsPerPage,n=e.page,c=e.handleChangePage,o=e.handleChangeRowsPerPage,i=Z();return Object(k.jsxs)("div",{className:i.paginationContainer,children:[Object(k.jsx)(G.a,{className:i.paginationItem,rowsPerPageOptions:[5,10,25,50,100,200,500],component:"div",count:t,rowsPerPage:a,page:n,onChangePage:function(e,t){return c(e,t)},onChangeRowsPerPage:function(e){o(e)},ActionsComponent:function(){return Object(k.jsx)(k.Fragment,{})}}),Object(k.jsx)(Q.a,{color:"primary",count:Math.ceil(t/a),page:n+1,onChange:function(e,t){return c(e,t-1)},className:i.paginationItem})]})},ee=a(223),te=a(249),ae=a(234),ne=a(238),ce=a(236),oe=a(233),ie=a(240),se=a(237),re=a(239);function le(e){var t=e.account_book,a=e.trans_id,n=e.description,o=e.amount,i=e.refreshForm,d=c.a.useState(!1),u=Object(s.a)(d,2),b=u[0],h=u[1],p=function(){m.handleReset(),h(!1)},m=Object(r.a)({initialValues:{description:n,amount:o},onSubmit:function(e){f.patch("account-books/".concat(t,"/transactions/").concat(a,"/"),e,{withCredentials:!0}).then((function(e){console.log(e),p(),i()})).catch((function(e){return console.log(e)}))}});return Object(k.jsxs)("div",{children:[Object(k.jsx)(l.a,{variant:"outlined",disableElevation:!0,color:"default",onClick:function(){h(!0)},children:"\u270e"}),Object(k.jsxs)(K.a,{open:b,onClose:p,"aria-labelledby":"form-dialog-title",children:[Object(k.jsx)(J.a,{id:"form-dialog-title",children:"Edit Transaction"}),Object(k.jsxs)("form",{action:"",onSubmit:m.handleSubmit,children:[Object(k.jsxs)(H.a,{children:[Object(k.jsx)(j.a,{autoFocus:!0,margin:"dense",id:"description",label:"Description",type:"text",fullWidth:!0,onChange:m.handleChange,value:m.values.description,placeholder:"Description"}),Object(k.jsx)(j.a,{margin:"dense",id:"amount",label:"Amount",type:"number",fullWidth:!0,onChange:m.handleChange,value:m.values.amount})]}),Object(k.jsxs)(Y.a,{children:[Object(k.jsx)(l.a,{onClick:p,color:"primary",children:"Cancel"}),Object(k.jsx)(l.a,{onClick:function(){f.delete("account-books/".concat(t,"/transactions/").concat(a,"/"),{withCredentials:!0}).then((function(e){p(),i()})).catch((function(e){return console.log(e)}))},color:"primary",children:"Delete"}),Object(k.jsx)(l.a,{onClick:m.handleSubmit,color:"primary",children:"Update"})]})]})]})]})}var de=a(80),je=Object(p.a)({greenRow:{backgroundColor:S.a[200]},redRow:{backgroundColor:de.a[200]},root:{marginTop:"10px",width:"100%",padding:"10px"}}),ue=function(e){var t=e.trans,a=e.accountBook,n=e.refreshForm,c=je();return Object(k.jsxs)(ce.a,{tabIndex:-1,className:"DEBIT"===t._type?c.greenRow:c.redRow,children:[Object(k.jsx)(oe.a,{children:t.date}),Object(k.jsx)(oe.a,{children:t.description}),Object(k.jsx)(oe.a,{children:t.amount}),Object(k.jsx)(oe.a,{children:Object(k.jsx)(le,{account_book:a,trans_id:t.id,description:t.description,amount:t.amount,refreshForm:n})})]},t.id)},be=Object(p.a)({root:{margin:"0px 5px",padding:"5px"},container:{},formEntity:{},btnHolder:{marginTop:"25px",padding:"5px 25px"},accountTitle:{fontSize:"24px",fontWeight:"600"},accountBalance:{fontSize:"24px",color:"green"}}),he=function(){var e=be(),t=Object(y.h)().account_id,a=Object(n.useState)([]),o=Object(s.a)(a,2),i=o[0],r=o[1],d=Object(n.useState)([]),u=Object(s.a)(d,2),h=u[0],p=u[1],m=c.a.useState(0),O=Object(s.a)(m,2),x=O[0],g=O[1],v=c.a.useState(10),w=Object(s.a)(v,2),C=w[0],S=w[1],N=c.a.useState(0),_=Object(s.a)(N,2),E=_[0],T=_[1],W=Object(n.useState)(0),P=Object(s.a)(W,2),R=P[0],B=P[1],F=Object.freeze({type:"",sdate:"",edate:"",search:""}),A=c.a.useState(F),U=Object(s.a)(A,2),L=U[0],V=U[1],z=function(e){g(0);var t=e.target.value;if("sdate"===e.target.name||"edate"===e.target.name){var a;try{a=new Date(t).toISOString()}catch(n){a=""}V(Object(I.a)(Object(I.a)({},L),{},Object(D.a)({},e.target.name,a)))}else V(Object(I.a)(Object(I.a)({},L),{},Object(D.a)({},e.target.name,t.trim())))},M="account-books/".concat(t,"/transactions/?limit=").concat(C,"&offset=").concat(x*C,"&_type=").concat(L.type,"&search=").concat(L.search,"&date__gte=").concat(L.sdate||"","&date__lte=").concat(L.edate||""),q=function(){B(R+1)};Object(n.useEffect)((function(){f.get("account-books/".concat(t,"/")).then((function(e){p(e.data)})).catch((function(e){return console.log(e)}))}),[R,t]);return Object(n.useEffect)((function(){f.get(M).then((function(e){r(e.data.results),T(e.data.count)})).catch((function(e){return console.log(e)}))}),[M,R,t]),Object(k.jsxs)("div",{className:"container mt-4",children:[Object(k.jsxs)("h4",{className:e.accountTitle,children:["Title: ",h.title]}),Object(k.jsxs)("h4",{className:e.accountTitle,children:["Balance: Rs.",Object(k.jsxs)("span",{id:"balance_amt",className:e.accountBalance,children:[" ",h.balance]}),"/-"]}),Object(k.jsx)("hr",{}),Object(k.jsx)("form",{action:"",method:"get",id:"filter-form",className:e.root,onSubmit:function(e){return e.preventDefault()},children:Object(k.jsxs)(b.a,{container:!0,lg:12,spacing:1,children:[Object(k.jsx)(b.a,{item:!0,spacing:2,xs:12,sm:4,md:4,lg:4,className:e.formEntity,children:Object(k.jsxs)(ee.a,{fullWidth:!0,children:[Object(k.jsx)("label",{htmlFor:"sdate",children:"Transaction Type:"}),Object(k.jsx)("br",{}),Object(k.jsx)(te.a,{variant:"outlined",id:"type",name:"type",type:"text",displayEmpty:!0,value:L.type,onChange:z,children:[{value:"",title:"All Transaction"},{value:"DEBIT",title:"Income"},{value:"CREDIT",title:"Expenses"}].map((function(e){return Object(k.jsx)(ae.a,{value:e.value,children:e.title},e.value)}))})]})}),Object(k.jsx)(b.a,{item:!0,spacing:2,xs:12,sm:4,md:4,lg:4,className:e.formEntity,children:Object(k.jsxs)(ee.a,{fullWidth:!0,children:[Object(k.jsx)("label",{htmlFor:"sdate",children:"Start Date:"}),Object(k.jsx)("br",{}),Object(k.jsx)(j.a,{type:"date",name:"sdate",variant:"outlined",onChange:function(e){z(e)}})]})}),Object(k.jsx)(b.a,{item:!0,spacing:2,xs:12,sm:4,md:4,lg:4,className:e.formEntity,children:Object(k.jsxs)(ee.a,{fullWidth:!0,children:[Object(k.jsx)("label",{htmlFor:"sdate",children:"End Date:"}),Object(k.jsx)("br",{}),Object(k.jsx)(j.a,{type:"date",name:"edate",variant:"outlined",onChange:function(e){z(e)}})]})}),Object(k.jsx)(b.a,{item:!0,spacing:2,xs:12,sm:6,md:6,lg:6,className:e.formEntity,children:Object(k.jsxs)(ee.a,{fullWidth:!0,children:[Object(k.jsx)("label",{htmlFor:"sdate",children:"Search:"}),Object(k.jsx)("br",{}),Object(k.jsx)(j.a,{variant:"outlined",name:"search",placeholder:"Type and press enter",onKeyUp:function(e){"Enter"===e.code&&(g(0),z(e))}})]})}),Object(k.jsxs)(b.a,{xs:12,sm:6,md:6,lg:6,item:!0,spacing:1,container:!0,className:e.btnHolder,children:[Object(k.jsx)(b.a,{item:!0,spacing:4,xs:4,sm:4,md:4,lg:4,children:Object(k.jsx)(l.a,{variant:"contained",color:"primary",disableElevation:!0,fullWidth:!0,onClick:function(e){g(0),V(F)},children:"Clear"})}),Object(k.jsx)(b.a,{item:!0,spacing:4,xs:4,sm:4,md:4,lg:4,children:Object(k.jsx)(X,{account_book:t,_type:"DEBIT",refreshForm:q})}),Object(k.jsx)(b.a,{item:!0,spacing:4,xs:4,sm:4,md:4,lg:4,children:Object(k.jsx)(X,{account_book:t,_type:"CREDIT",refreshForm:q})})]})]})}),Object(k.jsx)("hr",{}),Object(k.jsx)(se.a,{children:Object(k.jsxs)(ne.a,{stickyHeader:!0,"aria-label":"sticky table",children:[Object(k.jsx)(re.a,{children:Object(k.jsxs)(ce.a,{children:[Object(k.jsx)(oe.a,{children:Object(k.jsx)("b",{children:"Date"})}),Object(k.jsx)(oe.a,{children:Object(k.jsx)("b",{children:"Description"})}),Object(k.jsx)(oe.a,{children:Object(k.jsx)("b",{children:"Amount"})}),Object(k.jsx)(oe.a,{children:Object(k.jsx)("b",{children:"Action"})})]})}),Object(k.jsx)(ie.a,{children:i.map((function(e){return Object(k.jsx)(ue,{trans:e,accountBook:t,refreshForm:q})}))})]})}),Object(k.jsx)($,{dataCount:E,rowsPerPage:C,page:x,handleChangePage:function(e,t){g(t)},handleChangeRowsPerPage:function(e){S(parseInt(e.target.value)),g(0)}})]})};function pe(){var e=Object(v.c)((function(e){return e.authenticated})),t=Object(v.b)();c.a.useEffect((function(){e&&f.get("account-books/").then((function(e){t({type:"INSERT_BOOKS",payload:e.data})})).catch((function(e){return console.log(e)}))}),[])}var me=function(){var e=be();pe();var t=Object(y.g)(),a=Object(v.c)((function(e){return e.account_books}));return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)("h3",{className:e.accountTitle,children:"Your Account Books:"}),Object(k.jsx)("hr",{}),Object(k.jsx)(b.a,{container:!0,spacing:1,style:{padding:"10px 0px 0px 0px"},children:a.map((function(e){return Object(k.jsx)(b.a,{item:!0,spacing:12,xs:6,sm:6,md:4,lg:3,children:Object(k.jsx)(z,{id:e.id,title:e.title,balance:e.balance},e.id)})}))}),Object(k.jsx)("div",{className:"add-account-div",children:Object(k.jsxs)(l.a,{variant:"contained",color:"primary",onClick:function(){return t.push("/create-account-book")},children:[Object(k.jsx)(q.a,{}),"Add New Account book"]})})]})},Oe=function(){pe();var e=be(),t=Object(y.g)(),a=Object(v.c)((function(e){return e.account_books}));return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)("h3",{className:e.accountTitle,children:"Edit Your Account Books:"}),Object(k.jsx)("hr",{}),Object(k.jsx)(b.a,{container:!0,spacing:1,style:{padding:"10px 0px 0px 0px"},children:a.map((function(e){return Object(k.jsx)(b.a,{item:!0,spacing:12,xs:6,sm:6,md:4,lg:3,children:Object(k.jsx)(z,{id:e.id,title:e.title,balance:e.balance},e.id)})}))}),Object(k.jsx)("div",{className:"add-account-div",children:Object(k.jsxs)(l.a,{variant:"contained",color:"primary",onClick:function(){return t.push("/create-account-book")},children:[Object(k.jsx)(q.a,{}),"Add New Account book"]})})]})},xe=function(){var e=Object(y.g)(),t=Object(r.a)({initialValues:{title:""},onSubmit:function(t){console.log(t),f.post("account-books/",t,{withCredentials:!0}).then((function(t){e.push("/accounts")})).catch((function(e){console.log(e)}))}});return Object(k.jsxs)("div",{className:"container mt-3",children:[Object(k.jsx)("h1",{children:"Create Account book"}),Object(k.jsx)("hr",{}),Object(k.jsxs)("form",{action:"",method:"post",className:"container mt-4 pt-4",onSubmit:t.handleSubmit,children:[Object(k.jsx)(j.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"title",label:"Title",name:"title",onChange:t.handleChange,value:t.values.title,autoFocus:!0}),Object(k.jsx)(l.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",children:"Create"})]})]})},ge=a(15),fe=a(244),ve=a(235),ye=a(232),we=a(126),Ce=a(124),Se=a.n(Ce),ke=a(125),Ne=a.n(ke),_e=a(4),Ee=a(254),Te=a(224),De=a(242),Ie=a(180),We=a(241),Pe=a(243),Re=a(123),Be=a.n(Re),Fe=a(122),Ae=a.n(Fe),Ue=Object(p.a)((function(e){var t;return{list:{width:250},fullList:{width:"auto"},grow:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:(t={display:"block",color:"white",textDecoration:"none"},Object(D.a)(t,e.breakpoints.up("sm"),{display:"block"}),Object(D.a)(t,"&:hover",{textDecoration:"none",color:"#f0f6db"}),t),search:Object(D.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(ge.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(ge.b)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),inputRoot:{color:"inherit"},inputInput:Object(D.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:"20ch"}),sectionDesktop:Object(D.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(D.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"})}}));function Le(){var e=Object(v.c)((function(e){return e.account_books})),t=Object(v.c)((function(e){return e.user.username})),a=Object(v.c)((function(e){return e.authenticated})),n=c.a.useState({left:!1}),o=Object(s.a)(n,2),i=o[0],r=o[1],d=function(e,t){return function(a){("keydown"!==a.type||"Tab"!==a.key&&"Shift"!==a.key)&&r(Object(I.a)(Object(I.a)({},i),{},Object(D.a)({},e,t)))}},j=Ue(),b=c.a.useState(null),p=Object(s.a)(b,2),m=p[0],O=p[1],x=Boolean(m),g="primary-search-account-menu",f=a?Object(k.jsx)("div",{children:Object(k.jsxs)(we.a,{anchorEl:m,anchorOrigin:{vertical:"top",horizontal:"right"},id:g,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:x,onClose:function(){O(null)},children:[Object(k.jsx)(ae.a,{component:u.b,to:"/profile",children:"My account"}),Object(k.jsx)(ae.a,{component:u.b,to:"/logout",children:"Logout"})]})}):"",y="left";return Object(k.jsxs)("div",{className:j.grow,children:[Object(k.jsx)(fe.a,{position:"static",children:Object(k.jsxs)(ve.a,{children:[a?Object(k.jsx)(l.a,{onClick:d(y,!0),children:Object(k.jsx)(Se.a,{})}):"",Object(k.jsx)(Ee.a,{anchor:y,open:i.left,onClose:d(y,!1),children:function(a){return Object(k.jsxs)("div",{className:Object(_e.a)(j.list,Object(D.a)({},j.fullList,"top"===a||"bottom"===a)),role:"presentation",onClick:d(a,!1),onKeyDown:d(a,!1),children:[Object(k.jsx)(Te.a,{children:Object(k.jsx)(Ie.a,{button:!0,children:Object(k.jsxs)(We.a,{children:[Object(k.jsx)(Ae.a,{fontSize:"large"}),Object(k.jsxs)("h4",{children:[" @",t]})]})})}),Object(k.jsx)(De.a,{}),Object(k.jsxs)(Te.a,{children:[Object(k.jsx)(Ie.a,{button:!0,component:u.b,to:"/accounts",children:Object(k.jsx)(We.a,{children:Object(k.jsx)("h6",{children:"My Account Books"})})}),Object(k.jsx)(De.a,{}),e.map((function(e){return Object(k.jsxs)(Ie.a,{button:!0,component:u.b,to:"/accounts/".concat(e.id),children:[Object(k.jsx)(We.a,{children:Object(k.jsx)(Be.a,{})}),Object(k.jsx)(Pe.a,{primary:e.title})]},e.id)})),Object(k.jsx)(De.a,{}),Object(k.jsx)(Ie.a,{button:!0,component:u.b,to:"/manage/accounts",children:Object(k.jsx)(We.a,{children:Object(k.jsx)("h6",{children:"Manage My Books"})})}),Object(k.jsx)(De.a,{})]})]})}(y)}),Object(k.jsx)(h.a,{className:j.title,variant:"h6",noWrap:!0,component:u.b,to:"/accounts",children:"Expense Tracker"}),Object(k.jsx)("div",{className:j.grow}),Object(k.jsx)("div",{children:a?Object(k.jsx)(ye.a,{edge:"end","aria-label":"account of current user","aria-controls":g,"aria-haspopup":"true",onClick:function(e){O(e.currentTarget)},color:"inherit",children:Object(k.jsx)(Ne.a,{})}):""})]})}),f]})}var Ve=a(245),ze=Object(p.a)((function(e){return{footer:Object(D.a)({borderTop:"1px solid ".concat(e.palette.divider),marginTop:e.spacing(8),paddingTop:e.spacing(3),paddingBottom:e.spacing(3)},e.breakpoints.up("sm"),{paddingTop:e.spacing(6),paddingBottom:e.spacing(6)})}}));function Me(){return Object(k.jsxs)(h.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(k.jsx)(Ve.a,{color:"inherit",href:"https://nischalstha9.github.io.com/",children:"Nischal Shrestha"})," ",(new Date).getFullYear(),"."]})}var qe=function(){var e=ze();return Object(k.jsx)(c.a.Fragment,{children:Object(k.jsx)(m.a,{maxWidth:"md",component:"footer",className:e.footer,children:Object(k.jsx)(P.a,{mt:5,children:Object(k.jsx)(Me,{})})})})},Ke=a(246);function Ye(){var e=Object(y.g)(),t=Object(n.useState)({}),a=Object(s.a)(t,2),c=a[0],o=a[1],i=Object(n.useState)([]),d=Object(s.a)(i,2),u=d[0],b=d[1],h=Object(y.h)().account_id;Object(n.useEffect)((function(){f.patch("account-books/".concat(h,"/"),{withCredentials:!0}).then((function(e){o(e.data)})).catch((function(e){return console.log(e)}))}),[]);var p=Object(r.a)({initialValues:{title:c.title},onSubmit:function(t){f.patch("account-books/".concat(c.id,"/"),t,{withCredentials:!0}).then((function(t){e.push("/manage/accounts")})).catch((function(e){return console.log(e)}))}}),m=Object(r.a)({initialValues:{password:""},onSubmit:function(t){console.log(t),f.delete("account-books/".concat(c.id,"/"),{data:t},{withCredentials:!0}).then((function(t){e.push("/manage/accounts")})).catch((function(e){var t=Object.entries(e.response.data)[0][1];console.log(t),b([{message:t,type:"danger"}])}))}});return Object(k.jsxs)("div",{className:"container mt-3",children:[Object(k.jsxs)("div",{className:"jumbotron",children:[Object(k.jsxs)("h3",{children:['Update Book "',c.title,'"']}),Object(k.jsx)("hr",{}),Object(k.jsx)(J.a,{id:"form-dialog-title",children:"Title:"}),Object(k.jsxs)(H.a,{children:[Object(k.jsx)(j.a,{autoFocus:!0,margin:"dense",id:"title",label:"Title",type:"text",fullWidth:!0,onChange:p.handleChange,value:p.values.title,placeholder:"Title"}),Object(k.jsx)(l.a,{variant:"contained",color:"secondary",className:"btn btn-warning mt-3",onClick:p.handleSubmit,children:"Update"})]})]}),Object(k.jsxs)("div",{className:"",children:[Object(k.jsxs)("h3",{children:['Delete Book "',c.title,'"']}),Object(k.jsx)("hr",{}),Object(k.jsxs)(J.a,{id:"form-dialog-title",children:['Confirm Delete Account Book: "',c.title,'"']}),Object(k.jsxs)("form",{action:"",onSubmit:m.handleSubmit,children:[Object(k.jsxs)(H.a,{children:[Object(k.jsx)(Ke.a,{children:"Deleting Account Book will delete all of your transactions in respective account book. This action is irreversible. Enter your password to continue."}),Object(k.jsx)(j.a,{margin:"dense",id:"password",label:"Password",type:"password",fullWidth:!0,onChange:m.handleChange,value:m.values.password,placeholder:"Your Password"})]}),Object(k.jsx)(Y.a,{children:Object(k.jsx)(l.a,{variant:"outlined",color:"secondary",onClick:m.handleSubmit,className:"btn btn-outline-danger",children:"Confirm Delete"})})]}),u.map((function(e){return Object(k.jsx)(N,{message:e.message,type:e.type})}))]})]})}var He=function(){var e=Object(v.c)((function(e){return e.user})),t=Object(y.g)();return Object(k.jsxs)("div",{className:"container mt-3",children:[Object(k.jsx)("h1",{children:"Profile"}),Object(k.jsx)("hr",{}),Object(k.jsx)("h4",{children:"Username:"}),Object(k.jsx)("h5",{children:e.username}),Object(k.jsx)("h4",{children:"Email:"}),Object(k.jsx)("h5",{children:e.email}),Object(k.jsx)(l.a,{variant:"outlined",color:"secondary",className:"btn btn-outline-warning",onClick:function(){return t.push("/change-password")},children:"Change Password"})]})},Je=Object(p.a)((function(e){return{buttonProgress:{color:S.a[500],position:"absolute",top:"50%",left:"50%",marginTop:-12,marginLeft:-12},buttonWrapper:{margin:e.spacing(1),position:"relative"},paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function Xe(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],c=t[1],o=Object(y.g)(),i=Je(),p=Object(n.useState)(!1),O=Object(s.a)(p,2),x=O[0],g=O[1],v=Object(r.a)({initialValues:{old_password:"",new_password1:"",new_password2:""},onSubmit:function(e){g(!0),console.log(e),f.post("auth/password/change/",e,{withCredentials:!0}).then((function(e){g(!1),console.clear(),o.push("/logout")})).catch((function(e){g(!1),console.log(e.response.data);var t=Object.entries(e.response.data)[0][1][0];console.log(t),c([{message:t,type:"danger"}])}))}});return Object(k.jsxs)(m.a,{component:"main",maxWidth:"xs",children:[Object(k.jsx)(d.a,{}),Object(k.jsxs)("div",{className:i.paper,children:[Object(k.jsx)(h.a,{component:"h1",variant:"h5",children:"Change Password"}),Object(k.jsxs)("form",{className:i.form,onSubmit:v.handleSubmit,children:[Object(k.jsx)(j.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"old_password",label:"Old Password",name:"old_password",type:"password",onChange:v.handleChange,value:v.values.old_password,autoFocus:!0}),Object(k.jsx)(j.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,type:"password",label:"New Password",id:"new_password1",onChange:v.handleChange,value:v.values.new_password1,name:"new_password1"}),Object(k.jsx)(j.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,type:"password",label:"Confirm New Password",id:"new_password2",onChange:v.handleChange,value:v.values.new_password2,name:"new_password2"}),Object(k.jsxs)("div",{className:i.buttonWrapper,children:[Object(k.jsx)(l.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",disabled:x,className:i.submit,children:"Change Password"}),x&&Object(k.jsx)(C.a,{size:24,className:i.buttonProgress})]}),Object(k.jsx)(b.a,{container:!0,children:Object(k.jsx)(b.a,{item:!0,xs:!0,children:Object(k.jsx)(u.b,{href:"#",variant:"body2",children:"Forgot password?"})})})]})]}),a.map((function(e){return Object(k.jsx)(N,{message:e.message,type:e.type})}))]})}var Ge=localStorage.getItem("access_token"),Qe=JSON.parse(localStorage.getItem("user"));var Ze=function(){var e=Object(v.b)();Ge&&(e({type:"TRUE"}),e(w(Qe)));var t=Object(v.c)((function(e){return e.authenticated}));return Object(k.jsx)("div",{className:"App",children:Object(k.jsxs)(u.a,{children:[Object(k.jsx)(Le,{}),Object(k.jsx)(y.d,{children:Object(k.jsxs)(m.a,{className:"motherboard",children:[Object(k.jsx)(y.b,{path:"/logout",component:T}),Object(k.jsx)(y.b,{exact:!0,path:"/register",component:F}),Object(k.jsx)(y.b,{exact:!0,path:"/login",component:E}),Object(k.jsx)(y.b,{exact:!0,path:"/",children:t?Object(k.jsx)(y.a,{to:"/accounts"}):Object(k.jsx)(y.a,{to:"/login"})}),Object(k.jsx)(L,{exact:!0,path:"/accounts",component:me}),Object(k.jsx)(L,{exact:!0,path:"/manage/accounts",component:Oe}),Object(k.jsx)(L,{exact:!0,path:"/manage/accounts/:account_id",component:Ye}),Object(k.jsx)(L,{exact:!0,path:"/create-account-book",component:xe}),Object(k.jsx)(L,{path:"/accounts/:account_id",component:he}),Object(k.jsx)(L,{path:"/profile",component:He}),Object(k.jsx)(L,{path:"/change-password",component:Xe})]})}),Object(k.jsx)(qe,{})]})})},$e=a(79),et=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TRUE":return!0;case"FALSE":return!1;default:return e}},tt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INSERT_TOKEN":return t.payload;case"REMOVE_TOKEN":return"";default:return e}},at=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INSERT_USER":return t.payload;case"REMOVE_USER":return{};default:return e}},nt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INSERT_BOOKS":return t.payload;case"REMOVE_BOOKS":return[];default:return e}},ct=Object($e.a)({authenticated:et,token:tt,user:at,account_books:nt}),ot=Object($e.b)(ct,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());i.a.render(Object(k.jsx)(v.a,{store:ot,children:Object(k.jsx)(Ze,{})}),document.getElementById("root"))}},[[177,1,2]]]);
//# sourceMappingURL=main.9703d0dc.chunk.js.map