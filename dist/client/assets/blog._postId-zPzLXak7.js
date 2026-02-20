import{g as ir,j as C,r as ki,L as Ze,d as xi}from"./main-BOdqHD--.js";import{m as he,A as bi}from"./proxy-BoBLUQw1.js";import{A as vi}from"./arrow-left-BTP4t0O9.js";import{C as Si}from"./calendar-CLSHOgRu.js";import{C as fn}from"./clock-CHgSxBKt.js";import{c as or}from"./createLucideIcon-iMmzENEj.js";import{C as Ai}from"./check-ZPS0Kvg1.js";import{L as Ci}from"./link-2-B1MTfJD3.js";import{C as Ii}from"./chevron-right-BYb7CQQm.js";const Ti=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],Ei=or("linkedin",Ti);const zi=[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]],mn=or("twitter",zi);function Oi(e,n){const t={};return(e[e.length-1]===""?[...e,""]:e).join((t.padRight?" ":"")+","+(t.padLeft===!1?"":" ")).trim()}const Pi=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,Ri=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,Li={};function dn(e,n){return(Li.jsx?Ri:Pi).test(e)}const Mi=/[ \t\n\f\r]/g;function Di(e){return typeof e=="object"?e.type==="text"?gn(e.value):!1:gn(e)}function gn(e){return e.replace(Mi,"")===""}class Ke{constructor(n,t,r){this.normal=t,this.property=n,r&&(this.space=r)}}Ke.prototype.normal={};Ke.prototype.property={};Ke.prototype.space=void 0;function ar(e,n){const t={},r={};for(const i of e)Object.assign(t,i.property),Object.assign(r,i.normal);return new Ke(t,r,n)}function Rt(e){return e.toLowerCase()}class te{constructor(n,t){this.attribute=t,this.property=n}}te.prototype.attribute="";te.prototype.booleanish=!1;te.prototype.boolean=!1;te.prototype.commaOrSpaceSeparated=!1;te.prototype.commaSeparated=!1;te.prototype.defined=!1;te.prototype.mustUseProperty=!1;te.prototype.number=!1;te.prototype.overloadedBoolean=!1;te.prototype.property="";te.prototype.spaceSeparated=!1;te.prototype.space=void 0;let Fi=0;const F=Ie(),Y=Ie(),Lt=Ie(),A=Ie(),G=Ie(),Le=Ie(),re=Ie();function Ie(){return 2**++Fi}const Mt=Object.freeze(Object.defineProperty({__proto__:null,boolean:F,booleanish:Y,commaOrSpaceSeparated:re,commaSeparated:Le,number:A,overloadedBoolean:Lt,spaceSeparated:G},Symbol.toStringTag,{value:"Module"})),dt=Object.keys(Mt);class $t extends te{constructor(n,t,r,i){let a=-1;if(super(n,t),yn(this,"space",i),typeof r=="number")for(;++a<dt.length;){const o=dt[a];yn(this,dt[a],(r&Mt[o])===Mt[o])}}}$t.prototype.defined=!0;function yn(e,n,t){t&&(e[n]=t)}function De(e){const n={},t={};for(const[r,i]of Object.entries(e.properties)){const a=new $t(r,e.transform(e.attributes||{},r),i,e.space);e.mustUseProperty&&e.mustUseProperty.includes(r)&&(a.mustUseProperty=!0),n[r]=a,t[Rt(r)]=r,t[Rt(a.attribute)]=r}return new Ke(n,t,e.space)}const lr=De({properties:{ariaActiveDescendant:null,ariaAtomic:Y,ariaAutoComplete:null,ariaBusy:Y,ariaChecked:Y,ariaColCount:A,ariaColIndex:A,ariaColSpan:A,ariaControls:G,ariaCurrent:null,ariaDescribedBy:G,ariaDetails:null,ariaDisabled:Y,ariaDropEffect:G,ariaErrorMessage:null,ariaExpanded:Y,ariaFlowTo:G,ariaGrabbed:Y,ariaHasPopup:null,ariaHidden:Y,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:G,ariaLevel:A,ariaLive:null,ariaModal:Y,ariaMultiLine:Y,ariaMultiSelectable:Y,ariaOrientation:null,ariaOwns:G,ariaPlaceholder:null,ariaPosInSet:A,ariaPressed:Y,ariaReadOnly:Y,ariaRelevant:null,ariaRequired:Y,ariaRoleDescription:G,ariaRowCount:A,ariaRowIndex:A,ariaRowSpan:A,ariaSelected:Y,ariaSetSize:A,ariaSort:null,ariaValueMax:A,ariaValueMin:A,ariaValueNow:A,ariaValueText:null,role:null},transform(e,n){return n==="role"?n:"aria-"+n.slice(4).toLowerCase()}});function sr(e,n){return n in e?e[n]:n}function ur(e,n){return sr(e,n.toLowerCase())}const Ni=De({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:Le,acceptCharset:G,accessKey:G,action:null,allow:null,allowFullScreen:F,allowPaymentRequest:F,allowUserMedia:F,alt:null,as:null,async:F,autoCapitalize:null,autoComplete:G,autoFocus:F,autoPlay:F,blocking:G,capture:null,charSet:null,checked:F,cite:null,className:G,cols:A,colSpan:null,content:null,contentEditable:Y,controls:F,controlsList:G,coords:A|Le,crossOrigin:null,data:null,dateTime:null,decoding:null,default:F,defer:F,dir:null,dirName:null,disabled:F,download:Lt,draggable:Y,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:F,formTarget:null,headers:G,height:A,hidden:Lt,high:A,href:null,hrefLang:null,htmlFor:G,httpEquiv:G,id:null,imageSizes:null,imageSrcSet:null,inert:F,inputMode:null,integrity:null,is:null,isMap:F,itemId:null,itemProp:G,itemRef:G,itemScope:F,itemType:G,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:F,low:A,manifest:null,max:null,maxLength:A,media:null,method:null,min:null,minLength:A,multiple:F,muted:F,name:null,nonce:null,noModule:F,noValidate:F,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:F,optimum:A,pattern:null,ping:G,placeholder:null,playsInline:F,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:F,referrerPolicy:null,rel:G,required:F,reversed:F,rows:A,rowSpan:A,sandbox:G,scope:null,scoped:F,seamless:F,selected:F,shadowRootClonable:F,shadowRootDelegatesFocus:F,shadowRootMode:null,shape:null,size:A,sizes:null,slot:null,span:A,spellCheck:Y,src:null,srcDoc:null,srcLang:null,srcSet:null,start:A,step:null,style:null,tabIndex:A,target:null,title:null,translate:null,type:null,typeMustMatch:F,useMap:null,value:Y,width:A,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:G,axis:null,background:null,bgColor:null,border:A,borderColor:null,bottomMargin:A,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:F,declare:F,event:null,face:null,frame:null,frameBorder:null,hSpace:A,leftMargin:A,link:null,longDesc:null,lowSrc:null,marginHeight:A,marginWidth:A,noResize:F,noHref:F,noShade:F,noWrap:F,object:null,profile:null,prompt:null,rev:null,rightMargin:A,rules:null,scheme:null,scrolling:Y,standby:null,summary:null,text:null,topMargin:A,valueType:null,version:null,vAlign:null,vLink:null,vSpace:A,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:F,disableRemotePlayback:F,prefix:null,property:null,results:A,security:null,unselectable:null},space:"html",transform:ur}),ji=De({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:re,accentHeight:A,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:A,amplitude:A,arabicForm:null,ascent:A,attributeName:null,attributeType:null,azimuth:A,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:A,by:null,calcMode:null,capHeight:A,className:G,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:A,diffuseConstant:A,direction:null,display:null,dur:null,divisor:A,dominantBaseline:null,download:F,dx:null,dy:null,edgeMode:null,editable:null,elevation:A,enableBackground:null,end:null,event:null,exponent:A,externalResourcesRequired:null,fill:null,fillOpacity:A,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:Le,g2:Le,glyphName:Le,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:A,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:A,horizOriginX:A,horizOriginY:A,id:null,ideographic:A,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:A,k:A,k1:A,k2:A,k3:A,k4:A,kernelMatrix:re,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:A,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:A,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:A,overlineThickness:A,paintOrder:null,panose1:null,path:null,pathLength:A,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:G,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:A,pointsAtY:A,pointsAtZ:A,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:re,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:re,rev:re,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:re,requiredFeatures:re,requiredFonts:re,requiredFormats:re,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:A,specularExponent:A,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:A,strikethroughThickness:A,string:null,stroke:null,strokeDashArray:re,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:A,strokeOpacity:A,strokeWidth:null,style:null,surfaceScale:A,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:re,tabIndex:A,tableValues:null,target:null,targetX:A,targetY:A,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:re,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:A,underlineThickness:A,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:A,values:null,vAlphabetic:A,vMathematical:A,vectorEffect:null,vHanging:A,vIdeographic:A,version:null,vertAdvY:A,vertOriginX:A,vertOriginY:A,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:A,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:sr}),cr=De({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(e,n){return"xlink:"+n.slice(5).toLowerCase()}}),hr=De({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:ur}),pr=De({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(e,n){return"xml:"+n.slice(3).toLowerCase()}}),_i={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},Bi=/[A-Z]/g,wn=/-[a-z]/g,Hi=/^data[-\w.:]+$/i;function Wi(e,n){const t=Rt(n);let r=n,i=te;if(t in e.normal)return e.property[e.normal[t]];if(t.length>4&&t.slice(0,4)==="data"&&Hi.test(n)){if(n.charAt(4)==="-"){const a=n.slice(5).replace(wn,qi);r="data"+a.charAt(0).toUpperCase()+a.slice(1)}else{const a=n.slice(4);if(!wn.test(a)){let o=a.replace(Bi,$i);o.charAt(0)!=="-"&&(o="-"+o),n="data"+o}}i=$t}return new i(r,n)}function $i(e){return"-"+e.toLowerCase()}function qi(e){return e.charAt(1).toUpperCase()}const Ui=ar([lr,Ni,cr,hr,pr],"html"),qt=ar([lr,ji,cr,hr,pr],"svg");function Vi(e){return e.join(" ").trim()}var Oe={},gt,kn;function Gi(){if(kn)return gt;kn=1;var e=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,n=/\n/g,t=/^\s*/,r=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,i=/^:\s*/,a=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,o=/^[;\s]*/,l=/^\s+|\s+$/g,s=`
`,u="/",h="*",c="",f="comment",p="declaration";function g(v,y){if(typeof v!="string")throw new TypeError("First argument must be a string");if(!v)return[];y=y||{};var I=1,S=1;function M(R){var E=R.match(n);E&&(I+=E.length);var q=R.lastIndexOf(s);S=~q?R.length-q:S+R.length}function D(){var R={line:I,column:S};return function(E){return E.position=new x(R),H(),E}}function x(R){this.start=R,this.end={line:I,column:S},this.source=y.source}x.prototype.content=v;function j(R){var E=new Error(y.source+":"+I+":"+S+": "+R);if(E.reason=R,E.filename=y.source,E.line=I,E.column=S,E.source=v,!y.silent)throw E}function W(R){var E=R.exec(v);if(E){var q=E[0];return M(q),v=v.slice(q.length),E}}function H(){W(t)}function w(R){var E;for(R=R||[];E=z();)E!==!1&&R.push(E);return R}function z(){var R=D();if(!(u!=v.charAt(0)||h!=v.charAt(1))){for(var E=2;c!=v.charAt(E)&&(h!=v.charAt(E)||u!=v.charAt(E+1));)++E;if(E+=2,c===v.charAt(E-1))return j("End of comment missing");var q=v.slice(2,E-2);return S+=2,M(q),v=v.slice(E),S+=2,R({type:f,comment:q})}}function O(){var R=D(),E=W(r);if(E){if(z(),!W(i))return j("property missing ':'");var q=W(a),K=R({type:p,property:b(E[0].replace(e,c)),value:q?b(q[0].replace(e,c)):c});return W(o),K}}function $(){var R=[];w(R);for(var E;E=O();)E!==!1&&(R.push(E),w(R));return R}return H(),$()}function b(v){return v?v.replace(l,c):c}return gt=g,gt}var xn;function Yi(){if(xn)return Oe;xn=1;var e=Oe&&Oe.__importDefault||function(r){return r&&r.__esModule?r:{default:r}};Object.defineProperty(Oe,"__esModule",{value:!0}),Oe.default=t;const n=e(Gi());function t(r,i){let a=null;if(!r||typeof r!="string")return a;const o=(0,n.default)(r),l=typeof i=="function";return o.forEach(s=>{if(s.type!=="declaration")return;const{property:u,value:h}=s;l?i(u,h,s):h&&(a=a||{},a[u]=h)}),a}return Oe}var Be={},bn;function Ki(){if(bn)return Be;bn=1,Object.defineProperty(Be,"__esModule",{value:!0}),Be.camelCase=void 0;var e=/^--[a-zA-Z0-9_-]+$/,n=/-([a-z])/g,t=/^[^-]+$/,r=/^-(webkit|moz|ms|o|khtml)-/,i=/^-(ms)-/,a=function(u){return!u||t.test(u)||e.test(u)},o=function(u,h){return h.toUpperCase()},l=function(u,h){return"".concat(h,"-")},s=function(u,h){return h===void 0&&(h={}),a(u)?u:(u=u.toLowerCase(),h.reactCompat?u=u.replace(i,l):u=u.replace(r,l),u.replace(n,o))};return Be.camelCase=s,Be}var He,vn;function Qi(){if(vn)return He;vn=1;var e=He&&He.__importDefault||function(i){return i&&i.__esModule?i:{default:i}},n=e(Yi()),t=Ki();function r(i,a){var o={};return!i||typeof i!="string"||(0,n.default)(i,function(l,s){l&&s&&(o[(0,t.camelCase)(l,a)]=s)}),o}return r.default=r,He=r,He}var Xi=Qi();const Ji=ir(Xi),fr=mr("end"),Ut=mr("start");function mr(e){return n;function n(t){const r=t&&t.position&&t.position[e]||{};if(typeof r.line=="number"&&r.line>0&&typeof r.column=="number"&&r.column>0)return{line:r.line,column:r.column,offset:typeof r.offset=="number"&&r.offset>-1?r.offset:void 0}}}function Zi(e){const n=Ut(e),t=fr(e);if(n&&t)return{start:n,end:t}}function qe(e){return!e||typeof e!="object"?"":"position"in e||"type"in e?Sn(e.position):"start"in e||"end"in e?Sn(e):"line"in e||"column"in e?Dt(e):""}function Dt(e){return An(e&&e.line)+":"+An(e&&e.column)}function Sn(e){return Dt(e&&e.start)+"-"+Dt(e&&e.end)}function An(e){return e&&typeof e=="number"?e:1}class J extends Error{constructor(n,t,r){super(),typeof t=="string"&&(r=t,t=void 0);let i="",a={},o=!1;if(t&&("line"in t&&"column"in t?a={place:t}:"start"in t&&"end"in t?a={place:t}:"type"in t?a={ancestors:[t],place:t.position}:a={...t}),typeof n=="string"?i=n:!a.cause&&n&&(o=!0,i=n.message,a.cause=n),!a.ruleId&&!a.source&&typeof r=="string"){const s=r.indexOf(":");s===-1?a.ruleId=r:(a.source=r.slice(0,s),a.ruleId=r.slice(s+1))}if(!a.place&&a.ancestors&&a.ancestors){const s=a.ancestors[a.ancestors.length-1];s&&(a.place=s.position)}const l=a.place&&"start"in a.place?a.place.start:a.place;this.ancestors=a.ancestors||void 0,this.cause=a.cause||void 0,this.column=l?l.column:void 0,this.fatal=void 0,this.file="",this.message=i,this.line=l?l.line:void 0,this.name=qe(a.place)||"1:1",this.place=a.place||void 0,this.reason=this.message,this.ruleId=a.ruleId||void 0,this.source=a.source||void 0,this.stack=o&&a.cause&&typeof a.cause.stack=="string"?a.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}J.prototype.file="";J.prototype.name="";J.prototype.reason="";J.prototype.message="";J.prototype.stack="";J.prototype.column=void 0;J.prototype.line=void 0;J.prototype.ancestors=void 0;J.prototype.cause=void 0;J.prototype.fatal=void 0;J.prototype.place=void 0;J.prototype.ruleId=void 0;J.prototype.source=void 0;const Vt={}.hasOwnProperty,eo=new Map,to=/[A-Z]/g,no=new Set(["table","tbody","thead","tfoot","tr"]),ro=new Set(["td","th"]),dr="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function io(e,n){if(!n||n.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const t=n.filePath||void 0;let r;if(n.development){if(typeof n.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");r=po(t,n.jsxDEV)}else{if(typeof n.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof n.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");r=ho(t,n.jsx,n.jsxs)}const i={Fragment:n.Fragment,ancestors:[],components:n.components||{},create:r,elementAttributeNameCase:n.elementAttributeNameCase||"react",evaluater:n.createEvaluater?n.createEvaluater():void 0,filePath:t,ignoreInvalidStyle:n.ignoreInvalidStyle||!1,passKeys:n.passKeys!==!1,passNode:n.passNode||!1,schema:n.space==="svg"?qt:Ui,stylePropertyNameCase:n.stylePropertyNameCase||"dom",tableCellAlignToStyle:n.tableCellAlignToStyle!==!1},a=gr(i,e,void 0);return a&&typeof a!="string"?a:i.create(e,i.Fragment,{children:a||void 0},void 0)}function gr(e,n,t){if(n.type==="element")return oo(e,n,t);if(n.type==="mdxFlowExpression"||n.type==="mdxTextExpression")return ao(e,n);if(n.type==="mdxJsxFlowElement"||n.type==="mdxJsxTextElement")return so(e,n,t);if(n.type==="mdxjsEsm")return lo(e,n);if(n.type==="root")return uo(e,n,t);if(n.type==="text")return co(e,n)}function oo(e,n,t){const r=e.schema;let i=r;n.tagName.toLowerCase()==="svg"&&r.space==="html"&&(i=qt,e.schema=i),e.ancestors.push(n);const a=wr(e,n.tagName,!1),o=fo(e,n);let l=Yt(e,n);return no.has(n.tagName)&&(l=l.filter(function(s){return typeof s=="string"?!Di(s):!0})),yr(e,o,a,n),Gt(o,l),e.ancestors.pop(),e.schema=r,e.create(n,a,o,t)}function ao(e,n){if(n.data&&n.data.estree&&e.evaluater){const r=n.data.estree.body[0];return r.type,e.evaluater.evaluateExpression(r.expression)}Ge(e,n.position)}function lo(e,n){if(n.data&&n.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(n.data.estree);Ge(e,n.position)}function so(e,n,t){const r=e.schema;let i=r;n.name==="svg"&&r.space==="html"&&(i=qt,e.schema=i),e.ancestors.push(n);const a=n.name===null?e.Fragment:wr(e,n.name,!0),o=mo(e,n),l=Yt(e,n);return yr(e,o,a,n),Gt(o,l),e.ancestors.pop(),e.schema=r,e.create(n,a,o,t)}function uo(e,n,t){const r={};return Gt(r,Yt(e,n)),e.create(n,e.Fragment,r,t)}function co(e,n){return n.value}function yr(e,n,t,r){typeof t!="string"&&t!==e.Fragment&&e.passNode&&(n.node=r)}function Gt(e,n){if(n.length>0){const t=n.length>1?n:n[0];t&&(e.children=t)}}function ho(e,n,t){return r;function r(i,a,o,l){const u=Array.isArray(o.children)?t:n;return l?u(a,o,l):u(a,o)}}function po(e,n){return t;function t(r,i,a,o){const l=Array.isArray(a.children),s=Ut(r);return n(i,a,o,l,{columnNumber:s?s.column-1:void 0,fileName:e,lineNumber:s?s.line:void 0},void 0)}}function fo(e,n){const t={};let r,i;for(i in n.properties)if(i!=="children"&&Vt.call(n.properties,i)){const a=go(e,i,n.properties[i]);if(a){const[o,l]=a;e.tableCellAlignToStyle&&o==="align"&&typeof l=="string"&&ro.has(n.tagName)?r=l:t[o]=l}}if(r){const a=t.style||(t.style={});a[e.stylePropertyNameCase==="css"?"text-align":"textAlign"]=r}return t}function mo(e,n){const t={};for(const r of n.attributes)if(r.type==="mdxJsxExpressionAttribute")if(r.data&&r.data.estree&&e.evaluater){const a=r.data.estree.body[0];a.type;const o=a.expression;o.type;const l=o.properties[0];l.type,Object.assign(t,e.evaluater.evaluateExpression(l.argument))}else Ge(e,n.position);else{const i=r.name;let a;if(r.value&&typeof r.value=="object")if(r.value.data&&r.value.data.estree&&e.evaluater){const l=r.value.data.estree.body[0];l.type,a=e.evaluater.evaluateExpression(l.expression)}else Ge(e,n.position);else a=r.value===null?!0:r.value;t[i]=a}return t}function Yt(e,n){const t=[];let r=-1;const i=e.passKeys?new Map:eo;for(;++r<n.children.length;){const a=n.children[r];let o;if(e.passKeys){const s=a.type==="element"?a.tagName:a.type==="mdxJsxFlowElement"||a.type==="mdxJsxTextElement"?a.name:void 0;if(s){const u=i.get(s)||0;o=s+"-"+u,i.set(s,u+1)}}const l=gr(e,a,o);l!==void 0&&t.push(l)}return t}function go(e,n,t){const r=Wi(e.schema,n);if(!(t==null||typeof t=="number"&&Number.isNaN(t))){if(Array.isArray(t)&&(t=r.commaSeparated?Oi(t):Vi(t)),r.property==="style"){let i=typeof t=="object"?t:yo(e,String(t));return e.stylePropertyNameCase==="css"&&(i=wo(i)),["style",i]}return[e.elementAttributeNameCase==="react"&&r.space?_i[r.property]||r.property:r.attribute,t]}}function yo(e,n){try{return Ji(n,{reactCompat:!0})}catch(t){if(e.ignoreInvalidStyle)return{};const r=t,i=new J("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:r,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw i.file=e.filePath||void 0,i.url=dr+"#cannot-parse-style-attribute",i}}function wr(e,n,t){let r;if(!t)r={type:"Literal",value:n};else if(n.includes(".")){const i=n.split(".");let a=-1,o;for(;++a<i.length;){const l=dn(i[a])?{type:"Identifier",name:i[a]}:{type:"Literal",value:i[a]};o=o?{type:"MemberExpression",object:o,property:l,computed:!!(a&&l.type==="Literal"),optional:!1}:l}r=o}else r=dn(n)&&!/^[a-z]/.test(n)?{type:"Identifier",name:n}:{type:"Literal",value:n};if(r.type==="Literal"){const i=r.value;return Vt.call(e.components,i)?e.components[i]:i}if(e.evaluater)return e.evaluater.evaluateExpression(r);Ge(e)}function Ge(e,n){const t=new J("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:n,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw t.file=e.filePath||void 0,t.url=dr+"#cannot-handle-mdx-estrees-without-createevaluater",t}function wo(e){const n={};let t;for(t in e)Vt.call(e,t)&&(n[ko(t)]=e[t]);return n}function ko(e){let n=e.replace(to,xo);return n.slice(0,3)==="ms-"&&(n="-"+n),n}function xo(e){return"-"+e.toLowerCase()}const yt={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},bo={};function Kt(e,n){const t=bo,r=typeof t.includeImageAlt=="boolean"?t.includeImageAlt:!0,i=typeof t.includeHtml=="boolean"?t.includeHtml:!0;return kr(e,r,i)}function kr(e,n,t){if(vo(e)){if("value"in e)return e.type==="html"&&!t?"":e.value;if(n&&"alt"in e&&e.alt)return e.alt;if("children"in e)return Cn(e.children,n,t)}return Array.isArray(e)?Cn(e,n,t):""}function Cn(e,n,t){const r=[];let i=-1;for(;++i<e.length;)r[i]=kr(e[i],n,t);return r.join("")}function vo(e){return!!(e&&typeof e=="object")}const In=document.createElement("i");function Qt(e){const n="&"+e+";";In.innerHTML=n;const t=In.textContent;return t.charCodeAt(t.length-1)===59&&e!=="semi"||t===n?!1:t}function ie(e,n,t,r){const i=e.length;let a=0,o;if(n<0?n=-n>i?0:i+n:n=n>i?i:n,t=t>0?t:0,r.length<1e4)o=Array.from(r),o.unshift(n,t),e.splice(...o);else for(t&&e.splice(n,t);a<r.length;)o=r.slice(a,a+1e4),o.unshift(n,0),e.splice(...o),a+=1e4,n+=1e4}function oe(e,n){return e.length>0?(ie(e,e.length,0,n),e):n}const Tn={}.hasOwnProperty;function xr(e){const n={};let t=-1;for(;++t<e.length;)So(n,e[t]);return n}function So(e,n){let t;for(t in n){const i=(Tn.call(e,t)?e[t]:void 0)||(e[t]={}),a=n[t];let o;if(a)for(o in a){Tn.call(i,o)||(i[o]=[]);const l=a[o];Ao(i[o],Array.isArray(l)?l:l?[l]:[])}}}function Ao(e,n){let t=-1;const r=[];for(;++t<n.length;)(n[t].add==="after"?e:r).push(n[t]);ie(e,0,0,r)}function br(e,n){const t=Number.parseInt(e,n);return t<9||t===11||t>13&&t<32||t>126&&t<160||t>55295&&t<57344||t>64975&&t<65008||(t&65535)===65535||(t&65535)===65534||t>1114111?"�":String.fromCodePoint(t)}function ce(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const Z=be(/[A-Za-z]/),X=be(/[\dA-Za-z]/),Co=be(/[#-'*+\--9=?A-Z^-~]/);function at(e){return e!==null&&(e<32||e===127)}const Ft=be(/\d/),Io=be(/[\dA-Fa-f]/),To=be(/[!-/:-@[-`{-~]/);function P(e){return e!==null&&e<-2}function V(e){return e!==null&&(e<0||e===32)}function N(e){return e===-2||e===-1||e===32}const ct=be(new RegExp("\\p{P}|\\p{S}","u")),Ce=be(/\s/);function be(e){return n;function n(t){return t!==null&&t>-1&&e.test(String.fromCharCode(t))}}function Fe(e){const n=[];let t=-1,r=0,i=0;for(;++t<e.length;){const a=e.charCodeAt(t);let o="";if(a===37&&X(e.charCodeAt(t+1))&&X(e.charCodeAt(t+2)))i=2;else if(a<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(a))||(o=String.fromCharCode(a));else if(a>55295&&a<57344){const l=e.charCodeAt(t+1);a<56320&&l>56319&&l<57344?(o=String.fromCharCode(a,l),i=1):o="�"}else o=String.fromCharCode(a);o&&(n.push(e.slice(r,t),encodeURIComponent(o)),r=t+i+1,o=""),i&&(t+=i,i=0)}return n.join("")+e.slice(r)}function B(e,n,t,r){const i=r?r-1:Number.POSITIVE_INFINITY;let a=0;return o;function o(s){return N(s)?(e.enter(t),l(s)):n(s)}function l(s){return N(s)&&a++<i?(e.consume(s),l):(e.exit(t),n(s))}}const Eo={tokenize:zo};function zo(e){const n=e.attempt(this.parser.constructs.contentInitial,r,i);let t;return n;function r(l){if(l===null){e.consume(l);return}return e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),B(e,n,"linePrefix")}function i(l){return e.enter("paragraph"),a(l)}function a(l){const s=e.enter("chunkText",{contentType:"text",previous:t});return t&&(t.next=s),t=s,o(l)}function o(l){if(l===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(l);return}return P(l)?(e.consume(l),e.exit("chunkText"),a):(e.consume(l),o)}}const Oo={tokenize:Po},En={tokenize:Ro};function Po(e){const n=this,t=[];let r=0,i,a,o;return l;function l(S){if(r<t.length){const M=t[r];return n.containerState=M[1],e.attempt(M[0].continuation,s,u)(S)}return u(S)}function s(S){if(r++,n.containerState._closeFlow){n.containerState._closeFlow=void 0,i&&I();const M=n.events.length;let D=M,x;for(;D--;)if(n.events[D][0]==="exit"&&n.events[D][1].type==="chunkFlow"){x=n.events[D][1].end;break}y(r);let j=M;for(;j<n.events.length;)n.events[j][1].end={...x},j++;return ie(n.events,D+1,0,n.events.slice(M)),n.events.length=j,u(S)}return l(S)}function u(S){if(r===t.length){if(!i)return f(S);if(i.currentConstruct&&i.currentConstruct.concrete)return g(S);n.interrupt=!!(i.currentConstruct&&!i._gfmTableDynamicInterruptHack)}return n.containerState={},e.check(En,h,c)(S)}function h(S){return i&&I(),y(r),f(S)}function c(S){return n.parser.lazy[n.now().line]=r!==t.length,o=n.now().offset,g(S)}function f(S){return n.containerState={},e.attempt(En,p,g)(S)}function p(S){return r++,t.push([n.currentConstruct,n.containerState]),f(S)}function g(S){if(S===null){i&&I(),y(0),e.consume(S);return}return i=i||n.parser.flow(n.now()),e.enter("chunkFlow",{_tokenizer:i,contentType:"flow",previous:a}),b(S)}function b(S){if(S===null){v(e.exit("chunkFlow"),!0),y(0),e.consume(S);return}return P(S)?(e.consume(S),v(e.exit("chunkFlow")),r=0,n.interrupt=void 0,l):(e.consume(S),b)}function v(S,M){const D=n.sliceStream(S);if(M&&D.push(null),S.previous=a,a&&(a.next=S),a=S,i.defineSkip(S.start),i.write(D),n.parser.lazy[S.start.line]){let x=i.events.length;for(;x--;)if(i.events[x][1].start.offset<o&&(!i.events[x][1].end||i.events[x][1].end.offset>o))return;const j=n.events.length;let W=j,H,w;for(;W--;)if(n.events[W][0]==="exit"&&n.events[W][1].type==="chunkFlow"){if(H){w=n.events[W][1].end;break}H=!0}for(y(r),x=j;x<n.events.length;)n.events[x][1].end={...w},x++;ie(n.events,W+1,0,n.events.slice(j)),n.events.length=x}}function y(S){let M=t.length;for(;M-- >S;){const D=t[M];n.containerState=D[1],D[0].exit.call(n,e)}t.length=S}function I(){i.write([null]),a=void 0,i=void 0,n.containerState._closeFlow=void 0}}function Ro(e,n,t){return B(e,e.attempt(this.parser.constructs.document,n,t),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function Me(e){if(e===null||V(e)||Ce(e))return 1;if(ct(e))return 2}function ht(e,n,t){const r=[];let i=-1;for(;++i<e.length;){const a=e[i].resolveAll;a&&!r.includes(a)&&(n=a(n,t),r.push(a))}return n}const Nt={name:"attention",resolveAll:Lo,tokenize:Mo};function Lo(e,n){let t=-1,r,i,a,o,l,s,u,h;for(;++t<e.length;)if(e[t][0]==="enter"&&e[t][1].type==="attentionSequence"&&e[t][1]._close){for(r=t;r--;)if(e[r][0]==="exit"&&e[r][1].type==="attentionSequence"&&e[r][1]._open&&n.sliceSerialize(e[r][1]).charCodeAt(0)===n.sliceSerialize(e[t][1]).charCodeAt(0)){if((e[r][1]._close||e[t][1]._open)&&(e[t][1].end.offset-e[t][1].start.offset)%3&&!((e[r][1].end.offset-e[r][1].start.offset+e[t][1].end.offset-e[t][1].start.offset)%3))continue;s=e[r][1].end.offset-e[r][1].start.offset>1&&e[t][1].end.offset-e[t][1].start.offset>1?2:1;const c={...e[r][1].end},f={...e[t][1].start};zn(c,-s),zn(f,s),o={type:s>1?"strongSequence":"emphasisSequence",start:c,end:{...e[r][1].end}},l={type:s>1?"strongSequence":"emphasisSequence",start:{...e[t][1].start},end:f},a={type:s>1?"strongText":"emphasisText",start:{...e[r][1].end},end:{...e[t][1].start}},i={type:s>1?"strong":"emphasis",start:{...o.start},end:{...l.end}},e[r][1].end={...o.start},e[t][1].start={...l.end},u=[],e[r][1].end.offset-e[r][1].start.offset&&(u=oe(u,[["enter",e[r][1],n],["exit",e[r][1],n]])),u=oe(u,[["enter",i,n],["enter",o,n],["exit",o,n],["enter",a,n]]),u=oe(u,ht(n.parser.constructs.insideSpan.null,e.slice(r+1,t),n)),u=oe(u,[["exit",a,n],["enter",l,n],["exit",l,n],["exit",i,n]]),e[t][1].end.offset-e[t][1].start.offset?(h=2,u=oe(u,[["enter",e[t][1],n],["exit",e[t][1],n]])):h=0,ie(e,r-1,t-r+3,u),t=r+u.length-h-2;break}}for(t=-1;++t<e.length;)e[t][1].type==="attentionSequence"&&(e[t][1].type="data");return e}function Mo(e,n){const t=this.parser.constructs.attentionMarkers.null,r=this.previous,i=Me(r);let a;return o;function o(s){return a=s,e.enter("attentionSequence"),l(s)}function l(s){if(s===a)return e.consume(s),l;const u=e.exit("attentionSequence"),h=Me(s),c=!h||h===2&&i||t.includes(s),f=!i||i===2&&h||t.includes(r);return u._open=!!(a===42?c:c&&(i||!f)),u._close=!!(a===42?f:f&&(h||!c)),n(s)}}function zn(e,n){e.column+=n,e.offset+=n,e._bufferIndex+=n}const Do={name:"autolink",tokenize:Fo};function Fo(e,n,t){let r=0;return i;function i(p){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(p),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),a}function a(p){return Z(p)?(e.consume(p),o):p===64?t(p):u(p)}function o(p){return p===43||p===45||p===46||X(p)?(r=1,l(p)):u(p)}function l(p){return p===58?(e.consume(p),r=0,s):(p===43||p===45||p===46||X(p))&&r++<32?(e.consume(p),l):(r=0,u(p))}function s(p){return p===62?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(p),e.exit("autolinkMarker"),e.exit("autolink"),n):p===null||p===32||p===60||at(p)?t(p):(e.consume(p),s)}function u(p){return p===64?(e.consume(p),h):Co(p)?(e.consume(p),u):t(p)}function h(p){return X(p)?c(p):t(p)}function c(p){return p===46?(e.consume(p),r=0,h):p===62?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(p),e.exit("autolinkMarker"),e.exit("autolink"),n):f(p)}function f(p){if((p===45||X(p))&&r++<63){const g=p===45?f:c;return e.consume(p),g}return t(p)}}const Qe={partial:!0,tokenize:No};function No(e,n,t){return r;function r(a){return N(a)?B(e,i,"linePrefix")(a):i(a)}function i(a){return a===null||P(a)?n(a):t(a)}}const vr={continuation:{tokenize:_o},exit:Bo,name:"blockQuote",tokenize:jo};function jo(e,n,t){const r=this;return i;function i(o){if(o===62){const l=r.containerState;return l.open||(e.enter("blockQuote",{_container:!0}),l.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(o),e.exit("blockQuoteMarker"),a}return t(o)}function a(o){return N(o)?(e.enter("blockQuotePrefixWhitespace"),e.consume(o),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),n):(e.exit("blockQuotePrefix"),n(o))}}function _o(e,n,t){const r=this;return i;function i(o){return N(o)?B(e,a,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(o):a(o)}function a(o){return e.attempt(vr,n,t)(o)}}function Bo(e){e.exit("blockQuote")}const Sr={name:"characterEscape",tokenize:Ho};function Ho(e,n,t){return r;function r(a){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(a),e.exit("escapeMarker"),i}function i(a){return To(a)?(e.enter("characterEscapeValue"),e.consume(a),e.exit("characterEscapeValue"),e.exit("characterEscape"),n):t(a)}}const Ar={name:"characterReference",tokenize:Wo};function Wo(e,n,t){const r=this;let i=0,a,o;return l;function l(c){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(c),e.exit("characterReferenceMarker"),s}function s(c){return c===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(c),e.exit("characterReferenceMarkerNumeric"),u):(e.enter("characterReferenceValue"),a=31,o=X,h(c))}function u(c){return c===88||c===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(c),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),a=6,o=Io,h):(e.enter("characterReferenceValue"),a=7,o=Ft,h(c))}function h(c){if(c===59&&i){const f=e.exit("characterReferenceValue");return o===X&&!Qt(r.sliceSerialize(f))?t(c):(e.enter("characterReferenceMarker"),e.consume(c),e.exit("characterReferenceMarker"),e.exit("characterReference"),n)}return o(c)&&i++<a?(e.consume(c),h):t(c)}}const On={partial:!0,tokenize:qo},Pn={concrete:!0,name:"codeFenced",tokenize:$o};function $o(e,n,t){const r=this,i={partial:!0,tokenize:D};let a=0,o=0,l;return s;function s(x){return u(x)}function u(x){const j=r.events[r.events.length-1];return a=j&&j[1].type==="linePrefix"?j[2].sliceSerialize(j[1],!0).length:0,l=x,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),h(x)}function h(x){return x===l?(o++,e.consume(x),h):o<3?t(x):(e.exit("codeFencedFenceSequence"),N(x)?B(e,c,"whitespace")(x):c(x))}function c(x){return x===null||P(x)?(e.exit("codeFencedFence"),r.interrupt?n(x):e.check(On,b,M)(x)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),f(x))}function f(x){return x===null||P(x)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),c(x)):N(x)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),B(e,p,"whitespace")(x)):x===96&&x===l?t(x):(e.consume(x),f)}function p(x){return x===null||P(x)?c(x):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),g(x))}function g(x){return x===null||P(x)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),c(x)):x===96&&x===l?t(x):(e.consume(x),g)}function b(x){return e.attempt(i,M,v)(x)}function v(x){return e.enter("lineEnding"),e.consume(x),e.exit("lineEnding"),y}function y(x){return a>0&&N(x)?B(e,I,"linePrefix",a+1)(x):I(x)}function I(x){return x===null||P(x)?e.check(On,b,M)(x):(e.enter("codeFlowValue"),S(x))}function S(x){return x===null||P(x)?(e.exit("codeFlowValue"),I(x)):(e.consume(x),S)}function M(x){return e.exit("codeFenced"),n(x)}function D(x,j,W){let H=0;return w;function w(E){return x.enter("lineEnding"),x.consume(E),x.exit("lineEnding"),z}function z(E){return x.enter("codeFencedFence"),N(E)?B(x,O,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(E):O(E)}function O(E){return E===l?(x.enter("codeFencedFenceSequence"),$(E)):W(E)}function $(E){return E===l?(H++,x.consume(E),$):H>=o?(x.exit("codeFencedFenceSequence"),N(E)?B(x,R,"whitespace")(E):R(E)):W(E)}function R(E){return E===null||P(E)?(x.exit("codeFencedFence"),j(E)):W(E)}}}function qo(e,n,t){const r=this;return i;function i(o){return o===null?t(o):(e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),a)}function a(o){return r.parser.lazy[r.now().line]?t(o):n(o)}}const wt={name:"codeIndented",tokenize:Vo},Uo={partial:!0,tokenize:Go};function Vo(e,n,t){const r=this;return i;function i(u){return e.enter("codeIndented"),B(e,a,"linePrefix",5)(u)}function a(u){const h=r.events[r.events.length-1];return h&&h[1].type==="linePrefix"&&h[2].sliceSerialize(h[1],!0).length>=4?o(u):t(u)}function o(u){return u===null?s(u):P(u)?e.attempt(Uo,o,s)(u):(e.enter("codeFlowValue"),l(u))}function l(u){return u===null||P(u)?(e.exit("codeFlowValue"),o(u)):(e.consume(u),l)}function s(u){return e.exit("codeIndented"),n(u)}}function Go(e,n,t){const r=this;return i;function i(o){return r.parser.lazy[r.now().line]?t(o):P(o)?(e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),i):B(e,a,"linePrefix",5)(o)}function a(o){const l=r.events[r.events.length-1];return l&&l[1].type==="linePrefix"&&l[2].sliceSerialize(l[1],!0).length>=4?n(o):P(o)?i(o):t(o)}}const Yo={name:"codeText",previous:Qo,resolve:Ko,tokenize:Xo};function Ko(e){let n=e.length-4,t=3,r,i;if((e[t][1].type==="lineEnding"||e[t][1].type==="space")&&(e[n][1].type==="lineEnding"||e[n][1].type==="space")){for(r=t;++r<n;)if(e[r][1].type==="codeTextData"){e[t][1].type="codeTextPadding",e[n][1].type="codeTextPadding",t+=2,n-=2;break}}for(r=t-1,n++;++r<=n;)i===void 0?r!==n&&e[r][1].type!=="lineEnding"&&(i=r):(r===n||e[r][1].type==="lineEnding")&&(e[i][1].type="codeTextData",r!==i+2&&(e[i][1].end=e[r-1][1].end,e.splice(i+2,r-i-2),n-=r-i-2,r=i+2),i=void 0);return e}function Qo(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function Xo(e,n,t){let r=0,i,a;return o;function o(c){return e.enter("codeText"),e.enter("codeTextSequence"),l(c)}function l(c){return c===96?(e.consume(c),r++,l):(e.exit("codeTextSequence"),s(c))}function s(c){return c===null?t(c):c===32?(e.enter("space"),e.consume(c),e.exit("space"),s):c===96?(a=e.enter("codeTextSequence"),i=0,h(c)):P(c)?(e.enter("lineEnding"),e.consume(c),e.exit("lineEnding"),s):(e.enter("codeTextData"),u(c))}function u(c){return c===null||c===32||c===96||P(c)?(e.exit("codeTextData"),s(c)):(e.consume(c),u)}function h(c){return c===96?(e.consume(c),i++,h):i===r?(e.exit("codeTextSequence"),e.exit("codeText"),n(c)):(a.type="codeTextData",u(c))}}class Jo{constructor(n){this.left=n?[...n]:[],this.right=[]}get(n){if(n<0||n>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+n+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return n<this.left.length?this.left[n]:this.right[this.right.length-n+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(n,t){const r=t??Number.POSITIVE_INFINITY;return r<this.left.length?this.left.slice(n,r):n>this.left.length?this.right.slice(this.right.length-r+this.left.length,this.right.length-n+this.left.length).reverse():this.left.slice(n).concat(this.right.slice(this.right.length-r+this.left.length).reverse())}splice(n,t,r){const i=t||0;this.setCursor(Math.trunc(n));const a=this.right.splice(this.right.length-i,Number.POSITIVE_INFINITY);return r&&We(this.left,r),a.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(n){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(n)}pushMany(n){this.setCursor(Number.POSITIVE_INFINITY),We(this.left,n)}unshift(n){this.setCursor(0),this.right.push(n)}unshiftMany(n){this.setCursor(0),We(this.right,n.reverse())}setCursor(n){if(!(n===this.left.length||n>this.left.length&&this.right.length===0||n<0&&this.left.length===0))if(n<this.left.length){const t=this.left.splice(n,Number.POSITIVE_INFINITY);We(this.right,t.reverse())}else{const t=this.right.splice(this.left.length+this.right.length-n,Number.POSITIVE_INFINITY);We(this.left,t.reverse())}}}function We(e,n){let t=0;if(n.length<1e4)e.push(...n);else for(;t<n.length;)e.push(...n.slice(t,t+1e4)),t+=1e4}function Cr(e){const n={};let t=-1,r,i,a,o,l,s,u;const h=new Jo(e);for(;++t<h.length;){for(;t in n;)t=n[t];if(r=h.get(t),t&&r[1].type==="chunkFlow"&&h.get(t-1)[1].type==="listItemPrefix"&&(s=r[1]._tokenizer.events,a=0,a<s.length&&s[a][1].type==="lineEndingBlank"&&(a+=2),a<s.length&&s[a][1].type==="content"))for(;++a<s.length&&s[a][1].type!=="content";)s[a][1].type==="chunkText"&&(s[a][1]._isInFirstContentOfListItem=!0,a++);if(r[0]==="enter")r[1].contentType&&(Object.assign(n,Zo(h,t)),t=n[t],u=!0);else if(r[1]._container){for(a=t,i=void 0;a--;)if(o=h.get(a),o[1].type==="lineEnding"||o[1].type==="lineEndingBlank")o[0]==="enter"&&(i&&(h.get(i)[1].type="lineEndingBlank"),o[1].type="lineEnding",i=a);else if(!(o[1].type==="linePrefix"||o[1].type==="listItemIndent"))break;i&&(r[1].end={...h.get(i)[1].start},l=h.slice(i,t),l.unshift(r),h.splice(i,t-i+1,l))}}return ie(e,0,Number.POSITIVE_INFINITY,h.slice(0)),!u}function Zo(e,n){const t=e.get(n)[1],r=e.get(n)[2];let i=n-1;const a=[];let o=t._tokenizer;o||(o=r.parser[t.contentType](t.start),t._contentTypeTextTrailing&&(o._contentTypeTextTrailing=!0));const l=o.events,s=[],u={};let h,c,f=-1,p=t,g=0,b=0;const v=[b];for(;p;){for(;e.get(++i)[1]!==p;);a.push(i),p._tokenizer||(h=r.sliceStream(p),p.next||h.push(null),c&&o.defineSkip(p.start),p._isInFirstContentOfListItem&&(o._gfmTasklistFirstContentOfListItem=!0),o.write(h),p._isInFirstContentOfListItem&&(o._gfmTasklistFirstContentOfListItem=void 0)),c=p,p=p.next}for(p=t;++f<l.length;)l[f][0]==="exit"&&l[f-1][0]==="enter"&&l[f][1].type===l[f-1][1].type&&l[f][1].start.line!==l[f][1].end.line&&(b=f+1,v.push(b),p._tokenizer=void 0,p.previous=void 0,p=p.next);for(o.events=[],p?(p._tokenizer=void 0,p.previous=void 0):v.pop(),f=v.length;f--;){const y=l.slice(v[f],v[f+1]),I=a.pop();s.push([I,I+y.length-1]),e.splice(I,2,y)}for(s.reverse(),f=-1;++f<s.length;)u[g+s[f][0]]=g+s[f][1],g+=s[f][1]-s[f][0]-1;return u}const ea={resolve:na,tokenize:ra},ta={partial:!0,tokenize:ia};function na(e){return Cr(e),e}function ra(e,n){let t;return r;function r(l){return e.enter("content"),t=e.enter("chunkContent",{contentType:"content"}),i(l)}function i(l){return l===null?a(l):P(l)?e.check(ta,o,a)(l):(e.consume(l),i)}function a(l){return e.exit("chunkContent"),e.exit("content"),n(l)}function o(l){return e.consume(l),e.exit("chunkContent"),t.next=e.enter("chunkContent",{contentType:"content",previous:t}),t=t.next,i}}function ia(e,n,t){const r=this;return i;function i(o){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),B(e,a,"linePrefix")}function a(o){if(o===null||P(o))return t(o);const l=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes("codeIndented")&&l&&l[1].type==="linePrefix"&&l[2].sliceSerialize(l[1],!0).length>=4?n(o):e.interrupt(r.parser.constructs.flow,t,n)(o)}}function Ir(e,n,t,r,i,a,o,l,s){const u=s||Number.POSITIVE_INFINITY;let h=0;return c;function c(y){return y===60?(e.enter(r),e.enter(i),e.enter(a),e.consume(y),e.exit(a),f):y===null||y===32||y===41||at(y)?t(y):(e.enter(r),e.enter(o),e.enter(l),e.enter("chunkString",{contentType:"string"}),b(y))}function f(y){return y===62?(e.enter(a),e.consume(y),e.exit(a),e.exit(i),e.exit(r),n):(e.enter(l),e.enter("chunkString",{contentType:"string"}),p(y))}function p(y){return y===62?(e.exit("chunkString"),e.exit(l),f(y)):y===null||y===60||P(y)?t(y):(e.consume(y),y===92?g:p)}function g(y){return y===60||y===62||y===92?(e.consume(y),p):p(y)}function b(y){return!h&&(y===null||y===41||V(y))?(e.exit("chunkString"),e.exit(l),e.exit(o),e.exit(r),n(y)):h<u&&y===40?(e.consume(y),h++,b):y===41?(e.consume(y),h--,b):y===null||y===32||y===40||at(y)?t(y):(e.consume(y),y===92?v:b)}function v(y){return y===40||y===41||y===92?(e.consume(y),b):b(y)}}function Tr(e,n,t,r,i,a){const o=this;let l=0,s;return u;function u(p){return e.enter(r),e.enter(i),e.consume(p),e.exit(i),e.enter(a),h}function h(p){return l>999||p===null||p===91||p===93&&!s||p===94&&!l&&"_hiddenFootnoteSupport"in o.parser.constructs?t(p):p===93?(e.exit(a),e.enter(i),e.consume(p),e.exit(i),e.exit(r),n):P(p)?(e.enter("lineEnding"),e.consume(p),e.exit("lineEnding"),h):(e.enter("chunkString",{contentType:"string"}),c(p))}function c(p){return p===null||p===91||p===93||P(p)||l++>999?(e.exit("chunkString"),h(p)):(e.consume(p),s||(s=!N(p)),p===92?f:c)}function f(p){return p===91||p===92||p===93?(e.consume(p),l++,c):c(p)}}function Er(e,n,t,r,i,a){let o;return l;function l(f){return f===34||f===39||f===40?(e.enter(r),e.enter(i),e.consume(f),e.exit(i),o=f===40?41:f,s):t(f)}function s(f){return f===o?(e.enter(i),e.consume(f),e.exit(i),e.exit(r),n):(e.enter(a),u(f))}function u(f){return f===o?(e.exit(a),s(o)):f===null?t(f):P(f)?(e.enter("lineEnding"),e.consume(f),e.exit("lineEnding"),B(e,u,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),h(f))}function h(f){return f===o||f===null||P(f)?(e.exit("chunkString"),u(f)):(e.consume(f),f===92?c:h)}function c(f){return f===o||f===92?(e.consume(f),h):h(f)}}function Ue(e,n){let t;return r;function r(i){return P(i)?(e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),t=!0,r):N(i)?B(e,r,t?"linePrefix":"lineSuffix")(i):n(i)}}const oa={name:"definition",tokenize:la},aa={partial:!0,tokenize:sa};function la(e,n,t){const r=this;let i;return a;function a(p){return e.enter("definition"),o(p)}function o(p){return Tr.call(r,e,l,t,"definitionLabel","definitionLabelMarker","definitionLabelString")(p)}function l(p){return i=ce(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),p===58?(e.enter("definitionMarker"),e.consume(p),e.exit("definitionMarker"),s):t(p)}function s(p){return V(p)?Ue(e,u)(p):u(p)}function u(p){return Ir(e,h,t,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(p)}function h(p){return e.attempt(aa,c,c)(p)}function c(p){return N(p)?B(e,f,"whitespace")(p):f(p)}function f(p){return p===null||P(p)?(e.exit("definition"),r.parser.defined.push(i),n(p)):t(p)}}function sa(e,n,t){return r;function r(l){return V(l)?Ue(e,i)(l):t(l)}function i(l){return Er(e,a,t,"definitionTitle","definitionTitleMarker","definitionTitleString")(l)}function a(l){return N(l)?B(e,o,"whitespace")(l):o(l)}function o(l){return l===null||P(l)?n(l):t(l)}}const ua={name:"hardBreakEscape",tokenize:ca};function ca(e,n,t){return r;function r(a){return e.enter("hardBreakEscape"),e.consume(a),i}function i(a){return P(a)?(e.exit("hardBreakEscape"),n(a)):t(a)}}const ha={name:"headingAtx",resolve:pa,tokenize:fa};function pa(e,n){let t=e.length-2,r=3,i,a;return e[r][1].type==="whitespace"&&(r+=2),t-2>r&&e[t][1].type==="whitespace"&&(t-=2),e[t][1].type==="atxHeadingSequence"&&(r===t-1||t-4>r&&e[t-2][1].type==="whitespace")&&(t-=r+1===t?2:4),t>r&&(i={type:"atxHeadingText",start:e[r][1].start,end:e[t][1].end},a={type:"chunkText",start:e[r][1].start,end:e[t][1].end,contentType:"text"},ie(e,r,t-r+1,[["enter",i,n],["enter",a,n],["exit",a,n],["exit",i,n]])),e}function fa(e,n,t){let r=0;return i;function i(h){return e.enter("atxHeading"),a(h)}function a(h){return e.enter("atxHeadingSequence"),o(h)}function o(h){return h===35&&r++<6?(e.consume(h),o):h===null||V(h)?(e.exit("atxHeadingSequence"),l(h)):t(h)}function l(h){return h===35?(e.enter("atxHeadingSequence"),s(h)):h===null||P(h)?(e.exit("atxHeading"),n(h)):N(h)?B(e,l,"whitespace")(h):(e.enter("atxHeadingText"),u(h))}function s(h){return h===35?(e.consume(h),s):(e.exit("atxHeadingSequence"),l(h))}function u(h){return h===null||h===35||V(h)?(e.exit("atxHeadingText"),l(h)):(e.consume(h),u)}}const ma=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],Rn=["pre","script","style","textarea"],da={concrete:!0,name:"htmlFlow",resolveTo:wa,tokenize:ka},ga={partial:!0,tokenize:ba},ya={partial:!0,tokenize:xa};function wa(e){let n=e.length;for(;n--&&!(e[n][0]==="enter"&&e[n][1].type==="htmlFlow"););return n>1&&e[n-2][1].type==="linePrefix"&&(e[n][1].start=e[n-2][1].start,e[n+1][1].start=e[n-2][1].start,e.splice(n-2,2)),e}function ka(e,n,t){const r=this;let i,a,o,l,s;return u;function u(d){return h(d)}function h(d){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(d),c}function c(d){return d===33?(e.consume(d),f):d===47?(e.consume(d),a=!0,b):d===63?(e.consume(d),i=3,r.interrupt?n:m):Z(d)?(e.consume(d),o=String.fromCharCode(d),v):t(d)}function f(d){return d===45?(e.consume(d),i=2,p):d===91?(e.consume(d),i=5,l=0,g):Z(d)?(e.consume(d),i=4,r.interrupt?n:m):t(d)}function p(d){return d===45?(e.consume(d),r.interrupt?n:m):t(d)}function g(d){const se="CDATA[";return d===se.charCodeAt(l++)?(e.consume(d),l===se.length?r.interrupt?n:O:g):t(d)}function b(d){return Z(d)?(e.consume(d),o=String.fromCharCode(d),v):t(d)}function v(d){if(d===null||d===47||d===62||V(d)){const se=d===47,ve=o.toLowerCase();return!se&&!a&&Rn.includes(ve)?(i=1,r.interrupt?n(d):O(d)):ma.includes(o.toLowerCase())?(i=6,se?(e.consume(d),y):r.interrupt?n(d):O(d)):(i=7,r.interrupt&&!r.parser.lazy[r.now().line]?t(d):a?I(d):S(d))}return d===45||X(d)?(e.consume(d),o+=String.fromCharCode(d),v):t(d)}function y(d){return d===62?(e.consume(d),r.interrupt?n:O):t(d)}function I(d){return N(d)?(e.consume(d),I):w(d)}function S(d){return d===47?(e.consume(d),w):d===58||d===95||Z(d)?(e.consume(d),M):N(d)?(e.consume(d),S):w(d)}function M(d){return d===45||d===46||d===58||d===95||X(d)?(e.consume(d),M):D(d)}function D(d){return d===61?(e.consume(d),x):N(d)?(e.consume(d),D):S(d)}function x(d){return d===null||d===60||d===61||d===62||d===96?t(d):d===34||d===39?(e.consume(d),s=d,j):N(d)?(e.consume(d),x):W(d)}function j(d){return d===s?(e.consume(d),s=null,H):d===null||P(d)?t(d):(e.consume(d),j)}function W(d){return d===null||d===34||d===39||d===47||d===60||d===61||d===62||d===96||V(d)?D(d):(e.consume(d),W)}function H(d){return d===47||d===62||N(d)?S(d):t(d)}function w(d){return d===62?(e.consume(d),z):t(d)}function z(d){return d===null||P(d)?O(d):N(d)?(e.consume(d),z):t(d)}function O(d){return d===45&&i===2?(e.consume(d),q):d===60&&i===1?(e.consume(d),K):d===62&&i===4?(e.consume(d),le):d===63&&i===3?(e.consume(d),m):d===93&&i===5?(e.consume(d),me):P(d)&&(i===6||i===7)?(e.exit("htmlFlowData"),e.check(ga,de,$)(d)):d===null||P(d)?(e.exit("htmlFlowData"),$(d)):(e.consume(d),O)}function $(d){return e.check(ya,R,de)(d)}function R(d){return e.enter("lineEnding"),e.consume(d),e.exit("lineEnding"),E}function E(d){return d===null||P(d)?$(d):(e.enter("htmlFlowData"),O(d))}function q(d){return d===45?(e.consume(d),m):O(d)}function K(d){return d===47?(e.consume(d),o="",ae):O(d)}function ae(d){if(d===62){const se=o.toLowerCase();return Rn.includes(se)?(e.consume(d),le):O(d)}return Z(d)&&o.length<8?(e.consume(d),o+=String.fromCharCode(d),ae):O(d)}function me(d){return d===93?(e.consume(d),m):O(d)}function m(d){return d===62?(e.consume(d),le):d===45&&i===2?(e.consume(d),m):O(d)}function le(d){return d===null||P(d)?(e.exit("htmlFlowData"),de(d)):(e.consume(d),le)}function de(d){return e.exit("htmlFlow"),n(d)}}function xa(e,n,t){const r=this;return i;function i(o){return P(o)?(e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),a):t(o)}function a(o){return r.parser.lazy[r.now().line]?t(o):n(o)}}function ba(e,n,t){return r;function r(i){return e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),e.attempt(Qe,n,t)}}const va={name:"htmlText",tokenize:Sa};function Sa(e,n,t){const r=this;let i,a,o;return l;function l(m){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(m),s}function s(m){return m===33?(e.consume(m),u):m===47?(e.consume(m),D):m===63?(e.consume(m),S):Z(m)?(e.consume(m),W):t(m)}function u(m){return m===45?(e.consume(m),h):m===91?(e.consume(m),a=0,g):Z(m)?(e.consume(m),I):t(m)}function h(m){return m===45?(e.consume(m),p):t(m)}function c(m){return m===null?t(m):m===45?(e.consume(m),f):P(m)?(o=c,K(m)):(e.consume(m),c)}function f(m){return m===45?(e.consume(m),p):c(m)}function p(m){return m===62?q(m):m===45?f(m):c(m)}function g(m){const le="CDATA[";return m===le.charCodeAt(a++)?(e.consume(m),a===le.length?b:g):t(m)}function b(m){return m===null?t(m):m===93?(e.consume(m),v):P(m)?(o=b,K(m)):(e.consume(m),b)}function v(m){return m===93?(e.consume(m),y):b(m)}function y(m){return m===62?q(m):m===93?(e.consume(m),y):b(m)}function I(m){return m===null||m===62?q(m):P(m)?(o=I,K(m)):(e.consume(m),I)}function S(m){return m===null?t(m):m===63?(e.consume(m),M):P(m)?(o=S,K(m)):(e.consume(m),S)}function M(m){return m===62?q(m):S(m)}function D(m){return Z(m)?(e.consume(m),x):t(m)}function x(m){return m===45||X(m)?(e.consume(m),x):j(m)}function j(m){return P(m)?(o=j,K(m)):N(m)?(e.consume(m),j):q(m)}function W(m){return m===45||X(m)?(e.consume(m),W):m===47||m===62||V(m)?H(m):t(m)}function H(m){return m===47?(e.consume(m),q):m===58||m===95||Z(m)?(e.consume(m),w):P(m)?(o=H,K(m)):N(m)?(e.consume(m),H):q(m)}function w(m){return m===45||m===46||m===58||m===95||X(m)?(e.consume(m),w):z(m)}function z(m){return m===61?(e.consume(m),O):P(m)?(o=z,K(m)):N(m)?(e.consume(m),z):H(m)}function O(m){return m===null||m===60||m===61||m===62||m===96?t(m):m===34||m===39?(e.consume(m),i=m,$):P(m)?(o=O,K(m)):N(m)?(e.consume(m),O):(e.consume(m),R)}function $(m){return m===i?(e.consume(m),i=void 0,E):m===null?t(m):P(m)?(o=$,K(m)):(e.consume(m),$)}function R(m){return m===null||m===34||m===39||m===60||m===61||m===96?t(m):m===47||m===62||V(m)?H(m):(e.consume(m),R)}function E(m){return m===47||m===62||V(m)?H(m):t(m)}function q(m){return m===62?(e.consume(m),e.exit("htmlTextData"),e.exit("htmlText"),n):t(m)}function K(m){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(m),e.exit("lineEnding"),ae}function ae(m){return N(m)?B(e,me,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(m):me(m)}function me(m){return e.enter("htmlTextData"),o(m)}}const Xt={name:"labelEnd",resolveAll:Ta,resolveTo:Ea,tokenize:za},Aa={tokenize:Oa},Ca={tokenize:Pa},Ia={tokenize:Ra};function Ta(e){let n=-1;const t=[];for(;++n<e.length;){const r=e[n][1];if(t.push(e[n]),r.type==="labelImage"||r.type==="labelLink"||r.type==="labelEnd"){const i=r.type==="labelImage"?4:2;r.type="data",n+=i}}return e.length!==t.length&&ie(e,0,e.length,t),e}function Ea(e,n){let t=e.length,r=0,i,a,o,l;for(;t--;)if(i=e[t][1],a){if(i.type==="link"||i.type==="labelLink"&&i._inactive)break;e[t][0]==="enter"&&i.type==="labelLink"&&(i._inactive=!0)}else if(o){if(e[t][0]==="enter"&&(i.type==="labelImage"||i.type==="labelLink")&&!i._balanced&&(a=t,i.type!=="labelLink")){r=2;break}}else i.type==="labelEnd"&&(o=t);const s={type:e[a][1].type==="labelLink"?"link":"image",start:{...e[a][1].start},end:{...e[e.length-1][1].end}},u={type:"label",start:{...e[a][1].start},end:{...e[o][1].end}},h={type:"labelText",start:{...e[a+r+2][1].end},end:{...e[o-2][1].start}};return l=[["enter",s,n],["enter",u,n]],l=oe(l,e.slice(a+1,a+r+3)),l=oe(l,[["enter",h,n]]),l=oe(l,ht(n.parser.constructs.insideSpan.null,e.slice(a+r+4,o-3),n)),l=oe(l,[["exit",h,n],e[o-2],e[o-1],["exit",u,n]]),l=oe(l,e.slice(o+1)),l=oe(l,[["exit",s,n]]),ie(e,a,e.length,l),e}function za(e,n,t){const r=this;let i=r.events.length,a,o;for(;i--;)if((r.events[i][1].type==="labelImage"||r.events[i][1].type==="labelLink")&&!r.events[i][1]._balanced){a=r.events[i][1];break}return l;function l(f){return a?a._inactive?c(f):(o=r.parser.defined.includes(ce(r.sliceSerialize({start:a.end,end:r.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(f),e.exit("labelMarker"),e.exit("labelEnd"),s):t(f)}function s(f){return f===40?e.attempt(Aa,h,o?h:c)(f):f===91?e.attempt(Ca,h,o?u:c)(f):o?h(f):c(f)}function u(f){return e.attempt(Ia,h,c)(f)}function h(f){return n(f)}function c(f){return a._balanced=!0,t(f)}}function Oa(e,n,t){return r;function r(c){return e.enter("resource"),e.enter("resourceMarker"),e.consume(c),e.exit("resourceMarker"),i}function i(c){return V(c)?Ue(e,a)(c):a(c)}function a(c){return c===41?h(c):Ir(e,o,l,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(c)}function o(c){return V(c)?Ue(e,s)(c):h(c)}function l(c){return t(c)}function s(c){return c===34||c===39||c===40?Er(e,u,t,"resourceTitle","resourceTitleMarker","resourceTitleString")(c):h(c)}function u(c){return V(c)?Ue(e,h)(c):h(c)}function h(c){return c===41?(e.enter("resourceMarker"),e.consume(c),e.exit("resourceMarker"),e.exit("resource"),n):t(c)}}function Pa(e,n,t){const r=this;return i;function i(l){return Tr.call(r,e,a,o,"reference","referenceMarker","referenceString")(l)}function a(l){return r.parser.defined.includes(ce(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?n(l):t(l)}function o(l){return t(l)}}function Ra(e,n,t){return r;function r(a){return e.enter("reference"),e.enter("referenceMarker"),e.consume(a),e.exit("referenceMarker"),i}function i(a){return a===93?(e.enter("referenceMarker"),e.consume(a),e.exit("referenceMarker"),e.exit("reference"),n):t(a)}}const La={name:"labelStartImage",resolveAll:Xt.resolveAll,tokenize:Ma};function Ma(e,n,t){const r=this;return i;function i(l){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(l),e.exit("labelImageMarker"),a}function a(l){return l===91?(e.enter("labelMarker"),e.consume(l),e.exit("labelMarker"),e.exit("labelImage"),o):t(l)}function o(l){return l===94&&"_hiddenFootnoteSupport"in r.parser.constructs?t(l):n(l)}}const Da={name:"labelStartLink",resolveAll:Xt.resolveAll,tokenize:Fa};function Fa(e,n,t){const r=this;return i;function i(o){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(o),e.exit("labelMarker"),e.exit("labelLink"),a}function a(o){return o===94&&"_hiddenFootnoteSupport"in r.parser.constructs?t(o):n(o)}}const kt={name:"lineEnding",tokenize:Na};function Na(e,n){return t;function t(r){return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),B(e,n,"linePrefix")}}const ot={name:"thematicBreak",tokenize:ja};function ja(e,n,t){let r=0,i;return a;function a(u){return e.enter("thematicBreak"),o(u)}function o(u){return i=u,l(u)}function l(u){return u===i?(e.enter("thematicBreakSequence"),s(u)):r>=3&&(u===null||P(u))?(e.exit("thematicBreak"),n(u)):t(u)}function s(u){return u===i?(e.consume(u),r++,s):(e.exit("thematicBreakSequence"),N(u)?B(e,l,"whitespace")(u):l(u))}}const ee={continuation:{tokenize:Wa},exit:qa,name:"list",tokenize:Ha},_a={partial:!0,tokenize:Ua},Ba={partial:!0,tokenize:$a};function Ha(e,n,t){const r=this,i=r.events[r.events.length-1];let a=i&&i[1].type==="linePrefix"?i[2].sliceSerialize(i[1],!0).length:0,o=0;return l;function l(p){const g=r.containerState.type||(p===42||p===43||p===45?"listUnordered":"listOrdered");if(g==="listUnordered"?!r.containerState.marker||p===r.containerState.marker:Ft(p)){if(r.containerState.type||(r.containerState.type=g,e.enter(g,{_container:!0})),g==="listUnordered")return e.enter("listItemPrefix"),p===42||p===45?e.check(ot,t,u)(p):u(p);if(!r.interrupt||p===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),s(p)}return t(p)}function s(p){return Ft(p)&&++o<10?(e.consume(p),s):(!r.interrupt||o<2)&&(r.containerState.marker?p===r.containerState.marker:p===41||p===46)?(e.exit("listItemValue"),u(p)):t(p)}function u(p){return e.enter("listItemMarker"),e.consume(p),e.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||p,e.check(Qe,r.interrupt?t:h,e.attempt(_a,f,c))}function h(p){return r.containerState.initialBlankLine=!0,a++,f(p)}function c(p){return N(p)?(e.enter("listItemPrefixWhitespace"),e.consume(p),e.exit("listItemPrefixWhitespace"),f):t(p)}function f(p){return r.containerState.size=a+r.sliceSerialize(e.exit("listItemPrefix"),!0).length,n(p)}}function Wa(e,n,t){const r=this;return r.containerState._closeFlow=void 0,e.check(Qe,i,a);function i(l){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,B(e,n,"listItemIndent",r.containerState.size+1)(l)}function a(l){return r.containerState.furtherBlankLines||!N(l)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,o(l)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,e.attempt(Ba,n,o)(l))}function o(l){return r.containerState._closeFlow=!0,r.interrupt=void 0,B(e,e.attempt(ee,n,t),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(l)}}function $a(e,n,t){const r=this;return B(e,i,"listItemIndent",r.containerState.size+1);function i(a){const o=r.events[r.events.length-1];return o&&o[1].type==="listItemIndent"&&o[2].sliceSerialize(o[1],!0).length===r.containerState.size?n(a):t(a)}}function qa(e){e.exit(this.containerState.type)}function Ua(e,n,t){const r=this;return B(e,i,"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function i(a){const o=r.events[r.events.length-1];return!N(a)&&o&&o[1].type==="listItemPrefixWhitespace"?n(a):t(a)}}const Ln={name:"setextUnderline",resolveTo:Va,tokenize:Ga};function Va(e,n){let t=e.length,r,i,a;for(;t--;)if(e[t][0]==="enter"){if(e[t][1].type==="content"){r=t;break}e[t][1].type==="paragraph"&&(i=t)}else e[t][1].type==="content"&&e.splice(t,1),!a&&e[t][1].type==="definition"&&(a=t);const o={type:"setextHeading",start:{...e[r][1].start},end:{...e[e.length-1][1].end}};return e[i][1].type="setextHeadingText",a?(e.splice(i,0,["enter",o,n]),e.splice(a+1,0,["exit",e[r][1],n]),e[r][1].end={...e[a][1].end}):e[r][1]=o,e.push(["exit",o,n]),e}function Ga(e,n,t){const r=this;let i;return a;function a(u){let h=r.events.length,c;for(;h--;)if(r.events[h][1].type!=="lineEnding"&&r.events[h][1].type!=="linePrefix"&&r.events[h][1].type!=="content"){c=r.events[h][1].type==="paragraph";break}return!r.parser.lazy[r.now().line]&&(r.interrupt||c)?(e.enter("setextHeadingLine"),i=u,o(u)):t(u)}function o(u){return e.enter("setextHeadingLineSequence"),l(u)}function l(u){return u===i?(e.consume(u),l):(e.exit("setextHeadingLineSequence"),N(u)?B(e,s,"lineSuffix")(u):s(u))}function s(u){return u===null||P(u)?(e.exit("setextHeadingLine"),n(u)):t(u)}}const Ya={tokenize:Ka};function Ka(e){const n=this,t=e.attempt(Qe,r,e.attempt(this.parser.constructs.flowInitial,i,B(e,e.attempt(this.parser.constructs.flow,i,e.attempt(ea,i)),"linePrefix")));return t;function r(a){if(a===null){e.consume(a);return}return e.enter("lineEndingBlank"),e.consume(a),e.exit("lineEndingBlank"),n.currentConstruct=void 0,t}function i(a){if(a===null){e.consume(a);return}return e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),n.currentConstruct=void 0,t}}const Qa={resolveAll:Or()},Xa=zr("string"),Ja=zr("text");function zr(e){return{resolveAll:Or(e==="text"?Za:void 0),tokenize:n};function n(t){const r=this,i=this.parser.constructs[e],a=t.attempt(i,o,l);return o;function o(h){return u(h)?a(h):l(h)}function l(h){if(h===null){t.consume(h);return}return t.enter("data"),t.consume(h),s}function s(h){return u(h)?(t.exit("data"),a(h)):(t.consume(h),s)}function u(h){if(h===null)return!0;const c=i[h];let f=-1;if(c)for(;++f<c.length;){const p=c[f];if(!p.previous||p.previous.call(r,r.previous))return!0}return!1}}}function Or(e){return n;function n(t,r){let i=-1,a;for(;++i<=t.length;)a===void 0?t[i]&&t[i][1].type==="data"&&(a=i,i++):(!t[i]||t[i][1].type!=="data")&&(i!==a+2&&(t[a][1].end=t[i-1][1].end,t.splice(a+2,i-a-2),i=a+2),a=void 0);return e?e(t,r):t}}function Za(e,n){let t=0;for(;++t<=e.length;)if((t===e.length||e[t][1].type==="lineEnding")&&e[t-1][1].type==="data"){const r=e[t-1][1],i=n.sliceStream(r);let a=i.length,o=-1,l=0,s;for(;a--;){const u=i[a];if(typeof u=="string"){for(o=u.length;u.charCodeAt(o-1)===32;)l++,o--;if(o)break;o=-1}else if(u===-2)s=!0,l++;else if(u!==-1){a++;break}}if(n._contentTypeTextTrailing&&t===e.length&&(l=0),l){const u={type:t===e.length||s||l<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:a?o:r.start._bufferIndex+o,_index:r.start._index+a,line:r.end.line,column:r.end.column-l,offset:r.end.offset-l},end:{...r.end}};r.end={...u.start},r.start.offset===r.end.offset?Object.assign(r,u):(e.splice(t,0,["enter",u,n],["exit",u,n]),t+=2)}t++}return e}const el={42:ee,43:ee,45:ee,48:ee,49:ee,50:ee,51:ee,52:ee,53:ee,54:ee,55:ee,56:ee,57:ee,62:vr},tl={91:oa},nl={[-2]:wt,[-1]:wt,32:wt},rl={35:ha,42:ot,45:[Ln,ot],60:da,61:Ln,95:ot,96:Pn,126:Pn},il={38:Ar,92:Sr},ol={[-5]:kt,[-4]:kt,[-3]:kt,33:La,38:Ar,42:Nt,60:[Do,va],91:Da,92:[ua,Sr],93:Xt,95:Nt,96:Yo},al={null:[Nt,Qa]},ll={null:[42,95]},sl={null:[]},ul=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:ll,contentInitial:tl,disable:sl,document:el,flow:rl,flowInitial:nl,insideSpan:al,string:il,text:ol},Symbol.toStringTag,{value:"Module"}));function cl(e,n,t){let r={_bufferIndex:-1,_index:0,line:t&&t.line||1,column:t&&t.column||1,offset:t&&t.offset||0};const i={},a=[];let o=[],l=[];const s={attempt:j(D),check:j(x),consume:I,enter:S,exit:M,interrupt:j(x,{interrupt:!0})},u={code:null,containerState:{},defineSkip:b,events:[],now:g,parser:e,previous:null,sliceSerialize:f,sliceStream:p,write:c};let h=n.tokenize.call(u,s);return n.resolveAll&&a.push(n),u;function c(z){return o=oe(o,z),v(),o[o.length-1]!==null?[]:(W(n,0),u.events=ht(a,u.events,u),u.events)}function f(z,O){return pl(p(z),O)}function p(z){return hl(o,z)}function g(){const{_bufferIndex:z,_index:O,line:$,column:R,offset:E}=r;return{_bufferIndex:z,_index:O,line:$,column:R,offset:E}}function b(z){i[z.line]=z.column,w()}function v(){let z;for(;r._index<o.length;){const O=o[r._index];if(typeof O=="string")for(z=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===z&&r._bufferIndex<O.length;)y(O.charCodeAt(r._bufferIndex));else y(O)}}function y(z){h=h(z)}function I(z){P(z)?(r.line++,r.column=1,r.offset+=z===-3?2:1,w()):z!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===o[r._index].length&&(r._bufferIndex=-1,r._index++)),u.previous=z}function S(z,O){const $=O||{};return $.type=z,$.start=g(),u.events.push(["enter",$,u]),l.push($),$}function M(z){const O=l.pop();return O.end=g(),u.events.push(["exit",O,u]),O}function D(z,O){W(z,O.from)}function x(z,O){O.restore()}function j(z,O){return $;function $(R,E,q){let K,ae,me,m;return Array.isArray(R)?de(R):"tokenize"in R?de([R]):le(R);function le(Q){return Ne;function Ne(ke){const Te=ke!==null&&Q[ke],Ee=ke!==null&&Q.null,Je=[...Array.isArray(Te)?Te:Te?[Te]:[],...Array.isArray(Ee)?Ee:Ee?[Ee]:[]];return de(Je)(ke)}}function de(Q){return K=Q,ae=0,Q.length===0?q:d(Q[ae])}function d(Q){return Ne;function Ne(ke){return m=H(),me=Q,Q.partial||(u.currentConstruct=Q),Q.name&&u.parser.constructs.disable.null.includes(Q.name)?ve():Q.tokenize.call(O?Object.assign(Object.create(u),O):u,s,se,ve)(ke)}}function se(Q){return z(me,m),E}function ve(Q){return m.restore(),++ae<K.length?d(K[ae]):q}}}function W(z,O){z.resolveAll&&!a.includes(z)&&a.push(z),z.resolve&&ie(u.events,O,u.events.length-O,z.resolve(u.events.slice(O),u)),z.resolveTo&&(u.events=z.resolveTo(u.events,u))}function H(){const z=g(),O=u.previous,$=u.currentConstruct,R=u.events.length,E=Array.from(l);return{from:R,restore:q};function q(){r=z,u.previous=O,u.currentConstruct=$,u.events.length=R,l=E,w()}}function w(){r.line in i&&r.column<2&&(r.column=i[r.line],r.offset+=i[r.line]-1)}}function hl(e,n){const t=n.start._index,r=n.start._bufferIndex,i=n.end._index,a=n.end._bufferIndex;let o;if(t===i)o=[e[t].slice(r,a)];else{if(o=e.slice(t,i),r>-1){const l=o[0];typeof l=="string"?o[0]=l.slice(r):o.shift()}a>0&&o.push(e[i].slice(0,a))}return o}function pl(e,n){let t=-1;const r=[];let i;for(;++t<e.length;){const a=e[t];let o;if(typeof a=="string")o=a;else switch(a){case-5:{o="\r";break}case-4:{o=`
`;break}case-3:{o=`\r
`;break}case-2:{o=n?" ":"	";break}case-1:{if(!n&&i)continue;o=" ";break}default:o=String.fromCharCode(a)}i=a===-2,r.push(o)}return r.join("")}function fl(e){const r={constructs:xr([ul,...(e||{}).extensions||[]]),content:i(Eo),defined:[],document:i(Oo),flow:i(Ya),lazy:{},string:i(Xa),text:i(Ja)};return r;function i(a){return o;function o(l){return cl(r,a,l)}}}function ml(e){for(;!Cr(e););return e}const Mn=/[\0\t\n\r]/g;function dl(){let e=1,n="",t=!0,r;return i;function i(a,o,l){const s=[];let u,h,c,f,p;for(a=n+(typeof a=="string"?a.toString():new TextDecoder(o||void 0).decode(a)),c=0,n="",t&&(a.charCodeAt(0)===65279&&c++,t=void 0);c<a.length;){if(Mn.lastIndex=c,u=Mn.exec(a),f=u&&u.index!==void 0?u.index:a.length,p=a.charCodeAt(f),!u){n=a.slice(c);break}if(p===10&&c===f&&r)s.push(-3),r=void 0;else switch(r&&(s.push(-5),r=void 0),c<f&&(s.push(a.slice(c,f)),e+=f-c),p){case 0:{s.push(65533),e++;break}case 9:{for(h=Math.ceil(e/4)*4,s.push(-2);e++<h;)s.push(-1);break}case 10:{s.push(-4),e=1;break}default:r=!0,e=1}c=f+1}return l&&(r&&s.push(-5),n&&s.push(n),s.push(null)),s}}const gl=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function yl(e){return e.replace(gl,wl)}function wl(e,n,t){if(n)return n;if(t.charCodeAt(0)===35){const i=t.charCodeAt(1),a=i===120||i===88;return br(t.slice(a?2:1),a?16:10)}return Qt(t)||e}const Pr={}.hasOwnProperty;function kl(e,n,t){return typeof n!="string"&&(t=n,n=void 0),xl(t)(ml(fl(t).document().write(dl()(e,n,!0))))}function xl(e){const n={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:a(hn),autolinkProtocol:H,autolinkEmail:H,atxHeading:a(sn),blockQuote:a(Ee),characterEscape:H,characterReference:H,codeFenced:a(Je),codeFencedFenceInfo:o,codeFencedFenceMeta:o,codeIndented:a(Je,o),codeText:a(ci,o),codeTextData:H,data:H,codeFlowValue:H,definition:a(hi),definitionDestinationString:o,definitionLabelString:o,definitionTitleString:o,emphasis:a(pi),hardBreakEscape:a(un),hardBreakTrailing:a(un),htmlFlow:a(cn,o),htmlFlowData:H,htmlText:a(cn,o),htmlTextData:H,image:a(fi),label:o,link:a(hn),listItem:a(mi),listItemValue:f,listOrdered:a(pn,c),listUnordered:a(pn),paragraph:a(di),reference:d,referenceString:o,resourceDestinationString:o,resourceTitleString:o,setextHeading:a(sn),strong:a(gi),thematicBreak:a(wi)},exit:{atxHeading:s(),atxHeadingSequence:D,autolink:s(),autolinkEmail:Te,autolinkProtocol:ke,blockQuote:s(),characterEscapeValue:w,characterReferenceMarkerHexadecimal:ve,characterReferenceMarkerNumeric:ve,characterReferenceValue:Q,characterReference:Ne,codeFenced:s(v),codeFencedFence:b,codeFencedFenceInfo:p,codeFencedFenceMeta:g,codeFlowValue:w,codeIndented:s(y),codeText:s(E),codeTextData:w,data:w,definition:s(),definitionDestinationString:M,definitionLabelString:I,definitionTitleString:S,emphasis:s(),hardBreakEscape:s(O),hardBreakTrailing:s(O),htmlFlow:s($),htmlFlowData:w,htmlText:s(R),htmlTextData:w,image:s(K),label:me,labelText:ae,lineEnding:z,link:s(q),listItem:s(),listOrdered:s(),listUnordered:s(),paragraph:s(),referenceString:se,resourceDestinationString:m,resourceTitleString:le,resource:de,setextHeading:s(W),setextHeadingLineSequence:j,setextHeadingText:x,strong:s(),thematicBreak:s()}};Rr(n,(e||{}).mdastExtensions||[]);const t={};return r;function r(k){let T={type:"root",children:[]};const L={stack:[T],tokenStack:[],config:n,enter:l,exit:u,buffer:o,resume:h,data:t},_=[];let U=-1;for(;++U<k.length;)if(k[U][1].type==="listOrdered"||k[U][1].type==="listUnordered")if(k[U][0]==="enter")_.push(U);else{const ue=_.pop();U=i(k,ue,U)}for(U=-1;++U<k.length;){const ue=n[k[U][0]];Pr.call(ue,k[U][1].type)&&ue[k[U][1].type].call(Object.assign({sliceSerialize:k[U][2].sliceSerialize},L),k[U][1])}if(L.tokenStack.length>0){const ue=L.tokenStack[L.tokenStack.length-1];(ue[1]||Dn).call(L,void 0,ue[0])}for(T.position={start:xe(k.length>0?k[0][1].start:{line:1,column:1,offset:0}),end:xe(k.length>0?k[k.length-2][1].end:{line:1,column:1,offset:0})},U=-1;++U<n.transforms.length;)T=n.transforms[U](T)||T;return T}function i(k,T,L){let _=T-1,U=-1,ue=!1,Se,ge,je,_e;for(;++_<=L;){const ne=k[_];switch(ne[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{ne[0]==="enter"?U++:U--,_e=void 0;break}case"lineEndingBlank":{ne[0]==="enter"&&(Se&&!_e&&!U&&!je&&(je=_),_e=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:_e=void 0}if(!U&&ne[0]==="enter"&&ne[1].type==="listItemPrefix"||U===-1&&ne[0]==="exit"&&(ne[1].type==="listUnordered"||ne[1].type==="listOrdered")){if(Se){let ze=_;for(ge=void 0;ze--;){const ye=k[ze];if(ye[1].type==="lineEnding"||ye[1].type==="lineEndingBlank"){if(ye[0]==="exit")continue;ge&&(k[ge][1].type="lineEndingBlank",ue=!0),ye[1].type="lineEnding",ge=ze}else if(!(ye[1].type==="linePrefix"||ye[1].type==="blockQuotePrefix"||ye[1].type==="blockQuotePrefixWhitespace"||ye[1].type==="blockQuoteMarker"||ye[1].type==="listItemIndent"))break}je&&(!ge||je<ge)&&(Se._spread=!0),Se.end=Object.assign({},ge?k[ge][1].start:ne[1].end),k.splice(ge||_,0,["exit",Se,ne[2]]),_++,L++}if(ne[1].type==="listItemPrefix"){const ze={type:"listItem",_spread:!1,start:Object.assign({},ne[1].start),end:void 0};Se=ze,k.splice(_,0,["enter",ze,ne[2]]),_++,L++,je=void 0,_e=!0}}}return k[T][1]._spread=ue,L}function a(k,T){return L;function L(_){l.call(this,k(_),_),T&&T.call(this,_)}}function o(){this.stack.push({type:"fragment",children:[]})}function l(k,T,L){this.stack[this.stack.length-1].children.push(k),this.stack.push(k),this.tokenStack.push([T,L||void 0]),k.position={start:xe(T.start),end:void 0}}function s(k){return T;function T(L){k&&k.call(this,L),u.call(this,L)}}function u(k,T){const L=this.stack.pop(),_=this.tokenStack.pop();if(_)_[0].type!==k.type&&(T?T.call(this,k,_[0]):(_[1]||Dn).call(this,k,_[0]));else throw new Error("Cannot close `"+k.type+"` ("+qe({start:k.start,end:k.end})+"): it’s not open");L.position.end=xe(k.end)}function h(){return Kt(this.stack.pop())}function c(){this.data.expectingFirstListItemValue=!0}function f(k){if(this.data.expectingFirstListItemValue){const T=this.stack[this.stack.length-2];T.start=Number.parseInt(this.sliceSerialize(k),10),this.data.expectingFirstListItemValue=void 0}}function p(){const k=this.resume(),T=this.stack[this.stack.length-1];T.lang=k}function g(){const k=this.resume(),T=this.stack[this.stack.length-1];T.meta=k}function b(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function v(){const k=this.resume(),T=this.stack[this.stack.length-1];T.value=k.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function y(){const k=this.resume(),T=this.stack[this.stack.length-1];T.value=k.replace(/(\r?\n|\r)$/g,"")}function I(k){const T=this.resume(),L=this.stack[this.stack.length-1];L.label=T,L.identifier=ce(this.sliceSerialize(k)).toLowerCase()}function S(){const k=this.resume(),T=this.stack[this.stack.length-1];T.title=k}function M(){const k=this.resume(),T=this.stack[this.stack.length-1];T.url=k}function D(k){const T=this.stack[this.stack.length-1];if(!T.depth){const L=this.sliceSerialize(k).length;T.depth=L}}function x(){this.data.setextHeadingSlurpLineEnding=!0}function j(k){const T=this.stack[this.stack.length-1];T.depth=this.sliceSerialize(k).codePointAt(0)===61?1:2}function W(){this.data.setextHeadingSlurpLineEnding=void 0}function H(k){const L=this.stack[this.stack.length-1].children;let _=L[L.length-1];(!_||_.type!=="text")&&(_=yi(),_.position={start:xe(k.start),end:void 0},L.push(_)),this.stack.push(_)}function w(k){const T=this.stack.pop();T.value+=this.sliceSerialize(k),T.position.end=xe(k.end)}function z(k){const T=this.stack[this.stack.length-1];if(this.data.atHardBreak){const L=T.children[T.children.length-1];L.position.end=xe(k.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&n.canContainEols.includes(T.type)&&(H.call(this,k),w.call(this,k))}function O(){this.data.atHardBreak=!0}function $(){const k=this.resume(),T=this.stack[this.stack.length-1];T.value=k}function R(){const k=this.resume(),T=this.stack[this.stack.length-1];T.value=k}function E(){const k=this.resume(),T=this.stack[this.stack.length-1];T.value=k}function q(){const k=this.stack[this.stack.length-1];if(this.data.inReference){const T=this.data.referenceType||"shortcut";k.type+="Reference",k.referenceType=T,delete k.url,delete k.title}else delete k.identifier,delete k.label;this.data.referenceType=void 0}function K(){const k=this.stack[this.stack.length-1];if(this.data.inReference){const T=this.data.referenceType||"shortcut";k.type+="Reference",k.referenceType=T,delete k.url,delete k.title}else delete k.identifier,delete k.label;this.data.referenceType=void 0}function ae(k){const T=this.sliceSerialize(k),L=this.stack[this.stack.length-2];L.label=yl(T),L.identifier=ce(T).toLowerCase()}function me(){const k=this.stack[this.stack.length-1],T=this.resume(),L=this.stack[this.stack.length-1];if(this.data.inReference=!0,L.type==="link"){const _=k.children;L.children=_}else L.alt=T}function m(){const k=this.resume(),T=this.stack[this.stack.length-1];T.url=k}function le(){const k=this.resume(),T=this.stack[this.stack.length-1];T.title=k}function de(){this.data.inReference=void 0}function d(){this.data.referenceType="collapsed"}function se(k){const T=this.resume(),L=this.stack[this.stack.length-1];L.label=T,L.identifier=ce(this.sliceSerialize(k)).toLowerCase(),this.data.referenceType="full"}function ve(k){this.data.characterReferenceType=k.type}function Q(k){const T=this.sliceSerialize(k),L=this.data.characterReferenceType;let _;L?(_=br(T,L==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):_=Qt(T);const U=this.stack[this.stack.length-1];U.value+=_}function Ne(k){const T=this.stack.pop();T.position.end=xe(k.end)}function ke(k){w.call(this,k);const T=this.stack[this.stack.length-1];T.url=this.sliceSerialize(k)}function Te(k){w.call(this,k);const T=this.stack[this.stack.length-1];T.url="mailto:"+this.sliceSerialize(k)}function Ee(){return{type:"blockquote",children:[]}}function Je(){return{type:"code",lang:null,meta:null,value:""}}function ci(){return{type:"inlineCode",value:""}}function hi(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function pi(){return{type:"emphasis",children:[]}}function sn(){return{type:"heading",depth:0,children:[]}}function un(){return{type:"break"}}function cn(){return{type:"html",value:""}}function fi(){return{type:"image",title:null,url:"",alt:null}}function hn(){return{type:"link",title:null,url:"",children:[]}}function pn(k){return{type:"list",ordered:k.type==="listOrdered",start:null,spread:k._spread,children:[]}}function mi(k){return{type:"listItem",spread:k._spread,checked:null,children:[]}}function di(){return{type:"paragraph",children:[]}}function gi(){return{type:"strong",children:[]}}function yi(){return{type:"text",value:""}}function wi(){return{type:"thematicBreak"}}}function xe(e){return{line:e.line,column:e.column,offset:e.offset}}function Rr(e,n){let t=-1;for(;++t<n.length;){const r=n[t];Array.isArray(r)?Rr(e,r):bl(e,r)}}function bl(e,n){let t;for(t in n)if(Pr.call(n,t))switch(t){case"canContainEols":{const r=n[t];r&&e[t].push(...r);break}case"transforms":{const r=n[t];r&&e[t].push(...r);break}case"enter":case"exit":{const r=n[t];r&&Object.assign(e[t],r);break}}}function Dn(e,n){throw e?new Error("Cannot close `"+e.type+"` ("+qe({start:e.start,end:e.end})+"): a different token (`"+n.type+"`, "+qe({start:n.start,end:n.end})+") is open"):new Error("Cannot close document, a token (`"+n.type+"`, "+qe({start:n.start,end:n.end})+") is still open")}function vl(e){const n=this;n.parser=t;function t(r){return kl(r,{...n.data("settings"),...e,extensions:n.data("micromarkExtensions")||[],mdastExtensions:n.data("fromMarkdownExtensions")||[]})}}function Sl(e,n){const t={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(n),!0)};return e.patch(n,t),e.applyData(n,t)}function Al(e,n){const t={type:"element",tagName:"br",properties:{},children:[]};return e.patch(n,t),[e.applyData(n,t),{type:"text",value:`
`}]}function Cl(e,n){const t=n.value?n.value+`
`:"",r={},i=n.lang?n.lang.split(/\s+/):[];i.length>0&&(r.className=["language-"+i[0]]);let a={type:"element",tagName:"code",properties:r,children:[{type:"text",value:t}]};return n.meta&&(a.data={meta:n.meta}),e.patch(n,a),a=e.applyData(n,a),a={type:"element",tagName:"pre",properties:{},children:[a]},e.patch(n,a),a}function Il(e,n){const t={type:"element",tagName:"del",properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}function Tl(e,n){const t={type:"element",tagName:"em",properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}function El(e,n){const t=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",r=String(n.identifier).toUpperCase(),i=Fe(r.toLowerCase()),a=e.footnoteOrder.indexOf(r);let o,l=e.footnoteCounts.get(r);l===void 0?(l=0,e.footnoteOrder.push(r),o=e.footnoteOrder.length):o=a+1,l+=1,e.footnoteCounts.set(r,l);const s={type:"element",tagName:"a",properties:{href:"#"+t+"fn-"+i,id:t+"fnref-"+i+(l>1?"-"+l:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(o)}]};e.patch(n,s);const u={type:"element",tagName:"sup",properties:{},children:[s]};return e.patch(n,u),e.applyData(n,u)}function zl(e,n){const t={type:"element",tagName:"h"+n.depth,properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}function Ol(e,n){if(e.options.allowDangerousHtml){const t={type:"raw",value:n.value};return e.patch(n,t),e.applyData(n,t)}}function Lr(e,n){const t=n.referenceType;let r="]";if(t==="collapsed"?r+="[]":t==="full"&&(r+="["+(n.label||n.identifier)+"]"),n.type==="imageReference")return[{type:"text",value:"!["+n.alt+r}];const i=e.all(n),a=i[0];a&&a.type==="text"?a.value="["+a.value:i.unshift({type:"text",value:"["});const o=i[i.length-1];return o&&o.type==="text"?o.value+=r:i.push({type:"text",value:r}),i}function Pl(e,n){const t=String(n.identifier).toUpperCase(),r=e.definitionById.get(t);if(!r)return Lr(e,n);const i={src:Fe(r.url||""),alt:n.alt};r.title!==null&&r.title!==void 0&&(i.title=r.title);const a={type:"element",tagName:"img",properties:i,children:[]};return e.patch(n,a),e.applyData(n,a)}function Rl(e,n){const t={src:Fe(n.url)};n.alt!==null&&n.alt!==void 0&&(t.alt=n.alt),n.title!==null&&n.title!==void 0&&(t.title=n.title);const r={type:"element",tagName:"img",properties:t,children:[]};return e.patch(n,r),e.applyData(n,r)}function Ll(e,n){const t={type:"text",value:n.value.replace(/\r?\n|\r/g," ")};e.patch(n,t);const r={type:"element",tagName:"code",properties:{},children:[t]};return e.patch(n,r),e.applyData(n,r)}function Ml(e,n){const t=String(n.identifier).toUpperCase(),r=e.definitionById.get(t);if(!r)return Lr(e,n);const i={href:Fe(r.url||"")};r.title!==null&&r.title!==void 0&&(i.title=r.title);const a={type:"element",tagName:"a",properties:i,children:e.all(n)};return e.patch(n,a),e.applyData(n,a)}function Dl(e,n){const t={href:Fe(n.url)};n.title!==null&&n.title!==void 0&&(t.title=n.title);const r={type:"element",tagName:"a",properties:t,children:e.all(n)};return e.patch(n,r),e.applyData(n,r)}function Fl(e,n,t){const r=e.all(n),i=t?Nl(t):Mr(n),a={},o=[];if(typeof n.checked=="boolean"){const h=r[0];let c;h&&h.type==="element"&&h.tagName==="p"?c=h:(c={type:"element",tagName:"p",properties:{},children:[]},r.unshift(c)),c.children.length>0&&c.children.unshift({type:"text",value:" "}),c.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:n.checked,disabled:!0},children:[]}),a.className=["task-list-item"]}let l=-1;for(;++l<r.length;){const h=r[l];(i||l!==0||h.type!=="element"||h.tagName!=="p")&&o.push({type:"text",value:`
`}),h.type==="element"&&h.tagName==="p"&&!i?o.push(...h.children):o.push(h)}const s=r[r.length-1];s&&(i||s.type!=="element"||s.tagName!=="p")&&o.push({type:"text",value:`
`});const u={type:"element",tagName:"li",properties:a,children:o};return e.patch(n,u),e.applyData(n,u)}function Nl(e){let n=!1;if(e.type==="list"){n=e.spread||!1;const t=e.children;let r=-1;for(;!n&&++r<t.length;)n=Mr(t[r])}return n}function Mr(e){const n=e.spread;return n??e.children.length>1}function jl(e,n){const t={},r=e.all(n);let i=-1;for(typeof n.start=="number"&&n.start!==1&&(t.start=n.start);++i<r.length;){const o=r[i];if(o.type==="element"&&o.tagName==="li"&&o.properties&&Array.isArray(o.properties.className)&&o.properties.className.includes("task-list-item")){t.className=["contains-task-list"];break}}const a={type:"element",tagName:n.ordered?"ol":"ul",properties:t,children:e.wrap(r,!0)};return e.patch(n,a),e.applyData(n,a)}function _l(e,n){const t={type:"element",tagName:"p",properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}function Bl(e,n){const t={type:"root",children:e.wrap(e.all(n))};return e.patch(n,t),e.applyData(n,t)}function Hl(e,n){const t={type:"element",tagName:"strong",properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}function Wl(e,n){const t=e.all(n),r=t.shift(),i=[];if(r){const o={type:"element",tagName:"thead",properties:{},children:e.wrap([r],!0)};e.patch(n.children[0],o),i.push(o)}if(t.length>0){const o={type:"element",tagName:"tbody",properties:{},children:e.wrap(t,!0)},l=Ut(n.children[1]),s=fr(n.children[n.children.length-1]);l&&s&&(o.position={start:l,end:s}),i.push(o)}const a={type:"element",tagName:"table",properties:{},children:e.wrap(i,!0)};return e.patch(n,a),e.applyData(n,a)}function $l(e,n,t){const r=t?t.children:void 0,a=(r?r.indexOf(n):1)===0?"th":"td",o=t&&t.type==="table"?t.align:void 0,l=o?o.length:n.children.length;let s=-1;const u=[];for(;++s<l;){const c=n.children[s],f={},p=o?o[s]:void 0;p&&(f.align=p);let g={type:"element",tagName:a,properties:f,children:[]};c&&(g.children=e.all(c),e.patch(c,g),g=e.applyData(c,g)),u.push(g)}const h={type:"element",tagName:"tr",properties:{},children:e.wrap(u,!0)};return e.patch(n,h),e.applyData(n,h)}function ql(e,n){const t={type:"element",tagName:"td",properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}const Fn=9,Nn=32;function Ul(e){const n=String(e),t=/\r?\n|\r/g;let r=t.exec(n),i=0;const a=[];for(;r;)a.push(jn(n.slice(i,r.index),i>0,!0),r[0]),i=r.index+r[0].length,r=t.exec(n);return a.push(jn(n.slice(i),i>0,!1)),a.join("")}function jn(e,n,t){let r=0,i=e.length;if(n){let a=e.codePointAt(r);for(;a===Fn||a===Nn;)r++,a=e.codePointAt(r)}if(t){let a=e.codePointAt(i-1);for(;a===Fn||a===Nn;)i--,a=e.codePointAt(i-1)}return i>r?e.slice(r,i):""}function Vl(e,n){const t={type:"text",value:Ul(String(n.value))};return e.patch(n,t),e.applyData(n,t)}function Gl(e,n){const t={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(n,t),e.applyData(n,t)}const Yl={blockquote:Sl,break:Al,code:Cl,delete:Il,emphasis:Tl,footnoteReference:El,heading:zl,html:Ol,imageReference:Pl,image:Rl,inlineCode:Ll,linkReference:Ml,link:Dl,listItem:Fl,list:jl,paragraph:_l,root:Bl,strong:Hl,table:Wl,tableCell:ql,tableRow:$l,text:Vl,thematicBreak:Gl,toml:et,yaml:et,definition:et,footnoteDefinition:et};function et(){}const Dr=-1,pt=0,Ve=1,lt=2,Jt=3,Zt=4,en=5,tn=6,Fr=7,Nr=8,_n=typeof self=="object"?self:globalThis,Kl=(e,n)=>{const t=(i,a)=>(e.set(a,i),i),r=i=>{if(e.has(i))return e.get(i);const[a,o]=n[i];switch(a){case pt:case Dr:return t(o,i);case Ve:{const l=t([],i);for(const s of o)l.push(r(s));return l}case lt:{const l=t({},i);for(const[s,u]of o)l[r(s)]=r(u);return l}case Jt:return t(new Date(o),i);case Zt:{const{source:l,flags:s}=o;return t(new RegExp(l,s),i)}case en:{const l=t(new Map,i);for(const[s,u]of o)l.set(r(s),r(u));return l}case tn:{const l=t(new Set,i);for(const s of o)l.add(r(s));return l}case Fr:{const{name:l,message:s}=o;return t(new _n[l](s),i)}case Nr:return t(BigInt(o),i);case"BigInt":return t(Object(BigInt(o)),i);case"ArrayBuffer":return t(new Uint8Array(o).buffer,o);case"DataView":{const{buffer:l}=new Uint8Array(o);return t(new DataView(l),o)}}return t(new _n[a](o),i)};return r},Bn=e=>Kl(new Map,e)(0),Pe="",{toString:Ql}={},{keys:Xl}=Object,$e=e=>{const n=typeof e;if(n!=="object"||!e)return[pt,n];const t=Ql.call(e).slice(8,-1);switch(t){case"Array":return[Ve,Pe];case"Object":return[lt,Pe];case"Date":return[Jt,Pe];case"RegExp":return[Zt,Pe];case"Map":return[en,Pe];case"Set":return[tn,Pe];case"DataView":return[Ve,t]}return t.includes("Array")?[Ve,t]:t.includes("Error")?[Fr,t]:[lt,t]},tt=([e,n])=>e===pt&&(n==="function"||n==="symbol"),Jl=(e,n,t,r)=>{const i=(o,l)=>{const s=r.push(o)-1;return t.set(l,s),s},a=o=>{if(t.has(o))return t.get(o);let[l,s]=$e(o);switch(l){case pt:{let h=o;switch(s){case"bigint":l=Nr,h=o.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+s);h=null;break;case"undefined":return i([Dr],o)}return i([l,h],o)}case Ve:{if(s){let f=o;return s==="DataView"?f=new Uint8Array(o.buffer):s==="ArrayBuffer"&&(f=new Uint8Array(o)),i([s,[...f]],o)}const h=[],c=i([l,h],o);for(const f of o)h.push(a(f));return c}case lt:{if(s)switch(s){case"BigInt":return i([s,o.toString()],o);case"Boolean":case"Number":case"String":return i([s,o.valueOf()],o)}if(n&&"toJSON"in o)return a(o.toJSON());const h=[],c=i([l,h],o);for(const f of Xl(o))(e||!tt($e(o[f])))&&h.push([a(f),a(o[f])]);return c}case Jt:return i([l,o.toISOString()],o);case Zt:{const{source:h,flags:c}=o;return i([l,{source:h,flags:c}],o)}case en:{const h=[],c=i([l,h],o);for(const[f,p]of o)(e||!(tt($e(f))||tt($e(p))))&&h.push([a(f),a(p)]);return c}case tn:{const h=[],c=i([l,h],o);for(const f of o)(e||!tt($e(f)))&&h.push(a(f));return c}}const{message:u}=o;return i([l,{name:s,message:u}],o)};return a},Hn=(e,{json:n,lossy:t}={})=>{const r=[];return Jl(!(n||t),!!n,new Map,r)(e),r},st=typeof structuredClone=="function"?(e,n)=>n&&("json"in n||"lossy"in n)?Bn(Hn(e,n)):structuredClone(e):(e,n)=>Bn(Hn(e,n));function Zl(e,n){const t=[{type:"text",value:"↩"}];return n>1&&t.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(n)}]}),t}function es(e,n){return"Back to reference "+(e+1)+(n>1?"-"+n:"")}function ts(e){const n=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",t=e.options.footnoteBackContent||Zl,r=e.options.footnoteBackLabel||es,i=e.options.footnoteLabel||"Footnotes",a=e.options.footnoteLabelTagName||"h2",o=e.options.footnoteLabelProperties||{className:["sr-only"]},l=[];let s=-1;for(;++s<e.footnoteOrder.length;){const u=e.footnoteById.get(e.footnoteOrder[s]);if(!u)continue;const h=e.all(u),c=String(u.identifier).toUpperCase(),f=Fe(c.toLowerCase());let p=0;const g=[],b=e.footnoteCounts.get(c);for(;b!==void 0&&++p<=b;){g.length>0&&g.push({type:"text",value:" "});let I=typeof t=="string"?t:t(s,p);typeof I=="string"&&(I={type:"text",value:I}),g.push({type:"element",tagName:"a",properties:{href:"#"+n+"fnref-"+f+(p>1?"-"+p:""),dataFootnoteBackref:"",ariaLabel:typeof r=="string"?r:r(s,p),className:["data-footnote-backref"]},children:Array.isArray(I)?I:[I]})}const v=h[h.length-1];if(v&&v.type==="element"&&v.tagName==="p"){const I=v.children[v.children.length-1];I&&I.type==="text"?I.value+=" ":v.children.push({type:"text",value:" "}),v.children.push(...g)}else h.push(...g);const y={type:"element",tagName:"li",properties:{id:n+"fn-"+f},children:e.wrap(h,!0)};e.patch(u,y),l.push(y)}if(l.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:a,properties:{...st(o),id:"footnote-label"},children:[{type:"text",value:i}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:e.wrap(l,!0)},{type:"text",value:`
`}]}}const ft=(function(e){if(e==null)return os;if(typeof e=="function")return mt(e);if(typeof e=="object")return Array.isArray(e)?ns(e):rs(e);if(typeof e=="string")return is(e);throw new Error("Expected function, string, or object as test")});function ns(e){const n=[];let t=-1;for(;++t<e.length;)n[t]=ft(e[t]);return mt(r);function r(...i){let a=-1;for(;++a<n.length;)if(n[a].apply(this,i))return!0;return!1}}function rs(e){const n=e;return mt(t);function t(r){const i=r;let a;for(a in e)if(i[a]!==n[a])return!1;return!0}}function is(e){return mt(n);function n(t){return t&&t.type===e}}function mt(e){return n;function n(t,r,i){return!!(as(t)&&e.call(this,t,typeof r=="number"?r:void 0,i||void 0))}}function os(){return!0}function as(e){return e!==null&&typeof e=="object"&&"type"in e}const jr=[],ls=!0,jt=!1,ss="skip";function _r(e,n,t,r){let i;typeof n=="function"&&typeof t!="function"?(r=t,t=n):i=n;const a=ft(i),o=r?-1:1;l(e,void 0,[])();function l(s,u,h){const c=s&&typeof s=="object"?s:{};if(typeof c.type=="string"){const p=typeof c.tagName=="string"?c.tagName:typeof c.name=="string"?c.name:void 0;Object.defineProperty(f,"name",{value:"node ("+(s.type+(p?"<"+p+">":""))+")"})}return f;function f(){let p=jr,g,b,v;if((!n||a(s,u,h[h.length-1]||void 0))&&(p=us(t(s,h)),p[0]===jt))return p;if("children"in s&&s.children){const y=s;if(y.children&&p[0]!==ss)for(b=(r?y.children.length:-1)+o,v=h.concat(y);b>-1&&b<y.children.length;){const I=y.children[b];if(g=l(I,b,v)(),g[0]===jt)return g;b=typeof g[1]=="number"?g[1]:b+o}}return p}}}function us(e){return Array.isArray(e)?e:typeof e=="number"?[ls,e]:e==null?jr:[e]}function nn(e,n,t,r){let i,a,o;typeof n=="function"&&typeof t!="function"?(a=void 0,o=n,i=t):(a=n,o=t,i=r),_r(e,a,l,i);function l(s,u){const h=u[u.length-1],c=h?h.children.indexOf(s):void 0;return o(s,c,h)}}const _t={}.hasOwnProperty,cs={};function hs(e,n){const t=n||cs,r=new Map,i=new Map,a=new Map,o={...Yl,...t.handlers},l={all:u,applyData:fs,definitionById:r,footnoteById:i,footnoteCounts:a,footnoteOrder:[],handlers:o,one:s,options:t,patch:ps,wrap:ds};return nn(e,function(h){if(h.type==="definition"||h.type==="footnoteDefinition"){const c=h.type==="definition"?r:i,f=String(h.identifier).toUpperCase();c.has(f)||c.set(f,h)}}),l;function s(h,c){const f=h.type,p=l.handlers[f];if(_t.call(l.handlers,f)&&p)return p(l,h,c);if(l.options.passThrough&&l.options.passThrough.includes(f)){if("children"in h){const{children:b,...v}=h,y=st(v);return y.children=l.all(h),y}return st(h)}return(l.options.unknownHandler||ms)(l,h,c)}function u(h){const c=[];if("children"in h){const f=h.children;let p=-1;for(;++p<f.length;){const g=l.one(f[p],h);if(g){if(p&&f[p-1].type==="break"&&(!Array.isArray(g)&&g.type==="text"&&(g.value=Wn(g.value)),!Array.isArray(g)&&g.type==="element")){const b=g.children[0];b&&b.type==="text"&&(b.value=Wn(b.value))}Array.isArray(g)?c.push(...g):c.push(g)}}}return c}}function ps(e,n){e.position&&(n.position=Zi(e))}function fs(e,n){let t=n;if(e&&e.data){const r=e.data.hName,i=e.data.hChildren,a=e.data.hProperties;if(typeof r=="string")if(t.type==="element")t.tagName=r;else{const o="children"in t?t.children:[t];t={type:"element",tagName:r,properties:{},children:o}}t.type==="element"&&a&&Object.assign(t.properties,st(a)),"children"in t&&t.children&&i!==null&&i!==void 0&&(t.children=i)}return t}function ms(e,n){const t=n.data||{},r="value"in n&&!(_t.call(t,"hProperties")||_t.call(t,"hChildren"))?{type:"text",value:n.value}:{type:"element",tagName:"div",properties:{},children:e.all(n)};return e.patch(n,r),e.applyData(n,r)}function ds(e,n){const t=[];let r=-1;for(n&&t.push({type:"text",value:`
`});++r<e.length;)r&&t.push({type:"text",value:`
`}),t.push(e[r]);return n&&e.length>0&&t.push({type:"text",value:`
`}),t}function Wn(e){let n=0,t=e.charCodeAt(n);for(;t===9||t===32;)n++,t=e.charCodeAt(n);return e.slice(n)}function $n(e,n){const t=hs(e,n),r=t.one(e,void 0),i=ts(t),a=Array.isArray(r)?{type:"root",children:r}:r||{type:"root",children:[]};return i&&a.children.push({type:"text",value:`
`},i),a}function gs(e,n){return e&&"run"in e?async function(t,r){const i=$n(t,{file:r,...n});await e.run(i,r)}:function(t,r){return $n(t,{file:r,...e||n})}}function qn(e){if(e)throw e}var xt,Un;function ys(){if(Un)return xt;Un=1;var e=Object.prototype.hasOwnProperty,n=Object.prototype.toString,t=Object.defineProperty,r=Object.getOwnPropertyDescriptor,i=function(u){return typeof Array.isArray=="function"?Array.isArray(u):n.call(u)==="[object Array]"},a=function(u){if(!u||n.call(u)!=="[object Object]")return!1;var h=e.call(u,"constructor"),c=u.constructor&&u.constructor.prototype&&e.call(u.constructor.prototype,"isPrototypeOf");if(u.constructor&&!h&&!c)return!1;var f;for(f in u);return typeof f>"u"||e.call(u,f)},o=function(u,h){t&&h.name==="__proto__"?t(u,h.name,{enumerable:!0,configurable:!0,value:h.newValue,writable:!0}):u[h.name]=h.newValue},l=function(u,h){if(h==="__proto__")if(e.call(u,h)){if(r)return r(u,h).value}else return;return u[h]};return xt=function s(){var u,h,c,f,p,g,b=arguments[0],v=1,y=arguments.length,I=!1;for(typeof b=="boolean"&&(I=b,b=arguments[1]||{},v=2),(b==null||typeof b!="object"&&typeof b!="function")&&(b={});v<y;++v)if(u=arguments[v],u!=null)for(h in u)c=l(b,h),f=l(u,h),b!==f&&(I&&f&&(a(f)||(p=i(f)))?(p?(p=!1,g=c&&i(c)?c:[]):g=c&&a(c)?c:{},o(b,{name:h,newValue:s(I,g,f)})):typeof f<"u"&&o(b,{name:h,newValue:f}));return b},xt}var ws=ys();const bt=ir(ws);function Bt(e){if(typeof e!="object"||e===null)return!1;const n=Object.getPrototypeOf(e);return(n===null||n===Object.prototype||Object.getPrototypeOf(n)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function ks(){const e=[],n={run:t,use:r};return n;function t(...i){let a=-1;const o=i.pop();if(typeof o!="function")throw new TypeError("Expected function as last argument, not "+o);l(null,...i);function l(s,...u){const h=e[++a];let c=-1;if(s){o(s);return}for(;++c<i.length;)(u[c]===null||u[c]===void 0)&&(u[c]=i[c]);i=u,h?xs(h,l)(...u):o(null,...u)}}function r(i){if(typeof i!="function")throw new TypeError("Expected `middelware` to be a function, not "+i);return e.push(i),n}}function xs(e,n){let t;return r;function r(...o){const l=e.length>o.length;let s;l&&o.push(i);try{s=e.apply(this,o)}catch(u){const h=u;if(l&&t)throw h;return i(h)}l||(s&&s.then&&typeof s.then=="function"?s.then(a,i):s instanceof Error?i(s):a(s))}function i(o,...l){t||(t=!0,n(o,...l))}function a(o){i(null,o)}}const pe={basename:bs,dirname:vs,extname:Ss,join:As,sep:"/"};function bs(e,n){if(n!==void 0&&typeof n!="string")throw new TypeError('"ext" argument must be a string');Xe(e);let t=0,r=-1,i=e.length,a;if(n===void 0||n.length===0||n.length>e.length){for(;i--;)if(e.codePointAt(i)===47){if(a){t=i+1;break}}else r<0&&(a=!0,r=i+1);return r<0?"":e.slice(t,r)}if(n===e)return"";let o=-1,l=n.length-1;for(;i--;)if(e.codePointAt(i)===47){if(a){t=i+1;break}}else o<0&&(a=!0,o=i+1),l>-1&&(e.codePointAt(i)===n.codePointAt(l--)?l<0&&(r=i):(l=-1,r=o));return t===r?r=o:r<0&&(r=e.length),e.slice(t,r)}function vs(e){if(Xe(e),e.length===0)return".";let n=-1,t=e.length,r;for(;--t;)if(e.codePointAt(t)===47){if(r){n=t;break}}else r||(r=!0);return n<0?e.codePointAt(0)===47?"/":".":n===1&&e.codePointAt(0)===47?"//":e.slice(0,n)}function Ss(e){Xe(e);let n=e.length,t=-1,r=0,i=-1,a=0,o;for(;n--;){const l=e.codePointAt(n);if(l===47){if(o){r=n+1;break}continue}t<0&&(o=!0,t=n+1),l===46?i<0?i=n:a!==1&&(a=1):i>-1&&(a=-1)}return i<0||t<0||a===0||a===1&&i===t-1&&i===r+1?"":e.slice(i,t)}function As(...e){let n=-1,t;for(;++n<e.length;)Xe(e[n]),e[n]&&(t=t===void 0?e[n]:t+"/"+e[n]);return t===void 0?".":Cs(t)}function Cs(e){Xe(e);const n=e.codePointAt(0)===47;let t=Is(e,!n);return t.length===0&&!n&&(t="."),t.length>0&&e.codePointAt(e.length-1)===47&&(t+="/"),n?"/"+t:t}function Is(e,n){let t="",r=0,i=-1,a=0,o=-1,l,s;for(;++o<=e.length;){if(o<e.length)l=e.codePointAt(o);else{if(l===47)break;l=47}if(l===47){if(!(i===o-1||a===1))if(i!==o-1&&a===2){if(t.length<2||r!==2||t.codePointAt(t.length-1)!==46||t.codePointAt(t.length-2)!==46){if(t.length>2){if(s=t.lastIndexOf("/"),s!==t.length-1){s<0?(t="",r=0):(t=t.slice(0,s),r=t.length-1-t.lastIndexOf("/")),i=o,a=0;continue}}else if(t.length>0){t="",r=0,i=o,a=0;continue}}n&&(t=t.length>0?t+"/..":"..",r=2)}else t.length>0?t+="/"+e.slice(i+1,o):t=e.slice(i+1,o),r=o-i-1;i=o,a=0}else l===46&&a>-1?a++:a=-1}return t}function Xe(e){if(typeof e!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}const Ts={cwd:Es};function Es(){return"/"}function Ht(e){return!!(e!==null&&typeof e=="object"&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&e.auth===void 0)}function zs(e){if(typeof e=="string")e=new URL(e);else if(!Ht(e)){const n=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw n.code="ERR_INVALID_ARG_TYPE",n}if(e.protocol!=="file:"){const n=new TypeError("The URL must be of scheme file");throw n.code="ERR_INVALID_URL_SCHEME",n}return Os(e)}function Os(e){if(e.hostname!==""){const r=new TypeError('File URL host must be "localhost" or empty on darwin');throw r.code="ERR_INVALID_FILE_URL_HOST",r}const n=e.pathname;let t=-1;for(;++t<n.length;)if(n.codePointAt(t)===37&&n.codePointAt(t+1)===50){const r=n.codePointAt(t+2);if(r===70||r===102){const i=new TypeError("File URL path must not include encoded / characters");throw i.code="ERR_INVALID_FILE_URL_PATH",i}}return decodeURIComponent(n)}const vt=["history","path","basename","stem","extname","dirname"];class Br{constructor(n){let t;n?Ht(n)?t={path:n}:typeof n=="string"||Ps(n)?t={value:n}:t=n:t={},this.cwd="cwd"in t?"":Ts.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let r=-1;for(;++r<vt.length;){const a=vt[r];a in t&&t[a]!==void 0&&t[a]!==null&&(this[a]=a==="history"?[...t[a]]:t[a])}let i;for(i in t)vt.includes(i)||(this[i]=t[i])}get basename(){return typeof this.path=="string"?pe.basename(this.path):void 0}set basename(n){At(n,"basename"),St(n,"basename"),this.path=pe.join(this.dirname||"",n)}get dirname(){return typeof this.path=="string"?pe.dirname(this.path):void 0}set dirname(n){Vn(this.basename,"dirname"),this.path=pe.join(n||"",this.basename)}get extname(){return typeof this.path=="string"?pe.extname(this.path):void 0}set extname(n){if(St(n,"extname"),Vn(this.dirname,"extname"),n){if(n.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(n.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=pe.join(this.dirname,this.stem+(n||""))}get path(){return this.history[this.history.length-1]}set path(n){Ht(n)&&(n=zs(n)),At(n,"path"),this.path!==n&&this.history.push(n)}get stem(){return typeof this.path=="string"?pe.basename(this.path,this.extname):void 0}set stem(n){At(n,"stem"),St(n,"stem"),this.path=pe.join(this.dirname||"",n+(this.extname||""))}fail(n,t,r){const i=this.message(n,t,r);throw i.fatal=!0,i}info(n,t,r){const i=this.message(n,t,r);return i.fatal=void 0,i}message(n,t,r){const i=new J(n,t,r);return this.path&&(i.name=this.path+":"+i.name,i.file=this.path),i.fatal=!1,this.messages.push(i),i}toString(n){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(n||void 0).decode(this.value)}}function St(e,n){if(e&&e.includes(pe.sep))throw new Error("`"+n+"` cannot be a path: did not expect `"+pe.sep+"`")}function At(e,n){if(!e)throw new Error("`"+n+"` cannot be empty")}function Vn(e,n){if(!e)throw new Error("Setting `"+n+"` requires `path` to be set too")}function Ps(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const Rs=(function(e){const r=this.constructor.prototype,i=r[e],a=function(){return i.apply(a,arguments)};return Object.setPrototypeOf(a,r),a}),Ls={}.hasOwnProperty;class rn extends Rs{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=ks()}copy(){const n=new rn;let t=-1;for(;++t<this.attachers.length;){const r=this.attachers[t];n.use(...r)}return n.data(bt(!0,{},this.namespace)),n}data(n,t){return typeof n=="string"?arguments.length===2?(Tt("data",this.frozen),this.namespace[n]=t,this):Ls.call(this.namespace,n)&&this.namespace[n]||void 0:n?(Tt("data",this.frozen),this.namespace=n,this):this.namespace}freeze(){if(this.frozen)return this;const n=this;for(;++this.freezeIndex<this.attachers.length;){const[t,...r]=this.attachers[this.freezeIndex];if(r[0]===!1)continue;r[0]===!0&&(r[0]=void 0);const i=t.call(n,...r);typeof i=="function"&&this.transformers.use(i)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(n){this.freeze();const t=nt(n),r=this.parser||this.Parser;return Ct("parse",r),r(String(t),t)}process(n,t){const r=this;return this.freeze(),Ct("process",this.parser||this.Parser),It("process",this.compiler||this.Compiler),t?i(void 0,t):new Promise(i);function i(a,o){const l=nt(n),s=r.parse(l);r.run(s,l,function(h,c,f){if(h||!c||!f)return u(h);const p=c,g=r.stringify(p,f);Fs(g)?f.value=g:f.result=g,u(h,f)});function u(h,c){h||!c?o(h):a?a(c):t(void 0,c)}}}processSync(n){let t=!1,r;return this.freeze(),Ct("processSync",this.parser||this.Parser),It("processSync",this.compiler||this.Compiler),this.process(n,i),Yn("processSync","process",t),r;function i(a,o){t=!0,qn(a),r=o}}run(n,t,r){Gn(n),this.freeze();const i=this.transformers;return!r&&typeof t=="function"&&(r=t,t=void 0),r?a(void 0,r):new Promise(a);function a(o,l){const s=nt(t);i.run(n,s,u);function u(h,c,f){const p=c||n;h?l(h):o?o(p):r(void 0,p,f)}}}runSync(n,t){let r=!1,i;return this.run(n,t,a),Yn("runSync","run",r),i;function a(o,l){qn(o),i=l,r=!0}}stringify(n,t){this.freeze();const r=nt(t),i=this.compiler||this.Compiler;return It("stringify",i),Gn(n),i(n,r)}use(n,...t){const r=this.attachers,i=this.namespace;if(Tt("use",this.frozen),n!=null)if(typeof n=="function")s(n,t);else if(typeof n=="object")Array.isArray(n)?l(n):o(n);else throw new TypeError("Expected usable value, not `"+n+"`");return this;function a(u){if(typeof u=="function")s(u,[]);else if(typeof u=="object")if(Array.isArray(u)){const[h,...c]=u;s(h,c)}else o(u);else throw new TypeError("Expected usable value, not `"+u+"`")}function o(u){if(!("plugins"in u)&&!("settings"in u))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");l(u.plugins),u.settings&&(i.settings=bt(!0,i.settings,u.settings))}function l(u){let h=-1;if(u!=null)if(Array.isArray(u))for(;++h<u.length;){const c=u[h];a(c)}else throw new TypeError("Expected a list of plugins, not `"+u+"`")}function s(u,h){let c=-1,f=-1;for(;++c<r.length;)if(r[c][0]===u){f=c;break}if(f===-1)r.push([u,...h]);else if(h.length>0){let[p,...g]=h;const b=r[f][1];Bt(b)&&Bt(p)&&(p=bt(!0,b,p)),r[f]=[u,p,...g]}}}}const Ms=new rn().freeze();function Ct(e,n){if(typeof n!="function")throw new TypeError("Cannot `"+e+"` without `parser`")}function It(e,n){if(typeof n!="function")throw new TypeError("Cannot `"+e+"` without `compiler`")}function Tt(e,n){if(n)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function Gn(e){if(!Bt(e)||typeof e.type!="string")throw new TypeError("Expected node, got `"+e+"`")}function Yn(e,n,t){if(!t)throw new Error("`"+e+"` finished async. Use `"+n+"` instead")}function nt(e){return Ds(e)?e:new Br(e)}function Ds(e){return!!(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function Fs(e){return typeof e=="string"||Ns(e)}function Ns(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const js="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",Kn=[],Qn={allowDangerousHtml:!0},_s=/^(https?|ircs?|mailto|xmpp)$/i,Bs=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"className",id:"remove-classname"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function Hs(e){const n=Ws(e),t=$s(e);return qs(n.runSync(n.parse(t),t),e)}function Ws(e){const n=e.rehypePlugins||Kn,t=e.remarkPlugins||Kn,r=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...Qn}:Qn;return Ms().use(vl).use(t).use(gs,r).use(n)}function $s(e){const n=e.children||"",t=new Br;return typeof n=="string"&&(t.value=n),t}function qs(e,n){const t=n.allowedElements,r=n.allowElement,i=n.components,a=n.disallowedElements,o=n.skipHtml,l=n.unwrapDisallowed,s=n.urlTransform||Us;for(const h of Bs)Object.hasOwn(n,h.from)&&(""+h.from+(h.to?"use `"+h.to+"` instead":"remove it")+js+h.id,void 0);return nn(e,u),io(e,{Fragment:C.Fragment,components:i,ignoreInvalidStyle:!0,jsx:C.jsx,jsxs:C.jsxs,passKeys:!0,passNode:!0});function u(h,c,f){if(h.type==="raw"&&f&&typeof c=="number")return o?f.children.splice(c,1):f.children[c]={type:"text",value:h.value},c;if(h.type==="element"){let p;for(p in yt)if(Object.hasOwn(yt,p)&&Object.hasOwn(h.properties,p)){const g=h.properties[p],b=yt[p];(b===null||b.includes(h.tagName))&&(h.properties[p]=s(String(g||""),p,h))}}if(h.type==="element"){let p=t?!t.includes(h.tagName):a?a.includes(h.tagName):!1;if(!p&&r&&typeof c=="number"&&(p=!r(h,c,f)),p&&f&&typeof c=="number")return l&&h.children?f.children.splice(c,1,...h.children):f.children.splice(c,1),c}}}function Us(e){const n=e.indexOf(":"),t=e.indexOf("?"),r=e.indexOf("#"),i=e.indexOf("/");return n===-1||i!==-1&&n>i||t!==-1&&n>t||r!==-1&&n>r||_s.test(e.slice(0,n))?e:""}function Xn(e,n){const t=String(e);if(typeof n!="string")throw new TypeError("Expected character");let r=0,i=t.indexOf(n);for(;i!==-1;)r++,i=t.indexOf(n,i+n.length);return r}function Vs(e){if(typeof e!="string")throw new TypeError("Expected a string");return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}function Gs(e,n,t){const i=ft((t||{}).ignore||[]),a=Ys(n);let o=-1;for(;++o<a.length;)_r(e,"text",l);function l(u,h){let c=-1,f;for(;++c<h.length;){const p=h[c],g=f?f.children:void 0;if(i(p,g?g.indexOf(p):void 0,f))return;f=p}if(f)return s(u,h)}function s(u,h){const c=h[h.length-1],f=a[o][0],p=a[o][1];let g=0;const v=c.children.indexOf(u);let y=!1,I=[];f.lastIndex=0;let S=f.exec(u.value);for(;S;){const M=S.index,D={index:S.index,input:S.input,stack:[...h,u]};let x=p(...S,D);if(typeof x=="string"&&(x=x.length>0?{type:"text",value:x}:void 0),x===!1?f.lastIndex=M+1:(g!==M&&I.push({type:"text",value:u.value.slice(g,M)}),Array.isArray(x)?I.push(...x):x&&I.push(x),g=M+S[0].length,y=!0),!f.global)break;S=f.exec(u.value)}return y?(g<u.value.length&&I.push({type:"text",value:u.value.slice(g)}),c.children.splice(v,1,...I)):I=[u],v+I.length}}function Ys(e){const n=[];if(!Array.isArray(e))throw new TypeError("Expected find and replace tuple or list of tuples");const t=!e[0]||Array.isArray(e[0])?e:[e];let r=-1;for(;++r<t.length;){const i=t[r];n.push([Ks(i[0]),Qs(i[1])])}return n}function Ks(e){return typeof e=="string"?new RegExp(Vs(e),"g"):e}function Qs(e){return typeof e=="function"?e:function(){return e}}const Et="phrasing",zt=["autolink","link","image","label"];function Xs(){return{transforms:[iu],enter:{literalAutolink:Zs,literalAutolinkEmail:Ot,literalAutolinkHttp:Ot,literalAutolinkWww:Ot},exit:{literalAutolink:ru,literalAutolinkEmail:nu,literalAutolinkHttp:eu,literalAutolinkWww:tu}}}function Js(){return{unsafe:[{character:"@",before:"[+\\-.\\w]",after:"[\\-.\\w]",inConstruct:Et,notInConstruct:zt},{character:".",before:"[Ww]",after:"[\\-.\\w]",inConstruct:Et,notInConstruct:zt},{character:":",before:"[ps]",after:"\\/",inConstruct:Et,notInConstruct:zt}]}}function Zs(e){this.enter({type:"link",title:null,url:"",children:[]},e)}function Ot(e){this.config.enter.autolinkProtocol.call(this,e)}function eu(e){this.config.exit.autolinkProtocol.call(this,e)}function tu(e){this.config.exit.data.call(this,e);const n=this.stack[this.stack.length-1];n.type,n.url="http://"+this.sliceSerialize(e)}function nu(e){this.config.exit.autolinkEmail.call(this,e)}function ru(e){this.exit(e)}function iu(e){Gs(e,[[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,ou],[new RegExp("(?<=^|\\s|\\p{P}|\\p{S})([-.\\w+]+)@([-\\w]+(?:\\.[-\\w]+)+)","gu"),au]],{ignore:["link","linkReference"]})}function ou(e,n,t,r,i){let a="";if(!Hr(i)||(/^w/i.test(n)&&(t=n+t,n="",a="http://"),!lu(t)))return!1;const o=su(t+r);if(!o[0])return!1;const l={type:"link",title:null,url:a+n+o[0],children:[{type:"text",value:n+o[0]}]};return o[1]?[l,{type:"text",value:o[1]}]:l}function au(e,n,t,r){return!Hr(r,!0)||/[-\d_]$/.test(t)?!1:{type:"link",title:null,url:"mailto:"+n+"@"+t,children:[{type:"text",value:n+"@"+t}]}}function lu(e){const n=e.split(".");return!(n.length<2||n[n.length-1]&&(/_/.test(n[n.length-1])||!/[a-zA-Z\d]/.test(n[n.length-1]))||n[n.length-2]&&(/_/.test(n[n.length-2])||!/[a-zA-Z\d]/.test(n[n.length-2])))}function su(e){const n=/[!"&'),.:;<>?\]}]+$/.exec(e);if(!n)return[e,void 0];e=e.slice(0,n.index);let t=n[0],r=t.indexOf(")");const i=Xn(e,"(");let a=Xn(e,")");for(;r!==-1&&i>a;)e+=t.slice(0,r+1),t=t.slice(r+1),r=t.indexOf(")"),a++;return[e,t]}function Hr(e,n){const t=e.input.charCodeAt(e.index-1);return(e.index===0||Ce(t)||ct(t))&&(!n||t!==47)}Wr.peek=yu;function uu(){this.buffer()}function cu(e){this.enter({type:"footnoteReference",identifier:"",label:""},e)}function hu(){this.buffer()}function pu(e){this.enter({type:"footnoteDefinition",identifier:"",label:"",children:[]},e)}function fu(e){const n=this.resume(),t=this.stack[this.stack.length-1];t.type,t.identifier=ce(this.sliceSerialize(e)).toLowerCase(),t.label=n}function mu(e){this.exit(e)}function du(e){const n=this.resume(),t=this.stack[this.stack.length-1];t.type,t.identifier=ce(this.sliceSerialize(e)).toLowerCase(),t.label=n}function gu(e){this.exit(e)}function yu(){return"["}function Wr(e,n,t,r){const i=t.createTracker(r);let a=i.move("[^");const o=t.enter("footnoteReference"),l=t.enter("reference");return a+=i.move(t.safe(t.associationId(e),{after:"]",before:a})),l(),o(),a+=i.move("]"),a}function wu(){return{enter:{gfmFootnoteCallString:uu,gfmFootnoteCall:cu,gfmFootnoteDefinitionLabelString:hu,gfmFootnoteDefinition:pu},exit:{gfmFootnoteCallString:fu,gfmFootnoteCall:mu,gfmFootnoteDefinitionLabelString:du,gfmFootnoteDefinition:gu}}}function ku(e){let n=!1;return e&&e.firstLineBlank&&(n=!0),{handlers:{footnoteDefinition:t,footnoteReference:Wr},unsafe:[{character:"[",inConstruct:["label","phrasing","reference"]}]};function t(r,i,a,o){const l=a.createTracker(o);let s=l.move("[^");const u=a.enter("footnoteDefinition"),h=a.enter("label");return s+=l.move(a.safe(a.associationId(r),{before:s,after:"]"})),h(),s+=l.move("]:"),r.children&&r.children.length>0&&(l.shift(4),s+=l.move((n?`
`:" ")+a.indentLines(a.containerFlow(r,l.current()),n?$r:xu))),u(),s}}function xu(e,n,t){return n===0?e:$r(e,n,t)}function $r(e,n,t){return(t?"":"    ")+e}const bu=["autolink","destinationLiteral","destinationRaw","reference","titleQuote","titleApostrophe"];qr.peek=Iu;function vu(){return{canContainEols:["delete"],enter:{strikethrough:Au},exit:{strikethrough:Cu}}}function Su(){return{unsafe:[{character:"~",inConstruct:"phrasing",notInConstruct:bu}],handlers:{delete:qr}}}function Au(e){this.enter({type:"delete",children:[]},e)}function Cu(e){this.exit(e)}function qr(e,n,t,r){const i=t.createTracker(r),a=t.enter("strikethrough");let o=i.move("~~");return o+=t.containerPhrasing(e,{...i.current(),before:o,after:"~"}),o+=i.move("~~"),a(),o}function Iu(){return"~"}function Tu(e){return e.length}function Eu(e,n){const t=n||{},r=(t.align||[]).concat(),i=t.stringLength||Tu,a=[],o=[],l=[],s=[];let u=0,h=-1;for(;++h<e.length;){const b=[],v=[];let y=-1;for(e[h].length>u&&(u=e[h].length);++y<e[h].length;){const I=zu(e[h][y]);if(t.alignDelimiters!==!1){const S=i(I);v[y]=S,(s[y]===void 0||S>s[y])&&(s[y]=S)}b.push(I)}o[h]=b,l[h]=v}let c=-1;if(typeof r=="object"&&"length"in r)for(;++c<u;)a[c]=Jn(r[c]);else{const b=Jn(r);for(;++c<u;)a[c]=b}c=-1;const f=[],p=[];for(;++c<u;){const b=a[c];let v="",y="";b===99?(v=":",y=":"):b===108?v=":":b===114&&(y=":");let I=t.alignDelimiters===!1?1:Math.max(1,s[c]-v.length-y.length);const S=v+"-".repeat(I)+y;t.alignDelimiters!==!1&&(I=v.length+I+y.length,I>s[c]&&(s[c]=I),p[c]=I),f[c]=S}o.splice(1,0,f),l.splice(1,0,p),h=-1;const g=[];for(;++h<o.length;){const b=o[h],v=l[h];c=-1;const y=[];for(;++c<u;){const I=b[c]||"";let S="",M="";if(t.alignDelimiters!==!1){const D=s[c]-(v[c]||0),x=a[c];x===114?S=" ".repeat(D):x===99?D%2?(S=" ".repeat(D/2+.5),M=" ".repeat(D/2-.5)):(S=" ".repeat(D/2),M=S):M=" ".repeat(D)}t.delimiterStart!==!1&&!c&&y.push("|"),t.padding!==!1&&!(t.alignDelimiters===!1&&I==="")&&(t.delimiterStart!==!1||c)&&y.push(" "),t.alignDelimiters!==!1&&y.push(S),y.push(I),t.alignDelimiters!==!1&&y.push(M),t.padding!==!1&&y.push(" "),(t.delimiterEnd!==!1||c!==u-1)&&y.push("|")}g.push(t.delimiterEnd===!1?y.join("").replace(/ +$/,""):y.join(""))}return g.join(`
`)}function zu(e){return e==null?"":String(e)}function Jn(e){const n=typeof e=="string"?e.codePointAt(0):0;return n===67||n===99?99:n===76||n===108?108:n===82||n===114?114:0}function Ou(e,n,t,r){const i=t.enter("blockquote"),a=t.createTracker(r);a.move("> "),a.shift(2);const o=t.indentLines(t.containerFlow(e,a.current()),Pu);return i(),o}function Pu(e,n,t){return">"+(t?"":" ")+e}function Ru(e,n){return Zn(e,n.inConstruct,!0)&&!Zn(e,n.notInConstruct,!1)}function Zn(e,n,t){if(typeof n=="string"&&(n=[n]),!n||n.length===0)return t;let r=-1;for(;++r<n.length;)if(e.includes(n[r]))return!0;return!1}function er(e,n,t,r){let i=-1;for(;++i<t.unsafe.length;)if(t.unsafe[i].character===`
`&&Ru(t.stack,t.unsafe[i]))return/[ \t]/.test(r.before)?"":" ";return`\\
`}function Lu(e,n){const t=String(e);let r=t.indexOf(n),i=r,a=0,o=0;if(typeof n!="string")throw new TypeError("Expected substring");for(;r!==-1;)r===i?++a>o&&(o=a):a=1,i=r+n.length,r=t.indexOf(n,i);return o}function Mu(e,n){return!!(n.options.fences===!1&&e.value&&!e.lang&&/[^ \r\n]/.test(e.value)&&!/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value))}function Du(e){const n=e.options.fence||"`";if(n!=="`"&&n!=="~")throw new Error("Cannot serialize code with `"+n+"` for `options.fence`, expected `` ` `` or `~`");return n}function Fu(e,n,t,r){const i=Du(t),a=e.value||"",o=i==="`"?"GraveAccent":"Tilde";if(Mu(e,t)){const c=t.enter("codeIndented"),f=t.indentLines(a,Nu);return c(),f}const l=t.createTracker(r),s=i.repeat(Math.max(Lu(a,i)+1,3)),u=t.enter("codeFenced");let h=l.move(s);if(e.lang){const c=t.enter(`codeFencedLang${o}`);h+=l.move(t.safe(e.lang,{before:h,after:" ",encode:["`"],...l.current()})),c()}if(e.lang&&e.meta){const c=t.enter(`codeFencedMeta${o}`);h+=l.move(" "),h+=l.move(t.safe(e.meta,{before:h,after:`
`,encode:["`"],...l.current()})),c()}return h+=l.move(`
`),a&&(h+=l.move(a+`
`)),h+=l.move(s),u(),h}function Nu(e,n,t){return(t?"":"    ")+e}function on(e){const n=e.options.quote||'"';if(n!=='"'&&n!=="'")throw new Error("Cannot serialize title with `"+n+"` for `options.quote`, expected `\"`, or `'`");return n}function ju(e,n,t,r){const i=on(t),a=i==='"'?"Quote":"Apostrophe",o=t.enter("definition");let l=t.enter("label");const s=t.createTracker(r);let u=s.move("[");return u+=s.move(t.safe(t.associationId(e),{before:u,after:"]",...s.current()})),u+=s.move("]: "),l(),!e.url||/[\0- \u007F]/.test(e.url)?(l=t.enter("destinationLiteral"),u+=s.move("<"),u+=s.move(t.safe(e.url,{before:u,after:">",...s.current()})),u+=s.move(">")):(l=t.enter("destinationRaw"),u+=s.move(t.safe(e.url,{before:u,after:e.title?" ":`
`,...s.current()}))),l(),e.title&&(l=t.enter(`title${a}`),u+=s.move(" "+i),u+=s.move(t.safe(e.title,{before:u,after:i,...s.current()})),u+=s.move(i),l()),o(),u}function _u(e){const n=e.options.emphasis||"*";if(n!=="*"&&n!=="_")throw new Error("Cannot serialize emphasis with `"+n+"` for `options.emphasis`, expected `*`, or `_`");return n}function Ye(e){return"&#x"+e.toString(16).toUpperCase()+";"}function ut(e,n,t){const r=Me(e),i=Me(n);return r===void 0?i===void 0?t==="_"?{inside:!0,outside:!0}:{inside:!1,outside:!1}:i===1?{inside:!0,outside:!0}:{inside:!1,outside:!0}:r===1?i===void 0?{inside:!1,outside:!1}:i===1?{inside:!0,outside:!0}:{inside:!1,outside:!1}:i===void 0?{inside:!1,outside:!1}:i===1?{inside:!0,outside:!1}:{inside:!1,outside:!1}}Ur.peek=Bu;function Ur(e,n,t,r){const i=_u(t),a=t.enter("emphasis"),o=t.createTracker(r),l=o.move(i);let s=o.move(t.containerPhrasing(e,{after:i,before:l,...o.current()}));const u=s.charCodeAt(0),h=ut(r.before.charCodeAt(r.before.length-1),u,i);h.inside&&(s=Ye(u)+s.slice(1));const c=s.charCodeAt(s.length-1),f=ut(r.after.charCodeAt(0),c,i);f.inside&&(s=s.slice(0,-1)+Ye(c));const p=o.move(i);return a(),t.attentionEncodeSurroundingInfo={after:f.outside,before:h.outside},l+s+p}function Bu(e,n,t){return t.options.emphasis||"*"}function Hu(e,n){let t=!1;return nn(e,function(r){if("value"in r&&/\r?\n|\r/.test(r.value)||r.type==="break")return t=!0,jt}),!!((!e.depth||e.depth<3)&&Kt(e)&&(n.options.setext||t))}function Wu(e,n,t,r){const i=Math.max(Math.min(6,e.depth||1),1),a=t.createTracker(r);if(Hu(e,t)){const h=t.enter("headingSetext"),c=t.enter("phrasing"),f=t.containerPhrasing(e,{...a.current(),before:`
`,after:`
`});return c(),h(),f+`
`+(i===1?"=":"-").repeat(f.length-(Math.max(f.lastIndexOf("\r"),f.lastIndexOf(`
`))+1))}const o="#".repeat(i),l=t.enter("headingAtx"),s=t.enter("phrasing");a.move(o+" ");let u=t.containerPhrasing(e,{before:"# ",after:`
`,...a.current()});return/^[\t ]/.test(u)&&(u=Ye(u.charCodeAt(0))+u.slice(1)),u=u?o+" "+u:o,t.options.closeAtx&&(u+=" "+o),s(),l(),u}Vr.peek=$u;function Vr(e){return e.value||""}function $u(){return"<"}Gr.peek=qu;function Gr(e,n,t,r){const i=on(t),a=i==='"'?"Quote":"Apostrophe",o=t.enter("image");let l=t.enter("label");const s=t.createTracker(r);let u=s.move("![");return u+=s.move(t.safe(e.alt,{before:u,after:"]",...s.current()})),u+=s.move("]("),l(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(l=t.enter("destinationLiteral"),u+=s.move("<"),u+=s.move(t.safe(e.url,{before:u,after:">",...s.current()})),u+=s.move(">")):(l=t.enter("destinationRaw"),u+=s.move(t.safe(e.url,{before:u,after:e.title?" ":")",...s.current()}))),l(),e.title&&(l=t.enter(`title${a}`),u+=s.move(" "+i),u+=s.move(t.safe(e.title,{before:u,after:i,...s.current()})),u+=s.move(i),l()),u+=s.move(")"),o(),u}function qu(){return"!"}Yr.peek=Uu;function Yr(e,n,t,r){const i=e.referenceType,a=t.enter("imageReference");let o=t.enter("label");const l=t.createTracker(r);let s=l.move("![");const u=t.safe(e.alt,{before:s,after:"]",...l.current()});s+=l.move(u+"]["),o();const h=t.stack;t.stack=[],o=t.enter("reference");const c=t.safe(t.associationId(e),{before:s,after:"]",...l.current()});return o(),t.stack=h,a(),i==="full"||!u||u!==c?s+=l.move(c+"]"):i==="shortcut"?s=s.slice(0,-1):s+=l.move("]"),s}function Uu(){return"!"}Kr.peek=Vu;function Kr(e,n,t){let r=e.value||"",i="`",a=-1;for(;new RegExp("(^|[^`])"+i+"([^`]|$)").test(r);)i+="`";for(/[^ \r\n]/.test(r)&&(/^[ \r\n]/.test(r)&&/[ \r\n]$/.test(r)||/^`|`$/.test(r))&&(r=" "+r+" ");++a<t.unsafe.length;){const o=t.unsafe[a],l=t.compilePattern(o);let s;if(o.atBreak)for(;s=l.exec(r);){let u=s.index;r.charCodeAt(u)===10&&r.charCodeAt(u-1)===13&&u--,r=r.slice(0,u)+" "+r.slice(s.index+1)}}return i+r+i}function Vu(){return"`"}function Qr(e,n){const t=Kt(e);return!!(!n.options.resourceLink&&e.url&&!e.title&&e.children&&e.children.length===1&&e.children[0].type==="text"&&(t===e.url||"mailto:"+t===e.url)&&/^[a-z][a-z+.-]+:/i.test(e.url)&&!/[\0- <>\u007F]/.test(e.url))}Xr.peek=Gu;function Xr(e,n,t,r){const i=on(t),a=i==='"'?"Quote":"Apostrophe",o=t.createTracker(r);let l,s;if(Qr(e,t)){const h=t.stack;t.stack=[],l=t.enter("autolink");let c=o.move("<");return c+=o.move(t.containerPhrasing(e,{before:c,after:">",...o.current()})),c+=o.move(">"),l(),t.stack=h,c}l=t.enter("link"),s=t.enter("label");let u=o.move("[");return u+=o.move(t.containerPhrasing(e,{before:u,after:"](",...o.current()})),u+=o.move("]("),s(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(s=t.enter("destinationLiteral"),u+=o.move("<"),u+=o.move(t.safe(e.url,{before:u,after:">",...o.current()})),u+=o.move(">")):(s=t.enter("destinationRaw"),u+=o.move(t.safe(e.url,{before:u,after:e.title?" ":")",...o.current()}))),s(),e.title&&(s=t.enter(`title${a}`),u+=o.move(" "+i),u+=o.move(t.safe(e.title,{before:u,after:i,...o.current()})),u+=o.move(i),s()),u+=o.move(")"),l(),u}function Gu(e,n,t){return Qr(e,t)?"<":"["}Jr.peek=Yu;function Jr(e,n,t,r){const i=e.referenceType,a=t.enter("linkReference");let o=t.enter("label");const l=t.createTracker(r);let s=l.move("[");const u=t.containerPhrasing(e,{before:s,after:"]",...l.current()});s+=l.move(u+"]["),o();const h=t.stack;t.stack=[],o=t.enter("reference");const c=t.safe(t.associationId(e),{before:s,after:"]",...l.current()});return o(),t.stack=h,a(),i==="full"||!u||u!==c?s+=l.move(c+"]"):i==="shortcut"?s=s.slice(0,-1):s+=l.move("]"),s}function Yu(){return"["}function an(e){const n=e.options.bullet||"*";if(n!=="*"&&n!=="+"&&n!=="-")throw new Error("Cannot serialize items with `"+n+"` for `options.bullet`, expected `*`, `+`, or `-`");return n}function Ku(e){const n=an(e),t=e.options.bulletOther;if(!t)return n==="*"?"-":"*";if(t!=="*"&&t!=="+"&&t!=="-")throw new Error("Cannot serialize items with `"+t+"` for `options.bulletOther`, expected `*`, `+`, or `-`");if(t===n)throw new Error("Expected `bullet` (`"+n+"`) and `bulletOther` (`"+t+"`) to be different");return t}function Qu(e){const n=e.options.bulletOrdered||".";if(n!=="."&&n!==")")throw new Error("Cannot serialize items with `"+n+"` for `options.bulletOrdered`, expected `.` or `)`");return n}function Zr(e){const n=e.options.rule||"*";if(n!=="*"&&n!=="-"&&n!=="_")throw new Error("Cannot serialize rules with `"+n+"` for `options.rule`, expected `*`, `-`, or `_`");return n}function Xu(e,n,t,r){const i=t.enter("list"),a=t.bulletCurrent;let o=e.ordered?Qu(t):an(t);const l=e.ordered?o==="."?")":".":Ku(t);let s=n&&t.bulletLastUsed?o===t.bulletLastUsed:!1;if(!e.ordered){const h=e.children?e.children[0]:void 0;if((o==="*"||o==="-")&&h&&(!h.children||!h.children[0])&&t.stack[t.stack.length-1]==="list"&&t.stack[t.stack.length-2]==="listItem"&&t.stack[t.stack.length-3]==="list"&&t.stack[t.stack.length-4]==="listItem"&&t.indexStack[t.indexStack.length-1]===0&&t.indexStack[t.indexStack.length-2]===0&&t.indexStack[t.indexStack.length-3]===0&&(s=!0),Zr(t)===o&&h){let c=-1;for(;++c<e.children.length;){const f=e.children[c];if(f&&f.type==="listItem"&&f.children&&f.children[0]&&f.children[0].type==="thematicBreak"){s=!0;break}}}}s&&(o=l),t.bulletCurrent=o;const u=t.containerFlow(e,r);return t.bulletLastUsed=o,t.bulletCurrent=a,i(),u}function Ju(e){const n=e.options.listItemIndent||"one";if(n!=="tab"&&n!=="one"&&n!=="mixed")throw new Error("Cannot serialize items with `"+n+"` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");return n}function Zu(e,n,t,r){const i=Ju(t);let a=t.bulletCurrent||an(t);n&&n.type==="list"&&n.ordered&&(a=(typeof n.start=="number"&&n.start>-1?n.start:1)+(t.options.incrementListMarker===!1?0:n.children.indexOf(e))+a);let o=a.length+1;(i==="tab"||i==="mixed"&&(n&&n.type==="list"&&n.spread||e.spread))&&(o=Math.ceil(o/4)*4);const l=t.createTracker(r);l.move(a+" ".repeat(o-a.length)),l.shift(o);const s=t.enter("listItem"),u=t.indentLines(t.containerFlow(e,l.current()),h);return s(),u;function h(c,f,p){return f?(p?"":" ".repeat(o))+c:(p?a:a+" ".repeat(o-a.length))+c}}function ec(e,n,t,r){const i=t.enter("paragraph"),a=t.enter("phrasing"),o=t.containerPhrasing(e,r);return a(),i(),o}const tc=ft(["break","delete","emphasis","footnote","footnoteReference","image","imageReference","inlineCode","inlineMath","link","linkReference","mdxJsxTextElement","mdxTextExpression","strong","text","textDirective"]);function nc(e,n,t,r){return(e.children.some(function(o){return tc(o)})?t.containerPhrasing:t.containerFlow).call(t,e,r)}function rc(e){const n=e.options.strong||"*";if(n!=="*"&&n!=="_")throw new Error("Cannot serialize strong with `"+n+"` for `options.strong`, expected `*`, or `_`");return n}ei.peek=ic;function ei(e,n,t,r){const i=rc(t),a=t.enter("strong"),o=t.createTracker(r),l=o.move(i+i);let s=o.move(t.containerPhrasing(e,{after:i,before:l,...o.current()}));const u=s.charCodeAt(0),h=ut(r.before.charCodeAt(r.before.length-1),u,i);h.inside&&(s=Ye(u)+s.slice(1));const c=s.charCodeAt(s.length-1),f=ut(r.after.charCodeAt(0),c,i);f.inside&&(s=s.slice(0,-1)+Ye(c));const p=o.move(i+i);return a(),t.attentionEncodeSurroundingInfo={after:f.outside,before:h.outside},l+s+p}function ic(e,n,t){return t.options.strong||"*"}function oc(e,n,t,r){return t.safe(e.value,r)}function ac(e){const n=e.options.ruleRepetition||3;if(n<3)throw new Error("Cannot serialize rules with repetition `"+n+"` for `options.ruleRepetition`, expected `3` or more");return n}function lc(e,n,t){const r=(Zr(t)+(t.options.ruleSpaces?" ":"")).repeat(ac(t));return t.options.ruleSpaces?r.slice(0,-1):r}const ti={blockquote:Ou,break:er,code:Fu,definition:ju,emphasis:Ur,hardBreak:er,heading:Wu,html:Vr,image:Gr,imageReference:Yr,inlineCode:Kr,link:Xr,linkReference:Jr,list:Xu,listItem:Zu,paragraph:ec,root:nc,strong:ei,text:oc,thematicBreak:lc};function sc(){return{enter:{table:uc,tableData:tr,tableHeader:tr,tableRow:hc},exit:{codeText:pc,table:cc,tableData:Pt,tableHeader:Pt,tableRow:Pt}}}function uc(e){const n=e._align;this.enter({type:"table",align:n.map(function(t){return t==="none"?null:t}),children:[]},e),this.data.inTable=!0}function cc(e){this.exit(e),this.data.inTable=void 0}function hc(e){this.enter({type:"tableRow",children:[]},e)}function Pt(e){this.exit(e)}function tr(e){this.enter({type:"tableCell",children:[]},e)}function pc(e){let n=this.resume();this.data.inTable&&(n=n.replace(/\\([\\|])/g,fc));const t=this.stack[this.stack.length-1];t.type,t.value=n,this.exit(e)}function fc(e,n){return n==="|"?n:e}function mc(e){const n=e||{},t=n.tableCellPadding,r=n.tablePipeAlign,i=n.stringLength,a=t?" ":"|";return{unsafe:[{character:"\r",inConstruct:"tableCell"},{character:`
`,inConstruct:"tableCell"},{atBreak:!0,character:"|",after:"[	 :-]"},{character:"|",inConstruct:"tableCell"},{atBreak:!0,character:":",after:"-"},{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{inlineCode:f,table:o,tableCell:s,tableRow:l}};function o(p,g,b,v){return u(h(p,b,v),p.align)}function l(p,g,b,v){const y=c(p,b,v),I=u([y]);return I.slice(0,I.indexOf(`
`))}function s(p,g,b,v){const y=b.enter("tableCell"),I=b.enter("phrasing"),S=b.containerPhrasing(p,{...v,before:a,after:a});return I(),y(),S}function u(p,g){return Eu(p,{align:g,alignDelimiters:r,padding:t,stringLength:i})}function h(p,g,b){const v=p.children;let y=-1;const I=[],S=g.enter("table");for(;++y<v.length;)I[y]=c(v[y],g,b);return S(),I}function c(p,g,b){const v=p.children;let y=-1;const I=[],S=g.enter("tableRow");for(;++y<v.length;)I[y]=s(v[y],p,g,b);return S(),I}function f(p,g,b){let v=ti.inlineCode(p,g,b);return b.stack.includes("tableCell")&&(v=v.replace(/\|/g,"\\$&")),v}}function dc(){return{exit:{taskListCheckValueChecked:nr,taskListCheckValueUnchecked:nr,paragraph:yc}}}function gc(){return{unsafe:[{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{listItem:wc}}}function nr(e){const n=this.stack[this.stack.length-2];n.type,n.checked=e.type==="taskListCheckValueChecked"}function yc(e){const n=this.stack[this.stack.length-2];if(n&&n.type==="listItem"&&typeof n.checked=="boolean"){const t=this.stack[this.stack.length-1];t.type;const r=t.children[0];if(r&&r.type==="text"){const i=n.children;let a=-1,o;for(;++a<i.length;){const l=i[a];if(l.type==="paragraph"){o=l;break}}o===t&&(r.value=r.value.slice(1),r.value.length===0?t.children.shift():t.position&&r.position&&typeof r.position.start.offset=="number"&&(r.position.start.column++,r.position.start.offset++,t.position.start=Object.assign({},r.position.start)))}}this.exit(e)}function wc(e,n,t,r){const i=e.children[0],a=typeof e.checked=="boolean"&&i&&i.type==="paragraph",o="["+(e.checked?"x":" ")+"] ",l=t.createTracker(r);a&&l.move(o);let s=ti.listItem(e,n,t,{...r,...l.current()});return a&&(s=s.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/,u)),s;function u(h){return h+o}}function kc(){return[Xs(),wu(),vu(),sc(),dc()]}function xc(e){return{extensions:[Js(),ku(e),Su(),mc(e),gc()]}}const bc={tokenize:Tc,partial:!0},ni={tokenize:Ec,partial:!0},ri={tokenize:zc,partial:!0},ii={tokenize:Oc,partial:!0},vc={tokenize:Pc,partial:!0},oi={name:"wwwAutolink",tokenize:Cc,previous:li},ai={name:"protocolAutolink",tokenize:Ic,previous:si},we={name:"emailAutolink",tokenize:Ac,previous:ui},fe={};function Sc(){return{text:fe}}let Ae=48;for(;Ae<123;)fe[Ae]=we,Ae++,Ae===58?Ae=65:Ae===91&&(Ae=97);fe[43]=we;fe[45]=we;fe[46]=we;fe[95]=we;fe[72]=[we,ai];fe[104]=[we,ai];fe[87]=[we,oi];fe[119]=[we,oi];function Ac(e,n,t){const r=this;let i,a;return o;function o(c){return!Wt(c)||!ui.call(r,r.previous)||ln(r.events)?t(c):(e.enter("literalAutolink"),e.enter("literalAutolinkEmail"),l(c))}function l(c){return Wt(c)?(e.consume(c),l):c===64?(e.consume(c),s):t(c)}function s(c){return c===46?e.check(vc,h,u)(c):c===45||c===95||X(c)?(a=!0,e.consume(c),s):h(c)}function u(c){return e.consume(c),i=!0,s}function h(c){return a&&i&&Z(r.previous)?(e.exit("literalAutolinkEmail"),e.exit("literalAutolink"),n(c)):t(c)}}function Cc(e,n,t){const r=this;return i;function i(o){return o!==87&&o!==119||!li.call(r,r.previous)||ln(r.events)?t(o):(e.enter("literalAutolink"),e.enter("literalAutolinkWww"),e.check(bc,e.attempt(ni,e.attempt(ri,a),t),t)(o))}function a(o){return e.exit("literalAutolinkWww"),e.exit("literalAutolink"),n(o)}}function Ic(e,n,t){const r=this;let i="",a=!1;return o;function o(c){return(c===72||c===104)&&si.call(r,r.previous)&&!ln(r.events)?(e.enter("literalAutolink"),e.enter("literalAutolinkHttp"),i+=String.fromCodePoint(c),e.consume(c),l):t(c)}function l(c){if(Z(c)&&i.length<5)return i+=String.fromCodePoint(c),e.consume(c),l;if(c===58){const f=i.toLowerCase();if(f==="http"||f==="https")return e.consume(c),s}return t(c)}function s(c){return c===47?(e.consume(c),a?u:(a=!0,s)):t(c)}function u(c){return c===null||at(c)||V(c)||Ce(c)||ct(c)?t(c):e.attempt(ni,e.attempt(ri,h),t)(c)}function h(c){return e.exit("literalAutolinkHttp"),e.exit("literalAutolink"),n(c)}}function Tc(e,n,t){let r=0;return i;function i(o){return(o===87||o===119)&&r<3?(r++,e.consume(o),i):o===46&&r===3?(e.consume(o),a):t(o)}function a(o){return o===null?t(o):n(o)}}function Ec(e,n,t){let r,i,a;return o;function o(u){return u===46||u===95?e.check(ii,s,l)(u):u===null||V(u)||Ce(u)||u!==45&&ct(u)?s(u):(a=!0,e.consume(u),o)}function l(u){return u===95?r=!0:(i=r,r=void 0),e.consume(u),o}function s(u){return i||r||!a?t(u):n(u)}}function zc(e,n){let t=0,r=0;return i;function i(o){return o===40?(t++,e.consume(o),i):o===41&&r<t?a(o):o===33||o===34||o===38||o===39||o===41||o===42||o===44||o===46||o===58||o===59||o===60||o===63||o===93||o===95||o===126?e.check(ii,n,a)(o):o===null||V(o)||Ce(o)?n(o):(e.consume(o),i)}function a(o){return o===41&&r++,e.consume(o),i}}function Oc(e,n,t){return r;function r(l){return l===33||l===34||l===39||l===41||l===42||l===44||l===46||l===58||l===59||l===63||l===95||l===126?(e.consume(l),r):l===38?(e.consume(l),a):l===93?(e.consume(l),i):l===60||l===null||V(l)||Ce(l)?n(l):t(l)}function i(l){return l===null||l===40||l===91||V(l)||Ce(l)?n(l):r(l)}function a(l){return Z(l)?o(l):t(l)}function o(l){return l===59?(e.consume(l),r):Z(l)?(e.consume(l),o):t(l)}}function Pc(e,n,t){return r;function r(a){return e.consume(a),i}function i(a){return X(a)?t(a):n(a)}}function li(e){return e===null||e===40||e===42||e===95||e===91||e===93||e===126||V(e)}function si(e){return!Z(e)}function ui(e){return!(e===47||Wt(e))}function Wt(e){return e===43||e===45||e===46||e===95||X(e)}function ln(e){let n=e.length,t=!1;for(;n--;){const r=e[n][1];if((r.type==="labelLink"||r.type==="labelImage")&&!r._balanced){t=!0;break}if(r._gfmAutolinkLiteralWalkedInto){t=!1;break}}return e.length>0&&!t&&(e[e.length-1][1]._gfmAutolinkLiteralWalkedInto=!0),t}const Rc={tokenize:Bc,partial:!0};function Lc(){return{document:{91:{name:"gfmFootnoteDefinition",tokenize:Nc,continuation:{tokenize:jc},exit:_c}},text:{91:{name:"gfmFootnoteCall",tokenize:Fc},93:{name:"gfmPotentialFootnoteCall",add:"after",tokenize:Mc,resolveTo:Dc}}}}function Mc(e,n,t){const r=this;let i=r.events.length;const a=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]);let o;for(;i--;){const s=r.events[i][1];if(s.type==="labelImage"){o=s;break}if(s.type==="gfmFootnoteCall"||s.type==="labelLink"||s.type==="label"||s.type==="image"||s.type==="link")break}return l;function l(s){if(!o||!o._balanced)return t(s);const u=ce(r.sliceSerialize({start:o.end,end:r.now()}));return u.codePointAt(0)!==94||!a.includes(u.slice(1))?t(s):(e.enter("gfmFootnoteCallLabelMarker"),e.consume(s),e.exit("gfmFootnoteCallLabelMarker"),n(s))}}function Dc(e,n){let t=e.length;for(;t--;)if(e[t][1].type==="labelImage"&&e[t][0]==="enter"){e[t][1];break}e[t+1][1].type="data",e[t+3][1].type="gfmFootnoteCallLabelMarker";const r={type:"gfmFootnoteCall",start:Object.assign({},e[t+3][1].start),end:Object.assign({},e[e.length-1][1].end)},i={type:"gfmFootnoteCallMarker",start:Object.assign({},e[t+3][1].end),end:Object.assign({},e[t+3][1].end)};i.end.column++,i.end.offset++,i.end._bufferIndex++;const a={type:"gfmFootnoteCallString",start:Object.assign({},i.end),end:Object.assign({},e[e.length-1][1].start)},o={type:"chunkString",contentType:"string",start:Object.assign({},a.start),end:Object.assign({},a.end)},l=[e[t+1],e[t+2],["enter",r,n],e[t+3],e[t+4],["enter",i,n],["exit",i,n],["enter",a,n],["enter",o,n],["exit",o,n],["exit",a,n],e[e.length-2],e[e.length-1],["exit",r,n]];return e.splice(t,e.length-t+1,...l),e}function Fc(e,n,t){const r=this,i=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]);let a=0,o;return l;function l(c){return e.enter("gfmFootnoteCall"),e.enter("gfmFootnoteCallLabelMarker"),e.consume(c),e.exit("gfmFootnoteCallLabelMarker"),s}function s(c){return c!==94?t(c):(e.enter("gfmFootnoteCallMarker"),e.consume(c),e.exit("gfmFootnoteCallMarker"),e.enter("gfmFootnoteCallString"),e.enter("chunkString").contentType="string",u)}function u(c){if(a>999||c===93&&!o||c===null||c===91||V(c))return t(c);if(c===93){e.exit("chunkString");const f=e.exit("gfmFootnoteCallString");return i.includes(ce(r.sliceSerialize(f)))?(e.enter("gfmFootnoteCallLabelMarker"),e.consume(c),e.exit("gfmFootnoteCallLabelMarker"),e.exit("gfmFootnoteCall"),n):t(c)}return V(c)||(o=!0),a++,e.consume(c),c===92?h:u}function h(c){return c===91||c===92||c===93?(e.consume(c),a++,u):u(c)}}function Nc(e,n,t){const r=this,i=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]);let a,o=0,l;return s;function s(g){return e.enter("gfmFootnoteDefinition")._container=!0,e.enter("gfmFootnoteDefinitionLabel"),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(g),e.exit("gfmFootnoteDefinitionLabelMarker"),u}function u(g){return g===94?(e.enter("gfmFootnoteDefinitionMarker"),e.consume(g),e.exit("gfmFootnoteDefinitionMarker"),e.enter("gfmFootnoteDefinitionLabelString"),e.enter("chunkString").contentType="string",h):t(g)}function h(g){if(o>999||g===93&&!l||g===null||g===91||V(g))return t(g);if(g===93){e.exit("chunkString");const b=e.exit("gfmFootnoteDefinitionLabelString");return a=ce(r.sliceSerialize(b)),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(g),e.exit("gfmFootnoteDefinitionLabelMarker"),e.exit("gfmFootnoteDefinitionLabel"),f}return V(g)||(l=!0),o++,e.consume(g),g===92?c:h}function c(g){return g===91||g===92||g===93?(e.consume(g),o++,h):h(g)}function f(g){return g===58?(e.enter("definitionMarker"),e.consume(g),e.exit("definitionMarker"),i.includes(a)||i.push(a),B(e,p,"gfmFootnoteDefinitionWhitespace")):t(g)}function p(g){return n(g)}}function jc(e,n,t){return e.check(Qe,n,e.attempt(Rc,n,t))}function _c(e){e.exit("gfmFootnoteDefinition")}function Bc(e,n,t){const r=this;return B(e,i,"gfmFootnoteDefinitionIndent",5);function i(a){const o=r.events[r.events.length-1];return o&&o[1].type==="gfmFootnoteDefinitionIndent"&&o[2].sliceSerialize(o[1],!0).length===4?n(a):t(a)}}function Hc(e){let t=(e||{}).singleTilde;const r={name:"strikethrough",tokenize:a,resolveAll:i};return t==null&&(t=!0),{text:{126:r},insideSpan:{null:[r]},attentionMarkers:{null:[126]}};function i(o,l){let s=-1;for(;++s<o.length;)if(o[s][0]==="enter"&&o[s][1].type==="strikethroughSequenceTemporary"&&o[s][1]._close){let u=s;for(;u--;)if(o[u][0]==="exit"&&o[u][1].type==="strikethroughSequenceTemporary"&&o[u][1]._open&&o[s][1].end.offset-o[s][1].start.offset===o[u][1].end.offset-o[u][1].start.offset){o[s][1].type="strikethroughSequence",o[u][1].type="strikethroughSequence";const h={type:"strikethrough",start:Object.assign({},o[u][1].start),end:Object.assign({},o[s][1].end)},c={type:"strikethroughText",start:Object.assign({},o[u][1].end),end:Object.assign({},o[s][1].start)},f=[["enter",h,l],["enter",o[u][1],l],["exit",o[u][1],l],["enter",c,l]],p=l.parser.constructs.insideSpan.null;p&&ie(f,f.length,0,ht(p,o.slice(u+1,s),l)),ie(f,f.length,0,[["exit",c,l],["enter",o[s][1],l],["exit",o[s][1],l],["exit",h,l]]),ie(o,u-1,s-u+3,f),s=u+f.length-2;break}}for(s=-1;++s<o.length;)o[s][1].type==="strikethroughSequenceTemporary"&&(o[s][1].type="data");return o}function a(o,l,s){const u=this.previous,h=this.events;let c=0;return f;function f(g){return u===126&&h[h.length-1][1].type!=="characterEscape"?s(g):(o.enter("strikethroughSequenceTemporary"),p(g))}function p(g){const b=Me(u);if(g===126)return c>1?s(g):(o.consume(g),c++,p);if(c<2&&!t)return s(g);const v=o.exit("strikethroughSequenceTemporary"),y=Me(g);return v._open=!y||y===2&&!!b,v._close=!b||b===2&&!!y,l(g)}}}class Wc{constructor(){this.map=[]}add(n,t,r){$c(this,n,t,r)}consume(n){if(this.map.sort(function(a,o){return a[0]-o[0]}),this.map.length===0)return;let t=this.map.length;const r=[];for(;t>0;)t-=1,r.push(n.slice(this.map[t][0]+this.map[t][1]),this.map[t][2]),n.length=this.map[t][0];r.push(n.slice()),n.length=0;let i=r.pop();for(;i;){for(const a of i)n.push(a);i=r.pop()}this.map.length=0}}function $c(e,n,t,r){let i=0;if(!(t===0&&r.length===0)){for(;i<e.map.length;){if(e.map[i][0]===n){e.map[i][1]+=t,e.map[i][2].push(...r);return}i+=1}e.map.push([n,t,r])}}function qc(e,n){let t=!1;const r=[];for(;n<e.length;){const i=e[n];if(t){if(i[0]==="enter")i[1].type==="tableContent"&&r.push(e[n+1][1].type==="tableDelimiterMarker"?"left":"none");else if(i[1].type==="tableContent"){if(e[n-1][1].type==="tableDelimiterMarker"){const a=r.length-1;r[a]=r[a]==="left"?"center":"right"}}else if(i[1].type==="tableDelimiterRow")break}else i[0]==="enter"&&i[1].type==="tableDelimiterRow"&&(t=!0);n+=1}return r}function Uc(){return{flow:{null:{name:"table",tokenize:Vc,resolveAll:Gc}}}}function Vc(e,n,t){const r=this;let i=0,a=0,o;return l;function l(w){let z=r.events.length-1;for(;z>-1;){const R=r.events[z][1].type;if(R==="lineEnding"||R==="linePrefix")z--;else break}const O=z>-1?r.events[z][1].type:null,$=O==="tableHead"||O==="tableRow"?x:s;return $===x&&r.parser.lazy[r.now().line]?t(w):$(w)}function s(w){return e.enter("tableHead"),e.enter("tableRow"),u(w)}function u(w){return w===124||(o=!0,a+=1),h(w)}function h(w){return w===null?t(w):P(w)?a>1?(a=0,r.interrupt=!0,e.exit("tableRow"),e.enter("lineEnding"),e.consume(w),e.exit("lineEnding"),p):t(w):N(w)?B(e,h,"whitespace")(w):(a+=1,o&&(o=!1,i+=1),w===124?(e.enter("tableCellDivider"),e.consume(w),e.exit("tableCellDivider"),o=!0,h):(e.enter("data"),c(w)))}function c(w){return w===null||w===124||V(w)?(e.exit("data"),h(w)):(e.consume(w),w===92?f:c)}function f(w){return w===92||w===124?(e.consume(w),c):c(w)}function p(w){return r.interrupt=!1,r.parser.lazy[r.now().line]?t(w):(e.enter("tableDelimiterRow"),o=!1,N(w)?B(e,g,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(w):g(w))}function g(w){return w===45||w===58?v(w):w===124?(o=!0,e.enter("tableCellDivider"),e.consume(w),e.exit("tableCellDivider"),b):D(w)}function b(w){return N(w)?B(e,v,"whitespace")(w):v(w)}function v(w){return w===58?(a+=1,o=!0,e.enter("tableDelimiterMarker"),e.consume(w),e.exit("tableDelimiterMarker"),y):w===45?(a+=1,y(w)):w===null||P(w)?M(w):D(w)}function y(w){return w===45?(e.enter("tableDelimiterFiller"),I(w)):D(w)}function I(w){return w===45?(e.consume(w),I):w===58?(o=!0,e.exit("tableDelimiterFiller"),e.enter("tableDelimiterMarker"),e.consume(w),e.exit("tableDelimiterMarker"),S):(e.exit("tableDelimiterFiller"),S(w))}function S(w){return N(w)?B(e,M,"whitespace")(w):M(w)}function M(w){return w===124?g(w):w===null||P(w)?!o||i!==a?D(w):(e.exit("tableDelimiterRow"),e.exit("tableHead"),n(w)):D(w)}function D(w){return t(w)}function x(w){return e.enter("tableRow"),j(w)}function j(w){return w===124?(e.enter("tableCellDivider"),e.consume(w),e.exit("tableCellDivider"),j):w===null||P(w)?(e.exit("tableRow"),n(w)):N(w)?B(e,j,"whitespace")(w):(e.enter("data"),W(w))}function W(w){return w===null||w===124||V(w)?(e.exit("data"),j(w)):(e.consume(w),w===92?H:W)}function H(w){return w===92||w===124?(e.consume(w),W):W(w)}}function Gc(e,n){let t=-1,r=!0,i=0,a=[0,0,0,0],o=[0,0,0,0],l=!1,s=0,u,h,c;const f=new Wc;for(;++t<e.length;){const p=e[t],g=p[1];p[0]==="enter"?g.type==="tableHead"?(l=!1,s!==0&&(rr(f,n,s,u,h),h=void 0,s=0),u={type:"table",start:Object.assign({},g.start),end:Object.assign({},g.end)},f.add(t,0,[["enter",u,n]])):g.type==="tableRow"||g.type==="tableDelimiterRow"?(r=!0,c=void 0,a=[0,0,0,0],o=[0,t+1,0,0],l&&(l=!1,h={type:"tableBody",start:Object.assign({},g.start),end:Object.assign({},g.end)},f.add(t,0,[["enter",h,n]])),i=g.type==="tableDelimiterRow"?2:h?3:1):i&&(g.type==="data"||g.type==="tableDelimiterMarker"||g.type==="tableDelimiterFiller")?(r=!1,o[2]===0&&(a[1]!==0&&(o[0]=o[1],c=rt(f,n,a,i,void 0,c),a=[0,0,0,0]),o[2]=t)):g.type==="tableCellDivider"&&(r?r=!1:(a[1]!==0&&(o[0]=o[1],c=rt(f,n,a,i,void 0,c)),a=o,o=[a[1],t,0,0])):g.type==="tableHead"?(l=!0,s=t):g.type==="tableRow"||g.type==="tableDelimiterRow"?(s=t,a[1]!==0?(o[0]=o[1],c=rt(f,n,a,i,t,c)):o[1]!==0&&(c=rt(f,n,o,i,t,c)),i=0):i&&(g.type==="data"||g.type==="tableDelimiterMarker"||g.type==="tableDelimiterFiller")&&(o[3]=t)}for(s!==0&&rr(f,n,s,u,h),f.consume(n.events),t=-1;++t<n.events.length;){const p=n.events[t];p[0]==="enter"&&p[1].type==="table"&&(p[1]._align=qc(n.events,t))}return e}function rt(e,n,t,r,i,a){const o=r===1?"tableHeader":r===2?"tableDelimiter":"tableData",l="tableContent";t[0]!==0&&(a.end=Object.assign({},Re(n.events,t[0])),e.add(t[0],0,[["exit",a,n]]));const s=Re(n.events,t[1]);if(a={type:o,start:Object.assign({},s),end:Object.assign({},s)},e.add(t[1],0,[["enter",a,n]]),t[2]!==0){const u=Re(n.events,t[2]),h=Re(n.events,t[3]),c={type:l,start:Object.assign({},u),end:Object.assign({},h)};if(e.add(t[2],0,[["enter",c,n]]),r!==2){const f=n.events[t[2]],p=n.events[t[3]];if(f[1].end=Object.assign({},p[1].end),f[1].type="chunkText",f[1].contentType="text",t[3]>t[2]+1){const g=t[2]+1,b=t[3]-t[2]-1;e.add(g,b,[])}}e.add(t[3]+1,0,[["exit",c,n]])}return i!==void 0&&(a.end=Object.assign({},Re(n.events,i)),e.add(i,0,[["exit",a,n]]),a=void 0),a}function rr(e,n,t,r,i){const a=[],o=Re(n.events,t);i&&(i.end=Object.assign({},o),a.push(["exit",i,n])),r.end=Object.assign({},o),a.push(["exit",r,n]),e.add(t+1,0,a)}function Re(e,n){const t=e[n],r=t[0]==="enter"?"start":"end";return t[1][r]}const Yc={name:"tasklistCheck",tokenize:Qc};function Kc(){return{text:{91:Yc}}}function Qc(e,n,t){const r=this;return i;function i(s){return r.previous!==null||!r._gfmTasklistFirstContentOfListItem?t(s):(e.enter("taskListCheck"),e.enter("taskListCheckMarker"),e.consume(s),e.exit("taskListCheckMarker"),a)}function a(s){return V(s)?(e.enter("taskListCheckValueUnchecked"),e.consume(s),e.exit("taskListCheckValueUnchecked"),o):s===88||s===120?(e.enter("taskListCheckValueChecked"),e.consume(s),e.exit("taskListCheckValueChecked"),o):t(s)}function o(s){return s===93?(e.enter("taskListCheckMarker"),e.consume(s),e.exit("taskListCheckMarker"),e.exit("taskListCheck"),l):t(s)}function l(s){return P(s)?n(s):N(s)?e.check({tokenize:Xc},n,t)(s):t(s)}}function Xc(e,n,t){return B(e,r,"whitespace");function r(i){return i===null?t(i):n(i)}}function Jc(e){return xr([Sc(),Lc(),Hc(e),Uc(),Kc()])}const Zc={};function eh(e){const n=this,t=e||Zc,r=n.data(),i=r.micromarkExtensions||(r.micromarkExtensions=[]),a=r.fromMarkdownExtensions||(r.fromMarkdownExtensions=[]),o=r.toMarkdownExtensions||(r.toMarkdownExtensions=[]);i.push(Jc(t)),a.push(kc()),o.push(xc(t))}const th={"22-ai-agents-replace-agency":{id:"22-ai-agents-replace-agency",title:"I Run a Marketing Agency. Here's Why I Built 22 AI Agents to Replace It.",excerpt:"$4,500/month. That's the average retainer small businesses pay a marketing agency. After years of watching clients wait days for deliverables AI could produce in minutes, I stopped pretending the model wasn't broken.",category:"agency",categoryLabel:"Agency Growth",author:{name:"Garrett Elmore",avatar:"/images/garrett-blog-profile-image.jpg",role:"Founder/CEO, OzziOS",bio:"Garrett is the founder and CEO of OzziOS, building AI-powered tools to help agencies scale without the headcount.",twitter:"@garrettelmore"},image:"/images/blog-post-22-ai-agents-replace-agency.png",readTime:"12 min read",date:"February 17, 2025",content:`
## The Dirty Secret: You're Paying for Coordination, Not Expertise

I've been on both sides. Here's what actually happens inside a marketing agency when you're paying $3,000–$5,000/month:

**Week 1:** Account manager gets your request. Forwards it to a specialist. Specialist juggling 12 other clients. Your task sits in a queue.

**Week 2:** Specialist does the work in 2–3 hours. Sends it back for review. Account manager adds "strategic context" (reformats it slightly).

**Week 3:** You get the deliverable. Ask for revisions. Back to the queue.

**Week 4:** You get a report. It looks impressive. It took someone 45 minutes to generate from a template.

The actual *work*? Maybe 8–10 hours per month.

The rest is overhead: project management, client communication, context switching, meetings about meetings.

**You're not paying for expertise. You're paying for a human coordination layer that AI eliminates entirely.**

---

## What 22 AI Agents Actually Do (That Your Agency Does Slowly)

Ozzi isn't a chatbot that writes blog posts. It's a supervisor-agent orchestration system — meaning there's a central AI brain delegating tasks to specialized agents, each with their own tools, memory, and execution capabilities.

Here's what runs every single week, automatically:

### Agent 1–3: Intelligence

**What your agency does:** Quarterly keyword research. Monthly ranking report. Occasional competitor check.

**What the agents do:**

- **Keyword Research Agent** — Expands seed keywords into 200–400 variations weekly. Pulls volume, CPC, difficulty, and trend data. Flags new opportunities the moment they appear.
- **Competitor Intel Agent** — Monitors 10+ competitors for new backlinks, content changes, and ranking movements. You know about a competitor's new strategy within days, not months.
- **Technical SEO Agent** — Crawls your site weekly for broken links, missing meta tags, crawl errors, and Core Web Vitals issues. Generates fix-it tickets automatically.

*Agency equivalent: ~$800–$1,200/month of your retainer.*

### Agent 4–6: Content Operations

**What your agency does:** 2–4 blog posts per month. Content brief takes 3–5 days. Writing takes another week.

**What the agents do:**

- **Content Strategist Agent** — Analyzes top-ranking content, identifies gaps competitors are missing, and generates comprehensive briefs in minutes. Not generic templates — briefs based on real-time SERP analysis.
- **Content Writer Agent** — Drafts SEO-optimized content that actually sounds human. Uses your brand voice guidelines stored in persistent memory. Knows your past content so it doesn't repeat itself.
- **Content Optimizer Agent** — Takes existing content and finds opportunities: internal links you're missing, keywords you could target with minor edits, sections that need updating.

*Agency equivalent: ~$1,500–$2,500/month of your retainer.*

### Agent 7–10: Paid Advertising

**What your agency does:** Sets up campaigns. Checks them weekly. Adjusts bids monthly. Sends a performance report.

**What the agents do:**

- **Ad Strategy Agent** — Researches competitor ad copy, identifies audience gaps, and recommends campaign structures based on your budget and goals.
- **Ad Copy Agent** — Generates dozens of variations for testing. Headlines, descriptions, CTAs — all based on what's actually converting in your space.
- **Budget Optimization Agent** — Monitors spend daily and reallocates budget toward what's working. Doesn't wait for the Monday meeting.
- **Ad Reporting Agent** — Compiles ROAS, CPA, and conversion data into plain-language summaries. Flags anomalies the day they happen.

*Agency equivalent: ~$1,000–$2,000/month of your retainer.*

### Agent 11–14: Social Media

**What your agency does:** Schedules posts. Maybe 3–4 per week across platforms. Uses a generic content calendar.

**What the agents do:**

- **Social Strategist Agent** — Studies trending content in your niche. Identifies formats, hooks, and topics gaining traction right now.
- **Content Repurposing Agent** — Takes one blog post and turns it into 15+ social posts across formats: threads, carousels, short-form scripts, quotes.
- **Engagement Agent** — Monitors mentions, comments, and relevant conversations. Drafts responses for your approval.
- **Analytics Agent** — Tracks what's actually driving engagement vs. vanity metrics, and adjusts strategy weekly.

*Agency equivalent: ~$500–$1,000/month of your retainer.*

### Agent 15–22: The Backbone

The remaining agents handle the work nobody sees but everything depends on:

- **Analytics & Reporting** — Unified dashboards pulling from every source. No waiting until month-end.
- **Brand Voice Guardian** — Ensures every piece of content sounds like *you*, not like ChatGPT wrote it.
- **Memory & Context Manager** — The 7-layer memory architecture that means your agents remember your Q1 strategy when they're planning Q3. They remember what worked. What flopped. What you told them to never do again.
- **Quality Assurance** — Reviews outputs before they reach you. Catches errors, inconsistencies, and off-brand messaging.
- **Integration Orchestrator** — Connects to your existing tools: Google Analytics, Search Console, ad platforms, CRM.

---

## The Part Agencies Don't Want You to Think About

Here's a comparison that keeps me up at night — *and I'm the one running the agency:*

| | Traditional Agency | AI Agent System |
|---|---|---|
| **Keyword research** | Quarterly | Weekly |
| **Competitor monitoring** | Monthly | Daily |
| **Content briefs** | 3–5 business days | Minutes |
| **Content production** | 2–4 pieces/month | As many as you need |
| **Ad optimization** | Weekly check-ins | Continuous |
| **Reporting** | Monthly PDF | Real-time dashboard |
| **Response to changes** | Next billing cycle | Same day |
| **Scales with you** | New SOW + price increase | Same system |
| **Remembers everything** | New account manager = reset | Persistent memory |

That last row is the one that stings. Every agency client has experienced the account manager shuffle. New person, new ramp-up, lost context. With AI agents running on persistent memory, your marketing system gets *smarter* over time. It never forgets a campaign result, a brand guideline, or a lesson learned.

---

## "But AI Can't Replace Strategy"

I hear this a lot. Usually from agency owners.

And they're... partially right. Here's the nuance:

**What AI agents can't (yet) do:**
- Read the room in a board meeting
- Navigate messy internal politics about brand direction
- Have the creative intuition that comes from 20 years in an industry
- Build genuine relationships with journalists and partners

**What AI agents absolutely can do:**
- Execute 90% of the tactical work agencies charge premium rates for
- Process more data than any human team
- Maintain perfect consistency across channels
- Work 24/7 without context switching between 12 clients
- Remember and learn from every single interaction

The honest truth? Most businesses paying $3,000–$5,000/month for an agency don't need high-level strategy. They need consistent, quality execution of proven marketing playbooks. That's exactly what AI agents excel at.

---

## Why This Is Different From "Just Using ChatGPT"

Every time someone says "AI marketing," someone else says "I tried ChatGPT, it was mid."

Here's why a coordinated agent system is fundamentally different from copy-pasting prompts:

**ChatGPT/Generic AI:**
- No memory between sessions
- No access to your actual data
- Can't execute anything (just suggests)
- One conversation = one capability
- You are the coordinator

**Agent Orchestration (what Ozzi does):**
- 7-layer persistent memory architecture
- Connected to your real analytics, ad platforms, and tools
- Executes actual campaigns, not just plans them
- 22 specialists coordinated by a supervisor agent
- The system is the coordinator — you're the decision maker

It's the difference between having a smart friend who gives advice and having a full marketing department that shows up every morning already knowing what to do.

---

## What It Actually Costs

Let's do the real math:

**Traditional agency:** $3,000–$5,000/month = $36,000–$60,000/year

**Building it yourself with APIs and scripts:** $75–$150/month in API costs + 20–40 hours of setup + ongoing maintenance + you need to be technical

**AI agent platform:** A fraction of agency cost, no technical setup, maintained and improved for you

That works if you're technical and have the time. We respect that — we've been those people.

But most business owners don't want to maintain cron jobs and debug API rate limits. They want results.

---

## When to Keep Your Agency

I'm not going to pretend AI agents replace everything. Keep your agency if:

- You're spending $15,000+/month and getting genuine strategic partnership
- Your agency has deep industry relationships you can't replicate
- You need someone to sit in meetings and present to stakeholders
- You're in a heavily regulated industry where human review is mandatory

Switch to AI agents if:

- You're paying $2,000–$5,000/month and mostly getting execution work
- You're frustrated by the turnaround time
- You want daily optimization, not monthly reports
- You're tired of re-explaining your business every time your account manager leaves
- You want a system that gets better over time instead of resetting

---

## The Uncomfortable Truth From Inside the Industry

I built Ozzi because I saw what was coming.

The marketing agency model was designed for a world where expertise was scarce and tools were expensive. Ahrefs costs $99/month. SEMrush costs $130/month. Google Ads requires certification. Content required writers.

Now? The tools are APIs. The expertise is embedded in AI models. The coordination is handled by orchestration systems.

The agencies that survive will be the ones that move up the value chain — genuine strategic partners, creative directors, brand architects. The $3,000–$5,000/month execution shops? They're in trouble.

I'd rather build the future than pretend it's not coming.

---

## Try It Yourself

Ozzi is the AI agent platform that replaces your marketing agency's execution layer with 22 specialized agents that work every day, remember everything, and get smarter over time.

No cron jobs. No API debugging. No 20-hour setup.

Just results, on autopilot.

**[See how Ozzi works →](https://ozzios.com)**

---

*Building the future of marketing automation at [ozzios.com](https://ozzios.com). Follow the journey.*
    `},"gohighlevel-integration":{id:"gohighlevel-integration",title:"OzziOS Now Integrates with GoHighLevel: Supercharge Your CRM with AI",excerpt:"Connect your GoHighLevel account to OzziOS and let AI agents manage contacts, automate follow-ups, and sync data across your entire marketing stack—all without leaving the platform.",category:"product",categoryLabel:"Product Updates",author:{name:"Garrett Elmore",avatar:"/images/garrett-blog-profile-image.jpg",role:"Founder/CEO, OzziOS",bio:"Garrett is the founder and CEO of OzziOS, building AI-powered tools to help agencies scale without the headcount.",twitter:"@garrettelmore"},image:"/images/ghl_ozzi_integrated_blog_post.jpg",readTime:"4 min read",date:"February 2, 2025",content:`
## Your CRM Just Got Smarter

We're excited to announce that OzziOS now integrates directly with **GoHighLevel**—the all-in-one CRM platform that thousands of agencies rely on for client management, marketing automation, and sales pipelines.

This integration means your AI employees can now work directly with your GoHighLevel data, automating tasks that used to require manual effort and bridging the gap between your CRM and your marketing operations.

## What This Integration Enables

With GoHighLevel connected to OzziOS, your AI agents can:

### Contact Management
- **Sync contacts automatically** between platforms
- **Enrich lead data** with AI-gathered insights
- **Segment audiences** based on behavior and engagement
- **Update contact records** in real-time as campaigns run

### Automated Follow-ups
- **Trigger personalized sequences** when leads take action
- **Schedule follow-up tasks** based on AI recommendations
- **Send timely messages** through GoHighLevel's communication channels
- **Never let a lead go cold** with intelligent nurturing

### Pipeline Intelligence
- **Track deal progress** across your sales pipeline
- **Get AI predictions** on which deals are most likely to close
- **Automate stage transitions** based on engagement signals
- **Generate pipeline reports** without manual data entry

### Campaign Coordination
- **Launch GoHighLevel campaigns** from OzziOS workflows
- **Coordinate email, SMS, and social** in unified sequences
- **Track attribution** across all channels
- **Optimize send times** based on contact behavior

## How It Works

Setting up the integration takes just a few minutes:

### Step 1: Generate Your API Credentials
In GoHighLevel, navigate to **Settings → Private Integrations** and create a new integration. This generates the secure API token OzziOS needs to connect.

### Step 2: Enter Your Location ID
Every GoHighLevel sub-account has a unique Location ID. You'll find this in your account settings—it's the identifier that tells our system which CRM instance to connect to.

### Step 3: Test & Connect
Before saving, OzziOS validates your credentials by making a test API call. If everything checks out, you're connected. If not, you'll get clear error messages explaining what to fix.

### Step 4: Start Automating
Once connected, your AI agents have secure access to GoHighLevel's full API. Create workflows, set up automations, and let AI handle the busywork.

## Security First

We know your CRM data is sensitive. Here's how we protect it:

- **Credentials are encrypted** at rest and in transit
- **Workspace-level isolation** ensures your data stays yours
- **No credential sharing** between workspaces or accounts
- **Token validation** catches expired or invalid credentials before they cause issues
- **Full audit logging** of all API operations

Your GoHighLevel API key never leaves your workspace, and you can disconnect the integration at any time.

## Why GoHighLevel + OzziOS?

Agencies using both platforms often run into the same problem: **data silos**.

GoHighLevel handles your CRM and client communication. OzziOS handles your AI-powered marketing execution. But without integration, you're constantly copying data between systems, manually triggering campaigns, and hoping nothing falls through the cracks.

Now, everything talks to everything:

| Before Integration | After Integration |
|-------------------|-------------------|
| Manual contact imports | Automatic sync |
| Separate campaign triggers | Unified workflows |
| Copy-paste reporting | Real-time dashboards |
| Disconnected follow-ups | AI-coordinated sequences |

## Real-World Use Cases

Here's how early adopters are using the integration:

### Lead Qualification Automation
> "When a lead fills out a form, our AI scores them, enriches their profile, and either adds them to a nurture sequence or alerts sales for immediate follow-up. What took 10 minutes per lead now happens instantly."

### Client Reporting
> "We pull GoHighLevel campaign data into OzziOS reports automatically. Clients see email performance alongside SEO and social—one dashboard, complete picture."

### Re-engagement Campaigns
> "AI monitors contact activity in GoHighLevel. When someone goes quiet for 30 days, it automatically launches a personalized re-engagement sequence. Our reactivation rate doubled."

## Getting Started

The GoHighLevel integration is available now for all OzziOS Pro and Enterprise users.

To connect your account:
1. Go to **Settings → Integrations** in OzziOS
2. Click **Connect** next to GoHighLevel
3. Enter your API credentials
4. Start building workflows

If you're not yet using OzziOS, [start your free trial](https://app.ozzios.com/sign-up?plan=solo) and see what's possible when your CRM gets AI superpowers.

---

*Have questions about the integration? [Check our documentation](https://docs.ozzios.com/integrations/gohighlevel) or reach out to support—we're here to help you get connected.*
    `},"future-of-agency-work":{id:"future-of-agency-work",title:"The Future of Agency Work: Why AI Employees Are Inevitable",excerpt:"The agency model is broken. Hiring costs $15-25K per employee, training takes months, and your best people leave—taking institutional knowledge with them. Here's how AI changes everything.",category:"ai",categoryLabel:"AI & Automation",author:{name:"Garrett Elmore",avatar:"/images/garrett-blog-profile-image.jpg",role:"Founder/CEO, OzziOS",bio:"Garrett is the founder and CEO of OzziOS, building AI-powered tools to help agencies scale without the headcount.",twitter:"@garrettelmore"},image:"https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1600&h=900&fit=crop&auto=format",readTime:"8 min read",date:"December 28, 2024",content:`
## The Hidden Cost of Human Teams

Every agency owner knows the feeling. You finally find the perfect hire—someone who gets your clients, understands your processes, and delivers quality work. You invest months training them. They become indispensable.

Then they leave.

And when they walk out the door, they take everything with them: the client relationships they've built, the institutional knowledge they've accumulated, the processes they've perfected. You're left starting from scratch.

**The numbers are brutal:**
- Average cost to hire: $15,000 - $25,000
- Time to full productivity: 3-6 months
- Annual turnover rate in agencies: 30%
- Knowledge retained when employees leave: ~20%

This isn't sustainable. And deep down, every agency owner knows it.

## Why Traditional Hiring Can't Scale

The fundamental problem with human teams isn't the people—it's the model itself.

When you hire a human employee, you're making a bet. You're betting that:
1. They'll stay long enough to justify the hiring cost
2. They'll learn fast enough to become productive
3. They'll document their knowledge (spoiler: they won't)
4. They won't take your best clients when they leave

Most of these bets don't pay off. The average agency employee stays 2.3 years. That's barely enough time to recoup your investment, let alone build lasting value.

### The Knowledge Problem

Here's what really keeps agency owners up at night: **institutional knowledge**.

Every conversation with a client. Every preference they've mentioned. Every campaign that worked (and why). Every relationship nuance. Every process improvement.

All of it lives in your employees' heads. And when they leave, it leaves with them.

> "We had an account manager who'd been with us for 4 years. She knew our biggest client better than anyone. When she left for a competitor, we lost the account within 6 months. That was $400K in annual revenue—gone because we couldn't transfer what she knew."

This story isn't unique. It's the norm.

## Enter the AI Employee

What if your employees never left? What if they remembered everything—every conversation, every preference, every detail? What if they worked 24/7 without burning out?

This isn't science fiction. It's what AI employees offer today.

### Infinite Memory

AI employees don't forget. Every client interaction, every brand guideline, every campaign result—it's all stored permanently. When you ask your AI Content Writer about a client's brand voice, it doesn't need to check old documents. It remembers.

This changes everything about how agencies operate:
- **No more knowledge loss** when team members transition
- **No more onboarding** new people to existing accounts
- **No more inconsistency** in client communication

### 24/7 Availability

Your AI team works while you sleep. Campaigns launch at 3am. Reports generate overnight. Client questions get answered in real-time, regardless of timezone.

This isn't about replacing human judgment—it's about extending your capacity. The strategic thinking still happens during business hours. But the execution? That happens around the clock.

### Zero Turnover Cost

When was the last time an AI employee quit to join a competitor? When did one ask for a raise? When did one take your best clients with them?

The answer is never. And it will always be never.

## The Hybrid Future

To be clear: AI employees don't replace humans entirely. They replace the repetitive, time-consuming work that burns out your best people.

Your human team focuses on:
- **Strategy and creative direction**
- **Client relationships and sales**
- **Quality control and oversight**
- **The work that actually requires a human touch**

Your AI team handles:
- **Content creation at scale**
- **Data analysis and reporting**
- **Campaign execution and optimization**
- **The work that's important but repetitive**

This hybrid model lets you scale output without scaling headcount. It lets you grow revenue without growing overhead. It lets you build an agency that's actually sustainable.

## Making the Transition

The shift to AI employees isn't about flipping a switch. It's about gradually augmenting your team's capabilities.

**Start small:**
1. Identify your most repetitive, time-consuming tasks
2. Deploy AI agents to handle those specific workflows
3. Measure the time saved and quality maintained
4. Gradually expand as you build confidence

**The agencies winning today** aren't the ones with the biggest teams. They're the ones who've figured out how to do more with less—how to leverage AI to multiply their human team's impact.

## The Bottom Line

The agency model is evolving. Those who adapt will thrive. Those who don't will struggle to compete against leaner, faster competitors who've embraced AI.

The question isn't whether AI employees will become standard in agencies. It's whether you'll be an early adopter or a late follower.

The early adopters are already seeing:
- **65% reduction in headcount needs**
- **40+ hours saved per week**
- **Zero turnover costs**
- **Infinite institutional memory**

The future of agency work isn't about humans vs. AI. It's about humans *with* AI—working together to deliver results that neither could achieve alone.

---

*Ready to meet your first AI employee? [Start your free trial](https://app.ozzios.com/sign-up?plan=solo) and see what's possible.*
    `},"replace-8-tools":{id:"replace-8-tools",title:"How We Replaced 8 Marketing Tools with One Platform",excerpt:"Mailchimp, Hootsuite, SEMrush, Asana—we cancelled them all. Here's how consolidation saved us $2,400/month.",category:"product",categoryLabel:"Product Updates",author:{name:"Garrett Elmore",avatar:"/images/garrett-blog-profile-image.jpg",role:"Founder/CEO, OzziOS",bio:"Garrett is the founder and CEO of OzziOS, building AI-powered tools to help agencies scale without the headcount.",twitter:"@garrettelmore"},image:"https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&h=900&fit=crop&auto=format",readTime:"5 min read",date:"December 22, 2024",content:`
## The Tool Sprawl Problem

If you've run an agency for more than a year, you know the drill. It starts innocently enough—you need email marketing, so you get Mailchimp. Then you need social scheduling, so you add Hootsuite. SEO tools? That's SEMrush. Project management? Asana. CRM? HubSpot.

Before you know it, you're juggling 8+ subscriptions, each with their own login, their own learning curve, their own monthly invoice.

**Our stack before OzziOS:**
- Mailchimp: $299/month
- Hootsuite: $99/month
- SEMrush: $229/month
- Asana: $150/month
- HubSpot: $800/month
- Slack: $75/month
- Zapier: $250/month
- ChatGPT Team: $100/month

**Total: $2,002/month** (and that's before overages)

## The Hidden Costs Nobody Talks About

The subscription fees are just the beginning. The real costs are:

### Context Switching
Every time you jump between tools, you lose focus. Studies show it takes 23 minutes to fully regain concentration after switching contexts. If your team switches tools 10 times a day, that's nearly 4 hours of lost productivity—per person.

### Data Silos
Your email data lives in Mailchimp. Your social data lives in Hootsuite. Your SEO data lives in SEMrush. Getting a unified view of performance? Good luck manually exporting CSVs and building spreadsheets.

### Integration Hell
Sure, Zapier can connect your tools. But every integration is another point of failure. Another thing to debug when data stops flowing. Another monthly cost that adds up.

## The Consolidation Experiment

Six months ago, we decided to run an experiment: could we replace our entire marketing stack with OzziOS?

The results surprised even us.

### What We Consolidated

| Old Tool | OzziOS Equivalent |
|----------|-------------------|
| Mailchimp | Email marketing + automation |
| Hootsuite | Social scheduling + publishing |
| SEMrush | SEO tools + AI SEO agent |
| Asana | Task management + workflows |
| HubSpot | CRM + pipeline management |
| Slack | Team channels + AI agents |
| Zapier | Native integrations + workflows |
| ChatGPT | Built into every AI agent |

### The Migration Process

We didn't flip a switch overnight. Here's how we approached it:

**Week 1-2:** Migrated email marketing and contact lists
**Week 3-4:** Moved social scheduling and content calendar
**Week 5-6:** Transferred SEO workflows and keyword tracking
**Week 7-8:** Consolidated project management and CRM

The key was running both systems in parallel during each phase. We never went cold turkey.

## The Results: 6 Months Later

### Cost Savings
- **Before:** $2,002/month
- **After:** $299/month (OzziOS Pro plan)
- **Savings:** $1,703/month = **$20,436/year**

### Productivity Gains
- 73% reduction in tool switching
- 4.2 hours saved per team member per week
- Single login for everything

### Data Unity
For the first time, we could see everything in one dashboard:
- Email campaigns alongside social performance
- SEO rankings next to content calendar
- Client communications with project status

## What We Didn't Expect

The biggest surprise wasn't the cost savings—it was how AI agents changed our workflows.

When your email tool, SEO tool, and content tool are all connected with AI agents, new possibilities emerge:

- AI spots a trending topic → automatically drafts social content → schedules across platforms → tracks performance
- Lead comes in via email → AI enriches with SEO data → suggests personalized follow-up → logs in CRM

These workflows would've required 3-4 Zapier automations before. Now they just... happen.

## Should You Consolidate?

Not every agency is ready for full consolidation. Ask yourself:

1. **Are you paying for features you don't use?** Most agencies use 20% of their tools' features.
2. **How much time does your team spend switching contexts?** Track it for a week.
3. **Can you get a unified view of client performance?** If not, you're working blind.

If you answered "yes," "too much," and "no"—consolidation might be your answer.

---

*Curious what tools you could replace? [Try our savings calculator](https://ozzios.com/#calculator) to see your potential savings.*
    `},"ai-seo-strategy":{id:"ai-seo-strategy",title:"AI-Powered SEO: A Complete Strategy Guide for 2025",excerpt:"Keyword research, technical audits, content optimization—all automated. Learn how AI agents handle SEO at scale.",category:"ai",categoryLabel:"AI & Automation",author:{name:"Garrett Elmore",avatar:"/images/garrett-blog-profile-image.jpg",role:"Founder/CEO, OzziOS",bio:"Garrett is the founder and CEO of OzziOS, building AI-powered tools to help agencies scale without the headcount.",twitter:"@garrettelmore"},image:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&h=900&fit=crop&auto=format",readTime:"12 min read",date:"December 18, 2024",content:`
## The SEO Landscape Has Changed

SEO in 2025 isn't what it was even two years ago. Google's AI updates have fundamentally changed how content ranks. The old playbook—keyword stuffing, link schemes, thin content at scale—doesn't just fail now. It actively hurts you.

What works today:
- **Quality over quantity** in content
- **Topic authority** over keyword matching
- **User experience** as a ranking factor
- **E-E-A-T** (Experience, Expertise, Authoritativeness, Trust)

The irony? AI-generated content is penalized, but AI-*assisted* content thrives. The key is knowing where the line is.

## Where AI Excels in SEO

After working with AI SEO agents for the past year, I've identified the areas where AI genuinely outperforms human-only approaches:

### 1. Technical Audits

AI can crawl a 10,000-page site and identify issues in minutes. What used to take a week of manual analysis now happens before your morning coffee.

**What AI catches that humans miss:**
- Orphaned pages with no internal links
- Redirect chains that slow page speed
- Duplicate content across URL variations
- Schema markup errors and opportunities
- Core Web Vitals issues by page template

### 2. Keyword Research at Scale

The old way: Manually searching terms, exporting to spreadsheets, analyzing one by one.

The AI way: Give it your topic, competitor URLs, and business goals. Get back a prioritized list with:
- Search volume and trends
- Keyword difficulty scores
- SERP feature opportunities
- Content gap analysis
- Recommended target pages

### 3. Content Optimization

This is where AI shines—not in writing content, but in optimizing it.

AI can analyze your draft against top-ranking pages and tell you:
- Missing subtopics to cover
- Questions you haven't answered
- Semantic terms to include naturally
- Optimal content length for the query
- Internal linking opportunities

## A Complete AI SEO Workflow

Here's the workflow we use with OzziOS for client SEO:

### Phase 1: Discovery
\`\`\`
Human: Defines business goals and target audience
AI Agent: Audits current site, identifies baseline metrics
AI Agent: Analyzes competitor landscape
Human: Reviews and prioritizes opportunities
\`\`\`

### Phase 2: Strategy
\`\`\`
AI Agent: Generates keyword universe (500-2000 terms)
AI Agent: Clusters keywords by topic and intent
Human: Validates clusters, assigns priority
AI Agent: Creates content calendar and briefs
\`\`\`

### Phase 3: Execution
\`\`\`
AI Agent: Drafts content briefs with outlines
Human: Reviews briefs, adds expertise and examples
AI Agent: Optimizes drafts for target keywords
Human: Final review and publication approval
\`\`\`

### Phase 4: Monitoring
\`\`\`
AI Agent: Tracks rankings daily
AI Agent: Alerts on significant changes
AI Agent: Suggests optimization opportunities
Human: Decides on strategic adjustments
\`\`\`

## The Human-AI Balance

Here's what I've learned about where to draw the line:

### Let AI Handle:
- Data collection and analysis
- Pattern recognition across large datasets
- Repetitive optimization tasks
- Monitoring and alerting
- First-draft content briefs

### Keep Human:
- Final content creation and review
- Strategic decision-making
- Client communication
- Creative differentiation
- Quality judgment calls

The agencies getting AI SEO wrong are the ones using it to pump out content. The ones getting it right use AI to do the grunt work while humans focus on quality and strategy.

## Results We've Seen

Across 23 client accounts using AI-assisted SEO:

- **Average ranking improvement:** 34 positions for target keywords
- **Organic traffic growth:** 156% over 6 months
- **Time per client:** Reduced from 20 hours/month to 8 hours/month
- **Client retention:** 94% (up from 78% pre-AI)

The time savings alone paid for the investment. The results made clients happier than ever.

## Getting Started with AI SEO

If you're new to AI-assisted SEO, start here:

1. **Audit first:** Use AI to identify your current technical issues
2. **Quick wins:** Fix critical errors AI identifies
3. **Content gaps:** Let AI analyze what competitors cover that you don't
4. **Optimize existing:** Use AI to improve your best-performing pages
5. **Scale carefully:** Only create new content when existing content is optimized

The biggest mistake? Trying to do everything at once. AI makes it tempting to move fast. But SEO still rewards patience and quality over speed and volume.

---

*Want to see AI SEO in action? [Watch our SEO Specialist agent](https://ozzios.com/#demo) analyze a site in real-time.*
    `},"scaling-without-hiring":{id:"scaling-without-hiring",title:"Scaling Your Agency Without Adding Headcount",excerpt:"We grew from $50K to $200K MRR with the same team size. The secret? AI employees that work 24/7.",category:"agency",categoryLabel:"Agency Growth",author:{name:"Garrett Elmore",avatar:"/images/garrett-blog-profile-image.jpg",role:"Founder/CEO, OzziOS",bio:"Garrett is the founder and CEO of OzziOS, building AI-powered tools to help agencies scale without the headcount.",twitter:"@garrettelmore"},image:"https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&h=900&fit=crop&auto=format",readTime:"7 min read",date:"December 15, 2024",content:`
## The Traditional Agency Math Problem

Every agency hits the same wall. You want to grow revenue, but the only way you know how is to add headcount. More clients = more people = more overhead = thinner margins.

The math looks like this:

| Revenue | Team Size | Revenue/Employee | Margin |
|---------|-----------|------------------|--------|
| $50K MRR | 5 | $10K | 25% |
| $100K MRR | 12 | $8.3K | 20% |
| $200K MRR | 28 | $7.1K | 15% |

See the problem? As you scale, efficiency *decreases*. Margins shrink. The bigger you get, the harder it is to grow.

## What If the Math Was Different?

What if you could grow revenue without proportionally growing headcount? What if the equation looked more like this:

| Revenue | Team Size | Revenue/Employee | Margin |
|---------|-----------|------------------|--------|
| $50K MRR | 5 | $10K | 25% |
| $100K MRR | 6 | $16.7K | 35% |
| $200K MRR | 7 | $28.6K | 45% |

This isn't fantasy. This is what AI employees make possible.

## Our Journey: $50K to $200K MRR

Eighteen months ago, our agency was stuck at $50K MRR with 5 full-time employees. We were profitable but plateaued. Taking on more clients meant hiring more people—people we'd have to find, train, and hope wouldn't leave.

Then we started experimenting with AI agents.

### Month 1-3: The Learning Phase
We deployed AI agents for our most time-consuming tasks:
- Content first drafts
- Social media scheduling
- Basic data reporting
- Email campaign setup

**Result:** 15 hours saved per week across the team.

### Month 4-6: The Optimization Phase
We refined our AI workflows and started trusting agents with more:
- Full SEO audits
- Campaign performance analysis
- Client report generation
- Lead qualification

**Result:** 35 hours saved per week. We took on 3 new clients without hiring.

### Month 7-12: The Scaling Phase
AI became core to our operations:
- 70% of content created by AI (human edited)
- All reporting automated
- Lead nurturing on autopilot
- 24/7 client support via AI

**Result:** $200K MRR with 7 employees (we added 2 senior strategists).

## The Key Insight

Here's what we learned: **AI doesn't replace people, it changes what people do.**

Before AI, our team spent time on:
- 60% execution (content, reports, campaigns)
- 30% coordination (meetings, emails, updates)
- 10% strategy (thinking, planning, creating)

After AI:
- 20% execution (reviewing AI output, final touches)
- 20% coordination (AI handles routine updates)
- 60% strategy (where humans add real value)

Our clients got better work because our humans focused on what humans do best.

## The Playbook for Scaling Without Hiring

If you want to replicate this, here's the framework:

### Step 1: Audit Your Time
For two weeks, have every team member track their hours by task type:
- Execution (doing the work)
- Coordination (managing the work)
- Strategy (planning the work)

Any task that's execution-heavy is an AI candidate.

### Step 2: Start With Reporting
Reporting is the perfect first AI use case:
- It's time-consuming (4-8 hours per client per month)
- It's repetitive (same format, different data)
- Errors are easily caught (you review before sending)

### Step 3: Expand to Content
Once reporting is automated, move to content:
- First drafts, not final content
- Research and outlines
- Repurposing existing content

Keep humans in the editing seat.

### Step 4: Automate Client Communication
This is where it gets powerful:
- Routine updates sent automatically
- Questions answered 24/7
- Status reports without lifting a finger

Your clients feel more connected even though you're spending less time on updates.

### Step 5: Scale Strategically
Now you can grow differently:
- Take on more clients without more junior hires
- Hire only senior people who add strategic value
- Charge premium prices for premium thinking

## The New Agency Model

The agencies that thrive in the next decade will look different:

**Old Model:**
- Revenue grows with headcount
- Junior staff handles execution
- Margins shrink as you scale
- Knowledge walks out the door

**New Model:**
- Revenue grows with AI capacity
- All staff focuses on strategy
- Margins improve as you scale
- Knowledge stays in the system

The question isn't whether this transition will happen. It's whether you'll lead it or react to it.

---

*Ready to scale differently? [See how other agencies are doing it](https://ozzios.com/case-studies) or [start your free trial](https://app.ozzios.com/sign-up?plan=solo).*
    `},"content-automation":{id:"content-automation",title:"Content Creation at Scale: From 4 Posts to 40 Per Week",excerpt:"Our AI Content Writer generates blog posts, social content, and email campaigns—all in your brand voice.",category:"marketing",categoryLabel:"Marketing",author:{name:"Garrett Elmore",avatar:"/images/garrett-blog-profile-image.jpg",role:"Founder/CEO, OzziOS",bio:"Garrett is the founder and CEO of OzziOS, building AI-powered tools to help agencies scale without the headcount.",twitter:"@garrettelmore"},image:"https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&h=900&fit=crop&auto=format",readTime:"6 min read",date:"December 10, 2024",content:`
## The Content Treadmill

Every marketer knows the feeling. You need to publish consistently. The algorithm rewards frequency. Your competitors are everywhere.

But creating quality content takes time. A single blog post: 4-6 hours. A week of social content: 3-4 hours. Monthly email campaigns: 5-6 hours.

Multiply that across clients, and content becomes a full-time job. Or three.

## The AI Content Revolution

AI doesn't replace writers—it multiplies them. Here's how our content process evolved:

### Before AI
- 4 blog posts per month per client
- 3 social posts per week
- 2 email campaigns per month
- 1 content person per 3 clients

### After AI
- 16 blog posts per month per client
- 5 social posts per day
- 8 email campaigns per month
- 1 content person per 10 clients

Same quality. 4x the output.

## The Content Creation Workflow

Here's exactly how we use AI for content:

### Blog Posts

**Step 1: AI Research**
Give the AI Content Writer a topic. It returns:
- Top 10 ranking articles analysis
- Common questions people ask
- Unique angles not yet covered
- Suggested outline

**Step 2: AI First Draft**
The AI creates a complete first draft based on:
- The approved outline
- Your brand voice guidelines
- Target keywords
- Desired length

**Step 3: Human Enhancement**
A human writer:
- Adds personal experience and examples
- Inserts proprietary data or insights
- Refines the voice and flow
- Ensures factual accuracy

**Step 4: AI Optimization**
Back to AI for:
- SEO optimization
- Readability improvements
- Internal linking suggestions
- Meta description and title options

**Time comparison:**
- Old way: 5 hours per post
- New way: 1.5 hours per post

### Social Content

Social is where AI shines brightest:

1. **One blog post → 20 social posts**
   - AI extracts key quotes
   - Creates thread versions
   - Generates image captions
   - Writes platform-specific variations

2. **Trend monitoring**
   - AI watches your industry
   - Suggests timely topics
   - Drafts rapid-response content

3. **Scheduling and optimization**
   - Automatic best-time posting
   - A/B testing copy variations
   - Performance-based adjustments

## Maintaining Brand Voice

The #1 concern with AI content: "Will it sound like us?"

Here's how we solve it:

### Voice Training
Feed the AI:
- 10+ examples of your best content
- Brand guidelines document
- Tone descriptors (casual, authoritative, etc.)
- Words you use (and words you don't)

### Voice Consistency
Every piece goes through:
- AI voice-check against guidelines
- Human review for authenticity
- Client approval on first few pieces

After the initial training, AI-generated content is often indistinguishable from human-written content.

## Real Results

One client example—B2B SaaS company:

**Before AI (Q1):**
- 4 blog posts
- 60 social posts
- 8 emails
- 12,000 website visitors

**After AI (Q2):**
- 16 blog posts
- 300 social posts
- 32 emails
- 47,000 website visitors

Same budget. Same team. 4x the output. 4x the traffic.

## Getting Started

Ready to scale your content? Here's the path:

1. **Document your voice** — Create guidelines AI can learn from
2. **Start with social** — Lowest risk, fastest feedback
3. **Move to blogs** — First drafts only, always human-edited
4. **Expand to email** — Personalization at scale

The agencies still doing content the old way will struggle to compete. The ones embracing AI are already winning.

---

*See the AI Content Writer in action. [Watch a demo](https://ozzios.com/#demo) or [start creating](https://app.ozzios.com/sign-up?plan=solo).*
    `},"client-reporting-automation":{id:"client-reporting-automation",title:"Automated Client Reports That Actually Impress",excerpt:"Stop spending Sundays building reports. Our AI generates interactive dashboards clients can explore themselves.",category:"product",categoryLabel:"Product Updates",author:{name:"Garrett Elmore",avatar:"/images/garrett-blog-profile-image.jpg",role:"Founder/CEO, OzziOS",bio:"Garrett is the founder and CEO of OzziOS, building AI-powered tools to help agencies scale without the headcount.",twitter:"@garrettelmore"},image:"https://images.unsplash.com/photo-1551434678-e076c223a692?w=1600&h=900&fit=crop&auto=format",readTime:"4 min read",date:"December 5, 2024",content:`
## Sunday Night Reporting Is Over

We've all been there. It's Sunday evening. You should be relaxing. Instead, you're pulling data from 6 different platforms, copying numbers into slides, and trying to make it look pretty before Monday.

There's a better way.

## What Modern Client Reporting Looks Like

Imagine this instead:

1. **Friday 5pm:** You click "Generate Report"
2. **Friday 5:01pm:** AI pulls data from all connected platforms
3. **Friday 5:02pm:** AI analyzes performance and identifies insights
4. **Friday 5:05pm:** Beautiful interactive report is ready
5. **Monday 9am:** You review and send (5 minutes)

That's not a vision. That's what OzziOS does today.

## The Features That Matter

### Real-Time Data Connections
- Google Analytics
- Facebook/Meta Ads
- Google Ads
- Mailchimp/Email platforms
- Shopify/E-commerce
- And 50+ more

No more manual exports. No more spreadsheet gymnastics.

### AI-Powered Insights
The AI doesn't just show numbers. It explains them:
- "Conversions increased 23% due to the new landing page launched on the 15th"
- "CPM spiked mid-month—likely due to competitor holiday campaigns"
- "Email open rates are 3x industry average—subject line testing is working"

Your clients understand what happened and why.

### Interactive Dashboards
Static PDFs are dead. Modern reports let clients:
- Filter by date range
- Drill down into specific campaigns
- Compare periods
- Explore at their own pace

They feel in control. You answer fewer questions.

## Time Savings in Real Numbers

Average agency before automation:
- 4-8 hours per client per month on reporting
- 20 clients = 100+ hours of reporting
- That's 2.5 full-time employees worth of work

With automated reporting:
- 15-30 minutes per client per month
- 20 clients = 8 hours of reporting
- One person handles it all

## What Our Users Say

> "I used to spend every Sunday on reports. Now I spend 2 hours on Monday reviewing what the AI created. My weekends are mine again."
> — Agency owner, 15 clients

> "Our clients actually read the reports now. The interactive dashboards are something they show to their bosses."
> — Marketing director, 8 clients

## How to Get Started

1. **Connect your data sources** (one-time setup, ~30 minutes)
2. **Choose a report template** (or customize your own)
3. **Set the schedule** (weekly, monthly, or on-demand)
4. **Review and send** (your only recurring task)

That's it. Reporting solved.

---

*Ready to reclaim your Sundays? [Start your free trial](https://app.ozzios.com/sign-up?plan=solo) and generate your first report in minutes.*
    `},"goodbye-agency-retainers":{id:"goodbye-agency-retainers",title:"Why We Fired Our Marketing Agency (And Never Looked Back)",excerpt:"$8K/month for work we couldn't see. Now we own the AI—full transparency, better results, fraction of the cost.",category:"agency",categoryLabel:"Agency Growth",author:{name:"Garrett Elmore",avatar:"/images/garrett-blog-profile-image.jpg",role:"Founder/CEO, OzziOS",bio:"Garrett is the founder and CEO of OzziOS, building AI-powered tools to help agencies scale without the headcount.",twitter:"@garrettelmore"},image:"https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600&h=900&fit=crop&auto=format",readTime:"9 min read",date:"November 28, 2024",content:`
## The Black Box Problem

For three years, we paid an agency $8,000 per month. That's $288,000 over the relationship.

What did we get? Monthly reports we didn't understand. Meetings where they told us things were "going well." Vague explanations when we asked why metrics were down.

We had no idea what they actually did with our money.

## The Breaking Point

The moment of clarity came during a quarterly review. We asked a simple question: "How many hours did your team spend on our account last month?"

The answer: "We don't track hours. We focus on results."

But the results weren't there either. Traffic was flat. Leads were down. And we had no visibility into why.

That night, I made the decision to fire them.

## Taking Marketing In-House (Sort Of)

The problem with firing your agency: someone still needs to do the work.

We didn't want to hire a full marketing team. We'd been down that road before—the hiring, training, turnover, and management overhead.

That's when we discovered AI could fill the gap.

## What AI Replaced

Here's what our $8K/month agency supposedly handled:

| Service | Agency Claim | What AI Does |
|---------|--------------|--------------|
| SEO | "Ongoing optimization" | Full audits, keyword tracking, content optimization |
| Content | "2 blog posts/month" | 8 posts/month, plus social |
| Social | "Community management" | Daily posting, engagement monitoring |
| Ads | "Campaign management" | Automated bidding, creative testing |
| Reporting | "Monthly review" | Real-time dashboards, AI insights |

The AI does more, shows us everything, and costs a fraction.

## The Transparency Difference

With our agency, we saw:
- Monthly reports (delivered 2 weeks after month end)
- High-level metrics only
- No insight into actual work performed
- Excuses when things went wrong

With AI, we see:
- Real-time dashboards
- Every action logged and explained
- Every decision documented
- Clear cause-and-effect analysis

We went from trusting blindly to trusting with verification.

## The Results: 6 Months Post-Agency

| Metric | With Agency | With AI (6mo later) |
|--------|-------------|---------------------|
| Monthly cost | $8,000 | $299 |
| Organic traffic | 12,000 | 34,000 |
| Leads | 45/month | 128/month |
| Cost per lead | $178 | $2.34 |

Read that last line again. Our cost per lead dropped by 98%.

## What We Miss About Agencies (Nothing)

I thought I'd miss having people to call. Strategic partners to bounce ideas off. Experts who knew more than us.

Here's what I actually found:
- AI provides better strategic recommendations (based on data, not intuition)
- AI explains its reasoning (try getting an agency to do that)
- AI doesn't take vacations, get sick, or leave for a competitor

The "human touch" of agencies was mostly just overhead.

## When Agencies Still Make Sense

To be fair, there are scenarios where agencies add value:
- **True creative work:** Brand identity, video production, design
- **Crisis management:** Situations requiring human judgment
- **Enterprise scale:** When you need bodies in seats for meetings

But for execution-level marketing work? AI wins every time.

## Making the Switch

If you're considering firing your agency, here's the playbook:

1. **Audit current performance** — Get actual data, not agency-filtered reports
2. **Document all services** — What are you actually paying for?
3. **Pilot AI alternatives** — Run parallel for one month
4. **Compare honestly** — Same metrics, same time period
5. **Make the call** — The numbers usually make it obvious

Most agencies survive on inertia—clients stay because switching seems hard. Once you see the alternative, you'll wonder why you waited.

---

*Ready to see what your agency is really doing? [Get a free audit](https://ozzios.com/audit) of your current marketing performance.*
    `}},nh=[{id:"gohighlevel-integration",title:"OzziOS Now Integrates with GoHighLevel: Supercharge Your CRM with AI",image:"/images/ghl_ozzi_integrated_blog_post.jpg",readTime:"4 min read"},{id:"replace-8-tools",title:"How We Replaced 8 Marketing Tools with One Platform",image:"https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&auto=format",readTime:"5 min read"},{id:"ai-seo-strategy",title:"AI-Powered SEO: A Complete Strategy Guide for 2025",image:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&auto=format",readTime:"12 min read"},{id:"scaling-without-hiring",title:"Scaling Your Agency Without Adding Headcount",image:"https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop&auto=format",readTime:"7 min read"}],rh={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1,delayChildren:.1}}},it={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.6,ease:[.25,.1,.25,1]}}};function ih({postId:e}){const[n,t]=ki.useState(!1),r=th[e];if(!r)return C.jsx("div",{className:"min-h-screen bg-background pt-32 pb-20",children:C.jsxs("div",{className:"mx-auto max-w-[800px] px-6 lg:px-8 text-center",children:[C.jsx("h1",{className:"text-3xl font-display text-foreground mb-4",children:"Post not found"}),C.jsx("p",{className:"text-muted-foreground mb-8",children:"The article you're looking for doesn't exist."}),C.jsx(Ze,{to:"/blog",className:"text-signature hover:text-signature/80",children:"← Back to blog"})]})});const i=()=>{navigator.clipboard.writeText(window.location.href),t(!0),setTimeout(()=>t(!1),2e3)},a=nh.filter(o=>o.id!==e).slice(0,3);return C.jsxs("div",{className:"min-h-screen bg-background",children:[C.jsxs("section",{className:"relative pt-28 pb-8 lg:pt-32 lg:pb-10 overflow-hidden",children:[C.jsx("div",{className:"absolute inset-0 grid-pattern opacity-30"}),C.jsx("div",{className:"relative z-10 mx-auto max-w-[900px] px-6 lg:px-8",children:C.jsxs(he.div,{initial:"hidden",animate:"visible",variants:rh,children:[C.jsx(he.div,{variants:it,className:"mb-5",children:C.jsxs(Ze,{to:"/blog",className:"inline-flex items-center gap-2 text-[13px] text-muted-foreground hover:text-foreground transition-colors",children:[C.jsx(vi,{className:"w-4 h-4"}),"Back to blog"]})}),C.jsxs(he.div,{variants:it,className:"flex flex-wrap items-center gap-3 mb-4",children:[C.jsx("span",{className:"px-3 py-1.5 rounded-full bg-signature/10 text-[11px] font-semibold text-signature uppercase tracking-wider",children:r.categoryLabel}),C.jsxs("span",{className:"flex items-center gap-1.5 text-[13px] text-muted-foreground",children:[C.jsx(Si,{className:"w-4 h-4"}),r.date]}),C.jsxs("span",{className:"flex items-center gap-1.5 text-[13px] text-muted-foreground",children:[C.jsx(fn,{className:"w-4 h-4"}),r.readTime]})]}),C.jsx(he.h1,{variants:it,className:"text-[clamp(1.75rem,4vw,2.75rem)] font-display leading-[1.15] tracking-[-0.02em] text-foreground mb-5",children:r.title}),C.jsxs(he.div,{variants:it,className:"flex items-center justify-between gap-4",children:[C.jsxs("div",{className:"flex items-center gap-3",children:[C.jsx("img",{src:r.author.avatar,alt:r.author.name,className:"w-10 h-10 rounded-full object-cover ring-2 ring-border"}),C.jsxs("div",{children:[C.jsx("p",{className:"text-[13px] font-medium text-foreground",children:r.author.name}),C.jsx("p",{className:"text-[11px] text-muted-foreground",children:r.author.role})]})]}),C.jsxs("div",{className:"flex items-center gap-2",children:[C.jsx("button",{onClick:()=>window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(r.title)}`,"_blank"),className:"w-8 h-8 rounded-lg bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-signature/30 transition-all",children:C.jsx(mn,{className:"w-3.5 h-3.5"})}),C.jsx("button",{onClick:()=>window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`,"_blank"),className:"w-8 h-8 rounded-lg bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-signature/30 transition-all",children:C.jsx(Ei,{className:"w-3.5 h-3.5"})}),C.jsx("button",{onClick:i,className:"w-8 h-8 rounded-lg bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-signature/30 transition-all",children:n?C.jsx(Ai,{className:"w-3.5 h-3.5 text-emerald-400"}):C.jsx(Ci,{className:"w-3.5 h-3.5"})})]})]})]})})]}),C.jsx(he.section,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.3},className:"relative mb-10",children:C.jsx("div",{className:"mx-auto max-w-[1000px] px-6 lg:px-8",children:C.jsxs("div",{className:"relative rounded-2xl overflow-hidden border-2 border-border",children:[C.jsx("img",{src:r.image,alt:r.title,className:"w-full aspect-[2/1] object-cover"}),C.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-background/50 to-transparent"})]})})}),C.jsx("section",{className:"pb-20",children:C.jsx("div",{className:"mx-auto max-w-[900px] px-6 lg:px-8",children:C.jsx(he.article,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.4},className:`prose prose-lg max-w-none
              prose-headings:font-display prose-headings:tracking-tight prose-headings:text-foreground
              prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6
              prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4
              prose-p:text-muted-foreground prose-p:leading-relaxed
              prose-strong:text-foreground prose-strong:font-semibold
              prose-a:text-signature prose-a:no-underline hover:prose-a:text-signature/80
              prose-blockquote:border-l-signature/50 prose-blockquote:bg-muted/50 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-xl prose-blockquote:not-italic prose-blockquote:text-muted-foreground
              prose-code:text-signature prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none
              prose-pre:bg-[#1e1e2e] prose-pre:border prose-pre:border-border
              prose-ul:text-muted-foreground prose-ol:text-muted-foreground
              prose-li:marker:text-signature/50
              prose-table:border-collapse prose-th:border prose-th:border-border prose-th:bg-muted/50 prose-th:px-4 prose-th:py-2 prose-td:border prose-td:border-border prose-td:px-4 prose-td:py-2
              prose-hr:border-border`,children:C.jsx(Hs,{remarkPlugins:[eh],children:r.content})})})}),C.jsx("section",{className:"py-16 bg-muted/50",children:C.jsx("div",{className:"mx-auto max-w-[900px] px-6 lg:px-8",children:C.jsxs(he.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},className:"flex flex-col sm:flex-row items-start gap-6 p-6 rounded-2xl bg-card border-2 border-border",children:[C.jsx("img",{src:r.author.avatar,alt:r.author.name,className:"w-20 h-20 rounded-full object-cover ring-2 ring-border"}),C.jsxs("div",{children:[C.jsx("p",{className:"text-[11px] text-muted-foreground uppercase tracking-wider mb-2",children:"Written by"}),C.jsx("h3",{className:"text-lg font-semibold text-foreground mb-1",children:r.author.name}),C.jsx("p",{className:"text-[14px] text-signature mb-3",children:r.author.role}),C.jsx("p",{className:"text-[14px] text-muted-foreground leading-relaxed mb-4",children:r.author.bio}),C.jsxs("a",{href:`https://twitter.com/${r.author.twitter.replace("@","")}`,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 text-[13px] text-muted-foreground hover:text-foreground transition-colors",children:[C.jsx(mn,{className:"w-4 h-4"}),r.author.twitter]})]})]})})}),C.jsx("section",{className:"py-20",children:C.jsx("div",{className:"mx-auto max-w-[1000px] px-6 lg:px-8",children:C.jsxs(he.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},children:[C.jsxs("div",{className:"flex items-center justify-between mb-10",children:[C.jsx("h2",{className:"text-2xl font-display text-foreground",children:"Related Articles"}),C.jsxs(Ze,{to:"/blog",className:"inline-flex items-center gap-2 text-[13px] text-muted-foreground hover:text-foreground transition-colors",children:["View all",C.jsx(Ii,{className:"w-4 h-4"})]})]}),C.jsx("div",{className:"grid gap-6 md:grid-cols-3",children:a.map(o=>C.jsxs(Ze,{to:"/blog/$postId",params:{postId:o.id},className:"group block rounded-xl border-2 border-border bg-card overflow-hidden transition-all duration-500 hover:border-signature/30",children:[C.jsxs("div",{className:"relative h-40 overflow-hidden",children:[C.jsx("img",{src:o.image,alt:o.title,className:"absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"}),C.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"})]}),C.jsxs("div",{className:"p-5",children:[C.jsxs("div",{className:"flex items-center gap-2 mb-3 text-[11px] text-muted-foreground",children:[C.jsx(fn,{className:"w-3 h-3"}),o.readTime]}),C.jsx("h3",{className:"text-[15px] font-semibold text-foreground group-hover:text-signature transition-colors line-clamp-2",children:o.title})]})]},o.id))})]})})}),C.jsx("section",{className:"py-20 bg-muted/50",children:C.jsx("div",{className:"mx-auto max-w-[600px] px-6 lg:px-8 text-center",children:C.jsxs(he.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},children:[C.jsx("h3",{className:"text-2xl font-display text-foreground mb-4",children:"Ready to try AI employees?"}),C.jsx("p",{className:"text-[15px] text-muted-foreground mb-8",children:"Start with 50 free credits. No credit card required."}),C.jsxs("a",{href:"https://app.ozzios.com/sign-up?plan=solo",className:"inline-flex items-center gap-3 px-8 py-4 rounded-lg bg-signature text-white font-medium text-[15px] hover:bg-signature/90 transition-colors",children:["Get started free",C.jsx(bi,{className:"w-4 h-4"})]})]})})})]})}function mh(){const{postId:e}=xi.useParams();return C.jsx(ih,{postId:e})}export{mh as component};
