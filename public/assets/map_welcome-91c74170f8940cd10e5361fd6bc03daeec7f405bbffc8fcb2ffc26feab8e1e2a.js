require.config({paths:{echarts:"assets/vendor/echarts",zrender:"assets/vendor/zrender"}}),require(["echarts","echarts/config","echarts/chart/map"],function(t){var e=t.init(document.getElementById("map3")),o=require("echarts/config"),i=require("zrender/tool/event"),n=0,a=["china","\u5e7f\u4e1c","\u9752\u6d77","\u56db\u5ddd","\u6d77\u5357","\u9655\u897f","\u7518\u8083","\u4e91\u5357","\u6e56\u5357","\u6e56\u5317","\u9ed1\u9f99\u6c5f","\u8d35\u5dde","\u5c71\u4e1c","\u6c5f\u897f","\u6cb3\u5357","\u6cb3\u5317","\u5c71\u897f","\u5b89\u5fbd","\u798f\u5efa","\u6d59\u6c5f","\u6c5f\u82cf","\u5409\u6797","\u8fbd\u5b81","\u53f0\u6e7e","\u65b0\u7586","\u5e7f\u897f","\u5b81\u590f","\u5185\u8499\u53e4","\u897f\u85cf","\u5317\u4eac","\u5929\u6d25","\u4e0a\u6d77","\u91cd\u5e86","\u9999\u6e2f","\u6fb3\u95e8"];document.getElementById("map3").onmousewheel=function(t){var o=t||window.event;n+=i.getDelta(o)>0?-1:1,0>n&&(n=a.length-1);var r=a[n%a.length];"china"==r?option.tooltip.formatter="\u6eda\u8f6e\u5207\u6362\u6216\u70b9\u51fb\u8fdb\u5165\u8be5\u7701<br/>{b}= {c}":option.tooltip.formatter="\u6eda\u8f6e\u5207\u6362\u7701\u4efd\u6216\u70b9\u51fb\u8fd4\u56de\u5168\u56fd<br/>{b}= {c}",option.series[0].mapType=r,option.title.subtext=r+" \uff08\u6eda\u8f6e\u6216\u70b9\u51fb\u5207\u6362\uff09",e.setOption(option,!0),i.stop(o)},e.on(o.EVENT.MAP_SELECTED,function(t){var o=a.length,i=a[n%o];if("china"==i){var r=t.selected;for(var p in r)if(r[p]){for(i=p;o--;)a[o]==i&&(n=o);break}option.tooltip.formatter="\u6eda\u8f6e\u5207\u6362\u7701\u4efd\u6216\u70b9\u51fb\u8fd4\u56de\u5168\u56fd<br/>{b}: {c}"}else n=0,i="china",option.tooltip.formatter="\u6eda\u8f6e\u5207\u6362\u6216\u70b9\u51fb\u8fdb\u5165\u8be5\u7701<br/>{b}: {c}";option.series[0].mapType=i,option.title.subtext=i+" \uff08\u6eda\u8f6e\u6216\u70b9\u51fb\u5207\u6362\uff09",e.setOption(option,!0)}),option={title:{text:"\u5168\u56fd34\u4e2a\u7701\u5e02\u81ea\u6cbb\u533a",subtext:"china \uff08\u6eda\u8f6e\u6216\u70b9\u51fb\u5207\u6362\uff09"},tooltip:{trigger:"item",formatter:"\u6eda\u8f6e\u5207\u6362\u6216\u70b9\u51fb\u8fdb\u5165\u8be5\u7701<br/>{b}"},legend:{orient:"vertical",x:"right",data:["AQI\u9884\u62a5"]},dataRange:{min:0,max:500,color:["orangered","yellow","lightskyblue"],text:["\u9ad8","\u4f4e"],calculable:!0},series:[{name:"AQI\u9884\u62a5",type:"map",mapType:"china",selectedMode:"single",itemStyle:{normal:{label:{show:!0}},emphasis:{label:{show:!0}}},data:[]}]},$.ajax({url:"map.json"}).done(function(t){$.each(t,function(t,e){option.series[0].data.push({name:t,value:e})}),option.timeline.data.push("2002"),option.timeline.data.push("2003"),option.timeline.data.push("2004"),option.timeline.data.push("2005"),e.setOption(option)}),e.setOption(option)});