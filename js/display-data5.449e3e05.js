(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["display-data5"],{1338:function(e,t,a){"use strict";var n=a("3d9f"),o=a.n(n);o.a},1402:function(e,t,a){},"1e16":function(e,t,a){},"3d9f":function(e,t,a){},"5dd6":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h2",{staticClass:"content-block"},[e._v(e._s(e.tituloMenu))]),a("DxButton",{attrs:{id:"exportButton",icon:"exportpdf",text:"PDF",visible:!1},on:{click:function(t){return e.exportGrid()}}}),a("dx-data-grid",{staticClass:"dx-card wide-card",attrs:{"data-source":e.dataSourceConfig,columns:e.columns,summary:e.total,"key-expr":e.sChave,"show-borders":!0,"focused-row-enabled":!0,"column-auto-width":!0,"column-hiding-enabled":!0,"remote-operations":!1,"word-wrap-enabled":!1,"allow-column-reordering":!0,"allow-column-resizing":!0,"row-alternation-enabled":!0,"repaint-changes-only":!0,autoNavigateToFocusedRow:!0,"focused-row-index":0,cacheEnable:!1},on:{exporting:e.onExporting,initialized:e.saveGridInstance,"focused-row-changed":e.onFocusedRowChanged,"editing-start":e.eventoRegistro,"init-new-row":function(t){return e.eventoRegistro("Novo Registro")},"row-inserting":function(t){return e.eventoRegistro("Inserindo Registro")},"row-inserted":e.inclusao,"row-updated":e.alteracao,"row-removing":function(t){return e.eventoRegistro("Excluindo Registro")},"row-removed":e.exclusao,saving:function(t){return e.eventoRegistro("Salvando...")},saved:function(t){return e.eventoRegistro("Gravado !")},"edit-canceling":function(t){return e.eventoRegistro("Cancelando a Edição !")},"edit-canceled":function(t){return e.eventoRegistro("Edição Cancelada !")},"option-changed":e.onOptionChanged}},[a("DxGroupPanel",{attrs:{visible:!0,"empty-panel-text":"Colunas para agrupar..."}}),a("DxGrouping",{attrs:{"auto-expand-all":!0}}),a("DxExport",{attrs:{enabled:!0}}),a("DxPaging",{attrs:{enable:!0,"page-size":10}}),a("DxStateStoring",{attrs:{enabled:!0,type:"localStorage","storage-key":e.menu}}),a("DxSelection",{attrs:{mode:"single"}}),a("DxPager",{attrs:{"show-page-size-selector":!0,"allowed-page-sizes":e.pageSizes,"show-info":!0}}),a("DxFilterRow",{attrs:{visible:!1}}),a("DxHeaderFilter",{attrs:{visible:!0,"allow-search":!0}}),a("DxSearchPanel",{attrs:{visible:e.temPanel,width:100,placeholder:"Procurar..."}}),a("DxFilterPanel",{attrs:{visible:!0}}),a("DxColumnFixing",{attrs:{enabled:!0}}),a("DxColumnChooser",{attrs:{enabled:!0,mode:"select"}}),a("DxEditing",{attrs:{"refresh-mode":e.refreshMode,"allow-adding":!0,"allow-updating":!0,"allow-deleting":!0,mode:"popup"}},[a("DxPopup",{attrs:{"show-title":!0,width:700,height:625,title:e.menu}},[a("DxPosition",{attrs:{my:"top",at:"top",of:"window"}})],1),a("DxForm",[a("DxItem",{attrs:{"col-count":2,"col-span":2,"item-type":"group"}})],1)],1)],1),!0===e.temD?a("div",{staticClass:"task-info"},[a("div",{staticClass:"info"},[a("div",{attrs:{id:"taskSubject"}},[e._v(e._s(e.taskSubject))]),a("p",{attrs:{id:"taskDetails"},domProps:{innerHTML:e._s(e.taskDetails)}})])]):e._e()],1)},o=[],r=(a("96cf"),a("1da1")),i=a("d30a"),s=a("66dc"),c=a("6191"),u=a.n(c),l=a("e8ae"),d=a.n(l),p=a("44a0"),g=a.n(p),x=a("9851"),m=a("5d4a"),h=a("d859"),f=a.n(h),D=a("a719"),w=a.n(D),v=a("c0d7"),b=a("a150"),S=a("6124"),_=a("6b1b"),R=a("29c4"),C=(a("6d93"),a("8baf")),P=(a("0da4"),a("b375")),y=0,k=0,F=0,O=0,G="",j="",E="DataGrid.xlsx",M="pdf",N=[],z={data:function(){return{tituloMenu:"",menu:"",columns:[],pageSizes:[10,20,50,100],autoNavigateToFocusedRow:!0,isReady:!1,dataSourceConfig:[],total:{},dataGridInstance:null,showIndicator:!0,showPane:!0,taskSubject:"Descritivo",taskDetails:"",temD:!1,temPanel:!1,cd_controle:null,refreshMode:"reshape",sChave:"",tituloColuna:[]}},created:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:f()({defaultCurrency:"BRL"}),Object(m["loadMessages"])(x),Object(m["locale"])(navigator.language),this.carregaDados();case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),mounted:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),components:{DxDataGrid:i["DxDataGrid"],DxFilterRow:i["DxFilterRow"],DxPager:i["DxPager"],DxPaging:i["DxPaging"],DxExport:i["DxExport"],DxGroupPanel:i["DxGroupPanel"],DxGrouping:i["DxGrouping"],DxColumnChooser:i["DxColumnChooser"],DxColumnFixing:i["DxColumnFixing"],DxHeaderFilter:i["DxHeaderFilter"],DxFilterPanel:i["DxFilterPanel"],DxSelection:i["DxSelection"],DxStateStoring:i["DxStateStoring"],DxSearchPanel:i["DxSearchPanel"],DxEditing:i["DxEditing"],DxPopup:i["DxPopup"],DxPosition:i["DxPosition"],DxForm:s["DxForm"],DxButton:u.a,DxItem:i["DxItem"]},methods:{exportGrid:function(){var e=new C["jsPDF"];e.autoTable({html:"#my-table"});var t=["Desenvolvimento - Aguardar Liberação nova Versão !"];e.autoTable({head:[[t]],body:[["< Previsão: Fevereiro/2021 >"]]}),e.save(M)},onFocusedRowChanged:function(e){var t=e.row&&e.row.data;this.taskDetails=t&&t.ds_informativo,""==!t.ds_informativo&&(this.temD=!0)},eventoRegistro:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),inclusao:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.data.cd_usuario=localStorage.cd_usuario,t.data.cd_modulo=localStorage.cd_modulo,t.data.cd_menu=localStorage.cd_menu,e.next=5,S["a"].incluirRegistro(j,t.data);case 5:N=e.sent,this.carregaDados();case 7:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),alteracao:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.data.cd_usuario=localStorage.cd_usuario,e.next=3,R["a"].alterarRegistro(j,t.data);case 3:N=e.sent;case 4:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),exclusao:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.cd_controle=t.data[this.sChave],0==this.cd_controle){e.next=5;break}return e.next=4,_["a"].excluirRegistro(j,this.cd_controle);case 4:N=e.sent;case 5:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),carregaDados:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.temPanel=!0,y=localStorage.cd_empresa,F=localStorage.cd_cliente,k=localStorage.cd_menu,O=localStorage.cd_api,G=localStorage.nm_identificacao_api,w()("Aguarde... estamos montando a consulta para você, aguarde !"),e.next=9,b["a"].montarMenu(y,k,O);case 9:return N=e.sent,t=N.nm_api_parametro,localStorage.cd_tipo_consulta=N.cd_tipo_consulta,j=N.nm_sql_procedimento,this.tituloColuna=N.tituloColuna,this.tituloMenu=N.nm_menu_titulo,this.sChave=N.chave,this.menu=N.nm_menu,e.next=19,v["a"].montarProcedimento(y,F,G,t);case 19:this.dataSourceConfig=e.sent,E=this.tituloMenu+".xlsx",M=this.tituloMenu+".pdf",this.columns=JSON.parse(JSON.parse(JSON.stringify(N.coluna))),this.total=JSON.parse(JSON.parse(JSON.stringify(N.coluna_total)));case 24:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),customizeColumns:function(e){e[0].width=120},saveGridInstance:function(e){this.dataGridInstance=e.component},onOptionChanged:function(e){alert(e.data[this.sChave])},onExporting:function(e){var t=new d.a.Workbook,a=t.addWorksheet("Employees");Object(P["exportDataGrid"])({component:e.component,worksheet:a,autoFilterEnabled:!0}).then((function(){t.xlsx.writeBuffer().then((function(e){g()(new Blob([e],{type:"application/octet-stream"}),E)}))})),e.cancel=!0},destroyed:function(){this.$destroy()}}},I=z,J=(a("f84e"),a("2877")),B=Object(J["a"])(I,n,o,!1,null,null,null);t["default"]=B.exports},"5e2c":function(e,t,a){"use strict";var n=a("1402"),o=a.n(n);o.a},c41e:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h2",{staticClass:"content-block"},[e._v(e._s(e.tituloMenu))]),a("dx-data-grid",{staticClass:"dx-card wide-card",attrs:{"data-source":e.dataSourceConfig,columns:e.columns,summary:e.total,"key-expr":"cd_controle","show-borders":!0,"focused-row-enabled":!0,"column-auto-width":!0,"column-hiding-enabled":!1,"remote-operations":!1,"word-wrap-enabled":!1,"allow-column-reordering":!0,"allow-column-resizing":!0,"row-alternation-enabled":!0,"repaint-changes-only":!0,autoNavigateToFocusedRow:!0,"focused-row-index":0,cacheEnable:!1},on:{exporting:e.onExporting,initialized:e.saveGridInstance,"focused-row-changed":e.onFocusedRowChanged}},[a("DxGroupPanel",{attrs:{visible:!0,"empty-panel-text":"Colunas para agrupar..."}}),a("DxGrouping",{attrs:{"auto-expand-all":!0}}),a("DxExport",{attrs:{enabled:!0}}),a("DxPaging",{attrs:{enable:!0,"page-size":10}}),a("DxStateStoring",{attrs:{enabled:!1,type:"localStorage","storage-key":"storage"}}),a("DxSelection",{attrs:{mode:"single"}}),a("DxPager",{attrs:{"show-page-size-selector":!0,"allowed-page-sizes":e.pageSizes,"show-info":!0}}),a("DxFilterRow",{attrs:{visible:!1}}),a("DxHeaderFilter",{attrs:{visible:!0,"allow-search":!0}}),a("DxSearchPanel",{attrs:{visible:e.temPanel,width:100,placeholder:"Procurar..."}}),a("DxFilterPanel",{attrs:{visible:!0}}),a("DxColumnFixing",{attrs:{enabled:!0}}),a("DxColumnChooser",{attrs:{enabled:!0,mode:"select"}})],1),!0===e.temD?a("div",{staticClass:"task-info"},[a("div",{staticClass:"info"},[a("div",{attrs:{id:"taskSubject"}},[e._v(e._s(e.taskSubject))]),a("p",{attrs:{id:"taskDetails"},domProps:{innerHTML:e._s(e.taskDetails)}})])]):e._e()],1)},o=[],r=(a("96cf"),a("1da1")),i=a("d30a"),s=a("b375"),c=a("e8ae"),u=a.n(c),l=a("44a0"),d=a.n(l),p=a("9851"),g=a("5d4a"),x=a("d859"),m=a.n(x),h=a("a719"),f=a.n(h),D=a("c0d7"),w=a("a150"),v=0,b=0,S=0,_=0,R="",C="DataGrid.xlsx",P=[],y={data:function(){return{tituloMenu:"",columns:[],pageSizes:[10,20,50,100],autoNavigateToFocusedRow:!0,isReady:!1,dataSourceConfig:[],total:{},dataGridInstance:null,showIndicator:!0,showPane:!0,taskSubject:"Descritivo",taskDetails:"",temD:!1,temPanel:!1}},created:function(){m()({defaultCurrency:"BRL"}),Object(g["loadMessages"])(p),Object(g["locale"])(navigator.language)},mounted:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.carregaDados();case 1:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),components:{DxDataGrid:i["DxDataGrid"],DxFilterRow:i["DxFilterRow"],DxPager:i["DxPager"],DxPaging:i["DxPaging"],DxExport:i["DxExport"],DxGroupPanel:i["DxGroupPanel"],DxGrouping:i["DxGrouping"],DxColumnChooser:i["DxColumnChooser"],DxColumnFixing:i["DxColumnFixing"],DxHeaderFilter:i["DxHeaderFilter"],DxFilterPanel:i["DxFilterPanel"],DxSelection:i["DxSelection"],DxStateStoring:i["DxStateStoring"],DxSearchPanel:i["DxSearchPanel"]},methods:{onFocusedRowChanged:function(e){var t=e.row&&e.row.data;this.taskDetails=t&&t.ds_informativo,""==!t.ds_informativo&&(this.temD=!0)},carregaDados:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.temPanel=!0,v=localStorage.cd_empresa,S=localStorage.cd_cliente,b=localStorage.cd_menu,_=localStorage.cd_api,R=localStorage.nm_identificacao_api,f()("Aguarde... estamos montando a consulta para você, aguarde !"),e.next=9,w["a"].montarMenu(v,b,_);case 9:return P=e.sent,t=P.nm_api_parametro,localStorage.cd_tipo_consulta=P.cd_tipo_consulta,this.tituloMenu=P.nm_menu_titulo,e.next=15,D["a"].montarProcedimento(v,S,R,t);case 15:this.dataSourceConfig=e.sent,C=this.tituloMenu+".xlsx",this.columns=JSON.parse(JSON.parse(JSON.stringify(P.coluna))),this.total=JSON.parse(JSON.parse(JSON.stringify(P.coluna_total)));case 19:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),customizeColumns:function(e){e[0].width=120},saveGridInstance:function(e){this.dataGridInstance=e.component},onExporting:function(e){var t=new u.a.Workbook,a=t.addWorksheet("Employees");Object(s["exportDataGrid"])({component:e.component,worksheet:a,autoFilterEnabled:!0}).then((function(){t.xlsx.writeBuffer().then((function(e){d()(new Blob([e],{type:"application/octet-stream"}),C)}))})),e.cancel=!0},destroyed:function(){this.$destroy()}}},k=y,F=(a("5e2c"),a("2877")),O=Object(F["a"])(k,n,o,!1,null,null,null);t["default"]=O.exports},c635:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h2",{staticClass:"content-block"},[e._v(e._s(e.tituloMenu))]),a("DxButton",{attrs:{id:"exportButton",icon:"exportpdf",text:"PDF",visible:!1},on:{click:function(t){return e.exportGrid()}}}),a("dx-data-grid",{staticClass:"dx-card wide-card",attrs:{"data-source":e.dataSourceConfig,columns:e.columns,summary:e.total,"key-expr":e.sChave,"show-borders":!0,"focused-row-enabled":!0,"column-auto-width":!0,"column-hiding-enabled":!0,"remote-operations":!1,"word-wrap-enabled":!1,"allow-column-reordering":!0,"allow-column-resizing":!0,"row-alternation-enabled":!0,"repaint-changes-only":!0,autoNavigateToFocusedRow:!0,"focused-row-index":0,cacheEnable:!1},on:{exporting:e.onExporting,initialized:e.saveGridInstance,"focused-row-changed":e.onFocusedRowChanged,"editing-start":e.eventoRegistro,"init-new-row":function(t){return e.eventoRegistro("Novo Registro")},"row-inserting":function(t){return e.eventoRegistro("Inserindo Registro")},"row-inserted":e.inclusao,"row-updated":e.alteracao,"row-removing":function(t){return e.eventoRegistro("Excluindo Registro")},"row-removed":e.exclusao,saving:function(t){return e.eventoRegistro("Salvando...")},saved:function(t){return e.eventoRegistro("Gravado !")},"edit-canceling":function(t){return e.eventoRegistro("Cancelando a Edição !")},"edit-canceled":function(t){return e.eventoRegistro("Edição Cancelada !")},"option-changed":e.onOptionChanged}},[a("DxGroupPanel",{attrs:{visible:!0,"empty-panel-text":"Colunas para agrupar..."}}),a("DxGrouping",{attrs:{"auto-expand-all":!0}}),a("DxExport",{attrs:{enabled:!0}}),a("DxPaging",{attrs:{enable:!0,"page-size":10}}),a("DxStateStoring",{attrs:{enabled:!0,type:"localStorage","storage-key":e.menu}}),a("DxSelection",{attrs:{mode:"single"}}),a("DxPager",{attrs:{"show-page-size-selector":!0,"allowed-page-sizes":e.pageSizes,"show-info":!0}}),a("DxFilterRow",{attrs:{visible:!1}}),a("DxHeaderFilter",{attrs:{visible:!0,"allow-search":!0}}),a("DxSearchPanel",{attrs:{visible:e.temPanel,width:100,placeholder:"Procurar..."}}),a("DxFilterPanel",{attrs:{visible:!0}}),a("DxColumnFixing",{attrs:{enabled:!0}}),a("DxColumnChooser",{attrs:{enabled:!0,mode:"select"}}),a("DxEditing",{attrs:{"refresh-mode":e.refreshMode,"allow-adding":!0,"allow-updating":!0,"allow-deleting":!0,mode:"popup"}},[a("DxPopup",{attrs:{"show-title":!0,width:700,height:625,title:e.menu}},[a("DxPosition",{attrs:{my:"top",at:"top",of:"window"}})],1),a("DxForm",[a("DxItem",{attrs:{"col-count":2,"col-span":2,"item-type":"group"}})],1)],1)],1),!0===e.temD?a("div",{staticClass:"task-info"},[a("div",{staticClass:"info"},[a("div",{attrs:{id:"taskSubject"}},[e._v(e._s(e.taskSubject))]),a("p",{attrs:{id:"taskDetails"},domProps:{innerHTML:e._s(e.taskDetails)}})])]):e._e()],1)},o=[],r=(a("96cf"),a("1da1")),i=a("d30a"),s=a("66dc"),c=a("6191"),u=a.n(c),l=a("e8ae"),d=a.n(l),p=a("44a0"),g=a.n(p),x=a("9851"),m=a("5d4a"),h=a("d859"),f=a.n(h),D=a("a719"),w=a.n(D),v=a("c0d7"),b=a("a150"),S=a("6124"),_=a("6b1b"),R=a("29c4"),C=(a("6d93"),a("8baf")),P=(a("0da4"),a("b375")),y=0,k=0,F=0,O=0,G="",j="",E="DataGrid.xlsx",M="pdf",N=[],z={data:function(){return{tituloMenu:"",menu:"",columns:[],pageSizes:[10,20,50,100],autoNavigateToFocusedRow:!0,isReady:!1,dataSourceConfig:[],total:{},dataGridInstance:null,showIndicator:!0,showPane:!0,taskSubject:"Descritivo",taskDetails:"",temD:!1,temPanel:!1,cd_controle:null,refreshMode:"reshape",sChave:"",tituloColuna:[]}},created:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:f()({defaultCurrency:"BRL"}),Object(m["loadMessages"])(x),Object(m["locale"])(navigator.language),this.carregaDados();case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),mounted:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),components:{DxDataGrid:i["DxDataGrid"],DxFilterRow:i["DxFilterRow"],DxPager:i["DxPager"],DxPaging:i["DxPaging"],DxExport:i["DxExport"],DxGroupPanel:i["DxGroupPanel"],DxGrouping:i["DxGrouping"],DxColumnChooser:i["DxColumnChooser"],DxColumnFixing:i["DxColumnFixing"],DxHeaderFilter:i["DxHeaderFilter"],DxFilterPanel:i["DxFilterPanel"],DxSelection:i["DxSelection"],DxStateStoring:i["DxStateStoring"],DxSearchPanel:i["DxSearchPanel"],DxEditing:i["DxEditing"],DxPopup:i["DxPopup"],DxPosition:i["DxPosition"],DxForm:s["DxForm"],DxButton:u.a,DxItem:i["DxItem"]},methods:{exportGrid:function(){var e=new C["jsPDF"];e.autoTable({html:"#my-table"});var t=["Desenvolvimento - Aguardar Liberação nova Versão !"];e.autoTable({head:[[t]],body:[["< Previsão: Fevereiro/2021 >"]]}),e.save(M)},onFocusedRowChanged:function(e){var t=e.row&&e.row.data;this.taskDetails=t&&t.ds_informativo,""==!t.ds_informativo&&(this.temD=!0)},eventoRegistro:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),inclusao:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.data.cd_usuario=localStorage.cd_usuario,t.data.cd_modulo=localStorage.cd_modulo,t.data.cd_menu=localStorage.cd_menu,e.next=5,S["a"].incluirRegistro(j,t.data);case 5:N=e.sent,this.carregaDados();case 7:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),alteracao:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.data.cd_usuario=localStorage.cd_usuario,e.next=3,R["a"].alterarRegistro(j,t.data);case 3:N=e.sent;case 4:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),exclusao:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.cd_controle=t.data[this.sChave],0==this.cd_controle){e.next=5;break}return e.next=4,_["a"].excluirRegistro(j,this.cd_controle);case 4:N=e.sent;case 5:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),carregaDados:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.temPanel=!0,y=localStorage.cd_empresa,F=localStorage.cd_cliente,k=localStorage.cd_menu,O=localStorage.cd_api,G=localStorage.nm_identificacao_api,w()("Aguarde... estamos montando a consulta para você, aguarde !"),e.next=9,b["a"].montarMenu(y,k,O);case 9:return N=e.sent,t=N.nm_api_parametro,localStorage.cd_tipo_consulta=N.cd_tipo_consulta,j=N.nm_sql_procedimento,this.tituloColuna=N.tituloColuna,this.tituloMenu=N.nm_menu_titulo,this.sChave=N.chave,this.menu=N.nm_menu,e.next=19,v["a"].montarProcedimento(y,F,G,t);case 19:this.dataSourceConfig=e.sent,E=this.tituloMenu+".xlsx",M=this.tituloMenu+".pdf",this.columns=JSON.parse(JSON.parse(JSON.stringify(N.coluna))),this.total=JSON.parse(JSON.parse(JSON.stringify(N.coluna_total)));case 24:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),customizeColumns:function(e){e[0].width=120},saveGridInstance:function(e){this.dataGridInstance=e.component},onOptionChanged:function(e){alert(e.data[this.sChave])},onExporting:function(e){var t=new d.a.Workbook,a=t.addWorksheet("Employees");Object(P["exportDataGrid"])({component:e.component,worksheet:a,autoFilterEnabled:!0}).then((function(){t.xlsx.writeBuffer().then((function(e){g()(new Blob([e],{type:"application/octet-stream"}),E)}))})),e.cancel=!0},destroyed:function(){this.$destroy()}}},I=z,J=(a("1338"),a("2877")),B=Object(J["a"])(I,n,o,!1,null,null,null);t["default"]=B.exports},c67a:function(e,t,a){},ee1f:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h2",{staticClass:"content-block"},[e._v(e._s(e.tituloMenu))]),a("DxButton",{attrs:{id:"exportButton",icon:"exportpdf",text:"PDF",visible:!1},on:{click:function(t){return e.exportGrid()}}}),a("dx-data-grid",{staticClass:"dx-card wide-card",attrs:{"data-source":e.dataSourceConfig,columns:e.columns,summary:e.total,"key-expr":e.sChave,"show-borders":!0,"focused-row-enabled":!0,"column-auto-width":!0,"column-hiding-enabled":!0,"remote-operations":!1,"word-wrap-enabled":!1,"allow-column-reordering":!0,"allow-column-resizing":!0,"row-alternation-enabled":!0,"repaint-changes-only":!0,autoNavigateToFocusedRow:!0,"focused-row-index":0,cacheEnable:!1},on:{exporting:e.onExporting,initialized:e.saveGridInstance,"focused-row-changed":e.onFocusedRowChanged,"editing-start":e.eventoRegistro,"init-new-row":function(t){return e.eventoRegistro("Novo Registro")},"row-inserting":function(t){return e.eventoRegistro("Inserindo Registro")},"row-inserted":e.inclusao,"row-updated":e.alteracao,"row-removing":function(t){return e.eventoRegistro("Excluindo Registro")},"row-removed":e.exclusao,saving:function(t){return e.eventoRegistro("Salvando...")},saved:function(t){return e.eventoRegistro("Gravado !")},"edit-canceling":function(t){return e.eventoRegistro("Cancelando a Edição !")},"edit-canceled":function(t){return e.eventoRegistro("Edição Cancelada !")},"option-changed":e.onOptionChanged}},[a("DxGroupPanel",{attrs:{visible:!0,"empty-panel-text":"Colunas para agrupar..."}}),a("DxGrouping",{attrs:{"auto-expand-all":!0}}),a("DxExport",{attrs:{enabled:!0}}),a("DxPaging",{attrs:{enable:!0,"page-size":10}}),a("DxStateStoring",{attrs:{enabled:!0,type:"localStorage","storage-key":e.menu}}),a("DxSelection",{attrs:{mode:"single"}}),a("DxPager",{attrs:{"show-page-size-selector":!0,"allowed-page-sizes":e.pageSizes,"show-info":!0}}),a("DxFilterRow",{attrs:{visible:!1}}),a("DxHeaderFilter",{attrs:{visible:!0,"allow-search":!0}}),a("DxSearchPanel",{attrs:{visible:e.temPanel,width:100,placeholder:"Procurar..."}}),a("DxFilterPanel",{attrs:{visible:!0}}),a("DxColumnFixing",{attrs:{enabled:!0}}),a("DxColumnChooser",{attrs:{enabled:!0,mode:"select"}}),a("DxEditing",{attrs:{"refresh-mode":e.refreshMode,"allow-adding":!0,"allow-updating":!0,"allow-deleting":!0,mode:"popup"}},[a("DxPopup",{attrs:{"show-title":!0,width:700,height:625,title:e.menu}},[a("DxPosition",{attrs:{my:"top",at:"top",of:"window"}})],1),a("DxForm",[a("DxItem",{attrs:{"col-count":2,"col-span":2,"item-type":"group"}})],1)],1)],1),!0===e.temD?a("div",{staticClass:"task-info"},[a("div",{staticClass:"info"},[a("div",{attrs:{id:"taskSubject"}},[e._v(e._s(e.taskSubject))]),a("p",{attrs:{id:"taskDetails"},domProps:{innerHTML:e._s(e.taskDetails)}})])]):e._e()],1)},o=[],r=(a("96cf"),a("1da1")),i=a("d30a"),s=a("66dc"),c=a("6191"),u=a.n(c),l=a("e8ae"),d=a.n(l),p=a("44a0"),g=a.n(p),x=a("9851"),m=a("5d4a"),h=a("d859"),f=a.n(h),D=a("a719"),w=a.n(D),v=a("c0d7"),b=a("a150"),S=a("6124"),_=a("6b1b"),R=a("29c4"),C=(a("6d93"),a("8baf")),P=(a("0da4"),a("b375")),y=0,k=0,F=0,O=0,G="",j="",E="DataGrid.xlsx",M="pdf",N=[],z={data:function(){return{tituloMenu:"",menu:"",columns:[],pageSizes:[10,20,50,100],autoNavigateToFocusedRow:!0,isReady:!1,dataSourceConfig:[],total:{},dataGridInstance:null,showIndicator:!0,showPane:!0,taskSubject:"Descritivo",taskDetails:"",temD:!1,temPanel:!1,cd_controle:null,refreshMode:"reshape",sChave:"",tituloColuna:[]}},created:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:f()({defaultCurrency:"BRL"}),Object(m["loadMessages"])(x),Object(m["locale"])(navigator.language),this.carregaDados();case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),mounted:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),components:{DxDataGrid:i["DxDataGrid"],DxFilterRow:i["DxFilterRow"],DxPager:i["DxPager"],DxPaging:i["DxPaging"],DxExport:i["DxExport"],DxGroupPanel:i["DxGroupPanel"],DxGrouping:i["DxGrouping"],DxColumnChooser:i["DxColumnChooser"],DxColumnFixing:i["DxColumnFixing"],DxHeaderFilter:i["DxHeaderFilter"],DxFilterPanel:i["DxFilterPanel"],DxSelection:i["DxSelection"],DxStateStoring:i["DxStateStoring"],DxSearchPanel:i["DxSearchPanel"],DxEditing:i["DxEditing"],DxPopup:i["DxPopup"],DxPosition:i["DxPosition"],DxForm:s["DxForm"],DxButton:u.a,DxItem:i["DxItem"]},methods:{exportGrid:function(){var e=new C["jsPDF"];e.autoTable({html:"#my-table"});var t=["Desenvolvimento - Aguardar Liberação nova Versão !"];e.autoTable({head:[[t]],body:[["< Previsão: Fevereiro/2021 >"]]}),e.save(M)},onFocusedRowChanged:function(e){var t=e.row&&e.row.data;this.taskDetails=t&&t.ds_informativo,""==!t.ds_informativo&&(this.temD=!0)},eventoRegistro:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),inclusao:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.data.cd_usuario=localStorage.cd_usuario,t.data.cd_modulo=localStorage.cd_modulo,t.data.cd_menu=localStorage.cd_menu,e.next=5,S["a"].incluirRegistro(j,t.data);case 5:N=e.sent,this.carregaDados();case 7:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),alteracao:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.data.cd_usuario=localStorage.cd_usuario,e.next=3,R["a"].alterarRegistro(j,t.data);case 3:N=e.sent;case 4:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),exclusao:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.cd_controle=t.data[this.sChave],0==this.cd_controle){e.next=5;break}return e.next=4,_["a"].excluirRegistro(j,this.cd_controle);case 4:N=e.sent;case 5:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),carregaDados:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.temPanel=!0,y=localStorage.cd_empresa,F=localStorage.cd_cliente,k=localStorage.cd_menu,O=localStorage.cd_api,G=localStorage.nm_identificacao_api,w()("Aguarde... estamos montando a consulta para você, aguarde !"),e.next=9,b["a"].montarMenu(y,k,O);case 9:return N=e.sent,t=N.nm_api_parametro,localStorage.cd_tipo_consulta=N.cd_tipo_consulta,j=N.nm_sql_procedimento,this.tituloColuna=N.tituloColuna,this.tituloMenu=N.nm_menu_titulo,this.sChave=N.chave,this.menu=N.nm_menu,e.next=19,v["a"].montarProcedimento(y,F,G,t);case 19:this.dataSourceConfig=e.sent,E=this.tituloMenu+".xlsx",M=this.tituloMenu+".pdf",this.columns=JSON.parse(JSON.parse(JSON.stringify(N.coluna))),this.total=JSON.parse(JSON.parse(JSON.stringify(N.coluna_total)));case 24:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),customizeColumns:function(e){e[0].width=120},saveGridInstance:function(e){this.dataGridInstance=e.component},onOptionChanged:function(e){alert(e.data[this.sChave])},onExporting:function(e){var t=new d.a.Workbook,a=t.addWorksheet("Employees");Object(P["exportDataGrid"])({component:e.component,worksheet:a,autoFilterEnabled:!0}).then((function(){t.xlsx.writeBuffer().then((function(e){g()(new Blob([e],{type:"application/octet-stream"}),E)}))})),e.cancel=!0},destroyed:function(){this.$destroy()}}},I=z,J=(a("fc62"),a("2877")),B=Object(J["a"])(I,n,o,!1,null,null,null);t["default"]=B.exports},f84e:function(e,t,a){"use strict";var n=a("1e16"),o=a.n(n);o.a},fc62:function(e,t,a){"use strict";var n=a("c67a"),o=a.n(n);o.a}}]);
//# sourceMappingURL=display-data5.449e3e05.js.map