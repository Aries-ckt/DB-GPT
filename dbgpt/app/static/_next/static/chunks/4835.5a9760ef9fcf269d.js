(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4835],{21332:function(e,t,n){"use strict";n.d(t,{_:function(){return D},a:function(){return M}});var r=n(85893),o=n(51009),a=n(71230),i=n(15746),l=n(42075),d=n(83062),c=n(71577),u=n(32983),s=n(38041),f=n(36353),g=n(64352),m=n(72905),h=n(96486);let p=e=>{let{charts:t,scopeOfCharts:n,ruleConfig:r}=e,o={};if(null==t||t.forEach(e=>{if(e.chartKnowledge.toSpec){let t=e.chartKnowledge.toSpec;e.chartKnowledge.toSpec=(e,n)=>({...t(e,n),dataProps:n})}else e.chartKnowledge.toSpec=(e,t)=>({dataProps:t});o[e.chartType]=e.chartKnowledge}),(null==n?void 0:n.exclude)&&n.exclude.forEach(e=>{Object.keys(o).includes(e)&&delete o[e]}),null==n?void 0:n.include){let e=n.include;Object.keys(o).forEach(t=>{e.includes(t)||delete o[t]})}let a={...n,custom:o},i={...r},l=new g.w({ckbCfg:a,ruleCfg:i});return l},k=e=>{var t;let{data:n,dataMetaMap:r,myChartAdvisor:o}=e,a=r?Object.keys(r).map(e=>({name:e,...r[e]})):null,i=new m.Z(n).info(),l=(0,h.size)(i)>2?null==i?void 0:i.filter(e=>"string"!==e.recommendation&&"date"!==e.recommendation||e.distinct&&e.distinct>1):i,d=null==o?void 0:o.adviseWithLog({data:n,dataProps:a,fields:null==l?void 0:l.map(e=>e.name)});return null!==(t=null==d?void 0:d.advices)&&void 0!==t?t:[]};var v=n(67294);function b(e,t){return t.every(t=>e.includes(t))}function x(e,t){let n=t.find(t=>t.name===e);return(null==n?void 0:n.recommendation)==="date"?t=>new Date(t[e]):e}function y(e){return e.find(e=>{var t;return e.levelOfMeasurements&&(t=e.levelOfMeasurements,["Time","Ordinal"].some(e=>t.includes(e)))})}function _(e){return e.find(e=>e.levelOfMeasurements&&b(e.levelOfMeasurements,["Nominal"]))}let j=e=>{let{data:t,xField:n}=e,r=(0,h.uniq)(t.map(e=>e[n]));return r.length<=1},w=(e,t,n)=>{let{field4Split:r,field4X:o}=n;if((null==r?void 0:r.name)&&(null==o?void 0:o.name)){let n=e[r.name],a=t.filter(e=>r.name&&e[r.name]===n);return j({data:a,xField:o.name})?5:void 0}return(null==o?void 0:o.name)&&j({data:t,xField:o.name})?5:void 0},C=e=>{let{data:t,chartType:n,xField:r}=e,o=(0,h.cloneDeep)(t);try{n.includes("line")&&(null==r?void 0:r.name)&&"date"===r.recommendation&&o.sort((e,t)=>new Date(e[r.name]).getTime()-new Date(t[r.name]).getTime())}catch(e){console.error(e)}return o},N=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"-";return e.map(e=>{let n={};return Object.keys(e).forEach(r=>{n[r]=e[r]===t?null:e[r]}),n})},S="multi_line_chart",Z="multi_measure_line_chart",P=[{chartType:"multi_line_chart",chartKnowledge:{id:S,name:"multi_line_chart",alias:["multi_line_chart"],family:["LineCharts"],def:"multi_line_chart uses lines with segments to show changes in data in a ordinal dimension",purpose:["Comparison","Trend"],coord:["Cartesian2D"],category:["Statistic"],shape:["Lines"],dataPres:[{minQty:1,maxQty:1,fieldConditions:["Time","Ordinal"]},{minQty:1,maxQty:"*",fieldConditions:["Interval"]},{minQty:0,maxQty:1,fieldConditions:["Nominal"]}],channel:["Color","Direction","Position"],recRate:"Recommended",toSpec:(e,t)=>{let n=y(t),r=_(t),o=null!=n?n:r,a=t.filter(e=>e.levelOfMeasurements&&b(e.levelOfMeasurements,["Interval"])),i=t.find(e=>e.name!==(null==o?void 0:o.name)&&e.levelOfMeasurements&&b(e.levelOfMeasurements,["Nominal"]));if(!o||!a)return null;let l={type:"view",autoFit:!0,data:C({data:e,chartType:S,xField:o}),children:[]};return a.forEach(n=>{let r={type:"line",encode:{x:x(o.name,t),y:n.name,size:t=>w(t,e,{field4Split:i,field4X:o})},legend:{size:!1}};i&&(r.encode.color=i.name),l.children.push(r)}),l}},chineseName:"折线图"},{chartType:"multi_measure_column_chart",chartKnowledge:{id:"multi_measure_column_chart",name:"multi_measure_column_chart",alias:["multi_measure_column_chart"],family:["ColumnCharts"],def:"multi_measure_column_chart uses lines with segments to show changes in data in a ordinal dimension",purpose:["Comparison","Distribution"],coord:["Cartesian2D"],category:["Statistic"],shape:["Lines"],dataPres:[{minQty:1,maxQty:"*",fieldConditions:["Interval"]},{minQty:1,maxQty:1,fieldConditions:["Nominal"]}],channel:["Color","Direction","Position"],recRate:"Recommended",toSpec:(e,t)=>{try{let n=null==t?void 0:t.filter(e=>b(e.levelOfMeasurements,["Interval"])),r=_(t),o=y(t),a=null!=r?r:o;if(!a||!n)return null;let i={type:"view",data:e,children:[]};return null==n||n.forEach(e=>{let t={type:"interval",encode:{x:a.name,y:e.name,color:()=>e.name,series:()=>e.name}};i.children.push(t)}),i}catch(e){return console.log(e),null}}},chineseName:"折线图"},{chartType:"multi_measure_line_chart",chartKnowledge:{id:Z,name:"multi_measure_line_chart",alias:["multi_measure_line_chart"],family:["LineCharts"],def:"multi_measure_line_chart uses lines with segments to show changes in data in a ordinal dimension",purpose:["Comparison","Distribution"],coord:["Cartesian2D"],category:["Statistic"],shape:["Lines"],dataPres:[{minQty:1,maxQty:"*",fieldConditions:["Interval"]},{minQty:1,maxQty:1,fieldConditions:["Nominal"]}],channel:["Color","Direction","Position"],recRate:"Recommended",toSpec:(e,t)=>{try{var n;let r=null==t?void 0:t.filter(e=>b(e.levelOfMeasurements,["Interval"])),o=null!==(n=_(t))&&void 0!==n?n:y(t);if(!o||!r)return null;let a={type:"view",data:C({data:e,chartType:Z,xField:o}),children:[]};return null==r||r.forEach(n=>{let r={type:"line",encode:{x:x(o.name,t),y:n.name,color:()=>n.name,series:()=>n.name,size:t=>w(t,e,{field4X:o})},legend:{size:!1}};a.children.push(r)}),a}catch(e){return console.log(e),null}}},chineseName:"折线图"}];var E=n(41468);let O=e=>{if(!e)return;let t=e.getContainer(),n=t.getElementsByTagName("canvas")[0];return n};var T=n(23430);let M=e=>"response_line_chart"===e?["multi_line_chart","multi_measure_line_chart"]:"response_bar_chart"===e?["multi_measure_column_chart"]:"response_pie_chart"===e?["pie_chart"]:"response_scatter_chart"===e?["scatter_plot"]:"response_area_chart"===e?["area_chart"]:"response_heatmap_chart"===e?["heatmap"]:[],{Option:I}=o.default,D=e=>{let{chartType:t,scopeOfCharts:n,ruleConfig:g,data:m}=e,b=N(m),{mode:x}=(0,v.useContext)(E.p),[y,_]=(0,v.useState)(),[j,w]=(0,v.useState)([]),[S,Z]=(0,v.useState)(),M=(0,v.useRef)();(0,v.useEffect)(()=>{_(p({charts:P,scopeOfCharts:{exclude:["area_chart","stacked_area_chart","percent_stacked_area_chart"]},ruleConfig:g}))},[g,n]);let D=e=>{if(!y)return[];let n=function(e){let{advices:t}=e;return t}({advices:e}),r=(0,h.uniq)((0,h.compact)((0,h.concat)(t,e.map(e=>e.type)))),o=r.map(e=>{let t=n.find(t=>t.type===e);if(t)return t;let r=y.dataAnalyzer.execute({data:b});if("data"in r){var o;let t=y.specGenerator.execute({data:r.data,dataProps:r.dataProps,chartTypeRecommendations:[{chartType:e,score:1}]});if("advices"in t)return null===(o=t.advices)||void 0===o?void 0:o[0]}}).filter(e=>null==e?void 0:e.spec);return o};(0,v.useEffect)(()=>{if(b&&y){var e;let t=k({data:b,myChartAdvisor:y}),n=D(t);w(n),Z(null===(e=n[0])||void 0===e?void 0:e.type)}},[JSON.stringify(b),y,t]);let L=(0,v.useMemo)(()=>{if((null==j?void 0:j.length)>0){var e,t,n;let o=null!=S?S:j[0].type,a=null!==(t=null===(e=null==j?void 0:j.find(e=>e.type===o))||void 0===e?void 0:e.spec)&&void 0!==t?t:void 0;if(a){if(a.data&&["line_chart","step_line_chart"].includes(o)){let e=null==y?void 0:y.dataAnalyzer.execute({data:b});e&&"dataProps"in e&&(a.data=C({data:a.data,xField:null===(n=e.dataProps)||void 0===n?void 0:n.find(e=>"date"===e.recommendation),chartType:o}))}return(0,r.jsx)(s.k,{options:{...a,theme:x,autoFit:!0,height:300},ref:M},o)}}},[j,S]);return S?(0,r.jsxs)("div",{children:[(0,r.jsxs)(a.Z,{justify:"space-between",className:"mb-2",children:[(0,r.jsx)(i.Z,{children:(0,r.jsxs)(l.Z,{children:[(0,r.jsx)("span",{children:f.Z.t("Advices")}),(0,r.jsx)(o.default,{className:"w-52",value:S,placeholder:"Chart Switcher",onChange:e=>Z(e),size:"small",children:null==j?void 0:j.map(e=>{let t=f.Z.t(e.type);return(0,r.jsx)(I,{value:e.type,children:(0,r.jsx)(d.Z,{title:t,placement:"right",children:(0,r.jsx)("div",{children:t})})},e.type)})})]})}),(0,r.jsx)(i.Z,{children:(0,r.jsx)(d.Z,{title:f.Z.t("Download"),children:(0,r.jsx)(c.ZP,{onClick:()=>(function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Chart",n=document.createElement("a"),r="".concat(t,".png");setTimeout(()=>{let t=function(e){let t=O(e);if(t){let e=t.toDataURL("image/png");return e}}(e);if(t){n.addEventListener("click",()=>{n.download=r,n.href=t});let e=document.createEvent("MouseEvents");e.initEvent("click",!1,!1),n.dispatchEvent(e)}},16)})(M.current,f.Z.t(S)),icon:(0,r.jsx)(T.Z,{}),type:"text"})})})]}),(0,r.jsx)("div",{className:"auto-chart-content",children:L})]}):(0,r.jsx)(u.Z,{image:u.Z.PRESENTED_IMAGE_SIMPLE,description:"暂无合适的可视化视图"})}},39156:function(e,t,n){"use strict";n.d(t,{_z:function(){return h._},ZP:function(){return p},aG:function(){return h.a}});var r=n(85893),o=n(41118),a=n(30208),i=n(40911),l=n(41468),d=n(38041),c=n(67294);function u(e){let{chart:t}=e,{mode:n}=(0,c.useContext)(l.p);return(0,r.jsx)("div",{className:"flex-1 min-w-0 p-4 bg-white dark:bg-theme-dark-container rounded",children:(0,r.jsxs)("div",{className:"h-full",children:[(0,r.jsx)("div",{className:"mb-2",children:t.chart_name}),(0,r.jsx)("div",{className:"opacity-80 text-sm mb-2",children:t.chart_desc}),(0,r.jsx)("div",{className:"h-[300px]",children:(0,r.jsx)(d.k,{style:{height:"100%"},options:{autoFit:!0,theme:n,type:"interval",data:t.values,encode:{x:"name",y:"value",color:"type"},axis:{x:{labelAutoRotate:!1}}}})})]})})}function s(e){let{chart:t}=e,{mode:n}=(0,c.useContext)(l.p);return(0,r.jsx)("div",{className:"flex-1 min-w-0 p-4 bg-white dark:bg-theme-dark-container rounded",children:(0,r.jsxs)("div",{className:"h-full",children:[(0,r.jsx)("div",{className:"mb-2",children:t.chart_name}),(0,r.jsx)("div",{className:"opacity-80 text-sm mb-2",children:t.chart_desc}),(0,r.jsx)("div",{className:"h-[300px]",children:(0,r.jsx)(d.k,{style:{height:"100%"},options:{autoFit:!0,theme:n,type:"view",data:t.values,children:[{type:"line",encode:{x:"name",y:"value",color:"type",shape:"smooth"}},{type:"area",encode:{x:"name",y:"value",color:"type",shape:"smooth"},legend:!1,style:{fillOpacity:.15}}],axis:{x:{labelAutoRotate:!1}}}})})]})})}var f=n(61685),g=n(96486);function m(e){var t,n;let{chart:o}=e,a=(0,g.groupBy)(o.values,"type");return(0,r.jsx)("div",{className:"flex-1 min-w-0 p-4 bg-white dark:bg-theme-dark-container rounded",children:(0,r.jsxs)("div",{className:"h-full",children:[(0,r.jsx)("div",{className:"mb-2",children:o.chart_name}),(0,r.jsx)("div",{className:"opacity-80 text-sm mb-2",children:o.chart_desc}),(0,r.jsx)("div",{className:"flex-1",children:(0,r.jsxs)(f.Z,{"aria-label":"basic table",stripe:"odd",hoverRow:!0,borderAxis:"bothBetween",children:[(0,r.jsx)("thead",{children:(0,r.jsx)("tr",{children:Object.keys(a).map(e=>(0,r.jsx)("th",{children:e},e))})}),(0,r.jsx)("tbody",{children:null===(t=Object.values(a))||void 0===t?void 0:null===(n=t[0])||void 0===n?void 0:n.map((e,t)=>{var n;return(0,r.jsx)("tr",{children:null===(n=Object.keys(a))||void 0===n?void 0:n.map(e=>{var n;return(0,r.jsx)("td",{children:(null==a?void 0:null===(n=a[e])||void 0===n?void 0:n[t].value)||""},e)})},t)})})]})})]})})}var h=n(21332),p=function(e){let{chartsData:t}=e,n=(0,c.useMemo)(()=>{if(t){let e=[],n=null==t?void 0:t.filter(e=>"IndicatorValue"===e.chart_type);n.length>0&&e.push({charts:n,type:"IndicatorValue"});let r=null==t?void 0:t.filter(e=>"IndicatorValue"!==e.chart_type),o=r.length,a=0;return[[0],[1],[2],[1,2],[1,3],[2,1,2],[2,1,3],[3,1,3],[3,2,3]][o].forEach(t=>{if(t>0){let n=r.slice(a,a+t);a+=t,e.push({charts:n})}}),e}},[t]);return(0,r.jsx)("div",{className:"flex flex-col gap-3",children:null==n?void 0:n.map((e,t)=>(0,r.jsx)("div",{className:"".concat((null==e?void 0:e.type)!=="IndicatorValue"?"flex gap-3":""),children:e.charts.map(e=>"IndicatorValue"===e.chart_type||"IndicatorValue"===e.type?(0,r.jsx)("div",{className:"flex flex-row gap-3",children:e.values.map(e=>(0,r.jsx)("div",{className:"flex-1",children:(0,r.jsx)(o.Z,{sx:{background:"transparent"},children:(0,r.jsxs)(a.Z,{className:"justify-around",children:[(0,r.jsx)(i.ZP,{gutterBottom:!0,component:"div",children:e.name}),(0,r.jsx)(i.ZP,{children:e.value})]})})},e.name))},e.chart_uid):"LineChart"===e.chart_type||"LineChart"===e.type?(0,r.jsx)(s,{chart:e},e.chart_uid):"BarChart"===e.chart_type||"BarChart"===e.type?(0,r.jsx)(u,{chart:e},e.chart_uid):"Table"===e.chart_type||"Table"===e.type?(0,r.jsx)(m,{chart:e},e.chart_uid):void 0)},"chart_row_".concat(t)))})}},67772:function(e,t,n){"use strict";n.d(t,{Z:function(){return T}});var r=n(85893),o=n(67294),a=n(2453),i=n(83062),l=n(84553),d=n(71577),c=n(49591),u=n(88484),s=n(29158),f=n(89182),g=n(41468),m=function(e){var t;let{convUid:n,chatMode:m,onComplete:h,...p}=e,[k,v]=(0,o.useState)(!1),[b,x]=a.ZP.useMessage(),[y,_]=(0,o.useState)([]),[j,w]=(0,o.useState)(),{model:C}=(0,o.useContext)(g.p),N=async e=>{var t;if(!e){a.ZP.error("Please select the *.(csv|xlsx|xls) file");return}if(!/\.(csv|xlsx|xls)$/.test(null!==(t=e.file.name)&&void 0!==t?t:"")){a.ZP.error("File type must be csv, xlsx or xls");return}_([e.file])},S=async()=>{v(!0);try{let e=new FormData;e.append("doc_file",y[0]),b.open({content:"Uploading ".concat(y[0].name),type:"loading",duration:0});let[t]=await (0,f.Vx)((0,f.qn)({convUid:n,chatMode:m,data:e,model:C,config:{timeout:36e5,onUploadProgress:e=>{let t=Math.ceil(e.loaded/(e.total||0)*100);w(t)}}}));if(t)return;a.ZP.success("success"),null==h||h()}catch(e){a.ZP.error((null==e?void 0:e.message)||"Upload Error")}finally{v(!1),b.destroy()}};return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"flex items-start gap-2",children:[x,(0,r.jsx)(i.Z,{placement:"bottom",title:"File cannot be changed after upload",children:(0,r.jsx)(l.default,{disabled:k,className:"mr-1",beforeUpload:()=>!1,fileList:y,name:"file",accept:".csv,.xlsx,.xls",multiple:!1,onChange:N,showUploadList:{showDownloadIcon:!1,showPreviewIcon:!1,showRemoveIcon:!1},itemRender:()=>(0,r.jsx)(r.Fragment,{}),...p,children:(0,r.jsx)(d.ZP,{className:"flex justify-center items-center",type:"primary",disabled:k,icon:(0,r.jsx)(c.Z,{}),children:"Select File"})})}),(0,r.jsx)(d.ZP,{type:"primary",loading:k,className:"flex justify-center items-center",disabled:!y.length,icon:(0,r.jsx)(u.Z,{}),onClick:S,children:k?100===j?"Analysis":"Uploading":"Upload"}),!!y.length&&(0,r.jsxs)("div",{className:"mt-2 text-gray-500 text-sm flex items-center",children:[(0,r.jsx)(s.Z,{className:"mr-2"}),(0,r.jsx)("span",{children:null===(t=y[0])||void 0===t?void 0:t.name})]})]})})},h=function(e){let{onComplete:t}=e,{currentDialogue:n,scene:a,chatId:i}=(0,o.useContext)(g.p);return"chat_excel"!==a?null:(0,r.jsx)("div",{className:"max-w-md h-full relative",children:n?(0,r.jsxs)("div",{className:"flex h-8 overflow-hidden rounded",children:[(0,r.jsx)("div",{className:"flex items-center justify-center px-2 bg-gray-600 text-lg",children:(0,r.jsx)(s.Z,{className:"text-white"})}),(0,r.jsx)("div",{className:"flex items-center justify-center px-3 bg-gray-100 text-xs rounded-tr rounded-br dark:text-gray-800 truncate",children:n.select_param})]}):(0,r.jsx)(m,{convUid:i,chatMode:a,onComplete:t})})};n(23293);var p=n(78045),k=n(16165),v=n(96991),b=n(82353);function x(){let{isContract:e,setIsContract:t,scene:n}=(0,o.useContext)(g.p),a=n&&["chat_with_db_execute","chat_dashboard"].includes(n);return a?(0,r.jsxs)(p.ZP.Group,{value:e,defaultValue:!0,buttonStyle:"solid",onChange:()=>{t(!e)},children:[(0,r.jsxs)(p.ZP.Button,{value:!1,children:[(0,r.jsx)(k.Z,{component:b.ig,className:"mr-1"}),"Preview"]}),(0,r.jsxs)(p.ZP.Button,{value:!0,children:[(0,r.jsx)(v.Z,{className:"mr-1"}),"Editor"]})]}):null}var y=n(81799),_=n(62418),j=n(2093),w=n(51009),C=n(25675),N=n.n(C),S=function(e){let{src:t,label:n,width:o,height:a,className:i}=e;return(0,r.jsx)(N(),{className:"w-11 h-11 rounded-full mr-4 border border-gray-200 object-contain bg-white ".concat(i),width:o||44,height:a||44,src:t,alt:n||"db-icon"})},Z=function(){let{scene:e,dbParam:t,setDbParam:n}=(0,o.useContext)(g.p),[a,i]=(0,o.useState)([]);(0,j.Z)(async()=>{let[,t]=await (0,f.Vx)((0,f.vD)(e));i(null!=t?t:[])},[e]);let l=(0,o.useMemo)(()=>{var e;return null===(e=a.map)||void 0===e?void 0:e.call(a,e=>({name:e.param,..._.S$[e.type]}))},[a]);return((0,o.useEffect)(()=>{(null==l?void 0:l.length)&&!t&&n(l[0].name)},[l,n,t]),null==l?void 0:l.length)?(0,r.jsx)(w.default,{value:t,className:"w-36",onChange:e=>{n(e)},children:l.map(e=>(0,r.jsxs)(w.default.Option,{children:[(0,r.jsx)(S,{width:24,height:24,src:e.icon,label:e.label,className:"w-[1.5em] h-[1.5em] mr-1 inline-block mt-[-4px]"}),e.name]},e.name))}):null},P=n(56155),E=n(67421),O=function(){let{t:e}=(0,E.$G)(),{agent:t,setAgent:n}=(0,o.useContext)(g.p),{data:a=[]}=(0,P.Z)(async()=>{let[,e]=await (0,f.Vx)((0,f.H4)());return null!=e?e:[]});return(0,r.jsx)(w.default,{className:"w-60",value:t,placeholder:e("Select_Plugins"),options:a.map(e=>({label:e.app_name,value:e.app_code})),allowClear:!0,onChange:e=>{null==n||n(e)}})},T=function(e){let{refreshHistory:t,modelChange:n}=e,{scene:a,refreshDialogList:i}=(0,o.useContext)(g.p);return(0,r.jsxs)("div",{className:"w-full py-2 px-4 md:px-4 flex flex-wrap items-center justify-center gap-1 md:gap-4",children:[(0,r.jsx)(y.Z,{onChange:n}),(0,r.jsx)(Z,{}),"chat_excel"===a&&(0,r.jsx)(h,{onComplete:()=>{null==i||i(),null==t||t()}}),"chat_agent"===a&&(0,r.jsx)(O,{}),(0,r.jsx)(x,{})]})}},81799:function(e,t,n){"use strict";n.d(t,{A:function(){return s}});var r=n(85893),o=n(41468),a=n(51009),i=n(19284),l=n(25675),d=n.n(l),c=n(67294),u=n(67421);function s(e,t){var n;let{width:o,height:a}=t||{};return e?(0,r.jsx)(d(),{className:"rounded-full border border-gray-200 object-contain bg-white inline-block",width:o||24,height:a||24,src:(null===(n=i.H[e])||void 0===n?void 0:n.icon)||"/models/huggingface.svg",alt:"llm"}):null}t.Z=function(e){let{onChange:t}=e,{t:n}=(0,u.$G)(),{modelList:l,model:d}=(0,c.useContext)(o.p);return!l||l.length<=0?null:(0,r.jsx)(a.default,{value:d,placeholder:n("choose_model"),className:"w-52",onChange:e=>{null==t||t(e)},children:l.map(e=>{var t;return(0,r.jsx)(a.default.Option,{children:(0,r.jsxs)("div",{className:"flex items-center",children:[s(e),(0,r.jsx)("span",{className:"ml-2",children:(null===(t=i.H[e])||void 0===t?void 0:t.label)||e})]})},e)})})}},74434:function(e,t,n){"use strict";let r;n.d(t,{Z:function(){return m}});var o=n(85893),a=n(9869),i=n(63764),l=n(93967),d=n.n(l),c=n(67294),u=n(62418),s=n(3930),f=n(41468);async function g(){window.obMonaco={getWorkerUrl:e=>{switch(e){case"mysql":return location.origin+"/_next/static/ob-workers/mysql.js";case"obmysql":return location.origin+"/_next/static/ob-workers/obmysql.js";case"oboracle":return location.origin+"/_next/static/ob-workers/oracle.js"}return""}};let e=await n.e(2057).then(n.bind(n,12057)),t=e.default;return r||(r=new t).setup(["mysql"]),r}function m(e){let{className:t,value:n,language:r="mysql",onChange:a,thoughts:l,session:m}=e,h=(0,c.useMemo)(()=>"mysql"!==r?n:l&&l.length>0?(0,u._m)("-- ".concat(l," \n").concat(n)):(0,u._m)(n),[n,l]),p=(0,s.Z)(m),k=(0,c.useContext)(f.p);async function v(e){var t,n;let r=await g();r.setModelOptions((null===(t=e.getModel())||void 0===t?void 0:t.id)||"",function(e,t){let{modelId:n,delimiter:r}=e;return{delimiter:r,async getTableList(e){var n;return(null==t?void 0:null===(n=t())||void 0===n?void 0:n.getTableList(e))||[]},async getTableColumns(e,n){var r;return(null==t?void 0:null===(r=t())||void 0===r?void 0:r.getTableColumns(e))||[]},async getSchemaList(){var e;return(null==t?void 0:null===(e=t())||void 0===e?void 0:e.getSchemaList())||[]}}}({modelId:(null===(n=e.getModel())||void 0===n?void 0:n.id)||"",delimiter:";"},()=>p.current||null))}return(0,o.jsx)(i.ZP,{className:d()(t),onMount:v,value:h,defaultLanguage:r,onChange:a,theme:(null==k?void 0:k.mode)!=="dark"?"github":"githubDark",options:{minimap:{enabled:!1},wordWrap:"on"}})}i._m.config({monaco:a}),a.editor.defineTheme("github",{base:"vs",inherit:!0,rules:[{background:"ffffff",token:""},{foreground:"6a737d",token:"comment"},{foreground:"6a737d",token:"punctuation.definition.comment"},{foreground:"6a737d",token:"string.comment"},{foreground:"005cc5",token:"constant"},{foreground:"005cc5",token:"entity.name.constant"},{foreground:"005cc5",token:"variable.other.constant"},{foreground:"005cc5",token:"variable.language"},{foreground:"6f42c1",token:"entity"},{foreground:"6f42c1",token:"entity.name"},{foreground:"24292e",token:"variable.parameter.function"},{foreground:"22863a",token:"entity.name.tag"},{foreground:"d73a49",token:"keyword"},{foreground:"d73a49",token:"storage"},{foreground:"d73a49",token:"storage.type"},{foreground:"24292e",token:"storage.modifier.package"},{foreground:"24292e",token:"storage.modifier.import"},{foreground:"24292e",token:"storage.type.java"},{foreground:"032f62",token:"string"},{foreground:"032f62",token:"punctuation.definition.string"},{foreground:"032f62",token:"string punctuation.section.embedded source"},{foreground:"005cc5",token:"support"},{foreground:"005cc5",token:"meta.property-name"},{foreground:"e36209",token:"variable"},{foreground:"24292e",token:"variable.other"},{foreground:"b31d28",fontStyle:"bold italic underline",token:"invalid.broken"},{foreground:"b31d28",fontStyle:"bold italic underline",token:"invalid.deprecated"},{foreground:"fafbfc",background:"b31d28",fontStyle:"italic underline",token:"invalid.illegal"},{foreground:"fafbfc",background:"d73a49",fontStyle:"italic underline",token:"carriage-return"},{foreground:"b31d28",fontStyle:"bold italic underline",token:"invalid.unimplemented"},{foreground:"b31d28",token:"message.error"},{foreground:"24292e",token:"string source"},{foreground:"005cc5",token:"string variable"},{foreground:"032f62",token:"source.regexp"},{foreground:"032f62",token:"string.regexp"},{foreground:"032f62",token:"string.regexp.character-class"},{foreground:"032f62",token:"string.regexp constant.character.escape"},{foreground:"032f62",token:"string.regexp source.ruby.embedded"},{foreground:"032f62",token:"string.regexp string.regexp.arbitrary-repitition"},{foreground:"22863a",fontStyle:"bold",token:"string.regexp constant.character.escape"},{foreground:"005cc5",token:"support.constant"},{foreground:"005cc5",token:"support.variable"},{foreground:"005cc5",token:"meta.module-reference"},{foreground:"735c0f",token:"markup.list"},{foreground:"005cc5",fontStyle:"bold",token:"markup.heading"},{foreground:"005cc5",fontStyle:"bold",token:"markup.heading entity.name"},{foreground:"22863a",token:"markup.quote"},{foreground:"24292e",fontStyle:"italic",token:"markup.italic"},{foreground:"24292e",fontStyle:"bold",token:"markup.bold"},{foreground:"005cc5",token:"markup.raw"},{foreground:"b31d28",background:"ffeef0",token:"markup.deleted"},{foreground:"b31d28",background:"ffeef0",token:"meta.diff.header.from-file"},{foreground:"b31d28",background:"ffeef0",token:"punctuation.definition.deleted"},{foreground:"22863a",background:"f0fff4",token:"markup.inserted"},{foreground:"22863a",background:"f0fff4",token:"meta.diff.header.to-file"},{foreground:"22863a",background:"f0fff4",token:"punctuation.definition.inserted"},{foreground:"e36209",background:"ffebda",token:"markup.changed"},{foreground:"e36209",background:"ffebda",token:"punctuation.definition.changed"},{foreground:"f6f8fa",background:"005cc5",token:"markup.ignored"},{foreground:"f6f8fa",background:"005cc5",token:"markup.untracked"},{foreground:"6f42c1",fontStyle:"bold",token:"meta.diff.range"},{foreground:"005cc5",token:"meta.diff.header"},{foreground:"005cc5",fontStyle:"bold",token:"meta.separator"},{foreground:"005cc5",token:"meta.output"},{foreground:"586069",token:"brackethighlighter.tag"},{foreground:"586069",token:"brackethighlighter.curly"},{foreground:"586069",token:"brackethighlighter.round"},{foreground:"586069",token:"brackethighlighter.square"},{foreground:"586069",token:"brackethighlighter.angle"},{foreground:"586069",token:"brackethighlighter.quote"},{foreground:"b31d28",token:"brackethighlighter.unmatched"},{foreground:"b31d28",token:"sublimelinter.mark.error"},{foreground:"e36209",token:"sublimelinter.mark.warning"},{foreground:"959da5",token:"sublimelinter.gutter-mark"},{foreground:"032f62",fontStyle:"underline",token:"constant.other.reference.link"},{foreground:"032f62",fontStyle:"underline",token:"string.other.link"}],colors:{"editor.foreground":"#24292e","editor.background":"#ffffff","editor.selectionBackground":"#c8c8fa","editor.inactiveSelectionBackground":"#fafbfc","editor.lineHighlightBackground":"#fafbfc","editorCursor.foreground":"#24292e","editorWhitespace.foreground":"#959da5","editorIndentGuide.background":"#959da5","editorIndentGuide.activeBackground":"#24292e","editor.selectionHighlightBorder":"#fafbfc"}}),a.editor.defineTheme("githubDark",{base:"vs-dark",inherit:!0,rules:[{background:"24292e",token:""},{foreground:"959da5",token:"comment"},{foreground:"959da5",token:"punctuation.definition.comment"},{foreground:"959da5",token:"string.comment"},{foreground:"c8e1ff",token:"constant"},{foreground:"c8e1ff",token:"entity.name.constant"},{foreground:"c8e1ff",token:"variable.other.constant"},{foreground:"c8e1ff",token:"variable.language"},{foreground:"b392f0",token:"entity"},{foreground:"b392f0",token:"entity.name"},{foreground:"f6f8fa",token:"variable.parameter.function"},{foreground:"7bcc72",token:"entity.name.tag"},{foreground:"ea4a5a",token:"keyword"},{foreground:"ea4a5a",token:"storage"},{foreground:"ea4a5a",token:"storage.type"},{foreground:"f6f8fa",token:"storage.modifier.package"},{foreground:"f6f8fa",token:"storage.modifier.import"},{foreground:"f6f8fa",token:"storage.type.java"},{foreground:"79b8ff",token:"string"},{foreground:"79b8ff",token:"punctuation.definition.string"},{foreground:"79b8ff",token:"string punctuation.section.embedded source"},{foreground:"c8e1ff",token:"support"},{foreground:"c8e1ff",token:"meta.property-name"},{foreground:"fb8532",token:"variable"},{foreground:"f6f8fa",token:"variable.other"},{foreground:"d73a49",fontStyle:"bold italic underline",token:"invalid.broken"},{foreground:"d73a49",fontStyle:"bold italic underline",token:"invalid.deprecated"},{foreground:"fafbfc",background:"d73a49",fontStyle:"italic underline",token:"invalid.illegal"},{foreground:"fafbfc",background:"d73a49",fontStyle:"italic underline",token:"carriage-return"},{foreground:"d73a49",fontStyle:"bold italic underline",token:"invalid.unimplemented"},{foreground:"d73a49",token:"message.error"},{foreground:"f6f8fa",token:"string source"},{foreground:"c8e1ff",token:"string variable"},{foreground:"79b8ff",token:"source.regexp"},{foreground:"79b8ff",token:"string.regexp"},{foreground:"79b8ff",token:"string.regexp.character-class"},{foreground:"79b8ff",token:"string.regexp constant.character.escape"},{foreground:"79b8ff",token:"string.regexp source.ruby.embedded"},{foreground:"79b8ff",token:"string.regexp string.regexp.arbitrary-repitition"},{foreground:"7bcc72",fontStyle:"bold",token:"string.regexp constant.character.escape"},{foreground:"c8e1ff",token:"support.constant"},{foreground:"c8e1ff",token:"support.variable"},{foreground:"c8e1ff",token:"meta.module-reference"},{foreground:"fb8532",token:"markup.list"},{foreground:"0366d6",fontStyle:"bold",token:"markup.heading"},{foreground:"0366d6",fontStyle:"bold",token:"markup.heading entity.name"},{foreground:"c8e1ff",token:"markup.quote"},{foreground:"f6f8fa",fontStyle:"italic",token:"markup.italic"},{foreground:"f6f8fa",fontStyle:"bold",token:"markup.bold"},{foreground:"c8e1ff",token:"markup.raw"},{foreground:"b31d28",background:"ffeef0",token:"markup.deleted"},{foreground:"b31d28",background:"ffeef0",token:"meta.diff.header.from-file"},{foreground:"b31d28",background:"ffeef0",token:"punctuation.definition.deleted"},{foreground:"176f2c",background:"f0fff4",token:"markup.inserted"},{foreground:"176f2c",background:"f0fff4",token:"meta.diff.header.to-file"},{foreground:"176f2c",background:"f0fff4",token:"punctuation.definition.inserted"},{foreground:"b08800",background:"fffdef",token:"markup.changed"},{foreground:"b08800",background:"fffdef",token:"punctuation.definition.changed"},{foreground:"2f363d",background:"959da5",token:"markup.ignored"},{foreground:"2f363d",background:"959da5",token:"markup.untracked"},{foreground:"b392f0",fontStyle:"bold",token:"meta.diff.range"},{foreground:"c8e1ff",token:"meta.diff.header"},{foreground:"0366d6",fontStyle:"bold",token:"meta.separator"},{foreground:"0366d6",token:"meta.output"},{foreground:"ffeef0",token:"brackethighlighter.tag"},{foreground:"ffeef0",token:"brackethighlighter.curly"},{foreground:"ffeef0",token:"brackethighlighter.round"},{foreground:"ffeef0",token:"brackethighlighter.square"},{foreground:"ffeef0",token:"brackethighlighter.angle"},{foreground:"ffeef0",token:"brackethighlighter.quote"},{foreground:"d73a49",token:"brackethighlighter.unmatched"},{foreground:"d73a49",token:"sublimelinter.mark.error"},{foreground:"fb8532",token:"sublimelinter.mark.warning"},{foreground:"6a737d",token:"sublimelinter.gutter-mark"},{foreground:"79b8ff",fontStyle:"underline",token:"constant.other.reference.link"},{foreground:"79b8ff",fontStyle:"underline",token:"string.other.link"}],colors:{"editor.foreground":"#f6f8fa","editor.background":"#24292e","editor.selectionBackground":"#4c2889","editor.inactiveSelectionBackground":"#444d56","editor.lineHighlightBackground":"#444d56","editorCursor.foreground":"#ffffff","editorWhitespace.foreground":"#6a737d","editorIndentGuide.background":"#6a737d","editorIndentGuide.activeBackground":"#f6f8fa","editor.selectionHighlightBorder":"#444d56"}})},91085:function(e,t,n){"use strict";var r=n(85893),o=n(32983),a=n(71577),i=n(93967),l=n.n(i),d=n(67421);t.Z=function(e){let{className:t,error:n,description:i,refresh:c}=e,{t:u}=(0,d.$G)();return(0,r.jsx)(o.Z,{image:"/empty.png",imageStyle:{width:320,height:196,margin:"0 auto",maxWidth:"100%",maxHeight:"100%"},className:l()("flex items-center justify-center flex-col h-full w-full",t),description:n?(0,r.jsx)(a.ZP,{type:"primary",onClick:c,children:u("try_again")}):null!=i?i:u("no_data")})}},30119:function(e,t,n){"use strict";n.d(t,{Tk:function(){return d},PR:function(){return c}});var r=n(2453),o=n(6154),a=n(83454);let i=o.default.create({baseURL:a.env.API_BASE_URL});i.defaults.timeout=1e4,i.interceptors.response.use(e=>e.data,e=>Promise.reject(e)),n(96486);let l={"content-type":"application/json"},d=(e,t)=>{if(t){let n=Object.keys(t).filter(e=>void 0!==t[e]&&""!==t[e]).map(e=>"".concat(e,"=").concat(t[e])).join("&");n&&(e+="?".concat(n))}return i.get("/api"+e,{headers:l}).then(e=>e).catch(e=>{r.ZP.error(e),Promise.reject(e)})},c=(e,t)=>i.post(e,t,{headers:l}).then(e=>e).catch(e=>{r.ZP.error(e),Promise.reject(e)})},23293:function(){}}]);