var IScroll=function(t,i,e){function s(t,e){for(var s in this.wrapper="string"==typeof t?i.querySelector(t):t,this.scroller=this.wrapper.children[0],this.scrollerStyle=this.scroller.style,this.options={mouseWheelSpeed:20,startX:0,startY:0,scrollY:!0,directionLockThreshold:5,momentum:!0,bounce:!0,bounceTime:600,bounceEasing:"",preventDefault:!0,preventDefaultException:{tagName:/^(INPUT|TEXTAREA|BUTTON|SELECT)$/},HWCompositing:!0,useTransition:!0,useTransform:!0},e)this.options[s]=e[s];this.translateZ=this.options.HWCompositing&&n.hasPerspective?" translateZ(0)":"",this.options.useTransition=n.hasTransition&&this.options.useTransition,this.options.useTransform=n.hasTransform&&this.options.useTransform,this.options.eventPassthrough=!0===this.options.eventPassthrough?"vertical":this.options.eventPassthrough,this.options.preventDefault=!this.options.eventPassthrough&&this.options.preventDefault,this.options.scrollY="vertical"!=this.options.eventPassthrough&&this.options.scrollY,this.options.scrollX="horizontal"!=this.options.eventPassthrough&&this.options.scrollX,this.options.freeScroll=this.options.freeScroll&&!this.options.eventPassthrough,this.options.directionLockThreshold=this.options.eventPassthrough?0:this.options.directionLockThreshold,this.options.bounceEasing="string"==typeof this.options.bounceEasing?n.ease[this.options.bounceEasing]||n.ease.circular:this.options.bounceEasing,this.options.resizePolling=void 0===this.options.resizePolling?60:this.options.resizePolling,!0===this.options.tap&&(this.options.tap="tap"),this.options.invertWheelDirection=this.options.invertWheelDirection?-1:1,this.x=0,this.y=0,this.directionX=0,this.directionY=0,this._events={},this._init(),this.refresh(),this.scrollTo(this.options.startX,this.options.startY),this.enable()}var o=t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.oRequestAnimationFrame||t.msRequestAnimationFrame||function(i){t.setTimeout(i,1e3/60)},n=function(){function s(t){return!1!==r&&(""===r?t:r+t.charAt(0).toUpperCase()+t.substr(1))}var o={},n=i.createElement("div").style,r=function(){for(var t=["t","webkitT","MozT","msT","OT"],i=0,e=t.length;e>i;i++)if(t[i]+"ransform"in n)return t[i].substr(0,t[i].length-1);return!1}();o.getTime=Date.now||function(){return(new Date).getTime()},o.extend=function(t,i){for(var e in i)t[e]=i[e]},o.addEvent=function(t,i,e,s){t.addEventListener(i,e,!!s)},o.removeEvent=function(t,i,e,s){t.removeEventListener(i,e,!!s)},o.momentum=function(t,i,s,o,n){var r,h,a=t-i,l=e.abs(a)/s,c=6e-4;return h=l/c,o>(r=t+l*l/(2*c)*(0>a?-1:1))?(r=n?o-n/2.5*(l/8):o,h=(a=e.abs(r-t))/l):r>0&&(r=n?n/2.5*(l/8):0,h=(a=e.abs(t)+r)/l),{destination:e.round(r),duration:h}};var h=s("transform");return o.extend(o,{hasTransform:!1!==h,hasPerspective:s("perspective")in n,hasTouch:"ontouchstart"in t,hasPointer:navigator.msPointerEnabled,hasTransition:s("transition")in n}),o.isAndroidBrowser=/Android/.test(t.navigator.appVersion)&&/Version\/\d/.test(t.navigator.appVersion),o.extend(o.style={},{transform:h,transitionTimingFunction:s("transitionTimingFunction"),transitionDuration:s("transitionDuration"),transformOrigin:s("transformOrigin")}),o.hasClass=function(t,i){return new RegExp("(^|\\s)"+i+"(\\s|$)").test(t.className)},o.addClass=function(t,i){if(!o.hasClass(t,i)){var e=t.className.split(" ");e.push(i),t.className=e.join(" ")}},o.removeClass=function(t,i){if(o.hasClass(t,i)){var e=new RegExp("(^|\\s)"+i+"(\\s|$)","g");t.className=t.className.replace(e," ")}},o.offset=function(t){for(var i=-t.offsetLeft,e=-t.offsetTop;t=t.offsetParent;)i-=t.offsetLeft,e-=t.offsetTop;return{left:i,top:e}},o.preventDefaultException=function(t,i){for(var e in i)if(i[e].test(t[e]))return!0;return!1},o.extend(o.eventType={},{touchstart:1,touchmove:1,touchend:1,mousedown:2,mousemove:2,mouseup:2,MSPointerDown:3,MSPointerMove:3,MSPointerUp:3}),o.extend(o.ease={},{quadratic:{style:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",fn:function(t){return t*(2-t)}},circular:{style:"cubic-bezier(0.1, 0.57, 0.1, 1)",fn:function(t){return e.sqrt(1- --t*t)}},back:{style:"cubic-bezier(0.175, 0.885, 0.32, 1.275)",fn:function(t){return(t-=1)*t*(5*t+4)+1}},bounce:{style:"",fn:function(t){return(t/=1)<1/2.75?7.5625*t*t:2/2.75>t?7.5625*(t-=1.5/2.75)*t+.75:2.5/2.75>t?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375}},elastic:{style:"",fn:function(t){return 0===t?0:1==t?1:.4*e.pow(2,-10*t)*e.sin(2*(t-.055)*e.PI/.22)+1}}}),o.tap=function(t,e){var s=i.createEvent("Event");s.initEvent(e,!0,!0),s.pageX=t.pageX,s.pageY=t.pageY,t.target.dispatchEvent(s)},o.click=function(t){var e,s=t.target;"SELECT"!=s.tagName&&"INPUT"!=s.tagName&&"TEXTAREA"!=s.tagName&&((e=i.createEvent("MouseEvents")).initMouseEvent("click",!0,!0,t.view,1,s.screenX,s.screenY,s.clientX,s.clientY,t.ctrlKey,t.altKey,t.shiftKey,t.metaKey,0,null),e._constructed=!0,s.dispatchEvent(e))},o}();return s.prototype={version:"5.0.6",_init:function(){this._initEvents(),this.options.mouseWheel&&this._initWheel()},destroy:function(){this._initEvents(!0),this._execEvent("destroy")},_transitionEnd:function(t){t.target==this.scroller&&(this._transitionTime(0),this.isInTransition=0,this.resetPosition(this.options.bounceTime)||this._execEvent("scrollEnd"))},_start:function(i){if((1==n.eventType[i.type]||0===i.button)&&!(!this.enabled||this.initiated&&n.eventType[i.type]!==this.initiated||"outerLibrary"===this.wrapper.id&&"IMG"===i.target.tagName)){!this.options.preventDefault||n.isAndroidBrowser||n.preventDefaultException(i.target,this.options.preventDefaultException)||i.preventDefault(),n.addEvent(this.options.bindToWrapper?this.wrapper:t,"mousemove",this),n.addEvent(this.options.bindToWrapper?this.wrapper:t,"touchmove",this),n.addEvent(this.options.bindToWrapper?this.wrapper:t,"MSPointerMove",this);var s,o=i.touches?i.touches[0]:i;this.initiated=n.eventType[i.type],this.moved=!1,this.distX=0,this.distY=0,this.directionX=0,this.directionY=0,this.directionLocked=0,this._transitionTime(),this.isAnimating=!1,this.startTime=n.getTime(),this.options.useTransition&&this.isInTransition&&(s=this.getComputedPosition(),this._translate(e.round(s.x),e.round(s.y)),this._execEvent("scrollEnd"),this.isInTransition=!1),this.startX=this.x,this.startY=this.y,this.absStartX=this.x,this.absStartY=this.y,this.pointX=o.pageX,this.pointY=o.pageY,this._execEvent("beforeScrollStart")}},_move:function(t){if(this.enabled&&n.eventType[t.type]===this.initiated){this.options.preventDefault&&t.preventDefault();var i,s,o,r,h=t.touches?t.touches[0]:t,a=h.pageX-this.pointX,l=h.pageY-this.pointY,c=n.getTime();if(this.pointX=h.pageX,this.pointY=h.pageY,this.distX+=a,this.distY+=l,o=e.abs(this.distX),r=e.abs(this.distY),!(c-this.endTime>300&&10>o&&10>r)){if(this.directionLocked||this.options.freeScroll||(this.directionLocked=o>r+this.options.directionLockThreshold?"h":r>=o+this.options.directionLockThreshold?"v":"n"),"h"==this.directionLocked){if("vertical"==this.options.eventPassthrough)t.preventDefault();else if("horizontal"==this.options.eventPassthrough)return void(this.initiated=!1);l=0}else if("v"==this.directionLocked){if("horizontal"==this.options.eventPassthrough)t.preventDefault();else if("vertical"==this.options.eventPassthrough)return void(this.initiated=!1);a=0}a=this.hasHorizontalScroll?a:0,l=this.hasVerticalScroll?l:0,i=this.x+a,s=this.y+l,(i>0||i<this.maxScrollX)&&(i=this.options.bounce?this.x+a/3:i>0?0:this.maxScrollX),(s>0||s<this.maxScrollY)&&(s=this.options.bounce?this.y+l/3:s>0?0:this.maxScrollY),this.directionX=a>0?-1:0>a?1:0,this.directionY=l>0?-1:0>l?1:0,this.moved||this._execEvent("scrollStart"),this.moved=!0,this._translate(i,s),c-this.startTime>300&&(this.startTime=c,this.startX=this.x,this.startY=this.y)}}},_end:function(i){if(this.enabled&&n.eventType[i.type]===this.initiated){this.options.preventDefault&&!n.preventDefaultException(i.target,this.options.preventDefaultException)&&i.preventDefault(),n.removeEvent(this.options.bindToWrapper?this.wrapper:t,"mousemove",this),n.removeEvent(this.options.bindToWrapper?this.wrapper:t,"touchmove",this),n.removeEvent(this.options.bindToWrapper?this.wrapper:t,"MSPointerMove",this);var s,o,r=(i.changedTouches&&i.changedTouches[0],n.getTime()-this.startTime),h=e.round(this.x),a=e.round(this.y),l=e.abs(h-this.startX),c=e.abs(a-this.startY),p=0,u="";if(this.scrollTo(h,a),this.isInTransition=0,this.initiated=0,this.endTime=n.getTime(),!this.resetPosition(this.options.bounceTime))return this.moved?this._events.flick&&200>r&&100>l&&100>c?void this._execEvent("flick"):(this.options.momentum&&300>r&&(s=this.hasHorizontalScroll?n.momentum(this.x,this.startX,r,this.maxScrollX,this.options.bounce?this.wrapperWidth:0):{destination:h,duration:0},o=this.hasVerticalScroll?n.momentum(this.y,this.startY,r,this.maxScrollY,this.options.bounce?this.wrapperHeight:0):{destination:a,duration:0},h=s.destination,a=o.destination,p=e.max(s.duration,o.duration),this.isInTransition=1),h!=this.x||a!=this.y?((h>0||h<this.maxScrollX||a>0||a<this.maxScrollY)&&(u=n.ease.quadratic),void this.scrollTo(h,a,p,u)):void this._execEvent("scrollEnd")):(this.options.tap&&n.tap(i,this.options.tap),void(this.options.click&&n.click(i)))}},_resize:function(){var t=this;clearTimeout(this.resizeTimeout),this.resizeTimeout=setTimeout((function(){t.refresh()}),this.options.resizePolling)},resetPosition:function(t){var i=this.x,e=this.y;return t=t||0,!this.hasHorizontalScroll||this.x>0?i=0:this.x<this.maxScrollX&&(i=this.maxScrollX),!this.hasVerticalScroll||this.y>0?e=0:this.y<this.maxScrollY&&(e=this.maxScrollY),(i!=this.x||e!=this.y)&&(this.scrollTo(i,e,t,this.options.bounceEasing),!0)},disable:function(){this.enabled=!1},enable:function(){this.enabled=!0},refresh:function(t,i){arguments.length&&0!==this.wrapperHeight?this.scrollerHeight=i:(this.wrapper.offsetHeight,this.wrapperWidth=this.wrapper.clientWidth,this.wrapperHeight=this.wrapper.clientHeight,this.scrollerWidth=this.scroller.offsetWidth,this.scrollerHeight=this.scroller.offsetHeight),this.maxScrollX=this.wrapperWidth-this.scrollerWidth,this.maxScrollY=this.wrapperHeight-this.scrollerHeight,this.hasHorizontalScroll=this.options.scrollX&&this.maxScrollX<0,this.hasVerticalScroll=this.options.scrollY&&this.maxScrollY<0,this.hasHorizontalScroll||(this.maxScrollX=0,this.scrollerWidth=this.wrapperWidth),this.hasVerticalScroll||(this.maxScrollY=0,this.scrollerHeight=this.wrapperHeight),this.endTime=0,this.directionX=0,this.directionY=0,arguments.length||(this.wrapperOffset=n.offset(this.wrapper)),this._execEvent("refresh"),this.resetPosition()},on:function(t,i){this._events[t]||(this._events[t]=[]),this._events[t].push(i)},_execEvent:function(t){if(this._events[t]){var i=0,e=this._events[t].length;if(e)for(;e>i;i++)this._events[t][i].call(this)}},scrollBy:function(t,i,e,s){t=this.x+t,i=this.y+i,e=e||0,this.scrollTo(t,i,e,s)},scrollTo:function(t,i,e,s){s=s||n.ease.circular,!e||this.options.useTransition&&s.style?(this._transitionTimingFunction(s.style),this._transitionTime(e),this._translate(t,i)):this._animate(t,i,e,s.fn)},scrollToElement:function(t,i,s,o,r){if(t=t.nodeType?t:this.scroller.querySelector(t)){var h=n.offset(t);h.left-=this.wrapperOffset.left,h.top-=this.wrapperOffset.top,!0===s&&(s=e.round(t.offsetWidth/2-this.wrapper.offsetWidth/2)),!0===o&&(o=e.round(t.offsetHeight/2-this.wrapper.offsetHeight/2)),h.left-=s||0,h.top-=o||0,h.left=h.left>0?0:h.left<this.maxScrollX?this.maxScrollX:h.left,h.top=h.top>0?0:h.top<this.maxScrollY?this.maxScrollY:h.top,i=null==i||"auto"===i?e.max(e.abs(this.x-h.left),e.abs(this.y-h.top)):i,this.scrollTo(h.left,h.top,i,r)}},_transitionTime:function(t){t=t||0,this.scrollerStyle[n.style.transitionDuration]=t+"ms"},_transitionTimingFunction:function(t){this.scrollerStyle[n.style.transitionTimingFunction]=t},_translate:function(t,i){this.options.useTransform?this.scrollerStyle[n.style.transform]="translate("+t+"px,"+i+"px)"+this.translateZ:(t=e.round(t),i=e.round(i),this.scrollerStyle.left=t+"px",this.scrollerStyle.top=i+"px"),this.x=t,this.y=i},_initEvents:function(i){var e=i?n.removeEvent:n.addEvent,s=this.options.bindToWrapper?this.wrapper:t;e(t,"orientationchange",this),e(t,"resize",this),this.options.click&&e(this.wrapper,"click",this,!0),this.options.disableMouse||(e(this.wrapper,"mousedown",this),e(s,"mousecancel",this),e(s,"mouseup",this)),n.hasPointer&&!this.options.disablePointer&&(e(this.wrapper,"MSPointerDown",this),e(s,"MSPointerCancel",this),e(s,"MSPointerUp",this)),n.hasTouch&&!this.options.disableTouch&&(e(this.wrapper,"touchstart",this),e(s,"touchcancel",this),e(s,"touchend",this)),e(this.scroller,"transitionend",this),e(this.scroller,"webkitTransitionEnd",this),e(this.scroller,"oTransitionEnd",this),e(this.scroller,"MSTransitionEnd",this)},getComputedPosition:function(){var i,e,s=t.getComputedStyle(this.scroller,null);return this.options.useTransform?(i=+((s=s[n.style.transform].split(")")[0].split(", "))[12]||s[4]),e=+(s[13]||s[5])):(i=+s.left.replace(/[^-\d]/g,""),e=+s.top.replace(/[^-\d]/g,"")),{x:i,y:e}},_initWheel:function(){n.addEvent(this.wrapper,"wheel",this),n.addEvent(this.wrapper,"mousewheel",this),n.addEvent(this.wrapper,"DOMMouseScroll",this),this.on("destroy",(function(){n.removeEvent(this.wrapper,"wheel",this),n.removeEvent(this.wrapper,"mousewheel",this),n.removeEvent(this.wrapper,"DOMMouseScroll",this)}))},_wheel:function(t){if(this.enabled){t.preventDefault(),t.stopPropagation();var i,s,o,n,r=this;if(void 0===this.wheelTimeout&&r._execEvent("scrollStart"),clearTimeout(this.wheelTimeout),this.wheelTimeout=setTimeout((function(){r._execEvent("scrollEnd"),r.wheelTimeout=void 0}),100),"deltaX"in t)i=-t.deltaX,s=-t.deltaY;else if("wheelDeltaX"in t)i=t.wheelDeltaX/120*this.options.mouseWheelSpeed,s=t.wheelDeltaY/120*this.options.mouseWheelSpeed;else if("wheelDelta"in t)i=s=t.wheelDelta/120*this.options.mouseWheelSpeed;else{if(!("detail"in t))return;i=s=-t.detail/3*this.options.mouseWheelSpeed}if(i*=this.options.invertWheelDirection,s*=this.options.invertWheelDirection,this.hasVerticalScroll||(i=s,s=0),this.options.snap)return o=this.currentPage.pageX,n=this.currentPage.pageY,i>0?o--:0>i&&o++,s>0?n--:0>s&&n++,void this.goToPage(o,n);o=this.x+e.round(this.hasHorizontalScroll?i:0),n=this.y+e.round(this.hasVerticalScroll?s:0),o>0?o=0:o<this.maxScrollX&&(o=this.maxScrollX),n>0?n=0:n<this.maxScrollY&&(n=this.maxScrollY),this.scrollTo(o,n,0)}},_animate:function(t,i,e,s){var r=this,h=this.x,a=this.y,l=n.getTime(),c=l+e;this.isAnimating=!0,function p(){var u,d,f,m=n.getTime();return m>=c?(r.isAnimating=!1,r._translate(t,i),void(r.resetPosition(r.options.bounceTime)||r._execEvent("scrollEnd"))):(f=s(m=(m-l)/e),u=(t-h)*f+h,d=(i-a)*f+a,r._translate(u,d),void(r.isAnimating&&o(p)))}()},handleEvent:function(t){switch(t.type){case"touchstart":case"MSPointerDown":case"mousedown":this._start(t);break;case"touchmove":case"MSPointerMove":case"mousemove":this._move(t);break;case"touchend":case"MSPointerUp":case"mouseup":case"touchcancel":case"MSPointerCancel":case"mousecancel":this._end(t);break;case"orientationchange":case"resize":this._resize();break;case"transitionend":case"webkitTransitionEnd":case"oTransitionEnd":case"MSTransitionEnd":this._transitionEnd(t);break;case"wheel":case"DOMMouseScroll":case"mousewheel":this._wheel(t);break;case"keydown":this._key(t);break;case"click":t._constructed||(t.preventDefault(),t.stopPropagation())}}},s.ease=n.ease,s}(window,document,Math);"undefined"!=typeof $&&$(document).trigger("IScrollLoaded");