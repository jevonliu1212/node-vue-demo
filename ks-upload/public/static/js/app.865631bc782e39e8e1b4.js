webpackJsonp([1],{"1uuo":function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("7+uW"),a={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("h2",[this._v("小白盒文件管理")]),this._v(" "),t("router-view")],1)},staticRenderFns:[]};var s=n("VU/8")({name:"App"},a,!1,function(e){n("d6/2")},null,null).exports,r=n("/ocq"),l={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",[e._v(e._s(e.msg))]),e._v(" "),n("h2",[e._v("Essential Links")]),e._v(" "),e._m(0),e._v(" "),n("h2",[e._v("Ecosystem")]),e._v(" "),e._m(1)])},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[e._v("\n        Core Docs\n      ")])]),e._v(" "),n("li",[n("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[e._v("\n        Forum\n      ")])]),e._v(" "),n("li",[n("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[e._v("\n        Community Chat\n      ")])]),e._v(" "),n("li",[n("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[e._v("\n        Twitter\n      ")])]),e._v(" "),n("br"),e._v(" "),n("li",[n("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[e._v("\n        Docs for This Template\n      ")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[t("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[this._v("\n        vue-router\n      ")])]),this._v(" "),t("li",[t("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[this._v("\n        vuex\n      ")])]),this._v(" "),t("li",[t("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[this._v("\n        vue-loader\n      ")])]),this._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[this._v("\n        awesome-vue\n      ")])])])}]};var i=n("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},l,!1,function(e){n("1uuo")},"data-v-d8ec41bc",null).exports,u=n("mvHQ"),c=n.n(u),f={name:"app",data:function(){return{fileList:[],file:"",percentCompleted:50}},computed:{style:function(){return{width:this.percentCompleted+"%"}}},methods:{submit:function(){var e=this,t=new FormData;t.append("file",this.file),this.axios.post("/upload/uploadfile",t,{"Content-Type":"multipart/form-data"}).then(function(t){console.log(t),e.$dialog.alert("success")}).catch(function(t){e.$message.warning("系统异常")})},fileSelect:function(){var e=this.$refs.file.files[0];this.file=e},handleRemove:function(e,t){console.log(e,t)},handlePreview:function(e){console.log(e)},handleExceed:function(e,t){this.$message.warning("xxx")},beforeRemove:function(e,t){return this.$confirm("确定移除？")},handleError:function(e,t,n){console.log("error==="+c()(e)),this.$message.warning("系统错误:"+e.status)}}},h={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-upload",{staticClass:"upload-demo",attrs:{action:"/upload/uploadfile","on-preview":e.handlePreview,"on-remove":e.handleRemove,"on-error":e.handleError,"before-remove":e.beforeRemove,multiple:"","file-list":e.fileList}},[n("el-button",{attrs:{size:"small",type:"danger"}},[n("i",{staticClass:"el-icon-upload"}),e._v("点击上传")]),e._v(" "),n("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("请选择需要上传的文件")])],1)},staticRenderFns:[]};var p=n("VU/8")(f,h,!1,function(e){n("yNLr")},null,null).exports,d={name:"app",data:function(){return{items:["Foo","Bar"]}},mounted:function(){var e=this,t=new FormData,n=this;this.axios.post("/files/list",t).then(function(e){console.log("res=>",e),n.$data.items=e.data}).catch(function(t){console.log("query error=="+c()(t)),e.$message.warning(t.message)})},methods:{query:function(){var e=this,t=new FormData;this.axios.post("/files/list",t).then(function(e){console.log("res=>",e)}).catch(function(t){console.log("query error"),e.$message.warning("系统异常")})},handleDelete:function(e,t){var n=this;this.$confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var e={path:t};n.axios.post("/files/delete",e).then(function(e){console.log(e),n.$message({showClose:!0,message:"删除成功"})}).catch(function(e){console.log("query error"),n.$message.warning(e.message)})}).catch(function(){n.$message({type:"info",message:"已取消删除"})})}}},m={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-table",{staticStyle:{width:"100%"},attrs:{data:e.items,align:"center"}},[n("el-table-column",{attrs:{label:"文件",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("div",{attrs:{slot:"reference"},slot:"reference"},[n("p",[e._v(e._s(t.row))])])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(n){return e.handleDelete(t.$index,t.row)}}},[e._v("删除")])]}}])})],1)},staticRenderFns:[]},v=n("VU/8")(d,m,!1,null,null,null).exports,_={name:"Container",data:function(){return{username:"",isCollapse:!1}},methods:{toggleSideBar:function(){this.isCollapse=!this.isCollapse},logout:function(){var e=this;this.$confirm("确认退出?","提示",{}).then(function(){sessionStorage.removeItem("user"),e.$router.push("/login")}).catch(function(){})},handleOpen:function(e,t){console.log(e,t)},handleClose:function(e,t){console.log(e,t)},handleSelect:function(e,t){console.log(e,t)}},mounted:function(){var e=sessionStorage.getItem("user");e&&(this.username=e)}},g={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-container",{staticStyle:{height:"500px",border:"1px solid #eee"}},[n("el-aside",{attrs:{width:"200px"}},[n("div",[n("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{router:"","default-active":e.$route.path,collapse:e.isCollapse},on:{open:e.handleOpen}},[n("el-submenu",{attrs:{index:"1"}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-menu"}),e._v(" "),n("span",{attrs:{slot:"title"},slot:"title"},[e._v("菜单")])]),e._v(" "),n("el-menu-item-group",[n("el-menu-item",{attrs:{index:"/upload1"}},[e._v("上传文件")]),e._v(" "),n("el-menu-item",{attrs:{index:"/list"}},[e._v("文件列表")])],1)],2)],1)],1)]),e._v(" "),n("el-container",[n("el-main",{staticClass:"app-body"},[[n("router-view")]],2)],1)],1)},staticRenderFns:[]};var b=n("VU/8")(_,g,!1,function(e){n("svpU")},null,null).exports,w=n("7VfX"),x=n.n(w),$=n("zL8q"),y=n.n($);n("tvR6");o.default.use(r.a),o.default.use(x.a),o.default.use(y.a);var C=new r.a({routes:[{path:"/",name:"HelloWorld",component:i},{path:"/upload",name:"Upload",component:p},{path:"/index",name:"Index",component:b,children:[{path:"/upload1",name:"Upload",component:p},{path:"/list",name:"FileList",component:v}]}]}),k=n("mtWM"),E=n.n(k);o.default.prototype.axios=E.a,E.a.defaults.withCredentials=!0,o.default.config.productionTip=!1,new o.default({el:"#app",router:C,components:{App:s},template:"<App/>"})},"d6/2":function(e,t){},svpU:function(e,t){},tvR6:function(e,t){},yNLr:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.865631bc782e39e8e1b4.js.map