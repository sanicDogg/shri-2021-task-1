(this["webpackJsonptask-1"]=this["webpackJsonptask-1"]||[]).push([[0],{20:function(t,e,a){},21:function(t,e,a){},22:function(t,e,a){},24:function(t,e,a){},25:function(t,e,a){},26:function(t,e,a){},27:function(t,e,a){},28:function(t,e,a){},29:function(t,e,a){},30:function(t,e,a){},31:function(t,e,a){},32:function(t,e,a){},33:function(t,e,a){"use strict";a.r(e),a.d(e,"getUrlParameters",(function(){return B}));var n=a(9),i=a.n(n),s=a(10),r=a(1),c=a.n(r),o=a(11),d=a.n(o),l=a(12),u=a.n(l);a(20),a(21);function h(t){return window.innerWidth>1e3?window.innerWidth>window.innerHeight?0:1:"landscape-primary"===t||"landscape-secondary"===t?0:1}function j(t){var e=t.innerWidth,a=t.innerHeight,n=1;return e>1e3&&(n=2),e>1500&&(n=3),e>2250&&(n=4),768===e&&1024===a&&(n=2),n}var p=function(){document.fullscreenElement?document.exitFullscreen().then():window.root.requestFullscreen().then().catch((function(t){return console.log(t)}))},v=function(t){if(t.target.classList.contains("slide__title"))p();else if(!(t.target.classList.contains("vote__user")||t.target.classList.contains("vote__user-name")||t.target.classList.contains("vote__user-avatar")||t.target.classList.contains("vote__user-emoji"))&&!t.target.classList.contains("vote__bottom-btn_active")&&!t.target.classList.contains("vote__top-btn_active")){var e={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY},a=e.x,n=window.innerWidth/2;a>n&&f("ArrowRight"),a<n&&f("ArrowLeft")}},f=function(t){window.currSlide+="ArrowRight"===t?1:-1,window.currSlide<1&&(window.currSlide=window.allSlidesData.length),window.currSlide>window.allSlidesData.length&&(window.currSlide=1);var e=window.allSlidesData[window.currSlide-1],a=e.alias,n=e.data;window.renderTemplate(a,n),function(t,e){if("undefined"!=typeof window.history.pushState){var a={Title:t,Url:e};window.history.pushState(a,a.Title,a.Url)}else alert("Browser does not support HTML5.")}(document.title,"/?slide=".concat(window.currSlide,"&theme=").concat(window.currTheme))};var b=a(2),m=a(3),O=a(5),g=a(4),x=(a(22),a(0));function _(t){return Object(x.jsxs)("div",{className:"slide__caption",children:[Object(x.jsx)("div",{className:"slide__title",children:t.title}),Object(x.jsx)("div",{className:"slide__subtitle",children:t.subtitle})]})}a(24);function w(t){var e=t.data,a=e.users,n=e.emoji,i=e.selectedUserId,s=j(t.resolution);return Object(x.jsx)("div",{className:"podium",children:function(t){var e=Array.from(t);return e.splice(5),t.forEach((function(t,a){t.id===i&&a+1>5&&(e[4]=t)})),e.map((function(t,e){var a=0===e?n:"";return t.id===i&&0!==e&&(a="\ud83d\udc4d"),Object(x.jsxs)("div",{className:"podium__leader",children:[Object(x.jsx)(y,{data:t,index:e+1,scale:s,emoji:a}),Object(x.jsx)(N,{index:e+1})]},e+1)}))}(a)})}var y=function(t){Object(O.a)(a,t);var e=Object(g.a)(a);function a(){return Object(b.a)(this,a),e.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var t="podium__user";return"\ud83d\udc4d"===this.props.emoji&&(t+="_selected"),Object(x.jsxs)("div",{className:"".concat(t," podium__user-").concat(this.props.index),children:[Object(x.jsx)("span",{className:"podium__leader-emoji",children:this.props.emoji}),Object(x.jsx)("img",{className:"podium__leader-avatar",src:"assets/images/".concat(this.props.scale,"x/").concat(this.props.data.avatar),alt:this.props.data.name}),Object(x.jsx)("div",{className:"podium__leader-name",children:this.props.data.name}),Object(x.jsx)("div",{className:"podium__leader-score",children:this.props.data.valueText})]})}}]),a}(c.a.Component),N=function(t){Object(O.a)(a,t);var e=Object(g.a)(a);function a(){return Object(b.a)(this,a),e.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return Object(x.jsx)("div",{className:"podium__grade-"+this.props.index,children:Object(x.jsx)("div",{className:"podium__text-"+this.props.index,children:this.props.index})})}}]),a}(c.a.Component),k=function(t){Object(O.a)(a,t);var e=Object(g.a)(a);function a(){var t;return Object(b.a)(this,a),(t=e.call(this)).onResize=function(e){t.setState(t.getResolutionObject())},t.state=t.getResolutionObject(),t}return Object(m.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.onResize)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.onResize)}},{key:"getResolutionObject",value:function(){return{innerWidth:window.innerWidth,innerHeight:window.innerHeight}}},{key:"render",value:function(){return Object(x.jsxs)("div",{className:"slide slide-leaders",children:[Object(x.jsx)(_,{title:this.props.data.title,subtitle:this.props.data.subtitle}),Object(x.jsx)(w,{data:this.props.data,resolution:this.state})]})}}]),a}(c.a.Component),C=(a(25),a(36));function S(t){var e=Object(C.a)().cornerRadius(6).padAngle(.017),a=120,n=240,i=t.data.categories,s=function(t){var e=t.reduce((function(t,e){return t+e})),n=t.map((function(t){return 2*Math.PI*(t/e)})),i=[u(84,a,-Math.PI/6,n[0]-Math.PI/6)];return n.reduce((function(t,e){return i.push(u(84,a,t-Math.PI/6,t+e-Math.PI/6)),t+e})),i}(i.map((function(t){return parseInt(t.valueText)}))),r={dark:{grad1:["rgba(255, 163, 0, 0.8)","rgba(91, 58, 0, 0.8)"],grad2:["rgba(99, 63, 0, 0.5)","rgba(15, 9, 0, 0.5)"],grad3:["rgba(155, 155, 155, 0.5)","rgba(56, 41, 0, 0.5)"],grad4:["rgba(77, 77, 77, 0.5)","rgba(56, 41, 0, 0.5)"]},light:{grad1:["rgba(255, 184, 0, 1)","rgba(255, 239, 153, 1)"],grad2:["rgba(255, 184, 0, 0.7)","rgba(255, 239, 153, 0.5)"],grad3:["rgba(166, 166, 166, 0.3)","rgba(203, 203, 203, 0.2)"],grad4:["rgba(191, 191, 191, 0.8)","rgba(228, 228, 228, 0.6)"]}},c=document.querySelector(".theme_light")?r.light:r.dark,o=t.data,d=o.totalText,l=o.differenceText;return Object(x.jsxs)("div",{className:"doughnut-chart",children:[Object(x.jsxs)("svg",{width:n,height:n,viewBox:"0 0 ".concat(n," ").concat(n),className:"doughnut-chart__svg",children:[Object(x.jsxs)("defs",{children:[Object(x.jsxs)("radialGradient",{gradientUnits:"userSpaceOnUse",fr:"33%",cx:"0",cy:"0",r:"55%",id:"grad1",children:[Object(x.jsx)("stop",{offset:"0%",stopColor:"".concat(c.grad1[0])}),Object(x.jsx)("stop",{offset:"65%",stopColor:"".concat(c.grad1[1])}),Object(x.jsx)("stop",{offset:"70%",stopColor:"".concat(c.grad1[1])}),Object(x.jsx)("stop",{offset:"100%",stopColor:"".concat(c.grad1[0])})]}),Object(x.jsxs)("radialGradient",{gradientUnits:"userSpaceOnUse",fr:"33%",cx:"0",cy:"0",r:"55%",id:"grad2",children:[Object(x.jsx)("stop",{offset:"0%",stopColor:"".concat(c.grad2[0])}),Object(x.jsx)("stop",{offset:"65%",stopColor:"".concat(c.grad2[1])}),Object(x.jsx)("stop",{offset:"70%",stopColor:"".concat(c.grad2[1])}),Object(x.jsx)("stop",{offset:"100%",stopColor:"".concat(c.grad2[0])})]}),Object(x.jsxs)("radialGradient",{gradientUnits:"userSpaceOnUse",fr:"33%",cx:"0",cy:"0",r:"55%",id:"grad3",children:[Object(x.jsx)("stop",{offset:"0%",stopColor:"".concat(c.grad3[0])}),Object(x.jsx)("stop",{offset:"65%",stopColor:"".concat(c.grad3[1])}),Object(x.jsx)("stop",{offset:"70%",stopColor:"".concat(c.grad3[1])}),Object(x.jsx)("stop",{offset:"100%",stopColor:"".concat(c.grad3[0])})]}),Object(x.jsxs)("radialGradient",{gradientUnits:"userSpaceOnUse",fr:"33%",cx:"0",cy:"0",r:"55%",id:"grad4",children:[Object(x.jsx)("stop",{offset:"0%",stopColor:"".concat(c.grad4[0])}),Object(x.jsx)("stop",{offset:"65%",stopColor:"".concat(c.grad4[1])}),Object(x.jsx)("stop",{offset:"70%",stopColor:"".concat(c.grad4[1])}),Object(x.jsx)("stop",{offset:"100%",stopColor:"".concat(c.grad4[0])})]})]}),Object(x.jsxs)("g",{transform:"translate(".concat(a," ").concat(a,")"),children:[Object(x.jsx)("path",{d:s[0],fill:"url(#grad1)"}),Object(x.jsx)("path",{d:s[1],fill:"url(#grad2)"}),Object(x.jsx)("path",{d:s[2],fill:"url(#grad3)"}),Object(x.jsx)("path",{d:s[3],fill:"url(#grad4)"})]})]}),Object(x.jsxs)("div",{className:"doughnut-chart__text",children:[Object(x.jsx)("div",{className:"doughnut-chart__text-total",children:d}),Object(x.jsx)("div",{className:"doughnut-chart__text-difference",children:l})]})]});function u(t,a,n,i){return e({innerRadius:t,outerRadius:a,startAngle:n,endAngle:i})}}a(26);function R(t){var e=t.data;return Object(x.jsx)("div",{className:"slide-diagram__legend",children:e.map((function(t,e){return Object(x.jsxs)("div",{className:"slide-diagram__text-content",children:[Object(x.jsxs)("div",{className:"slide-diagram__group",style:{display:"flex"},children:[Object(x.jsx)("div",{className:"slide-diagram__dot slide-diagram__dot-".concat(e+1)}),Object(x.jsx)("div",{className:"slide-diagram__title",children:t.title})]}),Object(x.jsxs)("div",{className:"slide-diagram__group",style:{display:"flex"},children:[Object(x.jsx)("div",{className:"slide-diagram__diff",children:L(t.differenceText)}),Object(x.jsx)("div",{className:"slide-diagram__value",children:L(t.valueText)})]})]},e+1)}))})}function L(t){var e=[];return"+"===t[0]&&e.push("+"),e.push(parseInt(t)),e.join("")}a(27);var z=function(t){Object(O.a)(a,t);var e=Object(g.a)(a);function a(){return Object(b.a)(this,a),e.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return Object(x.jsxs)("div",{className:"slide slide-diagram",children:[Object(x.jsx)(_,{title:this.props.data.title,subtitle:this.props.data.subtitle}),Object(x.jsxs)("div",{className:"slide-diagram__content-wrapper",children:[Object(x.jsx)(S,{data:this.props.data}),Object(x.jsx)(R,{data:this.props.data.categories})]})]})}}]),a}(c.a.Component);a(28);function E(t){var e=t.data,a=h(t.orientation),n=a?function(){var t=[];for(var a in e)e[a].forEach((function(e,a){if(void 0===t[a]){var n=[e];t[a]=n}else t[a].push(e)}));return t.map((function(t,e){var a=t.map((function(t,a){return Object(x.jsx)(U,{value:t},(e+1)*(a+1))}));return{hour:e+1,points:a}}))}():function(){var t=[],a=function(a){var n=function(t){for(var e=[],a=0;a<t.length;a+=2)e.push(t[a]+t[a+1]);return e}(e[a]).map((function(t,e){return Object(x.jsx)(U,{value:t},a+e)}));t.push({dayOfWeek:a,points:n})};for(var n in e)a(n);return t}();return Object(x.jsxs)("div",{className:"activity-chart",children:[" ",function(){var t=a?4.45:3.5;return n.reverse(),n.map((function(e,n,i){return Object(x.jsx)("div",{style:{bottom:"".concat((t*n).toFixed(2),"vmin"),zIndex:i.length-n},className:(s=e.dayOfWeek,a?"activity-chart__day-of-week":"activity-chart__day-of-week activity-chart__"+s),children:e.points},n);var s}))}()," "]})}var U=function(t){Object(O.a)(a,t);var e=Object(g.a)(a);function a(){return Object(b.a)(this,a),e.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var t;return 0===this.props.value&&(t="activity-chart__min"),this.props.value>=1&&this.props.value<=2&&(t="activity-chart__mid"),this.props.value>=3&&this.props.value<=4&&(t="activity-chart__max"),this.props.value>=5&&this.props.value<=6&&(t="activity-chart__extra"),Object(x.jsx)("div",{className:t})}}]),a}(c.a.Component);a(29);function T(t){var e=[h(t.orientation)?"1 \u0447\u0430\u0441":"2 \u0447\u0430\u0441\u0430","0","1\u2009\u2014\u20092","3\u2009\u2014\u20094","5\u2009\u2014\u20096"];return Object(x.jsx)("div",{className:"activity-chart__legend",children:e.map((function(t,e){return Object(x.jsxs)("div",{className:"activity-chart__legend-item",children:[Object(x.jsx)("div",{className:"activity-chart__legend-indicator-"+e}),Object(x.jsx)("div",{className:"activity-chart__legend-text",children:t})]},e)}))})}var W=function(t){Object(O.a)(a,t);var e=Object(g.a)(a);function a(){var t;return Object(b.a)(this,a),(t=e.call(this)).onOrientationChange=function(e){t.setState({orientation:e.currentTarget.type})},t.state={orientation:window.screen.orientation.type},t}return Object(m.a)(a,[{key:"componentDidMount",value:function(){"orientation"in window.screen&&window.screen.orientation.addEventListener("change",this.onOrientationChange)}},{key:"componentWillUnmount",value:function(){"orientation"in window.screen&&window.screen.orientation.removeEventListener("change",this.onOrientationChange)}},{key:"render",value:function(){return Object(x.jsxs)("div",{className:"slide slide-activity",children:[Object(x.jsx)(_,{title:this.props.data.title,subtitle:this.props.data.subtitle}),Object(x.jsx)(E,{data:this.props.data.data,orientation:this.state.orientation}),Object(x.jsx)(T,{orientation:this.state.orientation})]})}}]),a}(c.a.Component),I=a(7);a(30);function M(t){var e,a,n=t.data,i=n.users,s=n.selectedUserId,c=n.offset,o=t.resolution,d=h(o.orientation),l=j(o),u=!1,p=!1,v=Object(r.useState)({}),f=Object(I.a)(v,2),b=f[0],m=f[1];return Object(x.jsxs)("div",{className:"slide-vote__users",children:[function(t){return function(t){var n=0;c&&t.forEach((function(t,e){t.id===c&&(n=e)}));var i=d?8:6,s=t.slice(n,n+i),r=t[n+i];e=r?r.id:0,r=t[n-i],(a=r?r.id:0)||(a=t[0].id);s[0].id===t[0].id&&(a=0);e&&(p=!0);a&&(u=!0);if(s.length<i)for(var o=0;o<i+1-s.length;o++)s.push({id:"empty"});return s}(t).map((function(t,e){var a="";return t.id===s&&0!==e&&(a="\ud83d\udc4d"),Object(x.jsx)(A,{data:t,index:e+1,scale:l,emoji:a},e)}))}(i),Object(x.jsx)("div",{className:u?"vote__top-btn_active":"vote__top-btn","data-action":b.action||"","data-params":JSON.stringify(b.params)||"",onClick:function(t){m({action:"update",params:{alias:"vote",data:{offset:a}}})}}),Object(x.jsx)("div",{className:p?"vote__bottom-btn_active":"vote__bottom-btn","data-action":b.action||"","data-params":JSON.stringify(b.params)||"",onClick:function(t){m({action:"update",params:{alias:"vote",data:{offset:e}}})}})]})}var A=function(t){Object(O.a)(a,t);var e=Object(g.a)(a);function a(){var t;return Object(b.a)(this,a),(t=e.call(this)).handleClick=function(e){t.setState({action:"update",params:{alias:"leaders",data:{selectedUserId:t.props.data.id}}})},t.state={},t}return Object(m.a)(a,[{key:"render",value:function(){var t="vote__user";return"\ud83d\udc4d"===this.props.emoji&&(t+="_selected"),"empty"===this.props.data.id?Object(x.jsx)("div",{className:"vote__user-empty vote__user-".concat(this.props.index)}):Object(x.jsxs)("div",{className:"".concat(t," vote__user-").concat(this.props.index),onClick:this.handleClick,"data-action":this.state.action||"","data-params":JSON.stringify(this.state.params)||"",children:[Object(x.jsx)("span",{className:"vote__user-emoji",children:this.props.emoji}),Object(x.jsx)("img",{className:"vote__user-avatar",src:"assets/images/".concat(this.props.scale,"x/").concat(this.props.data.avatar),alt:this.props.data.name}),Object(x.jsx)("div",{className:"vote__user-name",children:this.props.data.name})]})}}]),a}(c.a.Component),H=function(t){Object(O.a)(a,t);var e=Object(g.a)(a);function a(){var t;return Object(b.a)(this,a),(t=e.call(this)).onResize=function(e){t.setState(t.getResolutionObject())},t.state=t.getResolutionObject(),t}return Object(m.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.onResize),window.screen.orientation.addEventListener("change",this.onResize)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.onResize),window.screen.orientation.removeEventListener("change",this.onResize)}},{key:"getResolutionObject",value:function(){return{innerWidth:window.innerWidth,innerHeight:window.innerHeight,orientation:window.screen.orientation.type}}},{key:"render",value:function(){return Object(x.jsxs)("div",{className:"slide slide-vote",children:[Object(x.jsx)(_,{title:this.props.data.title,subtitle:this.props.data.subtitle}),Object(x.jsx)(M,{data:this.props.data,resolution:this.state})]})}}]),a}(c.a.Component);a(31);function D(t){var e=t.users.slice(0,2);return Object(x.jsx)("div",{className:"slide-chart__users",children:e.map((function(e,a){return Object(x.jsxs)("div",{className:"slide-chart__user",children:[Object(x.jsx)("img",{className:"slide-chart__user-avatar",src:"assets/images/".concat(j(t.resolution),"x/").concat(e.avatar),alt:e.name}),Object(x.jsxs)("div",{className:"slide-chart__user-text",children:[Object(x.jsx)("div",{className:"slide-chart__user-name",children:e.name}),Object(x.jsx)("div",{className:"slide-chart__user-value",children:e.valueText})]})]},a)}))})}var P=a(13);a(32);function J(t){var e=function(e){var a,n=h(t.resolution.orientation)?6:9;if(e.forEach((function(t,e){t.active&&(a=e)})),!a)return;var i,s=e.slice(a-n+3,a+3),r=s[0].value,c=Object(P.a)(s);try{for(c.s();!(i=c.n()).done;){var o=i.value;o.value>r&&(r=o.value)}}catch(d){c.e(d)}finally{c.f()}return[s,r]}(t.values),a=Object(I.a)(e,2),n=a[0],i=a[1];return Object(x.jsx)("div",{className:"slide-chart__diagram",children:n.map((function(t,e){var a=t.value,n=t.title,s=t.active,r=a.toString().length>4?"_wide":"",c=s?"_active":"";return Object(x.jsxs)("div",{className:"slide-chart__item"+r,children:[Object(x.jsx)("div",{className:"slide-chart__text-top"+c,children:a||""}),Object(x.jsx)("div",{className:"slide-chart__column"+c,style:{height:"calc(".concat(a/i," * var(--max-column-height))")}}),Object(x.jsx)("div",{className:"slide-chart__text-bottom",children:n})]},e)}))})}var F=function(t){Object(O.a)(a,t);var e=Object(g.a)(a);function a(){var t;return Object(b.a)(this,a),(t=e.call(this)).onResize=function(e){t.setState(t.getResolutionObject())},t.state=t.getResolutionObject(),t}return Object(m.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.onResize),window.screen.orientation.addEventListener("change",this.onResize)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.onResize),window.screen.orientation.removeEventListener("change",this.onResize)}},{key:"getResolutionObject",value:function(){return{innerWidth:window.innerWidth,innerHeight:window.innerHeight,orientation:window.screen.orientation.type}}},{key:"render",value:function(){return Object(x.jsxs)("div",{className:"slide slide-vote",children:[Object(x.jsx)(_,{title:this.props.data.title,subtitle:this.props.data.subtitle}),Object(x.jsx)(J,{values:this.props.data.values,resolution:this.state}),Object(x.jsx)(D,{users:this.props.data.users,resolution:this.state})]})}}]),a}(c.a.Component);(function(){var t=Object(s.a)(i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("./data.json").then((function(t){return t.json()}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()().then((function(t){window.allSlidesData=t;var e=B(),a=e.slideNumber,n=e.theme,i=t[a-1];if(window.currSlide=parseInt(a),window.currTheme=n,q(n,window.root),i){var s=i.alias,r=i.data;G(s,r)}})).then((function(){document.body.addEventListener("keydown",(function(t){"KeyF"===t.code&&p(),"ArrowRight"!==t.code&&"ArrowLeft"!==t.code||f(t.code)})),document.body.addEventListener("touchstart",v)}));var G=function(t,e){var a;switch(t){case"leaders":a=Object(x.jsx)(k,{data:e});break;case"diagram":a=Object(x.jsx)(z,{data:e});break;case"activity":a=Object(x.jsx)(W,{data:e});break;case"vote":a=Object(x.jsx)(H,{data:e});break;case"chart":a=Object(x.jsx)(F,{data:e});break;default:a="\u041a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d"}return u.a.render(a,window.root),d.a.renderToStaticMarkup(a)};window.renderTemplate=G,window.root=document.getElementById("stories");var B=function(){var t=new URL(document.location.href).searchParams,e=t.get("slide"),a=t.get("theme");return{slideNumber:e=e||1,theme:a=a||"dark"}},q=function(t,e){e.classList.remove("theme_dark"),e.classList.remove("theme_light"),e.classList.add("theme_"+t)}}},[[33,1,2]]]);
//# sourceMappingURL=main.5fca8a6a.chunk.js.map