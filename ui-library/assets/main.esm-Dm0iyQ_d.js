import{c as e,o as t,r as n}from"./iframe-C-YIR-TZ.js";import{t as r}from"./jsx-runtime-D93oHKJy.js";import{t as i}from"./react-dom-BcTXru-r.js";var a=e(n());function o(...e){return t=>{let n=[];for(let r of e)if(typeof r==`function`){let e=r(t);typeof e==`function`&&n.push(e)}else r&&(r.current=t);if(n.length)return()=>{for(let e of n)e()}}}function s(...e){return(0,a.useMemo)(()=>o(...e),e)}function c(e){return e==null?[]:Array.isArray(e)?e:[e]}var l=e=>typeof e==`object`&&!!e,u=e=>typeof e==`string`,d=e=>typeof e==`function`,f=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),p=e=>Object.prototype.toString.call(e),m=Function.prototype.toString,h=m.call(Object),g=e=>{if(!l(e)||p(e)!=`[object Object]`||y(e))return!1;let t=Object.getPrototypeOf(e);if(t===null)return!0;let n=f(t,`constructor`)&&t.constructor;return typeof n==`function`&&n instanceof n&&m.call(n)==h},_=e=>typeof e==`object`&&!!e&&`$$typeof`in e&&`props`in e,v=e=>typeof e==`object`&&!!e&&`__v_isVNode`in e,y=e=>_(e)||v(e),b=e=>e(),x=(...e)=>(...t)=>{e.forEach(function(e){e?.(...t)})},{floor:S,abs:ee,round:te,min:ne,max:C,pow:re,sign:w}=Math;function T(e){if(!g(e)||e===void 0)return e;let t=Reflect.ownKeys(e).filter(e=>typeof e==`string`),n={};for(let r of t){let t=e[r];t!==void 0&&(n[r]=T(t))}return n}function E(...e){e.length===1?e[0]:e[1],e.length===2&&e[0]}function D(e,t){if(e==null)throw Error(t())}var ie=()=>void 0,O=e=>typeof e==`object`&&!!e,k=e=>e?``:void 0,ae=e=>e?`true`:void 0,A=e=>O(e)&&e.nodeType===1&&typeof e.nodeName==`string`,oe=e=>O(e)&&e.nodeType===9,se=e=>O(e)&&e===e.window,ce=e=>A(e)?e.localName||``:`#document`;function le(e){return[`html`,`body`,`#document`].includes(ce(e))}var ue=e=>O(e)&&e.nodeType!==void 0,de=e=>ue(e)&&e.nodeType===11&&`host`in e,fe=e=>A(e)&&e.localName===`input`,pe=e=>A(e)?e.offsetWidth>0||e.offsetHeight>0||e.getClientRects().length>0:!1;function me(e){if(!e)return!1;let t=e.getRootNode();return be(t)===e}var he=/(textarea|select)/;function ge(e){if(e==null||!A(e))return!1;try{return fe(e)&&e.selectionStart!=null||he.test(e.localName)||e.isContentEditable||e.getAttribute(`contenteditable`)===`true`||e.getAttribute(`contenteditable`)===``}catch{return!1}}function _e(e,t){if(!e||!t||!A(e)||!A(t))return!1;let n=t.getRootNode?.();if(e===t||e.contains(t))return!0;if(n&&de(n)){let n=t;for(;n;){if(e===n)return!0;n=n.parentNode||n.host}}return!1}function j(e){return oe(e)?e:se(e)?e.document:e?.ownerDocument??document}function ve(e){return j(e).documentElement}function ye(e){return de(e)?ye(e.host):oe(e)?e.defaultView??window:A(e)?e.ownerDocument?.defaultView??window:window}function be(e){let t=e.activeElement;for(;t?.shadowRoot;){let e=t.shadowRoot.activeElement;if(!e||e===t)break;t=e}return t}function xe(e){if(ce(e)===`html`)return e;let t=e.assignedSlot||e.parentNode||de(e)&&e.host||ve(e);return de(t)?t.host:t}var Se=new WeakMap;function Ce(e){return Se.has(e)||Se.set(e,ye(e).getComputedStyle(e)),Se.get(e)}var we=()=>typeof document<`u`;function Te(){return navigator.userAgentData?.platform??navigator.platform}var Ee=e=>we()&&e.test(Te()),De=()=>we()&&!!navigator.maxTouchPoints,Oe=()=>Ee(/^iPhone/i),ke=()=>Ee(/^iPad/i)||je()&&navigator.maxTouchPoints>1,Ae=()=>Oe()||ke(),je=()=>Ee(/^Mac/i);function Me(e){return e.composedPath?.()??e.nativeEvent?.composedPath?.()}function Ne(e){return Me(e)?.[0]??e.target}var Pe=e=>e.button===2||je()&&e.ctrlKey&&e.button===0,M=(e,t,n,r)=>{let i=typeof e==`function`?e():e;return i?.addEventListener(t,n,r),()=>{i?.removeEventListener(t,n,r)}},Fe=e=>A(e)&&e.tagName===`IFRAME`,Ie=e=>!Number.isNaN(parseInt(e.getAttribute(`tabindex`)||`0`,10)),Le=e=>parseInt(e.getAttribute(`tabindex`)||`0`,10)<0,Re=`input:not([type='hidden']):not([disabled]), select:not([disabled]), textarea:not([disabled]), a[href], button:not([disabled]), [tabindex], iframe, object, embed, area[href], audio[controls], video[controls], [contenteditable]:not([contenteditable='false']), details > summary:first-of-type`,ze=(e,t=!1)=>{if(!e)return[];let n=Array.from(e.querySelectorAll(Re));(t==1||t==`if-empty`&&n.length===0)&&A(e)&&N(e)&&n.unshift(e);let r=n.filter(N);return r.forEach((e,t)=>{if(Fe(e)&&e.contentDocument){let n=e.contentDocument.body;r.splice(t,1,...ze(n))}}),r};function N(e){return!e||e.closest(`[inert]`)?!1:e.matches(`input:not([type='hidden']):not([disabled]), select:not([disabled]), textarea:not([disabled]), a[href], button:not([disabled]), [tabindex], iframe, object, embed, area[href], audio[controls], video[controls], [contenteditable]:not([contenteditable='false']), details > summary:first-of-type`)&&pe(e)}function Be(e,t){if(!e)return[];let n=Array.from(e.querySelectorAll(Re)),r=n.filter(P);return t&&P(e)&&r.unshift(e),r.forEach((e,t)=>{if(Fe(e)&&e.contentDocument){let n=e.contentDocument.body,i=Be(n);r.splice(t,1,...i)}}),!r.length&&t?n:r}function P(e){return e!=null&&e.tabIndex>0?!0:N(e)&&!Le(e)}function Ve(e){return e.tabIndex<0&&(/^(audio|video|details)$/.test(e.localName)||ge(e))&&!Ie(e)?0:e.tabIndex}function He(e){let t,n=globalThis.requestAnimationFrame(()=>{t=e()});return()=>{globalThis.cancelAnimationFrame(n),t?.()}}function Ue(e){let t=xe(e);return le(t)?j(t).body:A(t)&&Ke(t)?t:Ue(t)}var We=/auto|scroll|overlay|hidden|clip/,Ge=new Set([`inline`,`contents`]);function Ke(e){let{overflow:t,overflowX:n,overflowY:r,display:i}=ye(e).getComputedStyle(e);return We.test(t+r+n)&&!Ge.has(i)}function qe(e,t){if(!e)return ie;let n=Object.keys(t).reduce((t,n)=>(t[n]=e.style.getPropertyValue(n),t),{});return Object.assign(e.style,t),()=>{Object.assign(e.style,n),e.style.length===0&&e.removeAttribute(`style`)}}function Je(e,t,n){if(!e)return ie;let r=e.style.getPropertyValue(t);return e.style.setProperty(t,n),()=>{e.style.setProperty(t,r),e.style.length===0&&e.removeAttribute(`style`)}}function Ye(e,t,n){let{signal:r}=t;return[new Promise((t,i)=>{let a=setTimeout(()=>{i(Error(`Timeout of ${n}ms exceeded`))},n);r.addEventListener(`abort`,()=>{clearTimeout(a),i(Error(`Promise aborted`))}),e.then(e=>{r.aborted||(clearTimeout(a),t(e))}).catch(e=>{r.aborted||(clearTimeout(a),i(e))})}),()=>t.abort()]}function Xe(e,t){let{timeout:n,rootNode:r}=t,i=ye(r),a=j(r),o=new i.AbortController;return Ye(new Promise(t=>{let n=e();if(n){t(n);return}let r=new i.MutationObserver(()=>{let n=e();n&&n.isConnected&&(r.disconnect(),t(n))});r.observe(a.body,{childList:!0,subtree:!0})}),o,n)}var Ze=(...e)=>e.map(e=>e?.trim?.()).filter(Boolean).join(` `),Qe=/((?:--)?(?:\w+-?)+)\s*:\s*([^;]*)/g,$e=e=>{let t={},n;for(;n=Qe.exec(e);)t[n[1]]=n[2];return t},et=(e,t)=>{if(u(e)){if(u(t))return`${e};${t}`;e=$e(e)}else u(t)&&(t=$e(t));return Object.assign({},e??{},t??{})};function tt(...e){let t={};for(let n of e){if(!n)continue;for(let e in t){if(e.startsWith(`on`)&&typeof t[e]==`function`&&typeof n[e]==`function`){t[e]=x(n[e],t[e]);continue}if(e===`className`||e===`class`){t[e]=Ze(t[e],n[e]);continue}if(e===`style`){t[e]=et(t[e],n[e]);continue}t[e]=n[e]===void 0?t[e]:n[e]}for(let e in n)t[e]===void 0&&(t[e]=n[e]);let e=Object.getOwnPropertySymbols(n);for(let r of e)t[r]=n[r]}return t}function nt(e){return e}var rt=(e=>(e.NotStarted=`Not Started`,e.Started=`Started`,e.Stopped=`Stopped`,e))(rt||{}),it=`__init__`;function at(e){let t=()=>e.getRootNode?.()??document,n=()=>j(t()),r=()=>n().defaultView??window,i=()=>be(t()),a=e=>t().getElementById(e);return{...e,getRootNode:t,getDoc:n,getWin:r,getActiveElement:i,isActiveElement:me,getById:a}}var F=e(r()),ot=()=>{};function st(e){let t=Object.getOwnPropertyDescriptor(e.props,`ref`)?.get,n=t&&`isReactWarning`in t&&t.isReactWarning;return n?e.ref:(t=Object.getOwnPropertyDescriptor(e,`ref`)?.get,n=t&&`isReactWarning`in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}var ct=e=>{let t=(0,a.memo)((0,a.forwardRef)((t,n)=>{let{asChild:r,render:i,children:s,...c}=t,[l]=(0,a.useState)(()=>i||ot);if(l(),!r)return(0,F.jsx)(e,{...c,ref:n,children:s});if(!(0,a.isValidElement)(s))return null;let u=a.Children.only(s),d=st(u);return(0,a.cloneElement)(u,{...tt(c,u.props),ref:n?o(n,d):d})}));return t.displayName=e.displayName||e.name,t},I=(()=>{let e=new Map;return new Proxy(ct,{apply(e,t,n){return ct(n[0])},get(t,n){let r=n;return e.has(r)||e.set(r,ct(r)),e.get(r)}})})(),lt=e=>(0,F.jsx)(`svg`,{width:`1em`,height:`1em`,viewBox:`0 0 48 48`,fill:`currentColor`,xmlns:`http://www.w3.org/2000/svg`,...e,children:(0,F.jsxs)(`g`,{children:[(0,F.jsx)(`rect`,{x:22,width:4,height:12,rx:2,opacity:1}),(0,F.jsx)(`rect`,{x:22,y:36,width:4,height:12,rx:2,opacity:.2}),(0,F.jsx)(`rect`,{y:26,width:4,height:12,rx:2,transform:`rotate(-90 0 26)`,opacity:.2}),(0,F.jsx)(`rect`,{x:36,y:26,width:4,height:12,rx:2,transform:`rotate(-90 36 26)`,opacity:.2}),(0,F.jsx)(`rect`,{x:5.61523,y:8.4436,width:4,height:12,rx:2,transform:`rotate(-45 5.61523 8.4436)`,opacity:.2}),(0,F.jsx)(`rect`,{x:31.0703,y:33.8995,width:4,height:12,rx:2,transform:`rotate(-45 31.0703 33.8995)`,opacity:.2}),(0,F.jsx)(`rect`,{x:8.44336,y:42.3848,width:4,height:12,rx:2,transform:`rotate(-135 8.44336 42.3848)`,opacity:.2}),(0,F.jsx)(`rect`,{x:33.8984,y:16.9288,width:4,height:12,rx:2,transform:`rotate(-135 33.8984 16.9288)`,opacity:.2}),(0,F.jsx)(`animateTransform`,{attributeName:`transform`,type:`rotate`,values:`0 24 24; 45 24 24; 90 24 24; 135 24 24; 180 24 24; 225 24 24; 270 24 24; 315 24 24`,dur:`0.8s`,repeatCount:`indefinite`,calcMode:`discrete`})]})});function ut(e){return t=>{let n={};for(let r in e){let[i=e[r],a={}]=t[r]??[];n[r]=(0,F.jsx)(i,{...a})}return n}}function dt(e){let[t,n]=(0,a.useState)(!1),r=(0,a.useRef)(null);return(0,a.useEffect)(()=>{let t=r.current;if(t){if(e===!0){let e=t.offsetWidth;t.style.width=`${e}px`,t.setAttribute(`data-loading`,`true`),n(!0)}e===!1&&t.hasAttribute(`data-loading`)&&n(!1)}},[e]),(0,a.useEffect)(()=>{let e=r.current;e&&t===!1&&e.hasAttribute(`data-loading`)&&(e.style.width=``,e.removeAttribute(`data-loading`))},[t]),{isShowSpin:t,ref:r}}var ft=e=>(0,F.jsx)(`svg`,{width:`1em`,height:`1em`,viewBox:`0 0 24 24`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,...e,children:(0,F.jsx)(`path`,{d:`M18 6.00005L6 18M5.99995 6L17.9999 18`,stroke:`currentColor`,strokeWidth:1.5,strokeLinecap:`round`,strokeLinejoin:`round`})}),pt=e=>(0,F.jsxs)(`svg`,{width:`1em`,height:`1em`,viewBox:`0 0 24 24`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,...e,children:[(0,F.jsx)(`path`,{d:`M2.54961 13.4056C2.2778 13.0326 2.1419 12.8462 2.04835 12.4854C1.98388 12.2367 1.98388 11.7633 2.04835 11.5146C2.1419 11.1538 2.2778 10.9674 2.54961 10.5944C4.03902 8.55068 7.30262 5 12 5C16.6974 5 19.961 8.55068 21.4504 10.5944C21.7222 10.9674 21.8581 11.1538 21.9516 11.5146C22.0161 11.7633 22.0161 12.2367 21.9516 12.4854C21.8581 12.8462 21.7222 13.0326 21.4504 13.4056C19.961 15.4493 16.6974 19 12 19C7.30262 19 4.03902 15.4493 2.54961 13.4056Z`,stroke:`currentColor`,strokeWidth:1.5,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,F.jsx)(`path`,{d:`M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z`,stroke:`currentColor`,strokeWidth:1.5,strokeLinecap:`round`,strokeLinejoin:`round`})]}),mt=e=>(0,F.jsx)(`svg`,{width:`1em`,height:`1em`,viewBox:`0 0 24 24`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,...e,children:(0,F.jsx)(`path`,{d:`M17.357 6.643L21 3M17.357 6.643C19.2348 7.84324 20.619 9.45359 21.4504 10.5944C21.7222 10.9674 21.8581 11.1538 21.9516 11.5146C22.0161 11.7633 22.0161 12.2367 21.9516 12.4854C21.8581 12.8462 21.7222 13.0326 21.4504 13.4056C19.961 15.4493 16.6974 19 12 19C9.92469 19 8.12923 18.3069 6.64299 17.357M17.357 6.643L13.4142 10.5858M2.99998 21L6.64299 17.357M6.64299 17.357L10.5858 13.4142M3.86085 15C3.33198 14.4297 2.8935 13.8775 2.54961 13.4056C2.2778 13.0326 2.1419 12.8462 2.04835 12.4854C1.98388 12.2367 1.98388 11.7633 2.04835 11.5146C2.1419 11.1538 2.2778 10.9674 2.54961 10.5944C4.03902 8.55068 7.30262 5 12 5C12.5904 5 13.1582 5.05609 13.7026 5.15824M13.4142 10.5858C13.7761 10.9477 14 11.4477 14 12C14 13.1046 13.1045 14 12 14C11.4477 14 10.9477 13.7761 10.5858 13.4142M13.4142 10.5858L10.5858 13.4142`,stroke:`currentColor`,strokeWidth:1.5,strokeLinecap:`round`,strokeLinejoin:`round`})});function ht(e){return new Proxy({},{get(t,n){return n===`style`?t=>e({style:t}).style:e}})}var gt=()=>e=>Array.from(new Set(e)),_t=e(i(),1),vt=globalThis.document===void 0?a.useEffect:a.useLayoutEffect;function yt(e){let t=e().value??e().defaultValue,n=e().isEqual??Object.is,[r]=(0,a.useState)(t),[i,o]=(0,a.useState)(r),s=e().value!==void 0,c=(0,a.useRef)(i);c.current=s?e().value:i;let l=(0,a.useRef)(c.current);vt(()=>{l.current=c.current},[i,e().value]);let u=t=>{let r=l.current,i=d(t)?t(r):t;e().debug&&console.log(`[bindable > ${e().debug}] setValue`,{next:i,prev:r}),s||o(i),n(i,r)||e().onChange?.(i,r)};function f(){return s?e().value:i}return{initial:r,ref:c,get:f,set(t){(e().sync?_t.flushSync:b)(()=>u(t))},invoke(t,n){e().onChange?.(t,n)},hash(t){return e().hash?.(t)??String(t)}}}yt.cleanup=e=>{(0,a.useEffect)(()=>e,[])},yt.ref=e=>{let t=(0,a.useRef)(e);return{get:()=>t.current,set:e=>{t.current=e}}};function bt(e){let t=(0,a.useRef)(e);return{get(e){return t.current[e]},set(e,n){t.current[e]=n}}}var xt=(e,t)=>{let n=(0,a.useRef)(!1),r=(0,a.useRef)(!1);(0,a.useEffect)(()=>{if(n.current&&r.current)return t();r.current=!0},[...(e??[]).map(e=>typeof e==`function`?e():e)]),(0,a.useEffect)(()=>(n.current=!0,()=>{n.current=!1}),[])};function St(e,t={}){let n=(0,a.useMemo)(()=>{let{id:e,ids:n,getRootNode:r}=t;return at({id:e,ids:n,getRootNode:r})},[t]),r=(...t)=>{e.debug&&console.log(...t)},i=e.props?.({props:T(t),scope:n})??t,o=wt(i),s=e.context?.({prop:o,bindable:yt,scope:n,flush:Tt,getContext(){return f},getComputed(){return ne},getRefs(){return y},getEvent(){return _()}}),l=Ct(s),f={get(e){return l.current?.[e].ref.current},set(e,t){l.current?.[e].set(t)},initial(e){return l.current?.[e].initial},hash(e){let t=l.current?.[e].get();return l.current?.[e].hash(t)}},p=(0,a.useRef)(new Map),m=(0,a.useRef)(null),h=(0,a.useRef)(null),g=(0,a.useRef)({type:``}),_=()=>({...g.current,current(){return g.current},previous(){return h.current}}),v=()=>({...C,matches(...e){return e.includes(C.ref.current)},hasTag(t){return!!e.states[C.ref.current]?.tags?.includes(t)}}),y=bt(e.refs?.({prop:o,context:f})??{}),b=()=>({state:v(),context:f,event:_(),prop:o,send:O,action:x,guard:S,track:xt,refs:y,computed:ne,flush:Tt,scope:n,choose:te}),x=t=>{let n=d(t)?t(b()):t;if(!n)return;let r=n.map(t=>{let n=e.implementations?.actions?.[t];return n||E(`[zag-js] No implementation found for action "${JSON.stringify(t)}"`),n});for(let e of r)e?.(b())},S=t=>d(t)?t(b()):e.implementations?.guards?.[t](b()),ee=t=>{let n=d(t)?t(b()):t;if(!n)return;let r=n.map(t=>{let n=e.implementations?.effects?.[t];return n||E(`[zag-js] No implementation found for effect "${JSON.stringify(t)}"`),n}),i=[];for(let e of r){let t=e?.(b());t&&i.push(t)}return()=>i.forEach(e=>e?.())},te=e=>c(e).find(e=>{let t=!e.guard;return u(e.guard)?t=!!S(e.guard):d(e.guard)&&(t=e.guard(b())),t}),ne=t=>{D(e.computed,()=>`[zag-js] No computed object found on machine`);let r=e.computed[t];return r({context:f,event:_(),prop:o,refs:y,scope:n,computed:ne})},C=yt(()=>({defaultValue:e.initialState({prop:o}),onChange(t,n){n&&(p.current.get(n)?.(),p.current.delete(n)),n&&x(e.states[n]?.exit),x(m.current?.actions);let r=ee(e.states[t]?.effects);if(r&&p.current.set(t,r),n===`__init__`){x(e.entry);let t=ee(e.effects);t&&p.current.set(it,t)}x(e.states[t]?.entry)}})),re=(0,a.useRef)(void 0),w=(0,a.useRef)(rt.NotStarted);vt(()=>{queueMicrotask(()=>{let e=w.current===rt.Started;w.current=rt.Started,r(e?`rehydrating...`:`initializing...`);let t=re.current??C.initial;C.invoke(t,e?C.get():it)});let t=p.current,n=C.ref.current;return()=>{r(`unmounting...`),re.current=n,w.current=rt.Stopped,t.forEach(e=>e?.()),p.current=new Map,m.current=null,queueMicrotask(()=>{x(e.exit)})}},[]);let ie=()=>`ref`in C?C.ref.current:C.get(),O=t=>{queueMicrotask(()=>{if(w.current!==rt.Started)return;h.current=g.current,g.current=t;let n=ie(),i=e.states[n].on?.[t.type]??e.on?.[t.type],a=te(i);if(!a)return;m.current=a;let o=a.target??n;r(`transition`,t.type,a.target||n,`(${a.actions})`);let s=o!==n;s?(0,_t.flushSync)(()=>C.set(o)):a.reenter&&!s?C.invoke(n,n):x(a.actions??[])})};return e.watch?.(b()),{state:v(),send:O,context:f,prop:o,scope:n,refs:y,computed:ne,event:_(),getStatus:()=>w.current}}function Ct(e){let t=(0,a.useRef)(e);return t.current=e,t}function wt(e){let t=Ct(e);return function(e){return t.current[e]}}function Tt(e){queueMicrotask(()=>{(0,_t.flushSync)(()=>e())})}var Et=ht(e=>e),Dt=ut({Spin:lt}),Ot=(0,a.forwardRef)(function(e,t){let{children:n,loading:r,disabled:i,components:o,icon:c,as:l,...u}=e,{isShowSpin:d,ref:f}=dt(r),p=(0,a.useRef)(null),m=s(p,t,f),h=(()=>l?I[l]:`button`)(),g=Dt({Spin:[lt,{}],...o}),_=(()=>d?g.Spin:n)(),v=tt(u,{role:h===`button`?void 0:`button`,disabled:d||i,"data-icon":k(!!c),ref:m});return(0,F.jsx)(h,{...v,children:_})});Ot.__docgenInfo={description:``,methods:[],displayName:`Button_default`};function kt(e,...t){let n={},r={};for(let i in e)t.includes(i)?Reflect.set(n,i,e[i]):Reflect.set(r,i,e[i]);return[n,r]}function At(e){var t,n,r=``;if(typeof e==`string`||typeof e==`number`)r+=e;else if(typeof e==`object`)if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=At(e[t]))&&(r&&(r+=` `),r+=n)}else for(n in e)e[n]&&(r&&(r+=` `),r+=n);return r}function jt(){for(var e,t,n=0,r=``,i=arguments.length;n<i;n++)(e=arguments[n])&&(t=At(e))&&(r&&(r+=` `),r+=t);return r}var Mt=jt,Nt=(...e)=>function(...t){for(let n of e)typeof n==`function`&&n.apply(this,t)};function L(e,...t){let n={...e};for(let e of t)Object.keys(e).forEach(t=>{if(t===`className`&&typeof e[t]==`string`){n[t]=Mt(n[t],e[t]);return}if(t.startsWith(`on`)&&typeof e[t]==`function`){n[t]=Nt(n[t],e[t]);return}if(t===`style`&&typeof e[t]==`object`){n[t]={...n[t],...e[t]};return}e[t]!==void 0&&(n[t]=e[t])});return Reflect.deleteProperty(n,`children`),n}var Pt=[`disabled`,`loading`,`classNames`,`variants`,`ref`];function Ft(e){let[{loading:t,classNames:n={},variants:r,disabled:i,ref:o},c]=kt(e,...Pt),{isShowSpin:l,ref:u}=dt(t),d=s(o,u),f=(0,a.useCallback)(()=>{let e=Object.entries(r??{}).reduce((e,[t,n])=>(typeof n==`boolean`&&(e[`data-button-${t}`]=k(n)),typeof n==`string`&&n&&(e[`data-button-${t}`]=n),e),{}),t=i||l;return{...c,...e,"data-disabled":k(t),disabled:t}},[c,r,i]),p=e=>({...e,className:n.spinner}),m=(0,a.useCallback)(e=>L({...f(),className:n.root,role:`button`},{...e}),[]),h=(0,a.useCallback)(e=>L({...f(),className:n.root,ref:d},{...e}),[]),g=(0,a.useCallback)(e=>L({...f(),className:n.root,role:`button`,ref:d},{...e}),[]);return{isShowSpin:l,getSpinnerProps:p,getBlockProps:m,getButtonProps:h,getLinkProps:g}}var It=(0,a.createContext)(void 0),Lt=(0,a.createContext)(void 0),Rt=(0,a.createContext)(void 0),zt=(e,t=[])=>({parts:(...n)=>{if(Vt(t))return zt(e,n);throw Error(`createAnatomy().parts(...) should only be called once. Did you mean to use .extendWith(...) ?`)},extendWith:(...n)=>zt(e,[...t,...n]),omit:(...n)=>zt(e,t.filter(e=>!n.includes(e))),rename:e=>zt(e,t),keys:()=>t,build:()=>[...new Set(t)].reduce((t,n)=>Object.assign(t,{[n]:{selector:[`&[data-scope="${Bt(e)}"][data-part="${Bt(n)}"]`,`& [data-scope="${Bt(e)}"][data-part="${Bt(n)}"]`].join(`, `),attrs:{"data-scope":Bt(e),"data-part":Bt(n)}}}),{})}),Bt=e=>e.replace(/([A-Z])([A-Z])/g,`$1-$2`).replace(/([a-z])([A-Z])/g,`$1-$2`).replace(/[\s_]+/g,`-`).toLowerCase(),Vt=e=>e.length===0,Ht=zt(`field`).parts(`root`,`label`,`helper`,`prefix`,`suffix`,`errorText`,`wrapper`,`passwordControl`,`input`,`select`,`textarea`);zt(`dialog`).parts(`trigger`,`closeTrigger`,`backdrop`,`positioner`,`content`,`title`,`description`,`action`);var R=Ht.build();Ht.keys();function Ut(e,t){return`${e} returned \`undefined\`. Seems you forgot to wrap component within ${t}`}function Wt(e={}){let{name:t,strict:n=!0,hookName:r=`useContext`,providerName:i=`Provider`,errorMessage:o,defaultValue:s}=e,c=(0,a.createContext)(s);c.displayName=t;function l(){let e=(0,a.useContext)(c);if(!e&&n){let e=Error(o??Ut(r,i));throw e.name=`ContextError`,Error.captureStackTrace?.(e,l),e}return e}return[c.Provider,l,c.Consumer]}var Gt={getDocument:()=>document,getWindow:()=>window,getRootNode:()=>document.body},[Kt,qt]=Wt({name:`EnvironmentContext`,hookName:`useEnvironmentContext`,providerName:`<EnvironmentProvider />`,strict:!1,defaultValue:Gt}),Jt=e=>{let{ids:t={},classNames:n={},disabled:r=!1,invalid:i=!1,valid:o=!1,readOnly:s=!1,required:c=!1,type:l=`text`}=e,u=qt(),d=(0,a.useId)(),f=e.id??d,p=t.root??`field__${f}`,m=t.label??`field__${f}__label`,h=t.errorText??`field__${f}__error-text`,g=t.passwordControl??`field__${f}__password-control`,_=t.helper??`field__${f}__helper`,v=t.prefix??`field__${f}__prefix`,y=t.suffix??`field__${f}__suffix`,b=t.wrapper??`field__${f}__wrapper`,[x,S]=(0,a.useState)({errorText:!1,helper:!1,prefix:!1,suffix:!1,passwordControl:!1,wrapper:!1}),ee=(0,a.useRef)(null),[te,ne]=(0,a.useState)(`password`),C=te===`text`,re=(0,a.useMemo)(()=>{let e=[],{errorText:t,helper:n,prefix:r,suffix:a}=x;return t&&i&&e.push(h),n&&e.push(_),r&&e.push(v),a&&e.push(y),e.join(` `)||void 0},[x,i,h,_,v,y]);(0,a.useEffect)(()=>{let e=ee.current;if(!e)return;let t=()=>{let e=u.getRootNode();S({errorText:!!e.querySelector(`#${h}`),helper:!!e.querySelector(`#${_}`),prefix:!!e.querySelector(`#${v}`),suffix:!!e.querySelector(`#${y}`),passwordControl:!!e.querySelector(`#${g}`),wrapper:!!e.querySelector(`#${b}`)})};t();let n=new(u.getWindow()).MutationObserver(t);return n.observe(e,{childList:!0,subtree:!0}),()=>n.disconnect()},[u,h,_,g,v,y,b]);let w=(0,a.useCallback)(e=>({...R.root.attrs,id:p,ref:ee,role:`group`,"data-disabled":k(r),"data-invalid":k(i),"data-valid":k(o),"data-readonly":k(s),...e}),[ee,r,i,o,s,p]),T=(0,a.useCallback)(e=>({id:f,"aria-describedby":re,"aria-invalid":ae(i),"data-disabled":k(r),"data-invalid":k(i),"data-valid":k(o),"data-required":k(c),"data-readonly":k(s),required:c,disabled:r,readOnly:s,...e}),[re,i,c,s,f,r]),E=(0,a.useCallback)(e=>L({...T(),...R.label.attrs,id:m,htmlFor:f,className:n.label},{...e}),[T,m,f]),D=(0,a.useCallback)(e=>L({...T(),...R.input.attrs,type:l===`password`?te:l,className:n.input},{...e}),[T,te,l]),ie=(0,a.useCallback)(e=>L({...T(),...R.textarea.attrs,className:n.textarea},{...e}),[T]),O=(0,a.useCallback)(e=>L({...T(),...R.select.attrs,className:n.select},{...e}),[T]),A=(0,a.useCallback)(e=>L({...T(),...R.helper.attrs,id:_,className:n.helper},{...e}),[T,_]),oe=(0,a.useCallback)(e=>L({...T(),...R.prefix.attrs,id:v,className:n.prefix},{...e}),[T,v]),se=(0,a.useCallback)(e=>L({...T(),...R.suffix.attrs,id:y,className:n.suffix},{...e}),[T,y]),ce=(0,a.useCallback)(e=>L({...T(),...R.errorText.attrs,id:h,"aria-live":`polite`,hidden:!i,className:n.errorText},{...e}),[T,h,i]),le=(0,a.useCallback)(e=>L({...T(),...R.wrapper.attrs,id:b,className:n.wrapper},{...e}),[T,b]),ue=(0,a.useCallback)(()=>{ne(e=>e===`text`?`password`:`text`)},[]),de=(0,a.useCallback)(e=>L({...T(),...R.passwordControl.attrs,id:g,role:`button`,tabIndex:-1,"aria-label":C?`Hide password`:`Show password`,onClick:ue,className:n.passwordControl},{...e}),[T,C,g]);return{isPasswordVisible:C,togglePasswordVisibility:ue,getRootProps:w,getLabelProps:E,getErrorTextProps:ce,getPasswordControlProps:de,getWrapperProps:le,getHelperProps:A,getPrefixProps:oe,getSuffixProps:se,getControlProps:T,getInputProps:D,getTextareaProps:ie,getSelectProps:O}};function Yt(e){let t=(0,a.createContext)(null);return{MachineProvider:({value:n,children:r})=>(0,F.jsx)(t.Provider,{value:e(n),children:r}),ServiceProvider:({value:e,children:n})=>(0,F.jsx)(t.Provider,{value:e,children:n}),Consumer:({children:e})=>(0,F.jsx)(t.Consumer,{children:t=>{if(t)return e(t);throw Error(`Component must be wrapped with Provider`)}}),useService:()=>{let e=(0,a.useContext)(t);if(!e)throw Error(`Component must be wrapped with Provider`);return e}}}var Xt=Yt(Jt),Zt=t((exports=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.suspense_list`),d=Symbol.for(`react.memo`),f=Symbol.for(`react.lazy`),p=Symbol.for(`react.view_transition`);function m(e){if(typeof e==`object`&&e){var m=e.$$typeof;switch(m){case t:switch(e=e.type,e){case r:case a:case i:case l:case u:case p:return e;default:switch(e&&=e.$$typeof,e){case s:case c:case f:case d:return e;case o:return e;default:return m}}case n:return m}}}exports.ForwardRef=c,exports.isMemo=function(e){return m(e)===d}})),Qt=e(t(((exports,t)=>{t.exports=Zt()}))()),$t=Symbol.for(`react.element`),en=Symbol.for(`react.transitional.element`),tn=Symbol.for(`react.fragment`),nn=Number(a.version.split(`.`)[0]),rn=()=>!!(typeof window<`u`&&window.document&&window.document.createElement);function an(e){return e&&typeof e==`object`&&(e.$$typeof===$t||e.$$typeof===en)&&e.type===tn}function on(e){return(0,a.isValidElement)(e)&&!an(e)}var sn=e=>{if(!e)return!1;if(on(e)&&nn>=19)return!0;let t=(0,Qt.isMemo)(e)?e.type.type:e.type;return!(typeof t==`function`&&!t.prototype?.render&&t.$$typeof!==Qt.ForwardRef||typeof e==`function`&&!e.prototype?.render&&e.$$typeof!==Qt.ForwardRef)};function cn(e){if(e&&on(e)){let t=e;return Object.prototype.propertyIsEnumerable.call(t.props,`ref`)?t.props.ref:t.ref}return null}var ln=`data-rc-order`,un=`data-rc-priority`,dn=`rc-util-key`,fn=new Map;function pn({mark:e}={}){return e?e.startsWith(`data-`)?e:`data-${e}`:dn}function mn(e,t=Gt){let n=t.getDocument();return e.attachTo?e.attachTo:n.querySelector(`head`)||n.body}function hn(e){return e===`queue`?`prependQueue`:e?`prepend`:`append`}function gn(e){return Array.from((fn.get(e)||e).children).filter(e=>e.tagName===`STYLE`)}function _n(e,t={},n=Gt){if(!rn())return null;let r=n.getDocument(),{csp:i,prepend:a,priority:o=0}=t,s=hn(a),c=s===`prependQueue`,l=r.createElement(`style`);l.setAttribute(ln,s),c&&o&&l.setAttribute(un,`${o}`),i?.nonce&&(l.nonce=i?.nonce),l.innerHTML=e;let u=mn(t),{firstChild:d}=u;if(a){if(c){let e=(t.styles||gn(u)).filter(e=>{if(![`prepend`,`prependQueue`].includes(e.getAttribute(`data-rc-order`)||``))return!1;let t=Number(e.getAttribute(`data-rc-priority`)||0);return o>=t});if(e.length)return u.insertBefore(l,e[e.length-1].nextSibling),l}u.insertBefore(l,d)}else u.appendChild(l);return l}function vn(e,t={}){let{styles:n}=t;return n||=gn(mn(t)),n.find(n=>n.getAttribute(pn(t))===e)}function yn(e,t={}){let n=vn(e,t);n&&mn(t).removeChild(n)}function bn(e,t,n=Gt){let r=n.getDocument(),i=fn.get(e);if(!i||!r.contains(i)){let n=_n(``,t);if(!n?.parentNode)return;fn.set(e,n.parentNode),e.removeChild(n)}}function xn(e,t,n={}){if(!rn())throw Error(`Can not execute in server side environment`);let r=mn(n),i=gn(r),a={...n,styles:i};bn(r,a);let o=vn(t,a);if(o)return a.csp?.nonce&&o.nonce!==a.csp?.nonce&&(o.nonce=a.csp?.nonce),o.innerHTML!==e&&(o.innerHTML=e),o;let s=_n(e,a);return s.setAttribute(pn(a),t),s}function Sn(e,t=Gt){let n=t.getDocument(),r=`rc-scrollbar-measure-${Math.random().toString(36).substring(7)}`,i=n.createElement(`div`);i.id=r;let a=i.style;a.position=`absolute`,a.left=`0`,a.top=`0`,a.width=`100px`,a.height=`100px`,a.overflow=`scroll`;let o=0,s=0;if(e){let t=getComputedStyle(e);a.scrollbarColor=t.scrollbarColor,a.scrollbarWidth=t.scrollbarWidth;let n=getComputedStyle(e,`::-webkit-scrollbar`),i=parseInt(n.width,10),c=parseInt(n.height,10);try{let e=i?`width: ${n.width};`:``,t=c?`height: ${n.height};`:``;xn(`
#${r}::-webkit-scrollbar {
  ${e}
  ${t}
}`,r)}catch(e){console.error(e),o=i,s=c}}n.body.appendChild(i);let c=e&&o&&!isNaN(o)?o:i.offsetWidth-i.clientWidth,l=e&&s&&!isNaN(s)?s:i.offsetHeight-i.clientHeight;return n.body.removeChild(i),yn(r),{width:c,height:l}}function Cn(e){return typeof document>`u`||!e||!(e instanceof Element)?{width:0,height:0}:Sn(e)}var wn=(()=>!!(typeof window<`u`&&window.document&&window.document.createElement))()?a.useLayoutEffect:a.useEffect,Tn=`rc-util-locker-${Date.now()}`,En=0;function Dn(e){let t=e.getDocument(),n=e.getWindow();return t.body.scrollHeight>(n.innerHeight||t.documentElement.clientHeight)&&n.innerWidth>t.body.offsetWidth}function On(e){let t=qt(),n=!!e,[r]=(0,a.useState)(()=>(En+=1,`${Tn}_${En}`));wn(()=>{if(n){let e=Cn(document.body).width,n=Dn(t);xn(`
html body {
  overflow-y: hidden;
  ${n?`width: calc(100% - ${e}px);`:``}
}`,r)}else yn(r);return()=>{yn(r)}},[n,r])}var kn=(0,a.createContext)(null),An=[];function jn(e){let t=qt(),[n]=(0,a.useState)(()=>rn()?t.getDocument().createElement(`div`):null),r=(0,a.useRef)(!1),i=(0,a.useContext)(kn),[o,s]=(0,a.useState)(An),c=i||(r.current?void 0:e=>{s(t=>[e,...t])});return wn(()=>{function a(){n.parentElement||t.getDocument().body.appendChild(n),r.current=!0}function o(){n.parentElement?.removeChild(n),r.current=!1}return e?i?i(a):a():o(),o},[n]),wn(()=>{o.length&&(o.forEach(e=>e()),s(An))},[o]),[n,c]}var Mn=e(i()),Nn=(e,t=Gt)=>{let n=t.getDocument();if(e===!1||!rn()||!e)return!1;if(typeof e==`string`)return n.querySelector(e)||!1;let r=typeof e==`function`?e():e;return n===r?n.body:r instanceof DocumentFragment||r instanceof Element?r:!1},Pn=(0,a.forwardRef)((e,t)=>{let{open:n,autoLock:r,getRootNode:i,autoDestroy:o=!0,children:c}=e,l=qt(),u=l.getDocument(),[d,f]=(0,a.useState)(n),p=i||l.getRootNode,m=d||n;(0,a.useEffect)(()=>{(o||n)&&f(n)},[n,o]);let[h,g]=(0,a.useState)(()=>Nn(p||!1,l));(0,a.useEffect)(()=>{let e=Nn(p||!1,l);g(e??null)},[p]);let[_,v]=jn(!!(m&&!h)),y=h??_;On(r&&n&&rn()&&(y===_||y===u.body));let b=null;c&&sn(c)&&t&&(b=cn(c));let x=s(b,t);if(!m||!rn()||h===void 0)return null;let S=(()=>{let e=c;if(c)return t&&(e=(0,a.cloneElement)(c,{ref:x})),y!==!1&&(e=t?(0,Mn.createPortal)(e,y):a.Children.map(c,e=>(0,Mn.createPortal)(e,y))),e})();return(0,F.jsx)(kn.Provider,{value:v,children:S})});Pn.__docgenInfo={description:``,methods:[],displayName:`Portal_default`};var Fn=e=>e.getBoundingClientRect(),In=({getPart:e})=>({onBeforeOpen:({next:t,preNext:n})=>{let r=e(`positioner`);r&&(n(),r.style.opacity=`0`,r.style.transition=`opacity 200ms`,Fn(r),r.style.opacity=`1`,r.addEventListener(`transitionend`,()=>{t()},{once:!0}))},onAfterOpen:()=>{let t=e(`positioner`);t&&(t.style.opacity=``,t.style.transition=``)},onBeforeClose:({next:t,preNext:n})=>{let r=e(`positioner`);r&&(n(),r.style.opacity=`1`,r.style.transition=`opacity 200ms`,Fn(r),r.style.opacity=`0`,r.addEventListener(`transitionend`,()=>{t()},{once:!0}))},onAfterClose:()=>{let t=e(`positioner`);t&&(t.style.opacity=``,t.style.transition=``)}});
/**
* @vue/shared v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Ln(e){let t=Object.create(null);for(let n of e.split(`,`))t[n]=1;return e=>e in t}var Rn={},zn=()=>{},Bn=Object.assign,Vn=(e,t)=>{let n=e.indexOf(t);n>-1&&e.splice(n,1)},Hn=Object.prototype.hasOwnProperty,Un=(e,t)=>Hn.call(e,t),z=Array.isArray,Wn=e=>Zn(e)===`[object Map]`,Gn=e=>Zn(e)===`[object Set]`,Kn=e=>typeof e==`function`,qn=e=>typeof e==`string`,Jn=e=>typeof e==`symbol`,Yn=e=>typeof e==`object`&&!!e,Xn=Object.prototype.toString,Zn=e=>Xn.call(e),Qn=e=>Zn(e).slice(8,-1),$n=e=>Zn(e)===`[object Object]`,er=e=>qn(e)&&e!==`NaN`&&e[0]!==`-`&&``+parseInt(e,10)===e,tr=(e,t)=>!Object.is(e,t),nr;function rr(){return nr}var B,ir=new WeakSet,ar=class{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,nr&&nr.active&&nr.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ir.has(this)&&(ir.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||lr(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,xr(this),fr(this);let e=B,t=V;B=this,V=!0;try{return this.fn()}finally{pr(this),B=e,V=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)gr(e);this.deps=this.depsTail=void 0,xr(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ir.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){mr(this)&&this.run()}get dirty(){return mr(this)}},or=0,sr,cr;function lr(e,t=!1){if(e.flags|=8,t){e.next=cr,cr=e;return}e.next=sr,sr=e}function ur(){or++}function dr(){if(--or>0)return;if(cr){let e=cr;for(cr=void 0;e;){let t=e.next;e.next=void 0,e.flags&=-9,e=t}}let e;for(;sr;){let t=sr;for(sr=void 0;t;){let n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(t){e||=t}t=n}}if(e)throw e}function fr(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function pr(e){let t,n=e.depsTail,r=n;for(;r;){let e=r.prevDep;r.version===-1?(r===n&&(n=e),gr(r),_r(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=e}e.deps=t,e.depsTail=n}function mr(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(hr(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function hr(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Sr)||(e.globalVersion=Sr,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!mr(e))))return;e.flags|=2;let t=e.dep,n=B,r=V;B=e,V=!0;try{fr(e);let n=e.fn(e._value);(t.version===0||tr(n,e._value))&&(e.flags|=128,e._value=n,t.version++)}catch(e){throw t.version++,e}finally{B=n,V=r,pr(e),e.flags&=-3}}function gr(e,t=!1){let{dep:n,prevSub:r,nextSub:i}=e;if(r&&(r.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let e=n.computed.deps;e;e=e.nextDep)gr(e,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function _r(e){let{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}var V=!0,vr=[];function yr(){vr.push(V),V=!1}function br(){let e=vr.pop();V=e===void 0?!0:e}function xr(e){let{cleanup:t}=e;if(e.cleanup=void 0,t){let e=B;B=void 0;try{t()}finally{B=e}}}var Sr=0,Cr=class{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}},wr=class{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!B||!V||B===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==B)t=this.activeLink=new Cr(B,this),B.deps?(t.prevDep=B.depsTail,B.depsTail.nextDep=t,B.depsTail=t):B.deps=B.depsTail=t,Tr(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){let e=t.nextDep;e.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=e),t.prevDep=B.depsTail,t.nextDep=void 0,B.depsTail.nextDep=t,B.depsTail=t,B.deps===t&&(B.deps=e)}return t}trigger(e){this.version++,Sr++,this.notify(e)}notify(e){ur();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{dr()}}};function Tr(e){if(e.dep.sc++,e.sub.flags&4){let t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let e=t.deps;e;e=e.nextDep)Tr(e)}let n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}var Er=new WeakMap,Dr=Symbol(``),Or=Symbol(``),kr=Symbol(``);function H(e,t,n){if(V&&B){let t=Er.get(e);t||Er.set(e,t=new Map);let r=t.get(n);r||(t.set(n,r=new wr),r.map=t,r.key=n),r.track()}}function U(e,t,n,r,i,a){let o=Er.get(e);if(!o){Sr++;return}let s=e=>{e&&e.trigger()};if(ur(),t===`clear`)o.forEach(s);else{let i=z(e),a=i&&er(n);if(i&&n===`length`){let e=Number(r);o.forEach((t,n)=>{(n===`length`||n===kr||!Jn(n)&&n>=e)&&s(t)})}else switch((n!==void 0||o.has(void 0))&&s(o.get(n)),a&&s(o.get(kr)),t){case`add`:i?a&&s(o.get(`length`)):(s(o.get(Dr)),Wn(e)&&s(o.get(Or)));break;case`delete`:i||(s(o.get(Dr)),Wn(e)&&s(o.get(Or)));break;case`set`:Wn(e)&&s(o.get(Dr));break}}dr()}function Ar(e){let t=K(e);return t===e?t:(H(t,`iterate`,kr),G(e)?t:t.map(q))}function jr(e){return H(e=K(e),`iterate`,kr),e}var Mr={__proto__:null,[Symbol.iterator](){return Nr(this,Symbol.iterator,q)},concat(...e){return Ar(this).concat(...e.map(e=>z(e)?Ar(e):e))},entries(){return Nr(this,`entries`,e=>(e[1]=q(e[1]),e))},every(e,t){return W(this,`every`,e,t,void 0,arguments)},filter(e,t){return W(this,`filter`,e,t,e=>e.map(q),arguments)},find(e,t){return W(this,`find`,e,t,q,arguments)},findIndex(e,t){return W(this,`findIndex`,e,t,void 0,arguments)},findLast(e,t){return W(this,`findLast`,e,t,q,arguments)},findLastIndex(e,t){return W(this,`findLastIndex`,e,t,void 0,arguments)},forEach(e,t){return W(this,`forEach`,e,t,void 0,arguments)},includes(...e){return Ir(this,`includes`,e)},indexOf(...e){return Ir(this,`indexOf`,e)},join(e){return Ar(this).join(e)},lastIndexOf(...e){return Ir(this,`lastIndexOf`,e)},map(e,t){return W(this,`map`,e,t,void 0,arguments)},pop(){return Lr(this,`pop`)},push(...e){return Lr(this,`push`,e)},reduce(e,...t){return Fr(this,`reduce`,e,t)},reduceRight(e,...t){return Fr(this,`reduceRight`,e,t)},shift(){return Lr(this,`shift`)},some(e,t){return W(this,`some`,e,t,void 0,arguments)},splice(...e){return Lr(this,`splice`,e)},toReversed(){return Ar(this).toReversed()},toSorted(e){return Ar(this).toSorted(e)},toSpliced(...e){return Ar(this).toSpliced(...e)},unshift(...e){return Lr(this,`unshift`,e)},values(){return Nr(this,`values`,q)}};function Nr(e,t,n){let r=jr(e),i=r[t]();return r!==e&&!G(e)&&(i._next=i.next,i.next=()=>{let e=i._next();return e.done||(e.value=n(e.value)),e}),i}var Pr=Array.prototype;function W(e,t,n,r,i,a){let o=jr(e),s=o!==e&&!G(e),c=o[t];if(c!==Pr[t]){let t=c.apply(e,a);return s?q(t):t}let l=n;o!==e&&(s?l=function(t,r){return n.call(this,q(t),r,e)}:n.length>2&&(l=function(t,r){return n.call(this,t,r,e)}));let u=c.call(o,l,r);return s&&i?i(u):u}function Fr(e,t,n,r){let i=jr(e),a=n;return i!==e&&(G(e)?n.length>3&&(a=function(t,r,i){return n.call(this,t,r,i,e)}):a=function(t,r,i){return n.call(this,t,q(r),i,e)}),i[t](a,...r)}function Ir(e,t,n){let r=K(e);H(r,`iterate`,kr);let i=r[t](...n);return(i===-1||i===!1)&&di(n[0])?(n[0]=K(n[0]),r[t](...n)):i}function Lr(e,t,n=[]){yr(),ur();let r=K(e)[t].apply(e,n);return dr(),br(),r}var Rr=Ln(`__proto__,__v_isRef,__isVue`),zr=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!==`arguments`&&e!==`caller`).map(e=>Symbol[e]).filter(Jn));function Br(e){Jn(e)||(e=String(e));let t=K(this);return H(t,`has`,e),t.hasOwnProperty(e)}var Vr=class{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,n){if(t===`__v_skip`)return e.__v_skip;let r=this._isReadonly,i=this._isShallow;if(t===`__v_isReactive`)return!r;if(t===`__v_isReadonly`)return r;if(t===`__v_isShallow`)return i;if(t===`__v_raw`)return n===(r?i?ri:ni:i?ti:ei).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(n)?e:void 0;let a=z(e);if(!r){let e;if(a&&(e=Mr[t]))return e;if(t===`hasOwnProperty`)return Br}let o=Reflect.get(e,t,J(e)?e:n);if((Jn(t)?zr.has(t):Rr(t))||(r||H(e,`get`,t),i))return o;if(J(o)){let e=a&&er(t)?o:o.value;return r&&Yn(e)?si(e):e}return Yn(o)?r?si(o):oi(o):o}},Hr=class extends Vr{constructor(e=!1){super(!1,e)}set(e,t,n,r){let i=e[t];if(!this._isShallow){let t=ui(i);if(!G(n)&&!ui(n)&&(i=K(i),n=K(n)),!z(e)&&J(i)&&!J(n))return t||(i.value=n),!0}let a=z(e)&&er(t)?Number(t)<e.length:Un(e,t),o=Reflect.set(e,t,n,J(e)?e:r);return e===K(r)&&(a?tr(n,i)&&U(e,`set`,t,n,i):U(e,`add`,t,n)),o}deleteProperty(e,t){let n=Un(e,t),r=e[t],i=Reflect.deleteProperty(e,t);return i&&n&&U(e,`delete`,t,void 0,r),i}has(e,t){let n=Reflect.has(e,t);return(!Jn(t)||!zr.has(t))&&H(e,`has`,t),n}ownKeys(e){return H(e,`iterate`,z(e)?`length`:Dr),Reflect.ownKeys(e)}},Ur=class extends Vr{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}},Wr=new Hr,Gr=new Ur,Kr=e=>e,qr=e=>Reflect.getPrototypeOf(e);function Jr(e,t,n){return function(...r){let i=this.__v_raw,a=K(i),o=Wn(a),s=e===`entries`||e===Symbol.iterator&&o,c=e===`keys`&&o,l=i[e](...r),u=n?Kr:t?fi:q;return!t&&H(a,`iterate`,c?Or:Dr),{next(){let{value:e,done:t}=l.next();return t?{value:e,done:t}:{value:s?[u(e[0]),u(e[1])]:u(e),done:t}},[Symbol.iterator](){return this}}}}function Yr(e){return function(...t){return e===`delete`?!1:e===`clear`?void 0:this}}function Xr(e,t){let n={get(n){let r=this.__v_raw,i=K(r),a=K(n);e||(tr(n,a)&&H(i,`get`,n),H(i,`get`,a));let{has:o}=qr(i),s=t?Kr:e?fi:q;if(o.call(i,n))return s(r.get(n));if(o.call(i,a))return s(r.get(a));r!==i&&r.get(n)},get size(){let t=this.__v_raw;return!e&&H(K(t),`iterate`,Dr),t.size},has(t){let n=this.__v_raw,r=K(n),i=K(t);return e||(tr(t,i)&&H(r,`has`,t),H(r,`has`,i)),t===i?n.has(t):n.has(t)||n.has(i)},forEach(n,r){let i=this,a=i.__v_raw,o=K(a),s=t?Kr:e?fi:q;return!e&&H(o,`iterate`,Dr),a.forEach((e,t)=>n.call(r,s(e),s(t),i))}};return Bn(n,e?{add:Yr(`add`),set:Yr(`set`),delete:Yr(`delete`),clear:Yr(`clear`)}:{add(e){!t&&!G(e)&&!ui(e)&&(e=K(e));let n=K(this);return qr(n).has.call(n,e)||(n.add(e),U(n,`add`,e,e)),this},set(e,n){!t&&!G(n)&&!ui(n)&&(n=K(n));let r=K(this),{has:i,get:a}=qr(r),o=i.call(r,e);o||=(e=K(e),i.call(r,e));let s=a.call(r,e);return r.set(e,n),o?tr(n,s)&&U(r,`set`,e,n,s):U(r,`add`,e,n),this},delete(e){let t=K(this),{has:n,get:r}=qr(t),i=n.call(t,e);i||=(e=K(e),n.call(t,e));let a=r?r.call(t,e):void 0,o=t.delete(e);return i&&U(t,`delete`,e,void 0,a),o},clear(){let e=K(this),t=e.size!==0,n=e.clear();return t&&U(e,`clear`,void 0,void 0,void 0),n}}),[`keys`,`values`,`entries`,Symbol.iterator].forEach(r=>{n[r]=Jr(r,e,t)}),n}function Zr(e,t){let n=Xr(e,t);return(t,r,i)=>r===`__v_isReactive`?!e:r===`__v_isReadonly`?e:r===`__v_raw`?t:Reflect.get(Un(n,r)&&r in t?n:t,r,i)}var Qr={get:Zr(!1,!1)},$r={get:Zr(!0,!1)},ei=new WeakMap,ti=new WeakMap,ni=new WeakMap,ri=new WeakMap;function ii(e){switch(e){case`Object`:case`Array`:return 1;case`Map`:case`Set`:case`WeakMap`:case`WeakSet`:return 2;default:return 0}}function ai(e){return e.__v_skip||!Object.isExtensible(e)?0:ii(Qn(e))}function oi(e){return ui(e)?e:ci(e,!1,Wr,Qr,ei)}function si(e){return ci(e,!0,Gr,$r,ni)}function ci(e,t,n,r,i){if(!Yn(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;let a=ai(e);if(a===0)return e;let o=i.get(e);if(o)return o;let s=new Proxy(e,a===2?r:n);return i.set(e,s),s}function li(e){return ui(e)?li(e.__v_raw):!!(e&&e.__v_isReactive)}function ui(e){return!!(e&&e.__v_isReadonly)}function G(e){return!!(e&&e.__v_isShallow)}function di(e){return e?!!e.__v_raw:!1}function K(e){let t=e&&e.__v_raw;return t?K(t):e}var q=e=>Yn(e)?oi(e):e,fi=e=>Yn(e)?si(e):e;function J(e){return e?e.__v_isRef===!0:!1}var pi={},mi=new WeakMap,hi=void 0;function gi(e,t=!1,n=hi){if(n){let t=mi.get(n);t||mi.set(n,t=[]),t.push(e)}}function _i(e,t,n=Rn){let{immediate:r,deep:i,once:a,scheduler:o,augmentJob:s,call:c}=n,l=e=>i?e:G(e)||i===!1||i===0?Y(e,1):Y(e),u,d,f,p,m=!1,h=!1;if(J(e)?(d=()=>e.value,m=G(e)):li(e)?(d=()=>l(e),m=!0):z(e)?(h=!0,m=e.some(e=>li(e)||G(e)),d=()=>e.map(e=>{if(J(e))return e.value;if(li(e))return l(e);if(Kn(e))return c?c(e,2):e()})):d=Kn(e)?t?c?()=>c(e,2):e:()=>{if(f){yr();try{f()}finally{br()}}let t=hi;hi=u;try{return c?c(e,3,[p]):e(p)}finally{hi=t}}:zn,t&&i){let e=d,t=i===!0?1/0:i;d=()=>Y(e(),t)}let g=rr(),_=()=>{u.stop(),g&&g.active&&Vn(g.effects,u)};if(a&&t){let e=t;t=(...t)=>{e(...t),_()}}let v=h?Array(e.length).fill(pi):pi,y=e=>{if(!(!(u.flags&1)||!u.dirty&&!e))if(t){let e=u.run();if(i||m||(h?e.some((e,t)=>tr(e,v[t])):tr(e,v))){f&&f();let n=hi;hi=u;try{let n=[e,v===pi?void 0:h&&v[0]===pi?[]:v,p];v=e,c?c(t,3,n):t(...n)}finally{hi=n}}}else u.run()};return s&&s(y),u=new ar(d),u.scheduler=o?()=>o(y,!1):y,p=e=>gi(e,!1,u),f=u.onStop=()=>{let e=mi.get(u);if(e){if(c)c(e,4);else for(let t of e)t();mi.delete(u)}},t?r?y(!0):v=u.run():o?o(y.bind(null,!0),!0):u.run(),_.pause=u.pause.bind(u),_.resume=u.resume.bind(u),_.stop=_,_}function Y(e,t=1/0,n){if(t<=0||!Yn(e)||e.__v_skip||(n||=new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,J(e))Y(e.value,t,n);else if(z(e))for(let r=0;r<e.length;r++)Y(e[r],t,n);else if(Gn(e)||Wn(e))e.forEach(e=>{Y(e,t,n)});else if($n(e)){for(let r in e)Y(e[r],t,n);for(let r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&Y(e[r],t,n)}return e}var vi=({state:e,getPart:t})=>{let n=null,r=n=>{let r=t(`content`);if(!r)throw Error(`Dialog content is not found.`);let i=r.clientWidth,a=r.clientHeight,o=n.clientWidth,s=n.clientHeight,c=Math.max(e.edgeOffset,(o-i)/2),l=Math.max(e.edgeOffset,(s-a)/2),u=s-a-e.edgeOffset,d=o-i-e.edgeOffset,f=c,p=l;e.position===`center`&&(f=c,p=l),e.position===`top-center`&&(f=c,p=e.edgeOffset),e.position===`bottom-center`&&(f=c,p=u),e.position===`top-left`&&(f=e.edgeOffset,p=e.edgeOffset),e.position===`left-center`&&(f=e.edgeOffset,p=l),e.position===`bottom-left`&&(f=e.edgeOffset,p=u),e.position===`top-right`&&(f=d,p=e.edgeOffset),e.position===`right-center`&&(f=d,p=l),e.position===`bottom-right`&&(f=d,p=u),r.style.setProperty(`transform`,`translate(var(--dialog-transform-x), var(--dialog-transform-y))`),n.style.setProperty(`--dialog-transform-x`,`${f}px`),n.style.setProperty(`--dialog-transform-y`,`${p}px`)},i=()=>{n&&r(n)};if(!rn())return{};let a=[_i(()=>e.position,()=>{n&&r(n)}),_i(()=>e.edgeOffset,()=>{n&&r(n)})];return{onBeforeOpen:()=>{n=t(`positioner`),n&&(window.addEventListener(`resize`,i),r(n))},onAfterClose:()=>{n=null,window.removeEventListener(`resize`,i),a.forEach(e=>e())}}},yi=e(t(((exports,t)=>{var n=Object.prototype.hasOwnProperty,r=`~`;function i(){}Object.create&&(i.prototype=Object.create(null),new i().__proto__||(r=!1));function a(e,t,n){this.fn=e,this.context=t,this.once=n||!1}function o(e,t,n,i,o){if(typeof n!=`function`)throw TypeError(`The listener must be a function`);var s=new a(n,i||e,o),c=r?r+t:t;return e._events[c]?e._events[c].fn?e._events[c]=[e._events[c],s]:e._events[c].push(s):(e._events[c]=s,e._eventsCount++),e}function s(e,t){--e._eventsCount===0?e._events=new i:delete e._events[t]}function c(){this._events=new i,this._eventsCount=0}c.prototype.eventNames=function(){var e=[],t,i;if(this._eventsCount===0)return e;for(i in t=this._events)n.call(t,i)&&e.push(r?i.slice(1):i);return Object.getOwnPropertySymbols?e.concat(Object.getOwnPropertySymbols(t)):e},c.prototype.listeners=function(e){var t=r?r+e:e,n=this._events[t];if(!n)return[];if(n.fn)return[n.fn];for(var i=0,a=n.length,o=Array(a);i<a;i++)o[i]=n[i].fn;return o},c.prototype.listenerCount=function(e){var t=r?r+e:e,n=this._events[t];return n?n.fn?1:n.length:0},c.prototype.emit=function(e,t,n,i,a,o){var s=r?r+e:e;if(!this._events[s])return!1;var c=this._events[s],l=arguments.length,u,d;if(c.fn){switch(c.once&&this.removeListener(e,c.fn,void 0,!0),l){case 1:return c.fn.call(c.context),!0;case 2:return c.fn.call(c.context,t),!0;case 3:return c.fn.call(c.context,t,n),!0;case 4:return c.fn.call(c.context,t,n,i),!0;case 5:return c.fn.call(c.context,t,n,i,a),!0;case 6:return c.fn.call(c.context,t,n,i,a,o),!0}for(d=1,u=Array(l-1);d<l;d++)u[d-1]=arguments[d];c.fn.apply(c.context,u)}else{var f=c.length,p;for(d=0;d<f;d++)switch(c[d].once&&this.removeListener(e,c[d].fn,void 0,!0),l){case 1:c[d].fn.call(c[d].context);break;case 2:c[d].fn.call(c[d].context,t);break;case 3:c[d].fn.call(c[d].context,t,n);break;case 4:c[d].fn.call(c[d].context,t,n,i);break;default:if(!u)for(p=1,u=Array(l-1);p<l;p++)u[p-1]=arguments[p];c[d].fn.apply(c[d].context,u)}}return!0},c.prototype.on=function(e,t,n){return o(this,e,t,n,!1)},c.prototype.once=function(e,t,n){return o(this,e,t,n,!0)},c.prototype.removeListener=function(e,t,n,i){var a=r?r+e:e;if(!this._events[a])return this;if(!t)return s(this,a),this;var o=this._events[a];if(o.fn)o.fn===t&&(!i||o.once)&&(!n||o.context===n)&&s(this,a);else{for(var c=0,l=[],u=o.length;c<u;c++)(o[c].fn!==t||i&&!o[c].once||n&&o[c].context!==n)&&l.push(o[c]);l.length?this._events[a]=l.length===1?l[0]:l:s(this,a)}return this},c.prototype.removeAllListeners=function(e){var t;return e?(t=r?r+e:e,this._events[t]&&s(this,t)):(this._events=new i,this._eventsCount=0),this},c.prototype.off=c.prototype.removeListener,c.prototype.addListener=c.prototype.on,c.prefixed=r,c.EventEmitter=c,t!==void 0&&(t.exports=c)}))(),1),bi=class{#instance=new yi.default;#dict=new Map;on(e,t){let n=t,r=(...e)=>{t(...e)};return this.#dict.set(n,r),this.#instance.on(e,r),()=>{this.#instance.off(e,r)}}off(e,t){let n=t,r=this.#dict.get(n);r&&this.#instance.off(e,r)}emit(e,...t){this.#instance.emit(e,...t)}},xi=()=>{},X={CLOSE:0,PRE_OPEN:1,OPEN_ANIMATING:2,OPEN:3,CLOSE_ANIMATING:4,PRE_CLOSE:5},Si={name:{0:`close`,1:`pre-open`,2:`open-animating`,3:`open`,4:`close-animating`,5:`pre-close`}};function Ci(e,t){let n=(0,a.useRef)(null),r=(0,a.useRef)(()=>{}),i=(0,a.useRef)([]),o=(0,a.useRef)(!0);return r.current=n=>{let r=i.current;if(o.current){o.current=!1,e(n);return}if(!n)return;let a=!1;for(let e=0;e<t.length;e++){let n=t[e];Object.is(n,r[e])||(a=!0,Reflect.set(r,e,n))}a&&e(n)},e=>{r.current(e),n.current=e}}function wi(e){let t=(0,a.useRef)(new bi),n=(0,a.useRef)(e());return(0,a.useEffect)(()=>{let r=e();n.current=r;let i=[];for(let e in r)i.push(t.current.on(e,(...t)=>r[e](...t)));return()=>i.forEach(e=>e())},[e]),(0,a.useMemo)(()=>{let e=n.current,r={};for(let n in e)Reflect.set(r,n,(...e)=>{t.current.emit(n,...e)});return r},[])}function Ti({defaultOpen:e,open:t,onOpenChange:n=xi,onBeforeOpen:r=xi,onAfterOpen:i=xi,onBeforeClose:o=xi,onAfterClose:s=xi}){let c=()=>e===void 0?!!t:e,l=(0,a.useRef)(new bi),u=wi(()=>({onOpenChange:n,onBeforeOpen:r,onAfterOpen:i,onBeforeClose:o,onAfterClose:s})),[d,f]=(0,a.useReducer)((e,t)=>t||(e>=X.PRE_CLOSE?X.CLOSE:e+1),c()?X.OPEN:X.CLOSE),p=(0,a.useRef)(!1),m=(0,a.useMemo)(()=>!!d,[d]),h=Ci(e=>{let t=Reflect.get(Si.name,d);l.current.emit(t,e)},[d]),g=(0,a.useCallback)(()=>{d===X.CLOSE&&(n({open:!0}),f())},[f,n,d]),_=(0,a.useCallback)(()=>{d===X.OPEN&&(n({open:!1}),f())},[f,n,d]);(0,a.useEffect)(()=>{let e=()=>f(),t=()=>p.current=!1,n=()=>p.current=!0,r=[l.current.on(`pre-open`,()=>{f()}),l.current.on(`open-animating`,()=>{t(),u.onBeforeOpen({next:e,preNext:n}),Promise.resolve().then(()=>{p.current||f()})}),l.current.on(`open`,()=>{u.onAfterOpen({next:e,preNext:n})}),l.current.on(`close-animating`,()=>{t(),u.onBeforeClose({next:e,preNext:n}),Promise.resolve().then(()=>{p.current||f()})}),l.current.on(`pre-close`,()=>{f()}),l.current.on(`close`,()=>{u.onAfterClose({next:e,preNext:n})})];return()=>r.forEach(e=>e())},[u,f,d]),(0,a.useEffect)(()=>{t!==void 0&&(!t&&m&&d===X.OPEN&&_(),t&&!m&&d===X.CLOSE&&g())},[_,g,m,t,d]);let v=(0,a.useCallback)(e=>{e?g():_()},[_,g]);return{open:m,state:d,emitOpenChange:v,ref:h}}var Ei=(e,t=[])=>({parts:(...n)=>{if(Oi(t))return Ei(e,n);throw Error(`createAnatomy().parts(...) should only be called once. Did you mean to use .extendWith(...) ?`)},extendWith:(...n)=>Ei(e,[...t,...n]),omit:(...n)=>Ei(e,t.filter(e=>!n.includes(e))),rename:e=>Ei(e,t),keys:()=>t,build:()=>[...new Set(t)].reduce((t,n)=>Object.assign(t,{[n]:{selector:[`&[data-scope="${Di(e)}"][data-part="${Di(n)}"]`,`& [data-scope="${Di(e)}"][data-part="${Di(n)}"]`].join(`, `),attrs:{"data-scope":Di(e),"data-part":Di(n)}}}),{})}),Di=e=>e.replace(/([A-Z])([A-Z])/g,`$1-$2`).replace(/([a-z])([A-Z])/g,`$1-$2`).replace(/[\s_]+/g,`-`).toLowerCase(),Oi=e=>e.length===0,ki=new WeakMap,Ai=new WeakMap,ji={},Mi=0,Ni=e=>e&&(e.host||Ni(e.parentNode)),Pi=(e,t)=>t.map(t=>{if(e.contains(t))return t;let n=Ni(t);return n&&e.contains(n)?n:(console.error(`[zag-js > ariaHidden] target`,t,`in not contained inside`,e,`. Doing nothing`),null)}).filter(e=>!!e),Fi=new Set([`script`,`output`,`status`,`next-route-announcer`]),Ii=e=>Fi.has(e.localName)||e.role===`status`||e.hasAttribute(`aria-live`)?!0:e.matches(`[data-live-announcer]`),Li=(e,t)=>{let{parentNode:n,markerName:r,controlAttribute:i}=t,a=Pi(n,Array.isArray(e)?e:[e]);ji[r]||(ji[r]=new WeakMap);let o=ji[r],s=[],c=new Set,l=new Set(a),u=e=>{!e||c.has(e)||(c.add(e),u(e.parentNode))};a.forEach(u);let d=e=>{!e||l.has(e)||Array.prototype.forEach.call(e.children,e=>{if(c.has(e))d(e);else try{if(Ii(e))return;let t=e.getAttribute(i)===`true`,n=(ki.get(e)||0)+1,a=(o.get(e)||0)+1;ki.set(e,n),o.set(e,a),s.push(e),n===1&&t&&Ai.set(e,!0),a===1&&e.setAttribute(r,``),t||e.setAttribute(i,`true`)}catch(t){console.error(`[zag-js > ariaHidden] cannot operate on `,e,t)}})};return d(n),c.clear(),Mi++,()=>{s.forEach(e=>{let t=ki.get(e)-1,n=o.get(e)-1;ki.set(e,t),o.set(e,n),t||(Ai.has(e)||e.removeAttribute(i),Ai.delete(e)),n||e.removeAttribute(r)}),Mi--,Mi||(ki=new WeakMap,ki=new WeakMap,Ai=new WeakMap,ji={})}},Ri=e=>(Array.isArray(e)?e[0]:e).ownerDocument.body,zi=(e,t=Ri(e),n=`data-aria-hidden`)=>{if(t)return Li(e,{parentNode:t,markerName:n,controlAttribute:`aria-hidden`})},Bi=e=>{let t=requestAnimationFrame(()=>e());return()=>cancelAnimationFrame(t)};function Vi(e,t={}){let{defer:n=!0}=t,r=n?Bi:e=>e(),i=[];return i.push(r(()=>{let t=(typeof e==`function`?e():e).filter(Boolean);t.length!==0&&i.push(zi(t))})),()=>{i.forEach(e=>e?.())}}function Hi(e){let t={each(t){for(let n=0;n<e.frames?.length;n+=1){let r=e.frames[n];r&&t(r)}},addEventListener(e,n,r){return t.each(t=>{try{t.document.addEventListener(e,n,r)}catch{}}),()=>{try{t.removeEventListener(e,n,r)}catch{}}},removeEventListener(e,n,r){t.each(t=>{try{t.document.removeEventListener(e,n,r)}catch{}})}};return t}function Ui(e){let t=e.frameElement==null?null:e.parent;return{addEventListener:(e,n,r)=>{try{t?.addEventListener(e,n,r)}catch{}return()=>{try{t?.removeEventListener(e,n,r)}catch{}}},removeEventListener:(e,n,r)=>{try{t?.removeEventListener(e,n,r)}catch{}}}}var Wi=`pointerdown.outside`,Gi=`focus.outside`;function Ki(e){for(let t of e)if(A(t)&&N(t))return!0;return!1}var qi=e=>`clientY`in e;function Ji(e,t){if(!qi(t)||!e)return!1;let n=e.getBoundingClientRect();return n.width===0||n.height===0?!1:n.top<=t.clientY&&t.clientY<=n.top+n.height&&n.left<=t.clientX&&t.clientX<=n.left+n.width}function Yi(e,t){return e.y<=t.y&&t.y<=e.y+e.height&&e.x<=t.x&&t.x<=e.x+e.width}function Xi(e,t){if(!t||!qi(e))return!1;let n=t.scrollHeight>t.clientHeight,r=n&&e.clientX>t.offsetLeft+t.clientWidth,i=t.scrollWidth>t.clientWidth,a=i&&e.clientY>t.offsetTop+t.clientHeight,o={x:t.offsetLeft,y:t.offsetTop,width:t.clientWidth+(n?16:0),height:t.clientHeight+(i?16:0)},s={x:e.clientX,y:e.clientY};return Yi(o,s)?r||a:!1}function Zi(e,t){let{exclude:n,onFocusOutside:r,onPointerDownOutside:i,onInteractOutside:a,defer:o}=t;if(!e)return;let s=j(e),c=ye(e),l=Hi(c),u=Ui(c);function d(t,r){if(!A(r)||!r.isConnected||_e(e,r)||Ji(e,t))return!1;let i=s.querySelector(`[aria-controls="${e.id}"]`);if(i){let e=Ue(i);if(Xi(t,e))return!1}let a=Ue(e);return Xi(t,a)?!1:!n?.(r)}let f=new Set,p=de(e?.getRootNode());function m(t){function n(n){let r=o&&!De()?He:e=>e(),s=n??t,c=s?.composedPath?.()??[s?.target];r(()=>{let n=p?c[0]:Ne(t);if(!(!e||!d(t,n))){if(i||a){let t=x(i,a);e.addEventListener(Wi,t,{once:!0})}$i(e,Wi,{bubbles:!1,cancelable:!0,detail:{originalEvent:s,contextmenu:Pe(s),focusable:Ki(c),target:n}})}})}t.pointerType===`touch`?(f.forEach(e=>e()),f.add(M(s,`click`,n,{once:!0})),f.add(u.addEventListener(`click`,n,{once:!0})),f.add(l.addEventListener(`click`,n,{once:!0}))):n()}let h=new Set,g=setTimeout(()=>{h.add(M(s,`pointerdown`,m,!0)),h.add(u.addEventListener(`pointerdown`,m,!0)),h.add(l.addEventListener(`pointerdown`,m,!0))},0);function _(t){(o?He:e=>e())(()=>{let n=Ne(t);if(!(!e||!d(t,n))){if(r||a){let t=x(r,a);e.addEventListener(Gi,t,{once:!0})}$i(e,Gi,{bubbles:!1,cancelable:!0,detail:{originalEvent:t,contextmenu:!1,focusable:N(n),target:n}})}})}return De()||(h.add(M(s,`focusin`,_,!0)),h.add(u.addEventListener(`focusin`,_,!0)),h.add(l.addEventListener(`focusin`,_,!0))),()=>{clearTimeout(g),f.forEach(e=>e()),h.forEach(e=>e())}}function Qi(e,t){let{defer:n}=t,r=n?He:e=>e(),i=[];return i.push(r(()=>{let n=typeof e==`function`?e():e;i.push(Zi(n,t))})),()=>{i.forEach(e=>e?.())}}function $i(e,t,n){let r=new(e.ownerDocument.defaultView||window).CustomEvent(t,n);return e.dispatchEvent(r)}function ea(e,t){return M(j(e),`keydown`,e=>{e.key===`Escape`&&(e.isComposing||t?.(e))},{capture:!0})}var ta=`layer:request-dismiss`,Z={layers:[],branches:[],count(){return this.layers.length},pointerBlockingLayers(){return this.layers.filter(e=>e.pointerBlocking)},topMostPointerBlockingLayer(){return[...this.pointerBlockingLayers()].slice(-1)[0]},hasPointerBlockingLayer(){return this.pointerBlockingLayers().length>0},isBelowPointerBlockingLayer(e){let t=this.indexOf(e),n=this.topMostPointerBlockingLayer()?this.indexOf(this.topMostPointerBlockingLayer()?.node):-1;return t<n},isTopMost(e){return this.layers[this.count()-1]?.node===e},getNestedLayers(e){return Array.from(this.layers).slice(this.indexOf(e)+1)},getLayersByType(e){return this.layers.filter(t=>t.type===e)},getNestedLayersByType(e,t){let n=this.indexOf(e);return n===-1?[]:this.layers.slice(n+1).filter(e=>e.type===t)},getParentLayerOfType(e,t){let n=this.indexOf(e);if(!(n<=0))return this.layers.slice(0,n).reverse().find(e=>e.type===t)},countNestedLayersOfType(e,t){return this.getNestedLayersByType(e,t).length},isInNestedLayer(e,t){return this.getNestedLayers(e).some(e=>_e(e.node,t))},isInBranch(e){return Array.from(this.branches).some(t=>_e(t,e))},add(e){this.layers.push(e),this.syncLayers()},addBranch(e){this.branches.push(e)},remove(e){let t=this.indexOf(e);t<0||(t<this.count()-1&&this.getNestedLayers(e).forEach(t=>Z.dismiss(t.node,e)),this.layers.splice(t,1),this.syncLayers())},removeBranch(e){let t=this.branches.indexOf(e);t>=0&&this.branches.splice(t,1)},syncLayers(){this.layers.forEach((e,t)=>{e.node.style.setProperty(`--layer-index`,`${t}`),e.node.removeAttribute(`data-nested`),e.node.removeAttribute(`data-has-nested`),this.getParentLayerOfType(e.node,e.type)&&e.node.setAttribute(`data-nested`,e.type);let n=this.countNestedLayersOfType(e.node,e.type);n>0&&e.node.setAttribute(`data-has-nested`,e.type),e.node.style.setProperty(`--nested-layer-count`,`${n}`)})},indexOf(e){return this.layers.findIndex(t=>t.node===e)},dismiss(e,t){let n=this.indexOf(e);if(n===-1)return;let r=this.layers[n];ra(e,ta,e=>{r.requestDismiss?.(e),e.defaultPrevented||r?.dismiss()}),na(e,ta,{originalLayer:e,targetLayer:t,originalIndex:n,targetIndex:t?this.indexOf(t):-1}),this.syncLayers()},clear(){this.remove(this.layers[0].node)}};function na(e,t,n){let r=new(e.ownerDocument.defaultView||window).CustomEvent(t,{cancelable:!0,bubbles:!0,detail:n});return e.dispatchEvent(r)}function ra(e,t,n){e.addEventListener(t,n,{once:!0})}var ia;function aa(){Z.layers.forEach(({node:e})=>{e.style.pointerEvents=Z.isBelowPointerBlockingLayer(e)?`none`:`auto`})}function oa(e){e.style.pointerEvents=``}function sa(e,t){let n=j(e),r=[];return Z.hasPointerBlockingLayer()&&!n.body.hasAttribute(`data-inert`)&&(ia=document.body.style.pointerEvents,queueMicrotask(()=>{n.body.style.pointerEvents=`none`,n.body.setAttribute(`data-inert`,``)})),t?.forEach(e=>{let[t,n]=Xe(()=>{let t=e();return A(t)?t:null},{timeout:1e3});t.then(e=>r.push(qe(e,{pointerEvents:`auto`}))),r.push(n)}),()=>{Z.hasPointerBlockingLayer()||(queueMicrotask(()=>{n.body.style.pointerEvents=ia,n.body.removeAttribute(`data-inert`),n.body.style.length===0&&n.body.removeAttribute(`style`)}),r.forEach(e=>e()))}}function ca(e,t){let{warnOnMissingNode:n=!0}=t;if(n&&!e){E("[@zag-js/dismissable] node is `null` or `undefined`");return}if(!e)return;let{onDismiss:r,onRequestDismiss:i,pointerBlocking:a,exclude:o,debug:s,type:c=`dialog`}=t,l={dismiss:r,node:e,type:c,pointerBlocking:a,requestDismiss:i};Z.add(l),aa();function u(n){let i=Ne(n.detail.originalEvent);Z.isBelowPointerBlockingLayer(e)||Z.isInBranch(i)||(t.onPointerDownOutside?.(n),t.onInteractOutside?.(n),!n.defaultPrevented&&(s&&console.log(`onPointerDownOutside:`,n.detail.originalEvent),r?.()))}function d(e){let n=Ne(e.detail.originalEvent);Z.isInBranch(n)||(t.onFocusOutside?.(e),t.onInteractOutside?.(e),!e.defaultPrevented&&(s&&console.log(`onFocusOutside:`,e.detail.originalEvent),r?.()))}function f(n){Z.isTopMost(e)&&(t.onEscapeKeyDown?.(n),!n.defaultPrevented&&r&&(n.preventDefault(),r()))}function p(n){if(!e)return!1;let r=typeof o==`function`?o():o,i=Array.isArray(r)?r:[r],a=t.persistentElements?.map(e=>e()).filter(A);return a&&i.push(...a),i.some(e=>_e(e,n))||Z.isInNestedLayer(e,n)}let m=[a?sa(e,t.persistentElements):void 0,ea(e,f),Qi(e,{exclude:p,onFocusOutside:d,onPointerDownOutside:u,defer:t.defer})];return()=>{Z.remove(e),aa(),oa(e),m.forEach(e=>e?.())}}function la(e,t){let{defer:n}=t,r=n?He:e=>e(),i=[];return i.push(r(()=>{let n=d(e)?e():e;i.push(ca(n,t))})),()=>{i.forEach(e=>e?.())}}var ua=Object.defineProperty,da=(e,t,n)=>t in e?ua(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Q=(e,t,n)=>da(e,typeof t==`symbol`?t:t+``,n),fa={activateTrap(e,t){if(e.length>0){let n=e[e.length-1];n!==t&&n.pause()}let n=e.indexOf(t);n===-1||e.splice(n,1),e.push(t)},deactivateTrap(e,t){let n=e.indexOf(t);n!==-1&&e.splice(n,1),e.length>0&&e[e.length-1].unpause()}},pa=[],ma=class{constructor(e,t){Q(this,`trapStack`),Q(this,`config`),Q(this,`doc`),Q(this,`state`,{containers:[],containerGroups:[],tabbableGroups:[],nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1,delayInitialFocusTimer:void 0,recentNavEvent:void 0}),Q(this,`listenerCleanups`,[]),Q(this,`handleFocus`,e=>{let t=Ne(e),n=this.findContainerIndex(t,e)>=0;if(n||oe(t))n&&(this.state.mostRecentlyFocusedNode=t);else{e.stopImmediatePropagation();let t,n=!0;if(this.state.mostRecentlyFocusedNode)if(Ve(this.state.mostRecentlyFocusedNode)>0){let e=this.findContainerIndex(this.state.mostRecentlyFocusedNode),{tabbableNodes:r}=this.state.containerGroups[e];if(r.length>0){let e=r.findIndex(e=>e===this.state.mostRecentlyFocusedNode);e>=0&&(this.config.isKeyForward(this.state.recentNavEvent)?e+1<r.length&&(t=r[e+1],n=!1):e-1>=0&&(t=r[e-1],n=!1))}}else this.state.containerGroups.some(e=>e.tabbableNodes.some(e=>Ve(e)>0))||(n=!1);else n=!1;n&&(t=this.findNextNavNode({target:this.state.mostRecentlyFocusedNode,isBackward:this.config.isKeyBackward(this.state.recentNavEvent)})),t?this.tryFocus(t):this.tryFocus(this.state.mostRecentlyFocusedNode||this.getInitialFocusNode())}this.state.recentNavEvent=void 0}),Q(this,`handlePointerDown`,e=>{let t=Ne(e);if(!(this.findContainerIndex(t,e)>=0)){if(ga(this.config.clickOutsideDeactivates,e)){this.deactivate({returnFocus:this.config.returnFocusOnDeactivate});return}ga(this.config.allowOutsideClick,e)||e.preventDefault()}}),Q(this,`handleClick`,e=>{let t=Ne(e);this.findContainerIndex(t,e)>=0||ga(this.config.clickOutsideDeactivates,e)||ga(this.config.allowOutsideClick,e)||(e.preventDefault(),e.stopImmediatePropagation())}),Q(this,`handleTabKey`,e=>{if(this.config.isKeyForward(e)||this.config.isKeyBackward(e)){this.state.recentNavEvent=e;let t=this.config.isKeyBackward(e),n=this.findNextNavNode({event:e,isBackward:t});if(!n)return;ha(e)&&e.preventDefault(),this.tryFocus(n)}}),Q(this,`handleEscapeKey`,e=>{_a(e)&&ga(this.config.escapeDeactivates,e)!==!1&&(e.preventDefault(),this.deactivate())}),Q(this,`_mutationObserver`),Q(this,`setupMutationObserver`,()=>{this._mutationObserver=new(this.doc.defaultView||window).MutationObserver(e=>{e.some(e=>Array.from(e.removedNodes).some(e=>e===this.state.mostRecentlyFocusedNode))&&this.tryFocus(this.getInitialFocusNode())})}),Q(this,`updateObservedNodes`,()=>{this._mutationObserver?.disconnect(),this.state.active&&!this.state.paused&&this.state.containers.map(e=>{this._mutationObserver?.observe(e,{subtree:!0,childList:!0})})}),Q(this,`getInitialFocusNode`,()=>{let e=this.getNodeForOption(`initialFocus`,{hasFallback:!0});if(e===!1)return!1;if(e===void 0||e&&!N(e)){let t=be(this.doc);if(t&&this.findContainerIndex(t)>=0)e=t;else{let t=this.state.tabbableGroups[0];e=t&&t.firstTabbableNode||this.getNodeForOption(`fallbackFocus`)}}else e===null&&(e=this.getNodeForOption(`fallbackFocus`));if(!e)throw Error(`Your focus-trap needs to have at least one focusable element`);return e.isConnected||(e=this.getNodeForOption(`fallbackFocus`)),e}),Q(this,`tryFocus`,e=>{if(e!==!1&&e!==be(this.doc)){if(!e||!e.focus){this.tryFocus(this.getInitialFocusNode());return}e.focus({preventScroll:!!this.config.preventScroll}),this.state.mostRecentlyFocusedNode=e,ya(e)&&e.select()}}),Q(this,`deactivate`,e=>{if(!this.state.active)return this;let t={onDeactivate:this.config.onDeactivate,onPostDeactivate:this.config.onPostDeactivate,checkCanReturnFocus:this.config.checkCanReturnFocus,...e};clearTimeout(this.state.delayInitialFocusTimer),this.state.delayInitialFocusTimer=void 0,this.removeListeners(),this.state.active=!1,this.state.paused=!1,this.updateObservedNodes(),fa.deactivateTrap(this.trapStack,this);let n=this.getOption(t,`onDeactivate`),r=this.getOption(t,`onPostDeactivate`),i=this.getOption(t,`checkCanReturnFocus`),a=this.getOption(t,`returnFocus`,`returnFocusOnDeactivate`);n?.();let o=()=>{va(()=>{if(a){let e=this.getReturnFocusNode(this.state.nodeFocusedBeforeActivation);this.tryFocus(e)}r?.()})};if(a&&i){let e=this.getReturnFocusNode(this.state.nodeFocusedBeforeActivation);return i(e).then(o,o),this}return o(),this}),Q(this,`pause`,e=>{if(this.state.paused||!this.state.active)return this;let t=this.getOption(e,`onPause`),n=this.getOption(e,`onPostPause`);return this.state.paused=!0,t?.(),this.removeListeners(),this.updateObservedNodes(),n?.(),this}),Q(this,`unpause`,e=>{if(!this.state.paused||!this.state.active)return this;let t=this.getOption(e,`onUnpause`),n=this.getOption(e,`onPostUnpause`);return this.state.paused=!1,t?.(),this.updateTabbableNodes(),this.addListeners(),this.updateObservedNodes(),n?.(),this}),Q(this,`updateContainerElements`,e=>(this.state.containers=Array.isArray(e)?e.filter(Boolean):[e].filter(Boolean),this.state.active&&this.updateTabbableNodes(),this.updateObservedNodes(),this)),Q(this,`getReturnFocusNode`,e=>{let t=this.getNodeForOption(`setReturnFocus`,{params:[e]});return t||(t===!1?!1:e)}),Q(this,`getOption`,(e,t,n)=>e&&e[t]!==void 0?e[t]:this.config[n||t]),Q(this,`getNodeForOption`,(e,{hasFallback:t=!1,params:n=[]}={})=>{let r=this.config[e];if(typeof r==`function`&&(r=r(...n)),r===!0&&(r=void 0),!r){if(r===void 0||r===!1)return r;throw Error(`\`${e}\` was specified but was not a node, or did not return a node`)}let i=r;if(typeof r==`string`){try{i=this.doc.querySelector(r)}catch(t){throw Error(`\`${e}\` appears to be an invalid selector; error="${t.message}"`)}if(!i&&!t)throw Error(`\`${e}\` as selector refers to no known node`)}return i}),Q(this,`findNextNavNode`,e=>{let{event:t,isBackward:n=!1}=e,r=e.target||Ne(t);this.updateTabbableNodes();let i=null;if(this.state.tabbableGroups.length>0){let e=this.findContainerIndex(r,t),a=e>=0?this.state.containerGroups[e]:void 0;if(e<0)i=n?this.state.tabbableGroups[this.state.tabbableGroups.length-1].lastTabbableNode:this.state.tabbableGroups[0].firstTabbableNode;else if(n){let n=this.state.tabbableGroups.findIndex(({firstTabbableNode:e})=>r===e);if(n<0&&(a?.container===r||N(r)&&!P(r)&&!a?.nextTabbableNode(r,!1))&&(n=e),n>=0){let e=n===0?this.state.tabbableGroups.length-1:n-1,t=this.state.tabbableGroups[e];i=Ve(r)>=0?t.lastTabbableNode:t.lastDomTabbableNode}else ha(t)||(i=a?.nextTabbableNode(r,!1))}else{let n=this.state.tabbableGroups.findIndex(({lastTabbableNode:e})=>r===e);if(n<0&&(a?.container===r||N(r)&&!P(r)&&!a?.nextTabbableNode(r))&&(n=e),n>=0){let e=n===this.state.tabbableGroups.length-1?0:n+1,t=this.state.tabbableGroups[e];i=Ve(r)>=0?t.firstTabbableNode:t.firstDomTabbableNode}else ha(t)||(i=a?.nextTabbableNode(r))}}else i=this.getNodeForOption(`fallbackFocus`);return i}),this.trapStack=t.trapStack||pa;let n={returnFocusOnDeactivate:!0,escapeDeactivates:!0,delayInitialFocus:!0,isKeyForward(e){return ha(e)&&!e.shiftKey},isKeyBackward(e){return ha(e)&&e.shiftKey},...t};this.doc=n.document||j(Array.isArray(e)?e[0]:e),this.config=n,this.updateContainerElements(e),this.setupMutationObserver()}get active(){return this.state.active}get paused(){return this.state.paused}findContainerIndex(e,t){let n=typeof t?.composedPath==`function`?t.composedPath():void 0;return this.state.containerGroups.findIndex(({container:t,tabbableNodes:r})=>t.contains(e)||n?.includes(t)||r.find(t=>t===e))}updateTabbableNodes(){if(this.state.containerGroups=this.state.containers.map(e=>{let t=Be(e),n=ze(e),r=t.length>0?t[0]:void 0,i=t.length>0?t[t.length-1]:void 0,a=n.find(e=>P(e)),o=n.slice().reverse().find(e=>P(e)),s=!!t.find(e=>Ve(e)>0);function c(e,r=!0){let i=t.indexOf(e);return i<0?r?n.slice(n.indexOf(e)+1).find(e=>P(e)):n.slice(0,n.indexOf(e)).reverse().find(e=>P(e)):t[i+(r?1:-1)]}return{container:e,tabbableNodes:t,focusableNodes:n,posTabIndexesFound:s,firstTabbableNode:r,lastTabbableNode:i,firstDomTabbableNode:a,lastDomTabbableNode:o,nextTabbableNode:c}}),this.state.tabbableGroups=this.state.containerGroups.filter(e=>e.tabbableNodes.length>0),this.state.tabbableGroups.length<=0&&!this.getNodeForOption(`fallbackFocus`))throw Error(`Your focus-trap must have at least one container with at least one tabbable node in it at all times`);if(this.state.containerGroups.find(e=>e.posTabIndexesFound)&&this.state.containerGroups.length>1)throw Error(`At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.`)}addListeners(){if(this.state.active)return fa.activateTrap(this.trapStack,this),this.state.delayInitialFocusTimer=this.config.delayInitialFocus?va(()=>{this.tryFocus(this.getInitialFocusNode())}):this.tryFocus(this.getInitialFocusNode()),this.listenerCleanups.push(M(this.doc,`focusin`,this.handleFocus,!0),M(this.doc,`mousedown`,this.handlePointerDown,{capture:!0,passive:!1}),M(this.doc,`touchstart`,this.handlePointerDown,{capture:!0,passive:!1}),M(this.doc,`click`,this.handleClick,{capture:!0,passive:!1}),M(this.doc,`keydown`,this.handleTabKey,{capture:!0,passive:!1}),M(this.doc,`keydown`,this.handleEscapeKey)),this}removeListeners(){if(this.state.active)return this.listenerCleanups.forEach(e=>e()),this.listenerCleanups=[],this}activate(e){if(this.state.active)return this;let t=this.getOption(e,`onActivate`),n=this.getOption(e,`onPostActivate`),r=this.getOption(e,`checkCanFocusTrap`);r||this.updateTabbableNodes(),this.state.active=!0,this.state.paused=!1,this.state.nodeFocusedBeforeActivation=be(this.doc),t?.();let i=()=>{r&&this.updateTabbableNodes(),this.addListeners(),this.updateObservedNodes(),n?.()};return r?(r(this.state.containers.concat()).then(i,i),this):(i(),this)}},ha=e=>e.key===`Tab`,ga=(e,...t)=>typeof e==`function`?e(...t):e,_a=e=>!e.isComposing&&e.key===`Escape`,va=e=>setTimeout(e,0),ya=e=>e.localName===`input`&&`select`in e&&typeof e.select==`function`;function ba(e,t={}){let n,r=He(()=>{let r=typeof e==`function`?e():e;if(r){n=new ma(r,{escapeDeactivates:!1,allowOutsideClick:!0,preventScroll:!0,returnFocusOnDeactivate:!0,delayInitialFocus:!1,fallbackFocus:r,...t,document:j(r)});try{n.activate()}catch{}}});return function(){n?.deactivate(),r()}}var xa=`data-scroll-lock`;function Sa(e){let t=e.getBoundingClientRect().left;return Math.round(t)+e.scrollLeft?`paddingLeft`:`paddingRight`}function Ca(e){let t=e??document,n=t.defaultView??window,{documentElement:r,body:i}=t;if(i.hasAttribute(`data-scroll-lock`))return;let a=n.innerWidth-r.clientWidth;i.setAttribute(xa,``);let o=()=>Je(r,`--scrollbar-width`,`${a}px`),s=Sa(r),c=[o(),Ae()?(()=>{let{scrollX:e,scrollY:t,visualViewport:r}=n,o=r?.offsetLeft??0,c=r?.offsetTop??0,l=qe(i,{position:`fixed`,overflow:`hidden`,top:`${-(t-Math.floor(c))}px`,left:`${-(e-Math.floor(o))}px`,right:`0`,[s]:`${a}px`});return()=>{l?.(),n.scrollTo({left:e,top:t,behavior:`instant`})}})():(()=>qe(i,{overflow:`hidden`,[s]:`${a}px`}))()];return()=>{c.forEach(e=>e?.()),i.removeAttribute(xa)}}var wa=Ei(`dialog`).parts(`trigger`,`backdrop`,`positioner`,`content`,`title`,`description`,`closeTrigger`).build(),Ta=e=>e.ids?.positioner??`dialog:${e.id}:positioner`,Ea=e=>e.ids?.backdrop??`dialog:${e.id}:backdrop`,Da=e=>e.ids?.content??`dialog:${e.id}:content`,Oa=e=>e.ids?.trigger??`dialog:${e.id}:trigger`,ka=e=>e.ids?.title??`dialog:${e.id}:title`,Aa=e=>e.ids?.description??`dialog:${e.id}:description`,ja=e=>e.ids?.closeTrigger??`dialog:${e.id}:close`,Ma=e=>e.getById(Da(e)),Na=e=>e.getById(Ta(e)),Pa=e=>e.getById(Ea(e)),Fa=e=>e.getById(Oa(e)),Ia=e=>e.getById(ka(e)),La=e=>e.getById(Aa(e)),Ra=e=>e.getById(ja(e));function za(e,t){let{state:n,send:r,context:i,prop:a,scope:o}=e,s=a(`aria-label`),c=n.matches(`open`);return{open:c,setOpen(e){n.matches(`open`)!==e&&r({type:e?`OPEN`:`CLOSE`})},getTriggerProps(){return t.button({...wa.trigger.attrs,dir:a(`dir`),id:Oa(o),"aria-haspopup":`dialog`,type:`button`,"aria-expanded":c,"data-state":c?`open`:`closed`,"aria-controls":Da(o),onClick(e){e.defaultPrevented||r({type:`TOGGLE`})}})},getBackdropProps(){return t.element({...wa.backdrop.attrs,dir:a(`dir`),hidden:!c,id:Ea(o),"data-state":c?`open`:`closed`})},getPositionerProps(){return t.element({...wa.positioner.attrs,dir:a(`dir`),id:Ta(o),style:{pointerEvents:c?void 0:`none`}})},getContentProps(){let e=i.get(`rendered`);return t.element({...wa.content.attrs,dir:a(`dir`),role:a(`role`),hidden:!c,id:Da(o),tabIndex:-1,"data-state":c?`open`:`closed`,"aria-modal":!0,"aria-label":s||void 0,"aria-labelledby":s||!e.title?void 0:ka(o),"aria-describedby":e.description?Aa(o):void 0})},getTitleProps(){return t.element({...wa.title.attrs,dir:a(`dir`),id:ka(o)})},getDescriptionProps(){return t.element({...wa.description.attrs,dir:a(`dir`),id:Aa(o)})},getCloseTriggerProps(){return t.button({...wa.closeTrigger.attrs,dir:a(`dir`),id:ja(o),type:`button`,onClick(e){e.defaultPrevented||(e.stopPropagation(),r({type:`CLOSE`}))}})}}}var Ba=nt({props({props:e,scope:t}){let n=e.role===`alertdialog`,r=n?()=>Ra(t):void 0,i=typeof e.modal==`boolean`?e.modal:!0;return{role:`dialog`,modal:i,trapFocus:i,preventScroll:i,closeOnInteractOutside:!n,closeOnEscape:!0,restoreFocus:!0,initialFocusEl:r,...e}},initialState({prop:e}){return e(`open`)||e(`defaultOpen`)?`open`:`closed`},context({bindable:e}){return{rendered:e(()=>({defaultValue:{title:!0,description:!0}}))}},watch({track:e,action:t,prop:n}){e([()=>n(`open`)],()=>{t([`toggleVisibility`])})},states:{open:{entry:[`checkRenderedElements`,`syncZIndex`],effects:[`trackDismissableElement`,`trapFocus`,`preventScroll`,`hideContentBelow`],on:{"CONTROLLED.CLOSE":{target:`closed`},CLOSE:[{guard:`isOpenControlled`,actions:[`invokeOnClose`]},{target:`closed`,actions:[`invokeOnClose`]}],TOGGLE:[{guard:`isOpenControlled`,actions:[`invokeOnClose`]},{target:`closed`,actions:[`invokeOnClose`]}]}},closed:{on:{"CONTROLLED.OPEN":{target:`open`},OPEN:[{guard:`isOpenControlled`,actions:[`invokeOnOpen`]},{target:`open`,actions:[`invokeOnOpen`]}],TOGGLE:[{guard:`isOpenControlled`,actions:[`invokeOnOpen`]},{target:`open`,actions:[`invokeOnOpen`]}]}}},implementations:{guards:{isOpenControlled:({prop:e})=>e(`open`)!=null},effects:{trackDismissableElement({scope:e,send:t,prop:n}){return la(()=>Ma(e),{type:`dialog`,defer:!0,pointerBlocking:n(`modal`),exclude:[Fa(e)],onInteractOutside(e){n(`onInteractOutside`)?.(e),n(`closeOnInteractOutside`)||e.preventDefault()},persistentElements:n(`persistentElements`),onFocusOutside:n(`onFocusOutside`),onPointerDownOutside:n(`onPointerDownOutside`),onRequestDismiss:n(`onRequestDismiss`),onEscapeKeyDown(e){n(`onEscapeKeyDown`)?.(e),n(`closeOnEscape`)||e.preventDefault()},onDismiss(){t({type:`CLOSE`,src:`interact-outside`})}})},preventScroll({scope:e,prop:t}){if(t(`preventScroll`))return Ca(e.getDoc())},trapFocus({scope:e,prop:t}){return t(`trapFocus`)?ba(()=>Ma(e),{preventScroll:!0,returnFocusOnDeactivate:!!t(`restoreFocus`),initialFocus:t(`initialFocusEl`),setReturnFocus:e=>t(`finalFocusEl`)?.()??e}):void 0},hideContentBelow({scope:e,prop:t}){return t(`modal`)?Vi(()=>[Ma(e)],{defer:!0}):void 0}},actions:{checkRenderedElements({context:e,scope:t}){He(()=>{e.set(`rendered`,{title:!!Ia(t),description:!!La(t)})})},syncZIndex({scope:e}){He(()=>{let t=Ma(e);if(!t)return;let n=Ce(t);[Na(e),Pa(e)].forEach(e=>{e?.style.setProperty(`--z-index`,n.zIndex),e?.style.setProperty(`--layer-index`,n.getPropertyValue(`--layer-index`))})})},invokeOnClose({prop:e}){e(`onOpenChange`)?.({open:!1})},invokeOnOpen({prop:e}){e(`onOpenChange`)?.({open:!0})},toggleVisibility({prop:e,send:t,event:n}){t({type:e(`open`)?`CONTROLLED.OPEN`:`CONTROLLED.CLOSE`,previousEvent:n})}}}});gt()([`aria-label`,`closeOnEscape`,`closeOnInteractOutside`,`dir`,`finalFocusEl`,`getRootNode`,`getRootNode`,`id`,`id`,`ids`,`initialFocusEl`,`modal`,`onEscapeKeyDown`,`onFocusOutside`,`onInteractOutside`,`onOpenChange`,`onPointerDownOutside`,`onRequestDismiss`,`defaultOpen`,`open`,`persistentElements`,`preventScroll`,`restoreFocus`,`role`,`trapFocus`]);var Va=[In,vi],Ha=(e={})=>{let{open:t,id:n,ids:r={},classNames:i={},getRootNode:o,onOpenChange:s,onBeforeOpen:c,onAfterOpen:l,onBeforeClose:u,onAfterClose:d,position:f=`center`,edgeOffset:p=20,plugins:m=Va}=e,h=(0,a.useId)(),g=n||h,_=(0,a.useMemo)(()=>({action:r.action??`dialog__${g}__action`,backdrop:r.backdrop??`dialog__${g}__backdrop`,closeTrigger:r.closeTrigger??`dialog__${g}__close-trigger`,content:r.content??`dialog__${g}__content`,description:r.description??`dialog__${g}__description`,positioner:r.positioner??`dialog__${g}__positioner`,title:r.title??`dialog__${g}__title`,trigger:r.trigger??`dialog__${g}__trigger`}),[r,g]),v=(0,a.useRef)(new bi),y=(0,a.useRef)(oi({position:f,edgeOffset:p}));(0,a.useEffect)(()=>{let e=y.current;return _i(e,e=>{x.current.onStateUpdate(e)})},[]);let b=(0,a.useCallback)(()=>{let e={getInstance:()=>n,getPart:e=>{let t=_[e];return t?document.getElementById(t):null},emitter:v.current,state:y.current},t=m.map(t=>t(e)),n={name:t.map(e=>e.name||``).join(`,`),onStateUpdate:e=>t.forEach(t=>t.onStateUpdate?.(e)),onBeforeOpen:e=>t.forEach(t=>t.onBeforeOpen?.(e)),onAfterOpen:e=>t.forEach(t=>t.onAfterOpen?.(e)),onBeforeClose:e=>t.forEach(t=>t.onBeforeClose?.(e)),onAfterClose:e=>t.forEach(t=>t.onAfterClose?.(e))};return n},[_,...m]),x=(0,a.useRef)(b());(0,a.useEffect)(()=>{x.current=b()},[b]);let[S,ee]=(0,a.useState)({}),{open:te,state:ne,ref:C,emitOpenChange:re}=Ti({open:t,defaultOpen:e.defaultOpen,context:S,onOpenChange:({open:e})=>{s?.({open:e})},onBeforeOpen:e=>{let t={...e,context:S};x.current.onBeforeOpen(t),c?.(t)},onAfterOpen:e=>{let t={...e,context:S};x.current.onAfterOpen(t),l?.(t)},onBeforeClose:e=>{let t={...e,context:S};x.current.onBeforeClose(t),u?.(t)},onAfterClose:e=>{let t={...e,context:S};x.current.onAfterClose(t),d?.(t),ee({})}}),w=Reflect.get(Si.name,ne),T=St(Ba,{id:g,open:te,onOpenChange:e=>re(e.open),defaultOpen:e.defaultOpen,preventScroll:e.preventScroll,closeOnInteractOutside:e.closeOnInteractOutside,closeOnEscape:e.closeOnEscape,ids:_}),E=za(T,Et),D=(0,a.useMemo)(()=>({"data-uid":g,"data-state":w}),[g,w]),ie=(0,a.useCallback)(e=>L({...E.getBackdropProps(),...D,className:i.backdrop},{...e}),[E,D]),O=(0,a.useCallback)(t=>L({open:E.open,autoLock:e.preventScroll,autoDestroy:!0,getRootNode:o},{...t}),[E.open,o,e.preventScroll]),k=(0,a.useCallback)(e=>L({...E.getPositionerProps(),...D,className:i.positioner,ref:C},{...e}),[E,D]),ae=(0,a.useCallback)(e=>L({...E.getContentProps(),...D,className:i.content},{...e}),[E,D]),A=(0,a.useCallback)(e=>L({...E.getTitleProps(),...D,className:i.title},{...e}),[E,D]),oe=(0,a.useCallback)(e=>L({id:_.action,"data-part":`action`,...D,className:i.action},{...e}),[_.action,D]),se=(0,a.useCallback)(e=>L({...E.getDescriptionProps(),...D,className:i.description},{...e}),[E,D]),ce=(0,a.useCallback)(e=>L({...E.getTriggerProps(),...D,className:i.trigger},{...e}),[E,D]),le=(0,a.useCallback)(e=>L({...E.getCloseTriggerProps(),...D,className:i.closeTrigger},{...e}),[E,D]);return{open:E.open,onOpen:()=>re(!0),onClose:()=>re(!1),setContext:ee,getBackdropProps:ie,getPortalProps:O,getPositionerProps:k,getContentProps:ae,getTitleProps:A,getDescriptionProps:se,getActionProps:oe,getOpenTriggerProps:ce,getCloseTriggerProps:le}},Ua=Yt(Ha);function Wa(e){return typeof e==`object`&&!!e&&!Array.isArray(e)}var Ga=e=>typeof e==`object`&&!!e;function Ka(e){return Object.fromEntries(Object.entries(e??{}).filter(([e,t])=>t!==void 0))}var qa=e=>e===`base`;function Ja(e){return e.slice().filter(e=>!qa(e))}function Ya(e){return String.fromCharCode(e+(e>25?39:97))}function Xa(e){let t=``,n;for(n=Math.abs(e);n>52;n=n/52|0)t=Ya(n%52)+t;return Ya(n%52)+t}function Za(e,t){let n=t.length;for(;n;)e=e*33^t.charCodeAt(--n);return e}function Qa(e){return Xa(Za(5381,e)>>>0)}var $a=/\s*!(important)?/i;function eo(e){return typeof e==`string`?$a.test(e):!1}function to(e){return typeof e==`string`?e.replace($a,``).trim():e}function no(e){return typeof e==`string`?e.replaceAll(` `,`_`):e}var ro=e=>{let t=new Map;return(...n)=>{let r=JSON.stringify(n);if(t.has(r))return t.get(r);let i=e(...n);return t.set(r,i),i}},io=new Set([`__proto__`,`constructor`,`prototype`]);function ao(...e){return e.reduce((e,t)=>(t&&Object.keys(t).forEach(n=>{if(io.has(n))return;let r=e[n],i=t[n];Wa(r)&&Wa(i)?e[n]=ao(r,i):e[n]=i}),e),{})}var oo=e=>e!=null;function so(e,t,n={}){let{stop:r,getKey:i}=n;function a(e,n=[]){if(Ga(e)){let o={};for(let[s,c]of Object.entries(e)){let l=i?.(s,c)??s,u=[...n,l];if(r?.(e,u))return t(e,n);let d=a(c,u);oo(d)&&(o[l]=d)}return o}return t(e,n)}return a(e)}function co(e,t){return e.reduce((e,n,r)=>{let i=t[r];return n!=null&&(e[i]=n),e},{})}function lo(e,t,n=!0){let{utility:r,conditions:i}=t,{hasShorthand:a,resolveShorthand:o}=r;return so(e,e=>Array.isArray(e)?co(e,i.breakpoints.keys):e,{stop:e=>Array.isArray(e),getKey:n?e=>a?o(e):e:void 0})}var uo={shift:e=>e,finalize:e=>e,breakpoints:{keys:[]}},fo=e=>typeof e==`string`?e.replaceAll(/[\n\s]+/g,` `):e;function po(e){let{utility:t,hash:n,conditions:r=uo}=e,i=e=>[t.prefix,e].filter(Boolean).join(`-`),a=(e,a)=>{let o;if(n){let n=[...r.finalize(e),a];o=i(t.toHash(n,Qa))}else o=[...r.finalize(e),i(a)].join(`:`);return o};return ro(({base:n,...i}={})=>{let o=Object.assign(i,n),s=lo(o,e),c=new Set;return so(s,(e,n)=>{if(e==null)return;let i=eo(e),[o,...s]=r.shift(n),l=Ja(s),u=t.transform(o,to(fo(e))),d=a(l,u.className);i&&(d=`${d}!`),c.add(d)}),Array.from(c).join(` `)})}function mo(...e){return e.flat().filter(e=>Wa(e)&&Object.keys(Ka(e)).length>0)}function ho(e){function t(t){let n=mo(...t);return n.length===1?n:n.map(t=>lo(t,e))}function n(...e){return ao(...t(e))}function r(...e){return Object.assign({},...t(e))}return{mergeCss:ro(n),assignCss:r}}var go=/([A-Z])/g,_o=/^ms-/,vo=ro(e=>e.startsWith(`--`)?e:e.replace(go,`-$1`).replace(_o,`-ms-`).toLowerCase());`${[`min`,`max`,`clamp`,`calc`].join(`|`)}`,`${`cm,mm,Q,in,pc,pt,px,em,ex,ch,rem,lh,rlh,vw,vh,vmin,vmax,vb,vi,svw,svh,lvw,lvh,dvw,dvh,cqw,cqh,cqi,cqb,cqmin,cqmax,%`.split(`,`).join(`|`)}`;var yo=(e,t)=>e.filter(e=>e.css[t]).map(e=>({...e,css:e.css[t]}));function bo(e,...t){let n=Object.getOwnPropertyDescriptors(e),r=Object.keys(n),i=e=>{let t={};for(let r=0;r<e.length;r++){let i=e[r];n[i]&&(Object.defineProperty(t,i,n[i]),delete n[i])}return t};return t.map(e=>i(Array.isArray(e)?e:r.filter(e))).concat(i(r))}var xo=(...e)=>{let t=e.reduce((e,t)=>(t&&t.forEach(t=>e.add(t)),e),new Set([]));return Array.from(t)},So=[`htmlSize`,`htmlTranslate`,`htmlWidth`,`htmlHeight`];function Co(e){return So.includes(e)?e.replace(`html`,``).toLowerCase():e}function wo(e){return Object.fromEntries(Object.entries(e).map(([e,t])=>[Co(e),t]))}wo.keys=So;var To=new Set(`_hover,_focus,_focusWithin,_focusVisible,_disabled,_active,_visited,_target,_readOnly,_readWrite,_empty,_checked,_enabled,_expanded,_highlighted,_complete,_incomplete,_dragging,_before,_after,_firstLetter,_firstLine,_marker,_selection,_file,_backdrop,_first,_last,_only,_even,_odd,_firstOfType,_lastOfType,_onlyOfType,_peerFocus,_peerHover,_peerActive,_peerFocusWithin,_peerFocusVisible,_peerDisabled,_peerChecked,_peerInvalid,_peerExpanded,_peerPlaceholderShown,_groupFocus,_groupHover,_groupActive,_groupFocusWithin,_groupFocusVisible,_groupDisabled,_groupChecked,_groupExpanded,_groupInvalid,_indeterminate,_required,_valid,_invalid,_autofill,_inRange,_outOfRange,_placeholder,_placeholderShown,_pressed,_selected,_grabbed,_underValue,_overValue,_atValue,_default,_optional,_open,_closed,_fullscreen,_loading,_hidden,_current,_currentPage,_currentStep,_today,_unavailable,_rangeStart,_rangeEnd,_now,_topmost,_motionReduce,_motionSafe,_print,_landscape,_portrait,_dark,_light,_osDark,_osLight,_highContrast,_lessContrast,_moreContrast,_ltr,_rtl,_scrollbar,_scrollbarThumb,_scrollbarTrack,_horizontal,_vertical,_icon,_starting,_noscript,_invertedColors,base`.split(`,`)),Eo=/^@|&|&$/;function Do(e){return To.has(e)||Eo.test(e)}var Oo=/^_/,ko=/&|@/;function Ao(e){return e.map(e=>To.has(e)?e.replace(Oo,``):ko.test(e)?`[${no(e.trim())}]`:e)}function jo(e){return e.sort((e,t)=>{let n=Do(e),r=Do(t);return n&&!r?1:!n&&r?-1:0})}var Mo=`aspectRatio:asp,boxDecorationBreak:bx-db,zIndex:z,boxSizing:bx-s,objectPosition:obj-p,objectFit:obj-f,overscrollBehavior:ovs-b,overscrollBehaviorX:ovs-bx,overscrollBehaviorY:ovs-by,position:pos/1,top:top,left:left,inset:inset,insetInline:inset-x/insetX,insetBlock:inset-y/insetY,insetBlockEnd:inset-be,insetBlockStart:inset-bs,insetInlineEnd:inset-e/insetEnd/end,insetInlineStart:inset-s/insetStart/start,right:right,bottom:bottom,float:float,visibility:vis,display:d,hideFrom:hide,hideBelow:show,flexBasis:flex-b,flex:flex,flexDirection:flex-d/flexDir,flexGrow:flex-g,flexShrink:flex-sh,gridTemplateColumns:grid-tc,gridTemplateRows:grid-tr,gridColumn:grid-c,gridRow:grid-r,gridColumnStart:grid-cs,gridColumnEnd:grid-ce,gridAutoFlow:grid-af,gridAutoColumns:grid-ac,gridAutoRows:grid-ar,gap:gap,gridGap:grid-g,gridRowGap:grid-rg,gridColumnGap:grid-cg,rowGap:rg,columnGap:cg,justifyContent:jc,alignContent:ac,alignItems:ai,alignSelf:as,padding:p/1,paddingLeft:pl/1,paddingRight:pr/1,paddingTop:pt/1,paddingBottom:pb/1,paddingBlock:py/1/paddingY,paddingBlockEnd:pbe,paddingBlockStart:pbs,paddingInline:px/paddingX/1,paddingInlineEnd:pe/1/paddingEnd,paddingInlineStart:ps/1/paddingStart,marginLeft:ml/1,marginRight:mr/1,marginTop:mt/1,marginBottom:mb/1,margin:m/1,marginBlock:my/1/marginY,marginBlockEnd:mbe,marginBlockStart:mbs,marginInline:mx/1/marginX,marginInlineEnd:me/1/marginEnd,marginInlineStart:ms/1/marginStart,spaceX:sx,spaceY:sy,outlineWidth:ring-w/ringWidth,outlineColor:ring-c/ringColor,outline:ring/1,outlineOffset:ring-o/ringOffset,focusRing:focus-ring,focusVisibleRing:focus-v-ring,focusRingColor:focus-ring-c,focusRingOffset:focus-ring-o,focusRingWidth:focus-ring-w,focusRingStyle:focus-ring-s,divideX:dvd-x,divideY:dvd-y,divideColor:dvd-c,divideStyle:dvd-s,width:w/1,inlineSize:w-is,minWidth:min-w/minW,minInlineSize:min-w-is,maxWidth:max-w/maxW,maxInlineSize:max-w-is,height:h/1,blockSize:h-bs,minHeight:min-h/minH,minBlockSize:min-h-bs,maxHeight:max-h/maxH,maxBlockSize:max-b,boxSize:size,color:c,fontFamily:ff,fontSize:fs,fontSizeAdjust:fs-a,fontPalette:fp,fontKerning:fk,fontFeatureSettings:ff-s,fontWeight:fw,fontSmoothing:fsmt,fontVariant:fv,fontVariantAlternates:fv-alt,fontVariantCaps:fv-caps,fontVariationSettings:fv-s,fontVariantNumeric:fv-num,letterSpacing:ls,lineHeight:lh,textAlign:ta,textDecoration:td,textDecorationColor:td-c,textEmphasisColor:te-c,textDecorationStyle:td-s,textDecorationThickness:td-t,textUnderlineOffset:tu-o,textTransform:tt,textIndent:ti,textShadow:tsh,textShadowColor:tsh-c/textShadowColor,textOverflow:tov,verticalAlign:va,wordBreak:wb,textWrap:tw,truncate:trunc,lineClamp:lc,listStyleType:li-t,listStylePosition:li-pos,listStyleImage:li-img,listStyle:li-s,backgroundPosition:bg-p/bgPosition,backgroundPositionX:bg-p-x/bgPositionX,backgroundPositionY:bg-p-y/bgPositionY,backgroundAttachment:bg-a/bgAttachment,backgroundClip:bg-cp/bgClip,background:bg/1,backgroundColor:bg-c/bgColor,backgroundOrigin:bg-o/bgOrigin,backgroundImage:bg-i/bgImage,backgroundRepeat:bg-r/bgRepeat,backgroundBlendMode:bg-bm/bgBlendMode,backgroundSize:bg-s/bgSize,backgroundGradient:bg-grad/bgGradient,backgroundLinear:bg-linear/bgLinear,backgroundRadial:bg-radial/bgRadial,backgroundConic:bg-conic/bgConic,textGradient:txt-grad,gradientFromPosition:grad-from-pos,gradientToPosition:grad-to-pos,gradientFrom:grad-from,gradientTo:grad-to,gradientVia:grad-via,gradientViaPosition:grad-via-pos,borderRadius:bdr/rounded,borderTopLeftRadius:bdr-tl/roundedTopLeft,borderTopRightRadius:bdr-tr/roundedTopRight,borderBottomRightRadius:bdr-br/roundedBottomRight,borderBottomLeftRadius:bdr-bl/roundedBottomLeft,borderTopRadius:bdr-t/roundedTop,borderRightRadius:bdr-r/roundedRight,borderBottomRadius:bdr-b/roundedBottom,borderLeftRadius:bdr-l/roundedLeft,borderStartStartRadius:bdr-ss/roundedStartStart,borderStartEndRadius:bdr-se/roundedStartEnd,borderStartRadius:bdr-s/roundedStart,borderEndStartRadius:bdr-es/roundedEndStart,borderEndEndRadius:bdr-ee/roundedEndEnd,borderEndRadius:bdr-e/roundedEnd,border:bd,borderWidth:bd-w,borderTopWidth:bd-t-w,borderLeftWidth:bd-l-w,borderRightWidth:bd-r-w,borderBottomWidth:bd-b-w,borderBlockStartWidth:bd-bs-w,borderBlockEndWidth:bd-be-w,borderColor:bd-c,borderInline:bd-x/borderX,borderInlineWidth:bd-x-w/borderXWidth,borderInlineColor:bd-x-c/borderXColor,borderBlock:bd-y/borderY,borderBlockWidth:bd-y-w/borderYWidth,borderBlockColor:bd-y-c/borderYColor,borderLeft:bd-l,borderLeftColor:bd-l-c,borderInlineStart:bd-s/borderStart,borderInlineStartWidth:bd-s-w/borderStartWidth,borderInlineStartColor:bd-s-c/borderStartColor,borderRight:bd-r,borderRightColor:bd-r-c,borderInlineEnd:bd-e/borderEnd,borderInlineEndWidth:bd-e-w/borderEndWidth,borderInlineEndColor:bd-e-c/borderEndColor,borderTop:bd-t,borderTopColor:bd-t-c,borderBottom:bd-b,borderBottomColor:bd-b-c,borderBlockEnd:bd-be,borderBlockEndColor:bd-be-c,borderBlockStart:bd-bs,borderBlockStartColor:bd-bs-c,opacity:op,boxShadow:bx-sh/shadow,boxShadowColor:bx-sh-c/shadowColor,mixBlendMode:mix-bm,filter:filter,brightness:brightness,contrast:contrast,grayscale:grayscale,hueRotate:hue-rotate,invert:invert,saturate:saturate,sepia:sepia,dropShadow:drop-shadow,blur:blur,backdropFilter:bkdp,backdropBlur:bkdp-blur,backdropBrightness:bkdp-brightness,backdropContrast:bkdp-contrast,backdropGrayscale:bkdp-grayscale,backdropHueRotate:bkdp-hue-rotate,backdropInvert:bkdp-invert,backdropOpacity:bkdp-opacity,backdropSaturate:bkdp-saturate,backdropSepia:bkdp-sepia,borderCollapse:bd-cl,borderSpacing:bd-sp,borderSpacingX:bd-sx,borderSpacingY:bd-sy,tableLayout:tbl,transitionTimingFunction:trs-tmf,transitionDelay:trs-dly,transitionDuration:trs-dur,transitionProperty:trs-prop,transition:trs,animation:anim,animationName:anim-n,animationTimingFunction:anim-tmf,animationDuration:anim-dur,animationDelay:anim-dly,animationPlayState:anim-ps,animationComposition:anim-comp,animationFillMode:anim-fm,animationDirection:anim-dir,animationIterationCount:anim-ic,animationRange:anim-r,animationState:anim-s,animationRangeStart:anim-rs,animationRangeEnd:anim-re,animationTimeline:anim-tl,transformOrigin:trf-o,transformBox:trf-b,transformStyle:trf-s,transform:trf,rotate:rotate,rotateX:rotate-x,rotateY:rotate-y,rotateZ:rotate-z,scale:scale,scaleX:scale-x,scaleY:scale-y,translate:translate,translateX:translate-x/x,translateY:translate-y/y,translateZ:translate-z/z,accentColor:ac-c,caretColor:ca-c,scrollBehavior:scr-bhv,scrollbar:scr-bar,scrollbarColor:scr-bar-c,scrollbarGutter:scr-bar-g,scrollbarWidth:scr-bar-w,scrollMargin:scr-m,scrollMarginLeft:scr-ml,scrollMarginRight:scr-mr,scrollMarginTop:scr-mt,scrollMarginBottom:scr-mb,scrollMarginBlock:scr-my/scrollMarginY,scrollMarginBlockEnd:scr-mbe,scrollMarginBlockStart:scr-mbt,scrollMarginInline:scr-mx/scrollMarginX,scrollMarginInlineEnd:scr-me,scrollMarginInlineStart:scr-ms,scrollPadding:scr-p,scrollPaddingBlock:scr-py/scrollPaddingY,scrollPaddingBlockStart:scr-pbs,scrollPaddingBlockEnd:scr-pbe,scrollPaddingInline:scr-px/scrollPaddingX,scrollPaddingInlineEnd:scr-pe,scrollPaddingInlineStart:scr-ps,scrollPaddingLeft:scr-pl,scrollPaddingRight:scr-pr,scrollPaddingTop:scr-pt,scrollPaddingBottom:scr-pb,scrollSnapAlign:scr-sa,scrollSnapStop:scrs-s,scrollSnapType:scrs-t,scrollSnapStrictness:scrs-strt,scrollSnapMargin:scrs-m,scrollSnapMarginTop:scrs-mt,scrollSnapMarginBottom:scrs-mb,scrollSnapMarginLeft:scrs-ml,scrollSnapMarginRight:scrs-mr,scrollSnapCoordinate:scrs-c,scrollSnapDestination:scrs-d,scrollSnapPointsX:scrs-px,scrollSnapPointsY:scrs-py,scrollSnapTypeX:scrs-tx,scrollSnapTypeY:scrs-ty,scrollTimeline:scrtl,scrollTimelineAxis:scrtl-a,scrollTimelineName:scrtl-n,touchAction:tch-a,userSelect:us,overflow:ov,overflowWrap:ov-wrap,overflowX:ov-x,overflowY:ov-y,overflowAnchor:ov-a,overflowBlock:ov-b,overflowInline:ov-i,overflowClipBox:ovcp-bx,overflowClipMargin:ovcp-m,overscrollBehaviorBlock:ovs-bb,overscrollBehaviorInline:ovs-bi,fill:fill,stroke:stk,strokeWidth:stk-w,strokeDasharray:stk-dsh,strokeDashoffset:stk-do,strokeLinecap:stk-lc,strokeLinejoin:stk-lj,strokeMiterlimit:stk-ml,strokeOpacity:stk-op,srOnly:sr,debug:debug,appearance:ap,backfaceVisibility:bfv,clipPath:cp-path,hyphens:hy,mask:msk,maskImage:msk-i,maskSize:msk-s,textSizeAdjust:txt-adj,container:cq,containerName:cq-n,containerType:cq-t,cursor:cursor`,No=new Map,Po=new Map;Mo.split(`,`).forEach(e=>{let[t,n]=e.split(`:`),[r,...i]=n.split(`/`);No.set(t,r),i.length&&i.forEach(e=>{Po.set(e===`1`?r:e,t)})});var Fo=e=>Po.get(e)||e,Io={conditions:{shift:jo,finalize:Ao,breakpoints:{keys:[`base`]}},utility:{transform:(e,t)=>{let n=Fo(e);return{className:`${No.get(n)||vo(n)}_${no(t)}`}},hasShorthand:!0,toHash:(e,t)=>t(e.join(`:`)),resolveShorthand:Fo}},Lo=po(Io),Ro=(...e)=>Lo(zo(...e));Ro.raw=(...e)=>zo(...e);var{mergeCss:zo,assignCss:Bo}=ho(Io);function Vo(e,t){let n={};return e.forEach(e=>{Object.entries(e).every(([e,n])=>e===`css`?!0:(Array.isArray(n)?n:[n]).some(n=>t[e]===n))&&(n=zo(n,e.css))}),n}function Ho(e,t,n,r){if(t.length>0&&typeof n?.[r]==`object`)throw Error(`[recipe:${e}:${r}] Conditions are not supported when using compound variants.`)}function Uo(){let e=``,t=0,n;for(;t<arguments.length;)(n=arguments[t++])&&typeof n==`string`&&(e&&(e+=` `),e+=n);return e}var Wo=(e,t,n)=>{let r=n=>({[e]:`__ignore__`,...t,...Ka(n)});return{recipeFn:(t,i=!0)=>{let a=po({conditions:{shift:jo,finalize:Ao,breakpoints:{keys:[`base`]}},utility:{toHash:(e,t)=>t(e.join(`:`)),transform:(r,i)=>(Ho(e,n,t,r),i===`__ignore__`?{className:e}:(i=no(i),{className:`${e}--${r}_${i}`}))}}),o=r(t);if(i){let e=Vo(n,o);return Uo(a(o),Ro(e))}return a(o)},getVariantProps:r,__getCompoundVariantCss__:e=>Vo(n,r(e))}},Go=(e,t)=>{if(e&&!t)return e;if(!e&&t)return t;let n=(...n)=>Uo(e(...n),t(...n)),r=xo(e.variantKeys,t.variantKeys),i=r.reduce((n,r)=>(n[r]=xo(e.variantMap[r],t.variantMap[r]),n),{});return Object.assign(n,{__recipe__:!0,__name__:`${e.__name__} ${t.__name__}`,raw:e=>e,variantKeys:r,variantMap:i,splitVariantProps(e){return bo(e,r)}})},Ko=Wo(`ui-button`,{variant:`filled`,theme:`neutral`,size:`medium`,shape:`rounded`},[]),qo={theme:[`primary`,`secondary`,`tertiary`,`neutral`,`info`,`success`,`warning`,`danger`],variant:[`filled`,`outlined`,`text`,`link`],size:[`small`,`medium`,`large`],shape:[`rounded`,`square`,`pill`,`circle`]},Jo=Object.keys(qo),$=Object.assign(ro(Ko.recipeFn),{__recipe__:!0,__name__:`button`,__getCompoundVariantCss__:Ko.__getCompoundVariantCss__,raw:e=>e,variantKeys:Jo,variantMap:qo,merge(e){return Go(this,e)},splitVariantProps(e){return bo(e,Jo)},getVariantProps:Ko.getVariantProps}),Yo=Wo(`ui-input`,{},[]),Xo={},Zo=Object.keys(Xo),Qo=Object.assign(ro(Yo.recipeFn),{__recipe__:!0,__name__:`input`,__getCompoundVariantCss__:Yo.__getCompoundVariantCss__,raw:e=>e,variantKeys:Zo,variantMap:Xo,merge(e){return Go(this,e)},splitVariantProps(e){return bo(e,Zo)},getVariantProps:Yo.getVariantProps}),$o={variant:`outlined`},es=[],ts=[[`root`,`ui-field__root`],[`label`,`ui-field__label`],[`helper`,`ui-field__helper`],[`prefix`,`ui-field__prefix`],[`suffix`,`ui-field__suffix`],[`errorText`,`ui-field__errorText`],[`wrapper`,`ui-field__wrapper`],[`passwordControl`,`ui-field__passwordControl`],[`input`,`ui-field__input`],[`select`,`ui-field__select`],[`textarea`,`ui-field__textarea`]].map(([e,t])=>[e,Wo(t,$o,yo(es,e))]),ns=ro((e={})=>Object.fromEntries(ts.map(([t,n])=>[t,n.recipeFn(e)]))),rs=[`variant`],os=Object.assign(ns,{__recipe__:!1,__name__:`field`,raw:e=>e,classNameMap:{},variantKeys:rs,variantMap:{variant:[`outlined`,`none`]},splitVariantProps(e){return bo(e,rs)},getVariantProps:e=>({...$o,...Ka(e)})}),ss={size:`md`},cs=[],ls=[[`trigger`,`ui-modal__trigger`],[`closeTrigger`,`ui-modal__closeTrigger`],[`backdrop`,`ui-modal__backdrop`],[`positioner`,`ui-modal__positioner`],[`content`,`ui-modal__content`],[`title`,`ui-modal__title`],[`description`,`ui-modal__description`],[`action`,`ui-modal__action`]].map(([e,t])=>[e,Wo(t,ss,yo(cs,e))]),us=ro((e={})=>Object.fromEntries(ls.map(([t,n])=>[t,n.recipeFn(e)]))),ds=[`size`],fs=Object.assign(us,{__recipe__:!1,__name__:`modal`,raw:e=>e,classNameMap:{},variantKeys:ds,variantMap:{size:[`sm`,`md`,`lg`,`xl`,`full`]},splitVariantProps(e){return bo(e,ds)},getVariantProps:e=>({...ss,...Ka(e)})}),ps=(0,a.forwardRef)((e,t)=>{let[n,r]=$.splitVariantProps(e),i=$.getVariantProps(n),a=s(t,r.ref),{getBlockProps:o,getSpinnerProps:c,isShowSpin:l}=Ft({...r,ref:a,classNames:{root:$(i)},variants:{variant:i.variant,theme:i.theme,size:i.size,shape:i.shape,icon:!!e.icon}});return(0,F.jsx)(I.div,{...o(),children:l?(0,F.jsx)(I.div,{...c(),children:(0,F.jsx)(lt,{})}):e.children})}),ms=(0,a.forwardRef)((e,t)=>{let[n,r]=$.splitVariantProps(e),i=$.getVariantProps(n),a=s(t,r.ref),{getBlockProps:o,getSpinnerProps:c,isShowSpin:l}=Ft({...r,ref:a,classNames:{root:$(i)},variants:{variant:i.variant,theme:i.theme,size:i.size,shape:i.shape,icon:!!e.icon}});return(0,F.jsx)(I.div,{...o(),children:l?(0,F.jsx)(I.div,{...c(),children:(0,F.jsx)(lt,{})}):e.children})}),hs=(0,a.forwardRef)((e,t)=>{let[n,r]=$.splitVariantProps(e),i=$.getVariantProps(n),a=s(t,r.ref),{getLinkProps:o,getSpinnerProps:c,isShowSpin:l}=Ft({...r,ref:a,classNames:{root:$(i)},variants:{variant:i.variant,theme:i.theme,size:i.size,shape:i.shape,icon:!!e.icon}});return(0,F.jsx)(I.a,{...o(),children:l?(0,F.jsx)(I.div,{...c(),children:(0,F.jsx)(lt,{})}):e.children})});ms.__docgenInfo={description:``,methods:[],displayName:`BlockButton`},ps.__docgenInfo={description:``,methods:[],displayName:`ContainerButton`},hs.__docgenInfo={description:``,methods:[],displayName:`LinkButton`};var gs=Object.assign(ps,{Core:Ot,Block:ms,Link:hs}),_s=[`children`,`titleNode`,`descriptionNode`,`actionNode`,`triggerNode`,`attrs`];function vs(e){let[t,n]=kt(e,..._s),r=fs.getVariantProps(fs.splitVariantProps(e)[0]),i=Ha({classNames:fs(r),plugins:[In,vi],...n}),{children:a,titleNode:o,descriptionNode:s,actionNode:c,triggerNode:l,attrs:u={}}=t;return(0,F.jsxs)(Ua.ServiceProvider,{value:i,children:[l&&(0,F.jsx)(gs,{...i.getOpenTriggerProps(u.trigger),children:l}),(0,F.jsxs)(Pn,{...i.getPortalProps(u.portal),children:[(0,F.jsx)(I.div,{...i.getBackdropProps(u.backdrop)}),(0,F.jsx)(I.div,{...i.getPositionerProps(u.positioner),children:(0,F.jsxs)(I.div,{...i.getContentProps(u.content),children:[(0,F.jsx)(I.button,{...i.getCloseTriggerProps(u.closeTrigger),children:(0,F.jsx)(ft,{})}),o&&(0,F.jsx)(I.div,{...i.getTitleProps(u.title),children:o}),s&&(0,F.jsx)(I.div,{...i.getDescriptionProps(u.description),children:s}),a,c&&(0,F.jsx)(I.div,{...i.getActionProps(u.action),children:c})]})})]})]})}var ys=vs,bs=(0,a.forwardRef)((e,t)=>{let n=(0,a.useRef)(null),{ref:r,...i}=(0,a.useContext)(It)||{},{ref:o,...c}=e,l=s(t,r,o,n);return(0,F.jsx)(I.input,{ref:l,...L(i,c,{className:Qo({})})})});bs.__docgenInfo={description:``,methods:[],displayName:`Input_default`};var xs=(0,a.forwardRef)((e,t)=>{let n=(0,a.useRef)(null),{ref:r,...i}=(0,a.useContext)(Rt)||{},{ref:o,...c}=e,l=s(t,r,o,n);return(0,F.jsx)(I.select,{ref:l,...L(i,c,{className:Qo({})}),children:e.children})});xs.__docgenInfo={description:``,methods:[],displayName:`Select_default`};var Ss=(0,a.forwardRef)((e,t)=>{let n=(0,a.useRef)(null),{ref:r,...i}=(0,a.useContext)(Lt)||{},{ref:o,...c}=e,l=s(t,r,o,n);return(0,F.jsx)(I.textarea,{ref:l,...L(i,c,{className:Qo({})}),children:e.children})});Ss.__docgenInfo={description:``,methods:[],displayName:`Textarea_default`};var Cs=[`attrs`,`children`,`prefixNode`,`suffixNode`,`helperNode`,`labelNode`,`childrenType`];function ws(e){let[t,n]=kt(e,...Cs),{attrs:r={},children:i,prefixNode:a,suffixNode:o,helperNode:s,labelNode:c,childrenType:l}=t,u=os.getVariantProps(os.splitVariantProps(e)[0]),d=Jt({classNames:os(u),...n}),f=n.type===`password`;return(0,F.jsx)(Xt.ServiceProvider,{value:d,children:(0,F.jsxs)(I.div,{...d.getRootProps(r.root),children:[(0,F.jsx)(I.label,{...d.getLabelProps(r.label),children:c}),(0,F.jsxs)(I.div,{...d.getWrapperProps(r.wrapper),children:[(0,F.jsx)(I.div,{...d.getPrefixProps(r.prefix),children:a}),(()=>l===`input`?i?(0,F.jsx)(It.Provider,{value:d.getInputProps(r.input),children:i}):(0,F.jsx)(bs,{...d.getInputProps(r.input)}):l===`select`?i?(0,F.jsx)(Rt.Provider,{value:d.getSelectProps(r.select),children:i}):(0,F.jsx)(xs,{...d.getSelectProps(r.select)}):l===`textarea`?i?(0,F.jsx)(Lt.Provider,{value:d.getTextareaProps(r.textarea),children:i}):(0,F.jsx)(Ss,{...d.getTextareaProps(r.textarea)}):i)(),f?(0,F.jsx)(I.div,{...d.getPasswordControlProps(r.passwordControl),children:d.isPasswordVisible?(0,F.jsx)(mt,{}):(0,F.jsx)(pt,{})}):(0,F.jsx)(I.div,{...d.getSuffixProps(r.suffix),children:o})]}),(0,F.jsx)(I.div,{...d.getHelperProps(r.helper),children:s})]})})}ws.displayName=`Field`,ws.Input=bs,ws.Select=xs,ws.Option=I.option,ws.Textarea=Ss;var Ts=ws,Es=Object.defineProperty,Ds=(e,t)=>()=>(e&&(t=e(e=0)),t),Os=(e,t)=>{for(var n in t)Es(e,n,{get:t[n],enumerable:!0})},ks={};Os(ks,{default:()=>As});var As,js=Ds((()=>{As=`@layer ui-reset, ui-base, ui-theme, ui-components, ui-utilities;@layer ui-reset {
  html,:host {
    --font-fallback: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
    line-height: 1.5;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -moz-tab-size: 4;
    tab-size: 4;
    font-family: var(--global-font-body, var(--font-fallback));
    -webkit-tap-highlight-color: transparent;
}

  *,::before,::after,::backdrop,::file-selector-button {
    margin: 0px;
    padding: 0px;
    border-width: 0px;
    border-style: solid;
    border-color: var(--global-color-border, currentcolor);
    box-sizing: border-box;
}

  hr {
    color: inherit;
    height: 0px;
    border-top-width: 1px;
}

  body {
    line-height: inherit;
    height: 100%;
}

  img {
    border-style: none;
}

  img,svg,video,canvas,audio,iframe,embed,object {
    display: block;
    vertical-align: middle;
}

  img,video {
    max-width: 100%;
    height: auto;
}

  h1,h2,h3,h4,h5,h6 {
    text-wrap: balance;
    font-size: inherit;
    font-weight: inherit;
}

  p,h1,h2,h3,h4,h5,h6 {
    overflow-wrap: break-word;
}

  ol,ul,menu {
    list-style: none;
}

  button,input:where([type='button'], [type='reset'], [type='submit']),::file-selector-button {
    appearance: button;
    -webkit-appearance: button;
}

  button,input,optgroup,select,textarea,::file-selector-button {
    font: inherit;
    background: var(--colors-transparent);
    font-feature-settings: inherit;
    font-variation-settings: inherit;
    letter-spacing: inherit;
    color: inherit;
}

  ::placeholder {
    --placeholder-fallback: rgba(0, 0, 0, 0.5);
    opacity: 1;
    color: var(--global-color-placeholder, var(--placeholder-fallback));
}

  @supports (not (-webkit-appearance: -apple-pay-button)) or (contain-intrinsic-size: 1px) {
    ::placeholder {
      --placeholder-fallback: color-mix(in oklab, currentcolor 50%, transparent);
}
}

  ::selection {
    background-color: var(--global-color-selection, rgba(0, 115, 255, 0.3));
}

  textarea {
    resize: vertical;
}

  table {
    border-color: inherit;
    text-indent: 0px;
    border-collapse: collapse;
}

  summary {
    display: list-item;
}

  small {
    font-size: 80%;
}

  sub,sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
}

  sub {
    bottom: -0.25em;
}

  sup {
    top: -0.5em;
}

  dialog {
    padding: 0px;
}

  a {
    text-decoration: inherit;
    color: inherit;
}

  abbr:where([title]) {
    text-decoration: underline dotted;
}

  b,strong {
    font-weight: bolder;
}

  code,kbd,samp,pre {
    --font-mono-fallback: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New';
    font-family: var(--global-font-mono, var(--font-mono-fallback));
    font-size: 1em;
    font-feature-settings: normal;
    font-variation-settings: normal;
}

  progress {
    vertical-align: baseline;
}

  ::-webkit-search-decoration,::-webkit-search-cancel-button {
    -webkit-appearance: none;
}

  ::-webkit-inner-spin-button,::-webkit-outer-spin-button {
    height: auto;
}

  :-moz-ui-invalid {
    box-shadow: none;
}

  :-moz-focusring {
    outline: auto;
}

  [hidden]:where(:not([hidden='until-found'])) {
    display: none !important;
}
}@layer ui-base {
  :root {
    --made-with-panda: '🐼';
}

  *,::before,::after,::backdrop {
    --blur: /*-*/ /*-*/;
    --brightness: /*-*/ /*-*/;
    --contrast: /*-*/ /*-*/;
    --grayscale: /*-*/ /*-*/;
    --hue-rotate: /*-*/ /*-*/;
    --invert: /*-*/ /*-*/;
    --saturate: /*-*/ /*-*/;
    --sepia: /*-*/ /*-*/;
    --drop-shadow: /*-*/ /*-*/;
    --backdrop-blur: /*-*/ /*-*/;
    --backdrop-brightness: /*-*/ /*-*/;
    --backdrop-contrast: /*-*/ /*-*/;
    --backdrop-grayscale: /*-*/ /*-*/;
    --backdrop-hue-rotate: /*-*/ /*-*/;
    --backdrop-invert: /*-*/ /*-*/;
    --backdrop-opacity: /*-*/ /*-*/;
    --backdrop-saturate: /*-*/ /*-*/;
    --backdrop-sepia: /*-*/ /*-*/;
    --gradient-from-position: /*-*/ /*-*/;
    --gradient-to-position: /*-*/ /*-*/;
    --gradient-via-position: /*-*/ /*-*/;
    --scroll-snap-strictness: proximity;
    --border-spacing-x: 0;
    --border-spacing-y: 0;
    --translate-x: 0;
    --translate-y: 0;
    --rotate: 0;
    --rotate-x: 0;
    --rotate-y: 0;
    --skew-x: 0;
    --skew-y: 0;
    --scale-x: 1;
    --scale-y: 1;
}

  @property --colors-opacity {
    syntax: '*';

    inherits: false;

    initial-value: 1;
  }

  @property --shadow-offset-x {
    syntax: '*';

    inherits: false;

    initial-value: 0px;
  }

  @property --shadow-offset-y {
    syntax: '*';

    inherits: false;

    initial-value: 0px;
  }

  @property --shadow-blur {
    syntax: '*';

    inherits: false;

    initial-value: 0px;
  }

  @property --shadow-spread {
    syntax: '*';

    inherits: false;

    initial-value: 0px;
  }

  @property --shadow-color {
    syntax: 'color';

    inherits: false;

    initial-value: transparent;
  }

  @property --shadows-extends {
    syntax: '*';

    inherits: false;

    initial-value: 0 0 #0000;
  }

  @property --shadows-inset {
    syntax: '*';

    inherits: false;

    initial-value: 0 0 #0000;
  }

  @property --shadows-inset-ring {
    syntax: '*';

    inherits: false;

    initial-value: 0 0 #0000;
  }

  @property --shadows-ring-offset {
    syntax: '*';

    inherits: false;

    initial-value: 0 0 #0000;
  }

  @property --shadows-ring {
    syntax: '*';

    inherits: false;

    initial-value: 0 0 #0000;
  }

  @property --shadows-base {
    syntax: '*';

    inherits: false;

    initial-value: 0 0 #0000;
  }

  @property --transforms-rotate-x {
    syntax: '*';

    inherits: false;

    initial-value: rotateX(0);
  }

  @property --transforms-rotate-y {
    syntax: '*';

    inherits: false;

    initial-value: rotateY(0);
  }

  @property --transforms-rotate-z {
    syntax: '*';

    inherits: false;

    initial-value: rotateZ(0);
  }

  @property --transforms-skew-x {
    syntax: '*';

    inherits: false;

    initial-value: skewX(0);
  }

  @property --transforms-skew-y {
    syntax: '*';

    inherits: false;

    initial-value: skewY(0);
  }

  @property --transforms-translate-x {
    syntax: '*';

    inherits: false;

    initial-value: translateX(0);
  }

  @property --transforms-translate-y {
    syntax: '*';

    inherits: false;

    initial-value: translateY(0);
  }

  @property --transforms-translate-z {
    syntax: '*';

    inherits: false;

    initial-value: translateZ(0);
  }

  @property --transforms-scale-x {
    syntax: '*';

    inherits: false;

    initial-value: scaleX(1);
  }

  @property --transforms-scale-y {
    syntax: '*';

    inherits: false;

    initial-value: scaleY(1);
  }

  @property --transforms-scale-z {
    syntax: '*';

    inherits: false;

    initial-value: scaleZ(1);
  }

  @property --filters-blur {
    syntax: '*';

    inherits: false;

    initial-value: blur(0);
  }

  @property --filters-brightness {
    syntax: '*';

    inherits: false;

    initial-value: brightness(1);
  }

  @property --filters-contrast {
    syntax: '*';

    inherits: false;

    initial-value: contrast(1);
  }

  @property --filters-grayscale {
    syntax: '*';

    inherits: false;

    initial-value: grayscale(0);
  }

  @property --filters-hue-rotate {
    syntax: '*';

    inherits: false;

    initial-value: hue-rotate(0deg);
  }

  @property --filters-invert {
    syntax: '*';

    inherits: false;

    initial-value: invert(0);
  }

  @property --filters-saturate {
    syntax: '*';

    inherits: false;

    initial-value: saturate(1);
  }

  @property --filters-sepia {
    syntax: '*';

    inherits: false;

    initial-value: sepia(0);
  }

  @property --filters-drop-shadow {
    syntax: '*';

    inherits: false;

    initial-value: drop-shadow(0 0 0 #0000);
  }

  @property --transition-property {
    syntax: '*';

    inherits: false;

    initial-value: all;
  }

  @property --transition-duration {
    syntax: '<time>';

    inherits: false;

    initial-value: 0.2s;
  }

  @property --transition-timing-function {
    syntax: '*';

    inherits: false;

    initial-value: ease;
  }

  @property --transition-delay {
    syntax: '<time>';

    inherits: false;

    initial-value: 0s;
  }

  @property --transition-behavior {
    syntax: '*';

    inherits: false;

    initial-value: normal;
  }

  @property --transitions-transitions {
    syntax: '*';

    inherits: false;

    initial-value: all 0s ease 0s;
  }

  @property --transitions-extends {
    syntax: '*';

    inherits: false;

    initial-value: all 0s ease 0s;
  }
}@layer ui-theme {
  :where(:root, :host) {
    --spacing-0: 0;
    --spacing-1: 0.25rem;
    --spacing-2: 0.5rem;
    --spacing-3: 0.75rem;
    --spacing-4: 1rem;
    --spacing-5: 1.25rem;
    --spacing-6: 1.5rem;
    --spacing-7: 1.75rem;
    --spacing-8: 2rem;
    --spacing-9: 2.25rem;
    --spacing-10: 2.5rem;
    --spacing-11: 2.75rem;
    --spacing-12: 3rem;
    --spacing-13: 3.25rem;
    --spacing-14: 3.5rem;
    --spacing-16: 4rem;
    --spacing-20: 5rem;
    --spacing-24: 6rem;
    --spacing-28: 7rem;
    --spacing-32: 8rem;
    --spacing-36: 9rem;
    --spacing-40: 10rem;
    --spacing-44: 11rem;
    --spacing-48: 12rem;
    --spacing-52: 13rem;
    --spacing-56: 14rem;
    --spacing-60: 15rem;
    --spacing-64: 16rem;
    --spacing-72: 18rem;
    --spacing-80: 20rem;
    --spacing-96: 24rem;
    --spacing-0\\.5: 0.125rem;
    --spacing-1\\.5: 0.375rem;
    --spacing-2\\.5: 0.625rem;
    --spacing-3\\.5: 0.875rem;
    --spacing-4\\.5: 1.125rem;
    --font-sizes-xs: 0.75rem;
    --font-sizes-sm: 0.875rem;
    --font-sizes-md: 1rem;
    --font-sizes-lg: 1.125rem;
    --font-sizes-xl: 1.25rem;
    --font-sizes-2xl: 1.5rem;
    --font-sizes-3xl: 2rem;
    --font-sizes-4xl: 2.5rem;
    --font-sizes-5xl: 3rem;
    --font-sizes-6xl: 4rem;
    --font-weights-thin: 100;
    --font-weights-extralight: 200;
    --font-weights-light: 300;
    --font-weights-regular: 400;
    --font-weights-medium: 500;
    --font-weights-semibold: 600;
    --font-weights-bold: 700;
    --font-weights-extrabold: 800;
    --font-weights-black: 900;
    --line-heights-none: 1;
    --line-heights-short: 1.25;
    --line-heights-base: 1.5;
    --line-heights-tall: 1.75;
    --line-heights-taller: 2;
    --radii-xs: 0.125rem;
    --radii-sm: 0.25rem;
    --radii-md: 0.375rem;
    --radii-lg: 0.5rem;
    --radii-xl: 0.75rem;
    --radii-2xl: 1rem;
    --radii-3xl: 1.5rem;
    --radii-4xl: 2rem;
    --radii-full: 9999px;
    --radii-circle: 50%;
    --border-widths-0: 0;
    --border-widths-1: 0.0625rem;
    --border-widths-2: 0.125rem;
    --border-widths-4: 0.25rem;
    --border-widths-8: 0.5rem;
    --opacity-0: 0;
    --opacity-10: 0.1;
    --opacity-20: 0.2;
    --opacity-30: 0.3;
    --opacity-40: 0.4;
    --opacity-50: 0.5;
    --opacity-60: 0.6;
    --opacity-70: 0.7;
    --opacity-80: 0.8;
    --opacity-90: 0.9;
    --opacity-100: 1;
    --shadows-box-2xs: 0 1px rgba(0, 0, 0, 0.05);
    --shadows-box-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
    --shadows-box-md: 0 4px 8px 0 rgb(0 0 0 / 0.1);
    --shadows-box-lg: 0 8px 16px 0 rgb(0 0 0 / 0.2);
    --shadows-box-xl: 0 16px 32px 0 rgb(0 0 0 / 0.3);
    --shadows-box-2xl: 0 32px 64px 0 rgb(0 0 0 / 0.4);
    --shadows-inset-2xs: inset 0 1px rgb(0 0 0 / 0.05);
    --shadows-inset-xs: inset 0 1px 1px rgb(0 0 0 / 0.05);
    --shadows-inset-sm: inset 0 2px 4px rgb(0 0 0 / 0.05);
    --shadows-text-2xs: 0px 1px 0px rgb(0 0 0 / 0.15);
    --shadows-text-xs: 0px 1px 1px rgb(0 0 0 / 0.2);
    --shadows-text-sm: 0px 1px 0px rgb(0 0 0 / 0.075), 0px 1px 1px rgb(0 0 0 / 0.075), 0px 2px 2px rgb(0 0 0 / 0.075);
    --shadows-text-md: 0px 1px 1px rgb(0 0 0 / 0.1), 0px 1px 2px rgb(0 0 0 / 0.1), 0px 2px 4px rgb(0 0 0 / 0.1);
    --shadows-text-lg: 0px 1px 2px rgb(0 0 0 / 0.1), 0px 3px 2px rgb(0 0 0 / 0.1), 0px 4px 8px rgb(0, 0, 0, 0.1);
    --shadows-drop-xs: 0 1px 1px rgb(0 0 0 / 0.05);
    --shadows-drop-sm: 0 1px 2px rgb(0 0 0 / 0.15);
    --shadows-drop-md: 0 3px 3px rgb(0 0 0 / 0.12);
    --shadows-drop-lg: 0 4px 4px rgb(0 0 0 / 0.15);
    --shadows-drop-xl: 0 9px 7px rgb(0 0 0 / 0.1);
    --shadows-drop-2xl: 0 25px 25px rgb(0 0 0 / 0.15);
    --blur-xs: 4px;
    --blur-sm: 8px;
    --blur-md: 12px;
    --blur-lg: 16px;
    --blur-xl: 24px;
    --blur-2xl: 40px;
    --blur-3xl: 64px;
    --colors-black: #000;
    --colors-white: #fff;
    --colors-transparent: rgba(255, 255, 255, 0);
    --colors-red-50: oklch(0.971 0.013 17.38);
    --colors-red-100: oklch(0.936 0.032 17.717);
    --colors-red-200: oklch(0.885 0.062 18.334);
    --colors-red-300: oklch(0.808 0.114 19.571);
    --colors-red-400: oklch(0.704 0.191 22.216);
    --colors-red-500: oklch(0.637 0.237 25.331);
    --colors-red-600: oklch(0.577 0.245 27.325);
    --colors-red-700: oklch(0.505 0.213 27.518);
    --colors-red-800: oklch(0.444 0.177 26.899);
    --colors-red-900: oklch(0.396 0.141 25.723);
    --colors-red-950: oklch(0.258 0.092 26.042);
    --colors-orange-50: oklch(0.98 0.016 73.684);
    --colors-orange-100: oklch(0.954 0.038 75.164);
    --colors-orange-200: oklch(0.901 0.076 70.697);
    --colors-orange-300: oklch(0.837 0.128 66.29);
    --colors-orange-400: oklch(0.75 0.183 55.934);
    --colors-orange-500: oklch(0.705 0.213 47.604);
    --colors-orange-600: oklch(0.646 0.222 41.116);
    --colors-orange-700: oklch(0.553 0.195 38.402);
    --colors-orange-800: oklch(0.47 0.157 37.304);
    --colors-orange-900: oklch(0.408 0.123 38.172);
    --colors-orange-950: oklch(0.266 0.079 36.259);
    --colors-amber-50: oklch(0.987 0.022 95.277);
    --colors-amber-100: oklch(0.962 0.059 95.617);
    --colors-amber-200: oklch(0.924 0.12 95.746);
    --colors-amber-300: oklch(0.879 0.169 91.605);
    --colors-amber-400: oklch(0.828 0.189 84.429);
    --colors-amber-500: oklch(0.769 0.188 70.08);
    --colors-amber-600: oklch(0.666 0.179 58.318);
    --colors-amber-700: oklch(0.555 0.163 48.998);
    --colors-amber-800: oklch(0.473 0.137 46.201);
    --colors-amber-900: oklch(0.414 0.112 45.904);
    --colors-amber-950: oklch(0.279 0.077 45.635);
    --colors-yellow-50: oklch(0.987 0.026 102.212);
    --colors-yellow-100: oklch(0.973 0.071 103.193);
    --colors-yellow-200: oklch(0.945 0.129 101.54);
    --colors-yellow-300: oklch(0.905 0.182 98.111);
    --colors-yellow-400: oklch(0.852 0.199 91.936);
    --colors-yellow-500: oklch(0.795 0.184 86.047);
    --colors-yellow-600: oklch(0.681 0.162 75.834);
    --colors-yellow-700: oklch(0.554 0.135 66.442);
    --colors-yellow-800: oklch(0.476 0.114 61.907);
    --colors-yellow-900: oklch(0.421 0.095 57.708);
    --colors-yellow-950: oklch(0.286 0.066 53.813);
    --colors-lime-50: oklch(0.986 0.031 120.757);
    --colors-lime-100: oklch(0.967 0.067 122.328);
    --colors-lime-200: oklch(0.938 0.127 124.321);
    --colors-lime-300: oklch(0.897 0.196 126.665);
    --colors-lime-400: oklch(0.841 0.238 128.85);
    --colors-lime-500: oklch(0.768 0.233 130.85);
    --colors-lime-600: oklch(0.648 0.2 131.684);
    --colors-lime-700: oklch(0.532 0.157 131.589);
    --colors-lime-800: oklch(0.453 0.124 130.933);
    --colors-lime-900: oklch(0.405 0.101 131.063);
    --colors-lime-950: oklch(0.274 0.072 132.109);
    --colors-green-50: oklch(0.982 0.018 155.826);
    --colors-green-100: oklch(0.962 0.044 156.743);
    --colors-green-200: oklch(0.925 0.084 155.995);
    --colors-green-300: oklch(0.871 0.15 154.449);
    --colors-green-400: oklch(0.792 0.209 151.711);
    --colors-green-500: oklch(0.723 0.219 149.579);
    --colors-green-600: oklch(0.627 0.194 149.214);
    --colors-green-700: oklch(0.527 0.154 150.069);
    --colors-green-800: oklch(0.448 0.119 151.328);
    --colors-green-900: oklch(0.393 0.095 152.535);
    --colors-green-950: oklch(0.266 0.065 152.934);
    --colors-emerald-50: oklch(0.979 0.021 166.113);
    --colors-emerald-100: oklch(0.95 0.052 163.051);
    --colors-emerald-200: oklch(0.905 0.093 164.15);
    --colors-emerald-300: oklch(0.845 0.143 164.978);
    --colors-emerald-400: oklch(0.765 0.177 163.223);
    --colors-emerald-500: oklch(0.696 0.17 162.48);
    --colors-emerald-600: oklch(0.596 0.145 163.225);
    --colors-emerald-700: oklch(0.508 0.118 165.612);
    --colors-emerald-800: oklch(0.432 0.095 166.913);
    --colors-emerald-900: oklch(0.378 0.077 168.94);
    --colors-emerald-950: oklch(0.262 0.051 172.552);
    --colors-teal-50: oklch(0.984 0.014 180.72);
    --colors-teal-100: oklch(0.953 0.051 180.801);
    --colors-teal-200: oklch(0.91 0.096 180.426);
    --colors-teal-300: oklch(0.855 0.138 181.071);
    --colors-teal-400: oklch(0.777 0.152 181.912);
    --colors-teal-500: oklch(0.704 0.14 182.503);
    --colors-teal-600: oklch(0.6 0.118 184.704);
    --colors-teal-700: oklch(0.511 0.096 186.391);
    --colors-teal-800: oklch(0.437 0.078 188.216);
    --colors-teal-900: oklch(0.386 0.063 188.416);
    --colors-teal-950: oklch(0.277 0.046 192.524);
    --colors-cyan-50: oklch(0.984 0.019 200.873);
    --colors-cyan-100: oklch(0.956 0.045 203.388);
    --colors-cyan-200: oklch(0.917 0.08 205.041);
    --colors-cyan-300: oklch(0.865 0.127 207.078);
    --colors-cyan-400: oklch(0.789 0.154 211.53);
    --colors-cyan-500: oklch(0.715 0.143 215.221);
    --colors-cyan-600: oklch(0.609 0.126 221.723);
    --colors-cyan-700: oklch(0.52 0.105 223.128);
    --colors-cyan-800: oklch(0.45 0.085 224.283);
    --colors-cyan-900: oklch(0.398 0.07 227.392);
    --colors-cyan-950: oklch(0.302 0.056 229.695);
    --colors-sky-50: oklch(0.977 0.013 236.62);
    --colors-sky-100: oklch(0.951 0.026 236.824);
    --colors-sky-200: oklch(0.901 0.058 230.902);
    --colors-sky-300: oklch(0.828 0.111 230.318);
    --colors-sky-400: oklch(0.746 0.16 232.661);
    --colors-sky-500: oklch(0.685 0.169 237.323);
    --colors-sky-600: oklch(0.588 0.158 241.966);
    --colors-sky-700: oklch(0.5 0.134 242.749);
    --colors-sky-800: oklch(0.443 0.11 240.79);
    --colors-sky-900: oklch(0.391 0.09 240.876);
    --colors-sky-950: oklch(0.293 0.066 243.157);
    --colors-blue-50: oklch(0.97 0.014 254.604);
    --colors-blue-100: oklch(0.932 0.032 255.585);
    --colors-blue-200: oklch(0.882 0.059 254.128);
    --colors-blue-300: oklch(0.809 0.105 251.813);
    --colors-blue-400: oklch(0.707 0.165 254.624);
    --colors-blue-500: oklch(0.623 0.214 259.815);
    --colors-blue-600: oklch(0.546 0.245 262.881);
    --colors-blue-700: oklch(0.488 0.243 264.376);
    --colors-blue-800: oklch(0.424 0.199 265.638);
    --colors-blue-900: oklch(0.379 0.146 265.522);
    --colors-blue-950: oklch(0.282 0.091 267.935);
    --colors-indigo-50: oklch(0.962 0.018 272.314);
    --colors-indigo-100: oklch(0.93 0.034 272.788);
    --colors-indigo-200: oklch(0.87 0.065 274.039);
    --colors-indigo-300: oklch(0.785 0.115 274.713);
    --colors-indigo-400: oklch(0.673 0.182 276.935);
    --colors-indigo-500: oklch(0.585 0.233 277.117);
    --colors-indigo-600: oklch(0.511 0.262 276.966);
    --colors-indigo-700: oklch(0.457 0.24 277.023);
    --colors-indigo-800: oklch(0.398 0.195 277.366);
    --colors-indigo-900: oklch(0.359 0.144 278.697);
    --colors-indigo-950: oklch(0.257 0.09 281.288);
    --colors-violet-50: oklch(0.969 0.016 293.756);
    --colors-violet-100: oklch(0.943 0.029 294.588);
    --colors-violet-200: oklch(0.894 0.057 293.283);
    --colors-violet-300: oklch(0.811 0.111 293.571);
    --colors-violet-400: oklch(0.702 0.183 293.541);
    --colors-violet-500: oklch(0.606 0.25 292.717);
    --colors-violet-600: oklch(0.541 0.281 293.009);
    --colors-violet-700: oklch(0.491 0.27 292.581);
    --colors-violet-800: oklch(0.432 0.232 292.759);
    --colors-violet-900: oklch(0.38 0.189 293.745);
    --colors-violet-950: oklch(0.283 0.141 291.089);
    --colors-purple-50: oklch(0.977 0.014 308.299);
    --colors-purple-100: oklch(0.946 0.033 307.174);
    --colors-purple-200: oklch(0.902 0.063 306.703);
    --colors-purple-300: oklch(0.827 0.119 306.383);
    --colors-purple-400: oklch(0.714 0.203 305.504);
    --colors-purple-500: oklch(0.627 0.265 303.9);
    --colors-purple-600: oklch(0.558 0.288 302.321);
    --colors-purple-700: oklch(0.496 0.265 301.924);
    --colors-purple-800: oklch(0.438 0.218 303.724);
    --colors-purple-900: oklch(0.381 0.176 304.987);
    --colors-purple-950: oklch(0.291 0.149 302.717);
    --colors-fuchsia-50: oklch(0.977 0.017 320.058);
    --colors-fuchsia-100: oklch(0.952 0.037 318.852);
    --colors-fuchsia-200: oklch(0.903 0.076 319.62);
    --colors-fuchsia-300: oklch(0.833 0.145 321.434);
    --colors-fuchsia-400: oklch(0.74 0.238 322.16);
    --colors-fuchsia-500: oklch(0.667 0.295 322.15);
    --colors-fuchsia-600: oklch(0.591 0.293 322.896);
    --colors-fuchsia-700: oklch(0.518 0.253 323.949);
    --colors-fuchsia-800: oklch(0.452 0.211 324.591);
    --colors-fuchsia-900: oklch(0.401 0.17 325.612);
    --colors-fuchsia-950: oklch(0.293 0.136 325.661);
    --colors-pink-50: oklch(0.971 0.014 343.198);
    --colors-pink-100: oklch(0.948 0.028 342.258);
    --colors-pink-200: oklch(0.899 0.061 343.231);
    --colors-pink-300: oklch(0.823 0.12 346.018);
    --colors-pink-400: oklch(0.718 0.202 349.761);
    --colors-pink-500: oklch(0.656 0.241 354.308);
    --colors-pink-600: oklch(0.592 0.249 0.584);
    --colors-pink-700: oklch(0.525 0.223 3.958);
    --colors-pink-800: oklch(0.459 0.187 3.815);
    --colors-pink-900: oklch(0.408 0.153 2.432);
    --colors-pink-950: oklch(0.284 0.109 3.907);
    --colors-rose-50: oklch(0.969 0.015 12.422);
    --colors-rose-100: oklch(0.941 0.03 12.58);
    --colors-rose-200: oklch(0.892 0.058 10.001);
    --colors-rose-300: oklch(0.81 0.117 11.638);
    --colors-rose-400: oklch(0.712 0.194 13.428);
    --colors-rose-500: oklch(0.645 0.246 16.439);
    --colors-rose-600: oklch(0.586 0.253 17.585);
    --colors-rose-700: oklch(0.514 0.222 16.935);
    --colors-rose-800: oklch(0.455 0.188 13.697);
    --colors-rose-900: oklch(0.41 0.159 10.272);
    --colors-rose-950: oklch(0.271 0.105 12.094);
    --colors-slate-50: oklch(0.984 0.003 247.858);
    --colors-slate-100: oklch(0.968 0.007 247.896);
    --colors-slate-200: oklch(0.929 0.013 255.508);
    --colors-slate-300: oklch(0.869 0.022 252.894);
    --colors-slate-400: oklch(0.704 0.04 256.788);
    --colors-slate-500: oklch(0.554 0.046 257.417);
    --colors-slate-600: oklch(0.446 0.043 257.281);
    --colors-slate-700: oklch(0.372 0.044 257.287);
    --colors-slate-800: oklch(0.279 0.041 260.031);
    --colors-slate-900: oklch(0.208 0.042 265.755);
    --colors-slate-950: oklch(0.129 0.042 264.695);
    --colors-gray-50: oklch(0.985 0.002 247.839);
    --colors-gray-100: oklch(0.967 0.003 264.542);
    --colors-gray-200: oklch(0.928 0.006 264.531);
    --colors-gray-300: oklch(0.872 0.01 258.338);
    --colors-gray-400: oklch(0.707 0.022 261.325);
    --colors-gray-500: oklch(0.551 0.027 264.364);
    --colors-gray-600: oklch(0.446 0.03 256.802);
    --colors-gray-700: oklch(0.373 0.034 259.733);
    --colors-gray-800: oklch(0.278 0.033 256.848);
    --colors-gray-900: oklch(0.21 0.034 264.665);
    --colors-gray-950: oklch(0.13 0.028 261.692);
    --colors-zinc-50: oklch(0.985 0 0);
    --colors-zinc-100: oklch(0.967 0.001 286.375);
    --colors-zinc-200: oklch(0.92 0.004 286.32);
    --colors-zinc-300: oklch(0.871 0.006 286.286);
    --colors-zinc-400: oklch(0.705 0.015 286.067);
    --colors-zinc-500: oklch(0.552 0.016 285.938);
    --colors-zinc-600: oklch(0.442 0.017 285.786);
    --colors-zinc-700: oklch(0.37 0.013 285.805);
    --colors-zinc-800: oklch(0.274 0.006 286.033);
    --colors-zinc-900: oklch(0.21 0.006 285.885);
    --colors-zinc-950: oklch(0.141 0.005 285.823);
    --colors-neutral-50: oklch(0.985 0 0);
    --colors-neutral-100: oklch(0.97 0 0);
    --colors-neutral-200: oklch(0.922 0 0);
    --colors-neutral-300: oklch(0.87 0 0);
    --colors-neutral-400: oklch(0.708 0 0);
    --colors-neutral-500: oklch(0.556 0 0);
    --colors-neutral-600: oklch(0.439 0 0);
    --colors-neutral-700: oklch(0.371 0 0);
    --colors-neutral-800: oklch(0.269 0 0);
    --colors-neutral-900: oklch(0.205 0 0);
    --colors-neutral-950: oklch(0.145 0 0);
    --colors-stone-50: oklch(0.985 0.001 106.423);
    --colors-stone-100: oklch(0.97 0.001 106.424);
    --colors-stone-200: oklch(0.923 0.003 48.717);
    --colors-stone-300: oklch(0.869 0.005 56.366);
    --colors-stone-400: oklch(0.709 0.01 56.259);
    --colors-stone-500: oklch(0.553 0.013 58.071);
    --colors-stone-600: oklch(0.444 0.011 73.639);
    --colors-stone-700: oklch(0.374 0.01 67.558);
    --colors-stone-800: oklch(0.268 0.007 34.298);
    --colors-stone-900: oklch(0.216 0.006 56.043);
    --colors-stone-950: oklch(0.147 0.004 49.25);
    --colors-neutral-strong: var(--colors-gray-900);
    --colors-neutral-normal: var(--colors-gray-700);
    --colors-neutral-muted: var(--colors-gray-500);
    --colors-neutral-understated: var(--colors-gray-300);
    --colors-neutral-inverted: var(--colors-white);
    --colors-primary: var(--colors-blue-500);
    --colors-secondary: var(--colors-gray-500);
    --colors-tertiary: var(--colors-white);
    --colors-success: var(--colors-green-500);
    --colors-warning: var(--colors-orange-500);
    --colors-danger: var(--colors-red-500);
    --colors-info: var(--colors-cyan-500);
    --colors-input-normal-text: var(--colors-neutral-normal);
    --colors-input-normal-border: var(--colors-neutral-muted);
    --colors-input-normal-placeholder: color-mix(in oklch, var(--colors-neutral-muted) 80%, transparent);
    --colors-input-normal-bg: color-mix(in oklch, var(--colors-neutral-understated) 5%, transparent);
    --colors-input-normal-hover: color-mix(in oklch, var(--colors-info) 85%, transparent);
    --colors-input-selected-default: var(--colors-info);
    --colors-input-selected-shadow: color-mix(in oklab, var(--colors-info) 20%, transparent);
    --colors-input-disabled-text: color-mix(in oklch, var(--colors-neutral-normal) 40%, transparent);
    --colors-input-disabled-border: color-mix(in oklch, var(--colors-neutral-muted) 40%, transparent);
    --colors-input-disabled-placeholder: color-mix(in oklch, var(--colors-neutral-muted) 40%, transparent);
    --colors-input-disabled-bg: color-mix(in oklch, var(--colors-neutral-understated) 10%, transparent);
    --colors-field-valid-default: var(--colors-success);
    --colors-field-valid-hover: color-mix(in oklch, var(--colors-success) 85%, transparent);
    --colors-field-valid-shadow: color-mix(in oklab, var(--colors-success) 20%, transparent);
    --colors-field-invalid-default: var(--colors-danger);
    --colors-field-invalid-hover: color-mix(in oklch, var(--colors-danger) 85%, transparent);
    --colors-field-invalid-shadow: color-mix(in oklab, var(--colors-danger) 20%, transparent);
    --colors-field-disabled-valid: color-mix(in oklch, var(--colors-success) 40%, transparent);
    --colors-field-disabled-invalid: color-mix(in oklch, var(--colors-danger) 40%, transparent);
    --colors-button-primary-default: var(--colors-primary);
    --colors-button-primary-inverse: var(--colors-white);
    --colors-button-secondary-default: var(--colors-secondary);
    --colors-button-secondary-inverse: var(--colors-white);
    --colors-button-tertiary-default: var(--colors-tertiary);
    --colors-button-tertiary-inverse: var(--colors-black);
    --colors-button-neutral-default: var(--colors-neutral-normal);
    --colors-button-neutral-inverse: var(--colors-white);
    --colors-button-info-default: var(--colors-info);
    --colors-button-info-inverse: var(--colors-white);
    --colors-button-success-default: var(--colors-success);
    --colors-button-success-inverse: var(--colors-white);
    --colors-button-warning-default: var(--colors-warning);
    --colors-button-warning-inverse: var(--colors-white);
    --colors-button-danger-default: var(--colors-danger);
    --colors-button-danger-inverse: var(--colors-white);
}
}@layer ui-components {
  @layer _base {
    .ui-button {
      --transitions-base: transform 0.2s;
      border-style: solid;
      border-width: var(--border-widths-1);
      border-color: var(--colors-button-border);
      transition: var(--transition-property) var(--transition-duration) var(--transition-timing-function) var(--transition-delay) var(--transition-behavior), var(--transitions-base), var(--transitions-extends);
      display: inline-flex;
      line-height: var(--line-heights-base);
      font-weight: var(--font-weights-regular);
      cursor: pointer;
      background-color: var(--colors-button-bg);
      color: var(--colors-button-text);
      transform: var(--transforms-rotate-x) var(--transforms-rotate-y) var(--transforms-rotate-z) var(--transforms-skew-x) var(--transforms-skew-y) var(--transforms-translate-x) var(--transforms-translate-y) var(--transforms-translate-z)  var(--transforms-scale-x) var(--transforms-scale-y) var(--transforms-scale-z);
      box-shadow: var(--shadows-inset),var(--shadows-inset-ring),var(--shadows-ring-offset),var(--shadows-ring), var(--shadows-base);
}

    .ui-button:is(:disabled, [disabled], [data-disabled], [aria-disabled=true]) {
      border-color: var(--colors-button-border-disabled);
      cursor: not-allowed;
      background-color: var(--colors-button-bg-disabled);
      color: var(--colors-button-text-disabled);
}

    .ui-button:link {
      color: var(--colors-button-link);
}

    .ui-button:link:focus.ui-button:link:not(:disabled,[data-disabled]) {
      --shadows-base: 0 0 0 3px var(--colors-button-link-outline-focus);
      outline-style: solid;
      outline-width: var(--border-widths-2);
      outline-color: var(--colors-button-link-outline-focus);
}

    .ui-button:link:visited:not(:disabled,[data-disabled]) {
      color: var(--colors-button-link-visited);
}

    .ui-button:link:hover.ui-button:link:not(:disabled,[data-disabled]) {
      color: var(--colors-button-link-hover);
}

    .ui-button:link:active.ui-button:link:not(:disabled,[data-disabled]) {
      color: var(--colors-button-link-active);
}

    .ui-button:link:disabled,.ui-button:link [data-disabled] {
      color: var(--colors-button-link-disabled);
}

    .ui-button:focus.ui-button:not(:disabled) {
      --shadows-base: 0 0 0 3px var(--colors-button-outline-focus);
      outline-style: solid;
      outline-width: var(--border-widths-1);
      outline-color: var(--colors-button-outline-focus);
}

    .ui-button:hover.ui-button:not(:disabled,[data-disabled]) {
      border-color: var(--colors-button-border-hover);
      background-color: var(--colors-button-bg-hover);
      color: var(--colors-button-text-hover);
}

    .ui-button:active.ui-button:not(:disabled,[data-disabled]) {
      --transforms-scale-x: scaleX(1.02);
      --transforms-scale-y: scaleY(1.02);
}

    .ui-input {
      border-width: var(--border-widths-1);
      border-style: solid;
      border-color: var(--colors-input-normal-border);
      border-radius: var(--radii-md);
      padding-block: var(--spacing-2);
      padding-inline: var(--spacing-3);
      color: var(--colors-input-normal-text);
      background-color: var(--colors-input-normal-bg);
      font-size: var(--font-sizes-lg);
      font-weight: var(--font-weights-regular);
      line-height: var(--line-heights-base);
}

    .ui-input:is(:disabled, [disabled], [data-disabled], [aria-disabled=true]) {
      border-color: var(--colors-input-disabled-border);
      color: var(--colors-input-disabled-text);
      background-color: var(--colors-input-disabled-bg);
      cursor: not-allowed;
}

    .ui-input:is(:disabled, [disabled], [data-disabled], [aria-disabled=true])::placeholder,.ui-input:is(:disabled, [disabled], [data-disabled], [aria-disabled=true])[data-placeholder] {
      color: var(--colors-input-disabled-placeholder);
}

    .ui-input::placeholder,.ui-input[data-placeholder] {
      color: var(--colors-input-normal-placeholder);
}

    .ui-input:is(:focus, [data-focus]) {
      outline: 2px solid transparent;
      outline-offset: 2px;
      border-color: var(--colors-input-selected-default);
      box-shadow: 0 0 0 3px var(--colors-input-selected-shadow);
}
}

  .ui-button--variant_filled {
    outline: 2px solid transparent;
    outline-offset: 2px;
    justify-content: center;
    align-items: center;
}

  .ui-button--theme_neutral[data-button-variant="filled"] {
    --colors-button-bg: var(--colors-button-neutral-default);
    --colors-button-border: var(--colors-transparent);
    --colors-button-text: var(--colors-button-neutral-inverse);
    --colors-button-bg-hover: color-mix(in oklch, var(--colors-button-neutral-default) 85%, transparent);
    --colors-button-border-hover: var(--colors-transparent);
    --colors-button-text-hover: var(--colors-button-neutral-inverse);
    --colors-button-bg-disabled: color-mix(in oklch, var(--colors-button-neutral-default) 70%, transparent);
    --colors-button-border-disabled: var(--colors-transparent);
    --colors-button-text-disabled: var(--colors-button-neutral-inverse);
    --colors-button-outline-focus: color-mix(in oklch, var(--colors-button-neutral-default) 20%, transparent);
}

  .ui-button--theme_neutral[data-button-variant="outlined"] {
    --colors-button-bg: var(--colors-transparent);
    --colors-button-border: var(--colors-button-neutral-default);
    --colors-button-text: var(--colors-button-neutral-default);
    --colors-button-bg-hover: color-mix(in oklch, var(--colors-button-neutral-default) 85%, transparent);
    --colors-button-border-hover: var(--colors-transparent);
    --colors-button-text-hover: var(--colors-button-neutral-inverse);
    --colors-button-bg-disabled: color-mix(in oklch, var(--colors-button-neutral-default) 10%, transparent);
    --colors-button-border-disabled: color-mix(in oklch, var(--colors-button-neutral-default) 70%, transparent);
    --colors-button-text-disabled: color-mix(in oklch, var(--colors-button-neutral-default) 70%, transparent);
    --colors-button-outline-focus: color-mix(in oklch, var(--colors-button-neutral-default) 20%, transparent);
}

  .ui-button--theme_neutral[data-button-variant="text"] {
    --colors-button-text: var(--colors-button-neutral-default);
    --colors-button-text-hover: color-mix(in oklch, var(--colors-button-neutral-default) 70%, #000);
    --colors-button-text-active: color-mix(in oklch, var(--colors-button-neutral-default) 70%,  #fff);
    --colors-button-text-disabled: color-mix(in oklch, var(--colors-button-neutral-default) 60%, transparent);
    --colors-button-outline-focus: color-mix(in oklch, var(--colors-button-neutral-default) 30%, transparent);
    --colors-button-link: var(--colors-button-info-default);
    --colors-button-link-visited: color-mix(in oklch, var(--colors-button-info-default) 70%,  #f00);
    --colors-button-link-active: color-mix(in oklch, var(--colors-button-info-default) 70%,  #fff);
    --colors-button-link-disabled: color-mix(in oklch, var(--colors-button-info-default) 60%, transparent);
    --colors-button-link-outline-focus: color-mix(in oklch, var(--colors-button-info-default) 30%, transparent);
}

  .ui-button--theme_neutral[data-button-variant="link"] {
    --colors-button-text: var(--colors-button-info-default);
    --colors-button-text-hover: color-mix(in oklch, var(--colors-button-info-default) 70%, #000);
    --colors-button-text-active: color-mix(in oklch, var(--colors-button-info-default) 70%,  #fff);
    --colors-button-text-disabled: color-mix(in oklch, var(--colors-button-info-default) 60%, transparent);
    --colors-button-outline-focus: color-mix(in oklch, var(--colors-button-info-default) 30%, transparent);
    --colors-button-link: var(--colors-button-info-default);
    --colors-button-link-visited: color-mix(in oklch, var(--colors-button-info-default) 70%,  #f00);
    --colors-button-link-active: color-mix(in oklch, var(--colors-button-info-default) 70%,  #fff);
    --colors-button-link-disabled: color-mix(in oklch, var(--colors-button-info-default) 60%, transparent);
    --colors-button-link-outline-focus: color-mix(in oklch, var(--colors-button-info-default) 30%, transparent);
}

  .ui-button--size_medium {
    padding-block: var(--spacing-2);
    padding-inline: var(--spacing-4);
    gap: 0.625rem;
    font-size: var(--font-sizes-md);
}

  .ui-button--size_medium[data-button-icon] {
    font-size: var(--font-sizes-2xl);
}

  .ui-button--size_medium[data-button-icon]:not([data-button-variant=text],[data-button-variant=link]) {
    padding: var(--spacing-2);
}

  .ui-button--size_medium[data-button-variant="filled"].ui-button--size_medium:not([data-button-shape="circle"],[data-button-icon]),.ui-button--size_medium[data-button-variant="outlined"].ui-button--size_medium:not([data-button-shape="circle"],[data-button-icon]) {
    min-width: 6rem;
}

  .ui-button--shape_rounded {
    border-radius: var(--radii-md);
}

  .ui-button--theme_primary[data-button-variant="filled"] {
    --colors-button-bg: var(--colors-button-primary-default);
    --colors-button-border: var(--colors-transparent);
    --colors-button-text: var(--colors-button-primary-inverse);
    --colors-button-bg-hover: color-mix(in oklch, var(--colors-button-primary-default) 85%, transparent);
    --colors-button-border-hover: var(--colors-transparent);
    --colors-button-text-hover: var(--colors-button-primary-inverse);
    --colors-button-bg-disabled: color-mix(in oklch, var(--colors-button-primary-default) 70%, transparent);
    --colors-button-border-disabled: var(--colors-transparent);
    --colors-button-text-disabled: var(--colors-button-primary-inverse);
    --colors-button-outline-focus: color-mix(in oklch, var(--colors-button-primary-default) 20%, transparent);
}

  .ui-button--theme_primary[data-button-variant="outlined"] {
    --colors-button-bg: var(--colors-transparent);
    --colors-button-border: var(--colors-button-primary-default);
    --colors-button-text: var(--colors-button-primary-default);
    --colors-button-bg-hover: color-mix(in oklch, var(--colors-button-primary-default) 85%, transparent);
    --colors-button-border-hover: var(--colors-transparent);
    --colors-button-text-hover: var(--colors-button-primary-inverse);
    --colors-button-bg-disabled: color-mix(in oklch, var(--colors-button-primary-default) 10%, transparent);
    --colors-button-border-disabled: color-mix(in oklch, var(--colors-button-primary-default) 70%, transparent);
    --colors-button-text-disabled: color-mix(in oklch, var(--colors-button-primary-default) 70%, transparent);
    --colors-button-outline-focus: color-mix(in oklch, var(--colors-button-primary-default) 20%, transparent);
}

  .ui-button--theme_primary[data-button-variant="text"] {
    --colors-button-text: var(--colors-button-primary-default);
    --colors-button-text-hover: color-mix(in oklch, var(--colors-button-primary-default) 70%, #000);
    --colors-button-text-active: color-mix(in oklch, var(--colors-button-primary-default) 70%,  #fff);
    --colors-button-text-disabled: color-mix(in oklch, var(--colors-button-primary-default) 60%, transparent);
    --colors-button-outline-focus: color-mix(in oklch, var(--colors-button-primary-default) 30%, transparent);
    --colors-button-link: var(--colors-button-info-default);
    --colors-button-link-visited: color-mix(in oklch, var(--colors-button-info-default) 70%,  #f00);
    --colors-button-link-active: color-mix(in oklch, var(--colors-button-info-default) 70%,  #fff);
    --colors-button-link-disabled: color-mix(in oklch, var(--colors-button-info-default) 60%, transparent);
    --colors-button-link-outline-focus: color-mix(in oklch, var(--colors-button-info-default) 30%, transparent);
}

  .ui-button--theme_primary[data-button-variant="link"] {
    --colors-button-text: var(--colors-button-info-default);
    --colors-button-text-hover: color-mix(in oklch, var(--colors-button-info-default) 70%, #000);
    --colors-button-text-active: color-mix(in oklch, var(--colors-button-info-default) 70%,  #fff);
    --colors-button-text-disabled: color-mix(in oklch, var(--colors-button-info-default) 60%, transparent);
    --colors-button-outline-focus: color-mix(in oklch, var(--colors-button-info-default) 30%, transparent);
    --colors-button-link: var(--colors-button-info-default);
    --colors-button-link-visited: color-mix(in oklch, var(--colors-button-info-default) 70%,  #f00);
    --colors-button-link-active: color-mix(in oklch, var(--colors-button-info-default) 70%,  #fff);
    --colors-button-link-disabled: color-mix(in oklch, var(--colors-button-info-default) 60%, transparent);
    --colors-button-link-outline-focus: color-mix(in oklch, var(--colors-button-info-default) 30%, transparent);
}

  .ui-button--theme_secondary[data-button-variant="filled"] {
    --colors-button-bg: var(--colors-button-secondary-default);
    --colors-button-border: var(--colors-transparent);
    --colors-button-text: var(--colors-button-secondary-inverse);
    --colors-button-bg-hover: color-mix(in oklch, var(--colors-button-secondary-default) 85%, transparent);
    --colors-button-border-hover: var(--colors-transparent);
    --colors-button-text-hover: var(--colors-button-secondary-inverse);
    --colors-button-bg-disabled: color-mix(in oklch, var(--colors-button-secondary-default) 70%, transparent);
    --colors-button-border-disabled: var(--colors-transparent);
    --colors-button-text-disabled: var(--colors-button-secondary-inverse);
    --colors-button-outline-focus: color-mix(in oklch, var(--colors-button-secondary-default) 20%, transparent);
}

  .ui-button--theme_secondary[data-button-variant="outlined"] {
    --colors-button-bg: var(--colors-transparent);
    --colors-button-border: var(--colors-button-secondary-default);
    --colors-button-text: var(--colors-button-secondary-default);
    --colors-button-bg-hover: color-mix(in oklch, var(--colors-button-secondary-default) 85%, transparent);
    --colors-button-border-hover: var(--colors-transparent);
    --colors-button-text-hover: var(--colors-button-secondary-inverse);
    --colors-button-bg-disabled: color-mix(in oklch, var(--colors-button-secondary-default) 10%, transparent);
    --colors-button-border-disabled: color-mix(in oklch, var(--colors-button-secondary-default) 70%, transparent);
    --colors-button-text-disabled: color-mix(in oklch, var(--colors-button-secondary-default) 70%, transparent);
    --colors-button-outline-focus: color-mix(in oklch, var(--colors-button-secondary-default) 20%, transparent);
}

  .ui-button--theme_secondary[data-button-variant="text"] {
    --colors-button-text: var(--colors-button-secondary-default);
    --colors-button-text-hover: color-mix(in oklch, var(--colors-button-secondary-default) 70%, #000);
    --colors-button-text-active: color-mix(in oklch, var(--colors-button-secondary-default) 70%,  #fff);
    --colors-button-text-disabled: color-mix(in oklch, var(--colors-button-secondary-default) 60%, transparent);
    --colors-button-outline-focus: color-mix(in oklch, var(--colors-button-secondary-default) 30%, transparent);
    --colors-button-link: var(--colors-button-info-default);
    --colors-button-link-visited: color-mix(in oklch, var(--colors-button-info-default) 70%,  #f00);
    --colors-button-link-active: color-mix(in oklch, var(--colors-button-info-default) 70%,  #fff);
    --colors-button-link-disabled: color-mix(in oklch, var(--colors-button-info-default) 60%, transparent);
    --colors-button-link-outline-focus: color-mix(in oklch, var(--colors-button-info-default) 30%, transparent);
}

  .ui-button--theme_secondary[data-button-variant="link"] {
    --colors-button-text: var(--colors-button-info-default);
    --colors-button-text-hover: color-mix(in oklch, var(--colors-button-info-default) 70%, #000);
    --colors-button-text-active: color-mix(in oklch, var(--colors-button-info-default) 70%,  #fff);
    --colors-button-text-disabled: color-mix(in oklch, var(--colors-button-info-default) 60%, transparent);
    --colors-button-outline-focus: color-mix(in oklch, var(--colors-button-info-default) 30%, transparent);
    --colors-button-link: var(--colors-button-info-default);
    --colors-button-link-visited: color-mix(in oklch, var(--colors-button-info-default) 70%,  #f00);
    --colors-button-link-active: color-mix(in oklch, var(--colors-button-info-default) 70%,  #fff);
    --colors-button-link-disabled: color-mix(in oklch, var(--colors-button-info-default) 60%, transparent);
    --colors-button-link-outline-focus: color-mix(in oklch, var(--colors-button-info-default) 30%, transparent);
}

  .ui-button--theme_tertiary[data-button-variant="filled"] {
    --colors-button-bg: var(--colors-button-tertiary-default);
    --colors-button-border: var(--colors-transparent);
    --colors-button-text: var(--colors-button-tertiary-inverse);
    --colors-button-bg-hover: var(--colors-transparent);
    --colors-button-border-hover: var(--colors-transparent);
    --colors-button-text-hover: var(--colors-button-tertiary-inverse);
    --colors-button-bg-disabled: color-mix(in oklch, var(--colors-button-tertiary-default) 70%, transparent);
    --colors-button-border-disabled: var(--colors-transparent);
    --colors-button-text-disabled: var(--colors-button-tertiary-inverse);
    --colors-button-outline-focus: color-mix(in oklch, var(--colors-button-tertiary-default) 20%, transparent);
}

  .ui-button--theme_tertiary[data-button-variant="outlined"] {
    --colors-button-bg: var(--colors-transparent);
    --colors-button-border: var(--colors-button-tertiary-default);
    --colors-button-text: var(--colors-button-tertiary-default);
    --colors-button-bg-hover: var(--colors-transparent);
    --colors-button-border-hover: var(--colors-transparent);
    --colors-button-text-hover: var(--colors-button-tertiary-inverse);
    --colors-button-bg-disabled: color-mix(in oklch, var(--colors-button-tertiary-default) 10%, transparent);
    --colors-button-border-disabled: color-mix(in oklch, var(--colors-button-tertiary-default) 70%, transparent);
    --colors-button-text-disabled: color-mix(in oklch, var(--colors-button-tertiary-default) 70%, transparent);
    --colors-button-outline-focus: color-mix(in oklch, var(--colors-button-tertiary-default) 20%, transparent);
}

  .ui-button--theme_tertiary[data-button-variant="text"] {
    --colors-button-text: var(--colors-button-tertiary-default);
    --colors-button-text-hover: color-mix(in oklch, var(--colors-button-tertiary-default) 70%, #000);
    --colors-button-text-active: color-mix(in oklch, var(--colors-button-tertiary-default) 70%,  #fff);
    --colors-button-text-disabled: color-mix(in oklch, var(--colors-button-tertiary-default) 60%, transparent);
    --colors-button-outline-focus: color-mix(in oklch, var(--colors-button-tertiary-default) 30%, transparent);
    --colors-button-link: var(--colors-button-info-default);
    --colors-button-link-visited: color-mix(in oklch, var(--colors-button-info-default) 70%,  #f00);
    --colors-button-link-active: color-mix(in oklch, var(--colors-button-info-default) 70%,  #fff);
    --colors-button-link-disabled: color-mix(in oklch, var(--colors-button-info-default) 60%, transparent);
    --colors-button-link-outline-focus: color-mix(in oklch, var(--colors-button-info-default) 30%, transparent);
}

  .ui-button--theme_tertiary[data-button-variant="link"] {
    --colors-button-text: var(--colors-button-info-default);
    --colors-button-text-hover: color-mix(in oklch, var(--colors-button-info-default) 70%, #000);
    --colors-button-text-active: color-mix(in oklch, var(--colors-button-info-default) 70%,  #fff);
    --colors-button-text-disabled: color-mix(in oklch, var(--colors-button-info-default) 60%, transparent);
    --colors-button-outline-focus: color-mix(in oklch, var(--colors-button-info-default) 30%, transparent);
    --colors-button-link: var(--colors-button-info-default);
    --colors-button-link-visited: color-mix(in oklch, var(--colors-button-info-default) 70%,  #f00);
    --colors-button-link-active: color-mix(in oklch, var(--colors-button-info-default) 70%,  #fff);
    --colors-button-link-disabled: color-mix(in oklch, var(--colors-button-info-default) 60%, transparent);
    --colors-button-link-outline-focus: color-mix(in oklch, var(--colors-button-info-default) 30%, transparent);
}

  .ui-button--theme_info[data-button-variant="filled"] {
    --colors-button-bg: var(--colors-button-info-default);
    --colors-button-border: var(--colors-transparent);
    --colors-button-text: var(--colors-button-info-inverse);
    --colors-button-bg-hover: color-mix(in oklch, var(--colors-button-info-default) 85%, transparent);
    --colors-button-border-hover: var(--colors-transparent);
    --colors-button-text-hover: var(--colors-button-info-inverse);
    --colors-button-bg-disabled: color-mix(in oklch, var(--colors-button-info-default) 70%, transparent);
    --colors-button-border-disabled: var(--colors-transparent);
    --colors-button-text-disabled: var(--colors-button-info-inverse);
    --colors-button-outline-focus: color-mix(in oklch, var(--colors-button-info-default) 20%, transparent);
}

  .ui-button--theme_info[data-button-variant="outlined"] {
    --colors-button-bg: var(--colors-transparent);
    --colors-button-border: var(--colors-button-info-default);
    --colors-button-text: var(--colors-button-info-default);
    --colors-button-bg-hover: color-mix(in oklch, var(--colors-button-info-default) 85%, transparent);
    --colors-button-border-hover: var(--colors-transparent);
    --colors-button-text-hover: var(--colors-button-info-inverse);
    --colors-button-bg-disabled: color-mix(in oklch, var(--colors-button-info-default) 10%, transparent);
    --colors-button-border-disabled: color-mix(in oklch, var(--colors-button-info-default) 70%, transparent);
    --colors-button-text-disabled: color-mix(in oklch, var(--colors-button-info-default) 70%, transparent);
    --colors-button-outline-focus: color-mix(in oklch, var(--colors-button-info-default) 20%, transparent);
}

  .ui-button--theme_info[data-button-variant="text"],.ui-button--theme_info[data-button-variant="link"] {
    --colors-button-text: var(--colors-button-info-default);
    --colors-button-text-hover: color-mix(in oklch, var(--colors-button-info-default) 70%, #000);
    --colors-button-text-active: color-mix(in oklch, var(--colors-button-info-default) 70%,  #fff);
    --colors-button-text-disabled: color-mix(in oklch, var(--colors-button-info-default) 60%, transparent);
    --colors-button-outline-focus: color-mix(in oklch, var(--colors-button-info-default) 30%, transparent);
    --colors-button-link: var(--colors-button-info-default);
    --colors-button-link-visited: color-mix(in oklch, var(--colors-button-info-default) 70%,  #f00);
    --colors-button-link-active: color-mix(in oklch, var(--colors-button-info-default) 70%,  #fff);
    --colors-button-link-disabled: color-mix(in oklch, var(--colors-button-info-default) 60%, transparent);
    --colors-button-link-outline-focus: color-mix(in oklch, var(--colors-button-info-default) 30%, transparent);
}

  .ui-button--theme_success[data-button-variant="filled"] {
    --colors-button-bg: var(--colors-button-success-default);
    --colors-button-border: var(--colors-transparent);
    --colors-button-text: var(--colors-button-success-inverse);
    --colors-button-bg-hover: color-mix(in oklch, var(--colors-button-success-default) 85%, transparent);
    --colors-button-border-hover: var(--colors-transparent);
    --colors-button-text-hover: var(--colors-button-success-inverse);
    --colors-button-bg-disabled: color-mix(in oklch, var(--colors-button-success-default) 70%, #fff);
    --colors-button-border-disabled: var(--colors-transparent);
    --colors-button-text-disabled: var(--colors-button-success-inverse);
    --colors-button-outline-focus: color-mix(in oklch, var(--colors-button-success-default) 20%, transparent);
}

  .ui-button--theme_success[data-button-variant="outlined"] {
    --colors-button-bg: var(--colors-transparent);
    --colors-button-border: var(--colors-button-success-default);
    --colors-button-text: var(--colors-button-success-default);
    --colors-button-bg-hover: color-mix(in oklch, var(--colors-button-success-default) 85%, transparent);
    --colors-button-border-hover: var(--colors-transparent);
    --colors-button-text-hover: var(--colors-button-success-inverse);
    --colors-button-bg-disabled: color-mix(in oklch, var(--colors-button-success-default) 10%, transparent);
    --colors-button-border-disabled: color-mix(in oklch, var(--colors-button-success-default) 70%, transparent);
    --colors-button-text-disabled: color-mix(in oklch, var(--colors-button-success-default) 70%, transparent);
    --colors-button-outline-focus: color-mix(in oklch, var(--colors-button-success-default) 20%, transparent);
}

  .ui-button--theme_success[data-button-variant="text"] {
    --colors-button-text: var(--colors-button-success-default);
    --colors-button-text-hover: color-mix(in oklch, var(--colors-button-success-default) 70%, #000);
    --colors-button-text-active: color-mix(in oklch, var(--colors-button-success-default) 70%,  #fff);
    --colors-button-text-disabled: color-mix(in oklch, var(--colors-button-success-default) 60%, transparent);
    --colors-button-outline-focus: color-mix(in oklch, var(--colors-button-success-default) 30%, transparent);
    --colors-button-link: var(--colors-button-info-default);
    --colors-button-link-visited: color-mix(in oklch, var(--colors-button-info-default) 70%,  #f00);
    --colors-button-link-active: color-mix(in oklch, var(--colors-button-info-default) 70%,  #fff);
    --colors-button-link-disabled: color-mix(in oklch, var(--colors-button-info-default) 60%, transparent);
    --colors-button-link-outline-focus: color-mix(in oklch, var(--colors-button-info-default) 30%, transparent);
}

  .ui-button--theme_success[data-button-variant="link"] {
    --colors-button-text: var(--colors-button-info-default);
    --colors-button-text-hover: color-mix(in oklch, var(--colors-button-info-default) 70%, #000);
    --colors-button-text-active: color-mix(in oklch, var(--colors-button-info-default) 70%,  #fff);
    --colors-button-text-disabled: color-mix(in oklch, var(--colors-button-info-default) 60%, transparent);
    --colors-button-outline-focus: color-mix(in oklch, var(--colors-button-info-default) 30%, transparent);
    --colors-button-link: var(--colors-button-info-default);
    --colors-button-link-visited: color-mix(in oklch, var(--colors-button-info-default) 70%,  #f00);
    --colors-button-link-active: color-mix(in oklch, var(--colors-button-info-default) 70%,  #fff);
    --colors-button-link-disabled: color-mix(in oklch, var(--colors-button-info-default) 60%, transparent);
    --colors-button-link-outline-focus: color-mix(in oklch, var(--colors-button-info-default) 30%, transparent);
}

  .ui-button--theme_warning[data-button-variant="filled"] {
    --colors-button-bg: var(--colors-button-warning-default);
    --colors-button-border: var(--colors-transparent);
    --colors-button-text: var(--colors-button-warning-inverse);
    --colors-button-bg-hover: color-mix(in oklch, var(--colors-button-warning-default) 85%, transparent);
    --colors-button-border-hover: var(--colors-transparent);
    --colors-button-text-hover: var(--colors-button-warning-inverse);
    --colors-button-bg-disabled: color-mix(in oklch, var(--colors-button-warning-default) 70%, transparent);
    --colors-button-border-disabled: var(--colors-transparent);
    --colors-button-text-disabled: var(--colors-button-warning-inverse);
    --colors-button-outline-focus: color-mix(in oklch, var(--colors-button-warning-default) 20%, transparent);
}

  .ui-button--theme_warning[data-button-variant="outlined"] {
    --colors-button-bg: var(--colors-transparent);
    --colors-button-border: var(--colors-button-warning-default);
    --colors-button-text: var(--colors-button-warning-default);
    --colors-button-bg-hover: color-mix(in oklch, var(--colors-button-warning-default) 85%, transparent);
    --colors-button-border-hover: var(--colors-transparent);
    --colors-button-text-hover: var(--colors-button-warning-inverse);
    --colors-button-bg-disabled: color-mix(in oklch, var(--colors-button-warning-default) 10%, transparent);
    --colors-button-border-disabled: color-mix(in oklch, var(--colors-button-warning-default) 70%, transparent);
    --colors-button-text-disabled: color-mix(in oklch, var(--colors-button-warning-default) 70%, transparent);
    --colors-button-outline-focus: color-mix(in oklch, var(--colors-button-warning-default) 20%, transparent);
}

  .ui-button--theme_warning[data-button-variant="text"] {
    --colors-button-text: var(--colors-button-warning-default);
    --colors-button-text-hover: color-mix(in oklch, var(--colors-button-warning-default) 70%, #000);
    --colors-button-text-active: color-mix(in oklch, var(--colors-button-warning-default) 70%,  #fff);
    --colors-button-text-disabled: color-mix(in oklch, var(--colors-button-warning-default) 60%, transparent);
    --colors-button-outline-focus: color-mix(in oklch, var(--colors-button-warning-default) 30%, transparent);
    --colors-button-link: var(--colors-button-info-default);
    --colors-button-link-visited: color-mix(in oklch, var(--colors-button-info-default) 70%,  #f00);
    --colors-button-link-active: color-mix(in oklch, var(--colors-button-info-default) 70%,  #fff);
    --colors-button-link-disabled: color-mix(in oklch, var(--colors-button-info-default) 60%, transparent);
    --colors-button-link-outline-focus: color-mix(in oklch, var(--colors-button-info-default) 30%, transparent);
}

  .ui-button--theme_warning[data-button-variant="link"] {
    --colors-button-text: var(--colors-button-info-default);
    --colors-button-text-hover: color-mix(in oklch, var(--colors-button-info-default) 70%, #000);
    --colors-button-text-active: color-mix(in oklch, var(--colors-button-info-default) 70%,  #fff);
    --colors-button-text-disabled: color-mix(in oklch, var(--colors-button-info-default) 60%, transparent);
    --colors-button-outline-focus: color-mix(in oklch, var(--colors-button-info-default) 30%, transparent);
    --colors-button-link: var(--colors-button-info-default);
    --colors-button-link-visited: color-mix(in oklch, var(--colors-button-info-default) 70%,  #f00);
    --colors-button-link-active: color-mix(in oklch, var(--colors-button-info-default) 70%,  #fff);
    --colors-button-link-disabled: color-mix(in oklch, var(--colors-button-info-default) 60%, transparent);
    --colors-button-link-outline-focus: color-mix(in oklch, var(--colors-button-info-default) 30%, transparent);
}

  .ui-button--theme_danger[data-button-variant="filled"] {
    --colors-button-bg: var(--colors-button-danger-default);
    --colors-button-border: var(--colors-transparent);
    --colors-button-text: var(--colors-button-danger-inverse);
    --colors-button-bg-hover: color-mix(in oklch, var(--colors-button-danger-default) 85%, transparent);
    --colors-button-border-hover: var(--colors-transparent);
    --colors-button-text-hover: var(--colors-button-danger-inverse);
    --colors-button-bg-disabled: color-mix(in oklch, var(--colors-button-danger-default) 70%, transparent);
    --colors-button-border-disabled: var(--colors-transparent);
    --colors-button-text-disabled: var(--colors-button-danger-inverse);
    --colors-button-outline-focus: color-mix(in oklch, var(--colors-button-danger-default) 20%, transparent);
}

  .ui-button--theme_danger[data-button-variant="outlined"] {
    --colors-button-bg: var(--colors-transparent);
    --colors-button-border: var(--colors-button-danger-default);
    --colors-button-text: var(--colors-button-danger-default);
    --colors-button-bg-hover: color-mix(in oklch, var(--colors-button-danger-default) 85%, transparent);
    --colors-button-border-hover: var(--colors-transparent);
    --colors-button-text-hover: var(--colors-button-danger-inverse);
    --colors-button-bg-disabled: color-mix(in oklch, var(--colors-button-danger-default) 10%, transparent);
    --colors-button-border-disabled: color-mix(in oklch, var(--colors-button-danger-default) 70%, transparent);
    --colors-button-text-disabled: color-mix(in oklch, var(--colors-button-danger-default) 70%, transparent);
    --colors-button-outline-focus: color-mix(in oklch, var(--colors-button-danger-default) 20%, transparent);
}

  .ui-button--theme_danger[data-button-variant="text"] {
    --colors-button-text: var(--colors-button-danger-default);
    --colors-button-text-hover: color-mix(in oklch, var(--colors-button-danger-default) 70%, #000);
    --colors-button-text-active: color-mix(in oklch, var(--colors-button-danger-default) 70%,  #fff);
    --colors-button-text-disabled: color-mix(in oklch, var(--colors-button-danger-default) 60%, transparent);
    --colors-button-outline-focus: color-mix(in oklch, var(--colors-button-danger-default) 30%, transparent);
    --colors-button-link: var(--colors-button-info-default);
    --colors-button-link-visited: color-mix(in oklch, var(--colors-button-info-default) 70%,  #f00);
    --colors-button-link-active: color-mix(in oklch, var(--colors-button-info-default) 70%,  #fff);
    --colors-button-link-disabled: color-mix(in oklch, var(--colors-button-info-default) 60%, transparent);
    --colors-button-link-outline-focus: color-mix(in oklch, var(--colors-button-info-default) 30%, transparent);
}

  .ui-button--theme_danger[data-button-variant="link"] {
    --colors-button-text: var(--colors-button-info-default);
    --colors-button-text-hover: color-mix(in oklch, var(--colors-button-info-default) 70%, #000);
    --colors-button-text-active: color-mix(in oklch, var(--colors-button-info-default) 70%,  #fff);
    --colors-button-text-disabled: color-mix(in oklch, var(--colors-button-info-default) 60%, transparent);
    --colors-button-outline-focus: color-mix(in oklch, var(--colors-button-info-default) 30%, transparent);
    --colors-button-link: var(--colors-button-info-default);
    --colors-button-link-visited: color-mix(in oklch, var(--colors-button-info-default) 70%,  #f00);
    --colors-button-link-active: color-mix(in oklch, var(--colors-button-info-default) 70%,  #fff);
    --colors-button-link-disabled: color-mix(in oklch, var(--colors-button-info-default) 60%, transparent);
    --colors-button-link-outline-focus: color-mix(in oklch, var(--colors-button-info-default) 30%, transparent);
}

  .ui-button--variant_outlined {
    outline: 2px solid transparent;
    outline-offset: 2px;
    justify-content: center;
    align-items: center;
}

  .ui-button--variant_text,.ui-button--variant_link {
    border: none;
    padding: var(--spacing-0);
    background-color: var(--colors-transparent);
    box-shadow: none;
}

  .ui-button--variant_link {
    text-decoration: underline;
}

  .ui-button--size_small {
    padding-block: var(--spacing-1);
    padding-inline: var(--spacing-2);
    gap: 0.625rem;
    font-size: var(--font-sizes-xs);
}

  .ui-button--size_small[data-button-icon] {
    font-size: var(--font-sizes-md);
}

  .ui-button--size_small[data-button-icon]:not([data-button-variant=text],[data-button-variant=link]) {
    padding: var(--spacing-1);
}

  .ui-button--size_small[data-button-variant="filled"].ui-button--size_small:not([data-button-shape="circle"],[data-button-icon]),.ui-button--size_small[data-button-variant="outlined"].ui-button--size_small:not([data-button-shape="circle"],[data-button-icon]) {
    min-width: 4rem;
}

  .ui-button--size_large {
    padding-block: var(--spacing-3);
    padding-inline: var(--spacing-6);
    gap: 0.625rem;
    font-size: var(--font-sizes-lg);
}

  .ui-button--size_large[data-button-icon] {
    font-size: var(--font-sizes-3xl);
}

  .ui-button--size_large[data-button-icon]:not([data-button-variant=text],[data-button-variant=link]) {
    padding: var(--spacing-3);
}

  .ui-button--size_large[data-button-variant="filled"].ui-button--size_large:not([data-button-shape="circle"],[data-button-icon]),.ui-button--size_large[data-button-variant="outlined"].ui-button--size_large:not([data-button-shape="circle"],[data-button-icon]) {
    min-width: 8rem;
}

  .ui-button--shape_square {
    border-radius: 0;
}

  .ui-button--shape_pill {
    border-radius: var(--radii-full);
}

  .ui-button--shape_circle {
    border-radius: var(--radii-circle);
    min-width: auto;
}
}@layer ui-components.slots {
  @layer _base {
    .ui-modal__closeTrigger {
      position: absolute;
      z-index: 1500;
      top: var(--spacing-0);
      right: var(--spacing-0);
}

    .ui-modal__backdrop {
      background: rgba(0, 0, 0, .48);
      z-index: 1399;
}

    .ui-modal__backdrop,.ui-modal__positioner {
      inset: var(--spacing-0);
      position: fixed;
}

    .ui-modal__positioner {
      z-index: 1400;
}

    .ui-modal__content {
      background: var(--colors-white);
      padding: var(--spacing-6);
      border-radius: var(--radii-md);
      position: relative;
      pointer-events: auto;
}

    .ui-modal__title {
      font-size: var(--font-sizes-xl);
      font-weight: 700;
      line-height: xl;
      margin-bottom: var(--spacing-2);
}

    .ui-modal__title,.ui-modal__description {
      text-align: center;
      color: var(--colors-slate-800);
}

    .ui-modal__description {
      font-size: var(--font-sizes-sm);
      line-height: sm;
      margin-bottom: var(--spacing-5);
}

    .ui-modal__action {
      gap: var(--spacing-2);
      display: flex;
}

    .ui-modal__action > button {
      flex-grow: 1;
}

    .ui-field__root {
      display: flex;
      flex-direction: column;
      color: var(--colors-input-normal-text);
}

    .ui-field__root svg {
      font-size: lineHeights\\.md;
}

    .ui-field__label {
      font-size: var(--font-sizes-md);
      margin-bottom: var(--spacing-3);
}

    .ui-field__helper {
      padding: var(--spacing-1);
      display: flex;
      font-size: var(--font-sizes-sm);
}

    .ui-field__prefix {
      margin-right: var(--spacing-2);
}

    .ui-field__prefix,.ui-field__suffix {
      display: flex;
      align-items: center;
      flex-shrink: 0;
}

    .ui-field__suffix {
      margin-left: var(--spacing-2);
}

    .ui-field__errorText {
      color: var(--colors-field-invalid-default);
}

    .ui-field__wrapper {
      display: flex;
}

    .ui-field__passwordControl {
      margin-block: -2px;
      display: flex;
      align-items: center;
      flex-shrink: 0;
      cursor: pointer;
      color: var(--colors-input-normal-text);
      margin-left: var(--spacing-2);
}

    .ui-field__passwordControl:is(:hover, [data-hover]) {
      color: var(--colors-input-normal-hover);
}

    .ui-field__input {
      flex-grow: 1;
}

    .ui-field__input:is(:focus, [data-focus]) {
      outline: 2px solid transparent;
      outline-offset: 2px;
}

    .ui-field__select {
      flex-grow: 1;
}

    .ui-field__select:is(:focus, [data-focus]) {
      outline: 2px solid transparent;
      outline-offset: 2px;
}

    .ui-field__textarea {
      flex-grow: 1;
}

    .ui-field__textarea:is(:focus, [data-focus]) {
      outline: 2px solid transparent;
      outline-offset: 2px;
}
}

  .ui-modal__content--size_md {
    width: 360px;
}

  .ui-modal__content--size_sm {
    width: 280px;
}

  .ui-modal__content--size_lg {
    width: 480px;
}

  .ui-modal__content--size_xl {
    width: 640px;
}

  .ui-modal__content--size_full {
    width: 100%;
}

  .ui-field__wrapper--variant_outlined {
    border-color: var(--colors-input-normal-border);
    border-radius: var(--radii-md);
    border-width: var(--border-widths-1);
    border-style: solid;
    padding-block: var(--spacing-3);
    padding-inline: var(--spacing-4);
    background-color: var(--colors-input-normal-bg);
}

  .ui-field__wrapper--variant_outlined[data-valid] {
    border-color: var(--colors-field-valid-default);
}

  .ui-field__wrapper--variant_outlined[data-valid]:focus-within {
    box-shadow: 0 0 0 3px var(--colors-field-valid-shadow);
}

  .ui-field__wrapper--variant_outlined[data-invalid] {
    border-color: var(--colors-field-invalid-default);
}

  .ui-field__wrapper--variant_outlined[data-invalid]:focus-within {
    box-shadow: 0 0 0 3px var(--colors-field-invalid-shadow);
}

  .ui-field__wrapper--variant_outlined:is(:disabled, [disabled], [data-disabled], [aria-disabled=true]) {
    border-color: var(--colors-input-disabled-border);
    color: var(--colors-input-disabled-text);
    background-color: var(--colors-input-disabled-bg);
    cursor: not-allowed;
}

  .ui-field__wrapper--variant_outlined:is(:disabled, [disabled], [data-disabled], [aria-disabled=true])[data-valid] {
    border-color: var(--colors-field-disabled-valid);
}

  .ui-field__wrapper--variant_outlined:is(:disabled, [disabled], [data-disabled], [aria-disabled=true])[data-invalid] {
    border-color: var(--colors-field-disabled-invalid);
}

  .ui-field__wrapper--variant_outlined:focus-within {
    outline: 2px solid transparent;
    outline-offset: 2px;
}

  .ui-field__wrapper--variant_outlined:focus-within:not([data-invalid]):not([data-valid]) {
    border-color: var(--colors-input-selected-default);
    box-shadow: 0 0 0 3px var(--colors-input-selected-shadow);
}

  .ui-field__input--variant_outlined {
    border: none;
    padding: var(--spacing-0);
    outline: 2px solid transparent;
    outline-offset: 2px;
    color: inherit;
    box-shadow: none;
    background-color: var(--colors-transparent);
}

  .ui-field__input--variant_outlined:is(:disabled, [disabled], [data-disabled], [aria-disabled=true]) {
    border-color: none;
    background-color: var(--colors-transparent);
}

  .ui-field__select--variant_outlined {
    border: none;
    padding: var(--spacing-0);
    outline: 2px solid transparent;
    outline-offset: 2px;
    color: inherit;
    box-shadow: none;
    background-color: var(--colors-transparent);
}

  .ui-field__select--variant_outlined:is(:disabled, [disabled], [data-disabled], [aria-disabled=true]) {
    border-color: none;
    background-color: var(--colors-transparent);
}

  .ui-field__textarea--variant_outlined {
    border: none;
    padding: var(--spacing-0);
    outline: 2px solid transparent;
    outline-offset: 2px;
    color: inherit;
    box-shadow: none;
    background-color: var(--colors-transparent);
}

  .ui-field__textarea--variant_outlined:is(:disabled, [disabled], [data-disabled], [aria-disabled=true]) {
    border-color: none;
    background-color: var(--colors-transparent);
}

  .ui-field__root--variant_none {
    display: flex;
    flex-direction: column;
    color: var(--colors-input-normal-text);
}

  .ui-field__input--variant_none,.ui-field__select--variant_none,.ui-field__textarea--variant_none {
    color: inherit;
}
}
`}));js();var Ms=`data-ui-library-architecture`;async function Ns(e){if(document.querySelector(`style[data-ui-library-architecture]`))return;let t=await Promise.resolve().then(()=>(js(),ks)),n=document.createElement(`style`);n.textContent=t.default,n.setAttribute(Ms,``),(e?e():document.head).appendChild(n)}export{gs as i,Ts as n,ys as r,Ns as t};