webpackJsonp([19],{672:function(e,t,r){function o(e){r(792)}var i=r(47)(r(724),r(828),o,"data-v-6232adf2",null);e.exports=i.exports},684:function(e,t,r){"use strict";function o(e){return r.i(y.a)("/apply/create",e,"post")}function i(e){return r.i(y.a)("/apply/drop",e,"post")}function a(e){return r.i(y.a)("/apply/disable",e,"post")}function s(e){return r.i(y.a)("/user/update",e,"post")}function n(e){return r.i(y.a)("/apply/update",e,"post")}function c(e){return r.i(y.a)("/static/deviceClass?"+e,e,"get")}function l(e){return r.i(y.a)("/static/deviceType?"+e,e,"get")}function d(e){return r.i(y.a)("/map/provinces",e,"get")}function p(e){return r.i(y.a)("/map/cities?"+e,e,"get")}function u(e){return r.i(y.a)("/map/areas?"+e,e,"get")}function m(e){return r.i(y.a)("/apply/get?"+e,e,"get")}function A(e){return r.i(y.a)("/apply/confirm?"+e,e,"get")}function f(e){return r.i(y.a)("/map/organization?"+e,e,"get")}function v(e){return r.i(y.a)("/device/cylinder?"+e,e,"get")}function C(e){return r.i(y.a)("/device/pipe?"+e,e,"get")}function g(e){return r.i(y.a)("/device/cylinder",e,"post")}function h(e){return r.i(y.a)("/device/pipe",e,"post")}function b(e){return r.i(y.a)("/apply/create",e,"post")}t.f=o,t.q=i,t.p=a,t.r=s,t.g=n,t.o=c,t.i=l,t.a=d,t.b=p,t.c=u,t.e=m,t.h=A,t.d=f,t.j=v,t.k=C,t.l=g,t.m=h,t.n=b;var y=r(97)},685:function(e,t,r){"use strict";function o(e){return r.i(a.a)("/device/get",e,"post")}function i(e){return r.i(a.a)("/device/get?"+e,e,"get")}t.a=o,t.b=i;var a=r(97)},724:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,i=r(23),a=r.n(i),s=r(246),n=r.n(s),c=r(71),l=r.n(c),d=r(48),p=r(684),u=r(685);t.default={data:function(){return{columnsCanStopUse:[{type:"selection",width:60,align:"center"},{type:"index",key:"id",width:60},{title:"设备品种",key:"deviceKind",width:120},{title:"使用登记证编号",key:"registCode"},{title:"设备代码",key:"eqCode"},{title:"设备使用地点",key:"eqUseAddr"},{title:"产品编号",key:"productCode"}],addressCode:"",registCode:"",deviceType:"",acceptCom:"",acceptComList:[],current:0,deviceCode:"",ruleForm:{registKind:"",deviceNum:"",useComName:"",useComAddr:"",safeAdministrator:"",propertyComPhone:"",subList:[],mobilePhone:"",comTablePerson:""},formDynamicPres:{items:[{deviceKind:"",registCode:"",eqCode:"",eqUseAddr:"",productCode:"",reasons:""}]},declarationTypeList:[{value:"停用",label:"停用"},{value:"报废",label:"报废"},{value:"注销",label:"注销"}],active:1,pdfUrl:"",rules:{registKind:[{required:!0,message:"不能为空",trigger:"change"}],comTablePerson:[{required:!0,message:"不能为空",trigger:"blur"}],useComAddr:[{required:!0,message:"不能为空",trigger:"blur"}],mobilePhone:[{required:!0,message:"不能为空",trigger:"blur"}]},creatOrUpdate:!1,isCompany:!1,canStopUseDeviceList:[],canStopUseDevice:[],acceptorAgencyId:"",acceptorAgencyName:""}},components:{},computed:l()({},r.i(d.a)(["getSelectedOption","getSelectedNum","getterUserData"])),mounted:function(){this.initData()},watch:{"$route.query":function(){"/stopUseApp"==this.$route.path&&this.initData()}},methods:l()({},r.i(d.b)(["getUserData"]),(o={makeParams:function(e,t,r,o,i,a){var s={};return s.page=e,s.size=t,""!==r&&""!==r[0]&&""!==r[1]&&(s.time=this.changeTime(r)),""!==o&&(s.deviceTypeId=parseInt(o)),""!==i&&(s.processing=i),""!==a&&(s.states=[parseInt(a)]),s},handleAddPres:function(){this.formDynamicPres.items.push({deviceKind:"",registCode:"",eqCode:"",eqUseAddr:"",productCode:"",reasons:""}),this.ruleForm.subList=this.formDynamicPres.items},handleRemovePres:function(e){this.formDynamicPres.items.splice(e,1),this.ruleForm.subList=this.formDynamicPres.items},printTrigger:function(e){var t=document.getElementById(e);t.focus(),t.contentWindow.print()},chosenAccept:function(e){this.acceptorAgencyId=e.value,this.acceptorAgencyName=e.label},setUserDetailData:function(){this.addressCode=localStorage.getItem("addressCode"),this.ruleForm.useComName=localStorage.getItem("useComName"),this.ruleForm.useComAddr=localStorage.getItem("useComAddr"),this.ruleForm.mobilePhone=localStorage.getItem("mobilePhone"),this.ruleForm.propertyComName=localStorage.getItem("propertyComName"),"true"==localStorage.getItem("company")?(this.ruleForm.safeAdministrator=localStorage.getItem("safeAdministrator"),this.isCompany=!0,console.log(this.ruleForm.safeAdministrator)):(this.ruleForm.safeAdministrator=localStorage.getItem("name"),this.isCompany=!1)},initData:function(){var e=this;this.active=1,this.current=0,this.creatOrUpdate=!1,this.deviceCode=this.$route.query.deviceCode,this.registCode=this.$route.query.registCode,this.deviceType=this.$route.query.deviceType,this.canStopUseDeviceList=[],this.clearRuleForm(),this.formDynamicPres.items=[{deviceKind:"",registCode:"",eqCode:"",eqUseAddr:"",productCode:"",reasons:""}],this.setUserDetailData();var t="addressCode="+this.addressCode;p.d(t).then(function(t){e.acceptComList=[];for(var r=0,o=t.length;r<o;r++)e.acceptComList.push({value:t[r].id,label:t[r].name})}).catch(function(e){console.log(e)}),t={size:10,processing:!1,states:[0]},this.getCanStopUseDevice(t)},getCanStopUseDevice:function(e){var t=this;u.a(e).then(function(e){if(200===e.status){for(var r=0;r<e.data.content.length;r++){var o={deviceKind:e.data.content[r].deviceKind,registCode:e.data.content[r].registCode,eqCode:e.data.content[r].eqCode,eqUseAddr:e.data.content[r].eqUseAddr,productCode:e.data.content[r].productCode,deviceId:e.data.content[r].id};t.canStopUseDeviceList.push(o)}console.log(t.canStopUseDeviceList)}}).catch(function(e){console.log(e)})},clearRuleForm:function(){this.ruleForm={registKind:"",deviceNum:"",useComName:"",useComAddr:"",safeAdministrator:"",propertyComPhone:"",subList:[],comTablePerson:""}},submit:function(e){var t=this;p.q(e).then(function(e){200==e.status&&(t.applyId=e.data.applyId,t.fileId=e.data.forms.split("=")[1].split("}")[0],t.pdfUrl="/file/preview?fileId="+t.fileId,t.$Message.info("您已提交信息，请预览结果"),t.modalCertain=!1)}).catch(function(e){console.log(e)})},submitContent:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),t.$Message.info("尚有信息不符合要求，请检查"),!1;t.current++,t.active++;var r=(n()({},t.ruleForm),t.makeParams());t.submit(r)})}},a()(o,"makeParams",function(){var e={};e.formList=[],e.formList.push(this.ruleForm),e.formList[0].acceptorAgencyId=this.acceptorAgencyId,e.formList[0].acceptorAgencyName=this.acceptorAgencyName,e.formList[0].formType=5,e.deviceId=[];for(var t=0;t<this.ruleForm.subList.length;t++)e.deviceId.push(this.ruleForm.subList[t].deviceId);return e.applyType=3,e}),a()(o,"updateContent",function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),t.$Message.info("尚有信息不符合要求，请检查"),!1;var r=(n()({},t.ruleForm),{});r.formList=[],r.formList.push(t.ruleForm),r.formList[0].acceptorAgencyId=t.acceptorAgencyId,r.formList[0].acceptorAgencyName=t.acceptorAgencyName,r.formList[0].formType=5,r.applyType=3,r.deviceId=[];for(var o=0;o<t.ruleForm.subList.length;o++)r.deviceId.push(t.ruleForm.subList[o].deviceId);p.g(r).then(function(e){200==e.status&&(t.current++,t.active++,t.applyId=e.data.applyId,t.fileId=e.data.forms.split("=")[1].split("}")[0],t.pdfUrl="/file/preview?fileId="+t.fileId,t.$Message.info("您已提交信息，请预览结果"),t.modalCertain=!1)}).catch(function(e){console.log(e)})})}),a()(o,"next",function(){if(0==this.ruleForm.subList.length)return void this.$Message.info("请选择要停用的设备");4==this.current?this.current=0:this.current+=1,this.active++}),a()(o,"before",function(){this.current--,2==--this.active&&(this.creatOrUpdate=!0)}),a()(o,"confirmForm",function(){var e=this;if(""==this.acceptCom)return void this.$Notice.error({title:"这是通知标题",desc:"请选择登记机关"});this.$refs.ruleForm.validate(function(t){if(!t)return console.log("error submit!!"),e.$Message.info("尚有信息不符合要求，请检查"),!1;1==e.$route.query.ifold||!0===e.creatOrUpdate?e.$Modal.confirm({title:"确认登记表信息",content:"<p>请确认全部填写信息</p>",onOk:function(){e.updateContent("ruleForm")},onCancel:function(){e.$Message.info("点击了取消")}}):e.$Modal.confirm({title:"确认登记表信息",content:"<p>请确认全部填写信息</p>",onOk:function(){e.submitContent("ruleForm")},onCancel:function(){e.$Message.info("点击了取消")}})})}),a()(o,"selectDevice",function(e,t){this.formDynamicPres.items=e,this.ruleForm.subList=e,console.log(this.ruleForm.subList),this.ruleForm.deviceNum=e.length}),a()(o,"selectDeviceAll",function(e){this.formDynamicPres.items=e,this.ruleForm.subList=e,this.ruleForm.deviceNum=e.length}),a()(o,"instance",function(e){var t=this,r="applyId="+this.applyId;p.h(r).then(function(e){if(e){t.$Modal.confirm({title:"通知",content:"<p>您已经成功提交申请</p><p>请耐心等待受理结果</p>",onOk:function(){t.$router.go(0)},onCancel:function(){t.$Message.info("点击了取消")}})}}).catch(function(e){console.log(e)})}),o))}},757:function(e,t,r){t=e.exports=r(648)(!0),t.push([e.i,"@media print{.print[data-v-6232adf2]{display:block}.nprint[data-v-6232adf2]{display:none}}.setApp_topbar[data-v-6232adf2]{position:fixed;width:100%;margin:0;padding:0;height:80px;z-index:10;background-color:#fff}.base-box[data-v-6232adf2],.chooseAccept[data-v-6232adf2]{margin-left:8%;display:block;border:2px solid #dddee1;border-top-left-radius:0;border-top-right-radius:0;border-bottom-right-radius:3px;border-bottom-left-radius:3px;width:83.881%;padding-left:100px;padding-right:100px;box-sizing:border-box;background-color:#fff}.header_one[data-v-6232adf2]{text-align:center;margin-left:-50px;margin-top:20px;font-size:25px}.header_two[data-v-6232adf2]{margin-left:-30px;margin-top:10px;font-size:19px}.setApp_button[data-v-6232adf2]{margin:10px}.chooseAccept[data-v-6232adf2]{padding-bottom:10px;margin-bottom:10px}.formDynamicPres[data-v-6232adf2]{border:1px solid rgba(0,0,0,.2);border-top-left-radius:3px;border-top-right-radius:3px;border-bottom-right-radius:3px;border-bottom-left-radius:3px;margin-bottom:5px;padding-left:5%;padding-top:3%}.list-box[data-v-6232adf2]{display:block;height:auto;border-top-left-radius:0;border-top-right-radius:0;border-bottom-right-radius:3px;border-bottom-left-radius:3px;border-color:#dddee1;margin-top:10px;box-sizing:border-box}","",{version:3,sources:["/Users/zhangyunlong/Downloads/my-project/src/page/apply/stopUseApp/stopUseApp.vue"],names:[],mappings:"AACA,aACA,wBACI,aAAe,CAClB,AACD,yBACI,YAAc,CACjB,CACA,AACD,gCACE,eAAgB,AAChB,WAAY,AACZ,SAAY,AACZ,UAAa,AACb,YAAa,AACb,WAAY,AACZ,qBAAwB,CACzB,AACD,0DAEE,eAAgB,AAChB,cAAe,AACf,yBAA0B,AAC1B,yBAA0B,AAC1B,0BAA2B,AAC3B,+BAAgC,AAChC,8BAA+B,AAC/B,cAAe,AACf,mBAAoB,AACpB,oBAAqB,AACrB,sBAAuB,AACvB,qBAAwB,CACzB,AACD,6BACE,kBAAmB,AACnB,kBAAmB,AACnB,gBAAiB,AACjB,cAAgB,CACjB,AACD,6BACE,kBAAmB,AACnB,gBAAiB,AACjB,cAAgB,CACjB,AACD,gCACE,WAAa,CACd,AACD,+BACE,oBAAqB,AACrB,kBAAoB,CACrB,AACD,kCACE,gCAAqC,AACrC,2BAA4B,AAC5B,4BAA6B,AAC7B,+BAAgC,AAChC,8BAA+B,AAC/B,kBAAmB,AACnB,gBAAiB,AACjB,cAAgB,CACjB,AACD,2BACE,cAAe,AACf,YAAa,AACb,yBAA0B,AAC1B,0BAA2B,AAC3B,+BAAgC,AAChC,8BAA+B,AAC/B,qBAAsB,AACtB,gBAAiB,AACjB,qBAAuB,CACxB",file:"stopUseApp.vue",sourcesContent:["\n@media print {\n.print[data-v-6232adf2] {\n    display: block;\n}\n.nprint[data-v-6232adf2] {\n    display: none;\n}\n}\n.setApp_topbar[data-v-6232adf2] {\n  position: fixed;\n  width: 100%;\n  margin: 0px;\n  padding: 0px;\n  height: 80px;\n  z-index: 10;\n  background-color: white;\n}\n.base-box[data-v-6232adf2],\n.chooseAccept[data-v-6232adf2] {\n  margin-left: 8%;\n  display: block;\n  border: 2px solid #dddee1;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n  width: 83.881%;\n  padding-left: 100px;\n  padding-right: 100px;\n  box-sizing: border-box;\n  background-color: white;\n}\n.header_one[data-v-6232adf2] {\n  text-align: center;\n  margin-left: -50px;\n  margin-top: 20px;\n  font-size: 25px;\n}\n.header_two[data-v-6232adf2] {\n  margin-left: -30px;\n  margin-top: 10px;\n  font-size: 19px;\n}\n.setApp_button[data-v-6232adf2] {\n  margin: 10px;\n}\n.chooseAccept[data-v-6232adf2] {\n  padding-bottom: 10px;\n  margin-bottom: 10px;\n}\n.formDynamicPres[data-v-6232adf2] {\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-top-left-radius: 3px;\n  border-top-right-radius: 3px;\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n  margin-bottom: 5px;\n  padding-left: 5%;\n  padding-top: 3%;\n}\n.list-box[data-v-6232adf2] {\n  display: block;\n  height: auto;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n  border-color: #dddee1;\n  margin-top: 10px;\n  box-sizing: border-box;\n}\n"],sourceRoot:""}])},792:function(e,t,r){var o=r(757);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);r(649)("303d8527",o,!0)},828:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"stopUseApp"},[r("div",{staticClass:"setApp_topbar"},[r("div",{staticClass:"step",staticStyle:{width:"85%","margin-top":"20px"}},[r("Steps",{attrs:{current:e.current}},[r("Step",{attrs:{title:"步骤1",content:"选择要停用的设备"}}),e._v(" "),r("Step",{attrs:{title:"步骤2",content:"填写《特种设备停用报废注销登记表》"}}),e._v(" "),r("Step",{attrs:{title:"步骤3",content:"预览《特种设备停用报废注销登记表》"}}),e._v(" "),r("Step",{attrs:{title:"步骤4",content:"完成申请"}})],1)],1)]),e._v(" "),r("div",{staticClass:"setApp_content",staticStyle:{position:"absolute",top:"85px"}},[1==this.active?r("div",{staticClass:"statusInfo",staticStyle:{"margin-bottom":"20px"}},[r("div",{staticClass:"list-box"},[r("h3",{staticClass:"header_one",staticStyle:{margin:"10px"}},[e._v("选择要停用的设备")]),e._v(" "),r("Table",{ref:"selection",attrs:{border:"",columns:e.columnsCanStopUse,data:e.canStopUseDeviceList,width:"800px"},on:{"on-select":e.selectDevice,"on-select-all":e.selectDeviceAll}}),e._v(" "),1==this.active?r("Button",{attrs:{type:"primary"},on:{click:function(t){e.next()}}},[e._v("下一步")]):e._e()],1)]):e._e(),e._v(" "),r("Form",{ref:"ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":110,"label-position":"left"}},[2==this.active?r("div",{staticClass:"statusInfo",staticStyle:{"margin-bottom":"20px"}},[r("div",{staticClass:"chooseAccept"},[r("h3",{staticClass:"header_one",staticStyle:{"margin-bottom":"10px"}},[e._v("登记机关")]),e._v(" "),r("FormItem",{staticClass:"ivu-form-item-required",attrs:{label:"登记机关"}},[r("Select",{attrs:{filterable:"","label-in-value":!0},on:{"on-change":e.chosenAccept},model:{value:e.acceptCom,callback:function(t){e.acceptCom=t},expression:"acceptCom"}},e._l(e.acceptComList,function(t){return r("Option",{key:t.value,attrs:{value:t.value}},[e._v(e._s(t.label))])}))],1)],1),e._v(" "),r("div",{staticClass:"base-box"},[r("h2",{staticClass:"header_one"},[e._v("特种设备停用报废注销登记表")]),e._v(" "),r("h2",{staticClass:"header_two"},[e._v("设备基本情况")]),e._v(" "),r("Row",[r("Col",{attrs:{span:"11"}},[r("Form-item",{attrs:{label:"申报种类",prop:"registKind"}},[r("Select",{model:{value:e.ruleForm.registKind,callback:function(t){e.ruleForm.registKind=t},expression:"ruleForm.registKind"}},e._l(e.declarationTypeList,function(t){return r("Option",{key:t.value,attrs:{value:t.value}},[e._v(e._s(t.label)+"\n                ")])}))],1)],1),e._v(" "),r("Col",{attrs:{span:"11",offset:"2"}},[r("Form-item",{staticClass:"ivu-form-item-required",attrs:{label:"台数",prop:"deviceNum"}},[r("Input",{attrs:{disabled:""},model:{value:e.ruleForm.deviceNum,callback:function(t){e.ruleForm.deviceNum=t},expression:"ruleForm.deviceNum"}})],1)],1)],1),e._v(" "),r("Form-item",{attrs:{label:"使用单位名称",prop:"useComName"}},[r("Input",{attrs:{disabled:""},model:{value:e.ruleForm.useComName,callback:function(t){e.ruleForm.useComName=t},expression:"ruleForm.useComName"}})],1),e._v(" "),r("Form-item",{attrs:{label:"使用单位地址",prop:"useComAddr"}},[r("Input",{attrs:{disabled:""},model:{value:e.ruleForm.useComAddr,callback:function(t){e.ruleForm.useComAddr=t},expression:"ruleForm.useComAddr"}})],1),e._v(" "),r("Row",[r("Col",{attrs:{span:"11"}},[r("Form-item",{attrs:{label:"安全管理员",prop:"safeAdministrator"}},[r("Input",{attrs:{disabled:""},model:{value:e.ruleForm.safeAdministrator,callback:function(t){e.ruleForm.safeAdministrator=t},expression:"ruleForm.safeAdministrator"}})],1)],1),e._v(" "),r("Col",{attrs:{span:"11",offset:"2"}},[r("Form-item",{attrs:{label:"安全管理员联系电话",prop:"mobilePhone"}},[r("Input",{attrs:{disabled:""},model:{value:e.ruleForm.mobilePhone,callback:function(t){e.ruleForm.mobilePhone=t},expression:"ruleForm.mobilePhone"}})],1)],1)],1),e._v(" "),r("Row",[r("Col",{attrs:{span:"11"}},[r("Form-item",{attrs:{label:"产权单位名称",prop:"propertyComName"}},[r("Input",{attrs:{disabled:""},model:{value:e.ruleForm.propertyComName,callback:function(t){e.ruleForm.propertyComName=t},expression:"ruleForm.propertyComName"}})],1)],1),e._v(" "),r("Col",{attrs:{span:"11",offset:"2"}},[r("Form-item",{attrs:{label:"产权单位联系电话",prop:"propertyComPhone"}},[r("Input",{model:{value:e.ruleForm.propertyComPhone,callback:function(t){e.ruleForm.propertyComPhone=t},expression:"ruleForm.propertyComPhone"}})],1)],1)],1),e._v(" "),e._l(e.formDynamicPres.items,function(t,o){return r("Form",{key:t.id,ref:"formDynamicPres",refInFor:!0,staticClass:"formDynamicPres",attrs:{model:e.formDynamicPres,"label-width":140,inline:""}},[r("Row",[r("Col",{attrs:{span:"11"}},[r("FormItem",{key:o,staticClass:"ivu-form-item-required",attrs:{label:"序号"+(o+1)+"  设备品种（名称）",prop:"items."+o+".value"}},[r("Input",{attrs:{type:"text",placeholder:"请输入设备品种（名称）."},model:{value:t.deviceKind,callback:function(e){t.deviceKind=e},expression:"item.deviceKind"}})],1)],1),e._v(" "),r("Col",{attrs:{span:"11",offset:"2"}},[r("FormItem",{key:o,staticClass:"ivu-form-item-required",attrs:{label:"使用登记证编号",prop:"items."+o+".value"}},[r("Input",{attrs:{type:"text",placeholder:"请输入使用登记证编号"},model:{value:t.registCode,callback:function(e){t.registCode=e},expression:"item.registCode"}})],1)],1)],1),e._v(" "),r("Row",[r("Col",{attrs:{span:"11"}},[r("FormItem",{key:o,staticClass:"ivu-form-item-required",attrs:{label:"设备代码",prop:"items."+o+".value"}},[r("Input",{attrs:{type:"text",placeholder:"请输入设备代码"},model:{value:t.eqCode,callback:function(e){t.eqCode=e},expression:"item.eqCode"}})],1),e._v(" "),r("FormItem",{key:o,staticClass:"ivu-form-item-required",attrs:{label:"产品编号",prop:"items."+o+".value"}},[r("Input",{attrs:{type:"text",placeholder:"请输入产品编号"},model:{value:t.productCode,callback:function(e){t.productCode=e},expression:"item.productCode"}})],1)],1),e._v(" "),r("Col",{attrs:{span:"11",offset:"2"}},[r("FormItem",{key:o,staticClass:"ivu-form-item-required",attrs:{label:"设备使用地点",prop:"items."+o+".value"}},[r("Input",{attrs:{type:"text",placeholder:"请输入设备使用地点"},model:{value:t.eqUseAddr,callback:function(e){t.eqUseAddr=e},expression:"item.eqUseAddr"}})],1),e._v(" "),r("FormItem",{key:o,staticClass:"ivu-form-item-required",attrs:{label:"停用注销报废原因",prop:"items."+o+".value"}},[r("Input",{attrs:{type:"text",placeholder:"请输入停用注销报废原因"},model:{value:t.reasons,callback:function(e){t.reasons=e},expression:"item.reasons"}})],1)],1)],1),e._v(" "),r("FormItem"),e._v(" "),r("br")],1)})],2),e._v(" "),r("div",{staticClass:"base-box"},[r("h2",{staticClass:"header_two"},[e._v("其他信息")]),e._v(" "),r("Row",[r("Col",{attrs:{span:"11"}},[r("Form-item",{attrs:{label:"使用单位填表人员",prop:"comTablePerson"}},[r("Input",{model:{value:e.ruleForm.comTablePerson,callback:function(t){e.ruleForm.comTablePerson=t},expression:"ruleForm.comTablePerson"}})],1)],1),e._v(" "),r("Col",{attrs:{span:"11",offset:"2"}})],1)],1),e._v(" "),2==this.active?r("Button",{attrs:{type:"warning"},on:{click:e.before}},[e._v("上一步")]):e._e(),e._v(" "),2==this.active?r("Button",{attrs:{type:"primary"},on:{click:e.confirmForm}},[e._v("下一步")]):e._e()],1):e._e(),e._v(" "),3==this.active?r("div",{staticClass:"setTable",staticStyle:{width:"900px",top:"30px",position:"absolute"}},[r("iframe",{staticStyle:{width:"100%",height:"1000px"},attrs:{id:"iFramePdf",src:this.pdfUrl}}),e._v(" "),r("Button",{attrs:{type:"warning"},on:{click:function(t){e.printTrigger("iFramePdf")}}},[e._v("打印")]),e._v(" "),3==this.active?r("Button",{attrs:{type:"primary"},on:{click:function(t){e.before()}}},[e._v("上一步")]):e._e(),e._v(" "),3==this.active?r("Button",{attrs:{type:"success"},on:{click:function(t){e.instance("success")}}},[e._v("确认提交")]):e._e()],1):e._e(),e._v(" "),r("div",{staticClass:"setApp_button"})])],1)])},staticRenderFns:[]}}});
//# sourceMappingURL=19.d0652751eb1be05380f4.js.map