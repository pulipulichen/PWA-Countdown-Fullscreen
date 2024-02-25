(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{107:function(t,i,n){"use strict";n.r(i);function e(){var i=this,t=i.$createElement;return(t=i._self._c||t)("div",{staticClass:"DigitTimer",class:i.computedClassName,on:{mousedown:i.readyToStart,mouseup:i.cancelToStart,contextmenu:function(t){return t.preventDefault(),t.stopPropagation(),i.readyToStartHandler(t)}}},[t("div",{staticClass:"container",on:{click:i.pauseOrContinue,contextmenu:function(t){return t.preventDefault(),t.stopPropagation(),i.readyToResetHandler(t)}}},[t("div",{staticClass:"digit",attrs:{"data-digit":"min1"}},[t("div",{staticClass:"to-fitty"},[i._v(i._s(i.min1))])]),i._v(" "),t("div",{staticClass:"digit",attrs:{"data-digit":"min2"}},[t("div",{staticClass:"to-fitty"},[i._v(i._s(i.min2))])]),i._v(" "),i._m(0),i._v(" "),t("div",{staticClass:"digit",attrs:{"data-digit":"sec1"}},[t("div",{staticClass:"to-fitty"},[i._v(i._s(i.sec1))])]),i._v(" "),t("div",{staticClass:"digit",attrs:{"data-digit":"sec2"}},[t("div",{staticClass:"to-fitty"},[i._v(i._s(i.sec2))])])]),i._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:!i.isCountdown,expression:"!isCountdown"}],staticClass:"container up"},[t("div",{staticClass:"digit",attrs:{"data-digit":"min1"},on:{click:function(t){return i.plusAttr("min1",0,9,1)}}},[t("div",{staticClass:"to-fitty"},[i._v(i._s(i.min1))])]),i._v(" "),t("div",{staticClass:"digit",attrs:{"data-digit":"min2"},on:{click:function(t){return i.plusAttr("min2",0,9,1)}}},[t("div",{staticClass:"to-fitty"},[i._v(i._s(i.min2))])]),i._v(" "),t("div",{attrs:{"data-digit":"colon"}},[i._v("\n        :\n      ")]),i._v(" "),t("div",{staticClass:"digit",attrs:{"data-digit":"sec1"},on:{click:function(t){return i.plusAttr("sec1",0,5,1)}}},[t("div",{staticClass:"to-fitty"},[i._v(i._s(i.sec1))])]),i._v(" "),t("div",{staticClass:"digit",attrs:{"data-digit":"sec2"},on:{click:function(t){return i.plusAttr("sec2",0,9,1)}}},[t("div",{staticClass:"to-fitty"},[i._v(i._s(i.sec2))])])]),i._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:!i.isCountdown,expression:"!isCountdown"}],staticClass:"container down"},[t("div",{staticClass:"digit",attrs:{"data-digit":"min1"},on:{click:function(t){return i.minusAttr("min1",0,9,1)}}},[t("div",{staticClass:"to-fitty"},[i._v(i._s(i.min1))])]),i._v(" "),t("div",{staticClass:"digit",attrs:{"data-digit":"min2"},on:{click:function(t){return i.minusAttr("min2",0,9,1)}}},[t("div",{staticClass:"to-fitty"},[i._v(i._s(i.min2))])]),i._v(" "),t("div",{attrs:{"data-digit":"colon"}},[i._v("\n        :\n      ")]),i._v(" "),t("div",{staticClass:"digit",attrs:{"data-digit":"sec1"},on:{click:function(t){return i.minusAttr("sec1",0,5,1)}}},[t("div",{staticClass:"to-fitty"},[i._v(i._s(i.sec1))])]),i._v(" "),t("div",{staticClass:"digit",attrs:{"data-digit":"sec2"},on:{click:function(t){return i.minusAttr("sec2",0,9,1)}}},[t("div",{staticClass:"to-fitty"},[i._v(i._s(i.sec2))])])])])}e._withStripped=!0;var o=n(60),a={props:["db"],components:{},data:function(){return this.$i18n.locale=this.db.localConfig.locale,{countdownTimer:null,startTimer:null,resetTimer:null}},watch:{"db.localConfig.locale":function(){this.$i18n.locale=this.db.localConfig.locale}},computed:{computedClassName:function(){var t=[];return this.isCountdown||t.push("config"),"pause"===this.db.config.timerStatus&&t.push("pause"),this.db.Index.isLV1Time?t.push("lv1"):this.db.Index.isLV2Time?t.push("lv2"):this.db.Index.isTimeToPlaySound&&t.push("lv1"),t},isCountdown:function(){return this.$parent.isCountdown},isTimeToPlaySound:function(){return this.$parent.isTimeToPlaySound},min1:function(){return this.isCountdown?this.countdownMin1:this.db.localConfig.min1},min2:function(){return this.isCountdown?this.countdownMin2:this.db.localConfig.min2},sec1:function(){return this.isCountdown?this.countdownSec1:this.db.localConfig.sec1},sec2:function(){return this.isCountdown?this.countdownSec2:this.db.localConfig.sec2},countdownMin:function(){return Math.floor(this.db.config.timerSecond/60)},countdownMin1:function(){return this.countdownMin<10?0:Math.floor(this.countdownMin/10)},countdownMin2:function(){return this.countdownMin%10},countdownSec:function(){return this.db.config.timerSecond%60},countdownSec1:function(){return this.countdownSec<10?0:Math.floor(this.countdownSec/10)},countdownSec2:function(){return this.countdownSec%10}},mounted:function(){this.$parent.initAPP(),this.initFitty()},methods:{initFitty:function(){setTimeout(function(){for(var t=document.querySelectorAll(".to-fitty"),i=0;i<t.length;i++)Object(o.a)(t[i]);o.a.fitAll()},1e3)},plusAttr:function(t){var i=2<arguments.length&&void 0!==arguments[2]?arguments[2]:9;if(this.isCountdown)return!1;this.db.localConfig[t]=this.db.localConfig[t]+(3<arguments.length&&void 0!==arguments[3]?arguments[3]:1),this.db.localConfig[t]>i&&(this.db.localConfig[t]=this.db.localConfig[t]-i-1),this.db.config.timerStatus="config"},minusAttr:function(t){var i=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:9;if(this.isCountdown)return!1;this.db.localConfig[t]=this.db.localConfig[t]-(3<arguments.length&&void 0!==arguments[3]?arguments[3]:1),this.db.localConfig[t]<i&&(this.db.localConfig[t]=n-(i-this[t]-1)),this.db.config.timerStatus="config"},readyToStart:function(t){var i=this;return 1===t.which&&"config"===this.db.config.timerStatus&&"false"===this.db.config.restartStatus&&(this.db.config.timerStatus="hold",clearTimeout(this.startTimer),void(this.startTimer=setTimeout(function(){if("hold"!==i.db.config.timerStatus)return!1;i.readyToStartHandler(!1)},this.db.config.holdTimer)))},readyToStartHandler:function(){if(!(0<arguments.length&&void 0!==arguments[0])||arguments[0]){if(this.isCountdown)return!1;if("config"!==this.db.config.timerStatus)return!1;if("false"!==this.db.config.restartStatus)return!1}this.db.config.timerStatus="start",this.startCountdown()},cancelToStart:function(t){if(1!==t.which)return!1;"hold"===this.db.config.timerStatus&&(this.db.config.timerStatus="config")},startCountdown:function(){this.db.config.timerSecond=this.$parent.configTimerSecond,this.startCountdownInterval()},startCountdownInterval:function(){var t=this;this.db.localConfig.soundEnable&&this.db.config.audioBeep.play(),this.db.Index.vibrate(),clearInterval(this.countdownTimer),this.countdownTimer=setInterval(function(){t.startCountdownIntervalHandler()},1e3)},startCountdownIntervalHandler:function(){this.db.config.timerSecond--,this.playTickSoundEffect(),0===this.db.config.timerSecond&&this.countdownIntervalStopHandler()},countdownIntervalStopHandler:function(){var t=this;clearInterval(this.countdownTimer),this.db.localConfig.soundEnable&&this.db.config.audioFinish.play(),setTimeout(function(){t.db.config.timerStatus="stop",t.db.config.restartStatus="wait"},100)},playTickSoundEffect:function(){var t;return!!this.isTimeToPlaySound&&!!this.db.localConfig.soundEnable&&void(30<=this.db.config.timerSecond?(this.$parent.vibrate(),this.db.config.audioLevelUp):(t=this.db.config.timerSecond-1,this.db.config.audioFinalCountdown[t])).play()},pauseOrContinue:function(){if(!this.isCountdown)return!1;"start"===this.db.config.timerStatus?(this.db.config.timerStatus="pause",this.db.localConfig.soundEnable&&this.db.config.audioBeep.play(),this.$parent.vibrate(),clearInterval(this.countdownTimer)):"pause"===this.db.config.timerStatus&&(this.db.config.timerStatus="start",this.startCountdownInterval())},readyToReset:function(t){var i=this;if(1!==t.which)return!1;this.db.config.resetStatus="hold",clearTimeout(this.resetTimer),this.resetTimer=setTimeout(function(){if("hold"!==i.db.config.resetStatus)return!1;i.readyToResetHandler(!1)},this.db.config.holdTimer)},readyToResetHandler:function(){var t=!(0<arguments.length&&void 0!==arguments[0])||arguments[0];if(t&&"pause"!==this.db.config.timerStatus)return!1;this.db.config.timerStatus="config",this.db.localConfig.soundEnable&&this.db.config.audioBeep.play()},cancelToReset:function(){if("hold"!==this.db.config.resetStatus)return!1;this.db.config.resetStatus="false",clearTimeout(this.resetTimer)}}},r=(n(92),n(15)),n=n(94),r=Object(r.a)(a,e,[function(){var t=this,i=t.$createElement,i=t._self._c||i;return i("div",{staticClass:"colon",attrs:{"data-digit":"colon"}},[i("div",{staticClass:"to-fitty"},[t._v(":")])])}],!1,null,"9ff5a9e2",null);"function"==typeof n.default&&Object(n.default)(r),r.options.__file="src/components/DigitTimer/DigitTimer.vue",i.default=r.exports},60:function(t,i,n){"use strict";var e=function(n){var i,o,a,t,r,e,s,d,c,l,u,f,v,g,h,m,p,C,A,w,y,b,T;if(n)return i=1,o=3,a=[],t=null,r="requestAnimationFrame"in n?function(){n.cancelAnimationFrame(t),t=n.requestAnimationFrame(function(){return s(a.filter(function(t){return t.dirty&&t.active}))})}:function(){},e=function(i){return function(){a.forEach(function(t){return t.dirty=i}),r()}},s=function(t){t.filter(function(t){return!t.styleComputed}).forEach(function(t){t.styleComputed=u(t)}),t.filter(f).forEach(v);t=t.filter(l);t.forEach(c),t.forEach(function(t){v(t),d(t)}),t.forEach(g)},d=function(t){return t.dirty=0},c=function(t){t.availableWidth=t.element.parentNode.clientWidth,t.currentWidth=t.element.scrollWidth,t.previousFontSize=t.currentFontSize,t.currentFontSize=Math.min(Math.max(t.minSize,t.availableWidth/t.currentWidth*t.previousFontSize),t.maxSize),t.whiteSpace=t.multiLine&&t.currentFontSize===t.minSize?"normal":"nowrap"},l=function(t){return 2!==t.dirty||2===t.dirty&&t.element.parentNode.clientWidth!==t.availableWidth},u=function(t){var i=n.getComputedStyle(t.element,null);return t.currentFontSize=parseFloat(i.getPropertyValue("font-size")),t.display=i.getPropertyValue("display"),t.whiteSpace=i.getPropertyValue("white-space"),!0},f=function(t){var i=!1;return!t.preStyleTestCompleted&&(/inline-/.test(t.display)||(i=!0,t.display="inline-block"),"nowrap"!==t.whiteSpace&&(i=!0,t.whiteSpace="nowrap"),t.preStyleTestCompleted=!0,i)},v=function(t){t.element.style.whiteSpace=t.whiteSpace,t.element.style.display=t.display,t.element.style.fontSize=t.currentFontSize+"px"},g=function(t){t.element.dispatchEvent(new CustomEvent("fit",{detail:{oldValue:t.previousFontSize,newValue:t.currentFontSize,scaleFactor:t.currentFontSize/t.previousFontSize}}))},h=function(t,i){return function(){t.dirty=i,t.active&&r()}},m=function(i){return function(){a=a.filter(function(t){return t.element!==i.element}),i.observeMutations&&i.observer.disconnect(),i.element.style.whiteSpace=i.originalStyle.whiteSpace,i.element.style.display=i.originalStyle.display,i.element.style.fontSize=i.originalStyle.fontSize}},p=function(t){return function(){t.active||(t.active=!0,r())}},C=function(t){return function(){return t.active=!1}},A=function(t){t.observeMutations&&(t.observer=new MutationObserver(h(t,i)),t.observer.observe(t.element,t.observeMutations))},w={minSize:16,maxSize:512,multiLine:!0,observeMutations:"MutationObserver"in n&&{subtree:!0,childList:!0,characterData:!0}},y=null,b=function(){n.clearTimeout(y),y=n.setTimeout(e(2),D.observeWindowDelay)},T=["resize","orientationchange"],Object.defineProperty(D,"observeWindow",{set:function(t){var i="".concat(t?"add":"remove","EventListener");T.forEach(function(t){n[i](t,b)})}}),D.observeWindow=!0,D.observeWindowDelay=100,D.fitAll=e(o),D;function S(t,i){var e=Object.assign({},w,i),i=t.map(function(t){var i,n=Object.assign({},e,{element:t,active:!0});return(i=n).originalStyle={whiteSpace:i.element.style.whiteSpace,display:i.element.style.display,fontSize:i.element.style.fontSize},A(i),i.newbie=!0,i.dirty=!0,a.push(i),{element:t,fit:h(n,o),unfreeze:p(n),freeze:C(n),unsubscribe:m(n)}});return r(),i}function D(t){var i,n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};return"string"==typeof t?S((i=document.querySelectorAll(t),[].slice.call(i)),n):S([t],n)[0]}}("undefined"==typeof window?null:window);i.a=e},61:function(t,i,n){"use strict";t.exports=function(t,i){return"string"==typeof(t=t.__esModule?t.default:t)&&(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),/["'() \t\n]/.test(t)||i)?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t}},62:function(t,i,n){var e=n(93),o=("string"==typeof e&&(e=[[t.i,e,""]]),{});o.insert="head",o.singleton=!1,n(9)(e,o);e.locals&&(t.exports=e.locals)},63:function(t,i){t.exports="./dist/asset/ChivoMono-ExtraBold.ttf"},64:function(t,i){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"en":{"TEST_MESSAGE":"Test Message"},"zh-TW":{"TEST_MESSAGE":"測試訊息"}}'),delete t.options._Ctor}},92:function(t,i,n){"use strict";var e=n(62);n.n(e).a},93:function(t,i,n){i=t.exports=n(8)(!0);n=n(61)(n(63));i.push([t.i,".DigitTimer[data-v-9ff5a9e2]{color:#fff!important;transition:color .5s ease-in-out;width:100vw;height:100vh;display:flex;align-items:center;justify-content:center}.DigitTimer.pause[data-v-9ff5a9e2]{color:#ccc!important}.DigitTimer.pause .container[data-v-9ff5a9e2]{cursor:pointer}.DigitTimer.lv1[data-v-9ff5a9e2]{color:#ff0!important;transition:color .1s ease-in-out}.DigitTimer.final-countdown[data-v-9ff5a9e2],.DigitTimer.lv2[data-v-9ff5a9e2]{color:#f08080!important;transition:color .1s ease-in-out}.DigitTimer .container[data-v-9ff5a9e2]{font-family:ChivoMono-ExtraBold;width:100vw;height:100vh;display:flex;top:0;cursor:default;user-select:none}.DigitTimer .container[data-v-9ff5a9e2],.DigitTimer .container div[data-digit][data-v-9ff5a9e2]{align-items:center;justify-content:center;position:fixed;left:0}.DigitTimer .container div[data-digit][data-v-9ff5a9e2]{display:block;height:60vh;width:8vw;top:20vh;display:flex}.DigitTimer .container div[data-digit][data-digit=min1][data-v-9ff5a9e2]{left:2vw}.DigitTimer .container div[data-digit][data-digit=min2][data-v-9ff5a9e2]{left:24vw}.DigitTimer .container div[data-digit][data-digit=colon][data-v-9ff5a9e2]{left:46vw}.DigitTimer .container div[data-digit][data-digit=sec1][data-v-9ff5a9e2]{left:56vw}.DigitTimer .container div[data-digit][data-digit=sec2][data-v-9ff5a9e2]{left:78vw}.DigitTimer .container div[data-digit].digit[data-v-9ff5a9e2]{width:20vw}.DigitTimer .container.up[data-v-9ff5a9e2],.DigitTimer .container.up div[data-digit][data-v-9ff5a9e2]{top:-10vh}.DigitTimer .container.down[data-v-9ff5a9e2],.DigitTimer .container.down div[data-digit][data-v-9ff5a9e2]{top:50vh}.DigitTimer .container.down div[data-digit][data-v-9ff5a9e2],.DigitTimer .container.up div[data-digit][data-v-9ff5a9e2]{opacity:0}.DigitTimer .container.down div[data-digit].digit[data-v-9ff5a9e2],.DigitTimer .container.up div[data-digit].digit[data-v-9ff5a9e2]{cursor:pointer;line-height:100vh;display:inline-block}.DigitTimer .container div[data-digit=colon][data-v-9ff5a9e2]{margin-top:-5vh}@font-face{font-family:ChivoMono-ExtraBold;src:url("+n+') format("truetype")}',"",{version:3,sources:["/app/src/components/DigitTimer/DigitTimer.less?vue&type=style&index=0&id=9ff5a9e2&lang=less&scoped=true&","/app/src/components/DigitTimer/DigitTimer.less"],names:[],mappings:"AAAA,6BAME,oBAAA,CACA,gCAAA,CAuBA,WAAA,CACA,YAAA,CAEA,YAAA,CACA,kBAAA,CACA,sBC3BF,CDEE,mCACE,oBCAJ,CDGE,8CACE,cCDJ,CDIE,iCACE,oBAAA,CACA,gCCFJ,CDKE,8EAEE,uBAAA,CACA,gCCHJ,CDvBA,wCAoEI,+BAAA,CAEA,WAAA,CACA,YAAA,CAGA,YAAA,CAKA,KAAA,CAoDA,cAAA,CACA,gBChGJ,CDpCA,gGA2EI,kBAAA,CACA,sBAAA,CAEA,cAAA,CAEA,MCjCJ,CD/CA,wDAmFM,aAAA,CACA,WAAA,CACA,SAAA,CAEA,QAAA,CAIA,YC5CN,CDmDM,yEACE,QCjDR,CDmDM,yEACE,SCjDR,CDmDM,0EACE,SCjDR,CDmDM,yEACE,SCjDR,CDmDM,yEACE,SCjDR,CDqDM,8DACE,UCnDR,CDuDI,sGAEE,SCrDN,CDwDI,0GAEE,QCtDN,CD6DI,wHAGI,SC5DR,CD8DQ,oIACE,cAAA,CACA,iBAAA,CACA,oBC3DV,CDnFA,8DA2JM,eCrEN,CD8EA,WACE,+BAAA,CACA,oDC5EF",file:"DigitTimer.less?vue&type=style&index=0&id=9ff5a9e2&lang=less&scoped=true&",sourcesContent:['.DigitTimer {\n\n  \n\n  // border: 1px solid red;\n\n  color: white !important;\n  transition: color 0.5s ease-in-out;\n\n  // &.config,\n  &.pause {\n    color: #ccc !important;\n  }\n\n  &.pause .container {\n    cursor: pointer;\n  }\n\n  &.lv1 {\n    color: yellow !important;\n    transition: color 0.1s ease-in-out;\n  }\n\n  &.lv2,\n  &.final-countdown {\n    color: lightcoral !important;\n    transition: color 0.1s ease-in-out;\n  }\n\n\n  width: 100vw;\n  height: 100vh;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  // background-image: url(./01_00.svg);\n  // background-position: center;\n  // background-repeat: no-repeat;\n  // background-size: cover;\n\n  // svg {\n  //   height: 100vh;\n  //   width: auto;\n  //   max-width: 100vw;\n  //   max-height: 100vh;\n\n  // }\n\n  // .digit {\n\n  //   width: 100vw;\n  //   height: 100vh;\n\n  //   display: flex;\n  //   align-items: center;\n  //   justify-content: center;\n\n  //   div {\n  //     font-size: 100vh;\n  //   }\n  // }\n  // ::v-deep h1 {\n  //   font-size: default;\n  // }\n\n  .container {\n    font-family: \'ChivoMono-ExtraBold\';\n\n    width: 100vw;\n    height: 100vh;\n    // background-color: red;\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    position: fixed;\n    top: 0;\n    left: 0;\n\n    div[data-digit] {\n      display: block;\n      height: 60vh;\n      width: 8vw;\n      position: fixed;\n      top: 20vh;\n      left: 0;\n      // border: 1px solid red;\n\n      display: flex;\n      align-items: center;\n      justify-content: center;\n\n      \n\n\n      &[data-digit="min1"] {\n        left: 2vw;\n      }\n      &[data-digit="min2"] {\n        left: 24vw;\n      }\n      &[data-digit="colon"] {\n        left: 46vw;\n      }\n      &[data-digit="sec1"] {\n        left: 56vw;\n      }\n      &[data-digit="sec2"] {\n        left: 78vw;\n      }\n      // &[]\n\n      &.digit {\n        width: 20vw;\n      }\n    }\n\n    &.up,\n    &.up div[data-digit] {\n      top: -10vh;\n      // background-color: rgba(128, 0, 0, 0.5);\n    }\n    &.down,\n    &.down div[data-digit] {\n      top: 50vh;\n      // background-color: rgba(0, 128, 0, 0.5);\n    }\n\n    cursor: default;\n    user-select: none;\n\n    &.up,\n    &.down {\n      div[data-digit] {\n        opacity: 0;\n\n        &.digit {\n          cursor: pointer;\n          line-height: 100vh;\n          display: inline-block;\n          \n          \n        }\n      }\n\n      // display: none;\n    }\n    \n    div[data-digit="colon"] {\n      // margin-bottom: 20%;\n      // display: block;\n      // position: relative;\n      margin-top: -5vh;\n    }\n\n  }\n\n  \n  \n}\n\n@font-face {\n  font-family: \'ChivoMono-ExtraBold\';\n  src: url(\'./../fonts/ChivoMono-ExtraBold.ttf\') format(\'truetype\');\n}\n','.DigitTimer {\n  color: white !important;\n  transition: color 0.5s ease-in-out;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.DigitTimer.pause {\n  color: #ccc !important;\n}\n.DigitTimer.pause .container {\n  cursor: pointer;\n}\n.DigitTimer.lv1 {\n  color: yellow !important;\n  transition: color 0.1s ease-in-out;\n}\n.DigitTimer.lv2,\n.DigitTimer.final-countdown {\n  color: lightcoral !important;\n  transition: color 0.1s ease-in-out;\n}\n.DigitTimer .container {\n  font-family: \'ChivoMono-ExtraBold\';\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: fixed;\n  top: 0;\n  left: 0;\n  cursor: default;\n  user-select: none;\n}\n.DigitTimer .container div[data-digit] {\n  display: block;\n  height: 60vh;\n  width: 8vw;\n  position: fixed;\n  top: 20vh;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.DigitTimer .container div[data-digit][data-digit="min1"] {\n  left: 2vw;\n}\n.DigitTimer .container div[data-digit][data-digit="min2"] {\n  left: 24vw;\n}\n.DigitTimer .container div[data-digit][data-digit="colon"] {\n  left: 46vw;\n}\n.DigitTimer .container div[data-digit][data-digit="sec1"] {\n  left: 56vw;\n}\n.DigitTimer .container div[data-digit][data-digit="sec2"] {\n  left: 78vw;\n}\n.DigitTimer .container div[data-digit].digit {\n  width: 20vw;\n}\n.DigitTimer .container.up,\n.DigitTimer .container.up div[data-digit] {\n  top: -10vh;\n}\n.DigitTimer .container.down,\n.DigitTimer .container.down div[data-digit] {\n  top: 50vh;\n}\n.DigitTimer .container.up div[data-digit],\n.DigitTimer .container.down div[data-digit] {\n  opacity: 0;\n}\n.DigitTimer .container.up div[data-digit].digit,\n.DigitTimer .container.down div[data-digit].digit {\n  cursor: pointer;\n  line-height: 100vh;\n  display: inline-block;\n}\n.DigitTimer .container div[data-digit="colon"] {\n  margin-top: -5vh;\n}\n@font-face {\n  font-family: \'ChivoMono-ExtraBold\';\n  src: url(\'../fonts/ChivoMono-ExtraBold.ttf\') format(\'truetype\');\n}\n']}])},94:function(t,i,n){"use strict";var e=n(64);i.default=n.n(e).a}}]);
//# sourceMappingURL=DigitTimer.js.map