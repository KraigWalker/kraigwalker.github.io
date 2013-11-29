window.matchMedia=window.matchMedia||function(doc,undefined){"use strict";var bool,docElem=doc.documentElement,refNode=docElem.firstElementChild||docElem.firstChild,fakeBody=doc.createElement("body"),div=doc.createElement("div");div.id="mq-test-1";div.style.cssText="position:absolute;top:-100em";fakeBody.style.background="none";fakeBody.appendChild(div);return function(q){div.innerHTML='&shy;<style media="'+q+'"> #mq-test-1 { width: 42px; }</style>';docElem.insertBefore(fakeBody,refNode);bool=div.offsetWidth===42;docElem.removeChild(fakeBody);return{matches:bool,media:q}}}(document);$(document).ready(function(){$(".entry-readingtime").text(function(index,value){return Math.round(parseFloat(value))})});(function(win){"use strict";function callMedia(){applyMedia(!0)}var respond={};win.respond=respond;respond.update=function(){};respond.mediaQueriesSupported=win.matchMedia&&win.matchMedia("only all").matches;if(respond.mediaQueriesSupported)return;var doc=win.document,docElem=doc.documentElement,mediastyles=[],rules=[],appendedEls=[],parsedSheets={},resizeThrottle=30,head=doc.getElementsByTagName("head")[0]||docElem,base=doc.getElementsByTagName("base")[0],links=head.getElementsByTagName("link"),requestQueue=[],ripCSS=function(){for(var i=0;i<links.length;i++){var sheet=links[i],href=sheet.href,media=sheet.media,isCSS=sheet.rel&&sheet.rel.toLowerCase()==="stylesheet";if(!!href&&isCSS&&!parsedSheets[href])if(sheet.styleSheet&&sheet.styleSheet.rawCssText){translate(sheet.styleSheet.rawCssText,href,media);parsedSheets[href]=!0}else(!/^([a-zA-Z:]*\/\/)/.test(href)&&!base||href.replace(RegExp.$1,"").split("/")[0]===win.location.host)&&requestQueue.push({href:href,media:media})}makeRequests()},makeRequests=function(){if(requestQueue.length){var thisRequest=requestQueue.shift();ajax(thisRequest.href,function(styles){translate(styles,thisRequest.href,thisRequest.media);parsedSheets[thisRequest.href]=!0;win.setTimeout(function(){makeRequests()},0)})}},translate=function(styles,href,media){var qs=styles.match(/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi),ql=qs&&qs.length||0;href=href.substring(0,href.lastIndexOf("/"));var repUrls=function(css){return css.replace(/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,"$1"+href+"$2$3")},useMedia=!ql&&media;href.length&&(href+="/");useMedia&&(ql=1);for(var i=0;i<ql;i++){var fullq,thisq,eachq,eql;if(useMedia){fullq=media;rules.push(repUrls(styles))}else{fullq=qs[i].match(/@media *([^\{]+)\{([\S\s]+?)$/)&&RegExp.$1;rules.push(RegExp.$2&&repUrls(RegExp.$2))}eachq=fullq.split(",");eql=eachq.length;for(var j=0;j<eql;j++){thisq=eachq[j];mediastyles.push({media:thisq.split("(")[0].match(/(only\s+)?([a-zA-Z]+)\s?/)&&RegExp.$2||"all",rules:rules.length-1,hasquery:thisq.indexOf("(")>-1,minw:thisq.match(/\(\s*min\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/)&&parseFloat(RegExp.$1)+(RegExp.$2||""),maxw:thisq.match(/\(\s*max\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/)&&parseFloat(RegExp.$1)+(RegExp.$2||"")})}}applyMedia()},lastCall,resizeDefer,getEmValue=function(){var ret,div=doc.createElement("div"),body=doc.body,fakeUsed=!1;div.style.cssText="position:absolute;font-size:1em;width:1em";if(!body){body=fakeUsed=doc.createElement("body");body.style.background="none"}body.appendChild(div);docElem.insertBefore(body,docElem.firstChild);ret=div.offsetWidth;fakeUsed?docElem.removeChild(body):body.removeChild(div);ret=eminpx=parseFloat(ret);return ret},eminpx,applyMedia=function(fromResize){var name="clientWidth",docElemProp=docElem[name],currWidth=doc.compatMode==="CSS1Compat"&&docElemProp||doc.body[name]||docElemProp,styleBlocks={},lastLink=links[links.length-1],now=(new Date).getTime();if(fromResize&&lastCall&&now-lastCall<resizeThrottle){win.clearTimeout(resizeDefer);resizeDefer=win.setTimeout(applyMedia,resizeThrottle);return}lastCall=now;for(var i in mediastyles)if(mediastyles.hasOwnProperty(i)){var thisstyle=mediastyles[i],min=thisstyle.minw,max=thisstyle.maxw,minnull=min===null,maxnull=max===null,em="em";!min||(min=parseFloat(min)*(min.indexOf(em)>-1?eminpx||getEmValue():1));!max||(max=parseFloat(max)*(max.indexOf(em)>-1?eminpx||getEmValue():1));if(!thisstyle.hasquery||(!minnull||!maxnull)&&(minnull||currWidth>=min)&&(maxnull||currWidth<=max)){styleBlocks[thisstyle.media]||(styleBlocks[thisstyle.media]=[]);styleBlocks[thisstyle.media].push(rules[thisstyle.rules])}}for(var j in appendedEls)appendedEls.hasOwnProperty(j)&&appendedEls[j]&&appendedEls[j].parentNode===head&&head.removeChild(appendedEls[j]);for(var k in styleBlocks)if(styleBlocks.hasOwnProperty(k)){var ss=doc.createElement("style"),css=styleBlocks[k].join("\n");ss.type="text/css";ss.media=k;head.insertBefore(ss,lastLink.nextSibling);ss.styleSheet?ss.styleSheet.cssText=css:ss.appendChild(doc.createTextNode(css));appendedEls.push(ss)}},ajax=function(url,callback){var req=xmlHttp();if(!req)return;req.open("GET",url,!0);req.onreadystatechange=function(){if(req.readyState!==4||req.status!==200&&req.status!==304)return;callback(req.responseText)};if(req.readyState===4)return;req.send(null)},xmlHttp=function(){var xmlhttpmethod=!1;try{xmlhttpmethod=new win.XMLHttpRequest}catch(e){xmlhttpmethod=new win.ActiveXObject("Microsoft.XMLHTTP")}return function(){return xmlhttpmethod}}();ripCSS();respond.update=ripCSS;win.addEventListener?win.addEventListener("resize",callMedia,!1):win.attachEvent&&win.attachEvent("onresize",callMedia)})(this);var responsiveNav=function(window,document){function rn(el,options){_instance||(_instance=new ResponsiveNav(el,options));return _instance}var computed=!!window.getComputedStyle;window.getComputedStyle||(window.getComputedStyle=function(el){this.el=el;this.getPropertyValue=function(prop){var re=/(\-([a-z]){1})/g;prop==="float"&&(prop="styleFloat");re.test(prop)&&(prop=prop.replace(re,function(){return arguments[2].toUpperCase()}));return el.currentStyle[prop]?el.currentStyle[prop]:null};return this});var nav,opts,navToggle,docEl=document.documentElement,head=document.getElementsByTagName("head")[0],styleElement=document.createElement("style"),navOpen=!1,addEvent=function(el,evt,fn,bubble){if("addEventListener"in el)try{el.addEventListener(evt,fn,bubble)}catch(e){if(typeof fn!="object"||!fn.handleEvent)throw e;el.addEventListener(evt,function(e){fn.handleEvent.call(fn,e)},bubble)}else"attachEvent"in el&&(typeof fn=="object"&&fn.handleEvent?el.attachEvent("on"+evt,function(){fn.handleEvent.call(fn)}):el.attachEvent("on"+evt,fn))},removeEvent=function(el,evt,fn,bubble){if("removeEventListener"in el)try{el.removeEventListener(evt,fn,bubble)}catch(e){if(typeof fn!="object"||!fn.handleEvent)throw e;el.removeEventListener(evt,function(e){fn.handleEvent.call(fn,e)},bubble)}else"detachEvent"in el&&(typeof fn=="object"&&fn.handleEvent?el.detachEvent("on"+evt,function(){fn.handleEvent.call(fn)}):el.detachEvent("on"+evt,fn))},getFirstChild=function(e){var firstChild=e.firstChild;while(firstChild!==null&&firstChild.nodeType!==1)firstChild=firstChild.nextSibling;return firstChild},setAttributes=function(el,attrs){for(var key in attrs)el.setAttribute(key,attrs[key])},addClass=function(el,cls){el.className+=" "+cls;el.className=el.className.replace(/(^\s*)|(\s*$)/g,"")},removeClass=function(el,cls){var reg=new RegExp("(\\s|^)"+cls+"(\\s|$)");el.className=el.className.replace(reg," ").replace(/(^\s*)|(\s*$)/g,"")},ResponsiveNav=function(el,options){var i;this.options={animate:!0,transition:400,label:"Menu",insert:"after",customToggle:"",openPos:"relative",jsClass:"js",init:function(){},open:function(){},close:function(){}};for(i in options)this.options[i]=options[i];addClass(docEl,this.options.jsClass);this.wrapperEl=el.replace("#","");if(!document.getElementById(this.wrapperEl))throw new Error("The nav element you are trying to select doesn't exist");this.wrapper=document.getElementById(this.wrapperEl);this.wrapper.inner=getFirstChild(this.wrapper);opts=this.options;nav=this.wrapper;this._init(this)};ResponsiveNav.prototype={destroy:function(){this._removeStyles();removeClass(nav,"closed");removeClass(nav,"opened");nav.removeAttribute("style");nav.removeAttribute("aria-hidden");nav=null;_instance=null;removeEvent(window,"load",this,!1);removeEvent(window,"resize",this,!1);removeEvent(navToggle,"mousedown",this,!1);removeEvent(navToggle,"touchstart",this,!1);removeEvent(navToggle,"touchend",this,!1);removeEvent(navToggle,"keyup",this,!1);removeEvent(navToggle,"click",this,!1);opts.customToggle?navToggle.removeAttribute("aria-hidden"):navToggle.parentNode.removeChild(navToggle)},toggle:function(){if(!navOpen){removeClass(nav,"closed");addClass(nav,"opened");nav.style.position=opts.openPos;setAttributes(nav,{"aria-hidden":"false"});navOpen=!0;opts.open()}else{removeClass(nav,"opened");addClass(nav,"closed");setAttributes(nav,{"aria-hidden":"true"});opts.animate?setTimeout(function(){nav.style.position="absolute"},opts.transition+10):nav.style.position="absolute";navOpen=!1;opts.close()}},handleEvent:function(e){var evt=e||window.event;switch(evt.type){case"mousedown":this._onmousedown(evt);break;case"touchstart":this._ontouchstart(evt);break;case"touchend":this._ontouchend(evt);break;case"keyup":this._onkeyup(evt);break;case"click":this._onclick(evt);break;case"load":this._transitions(evt);this._resize(evt);break;case"resize":this._resize(evt)}},_init:function(){addClass(nav,"closed");this._createToggle();addEvent(window,"load",this,!1);addEvent(window,"resize",this,!1);addEvent(navToggle,"mousedown",this,!1);addEvent(navToggle,"touchstart",this,!1);addEvent(navToggle,"touchend",this,!1);addEvent(navToggle,"keyup",this,!1);addEvent(navToggle,"click",this,!1)},_createStyles:function(){styleElement.parentNode||head.appendChild(styleElement)},_removeStyles:function(){styleElement.parentNode&&styleElement.parentNode.removeChild(styleElement)},_createToggle:function(){if(!opts.customToggle){var toggle=document.createElement("a");toggle.innerHTML=opts.label;setAttributes(toggle,{href:"#",id:"nav-toggle"});opts.insert==="after"?nav.parentNode.insertBefore(toggle,nav.nextSibling):nav.parentNode.insertBefore(toggle,nav);navToggle=document.getElementById("nav-toggle")}else{var toggleEl=opts.customToggle.replace("#","");if(!document.getElementById(toggleEl))throw new Error("The custom nav toggle you are trying to select doesn't exist");navToggle=document.getElementById(toggleEl)}},_preventDefault:function(e){if(e.preventDefault){e.preventDefault();e.stopPropagation()}else e.returnValue=!1},_onmousedown:function(e){var evt=e||window.event;if(evt.which!==3&&evt.button!==2){this._preventDefault(e);this.toggle(e)}},_ontouchstart:function(e){navToggle.onmousedown=null;this._preventDefault(e);this.toggle(e)},_ontouchend:function(){var that=this;nav.addEventListener("click",that._preventDefault,!0);setTimeout(function(){nav.removeEventListener("click",that._preventDefault,!0)},opts.transition)},_onkeyup:function(e){var evt=e||window.event;evt.keyCode===13&&this.toggle(e)},_onclick:function(e){this._preventDefault(e)},_transitions:function(){if(opts.animate){var objStyle=nav.style,transition="max-height "+opts.transition+"ms";objStyle.WebkitTransition=transition;objStyle.MozTransition=transition;objStyle.OTransition=transition;objStyle.transition=transition}},_calcHeight:function(){var savedHeight=nav.inner.offsetHeight,innerStyles="#"+this.wrapperEl+".opened{max-height:"+savedHeight+"px}";if(computed){styleElement.innerHTML=innerStyles;innerStyles=""}},_resize:function(){if(window.getComputedStyle(navToggle,null).getPropertyValue("display")!=="none"){setAttributes(navToggle,{"aria-hidden":"false"});if(nav.className.match(/(^|\s)closed(\s|$)/)){setAttributes(nav,{"aria-hidden":"true"});nav.style.position="absolute"}this._createStyles();this._calcHeight()}else{setAttributes(navToggle,{"aria-hidden":"true"});setAttributes(nav,{"aria-hidden":"false"});nav.style.position=opts.openPos;this._removeStyles()}opts.init()}};var _instance;return rn}(window,document);(function($){"use strict";$.fn.fitVids=function(options){var settings={customSelector:null},div=document.createElement("div"),ref=document.getElementsByTagName("base")[0]||document.getElementsByTagName("script")[0];div.className="fit-vids-style";div.innerHTML="&shy;<style>               .fluid-width-video-wrapper {                 width: 100%;                              position: relative;                       padding: 0;                            }                                                                                   .fluid-width-video-wrapper iframe,        .fluid-width-video-wrapper object,        .fluid-width-video-wrapper embed {           position: absolute;                       top: 0;                                   left: 0;                                  width: 100%;                              height: 100%;                          }                                       </style>";ref.parentNode.insertBefore(div,ref);options&&$.extend(settings,options);return this.each(function(){var selectors=["iframe[src*='player.vimeo.com']","iframe[src*='www.youtube.com']","iframe[src*='www.youtube-nocookie.com']","iframe[src*='www.kickstarter.com']","object","embed"];settings.customSelector&&selectors.push(settings.customSelector);var $allVideos=$(this).find(selectors.join(","));$allVideos.each(function(){var $this=$(this);if(this.tagName.toLowerCase()==="embed"&&$this.parent("object").length||$this.parent(".fluid-width-video-wrapper").length)return;var height=this.tagName.toLowerCase()==="object"||$this.attr("height")&&!isNaN(parseInt($this.attr("height"),10))?parseInt($this.attr("height"),10):$this.height(),width=isNaN(parseInt($this.attr("width"),10))?$this.width():parseInt($this.attr("width"),10),aspectRatio=height/width;if(!$this.attr("id")){var videoID="fitvid"+Math.floor(Math.random()*999999);$this.attr("id",videoID)}$this.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top",aspectRatio*100+"%");$this.removeAttr("height").removeAttr("width")})})}})(jQuery);var navigation=responsiveNav("#site-nav",{animate:!0,transition:400,label:"<i class='icon-reorder'></i> Menu",insert:"before",customToggle:"",openPos:"relative",jsClass:"js",init:function(){},open:function(){},close:function(){}});$(function(){$("article").fitVids()});$(document).ready(function(){$(".icon-time").text(function(index,value){var iTime=Math.round(parseFloat(value)),sTime=" "+iTime+" Minutes";return sTime})});