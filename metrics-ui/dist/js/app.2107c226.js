(function(e){function t(t){for(var n,s,i=t[0],l=t[1],c=t[2],d=0,p=[];d<i.length;d++)s=i[d],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&p.push(o[s][0]),o[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);u&&u(t);while(p.length)p.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],n=!0,i=1;i<a.length;i++){var l=a[i];0!==o[l]&&(n=!1)}n&&(r.splice(t--,1),e=s(s.s=a[0]))}return e}var n={},o={app:0},r=[];function s(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=n,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(a,n,function(t){return e[t]}.bind(null,n));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/EYBadge-Metrics-UI/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var u=l;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"0e4d":function(e,t,a){},"162f":function(e,t,a){"use strict";var n=a("0e4d"),o=a.n(n);o.a},"4d12":function(e,t,a){},5452:function(e,t,a){"use strict";var n=a("af35"),o=a.n(n);o.a},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),o=(a("d3b7"),a("bc3a")),r=a.n(o),s={},i=r.a.create(s);i.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),i.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)})),Plugin.install=function(e){e.axios=i,window.axios=i,Object.defineProperties(e.prototype,{axios:{get:function(){return i}},$axios:{get:function(){return i}}})},n["a"].use(Plugin);Plugin;var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{class:{"ats-sidebar-expanded":e.sideBarExpanded}},[a("Header"),a("v-app",[a("div",{staticClass:"d-flex"},[a("div",[a("Navigation")],1),a("v-content",{staticClass:"ats-container"},[a("router-view")],1)],1),a("Snackbar"),a("Footer")],1)],1)},c=[],u=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app-bar",{staticClass:"ats-header",attrs:{fixed:"",color:"#323232"}},[a("v-img",{staticClass:"header-logo",attrs:{src:"http://localhost:8080/ey-logo.jpg","max-height":"70","max-width":"50",to:"/"}}),a("v-toolbar-title",{staticClass:"header-title "},[e._v("EY Badge Metrics")])],1)},d=[],p={name:"Header"},h=p,m=(a("5452"),a("2877")),f=a("6544"),v=a.n(f),b=a("40dc"),g=a("adda"),y=a("2a7f"),x=Object(m["a"])(h,u,d,!1,null,null,null),C=x.exports;v()(x,{VAppBar:b["a"],VImg:g["a"],VToolbarTitle:y["a"]});var T=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-navigation-drawer",{staticClass:"ats-sidebar",attrs:{app:"",color:"#f5f5f5","mini-variant-width":"60",permanent:"","mini-variant":e.$store.state.mini},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[a("v-list",[a("v-list-item",[a("v-btn",{attrs:{to:"/Employee/1",icon:"",depressed:"",large:""}},[a("v-icon",{attrs:{color:"#323232"}},[e._v("mdi-account")])],1),a("v-list-item-title",{staticClass:"pl-2",on:{click:function(t){return e.navigateTo(0)}}},[e._v("Developer")])],1),a("v-list-item",[a("v-btn",{attrs:{to:"/EmployeeCards",icon:"",depressed:"",large:""}},[a("v-icon",{attrs:{color:"#323232"}},[e._v("mdi-account-multiple")])],1),a("v-list-item-title",{staticClass:"pl-2",on:{click:function(t){return e.navigateTo(1)}}},[e._v("Team Members")])],1),a("v-list-item",[a("v-btn",{attrs:{to:"/TeamCards",icon:"",depressed:"",large:""}},[a("v-icon",{attrs:{color:"#323232"}},[e._v("mdi-account-network")])],1),a("v-list-item-title",{staticClass:"pl-2",on:{click:function(t){return e.navigateTo(2)}}},[e._v("Peer Teams")])],1),a("v-list-item",[a("v-btn",{attrs:{to:"/Manager",icon:"",depressed:"",large:""}},[a("v-icon",{attrs:{color:"#323232"}},[e._v("mdi-chart-areaspline")])],1),a("v-list-item-title",{staticClass:"pl-2",on:{click:function(t){return e.navigateTo(3)}}},[e._v("Project Manager")])],1)],1),a("div",{staticClass:"nav-arrow",class:{"nav-arrow-expanded":!e.$store.state.mini}},[a("v-btn",{attrs:{icon:"",depressed:"",large:""},on:{click:function(t){return e.navExtendCollapse()}}},[e.$store.state.mini?a("v-icon",{attrs:{color:"#323232"}},[e._v("mdi-chevron-double-right")]):a("v-icon",{attrs:{color:"#323232"}},[e._v("mdi-chevron-double-left")])],1)],1)],1)},w=[],D={name:"Navigation",data:function(){return{drawer:null,selectedNavItem:0}},methods:{navExtendCollapse:function(){this.$store.dispatch("navExtendCollapse")},navigateTo:function(e){0==e?this.$router.push("/Employee/1"):1==e?this.$router.push("/EmployeeCards"):2==e?this.$router.push("TeamCards"):3==e&&this.$router.push("/Manager")}}},E=D,k=(a("a4e1"),a("8336")),O=a("132d"),_=a("8860"),S=a("da13"),j=a("5d23"),B=a("f774"),$=Object(m["a"])(E,T,w,!1,null,null,null),I=$.exports;v()($,{VBtn:k["a"],VIcon:O["a"],VList:_["a"],VListItem:S["a"],VListItemTitle:j["b"],VNavigationDrawer:B["a"]});var V=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-footer",{attrs:{fixed:"",height:"15px",color:"#f5f5f5"}},[a("v-spacer"),e._v("© EY Badges 2020 ")],1)},P=[],F={name:"Footer"},L=F,Q=(a("162f"),a("553a")),N=a("2fa4"),R=Object(m["a"])(L,V,P,!1,null,"52ed5554",null),M=R.exports;v()(R,{VFooter:Q["a"],VSpacer:N["a"]});var A=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-snackbar",{attrs:{bottom:"",right:"",color:e.$store.state.color},model:{value:e.$store.state.display,callback:function(t){e.$set(e.$store.state,"display",t)},expression:"$store.state.display"}},[e._v(e._s(e.$store.state.message))])],1)},U=[],Y={name:"Snackbar"},z=Y,K=a("2db4"),G=Object(m["a"])(z,A,U,!1,null,null,null),H=G.exports;v()(G,{VSnackbar:K["a"]});var J={name:"App",components:{Header:C,Navigation:I,Footer:M,Snackbar:H},data:function(){return{sideBarExpanded:!1}},mounted:function(){this.$store.dispatch("getEmp"),this.$store.dispatch("getTeamDetails")}},W=J,q=(a("5c0b"),a("7496")),X=a("a75b"),Z=Object(m["a"])(W,l,c,!1,null,null,null),ee=Z.exports;v()(Z,{VApp:q["a"],VContent:X["a"]});var te=a("f309");n["a"].use(te["a"]);var ae=new te["a"]({}),ne=a("d4ec"),oe=a("bee2"),re=a("ade3"),se="/config/config.json",ie="Employees",le="TeamDetails",ce=function(){function e(){Object(ne["a"])(this,e),Object(re["a"])(this,"handleError",(function(e){return Promise.reject(e)}))}return Object(oe["a"])(e,[{key:"getConfig",value:function(){var e=this;return r.a.get(se).then((function(t){return e.createService(t.data.baseUrl),e.baseURL=t.data.baseUrl,t}))}},{key:"handleSuccess",value:function(e){return e}},{key:"createService",value:function(e){this.service||(this.service=r.a.create({headers:{"Content-Type":"application/json"},responseType:"json",baseURL:e})),this.service.interceptors.response.use(this.handleSuccess,this.handleError)}},{key:"get",value:function(e){var t=this;return this.service.get(this.baseURL+e).then((function(a){return console.log(t.baseURL+e),a})).catch((function(a){throw console.log("ERRORRRRRRRR",t.baseURL+e),a}))}},{key:"post",value:function(e,t){return this.service.post(this.baseURL+e,t).then((function(e){return e})).catch((function(e){throw e}))}},{key:"put",value:function(e,t){return this.service.put(e,t).then((function(e){return e})).catch((function(e){throw e}))}},{key:"patch",value:function(e,t){return this.service.patch(e,t).then((function(e){return e})).catch((function(e){throw e}))}},{key:"delete",value:function(e,t){return this.service.delete(e,t).then((function(e){return e})).catch((function(e){throw e}))}}]),e}(),ue=new ce,de=a("8c4f"),pe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("Chart"),a("BarChart")],1)},he=[],me=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h1",[e._v("Associate Software Engineer's KPI Metrics")]),a("apexcharts",{attrs:{width:"1000",height:"550",options:e.chartOptions,series:e.series2}}),a("h1",[e._v("Innovation Timeline")]),a("vue-horizontal-timeline",{attrs:{"min-width":"200px","timeline-background":"#323232",items:e.items}})],1)},fe=[],ve=a("1321"),be=a.n(ve),ge={name:"Chart",components:{apexcharts:be.a},data:function(){return{items:[{title:"January",content:"Idea to Enhance the company: Follow a performance management tool"},{title:"Febuary"},{title:"March",content:""},{title:"April",content:""},{title:"May",content:""},{title:"June",content:""},{title:"July",content:""},{title:"August",content:"Idea to enhance the project: Use tool like Resharper"},{title:"September",content:""},{title:"November",content:""},{title:"December",content:""}]}},computed:{chartOptions:{get:function(){return{stroke:{width:"2"},chart:{id:"basic-bar"},fill:{type:"solid"},xaxis:{categories:this.$store.state.chartData.dates,axisBorder:{show:!1},axisTicks:{show:!1},crosshairs:{fill:{type:"gradient",gradient:{colorFrom:"#D8E3F0",colorTo:"#BED1E6",stops:[0,100],opacityFrom:.4,opacityTo:.5}}},tooltip:{enabled:!0}},annotations:{xaxis:[{x:"2019-10-14",x2:"2020-01-01",fillColor:"#B3F7CA",label:{orientation:"horizontal",text:".Net Web API Core Badge earned(Gold), Grade:'A'"}}]}}}},series2:{get:function(){return[{name:"Test Coverage",type:"line",data:this.$store.state.chartData.testCoverage},{name:"Code Quality",type:"line",data:this.$store.state.chartData.codeQualityPercent},{name:"Code Smell",type:"line",data:this.$store.state.chartData.codeSmellPercent},{name:"Throughput",type:"line",data:this.$store.state.chartData.throughput}]}}}},ye=ge,xe=Object(m["a"])(ye,me,fe,!1,null,null,null),Ce=xe.exports,Te=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"barchart"}},[a("h1",[e._v("Developer KLOC")]),a("apexchart",{attrs:{type:"bar",height:"350",options:e.chartOptions,series:e.series2}})],1)},we=[],De={name:"BarChart",components:{apexchart:be.a},data:function(){return{chartOptions:{chart:{height:350,type:"bar"},annotations:{xaxis:[{x:"2019-10-14",x2:"2020-01-01",fillColor:"#FFFF15",label:{orientation:"horizontal",text:" .Net Web API Core Badge earned(Gold), Grade:'A'"}}]},plotOptions:{bar:{dataLabels:{position:"top"}}},dataLabels:{enabled:!0,offsetY:-20,style:{fontSize:"12px",colors:["#304758"]}},xaxis:{categories:this.$store.state.chartData.dates,position:"top",axisBorder:{show:!1},axisTicks:{show:!1},crosshairs:{fill:{type:"gradient",gradient:{colorFrom:"#D8E3F0",colorTo:"#BED1E6",stops:[0,100],opacityFrom:.4,opacityTo:.5}}},tooltip:{enabled:!0}},yaxis:{axisBorder:{show:!1},axisTicks:{show:!1},labels:{show:!1}},title:{text:"Monthly KLOC by developer in 2019",floating:!0,offsetY:330,align:"center",style:{color:"#444"}}}}},computed:{series2:{get:function(){return[{name:"KLOC",data:this.$store.state.chartData.kloc}]}}}},Ee=De,ke=Object(m["a"])(Ee,Te,we,!1,null,null,null),Oe=ke.exports,_e={name:"Employee",components:{Chart:Ce,BarChart:Oe},mounted:function(){this.$store.dispatch("getEmpById",this.$route.params.id)},destroyed:function(){this.$store.dispatch("destoryChartData")}},Se=_e,je=Object(m["a"])(Se,pe,he,!1,null,null,null),Be=je.exports,$e=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",[a("apexcharts",{attrs:{type:"line",height:"350",options:e.chartOptions1,series:e.series1}})],1),a("hr"),a("table",[a("tr",[a("td",[a("div",[a("apexcharts",{attrs:{type:"pie",width:"500",options:e.chartOptions2,series:e.series2}})],1)]),a("td",[a("div",[a("apexcharts",{attrs:{type:"line",width:"700",height:"400",options:e.chartOptions3,series:e.series3}})],1)])])]),a("v-card-title",[a("v-container",{staticClass:"ml-0 mr-0 pt-0",attrs:{fluid:""}},[a("h3",{attrs:{row:""}},[e._v("Team Badge Details")]),a("v-layout",{attrs:{row:""}},[a("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1)],1)],1),a("v-data-table",{attrs:{items:e.BadgeData,headers:e.Headers,search:e.search}})],1)},Ie=[],Ve=(a("b680"),{name:"ColumnChart",components:{apexcharts:be.a},data:function(){return{search:"",Headers:[{text:"Employee Id",value:"employeeId"},{text:"Badge ID",value:"badgeId"},{text:"Badge Domain",value:"Domain"},{text:"Badge Sub-Domain",value:"SubDomain"},{text:"Badge Type",value:"Type"},{text:"Grade Obtained",value:"grade"},{text:"Number of External Courses taken",value:"externalCourse"},{text:"Facilitate Workshop",value:"breakoutSessions"},{text:"Retook the Badge",value:"retook"},{text:"Comments",value:"externalCourseComments"},{text:"Started On",value:"startTime",sortable:!1},{text:"Completed On",value:"endTime",sortable:!1}],BadgeData:[{date:"2020-08-23T23:42:15.61",employeeId:1,badgeId:101,Domain:"EY Technology",SubDomain:".Net Web API",Type:"Bronze",grade:90,retook:!1,startTime:"2019-12-20T00:00:00",endTime:"2020-03-20T00:00:00",breakoutSessions:2,externalCourse:1,externalCourseComments:"Took the course from Coursera and built a sample POC",badge:null},{date:"2020-08-23T23:44:32.347",employeeId:2,badgeId:121,Domain:"EY CyberSecurity",SubDomain:"Vulnerability testing",Type:"Bronze",grade:65,retook:!1,startTime:"2019-05-20T00:00:00",endTime:"2019-09-20T00:00:00",breakoutSessions:1,externalCourse:0,externalCourseComments:"No course taken",badge:null},{date:"2020-08-24T00:00:04.65",employeeId:1,badgeId:121,Domain:"EY CyberSecurity",SubDomain:"CyberSecurity",Type:"Gold",grade:68,retook:!1,startTime:"2020-02-20T00:00:00",endTime:"2020-04-20T00:00:00",breakoutSessions:0,externalCourse:0,externalCourseComments:null,badge:null}],myStyle:{backgroundColor:"#000000"},series3:[{data:[53,51,43,43,43,29,17,10,5,3]}],series2:[12,7,10,9,10,5],series1:[{name:"Commited",type:"column",data:[65,63,64,65,64,65,63,62,61]},{name:"Completed",type:"column",data:[63,64,63,67,65,65,63,64,64]}],chartOptions3:{chart:{type:"line",height:350},stroke:{curve:"stepline",colors:"#000000"},dataLabels:{enabled:!1},title:{text:"Q3.3 Burndown Chart - Story Points",align:"left"},markers:{colors:"#FFFF00",hover:{sizeOffset:4}}},chartOptions2:{chart:{width:"25%",type:"pie"},labels:["Neha (Dev1)","Sindhu (Dev2)","Developer 3","Developer 4","Developer 5","Ankitha - QA"],theme:{monochrome:{color:"#000000",enabled:!0}},plotOptions:{pie:{dataLabels:{offset:-5}}},title:{text:"Story points covered in Q3.3"},dataLabels:{formatter:function(e,t){var a=t.w.globals.labels[t.seriesIndex];return[a,e.toFixed(1)+"%"]}},legend:{show:!1}},chartOptions1:{annotations:{points:[{x:"Q2.6",y:60,image:{path:"http://localhost:8080/badge.ico",height:"30",width:"30",tooltip:{y:{formatter:function(){return"Badge By developr 4"}}}}},{x:"Q3.2",y:60,image:{path:"http://localhost:8080/badge.ico",height:"30",width:"30",tooltip:{y:{formatter:function(){return"Badge By developr 4"}}}}},{x:"Q2.7",y:60,image:{path:"http://localhost:8080/badge.ico",height:"30",width:"30",tooltip:{y:{formatter:function(){return"Badge By developr 4"}}}}}]},title:{text:"Velocity Chart"},chart:{type:"line",height:350},legend:{show:!0,markers:{fillColors:["#323232","#FFFF4d"]}},plotOptions:{bar:{horizontal:!1,columnWidth:"55%",endingShape:"rounded"}},dataLabels:{enabled:!1},stroke:{show:!0,width:2,colors:["transparent"]},xaxis:{categories:["Q2.3","Q2.4","Q2.5","Q2.6","Q2.7","Q2.8","Q3.1","Q3.2","Q3.3"]},yaxis:{title:{text:"Story Points"}},fill:{opacity:1,colors:["#323232","#FFFF4d"]},tooltip:{y:{formatter:function(e){return e+" Story  points"}}}}}}}),Pe=Ve,Fe=(a("bbf9"),a("99d9")),Le=a("a523"),Qe=a("8fea"),Ne=a("a722"),Re=a("8654"),Me=Object(m["a"])(Pe,$e,Ie,!1,null,null,null),Ae=Me.exports;v()(Me,{VCardTitle:Fe["b"],VContainer:Le["a"],VDataTable:Qe["a"],VLayout:Ne["a"],VTextField:Re["a"]});var Ue=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"cards"}},[a("v-container",{attrs:{fluid:""}},[a("v-row",{attrs:{dense:""}},e._l(e.$store.state.employeesList,(function(t){return a("v-col",{key:t.employeeId,staticClass:"d-flex",attrs:{cols:e.flex}},[a("v-card",{staticClass:"d-flex flex-column",attrs:{height:"400",width:"375"}},[a("v-img",{staticClass:"black--text align-end",attrs:{src:e.src,width:"400"}}),a("v-card-actions",{staticClass:"justify-center"},[a("v-list-item-title",{staticClass:"headline mb-1"},[e._v(e._s(t.employeeName))]),a("v-btn",{attrs:{icon:"",to:{name:"Employee",params:{id:t.employeeId}}}},[a("v-icon",[e._v("mdi-chart-areaspline")])],1),a("v-btn",{attrs:{icon:"",to:"/TeamCards"}},[a("v-icon",[e._v("mdi-graph")])],1),a("v-btn",{attrs:{icon:""}},[a("v-icon",[e._v("mdi-share-variant")])],1)],1)],1)],1)})),1)],1)],1)},Ye=[],ze=a("5530"),Ke=a("2f62"),Ge={computed:Object(ze["a"])({},Object(Ke["b"])({employeesList:"employeesList"})),data:function(){return{src:"http://localhost:8080/man.png",flex:4}}},He=Ge,Je=a("b0af"),We=a("62ad"),qe=a("0fd9"),Xe=Object(m["a"])(He,Ue,Ye,!1,null,null,null),Ze=Xe.exports;v()(Xe,{VBtn:k["a"],VCard:Je["a"],VCardActions:Fe["a"],VCol:We["a"],VContainer:Le["a"],VIcon:O["a"],VImg:g["a"],VListItemTitle:j["b"],VRow:qe["a"]});var et=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"cards"}},[a("v-container",{attrs:{fluid:""}},[a("v-row",{attrs:{dense:""}},e._l(e.$store.state.TeamsList,(function(t){return a("v-col",{key:t.teamId,staticClass:"d-flex",attrs:{cols:e.flex}},[a("v-card",{staticClass:"d-flex flex-column"},[a("v-img",{staticClass:"black--text align-end",attrs:{src:e.src,height:"300",width:"400"}}),a("v-list-item-title",{staticClass:"headline mb-1"},[e._v(e._s(t.teamName))]),a("v-card-actions",{staticClass:"justify-center"},[a("v-btn",{attrs:{icon:"",to:"/Employee/1"}},[a("v-icon",[e._v("mdi-home")])],1),a("v-btn",{attrs:{icon:"",to:"/Manager"}},[a("v-icon",[e._v("mdi-chart-areaspline")])],1)],1)],1)],1)})),1)],1)],1)},tt=[],at={computed:Object(ze["a"])({},Object(Ke["b"])({employeesList:"TeamsList"})),data:function(){return{src:"http://localhost:8080/team.png",flex:4}}},nt=at,ot=Object(m["a"])(nt,et,tt,!1,null,null,null),rt=ot.exports;v()(ot,{VBtn:k["a"],VCard:Je["a"],VCardActions:Fe["a"],VCol:We["a"],VContainer:Le["a"],VIcon:O["a"],VImg:g["a"],VListItemTitle:j["b"],VRow:qe["a"]}),n["a"].use(de["a"]);var st=[{path:"/Employee/:id",name:"Employee",component:Be},{path:"/apex",name:"Vue Chart",component:Ce},{path:"/bar",name:"Bar Chart",component:Oe},{path:"/Manager",name:"Colulmn Chart",component:Ae},{path:"/EmployeeCards",name:"EmployeeCards",component:Ze},{path:"/TeamCards",name:"TeamCards",component:rt}],it=new de["a"]({routes:st,mode:"history",base:"/EYBadge-Metrics-UI/"}),lt=it,ct=(a("4160"),a("159b"),function(){function e(){Object(ne["a"])(this,e)}return Object(oe["a"])(e,[{key:"getEmployees",value:function(){return ue.get(ie)}},{key:"getEmployeeById",value:function(e){return ue.get(ie+"/"+e)}}]),e}()),ut=new ct,dt=function(){function e(){Object(ne["a"])(this,e)}return Object(oe["a"])(e,[{key:"getTeamDetails",value:function(){return ue.get(le)}},{key:"getTeamDetailsByid",value:function(e){return ue.get(le+"/"+e)}}]),e}(),pt=new dt;n["a"].use(Ke["a"]);var ht=new Ke["a"].Store({state:{message:"",color:"",display:!1,count:0,mini:!0,chartData:{testCoverage:[],codeSmellPercent:[],codeQualityPercent:[],throughput:[],kloc:[],dates:[]},NewEmployeeObj:{developerKpiDto:[],employeeId:"",employeeName:"",outOfBoxDto:[],teamName:""},EmployeeObj:{developerKpiDto:[],employeeId:"",employeeName:"",outOfBoxDto:[],teamName:""},employeesList:[],TeamsList:[]},actions:{getEmp:function(e){ut.getEmployees().then((function(t){e.commit("setEmployees",t.data)})).catch((function(e){console.log(e)}))},destoryChartData:function(e){e.commit("resetChartData")},getEmpById:function(e,t){ut.getEmployeeById(t).then((function(t){e.commit("setSelectedEmployeeData",t.data)})).catch((function(e){console.log(e)}))},getTeamDetails:function(e){pt.getTeamDetails().then((function(t){e.commit("setTeamDetails",t.data)})).catch((function(e){console.log(e)}))},navExtendCollapse:function(e){e.commit("navExtendCollapse")}},mutations:{setEmployees:function(e,t){e.employeesList=t},resetChartData:function(e){e.chartData={testCoverage:[],codeSmellPercent:[],codeQualityPercent:[],throughput:[],kloc:[],dates:[]}},setSelectedEmployeeData:function(e,t){e.NewEmployeeObj=t,t.developerKpiDto.forEach((function(t){e.chartData.testCoverage.push(t.testCoverage),e.chartData.codeSmellPercent.push(t.codeSmellPercent),e.chartData.codeQualityPercent.push(t.codeQualityPercent),e.chartData.throughput.push(t.throughput),e.chartData.kloc.push(t.kloc),e.chartData.dates.push(t.date.substring(0,10))})),console.log("Store new empoyee object",e.NewEmployeeObj)},setTeamDetails:function(e,t){e.TeamsList=t,console.log("Store Team list",e.TeamsList)},setEmpChartData:function(e,t){t.developerKpiDto.forEach((function(t){e.chartData.testCoverage.push(t.testCoverage),e.chartData.codeSmellPercent.push(t.codeSmellPercent),e.chartData.codeQualityPercent.push(t.codeQualityPercent),e.chartData.throughput.push(t.throughput),e.chartData.kloc.push(t.kloc),e.chartData.dates.push(t.date.substring(0,10))}))},increment:function(e){e.count++},navExtendCollapse:function(e){e.mini=!e.mini},setSnackbar:function(e,t){e.message=t.message,e.color=t.color,e.display=!0},resetSnackbar:function(e){e.display=!1}}}),mt=a("b7d6");n["a"].use(mt["a"]),n["a"].config.productionTip=!1,ue.getConfig().then((function(){new n["a"]({render:function(e){return e(ee)},router:lt,vuetify:ae,store:ht}).$mount("#app")}))},"5c0b":function(e,t,a){"use strict";var n=a("9c0c"),o=a.n(n);o.a},"9c0c":function(e,t,a){},a4e1:function(e,t,a){"use strict";var n=a("4d12"),o=a.n(n);o.a},af35:function(e,t,a){},bbf9:function(e,t,a){"use strict";var n=a("ddb0c"),o=a.n(n);o.a},ddb0c:function(e,t,a){}});
//# sourceMappingURL=app.2107c226.js.map