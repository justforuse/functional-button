(function t(e,n){if(typeof exports==="object"&&typeof module==="object")module.exports=n();else if(typeof define==="function"&&define.amd)define([],n);else if(typeof exports==="object")exports["FunctionalButton"]=n();else e["FunctionalButton"]=n()})(window,function(){return function(n){var i={};function r(t){if(i[t]){return i[t].exports}var e=i[t]={i:t,l:false,exports:{}};n[t].call(e.exports,e,e.exports,r);e.l=true;return e.exports}r.m=n;r.c=i;r.d=function(t,e,n){if(!r.o(t,e)){Object.defineProperty(t,e,{enumerable:true,get:n})}};r.r=function(t){if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(t,"__esModule",{value:true})};r.t=function(e,t){if(t&1)e=r(e);if(t&8)return e;if(t&4&&typeof e==="object"&&e&&e.__esModule)return e;var n=Object.create(null);r.r(n);Object.defineProperty(n,"default",{enumerable:true,value:e});if(t&2&&typeof e!="string")for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n};r.n=function(e){var t=e&&e.__esModule?function t(){return e["default"]}:function t(){return e};r.d(t,"a",t);return t};r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)};r.p="";return r(r.s=3)}([function(t,e,n){"use strict";n.d(e,"a",function(){return i});function i(t,e,n,i,r,o,a,u){t=t||{};var l=typeof t.default;if(l==="object"||l==="function"){t=t.default}var s=typeof t==="function"?t.options:t;if(e){s.render=e;s.staticRenderFns=n;s._compiled=true}if(i){s.functional=true}if(o){s._scopeId=o}var f;if(a){f=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext;if(!t&&typeof __VUE_SSR_CONTEXT__!=="undefined"){t=__VUE_SSR_CONTEXT__}if(r){r.call(this,t)}if(t&&t._registeredComponents){t._registeredComponents.add(a)}};s._ssrRegister=f}else if(r){f=u?function(){r.call(this,this.$root.$options.shadowRoot)}:r}if(f){if(s.functional){s._injectStyles=f;var c=s.render;s.render=function t(e,n){f.call(n);return c(e,n)}}else{var d=s.beforeCreate;s.beforeCreate=d?[].concat(d,f):[f]}}return{exports:t,options:s}}},function(t,e,n){"use strict";var i={name:"DeferBtn",props:{action:{type:Function,default:null},delay:{type:Number,default:3}},data:function t(){return{timerHandle:null,timeDelay:this.delay,intervalHandle:null}},created:function t(){this.start()},beforeDestroy:function t(){this.clear()},methods:{start:function t(){var e=this;this.timeDelay=this.delay;this.timerHandle=setTimeout(function(){e.doAction()},this.delay*1e3);this.intervalHandle=setInterval(function(){if(e.timeDelay>=1){e.timeDelay-=1}else{e.preAction()}},1e3)},clear:function t(){clearInterval(this.intervalHandle);clearTimeout(this.timerHandle);this.timeDelay=0},doAction:function t(){this.timeDelay=0;clearTimeout(this.timerHandle);this.action&&this.action()},preAction:function t(){clearInterval(this.intervalHandle)},handleAdvanceAction:function t(){if(this.timeDelay){this.preAction();this.doAction()}}}};var r=function(){var t=this;var e=t.$createElement;var n=t._self._c||e;return n("el-button",t._b({on:{click:t.handleAdvanceAction}},"el-button",t.$attrs,false),[t.$slots.default?n("span",[t._t("default"),t._v(" "),t.timeDelay?n("span",[t._v("("+t._s(t.timeDelay)+"s)")]):t._e()],2):t._e()])};var o=[];var a=n(0);var u=false;var l=null;var s=null;var f=null;var c=Object(a["a"])(i,r,o,u,l,s,f);var d=e["a"]=c.exports},function(t,e,n){"use strict";var i={name:"ContinuousBtn",props:{action:{type:Function,default:null},interval:{type:Number,default:300}},data:function t(){return{pressFlag:false,timeHandle:null}},methods:{handleAction:function t(){this.action&&this.action()},startPolling:function t(){var e=this;this.timeHandle=setInterval(function(){console.log("pressing...");e.handleAction()},this.interval)},handleMouseDown:function t(){this.pressFlag=true;this.startPolling()},handleMouseUp:function t(){this.pressFlag=false;clearTimeout(this.timeHandle)},handleMouseOut:function t(){this.pressFlag=false;clearTimeout(this.timeHandle)}}};var r=function(){var e=this;var t=e.$createElement;var n=e._self._c||t;return n("el-button",e._b({on:{click:e.handleAction},nativeOn:{mousedown:function(t){return e.handleMouseDown(t)},mouseup:function(t){return e.handleMouseUp(t)},mouseout:function(t){return e.handleMouseOut(t)}}},"el-button",e.$attrs,false),[e.$slots.default?n("span",[e._t("default")],2):e._e()])};var o=[];var a=n(0);var u=false;var l=null;var s=null;var f=null;var c=Object(a["a"])(i,r,o,u,l,s,f);var d=e["a"]=c.exports},function(t,u,l){"use strict";l.r(u);(function(t){l.d(u,"install",function(){return r});var e=l(1);l.d(u,"DeferBtn",function(){return e["a"]});var n=l(2);l.d(u,"ContinuousBtn",function(){return n["a"]});var i=[e["a"],n["a"]];function r(e){i.forEach(function(t){e.component(t.name,t)})}var o={version:"0.0.2",install:r};u["default"]=o;var a=null;if(typeof window!=="undefined"){a=window.Vue}else if(typeof t!=="undefined"){a=t.Vue}if(a){a.use(o)}}).call(this,l(4))},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){if(typeof window==="object")n=window}t.exports=n}])});