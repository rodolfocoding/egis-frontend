(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["display-data2"],{"566b":function(e,t,a){"use strict";var n=a("cfe9"),o=a.n(n);o.a},b86a:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h2",{staticClass:"content-block"},[e._v(e._s(e.tituloMenu))]),a("dx-data-grid",{staticClass:"dx-card wide-card",attrs:{"data-source":e.dataSourceConfig,columns:e.columns,summary:e.total,"key-expr":"cd_controle","show-borders":!0,"focused-row-enabled":!0,"column-auto-width":!0,"column-hiding-enabled":!1,"remote-operations":!1,"word-wrap-enabled":!1,"allow-column-reordering":!0,"allow-column-resizing":!0,"row-alternation-enabled":!0,"repaint-changes-only":!0,autoNavigateToFocusedRow:!0,"focused-row-index":0,cacheEnable:!1},on:{exporting:e.onExporting,initialized:e.saveGridInstance,"focused-row-changed":e.onFocusedRowChanged}},[a("DxGroupPanel",{attrs:{visible:!0,"empty-panel-text":"Colunas para agrupar..."}}),a("DxGrouping",{attrs:{"auto-expand-all":!0}}),a("DxExport",{attrs:{enabled:!0}}),a("DxPaging",{attrs:{enable:!0,"page-size":10}}),a("DxStateStoring",{attrs:{enabled:!1,type:"localStorage","storage-key":"storage"}}),a("DxSelection",{attrs:{mode:"single"}}),a("DxPager",{attrs:{"show-page-size-selector":!0,"allowed-page-sizes":e.pageSizes,"show-info":!0}}),a("DxFilterRow",{attrs:{visible:!1}}),a("DxHeaderFilter",{attrs:{visible:!0,"allow-search":!0}}),a("DxSearchPanel",{attrs:{visible:e.temPanel,width:100,placeholder:"Procurar..."}}),a("DxFilterPanel",{attrs:{visible:!0}}),a("DxColumnFixing",{attrs:{enabled:!0}}),a("DxColumnChooser",{attrs:{enabled:!0,mode:"select"}})],1),!0===e.temD?a("div",{staticClass:"task-info"},[a("div",{staticClass:"info"},[a("div",{attrs:{id:"taskSubject"}},[e._v(e._s(e.taskSubject))]),a("p",{attrs:{id:"taskDetails"},domProps:{innerHTML:e._s(e.taskDetails)}})])]):e._e()],1)},o=[],r=(a("96cf"),a("1da1")),i=a("d30a"),s=a("b375"),l=a("e8ae"),c=a.n(l),u=a("44a0"),d=a.n(u),p=a("9851"),x=a("5d4a"),g=a("d859"),m=a.n(g),D=a("a719"),h=a.n(D),w=a("c0d7"),f=a("a150"),b=0,S=0,v=0,_=0,P="",C="DataGrid.xlsx",k=[],y={data:function(){return{tituloMenu:"",columns:[],pageSizes:[10,20,50,100],autoNavigateToFocusedRow:!0,isReady:!1,dataSourceConfig:[],total:{},dataGridInstance:null,showIndicator:!0,showPane:!0,taskSubject:"Descritivo",taskDetails:"",temD:!1,temPanel:!1}},created:function(){m()({defaultCurrency:"BRL"}),Object(x["loadMessages"])(p),Object(x["locale"])(navigator.language)},mounted:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.carregaDados();case 1:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),components:{DxDataGrid:i["DxDataGrid"],DxFilterRow:i["DxFilterRow"],DxPager:i["DxPager"],DxPaging:i["DxPaging"],DxExport:i["DxExport"],DxGroupPanel:i["DxGroupPanel"],DxGrouping:i["DxGrouping"],DxColumnChooser:i["DxColumnChooser"],DxColumnFixing:i["DxColumnFixing"],DxHeaderFilter:i["DxHeaderFilter"],DxFilterPanel:i["DxFilterPanel"],DxSelection:i["DxSelection"],DxStateStoring:i["DxStateStoring"],DxSearchPanel:i["DxSearchPanel"]},methods:{onFocusedRowChanged:function(e){var t=e.row&&e.row.data;this.taskDetails=t&&t.ds_informativo,""==!t.ds_informativo&&(this.temD=!0)},carregaDados:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.temPanel=!0,b=localStorage.cd_empresa,v=localStorage.cd_cliente,S=localStorage.cd_menu,_=localStorage.cd_api,P=localStorage.nm_identificacao_api,h()("Aguarde... estamos montando a consulta para você, aguarde !"),e.next=9,f["a"].montarMenu(b,S,_);case 9:return k=e.sent,t=k.nm_api_parametro,localStorage.cd_tipo_consulta=k.cd_tipo_consulta,this.tituloMenu=k.nm_menu_titulo,e.next=15,w["a"].montarProcedimento(b,v,P,t);case 15:this.dataSourceConfig=e.sent,C=this.tituloMenu+".xlsx",this.columns=JSON.parse(JSON.parse(JSON.stringify(k.coluna))),this.total=JSON.parse(JSON.parse(JSON.stringify(k.coluna_total)));case 19:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),customizeColumns:function(e){e[0].width=120},saveGridInstance:function(e){this.dataGridInstance=e.component},onExporting:function(e){var t=new c.a.Workbook,a=t.addWorksheet("Employees");Object(s["exportDataGrid"])({component:e.component,worksheet:a,autoFilterEnabled:!0}).then((function(){t.xlsx.writeBuffer().then((function(e){d()(new Blob([e],{type:"application/octet-stream"}),C)}))})),e.cancel=!0},destroyed:function(){this.$destroy()}}},F=y,G=(a("566b"),a("2877")),R=Object(G["a"])(F,n,o,!1,null,null,null);t["default"]=R.exports},cfe9:function(e,t,a){}}]);
//# sourceMappingURL=display-data2.5883a376.js.map