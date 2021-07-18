(this["webpackJsonppost-board"]=this["webpackJsonppost-board"]||[]).push([[0],{49:function(t,e,n){},50:function(t,e,n){},62:function(t,e,n){"use strict";n.r(e);var i,a=n(0),o=n.n(a),r=n(12),c=n.n(r),d=(n(49),n(50),n(68)),s=n(69),l=n(20),u={isLoading:!1,data:null,error:null},h={loadPost:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u;t.isLoading=!0},loadPostSuccess:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,e=arguments.length>1?arguments[1]:void 0,n=e.payload;t.isLoading=!1,t.data=n,t.error=null},loadPostFail:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,e=arguments.length>1?arguments[1]:void 0,n=e.payload;t.isLoading=!1,t.data=[],t.error=n},handlePostChange:function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,n=arguments.length>1?arguments[1]:void 0,i=n.payload.key,a=null===(t=e.data)||void 0===t?void 0:t.findIndex((function(t){return t.id===n.payload.id})),o=e.data[a];o[i]=n.payload.content},addPost:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u;0===t.data.length?t.data.push({id:0,title:"",description:"",isFoldPost:!1,x:10,y:10,width:250,height:250,isVisible:!1}):t.data.push({id:t.data[t.data.length-1].id+1,title:"",description:"",isFoldPost:!1,x:200,y:0,width:250,height:250,isVisible:!1})},deletePost:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,e=arguments.length>1?arguments[1]:void 0,n=e.payload.id;t.data=t.data.filter((function(t){return t.id!==n}))},handleDragPost:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,e=arguments.length>1?arguments[1]:void 0,n=e.payload.id,i=t.data.findIndex((function(t){return t.id===n})),a=t.data[i];a.x=e.payload.x,a.y=e.payload.y},handleResizePost:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,e=arguments.length>1?arguments[1]:void 0,n=e.payload.id,i=t.data.findIndex((function(t){return t.id===n})),a=t.data[i];a.width=e.payload.width,a.height=e.payload.height},handleFoldPost:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,e=arguments.length>1?arguments[1]:void 0,n=e.payload.id,i=t.data.findIndex((function(t){return t.id===n})),a=t.data[i];a.isFoldPost?(a.isFoldPost=!1,a.height=250):(a.isFoldPost=!0,a.height=40)}},j=Object(l.b)({name:"postListReducer",initialState:u,reducers:h}),b=(j.name,j.reducer),g=j.actions,p=n(11),f=n(4),x=function(){var t,e=Object(p.c)((function(t){return t.postListReducer})).data,n=Object(p.b)();return Object(f.jsxs)("div",{className:"header",children:[(t=e,t.map((function(t,e){return Object(f.jsx)("div",{children:Object(f.jsx)(d.a.Control,{id:e.toString(),className:"mb-3",name:"title",value:t.title,onChange:function(t){return function(t){var e={id:Number(t.target.id),key:t.target.name,content:t.target.value};n(g.handlePostChange(e))}(t)},style:{display:t.isVisible?"none":"inline"}})},e)}))),Object(f.jsx)("div",{className:"text-center",children:Object(f.jsx)(s.a,{onClick:function(){return n(g.addPost())},children:"+"})})]})},v=n(29),O=n(35),m=n(37),y=n(43),P=m.a.textarea(i||(i=Object(O.a)(["\n  display: ",";\n  resize: none;\n"])),(function(t){return t.isFold?"none":"inline-block"})),k=function(t){var e,n=t.handleShow,i=t.setClickedPost,a=Object(p.c)((function(t){return t.postListReducer})).data,o=Object(p.b)(),r=function(t){var e={id:Number(t.target.id),key:t.target.name,content:t.target.value};o(g.handlePostChange(e))};return Object(f.jsx)(f.Fragment,{children:a&&(e=a,e.map((function(t){return Object(f.jsx)(y.a,{position:{x:t.x,y:t.y},size:{width:t.width,height:t.height},minWidth:200,minHeight:80,onDragStop:function(e,n){return function(t,e){var n={id:e,x:t.x,y:t.y};o(g.handleDragPost(n))}(n,t.id)},onResizeStop:function(e,n,i,a,r){return function(t,e,n,i,a,r){var c={id:r.id,width:Number(n.style.width.split("px")[0]),height:Number(n.style.height.split("px")[0])};o(g.handleResizePost(c))}(0,0,i,0,0,t)},cancel:".note_description",bounds:".note-wrap",enableResizing:{bottom:!t.isFoldPost,right:!0,bottomRight:!t.isFoldPost},children:Object(f.jsxs)("div",{className:"note resize",id:t.id.toString(),onDoubleClick:function(t){return t.stopPropagation()},style:{background:t.isFoldPost?"lightyellow":"linear-gradient(-45deg, transparent 15px, lightyellow 0), linear-gradient(45deg, transparent 15px, rgb(255, 94, 0) 0)"},children:[Object(f.jsx)("input",{id:t.id.toString(),name:"title",type:"text",style:{border:"none"},value:t.title,onChange:function(t){return r(t)},placeholder:"Title",className:"note_title",autoComplete:"off"}),Object(f.jsx)(P,{id:t.id.toString(),name:"description",value:t.description,onChange:function(t){return r(t)},placeholder:"Description...",className:"note_description",style:{border:"none",borderTop:"1px solid black"},isFold:t.isFoldPost,onDrag:function(t){return t.stopPropagation()}}),Object(f.jsx)("span",{className:"note_reduce",onClick:function(){return function(t){var e={id:t.id};o(g.handleFoldPost(e))}(t)},children:"-"}),Object(f.jsx)("span",{className:"note_delete",onClick:function(){return function(t){var e={id:t.id};t.description||t.title?(n(),i(t.id)):o(g.deletePost(e))}(t)},children:"X"})]})},t.id)})))})},w=n(67),F=function(t){var e=t.show,n=t.handleClose,i=t.clickedPost,a=Object(p.b)();return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)(w.a,{show:e,onHide:n,children:[Object(f.jsx)(w.a.Header,{children:Object(f.jsx)(w.a.Title,{children:"Delete Post"})}),Object(f.jsx)(w.a.Body,{children:"\ud574\ub2f9 \ud3ec\uc2a4\ud2b8\uc787\uc744 \uc0ad\uc81c \ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?"}),Object(f.jsxs)(w.a.Footer,{children:[Object(f.jsx)(s.a,{variant:"secondary",onClick:n,children:"\ucde8\uc18c"}),Object(f.jsx)(s.a,{variant:"primary",onClick:function(){return n(),void a(g.deletePost({id:i}))},children:"\ud655\uc778"})]})]})})},C=function(){var t=Object(p.b)(),e=Object(a.useState)(),n=Object(v.a)(e,2),i=n[0],o=n[1],r=Object(a.useState)(!1),c=Object(v.a)(r,2),d=c[0],s=c[1];return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("div",{className:"note-wrap",onDoubleClick:function(){return t(g.addPost())},children:Object(f.jsx)("div",{className:"notes_list",children:Object(f.jsx)(k,{handleShow:function(){return s(!0)},setClickedPost:o})})}),d&&Object(f.jsx)(F,{show:d,handleClose:function(){return s(!1)},clickedPost:i})]})},S=n(64),N=n(65),L=n(70),I=n(66),z=n(34),R=function(){var t=Object(p.b)(),e=Object(p.c)((function(t){return t.postListReducer})),n=e.isLoading,i=e.data,o=e.error,r=!1,c=!1;return document.onkeyup=function(t){t.ctrlKey&&(r=!1),t.altKey&&(c=!1)},document.onkeydown=function(e){e.ctrlKey&&(r=!0),e.altKey&&(c=!0),"n"===e.key&&r&&c&&t(g.addPost())},Object(a.useEffect)((function(){t(g.loadPost())}),[]),Object(a.useEffect)((function(){localStorage.setItem("noteList",JSON.stringify(i))}),[i]),Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("div",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",backgroundImage:"url(https://img.freepik.com/free-photo/abstract-and-surface-wood-texture-for-background_74190-12071.jpg?size=626&ext=jpg&ga=GA1.2.1591904653.1622073600)",backgroundSize:"cover",zIndex:-1}}),Object(f.jsxs)(S.a,{className:"mt-5",children:[n&&Object(f.jsxs)("div",{className:"text-center",children:[Object(f.jsx)(N.a,{animation:"border",variant:"primary"}),Object(f.jsx)("div",{className:"h4",children:"\uc7a0\uc2dc\ub9cc \uae30\ub2e4\ub824 \uc8fc\uc138\uc694 ..."})]}),i&&Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("div",{className:"h1 text-center",children:"Online Post-it"}),Object(f.jsx)(L.a,{className:"my-3",style:{minHeight:"80vh",backgroundColor:"rgba(255,255,255,0.2)"},children:Object(f.jsxs)(I.a,{children:[Object(f.jsx)(z.a,{lg:"2",children:Object(f.jsx)(x,{})}),Object(f.jsx)(z.a,{lg:"10",children:Object(f.jsx)(C,{})})]})})]}),o&&Object(f.jsx)("div",{className:"text-center",children:"\uc5d0\ub7ec \ubc1c\uc0dd"})]})]})},D=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,71)).then((function(e){var n=e.getCLS,i=e.getFID,a=e.getFCP,o=e.getLCP,r=e.getTTFB;n(t),i(t),a(t),o(t),r(t)}))},_=(n(60),n(13)),T=n(42),H=n(16),J=n.n(H),K=n(15),V=function(){return new Promise((function(t){return"[]"===localStorage.getItem("noteList")||null===localStorage.getItem("noteList")?t([{description:"",height:250,id:0,isFoldPost:!1,isVisible:!1,title:"",width:250,x:10,y:10}]):localStorage.getItem("noteList")?t(JSON.parse(localStorage.getItem("noteList"))):void 0}))},B=J.a.mark(A),E=J.a.mark(G);function A(){var t,e,n;return J.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return t=g.loadPostSuccess,e=g.loadPostFail,i.prev=1,i.next=4,Object(K.b)(V);case 4:return n=i.sent,i.next=7,Object(K.c)(400);case 7:return i.next=9,Object(K.e)(t(n));case 9:i.next=15;break;case 11:return i.prev=11,i.t0=i.catch(1),i.next=15,Object(K.e)(e(i.t0));case 15:case"end":return i.stop()}}),B,null,[[1,11]])}function G(){var t;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=g.loadPost,e.next=3,Object(K.f)(t,A);case 3:case"end":return e.stop()}}),E)}var M=J.a.mark(W);function W(){return J.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(K.a)([Object(K.d)(G)]);case 2:case"end":return t.stop()}}),M)}var X=Object(_.b)({postListReducer:b}),q=Object(T.a)(),Q=function(){var t=Object(l.a)({reducer:X,devTools:!0,middleware:[q]});return q.run(W),t}();c.a.render(Object(f.jsx)(o.a.StrictMode,{children:Object(f.jsx)(p.a,{store:Q,children:Object(f.jsx)(R,{})})}),document.getElementById("root")),D()}},[[62,1,2]]]);
//# sourceMappingURL=main.f4167335.chunk.js.map