(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function gS(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var q_={exports:{}},pu={},W_={exports:{}},Z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qo=Symbol.for("react.element"),yS=Symbol.for("react.portal"),_S=Symbol.for("react.fragment"),vS=Symbol.for("react.strict_mode"),wS=Symbol.for("react.profiler"),ES=Symbol.for("react.provider"),TS=Symbol.for("react.context"),IS=Symbol.for("react.forward_ref"),SS=Symbol.for("react.suspense"),RS=Symbol.for("react.memo"),kS=Symbol.for("react.lazy"),Ym=Symbol.iterator;function AS(t){return t===null||typeof t!="object"?null:(t=Ym&&t[Ym]||t["@@iterator"],typeof t=="function"?t:null)}var K_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},G_=Object.assign,Q_={};function ls(t,e,n){this.props=t,this.context=e,this.refs=Q_,this.updater=n||K_}ls.prototype.isReactComponent={};ls.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ls.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function X_(){}X_.prototype=ls.prototype;function zd(t,e,n){this.props=t,this.context=e,this.refs=Q_,this.updater=n||K_}var Hd=zd.prototype=new X_;Hd.constructor=zd;G_(Hd,ls.prototype);Hd.isPureReactComponent=!0;var Jm=Array.isArray,Y_=Object.prototype.hasOwnProperty,qd={current:null},J_={key:!0,ref:!0,__self:!0,__source:!0};function Z_(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Y_.call(e,r)&&!J_.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:qo,type:t,key:s,ref:o,props:i,_owner:qd.current}}function PS(t,e){return{$$typeof:qo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Wd(t){return typeof t=="object"&&t!==null&&t.$$typeof===qo}function CS(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Zm=/\/+/g;function Pc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?CS(""+t.key):e.toString(36)}function el(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case qo:case yS:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Pc(o,0):r,Jm(i)?(n="",t!=null&&(n=t.replace(Zm,"$&/")+"/"),el(i,e,n,"",function(c){return c})):i!=null&&(Wd(i)&&(i=PS(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Zm,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Jm(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+Pc(s,l);o+=el(s,e,n,u,i)}else if(u=AS(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+Pc(s,l++),o+=el(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ca(t,e,n){if(t==null)return t;var r=[],i=0;return el(t,r,"","",function(s){return e.call(n,s,i++)}),r}function xS(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ht={current:null},tl={transition:null},NS={ReactCurrentDispatcher:ht,ReactCurrentBatchConfig:tl,ReactCurrentOwner:qd};function ev(){throw Error("act(...) is not supported in production builds of React.")}Z.Children={map:Ca,forEach:function(t,e,n){Ca(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ca(t,function(){e++}),e},toArray:function(t){return Ca(t,function(e){return e})||[]},only:function(t){if(!Wd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Z.Component=ls;Z.Fragment=_S;Z.Profiler=wS;Z.PureComponent=zd;Z.StrictMode=vS;Z.Suspense=SS;Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=NS;Z.act=ev;Z.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=G_({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=qd.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)Y_.call(e,u)&&!J_.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:qo,type:t.type,key:i,ref:s,props:r,_owner:o}};Z.createContext=function(t){return t={$$typeof:TS,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:ES,_context:t},t.Consumer=t};Z.createElement=Z_;Z.createFactory=function(t){var e=Z_.bind(null,t);return e.type=t,e};Z.createRef=function(){return{current:null}};Z.forwardRef=function(t){return{$$typeof:IS,render:t}};Z.isValidElement=Wd;Z.lazy=function(t){return{$$typeof:kS,_payload:{_status:-1,_result:t},_init:xS}};Z.memo=function(t,e){return{$$typeof:RS,type:t,compare:e===void 0?null:e}};Z.startTransition=function(t){var e=tl.transition;tl.transition={};try{t()}finally{tl.transition=e}};Z.unstable_act=ev;Z.useCallback=function(t,e){return ht.current.useCallback(t,e)};Z.useContext=function(t){return ht.current.useContext(t)};Z.useDebugValue=function(){};Z.useDeferredValue=function(t){return ht.current.useDeferredValue(t)};Z.useEffect=function(t,e){return ht.current.useEffect(t,e)};Z.useId=function(){return ht.current.useId()};Z.useImperativeHandle=function(t,e,n){return ht.current.useImperativeHandle(t,e,n)};Z.useInsertionEffect=function(t,e){return ht.current.useInsertionEffect(t,e)};Z.useLayoutEffect=function(t,e){return ht.current.useLayoutEffect(t,e)};Z.useMemo=function(t,e){return ht.current.useMemo(t,e)};Z.useReducer=function(t,e,n){return ht.current.useReducer(t,e,n)};Z.useRef=function(t){return ht.current.useRef(t)};Z.useState=function(t){return ht.current.useState(t)};Z.useSyncExternalStore=function(t,e,n){return ht.current.useSyncExternalStore(t,e,n)};Z.useTransition=function(){return ht.current.useTransition()};Z.version="18.3.1";W_.exports=Z;var b=W_.exports;const bS=gS(b);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var DS=b,LS=Symbol.for("react.element"),OS=Symbol.for("react.fragment"),VS=Object.prototype.hasOwnProperty,MS=DS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,US={key:!0,ref:!0,__self:!0,__source:!0};function tv(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)VS.call(e,r)&&!US.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:LS,type:t,key:s,ref:o,props:i,_owner:MS.current}}pu.Fragment=OS;pu.jsx=tv;pu.jsxs=tv;q_.exports=pu;var g=q_.exports,wh={},nv={exports:{}},Dt={},rv={exports:{}},iv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e($,Q){var J=$.length;$.push(Q);e:for(;0<J;){var ye=J-1>>>1,le=$[ye];if(0<i(le,Q))$[ye]=Q,$[J]=le,J=ye;else break e}}function n($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var Q=$[0],J=$.pop();if(J!==Q){$[0]=J;e:for(var ye=0,le=$.length,ke=le>>>1;ye<ke;){var vn=2*(ye+1)-1,wn=$[vn],En=vn+1,Tn=$[En];if(0>i(wn,J))En<le&&0>i(Tn,wn)?($[ye]=Tn,$[En]=J,ye=En):($[ye]=wn,$[vn]=J,ye=vn);else if(En<le&&0>i(Tn,J))$[ye]=Tn,$[En]=J,ye=En;else break e}}return Q}function i($,Q){var J=$.sortIndex-Q.sortIndex;return J!==0?J:$.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],d=1,p=null,m=3,T=!1,R=!1,P=!1,N=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function E($){for(var Q=n(c);Q!==null;){if(Q.callback===null)r(c);else if(Q.startTime<=$)r(c),Q.sortIndex=Q.expirationTime,e(u,Q);else break;Q=n(c)}}function C($){if(P=!1,E($),!R)if(n(u)!==null)R=!0,ws(V);else{var Q=n(c);Q!==null&&_n(C,Q.startTime-$)}}function V($,Q){R=!1,P&&(P=!1,v(_),_=-1),T=!0;var J=m;try{for(E(Q),p=n(u);p!==null&&(!(p.expirationTime>Q)||$&&!x());){var ye=p.callback;if(typeof ye=="function"){p.callback=null,m=p.priorityLevel;var le=ye(p.expirationTime<=Q);Q=t.unstable_now(),typeof le=="function"?p.callback=le:p===n(u)&&r(u),E(Q)}else r(u);p=n(u)}if(p!==null)var ke=!0;else{var vn=n(c);vn!==null&&_n(C,vn.startTime-Q),ke=!1}return ke}finally{p=null,m=J,T=!1}}var M=!1,I=null,_=-1,S=5,k=-1;function x(){return!(t.unstable_now()-k<S)}function D(){if(I!==null){var $=t.unstable_now();k=$;var Q=!0;try{Q=I(!0,$)}finally{Q?A():(M=!1,I=null)}}else M=!1}var A;if(typeof w=="function")A=function(){w(D)};else if(typeof MessageChannel<"u"){var st=new MessageChannel,Ke=st.port2;st.port1.onmessage=D,A=function(){Ke.postMessage(null)}}else A=function(){N(D,0)};function ws($){I=$,M||(M=!0,A())}function _n($,Q){_=N(function(){$(t.unstable_now())},Q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function($){$.callback=null},t.unstable_continueExecution=function(){R||T||(R=!0,ws(V))},t.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<$?Math.floor(1e3/$):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function($){switch(m){case 1:case 2:case 3:var Q=3;break;default:Q=m}var J=m;m=Q;try{return $()}finally{m=J}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function($,Q){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var J=m;m=$;try{return Q()}finally{m=J}},t.unstable_scheduleCallback=function($,Q,J){var ye=t.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?ye+J:ye):J=ye,$){case 1:var le=-1;break;case 2:le=250;break;case 5:le=1073741823;break;case 4:le=1e4;break;default:le=5e3}return le=J+le,$={id:d++,callback:Q,priorityLevel:$,startTime:J,expirationTime:le,sortIndex:-1},J>ye?($.sortIndex=J,e(c,$),n(u)===null&&$===n(c)&&(P?(v(_),_=-1):P=!0,_n(C,J-ye))):($.sortIndex=le,e(u,$),R||T||(R=!0,ws(V))),$},t.unstable_shouldYield=x,t.unstable_wrapCallback=function($){var Q=m;return function(){var J=m;m=Q;try{return $.apply(this,arguments)}finally{m=J}}}})(iv);rv.exports=iv;var jS=rv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var FS=b,Nt=jS;function F(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var sv=new Set,yo={};function li(t,e){Ki(t,e),Ki(t+"Capture",e)}function Ki(t,e){for(yo[t]=e,t=0;t<e.length;t++)sv.add(e[t])}var On=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Eh=Object.prototype.hasOwnProperty,BS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,eg={},tg={};function $S(t){return Eh.call(tg,t)?!0:Eh.call(eg,t)?!1:BS.test(t)?tg[t]=!0:(eg[t]=!0,!1)}function zS(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function HS(t,e,n,r){if(e===null||typeof e>"u"||zS(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function dt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var qe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){qe[t]=new dt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];qe[e]=new dt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){qe[t]=new dt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){qe[t]=new dt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){qe[t]=new dt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){qe[t]=new dt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){qe[t]=new dt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){qe[t]=new dt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){qe[t]=new dt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Kd=/[\-:]([a-z])/g;function Gd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Kd,Gd);qe[e]=new dt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Kd,Gd);qe[e]=new dt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Kd,Gd);qe[e]=new dt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){qe[t]=new dt(t,1,!1,t.toLowerCase(),null,!1,!1)});qe.xlinkHref=new dt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){qe[t]=new dt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Qd(t,e,n,r){var i=qe.hasOwnProperty(e)?qe[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(HS(e,n,i,r)&&(n=null),r||i===null?$S(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var qn=FS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,xa=Symbol.for("react.element"),Si=Symbol.for("react.portal"),Ri=Symbol.for("react.fragment"),Xd=Symbol.for("react.strict_mode"),Th=Symbol.for("react.profiler"),ov=Symbol.for("react.provider"),av=Symbol.for("react.context"),Yd=Symbol.for("react.forward_ref"),Ih=Symbol.for("react.suspense"),Sh=Symbol.for("react.suspense_list"),Jd=Symbol.for("react.memo"),Zn=Symbol.for("react.lazy"),lv=Symbol.for("react.offscreen"),ng=Symbol.iterator;function Ls(t){return t===null||typeof t!="object"?null:(t=ng&&t[ng]||t["@@iterator"],typeof t=="function"?t:null)}var Ee=Object.assign,Cc;function qs(t){if(Cc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Cc=e&&e[1]||""}return`
`+Cc+t}var xc=!1;function Nc(t,e){if(!t||xc)return"";xc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{xc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?qs(t):""}function qS(t){switch(t.tag){case 5:return qs(t.type);case 16:return qs("Lazy");case 13:return qs("Suspense");case 19:return qs("SuspenseList");case 0:case 2:case 15:return t=Nc(t.type,!1),t;case 11:return t=Nc(t.type.render,!1),t;case 1:return t=Nc(t.type,!0),t;default:return""}}function Rh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ri:return"Fragment";case Si:return"Portal";case Th:return"Profiler";case Xd:return"StrictMode";case Ih:return"Suspense";case Sh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case av:return(t.displayName||"Context")+".Consumer";case ov:return(t._context.displayName||"Context")+".Provider";case Yd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Jd:return e=t.displayName||null,e!==null?e:Rh(t.type)||"Memo";case Zn:e=t._payload,t=t._init;try{return Rh(t(e))}catch{}}return null}function WS(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Rh(e);case 8:return e===Xd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ir(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function uv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function KS(t){var e=uv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Na(t){t._valueTracker||(t._valueTracker=KS(t))}function cv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=uv(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Il(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function kh(t,e){var n=e.checked;return Ee({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function rg(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Ir(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function hv(t,e){e=e.checked,e!=null&&Qd(t,"checked",e,!1)}function Ah(t,e){hv(t,e);var n=Ir(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ph(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ph(t,e.type,Ir(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function ig(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ph(t,e,n){(e!=="number"||Il(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ws=Array.isArray;function Mi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Ir(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Ch(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(F(91));return Ee({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function sg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(F(92));if(Ws(n)){if(1<n.length)throw Error(F(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ir(n)}}function dv(t,e){var n=Ir(e.value),r=Ir(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function og(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function fv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function xh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?fv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ba,pv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ba=ba||document.createElement("div"),ba.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ba.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function _o(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var eo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},GS=["Webkit","ms","Moz","O"];Object.keys(eo).forEach(function(t){GS.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),eo[e]=eo[t]})});function mv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||eo.hasOwnProperty(t)&&eo[t]?(""+e).trim():e+"px"}function gv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=mv(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var QS=Ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Nh(t,e){if(e){if(QS[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(F(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(F(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(F(61))}if(e.style!=null&&typeof e.style!="object")throw Error(F(62))}}function bh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Dh=null;function Zd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Lh=null,Ui=null,ji=null;function ag(t){if(t=Go(t)){if(typeof Lh!="function")throw Error(F(280));var e=t.stateNode;e&&(e=vu(e),Lh(t.stateNode,t.type,e))}}function yv(t){Ui?ji?ji.push(t):ji=[t]:Ui=t}function _v(){if(Ui){var t=Ui,e=ji;if(ji=Ui=null,ag(t),e)for(t=0;t<e.length;t++)ag(e[t])}}function vv(t,e){return t(e)}function wv(){}var bc=!1;function Ev(t,e,n){if(bc)return t(e,n);bc=!0;try{return vv(t,e,n)}finally{bc=!1,(Ui!==null||ji!==null)&&(wv(),_v())}}function vo(t,e){var n=t.stateNode;if(n===null)return null;var r=vu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(F(231,e,typeof n));return n}var Oh=!1;if(On)try{var Os={};Object.defineProperty(Os,"passive",{get:function(){Oh=!0}}),window.addEventListener("test",Os,Os),window.removeEventListener("test",Os,Os)}catch{Oh=!1}function XS(t,e,n,r,i,s,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var to=!1,Sl=null,Rl=!1,Vh=null,YS={onError:function(t){to=!0,Sl=t}};function JS(t,e,n,r,i,s,o,l,u){to=!1,Sl=null,XS.apply(YS,arguments)}function ZS(t,e,n,r,i,s,o,l,u){if(JS.apply(this,arguments),to){if(to){var c=Sl;to=!1,Sl=null}else throw Error(F(198));Rl||(Rl=!0,Vh=c)}}function ui(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Tv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function lg(t){if(ui(t)!==t)throw Error(F(188))}function eR(t){var e=t.alternate;if(!e){if(e=ui(t),e===null)throw Error(F(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return lg(i),t;if(s===r)return lg(i),e;s=s.sibling}throw Error(F(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(F(189))}}if(n.alternate!==r)throw Error(F(190))}if(n.tag!==3)throw Error(F(188));return n.stateNode.current===n?t:e}function Iv(t){return t=eR(t),t!==null?Sv(t):null}function Sv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Sv(t);if(e!==null)return e;t=t.sibling}return null}var Rv=Nt.unstable_scheduleCallback,ug=Nt.unstable_cancelCallback,tR=Nt.unstable_shouldYield,nR=Nt.unstable_requestPaint,Pe=Nt.unstable_now,rR=Nt.unstable_getCurrentPriorityLevel,ef=Nt.unstable_ImmediatePriority,kv=Nt.unstable_UserBlockingPriority,kl=Nt.unstable_NormalPriority,iR=Nt.unstable_LowPriority,Av=Nt.unstable_IdlePriority,mu=null,on=null;function sR(t){if(on&&typeof on.onCommitFiberRoot=="function")try{on.onCommitFiberRoot(mu,t,void 0,(t.current.flags&128)===128)}catch{}}var Qt=Math.clz32?Math.clz32:lR,oR=Math.log,aR=Math.LN2;function lR(t){return t>>>=0,t===0?32:31-(oR(t)/aR|0)|0}var Da=64,La=4194304;function Ks(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Al(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Ks(l):(s&=o,s!==0&&(r=Ks(s)))}else o=n&~i,o!==0?r=Ks(o):s!==0&&(r=Ks(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Qt(e),i=1<<n,r|=t[n],e&=~i;return r}function uR(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function cR(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Qt(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=uR(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function Mh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Pv(){var t=Da;return Da<<=1,!(Da&4194240)&&(Da=64),t}function Dc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Wo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Qt(e),t[e]=n}function hR(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Qt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function tf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Qt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var oe=0;function Cv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var xv,nf,Nv,bv,Dv,Uh=!1,Oa=[],dr=null,fr=null,pr=null,wo=new Map,Eo=new Map,tr=[],dR="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function cg(t,e){switch(t){case"focusin":case"focusout":dr=null;break;case"dragenter":case"dragleave":fr=null;break;case"mouseover":case"mouseout":pr=null;break;case"pointerover":case"pointerout":wo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Eo.delete(e.pointerId)}}function Vs(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Go(e),e!==null&&nf(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function fR(t,e,n,r,i){switch(e){case"focusin":return dr=Vs(dr,t,e,n,r,i),!0;case"dragenter":return fr=Vs(fr,t,e,n,r,i),!0;case"mouseover":return pr=Vs(pr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return wo.set(s,Vs(wo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Eo.set(s,Vs(Eo.get(s)||null,t,e,n,r,i)),!0}return!1}function Lv(t){var e=Fr(t.target);if(e!==null){var n=ui(e);if(n!==null){if(e=n.tag,e===13){if(e=Tv(n),e!==null){t.blockedOn=e,Dv(t.priority,function(){Nv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function nl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=jh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Dh=r,n.target.dispatchEvent(r),Dh=null}else return e=Go(n),e!==null&&nf(e),t.blockedOn=n,!1;e.shift()}return!0}function hg(t,e,n){nl(t)&&n.delete(e)}function pR(){Uh=!1,dr!==null&&nl(dr)&&(dr=null),fr!==null&&nl(fr)&&(fr=null),pr!==null&&nl(pr)&&(pr=null),wo.forEach(hg),Eo.forEach(hg)}function Ms(t,e){t.blockedOn===e&&(t.blockedOn=null,Uh||(Uh=!0,Nt.unstable_scheduleCallback(Nt.unstable_NormalPriority,pR)))}function To(t){function e(i){return Ms(i,t)}if(0<Oa.length){Ms(Oa[0],t);for(var n=1;n<Oa.length;n++){var r=Oa[n];r.blockedOn===t&&(r.blockedOn=null)}}for(dr!==null&&Ms(dr,t),fr!==null&&Ms(fr,t),pr!==null&&Ms(pr,t),wo.forEach(e),Eo.forEach(e),n=0;n<tr.length;n++)r=tr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<tr.length&&(n=tr[0],n.blockedOn===null);)Lv(n),n.blockedOn===null&&tr.shift()}var Fi=qn.ReactCurrentBatchConfig,Pl=!0;function mR(t,e,n,r){var i=oe,s=Fi.transition;Fi.transition=null;try{oe=1,rf(t,e,n,r)}finally{oe=i,Fi.transition=s}}function gR(t,e,n,r){var i=oe,s=Fi.transition;Fi.transition=null;try{oe=4,rf(t,e,n,r)}finally{oe=i,Fi.transition=s}}function rf(t,e,n,r){if(Pl){var i=jh(t,e,n,r);if(i===null)zc(t,e,r,Cl,n),cg(t,r);else if(fR(i,t,e,n,r))r.stopPropagation();else if(cg(t,r),e&4&&-1<dR.indexOf(t)){for(;i!==null;){var s=Go(i);if(s!==null&&xv(s),s=jh(t,e,n,r),s===null&&zc(t,e,r,Cl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else zc(t,e,r,null,n)}}var Cl=null;function jh(t,e,n,r){if(Cl=null,t=Zd(r),t=Fr(t),t!==null)if(e=ui(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Tv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Cl=t,null}function Ov(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(rR()){case ef:return 1;case kv:return 4;case kl:case iR:return 16;case Av:return 536870912;default:return 16}default:return 16}}var lr=null,sf=null,rl=null;function Vv(){if(rl)return rl;var t,e=sf,n=e.length,r,i="value"in lr?lr.value:lr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return rl=i.slice(t,1<r?1-r:void 0)}function il(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Va(){return!0}function dg(){return!1}function Lt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Va:dg,this.isPropagationStopped=dg,this}return Ee(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Va)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Va)},persist:function(){},isPersistent:Va}),e}var us={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},of=Lt(us),Ko=Ee({},us,{view:0,detail:0}),yR=Lt(Ko),Lc,Oc,Us,gu=Ee({},Ko,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:af,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Us&&(Us&&t.type==="mousemove"?(Lc=t.screenX-Us.screenX,Oc=t.screenY-Us.screenY):Oc=Lc=0,Us=t),Lc)},movementY:function(t){return"movementY"in t?t.movementY:Oc}}),fg=Lt(gu),_R=Ee({},gu,{dataTransfer:0}),vR=Lt(_R),wR=Ee({},Ko,{relatedTarget:0}),Vc=Lt(wR),ER=Ee({},us,{animationName:0,elapsedTime:0,pseudoElement:0}),TR=Lt(ER),IR=Ee({},us,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),SR=Lt(IR),RR=Ee({},us,{data:0}),pg=Lt(RR),kR={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},AR={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},PR={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function CR(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=PR[t])?!!e[t]:!1}function af(){return CR}var xR=Ee({},Ko,{key:function(t){if(t.key){var e=kR[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=il(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?AR[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:af,charCode:function(t){return t.type==="keypress"?il(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?il(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),NR=Lt(xR),bR=Ee({},gu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),mg=Lt(bR),DR=Ee({},Ko,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:af}),LR=Lt(DR),OR=Ee({},us,{propertyName:0,elapsedTime:0,pseudoElement:0}),VR=Lt(OR),MR=Ee({},gu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),UR=Lt(MR),jR=[9,13,27,32],lf=On&&"CompositionEvent"in window,no=null;On&&"documentMode"in document&&(no=document.documentMode);var FR=On&&"TextEvent"in window&&!no,Mv=On&&(!lf||no&&8<no&&11>=no),gg=" ",yg=!1;function Uv(t,e){switch(t){case"keyup":return jR.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function jv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ki=!1;function BR(t,e){switch(t){case"compositionend":return jv(e);case"keypress":return e.which!==32?null:(yg=!0,gg);case"textInput":return t=e.data,t===gg&&yg?null:t;default:return null}}function $R(t,e){if(ki)return t==="compositionend"||!lf&&Uv(t,e)?(t=Vv(),rl=sf=lr=null,ki=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Mv&&e.locale!=="ko"?null:e.data;default:return null}}var zR={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _g(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!zR[t.type]:e==="textarea"}function Fv(t,e,n,r){yv(r),e=xl(e,"onChange"),0<e.length&&(n=new of("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var ro=null,Io=null;function HR(t){Yv(t,0)}function yu(t){var e=Ci(t);if(cv(e))return t}function qR(t,e){if(t==="change")return e}var Bv=!1;if(On){var Mc;if(On){var Uc="oninput"in document;if(!Uc){var vg=document.createElement("div");vg.setAttribute("oninput","return;"),Uc=typeof vg.oninput=="function"}Mc=Uc}else Mc=!1;Bv=Mc&&(!document.documentMode||9<document.documentMode)}function wg(){ro&&(ro.detachEvent("onpropertychange",$v),Io=ro=null)}function $v(t){if(t.propertyName==="value"&&yu(Io)){var e=[];Fv(e,Io,t,Zd(t)),Ev(HR,e)}}function WR(t,e,n){t==="focusin"?(wg(),ro=e,Io=n,ro.attachEvent("onpropertychange",$v)):t==="focusout"&&wg()}function KR(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return yu(Io)}function GR(t,e){if(t==="click")return yu(e)}function QR(t,e){if(t==="input"||t==="change")return yu(e)}function XR(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Zt=typeof Object.is=="function"?Object.is:XR;function So(t,e){if(Zt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Eh.call(e,i)||!Zt(t[i],e[i]))return!1}return!0}function Eg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Tg(t,e){var n=Eg(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Eg(n)}}function zv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?zv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Hv(){for(var t=window,e=Il();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Il(t.document)}return e}function uf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function YR(t){var e=Hv(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&zv(n.ownerDocument.documentElement,n)){if(r!==null&&uf(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Tg(n,s);var o=Tg(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var JR=On&&"documentMode"in document&&11>=document.documentMode,Ai=null,Fh=null,io=null,Bh=!1;function Ig(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Bh||Ai==null||Ai!==Il(r)||(r=Ai,"selectionStart"in r&&uf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),io&&So(io,r)||(io=r,r=xl(Fh,"onSelect"),0<r.length&&(e=new of("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ai)))}function Ma(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Pi={animationend:Ma("Animation","AnimationEnd"),animationiteration:Ma("Animation","AnimationIteration"),animationstart:Ma("Animation","AnimationStart"),transitionend:Ma("Transition","TransitionEnd")},jc={},qv={};On&&(qv=document.createElement("div").style,"AnimationEvent"in window||(delete Pi.animationend.animation,delete Pi.animationiteration.animation,delete Pi.animationstart.animation),"TransitionEvent"in window||delete Pi.transitionend.transition);function _u(t){if(jc[t])return jc[t];if(!Pi[t])return t;var e=Pi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in qv)return jc[t]=e[n];return t}var Wv=_u("animationend"),Kv=_u("animationiteration"),Gv=_u("animationstart"),Qv=_u("transitionend"),Xv=new Map,Sg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Pr(t,e){Xv.set(t,e),li(e,[t])}for(var Fc=0;Fc<Sg.length;Fc++){var Bc=Sg[Fc],ZR=Bc.toLowerCase(),ek=Bc[0].toUpperCase()+Bc.slice(1);Pr(ZR,"on"+ek)}Pr(Wv,"onAnimationEnd");Pr(Kv,"onAnimationIteration");Pr(Gv,"onAnimationStart");Pr("dblclick","onDoubleClick");Pr("focusin","onFocus");Pr("focusout","onBlur");Pr(Qv,"onTransitionEnd");Ki("onMouseEnter",["mouseout","mouseover"]);Ki("onMouseLeave",["mouseout","mouseover"]);Ki("onPointerEnter",["pointerout","pointerover"]);Ki("onPointerLeave",["pointerout","pointerover"]);li("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));li("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));li("onBeforeInput",["compositionend","keypress","textInput","paste"]);li("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));li("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));li("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Gs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),tk=new Set("cancel close invalid load scroll toggle".split(" ").concat(Gs));function Rg(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,ZS(r,e,void 0,t),t.currentTarget=null}function Yv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;Rg(i,l,c),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;Rg(i,l,c),s=u}}}if(Rl)throw t=Vh,Rl=!1,Vh=null,t}function de(t,e){var n=e[Wh];n===void 0&&(n=e[Wh]=new Set);var r=t+"__bubble";n.has(r)||(Jv(e,t,2,!1),n.add(r))}function $c(t,e,n){var r=0;e&&(r|=4),Jv(n,t,r,e)}var Ua="_reactListening"+Math.random().toString(36).slice(2);function Ro(t){if(!t[Ua]){t[Ua]=!0,sv.forEach(function(n){n!=="selectionchange"&&(tk.has(n)||$c(n,!1,t),$c(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ua]||(e[Ua]=!0,$c("selectionchange",!1,e))}}function Jv(t,e,n,r){switch(Ov(e)){case 1:var i=mR;break;case 4:i=gR;break;default:i=rf}n=i.bind(null,e,n,t),i=void 0,!Oh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function zc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Fr(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}Ev(function(){var c=s,d=Zd(n),p=[];e:{var m=Xv.get(t);if(m!==void 0){var T=of,R=t;switch(t){case"keypress":if(il(n)===0)break e;case"keydown":case"keyup":T=NR;break;case"focusin":R="focus",T=Vc;break;case"focusout":R="blur",T=Vc;break;case"beforeblur":case"afterblur":T=Vc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":T=fg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":T=vR;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":T=LR;break;case Wv:case Kv:case Gv:T=TR;break;case Qv:T=VR;break;case"scroll":T=yR;break;case"wheel":T=UR;break;case"copy":case"cut":case"paste":T=SR;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":T=mg}var P=(e&4)!==0,N=!P&&t==="scroll",v=P?m!==null?m+"Capture":null:m;P=[];for(var w=c,E;w!==null;){E=w;var C=E.stateNode;if(E.tag===5&&C!==null&&(E=C,v!==null&&(C=vo(w,v),C!=null&&P.push(ko(w,C,E)))),N)break;w=w.return}0<P.length&&(m=new T(m,R,null,n,d),p.push({event:m,listeners:P}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",T=t==="mouseout"||t==="pointerout",m&&n!==Dh&&(R=n.relatedTarget||n.fromElement)&&(Fr(R)||R[Vn]))break e;if((T||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,T?(R=n.relatedTarget||n.toElement,T=c,R=R?Fr(R):null,R!==null&&(N=ui(R),R!==N||R.tag!==5&&R.tag!==6)&&(R=null)):(T=null,R=c),T!==R)){if(P=fg,C="onMouseLeave",v="onMouseEnter",w="mouse",(t==="pointerout"||t==="pointerover")&&(P=mg,C="onPointerLeave",v="onPointerEnter",w="pointer"),N=T==null?m:Ci(T),E=R==null?m:Ci(R),m=new P(C,w+"leave",T,n,d),m.target=N,m.relatedTarget=E,C=null,Fr(d)===c&&(P=new P(v,w+"enter",R,n,d),P.target=E,P.relatedTarget=N,C=P),N=C,T&&R)t:{for(P=T,v=R,w=0,E=P;E;E=_i(E))w++;for(E=0,C=v;C;C=_i(C))E++;for(;0<w-E;)P=_i(P),w--;for(;0<E-w;)v=_i(v),E--;for(;w--;){if(P===v||v!==null&&P===v.alternate)break t;P=_i(P),v=_i(v)}P=null}else P=null;T!==null&&kg(p,m,T,P,!1),R!==null&&N!==null&&kg(p,N,R,P,!0)}}e:{if(m=c?Ci(c):window,T=m.nodeName&&m.nodeName.toLowerCase(),T==="select"||T==="input"&&m.type==="file")var V=qR;else if(_g(m))if(Bv)V=QR;else{V=KR;var M=WR}else(T=m.nodeName)&&T.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(V=GR);if(V&&(V=V(t,c))){Fv(p,V,n,d);break e}M&&M(t,m,c),t==="focusout"&&(M=m._wrapperState)&&M.controlled&&m.type==="number"&&Ph(m,"number",m.value)}switch(M=c?Ci(c):window,t){case"focusin":(_g(M)||M.contentEditable==="true")&&(Ai=M,Fh=c,io=null);break;case"focusout":io=Fh=Ai=null;break;case"mousedown":Bh=!0;break;case"contextmenu":case"mouseup":case"dragend":Bh=!1,Ig(p,n,d);break;case"selectionchange":if(JR)break;case"keydown":case"keyup":Ig(p,n,d)}var I;if(lf)e:{switch(t){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else ki?Uv(t,n)&&(_="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(Mv&&n.locale!=="ko"&&(ki||_!=="onCompositionStart"?_==="onCompositionEnd"&&ki&&(I=Vv()):(lr=d,sf="value"in lr?lr.value:lr.textContent,ki=!0)),M=xl(c,_),0<M.length&&(_=new pg(_,t,null,n,d),p.push({event:_,listeners:M}),I?_.data=I:(I=jv(n),I!==null&&(_.data=I)))),(I=FR?BR(t,n):$R(t,n))&&(c=xl(c,"onBeforeInput"),0<c.length&&(d=new pg("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:c}),d.data=I))}Yv(p,e)})}function ko(t,e,n){return{instance:t,listener:e,currentTarget:n}}function xl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=vo(t,n),s!=null&&r.unshift(ko(t,s,i)),s=vo(t,e),s!=null&&r.push(ko(t,s,i))),t=t.return}return r}function _i(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function kg(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,i?(u=vo(n,s),u!=null&&o.unshift(ko(n,u,l))):i||(u=vo(n,s),u!=null&&o.push(ko(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var nk=/\r\n?/g,rk=/\u0000|\uFFFD/g;function Ag(t){return(typeof t=="string"?t:""+t).replace(nk,`
`).replace(rk,"")}function ja(t,e,n){if(e=Ag(e),Ag(t)!==e&&n)throw Error(F(425))}function Nl(){}var $h=null,zh=null;function Hh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var qh=typeof setTimeout=="function"?setTimeout:void 0,ik=typeof clearTimeout=="function"?clearTimeout:void 0,Pg=typeof Promise=="function"?Promise:void 0,sk=typeof queueMicrotask=="function"?queueMicrotask:typeof Pg<"u"?function(t){return Pg.resolve(null).then(t).catch(ok)}:qh;function ok(t){setTimeout(function(){throw t})}function Hc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),To(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);To(e)}function mr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Cg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var cs=Math.random().toString(36).slice(2),rn="__reactFiber$"+cs,Ao="__reactProps$"+cs,Vn="__reactContainer$"+cs,Wh="__reactEvents$"+cs,ak="__reactListeners$"+cs,lk="__reactHandles$"+cs;function Fr(t){var e=t[rn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Vn]||n[rn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Cg(t);t!==null;){if(n=t[rn])return n;t=Cg(t)}return e}t=n,n=t.parentNode}return null}function Go(t){return t=t[rn]||t[Vn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ci(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(F(33))}function vu(t){return t[Ao]||null}var Kh=[],xi=-1;function Cr(t){return{current:t}}function fe(t){0>xi||(t.current=Kh[xi],Kh[xi]=null,xi--)}function ce(t,e){xi++,Kh[xi]=t.current,t.current=e}var Sr={},rt=Cr(Sr),_t=Cr(!1),Xr=Sr;function Gi(t,e){var n=t.type.contextTypes;if(!n)return Sr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function vt(t){return t=t.childContextTypes,t!=null}function bl(){fe(_t),fe(rt)}function xg(t,e,n){if(rt.current!==Sr)throw Error(F(168));ce(rt,e),ce(_t,n)}function Zv(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(F(108,WS(t)||"Unknown",i));return Ee({},n,r)}function Dl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Sr,Xr=rt.current,ce(rt,t),ce(_t,_t.current),!0}function Ng(t,e,n){var r=t.stateNode;if(!r)throw Error(F(169));n?(t=Zv(t,e,Xr),r.__reactInternalMemoizedMergedChildContext=t,fe(_t),fe(rt),ce(rt,t)):fe(_t),ce(_t,n)}var kn=null,wu=!1,qc=!1;function ew(t){kn===null?kn=[t]:kn.push(t)}function uk(t){wu=!0,ew(t)}function xr(){if(!qc&&kn!==null){qc=!0;var t=0,e=oe;try{var n=kn;for(oe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}kn=null,wu=!1}catch(i){throw kn!==null&&(kn=kn.slice(t+1)),Rv(ef,xr),i}finally{oe=e,qc=!1}}return null}var Ni=[],bi=0,Ll=null,Ol=0,Ot=[],Vt=0,Yr=null,An=1,Pn="";function Mr(t,e){Ni[bi++]=Ol,Ni[bi++]=Ll,Ll=t,Ol=e}function tw(t,e,n){Ot[Vt++]=An,Ot[Vt++]=Pn,Ot[Vt++]=Yr,Yr=t;var r=An;t=Pn;var i=32-Qt(r)-1;r&=~(1<<i),n+=1;var s=32-Qt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,An=1<<32-Qt(e)+i|n<<i|r,Pn=s+t}else An=1<<s|n<<i|r,Pn=t}function cf(t){t.return!==null&&(Mr(t,1),tw(t,1,0))}function hf(t){for(;t===Ll;)Ll=Ni[--bi],Ni[bi]=null,Ol=Ni[--bi],Ni[bi]=null;for(;t===Yr;)Yr=Ot[--Vt],Ot[Vt]=null,Pn=Ot[--Vt],Ot[Vt]=null,An=Ot[--Vt],Ot[Vt]=null}var Ct=null,kt=null,me=!1,Gt=null;function nw(t,e){var n=Mt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function bg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ct=t,kt=mr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ct=t,kt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Yr!==null?{id:An,overflow:Pn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Mt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ct=t,kt=null,!0):!1;default:return!1}}function Gh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Qh(t){if(me){var e=kt;if(e){var n=e;if(!bg(t,e)){if(Gh(t))throw Error(F(418));e=mr(n.nextSibling);var r=Ct;e&&bg(t,e)?nw(r,n):(t.flags=t.flags&-4097|2,me=!1,Ct=t)}}else{if(Gh(t))throw Error(F(418));t.flags=t.flags&-4097|2,me=!1,Ct=t}}}function Dg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ct=t}function Fa(t){if(t!==Ct)return!1;if(!me)return Dg(t),me=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Hh(t.type,t.memoizedProps)),e&&(e=kt)){if(Gh(t))throw rw(),Error(F(418));for(;e;)nw(t,e),e=mr(e.nextSibling)}if(Dg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(F(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){kt=mr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}kt=null}}else kt=Ct?mr(t.stateNode.nextSibling):null;return!0}function rw(){for(var t=kt;t;)t=mr(t.nextSibling)}function Qi(){kt=Ct=null,me=!1}function df(t){Gt===null?Gt=[t]:Gt.push(t)}var ck=qn.ReactCurrentBatchConfig;function js(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(F(309));var r=n.stateNode}if(!r)throw Error(F(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(F(284));if(!n._owner)throw Error(F(290,t))}return t}function Ba(t,e){throw t=Object.prototype.toString.call(e),Error(F(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Lg(t){var e=t._init;return e(t._payload)}function iw(t){function e(v,w){if(t){var E=v.deletions;E===null?(v.deletions=[w],v.flags|=16):E.push(w)}}function n(v,w){if(!t)return null;for(;w!==null;)e(v,w),w=w.sibling;return null}function r(v,w){for(v=new Map;w!==null;)w.key!==null?v.set(w.key,w):v.set(w.index,w),w=w.sibling;return v}function i(v,w){return v=vr(v,w),v.index=0,v.sibling=null,v}function s(v,w,E){return v.index=E,t?(E=v.alternate,E!==null?(E=E.index,E<w?(v.flags|=2,w):E):(v.flags|=2,w)):(v.flags|=1048576,w)}function o(v){return t&&v.alternate===null&&(v.flags|=2),v}function l(v,w,E,C){return w===null||w.tag!==6?(w=Jc(E,v.mode,C),w.return=v,w):(w=i(w,E),w.return=v,w)}function u(v,w,E,C){var V=E.type;return V===Ri?d(v,w,E.props.children,C,E.key):w!==null&&(w.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===Zn&&Lg(V)===w.type)?(C=i(w,E.props),C.ref=js(v,w,E),C.return=v,C):(C=hl(E.type,E.key,E.props,null,v.mode,C),C.ref=js(v,w,E),C.return=v,C)}function c(v,w,E,C){return w===null||w.tag!==4||w.stateNode.containerInfo!==E.containerInfo||w.stateNode.implementation!==E.implementation?(w=Zc(E,v.mode,C),w.return=v,w):(w=i(w,E.children||[]),w.return=v,w)}function d(v,w,E,C,V){return w===null||w.tag!==7?(w=Wr(E,v.mode,C,V),w.return=v,w):(w=i(w,E),w.return=v,w)}function p(v,w,E){if(typeof w=="string"&&w!==""||typeof w=="number")return w=Jc(""+w,v.mode,E),w.return=v,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case xa:return E=hl(w.type,w.key,w.props,null,v.mode,E),E.ref=js(v,null,w),E.return=v,E;case Si:return w=Zc(w,v.mode,E),w.return=v,w;case Zn:var C=w._init;return p(v,C(w._payload),E)}if(Ws(w)||Ls(w))return w=Wr(w,v.mode,E,null),w.return=v,w;Ba(v,w)}return null}function m(v,w,E,C){var V=w!==null?w.key:null;if(typeof E=="string"&&E!==""||typeof E=="number")return V!==null?null:l(v,w,""+E,C);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case xa:return E.key===V?u(v,w,E,C):null;case Si:return E.key===V?c(v,w,E,C):null;case Zn:return V=E._init,m(v,w,V(E._payload),C)}if(Ws(E)||Ls(E))return V!==null?null:d(v,w,E,C,null);Ba(v,E)}return null}function T(v,w,E,C,V){if(typeof C=="string"&&C!==""||typeof C=="number")return v=v.get(E)||null,l(w,v,""+C,V);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case xa:return v=v.get(C.key===null?E:C.key)||null,u(w,v,C,V);case Si:return v=v.get(C.key===null?E:C.key)||null,c(w,v,C,V);case Zn:var M=C._init;return T(v,w,E,M(C._payload),V)}if(Ws(C)||Ls(C))return v=v.get(E)||null,d(w,v,C,V,null);Ba(w,C)}return null}function R(v,w,E,C){for(var V=null,M=null,I=w,_=w=0,S=null;I!==null&&_<E.length;_++){I.index>_?(S=I,I=null):S=I.sibling;var k=m(v,I,E[_],C);if(k===null){I===null&&(I=S);break}t&&I&&k.alternate===null&&e(v,I),w=s(k,w,_),M===null?V=k:M.sibling=k,M=k,I=S}if(_===E.length)return n(v,I),me&&Mr(v,_),V;if(I===null){for(;_<E.length;_++)I=p(v,E[_],C),I!==null&&(w=s(I,w,_),M===null?V=I:M.sibling=I,M=I);return me&&Mr(v,_),V}for(I=r(v,I);_<E.length;_++)S=T(I,v,_,E[_],C),S!==null&&(t&&S.alternate!==null&&I.delete(S.key===null?_:S.key),w=s(S,w,_),M===null?V=S:M.sibling=S,M=S);return t&&I.forEach(function(x){return e(v,x)}),me&&Mr(v,_),V}function P(v,w,E,C){var V=Ls(E);if(typeof V!="function")throw Error(F(150));if(E=V.call(E),E==null)throw Error(F(151));for(var M=V=null,I=w,_=w=0,S=null,k=E.next();I!==null&&!k.done;_++,k=E.next()){I.index>_?(S=I,I=null):S=I.sibling;var x=m(v,I,k.value,C);if(x===null){I===null&&(I=S);break}t&&I&&x.alternate===null&&e(v,I),w=s(x,w,_),M===null?V=x:M.sibling=x,M=x,I=S}if(k.done)return n(v,I),me&&Mr(v,_),V;if(I===null){for(;!k.done;_++,k=E.next())k=p(v,k.value,C),k!==null&&(w=s(k,w,_),M===null?V=k:M.sibling=k,M=k);return me&&Mr(v,_),V}for(I=r(v,I);!k.done;_++,k=E.next())k=T(I,v,_,k.value,C),k!==null&&(t&&k.alternate!==null&&I.delete(k.key===null?_:k.key),w=s(k,w,_),M===null?V=k:M.sibling=k,M=k);return t&&I.forEach(function(D){return e(v,D)}),me&&Mr(v,_),V}function N(v,w,E,C){if(typeof E=="object"&&E!==null&&E.type===Ri&&E.key===null&&(E=E.props.children),typeof E=="object"&&E!==null){switch(E.$$typeof){case xa:e:{for(var V=E.key,M=w;M!==null;){if(M.key===V){if(V=E.type,V===Ri){if(M.tag===7){n(v,M.sibling),w=i(M,E.props.children),w.return=v,v=w;break e}}else if(M.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===Zn&&Lg(V)===M.type){n(v,M.sibling),w=i(M,E.props),w.ref=js(v,M,E),w.return=v,v=w;break e}n(v,M);break}else e(v,M);M=M.sibling}E.type===Ri?(w=Wr(E.props.children,v.mode,C,E.key),w.return=v,v=w):(C=hl(E.type,E.key,E.props,null,v.mode,C),C.ref=js(v,w,E),C.return=v,v=C)}return o(v);case Si:e:{for(M=E.key;w!==null;){if(w.key===M)if(w.tag===4&&w.stateNode.containerInfo===E.containerInfo&&w.stateNode.implementation===E.implementation){n(v,w.sibling),w=i(w,E.children||[]),w.return=v,v=w;break e}else{n(v,w);break}else e(v,w);w=w.sibling}w=Zc(E,v.mode,C),w.return=v,v=w}return o(v);case Zn:return M=E._init,N(v,w,M(E._payload),C)}if(Ws(E))return R(v,w,E,C);if(Ls(E))return P(v,w,E,C);Ba(v,E)}return typeof E=="string"&&E!==""||typeof E=="number"?(E=""+E,w!==null&&w.tag===6?(n(v,w.sibling),w=i(w,E),w.return=v,v=w):(n(v,w),w=Jc(E,v.mode,C),w.return=v,v=w),o(v)):n(v,w)}return N}var Xi=iw(!0),sw=iw(!1),Vl=Cr(null),Ml=null,Di=null,ff=null;function pf(){ff=Di=Ml=null}function mf(t){var e=Vl.current;fe(Vl),t._currentValue=e}function Xh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Bi(t,e){Ml=t,ff=Di=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(yt=!0),t.firstContext=null)}function jt(t){var e=t._currentValue;if(ff!==t)if(t={context:t,memoizedValue:e,next:null},Di===null){if(Ml===null)throw Error(F(308));Di=t,Ml.dependencies={lanes:0,firstContext:t}}else Di=Di.next=t;return e}var Br=null;function gf(t){Br===null?Br=[t]:Br.push(t)}function ow(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,gf(e)):(n.next=i.next,i.next=n),e.interleaved=n,Mn(t,r)}function Mn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var er=!1;function yf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function aw(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function bn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function gr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,re&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Mn(t,n)}return i=r.interleaved,i===null?(e.next=e,gf(r)):(e.next=i.next,i.next=e),r.interleaved=e,Mn(t,n)}function sl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,tf(t,n)}}function Og(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ul(t,e,n,r){var i=t.updateQueue;er=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var d=t.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=c:l.next=c,d.lastBaseUpdate=u))}if(s!==null){var p=i.baseState;o=0,d=c=u=null,l=s;do{var m=l.lane,T=l.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:T,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var R=t,P=l;switch(m=e,T=n,P.tag){case 1:if(R=P.payload,typeof R=="function"){p=R.call(T,p,m);break e}p=R;break e;case 3:R.flags=R.flags&-65537|128;case 0:if(R=P.payload,m=typeof R=="function"?R.call(T,p,m):R,m==null)break e;p=Ee({},p,m);break e;case 2:er=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[l]:m.push(l))}else T={eventTime:T,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(c=d=T,u=p):d=d.next=T,o|=m;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;m=l,l=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(d===null&&(u=p),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Zr|=o,t.lanes=o,t.memoizedState=p}}function Vg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(F(191,i));i.call(r)}}}var Qo={},an=Cr(Qo),Po=Cr(Qo),Co=Cr(Qo);function $r(t){if(t===Qo)throw Error(F(174));return t}function _f(t,e){switch(ce(Co,e),ce(Po,t),ce(an,Qo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:xh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=xh(e,t)}fe(an),ce(an,e)}function Yi(){fe(an),fe(Po),fe(Co)}function lw(t){$r(Co.current);var e=$r(an.current),n=xh(e,t.type);e!==n&&(ce(Po,t),ce(an,n))}function vf(t){Po.current===t&&(fe(an),fe(Po))}var _e=Cr(0);function jl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Wc=[];function wf(){for(var t=0;t<Wc.length;t++)Wc[t]._workInProgressVersionPrimary=null;Wc.length=0}var ol=qn.ReactCurrentDispatcher,Kc=qn.ReactCurrentBatchConfig,Jr=0,ve=null,be=null,Me=null,Fl=!1,so=!1,xo=0,hk=0;function Ye(){throw Error(F(321))}function Ef(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Zt(t[n],e[n]))return!1;return!0}function Tf(t,e,n,r,i,s){if(Jr=s,ve=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ol.current=t===null||t.memoizedState===null?mk:gk,t=n(r,i),so){s=0;do{if(so=!1,xo=0,25<=s)throw Error(F(301));s+=1,Me=be=null,e.updateQueue=null,ol.current=yk,t=n(r,i)}while(so)}if(ol.current=Bl,e=be!==null&&be.next!==null,Jr=0,Me=be=ve=null,Fl=!1,e)throw Error(F(300));return t}function If(){var t=xo!==0;return xo=0,t}function nn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Me===null?ve.memoizedState=Me=t:Me=Me.next=t,Me}function Ft(){if(be===null){var t=ve.alternate;t=t!==null?t.memoizedState:null}else t=be.next;var e=Me===null?ve.memoizedState:Me.next;if(e!==null)Me=e,be=t;else{if(t===null)throw Error(F(310));be=t,t={memoizedState:be.memoizedState,baseState:be.baseState,baseQueue:be.baseQueue,queue:be.queue,next:null},Me===null?ve.memoizedState=Me=t:Me=Me.next=t}return Me}function No(t,e){return typeof e=="function"?e(t):e}function Gc(t){var e=Ft(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=be,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,c=s;do{var d=c.lane;if((Jr&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var p={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=p,o=r):u=u.next=p,ve.lanes|=d,Zr|=d}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=l,Zt(r,e.memoizedState)||(yt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ve.lanes|=s,Zr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Qc(t){var e=Ft(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Zt(s,e.memoizedState)||(yt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function uw(){}function cw(t,e){var n=ve,r=Ft(),i=e(),s=!Zt(r.memoizedState,i);if(s&&(r.memoizedState=i,yt=!0),r=r.queue,Sf(fw.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Me!==null&&Me.memoizedState.tag&1){if(n.flags|=2048,bo(9,dw.bind(null,n,r,i,e),void 0,null),Ue===null)throw Error(F(349));Jr&30||hw(n,e,i)}return i}function hw(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ve.updateQueue,e===null?(e={lastEffect:null,stores:null},ve.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function dw(t,e,n,r){e.value=n,e.getSnapshot=r,pw(e)&&mw(t)}function fw(t,e,n){return n(function(){pw(e)&&mw(t)})}function pw(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Zt(t,n)}catch{return!0}}function mw(t){var e=Mn(t,1);e!==null&&Xt(e,t,1,-1)}function Mg(t){var e=nn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:No,lastRenderedState:t},e.queue=t,t=t.dispatch=pk.bind(null,ve,t),[e.memoizedState,t]}function bo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ve.updateQueue,e===null?(e={lastEffect:null,stores:null},ve.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function gw(){return Ft().memoizedState}function al(t,e,n,r){var i=nn();ve.flags|=t,i.memoizedState=bo(1|e,n,void 0,r===void 0?null:r)}function Eu(t,e,n,r){var i=Ft();r=r===void 0?null:r;var s=void 0;if(be!==null){var o=be.memoizedState;if(s=o.destroy,r!==null&&Ef(r,o.deps)){i.memoizedState=bo(e,n,s,r);return}}ve.flags|=t,i.memoizedState=bo(1|e,n,s,r)}function Ug(t,e){return al(8390656,8,t,e)}function Sf(t,e){return Eu(2048,8,t,e)}function yw(t,e){return Eu(4,2,t,e)}function _w(t,e){return Eu(4,4,t,e)}function vw(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function ww(t,e,n){return n=n!=null?n.concat([t]):null,Eu(4,4,vw.bind(null,e,t),n)}function Rf(){}function Ew(t,e){var n=Ft();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Ef(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Tw(t,e){var n=Ft();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Ef(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Iw(t,e,n){return Jr&21?(Zt(n,e)||(n=Pv(),ve.lanes|=n,Zr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,yt=!0),t.memoizedState=n)}function dk(t,e){var n=oe;oe=n!==0&&4>n?n:4,t(!0);var r=Kc.transition;Kc.transition={};try{t(!1),e()}finally{oe=n,Kc.transition=r}}function Sw(){return Ft().memoizedState}function fk(t,e,n){var r=_r(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Rw(t))kw(e,n);else if(n=ow(t,e,n,r),n!==null){var i=ct();Xt(n,t,r,i),Aw(n,e,r)}}function pk(t,e,n){var r=_r(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Rw(t))kw(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,Zt(l,o)){var u=e.interleaved;u===null?(i.next=i,gf(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=ow(t,e,i,r),n!==null&&(i=ct(),Xt(n,t,r,i),Aw(n,e,r))}}function Rw(t){var e=t.alternate;return t===ve||e!==null&&e===ve}function kw(t,e){so=Fl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Aw(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,tf(t,n)}}var Bl={readContext:jt,useCallback:Ye,useContext:Ye,useEffect:Ye,useImperativeHandle:Ye,useInsertionEffect:Ye,useLayoutEffect:Ye,useMemo:Ye,useReducer:Ye,useRef:Ye,useState:Ye,useDebugValue:Ye,useDeferredValue:Ye,useTransition:Ye,useMutableSource:Ye,useSyncExternalStore:Ye,useId:Ye,unstable_isNewReconciler:!1},mk={readContext:jt,useCallback:function(t,e){return nn().memoizedState=[t,e===void 0?null:e],t},useContext:jt,useEffect:Ug,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,al(4194308,4,vw.bind(null,e,t),n)},useLayoutEffect:function(t,e){return al(4194308,4,t,e)},useInsertionEffect:function(t,e){return al(4,2,t,e)},useMemo:function(t,e){var n=nn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=nn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=fk.bind(null,ve,t),[r.memoizedState,t]},useRef:function(t){var e=nn();return t={current:t},e.memoizedState=t},useState:Mg,useDebugValue:Rf,useDeferredValue:function(t){return nn().memoizedState=t},useTransition:function(){var t=Mg(!1),e=t[0];return t=dk.bind(null,t[1]),nn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ve,i=nn();if(me){if(n===void 0)throw Error(F(407));n=n()}else{if(n=e(),Ue===null)throw Error(F(349));Jr&30||hw(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Ug(fw.bind(null,r,s,t),[t]),r.flags|=2048,bo(9,dw.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=nn(),e=Ue.identifierPrefix;if(me){var n=Pn,r=An;n=(r&~(1<<32-Qt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=xo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=hk++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},gk={readContext:jt,useCallback:Ew,useContext:jt,useEffect:Sf,useImperativeHandle:ww,useInsertionEffect:yw,useLayoutEffect:_w,useMemo:Tw,useReducer:Gc,useRef:gw,useState:function(){return Gc(No)},useDebugValue:Rf,useDeferredValue:function(t){var e=Ft();return Iw(e,be.memoizedState,t)},useTransition:function(){var t=Gc(No)[0],e=Ft().memoizedState;return[t,e]},useMutableSource:uw,useSyncExternalStore:cw,useId:Sw,unstable_isNewReconciler:!1},yk={readContext:jt,useCallback:Ew,useContext:jt,useEffect:Sf,useImperativeHandle:ww,useInsertionEffect:yw,useLayoutEffect:_w,useMemo:Tw,useReducer:Qc,useRef:gw,useState:function(){return Qc(No)},useDebugValue:Rf,useDeferredValue:function(t){var e=Ft();return be===null?e.memoizedState=t:Iw(e,be.memoizedState,t)},useTransition:function(){var t=Qc(No)[0],e=Ft().memoizedState;return[t,e]},useMutableSource:uw,useSyncExternalStore:cw,useId:Sw,unstable_isNewReconciler:!1};function Wt(t,e){if(t&&t.defaultProps){e=Ee({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Yh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ee({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Tu={isMounted:function(t){return(t=t._reactInternals)?ui(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ct(),i=_r(t),s=bn(r,i);s.payload=e,n!=null&&(s.callback=n),e=gr(t,s,i),e!==null&&(Xt(e,t,i,r),sl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ct(),i=_r(t),s=bn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=gr(t,s,i),e!==null&&(Xt(e,t,i,r),sl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ct(),r=_r(t),i=bn(n,r);i.tag=2,e!=null&&(i.callback=e),e=gr(t,i,r),e!==null&&(Xt(e,t,r,n),sl(e,t,r))}};function jg(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!So(n,r)||!So(i,s):!0}function Pw(t,e,n){var r=!1,i=Sr,s=e.contextType;return typeof s=="object"&&s!==null?s=jt(s):(i=vt(e)?Xr:rt.current,r=e.contextTypes,s=(r=r!=null)?Gi(t,i):Sr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Tu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Fg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Tu.enqueueReplaceState(e,e.state,null)}function Jh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},yf(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=jt(s):(s=vt(e)?Xr:rt.current,i.context=Gi(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Yh(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Tu.enqueueReplaceState(i,i.state,null),Ul(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Ji(t,e){try{var n="",r=e;do n+=qS(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Xc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Zh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var _k=typeof WeakMap=="function"?WeakMap:Map;function Cw(t,e,n){n=bn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){zl||(zl=!0,ud=r),Zh(t,e)},n}function xw(t,e,n){n=bn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Zh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Zh(t,e),typeof r!="function"&&(yr===null?yr=new Set([this]):yr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Bg(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new _k;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=bk.bind(null,t,e,n),e.then(t,t))}function $g(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function zg(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=bn(-1,1),e.tag=2,gr(n,e,1))),n.lanes|=1),t)}var vk=qn.ReactCurrentOwner,yt=!1;function ut(t,e,n,r){e.child=t===null?sw(e,null,n,r):Xi(e,t.child,n,r)}function Hg(t,e,n,r,i){n=n.render;var s=e.ref;return Bi(e,i),r=Tf(t,e,n,r,s,i),n=If(),t!==null&&!yt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Un(t,e,i)):(me&&n&&cf(e),e.flags|=1,ut(t,e,r,i),e.child)}function qg(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Df(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Nw(t,e,s,r,i)):(t=hl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:So,n(o,r)&&t.ref===e.ref)return Un(t,e,i)}return e.flags|=1,t=vr(s,r),t.ref=e.ref,t.return=e,e.child=t}function Nw(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(So(s,r)&&t.ref===e.ref)if(yt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(yt=!0);else return e.lanes=t.lanes,Un(t,e,i)}return ed(t,e,n,r,i)}function bw(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ce(Oi,Rt),Rt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ce(Oi,Rt),Rt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ce(Oi,Rt),Rt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ce(Oi,Rt),Rt|=r;return ut(t,e,i,n),e.child}function Dw(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function ed(t,e,n,r,i){var s=vt(n)?Xr:rt.current;return s=Gi(e,s),Bi(e,i),n=Tf(t,e,n,r,s,i),r=If(),t!==null&&!yt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Un(t,e,i)):(me&&r&&cf(e),e.flags|=1,ut(t,e,n,i),e.child)}function Wg(t,e,n,r,i){if(vt(n)){var s=!0;Dl(e)}else s=!1;if(Bi(e,i),e.stateNode===null)ll(t,e),Pw(e,n,r),Jh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=jt(c):(c=vt(n)?Xr:rt.current,c=Gi(e,c));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&Fg(e,o,r,c),er=!1;var m=e.memoizedState;o.state=m,Ul(e,r,o,i),u=e.memoizedState,l!==r||m!==u||_t.current||er?(typeof d=="function"&&(Yh(e,n,d,r),u=e.memoizedState),(l=er||jg(e,n,l,r,m,u,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,aw(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:Wt(e.type,l),o.props=c,p=e.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=jt(u):(u=vt(n)?Xr:rt.current,u=Gi(e,u));var T=n.getDerivedStateFromProps;(d=typeof T=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||m!==u)&&Fg(e,o,r,u),er=!1,m=e.memoizedState,o.state=m,Ul(e,r,o,i);var R=e.memoizedState;l!==p||m!==R||_t.current||er?(typeof T=="function"&&(Yh(e,n,T,r),R=e.memoizedState),(c=er||jg(e,n,c,r,m,R,u)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,R,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,R,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=R),o.props=r,o.state=R,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return td(t,e,n,r,s,i)}function td(t,e,n,r,i,s){Dw(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Ng(e,n,!1),Un(t,e,s);r=e.stateNode,vk.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Xi(e,t.child,null,s),e.child=Xi(e,null,l,s)):ut(t,e,l,s),e.memoizedState=r.state,i&&Ng(e,n,!0),e.child}function Lw(t){var e=t.stateNode;e.pendingContext?xg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&xg(t,e.context,!1),_f(t,e.containerInfo)}function Kg(t,e,n,r,i){return Qi(),df(i),e.flags|=256,ut(t,e,n,r),e.child}var nd={dehydrated:null,treeContext:null,retryLane:0};function rd(t){return{baseLanes:t,cachePool:null,transitions:null}}function Ow(t,e,n){var r=e.pendingProps,i=_e.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ce(_e,i&1),t===null)return Qh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Ru(o,r,0,null),t=Wr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=rd(n),e.memoizedState=nd,t):kf(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return wk(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=vr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=vr(l,s):(s=Wr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?rd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=nd,r}return s=t.child,t=s.sibling,r=vr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function kf(t,e){return e=Ru({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function $a(t,e,n,r){return r!==null&&df(r),Xi(e,t.child,null,n),t=kf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function wk(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Xc(Error(F(422))),$a(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Ru({mode:"visible",children:r.children},i,0,null),s=Wr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Xi(e,t.child,null,o),e.child.memoizedState=rd(o),e.memoizedState=nd,s);if(!(e.mode&1))return $a(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(F(419)),r=Xc(s,r,void 0),$a(t,e,o,r)}if(l=(o&t.childLanes)!==0,yt||l){if(r=Ue,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Mn(t,i),Xt(r,t,i,-1))}return bf(),r=Xc(Error(F(421))),$a(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=Dk.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,kt=mr(i.nextSibling),Ct=e,me=!0,Gt=null,t!==null&&(Ot[Vt++]=An,Ot[Vt++]=Pn,Ot[Vt++]=Yr,An=t.id,Pn=t.overflow,Yr=e),e=kf(e,r.children),e.flags|=4096,e)}function Gg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Xh(t.return,e,n)}function Yc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Vw(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(ut(t,e,r.children,n),r=_e.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Gg(t,n,e);else if(t.tag===19)Gg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ce(_e,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&jl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Yc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&jl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Yc(e,!0,n,null,s);break;case"together":Yc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ll(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Un(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Zr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(F(153));if(e.child!==null){for(t=e.child,n=vr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=vr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Ek(t,e,n){switch(e.tag){case 3:Lw(e),Qi();break;case 5:lw(e);break;case 1:vt(e.type)&&Dl(e);break;case 4:_f(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ce(Vl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ce(_e,_e.current&1),e.flags|=128,null):n&e.child.childLanes?Ow(t,e,n):(ce(_e,_e.current&1),t=Un(t,e,n),t!==null?t.sibling:null);ce(_e,_e.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Vw(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ce(_e,_e.current),r)break;return null;case 22:case 23:return e.lanes=0,bw(t,e,n)}return Un(t,e,n)}var Mw,id,Uw,jw;Mw=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};id=function(){};Uw=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,$r(an.current);var s=null;switch(n){case"input":i=kh(t,i),r=kh(t,r),s=[];break;case"select":i=Ee({},i,{value:void 0}),r=Ee({},r,{value:void 0}),s=[];break;case"textarea":i=Ch(t,i),r=Ch(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Nl)}Nh(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(yo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(yo.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&de("scroll",t),s||l===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};jw=function(t,e,n,r){n!==r&&(e.flags|=4)};function Fs(t,e){if(!me)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Je(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Tk(t,e,n){var r=e.pendingProps;switch(hf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Je(e),null;case 1:return vt(e.type)&&bl(),Je(e),null;case 3:return r=e.stateNode,Yi(),fe(_t),fe(rt),wf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Fa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Gt!==null&&(dd(Gt),Gt=null))),id(t,e),Je(e),null;case 5:vf(e);var i=$r(Co.current);if(n=e.type,t!==null&&e.stateNode!=null)Uw(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(F(166));return Je(e),null}if(t=$r(an.current),Fa(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[rn]=e,r[Ao]=s,t=(e.mode&1)!==0,n){case"dialog":de("cancel",r),de("close",r);break;case"iframe":case"object":case"embed":de("load",r);break;case"video":case"audio":for(i=0;i<Gs.length;i++)de(Gs[i],r);break;case"source":de("error",r);break;case"img":case"image":case"link":de("error",r),de("load",r);break;case"details":de("toggle",r);break;case"input":rg(r,s),de("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},de("invalid",r);break;case"textarea":sg(r,s),de("invalid",r)}Nh(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&ja(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&ja(r.textContent,l,t),i=["children",""+l]):yo.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&de("scroll",r)}switch(n){case"input":Na(r),ig(r,s,!0);break;case"textarea":Na(r),og(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Nl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=fv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[rn]=e,t[Ao]=r,Mw(t,e,!1,!1),e.stateNode=t;e:{switch(o=bh(n,r),n){case"dialog":de("cancel",t),de("close",t),i=r;break;case"iframe":case"object":case"embed":de("load",t),i=r;break;case"video":case"audio":for(i=0;i<Gs.length;i++)de(Gs[i],t);i=r;break;case"source":de("error",t),i=r;break;case"img":case"image":case"link":de("error",t),de("load",t),i=r;break;case"details":de("toggle",t),i=r;break;case"input":rg(t,r),i=kh(t,r),de("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ee({},r,{value:void 0}),de("invalid",t);break;case"textarea":sg(t,r),i=Ch(t,r),de("invalid",t);break;default:i=r}Nh(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?gv(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&pv(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&_o(t,u):typeof u=="number"&&_o(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(yo.hasOwnProperty(s)?u!=null&&s==="onScroll"&&de("scroll",t):u!=null&&Qd(t,s,u,o))}switch(n){case"input":Na(t),ig(t,r,!1);break;case"textarea":Na(t),og(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Ir(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Mi(t,!!r.multiple,s,!1):r.defaultValue!=null&&Mi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Nl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Je(e),null;case 6:if(t&&e.stateNode!=null)jw(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(F(166));if(n=$r(Co.current),$r(an.current),Fa(e)){if(r=e.stateNode,n=e.memoizedProps,r[rn]=e,(s=r.nodeValue!==n)&&(t=Ct,t!==null))switch(t.tag){case 3:ja(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ja(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[rn]=e,e.stateNode=r}return Je(e),null;case 13:if(fe(_e),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(me&&kt!==null&&e.mode&1&&!(e.flags&128))rw(),Qi(),e.flags|=98560,s=!1;else if(s=Fa(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(F(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(F(317));s[rn]=e}else Qi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Je(e),s=!1}else Gt!==null&&(dd(Gt),Gt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||_e.current&1?Le===0&&(Le=3):bf())),e.updateQueue!==null&&(e.flags|=4),Je(e),null);case 4:return Yi(),id(t,e),t===null&&Ro(e.stateNode.containerInfo),Je(e),null;case 10:return mf(e.type._context),Je(e),null;case 17:return vt(e.type)&&bl(),Je(e),null;case 19:if(fe(_e),s=e.memoizedState,s===null)return Je(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Fs(s,!1);else{if(Le!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=jl(t),o!==null){for(e.flags|=128,Fs(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ce(_e,_e.current&1|2),e.child}t=t.sibling}s.tail!==null&&Pe()>Zi&&(e.flags|=128,r=!0,Fs(s,!1),e.lanes=4194304)}else{if(!r)if(t=jl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Fs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!me)return Je(e),null}else 2*Pe()-s.renderingStartTime>Zi&&n!==1073741824&&(e.flags|=128,r=!0,Fs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Pe(),e.sibling=null,n=_e.current,ce(_e,r?n&1|2:n&1),e):(Je(e),null);case 22:case 23:return Nf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Rt&1073741824&&(Je(e),e.subtreeFlags&6&&(e.flags|=8192)):Je(e),null;case 24:return null;case 25:return null}throw Error(F(156,e.tag))}function Ik(t,e){switch(hf(e),e.tag){case 1:return vt(e.type)&&bl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Yi(),fe(_t),fe(rt),wf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return vf(e),null;case 13:if(fe(_e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(F(340));Qi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return fe(_e),null;case 4:return Yi(),null;case 10:return mf(e.type._context),null;case 22:case 23:return Nf(),null;case 24:return null;default:return null}}var za=!1,tt=!1,Sk=typeof WeakSet=="function"?WeakSet:Set,z=null;function Li(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Re(t,e,r)}else n.current=null}function sd(t,e,n){try{n()}catch(r){Re(t,e,r)}}var Qg=!1;function Rk(t,e){if($h=Pl,t=Hv(),uf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,d=0,p=t,m=null;t:for(;;){for(var T;p!==n||i!==0&&p.nodeType!==3||(l=o+i),p!==s||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(T=p.firstChild)!==null;)m=p,p=T;for(;;){if(p===t)break t;if(m===n&&++c===i&&(l=o),m===s&&++d===r&&(u=o),(T=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=T}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(zh={focusedElem:t,selectionRange:n},Pl=!1,z=e;z!==null;)if(e=z,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,z=t;else for(;z!==null;){e=z;try{var R=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(R!==null){var P=R.memoizedProps,N=R.memoizedState,v=e.stateNode,w=v.getSnapshotBeforeUpdate(e.elementType===e.type?P:Wt(e.type,P),N);v.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var E=e.stateNode.containerInfo;E.nodeType===1?E.textContent="":E.nodeType===9&&E.documentElement&&E.removeChild(E.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(F(163))}}catch(C){Re(e,e.return,C)}if(t=e.sibling,t!==null){t.return=e.return,z=t;break}z=e.return}return R=Qg,Qg=!1,R}function oo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&sd(e,n,s)}i=i.next}while(i!==r)}}function Iu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function od(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Fw(t){var e=t.alternate;e!==null&&(t.alternate=null,Fw(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[rn],delete e[Ao],delete e[Wh],delete e[ak],delete e[lk])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Bw(t){return t.tag===5||t.tag===3||t.tag===4}function Xg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Bw(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ad(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Nl));else if(r!==4&&(t=t.child,t!==null))for(ad(t,e,n),t=t.sibling;t!==null;)ad(t,e,n),t=t.sibling}function ld(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(ld(t,e,n),t=t.sibling;t!==null;)ld(t,e,n),t=t.sibling}var Fe=null,Kt=!1;function Xn(t,e,n){for(n=n.child;n!==null;)$w(t,e,n),n=n.sibling}function $w(t,e,n){if(on&&typeof on.onCommitFiberUnmount=="function")try{on.onCommitFiberUnmount(mu,n)}catch{}switch(n.tag){case 5:tt||Li(n,e);case 6:var r=Fe,i=Kt;Fe=null,Xn(t,e,n),Fe=r,Kt=i,Fe!==null&&(Kt?(t=Fe,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Fe.removeChild(n.stateNode));break;case 18:Fe!==null&&(Kt?(t=Fe,n=n.stateNode,t.nodeType===8?Hc(t.parentNode,n):t.nodeType===1&&Hc(t,n),To(t)):Hc(Fe,n.stateNode));break;case 4:r=Fe,i=Kt,Fe=n.stateNode.containerInfo,Kt=!0,Xn(t,e,n),Fe=r,Kt=i;break;case 0:case 11:case 14:case 15:if(!tt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&sd(n,e,o),i=i.next}while(i!==r)}Xn(t,e,n);break;case 1:if(!tt&&(Li(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Re(n,e,l)}Xn(t,e,n);break;case 21:Xn(t,e,n);break;case 22:n.mode&1?(tt=(r=tt)||n.memoizedState!==null,Xn(t,e,n),tt=r):Xn(t,e,n);break;default:Xn(t,e,n)}}function Yg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Sk),e.forEach(function(r){var i=Lk.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function qt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Fe=l.stateNode,Kt=!1;break e;case 3:Fe=l.stateNode.containerInfo,Kt=!0;break e;case 4:Fe=l.stateNode.containerInfo,Kt=!0;break e}l=l.return}if(Fe===null)throw Error(F(160));$w(s,o,i),Fe=null,Kt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){Re(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)zw(e,t),e=e.sibling}function zw(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(qt(e,t),tn(t),r&4){try{oo(3,t,t.return),Iu(3,t)}catch(P){Re(t,t.return,P)}try{oo(5,t,t.return)}catch(P){Re(t,t.return,P)}}break;case 1:qt(e,t),tn(t),r&512&&n!==null&&Li(n,n.return);break;case 5:if(qt(e,t),tn(t),r&512&&n!==null&&Li(n,n.return),t.flags&32){var i=t.stateNode;try{_o(i,"")}catch(P){Re(t,t.return,P)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&hv(i,s),bh(l,o);var c=bh(l,s);for(o=0;o<u.length;o+=2){var d=u[o],p=u[o+1];d==="style"?gv(i,p):d==="dangerouslySetInnerHTML"?pv(i,p):d==="children"?_o(i,p):Qd(i,d,p,c)}switch(l){case"input":Ah(i,s);break;case"textarea":dv(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var T=s.value;T!=null?Mi(i,!!s.multiple,T,!1):m!==!!s.multiple&&(s.defaultValue!=null?Mi(i,!!s.multiple,s.defaultValue,!0):Mi(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ao]=s}catch(P){Re(t,t.return,P)}}break;case 6:if(qt(e,t),tn(t),r&4){if(t.stateNode===null)throw Error(F(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(P){Re(t,t.return,P)}}break;case 3:if(qt(e,t),tn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{To(e.containerInfo)}catch(P){Re(t,t.return,P)}break;case 4:qt(e,t),tn(t);break;case 13:qt(e,t),tn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Cf=Pe())),r&4&&Yg(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(tt=(c=tt)||d,qt(e,t),tt=c):qt(e,t),tn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(z=t,d=t.child;d!==null;){for(p=z=d;z!==null;){switch(m=z,T=m.child,m.tag){case 0:case 11:case 14:case 15:oo(4,m,m.return);break;case 1:Li(m,m.return);var R=m.stateNode;if(typeof R.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,R.props=e.memoizedProps,R.state=e.memoizedState,R.componentWillUnmount()}catch(P){Re(r,n,P)}}break;case 5:Li(m,m.return);break;case 22:if(m.memoizedState!==null){Zg(p);continue}}T!==null?(T.return=m,z=T):Zg(p)}d=d.sibling}e:for(d=null,p=t;;){if(p.tag===5){if(d===null){d=p;try{i=p.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=mv("display",o))}catch(P){Re(t,t.return,P)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(P){Re(t,t.return,P)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:qt(e,t),tn(t),r&4&&Yg(t);break;case 21:break;default:qt(e,t),tn(t)}}function tn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Bw(n)){var r=n;break e}n=n.return}throw Error(F(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(_o(i,""),r.flags&=-33);var s=Xg(t);ld(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Xg(t);ad(t,l,o);break;default:throw Error(F(161))}}catch(u){Re(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function kk(t,e,n){z=t,Hw(t)}function Hw(t,e,n){for(var r=(t.mode&1)!==0;z!==null;){var i=z,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||za;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||tt;l=za;var c=tt;if(za=o,(tt=u)&&!c)for(z=i;z!==null;)o=z,u=o.child,o.tag===22&&o.memoizedState!==null?ey(i):u!==null?(u.return=o,z=u):ey(i);for(;s!==null;)z=s,Hw(s),s=s.sibling;z=i,za=l,tt=c}Jg(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,z=s):Jg(t)}}function Jg(t){for(;z!==null;){var e=z;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:tt||Iu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!tt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Wt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Vg(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Vg(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&To(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(F(163))}tt||e.flags&512&&od(e)}catch(m){Re(e,e.return,m)}}if(e===t){z=null;break}if(n=e.sibling,n!==null){n.return=e.return,z=n;break}z=e.return}}function Zg(t){for(;z!==null;){var e=z;if(e===t){z=null;break}var n=e.sibling;if(n!==null){n.return=e.return,z=n;break}z=e.return}}function ey(t){for(;z!==null;){var e=z;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Iu(4,e)}catch(u){Re(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Re(e,i,u)}}var s=e.return;try{od(e)}catch(u){Re(e,s,u)}break;case 5:var o=e.return;try{od(e)}catch(u){Re(e,o,u)}}}catch(u){Re(e,e.return,u)}if(e===t){z=null;break}var l=e.sibling;if(l!==null){l.return=e.return,z=l;break}z=e.return}}var Ak=Math.ceil,$l=qn.ReactCurrentDispatcher,Af=qn.ReactCurrentOwner,Ut=qn.ReactCurrentBatchConfig,re=0,Ue=null,xe=null,ze=0,Rt=0,Oi=Cr(0),Le=0,Do=null,Zr=0,Su=0,Pf=0,ao=null,mt=null,Cf=0,Zi=1/0,Rn=null,zl=!1,ud=null,yr=null,Ha=!1,ur=null,Hl=0,lo=0,cd=null,ul=-1,cl=0;function ct(){return re&6?Pe():ul!==-1?ul:ul=Pe()}function _r(t){return t.mode&1?re&2&&ze!==0?ze&-ze:ck.transition!==null?(cl===0&&(cl=Pv()),cl):(t=oe,t!==0||(t=window.event,t=t===void 0?16:Ov(t.type)),t):1}function Xt(t,e,n,r){if(50<lo)throw lo=0,cd=null,Error(F(185));Wo(t,n,r),(!(re&2)||t!==Ue)&&(t===Ue&&(!(re&2)&&(Su|=n),Le===4&&nr(t,ze)),wt(t,r),n===1&&re===0&&!(e.mode&1)&&(Zi=Pe()+500,wu&&xr()))}function wt(t,e){var n=t.callbackNode;cR(t,e);var r=Al(t,t===Ue?ze:0);if(r===0)n!==null&&ug(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&ug(n),e===1)t.tag===0?uk(ty.bind(null,t)):ew(ty.bind(null,t)),sk(function(){!(re&6)&&xr()}),n=null;else{switch(Cv(r)){case 1:n=ef;break;case 4:n=kv;break;case 16:n=kl;break;case 536870912:n=Av;break;default:n=kl}n=Jw(n,qw.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function qw(t,e){if(ul=-1,cl=0,re&6)throw Error(F(327));var n=t.callbackNode;if($i()&&t.callbackNode!==n)return null;var r=Al(t,t===Ue?ze:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=ql(t,r);else{e=r;var i=re;re|=2;var s=Kw();(Ue!==t||ze!==e)&&(Rn=null,Zi=Pe()+500,qr(t,e));do try{xk();break}catch(l){Ww(t,l)}while(!0);pf(),$l.current=s,re=i,xe!==null?e=0:(Ue=null,ze=0,e=Le)}if(e!==0){if(e===2&&(i=Mh(t),i!==0&&(r=i,e=hd(t,i))),e===1)throw n=Do,qr(t,0),nr(t,r),wt(t,Pe()),n;if(e===6)nr(t,r);else{if(i=t.current.alternate,!(r&30)&&!Pk(i)&&(e=ql(t,r),e===2&&(s=Mh(t),s!==0&&(r=s,e=hd(t,s))),e===1))throw n=Do,qr(t,0),nr(t,r),wt(t,Pe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(F(345));case 2:Ur(t,mt,Rn);break;case 3:if(nr(t,r),(r&130023424)===r&&(e=Cf+500-Pe(),10<e)){if(Al(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){ct(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=qh(Ur.bind(null,t,mt,Rn),e);break}Ur(t,mt,Rn);break;case 4:if(nr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Qt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Pe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Ak(r/1960))-r,10<r){t.timeoutHandle=qh(Ur.bind(null,t,mt,Rn),r);break}Ur(t,mt,Rn);break;case 5:Ur(t,mt,Rn);break;default:throw Error(F(329))}}}return wt(t,Pe()),t.callbackNode===n?qw.bind(null,t):null}function hd(t,e){var n=ao;return t.current.memoizedState.isDehydrated&&(qr(t,e).flags|=256),t=ql(t,e),t!==2&&(e=mt,mt=n,e!==null&&dd(e)),t}function dd(t){mt===null?mt=t:mt.push.apply(mt,t)}function Pk(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Zt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function nr(t,e){for(e&=~Pf,e&=~Su,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Qt(e),r=1<<n;t[n]=-1,e&=~r}}function ty(t){if(re&6)throw Error(F(327));$i();var e=Al(t,0);if(!(e&1))return wt(t,Pe()),null;var n=ql(t,e);if(t.tag!==0&&n===2){var r=Mh(t);r!==0&&(e=r,n=hd(t,r))}if(n===1)throw n=Do,qr(t,0),nr(t,e),wt(t,Pe()),n;if(n===6)throw Error(F(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ur(t,mt,Rn),wt(t,Pe()),null}function xf(t,e){var n=re;re|=1;try{return t(e)}finally{re=n,re===0&&(Zi=Pe()+500,wu&&xr())}}function ei(t){ur!==null&&ur.tag===0&&!(re&6)&&$i();var e=re;re|=1;var n=Ut.transition,r=oe;try{if(Ut.transition=null,oe=1,t)return t()}finally{oe=r,Ut.transition=n,re=e,!(re&6)&&xr()}}function Nf(){Rt=Oi.current,fe(Oi)}function qr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,ik(n)),xe!==null)for(n=xe.return;n!==null;){var r=n;switch(hf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&bl();break;case 3:Yi(),fe(_t),fe(rt),wf();break;case 5:vf(r);break;case 4:Yi();break;case 13:fe(_e);break;case 19:fe(_e);break;case 10:mf(r.type._context);break;case 22:case 23:Nf()}n=n.return}if(Ue=t,xe=t=vr(t.current,null),ze=Rt=e,Le=0,Do=null,Pf=Su=Zr=0,mt=ao=null,Br!==null){for(e=0;e<Br.length;e++)if(n=Br[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Br=null}return t}function Ww(t,e){do{var n=xe;try{if(pf(),ol.current=Bl,Fl){for(var r=ve.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Fl=!1}if(Jr=0,Me=be=ve=null,so=!1,xo=0,Af.current=null,n===null||n.return===null){Le=1,Do=e,xe=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=ze,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=l,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var T=$g(o);if(T!==null){T.flags&=-257,zg(T,o,l,s,e),T.mode&1&&Bg(s,c,e),e=T,u=c;var R=e.updateQueue;if(R===null){var P=new Set;P.add(u),e.updateQueue=P}else R.add(u);break e}else{if(!(e&1)){Bg(s,c,e),bf();break e}u=Error(F(426))}}else if(me&&l.mode&1){var N=$g(o);if(N!==null){!(N.flags&65536)&&(N.flags|=256),zg(N,o,l,s,e),df(Ji(u,l));break e}}s=u=Ji(u,l),Le!==4&&(Le=2),ao===null?ao=[s]:ao.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var v=Cw(s,u,e);Og(s,v);break e;case 1:l=u;var w=s.type,E=s.stateNode;if(!(s.flags&128)&&(typeof w.getDerivedStateFromError=="function"||E!==null&&typeof E.componentDidCatch=="function"&&(yr===null||!yr.has(E)))){s.flags|=65536,e&=-e,s.lanes|=e;var C=xw(s,l,e);Og(s,C);break e}}s=s.return}while(s!==null)}Qw(n)}catch(V){e=V,xe===n&&n!==null&&(xe=n=n.return);continue}break}while(!0)}function Kw(){var t=$l.current;return $l.current=Bl,t===null?Bl:t}function bf(){(Le===0||Le===3||Le===2)&&(Le=4),Ue===null||!(Zr&268435455)&&!(Su&268435455)||nr(Ue,ze)}function ql(t,e){var n=re;re|=2;var r=Kw();(Ue!==t||ze!==e)&&(Rn=null,qr(t,e));do try{Ck();break}catch(i){Ww(t,i)}while(!0);if(pf(),re=n,$l.current=r,xe!==null)throw Error(F(261));return Ue=null,ze=0,Le}function Ck(){for(;xe!==null;)Gw(xe)}function xk(){for(;xe!==null&&!tR();)Gw(xe)}function Gw(t){var e=Yw(t.alternate,t,Rt);t.memoizedProps=t.pendingProps,e===null?Qw(t):xe=e,Af.current=null}function Qw(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Ik(n,e),n!==null){n.flags&=32767,xe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Le=6,xe=null;return}}else if(n=Tk(n,e,Rt),n!==null){xe=n;return}if(e=e.sibling,e!==null){xe=e;return}xe=e=t}while(e!==null);Le===0&&(Le=5)}function Ur(t,e,n){var r=oe,i=Ut.transition;try{Ut.transition=null,oe=1,Nk(t,e,n,r)}finally{Ut.transition=i,oe=r}return null}function Nk(t,e,n,r){do $i();while(ur!==null);if(re&6)throw Error(F(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(F(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(hR(t,s),t===Ue&&(xe=Ue=null,ze=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ha||(Ha=!0,Jw(kl,function(){return $i(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ut.transition,Ut.transition=null;var o=oe;oe=1;var l=re;re|=4,Af.current=null,Rk(t,n),zw(n,t),YR(zh),Pl=!!$h,zh=$h=null,t.current=n,kk(n),nR(),re=l,oe=o,Ut.transition=s}else t.current=n;if(Ha&&(Ha=!1,ur=t,Hl=i),s=t.pendingLanes,s===0&&(yr=null),sR(n.stateNode),wt(t,Pe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(zl)throw zl=!1,t=ud,ud=null,t;return Hl&1&&t.tag!==0&&$i(),s=t.pendingLanes,s&1?t===cd?lo++:(lo=0,cd=t):lo=0,xr(),null}function $i(){if(ur!==null){var t=Cv(Hl),e=Ut.transition,n=oe;try{if(Ut.transition=null,oe=16>t?16:t,ur===null)var r=!1;else{if(t=ur,ur=null,Hl=0,re&6)throw Error(F(331));var i=re;for(re|=4,z=t.current;z!==null;){var s=z,o=s.child;if(z.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(z=c;z!==null;){var d=z;switch(d.tag){case 0:case 11:case 15:oo(8,d,s)}var p=d.child;if(p!==null)p.return=d,z=p;else for(;z!==null;){d=z;var m=d.sibling,T=d.return;if(Fw(d),d===c){z=null;break}if(m!==null){m.return=T,z=m;break}z=T}}}var R=s.alternate;if(R!==null){var P=R.child;if(P!==null){R.child=null;do{var N=P.sibling;P.sibling=null,P=N}while(P!==null)}}z=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,z=o;else e:for(;z!==null;){if(s=z,s.flags&2048)switch(s.tag){case 0:case 11:case 15:oo(9,s,s.return)}var v=s.sibling;if(v!==null){v.return=s.return,z=v;break e}z=s.return}}var w=t.current;for(z=w;z!==null;){o=z;var E=o.child;if(o.subtreeFlags&2064&&E!==null)E.return=o,z=E;else e:for(o=w;z!==null;){if(l=z,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Iu(9,l)}}catch(V){Re(l,l.return,V)}if(l===o){z=null;break e}var C=l.sibling;if(C!==null){C.return=l.return,z=C;break e}z=l.return}}if(re=i,xr(),on&&typeof on.onPostCommitFiberRoot=="function")try{on.onPostCommitFiberRoot(mu,t)}catch{}r=!0}return r}finally{oe=n,Ut.transition=e}}return!1}function ny(t,e,n){e=Ji(n,e),e=Cw(t,e,1),t=gr(t,e,1),e=ct(),t!==null&&(Wo(t,1,e),wt(t,e))}function Re(t,e,n){if(t.tag===3)ny(t,t,n);else for(;e!==null;){if(e.tag===3){ny(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(yr===null||!yr.has(r))){t=Ji(n,t),t=xw(e,t,1),e=gr(e,t,1),t=ct(),e!==null&&(Wo(e,1,t),wt(e,t));break}}e=e.return}}function bk(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ct(),t.pingedLanes|=t.suspendedLanes&n,Ue===t&&(ze&n)===n&&(Le===4||Le===3&&(ze&130023424)===ze&&500>Pe()-Cf?qr(t,0):Pf|=n),wt(t,e)}function Xw(t,e){e===0&&(t.mode&1?(e=La,La<<=1,!(La&130023424)&&(La=4194304)):e=1);var n=ct();t=Mn(t,e),t!==null&&(Wo(t,e,n),wt(t,n))}function Dk(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Xw(t,n)}function Lk(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(F(314))}r!==null&&r.delete(e),Xw(t,n)}var Yw;Yw=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||_t.current)yt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return yt=!1,Ek(t,e,n);yt=!!(t.flags&131072)}else yt=!1,me&&e.flags&1048576&&tw(e,Ol,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;ll(t,e),t=e.pendingProps;var i=Gi(e,rt.current);Bi(e,n),i=Tf(null,e,r,t,i,n);var s=If();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,vt(r)?(s=!0,Dl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,yf(e),i.updater=Tu,e.stateNode=i,i._reactInternals=e,Jh(e,r,t,n),e=td(null,e,r,!0,s,n)):(e.tag=0,me&&s&&cf(e),ut(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(ll(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=Vk(r),t=Wt(r,t),i){case 0:e=ed(null,e,r,t,n);break e;case 1:e=Wg(null,e,r,t,n);break e;case 11:e=Hg(null,e,r,t,n);break e;case 14:e=qg(null,e,r,Wt(r.type,t),n);break e}throw Error(F(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Wt(r,i),ed(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Wt(r,i),Wg(t,e,r,i,n);case 3:e:{if(Lw(e),t===null)throw Error(F(387));r=e.pendingProps,s=e.memoizedState,i=s.element,aw(t,e),Ul(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Ji(Error(F(423)),e),e=Kg(t,e,r,n,i);break e}else if(r!==i){i=Ji(Error(F(424)),e),e=Kg(t,e,r,n,i);break e}else for(kt=mr(e.stateNode.containerInfo.firstChild),Ct=e,me=!0,Gt=null,n=sw(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Qi(),r===i){e=Un(t,e,n);break e}ut(t,e,r,n)}e=e.child}return e;case 5:return lw(e),t===null&&Qh(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Hh(r,i)?o=null:s!==null&&Hh(r,s)&&(e.flags|=32),Dw(t,e),ut(t,e,o,n),e.child;case 6:return t===null&&Qh(e),null;case 13:return Ow(t,e,n);case 4:return _f(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Xi(e,null,r,n):ut(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Wt(r,i),Hg(t,e,r,i,n);case 7:return ut(t,e,e.pendingProps,n),e.child;case 8:return ut(t,e,e.pendingProps.children,n),e.child;case 12:return ut(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ce(Vl,r._currentValue),r._currentValue=o,s!==null)if(Zt(s.value,o)){if(s.children===i.children&&!_t.current){e=Un(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=bn(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Xh(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(F(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Xh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ut(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Bi(e,n),i=jt(i),r=r(i),e.flags|=1,ut(t,e,r,n),e.child;case 14:return r=e.type,i=Wt(r,e.pendingProps),i=Wt(r.type,i),qg(t,e,r,i,n);case 15:return Nw(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Wt(r,i),ll(t,e),e.tag=1,vt(r)?(t=!0,Dl(e)):t=!1,Bi(e,n),Pw(e,r,i),Jh(e,r,i,n),td(null,e,r,!0,t,n);case 19:return Vw(t,e,n);case 22:return bw(t,e,n)}throw Error(F(156,e.tag))};function Jw(t,e){return Rv(t,e)}function Ok(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Mt(t,e,n,r){return new Ok(t,e,n,r)}function Df(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Vk(t){if(typeof t=="function")return Df(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Yd)return 11;if(t===Jd)return 14}return 2}function vr(t,e){var n=t.alternate;return n===null?(n=Mt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function hl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Df(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ri:return Wr(n.children,i,s,e);case Xd:o=8,i|=8;break;case Th:return t=Mt(12,n,e,i|2),t.elementType=Th,t.lanes=s,t;case Ih:return t=Mt(13,n,e,i),t.elementType=Ih,t.lanes=s,t;case Sh:return t=Mt(19,n,e,i),t.elementType=Sh,t.lanes=s,t;case lv:return Ru(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case ov:o=10;break e;case av:o=9;break e;case Yd:o=11;break e;case Jd:o=14;break e;case Zn:o=16,r=null;break e}throw Error(F(130,t==null?t:typeof t,""))}return e=Mt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Wr(t,e,n,r){return t=Mt(7,t,r,e),t.lanes=n,t}function Ru(t,e,n,r){return t=Mt(22,t,r,e),t.elementType=lv,t.lanes=n,t.stateNode={isHidden:!1},t}function Jc(t,e,n){return t=Mt(6,t,null,e),t.lanes=n,t}function Zc(t,e,n){return e=Mt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Mk(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Dc(0),this.expirationTimes=Dc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Dc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Lf(t,e,n,r,i,s,o,l,u){return t=new Mk(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Mt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},yf(s),t}function Uk(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Si,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Zw(t){if(!t)return Sr;t=t._reactInternals;e:{if(ui(t)!==t||t.tag!==1)throw Error(F(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(vt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(F(171))}if(t.tag===1){var n=t.type;if(vt(n))return Zv(t,n,e)}return e}function eE(t,e,n,r,i,s,o,l,u){return t=Lf(n,r,!0,t,i,s,o,l,u),t.context=Zw(null),n=t.current,r=ct(),i=_r(n),s=bn(r,i),s.callback=e??null,gr(n,s,i),t.current.lanes=i,Wo(t,i,r),wt(t,r),t}function ku(t,e,n,r){var i=e.current,s=ct(),o=_r(i);return n=Zw(n),e.context===null?e.context=n:e.pendingContext=n,e=bn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=gr(i,e,o),t!==null&&(Xt(t,i,o,s),sl(t,i,o)),o}function Wl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function ry(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Of(t,e){ry(t,e),(t=t.alternate)&&ry(t,e)}function jk(){return null}var tE=typeof reportError=="function"?reportError:function(t){console.error(t)};function Vf(t){this._internalRoot=t}Au.prototype.render=Vf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(F(409));ku(t,e,null,null)};Au.prototype.unmount=Vf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ei(function(){ku(null,t,null,null)}),e[Vn]=null}};function Au(t){this._internalRoot=t}Au.prototype.unstable_scheduleHydration=function(t){if(t){var e=bv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<tr.length&&e!==0&&e<tr[n].priority;n++);tr.splice(n,0,t),n===0&&Lv(t)}};function Mf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Pu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function iy(){}function Fk(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=Wl(o);s.call(c)}}var o=eE(e,r,t,0,null,!1,!1,"",iy);return t._reactRootContainer=o,t[Vn]=o.current,Ro(t.nodeType===8?t.parentNode:t),ei(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=Wl(u);l.call(c)}}var u=Lf(t,0,!1,null,null,!1,!1,"",iy);return t._reactRootContainer=u,t[Vn]=u.current,Ro(t.nodeType===8?t.parentNode:t),ei(function(){ku(e,u,n,r)}),u}function Cu(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=Wl(o);l.call(u)}}ku(e,o,t,i)}else o=Fk(n,e,t,i,r);return Wl(o)}xv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ks(e.pendingLanes);n!==0&&(tf(e,n|1),wt(e,Pe()),!(re&6)&&(Zi=Pe()+500,xr()))}break;case 13:ei(function(){var r=Mn(t,1);if(r!==null){var i=ct();Xt(r,t,1,i)}}),Of(t,1)}};nf=function(t){if(t.tag===13){var e=Mn(t,134217728);if(e!==null){var n=ct();Xt(e,t,134217728,n)}Of(t,134217728)}};Nv=function(t){if(t.tag===13){var e=_r(t),n=Mn(t,e);if(n!==null){var r=ct();Xt(n,t,e,r)}Of(t,e)}};bv=function(){return oe};Dv=function(t,e){var n=oe;try{return oe=t,e()}finally{oe=n}};Lh=function(t,e,n){switch(e){case"input":if(Ah(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=vu(r);if(!i)throw Error(F(90));cv(r),Ah(r,i)}}}break;case"textarea":dv(t,n);break;case"select":e=n.value,e!=null&&Mi(t,!!n.multiple,e,!1)}};vv=xf;wv=ei;var Bk={usingClientEntryPoint:!1,Events:[Go,Ci,vu,yv,_v,xf]},Bs={findFiberByHostInstance:Fr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},$k={bundleType:Bs.bundleType,version:Bs.version,rendererPackageName:Bs.rendererPackageName,rendererConfig:Bs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:qn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Iv(t),t===null?null:t.stateNode},findFiberByHostInstance:Bs.findFiberByHostInstance||jk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var qa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!qa.isDisabled&&qa.supportsFiber)try{mu=qa.inject($k),on=qa}catch{}}Dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Bk;Dt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Mf(e))throw Error(F(200));return Uk(t,e,null,n)};Dt.createRoot=function(t,e){if(!Mf(t))throw Error(F(299));var n=!1,r="",i=tE;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Lf(t,1,!1,null,null,n,!1,r,i),t[Vn]=e.current,Ro(t.nodeType===8?t.parentNode:t),new Vf(e)};Dt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(F(188)):(t=Object.keys(t).join(","),Error(F(268,t)));return t=Iv(e),t=t===null?null:t.stateNode,t};Dt.flushSync=function(t){return ei(t)};Dt.hydrate=function(t,e,n){if(!Pu(e))throw Error(F(200));return Cu(null,t,e,!0,n)};Dt.hydrateRoot=function(t,e,n){if(!Mf(t))throw Error(F(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=tE;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=eE(e,null,t,1,n??null,i,!1,s,o),t[Vn]=e.current,Ro(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Au(e)};Dt.render=function(t,e,n){if(!Pu(e))throw Error(F(200));return Cu(null,t,e,!1,n)};Dt.unmountComponentAtNode=function(t){if(!Pu(t))throw Error(F(40));return t._reactRootContainer?(ei(function(){Cu(null,null,t,!1,function(){t._reactRootContainer=null,t[Vn]=null})}),!0):!1};Dt.unstable_batchedUpdates=xf;Dt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Pu(n))throw Error(F(200));if(t==null||t._reactInternals===void 0)throw Error(F(38));return Cu(t,e,n,!1,r)};Dt.version="18.3.1-next-f1338f8080-20240426";function nE(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(nE)}catch(t){console.error(t)}}nE(),nv.exports=Dt;var zk=nv.exports,sy=zk;wh.createRoot=sy.createRoot,wh.hydrateRoot=sy.hydrateRoot;/**
 * react-router v7.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var oy="popstate";function ay(t){return typeof t=="object"&&t!=null&&"pathname"in t&&"search"in t&&"hash"in t&&"state"in t&&"key"in t}function Hk(t={}){function e(r,i){var c;let s=(c=i.state)==null?void 0:c.masked,{pathname:o,search:l,hash:u}=s||r.location;return fd("",{pathname:o,search:l,hash:u},i.state&&i.state.usr||null,i.state&&i.state.key||"default",s?{pathname:r.location.pathname,search:r.location.search,hash:r.location.hash}:void 0)}function n(r,i){return typeof i=="string"?i:Lo(i)}return Wk(e,n,null,t)}function we(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function dn(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function qk(){return Math.random().toString(36).substring(2,10)}function ly(t,e){return{usr:t.state,key:t.key,idx:e,masked:t.mask?{pathname:t.pathname,search:t.search,hash:t.hash}:void 0}}function fd(t,e,n=null,r,i){return{pathname:typeof t=="string"?t:t.pathname,search:"",hash:"",...typeof e=="string"?hs(e):e,state:n,key:e&&e.key||r||qk(),mask:i}}function Lo({pathname:t="/",search:e="",hash:n=""}){return e&&e!=="?"&&(t+=e.charAt(0)==="?"?e:"?"+e),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function hs(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substring(n),t=t.substring(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substring(r),t=t.substring(0,r)),t&&(e.pathname=t)}return e}function Wk(t,e,n,r={}){let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l="POP",u=null,c=d();c==null&&(c=0,o.replaceState({...o.state,idx:c},""));function d(){return(o.state||{idx:null}).idx}function p(){l="POP";let N=d(),v=N==null?null:N-c;c=N,u&&u({action:l,location:P.location,delta:v})}function m(N,v){l="PUSH";let w=ay(N)?N:fd(P.location,N,v);c=d()+1;let E=ly(w,c),C=P.createHref(w.mask||w);try{o.pushState(E,"",C)}catch(V){if(V instanceof DOMException&&V.name==="DataCloneError")throw V;i.location.assign(C)}s&&u&&u({action:l,location:P.location,delta:1})}function T(N,v){l="REPLACE";let w=ay(N)?N:fd(P.location,N,v);c=d();let E=ly(w,c),C=P.createHref(w.mask||w);o.replaceState(E,"",C),s&&u&&u({action:l,location:P.location,delta:0})}function R(N){return Kk(i,N)}let P={get action(){return l},get location(){return t(i,o)},listen(N){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(oy,p),u=N,()=>{i.removeEventListener(oy,p),u=null}},createHref(N){return e(i,N)},createURL:R,encodeLocation(N){let v=R(N);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:m,replace:T,go(N){return o.go(N)}};return P}function Kk(t,e,n=!1){let r="http://localhost";t&&(r=t.location.origin!=="null"?t.location.origin:t.location.href),we(r,"No window.location.(origin|href) available to create URL");let i=typeof e=="string"?e:Lo(e);return i=i.replace(/ $/,"%20"),!n&&i.startsWith("//")&&(i=r+i),new URL(i,r)}function rE(t,e,n="/"){return Gk(t,e,n,!1)}function Gk(t,e,n,r,i){let s=typeof e=="string"?hs(e):e,o=jn(s.pathname||"/",n);if(o==null)return null;let l=Qk(t),u=null,c=aA(o);for(let d=0;u==null&&d<l.length;++d)u=sA(l[d],c,r);return u}function Qk(t){let e=iE(t);return Xk(e),e}function iE(t,e=[],n=[],r="",i=!1){let s=(o,l,u=i,c)=>{let d={relativePath:c===void 0?o.path||"":c,caseSensitive:o.caseSensitive===!0,childrenIndex:l,route:o};if(d.relativePath.startsWith("/")){if(!d.relativePath.startsWith(r)&&u)return;we(d.relativePath.startsWith(r),`Absolute route path "${d.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),d.relativePath=d.relativePath.slice(r.length)}let p=Yt([r,d.relativePath]),m=n.concat(d);o.children&&o.children.length>0&&(we(o.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${p}".`),iE(o.children,e,m,p,u)),!(o.path==null&&!o.index)&&e.push({path:p,score:rA(p,o.index),routesMeta:m})};return t.forEach((o,l)=>{var u;if(o.path===""||!((u=o.path)!=null&&u.includes("?")))s(o,l);else for(let c of sE(o.path))s(o,l,!0,c)}),e}function sE(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=sE(r.join("/")),l=[];return l.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&l.push(...o),l.map(u=>t.startsWith("/")&&u===""?"/":u)}function Xk(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:iA(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}var Yk=/^:[\w-]+$/,Jk=3,Zk=2,eA=1,tA=10,nA=-2,uy=t=>t==="*";function rA(t,e){let n=t.split("/"),r=n.length;return n.some(uy)&&(r+=nA),e&&(r+=Zk),n.filter(i=>!uy(i)).reduce((i,s)=>i+(Yk.test(s)?Jk:s===""?eA:tA),r)}function iA(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function sA(t,e,n=!1){let{routesMeta:r}=t,i={},s="/",o=[];for(let l=0;l<r.length;++l){let u=r[l],c=l===r.length-1,d=s==="/"?e:e.slice(s.length)||"/",p=Kl({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},d),m=u.route;if(!p&&c&&n&&!r[r.length-1].route.index&&(p=Kl({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},d)),!p)return null;Object.assign(i,p.params),o.push({params:i,pathname:Yt([s,p.pathname]),pathnameBase:hA(Yt([s,p.pathnameBase])),route:m}),p.pathnameBase!=="/"&&(s=Yt([s,p.pathnameBase]))}return o}function Kl(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=oA(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((c,{paramName:d,isOptional:p},m)=>{if(d==="*"){let R=l[m]||"";o=s.slice(0,s.length-R.length).replace(/(.)\/+$/,"$1")}const T=l[m];return p&&!T?c[d]=void 0:c[d]=(T||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function oA(t,e=!1,n=!0){dn(t==="*"||!t.endsWith("*")||t.endsWith("/*"),`Route path "${t}" will be treated as if it were "${t.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/,"/*")}".`);let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,u,c,d)=>{if(r.push({paramName:l,isOptional:u!=null}),u){let p=d.charAt(c+o.length);return p&&p!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function aA(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return dn(!1,`The URL path "${t}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),t}}function jn(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}var lA=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function uA(t,e="/"){let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?hs(t):t,s;return n?(n=aE(n),n.startsWith("/")?s=cy(n.substring(1),"/"):s=cy(n,e)):s=e,{pathname:s,search:dA(r),hash:fA(i)}}function cy(t,e){let n=Gl(e).split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function eh(t,e,n,r){return`Cannot include a '${t}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function cA(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function oE(t){let e=cA(t);return e.map((n,r)=>r===e.length-1?n.pathname:n.pathnameBase)}function Uf(t,e,n,r=!1){let i;typeof t=="string"?i=hs(t):(i={...t},we(!i.pathname||!i.pathname.includes("?"),eh("?","pathname","search",i)),we(!i.pathname||!i.pathname.includes("#"),eh("#","pathname","hash",i)),we(!i.search||!i.search.includes("#"),eh("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let p=e.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),p-=1;i.pathname=m.join("/")}l=p>=0?e[p]:"/"}let u=uA(i,l),c=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||d)&&(u.pathname+="/"),u}var aE=t=>t.replace(/\/\/+/g,"/"),Yt=t=>aE(t.join("/")),Gl=t=>t.replace(/\/+$/,""),hA=t=>Gl(t).replace(/^\/*/,"/"),dA=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,fA=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t,pA=class{constructor(t,e,n,r=!1){this.status=t,this.statusText=e||"",this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function mA(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}function gA(t){let e=t.map(n=>n.route.path).filter(Boolean);return Yt(e)||"/"}var lE=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function uE(t,e){let n=t;if(typeof n!="string"||!lA.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let r=n,i=!1;if(lE)try{let s=new URL(window.location.href),o=n.startsWith("//")?new URL(s.protocol+n):new URL(n),l=jn(o.pathname,e);o.origin===s.origin&&l!=null?n=l+o.search+o.hash:i=!0}catch{dn(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:i,to:n}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var cE=["POST","PUT","PATCH","DELETE"];new Set(cE);var yA=["GET",...cE];new Set(yA);var ds=b.createContext(null);ds.displayName="DataRouter";var xu=b.createContext(null);xu.displayName="DataRouterState";var hE=b.createContext(!1);function _A(){return b.useContext(hE)}var dE=b.createContext({isTransitioning:!1});dE.displayName="ViewTransition";var vA=b.createContext(new Map);vA.displayName="Fetchers";var wA=b.createContext(null);wA.displayName="Await";var $t=b.createContext(null);$t.displayName="Navigation";var Xo=b.createContext(null);Xo.displayName="Location";var gn=b.createContext({outlet:null,matches:[],isDataRoute:!1});gn.displayName="Route";var jf=b.createContext(null);jf.displayName="RouteError";var fE="REACT_ROUTER_ERROR",EA="REDIRECT",TA="ROUTE_ERROR_RESPONSE";function IA(t){if(t.startsWith(`${fE}:${EA}:{`))try{let e=JSON.parse(t.slice(28));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.location=="string"&&typeof e.reloadDocument=="boolean"&&typeof e.replace=="boolean")return e}catch{}}function SA(t){if(t.startsWith(`${fE}:${TA}:{`))try{let e=JSON.parse(t.slice(40));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string")return new pA(e.status,e.statusText,e.data)}catch{}}function RA(t,{relative:e}={}){we(Yo(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:r}=b.useContext($t),{hash:i,pathname:s,search:o}=Jo(t,{relative:e}),l=s;return n!=="/"&&(l=s==="/"?n:Yt([n,s])),r.createHref({pathname:l,search:o,hash:i})}function Yo(){return b.useContext(Xo)!=null}function Wn(){return we(Yo(),"useLocation() may be used only in the context of a <Router> component."),b.useContext(Xo).location}var pE="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function mE(t){b.useContext($t).static||b.useLayoutEffect(t)}function fs(){let{isDataRoute:t}=b.useContext(gn);return t?jA():kA()}function kA(){we(Yo(),"useNavigate() may be used only in the context of a <Router> component.");let t=b.useContext(ds),{basename:e,navigator:n}=b.useContext($t),{matches:r}=b.useContext(gn),{pathname:i}=Wn(),s=JSON.stringify(oE(r)),o=b.useRef(!1);return mE(()=>{o.current=!0}),b.useCallback((u,c={})=>{if(dn(o.current,pE),!o.current)return;if(typeof u=="number"){n.go(u);return}let d=Uf(u,JSON.parse(s),i,c.relative==="path");t==null&&e!=="/"&&(d.pathname=d.pathname==="/"?e:Yt([e,d.pathname])),(c.replace?n.replace:n.push)(d,c.state,c)},[e,n,s,i,t])}b.createContext(null);function AA(){let{matches:t}=b.useContext(gn),e=t[t.length-1];return(e==null?void 0:e.params)??{}}function Jo(t,{relative:e}={}){let{matches:n}=b.useContext(gn),{pathname:r}=Wn(),i=JSON.stringify(oE(n));return b.useMemo(()=>Uf(t,JSON.parse(i),r,e==="path"),[t,i,r,e])}function PA(t,e){return gE(t,e)}function gE(t,e,n){var N;we(Yo(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:r}=b.useContext($t),{matches:i}=b.useContext(gn),s=i[i.length-1],o=s?s.params:{},l=s?s.pathname:"/",u=s?s.pathnameBase:"/",c=s&&s.route;{let v=c&&c.path||"";_E(l,!c||v.endsWith("*")||v.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${l}" (under <Route path="${v}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${v}"> to <Route path="${v==="/"?"*":`${v}/*`}">.`)}let d=Wn(),p;if(e){let v=typeof e=="string"?hs(e):e;we(u==="/"||((N=v.pathname)==null?void 0:N.startsWith(u)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${u}" but pathname "${v.pathname}" was given in the \`location\` prop.`),p=v}else p=d;let m=p.pathname||"/",T=m;if(u!=="/"){let v=u.replace(/^\//,"").split("/");T="/"+m.replace(/^\//,"").split("/").slice(v.length).join("/")}let R=n&&n.state.matches.length?n.state.matches.map(v=>Object.assign(v,{route:n.manifest[v.route.id]||v.route})):rE(t,{pathname:T});dn(c||R!=null,`No routes matched location "${p.pathname}${p.search}${p.hash}" `),dn(R==null||R[R.length-1].route.element!==void 0||R[R.length-1].route.Component!==void 0||R[R.length-1].route.lazy!==void 0,`Matched leaf route at location "${p.pathname}${p.search}${p.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let P=DA(R&&R.map(v=>Object.assign({},v,{params:Object.assign({},o,v.params),pathname:Yt([u,r.encodeLocation?r.encodeLocation(v.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?u:Yt([u,r.encodeLocation?r.encodeLocation(v.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:v.pathnameBase])})),i,n);return e&&P?b.createElement(Xo.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",mask:void 0,...p},navigationType:"POP"}},P):P}function CA(){let t=UA(),e=mA(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:r},s={padding:"2px 4px",backgroundColor:r},o=null;return console.error("Error handled by React Router default ErrorBoundary:",t),o=b.createElement(b.Fragment,null,b.createElement("p",null,"💿 Hey developer 👋"),b.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",b.createElement("code",{style:s},"ErrorBoundary")," or"," ",b.createElement("code",{style:s},"errorElement")," prop on your route.")),b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},e),n?b.createElement("pre",{style:i},n):null,o)}var xA=b.createElement(CA,null),yE=class extends b.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,e){return e.location!==t.location||e.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:e.error,location:e.location,revalidation:t.revalidation||e.revalidation}}componentDidCatch(t,e){this.props.onError?this.props.onError(t,e):console.error("React Router caught the following error during render",t)}render(){let t=this.state.error;if(this.context&&typeof t=="object"&&t&&"digest"in t&&typeof t.digest=="string"){const n=SA(t.digest);n&&(t=n)}let e=t!==void 0?b.createElement(gn.Provider,{value:this.props.routeContext},b.createElement(jf.Provider,{value:t,children:this.props.component})):this.props.children;return this.context?b.createElement(NA,{error:t},e):e}};yE.contextType=hE;var th=new WeakMap;function NA({children:t,error:e}){let{basename:n}=b.useContext($t);if(typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){let r=IA(e.digest);if(r){let i=th.get(e);if(i)throw i;let s=uE(r.location,n);if(lE&&!th.get(e))if(s.isExternal||r.reloadDocument)window.location.href=s.absoluteURL||s.to;else{const o=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(s.to,{replace:r.replace}));throw th.set(e,o),o}return b.createElement("meta",{httpEquiv:"refresh",content:`0;url=${s.absoluteURL||s.to}`})}}return t}function bA({routeContext:t,match:e,children:n}){let r=b.useContext(ds);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),b.createElement(gn.Provider,{value:t},n)}function DA(t,e=[],n){let r=n==null?void 0:n.state;if(t==null){if(!r)return null;if(r.errors)t=r.matches;else if(e.length===0&&!r.initialized&&r.matches.length>0)t=r.matches;else return null}let i=t,s=r==null?void 0:r.errors;if(s!=null){let d=i.findIndex(p=>p.route.id&&(s==null?void 0:s[p.route.id])!==void 0);we(d>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(s).join(",")}`),i=i.slice(0,Math.min(i.length,d+1))}let o=!1,l=-1;if(n&&r){o=r.renderFallback;for(let d=0;d<i.length;d++){let p=i[d];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(l=d),p.route.id){let{loaderData:m,errors:T}=r,R=p.route.loader&&!m.hasOwnProperty(p.route.id)&&(!T||T[p.route.id]===void 0);if(p.route.lazy||R){n.isStatic&&(o=!0),l>=0?i=i.slice(0,l+1):i=[i[0]];break}}}}let u=n==null?void 0:n.onError,c=r&&u?(d,p)=>{var m,T;u(d,{location:r.location,params:((T=(m=r.matches)==null?void 0:m[0])==null?void 0:T.params)??{},pattern:gA(r.matches),errorInfo:p})}:void 0;return i.reduceRight((d,p,m)=>{let T,R=!1,P=null,N=null;r&&(T=s&&p.route.id?s[p.route.id]:void 0,P=p.route.errorElement||xA,o&&(l<0&&m===0?(_E("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),R=!0,N=null):l===m&&(R=!0,N=p.route.hydrateFallbackElement||null)));let v=e.concat(i.slice(0,m+1)),w=()=>{let E;return T?E=P:R?E=N:p.route.Component?E=b.createElement(p.route.Component,null):p.route.element?E=p.route.element:E=d,b.createElement(bA,{match:p,routeContext:{outlet:d,matches:v,isDataRoute:r!=null},children:E})};return r&&(p.route.ErrorBoundary||p.route.errorElement||m===0)?b.createElement(yE,{location:r.location,revalidation:r.revalidation,component:P,error:T,children:w(),routeContext:{outlet:null,matches:v,isDataRoute:!0},onError:c}):w()},null)}function Ff(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function LA(t){let e=b.useContext(ds);return we(e,Ff(t)),e}function OA(t){let e=b.useContext(xu);return we(e,Ff(t)),e}function VA(t){let e=b.useContext(gn);return we(e,Ff(t)),e}function Bf(t){let e=VA(t),n=e.matches[e.matches.length-1];return we(n.route.id,`${t} can only be used on routes that contain a unique "id"`),n.route.id}function MA(){return Bf("useRouteId")}function UA(){var r;let t=b.useContext(jf),e=OA("useRouteError"),n=Bf("useRouteError");return t!==void 0?t:(r=e.errors)==null?void 0:r[n]}function jA(){let{router:t}=LA("useNavigate"),e=Bf("useNavigate"),n=b.useRef(!1);return mE(()=>{n.current=!0}),b.useCallback(async(i,s={})=>{dn(n.current,pE),n.current&&(typeof i=="number"?await t.navigate(i):await t.navigate(i,{fromRouteId:e,...s}))},[t,e])}var hy={};function _E(t,e,n){!e&&!hy[t]&&(hy[t]=!0,dn(!1,n))}b.memo(FA);function FA({routes:t,manifest:e,future:n,state:r,isStatic:i,onError:s}){return gE(t,void 0,{manifest:e,state:r,isStatic:i,onError:s})}function Qs(t){we(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function BA({basename:t="/",children:e=null,location:n,navigationType:r="POP",navigator:i,static:s=!1,useTransitions:o}){we(!Yo(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let l=t.replace(/^\/*/,"/"),u=b.useMemo(()=>({basename:l,navigator:i,static:s,useTransitions:o,future:{}}),[l,i,s,o]);typeof n=="string"&&(n=hs(n));let{pathname:c="/",search:d="",hash:p="",state:m=null,key:T="default",mask:R}=n,P=b.useMemo(()=>{let N=jn(c,l);return N==null?null:{location:{pathname:N,search:d,hash:p,state:m,key:T,mask:R},navigationType:r}},[l,c,d,p,m,T,r,R]);return dn(P!=null,`<Router basename="${l}"> is not able to match the URL "${c}${d}${p}" because it does not start with the basename, so the <Router> won't render anything.`),P==null?null:b.createElement($t.Provider,{value:u},b.createElement(Xo.Provider,{children:e,value:P}))}function $A({children:t,location:e}){return PA(pd(t),e)}function pd(t,e=[]){let n=[];return b.Children.forEach(t,(r,i)=>{if(!b.isValidElement(r))return;let s=[...e,i];if(r.type===b.Fragment){n.push.apply(n,pd(r.props.children,s));return}we(r.type===Qs,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),we(!r.props.index||!r.props.children,"An index route cannot have child routes.");let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,middleware:r.props.middleware,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=pd(r.props.children,s)),n.push(o)}),n}var dl="get",fl="application/x-www-form-urlencoded";function Nu(t){return typeof HTMLElement<"u"&&t instanceof HTMLElement}function zA(t){return Nu(t)&&t.tagName.toLowerCase()==="button"}function HA(t){return Nu(t)&&t.tagName.toLowerCase()==="form"}function qA(t){return Nu(t)&&t.tagName.toLowerCase()==="input"}function WA(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function KA(t,e){return t.button===0&&(!e||e==="_self")&&!WA(t)}var Wa=null;function GA(){if(Wa===null)try{new FormData(document.createElement("form"),0),Wa=!1}catch{Wa=!0}return Wa}var QA=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function nh(t){return t!=null&&!QA.has(t)?(dn(!1,`"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${fl}"`),null):t}function XA(t,e){let n,r,i,s,o;if(HA(t)){let l=t.getAttribute("action");r=l?jn(l,e):null,n=t.getAttribute("method")||dl,i=nh(t.getAttribute("enctype"))||fl,s=new FormData(t)}else if(zA(t)||qA(t)&&(t.type==="submit"||t.type==="image")){let l=t.form;if(l==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let u=t.getAttribute("formaction")||l.getAttribute("action");if(r=u?jn(u,e):null,n=t.getAttribute("formmethod")||l.getAttribute("method")||dl,i=nh(t.getAttribute("formenctype"))||nh(l.getAttribute("enctype"))||fl,s=new FormData(l,t),!GA()){let{name:c,type:d,value:p}=t;if(d==="image"){let m=c?`${c}.`:"";s.append(`${m}x`,"0"),s.append(`${m}y`,"0")}else c&&s.append(c,p)}}else{if(Nu(t))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=dl,r=null,i=fl,o=t}return s&&i==="text/plain"&&(o=s,s=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:s,body:o}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function $f(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function vE(t,e,n,r){let i=typeof t=="string"?new URL(t,typeof window>"u"?"server://singlefetch/":window.location.origin):t;return n?i.pathname.endsWith("/")?i.pathname=`${i.pathname}_.${r}`:i.pathname=`${i.pathname}.${r}`:i.pathname==="/"?i.pathname=`_root.${r}`:e&&jn(i.pathname,e)==="/"?i.pathname=`${Gl(e)}/_root.${r}`:i.pathname=`${Gl(i.pathname)}.${r}`,i}async function YA(t,e){if(t.id in e)return e[t.id];try{let n=await import(t.module);return e[t.id]=n,n}catch(n){return console.error(`Error loading route module \`${t.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function JA(t){return t==null?!1:t.href==null?t.rel==="preload"&&typeof t.imageSrcSet=="string"&&typeof t.imageSizes=="string":typeof t.rel=="string"&&typeof t.href=="string"}async function ZA(t,e,n){let r=await Promise.all(t.map(async i=>{let s=e.routes[i.route.id];if(s){let o=await YA(s,n);return o.links?o.links():[]}return[]}));return rP(r.flat(1).filter(JA).filter(i=>i.rel==="stylesheet"||i.rel==="preload").map(i=>i.rel==="stylesheet"?{...i,rel:"prefetch",as:"style"}:{...i,rel:"prefetch"}))}function dy(t,e,n,r,i,s){let o=(u,c)=>n[c]?u.route.id!==n[c].route.id:!0,l=(u,c)=>{var d;return n[c].pathname!==u.pathname||((d=n[c].route.path)==null?void 0:d.endsWith("*"))&&n[c].params["*"]!==u.params["*"]};return s==="assets"?e.filter((u,c)=>o(u,c)||l(u,c)):s==="data"?e.filter((u,c)=>{var p;let d=r.routes[u.route.id];if(!d||!d.hasLoader)return!1;if(o(u,c)||l(u,c))return!0;if(u.route.shouldRevalidate){let m=u.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:((p=n[0])==null?void 0:p.params)||{},nextUrl:new URL(t,window.origin),nextParams:u.params,defaultShouldRevalidate:!0});if(typeof m=="boolean")return m}return!0}):[]}function eP(t,e,{includeHydrateFallback:n}={}){return tP(t.map(r=>{let i=e.routes[r.route.id];if(!i)return[];let s=[i.module];return i.clientActionModule&&(s=s.concat(i.clientActionModule)),i.clientLoaderModule&&(s=s.concat(i.clientLoaderModule)),n&&i.hydrateFallbackModule&&(s=s.concat(i.hydrateFallbackModule)),i.imports&&(s=s.concat(i.imports)),s}).flat(1))}function tP(t){return[...new Set(t)]}function nP(t){let e={},n=Object.keys(t).sort();for(let r of n)e[r]=t[r];return e}function rP(t,e){let n=new Set;return new Set(e),t.reduce((r,i)=>{let s=JSON.stringify(nP(i));return n.has(s)||(n.add(s),r.push({key:s,link:i})),r},[])}function zf(){let t=b.useContext(ds);return $f(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function iP(){let t=b.useContext(xu);return $f(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var Hf=b.createContext(void 0);Hf.displayName="FrameworkContext";function qf(){let t=b.useContext(Hf);return $f(t,"You must render this element inside a <HydratedRouter> element"),t}function sP(t,e){let n=b.useContext(Hf),[r,i]=b.useState(!1),[s,o]=b.useState(!1),{onFocus:l,onBlur:u,onMouseEnter:c,onMouseLeave:d,onTouchStart:p}=e,m=b.useRef(null);b.useEffect(()=>{if(t==="render"&&o(!0),t==="viewport"){let P=v=>{v.forEach(w=>{o(w.isIntersecting)})},N=new IntersectionObserver(P,{threshold:.5});return m.current&&N.observe(m.current),()=>{N.disconnect()}}},[t]),b.useEffect(()=>{if(r){let P=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(P)}}},[r]);let T=()=>{i(!0)},R=()=>{i(!1),o(!1)};return n?t!=="intent"?[s,m,{}]:[s,m,{onFocus:$s(l,T),onBlur:$s(u,R),onMouseEnter:$s(c,T),onMouseLeave:$s(d,R),onTouchStart:$s(p,T)}]:[!1,m,{}]}function $s(t,e){return n=>{t&&t(n),n.defaultPrevented||e(n)}}function oP({page:t,...e}){let n=_A(),{router:r}=zf(),i=b.useMemo(()=>rE(r.routes,t,r.basename),[r.routes,t,r.basename]);return i?n?b.createElement(lP,{page:t,matches:i,...e}):b.createElement(uP,{page:t,matches:i,...e}):null}function aP(t){let{manifest:e,routeModules:n}=qf(),[r,i]=b.useState([]);return b.useEffect(()=>{let s=!1;return ZA(t,e,n).then(o=>{s||i(o)}),()=>{s=!0}},[t,e,n]),r}function lP({page:t,matches:e,...n}){let r=Wn(),{future:i}=qf(),{basename:s}=zf(),o=b.useMemo(()=>{if(t===r.pathname+r.search+r.hash)return[];let l=vE(t,s,i.v8_trailingSlashAwareDataRequests,"rsc"),u=!1,c=[];for(let d of e)typeof d.route.shouldRevalidate=="function"?u=!0:c.push(d.route.id);return u&&c.length>0&&l.searchParams.set("_routes",c.join(",")),[l.pathname+l.search]},[s,i.v8_trailingSlashAwareDataRequests,t,r,e]);return b.createElement(b.Fragment,null,o.map(l=>b.createElement("link",{key:l,rel:"prefetch",as:"fetch",href:l,...n})))}function uP({page:t,matches:e,...n}){let r=Wn(),{future:i,manifest:s,routeModules:o}=qf(),{basename:l}=zf(),{loaderData:u,matches:c}=iP(),d=b.useMemo(()=>dy(t,e,c,s,r,"data"),[t,e,c,s,r]),p=b.useMemo(()=>dy(t,e,c,s,r,"assets"),[t,e,c,s,r]),m=b.useMemo(()=>{if(t===r.pathname+r.search+r.hash)return[];let P=new Set,N=!1;if(e.forEach(w=>{var C;let E=s.routes[w.route.id];!E||!E.hasLoader||(!d.some(V=>V.route.id===w.route.id)&&w.route.id in u&&((C=o[w.route.id])!=null&&C.shouldRevalidate)||E.hasClientLoader?N=!0:P.add(w.route.id))}),P.size===0)return[];let v=vE(t,l,i.v8_trailingSlashAwareDataRequests,"data");return N&&P.size>0&&v.searchParams.set("_routes",e.filter(w=>P.has(w.route.id)).map(w=>w.route.id).join(",")),[v.pathname+v.search]},[l,i.v8_trailingSlashAwareDataRequests,u,r,s,d,e,t,o]),T=b.useMemo(()=>eP(p,s),[p,s]),R=aP(p);return b.createElement(b.Fragment,null,m.map(P=>b.createElement("link",{key:P,rel:"prefetch",as:"fetch",href:P,...n})),T.map(P=>b.createElement("link",{key:P,rel:"modulepreload",href:P,...n})),R.map(({key:P,link:N})=>b.createElement("link",{key:P,nonce:n.nonce,...N,crossOrigin:N.crossOrigin??n.crossOrigin})))}function cP(...t){return e=>{t.forEach(n=>{typeof n=="function"?n(e):n!=null&&(n.current=e)})}}var hP=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{hP&&(window.__reactRouterVersion="7.16.0")}catch{}function dP({basename:t,children:e,useTransitions:n,window:r}){let i=b.useRef();i.current==null&&(i.current=Hk({window:r,v5Compat:!0}));let s=i.current,[o,l]=b.useState({action:s.action,location:s.location}),u=b.useCallback(c=>{n===!1?l(c):b.startTransition(()=>l(c))},[n]);return b.useLayoutEffect(()=>s.listen(u),[s,u]),b.createElement(BA,{basename:t,children:e,location:o.location,navigationType:o.action,navigator:s,useTransitions:n})}var wE=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,EE=b.forwardRef(function({onClick:e,discover:n="render",prefetch:r="none",relative:i,reloadDocument:s,replace:o,mask:l,state:u,target:c,to:d,preventScrollReset:p,viewTransition:m,defaultShouldRevalidate:T,...R},P){let{basename:N,navigator:v,useTransitions:w}=b.useContext($t),E=typeof d=="string"&&wE.test(d),C=uE(d,N);d=C.to;let V=RA(d,{relative:i}),M=Wn(),I=null;if(l){let Ke=Uf(l,[],M.mask?M.mask.pathname:"/",!0);N!=="/"&&(Ke.pathname=Ke.pathname==="/"?N:Yt([N,Ke.pathname])),I=v.createHref(Ke)}let[_,S,k]=sP(r,R),x=gP(d,{replace:o,mask:l,state:u,target:c,preventScrollReset:p,relative:i,viewTransition:m,defaultShouldRevalidate:T,useTransitions:w});function D(Ke){e&&e(Ke),Ke.defaultPrevented||x(Ke)}let A=!(C.isExternal||s),st=b.createElement("a",{...R,...k,href:(A?I:void 0)||C.absoluteURL||V,onClick:A?D:e,ref:cP(P,S),target:c,"data-discover":!E&&n==="render"?"true":void 0});return _&&!E?b.createElement(b.Fragment,null,st,b.createElement(oP,{page:V})):st});EE.displayName="Link";var fP=b.forwardRef(function({"aria-current":e="page",caseSensitive:n=!1,className:r="",end:i=!1,style:s,to:o,viewTransition:l,children:u,...c},d){let p=Jo(o,{relative:c.relative}),m=Wn(),T=b.useContext(xu),{navigator:R,basename:P}=b.useContext($t),N=T!=null&&EP(p)&&l===!0,v=R.encodeLocation?R.encodeLocation(p).pathname:p.pathname,w=m.pathname,E=T&&T.navigation&&T.navigation.location?T.navigation.location.pathname:null;n||(w=w.toLowerCase(),E=E?E.toLowerCase():null,v=v.toLowerCase()),E&&P&&(E=jn(E,P)||E);const C=v!=="/"&&v.endsWith("/")?v.length-1:v.length;let V=w===v||!i&&w.startsWith(v)&&w.charAt(C)==="/",M=E!=null&&(E===v||!i&&E.startsWith(v)&&E.charAt(v.length)==="/"),I={isActive:V,isPending:M,isTransitioning:N},_=V?e:void 0,S;typeof r=="function"?S=r(I):S=[r,V?"active":null,M?"pending":null,N?"transitioning":null].filter(Boolean).join(" ");let k=typeof s=="function"?s(I):s;return b.createElement(EE,{...c,"aria-current":_,className:S,ref:d,style:k,to:o,viewTransition:l},typeof u=="function"?u(I):u)});fP.displayName="NavLink";var pP=b.forwardRef(({discover:t="render",fetcherKey:e,navigate:n,reloadDocument:r,replace:i,state:s,method:o=dl,action:l,onSubmit:u,relative:c,preventScrollReset:d,viewTransition:p,defaultShouldRevalidate:m,...T},R)=>{let{useTransitions:P}=b.useContext($t),N=vP(),v=wP(l,{relative:c}),w=o.toLowerCase()==="get"?"get":"post",E=typeof l=="string"&&wE.test(l),C=V=>{if(u&&u(V),V.defaultPrevented)return;V.preventDefault();let M=V.nativeEvent.submitter,I=(M==null?void 0:M.getAttribute("formmethod"))||o,_=()=>N(M||V.currentTarget,{fetcherKey:e,method:I,navigate:n,replace:i,state:s,relative:c,preventScrollReset:d,viewTransition:p,defaultShouldRevalidate:m});P&&n!==!1?b.startTransition(()=>_()):_()};return b.createElement("form",{ref:R,method:w,action:v,onSubmit:r?u:C,...T,"data-discover":!E&&t==="render"?"true":void 0})});pP.displayName="Form";function mP(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function TE(t){let e=b.useContext(ds);return we(e,mP(t)),e}function gP(t,{target:e,replace:n,mask:r,state:i,preventScrollReset:s,relative:o,viewTransition:l,defaultShouldRevalidate:u,useTransitions:c}={}){let d=fs(),p=Wn(),m=Jo(t,{relative:o});return b.useCallback(T=>{if(KA(T,e)){T.preventDefault();let R=n!==void 0?n:Lo(p)===Lo(m),P=()=>d(t,{replace:R,mask:r,state:i,preventScrollReset:s,relative:o,viewTransition:l,defaultShouldRevalidate:u});c?b.startTransition(()=>P()):P()}},[p,d,m,n,r,i,e,t,s,o,l,u,c])}var yP=0,_P=()=>`__${String(++yP)}__`;function vP(){let{router:t}=TE("useSubmit"),{basename:e}=b.useContext($t),n=MA(),r=t.fetch,i=t.navigate;return b.useCallback(async(s,o={})=>{let{action:l,method:u,encType:c,formData:d,body:p}=XA(s,e);if(o.navigate===!1){let m=o.fetcherKey||_P();await r(m,n,o.action||l,{defaultShouldRevalidate:o.defaultShouldRevalidate,preventScrollReset:o.preventScrollReset,formData:d,body:p,formMethod:o.method||u,formEncType:o.encType||c,flushSync:o.flushSync})}else await i(o.action||l,{defaultShouldRevalidate:o.defaultShouldRevalidate,preventScrollReset:o.preventScrollReset,formData:d,body:p,formMethod:o.method||u,formEncType:o.encType||c,replace:o.replace,state:o.state,fromRouteId:n,flushSync:o.flushSync,viewTransition:o.viewTransition})},[r,i,e,n])}function wP(t,{relative:e}={}){let{basename:n}=b.useContext($t),r=b.useContext(gn);we(r,"useFormAction must be used inside a RouteContext");let[i]=r.matches.slice(-1),s={...Jo(t||".",{relative:e})},o=Wn();if(t==null){s.search=o.search;let l=new URLSearchParams(s.search),u=l.getAll("index");if(u.some(d=>d==="")){l.delete("index"),u.filter(p=>p).forEach(p=>l.append("index",p));let d=l.toString();s.search=d?`?${d}`:""}}return(!t||t===".")&&i.route.index&&(s.search=s.search?s.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(s.pathname=s.pathname==="/"?n:Yt([n,s.pathname])),Lo(s)}function EP(t,{relative:e}={}){let n=b.useContext(dE);we(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=TE("useViewTransitionState"),i=Jo(t,{relative:e});if(!n.isTransitioning)return!1;let s=jn(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=jn(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Kl(i.pathname,o)!=null||Kl(i.pathname,s)!=null}/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TP=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),IE=(...t)=>t.filter((e,n,r)=>!!e&&r.indexOf(e)===n).join(" ");/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var IP={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SP=b.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:s,iconNode:o,...l},u)=>b.createElement("svg",{ref:u,...IP,width:e,height:e,stroke:t,strokeWidth:r?Number(n)*24/Number(e):n,className:IE("lucide",i),...l},[...o.map(([c,d])=>b.createElement(c,d)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ft=(t,e)=>{const n=b.forwardRef(({className:r,...i},s)=>b.createElement(SP,{ref:s,iconNode:e,className:IE(`lucide-${TP(t)}`,r),...i}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wf=ft("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fy=ft("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RP=ft("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kP=ft("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kf=ft("CircleCheckBig",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SE=ft("CircleX",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AP=ft("Loader",[["path",{d:"M12 2v4",key:"3427ic"}],["path",{d:"m16.2 7.8 2.9-2.9",key:"r700ao"}],["path",{d:"M18 12h4",key:"wj9ykh"}],["path",{d:"m16.2 16.2 2.9 2.9",key:"1bxg5t"}],["path",{d:"M12 18v4",key:"jadmvz"}],["path",{d:"m4.9 19.1 2.9-2.9",key:"bwix9q"}],["path",{d:"M2 12h4",key:"j09sii"}],["path",{d:"m4.9 4.9 2.9 2.9",key:"giyufr"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const md=ft("Pen",[["path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",key:"5qss01"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RE=ft("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PP=ft("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CP=ft("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xP=ft("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const py=ft("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kE=ft("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AE=ft("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function Gf(){return g.jsxs("svg",{viewBox:"0 0 100 110",xmlns:"http://www.w3.org/2000/svg",width:"88",height:"100",children:[g.jsx("ellipse",{cx:"50",cy:"38",rx:"26",ry:"28",fill:"#c0622a"}),g.jsx("path",{d:"M72,52 Q85,60 80,80 Q75,88 68,82 Q74,68 68,55Z",fill:"#c0622a"}),g.jsx("rect",{x:"43",y:"62",width:"14",height:"12",rx:"5",fill:"#f5c5a3"}),g.jsx("ellipse",{cx:"50",cy:"42",rx:"22",ry:"24",fill:"#f5c5a3"}),g.jsx("path",{d:"M28,35 Q30,18 50,16 Q70,18 72,35 Q68,24 50,22 Q32,24 28,35Z",fill:"#c0622a"}),g.jsx("rect",{x:"68",y:"44",width:"7",height:"5",rx:"2",fill:"#a78bfa"}),g.jsx("circle",{cx:"41",cy:"42",r:"3",fill:"#fff"}),g.jsx("circle",{cx:"59",cy:"42",r:"3",fill:"#fff"}),g.jsx("circle",{cx:"42",cy:"42",r:"1.8",fill:"#3b2012"}),g.jsx("circle",{cx:"60",cy:"42",r:"1.8",fill:"#3b2012"}),g.jsx("path",{d:"M44,53 Q50,58 56,53",stroke:"#c0622a",strokeWidth:"1.5",fill:"none",strokeLinecap:"round"}),g.jsx("ellipse",{cx:"38",cy:"50",rx:"5",ry:"3",fill:"#f9a8d4",opacity:"0.5"}),g.jsx("ellipse",{cx:"62",cy:"50",rx:"5",ry:"3",fill:"#f9a8d4",opacity:"0.5"}),g.jsx("path",{d:"M20,110 Q22,74 50,72 Q78,74 80,110Z",fill:"#a78bfa"}),g.jsx("path",{d:"M44,72 L50,80 L56,72",fill:"#fff",opacity:"0.4"})]})}function Qf(){return g.jsxs("svg",{viewBox:"0 0 100 110",xmlns:"http://www.w3.org/2000/svg",width:"88",height:"100",children:[g.jsx("ellipse",{cx:"50",cy:"36",rx:"23",ry:"20",fill:"#7b4a1e"}),g.jsx("path",{d:"M27,36 Q28,20 50,17 Q72,20 73,36 Q66,24 50,22 Q34,24 27,36Z",fill:"#5c3510"}),g.jsx("rect",{x:"43",y:"62",width:"14",height:"12",rx:"5",fill:"#f5c5a3"}),g.jsx("ellipse",{cx:"50",cy:"42",rx:"22",ry:"24",fill:"#f5c5a3"}),g.jsx("ellipse",{cx:"28",cy:"44",rx:"4",ry:"5",fill:"#f5c5a3"}),g.jsx("ellipse",{cx:"72",cy:"44",rx:"4",ry:"5",fill:"#f5c5a3"}),g.jsx("circle",{cx:"41",cy:"42",r:"3",fill:"#fff"}),g.jsx("circle",{cx:"59",cy:"42",r:"3",fill:"#fff"}),g.jsx("circle",{cx:"42",cy:"42",r:"1.8",fill:"#3b2012"}),g.jsx("circle",{cx:"60",cy:"42",r:"1.8",fill:"#3b2012"}),g.jsx("path",{d:"M44,53 Q50,59 56,53",stroke:"#c0622a",strokeWidth:"1.5",fill:"none",strokeLinecap:"round"}),g.jsx("ellipse",{cx:"37",cy:"50",rx:"5",ry:"3",fill:"#fca5a5",opacity:"0.45"}),g.jsx("ellipse",{cx:"63",cy:"50",rx:"5",ry:"3",fill:"#fca5a5",opacity:"0.45"}),g.jsx("path",{d:"M18,110 Q20,74 50,72 Q80,74 82,110Z",fill:"#3b82f6"}),g.jsx("path",{d:"M43,72 L50,82 L57,72",fill:"#fff",opacity:"0.35"})]})}function my({player:t,loading:e}){const n=fs(),r=t.gender==="girl",i=()=>{!e&&t.id&&n(`/player/${t.id}`)};return g.jsxs("div",{className:`player-card ${r?"girl":"boy"} ${e?"":"clickable"}`,onClick:i,title:e?"":`View ${t.name}'s profile`,children:[g.jsx("div",{className:"player-card__name",children:e?g.jsx("span",{className:"skeleton-text"}):t.name}),g.jsxs("div",{className:"player-card__body",children:[g.jsx("div",{className:"player-card__avatar",children:e?g.jsx("div",{className:"avatar-skeleton"}):t.photoURL?g.jsx("img",{src:t.photoURL,alt:t.name,className:"player-photo",onError:s=>{s.target.style.display="none"}}):r?g.jsx(Gf,{}):g.jsx(Qf,{})}),g.jsxs("div",{className:"player-card__fields",children:[g.jsxs("div",{className:"field-row",children:[g.jsx("span",{className:"field-label",children:"ID :"}),g.jsx("span",{className:`field-value ${e?"skeleton":""}`,children:!e&&(t.playerId??"—")})]}),g.jsxs("div",{className:"field-row",children:[g.jsx("span",{className:"field-label",children:"Age :"}),g.jsx("span",{className:`field-value ${e?"skeleton":""}`,children:!e&&(t.age||"—")})]}),g.jsxs("div",{className:"field-row",children:[g.jsx("span",{className:"field-label",children:"School :"}),g.jsx("span",{className:`field-value ${e?"skeleton":""}`,children:!e&&(t.school||"—")})]}),g.jsxs("div",{className:"field-row",children:[g.jsx("span",{className:"field-label",children:"Level :"}),g.jsx("span",{className:`field-value ${e?"skeleton":""}`,children:!e&&(t.level||"—")})]})]})]}),!e&&g.jsx("div",{className:"card-arrow",children:"→"})]})}var gy={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},NP=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},CE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,d=s>>2,p=(s&3)<<4|l>>4;let m=(l&15)<<2|c>>6,T=c&63;u||(T=64,o||(m=64)),r.push(n[d],n[p],n[m],n[T])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(PE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):NP(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||c==null||p==null)throw new bP;const m=s<<2|l>>4;if(r.push(m),c!==64){const T=l<<4&240|c>>2;if(r.push(T),p!==64){const R=c<<6&192|p;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class bP extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const DP=function(t){const e=PE(t);return CE.encodeByteArray(e,!0)},Ql=function(t){return DP(t).replace(/\./g,"")},xE=function(t){try{return CE.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LP(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OP=()=>LP().__FIREBASE_DEFAULTS__,VP=()=>{if(typeof process>"u"||typeof gy>"u")return;const t=gy.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},MP=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&xE(t[1]);return e&&JSON.parse(e)},bu=()=>{try{return OP()||VP()||MP()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},NE=t=>{var e,n;return(n=(e=bu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},bE=t=>{const e=NE(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},DE=()=>{var t;return(t=bu())===null||t===void 0?void 0:t.config},LE=t=>{var e;return(e=bu())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UP{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OE(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Ql(JSON.stringify(n)),Ql(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function it(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function jP(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(it())}function FP(){var t;const e=(t=bu())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function BP(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function VE(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function $P(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function zP(){const t=it();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function HP(){return!FP()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function ME(){try{return typeof indexedDB=="object"}catch{return!1}}function UE(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function qP(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WP="FirebaseError";class zt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=WP,Object.setPrototypeOf(this,zt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ci.prototype.create)}}class ci{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?KP(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new zt(i,l,r)}}function KP(t,e){return t.replace(GP,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const GP=/\{\$([^}]+)}/g;function QP(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Oo(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(yy(s)&&yy(o)){if(!Oo(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function yy(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function XP(t,e){const n=new YP(t,e);return n.subscribe.bind(n)}class YP{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");JP(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=rh),i.error===void 0&&(i.error=rh),i.complete===void 0&&(i.complete=rh);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function JP(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function rh(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZP=1e3,eC=2,tC=4*60*60*1e3,nC=.5;function _y(t,e=ZP,n=eC){const r=e*Math.pow(n,t),i=Math.round(nC*r*(Math.random()-.5)*2);return Math.min(tC,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ne(t){return t&&t._delegate?t._delegate:t}class Bt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rC{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new UP;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(sC(e))try{this.getOrInitializeService({instanceIdentifier:jr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=jr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=jr){return this.instances.has(e)}getOptions(e=jr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:iC(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=jr){return this.component?this.component.multipleInstances?e:jr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function iC(t){return t===jr?void 0:t}function sC(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oC{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new rC(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(te||(te={}));const aC={debug:te.DEBUG,verbose:te.VERBOSE,info:te.INFO,warn:te.WARN,error:te.ERROR,silent:te.SILENT},lC=te.INFO,uC={[te.DEBUG]:"log",[te.VERBOSE]:"log",[te.INFO]:"info",[te.WARN]:"warn",[te.ERROR]:"error"},cC=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=uC[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Du{constructor(e){this.name=e,this._logLevel=lC,this._logHandler=cC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?aC[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,te.DEBUG,...e),this._logHandler(this,te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,te.VERBOSE,...e),this._logHandler(this,te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,te.INFO,...e),this._logHandler(this,te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,te.WARN,...e),this._logHandler(this,te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,te.ERROR,...e),this._logHandler(this,te.ERROR,...e)}}const hC=(t,e)=>e.some(n=>t instanceof n);let vy,wy;function dC(){return vy||(vy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function fC(){return wy||(wy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const jE=new WeakMap,gd=new WeakMap,FE=new WeakMap,ih=new WeakMap,Xf=new WeakMap;function pC(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(wr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&jE.set(n,t)}).catch(()=>{}),Xf.set(e,t),e}function mC(t){if(gd.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});gd.set(t,e)}let yd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return gd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||FE.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return wr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function gC(t){yd=t(yd)}function yC(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(sh(this),e,...n);return FE.set(r,e.sort?e.sort():[e]),wr(r)}:fC().includes(t)?function(...e){return t.apply(sh(this),e),wr(jE.get(this))}:function(...e){return wr(t.apply(sh(this),e))}}function _C(t){return typeof t=="function"?yC(t):(t instanceof IDBTransaction&&mC(t),hC(t,dC())?new Proxy(t,yd):t)}function wr(t){if(t instanceof IDBRequest)return pC(t);if(ih.has(t))return ih.get(t);const e=_C(t);return e!==t&&(ih.set(t,e),Xf.set(e,t)),e}const sh=t=>Xf.get(t);function BE(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=wr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(wr(o.result),u.oldVersion,u.newVersion,wr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const vC=["get","getKey","getAll","getAllKeys","count"],wC=["put","add","delete","clear"],oh=new Map;function Ey(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(oh.get(e))return oh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=wC.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||vC.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&u.done]))[0]};return oh.set(e,s),s}gC(t=>({...t,get:(e,n,r)=>Ey(e,n)||t.get(e,n,r),has:(e,n)=>!!Ey(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(TC(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function TC(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const _d="@firebase/app",Ty="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fn=new Du("@firebase/app"),IC="@firebase/app-compat",SC="@firebase/analytics-compat",RC="@firebase/analytics",kC="@firebase/app-check-compat",AC="@firebase/app-check",PC="@firebase/auth",CC="@firebase/auth-compat",xC="@firebase/database",NC="@firebase/data-connect",bC="@firebase/database-compat",DC="@firebase/functions",LC="@firebase/functions-compat",OC="@firebase/installations",VC="@firebase/installations-compat",MC="@firebase/messaging",UC="@firebase/messaging-compat",jC="@firebase/performance",FC="@firebase/performance-compat",BC="@firebase/remote-config",$C="@firebase/remote-config-compat",zC="@firebase/storage",HC="@firebase/storage-compat",qC="@firebase/firestore",WC="@firebase/vertexai-preview",KC="@firebase/firestore-compat",GC="firebase",QC="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vd="[DEFAULT]",XC={[_d]:"fire-core",[IC]:"fire-core-compat",[RC]:"fire-analytics",[SC]:"fire-analytics-compat",[AC]:"fire-app-check",[kC]:"fire-app-check-compat",[PC]:"fire-auth",[CC]:"fire-auth-compat",[xC]:"fire-rtdb",[NC]:"fire-data-connect",[bC]:"fire-rtdb-compat",[DC]:"fire-fn",[LC]:"fire-fn-compat",[OC]:"fire-iid",[VC]:"fire-iid-compat",[MC]:"fire-fcm",[UC]:"fire-fcm-compat",[jC]:"fire-perf",[FC]:"fire-perf-compat",[BC]:"fire-rc",[$C]:"fire-rc-compat",[zC]:"fire-gcs",[HC]:"fire-gcs-compat",[qC]:"fire-fst",[KC]:"fire-fst-compat",[WC]:"fire-vertex","fire-js":"fire-js",[GC]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xl=new Map,YC=new Map,wd=new Map;function Iy(t,e){try{t.container.addComponent(e)}catch(n){Fn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function en(t){const e=t.name;if(wd.has(e))return Fn.debug(`There were multiple attempts to register component ${e}.`),!1;wd.set(e,t);for(const n of Xl.values())Iy(n,t);for(const n of YC.values())Iy(n,t);return!0}function Nr(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function cr(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JC={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Er=new ci("app","Firebase",JC);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZC{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Bt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Er.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hi=QC;function $E(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:vd,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Er.create("bad-app-name",{appName:String(i)});if(n||(n=DE()),!n)throw Er.create("no-options");const s=Xl.get(i);if(s){if(Oo(n,s.options)&&Oo(r,s.config))return s;throw Er.create("duplicate-app",{appName:i})}const o=new oC(i);for(const u of wd.values())o.addComponent(u);const l=new ZC(n,r,o);return Xl.set(i,l),l}function Lu(t=vd){const e=Xl.get(t);if(!e&&t===vd&&DE())return $E();if(!e)throw Er.create("no-app",{appName:t});return e}function Et(t,e,n){var r;let i=(r=XC[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Fn.warn(l.join(" "));return}en(new Bt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e1="firebase-heartbeat-database",t1=1,Vo="firebase-heartbeat-store";let ah=null;function zE(){return ah||(ah=BE(e1,t1,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Vo)}catch(n){console.warn(n)}}}}).catch(t=>{throw Er.create("idb-open",{originalErrorMessage:t.message})})),ah}async function n1(t){try{const n=(await zE()).transaction(Vo),r=await n.objectStore(Vo).get(HE(t));return await n.done,r}catch(e){if(e instanceof zt)Fn.warn(e.message);else{const n=Er.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Fn.warn(n.message)}}}async function Sy(t,e){try{const r=(await zE()).transaction(Vo,"readwrite");await r.objectStore(Vo).put(e,HE(t)),await r.done}catch(n){if(n instanceof zt)Fn.warn(n.message);else{const r=Er.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Fn.warn(r.message)}}}function HE(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r1=1024,i1=30*24*60*60*1e3;class s1{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new a1(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Ry();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=i1}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Fn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ry(),{heartbeatsToSend:r,unsentEntries:i}=o1(this._heartbeatsCache.heartbeats),s=Ql(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Fn.warn(n),""}}}function Ry(){return new Date().toISOString().substring(0,10)}function o1(t,e=r1){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),ky(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ky(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class a1{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ME()?UE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await n1(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Sy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Sy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function ky(t){return Ql(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l1(t){en(new Bt("platform-logger",e=>new EC(e),"PRIVATE")),en(new Bt("heartbeat",e=>new s1(e),"PRIVATE")),Et(_d,Ty,t),Et(_d,Ty,"esm2017"),Et("fire-js","")}l1("");var Ay=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Kr,qE;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,_){function S(){}S.prototype=_.prototype,I.D=_.prototype,I.prototype=new S,I.prototype.constructor=I,I.C=function(k,x,D){for(var A=Array(arguments.length-2),st=2;st<arguments.length;st++)A[st-2]=arguments[st];return _.prototype[x].apply(k,A)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(I,_,S){S||(S=0);var k=Array(16);if(typeof _=="string")for(var x=0;16>x;++x)k[x]=_.charCodeAt(S++)|_.charCodeAt(S++)<<8|_.charCodeAt(S++)<<16|_.charCodeAt(S++)<<24;else for(x=0;16>x;++x)k[x]=_[S++]|_[S++]<<8|_[S++]<<16|_[S++]<<24;_=I.g[0],S=I.g[1],x=I.g[2];var D=I.g[3],A=_+(D^S&(x^D))+k[0]+3614090360&4294967295;_=S+(A<<7&4294967295|A>>>25),A=D+(x^_&(S^x))+k[1]+3905402710&4294967295,D=_+(A<<12&4294967295|A>>>20),A=x+(S^D&(_^S))+k[2]+606105819&4294967295,x=D+(A<<17&4294967295|A>>>15),A=S+(_^x&(D^_))+k[3]+3250441966&4294967295,S=x+(A<<22&4294967295|A>>>10),A=_+(D^S&(x^D))+k[4]+4118548399&4294967295,_=S+(A<<7&4294967295|A>>>25),A=D+(x^_&(S^x))+k[5]+1200080426&4294967295,D=_+(A<<12&4294967295|A>>>20),A=x+(S^D&(_^S))+k[6]+2821735955&4294967295,x=D+(A<<17&4294967295|A>>>15),A=S+(_^x&(D^_))+k[7]+4249261313&4294967295,S=x+(A<<22&4294967295|A>>>10),A=_+(D^S&(x^D))+k[8]+1770035416&4294967295,_=S+(A<<7&4294967295|A>>>25),A=D+(x^_&(S^x))+k[9]+2336552879&4294967295,D=_+(A<<12&4294967295|A>>>20),A=x+(S^D&(_^S))+k[10]+4294925233&4294967295,x=D+(A<<17&4294967295|A>>>15),A=S+(_^x&(D^_))+k[11]+2304563134&4294967295,S=x+(A<<22&4294967295|A>>>10),A=_+(D^S&(x^D))+k[12]+1804603682&4294967295,_=S+(A<<7&4294967295|A>>>25),A=D+(x^_&(S^x))+k[13]+4254626195&4294967295,D=_+(A<<12&4294967295|A>>>20),A=x+(S^D&(_^S))+k[14]+2792965006&4294967295,x=D+(A<<17&4294967295|A>>>15),A=S+(_^x&(D^_))+k[15]+1236535329&4294967295,S=x+(A<<22&4294967295|A>>>10),A=_+(x^D&(S^x))+k[1]+4129170786&4294967295,_=S+(A<<5&4294967295|A>>>27),A=D+(S^x&(_^S))+k[6]+3225465664&4294967295,D=_+(A<<9&4294967295|A>>>23),A=x+(_^S&(D^_))+k[11]+643717713&4294967295,x=D+(A<<14&4294967295|A>>>18),A=S+(D^_&(x^D))+k[0]+3921069994&4294967295,S=x+(A<<20&4294967295|A>>>12),A=_+(x^D&(S^x))+k[5]+3593408605&4294967295,_=S+(A<<5&4294967295|A>>>27),A=D+(S^x&(_^S))+k[10]+38016083&4294967295,D=_+(A<<9&4294967295|A>>>23),A=x+(_^S&(D^_))+k[15]+3634488961&4294967295,x=D+(A<<14&4294967295|A>>>18),A=S+(D^_&(x^D))+k[4]+3889429448&4294967295,S=x+(A<<20&4294967295|A>>>12),A=_+(x^D&(S^x))+k[9]+568446438&4294967295,_=S+(A<<5&4294967295|A>>>27),A=D+(S^x&(_^S))+k[14]+3275163606&4294967295,D=_+(A<<9&4294967295|A>>>23),A=x+(_^S&(D^_))+k[3]+4107603335&4294967295,x=D+(A<<14&4294967295|A>>>18),A=S+(D^_&(x^D))+k[8]+1163531501&4294967295,S=x+(A<<20&4294967295|A>>>12),A=_+(x^D&(S^x))+k[13]+2850285829&4294967295,_=S+(A<<5&4294967295|A>>>27),A=D+(S^x&(_^S))+k[2]+4243563512&4294967295,D=_+(A<<9&4294967295|A>>>23),A=x+(_^S&(D^_))+k[7]+1735328473&4294967295,x=D+(A<<14&4294967295|A>>>18),A=S+(D^_&(x^D))+k[12]+2368359562&4294967295,S=x+(A<<20&4294967295|A>>>12),A=_+(S^x^D)+k[5]+4294588738&4294967295,_=S+(A<<4&4294967295|A>>>28),A=D+(_^S^x)+k[8]+2272392833&4294967295,D=_+(A<<11&4294967295|A>>>21),A=x+(D^_^S)+k[11]+1839030562&4294967295,x=D+(A<<16&4294967295|A>>>16),A=S+(x^D^_)+k[14]+4259657740&4294967295,S=x+(A<<23&4294967295|A>>>9),A=_+(S^x^D)+k[1]+2763975236&4294967295,_=S+(A<<4&4294967295|A>>>28),A=D+(_^S^x)+k[4]+1272893353&4294967295,D=_+(A<<11&4294967295|A>>>21),A=x+(D^_^S)+k[7]+4139469664&4294967295,x=D+(A<<16&4294967295|A>>>16),A=S+(x^D^_)+k[10]+3200236656&4294967295,S=x+(A<<23&4294967295|A>>>9),A=_+(S^x^D)+k[13]+681279174&4294967295,_=S+(A<<4&4294967295|A>>>28),A=D+(_^S^x)+k[0]+3936430074&4294967295,D=_+(A<<11&4294967295|A>>>21),A=x+(D^_^S)+k[3]+3572445317&4294967295,x=D+(A<<16&4294967295|A>>>16),A=S+(x^D^_)+k[6]+76029189&4294967295,S=x+(A<<23&4294967295|A>>>9),A=_+(S^x^D)+k[9]+3654602809&4294967295,_=S+(A<<4&4294967295|A>>>28),A=D+(_^S^x)+k[12]+3873151461&4294967295,D=_+(A<<11&4294967295|A>>>21),A=x+(D^_^S)+k[15]+530742520&4294967295,x=D+(A<<16&4294967295|A>>>16),A=S+(x^D^_)+k[2]+3299628645&4294967295,S=x+(A<<23&4294967295|A>>>9),A=_+(x^(S|~D))+k[0]+4096336452&4294967295,_=S+(A<<6&4294967295|A>>>26),A=D+(S^(_|~x))+k[7]+1126891415&4294967295,D=_+(A<<10&4294967295|A>>>22),A=x+(_^(D|~S))+k[14]+2878612391&4294967295,x=D+(A<<15&4294967295|A>>>17),A=S+(D^(x|~_))+k[5]+4237533241&4294967295,S=x+(A<<21&4294967295|A>>>11),A=_+(x^(S|~D))+k[12]+1700485571&4294967295,_=S+(A<<6&4294967295|A>>>26),A=D+(S^(_|~x))+k[3]+2399980690&4294967295,D=_+(A<<10&4294967295|A>>>22),A=x+(_^(D|~S))+k[10]+4293915773&4294967295,x=D+(A<<15&4294967295|A>>>17),A=S+(D^(x|~_))+k[1]+2240044497&4294967295,S=x+(A<<21&4294967295|A>>>11),A=_+(x^(S|~D))+k[8]+1873313359&4294967295,_=S+(A<<6&4294967295|A>>>26),A=D+(S^(_|~x))+k[15]+4264355552&4294967295,D=_+(A<<10&4294967295|A>>>22),A=x+(_^(D|~S))+k[6]+2734768916&4294967295,x=D+(A<<15&4294967295|A>>>17),A=S+(D^(x|~_))+k[13]+1309151649&4294967295,S=x+(A<<21&4294967295|A>>>11),A=_+(x^(S|~D))+k[4]+4149444226&4294967295,_=S+(A<<6&4294967295|A>>>26),A=D+(S^(_|~x))+k[11]+3174756917&4294967295,D=_+(A<<10&4294967295|A>>>22),A=x+(_^(D|~S))+k[2]+718787259&4294967295,x=D+(A<<15&4294967295|A>>>17),A=S+(D^(x|~_))+k[9]+3951481745&4294967295,I.g[0]=I.g[0]+_&4294967295,I.g[1]=I.g[1]+(x+(A<<21&4294967295|A>>>11))&4294967295,I.g[2]=I.g[2]+x&4294967295,I.g[3]=I.g[3]+D&4294967295}r.prototype.u=function(I,_){_===void 0&&(_=I.length);for(var S=_-this.blockSize,k=this.B,x=this.h,D=0;D<_;){if(x==0)for(;D<=S;)i(this,I,D),D+=this.blockSize;if(typeof I=="string"){for(;D<_;)if(k[x++]=I.charCodeAt(D++),x==this.blockSize){i(this,k),x=0;break}}else for(;D<_;)if(k[x++]=I[D++],x==this.blockSize){i(this,k),x=0;break}}this.h=x,this.o+=_},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var _=1;_<I.length-8;++_)I[_]=0;var S=8*this.o;for(_=I.length-8;_<I.length;++_)I[_]=S&255,S/=256;for(this.u(I),I=Array(16),_=S=0;4>_;++_)for(var k=0;32>k;k+=8)I[S++]=this.g[_]>>>k&255;return I};function s(I,_){var S=l;return Object.prototype.hasOwnProperty.call(S,I)?S[I]:S[I]=_(I)}function o(I,_){this.h=_;for(var S=[],k=!0,x=I.length-1;0<=x;x--){var D=I[x]|0;k&&D==_||(S[x]=D,k=!1)}this.g=S}var l={};function u(I){return-128<=I&&128>I?s(I,function(_){return new o([_|0],0>_?-1:0)}):new o([I|0],0>I?-1:0)}function c(I){if(isNaN(I)||!isFinite(I))return p;if(0>I)return N(c(-I));for(var _=[],S=1,k=0;I>=S;k++)_[k]=I/S|0,S*=4294967296;return new o(_,0)}function d(I,_){if(I.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(I.charAt(0)=="-")return N(d(I.substring(1),_));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var S=c(Math.pow(_,8)),k=p,x=0;x<I.length;x+=8){var D=Math.min(8,I.length-x),A=parseInt(I.substring(x,x+D),_);8>D?(D=c(Math.pow(_,D)),k=k.j(D).add(c(A))):(k=k.j(S),k=k.add(c(A)))}return k}var p=u(0),m=u(1),T=u(16777216);t=o.prototype,t.m=function(){if(P(this))return-N(this).m();for(var I=0,_=1,S=0;S<this.g.length;S++){var k=this.i(S);I+=(0<=k?k:4294967296+k)*_,_*=4294967296}return I},t.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(R(this))return"0";if(P(this))return"-"+N(this).toString(I);for(var _=c(Math.pow(I,6)),S=this,k="";;){var x=C(S,_).g;S=v(S,x.j(_));var D=((0<S.g.length?S.g[0]:S.h)>>>0).toString(I);if(S=x,R(S))return D+k;for(;6>D.length;)D="0"+D;k=D+k}},t.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function R(I){if(I.h!=0)return!1;for(var _=0;_<I.g.length;_++)if(I.g[_]!=0)return!1;return!0}function P(I){return I.h==-1}t.l=function(I){return I=v(this,I),P(I)?-1:R(I)?0:1};function N(I){for(var _=I.g.length,S=[],k=0;k<_;k++)S[k]=~I.g[k];return new o(S,~I.h).add(m)}t.abs=function(){return P(this)?N(this):this},t.add=function(I){for(var _=Math.max(this.g.length,I.g.length),S=[],k=0,x=0;x<=_;x++){var D=k+(this.i(x)&65535)+(I.i(x)&65535),A=(D>>>16)+(this.i(x)>>>16)+(I.i(x)>>>16);k=A>>>16,D&=65535,A&=65535,S[x]=A<<16|D}return new o(S,S[S.length-1]&-2147483648?-1:0)};function v(I,_){return I.add(N(_))}t.j=function(I){if(R(this)||R(I))return p;if(P(this))return P(I)?N(this).j(N(I)):N(N(this).j(I));if(P(I))return N(this.j(N(I)));if(0>this.l(T)&&0>I.l(T))return c(this.m()*I.m());for(var _=this.g.length+I.g.length,S=[],k=0;k<2*_;k++)S[k]=0;for(k=0;k<this.g.length;k++)for(var x=0;x<I.g.length;x++){var D=this.i(k)>>>16,A=this.i(k)&65535,st=I.i(x)>>>16,Ke=I.i(x)&65535;S[2*k+2*x]+=A*Ke,w(S,2*k+2*x),S[2*k+2*x+1]+=D*Ke,w(S,2*k+2*x+1),S[2*k+2*x+1]+=A*st,w(S,2*k+2*x+1),S[2*k+2*x+2]+=D*st,w(S,2*k+2*x+2)}for(k=0;k<_;k++)S[k]=S[2*k+1]<<16|S[2*k];for(k=_;k<2*_;k++)S[k]=0;return new o(S,0)};function w(I,_){for(;(I[_]&65535)!=I[_];)I[_+1]+=I[_]>>>16,I[_]&=65535,_++}function E(I,_){this.g=I,this.h=_}function C(I,_){if(R(_))throw Error("division by zero");if(R(I))return new E(p,p);if(P(I))return _=C(N(I),_),new E(N(_.g),N(_.h));if(P(_))return _=C(I,N(_)),new E(N(_.g),_.h);if(30<I.g.length){if(P(I)||P(_))throw Error("slowDivide_ only works with positive integers.");for(var S=m,k=_;0>=k.l(I);)S=V(S),k=V(k);var x=M(S,1),D=M(k,1);for(k=M(k,2),S=M(S,2);!R(k);){var A=D.add(k);0>=A.l(I)&&(x=x.add(S),D=A),k=M(k,1),S=M(S,1)}return _=v(I,x.j(_)),new E(x,_)}for(x=p;0<=I.l(_);){for(S=Math.max(1,Math.floor(I.m()/_.m())),k=Math.ceil(Math.log(S)/Math.LN2),k=48>=k?1:Math.pow(2,k-48),D=c(S),A=D.j(_);P(A)||0<A.l(I);)S-=k,D=c(S),A=D.j(_);R(D)&&(D=m),x=x.add(D),I=v(I,A)}return new E(x,I)}t.A=function(I){return C(this,I).h},t.and=function(I){for(var _=Math.max(this.g.length,I.g.length),S=[],k=0;k<_;k++)S[k]=this.i(k)&I.i(k);return new o(S,this.h&I.h)},t.or=function(I){for(var _=Math.max(this.g.length,I.g.length),S=[],k=0;k<_;k++)S[k]=this.i(k)|I.i(k);return new o(S,this.h|I.h)},t.xor=function(I){for(var _=Math.max(this.g.length,I.g.length),S=[],k=0;k<_;k++)S[k]=this.i(k)^I.i(k);return new o(S,this.h^I.h)};function V(I){for(var _=I.g.length+1,S=[],k=0;k<_;k++)S[k]=I.i(k)<<1|I.i(k-1)>>>31;return new o(S,I.h)}function M(I,_){var S=_>>5;_%=32;for(var k=I.g.length-S,x=[],D=0;D<k;D++)x[D]=0<_?I.i(D+S)>>>_|I.i(D+S+1)<<32-_:I.i(D+S);return new o(x,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,qE=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=d,Kr=o}).apply(typeof Ay<"u"?Ay:typeof self<"u"?self:typeof window<"u"?window:{});var Ka=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var WE,Xs,KE,pl,Ed,GE,QE,XE;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,f){return a==Array.prototype||a==Object.prototype||(a[h]=f.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ka=="object"&&Ka];for(var h=0;h<a.length;++h){var f=a[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function i(a,h){if(h)e:{var f=r;a=a.split(".");for(var y=0;y<a.length-1;y++){var L=a[y];if(!(L in f))break e;f=f[L]}a=a[a.length-1],y=f[a],h=h(y),h!=y&&h!=null&&e(f,a,{configurable:!0,writable:!0,value:h})}}function s(a,h){a instanceof String&&(a+="");var f=0,y=!1,L={next:function(){if(!y&&f<a.length){var O=f++;return{value:h(O,a[O]),done:!1}}return y=!0,{done:!0,value:void 0}}};return L[Symbol.iterator]=function(){return L},L}i("Array.prototype.values",function(a){return a||function(){return s(this,function(h,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function c(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function d(a,h,f){return a.call.apply(a.bind,arguments)}function p(a,h,f){if(!a)throw Error();if(2<arguments.length){var y=Array.prototype.slice.call(arguments,2);return function(){var L=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(L,y),a.apply(h,L)}}return function(){return a.apply(h,arguments)}}function m(a,h,f){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,m.apply(null,arguments)}function T(a,h){var f=Array.prototype.slice.call(arguments,1);return function(){var y=f.slice();return y.push.apply(y,arguments),a.apply(this,y)}}function R(a,h){function f(){}f.prototype=h.prototype,a.aa=h.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(y,L,O){for(var B=Array(arguments.length-2),ue=2;ue<arguments.length;ue++)B[ue-2]=arguments[ue];return h.prototype[L].apply(y,B)}}function P(a){const h=a.length;if(0<h){const f=Array(h);for(let y=0;y<h;y++)f[y]=a[y];return f}return[]}function N(a,h){for(let f=1;f<arguments.length;f++){const y=arguments[f];if(u(y)){const L=a.length||0,O=y.length||0;a.length=L+O;for(let B=0;B<O;B++)a[L+B]=y[B]}else a.push(y)}}class v{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function w(a){return/^[\s\xa0]*$/.test(a)}function E(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function C(a){return C[" "](a),a}C[" "]=function(){};var V=E().indexOf("Gecko")!=-1&&!(E().toLowerCase().indexOf("webkit")!=-1&&E().indexOf("Edge")==-1)&&!(E().indexOf("Trident")!=-1||E().indexOf("MSIE")!=-1)&&E().indexOf("Edge")==-1;function M(a,h,f){for(const y in a)h.call(f,a[y],y,a)}function I(a,h){for(const f in a)h.call(void 0,a[f],f,a)}function _(a){const h={};for(const f in a)h[f]=a[f];return h}const S="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function k(a,h){let f,y;for(let L=1;L<arguments.length;L++){y=arguments[L];for(f in y)a[f]=y[f];for(let O=0;O<S.length;O++)f=S[O],Object.prototype.hasOwnProperty.call(y,f)&&(a[f]=y[f])}}function x(a){var h=1;a=a.split(":");const f=[];for(;0<h&&a.length;)f.push(a.shift()),h--;return a.length&&f.push(a.join(":")),f}function D(a){l.setTimeout(()=>{throw a},0)}function A(){var a=Q;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class st{constructor(){this.h=this.g=null}add(h,f){const y=Ke.get();y.set(h,f),this.h?this.h.next=y:this.g=y,this.h=y}}var Ke=new v(()=>new ws,a=>a.reset());class ws{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let _n,$=!1,Q=new st,J=()=>{const a=l.Promise.resolve(void 0);_n=()=>{a.then(ye)}};var ye=()=>{for(var a;a=A();){try{a.h.call(a.g)}catch(f){D(f)}var h=Ke;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}$=!1};function le(){this.s=this.s,this.C=this.C}le.prototype.s=!1,le.prototype.ma=function(){this.s||(this.s=!0,this.N())},le.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ke(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}ke.prototype.h=function(){this.defaultPrevented=!0};var vn=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};l.addEventListener("test",f,h),l.removeEventListener("test",f,h)}catch{}return a}();function wn(a,h){if(ke.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,y=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(V){e:{try{C(h.nodeName);var L=!0;break e}catch{}L=!1}L||(h=null)}}else f=="mouseover"?h=a.fromElement:f=="mouseout"&&(h=a.toElement);this.relatedTarget=h,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:En[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&wn.aa.h.call(this)}}R(wn,ke);var En={2:"touch",3:"pen",4:"mouse"};wn.prototype.h=function(){wn.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Tn="closure_listenable_"+(1e6*Math.random()|0),jI=0;function FI(a,h,f,y,L){this.listener=a,this.proxy=null,this.src=h,this.type=f,this.capture=!!y,this.ha=L,this.key=++jI,this.da=this.fa=!1}function ha(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function da(a){this.src=a,this.g={},this.h=0}da.prototype.add=function(a,h,f,y,L){var O=a.toString();a=this.g[O],a||(a=this.g[O]=[],this.h++);var B=oc(a,h,y,L);return-1<B?(h=a[B],f||(h.fa=!1)):(h=new FI(h,this.src,O,!!y,L),h.fa=f,a.push(h)),h};function sc(a,h){var f=h.type;if(f in a.g){var y=a.g[f],L=Array.prototype.indexOf.call(y,h,void 0),O;(O=0<=L)&&Array.prototype.splice.call(y,L,1),O&&(ha(h),a.g[f].length==0&&(delete a.g[f],a.h--))}}function oc(a,h,f,y){for(var L=0;L<a.length;++L){var O=a[L];if(!O.da&&O.listener==h&&O.capture==!!f&&O.ha==y)return L}return-1}var ac="closure_lm_"+(1e6*Math.random()|0),lc={};function Jp(a,h,f,y,L){if(Array.isArray(h)){for(var O=0;O<h.length;O++)Jp(a,h[O],f,y,L);return null}return f=tm(f),a&&a[Tn]?a.K(h,f,c(y)?!!y.capture:!1,L):BI(a,h,f,!1,y,L)}function BI(a,h,f,y,L,O){if(!h)throw Error("Invalid event type");var B=c(L)?!!L.capture:!!L,ue=cc(a);if(ue||(a[ac]=ue=new da(a)),f=ue.add(h,f,y,B,O),f.proxy)return f;if(y=$I(),f.proxy=y,y.src=a,y.listener=f,a.addEventListener)vn||(L=B),L===void 0&&(L=!1),a.addEventListener(h.toString(),y,L);else if(a.attachEvent)a.attachEvent(em(h.toString()),y);else if(a.addListener&&a.removeListener)a.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return f}function $I(){function a(f){return h.call(a.src,a.listener,f)}const h=zI;return a}function Zp(a,h,f,y,L){if(Array.isArray(h))for(var O=0;O<h.length;O++)Zp(a,h[O],f,y,L);else y=c(y)?!!y.capture:!!y,f=tm(f),a&&a[Tn]?(a=a.i,h=String(h).toString(),h in a.g&&(O=a.g[h],f=oc(O,f,y,L),-1<f&&(ha(O[f]),Array.prototype.splice.call(O,f,1),O.length==0&&(delete a.g[h],a.h--)))):a&&(a=cc(a))&&(h=a.g[h.toString()],a=-1,h&&(a=oc(h,f,y,L)),(f=-1<a?h[a]:null)&&uc(f))}function uc(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[Tn])sc(h.i,a);else{var f=a.type,y=a.proxy;h.removeEventListener?h.removeEventListener(f,y,a.capture):h.detachEvent?h.detachEvent(em(f),y):h.addListener&&h.removeListener&&h.removeListener(y),(f=cc(h))?(sc(f,a),f.h==0&&(f.src=null,h[ac]=null)):ha(a)}}}function em(a){return a in lc?lc[a]:lc[a]="on"+a}function zI(a,h){if(a.da)a=!0;else{h=new wn(h,this);var f=a.listener,y=a.ha||a.src;a.fa&&uc(a),a=f.call(y,h)}return a}function cc(a){return a=a[ac],a instanceof da?a:null}var hc="__closure_events_fn_"+(1e9*Math.random()>>>0);function tm(a){return typeof a=="function"?a:(a[hc]||(a[hc]=function(h){return a.handleEvent(h)}),a[hc])}function Ge(){le.call(this),this.i=new da(this),this.M=this,this.F=null}R(Ge,le),Ge.prototype[Tn]=!0,Ge.prototype.removeEventListener=function(a,h,f,y){Zp(this,a,h,f,y)};function ot(a,h){var f,y=a.F;if(y)for(f=[];y;y=y.F)f.push(y);if(a=a.M,y=h.type||h,typeof h=="string")h=new ke(h,a);else if(h instanceof ke)h.target=h.target||a;else{var L=h;h=new ke(y,a),k(h,L)}if(L=!0,f)for(var O=f.length-1;0<=O;O--){var B=h.g=f[O];L=fa(B,y,!0,h)&&L}if(B=h.g=a,L=fa(B,y,!0,h)&&L,L=fa(B,y,!1,h)&&L,f)for(O=0;O<f.length;O++)B=h.g=f[O],L=fa(B,y,!1,h)&&L}Ge.prototype.N=function(){if(Ge.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var f=a.g[h],y=0;y<f.length;y++)ha(f[y]);delete a.g[h],a.h--}}this.F=null},Ge.prototype.K=function(a,h,f,y){return this.i.add(String(a),h,!1,f,y)},Ge.prototype.L=function(a,h,f,y){return this.i.add(String(a),h,!0,f,y)};function fa(a,h,f,y){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var L=!0,O=0;O<h.length;++O){var B=h[O];if(B&&!B.da&&B.capture==f){var ue=B.listener,je=B.ha||B.src;B.fa&&sc(a.i,B),L=ue.call(je,y)!==!1&&L}}return L&&!y.defaultPrevented}function nm(a,h,f){if(typeof a=="function")f&&(a=m(a,f));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function rm(a){a.g=nm(()=>{a.g=null,a.i&&(a.i=!1,rm(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class HI extends le{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:rm(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Es(a){le.call(this),this.h=a,this.g={}}R(Es,le);var im=[];function sm(a){M(a.g,function(h,f){this.g.hasOwnProperty(f)&&uc(h)},a),a.g={}}Es.prototype.N=function(){Es.aa.N.call(this),sm(this)},Es.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var dc=l.JSON.stringify,qI=l.JSON.parse,WI=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function fc(){}fc.prototype.h=null;function om(a){return a.h||(a.h=a.i())}function am(){}var Ts={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function pc(){ke.call(this,"d")}R(pc,ke);function mc(){ke.call(this,"c")}R(mc,ke);var Dr={},lm=null;function pa(){return lm=lm||new Ge}Dr.La="serverreachability";function um(a){ke.call(this,Dr.La,a)}R(um,ke);function Is(a){const h=pa();ot(h,new um(h))}Dr.STAT_EVENT="statevent";function cm(a,h){ke.call(this,Dr.STAT_EVENT,a),this.stat=h}R(cm,ke);function at(a){const h=pa();ot(h,new cm(h,a))}Dr.Ma="timingevent";function hm(a,h){ke.call(this,Dr.Ma,a),this.size=h}R(hm,ke);function Ss(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function Rs(){this.g=!0}Rs.prototype.xa=function(){this.g=!1};function KI(a,h,f,y,L,O){a.info(function(){if(a.g)if(O)for(var B="",ue=O.split("&"),je=0;je<ue.length;je++){var ie=ue[je].split("=");if(1<ie.length){var Qe=ie[0];ie=ie[1];var Xe=Qe.split("_");B=2<=Xe.length&&Xe[1]=="type"?B+(Qe+"="+ie+"&"):B+(Qe+"=redacted&")}}else B=null;else B=O;return"XMLHTTP REQ ("+y+") [attempt "+L+"]: "+h+`
`+f+`
`+B})}function GI(a,h,f,y,L,O,B){a.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+L+"]: "+h+`
`+f+`
`+O+" "+B})}function pi(a,h,f,y){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+XI(a,f)+(y?" "+y:"")})}function QI(a,h){a.info(function(){return"TIMEOUT: "+h})}Rs.prototype.info=function(){};function XI(a,h){if(!a.g)return h;if(!h)return null;try{var f=JSON.parse(h);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var y=f[a];if(!(2>y.length)){var L=y[1];if(Array.isArray(L)&&!(1>L.length)){var O=L[0];if(O!="noop"&&O!="stop"&&O!="close")for(var B=1;B<L.length;B++)L[B]=""}}}}return dc(f)}catch{return h}}var ma={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},dm={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},gc;function ga(){}R(ga,fc),ga.prototype.g=function(){return new XMLHttpRequest},ga.prototype.i=function(){return{}},gc=new ga;function Kn(a,h,f,y){this.j=a,this.i=h,this.l=f,this.R=y||1,this.U=new Es(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new fm}function fm(){this.i=null,this.g="",this.h=!1}var pm={},yc={};function _c(a,h,f){a.L=1,a.v=wa(In(h)),a.m=f,a.P=!0,mm(a,null)}function mm(a,h){a.F=Date.now(),ya(a),a.A=In(a.v);var f=a.A,y=a.R;Array.isArray(y)||(y=[String(y)]),Cm(f.i,"t",y),a.C=0,f=a.j.J,a.h=new fm,a.g=Km(a.j,f?h:null,!a.m),0<a.O&&(a.M=new HI(m(a.Y,a,a.g),a.O)),h=a.U,f=a.g,y=a.ca;var L="readystatechange";Array.isArray(L)||(L&&(im[0]=L.toString()),L=im);for(var O=0;O<L.length;O++){var B=Jp(f,L[O],y||h.handleEvent,!1,h.h||h);if(!B)break;h.g[B.key]=B}h=a.H?_(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),Is(),KI(a.i,a.u,a.A,a.l,a.R,a.m)}Kn.prototype.ca=function(a){a=a.target;const h=this.M;h&&Sn(a)==3?h.j():this.Y(a)},Kn.prototype.Y=function(a){try{if(a==this.g)e:{const Xe=Sn(this.g);var h=this.g.Ba();const yi=this.g.Z();if(!(3>Xe)&&(Xe!=3||this.g&&(this.h.h||this.g.oa()||Vm(this.g)))){this.J||Xe!=4||h==7||(h==8||0>=yi?Is(3):Is(2)),vc(this);var f=this.g.Z();this.X=f;t:if(gm(this)){var y=Vm(this.g);a="";var L=y.length,O=Sn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Lr(this),ks(this);var B="";break t}this.h.i=new l.TextDecoder}for(h=0;h<L;h++)this.h.h=!0,a+=this.h.i.decode(y[h],{stream:!(O&&h==L-1)});y.length=0,this.h.g+=a,this.C=0,B=this.h.g}else B=this.g.oa();if(this.o=f==200,GI(this.i,this.u,this.A,this.l,this.R,Xe,f),this.o){if(this.T&&!this.K){t:{if(this.g){var ue,je=this.g;if((ue=je.g?je.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!w(ue)){var ie=ue;break t}}ie=null}if(f=ie)pi(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,wc(this,f);else{this.o=!1,this.s=3,at(12),Lr(this),ks(this);break e}}if(this.P){f=!0;let Ht;for(;!this.J&&this.C<B.length;)if(Ht=YI(this,B),Ht==yc){Xe==4&&(this.s=4,at(14),f=!1),pi(this.i,this.l,null,"[Incomplete Response]");break}else if(Ht==pm){this.s=4,at(15),pi(this.i,this.l,B,"[Invalid Chunk]"),f=!1;break}else pi(this.i,this.l,Ht,null),wc(this,Ht);if(gm(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Xe!=4||B.length!=0||this.h.h||(this.s=1,at(16),f=!1),this.o=this.o&&f,!f)pi(this.i,this.l,B,"[Invalid Chunked Response]"),Lr(this),ks(this);else if(0<B.length&&!this.W){this.W=!0;var Qe=this.j;Qe.g==this&&Qe.ba&&!Qe.M&&(Qe.j.info("Great, no buffering proxy detected. Bytes received: "+B.length),kc(Qe),Qe.M=!0,at(11))}}else pi(this.i,this.l,B,null),wc(this,B);Xe==4&&Lr(this),this.o&&!this.J&&(Xe==4?zm(this.j,this):(this.o=!1,ya(this)))}else pS(this.g),f==400&&0<B.indexOf("Unknown SID")?(this.s=3,at(12)):(this.s=0,at(13)),Lr(this),ks(this)}}}catch{}finally{}};function gm(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function YI(a,h){var f=a.C,y=h.indexOf(`
`,f);return y==-1?yc:(f=Number(h.substring(f,y)),isNaN(f)?pm:(y+=1,y+f>h.length?yc:(h=h.slice(y,y+f),a.C=y+f,h)))}Kn.prototype.cancel=function(){this.J=!0,Lr(this)};function ya(a){a.S=Date.now()+a.I,ym(a,a.I)}function ym(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Ss(m(a.ba,a),h)}function vc(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Kn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(QI(this.i,this.A),this.L!=2&&(Is(),at(17)),Lr(this),this.s=2,ks(this)):ym(this,this.S-a)};function ks(a){a.j.G==0||a.J||zm(a.j,a)}function Lr(a){vc(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,sm(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function wc(a,h){try{var f=a.j;if(f.G!=0&&(f.g==a||Ec(f.h,a))){if(!a.K&&Ec(f.h,a)&&f.G==3){try{var y=f.Da.g.parse(h)}catch{y=null}if(Array.isArray(y)&&y.length==3){var L=y;if(L[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)ka(f),Sa(f);else break e;Rc(f),at(18)}}else f.za=L[1],0<f.za-f.T&&37500>L[2]&&f.F&&f.v==0&&!f.C&&(f.C=Ss(m(f.Za,f),6e3));if(1>=wm(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else Vr(f,11)}else if((a.K||f.g==a)&&ka(f),!w(h))for(L=f.Da.g.parse(h),h=0;h<L.length;h++){let ie=L[h];if(f.T=ie[0],ie=ie[1],f.G==2)if(ie[0]=="c"){f.K=ie[1],f.ia=ie[2];const Qe=ie[3];Qe!=null&&(f.la=Qe,f.j.info("VER="+f.la));const Xe=ie[4];Xe!=null&&(f.Aa=Xe,f.j.info("SVER="+f.Aa));const yi=ie[5];yi!=null&&typeof yi=="number"&&0<yi&&(y=1.5*yi,f.L=y,f.j.info("backChannelRequestTimeoutMs_="+y)),y=f;const Ht=a.g;if(Ht){const Pa=Ht.g?Ht.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Pa){var O=y.h;O.g||Pa.indexOf("spdy")==-1&&Pa.indexOf("quic")==-1&&Pa.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(Tc(O,O.h),O.h=null))}if(y.D){const Ac=Ht.g?Ht.g.getResponseHeader("X-HTTP-Session-Id"):null;Ac&&(y.ya=Ac,he(y.I,y.D,Ac))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),y=f;var B=a;if(y.qa=Wm(y,y.J?y.ia:null,y.W),B.K){Em(y.h,B);var ue=B,je=y.L;je&&(ue.I=je),ue.B&&(vc(ue),ya(ue)),y.g=B}else Bm(y);0<f.i.length&&Ra(f)}else ie[0]!="stop"&&ie[0]!="close"||Vr(f,7);else f.G==3&&(ie[0]=="stop"||ie[0]=="close"?ie[0]=="stop"?Vr(f,7):Sc(f):ie[0]!="noop"&&f.l&&f.l.ta(ie),f.v=0)}}Is(4)}catch{}}var JI=class{constructor(a,h){this.g=a,this.map=h}};function _m(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function vm(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function wm(a){return a.h?1:a.g?a.g.size:0}function Ec(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function Tc(a,h){a.g?a.g.add(h):a.h=h}function Em(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}_m.prototype.cancel=function(){if(this.i=Tm(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Tm(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const f of a.g.values())h=h.concat(f.D);return h}return P(a.i)}function ZI(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var h=[],f=a.length,y=0;y<f;y++)h.push(a[y]);return h}h=[],f=0;for(y in a)h[f++]=a[y];return h}function eS(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var h=[];a=a.length;for(var f=0;f<a;f++)h.push(f);return h}h=[],f=0;for(const y in a)h[f++]=y;return h}}}function Im(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var f=eS(a),y=ZI(a),L=y.length,O=0;O<L;O++)h.call(void 0,y[O],f&&f[O],a)}var Sm=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function tS(a,h){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var y=a[f].indexOf("="),L=null;if(0<=y){var O=a[f].substring(0,y);L=a[f].substring(y+1)}else O=a[f];h(O,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function Or(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Or){this.h=a.h,_a(this,a.j),this.o=a.o,this.g=a.g,va(this,a.s),this.l=a.l;var h=a.i,f=new Cs;f.i=h.i,h.g&&(f.g=new Map(h.g),f.h=h.h),Rm(this,f),this.m=a.m}else a&&(h=String(a).match(Sm))?(this.h=!1,_a(this,h[1]||"",!0),this.o=As(h[2]||""),this.g=As(h[3]||"",!0),va(this,h[4]),this.l=As(h[5]||"",!0),Rm(this,h[6]||"",!0),this.m=As(h[7]||"")):(this.h=!1,this.i=new Cs(null,this.h))}Or.prototype.toString=function(){var a=[],h=this.j;h&&a.push(Ps(h,km,!0),":");var f=this.g;return(f||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Ps(h,km,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(Ps(f,f.charAt(0)=="/"?iS:rS,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",Ps(f,oS)),a.join("")};function In(a){return new Or(a)}function _a(a,h,f){a.j=f?As(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function va(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function Rm(a,h,f){h instanceof Cs?(a.i=h,aS(a.i,a.h)):(f||(h=Ps(h,sS)),a.i=new Cs(h,a.h))}function he(a,h,f){a.i.set(h,f)}function wa(a){return he(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function As(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Ps(a,h,f){return typeof a=="string"?(a=encodeURI(a).replace(h,nS),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function nS(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var km=/[#\/\?@]/g,rS=/[#\?:]/g,iS=/[#\?]/g,sS=/[#\?@]/g,oS=/#/g;function Cs(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Gn(a){a.g||(a.g=new Map,a.h=0,a.i&&tS(a.i,function(h,f){a.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}t=Cs.prototype,t.add=function(a,h){Gn(this),this.i=null,a=mi(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(h),this.h+=1,this};function Am(a,h){Gn(a),h=mi(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Pm(a,h){return Gn(a),h=mi(a,h),a.g.has(h)}t.forEach=function(a,h){Gn(this),this.g.forEach(function(f,y){f.forEach(function(L){a.call(h,L,y,this)},this)},this)},t.na=function(){Gn(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),f=[];for(let y=0;y<h.length;y++){const L=a[y];for(let O=0;O<L.length;O++)f.push(h[y])}return f},t.V=function(a){Gn(this);let h=[];if(typeof a=="string")Pm(this,a)&&(h=h.concat(this.g.get(mi(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)h=h.concat(a[f])}return h},t.set=function(a,h){return Gn(this),this.i=null,a=mi(this,a),Pm(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function Cm(a,h,f){Am(a,h),0<f.length&&(a.i=null,a.g.set(mi(a,h),P(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var f=0;f<h.length;f++){var y=h[f];const O=encodeURIComponent(String(y)),B=this.V(y);for(y=0;y<B.length;y++){var L=O;B[y]!==""&&(L+="="+encodeURIComponent(String(B[y]))),a.push(L)}}return this.i=a.join("&")};function mi(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function aS(a,h){h&&!a.j&&(Gn(a),a.i=null,a.g.forEach(function(f,y){var L=y.toLowerCase();y!=L&&(Am(this,y),Cm(this,L,f))},a)),a.j=h}function lS(a,h){const f=new Rs;if(l.Image){const y=new Image;y.onload=T(Qn,f,"TestLoadImage: loaded",!0,h,y),y.onerror=T(Qn,f,"TestLoadImage: error",!1,h,y),y.onabort=T(Qn,f,"TestLoadImage: abort",!1,h,y),y.ontimeout=T(Qn,f,"TestLoadImage: timeout",!1,h,y),l.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=a}else h(!1)}function uS(a,h){const f=new Rs,y=new AbortController,L=setTimeout(()=>{y.abort(),Qn(f,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:y.signal}).then(O=>{clearTimeout(L),O.ok?Qn(f,"TestPingServer: ok",!0,h):Qn(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(L),Qn(f,"TestPingServer: error",!1,h)})}function Qn(a,h,f,y,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),y(f)}catch{}}function cS(){this.g=new WI}function hS(a,h,f){const y=f||"";try{Im(a,function(L,O){let B=L;c(L)&&(B=dc(L)),h.push(y+O+"="+encodeURIComponent(B))})}catch(L){throw h.push(y+"type="+encodeURIComponent("_badmap")),L}}function Ea(a){this.l=a.Ub||null,this.j=a.eb||!1}R(Ea,fc),Ea.prototype.g=function(){return new Ta(this.l,this.j)},Ea.prototype.i=function(a){return function(){return a}}({});function Ta(a,h){Ge.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}R(Ta,Ge),t=Ta.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,Ns(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,xs(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Ns(this)),this.g&&(this.readyState=3,Ns(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;xm(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function xm(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?xs(this):Ns(this),this.readyState==3&&xm(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,xs(this))},t.Qa=function(a){this.g&&(this.response=a,xs(this))},t.ga=function(){this.g&&xs(this)};function xs(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Ns(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=h.next();return a.join(`\r
`)};function Ns(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Ta.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Nm(a){let h="";return M(a,function(f,y){h+=y,h+=":",h+=f,h+=`\r
`}),h}function Ic(a,h,f){e:{for(y in f){var y=!1;break e}y=!0}y||(f=Nm(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):he(a,h,f))}function Se(a){Ge.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}R(Se,Ge);var dS=/^https?$/i,fS=["POST","PUT"];t=Se.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,f,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():gc.g(),this.v=this.o?om(this.o):om(gc),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(O){bm(this,O);return}if(a=f||"",f=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var L in y)f.set(L,y[L]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const O of y.keys())f.set(O,y.get(O));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(f.keys()).find(O=>O.toLowerCase()=="content-type"),L=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(fS,h,void 0))||y||L||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,B]of f)this.g.setRequestHeader(O,B);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Om(this),this.u=!0,this.g.send(a),this.u=!1}catch(O){bm(this,O)}};function bm(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,Dm(a),Ia(a)}function Dm(a){a.A||(a.A=!0,ot(a,"complete"),ot(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,ot(this,"complete"),ot(this,"abort"),Ia(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ia(this,!0)),Se.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Lm(this):this.bb())},t.bb=function(){Lm(this)};function Lm(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Sn(a)!=4||a.Z()!=2)){if(a.u&&Sn(a)==4)nm(a.Ea,0,a);else if(ot(a,"readystatechange"),Sn(a)==4){a.h=!1;try{const B=a.Z();e:switch(B){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var y;if(y=B===0){var L=String(a.D).match(Sm)[1]||null;!L&&l.self&&l.self.location&&(L=l.self.location.protocol.slice(0,-1)),y=!dS.test(L?L.toLowerCase():"")}f=y}if(f)ot(a,"complete"),ot(a,"success");else{a.m=6;try{var O=2<Sn(a)?a.g.statusText:""}catch{O=""}a.l=O+" ["+a.Z()+"]",Dm(a)}}finally{Ia(a)}}}}function Ia(a,h){if(a.g){Om(a);const f=a.g,y=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||ot(a,"ready");try{f.onreadystatechange=y}catch{}}}function Om(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function Sn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<Sn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),qI(h)}};function Vm(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function pS(a){const h={};a=(a.g&&2<=Sn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<a.length;y++){if(w(a[y]))continue;var f=x(a[y]);const L=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const O=h[L]||[];h[L]=O,O.push(f)}I(h,function(y){return y.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function bs(a,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||h}function Mm(a){this.Aa=0,this.i=[],this.j=new Rs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=bs("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=bs("baseRetryDelayMs",5e3,a),this.cb=bs("retryDelaySeedMs",1e4,a),this.Wa=bs("forwardChannelMaxRetries",2,a),this.wa=bs("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new _m(a&&a.concurrentRequestLimit),this.Da=new cS,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Mm.prototype,t.la=8,t.G=1,t.connect=function(a,h,f,y){at(0),this.W=a,this.H=h||{},f&&y!==void 0&&(this.H.OSID=f,this.H.OAID=y),this.F=this.X,this.I=Wm(this,null,this.W),Ra(this)};function Sc(a){if(Um(a),a.G==3){var h=a.U++,f=In(a.I);if(he(f,"SID",a.K),he(f,"RID",h),he(f,"TYPE","terminate"),Ds(a,f),h=new Kn(a,a.j,h),h.L=2,h.v=wa(In(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=h.v,f=!0),f||(h.g=Km(h.j,null),h.g.ea(h.v)),h.F=Date.now(),ya(h)}qm(a)}function Sa(a){a.g&&(kc(a),a.g.cancel(),a.g=null)}function Um(a){Sa(a),a.u&&(l.clearTimeout(a.u),a.u=null),ka(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Ra(a){if(!vm(a.h)&&!a.s){a.s=!0;var h=a.Ga;_n||J(),$||(_n(),$=!0),Q.add(h,a),a.B=0}}function mS(a,h){return wm(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Ss(m(a.Ga,a,h),Hm(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const L=new Kn(this,this.j,a);let O=this.o;if(this.S&&(O?(O=_(O),k(O,this.S)):O=this.S),this.m!==null||this.O||(L.H=O,O=null),this.P)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var y=this.i[f];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(h+=y,4096<h){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=Fm(this,L,h),f=In(this.I),he(f,"RID",a),he(f,"CVER",22),this.D&&he(f,"X-HTTP-Session-Id",this.D),Ds(this,f),O&&(this.O?h="headers="+encodeURIComponent(String(Nm(O)))+"&"+h:this.m&&Ic(f,this.m,O)),Tc(this.h,L),this.Ua&&he(f,"TYPE","init"),this.P?(he(f,"$req",h),he(f,"SID","null"),L.T=!0,_c(L,f,null)):_c(L,f,h),this.G=2}}else this.G==3&&(a?jm(this,a):this.i.length==0||vm(this.h)||jm(this))};function jm(a,h){var f;h?f=h.l:f=a.U++;const y=In(a.I);he(y,"SID",a.K),he(y,"RID",f),he(y,"AID",a.T),Ds(a,y),a.m&&a.o&&Ic(y,a.m,a.o),f=new Kn(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),h&&(a.i=h.D.concat(a.i)),h=Fm(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Tc(a.h,f),_c(f,y,h)}function Ds(a,h){a.H&&M(a.H,function(f,y){he(h,y,f)}),a.l&&Im({},function(f,y){he(h,y,f)})}function Fm(a,h,f){f=Math.min(a.i.length,f);var y=a.l?m(a.l.Na,a.l,a):null;e:{var L=a.i;let O=-1;for(;;){const B=["count="+f];O==-1?0<f?(O=L[0].g,B.push("ofs="+O)):O=0:B.push("ofs="+O);let ue=!0;for(let je=0;je<f;je++){let ie=L[je].g;const Qe=L[je].map;if(ie-=O,0>ie)O=Math.max(0,L[je].g-100),ue=!1;else try{hS(Qe,B,"req"+ie+"_")}catch{y&&y(Qe)}}if(ue){y=B.join("&");break e}}}return a=a.i.splice(0,f),h.D=a,y}function Bm(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;_n||J(),$||(_n(),$=!0),Q.add(h,a),a.v=0}}function Rc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Ss(m(a.Fa,a),Hm(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,$m(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Ss(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,at(10),Sa(this),$m(this))};function kc(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function $m(a){a.g=new Kn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=In(a.qa);he(h,"RID","rpc"),he(h,"SID",a.K),he(h,"AID",a.T),he(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&he(h,"TO",a.ja),he(h,"TYPE","xmlhttp"),Ds(a,h),a.m&&a.o&&Ic(h,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=wa(In(h)),f.m=null,f.P=!0,mm(f,a)}t.Za=function(){this.C!=null&&(this.C=null,Sa(this),Rc(this),at(19))};function ka(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function zm(a,h){var f=null;if(a.g==h){ka(a),kc(a),a.g=null;var y=2}else if(Ec(a.h,h))f=h.D,Em(a.h,h),y=1;else return;if(a.G!=0){if(h.o)if(y==1){f=h.m?h.m.length:0,h=Date.now()-h.F;var L=a.B;y=pa(),ot(y,new hm(y,f)),Ra(a)}else Bm(a);else if(L=h.s,L==3||L==0&&0<h.X||!(y==1&&mS(a,h)||y==2&&Rc(a)))switch(f&&0<f.length&&(h=a.h,h.i=h.i.concat(f)),L){case 1:Vr(a,5);break;case 4:Vr(a,10);break;case 3:Vr(a,6);break;default:Vr(a,2)}}}function Hm(a,h){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*h}function Vr(a,h){if(a.j.info("Error code "+h),h==2){var f=m(a.fb,a),y=a.Xa;const L=!y;y=new Or(y||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||_a(y,"https"),wa(y),L?lS(y.toString(),f):uS(y.toString(),f)}else at(2);a.G=0,a.l&&a.l.sa(h),qm(a),Um(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),at(2)):(this.j.info("Failed to ping google.com"),at(1))};function qm(a){if(a.G=0,a.ka=[],a.l){const h=Tm(a.h);(h.length!=0||a.i.length!=0)&&(N(a.ka,h),N(a.ka,a.i),a.h.i.length=0,P(a.i),a.i.length=0),a.l.ra()}}function Wm(a,h,f){var y=f instanceof Or?In(f):new Or(f);if(y.g!="")h&&(y.g=h+"."+y.g),va(y,y.s);else{var L=l.location;y=L.protocol,h=h?h+"."+L.hostname:L.hostname,L=+L.port;var O=new Or(null);y&&_a(O,y),h&&(O.g=h),L&&va(O,L),f&&(O.l=f),y=O}return f=a.D,h=a.ya,f&&h&&he(y,f,h),he(y,"VER",a.la),Ds(a,y),y}function Km(a,h,f){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new Se(new Ea({eb:f})):new Se(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Gm(){}t=Gm.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Aa(){}Aa.prototype.g=function(a,h){return new St(a,h)};function St(a,h){Ge.call(this),this.g=new Mm(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!w(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!w(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new gi(this)}R(St,Ge),St.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},St.prototype.close=function(){Sc(this.g)},St.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=dc(a),a=f);h.i.push(new JI(h.Ya++,a)),h.G==3&&Ra(h)},St.prototype.N=function(){this.g.l=null,delete this.j,Sc(this.g),delete this.g,St.aa.N.call(this)};function Qm(a){pc.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const f in h){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}R(Qm,pc);function Xm(){mc.call(this),this.status=1}R(Xm,mc);function gi(a){this.g=a}R(gi,Gm),gi.prototype.ua=function(){ot(this.g,"a")},gi.prototype.ta=function(a){ot(this.g,new Qm(a))},gi.prototype.sa=function(a){ot(this.g,new Xm)},gi.prototype.ra=function(){ot(this.g,"b")},Aa.prototype.createWebChannel=Aa.prototype.g,St.prototype.send=St.prototype.o,St.prototype.open=St.prototype.m,St.prototype.close=St.prototype.close,XE=function(){return new Aa},QE=function(){return pa()},GE=Dr,Ed={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ma.NO_ERROR=0,ma.TIMEOUT=8,ma.HTTP_ERROR=6,pl=ma,dm.COMPLETE="complete",KE=dm,am.EventType=Ts,Ts.OPEN="a",Ts.CLOSE="b",Ts.ERROR="c",Ts.MESSAGE="d",Ge.prototype.listen=Ge.prototype.K,Xs=am,Se.prototype.listenOnce=Se.prototype.L,Se.prototype.getLastError=Se.prototype.Ka,Se.prototype.getLastErrorCode=Se.prototype.Ba,Se.prototype.getStatus=Se.prototype.Z,Se.prototype.getResponseJson=Se.prototype.Oa,Se.prototype.getResponseText=Se.prototype.oa,Se.prototype.send=Se.prototype.ea,Se.prototype.setWithCredentials=Se.prototype.Ha,WE=Se}).apply(typeof Ka<"u"?Ka:typeof self<"u"?self:typeof window<"u"?window:{});const Py="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}et.UNAUTHENTICATED=new et(null),et.GOOGLE_CREDENTIALS=new et("google-credentials-uid"),et.FIRST_PARTY=new et("first-party-uid"),et.MOCK_USER=new et("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ps="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ti=new Du("@firebase/firestore");function zs(){return ti.logLevel}function H(t,...e){if(ti.logLevel<=te.DEBUG){const n=e.map(Yf);ti.debug(`Firestore (${ps}): ${t}`,...n)}}function Bn(t,...e){if(ti.logLevel<=te.ERROR){const n=e.map(Yf);ti.error(`Firestore (${ps}): ${t}`,...n)}}function es(t,...e){if(ti.logLevel<=te.WARN){const n=e.map(Yf);ti.warn(`Firestore (${ps}): ${t}`,...n)}}function Yf(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(t="Unexpected state"){const e=`FIRESTORE (${ps}) INTERNAL ASSERTION FAILED: `+t;throw Bn(e),new Error(e)}function ae(t,e){t||G()}function Y(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class q extends zt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YE{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class u1{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(et.UNAUTHENTICATED))}shutdown(){}}class c1{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class h1{constructor(e){this.t=e,this.currentUser=et.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ae(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Dn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Dn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Dn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ae(typeof r.accessToken=="string"),new YE(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ae(e===null||typeof e=="string"),new et(e)}}class d1{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=et.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class f1{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new d1(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(et.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class p1{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class m1{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){ae(this.o===void 0);const r=s=>{s.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,H("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ae(typeof n.token=="string"),this.R=n.token,new p1(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g1(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JE{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=g1(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function se(t,e){return t<e?-1:t>e?1:0}function ts(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new q(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new q(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new q(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new q(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Oe.fromMillis(Date.now())}static fromDate(e){return Oe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Oe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?se(this.nanoseconds,e.nanoseconds):se(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.timestamp=e}static fromTimestamp(e){return new X(e)}static min(){return new X(new Oe(0,0))}static max(){return new X(new Oe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{constructor(e,n,r){n===void 0?n=0:n>e.length&&G(),r===void 0?r=e.length-n:r>e.length-n&&G(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Mo.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Mo?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ge extends Mo{construct(e,n,r){return new ge(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new q(U.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ge(n)}static emptyPath(){return new ge([])}}const y1=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class $e extends Mo{construct(e,n,r){return new $e(e,n,r)}static isValidIdentifier(e){return y1.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),$e.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new $e(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new q(U.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new q(U.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new q(U.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new q(U.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new $e(n)}static emptyPath(){return new $e([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e){this.path=e}static fromPath(e){return new W(ge.fromString(e))}static fromName(e){return new W(ge.fromString(e).popFirst(5))}static empty(){return new W(ge.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ge.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ge.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new W(new ge(e.slice()))}}function _1(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=X.fromTimestamp(r===1e9?new Oe(n+1,0):new Oe(n,r));return new Rr(i,W.empty(),e)}function v1(t){return new Rr(t.readTime,t.key,-1)}class Rr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Rr(X.min(),W.empty(),-1)}static max(){return new Rr(X.max(),W.empty(),-1)}}function w1(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=W.comparator(t.documentKey,e.documentKey),n!==0?n:se(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E1="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class T1{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ea(t){if(t.code!==U.FAILED_PRECONDITION||t.message!==E1)throw t;H("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&G(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new j((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof j?n:j.resolve(n)}catch(n){return j.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):j.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):j.reject(n)}static resolve(e){return new j((n,r)=>{n(e)})}static reject(e){return new j((n,r)=>{r(e)})}static waitFor(e){return new j((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=j.resolve(!1);for(const r of e)n=n.next(i=>i?j.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new j((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(d=>{o[c]=d,++l,l===s&&r(o)},d=>i(d))}})}static doWhile(e,n){return new j((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function I1(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function ta(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jf{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Jf.oe=-1;function Ou(t){return t==null}function Yl(t){return t===0&&1/t==-1/0}function S1(t){return typeof t=="number"&&Number.isInteger(t)&&!Yl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cy(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function di(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function ZE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(e,n){this.comparator=e,this.root=n||Be.EMPTY}insert(e,n){return new Te(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Be.BLACK,null,null))}remove(e){return new Te(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Be.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ga(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ga(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ga(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ga(this.root,e,this.comparator,!0)}}class Ga{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Be{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Be.RED,this.left=i??Be.EMPTY,this.right=s??Be.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Be(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Be.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Be.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Be.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Be.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw G();const e=this.left.check();if(e!==this.right.check())throw G();return e+(this.isRed()?0:1)}}Be.EMPTY=null,Be.RED=!0,Be.BLACK=!1;Be.EMPTY=new class{constructor(){this.size=0}get key(){throw G()}get value(){throw G()}get color(){throw G()}get left(){throw G()}get right(){throw G()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Be(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e){this.comparator=e,this.data=new Te(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new xy(this.data.getIterator())}getIteratorFrom(e){return new xy(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof He)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new He(this.comparator);return n.data=e,n}}class xy{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e){this.fields=e,e.sort($e.comparator)}static empty(){return new At([])}unionWith(e){let n=new He($e.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new At(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ts(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new e0("Invalid base64 string: "+s):s}}(e);return new We(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new We(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return se(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}We.EMPTY_BYTE_STRING=new We("");const R1=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function kr(t){if(ae(!!t),typeof t=="string"){let e=0;const n=R1.exec(t);if(ae(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ae(t.seconds),nanos:Ae(t.nanos)}}function Ae(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ni(t){return typeof t=="string"?We.fromBase64String(t):We.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zf(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function ep(t){const e=t.mapValue.fields.__previous_value__;return Zf(e)?ep(e):e}function Uo(t){const e=kr(t.mapValue.fields.__local_write_time__.timestampValue);return new Oe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k1{constructor(e,n,r,i,s,o,l,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c}}class jo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new jo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof jo&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qa={mapValue:{}};function ri(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Zf(t)?4:P1(t)?9007199254740991:A1(t)?10:11:G()}function fn(t,e){if(t===e)return!0;const n=ri(t);if(n!==ri(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Uo(t).isEqual(Uo(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=kr(i.timestampValue),l=kr(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return ni(i.bytesValue).isEqual(ni(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Ae(i.geoPointValue.latitude)===Ae(s.geoPointValue.latitude)&&Ae(i.geoPointValue.longitude)===Ae(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Ae(i.integerValue)===Ae(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Ae(i.doubleValue),l=Ae(s.doubleValue);return o===l?Yl(o)===Yl(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return ts(t.arrayValue.values||[],e.arrayValue.values||[],fn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(Cy(o)!==Cy(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!fn(o[u],l[u])))return!1;return!0}(t,e);default:return G()}}function Fo(t,e){return(t.values||[]).find(n=>fn(n,e))!==void 0}function ns(t,e){if(t===e)return 0;const n=ri(t),r=ri(e);if(n!==r)return se(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return se(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=Ae(s.integerValue||s.doubleValue),u=Ae(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return Ny(t.timestampValue,e.timestampValue);case 4:return Ny(Uo(t),Uo(e));case 5:return se(t.stringValue,e.stringValue);case 6:return function(s,o){const l=ni(s),u=ni(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const d=se(l[c],u[c]);if(d!==0)return d}return se(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=se(Ae(s.latitude),Ae(o.latitude));return l!==0?l:se(Ae(s.longitude),Ae(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return by(t.arrayValue,e.arrayValue);case 10:return function(s,o){var l,u,c,d;const p=s.fields||{},m=o.fields||{},T=(l=p.value)===null||l===void 0?void 0:l.arrayValue,R=(u=m.value)===null||u===void 0?void 0:u.arrayValue,P=se(((c=T==null?void 0:T.values)===null||c===void 0?void 0:c.length)||0,((d=R==null?void 0:R.values)===null||d===void 0?void 0:d.length)||0);return P!==0?P:by(T,R)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===Qa.mapValue&&o===Qa.mapValue)return 0;if(s===Qa.mapValue)return 1;if(o===Qa.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),c=o.fields||{},d=Object.keys(c);u.sort(),d.sort();for(let p=0;p<u.length&&p<d.length;++p){const m=se(u[p],d[p]);if(m!==0)return m;const T=ns(l[u[p]],c[d[p]]);if(T!==0)return T}return se(u.length,d.length)}(t.mapValue,e.mapValue);default:throw G()}}function Ny(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return se(t,e);const n=kr(t),r=kr(e),i=se(n.seconds,r.seconds);return i!==0?i:se(n.nanos,r.nanos)}function by(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=ns(n[i],r[i]);if(s)return s}return se(n.length,r.length)}function rs(t){return Td(t)}function Td(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=kr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return ni(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return W.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Td(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Td(n.fields[o])}`;return i+"}"}(t.mapValue):G()}function Id(t){return!!t&&"integerValue"in t}function tp(t){return!!t&&"arrayValue"in t}function Dy(t){return!!t&&"nullValue"in t}function Ly(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ml(t){return!!t&&"mapValue"in t}function A1(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function uo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return di(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=uo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=uo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function P1(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e){this.value=e}static empty(){return new gt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!ml(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=uo(n)}setAll(e){let n=$e.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=uo(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());ml(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return fn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];ml(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){di(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new gt(uo(this.value))}}function t0(t){const e=[];return di(t.fields,(n,r)=>{const i=new $e([n]);if(ml(r)){const s=t0(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new At(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new nt(e,0,X.min(),X.min(),X.min(),gt.empty(),0)}static newFoundDocument(e,n,r,i){return new nt(e,1,n,X.min(),r,i,0)}static newNoDocument(e,n){return new nt(e,2,n,X.min(),X.min(),gt.empty(),0)}static newUnknownDocument(e,n){return new nt(e,3,n,X.min(),X.min(),gt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(X.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=gt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=gt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=X.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof nt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new nt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl{constructor(e,n){this.position=e,this.inclusive=n}}function Oy(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=W.comparator(W.fromName(o.referenceValue),n.key):r=ns(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Vy(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!fn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{constructor(e,n="asc"){this.field=e,this.dir=n}}function C1(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n0{}class De extends n0{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new N1(e,n,r):n==="array-contains"?new L1(e,r):n==="in"?new O1(e,r):n==="not-in"?new V1(e,r):n==="array-contains-any"?new M1(e,r):new De(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new b1(e,r):new D1(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ns(n,this.value)):n!==null&&ri(this.value)===ri(n)&&this.matchesComparison(ns(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return G()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class pn extends n0{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new pn(e,n)}matches(e){return r0(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function r0(t){return t.op==="and"}function i0(t){return x1(t)&&r0(t)}function x1(t){for(const e of t.filters)if(e instanceof pn)return!1;return!0}function Sd(t){if(t instanceof De)return t.field.canonicalString()+t.op.toString()+rs(t.value);if(i0(t))return t.filters.map(e=>Sd(e)).join(",");{const e=t.filters.map(n=>Sd(n)).join(",");return`${t.op}(${e})`}}function s0(t,e){return t instanceof De?function(r,i){return i instanceof De&&r.op===i.op&&r.field.isEqual(i.field)&&fn(r.value,i.value)}(t,e):t instanceof pn?function(r,i){return i instanceof pn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&s0(o,i.filters[l]),!0):!1}(t,e):void G()}function o0(t){return t instanceof De?function(n){return`${n.field.canonicalString()} ${n.op} ${rs(n.value)}`}(t):t instanceof pn?function(n){return n.op.toString()+" {"+n.getFilters().map(o0).join(" ,")+"}"}(t):"Filter"}class N1 extends De{constructor(e,n,r){super(e,n,r),this.key=W.fromName(r.referenceValue)}matches(e){const n=W.comparator(e.key,this.key);return this.matchesComparison(n)}}class b1 extends De{constructor(e,n){super(e,"in",n),this.keys=a0("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class D1 extends De{constructor(e,n){super(e,"not-in",n),this.keys=a0("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function a0(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>W.fromName(r.referenceValue))}class L1 extends De{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return tp(n)&&Fo(n.arrayValue,this.value)}}class O1 extends De{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Fo(this.value.arrayValue,n)}}class V1 extends De{constructor(e,n){super(e,"not-in",n)}matches(e){if(Fo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Fo(this.value.arrayValue,n)}}class M1 extends De{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!tp(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Fo(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U1{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.ue=null}}function My(t,e=null,n=[],r=[],i=null,s=null,o=null){return new U1(t,e,n,r,i,s,o)}function np(t){const e=Y(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Sd(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Ou(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>rs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>rs(r)).join(",")),e.ue=n}return e.ue}function rp(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!C1(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!s0(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Vy(t.startAt,e.startAt)&&Vy(t.endAt,e.endAt)}function Rd(t){return W.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vu{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function j1(t,e,n,r,i,s,o,l){return new Vu(t,e,n,r,i,s,o,l)}function ip(t){return new Vu(t)}function Uy(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function F1(t){return t.collectionGroup!==null}function co(t){const e=Y(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new He($e.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Zl(s,r))}),n.has($e.keyField().canonicalString())||e.ce.push(new Zl($e.keyField(),r))}return e.ce}function ln(t){const e=Y(t);return e.le||(e.le=B1(e,co(t))),e.le}function B1(t,e){if(t.limitType==="F")return My(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Zl(i.field,s)});const n=t.endAt?new Jl(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Jl(t.startAt.position,t.startAt.inclusive):null;return My(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function kd(t,e,n){return new Vu(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Mu(t,e){return rp(ln(t),ln(e))&&t.limitType===e.limitType}function l0(t){return`${np(ln(t))}|lt:${t.limitType}`}function wi(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>o0(i)).join(", ")}]`),Ou(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>rs(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>rs(i)).join(",")),`Target(${r})`}(ln(t))}; limitType=${t.limitType})`}function Uu(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):W.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of co(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const c=Oy(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,co(r),i)||r.endAt&&!function(o,l,u){const c=Oy(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,co(r),i))}(t,e)}function $1(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function u0(t){return(e,n)=>{let r=!1;for(const i of co(t)){const s=z1(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function z1(t,e,n){const r=t.field.isKeyField()?W.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),c=l.data.field(s);return u!==null&&c!==null?ns(u,c):G()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return G()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){di(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return ZE(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H1=new Te(W.comparator);function $n(){return H1}const c0=new Te(W.comparator);function Ys(...t){let e=c0;for(const n of t)e=e.insert(n.key,n);return e}function h0(t){let e=c0;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function zr(){return ho()}function d0(){return ho()}function ho(){return new ms(t=>t.toString(),(t,e)=>t.isEqual(e))}const q1=new Te(W.comparator),W1=new He(W.comparator);function ee(...t){let e=W1;for(const n of t)e=e.add(n);return e}const K1=new He(se);function G1(){return K1}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sp(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Yl(e)?"-0":e}}function f0(t){return{integerValue:""+t}}function Q1(t,e){return S1(e)?f0(e):sp(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ju{constructor(){this._=void 0}}function X1(t,e,n){return t instanceof eu?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Zf(s)&&(s=ep(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof Bo?m0(t,e):t instanceof $o?g0(t,e):function(i,s){const o=p0(i,s),l=jy(o)+jy(i.Pe);return Id(o)&&Id(i.Pe)?f0(l):sp(i.serializer,l)}(t,e)}function Y1(t,e,n){return t instanceof Bo?m0(t,e):t instanceof $o?g0(t,e):n}function p0(t,e){return t instanceof tu?function(r){return Id(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class eu extends ju{}class Bo extends ju{constructor(e){super(),this.elements=e}}function m0(t,e){const n=y0(e);for(const r of t.elements)n.some(i=>fn(i,r))||n.push(r);return{arrayValue:{values:n}}}class $o extends ju{constructor(e){super(),this.elements=e}}function g0(t,e){let n=y0(e);for(const r of t.elements)n=n.filter(i=>!fn(i,r));return{arrayValue:{values:n}}}class tu extends ju{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function jy(t){return Ae(t.integerValue||t.doubleValue)}function y0(t){return tp(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function J1(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Bo&&i instanceof Bo||r instanceof $o&&i instanceof $o?ts(r.elements,i.elements,fn):r instanceof tu&&i instanceof tu?fn(r.Pe,i.Pe):r instanceof eu&&i instanceof eu}(t.transform,e.transform)}class Z1{constructor(e,n){this.version=e,this.transformResults=n}}class Jt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Jt}static exists(e){return new Jt(void 0,e)}static updateTime(e){return new Jt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function gl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Fu{}function _0(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new w0(t.key,Jt.none()):new na(t.key,t.data,Jt.none());{const n=t.data,r=gt.empty();let i=new He($e.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new br(t.key,r,new At(i.toArray()),Jt.none())}}function ex(t,e,n){t instanceof na?function(i,s,o){const l=i.value.clone(),u=By(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof br?function(i,s,o){if(!gl(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=By(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(v0(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function fo(t,e,n,r){return t instanceof na?function(s,o,l,u){if(!gl(s.precondition,o))return l;const c=s.value.clone(),d=$y(s.fieldTransforms,u,o);return c.setAll(d),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof br?function(s,o,l,u){if(!gl(s.precondition,o))return l;const c=$y(s.fieldTransforms,u,o),d=o.data;return d.setAll(v0(s)),d.setAll(c),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(s,o,l){return gl(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function tx(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=p0(r.transform,i||null);s!=null&&(n===null&&(n=gt.empty()),n.set(r.field,s))}return n||null}function Fy(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&ts(r,i,(s,o)=>J1(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class na extends Fu{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class br extends Fu{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function v0(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function By(t,e,n){const r=new Map;ae(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,Y1(o,l,n[i]))}return r}function $y(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,X1(s,o,e))}return r}class w0 extends Fu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class nx extends Fu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rx{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&ex(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=fo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=fo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=d0();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=_0(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(X.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ee())}isEqual(e){return this.batchId===e.batchId&&ts(this.mutations,e.mutations,(n,r)=>Fy(n,r))&&ts(this.baseMutations,e.baseMutations,(n,r)=>Fy(n,r))}}class op{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ae(e.mutations.length===r.length);let i=function(){return q1}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new op(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ix{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sx{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ce,ne;function ox(t){switch(t){default:return G();case U.CANCELLED:case U.UNKNOWN:case U.DEADLINE_EXCEEDED:case U.RESOURCE_EXHAUSTED:case U.INTERNAL:case U.UNAVAILABLE:case U.UNAUTHENTICATED:return!1;case U.INVALID_ARGUMENT:case U.NOT_FOUND:case U.ALREADY_EXISTS:case U.PERMISSION_DENIED:case U.FAILED_PRECONDITION:case U.ABORTED:case U.OUT_OF_RANGE:case U.UNIMPLEMENTED:case U.DATA_LOSS:return!0}}function E0(t){if(t===void 0)return Bn("GRPC error has no .code"),U.UNKNOWN;switch(t){case Ce.OK:return U.OK;case Ce.CANCELLED:return U.CANCELLED;case Ce.UNKNOWN:return U.UNKNOWN;case Ce.DEADLINE_EXCEEDED:return U.DEADLINE_EXCEEDED;case Ce.RESOURCE_EXHAUSTED:return U.RESOURCE_EXHAUSTED;case Ce.INTERNAL:return U.INTERNAL;case Ce.UNAVAILABLE:return U.UNAVAILABLE;case Ce.UNAUTHENTICATED:return U.UNAUTHENTICATED;case Ce.INVALID_ARGUMENT:return U.INVALID_ARGUMENT;case Ce.NOT_FOUND:return U.NOT_FOUND;case Ce.ALREADY_EXISTS:return U.ALREADY_EXISTS;case Ce.PERMISSION_DENIED:return U.PERMISSION_DENIED;case Ce.FAILED_PRECONDITION:return U.FAILED_PRECONDITION;case Ce.ABORTED:return U.ABORTED;case Ce.OUT_OF_RANGE:return U.OUT_OF_RANGE;case Ce.UNIMPLEMENTED:return U.UNIMPLEMENTED;case Ce.DATA_LOSS:return U.DATA_LOSS;default:return G()}}(ne=Ce||(Ce={}))[ne.OK=0]="OK",ne[ne.CANCELLED=1]="CANCELLED",ne[ne.UNKNOWN=2]="UNKNOWN",ne[ne.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ne[ne.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ne[ne.NOT_FOUND=5]="NOT_FOUND",ne[ne.ALREADY_EXISTS=6]="ALREADY_EXISTS",ne[ne.PERMISSION_DENIED=7]="PERMISSION_DENIED",ne[ne.UNAUTHENTICATED=16]="UNAUTHENTICATED",ne[ne.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ne[ne.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ne[ne.ABORTED=10]="ABORTED",ne[ne.OUT_OF_RANGE=11]="OUT_OF_RANGE",ne[ne.UNIMPLEMENTED=12]="UNIMPLEMENTED",ne[ne.INTERNAL=13]="INTERNAL",ne[ne.UNAVAILABLE=14]="UNAVAILABLE",ne[ne.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ax(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lx=new Kr([4294967295,4294967295],0);function zy(t){const e=ax().encode(t),n=new qE;return n.update(e),new Uint8Array(n.digest())}function Hy(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Kr([n,r],0),new Kr([i,s],0)]}class ap{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Js(`Invalid padding: ${n}`);if(r<0)throw new Js(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Js(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Js(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Kr.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(Kr.fromNumber(r)));return i.compare(lx)===1&&(i=new Kr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=zy(e),[r,i]=Hy(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new ap(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=zy(e),[r,i]=Hy(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Js extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bu{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,ra.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Bu(X.min(),i,new Te(se),$n(),ee())}}class ra{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new ra(r,n,ee(),ee(),ee())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class T0{constructor(e,n){this.targetId=e,this.me=n}}class I0{constructor(e,n,r=We.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class qy{constructor(){this.fe=0,this.ge=Ky(),this.pe=We.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ee(),n=ee(),r=ee();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:G()}}),new ra(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=Ky()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ae(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class ux{constructor(e){this.Le=e,this.Be=new Map,this.ke=$n(),this.qe=Wy(),this.Qe=new Te(se)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:G()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(Rd(s))if(r===0){const o=new W(s.path);this.Ue(n,o,nt.newNoDocument(o,X.min()))}else ae(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),u=l?this.Xe(l,e,o):1;if(u!==0){this.je(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=ni(r).toUint8Array()}catch(u){if(u instanceof e0)return es("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new ap(o,i,s)}catch(u){return es(u instanceof Js?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const l=this.Je(o);if(l){if(s.current&&Rd(l.target)){const u=new W(l.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,nt.newNoDocument(u,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=ee();this.qe.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.Je(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new Bu(e,n,this.Qe,this.ke,r);return this.ke=$n(),this.qe=Wy(),this.Qe=new Te(se),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new qy,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new He(se),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||H("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new qy),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Wy(){return new Te(W.comparator)}function Ky(){return new Te(W.comparator)}const cx={asc:"ASCENDING",desc:"DESCENDING"},hx={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},dx={and:"AND",or:"OR"};class fx{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Ad(t,e){return t.useProto3Json||Ou(e)?e:{value:e}}function nu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function S0(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function px(t,e){return nu(t,e.toTimestamp())}function un(t){return ae(!!t),X.fromTimestamp(function(n){const r=kr(n);return new Oe(r.seconds,r.nanos)}(t))}function lp(t,e){return Pd(t,e).canonicalString()}function Pd(t,e){const n=function(i){return new ge(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function R0(t){const e=ge.fromString(t);return ae(x0(e)),e}function Cd(t,e){return lp(t.databaseId,e.path)}function lh(t,e){const n=R0(e);if(n.get(1)!==t.databaseId.projectId)throw new q(U.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new q(U.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new W(A0(n))}function k0(t,e){return lp(t.databaseId,e)}function mx(t){const e=R0(t);return e.length===4?ge.emptyPath():A0(e)}function xd(t){return new ge(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function A0(t){return ae(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Gy(t,e,n){return{name:Cd(t,e),fields:n.value.mapValue.fields}}function gx(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:G()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,d){return c.useProto3Json?(ae(d===void 0||typeof d=="string"),We.fromBase64String(d||"")):(ae(d===void 0||d instanceof Buffer||d instanceof Uint8Array),We.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const d=c.code===void 0?U.UNKNOWN:E0(c.code);return new q(d,c.message||"")}(o);n=new I0(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=lh(t,r.document.name),s=un(r.document.updateTime),o=r.document.createTime?un(r.document.createTime):X.min(),l=new gt({mapValue:{fields:r.document.fields}}),u=nt.newFoundDocument(i,s,o,l),c=r.targetIds||[],d=r.removedTargetIds||[];n=new yl(c,d,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=lh(t,r.document),s=r.readTime?un(r.readTime):X.min(),o=nt.newNoDocument(i,s),l=r.removedTargetIds||[];n=new yl([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=lh(t,r.document),s=r.removedTargetIds||[];n=new yl([],s,i,null)}else{if(!("filter"in e))return G();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new sx(i,s),l=r.targetId;n=new T0(l,o)}}return n}function yx(t,e){let n;if(e instanceof na)n={update:Gy(t,e.key,e.value)};else if(e instanceof w0)n={delete:Cd(t,e.key)};else if(e instanceof br)n={update:Gy(t,e.key,e.data),updateMask:kx(e.fieldMask)};else{if(!(e instanceof nx))return G();n={verify:Cd(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof eu)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Bo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof $o)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof tu)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw G()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:px(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:G()}(t,e.precondition)),n}function _x(t,e){return t&&t.length>0?(ae(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?un(i.updateTime):un(s);return o.isEqual(X.min())&&(o=un(s)),new Z1(o,i.transformResults||[])}(n,e))):[]}function vx(t,e){return{documents:[k0(t,e.path)]}}function wx(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=k0(t,i);const s=function(c){if(c.length!==0)return C0(pn.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(d=>function(m){return{field:Ei(m.field),direction:Ix(m.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Ad(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function Ex(t){let e=mx(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ae(r===1);const d=n.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];n.where&&(s=function(p){const m=P0(p);return m instanceof pn&&i0(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(R){return new Zl(Ti(R.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(R.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(p){let m;return m=typeof p=="object"?p.value:p,Ou(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(p){const m=!!p.before,T=p.values||[];return new Jl(T,m)}(n.startAt));let c=null;return n.endAt&&(c=function(p){const m=!p.before,T=p.values||[];return new Jl(T,m)}(n.endAt)),j1(e,i,o,s,l,"F",u,c)}function Tx(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return G()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function P0(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ti(n.unaryFilter.field);return De.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Ti(n.unaryFilter.field);return De.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ti(n.unaryFilter.field);return De.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ti(n.unaryFilter.field);return De.create(o,"!=",{nullValue:"NULL_VALUE"});default:return G()}}(t):t.fieldFilter!==void 0?function(n){return De.create(Ti(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return G()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return pn.create(n.compositeFilter.filters.map(r=>P0(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return G()}}(n.compositeFilter.op))}(t):G()}function Ix(t){return cx[t]}function Sx(t){return hx[t]}function Rx(t){return dx[t]}function Ei(t){return{fieldPath:t.canonicalString()}}function Ti(t){return $e.fromServerFormat(t.fieldPath)}function C0(t){return t instanceof De?function(n){if(n.op==="=="){if(Ly(n.value))return{unaryFilter:{field:Ei(n.field),op:"IS_NAN"}};if(Dy(n.value))return{unaryFilter:{field:Ei(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Ly(n.value))return{unaryFilter:{field:Ei(n.field),op:"IS_NOT_NAN"}};if(Dy(n.value))return{unaryFilter:{field:Ei(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ei(n.field),op:Sx(n.op),value:n.value}}}(t):t instanceof pn?function(n){const r=n.getFilters().map(i=>C0(i));return r.length===1?r[0]:{compositeFilter:{op:Rx(n.op),filters:r}}}(t):G()}function kx(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function x0(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(e,n,r,i,s=X.min(),o=X.min(),l=We.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new hr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new hr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new hr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new hr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ax{constructor(e){this.ct=e}}function Px(t){const e=Ex({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?kd(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cx{constructor(){this.un=new xx}addToCollectionParentIndex(e,n){return this.un.add(n),j.resolve()}getCollectionParents(e,n){return j.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return j.resolve()}deleteFieldIndex(e,n){return j.resolve()}deleteAllFieldIndexes(e){return j.resolve()}createTargetIndexes(e,n){return j.resolve()}getDocumentsMatchingTarget(e,n){return j.resolve(null)}getIndexType(e,n){return j.resolve(0)}getFieldIndexes(e,n){return j.resolve([])}getNextCollectionGroupToUpdate(e){return j.resolve(null)}getMinOffset(e,n){return j.resolve(Rr.min())}getMinOffsetFromCollectionGroup(e,n){return j.resolve(Rr.min())}updateCollectionGroup(e,n,r){return j.resolve()}updateIndexEntries(e,n){return j.resolve()}}class xx{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new He(ge.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new He(ge.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new is(0)}static kn(){return new is(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nx{constructor(){this.changes=new ms(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,nt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?j.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bx{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dx{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&fo(r.mutation,i,At.empty(),Oe.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ee()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ee()){const i=zr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Ys();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=zr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ee()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=$n();const o=ho(),l=function(){return ho()}();return n.forEach((u,c)=>{const d=r.get(c.key);i.has(c.key)&&(d===void 0||d.mutation instanceof br)?s=s.insert(c.key,c):d!==void 0?(o.set(c.key,d.mutation.getFieldMask()),fo(d.mutation,c,d.mutation.getFieldMask(),Oe.now())):o.set(c.key,At.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,d)=>o.set(c,d)),n.forEach((c,d)=>{var p;return l.set(c,new bx(d,(p=o.get(c))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=ho();let i=new Te((o,l)=>o-l),s=ee();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let d=r.get(u)||At.empty();d=l.applyToLocalView(c,d),r.set(u,d);const p=(i.get(l.batchId)||ee()).add(u);i=i.insert(l.batchId,p)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,d=u.value,p=d0();d.forEach(m=>{if(!s.has(m)){const T=_0(n.get(m),r.get(m));T!==null&&p.set(m,T),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,p))}return j.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return W.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):F1(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):j.resolve(zr());let l=-1,u=s;return o.next(c=>j.forEach(c,(d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),s.get(d)?j.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{u=u.insert(d,m)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,ee())).next(d=>({batchId:l,changes:h0(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new W(n)).next(r=>{let i=Ys();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Ys();return this.indexManager.getCollectionParents(e,s).next(l=>j.forEach(l,u=>{const c=function(p,m){return new Vu(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(d=>{d.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const d=c.getKey();o.get(d)===null&&(o=o.insert(d,nt.newInvalidDocument(d)))});let l=Ys();return o.forEach((u,c)=>{const d=s.get(u);d!==void 0&&fo(d.mutation,c,At.empty(),Oe.now()),Uu(n,c)&&(l=l.insert(u,c))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lx{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return j.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:un(i.createTime)}}(n)),j.resolve()}getNamedQuery(e,n){return j.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:Px(i.bundledQuery),readTime:un(i.readTime)}}(n)),j.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ox{constructor(){this.overlays=new Te(W.comparator),this.Ir=new Map}getOverlay(e,n){return j.resolve(this.overlays.get(n))}getOverlays(e,n){const r=zr();return j.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),j.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),j.resolve()}getOverlaysForCollection(e,n,r){const i=zr(),s=n.length+1,o=new W(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return j.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Te((c,d)=>c-d);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let d=s.get(c.largestBatchId);d===null&&(d=zr(),s=s.insert(c.largestBatchId,d)),d.set(c.getKey(),c)}}const l=zr(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,d)=>l.set(c,d)),!(l.size()>=i)););return j.resolve(l)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new ix(n,r));let s=this.Ir.get(n);s===void 0&&(s=ee(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vx{constructor(){this.sessionToken=We.EMPTY_BYTE_STRING}getSessionToken(e){return j.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,j.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class up{constructor(){this.Tr=new He(Ve.Er),this.dr=new He(Ve.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new Ve(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new Ve(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new W(new ge([])),r=new Ve(n,e),i=new Ve(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new W(new ge([])),r=new Ve(n,e),i=new Ve(n,e+1);let s=ee();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ve(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ve{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return W.comparator(e.key,n.key)||se(e.wr,n.wr)}static Ar(e,n){return se(e.wr,n.wr)||W.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mx{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new He(Ve.Er)}checkEmpty(e){return j.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new rx(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.br=this.br.add(new Ve(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return j.resolve(o)}lookupMutationBatch(e,n){return j.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return j.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return j.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return j.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ve(n,0),i=new Ve(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const l=this.Dr(o.wr);s.push(l)}),j.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new He(se);return n.forEach(i=>{const s=new Ve(i,0),o=new Ve(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],l=>{r=r.add(l.wr)})}),j.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;W.isDocumentKey(s)||(s=s.child(""));const o=new Ve(new W(s),0);let l=new He(se);return this.br.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(l=l.add(u.wr)),!0)},o),j.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ae(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return j.forEach(n.mutations,i=>{const s=new Ve(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new Ve(n,0),i=this.br.firstAfterOrEqual(r);return j.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,j.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ux{constructor(e){this.Mr=e,this.docs=function(){return new Te(W.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return j.resolve(r?r.document.mutableCopy():nt.newInvalidDocument(n))}getEntries(e,n){let r=$n();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():nt.newInvalidDocument(i))}),j.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=$n();const o=n.path,l=new W(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:d}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||w1(v1(d),r)<=0||(i.has(d.key)||Uu(n,d))&&(s=s.insert(d.key,d.mutableCopy()))}return j.resolve(s)}getAllFromCollectionGroup(e,n,r,i){G()}Or(e,n){return j.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new jx(this)}getSize(e){return j.resolve(this.size)}}class jx extends Nx{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),j.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fx{constructor(e){this.persistence=e,this.Nr=new ms(n=>np(n),rp),this.lastRemoteSnapshotVersion=X.min(),this.highestTargetId=0,this.Lr=0,this.Br=new up,this.targetCount=0,this.kr=is.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),j.resolve()}getLastRemoteSnapshotVersion(e){return j.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return j.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),j.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),j.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new is(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,j.resolve()}updateTargetData(e,n){return this.Kn(n),j.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,j.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),j.waitFor(s).next(()=>i)}getTargetCount(e){return j.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return j.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),j.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),j.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),j.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return j.resolve(r)}containsKey(e,n){return j.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bx{constructor(e,n){this.qr={},this.overlays={},this.Qr=new Jf(0),this.Kr=!1,this.Kr=!0,this.$r=new Vx,this.referenceDelegate=e(this),this.Ur=new Fx(this),this.indexManager=new Cx,this.remoteDocumentCache=function(i){return new Ux(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new Ax(n),this.Gr=new Lx(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Ox,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new Mx(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){H("MemoryPersistence","Starting transaction:",e);const i=new $x(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return j.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class $x extends T1{constructor(e){super(),this.currentSequenceNumber=e}}class cp{constructor(e){this.persistence=e,this.Jr=new up,this.Yr=null}static Zr(e){return new cp(e)}get Xr(){if(this.Yr)return this.Yr;throw G()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),j.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),j.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),j.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return j.forEach(this.Xr,r=>{const i=W.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,X.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return j.or([()=>j.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hp{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=ee(),i=ee();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new hp(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zx{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hx{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return HP()?8:I1(it())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new zx;return this.Xi(e,n,o).next(l=>{if(s.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(zs()<=te.DEBUG&&H("QueryEngine","SDK will not create cache indexes for query:",wi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),j.resolve()):(zs()<=te.DEBUG&&H("QueryEngine","Query:",wi(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(zs()<=te.DEBUG&&H("QueryEngine","The SDK decides to create cache indexes for query:",wi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ln(n))):j.resolve())}Yi(e,n){if(Uy(n))return j.resolve(null);let r=ln(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=kd(n,null,"F"),r=ln(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ee(...s);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.ts(n,l);return this.ns(n,c,o,u.readTime)?this.Yi(e,kd(n,null,"F")):this.rs(e,c,n,u)}))})))}Zi(e,n,r,i){return Uy(n)||i.isEqual(X.min())?j.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?j.resolve(null):(zs()<=te.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),wi(n)),this.rs(e,o,n,_1(i,-1)).next(l=>l))})}ts(e,n){let r=new He(u0(e));return n.forEach((i,s)=>{Uu(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return zs()<=te.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",wi(n)),this.Ji.getDocumentsMatchingQuery(e,n,Rr.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qx{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new Te(se),this._s=new ms(s=>np(s),rp),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Dx(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function Wx(t,e,n,r){return new qx(t,e,n,r)}async function N0(t,e){const n=Y(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=ee();for(const c of i){o.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}for(const c of s){l.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}return n.localDocuments.getDocuments(r,u).next(c=>({hs:c,removedBatchIds:o,addedBatchIds:l}))})})}function Kx(t,e){const n=Y(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,c,d){const p=c.batch,m=p.keys();let T=j.resolve();return m.forEach(R=>{T=T.next(()=>d.getEntry(u,R)).next(P=>{const N=c.docVersions.get(R);ae(N!==null),P.version.compareTo(N)<0&&(p.applyToRemoteDocument(P,c),P.isValidDocument()&&(P.setReadTime(c.commitVersion),d.addEntry(P)))})}),T.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=ee();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function b0(t){const e=Y(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function Gx(t,e){const n=Y(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const l=[];e.targetChanges.forEach((d,p)=>{const m=i.get(p);if(!m)return;l.push(n.Ur.removeMatchingKeys(s,d.removedDocuments,p).next(()=>n.Ur.addMatchingKeys(s,d.addedDocuments,p)));let T=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?T=T.withResumeToken(We.EMPTY_BYTE_STRING,X.min()).withLastLimboFreeSnapshotVersion(X.min()):d.resumeToken.approximateByteSize()>0&&(T=T.withResumeToken(d.resumeToken,r)),i=i.insert(p,T),function(P,N,v){return P.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=3e8?!0:v.addedDocuments.size+v.modifiedDocuments.size+v.removedDocuments.size>0}(m,T,d)&&l.push(n.Ur.updateTargetData(s,T))});let u=$n(),c=ee();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,d))}),l.push(Qx(s,o,e.documentUpdates).next(d=>{u=d.Ps,c=d.Is})),!r.isEqual(X.min())){const d=n.Ur.getLastRemoteSnapshotVersion(s).next(p=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(d)}return j.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.os=i,s))}function Qx(t,e,n){let r=ee(),i=ee();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=$n();return n.forEach((l,u)=>{const c=s.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(X.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):H("LocalStore","Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{Ps:o,Is:i}})}function Xx(t,e){const n=Y(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Yx(t,e){const n=Y(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,j.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new hr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Nd(t,e,n){const r=Y(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!ta(o))throw o;H("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function Qy(t,e,n){const r=Y(t);let i=X.min(),s=ee();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,d){const p=Y(u),m=p._s.get(d);return m!==void 0?j.resolve(p.os.get(m)):p.Ur.getTargetData(c,d)}(r,o,ln(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:X.min(),n?s:ee())).next(l=>(Jx(r,$1(e),l),{documents:l,Ts:s})))}function Jx(t,e,n){let r=t.us.get(e)||X.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class Xy{constructor(){this.activeTargetIds=G1()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Zx{constructor(){this.so=new Xy,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Xy,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eN{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yy{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){H("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){H("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xa=null;function uh(){return Xa===null?Xa=function(){return 268435456+Math.round(2147483648*Math.random())}():Xa++,"0x"+Xa.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tN={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nN{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ze="WebChannelConnection";class rN extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const l=uh(),u=this.xo(n,r.toUriEncodedString());H("RestConnection",`Sending RPC '${n}' ${l}:`,u,i);const c={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(c,s,o),this.No(n,u,c,i).then(d=>(H("RestConnection",`Received RPC '${n}' ${l}: `,d),d),d=>{throw es("RestConnection",`RPC '${n}' ${l} failed with error: `,d,"url: ",u,"request:",i),d})}Lo(n,r,i,s,o,l){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ps}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=tN[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=uh();return new Promise((o,l)=>{const u=new WE;u.setWithCredentials(!0),u.listenOnce(KE.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case pl.NO_ERROR:const d=u.getResponseJson();H(Ze,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(d)),o(d);break;case pl.TIMEOUT:H(Ze,`RPC '${e}' ${s} timed out`),l(new q(U.DEADLINE_EXCEEDED,"Request time out"));break;case pl.HTTP_ERROR:const p=u.getStatus();if(H(Ze,`RPC '${e}' ${s} failed with status:`,p,"response text:",u.getResponseText()),p>0){let m=u.getResponseJson();Array.isArray(m)&&(m=m[0]);const T=m==null?void 0:m.error;if(T&&T.status&&T.message){const R=function(N){const v=N.toLowerCase().replace(/_/g,"-");return Object.values(U).indexOf(v)>=0?v:U.UNKNOWN}(T.status);l(new q(R,T.message))}else l(new q(U.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new q(U.UNAVAILABLE,"Connection failed."));break;default:G()}}finally{H(Ze,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);H(Ze,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",c,r,15)})}Bo(e,n,r){const i=uh(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=XE(),l=QE(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const d=s.join("");H(Ze,`Creating RPC '${e}' stream ${i}: ${d}`,u);const p=o.createWebChannel(d,u);let m=!1,T=!1;const R=new nN({Io:N=>{T?H(Ze,`Not sending because RPC '${e}' stream ${i} is closed:`,N):(m||(H(Ze,`Opening RPC '${e}' stream ${i} transport.`),p.open(),m=!0),H(Ze,`RPC '${e}' stream ${i} sending:`,N),p.send(N))},To:()=>p.close()}),P=(N,v,w)=>{N.listen(v,E=>{try{w(E)}catch(C){setTimeout(()=>{throw C},0)}})};return P(p,Xs.EventType.OPEN,()=>{T||(H(Ze,`RPC '${e}' stream ${i} transport opened.`),R.yo())}),P(p,Xs.EventType.CLOSE,()=>{T||(T=!0,H(Ze,`RPC '${e}' stream ${i} transport closed`),R.So())}),P(p,Xs.EventType.ERROR,N=>{T||(T=!0,es(Ze,`RPC '${e}' stream ${i} transport errored:`,N),R.So(new q(U.UNAVAILABLE,"The operation could not be completed")))}),P(p,Xs.EventType.MESSAGE,N=>{var v;if(!T){const w=N.data[0];ae(!!w);const E=w,C=E.error||((v=E[0])===null||v===void 0?void 0:v.error);if(C){H(Ze,`RPC '${e}' stream ${i} received error:`,C);const V=C.status;let M=function(S){const k=Ce[S];if(k!==void 0)return E0(k)}(V),I=C.message;M===void 0&&(M=U.INTERNAL,I="Unknown error status: "+V+" with message "+C.message),T=!0,R.So(new q(M,I)),p.close()}else H(Ze,`RPC '${e}' stream ${i} received:`,w),R.bo(w)}}),P(l,GE.STAT_EVENT,N=>{N.stat===Ed.PROXY?H(Ze,`RPC '${e}' stream ${i} detected buffering proxy`):N.stat===Ed.NOPROXY&&H(Ze,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{R.wo()},0),R}}function ch(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $u(t){return new fx(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D0{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&H("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L0{constructor(e,n,r,i,s,o,l,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new D0(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===U.RESOURCE_EXHAUSTED?(Bn(n.toString()),Bn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===U.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new q(U.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return H("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(H("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class iN extends L0{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=gx(this.serializer,e),r=function(s){if(!("targetChange"in s))return X.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?X.min():o.readTime?un(o.readTime):X.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=xd(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=Rd(u)?{documents:vx(s,u)}:{query:wx(s,u)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=S0(s,o.resumeToken);const c=Ad(s,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(X.min())>0){l.readTime=nu(s,o.snapshotVersion.toTimestamp());const c=Ad(s,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=Tx(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=xd(this.serializer),n.removeTarget=e,this.a_(n)}}class sN extends L0{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return ae(!!e.streamToken),this.lastStreamToken=e.streamToken,ae(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){ae(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=_x(e.writeResults,e.commitTime),r=un(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=xd(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>yx(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oN extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new q(U.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,Pd(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new q(U.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,Pd(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new q(U.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class aN{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Bn(n),this.D_=!1):H("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lN{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{fi(this)&&(H("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=Y(u);c.L_.add(4),await ia(c),c.q_.set("Unknown"),c.L_.delete(4),await zu(c)}(this))})}),this.q_=new aN(r,i)}}async function zu(t){if(fi(t))for(const e of t.B_)await e(!0)}async function ia(t){for(const e of t.B_)await e(!1)}function O0(t,e){const n=Y(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),mp(n)?pp(n):gs(n).r_()&&fp(n,e))}function dp(t,e){const n=Y(t),r=gs(n);n.N_.delete(e),r.r_()&&V0(n,e),n.N_.size===0&&(r.r_()?r.o_():fi(n)&&n.q_.set("Unknown"))}function fp(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(X.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}gs(t).A_(e)}function V0(t,e){t.Q_.xe(e),gs(t).R_(e)}function pp(t){t.Q_=new ux({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),gs(t).start(),t.q_.v_()}function mp(t){return fi(t)&&!gs(t).n_()&&t.N_.size>0}function fi(t){return Y(t).L_.size===0}function M0(t){t.Q_=void 0}async function uN(t){t.q_.set("Online")}async function cN(t){t.N_.forEach((e,n)=>{fp(t,e)})}async function hN(t,e){M0(t),mp(t)?(t.q_.M_(e),pp(t)):t.q_.set("Unknown")}async function dN(t,e,n){if(t.q_.set("Online"),e instanceof I0&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.N_.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.N_.delete(l),i.Q_.removeTarget(l))}(t,e)}catch(r){H("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ru(t,r)}else if(e instanceof yl?t.Q_.Ke(e):e instanceof T0?t.Q_.He(e):t.Q_.We(e),!n.isEqual(X.min()))try{const r=await b0(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.Q_.rt(o);return l.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const d=s.N_.get(c);d&&s.N_.set(c,d.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,c)=>{const d=s.N_.get(u);if(!d)return;s.N_.set(u,d.withResumeToken(We.EMPTY_BYTE_STRING,d.snapshotVersion)),V0(s,u);const p=new hr(d.target,u,c,d.sequenceNumber);fp(s,p)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){H("RemoteStore","Failed to raise snapshot:",r),await ru(t,r)}}async function ru(t,e,n){if(!ta(e))throw e;t.L_.add(1),await ia(t),t.q_.set("Offline"),n||(n=()=>b0(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{H("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await zu(t)})}function U0(t,e){return e().catch(n=>ru(t,n,e))}async function Hu(t){const e=Y(t),n=Ar(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;fN(e);)try{const i=await Xx(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,pN(e,i)}catch(i){await ru(e,i)}j0(e)&&F0(e)}function fN(t){return fi(t)&&t.O_.length<10}function pN(t,e){t.O_.push(e);const n=Ar(t);n.r_()&&n.V_&&n.m_(e.mutations)}function j0(t){return fi(t)&&!Ar(t).n_()&&t.O_.length>0}function F0(t){Ar(t).start()}async function mN(t){Ar(t).p_()}async function gN(t){const e=Ar(t);for(const n of t.O_)e.m_(n.mutations)}async function yN(t,e,n){const r=t.O_.shift(),i=op.from(r,e,n);await U0(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Hu(t)}async function _N(t,e){e&&Ar(t).V_&&await async function(r,i){if(function(o){return ox(o)&&o!==U.ABORTED}(i.code)){const s=r.O_.shift();Ar(r).s_(),await U0(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Hu(r)}}(t,e),j0(t)&&F0(t)}async function Jy(t,e){const n=Y(t);n.asyncQueue.verifyOperationInProgress(),H("RemoteStore","RemoteStore received new credentials");const r=fi(n);n.L_.add(3),await ia(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await zu(n)}async function vN(t,e){const n=Y(t);e?(n.L_.delete(2),await zu(n)):e||(n.L_.add(2),await ia(n),n.q_.set("Unknown"))}function gs(t){return t.K_||(t.K_=function(n,r,i){const s=Y(n);return s.w_(),new iN(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:uN.bind(null,t),Ro:cN.bind(null,t),mo:hN.bind(null,t),d_:dN.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),mp(t)?pp(t):t.q_.set("Unknown")):(await t.K_.stop(),M0(t))})),t.K_}function Ar(t){return t.U_||(t.U_=function(n,r,i){const s=Y(n);return s.w_(),new sN(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:mN.bind(null,t),mo:_N.bind(null,t),f_:gN.bind(null,t),g_:yN.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Hu(t)):(await t.U_.stop(),t.O_.length>0&&(H("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gp{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Dn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new gp(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new q(U.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function yp(t,e){if(Bn("AsyncQueue",`${e}: ${t}`),ta(t))return new q(U.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(e){this.comparator=e?(n,r)=>e(n,r)||W.comparator(n.key,r.key):(n,r)=>W.comparator(n.key,r.key),this.keyedMap=Ys(),this.sortedSet=new Te(this.comparator)}static emptySet(e){return new zi(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof zi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new zi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zy{constructor(){this.W_=new Te(W.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):G():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class ss{constructor(e,n,r,i,s,o,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new ss(e,n,zi.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Mu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wN{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class EN{constructor(){this.queries=e_(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=Y(n),s=i.queries;i.queries=e_(),s.forEach((o,l)=>{for(const u of l.j_)u.onError(r)})})(this,new q(U.ABORTED,"Firestore shutting down"))}}function e_(){return new ms(t=>l0(t),Mu)}async function B0(t,e){const n=Y(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new wN,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=yp(o,`Initialization of query '${wi(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&_p(n)}async function $0(t,e){const n=Y(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function TN(t,e){const n=Y(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.j_)l.X_(i)&&(r=!0);o.z_=i}}r&&_p(n)}function IN(t,e,n){const r=Y(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function _p(t){t.Y_.forEach(e=>{e.next()})}var bd,t_;(t_=bd||(bd={})).ea="default",t_.Cache="cache";class z0{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new ss(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=ss.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==bd.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H0{constructor(e){this.key=e}}class q0{constructor(e){this.key=e}}class SN{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ee(),this.mutatedKeys=ee(),this.Aa=u0(e),this.Ra=new zi(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new Zy,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,p)=>{const m=i.get(d),T=Uu(this.query,p)?p:null,R=!!m&&this.mutatedKeys.has(m.key),P=!!T&&(T.hasLocalMutations||this.mutatedKeys.has(T.key)&&T.hasCommittedMutations);let N=!1;m&&T?m.data.isEqual(T.data)?R!==P&&(r.track({type:3,doc:T}),N=!0):this.ga(m,T)||(r.track({type:2,doc:T}),N=!0,(u&&this.Aa(T,u)>0||c&&this.Aa(T,c)<0)&&(l=!0)):!m&&T?(r.track({type:0,doc:T}),N=!0):m&&!T&&(r.track({type:1,doc:m}),N=!0,(u||c)&&(l=!0)),N&&(T?(o=o.add(T),s=P?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{Ra:o,fa:r,ns:l,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((d,p)=>function(T,R){const P=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return G()}};return P(T)-P(R)}(d.type,p.type)||this.Aa(d.doc,p.doc)),this.pa(r),i=i!=null&&i;const l=n&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,c=u!==this.Ea;return this.Ea=u,o.length!==0||c?{snapshot:new ss(this.query,e.Ra,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Zy,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ee(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new q0(r))}),this.da.forEach(r=>{e.has(r)||n.push(new H0(r))}),n}ba(e){this.Ta=e.Ts,this.da=ee();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return ss.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class RN{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class kN{constructor(e){this.key=e,this.va=!1}}class AN{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new ms(l=>l0(l),Mu),this.Ma=new Map,this.xa=new Set,this.Oa=new Te(W.comparator),this.Na=new Map,this.La=new up,this.Ba={},this.ka=new Map,this.qa=is.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function PN(t,e,n=!0){const r=Y0(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await W0(r,e,n,!0),i}async function CN(t,e){const n=Y0(t);await W0(n,e,!0,!1)}async function W0(t,e,n,r){const i=await Yx(t.localStore,ln(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await xN(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&O0(t.remoteStore,i),l}async function xN(t,e,n,r,i){t.Ka=(p,m,T)=>async function(P,N,v,w){let E=N.view.ma(v);E.ns&&(E=await Qy(P.localStore,N.query,!1).then(({documents:I})=>N.view.ma(I,E)));const C=w&&w.targetChanges.get(N.targetId),V=w&&w.targetMismatches.get(N.targetId)!=null,M=N.view.applyChanges(E,P.isPrimaryClient,C,V);return r_(P,N.targetId,M.wa),M.snapshot}(t,p,m,T);const s=await Qy(t.localStore,e,!0),o=new SN(e,s.Ts),l=o.ma(s.documents),u=ra.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(l,t.isPrimaryClient,u);r_(t,n,c.wa);const d=new RN(e,n,o);return t.Fa.set(e,d),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),c.snapshot}async function NN(t,e,n){const r=Y(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!Mu(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Nd(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&dp(r.remoteStore,i.targetId),Dd(r,i.targetId)}).catch(ea)):(Dd(r,i.targetId),await Nd(r.localStore,i.targetId,!0))}async function bN(t,e){const n=Y(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),dp(n.remoteStore,r.targetId))}async function DN(t,e,n){const r=FN(t);try{const i=await function(o,l){const u=Y(o),c=Oe.now(),d=l.reduce((T,R)=>T.add(R.key),ee());let p,m;return u.persistence.runTransaction("Locally write mutations","readwrite",T=>{let R=$n(),P=ee();return u.cs.getEntries(T,d).next(N=>{R=N,R.forEach((v,w)=>{w.isValidDocument()||(P=P.add(v))})}).next(()=>u.localDocuments.getOverlayedDocuments(T,R)).next(N=>{p=N;const v=[];for(const w of l){const E=tx(w,p.get(w.key).overlayedDocument);E!=null&&v.push(new br(w.key,E,t0(E.value.mapValue),Jt.exists(!0)))}return u.mutationQueue.addMutationBatch(T,c,v,l)}).next(N=>{m=N;const v=N.applyToLocalDocumentSet(p,P);return u.documentOverlayCache.saveOverlays(T,N.batchId,v)})}).then(()=>({batchId:m.batchId,changes:h0(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let c=o.Ba[o.currentUser.toKey()];c||(c=new Te(se)),c=c.insert(l,u),o.Ba[o.currentUser.toKey()]=c}(r,i.batchId,n),await sa(r,i.changes),await Hu(r.remoteStore)}catch(i){const s=yp(i,"Failed to persist write");n.reject(s)}}async function K0(t,e){const n=Y(t);try{const r=await Gx(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(ae(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?ae(o.va):i.removedDocuments.size>0&&(ae(o.va),o.va=!1))}),await sa(n,r,e)}catch(r){await ea(r)}}function n_(t,e,n){const r=Y(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const l=o.view.Z_(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=Y(o);u.onlineState=l;let c=!1;u.queries.forEach((d,p)=>{for(const m of p.j_)m.Z_(l)&&(c=!0)}),c&&_p(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function LN(t,e,n){const r=Y(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new Te(W.comparator);o=o.insert(s,nt.newNoDocument(s,X.min()));const l=ee().add(s),u=new Bu(X.min(),new Map,new Te(se),o,l);await K0(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),vp(r)}else await Nd(r.localStore,e,!1).then(()=>Dd(r,e,n)).catch(ea)}async function ON(t,e){const n=Y(t),r=e.batch.batchId;try{const i=await Kx(n.localStore,e);Q0(n,r,null),G0(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await sa(n,i)}catch(i){await ea(i)}}async function VN(t,e,n){const r=Y(t);try{const i=await function(o,l){const u=Y(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let d;return u.mutationQueue.lookupMutationBatch(c,l).next(p=>(ae(p!==null),d=p.keys(),u.mutationQueue.removeMutationBatch(c,p))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,d,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,d)).next(()=>u.localDocuments.getDocuments(c,d))})}(r.localStore,e);Q0(r,e,n),G0(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await sa(r,i)}catch(i){await ea(i)}}function G0(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function Q0(t,e,n){const r=Y(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function Dd(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||X0(t,r)})}function X0(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(dp(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),vp(t))}function r_(t,e,n){for(const r of n)r instanceof H0?(t.La.addReference(r.key,e),MN(t,r)):r instanceof q0?(H("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||X0(t,r.key)):G()}function MN(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(H("SyncEngine","New document in limbo: "+n),t.xa.add(r),vp(t))}function vp(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new W(ge.fromString(e)),r=t.qa.next();t.Na.set(r,new kN(n)),t.Oa=t.Oa.insert(n,r),O0(t.remoteStore,new hr(ln(ip(n.path)),r,"TargetPurposeLimboResolution",Jf.oe))}}async function sa(t,e,n){const r=Y(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{o.push(r.Ka(u,e,n).then(c=>{var d;if((c||n)&&r.isPrimaryClient){const p=c?!c.fromCache:(d=n==null?void 0:n.targetChanges.get(u.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(c){i.push(c);const p=hp.Wi(u.targetId,c);s.push(p)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(u,c){const d=Y(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>j.forEach(c,m=>j.forEach(m.$i,T=>d.persistence.referenceDelegate.addReference(p,m.targetId,T)).next(()=>j.forEach(m.Ui,T=>d.persistence.referenceDelegate.removeReference(p,m.targetId,T)))))}catch(p){if(!ta(p))throw p;H("LocalStore","Failed to update sequence numbers: "+p)}for(const p of c){const m=p.targetId;if(!p.fromCache){const T=d.os.get(m),R=T.snapshotVersion,P=T.withLastLimboFreeSnapshotVersion(R);d.os=d.os.insert(m,P)}}}(r.localStore,s))}async function UN(t,e){const n=Y(t);if(!n.currentUser.isEqual(e)){H("SyncEngine","User change. New user:",e.toKey());const r=await N0(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(l=>{l.forEach(u=>{u.reject(new q(U.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await sa(n,r.hs)}}function jN(t,e){const n=Y(t),r=n.Na.get(e);if(r&&r.va)return ee().add(r.key);{let i=ee();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const l=n.Fa.get(o);i=i.unionWith(l.view.Va)}return i}}function Y0(t){const e=Y(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=K0.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=jN.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=LN.bind(null,e),e.Ca.d_=TN.bind(null,e.eventManager),e.Ca.$a=IN.bind(null,e.eventManager),e}function FN(t){const e=Y(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=ON.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=VN.bind(null,e),e}class iu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=$u(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return Wx(this.persistence,new Hx,e.initialUser,this.serializer)}Ga(e){return new Bx(cp.Zr,this.serializer)}Wa(e){return new Zx}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}iu.provider={build:()=>new iu};class Ld{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>n_(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=UN.bind(null,this.syncEngine),await vN(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new EN}()}createDatastore(e){const n=$u(e.databaseInfo.databaseId),r=function(s){return new rN(s)}(e.databaseInfo);return function(s,o,l,u){return new oN(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new lN(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>n_(this.syncEngine,n,0),function(){return Yy.D()?new Yy:new eN}())}createSyncEngine(e,n){return function(i,s,o,l,u,c,d){const p=new AN(i,s,o,l,u,c);return d&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=Y(i);H("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await ia(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Ld.provider={build:()=>new Ld};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J0{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Bn("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BN{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=et.UNAUTHENTICATED,this.clientId=JE.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{H("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(H("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Dn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=yp(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function hh(t,e){t.asyncQueue.verifyOperationInProgress(),H("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await N0(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function i_(t,e){t.asyncQueue.verifyOperationInProgress();const n=await $N(t);H("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Jy(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Jy(e.remoteStore,i)),t._onlineComponents=e}async function $N(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){H("FirestoreClient","Using user provided OfflineComponentProvider");try{await hh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===U.FAILED_PRECONDITION||i.code===U.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;es("Error using user provided cache. Falling back to memory cache: "+n),await hh(t,new iu)}}else H("FirestoreClient","Using default OfflineComponentProvider"),await hh(t,new iu);return t._offlineComponents}async function Z0(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(H("FirestoreClient","Using user provided OnlineComponentProvider"),await i_(t,t._uninitializedComponentsProvider._online)):(H("FirestoreClient","Using default OnlineComponentProvider"),await i_(t,new Ld))),t._onlineComponents}function zN(t){return Z0(t).then(e=>e.syncEngine)}async function eT(t){const e=await Z0(t),n=e.eventManager;return n.onListen=PN.bind(null,e.syncEngine),n.onUnlisten=NN.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=CN.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=bN.bind(null,e.syncEngine),n}function HN(t,e,n={}){const r=new Dn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const d=new J0({next:m=>{d.Za(),o.enqueueAndForget(()=>$0(s,p));const T=m.docs.has(l);!T&&m.fromCache?c.reject(new q(U.UNAVAILABLE,"Failed to get document because the client is offline.")):T&&m.fromCache&&u&&u.source==="server"?c.reject(new q(U.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(m)},error:m=>c.reject(m)}),p=new z0(ip(l.path),d,{includeMetadataChanges:!0,_a:!0});return B0(s,p)}(await eT(t),t.asyncQueue,e,n,r)),r.promise}function qN(t,e,n={}){const r=new Dn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const d=new J0({next:m=>{d.Za(),o.enqueueAndForget(()=>$0(s,p)),m.fromCache&&u.source==="server"?c.reject(new q(U.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(m)},error:m=>c.reject(m)}),p=new z0(l,d,{includeMetadataChanges:!0,_a:!0});return B0(s,p)}(await eT(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tT(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s_=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nT(t,e,n){if(!n)throw new q(U.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function WN(t,e,n,r){if(e===!0&&r===!0)throw new q(U.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function o_(t){if(!W.isDocumentKey(t))throw new q(U.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function a_(t){if(W.isDocumentKey(t))throw new q(U.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function wp(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":G()}function mn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new q(U.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=wp(t);throw new q(U.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l_{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new q(U.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new q(U.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}WN("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=tT((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new q(U.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new q(U.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new q(U.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class qu{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new l_({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new q(U.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new q(U.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new l_(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new u1;switch(r.type){case"firstParty":return new f1(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new q(U.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=s_.get(n);r&&(H("ComponentProvider","Removing Datastore"),s_.delete(n),r.terminate())}(this),Promise.resolve()}}function KN(t,e,n,r={}){var i;const s=(t=mn(t,qu))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&es("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=et.MOCK_USER;else{l=OE(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new q(U.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new et(c)}t._authCredentials=new c1(new YE(l,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wu{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Wu(this.firestore,e,this._query)}}class Tt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Tr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Tt(this.firestore,e,this._key)}}class Tr extends Wu{constructor(e,n,r){super(e,n,ip(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Tt(this.firestore,null,new W(e))}withConverter(e){return new Tr(this.firestore,e,this._path)}}function Ku(t,e,...n){if(t=Ne(t),nT("collection","path",e),t instanceof qu){const r=ge.fromString(e,...n);return a_(r),new Tr(t,null,r)}{if(!(t instanceof Tt||t instanceof Tr))throw new q(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ge.fromString(e,...n));return a_(r),new Tr(t.firestore,null,r)}}function yn(t,e,...n){if(t=Ne(t),arguments.length===1&&(e=JE.newId()),nT("doc","path",e),t instanceof qu){const r=ge.fromString(e,...n);return o_(r),new Tt(t,null,new W(r))}{if(!(t instanceof Tt||t instanceof Tr))throw new q(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ge.fromString(e,...n));return o_(r),new Tt(t.firestore,t instanceof Tr?t.converter:null,new W(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u_{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new D0(this,"async_queue_retry"),this.Vu=()=>{const r=ch();r&&H("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=ch();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=ch();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new Dn;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!ta(e))throw e;H("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw Bn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=gp.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&G()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}class ys extends qu{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new u_,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new u_(e),this._firestoreClient=void 0,await e}}}function GN(t,e){const n=typeof t=="object"?t:Lu(),r=typeof t=="string"?t:"(default)",i=Nr(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=bE("firestore");s&&KN(i,...s)}return i}function Ep(t){if(t._terminated)throw new q(U.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||QN(t),t._firestoreClient}function QN(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,c,d){return new k1(l,u,c,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,tT(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new BN(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(e){this._byteString=e}static fromBase64String(e){try{return new os(We.fromBase64String(e))}catch(n){throw new q(U.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new os(We.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gu{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new q(U.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new $e(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tp{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ip{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new q(U.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new q(U.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return se(this._lat,e._lat)||se(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sp{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XN=/^__.*__$/;class YN{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new br(e,this.data,this.fieldMask,n,this.fieldTransforms):new na(e,this.data,n,this.fieldTransforms)}}class rT{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new br(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function iT(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw G()}}class Rp{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Rp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return su(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(iT(this.Cu)&&XN.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class JN{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||$u(e)}Qu(e,n,r,i=!1){return new Rp({Cu:e,methodName:n,qu:r,path:$e.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function kp(t){const e=t._freezeSettings(),n=$u(t._databaseId);return new JN(t._databaseId,!!e.ignoreUndefinedProperties,n)}function sT(t,e,n,r,i,s={}){const o=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);Ap("Data must be an object, but it was:",o,r);const l=oT(r,o);let u,c;if(s.merge)u=new At(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const p of s.mergeFields){const m=Od(e,p,n);if(!o.contains(m))throw new q(U.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);lT(d,m)||d.push(m)}u=new At(d),c=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,c=o.fieldTransforms;return new YN(new gt(l),u,c)}class Qu extends Tp{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Qu}}function ZN(t,e,n,r){const i=t.Qu(1,e,n);Ap("Data must be an object, but it was:",i,r);const s=[],o=gt.empty();di(r,(u,c)=>{const d=Pp(e,u,n);c=Ne(c);const p=i.Nu(d);if(c instanceof Qu)s.push(d);else{const m=Xu(c,p);m!=null&&(s.push(d),o.set(d,m))}});const l=new At(s);return new rT(o,l,i.fieldTransforms)}function eb(t,e,n,r,i,s){const o=t.Qu(1,e,n),l=[Od(e,r,n)],u=[i];if(s.length%2!=0)throw new q(U.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<s.length;m+=2)l.push(Od(e,s[m])),u.push(s[m+1]);const c=[],d=gt.empty();for(let m=l.length-1;m>=0;--m)if(!lT(c,l[m])){const T=l[m];let R=u[m];R=Ne(R);const P=o.Nu(T);if(R instanceof Qu)c.push(T);else{const N=Xu(R,P);N!=null&&(c.push(T),d.set(T,N))}}const p=new At(c);return new rT(d,p,o.fieldTransforms)}function Xu(t,e){if(aT(t=Ne(t)))return Ap("Unsupported field value:",e,t),oT(t,e);if(t instanceof Tp)return function(r,i){if(!iT(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=Xu(l,i.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Ne(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Q1(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Oe.fromDate(r);return{timestampValue:nu(i.serializer,s)}}if(r instanceof Oe){const s=new Oe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:nu(i.serializer,s)}}if(r instanceof Ip)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof os)return{bytesValue:S0(i.serializer,r._byteString)};if(r instanceof Tt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:lp(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Sp)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return sp(l.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${wp(r)}`)}(t,e)}function oT(t,e){const n={};return ZE(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):di(t,(r,i)=>{const s=Xu(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function aT(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Oe||t instanceof Ip||t instanceof os||t instanceof Tt||t instanceof Tp||t instanceof Sp)}function Ap(t,e,n){if(!aT(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=wp(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function Od(t,e,n){if((e=Ne(e))instanceof Gu)return e._internalPath;if(typeof e=="string")return Pp(t,e);throw su("Field path arguments must be of type string or ",t,!1,void 0,n)}const tb=new RegExp("[~\\*/\\[\\]]");function Pp(t,e,n){if(e.search(tb)>=0)throw su(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Gu(...e.split("."))._internalPath}catch{throw su(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function su(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new q(U.INVALID_ARGUMENT,l+t+u)}function lT(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uT{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Tt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new nb(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(cT("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class nb extends uT{data(){return super.data()}}function cT(t,e){return typeof e=="string"?Pp(t,e):e instanceof Gu?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rb(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new q(U.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ib{convertValue(e,n="none"){switch(ri(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ae(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ni(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw G()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return di(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>Ae(o.doubleValue));return new Sp(s)}convertGeoPoint(e){return new Ip(Ae(e.latitude),Ae(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=ep(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Uo(e));default:return null}}convertTimestamp(e){const n=kr(e);return new Oe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ge.fromString(e);ae(x0(r));const i=new jo(r.get(1),r.get(3)),s=new W(r.popFirst(5));return i.isEqual(n)||Bn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hT(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class dT extends uT{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new _l(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(cT("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class _l extends dT{data(e={}){return super.data(e)}}class sb{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Zs(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new _l(this._firestore,this._userDataWriter,r.key,r,new Zs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new q(U.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new _l(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Zs(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new _l(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Zs(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,d=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),d=o.indexOf(l.doc.key)),{type:ob(l.type),doc:u,oldIndex:c,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function ob(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return G()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yu(t){t=mn(t,Tt);const e=mn(t.firestore,ys);return HN(Ep(e),t._key).then(n=>lb(e,t,n))}class fT extends ib{constructor(e){super(),this.firestore=e}convertBytes(e){return new os(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Tt(this.firestore,null,n)}}function Cp(t){t=mn(t,Wu);const e=mn(t.firestore,ys),n=Ep(e),r=new fT(e);return rb(t._query),qN(n,t._query).then(i=>new sb(e,r,t,i))}function xp(t,e,n){t=mn(t,Tt);const r=mn(t.firestore,ys),i=hT(t.converter,e);return Np(r,[sT(kp(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Jt.none())])}function Ju(t,e,n,...r){t=mn(t,Tt);const i=mn(t.firestore,ys),s=kp(i);let o;return o=typeof(e=Ne(e))=="string"||e instanceof Gu?eb(s,"updateDoc",t._key,e,n,r):ZN(s,"updateDoc",t._key,e),Np(i,[o.toMutation(t._key,Jt.exists(!0))])}function ab(t,e){const n=mn(t.firestore,ys),r=yn(t),i=hT(t.converter,e);return Np(n,[sT(kp(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Jt.exists(!1))]).then(()=>r)}function Np(t,e){return function(r,i){const s=new Dn;return r.asyncQueue.enqueueAndForget(async()=>DN(await zN(r),i,s)),s.promise}(Ep(t),e)}function lb(t,e,n){const r=n.docs.get(e._key),i=new fT(t);return new dT(t,i,e._key,r,new Zs(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){ps=i})(hi),en(new Bt("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new ys(new h1(r.getProvider("auth-internal")),new m1(r.getProvider("app-check-internal")),function(c,d){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new q(U.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new jo(c.options.projectId,d)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),Et(Py,"4.7.3",e),Et(Py,"4.7.3","esm2017")})();var ub="firebase",cb="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Et(ub,cb,"app");function bp(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function pT(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const hb=pT,mT=new ci("auth","Firebase",pT());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ou=new Du("@firebase/auth");function db(t,...e){ou.logLevel<=te.WARN&&ou.warn(`Auth (${hi}): ${t}`,...e)}function vl(t,...e){ou.logLevel<=te.ERROR&&ou.error(`Auth (${hi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zn(t,...e){throw Dp(t,...e)}function cn(t,...e){return Dp(t,...e)}function gT(t,e,n){const r=Object.assign(Object.assign({},hb()),{[e]:n});return new ci("auth","Firebase",r).create(e,{appName:t.name})}function Gr(t){return gT(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Dp(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return mT.create(t,...e)}function K(t,e,...n){if(!t)throw Dp(e,...n)}function Cn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw vl(e),new Error(e)}function Hn(t,e){t||Cn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function fb(){return c_()==="http:"||c_()==="https:"}function c_(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pb(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(fb()||VE()||"connection"in navigator)?navigator.onLine:!0}function mb(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(e,n){this.shortDelay=e,this.longDelay=n,Hn(n>e,"Short delay should be less than long delay!"),this.isMobile=jP()||$P()}get(){return pb()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lp(t,e){Hn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yT{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Cn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Cn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Cn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gb={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yb=new oa(3e4,6e4);function Op(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function _s(t,e,n,r,i={}){return _T(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=Zo(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:u},s);return BP()||(c.referrerPolicy="no-referrer"),yT.fetch()(vT(t,t.config.apiHost,n,l),c)})}async function _T(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},gb),e);try{const i=new vb(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ya(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ya(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Ya(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Ya(t,"user-disabled",o);const d=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw gT(t,d,c);zn(t,d)}}catch(i){if(i instanceof zt)throw i;zn(t,"network-request-failed",{message:String(i)})}}async function _b(t,e,n,r,i={}){const s=await _s(t,e,n,r,i);return"mfaPendingCredential"in s&&zn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function vT(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Lp(t.config,i):`${t.config.apiScheme}://${i}`}class vb{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(cn(this.auth,"network-request-failed")),yb.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ya(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=cn(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wb(t,e){return _s(t,"POST","/v1/accounts:delete",e)}async function wT(t,e){return _s(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function po(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Eb(t,e=!1){const n=Ne(t),r=await n.getIdToken(e),i=Vp(r);K(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:po(dh(i.auth_time)),issuedAtTime:po(dh(i.iat)),expirationTime:po(dh(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function dh(t){return Number(t)*1e3}function Vp(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return vl("JWT malformed, contained fewer than 3 sections"),null;try{const i=xE(n);return i?JSON.parse(i):(vl("Failed to decode base64 JWT payload"),null)}catch(i){return vl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function h_(t){const e=Vp(t);return K(e,"internal-error"),K(typeof e.exp<"u","internal-error"),K(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof zt&&Tb(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Tb({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ib{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Md{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=po(this.lastLoginAt),this.creationTime=po(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function au(t){var e;const n=t.auth,r=await t.getIdToken(),i=await zo(t,wT(n,{idToken:r}));K(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?ET(s.providerUserInfo):[],l=Rb(t.providerData,o),u=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),d=u?c:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new Md(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,p)}async function Sb(t){const e=Ne(t);await au(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Rb(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function ET(t){return t.map(e=>{var{providerId:n}=e,r=bp(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kb(t,e){const n=await _T(t,{},async()=>{const r=Zo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=vT(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",yT.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Ab(t,e){return _s(t,"POST","/v2/accounts:revokeToken",Op(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){K(e.idToken,"internal-error"),K(typeof e.idToken<"u","internal-error"),K(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):h_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){K(e.length!==0,"internal-error");const n=h_(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(K(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await kb(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Hi;return r&&(K(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(K(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(K(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Hi,this.toJSON())}_performRefresh(){return Cn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yn(t,e){K(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class xn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=bp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ib(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Md(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await zo(this,this.stsTokenManager.getToken(this.auth,e));return K(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Eb(this,e)}reload(){return Sb(this)}_assign(e){this!==e&&(K(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new xn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){K(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await au(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(cr(this.auth.app))return Promise.reject(Gr(this.auth));const e=await this.getIdToken();return await zo(this,wb(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,u,c,d;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,T=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,R=(o=n.photoURL)!==null&&o!==void 0?o:void 0,P=(l=n.tenantId)!==null&&l!==void 0?l:void 0,N=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,v=(c=n.createdAt)!==null&&c!==void 0?c:void 0,w=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:E,emailVerified:C,isAnonymous:V,providerData:M,stsTokenManager:I}=n;K(E&&I,e,"internal-error");const _=Hi.fromJSON(this.name,I);K(typeof E=="string",e,"internal-error"),Yn(p,e.name),Yn(m,e.name),K(typeof C=="boolean",e,"internal-error"),K(typeof V=="boolean",e,"internal-error"),Yn(T,e.name),Yn(R,e.name),Yn(P,e.name),Yn(N,e.name),Yn(v,e.name),Yn(w,e.name);const S=new xn({uid:E,auth:e,email:m,emailVerified:C,displayName:p,isAnonymous:V,photoURL:R,phoneNumber:T,tenantId:P,stsTokenManager:_,createdAt:v,lastLoginAt:w});return M&&Array.isArray(M)&&(S.providerData=M.map(k=>Object.assign({},k))),N&&(S._redirectEventId=N),S}static async _fromIdTokenResponse(e,n,r=!1){const i=new Hi;i.updateFromServerResponse(n);const s=new xn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await au(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];K(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?ET(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Hi;l.updateFromIdToken(r);const u=new xn({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Md(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d_=new Map;function Nn(t){Hn(t instanceof Function,"Expected a class definition");let e=d_.get(t);return e?(Hn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,d_.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TT{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}TT.type="NONE";const f_=TT;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wl(t,e,n){return`firebase:${t}:${e}:${n}`}class qi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=wl(this.userKey,i.apiKey,s),this.fullPersistenceKey=wl("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?xn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new qi(Nn(f_),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Nn(f_);const o=wl(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const d=await c._get(o);if(d){const p=xn._fromJSON(e,d);c!==s&&(l=p),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new qi(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new qi(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p_(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(kT(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(IT(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(PT(e))return"Blackberry";if(CT(e))return"Webos";if(ST(e))return"Safari";if((e.includes("chrome/")||RT(e))&&!e.includes("edge/"))return"Chrome";if(AT(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function IT(t=it()){return/firefox\//i.test(t)}function ST(t=it()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function RT(t=it()){return/crios\//i.test(t)}function kT(t=it()){return/iemobile/i.test(t)}function AT(t=it()){return/android/i.test(t)}function PT(t=it()){return/blackberry/i.test(t)}function CT(t=it()){return/webos/i.test(t)}function Mp(t=it()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Pb(t=it()){var e;return Mp(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Cb(){return zP()&&document.documentMode===10}function xT(t=it()){return Mp(t)||AT(t)||CT(t)||PT(t)||/windows phone/i.test(t)||kT(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NT(t,e=[]){let n;switch(t){case"Browser":n=p_(it());break;case"Worker":n=`${p_(it())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${hi}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xb{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nb(t,e={}){return _s(t,"GET","/v2/passwordPolicy",Op(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bb=6;class Db{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:bb,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lb{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new m_(this),this.idTokenSubscription=new m_(this),this.beforeStateQueue=new xb(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=mT,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Nn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await qi.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await wT(this,{idToken:e}),r=await xn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(cr(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return K(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await au(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=mb()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(cr(this.app))return Promise.reject(Gr(this));const n=e?Ne(e):null;return n&&K(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&K(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return cr(this.app)?Promise.reject(Gr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return cr(this.app)?Promise.reject(Gr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Nn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Nb(this),n=new Db(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ci("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Ab(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Nn(e)||this._popupRedirectResolver;K(n,this,"argument-error"),this.redirectPersistenceManager=await qi.create(this,[Nn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(K(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return K(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=NT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&db(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Up(t){return Ne(t)}class m_{constructor(e){this.auth=e,this.observer=null,this.addObserver=XP(n=>this.observer=n)}get next(){return K(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jp={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Ob(t){jp=t}function Vb(t){return jp.loadJS(t)}function Mb(){return jp.gapiScript}function Ub(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jb(t,e){const n=Nr(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Oo(s,e??{}))return i;zn(i,"already-initialized")}return n.initialize({options:e})}function Fb(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Nn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Bb(t,e,n){const r=Up(t);K(r._canInitEmulator,r,"emulator-config-failed"),K(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=bT(e),{host:o,port:l}=$b(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),zb()}function bT(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function $b(t){const e=bT(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:g_(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:g_(o)}}}function g_(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function zb(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DT{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Cn("not implemented")}_getIdTokenResponse(e){return Cn("not implemented")}_linkToIdToken(e,n){return Cn("not implemented")}_getReauthenticationResolver(e){return Cn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wi(t,e){return _b(t,"POST","/v1/accounts:signInWithIdp",Op(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hb="http://localhost";class ii extends DT{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ii(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):zn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=bp(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new ii(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Wi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Wi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Wi(e,n)}buildRequest(){const e={requestUri:Hb,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Zo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LT{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa extends LT{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr extends aa{constructor(){super("facebook.com")}static credential(e){return ii._fromParams({providerId:rr.PROVIDER_ID,signInMethod:rr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return rr.credentialFromTaggedObject(e)}static credentialFromError(e){return rr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return rr.credential(e.oauthAccessToken)}catch{return null}}}rr.FACEBOOK_SIGN_IN_METHOD="facebook.com";rr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir extends aa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ii._fromParams({providerId:ir.PROVIDER_ID,signInMethod:ir.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ir.credentialFromTaggedObject(e)}static credentialFromError(e){return ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return ir.credential(n,r)}catch{return null}}}ir.GOOGLE_SIGN_IN_METHOD="google.com";ir.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr extends aa{constructor(){super("github.com")}static credential(e){return ii._fromParams({providerId:sr.PROVIDER_ID,signInMethod:sr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return sr.credentialFromTaggedObject(e)}static credentialFromError(e){return sr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return sr.credential(e.oauthAccessToken)}catch{return null}}}sr.GITHUB_SIGN_IN_METHOD="github.com";sr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or extends aa{constructor(){super("twitter.com")}static credential(e,n){return ii._fromParams({providerId:or.PROVIDER_ID,signInMethod:or.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return or.credentialFromTaggedObject(e)}static credentialFromError(e){return or.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return or.credential(n,r)}catch{return null}}}or.TWITTER_SIGN_IN_METHOD="twitter.com";or.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await xn._fromIdTokenResponse(e,r,i),o=y_(r);return new as({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=y_(r);return new as({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function y_(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lu extends zt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,lu.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new lu(e,n,r,i)}}function OT(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?lu._fromErrorAndOperation(t,s,e,r):s})}async function qb(t,e,n=!1){const r=await zo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return as._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wb(t,e,n=!1){const{auth:r}=t;if(cr(r.app))return Promise.reject(Gr(r));const i="reauthenticate";try{const s=await zo(t,OT(r,i,e,t),n);K(s.idToken,r,"internal-error");const o=Vp(s.idToken);K(o,r,"internal-error");const{sub:l}=o;return K(t.uid===l,r,"user-mismatch"),as._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&zn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kb(t,e,n=!1){if(cr(t.app))return Promise.reject(Gr(t));const r="signIn",i=await OT(t,r,e),s=await as._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function Gb(t,e,n,r){return Ne(t).onIdTokenChanged(e,n,r)}function Qb(t,e,n){return Ne(t).beforeAuthStateChanged(e,n)}const uu="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VT{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(uu,"1"),this.storage.removeItem(uu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xb=1e3,Yb=10;class MT extends VT{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=xT(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);Cb()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Yb):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Xb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}MT.type="LOCAL";const Jb=MT;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UT extends VT{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}UT.type="SESSION";const jT=UT;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zb(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Zu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async c=>c(n.origin,s)),u=await Zb(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Zu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fp(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e2{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const c=Fp("",20);i.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const m=p;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(m.data.response);break;default:clearTimeout(d),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hn(){return window}function t2(t){hn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FT(){return typeof hn().WorkerGlobalScope<"u"&&typeof hn().importScripts=="function"}async function n2(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function r2(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function i2(){return FT()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BT="firebaseLocalStorageDb",s2=1,cu="firebaseLocalStorage",$T="fbase_key";class la{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ec(t,e){return t.transaction([cu],e?"readwrite":"readonly").objectStore(cu)}function o2(){const t=indexedDB.deleteDatabase(BT);return new la(t).toPromise()}function Ud(){const t=indexedDB.open(BT,s2);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(cu,{keyPath:$T})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(cu)?e(r):(r.close(),await o2(),e(await Ud()))})})}async function __(t,e,n){const r=ec(t,!0).put({[$T]:e,value:n});return new la(r).toPromise()}async function a2(t,e){const n=ec(t,!1).get(e),r=await new la(n).toPromise();return r===void 0?null:r.value}function v_(t,e){const n=ec(t,!0).delete(e);return new la(n).toPromise()}const l2=800,u2=3;class zT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ud(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>u2)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return FT()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Zu._getInstance(i2()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await n2(),!this.activeServiceWorker)return;this.sender=new e2(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||r2()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ud();return await __(e,uu,"1"),await v_(e,uu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>__(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>a2(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>v_(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=ec(i,!1).getAll();return new la(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),l2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}zT.type="LOCAL";const c2=zT;new oa(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h2(t,e){return e?Nn(e):(K(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bp extends DT{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Wi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Wi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Wi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function d2(t){return Kb(t.auth,new Bp(t),t.bypassAuthState)}function f2(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),Wb(n,new Bp(t),t.bypassAuthState)}async function p2(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),qb(n,new Bp(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HT{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return d2;case"linkViaPopup":case"linkViaRedirect":return p2;case"reauthViaPopup":case"reauthViaRedirect":return f2;default:zn(this.auth,"internal-error")}}resolve(e){Hn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Hn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m2=new oa(2e3,1e4);class Vi extends HT{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Vi.currentPopupAction&&Vi.currentPopupAction.cancel(),Vi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return K(e,this.auth,"internal-error"),e}async onExecution(){Hn(this.filter.length===1,"Popup operations only handle one event");const e=Fp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(cn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(cn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Vi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(cn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,m2.get())};e()}}Vi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g2="pendingRedirect",El=new Map;class y2 extends HT{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=El.get(this.auth._key());if(!e){try{const r=await _2(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}El.set(this.auth._key(),e)}return this.bypassAuthState||El.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function _2(t,e){const n=E2(e),r=w2(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function v2(t,e){El.set(t._key(),e)}function w2(t){return Nn(t._redirectPersistence)}function E2(t){return wl(g2,t.config.apiKey,t.name)}async function T2(t,e,n=!1){if(cr(t.app))return Promise.reject(Gr(t));const r=Up(t),i=h2(r,e),o=await new y2(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I2=10*60*1e3;class S2{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!R2(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!qT(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(cn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=I2&&this.cachedEventUids.clear(),this.cachedEventUids.has(w_(e))}saveEventToCache(e){this.cachedEventUids.add(w_(e)),this.lastProcessedEventTime=Date.now()}}function w_(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function qT({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function R2(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return qT(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function k2(t,e={}){return _s(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A2=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,P2=/^https?/;async function C2(t){if(t.config.emulator)return;const{authorizedDomains:e}=await k2(t);for(const n of e)try{if(x2(n))return}catch{}zn(t,"unauthorized-domain")}function x2(t){const e=Vd(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!P2.test(n))return!1;if(A2.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N2=new oa(3e4,6e4);function E_(){const t=hn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function b2(t){return new Promise((e,n)=>{var r,i,s;function o(){E_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{E_(),n(cn(t,"network-request-failed"))},timeout:N2.get()})}if(!((i=(r=hn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=hn().gapi)===null||s===void 0)&&s.load)o();else{const l=Ub("iframefcb");return hn()[l]=()=>{gapi.load?o():n(cn(t,"network-request-failed"))},Vb(`${Mb()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw Tl=null,e})}let Tl=null;function D2(t){return Tl=Tl||b2(t),Tl}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L2=new oa(5e3,15e3),O2="__/auth/iframe",V2="emulator/auth/iframe",M2={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},U2=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function j2(t){const e=t.config;K(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Lp(e,V2):`https://${t.config.authDomain}/${O2}`,r={apiKey:e.apiKey,appName:t.name,v:hi},i=U2.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Zo(r).slice(1)}`}async function F2(t){const e=await D2(t),n=hn().gapi;return K(n,t,"internal-error"),e.open({where:document.body,url:j2(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:M2,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=cn(t,"network-request-failed"),l=hn().setTimeout(()=>{s(o)},L2.get());function u(){hn().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B2={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},$2=500,z2=600,H2="_blank",q2="http://localhost";class T_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function W2(t,e,n,r=$2,i=z2){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},B2),{width:r.toString(),height:i.toString(),top:s,left:o}),c=it().toLowerCase();n&&(l=RT(c)?H2:n),IT(c)&&(e=e||q2,u.scrollbars="yes");const d=Object.entries(u).reduce((m,[T,R])=>`${m}${T}=${R},`,"");if(Pb(c)&&l!=="_self")return K2(e||"",l),new T_(null);const p=window.open(e||"",l,d);K(p,t,"popup-blocked");try{p.focus()}catch{}return new T_(p)}function K2(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G2="__/auth/handler",Q2="emulator/auth/handler",X2=encodeURIComponent("fac");async function I_(t,e,n,r,i,s){K(t.config.authDomain,t,"auth-domain-config-required"),K(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:hi,eventId:i};if(e instanceof LT){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",QP(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof aa){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const u=await t._getAppCheckToken(),c=u?`#${X2}=${encodeURIComponent(u)}`:"";return`${Y2(t)}?${Zo(l).slice(1)}${c}`}function Y2({config:t}){return t.emulator?Lp(t,Q2):`https://${t.authDomain}/${G2}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fh="webStorageSupport";class J2{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=jT,this._completeRedirectFn=T2,this._overrideRedirectResult=v2}async _openPopup(e,n,r,i){var s;Hn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await I_(e,n,r,Vd(),i);return W2(e,o,Fp())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await I_(e,n,r,Vd(),i);return t2(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Hn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await F2(e),r=new S2(e);return n.register("authEvent",i=>(K(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(fh,{type:fh},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[fh];o!==void 0&&n(!!o),zn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=C2(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return xT()||ST()||Mp()}}const Z2=J2;var S_="@firebase/auth",R_="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eD{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){K(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tD(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function nD(t){en(new Bt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;K(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:NT(t)},c=new Lb(r,i,s,u);return Fb(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),en(new Bt("auth-internal",e=>{const n=Up(e.getProvider("auth").getImmediate());return(r=>new eD(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Et(S_,R_,tD(t)),Et(S_,R_,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rD=5*60,iD=LE("authIdTokenMaxAge")||rD;let k_=null;const sD=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>iD)return;const i=n==null?void 0:n.token;k_!==i&&(k_=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function oD(t=Lu()){const e=Nr(t,"auth");if(e.isInitialized())return e.getImmediate();const n=jb(t,{popupRedirectResolver:Z2,persistence:[c2,Jb,jT]}),r=LE("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=sD(s.toString());Qb(n,o,()=>o(n.currentUser)),Gb(n,l=>o(l))}}const i=NE("auth");return i&&Bb(n,`http://${i}`),n}function aD(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Ob({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=cn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",aD().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});nD("Browser");const WT="@firebase/installations",$p="0.6.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KT=1e4,GT=`w:${$p}`,QT="FIS_v2",lD="https://firebaseinstallations.googleapis.com/v1",uD=60*60*1e3,cD="installations",hD="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dD={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},si=new ci(cD,hD,dD);function XT(t){return t instanceof zt&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YT({projectId:t}){return`${lD}/projects/${t}/installations`}function JT(t){return{token:t.token,requestStatus:2,expiresIn:pD(t.expiresIn),creationTime:Date.now()}}async function ZT(t,e){const r=(await e.json()).error;return si.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function eI({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function fD(t,{refreshToken:e}){const n=eI(t);return n.append("Authorization",mD(e)),n}async function tI(t){const e=await t();return e.status>=500&&e.status<600?t():e}function pD(t){return Number(t.replace("s","000"))}function mD(t){return`${QT} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gD({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=YT(t),i=eI(t),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:n,authVersion:QT,appId:t.appId,sdkVersion:GT},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await tI(()=>fetch(r,l));if(u.ok){const c=await u.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:JT(c.authToken)}}else throw await ZT("Create Installation",u)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nI(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yD(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _D=/^[cdef][\w-]{21}$/,jd="";function vD(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=wD(t);return _D.test(n)?n:jd}catch{return jd}}function wD(t){return yD(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tc(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rI=new Map;function iI(t,e){const n=tc(t);sI(n,e),ED(n,e)}function sI(t,e){const n=rI.get(t);if(n)for(const r of n)r(e)}function ED(t,e){const n=TD();n&&n.postMessage({key:t,fid:e}),ID()}let Hr=null;function TD(){return!Hr&&"BroadcastChannel"in self&&(Hr=new BroadcastChannel("[Firebase] FID Change"),Hr.onmessage=t=>{sI(t.data.key,t.data.fid)}),Hr}function ID(){rI.size===0&&Hr&&(Hr.close(),Hr=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SD="firebase-installations-database",RD=1,oi="firebase-installations-store";let ph=null;function zp(){return ph||(ph=BE(SD,RD,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(oi)}}})),ph}async function hu(t,e){const n=tc(t),i=(await zp()).transaction(oi,"readwrite"),s=i.objectStore(oi),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&iI(t,e.fid),e}async function oI(t){const e=tc(t),r=(await zp()).transaction(oi,"readwrite");await r.objectStore(oi).delete(e),await r.done}async function nc(t,e){const n=tc(t),i=(await zp()).transaction(oi,"readwrite"),s=i.objectStore(oi),o=await s.get(n),l=e(o);return l===void 0?await s.delete(n):await s.put(l,n),await i.done,l&&(!o||o.fid!==l.fid)&&iI(t,l.fid),l}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hp(t){let e;const n=await nc(t.appConfig,r=>{const i=kD(r),s=AD(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===jd?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function kD(t){const e=t||{fid:vD(),registrationStatus:0};return aI(e)}function AD(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(si.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=PD(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:CD(t)}:{installationEntry:e}}async function PD(t,e){try{const n=await gD(t,e);return hu(t.appConfig,n)}catch(n){throw XT(n)&&n.customData.serverCode===409?await oI(t.appConfig):await hu(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function CD(t){let e=await A_(t.appConfig);for(;e.registrationStatus===1;)await nI(100),e=await A_(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Hp(t);return r||n}return e}function A_(t){return nc(t,e=>{if(!e)throw si.create("installation-not-found");return aI(e)})}function aI(t){return xD(t)?{fid:t.fid,registrationStatus:0}:t}function xD(t){return t.registrationStatus===1&&t.registrationTime+KT<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ND({appConfig:t,heartbeatServiceProvider:e},n){const r=bD(t,n),i=fD(t,n),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:GT,appId:t.appId}},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await tI(()=>fetch(r,l));if(u.ok){const c=await u.json();return JT(c)}else throw await ZT("Generate Auth Token",u)}function bD(t,{fid:e}){return`${YT(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qp(t,e=!1){let n;const r=await nc(t.appConfig,s=>{if(!lI(s))throw si.create("not-registered");const o=s.authToken;if(!e&&OD(o))return s;if(o.requestStatus===1)return n=DD(t,e),s;{if(!navigator.onLine)throw si.create("app-offline");const l=MD(s);return n=LD(t,l),l}});return n?await n:r.authToken}async function DD(t,e){let n=await P_(t.appConfig);for(;n.authToken.requestStatus===1;)await nI(100),n=await P_(t.appConfig);const r=n.authToken;return r.requestStatus===0?qp(t,e):r}function P_(t){return nc(t,e=>{if(!lI(e))throw si.create("not-registered");const n=e.authToken;return UD(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function LD(t,e){try{const n=await ND(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await hu(t.appConfig,r),n}catch(n){if(XT(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await oI(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await hu(t.appConfig,r)}throw n}}function lI(t){return t!==void 0&&t.registrationStatus===2}function OD(t){return t.requestStatus===2&&!VD(t)}function VD(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+uD}function MD(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function UD(t){return t.requestStatus===1&&t.requestTime+KT<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jD(t){const e=t,{installationEntry:n,registrationPromise:r}=await Hp(e);return r?r.catch(console.error):qp(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FD(t,e=!1){const n=t;return await BD(n),(await qp(n,e)).token}async function BD(t){const{registrationPromise:e}=await Hp(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $D(t){if(!t||!t.options)throw mh("App Configuration");if(!t.name)throw mh("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw mh(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function mh(t){return si.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uI="installations",zD="installations-internal",HD=t=>{const e=t.getProvider("app").getImmediate(),n=$D(e),r=Nr(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},qD=t=>{const e=t.getProvider("app").getImmediate(),n=Nr(e,uI).getImmediate();return{getId:()=>jD(n),getToken:i=>FD(n,i)}};function WD(){en(new Bt(uI,HD,"PUBLIC")),en(new Bt(zD,qD,"PRIVATE"))}WD();Et(WT,$p);Et(WT,$p,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const du="analytics",KD="firebase_id",GD="origin",QD=60*1e3,XD="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Wp="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const It=new Du("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YD={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},xt=new ci("analytics","Analytics",YD);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JD(t){if(!t.startsWith(Wp)){const e=xt.create("invalid-gtag-resource",{gtagURL:t});return It.warn(e.message),""}return t}function cI(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function ZD(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function eL(t,e){const n=ZD("firebase-js-sdk-policy",{createScriptURL:JD}),r=document.createElement("script"),i=`${Wp}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function tL(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function nL(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const u=(await cI(n)).find(c=>c.measurementId===i);u&&await e[u.appId]}}catch(l){It.error(l)}t("config",i,s)}async function rL(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const l=await cI(n);for(const u of o){const c=l.find(p=>p.measurementId===u),d=c&&e[c.appId];if(d)s.push(d);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){It.error(s)}}function iL(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[l,u]=o;await rL(t,e,n,l,u)}else if(s==="config"){const[l,u]=o;await nL(t,e,n,r,l,u)}else if(s==="consent"){const[l,u]=o;t("consent",l,u)}else if(s==="get"){const[l,u,c]=o;t("get",l,u,c)}else if(s==="set"){const[l]=o;t("set",l)}else t(s,...o)}catch(l){It.error(l)}}return i}function sL(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=iL(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function oL(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Wp)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aL=30,lL=1e3;class uL{constructor(e={},n=lL){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const hI=new uL;function cL(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function hL(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:cL(r)},s=XD.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let l="";try{const u=await o.json();!((e=u.error)===null||e===void 0)&&e.message&&(l=u.error.message)}catch{}throw xt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:l})}return o.json()}async function dL(t,e=hI,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw xt.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw xt.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new mL;return setTimeout(async()=>{l.abort()},QD),dI({appId:r,apiKey:i,measurementId:s},o,l,e)}async function dI(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=hI){var s;const{appId:o,measurementId:l}=t;try{await fL(r,e)}catch(u){if(l)return It.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:l};throw u}try{const u=await hL(t);return i.deleteThrottleMetadata(o),u}catch(u){const c=u;if(!pL(c)){if(i.deleteThrottleMetadata(o),l)return It.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:l};throw u}const d=Number((s=c==null?void 0:c.customData)===null||s===void 0?void 0:s.httpStatus)===503?_y(n,i.intervalMillis,aL):_y(n,i.intervalMillis),p={throttleEndTimeMillis:Date.now()+d,backoffCount:n+1};return i.setThrottleMetadata(o,p),It.debug(`Calling attemptFetch again in ${d} millis`),dI(t,p,r,i)}}function fL(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(xt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function pL(t){if(!(t instanceof zt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class mL{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function gL(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yL(){if(ME())try{await UE()}catch(t){return It.warn(xt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return It.warn(xt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function _L(t,e,n,r,i,s,o){var l;const u=dL(t);u.then(T=>{n[T.measurementId]=T.appId,t.options.measurementId&&T.measurementId!==t.options.measurementId&&It.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${T.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(T=>It.error(T)),e.push(u);const c=yL().then(T=>{if(T)return r.getId()}),[d,p]=await Promise.all([u,c]);oL(s)||eL(s,d.measurementId),i("js",new Date);const m=(l=o==null?void 0:o.config)!==null&&l!==void 0?l:{};return m[GD]="firebase",m.update=!0,p!=null&&(m[KD]=p),i("config",d.measurementId,m),d.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vL{constructor(e){this.app=e}_delete(){return delete mo[this.app.options.appId],Promise.resolve()}}let mo={},C_=[];const x_={};let gh="dataLayer",wL="gtag",N_,fI,b_=!1;function EL(){const t=[];if(VE()&&t.push("This is a browser extension environment."),qP()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=xt.create("invalid-analytics-context",{errorInfo:e});It.warn(n.message)}}function TL(t,e,n){EL();const r=t.options.appId;if(!r)throw xt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)It.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw xt.create("no-api-key");if(mo[r]!=null)throw xt.create("already-exists",{id:r});if(!b_){tL(gh);const{wrappedGtag:s,gtagCore:o}=sL(mo,C_,x_,gh,wL);fI=s,N_=o,b_=!0}return mo[r]=_L(t,C_,x_,e,N_,gh,n),new vL(t)}function IL(t=Lu()){t=Ne(t);const e=Nr(t,du);return e.isInitialized()?e.getImmediate():SL(t)}function SL(t,e={}){const n=Nr(t,du);if(n.isInitialized()){const i=n.getImmediate();if(Oo(e,n.getOptions()))return i;throw xt.create("already-initialized")}return n.initialize({options:e})}function RL(t,e,n,r){t=Ne(t),gL(fI,mo[t.app.options.appId],e,n,r).catch(i=>It.error(i))}const D_="@firebase/analytics",L_="0.10.8";function kL(){en(new Bt(du,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return TL(r,i,n)},"PUBLIC")),en(new Bt("analytics-internal",t,"PRIVATE")),Et(D_,L_),Et(D_,L_,"esm2017");function t(e){try{const n=e.getProvider(du).getImmediate();return{logEvent:(r,i,s)=>RL(n,r,i,s)}}catch(n){throw xt.create("interop-component-reg-failed",{reason:n})}}}kL();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pI="firebasestorage.googleapis.com",mI="storageBucket",AL=2*60*1e3,PL=10*60*1e3,CL=1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie extends zt{constructor(e,n,r=0){super(yh(e),`Firebase Storage: ${n} (${yh(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ie.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return yh(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var pe;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(pe||(pe={}));function yh(t){return"storage/"+t}function Kp(){const t="An unknown error occurred, please check the error payload for server response.";return new Ie(pe.UNKNOWN,t)}function xL(t){return new Ie(pe.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function NL(t){return new Ie(pe.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function bL(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Ie(pe.UNAUTHENTICATED,t)}function DL(){return new Ie(pe.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function LL(t){return new Ie(pe.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function gI(){return new Ie(pe.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function yI(){return new Ie(pe.CANCELED,"User canceled the upload/download.")}function OL(t){return new Ie(pe.INVALID_URL,"Invalid URL '"+t+"'.")}function VL(t){return new Ie(pe.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function ML(){return new Ie(pe.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+mI+"' property when initializing the app?")}function _I(){return new Ie(pe.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function UL(){return new Ie(pe.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function jL(){return new Ie(pe.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function FL(t){return new Ie(pe.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Fd(t){return new Ie(pe.INVALID_ARGUMENT,t)}function vI(){return new Ie(pe.APP_DELETED,"The Firebase app was deleted.")}function BL(t){return new Ie(pe.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function go(t,e){return new Ie(pe.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Hs(t){throw new Ie(pe.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Pt.makeFromUrl(e,n)}catch{return new Pt(e,"")}if(r.path==="")return r;throw VL(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(C){C.path.charAt(C.path.length-1)==="/"&&(C.path_=C.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+i+o,"i"),u={bucket:1,path:3};function c(C){C.path_=decodeURIComponent(C.path)}const d="v[A-Za-z0-9_]+",p=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",T=new RegExp(`^https?://${p}/${d}/b/${i}/o${m}`,"i"),R={bucket:1,path:3},P=n===pI?"(?:storage.googleapis.com|storage.cloud.google.com)":n,N="([^?#]*)",v=new RegExp(`^https?://${P}/${i}/${N}`,"i"),E=[{regex:l,indices:u,postModify:s},{regex:T,indices:R,postModify:c},{regex:v,indices:{bucket:1,path:2},postModify:c}];for(let C=0;C<E.length;C++){const V=E[C],M=V.regex.exec(e);if(M){const I=M[V.indices.bucket];let _=M[V.indices.path];_||(_=""),r=new Pt(I,_),V.postModify(r);break}}if(r==null)throw OL(e);return r}}class $L{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zL(t,e,n){let r=1,i=null,s=null,o=!1,l=0;function u(){return l===2}let c=!1;function d(...N){c||(c=!0,e.apply(null,N))}function p(N){i=setTimeout(()=>{i=null,t(T,u())},N)}function m(){s&&clearTimeout(s)}function T(N,...v){if(c){m();return}if(N){m(),d.call(null,N,...v);return}if(u()||o){m(),d.call(null,N,...v);return}r<64&&(r*=2);let E;l===1?(l=2,E=0):E=(r+Math.random())*1e3,p(E)}let R=!1;function P(N){R||(R=!0,m(),!c&&(i!==null?(N||(l=2),clearTimeout(i),p(0)):N||(l=1)))}return p(0),s=setTimeout(()=>{o=!0,P(!0)},n),P}function HL(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qL(t){return t!==void 0}function WL(t){return typeof t=="function"}function KL(t){return typeof t=="object"&&!Array.isArray(t)}function rc(t){return typeof t=="string"||t instanceof String}function O_(t){return Gp()&&t instanceof Blob}function Gp(){return typeof Blob<"u"}function V_(t,e,n,r){if(r<e)throw Fd(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Fd(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ua(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function wI(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var Qr;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Qr||(Qr={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EI(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GL{constructor(e,n,r,i,s,o,l,u,c,d,p,m=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=u,this.timeout_=c,this.progressCallback_=d,this.connectionFactory_=p,this.retry=m,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((T,R)=>{this.resolve_=T,this.reject_=R,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Ja(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=l=>{const u=l.loaded,c=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const l=s.getErrorCode()===Qr.NO_ERROR,u=s.getStatus();if(!l||EI(u,this.additionalRetryCodes_)&&this.retry){const d=s.getErrorCode()===Qr.ABORT;r(!1,new Ja(!1,null,d));return}const c=this.successCodes_.indexOf(u)!==-1;r(!0,new Ja(c,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,l=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(l,l.getResponse());qL(u)?s(u):s()}catch(u){o(u)}else if(l!==null){const u=Kp();u.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,u)):o(u)}else if(i.canceled){const u=this.appDelete_?vI():yI();o(u)}else{const u=gI();o(u)}};this.canceled_?n(!1,new Ja(!1,null,!0)):this.backoffId_=zL(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&HL(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Ja{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function QL(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function XL(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function YL(t,e){e&&(t["X-Firebase-GMPID"]=e)}function JL(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function ZL(t,e,n,r,i,s,o=!0){const l=wI(t.urlParams),u=t.url+l,c=Object.assign({},t.headers);return YL(c,e),QL(c,n),XL(c,s),JL(c,r),new GL(u,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eO(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function tO(...t){const e=eO();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Gp())return new Blob(t);throw new Ie(pe.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function nO(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rO(t){if(typeof atob>"u")throw FL("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class _h{constructor(e,n){this.data=e,this.contentType=n||null}}function iO(t,e){switch(t){case sn.RAW:return new _h(TI(e));case sn.BASE64:case sn.BASE64URL:return new _h(II(t,e));case sn.DATA_URL:return new _h(oO(e),aO(e))}throw Kp()}function TI(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function sO(t){let e;try{e=decodeURIComponent(t)}catch{throw go(sn.DATA_URL,"Malformed data URL.")}return TI(e)}function II(t,e){switch(t){case sn.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw go(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case sn.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw go(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=rO(e)}catch(i){throw i.message.includes("polyfill")?i:go(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class SI{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw go(sn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=lO(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function oO(t){const e=new SI(t);return e.base64?II(sn.BASE64,e.rest):sO(e.rest)}function aO(t){return new SI(t).contentType}function lO(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(e,n){let r=0,i="";O_(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(O_(this.data_)){const r=this.data_,i=nO(r,e,n);return i===null?null:new ar(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new ar(r,!0)}}static getBlob(...e){if(Gp()){const n=e.map(r=>r instanceof ar?r.data_:r);return new ar(tO.apply(null,n))}else{const n=e.map(o=>rc(o)?iO(sn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let l=0;l<o.length;l++)i[s++]=o[l]}),new ar(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RI(t){let e;try{e=JSON.parse(t)}catch{return null}return KL(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uO(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function cO(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function kI(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hO(t,e){return e}class lt{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||hO}}let Za=null;function dO(t){return!rc(t)||t.length<2?t:kI(t)}function AI(){if(Za)return Za;const t=[];t.push(new lt("bucket")),t.push(new lt("generation")),t.push(new lt("metageneration")),t.push(new lt("name","fullPath",!0));function e(s,o){return dO(o)}const n=new lt("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new lt("size");return i.xform=r,t.push(i),t.push(new lt("timeCreated")),t.push(new lt("updated")),t.push(new lt("md5Hash",null,!0)),t.push(new lt("cacheControl",null,!0)),t.push(new lt("contentDisposition",null,!0)),t.push(new lt("contentEncoding",null,!0)),t.push(new lt("contentLanguage",null,!0)),t.push(new lt("contentType",null,!0)),t.push(new lt("metadata","customMetadata",!0)),Za=t,Za}function fO(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new Pt(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function pO(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return fO(r,t),r}function PI(t,e,n){const r=RI(e);return r===null?null:pO(t,r,n)}function mO(t,e,n,r){const i=RI(e);if(i===null||!rc(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(c=>{const d=t.bucket,p=t.fullPath,m="/b/"+o(d)+"/o/"+o(p),T=ua(m,n,r),R=wI({alt:"media",token:c});return T+R})[0]}function CI(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class vs{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ln(t){if(!t)throw Kp()}function Qp(t,e){function n(r,i){const s=PI(t,i,e);return Ln(s!==null),s}return n}function gO(t,e){function n(r,i){const s=PI(t,i,e);return Ln(s!==null),mO(s,i,t.host,t._protocol)}return n}function ca(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=DL():i=bL():n.getStatus()===402?i=NL(t.bucket):n.getStatus()===403?i=LL(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function xI(t){const e=ca(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=xL(t.path)),s.serverResponse=i.serverResponse,s}return n}function yO(t,e,n){const r=e.fullServerUrl(),i=ua(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,l=new vs(i,s,Qp(t,n),o);return l.errorHandler=xI(e),l}function _O(t,e,n){const r=e.fullServerUrl(),i=ua(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,l=new vs(i,s,gO(t,n),o);return l.errorHandler=xI(e),l}function vO(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function NI(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=vO(null,e)),r}function wO(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function l(){let E="";for(let C=0;C<2;C++)E=E+Math.random().toString().slice(2);return E}const u=l();o["Content-Type"]="multipart/related; boundary="+u;const c=NI(e,r,i),d=CI(c,n),p="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+d+`\r
--`+u+`\r
Content-Type: `+c.contentType+`\r
\r
`,m=`\r
--`+u+"--",T=ar.getBlob(p,r,m);if(T===null)throw _I();const R={name:c.fullPath},P=ua(s,t.host,t._protocol),N="POST",v=t.maxUploadRetryTime,w=new vs(P,N,Qp(t,n),v);return w.urlParams=R,w.headers=o,w.body=T.uploadData(),w.errorHandler=ca(e),w}class fu{constructor(e,n,r,i){this.current=e,this.total=n,this.finalized=!!r,this.metadata=i||null}}function Xp(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{Ln(!1)}return Ln(!!n&&(e||["active"]).indexOf(n)!==-1),n}function EO(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o=NI(e,r,i),l={name:o.fullPath},u=ua(s,t.host,t._protocol),c="POST",d={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},p=CI(o,n),m=t.maxUploadRetryTime;function T(P){Xp(P);let N;try{N=P.getResponseHeader("X-Goog-Upload-URL")}catch{Ln(!1)}return Ln(rc(N)),N}const R=new vs(u,c,T,m);return R.urlParams=l,R.headers=d,R.body=p,R.errorHandler=ca(e),R}function TO(t,e,n,r){const i={"X-Goog-Upload-Command":"query"};function s(c){const d=Xp(c,["active","final"]);let p=null;try{p=c.getResponseHeader("X-Goog-Upload-Size-Received")}catch{Ln(!1)}p||Ln(!1);const m=Number(p);return Ln(!isNaN(m)),new fu(m,r.size(),d==="final")}const o="POST",l=t.maxUploadRetryTime,u=new vs(n,o,s,l);return u.headers=i,u.errorHandler=ca(e),u}const M_=256*1024;function IO(t,e,n,r,i,s,o,l){const u=new fu(0,0);if(o?(u.current=o.current,u.total=o.total):(u.current=0,u.total=r.size()),r.size()!==u.total)throw UL();const c=u.total-u.current;let d=c;i>0&&(d=Math.min(d,i));const p=u.current,m=p+d;let T="";d===0?T="finalize":c===d?T="upload, finalize":T="upload";const R={"X-Goog-Upload-Command":T,"X-Goog-Upload-Offset":`${u.current}`},P=r.slice(p,m);if(P===null)throw _I();function N(C,V){const M=Xp(C,["active","final"]),I=u.current+d,_=r.size();let S;return M==="final"?S=Qp(e,s)(C,V):S=null,new fu(I,_,M==="final",S)}const v="POST",w=e.maxUploadRetryTime,E=new vs(n,v,N,w);return E.headers=R,E.body=P.uploadData(),E.progressCallback=l||null,E.errorHandler=ca(t),E}const pt={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function vh(t){switch(t){case"running":case"pausing":case"canceling":return pt.RUNNING;case"paused":return pt.PAUSED;case"success":return pt.SUCCESS;case"canceled":return pt.CANCELED;case"error":return pt.ERROR;default:return pt.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SO{constructor(e,n,r){if(WL(e)||n!=null||r!=null)this.next=e,this.error=n??void 0,this.complete=r??void 0;else{const s=e;this.next=s.next,this.error=s.error,this.complete=s.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vi(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class RO{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Qr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Qr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Qr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw Hs("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Hs("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Hs("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Hs("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Hs("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class kO extends RO{initXhr(){this.xhr_.responseType="text"}}function Ii(){return new kO}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AO{constructor(e,n,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=r,this._mappings=AI(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=i=>{if(this._request=void 0,this._chunkMultiplier=1,i._codeEquals(pe.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const s=this.isExponentialBackoffExpired();if(EI(i.status,[]))if(s)i=gI();else{this.sleepTime=Math.max(this.sleepTime*2,CL),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=i,this._transition("error")}},this._metadataErrorHandler=i=>{this._request=void 0,i._codeEquals(pe.CANCELED)?this.completeTransitions_():(this._error=i,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((i,s)=>{this._resolve=i,this._reject=s,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,r])=>{switch(this._state){case"running":e(n,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const r=EO(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,Ii,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._uploadUrl=s,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,r)=>{const i=TO(this._ref.storage,this._ref._location,e,this._blob),s=this._ref.storage._makeRequest(i,Ii,n,r);this._request=s,s.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=M_*this._chunkMultiplier,n=new fu(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((i,s)=>{let o;try{o=IO(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(u){this._error=u,this._transition("error");return}const l=this._ref.storage._makeRequest(o,Ii,i,s,!1);this._request=l,l.getPromise().then(u=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(u.current),u.finalized?(this._metadata=u.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){M_*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const r=yO(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(r,Ii,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const r=wO(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,Ii,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=yI(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=vh(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,r,i){const s=new SO(n||void 0,r||void 0,i||void 0);return this._addObserver(s),()=>{this._removeObserver(s)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(vh(this._state)){case pt.SUCCESS:vi(this._resolve.bind(null,this.snapshot))();break;case pt.CANCELED:case pt.ERROR:const n=this._reject;vi(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(vh(this._state)){case pt.RUNNING:case pt.PAUSED:e.next&&vi(e.next.bind(e,this.snapshot))();break;case pt.SUCCESS:e.complete&&vi(e.complete.bind(e))();break;case pt.CANCELED:case pt.ERROR:e.error&&vi(e.error.bind(e,this._error))();break;default:e.error&&vi(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(e,n){this._service=e,n instanceof Pt?this._location=n:this._location=Pt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new ai(e,n)}get root(){const e=new Pt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return kI(this._location.path)}get storage(){return this._service}get parent(){const e=uO(this._location.path);if(e===null)return null;const n=new Pt(this._location.bucket,e);return new ai(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw BL(e)}}function PO(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new AO(t,new ar(e),n)}function CO(t){t._throwIfRoot("getDownloadURL");const e=_O(t.storage,t._location,AI());return t.storage.makeRequestWithTokens(e,Ii).then(n=>{if(n===null)throw jL();return n})}function xO(t,e){const n=cO(t._location.path,e),r=new Pt(t._location.bucket,n);return new ai(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NO(t){return/^[A-Za-z]+:\/\//.test(t)}function bO(t,e){return new ai(t,e)}function bI(t,e){if(t instanceof Yp){const n=t;if(n._bucket==null)throw ML();const r=new ai(n,n._bucket);return e!=null?bI(r,e):r}else return e!==void 0?xO(t,e):t}function DO(t,e){if(e&&NO(e)){if(t instanceof Yp)return bO(t,e);throw Fd("To use ref(service, url), the first argument must be a Storage instance.")}else return bI(t,e)}function U_(t,e){const n=e==null?void 0:e[mI];return n==null?null:Pt.makeFromBucketSpec(n,t)}function LO(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:OE(i,t.app.options.projectId))}class Yp{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=pI,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=AL,this._maxUploadRetryTime=PL,this._requests=new Set,i!=null?this._bucket=Pt.makeFromBucketSpec(i,this._host):this._bucket=U_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Pt.makeFromBucketSpec(this._url,e):this._bucket=U_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){V_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){V_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ai(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new $L(vI());{const o=ZL(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const j_="@firebase/storage",F_="0.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DI="storage";function LI(t,e,n){return t=Ne(t),PO(t,e,n)}function OI(t){return t=Ne(t),CO(t)}function VI(t,e){return t=Ne(t),DO(t,e)}function OO(t=Lu(),e){t=Ne(t);const r=Nr(t,DI).getImmediate({identifier:e}),i=bE("storage");return i&&VO(r,...i),r}function VO(t,e,n,r={}){LO(t,e,n,r)}function MO(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Yp(n,r,i,e,hi)}function UO(){en(new Bt(DI,MO,"PUBLIC").setMultipleInstances(!0)),Et(j_,F_,""),Et(j_,F_,"esm2017")}UO();const jO={apiKey:"AIzaSyC1fqVrxJRZEHpsPZO9RaYtFQkEVR-3C9E",authDomain:"sportswebsite-99dbc.firebaseapp.com",projectId:"sportswebsite-99dbc",storageBucket:"sportswebsite-99dbc.firebasestorage.app",messagingSenderId:"259459488532",appId:"1:259459488532:web:115b959c0e2456693cc001",measurementId:"G-VPZP1ZEL0C"},ic=$E(jO);IL(ic);const bt=GN(ic);oD(ic);const MI=OO(ic);async function UI(){return(await Cp(Ku(bt,"players"))).docs.map(e=>({id:e.id,...e.data()}))}function FO(){const[t,e]=b.useState([]),[n,r]=b.useState(!0),[i,s]=b.useState(null);b.useEffect(()=>{UI().then(u=>{console.log("✅ Players from Firestore:",u);const c=[...u].sort((d,p)=>{const m=parseInt((d.playerId||"").replace("PTBA-",""),10)||0,T=parseInt((p.playerId||"").replace("PTBA-",""),10)||0;return m-T});e(c),r(!1)}).catch(u=>{console.error("❌ Firestore error:",u),s(u.message),r(!1)})},[]);const o=t.filter(u=>u.gender==="girl"),l=t.filter(u=>u.gender==="boy");return{girls:o,boys:l,loading:n,error:i}}function BO(){const{girls:t,boys:e,loading:n,error:r}=FO(),[i,s]=b.useState(""),o=fs(),l=t,u=e,c=m=>m.filter(T=>T.name.toLowerCase().includes(i.toLowerCase())),d=c(l),p=c(u);return g.jsxs("div",{className:"home",children:[g.jsxs("h1",{className:"home__title",children:[g.jsx("span",{className:"home__title-ptba",children:"PT Badminton Academy"}),"Lets be a Professional Badminton Player"]}),g.jsxs("div",{className:"home__topbar",children:[g.jsx("button",{className:"coach-btn",onClick:()=>o("/coach"),children:"Coach Portal"}),g.jsx("button",{className:"attendance-btn",onClick:()=>o("/attendance"),children:"Attendance"}),g.jsxs("div",{className:"coach-box",children:[g.jsx("span",{className:"coach-box__name",children:"Coach : Pulindu Thenura"}),g.jsx("span",{className:"coach-box__sub",children:"( Sri Lanka Badminton )"})]}),g.jsxs("div",{className:"search-box",children:[g.jsx("label",{className:"search-box__label",htmlFor:"playerSearch",children:"Search :"}),g.jsx("input",{id:"playerSearch",className:"search-box__input",type:"text",placeholder:"Search players...",value:i,onChange:m=>s(m.target.value)}),g.jsx(PP,{size:18,color:"#aaa"})]})]}),r&&g.jsxs("p",{className:"home__error",children:["⚠️ Could not load player data. Check your Firebase config. (",r,")"]}),g.jsx("div",{className:"section-row girls",children:g.jsx("div",{className:"cards-grid",children:d.map(m=>g.jsx(my,{player:m,loading:n},m.id))})}),g.jsx("div",{className:"section-row boys",children:g.jsx("div",{className:"cards-grid",children:p.map(m=>g.jsx(my,{player:m,loading:n},m.id))})})]})}function $O(t){const[e,n]=b.useState(null),[r,i]=b.useState(!0),[s,o]=b.useState(null);return b.useEffect(()=>{t&&(i(!0),Yu(yn(bt,"players",t)).then(l=>{l.exists()?n({id:l.id,...l.data()}):o("Player not found."),i(!1)}).catch(l=>{o(l.message),i(!1)}))},[t]),{player:e,loading:r,error:s,setPlayer:n}}function Ho({onUpload:t,label:e="Upload Photo",currentURL:n,shape:r="rect"}){const i=b.useRef(null),[s,o]=b.useState(0),[l,u]=b.useState("idle"),[c,d]=b.useState(""),[p,m]=b.useState(n||""),T=async R=>{const P=R.target.files[0];if(!P)return;const N=URL.createObjectURL(P);m(N),u("uploading"),o(0),d("");try{const v=await t(P,w=>o(w));m(v),u("done"),setTimeout(()=>u("idle"),3e3)}catch(v){u("error"),d(v.message),m(n||"")}R.target.value=""};return g.jsxs("div",{className:`img-uploader img-uploader--${r}`,children:[p&&g.jsx("div",{className:`img-uploader__preview img-uploader__preview--${r}`,children:g.jsx("img",{src:p,alt:"Preview"})}),g.jsxs("button",{className:`img-uploader__btn ${l==="uploading"?"uploading":""}`,onClick:()=>{var R;return(R=i.current)==null?void 0:R.click()},disabled:l==="uploading",type:"button",children:[l==="uploading"&&g.jsx(AP,{size:14,className:"spin"}),l==="done"&&g.jsx(Kf,{size:14}),l==="error"&&g.jsx(kP,{size:14}),l==="idle"&&g.jsx(xP,{size:14}),l==="uploading"?`Uploading ${s}%`:l==="done"?"Uploaded!":l==="error"?"Failed — retry":e]}),l==="uploading"&&g.jsx("div",{className:"img-uploader__bar",children:g.jsx("div",{className:"img-uploader__fill",style:{width:`${s}%`}})}),l==="error"&&g.jsx("p",{className:"img-uploader__error",children:c}),g.jsx("input",{ref:i,type:"file",accept:"image/*",style:{display:"none"},onChange:T})]})}async function Bd(t,e,n,r){if(!t.type.startsWith("image/"))throw new Error("Please select a valid image file.");if(t.size>5*1024*1024)throw new Error("Image must be smaller than 5MB.");const i=t.name.split(".").pop(),s=`players/${e}/${n}_${Date.now()}.${i}`,o=VI(MI,s);return new Promise((l,u)=>{const c=LI(o,t);c.on("state_changed",d=>{const p=Math.round(d.bytesTransferred/d.totalBytes*100);r&&r(p)},d=>u(d),async()=>{try{const d=await OI(c.snapshot.ref);await Ju(yn(bt,"players",e),{[n]:d}),l(d)}catch(d){u(d)}})})}async function B_(t,e,n){if(!t.type.startsWith("image/"))throw new Error("Please select a valid image file.");if(t.size>5*1024*1024)throw new Error("Image must be smaller than 5MB.");const r=t.name.split(".").pop(),i=`coach/${e}_${Date.now()}.${r}`,s=VI(MI,i);return new Promise((o,l)=>{const u=LI(s,t);u.on("state_changed",c=>{const d=Math.round(c.bytesTransferred/c.totalBytes*100);n&&n(d)},c=>l(c),async()=>{try{const c=await OI(u.snapshot.ref);await Ju(yn(bt,"academy","coach_profile"),{[e]:c}),o(c)}catch(c){l(c)}})})}function zO({player:t,loading:e,onPhotoUploaded:n}){const r=(t==null?void 0:t.gender)==="girl",i=({label:s,value:o})=>g.jsxs("div",{className:"profile-field-row",children:[g.jsx("span",{className:"profile-field-label",children:s}),g.jsx("span",{className:`profile-field-value ${e?"skeleton":o?"":"empty"}`,children:!e&&(o||"—")})]});return g.jsxs("div",{className:"profile-card",children:[g.jsxs("div",{className:"profile-photo-section",children:[g.jsx("div",{className:`profile-photo-wrap ${e?"skeleton":""}`,children:!e&&(t!=null&&t.profilePhotoURL?g.jsx("img",{src:t.profilePhotoURL,alt:t.name}):r?g.jsx(Gf,{}):g.jsx(Qf,{}))}),!e&&g.jsx(Ho,{label:"Upload Profile Photo",currentURL:t==null?void 0:t.profilePhotoURL,shape:"rect",onUpload:(s,o)=>Bd(s,t.id,"profilePhotoURL",o).then(l=>(n("profilePhotoURL",l),l))})]}),g.jsxs("div",{className:"profile-info",children:[g.jsx("h1",{className:`profile-info__name ${e?"skeleton":""}`,children:!e&&((t==null?void 0:t.name)||"—")}),g.jsxs("div",{className:"profile-fields",children:[g.jsx(i,{label:"PTBA Player ID :",value:t==null?void 0:t.playerId}),g.jsx(i,{label:"Age :",value:t!=null&&t.age?`${t.age} years`:""}),g.jsx(i,{label:"Level :",value:t==null?void 0:t.level}),g.jsx(i,{label:"School :",value:t==null?void 0:t.school}),g.jsx(i,{label:"Date of Birth :",value:t==null?void 0:t.dateOfBirth}),g.jsx(i,{label:"Age Category :",value:t==null?void 0:t.ageCategory}),g.jsx(i,{label:"SLBA Player ID :",value:t==null?void 0:t.slbaPlayerId}),g.jsx(i,{label:"National Ranking (*if) :",value:t==null?void 0:t.nationalRanking})]})]})]})}function HO(){return g.jsxs("div",{className:"coming-soon",children:[g.jsx("div",{className:"coming-soon__icon",children:"📈"}),g.jsx("h3",{children:"Progress Tracker"}),g.jsx("p",{children:"Training progress, skill evaluations and performance charts will appear here."})]})}function qO(){return g.jsxs("div",{className:"coming-soon",children:[g.jsx("div",{className:"coming-soon__icon",children:"🏆"}),g.jsx("h3",{children:"Achievements"}),g.jsx("p",{children:"Tournament results, medals and milestones will appear here."})]})}function WO(){const{id:t}=AA(),e=fs(),{player:n,loading:r,error:i,setPlayer:s}=$O(t),[o,l]=b.useState("profile"),u=(d,p)=>{s(m=>({...m,[d]:p}))},c=[{key:"profile",label:"Profile"},{key:"progress",label:"Progress Tracker"},{key:"achievements",label:"Achievements"}];return g.jsxs("div",{className:"profile-page",children:[g.jsxs("div",{className:"profile-page__header",children:[g.jsxs("button",{className:"header-back-btn",onClick:()=>e("/"),children:[g.jsx(Wf,{size:16})," Back"]}),g.jsx("h2",{children:"Player Information"})]}),g.jsx("div",{className:"profile-tabs",children:c.map(d=>g.jsx("button",{className:`tab-btn ${o===d.key?"active":"inactive"}`,onClick:()=>l(d.key),children:d.label},d.key))}),g.jsxs("div",{className:"profile-content",children:[i&&g.jsxs("p",{className:"profile-error",children:["⚠️ ",i]}),o==="profile"&&g.jsx(zO,{player:n,loading:r,onPhotoUploaded:u}),o==="progress"&&g.jsx(HO,{}),o==="achievements"&&g.jsx(qO,{})]})]})}const $d="coach_profile";async function KO(){const t=yn(bt,"academy",$d),e=await Yu(t);if(e.exists())return{id:e.id,...e.data()};const n={coachId:"",name:"W.P. Pulindu Thenura",title:"Head Coach — PT Badminton Academy",nationality:"Sri Lankan",category:"National Elite / Professional",email:"",phone:"",bio:"",profilePhotoURL:"",coverPhotoURL:""};return await xp(t,n),{id:$d,...n}}async function GO(t){const e=yn(bt,"academy",$d);await Ju(e,t)}async function QO(){return(await Cp(Ku(bt,"players"))).docs.map(e=>({id:e.id,...e.data()})).sort((e,n)=>{const r=parseInt((e.playerId||"").replace("PTBA-",""),10)||0,i=parseInt((n.playerId||"").replace("PTBA-",""),10)||0;return r-i})}async function XO(t,e){const{playerId:n,...r}=e,i=yn(bt,"players",t);await Ju(i,r)}function YO(){const[t,e]=b.useState(null),[n,r]=b.useState(!0),[i,s]=b.useState(!1),[o,l]=b.useState(null);return b.useEffect(()=>{KO().then(c=>{e(c),r(!1)}).catch(c=>{l(c.message),r(!1)})},[]),{coach:t,loading:n,saving:i,error:o,saveCoach:async c=>{s(!0);try{await GO(c),e(d=>({...d,...c}))}catch(d){l(d.message)}finally{s(!1)}}}}function Jn({label:t,value:e,fieldKey:n,onSave:r,locked:i=!1,textarea:s=!1}){const[o,l]=b.useState(!1),[u,c]=b.useState(e||"");b.useEffect(()=>{c(e||"")},[e]);const d=()=>{r(n,u),l(!1)},p=()=>{c(e||""),l(!1)};return g.jsxs("div",{className:"ef-row",children:[g.jsx("span",{className:"ef-label",children:t}),g.jsx("div",{className:"ef-right",children:o?g.jsxs(g.Fragment,{children:[s?g.jsx("textarea",{className:"ef-input ef-textarea",value:u,onChange:m=>c(m.target.value),autoFocus:!0}):g.jsx("input",{className:"ef-input",value:u,onChange:m=>c(m.target.value),autoFocus:!0}),g.jsx("button",{className:"ef-btn save",onClick:d,children:g.jsx(RE,{size:13})}),g.jsx("button",{className:"ef-btn cancel",onClick:p,children:g.jsx(AE,{size:13})})]}):g.jsxs(g.Fragment,{children:[g.jsx("span",{className:`ef-value ${e?"":"ef-empty"}`,children:e||"— not set —"}),!i&&g.jsx("button",{className:"ef-btn edit",onClick:()=>l(!0),children:g.jsx(md,{size:13})}),i&&g.jsx("span",{className:"ef-lock",children:"🔒"})]})})]})}function JO({player:t,onClose:e,onSaved:n}){const r=[{key:"name",label:"Name"},{key:"age",label:"Age"},{key:"school",label:"School"},{key:"level",label:"Level"},{key:"gender",label:"Gender (girl / boy)"},{key:"dateOfBirth",label:"Date of Birth"},{key:"ageCategory",label:"Age Category"},{key:"slbaPlayerId",label:"SLBA Player ID"},{key:"nationalRanking",label:"National Ranking"}],[i,s]=b.useState({...t}),[o,l]=b.useState(!1),[u,c]=b.useState(!1),d=(m,T)=>s(R=>({...R,[m]:T})),p=async()=>{l(!0);try{await XO(t.id,i),c(!0),setTimeout(()=>{c(!1),n(t.id,i),e()},900)}catch(m){alert("Save failed: "+m.message)}finally{l(!1)}};return g.jsx("div",{className:"modal-overlay",onClick:e,children:g.jsxs("div",{className:"modal-box",onClick:m=>m.stopPropagation(),children:[g.jsxs("div",{className:"modal-header",children:[g.jsxs("h3",{children:["Edit — ",g.jsx("span",{children:t.name})]}),g.jsx("button",{className:"modal-close",onClick:e,children:g.jsx(AE,{size:18})})]}),g.jsxs("div",{className:"modal-body",children:[g.jsxs("div",{className:"ef-row",children:[g.jsx("span",{className:"ef-label",children:"PTBA Player ID"}),g.jsxs("div",{className:"ef-right",children:[g.jsx("span",{className:"ef-value",children:t.playerId}),g.jsx("span",{className:"ef-lock",children:"🔒"})]})]}),r.map(({key:m,label:T})=>g.jsxs("div",{className:"ef-row",children:[g.jsx("span",{className:"ef-label",children:T}),g.jsx("input",{className:"ef-input modal-input",value:i[m]||"",onChange:R=>d(m,R.target.value)})]},m)),g.jsxs("div",{className:"ef-row",children:[g.jsx("span",{className:"ef-label",children:"Homepage Photo"}),g.jsx("div",{className:"ef-right",style:{flexDirection:"column",alignItems:"flex-start",gap:6},children:g.jsx(Ho,{label:"Upload Card Photo",currentURL:i.photoURL,shape:"rect",onUpload:(m,T)=>Bd(m,t.id,"photoURL",T).then(R=>(d("photoURL",R),R))})})]}),g.jsxs("div",{className:"ef-row",children:[g.jsx("span",{className:"ef-label",children:"Profile Photo"}),g.jsx("div",{className:"ef-right",style:{flexDirection:"column",alignItems:"flex-start",gap:6},children:g.jsx(Ho,{label:"Upload Profile Photo",currentURL:i.profilePhotoURL,shape:"rect",onUpload:(m,T)=>Bd(m,t.id,"profilePhotoURL",T).then(R=>(d("profilePhotoURL",R),R))})})]})]}),g.jsxs("div",{className:"modal-footer",children:[g.jsx("button",{className:"btn-cancel",onClick:e,children:"Cancel"}),g.jsx("button",{className:"btn-save",onClick:p,disabled:o||u,children:u?"✅ Saved!":o?"Saving...":"Save Changes"})]})]})})}function ZO(){const t=fs(),{coach:e,loading:n,saving:r,saveCoach:i}=YO(),[s,o]=b.useState([]),[l,u]=b.useState(!0),[c,d]=b.useState("profile"),[p,m]=b.useState(null),[T,R]=b.useState("");b.useEffect(()=>{QO().then(C=>{o(C),u(!1)}).catch(()=>u(!1))},[]);const P=(C,V)=>i({[C]:V}),N=(C,V)=>{o(M=>M.map(I=>I.id===C?{...I,...V}:I))},v=s.filter(C=>(C.name||"").toLowerCase().includes(T.toLowerCase())||(C.playerId||"").toLowerCase().includes(T.toLowerCase())),w=v.filter(C=>C.gender==="girl"),E=v.filter(C=>C.gender==="boy");return g.jsxs("div",{className:"coach-page",children:[g.jsxs("div",{className:"coach-cover",style:{backgroundImage:e!=null&&e.coverPhotoURL?`url(${e.coverPhotoURL})`:"none"},children:[g.jsx("div",{className:"coach-cover__overlay"}),g.jsxs("button",{className:"back-btn",onClick:()=>t("/"),children:[g.jsx(Wf,{size:16})," Back to Academy"]}),!(e!=null&&e.coverPhotoURL)&&g.jsx("p",{className:"cover-hint",children:"Upload a cover photo below in My Profile → Photos"})]}),g.jsxs("div",{className:"coach-hero",children:[g.jsx("div",{className:"coach-avatar-wrap",children:e!=null&&e.profilePhotoURL?g.jsx("img",{src:e.profilePhotoURL,alt:"Coach",className:"coach-avatar-img"}):g.jsx("div",{className:"coach-avatar-placeholder",children:g.jsx(py,{size:52,color:"#aaa"})})}),g.jsxs("div",{className:"coach-hero__info",children:[g.jsxs("div",{className:"coach-hero__badge",children:[g.jsx(CP,{size:14})," Head Coach"]}),g.jsx("h1",{className:"coach-hero__name",children:n?"Loading...":(e==null?void 0:e.name)||"W.P. Pulindu Thenura"}),g.jsx("p",{className:"coach-hero__title",children:(e==null?void 0:e.title)||"PT Badminton Academy · Sri Lanka"})]}),g.jsxs("div",{className:"coach-hero__stats",children:[g.jsxs("div",{className:"stat-pill",children:[g.jsx("span",{className:"stat-num",children:s.filter(C=>C.gender==="girl").length}),g.jsx("span",{className:"stat-lbl",children:"Girls"})]}),g.jsxs("div",{className:"stat-pill",children:[g.jsx("span",{className:"stat-num",children:s.filter(C=>C.gender==="boy").length}),g.jsx("span",{className:"stat-lbl",children:"Boys"})]}),g.jsxs("div",{className:"stat-pill",children:[g.jsx("span",{className:"stat-num",children:s.length}),g.jsx("span",{className:"stat-lbl",children:"Total"})]})]})]}),g.jsxs("div",{className:"coach-tabs",children:[g.jsxs("button",{className:`coach-tab ${c==="profile"?"active":""}`,onClick:()=>d("profile"),children:[g.jsx(py,{size:15})," My Profile"]}),g.jsxs("button",{className:`coach-tab ${c==="players"?"active":""}`,onClick:()=>d("players"),children:[g.jsx(kE,{size:15})," Manage Players"]})]}),g.jsxs("div",{className:"coach-content",children:[c==="profile"&&g.jsxs("div",{className:"profile-section",children:[g.jsxs("div",{className:"section-card",children:[g.jsx("h3",{className:"section-card__title",children:"Coach Information"}),g.jsx("p",{className:"section-card__sub",children:"Click the ✏️ icon on any field to edit. Changes save directly to Firebase."}),g.jsx(Jn,{label:"Coach ID",fieldKey:"coachId",value:e==null?void 0:e.coachId,onSave:P}),g.jsx(Jn,{label:"Full Name",fieldKey:"name",value:e==null?void 0:e.name,onSave:P}),g.jsx(Jn,{label:"Title",fieldKey:"title",value:e==null?void 0:e.title,onSave:P}),g.jsx(Jn,{label:"Nationality",fieldKey:"nationality",value:e==null?void 0:e.nationality,onSave:P}),g.jsx(Jn,{label:"Category",fieldKey:"category",value:e==null?void 0:e.category,onSave:P}),g.jsx(Jn,{label:"Email",fieldKey:"email",value:e==null?void 0:e.email,onSave:P}),g.jsx(Jn,{label:"Phone",fieldKey:"phone",value:e==null?void 0:e.phone,onSave:P}),g.jsx(Jn,{label:"Bio",fieldKey:"bio",value:e==null?void 0:e.bio,onSave:P,textarea:!0})]}),g.jsxs("div",{className:"section-card",children:[g.jsx("h3",{className:"section-card__title",children:"Photos"}),g.jsx("p",{className:"section-card__sub",children:"Select an image file from your device — it uploads directly to Firebase Storage."}),g.jsxs("div",{className:"ef-row",children:[g.jsx("span",{className:"ef-label",children:"Profile Photo"}),g.jsx("div",{className:"ef-right",style:{flexDirection:"column",alignItems:"flex-start",gap:8},children:g.jsx(Ho,{label:"Upload Profile Photo",currentURL:e==null?void 0:e.profilePhotoURL,shape:"circle",onUpload:(C,V)=>B_(C,"profilePhotoURL",V).then(M=>(i({profilePhotoURL:M}),M))})})]}),g.jsxs("div",{className:"ef-row",children:[g.jsx("span",{className:"ef-label",children:"Cover Photo"}),g.jsx("div",{className:"ef-right",style:{flexDirection:"column",alignItems:"flex-start",gap:8},children:g.jsx(Ho,{label:"Upload Cover Photo",currentURL:e==null?void 0:e.coverPhotoURL,shape:"rect",onUpload:(C,V)=>B_(C,"coverPhotoURL",V).then(M=>(i({coverPhotoURL:M}),M))})})]})]}),r&&g.jsx("p",{className:"saving-indicator",children:"💾 Saving to Firebase..."})]}),c==="players"&&g.jsxs("div",{className:"players-section",children:[g.jsx("div",{className:"players-search-bar",children:g.jsx("input",{className:"players-search",placeholder:"Search by name or PTBA ID...",value:T,onChange:C=>R(C.target.value)})}),l?g.jsx("p",{className:"loading-text",children:"Loading players..."}):g.jsxs(g.Fragment,{children:[w.length>0&&g.jsxs("div",{className:"players-group",children:[g.jsx("h4",{className:"players-group__title girls-title",children:"🏸 Girls"}),g.jsxs("div",{className:"players-table",children:[g.jsxs("div",{className:"table-header",children:[g.jsx("span",{children:"ID"}),g.jsx("span",{children:"Name"}),g.jsx("span",{children:"Age"}),g.jsx("span",{children:"School"}),g.jsx("span",{children:"Level"}),g.jsx("span",{children:"Actions"})]}),w.map(C=>g.jsxs("div",{className:"table-row",children:[g.jsx("span",{className:"pid-badge",children:C.playerId||"—"}),g.jsx("span",{children:C.name||"—"}),g.jsx("span",{children:C.age||"—"}),g.jsx("span",{className:"truncate",children:C.school||"—"}),g.jsx("span",{children:C.level||"—"}),g.jsxs("button",{className:"edit-player-btn",onClick:()=>m(C),children:[g.jsx(md,{size:13})," Edit"]})]},C.id))]})]}),E.length>0&&g.jsxs("div",{className:"players-group",children:[g.jsx("h4",{className:"players-group__title boys-title",children:"🏸 Boys"}),g.jsxs("div",{className:"players-table",children:[g.jsxs("div",{className:"table-header",children:[g.jsx("span",{children:"ID"}),g.jsx("span",{children:"Name"}),g.jsx("span",{children:"Age"}),g.jsx("span",{children:"School"}),g.jsx("span",{children:"Level"}),g.jsx("span",{children:"Actions"})]}),E.map(C=>g.jsxs("div",{className:"table-row",children:[g.jsx("span",{className:"pid-badge",children:C.playerId||"—"}),g.jsx("span",{children:C.name||"—"}),g.jsx("span",{children:C.age||"—"}),g.jsx("span",{className:"truncate",children:C.school||"—"}),g.jsx("span",{children:C.level||"—"}),g.jsxs("button",{className:"edit-player-btn",onClick:()=>m(C),children:[g.jsx(md,{size:13})," Edit"]})]},C.id))]})]})]})]})]}),p&&g.jsx(JO,{player:p,onClose:()=>m(null),onSaved:N})]})}function eV(){return new Date().toISOString().split("T")[0]}function $_(t){return new Date(t+"T00:00:00").toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"})}async function tV(t){const e=yn(bt,"attendance",t),n=await Yu(e);return n.exists()?n.data():{date:t,records:{},totalPresent:0,totalAbsent:0}}async function nV(t,e){const n=Object.values(e),r=n.filter(o=>o==="present").length,i=n.filter(o=>o==="absent").length,s={date:t,records:e,totalPresent:r,totalAbsent:i,updatedAt:new Date().toISOString()};return await xp(yn(bt,"attendance",t),s),s}async function rV(){return(await Cp(Ku(bt,"attendance"))).docs.map(e=>e.id).sort((e,n)=>n.localeCompare(e))}function iV(t){const[e,n]=b.useState([]),[r,i]=b.useState({}),[s,o]=b.useState({totalPresent:0,totalAbsent:0}),[l,u]=b.useState(!0),[c,d]=b.useState(!1),[p,m]=b.useState(!1),[T,R]=b.useState(null),P=b.useCallback(async()=>{u(!0);try{const[w,E]=await Promise.all([UI(),tV(t)]),C=[...w].sort((V,M)=>{const I=parseInt((V.playerId||"").replace("PTBA-",""),10)||0,_=parseInt((M.playerId||"").replace("PTBA-",""),10)||0;return I-_});n(C),i(E.records||{}),o({totalPresent:E.totalPresent||0,totalAbsent:E.totalAbsent||0})}catch(w){R(w.message)}finally{u(!1)}},[t]);return b.useEffect(()=>{P()},[P]),{players:e,records:r,stats:s,loading:l,saving:c,saved:p,error:T,mark:(w,E)=>{m(!1),i(C=>{const V={...C,[w]:E},M=Object.values(V);return o({totalPresent:M.filter(I=>I==="present").length,totalAbsent:M.filter(I=>I==="absent").length}),V})},save:async()=>{d(!0);try{await nV(t,r),m(!0),setTimeout(()=>m(!1),2500)}catch(w){R(w.message)}finally{d(!1)}}}}function sV(){const[t,e]=b.useState([]),[n,r]=b.useState(!0);return b.useEffect(()=>{rV().then(i=>{e(i),r(!1)}).catch(()=>r(!1))},[]),{dates:t,loading:n}}function z_({player:t,status:e,onMark:n,index:r}){const i=t.gender==="girl";return g.jsxs("div",{className:`att-row att-row--${e||"unmarked"}`,style:{animationDelay:`${r*.05}s`},children:[g.jsxs("div",{className:"att-row__player",children:[g.jsx("div",{className:"att-row__avatar",children:t.photoURL?g.jsx("img",{src:t.photoURL,alt:t.name}):i?g.jsx(Gf,{}):g.jsx(Qf,{})}),g.jsxs("div",{className:"att-row__info",children:[g.jsx("span",{className:"att-row__name",children:t.name||"—"}),g.jsx("span",{className:"att-row__id",children:t.playerId})]})]}),g.jsxs("div",{className:"att-row__actions",children:[g.jsxs("button",{className:`att-btn att-btn--present ${e==="present"?"active":""}`,onClick:()=>n(t.id,e==="present"?"":"present"),children:[g.jsx(Kf,{size:15}),"Present"]}),g.jsxs("button",{className:`att-btn att-btn--absent ${e==="absent"?"active":""}`,onClick:()=>n(t.id,e==="absent"?"":"absent"),children:[g.jsx(SE,{size:15}),"Absent"]})]}),g.jsxs("div",{className:"att-row__status",children:[e==="present"&&g.jsx("span",{className:"status-pill present",children:"✓ Present"}),e==="absent"&&g.jsx("span",{className:"status-pill absent",children:"✗ Absent"}),!e&&g.jsx("span",{className:"status-pill unmarked",children:"— Unmarked"})]})]})}function oV(){const t=fs(),[e,n]=b.useState(eV()),[r,i]=b.useState(!1),{players:s,records:o,stats:l,loading:u,saving:c,saved:d,error:p,mark:m,save:T}=iV(e),{dates:R}=sV(),P=s.filter(E=>E.gender==="girl"),N=s.filter(E=>E.gender==="boy"),v=s.length,w=v-l.totalPresent-l.totalAbsent;return g.jsxs("div",{className:"att-page",children:[g.jsx("div",{className:"att-header",children:g.jsxs("div",{className:"att-header__top",children:[g.jsxs("button",{className:"att-back-btn",onClick:()=>t("/"),children:[g.jsx(Wf,{size:16})," Back"]}),g.jsxs("div",{className:"att-header__title",children:[g.jsx("span",{className:"att-header__badge",children:"PT Badminton Academy"}),g.jsx("h1",{children:"Attendance Register"})]})]})}),g.jsxs("div",{className:"att-controls",children:[g.jsxs("div",{className:"att-date-section",children:[g.jsxs("div",{className:"att-date-card",children:[g.jsx(fy,{size:18,className:"att-date-icon"}),g.jsxs("div",{children:[g.jsx("p",{className:"att-date-label",children:"Session Date"}),g.jsx("p",{className:"att-date-display",children:$_(e)})]}),g.jsx("input",{type:"date",className:"att-date-input",value:e,onChange:E=>n(E.target.value)})]}),R.length>0&&g.jsxs("div",{className:"att-history",children:[g.jsxs("button",{className:"att-history-btn",onClick:()=>i(!r),children:[g.jsx(fy,{size:14})," Past Sessions (",R.length,")",g.jsx(RP,{size:14,className:r?"rotated":""})]}),r&&g.jsx("div",{className:"att-history-list",children:R.map(E=>g.jsx("button",{className:`att-history-item ${E===e?"active":""}`,onClick:()=>{n(E),i(!1)},children:$_(E)},E))})]})]}),g.jsxs("div",{className:"att-stats",children:[g.jsxs("div",{className:"att-stat att-stat--total",children:[g.jsx(kE,{size:20}),g.jsx("span",{className:"att-stat__num",children:v}),g.jsx("span",{className:"att-stat__lbl",children:"Total"})]}),g.jsxs("div",{className:"att-stat att-stat--present",children:[g.jsx(Kf,{size:20}),g.jsx("span",{className:"att-stat__num",children:l.totalPresent}),g.jsx("span",{className:"att-stat__lbl",children:"Present"})]}),g.jsxs("div",{className:"att-stat att-stat--absent",children:[g.jsx(SE,{size:20}),g.jsx("span",{className:"att-stat__num",children:l.totalAbsent}),g.jsx("span",{className:"att-stat__lbl",children:"Absent"})]}),g.jsxs("div",{className:"att-stat att-stat--unmarked",children:[g.jsx("span",{className:"att-stat__dash",children:"—"}),g.jsx("span",{className:"att-stat__num",children:w}),g.jsx("span",{className:"att-stat__lbl",children:"Unmarked"})]})]})]}),v>0&&g.jsxs("div",{className:"att-progress-wrap",children:[g.jsxs("div",{className:"att-progress-bar",children:[g.jsx("div",{className:"att-progress-fill present",style:{width:`${l.totalPresent/v*100}%`}}),g.jsx("div",{className:"att-progress-fill absent",style:{width:`${l.totalAbsent/v*100}%`,marginLeft:`${l.totalPresent/v*100}%`}})]}),g.jsxs("p",{className:"att-progress-label",children:[v>0?Math.round(l.totalPresent/v*100):0,"% attendance rate"]})]}),g.jsxs("div",{className:"att-sheet",children:[p&&g.jsxs("p",{className:"att-error",children:["⚠️ ",p]}),u?g.jsx("div",{className:"att-loading",children:[...Array(8)].map((E,C)=>g.jsx("div",{className:"att-skeleton",style:{animationDelay:`${C*.06}s`}},C))}):g.jsxs(g.Fragment,{children:[P.length>0&&g.jsxs("div",{className:"att-group",children:[g.jsx("div",{className:"att-group__header girls",children:g.jsxs("span",{children:["🏸 Girls — ",P.length," players"]})}),P.map((E,C)=>g.jsx(z_,{player:E,status:o[E.id]||"",onMark:m,index:C},E.id))]}),N.length>0&&g.jsxs("div",{className:"att-group",children:[g.jsx("div",{className:"att-group__header boys",children:g.jsxs("span",{children:["🏸 Boys — ",N.length," players"]})}),N.map((E,C)=>g.jsx(z_,{player:E,status:o[E.id]||"",onMark:m,index:C+P.length},E.id))]})]})]}),g.jsx("div",{className:"att-save-bar",children:g.jsxs("div",{className:"att-save-bar__inner",children:[g.jsx("p",{className:"att-save-bar__info",children:d?"✅ Attendance saved to Firebase!":`${v-w} of ${v} players marked`}),g.jsxs("button",{className:`att-save-btn ${d?"saved":""}`,onClick:T,disabled:c||d,children:[g.jsx(RE,{size:16}),d?"Saved!":c?"Saving...":"Save Attendance"]})]})})]})}const H_=[{name:"Player 1",age:0,school:"",level:"",gender:"girl",photoURL:"",playerId:"",profilePhotoURL:"",dateOfBirth:"",ageCategory:"",slbaPlayerId:"",nationalRanking:""},{name:"Player 2",age:0,school:"",level:"",gender:"girl",photoURL:"",playerId:"",profilePhotoURL:"",dateOfBirth:"",ageCategory:"",slbaPlayerId:"",nationalRanking:""},{name:"Player 3",age:0,school:"",level:"",gender:"girl",photoURL:"",playerId:"",profilePhotoURL:"",dateOfBirth:"",ageCategory:"",slbaPlayerId:"",nationalRanking:""},{name:"Player 4",age:0,school:"",level:"",gender:"girl",photoURL:"",playerId:"",profilePhotoURL:"",dateOfBirth:"",ageCategory:"",slbaPlayerId:"",nationalRanking:""},{name:"Player 5",age:0,school:"",level:"",gender:"boy",photoURL:"",playerId:"",profilePhotoURL:"",dateOfBirth:"",ageCategory:"",slbaPlayerId:"",nationalRanking:""},{name:"Player 6",age:0,school:"",level:"",gender:"boy",photoURL:"",playerId:"",profilePhotoURL:"",dateOfBirth:"",ageCategory:"",slbaPlayerId:"",nationalRanking:""},{name:"Player 7",age:0,school:"",level:"",gender:"boy",photoURL:"",playerId:"",profilePhotoURL:"",dateOfBirth:"",ageCategory:"",slbaPlayerId:"",nationalRanking:""},{name:"Player 8",age:0,school:"",level:"",gender:"boy",photoURL:"",playerId:"",profilePhotoURL:"",dateOfBirth:"",ageCategory:"",slbaPlayerId:"",nationalRanking:""}];async function aV(){const t=yn(bt,"academy","seed_lock");if((await Yu(t)).exists()){console.log("✅ Seed lock exists — skipping seed.");return}await xp(t,{seeded:!0,seededAt:new Date().toISOString()}),console.log("🔒 Seed lock created."),console.log("🌱 Seeding 8 default player slots...");for(let n=0;n<H_.length;n++){const r=`PTBA-${String(n+1).padStart(3,"0")}`;await ab(Ku(bt,"players"),{...H_[n],playerId:r}),console.log(`✅ Added: ${r}`)}console.log("🎉 Done seeding!")}function lV(){const t=b.useRef(!1);return b.useEffect(()=>{t.current||(t.current=!0,aV())},[]),g.jsx(dP,{children:g.jsx("div",{className:"app",children:g.jsxs($A,{children:[g.jsx(Qs,{path:"/",element:g.jsx(BO,{})}),g.jsx(Qs,{path:"/player/:id",element:g.jsx(WO,{})}),g.jsx(Qs,{path:"/coach",element:g.jsx(ZO,{})}),g.jsx(Qs,{path:"/attendance",element:g.jsx(oV,{})})]})})})}wh.createRoot(document.getElementById("root")).render(g.jsx(bS.StrictMode,{children:g.jsx(lV,{})}));
