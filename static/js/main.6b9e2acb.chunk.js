(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{173:function(e,t,n){},174:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(11),s=n.n(o),i=n(10),r=n(27),l=n(176),d=n(218),j=n(242),u=n(14),b=n(223),h=n(53),p=n(214),m=n(216),O=n(112),x=n.n(O).a.create({baseURL:"https://aakogako.herokuapp.com/api/v1/",timeout:5e3,withCredentials:!0,headers:{"Content-Type":"application/json",accept:"application/json"}}),g="auth/token/refresh/";x.interceptors.response.use((function(e){return e}),(function(e){var t=e.config;return 401===e.response.status&&t.url===g?(window.location.pathname="/logout",Promise.reject(e)):401!==e.response.status||t._retry?Promise.reject(e):(t._retry=!0,x.post(g).then((function(e){if(200===e.status)return x(t)})))}));var f=x,v=n(17),w=n(13),y=function(e){return{type:"INSERT_USER",payload:e}},C=n(222),k=n(77),N=n(1),S=function(e){var t=e.message,n=e.type;return Object(N.jsxs)("div",{className:"alert alert-".concat(n," alert-dismissible fade show"),role:"alert",children:[t,Object(N.jsx)("button",{type:"button",className:"close","data-dismiss":"alert","aria-label":"Close",children:Object(N.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]})},_=Object(p.a)((function(e){return{buttonProgress:{color:k.a[500],position:"absolute",top:"50%",left:"50%",marginTop:-12,marginLeft:-12},buttonWrapper:{margin:e.spacing(1),position:"relative"},paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function E(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],c=t[1],o=Object(v.b)(),s=Object(w.g)(),p=_(),O=Object(a.useState)(!1),x=Object(i.a)(O,2),g=x[0],k=x[1],E=Object(a.useState)(!1),T=Object(i.a)(E,2),P=(T[0],T[1]),D=Object(r.a)({initialValues:{username:"",password:""},onSubmit:function(e){k(!0),console.log(e),f.post("auth/login/",e,{withCredentials:!0}).then((function(e){console.clear(),localStorage.setItem("access_token",e.data.access_token),localStorage.setItem("user",JSON.stringify(e.data.user)),o({type:"TRUE"}),o(y(e.data.user)),s.push("/accounts"),P(!0)})).catch((function(e){P(!1),c([{message:e.response.data.non_field_errors[0],type:"danger"}])})).finally((function(){return k(!1)}))}});return Object(N.jsxs)(m.a,{component:"main",maxWidth:"xs",children:[Object(N.jsx)(d.a,{}),Object(N.jsxs)("div",{className:p.paper,children:[Object(N.jsx)(h.a,{component:"h1",variant:"h5",children:"Sign in"}),Object(N.jsxs)("form",{className:p.form,onSubmit:D.handleSubmit,children:[Object(N.jsx)(j.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"username",label:"Username",name:"username",onChange:D.handleChange,value:D.values.username,autoFocus:!0}),Object(N.jsx)(j.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:D.handleChange,value:D.values.password}),Object(N.jsxs)("div",{className:p.buttonWrapper,children:[Object(N.jsx)(l.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",disabled:g,className:p.submit,children:"Sign In"}),g&&Object(N.jsx)(C.a,{size:24,className:p.buttonProgress})]}),Object(N.jsxs)(b.a,{container:!0,children:[Object(N.jsx)(b.a,{item:!0,xs:!0,children:Object(N.jsx)(u.b,{href:"#",variant:"body2",children:"Forgot password?"})}),Object(N.jsx)(b.a,{item:!0,children:Object(N.jsx)(u.b,{to:"/register",variant:"body2",children:"Don't have an account? Sign Up"})})]})]})]}),n.map((function(e){return Object(N.jsx)(S,{message:e.message,type:e.type})}))]})}var T=function(){var e=Object(v.b)();return Object(a.useEffect)((function(){f.post("auth/logout/").then((function(t){localStorage.removeItem("access_token"),localStorage.removeItem("user"),e(y({})),e({type:"REMOVE_BOOKS",payload:{}}),e({type:"FALSE"})}))}),[]),Object(N.jsxs)("div",{className:"white-container",style:{padding:"2vh 5vw",margin:"2vh"},children:[Object(N.jsx)("h1",{children:"You are Logged Out!"}),Object(N.jsx)("hr",{}),Object(N.jsx)(u.b,{to:"/login",children:"Log in again?"})]})},P=n(23),D=n(39),I=n(243),R=n(238),W=n(118),A=n.n(W);function B(){var e=Object(w.g)(),t=Object.freeze({email:"",username:"",password1:"",password2:""}),n=Object(a.useState)([]),c=Object(i.a)(n,2),o=c[0],s=c[1],r=Object(a.useState)(!1),O=Object(i.a)(r,2),x=O[0],g=O[1],v=Object(a.useState)(!1),y=Object(i.a)(v,2),_=(y[0],y[1]),E=Object(a.useState)(t),T=Object(i.a)(E,2),W=T[0],B=T[1],F=function(e){B(Object(D.a)(Object(D.a)({},W),{},Object(P.a)({},e.target.name,e.target.value.trim())))},U=Object(p.a)((function(e){return{buttonProgress:{color:k.a[500],position:"absolute",top:"50%",left:"50%",marginTop:-12,marginLeft:-12},buttonWrapper:{margin:e.spacing(1),position:"relative"},paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}}))();return Object(N.jsxs)(m.a,{component:"main",maxWidth:"xs",children:[Object(N.jsxs)("div",{className:"white-container",children:[Object(N.jsx)(d.a,{}),Object(N.jsxs)("div",{className:U.paper,children:[Object(N.jsx)(I.a,{className:U.avatar,children:Object(N.jsx)(A.a,{})}),Object(N.jsx)(h.a,{component:"h1",variant:"h5",children:"Sign up"}),Object(N.jsxs)("form",{className:U.form,noValidate:!0,children:[Object(N.jsxs)(b.a,{container:!0,spacing:2,children:[Object(N.jsx)(b.a,{item:!0,xs:12,children:Object(N.jsx)(j.a,{autoComplete:"username",name:"username",variant:"outlined",required:!0,fullWidth:!0,id:"username",label:"Username",autoFocus:!0,onChange:function(e){return F(e)}})}),Object(N.jsx)(b.a,{item:!0,xs:12,children:Object(N.jsx)(j.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",onChange:function(e){return F(e)}})}),Object(N.jsx)(b.a,{item:!0,xs:12,children:Object(N.jsx)(j.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password1",label:"Password",type:"password",id:"password1",autoComplete:"current-password1",onChange:function(e){return F(e)}})}),Object(N.jsx)(b.a,{item:!0,xs:12,children:Object(N.jsx)(j.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password2",label:"Confirm Password",type:"password",id:"password2",autoComplete:"current-password2",onChange:function(e){return F(e)}})})]}),Object(N.jsxs)("div",{className:U.buttonWrapper,children:[Object(N.jsx)(l.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:U.submit,disabled:x,onClick:function(t){return function(t){t.preventDefault(),g(!0),f.post("auth/register/",W).then((function(t){_(!0),e.push("/login")})).catch((function(e){_(!1),console.log(e);var t=Object.entries(e.response.data)[0][1];s([{message:t,type:"warning"}])})).finally((function(){return g(!1)}))}(t)},children:"Sign Up"}),x&&Object(N.jsx)(C.a,{size:24,className:U.buttonProgress})]}),Object(N.jsx)(b.a,{container:!0,justify:"flex-end",children:Object(N.jsx)(b.a,{item:!0,children:Object(N.jsx)(u.b,{to:"/login",variant:"body2",children:"Already have an account? Sign in"})})})]})]}),Object(N.jsx)(R.a,{mt:5})]}),o.map((function(e){return Object(N.jsx)(S,{message:e.message,type:e.type})}))]})}var F=n(124),U=["component"],L=function(e){var t=e.component,n=Object(F.a)(e,U);return Object(N.jsx)(w.b,Object(D.a)(Object(D.a)({},n),{},{render:function(e){return localStorage.getItem("access_token")?Object(N.jsx)(t,Object(D.a)({},e)):Object(N.jsx)(w.a,{to:{pathname:"login/",state:{from:e.location}}})}}))},V=(n(173),function(e){var t=e.id,n=e.title,a=e.balance,c="accounts/".concat(t);return Object(N.jsxs)(u.b,{className:"book-div",to:c,children:[Object(N.jsx)("div",{className:"title",children:n}),Object(N.jsx)("div",{className:"balance",children:a})]})}),M=n(75),q=n.n(M);function K(){var e=Object(v.c)((function(e){return e.authenticated})),t=Object(v.b)();c.a.useEffect((function(){e&&f.get("account-books/").then((function(e){t({type:"INSERT_BOOKS",payload:e.data})})).catch((function(e){return console.log(e)}))}),[])}var z=function(){K();var e=Object(w.g)(),t=Object(v.c)((function(e){return e.account_books}));return Object(N.jsxs)("div",{className:"container mt-4",children:[Object(N.jsx)("h3",{children:"Your Account Books:"}),Object(N.jsx)("hr",{}),Object(N.jsx)("div",{className:"books",children:t.map((function(e){return Object(N.jsx)(V,{id:e.id,title:e.title,balance:e.balance},e.id)}))}),Object(N.jsx)("div",{className:"add-account-div",children:Object(N.jsxs)(l.a,{variant:"contained",color:"primary",onClick:function(){return e.push("/create-account-book")},children:[Object(N.jsx)(q.a,{}),"Add New Account book"]})})]})},Y=function(){K();var e=Object(w.g)(),t=Object(v.c)((function(e){return e.account_books}));return Object(N.jsxs)("div",{className:"container mt-4",children:[Object(N.jsx)("h3",{children:"Your Account Books:"}),Object(N.jsx)("hr",{}),Object(N.jsx)("div",{className:"books",children:t.map((function(t){return Object(N.jsxs)("div",{className:"management-container",children:[Object(N.jsx)(V,{id:t.id,title:t.title,balance:t.balance},t.id),Object(N.jsx)("div",{className:"btn-group",children:Object(N.jsx)("button",{account_book:t.id,className:"btn btn-outline-info",onClick:function(){return e.push("/manage/accounts/".concat(t.id))},children:"Edit"})})]})}))}),Object(N.jsx)("div",{className:"add-account-div",children:Object(N.jsxs)(l.a,{variant:"contained",color:"primary",onClick:function(){return e.push("/create-account-book")},children:[Object(N.jsx)(q.a,{}),"Add New Account book"]})})]})},J=function(){var e=Object(w.g)(),t=Object(r.a)({initialValues:{title:""},onSubmit:function(t){console.log(t),f.post("account-books/",t,{withCredentials:!0}).then((function(t){e.push("/accounts")})).catch((function(e){console.log(e)}))}});return Object(N.jsxs)("div",{className:"container mt-3",children:[Object(N.jsx)("h1",{children:"Create Account book"}),Object(N.jsx)("hr",{}),Object(N.jsxs)("form",{action:"",method:"post",className:"container mt-4 pt-4",onSubmit:t.handleSubmit,children:[Object(N.jsx)(j.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"title",label:"Title",name:"title",onChange:t.handleChange,value:t.values.title,autoFocus:!0}),Object(N.jsx)(l.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",children:"Create"})]})]})},X=n(15),G=n(228),H=n(229),Q=n(230),Z=n(227),$=n(123),ee=n(121),te=n.n(ee),ne=n(122),ae=n.n(ne),ce=n(4),oe=n(245),se=n(221),ie=n(225),re=n(177),le=n(224),de=n(226),je=n(120),ue=n.n(je),be=n(119),he=n.n(be),pe=Object(p.a)((function(e){var t;return{list:{width:250},fullList:{width:"auto"},grow:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:(t={display:"block",color:"white"},Object(P.a)(t,e.breakpoints.up("sm"),{display:"block"}),Object(P.a)(t,"&:hover",{textDecoration:"none",color:"#f0f6db"}),t),search:Object(P.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(X.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(X.b)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),inputRoot:{color:"inherit"},inputInput:Object(P.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:"20ch"}),sectionDesktop:Object(P.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(P.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"})}}));function me(){var e=Object(v.c)((function(e){return e.account_books})),t=Object(v.c)((function(e){return e.user.username})),n=Object(v.c)((function(e){return e.authenticated})),a=c.a.useState({left:!1}),o=Object(i.a)(a,2),s=o[0],r=o[1],d=function(e,t){return function(n){("keydown"!==n.type||"Tab"!==n.key&&"Shift"!==n.key)&&r(Object(D.a)(Object(D.a)({},s),{},Object(P.a)({},e,t)))}},j=pe(),b=c.a.useState(null),p=Object(i.a)(b,2),m=p[0],O=p[1],x=Boolean(m),g="primary-search-account-menu",f=n?Object(N.jsx)("div",{children:Object(N.jsxs)($.a,{anchorEl:m,anchorOrigin:{vertical:"top",horizontal:"right"},id:g,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:x,onClose:function(){O(null)},children:[Object(N.jsx)(Z.a,{component:u.b,to:"/profile",children:"My account"}),Object(N.jsx)(Z.a,{component:u.b,to:"/logout",children:"Logout"})]})}):"",w="left";return Object(N.jsxs)("div",{className:j.grow,children:[Object(N.jsx)(G.a,{position:"static",children:Object(N.jsxs)(H.a,{children:[n?Object(N.jsx)(l.a,{onClick:d(w,!0),children:Object(N.jsx)(te.a,{})}):"",Object(N.jsx)(oe.a,{anchor:w,open:s.left,onClose:d(w,!1),children:function(n){return Object(N.jsxs)("div",{className:Object(ce.a)(j.list,Object(P.a)({},j.fullList,"top"===n||"bottom"===n)),role:"presentation",onClick:d(n,!1),onKeyDown:d(n,!1),children:[Object(N.jsx)(se.a,{children:Object(N.jsx)(re.a,{button:!0,children:Object(N.jsxs)(le.a,{children:[Object(N.jsx)(he.a,{fontSize:"large"}),Object(N.jsxs)("h4",{children:[" @",t]})]})})}),Object(N.jsx)(ie.a,{}),Object(N.jsxs)(se.a,{children:[Object(N.jsx)(re.a,{button:!0,component:u.b,to:"/accounts",children:Object(N.jsx)(le.a,{children:Object(N.jsx)("h6",{children:"My Account Books"})})}),Object(N.jsx)(ie.a,{}),e.map((function(e){return Object(N.jsxs)(re.a,{button:!0,component:u.b,to:"/accounts/".concat(e.id),children:[Object(N.jsx)(le.a,{children:Object(N.jsx)(ue.a,{})}),Object(N.jsx)(de.a,{primary:e.title})]},e.id)})),Object(N.jsx)(ie.a,{}),Object(N.jsx)(re.a,{button:!0,component:u.b,to:"/manage/accounts",children:Object(N.jsx)(le.a,{children:Object(N.jsx)("h6",{children:"Manage My Books"})})}),Object(N.jsx)(ie.a,{})]})]})}(w)}),Object(N.jsx)(h.a,{className:j.title,variant:"h6",noWrap:!0,component:u.b,to:"/accounts",children:"Expense Tracker"}),Object(N.jsx)("div",{className:j.grow}),Object(N.jsx)("div",{children:n?Object(N.jsx)(Q.a,{edge:"end","aria-label":"account of current user","aria-controls":g,"aria-haspopup":"true",onClick:function(e){O(e.currentTarget)},color:"inherit",children:Object(N.jsx)(ae.a,{})}):""})]})}),f]})}var Oe=n(231),xe=Object(p.a)((function(e){return{footer:Object(P.a)({borderTop:"1px solid ".concat(e.palette.divider),marginTop:e.spacing(8),paddingTop:e.spacing(3),paddingBottom:e.spacing(3)},e.breakpoints.up("sm"),{paddingTop:e.spacing(6),paddingBottom:e.spacing(6)})}}));function ge(){return Object(N.jsxs)(h.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(N.jsx)(Oe.a,{color:"inherit",href:"https://nischalstha9.github.io.com/",children:"Nischal Shrestha"})," ",(new Date).getFullYear(),"."]})}var fe=function(){var e=xe();return Object(N.jsx)(c.a.Fragment,{children:Object(N.jsx)(m.a,{maxWidth:"md",component:"footer",className:e.footer,children:Object(N.jsx)(R.a,{mt:5,children:Object(N.jsx)(ge,{})})})})},ve=n(232),we=n(235),ye=n(234),Ce=n(233);function ke(e){var t=e.account_book,n=e.trans_id,a=e.description,o=e.amount,s=e.refreshForm,d=c.a.useState(!1),u=Object(i.a)(d,2),b=u[0],h=u[1],p=function(){m.handleReset(),h(!1)},m=Object(r.a)({initialValues:{description:a,amount:o},onSubmit:function(e){f.patch("account-books/".concat(t,"/transactions/").concat(n,"/"),e,{withCredentials:!0}).then((function(e){console.log(e),p(),s()})).catch((function(e){return console.log(e)}))}});return Object(N.jsxs)("div",{children:[Object(N.jsx)(l.a,{variant:"outlined",color:"primary",onClick:function(){h(!0)},children:"Edit"}),Object(N.jsxs)(ve.a,{open:b,onClose:p,"aria-labelledby":"form-dialog-title",children:[Object(N.jsx)(Ce.a,{id:"form-dialog-title",children:"Edit Transaction"}),Object(N.jsxs)("form",{action:"",onSubmit:m.handleSubmit,children:[Object(N.jsxs)(ye.a,{children:[Object(N.jsx)(j.a,{autoFocus:!0,margin:"dense",id:"description",label:"Description",type:"text",fullWidth:!0,onChange:m.handleChange,value:m.values.description,placeholder:"Description"}),Object(N.jsx)(j.a,{margin:"dense",id:"amount",label:"Amount",type:"number",fullWidth:!0,onChange:m.handleChange,value:m.values.amount})]}),Object(N.jsxs)(we.a,{children:[Object(N.jsx)(l.a,{onClick:p,color:"primary",children:"Cancel"}),Object(N.jsx)(l.a,{onClick:function(){f.delete("account-books/".concat(t,"/transactions/").concat(n,"/"),{withCredentials:!0}).then((function(e){console.log(e),p(),s()})).catch((function(e){return console.log(e)}))},color:"primary",children:"Delete"}),Object(N.jsx)(l.a,{onClick:m.handleSubmit,color:"primary",children:"Update"})]})]})]})]})}var Ne=function(e){var t=e.tran,n=e.account_book,a=e.RefreshFrom,c="DEBIT"===t._type?"table-success":"table-danger";return Object(N.jsxs)("tr",{className:c,id:t.id,children:[Object(N.jsx)("th",{scope:"row",children:t.date}),Object(N.jsx)("td",{children:t.description}),Object(N.jsx)("td",{children:t.amount}),Object(N.jsx)("td",{children:Object(N.jsx)("div",{className:"btn-group btn-group-small",children:Object(N.jsx)(ke,{account_book:n,trans_id:t.id,description:t.description,amount:t.amount,refreshForm:a})})})]},t.id)};function Se(e){var t=e.account_book,n=e._type,a=e.refreshForm,o=c.a.useState(!1),s=Object(i.a)(o,2),d=s[0],u=s[1],b=function(){h.handleReset(),u(!1)},h=Object(r.a)({initialValues:{description:"",amount:0,_type:n},onSubmit:function(e){f.post("account-books/".concat(t,"/transactions/"),e,{withCredentials:!0}).then((function(e){b(),a()})).catch((function(e){return console.log(e)}))}});return Object(N.jsxs)("div",{children:[Object(N.jsx)(l.a,{variant:"outlined",color:"primary",onClick:function(){u(!0)},children:"DEBIT"===n?"Add Income":"Add Expense"}),Object(N.jsxs)(ve.a,{open:d,onClose:b,"aria-labelledby":"form-dialog-title",children:[Object(N.jsxs)(Ce.a,{id:"form-dialog-title",children:["Add ","DEBIT"===n?"Income":"Expense"," Transaction"]}),Object(N.jsxs)("form",{action:"",onSubmit:h.handleSubmit,children:[Object(N.jsxs)(ye.a,{children:[Object(N.jsx)(j.a,{autoFocus:!0,margin:"dense",id:"description",label:"Description",type:"text",fullWidth:!0,onChange:h.handleChange,value:h.values.description,placeholder:"Description"}),Object(N.jsx)(j.a,{margin:"dense",id:"amount",label:"Amount",type:"number",fullWidth:!0,onChange:h.handleChange,value:h.values.amount})]}),Object(N.jsxs)(we.a,{children:[Object(N.jsx)(l.a,{onClick:b,color:"primary",children:"Cancel"}),Object(N.jsx)(l.a,{onClick:h.handleSubmit,color:"primary",children:"DEBIT"===n?"Add Income":"Add Expense"})]})]})]})]})}var _e=n(239),Ee=n(240),Te=Object(p.a)({paginationContainer:{display:"flex",right:"0px",justifyContent:"flex-end"},paginationItem:{padding:"10px 0px",alignSelf:"center"}}),Pe=function(e){var t=e.dataCount,n=e.rowsPerPage,a=e.page,c=e.handleChangePage,o=e.handleChangeRowsPerPage,s=Te();return Object(N.jsxs)("div",{className:s.paginationContainer,children:[Object(N.jsx)(_e.a,{className:s.paginationItem,rowsPerPageOptions:[5,10,25,50,100,200,500],component:"div",count:t,rowsPerPage:n,page:a,onChangePage:function(e,t){return c(e,t)},onChangeRowsPerPage:function(e){o(e)},ActionsComponent:function(){return Object(N.jsx)(N.Fragment,{})}}),Object(N.jsx)(Ee.a,{color:"primary",count:Math.ceil(t/n),page:a+1,onChange:function(e,t){return c(e,t-1)},className:s.paginationItem})]})},De=n(236),Ie=function(){var e=Object(w.h)().account_id,t=Object(a.useState)([]),n=Object(i.a)(t,2),o=n[0],s=n[1],r=Object(a.useState)([]),l=Object(i.a)(r,2),d=l[0],j=l[1],u=Object(a.useState)(""),b=Object(i.a)(u,2),h=b[0],p=b[1],m=c.a.useState(0),O=Object(i.a)(m,2),x=O[0],g=O[1],v=c.a.useState(10),y=Object(i.a)(v,2),C=y[0],k=y[1],S=c.a.useState(0),_=Object(i.a)(S,2),E=_[0],T=_[1],P=Object(a.useState)(""),D=Object(i.a)(P,2),I=D[0],R=D[1],W=Object(a.useState)(""),A=Object(i.a)(W,2),B=A[0],F=A[1],U=Object(a.useState)(""),L=Object(i.a)(U,2),V=L[0],M=L[1],q=Object(a.useState)(0),K=Object(i.a)(q,2),z=K[0],Y=K[1],J="account-books/".concat(e,"/transactions/?limit=").concat(C,"&offset=").concat(x*C,"&_type=").concat(h,"&search=").concat(I,"&date__gte=").concat(B,"&date__lte=").concat(V),X=function(){Y(z+1)};Object(a.useEffect)((function(){g(1),p(""),F(""),M("")}),[e]),Object(a.useEffect)((function(){f.get("account-books/".concat(e,"/")).then((function(e){j(e.data)})).catch((function(e){return console.log(e)}))}),[z,e]);return Object(a.useEffect)((function(){f.get(J).then((function(e){s(e.data.results),T(e.data.count)})).catch((function(e){return console.log(e)}))}),[J,z,e]),Object(N.jsxs)("div",{className:"container mt-4",children:[Object(N.jsxs)("h4",{children:["Title: ",d.title]}),Object(N.jsxs)("h4",{children:["Balance: Rs.",Object(N.jsxs)("span",{id:"balance_amt",className:"text-success",children:[" ",d.balance]}),"/-"]}),Object(N.jsx)("hr",{}),Object(N.jsx)("form",{action:"",method:"get",id:"filter-form",className:"form-control",onSubmit:function(e){return e.preventDefault()},children:Object(N.jsxs)("div",{className:"form-row",children:[Object(N.jsxs)("div",{className:"form-group col-md-4",children:[Object(N.jsx)("label",{htmlFor:"inputState",children:Object(N.jsx)("h6",{children:"Type:"})}),Object(N.jsxs)("select",{className:"custom-select",id:"Transasction_Filter",onChange:function(e){g(1),p(e.target.value)},children:[Object(N.jsx)("option",{value:"",children:"All Transactions"}),Object(N.jsx)("option",{value:"DEBIT",children:"Income"}),Object(N.jsx)("option",{value:"CREDIT",children:"Expenses"})]})]}),Object(N.jsxs)("div",{className:"form-group col-md-4",children:[Object(N.jsx)("label",{htmlFor:"sdate-filter",children:Object(N.jsx)("h6",{children:"Start Date:"})}),Object(N.jsx)("input",{type:"date",autoComplete:"false",className:"form-control",id:"sdate-filter",onChange:function(e){g(1),F("".concat(e.target.value,"T00:00:00"))}})]}),Object(N.jsxs)("div",{className:"form-group col-md-4",children:[Object(N.jsx)("label",{htmlFor:"edate-filter",children:Object(N.jsx)("h6",{children:"End Date:"})}),Object(N.jsx)("input",{type:"date",autoComplete:"false",className:"form-control",id:"edate-filter",onChange:function(e){g(1),M("".concat(e.target.value,"T00:00:00"))}})]}),Object(N.jsx)("div",{className:"form-group col-md-4",children:Object(N.jsx)("input",{type:"text",autoComplete:"false",className:"form-control",id:"search-filter",placeholder:"Search By Description",onKeyUp:function(e){"Enter"===e.code&&(g(1),R(e.target.value))}})}),Object(N.jsx)("div",{className:"",children:Object(N.jsx)("button",{type:"reset",autoComplete:"false",className:"btn btn-secondary",id:"clear-filter",onClick:function(e){M(""),F(""),R(""),p("")},children:"CLEAR"})}),Object(N.jsx)("div",{className:"row mx-2",children:Object(N.jsxs)(De.a,{children:[Object(N.jsx)(Se,{account_book:e,_type:"DEBIT",refreshForm:X}),Object(N.jsx)(Se,{account_book:e,_type:"CREDIT",refreshForm:X})]})})]})}),Object(N.jsx)("hr",{}),Object(N.jsxs)("table",{className:"table",children:[Object(N.jsx)("thead",{children:Object(N.jsxs)("tr",{children:[Object(N.jsx)("th",{scope:"col",className:"bg-white sticky-top",children:"Date"}),Object(N.jsx)("th",{scope:"col",className:"bg-white col-6 sticky-top",children:"Description"}),Object(N.jsx)("th",{scope:"col",className:"bg-white sticky-top",children:"Amount"}),Object(N.jsx)("th",{scope:"col",className:"bg-white sticky-top",children:"Action"})]})}),Object(N.jsx)("tbody",{id:"tbody",children:o.map((function(t){return Object(N.jsx)(Ne,{tran:t,account_book:e,RefreshFrom:X},t.id)}))})]}),Object(N.jsx)(Pe,{dataCount:E,rowsPerPage:C,page:x,handleChangePage:function(e,t){g(t)},handleChangeRowsPerPage:function(e){k(parseInt(e.target.value)),g(0)}})]})},Re=n(237);function We(){var e=Object(w.g)(),t=Object(a.useState)({}),n=Object(i.a)(t,2),c=n[0],o=n[1],s=Object(a.useState)([]),l=Object(i.a)(s,2),d=l[0],u=l[1],b=Object(w.h)().account_id;Object(a.useEffect)((function(){f.patch("account-books/".concat(b,"/"),{withCredentials:!0}).then((function(e){o(e.data)})).catch((function(e){return console.log(e)}))}),[]);var h=Object(r.a)({initialValues:{title:c.title},onSubmit:function(t){f.patch("account-books/".concat(c.id,"/"),t,{withCredentials:!0}).then((function(t){e.push("/manage/accounts")})).catch((function(e){return console.log(e)}))}}),p=Object(r.a)({initialValues:{password:""},onSubmit:function(t){console.log(t),f.delete("account-books/".concat(c.id,"/"),{data:t},{withCredentials:!0}).then((function(t){e.push("/manage/accounts")})).catch((function(e){var t=Object.entries(e.response.data)[0][1];console.log(t),u([{message:t,type:"danger"}])}))}});return Object(N.jsxs)("div",{className:"container mt-3",children:[Object(N.jsxs)("div",{className:"jumbotron",children:[Object(N.jsxs)("h3",{children:['Update Book "',c.title,'"']}),Object(N.jsx)("hr",{}),Object(N.jsx)(Ce.a,{id:"form-dialog-title",children:"Title:"}),Object(N.jsxs)(ye.a,{children:[Object(N.jsx)(j.a,{autoFocus:!0,margin:"dense",id:"title",label:"Title",type:"text",fullWidth:!0,onChange:h.handleChange,value:h.values.title,placeholder:"Title"}),Object(N.jsx)("button",{className:"btn btn-warning mt-3",onClick:h.handleSubmit,children:"Update"})]})]}),Object(N.jsxs)("div",{className:"",children:[Object(N.jsxs)("h3",{children:['Delete Book "',c.title,'"']}),Object(N.jsx)("hr",{}),Object(N.jsxs)(Ce.a,{id:"form-dialog-title",children:['Confirm Delete Account Book: "',c.title,'"']}),Object(N.jsxs)("form",{action:"",onSubmit:p.handleSubmit,children:[Object(N.jsxs)(ye.a,{children:[Object(N.jsx)(Re.a,{children:"Deleting Account Book will delete all of your transactions in respective account book. This action is irreversible. Enter your password to continue."}),Object(N.jsx)(j.a,{margin:"dense",id:"password",label:"Password",type:"password",fullWidth:!0,onChange:p.handleChange,value:p.values.password,placeholder:"Your Password"})]}),Object(N.jsx)(we.a,{children:Object(N.jsx)("button",{onClick:p.handleSubmit,className:"btn btn-outline-danger",children:"Confirm Delete"})})]}),d.map((function(e){return Object(N.jsx)(S,{message:e.message,type:e.type})}))]})]})}var Ae=function(){var e=Object(v.c)((function(e){return e.user})),t=Object(w.g)();return Object(N.jsxs)("div",{className:"container mt-3",children:[Object(N.jsx)("h1",{children:"Profile"}),Object(N.jsx)("hr",{}),Object(N.jsx)("h4",{children:"Username:"}),Object(N.jsx)("h5",{children:e.username}),Object(N.jsx)("h4",{children:"Email:"}),Object(N.jsx)("h5",{children:e.email}),Object(N.jsx)("button",{className:"btn btn-outline-warning",onClick:function(){return t.push("/change-password")},children:"Change Password"})]})},Be=Object(p.a)((function(e){return{buttonProgress:{color:k.a[500],position:"absolute",top:"50%",left:"50%",marginTop:-12,marginLeft:-12},buttonWrapper:{margin:e.spacing(1),position:"relative"},paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function Fe(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],c=t[1],o=Object(w.g)(),s=Be(),p=Object(a.useState)(!1),O=Object(i.a)(p,2),x=O[0],g=O[1],v=Object(r.a)({initialValues:{old_password:"",new_password1:"",new_password2:""},onSubmit:function(e){g(!0),console.log(e),f.post("auth/password/change/",e,{withCredentials:!0}).then((function(e){g(!1),console.clear(),o.push("/logout")})).catch((function(e){g(!1),console.log(e.response.data);var t=Object.entries(e.response.data)[0][1][0];console.log(t),c([{message:t,type:"danger"}])}))}});return Object(N.jsxs)(m.a,{component:"main",maxWidth:"xs",children:[Object(N.jsx)(d.a,{}),Object(N.jsxs)("div",{className:s.paper,children:[Object(N.jsx)(h.a,{component:"h1",variant:"h5",children:"Change Password"}),Object(N.jsxs)("form",{className:s.form,onSubmit:v.handleSubmit,children:[Object(N.jsx)(j.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"old_password",label:"Old Password",name:"old_password",type:"password",onChange:v.handleChange,value:v.values.old_password,autoFocus:!0}),Object(N.jsx)(j.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,type:"password",label:"New Password",id:"new_password1",onChange:v.handleChange,value:v.values.new_password1,name:"new_password1"}),Object(N.jsx)(j.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,type:"password",label:"Confirm New Password",id:"new_password2",onChange:v.handleChange,value:v.values.new_password2,name:"new_password2"}),Object(N.jsxs)("div",{className:s.buttonWrapper,children:[Object(N.jsx)(l.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",disabled:x,className:s.submit,children:"Change Password"}),x&&Object(N.jsx)(C.a,{size:24,className:s.buttonProgress})]}),Object(N.jsx)(b.a,{container:!0,children:Object(N.jsx)(b.a,{item:!0,xs:!0,children:Object(N.jsx)(u.b,{href:"#",variant:"body2",children:"Forgot password?"})})})]})]}),n.map((function(e){return Object(N.jsx)(S,{message:e.message,type:e.type})}))]})}var Ue=localStorage.getItem("access_token"),Le=JSON.parse(localStorage.getItem("user"));var Ve=function(){var e=Object(v.b)();Ue&&(e({type:"TRUE"}),e(y(Le)));var t=Object(v.c)((function(e){return e.authenticated}));return Object(N.jsx)("div",{className:"App",children:Object(N.jsxs)(u.a,{children:[Object(N.jsx)(me,{}),Object(N.jsx)(w.d,{children:Object(N.jsxs)("div",{className:"motherboard",children:[Object(N.jsx)(w.b,{path:"/logout",component:T}),Object(N.jsx)(w.b,{exact:!0,path:"/register",component:B}),Object(N.jsx)(w.b,{exact:!0,path:"/login",component:E}),Object(N.jsx)(w.b,{exact:!0,path:"/",children:t?Object(N.jsx)(w.a,{to:"/accounts"}):Object(N.jsx)(w.a,{to:"/login"})}),Object(N.jsx)(L,{exact:!0,path:"/accounts",component:z}),Object(N.jsx)(L,{exact:!0,path:"/manage/accounts",component:Y}),Object(N.jsx)(L,{exact:!0,path:"/manage/accounts/:account_id",component:We}),Object(N.jsx)(L,{exact:!0,path:"/create-account-book",component:J}),Object(N.jsx)(L,{path:"/accounts/:account_id",component:Ie}),Object(N.jsx)(L,{path:"/profile",component:Ae}),Object(N.jsx)(L,{path:"/change-password",component:Fe})]})}),Object(N.jsx)(fe,{})]})})},Me=n(76),qe=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TRUE":return!0;case"FALSE":return!1;default:return e}},Ke=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INSERT_TOKEN":return t.payload;case"REMOVE_TOKEN":return"";default:return e}},ze=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INSERT_USER":return t.payload;case"REMOVE_USER":return{};default:return e}},Ye=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INSERT_BOOKS":return t.payload;case"REMOVE_BOOKS":return[];default:return e}},Je=Object(Me.a)({authenticated:qe,token:Ke,user:ze,account_books:Ye}),Xe=Object(Me.b)(Je,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());s.a.render(Object(N.jsx)(v.a,{store:Xe,children:Object(N.jsx)(Ve,{})}),document.getElementById("root"))}},[[174,1,2]]]);
//# sourceMappingURL=main.6b9e2acb.chunk.js.map