(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/uni-ui/lib/uni-notice-bar/uni-notice-bar"],{"1ad0":function(n,t,e){},"2d39":function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=function(){return Promise.all([e.e("common/vendor"),e.e("components/uni-ui/lib/uni-icons/uni-icons")]).then(e.bind(null,"b704"))},o={name:"UniNoticeBar",components:{uniIcons:i},props:{text:{type:String,default:""},moreText:{type:String,default:""},backgroundColor:{type:String,default:"#fffbe8"},speed:{type:[String,Number],default:100},color:{type:String,default:"#de8c17"},moreColor:{type:String,default:"#999999"},single:{type:[String,Boolean],default:!1},scrollable:{type:[String,Boolean],default:!1},showIcon:{type:[String,Boolean],default:!1},showGetMore:{type:[String,Boolean],default:!1},showClose:{type:[String,Boolean],default:!1}},data:function(){var n="Uni_".concat(Math.ceil(1e6*Math.random()).toString(36)),t="Uni_".concat(Math.ceil(1e6*Math.random()).toString(36));return{textWidth:0,boxWidth:0,wrapWidth:"",webviewHide:!1,elId:n,elIdBox:t,show:!0,animationDuration:"none",animationPlayState:"paused",animationDelay:"0s"}},mounted:function(){var n=this;this.$nextTick((function(){n.initSize()}))},methods:{initSize:function(){var t=this;if(this.scrollable){var e=[],i=new Promise((function(e,i){n.createSelectorQuery().in(t).select("#".concat(t.elId)).boundingClientRect().exec((function(n){t.textWidth=n[0].width,e()}))})),o=new Promise((function(e,i){n.createSelectorQuery().in(t).select("#".concat(t.elIdBox)).boundingClientRect().exec((function(n){t.boxWidth=n[0].width,e()}))}));e.push(i),e.push(o),Promise.all(e).then((function(){t.animationDuration="".concat(t.textWidth/t.speed,"s"),t.animationDelay="-".concat(t.boxWidth/t.speed,"s"),setTimeout((function(){t.animationPlayState="running"}),1e3)}))}},loopAnimation:function(){},clickMore:function(){this.$emit("getmore")},close:function(){this.show=!1,this.$emit("close")},onClick:function(){this.$emit("click")}}};t.default=o}).call(this,e("543d")["default"])},"37a3":function(n,t,e){"use strict";e.r(t);var i=e("4b03"),o=e("a8a7");for(var a in o)"default"!==a&&function(n){e.d(t,n,(function(){return o[n]}))}(a);e("6c79f");var c,u=e("f0c5"),r=Object(u["a"])(o["default"],i["b"],i["c"],!1,null,"76f6508c",null,!1,i["a"],c);t["default"]=r.exports},"4b03":function(n,t,e){"use strict";var i={"uni-icons":()=>Promise.all([e.e("common/vendor"),e.e("components/uni-icons/uni-icons")]).then(e.bind(null,"2ba4"))},o=function(){var n=this,t=n.$createElement;n._self._c},a=[];e.d(t,"b",(function(){return o})),e.d(t,"c",(function(){return a})),e.d(t,"a",(function(){return i}))},"6c79f":function(n,t,e){"use strict";var i=e("1ad0"),o=e.n(i);o.a},a8a7:function(n,t,e){"use strict";e.r(t);var i=e("2d39"),o=e.n(i);for(var a in i)"default"!==a&&function(n){e.d(t,n,(function(){return i[n]}))}(a);t["default"]=o.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/uni-ui/lib/uni-notice-bar/uni-notice-bar-create-component',
    {
        'components/uni-ui/lib/uni-notice-bar/uni-notice-bar-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("37a3"))
        })
    },
    [['components/uni-ui/lib/uni-notice-bar/uni-notice-bar-create-component']]
]);
