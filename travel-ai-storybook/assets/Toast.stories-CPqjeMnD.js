import{__toESM as e,require_react as t}from"./iframe-DTweaop1.js";import{require_jsx_runtime as n}from"./jsx-runtime-OfONc6Te.js";import"./react-dom-WNPkwNKm.js";import{css as r,cva as i}from"./global-BFiYQvx2.js";import"./useForkRef-C5o5W9_v.js";import{Button_default as a}from"./Button-B-q8OOzX.js";import{Spin_default as o}from"./Spin-CWA_ve4e.js";import{MAX_Z_INDEX as s,Portal as c,addDomEvent as l,compact as u,contains as d,createAnatomy as f,createGuards as p,createMachine as m,dataAttr as h,ensureProps as g,normalizeProps as _,raf as v,runIfFn as y,setRafTimeout as b,useMachine as x,uuid as S,warn as ee}from"./dist-CJv5zd9o.js";import{trackDismissableBranch as C,x_default as w}from"./x-0kMsTzyW.js";import"./Button-BzTym43C.js";import{check_circle_default as T}from"./check-circle-B6yUDXnE.js";var te,E,D,O,ne,k,re,A,ie=f(`toast`).parts(`group`,`root`,`title`,`description`,`actionTrigger`,`closeTrigger`),j=ie.build(),ae=e=>`toast-group:${e}`,M=(e,t)=>e.getById(`toast-group:${t}`),N=e=>`toast:${e.id}`,P=e=>e.getById(N(e)),F=e=>`toast:${e.id}:title`,I=e=>`toast:${e.id}:description`,oe=e=>`toast${e.id}:close`,L={info:5e3,error:5e3,success:2e3,loading:1/0,DEFAULT:5e3};function R(e,t){return e??L[t]??L.DEFAULT}var se=e=>typeof e==`string`?{left:e,right:e,bottom:e,top:e}:e;function ce(e,t){var n;let{prop:r,computed:i,context:a}=e,{offsets:o,gap:c}=r(`store`).attrs,l=a.get(`heights`),u=se(o),d=r(`dir`)===`rtl`,f=t.replace(`-start`,d?`-right`:`-left`).replace(`-end`,d?`-left`:`-right`),p=f.includes(`right`),m=f.includes(`left`),h={position:`fixed`,pointerEvents:i(`count`)>0?void 0:`none`,display:`flex`,flexDirection:`column`,"--gap":`${c}px`,"--first-height":`${(n=l[0])?.height||0}px`,zIndex:s},g=`center`;if(p&&(g=`flex-end`),m&&(g=`flex-start`),h.alignItems=g,f.includes(`top`)){let e=u.top;h.top=`max(env(safe-area-inset-top, 0px), ${e})`}if(f.includes(`bottom`)){let e=u.bottom;h.bottom=`max(env(safe-area-inset-bottom, 0px), ${e})`}if(!f.includes(`left`)){let e=u.right;h.insetInlineEnd=`calc(env(safe-area-inset-right, 0px) + ${e})`}if(!f.includes(`right`)){let e=u.left;h.insetInlineStart=`calc(env(safe-area-inset-left, 0px) + ${e})`}return h}function le(e,t){let{prop:n,context:r,computed:i}=e,a=n(`parent`),o=a.computed(`placement`),{gap:s}=a.prop(`store`).attrs,[c]=o.split(`-`),l=r.get(`mounted`),u=r.get(`remainingTime`),d=i(`height`),f=i(`frontmost`),p=!f,m=!n(`stacked`),h=n(`stacked`),g=n(`type`),_=g===`loading`?2**53-1:u,v=i(`heightIndex`)*s+i(`heightBefore`),y={position:`absolute`,pointerEvents:`auto`,"--opacity":`0`,"--remove-delay":`${n(`removeDelay`)}ms`,"--duration":`${_}ms`,"--initial-height":`${d}px`,"--offset":`${v}px`,"--index":n(`index`),"--z-index":i(`zIndex`),"--lift-amount":`calc(var(--lift) * var(--gap))`,"--y":`100%`,"--x":`0`},b=e=>Object.assign(y,e);return c===`top`?b({top:`0`,"--sign":`-1`,"--y":`-100%`,"--lift":`1`}):c===`bottom`&&b({bottom:`0`,"--sign":`1`,"--y":`100%`,"--lift":`-1`}),l&&(b({"--y":`0`,"--opacity":`1`}),h&&b({"--y":`calc(var(--lift) * var(--offset))`,"--height":`var(--initial-height)`})),t||b({"--opacity":`0`,pointerEvents:`none`}),p&&m&&(b({"--base-scale":`var(--index) * 0.05 + 1`,"--y":`calc(var(--lift-amount) * var(--index))`,"--scale":`calc(-1 * var(--base-scale))`,"--height":`var(--first-height)`}),t||b({"--y":`calc(var(--sign) * 40%)`})),p&&h&&!t&&b({"--y":`calc(var(--lift) * var(--offset) + var(--lift) * -100%)`}),f&&!t&&b({"--y":`calc(var(--lift) * -100%)`}),y}function ue(e,t){let{computed:n}=e,r={position:`absolute`,inset:`0`,scale:`1 2`,pointerEvents:t?`none`:`auto`},i=e=>Object.assign(r,e);return n(`frontmost`)&&!t&&i({height:`calc(var(--initial-height) + 80%)`}),r}function de(){return{position:`absolute`,left:`0`,height:`calc(var(--gap) + 2px)`,bottom:`100%`,width:`100%`}}function fe(e,t){let{context:n,prop:r,send:i,refs:a,computed:o}=e;return{getCount(){return n.get(`toasts`).length},getToasts(){return n.get(`toasts`)},getGroupProps(n={}){let{label:s=`Notifications`}=n,{hotkey:c}=r(`store`).attrs,l=c.join(`+`).replace(/Key/g,``).replace(/Digit/g,``),u=o(`placement`),[f,p=`center`]=u.split(`-`);return t.element({...j.group.attrs,dir:r(`dir`),tabIndex:-1,"aria-label":`${u} ${s} ${l}`,id:ae(u),"data-placement":u,"data-side":f,"data-align":p,"aria-live":`polite`,role:`region`,style:ce(e,u),onMouseMove(){i({type:`REGION.POINTER_ENTER`,placement:u})},onMouseLeave(){i({type:`REGION.POINTER_LEAVE`,placement:u})},onFocus(e){i({type:`REGION.FOCUS`,target:e.relatedTarget})},onBlur(e){a.get(`isFocusWithin`)&&!d(e.currentTarget,e.relatedTarget)&&queueMicrotask(()=>i({type:`REGION.BLUR`}))}})},subscribe(e){let t=r(`store`);return t.subscribe(()=>e(n.get(`toasts`)))}}}var pe=m({props({props:e}){return{dir:`ltr`,id:S(),...e,store:e.store}},initialState({prop:e}){return e(`store`).attrs.overlap?`overlap`:`stack`},refs(){return{lastFocusedEl:null,isFocusWithin:!1,dismissableCleanup:void 0}},context({bindable:e}){return{toasts:e(()=>({defaultValue:[],sync:!0,hash:e=>e.map(e=>e.id).join(`,`)})),heights:e(()=>({defaultValue:[],sync:!0}))}},computed:{count:({context:e})=>e.get(`toasts`).length,overlap:({prop:e})=>e(`store`).attrs.overlap,placement:({prop:e})=>e(`store`).attrs.placement},effects:[`subscribeToStore`,`trackDocumentVisibility`,`trackHotKeyPress`],watch({track:e,context:t,action:n}){e([()=>t.hash(`toasts`)],()=>{queueMicrotask(()=>{n([`collapsedIfEmpty`,`setDismissableBranch`])})})},exit:[`clearDismissableBranch`,`clearLastFocusedEl`],on:{"DOC.HOTKEY":{actions:[`focusRegionEl`]},"REGION.BLUR":[{guard:`isOverlapping`,target:`overlap`,actions:[`collapseToasts`,`resumeToasts`,`restoreLastFocusedEl`]},{target:`stack`,actions:[`resumeToasts`,`restoreLastFocusedEl`]}],"TOAST.REMOVE":{actions:[`removeToast`,`removeHeight`]},"TOAST.PAUSE":{actions:[`pauseToasts`]}},states:{stack:{on:{"REGION.POINTER_LEAVE":[{guard:`isOverlapping`,target:`overlap`,actions:[`resumeToasts`,`collapseToasts`]},{actions:[`resumeToasts`]}],"REGION.OVERLAP":{target:`overlap`,actions:[`collapseToasts`]},"REGION.FOCUS":{actions:[`setLastFocusedEl`,`pauseToasts`]},"REGION.POINTER_ENTER":{actions:[`pauseToasts`]}}},overlap:{on:{"REGION.STACK":{target:`stack`,actions:[`expandToasts`]},"REGION.POINTER_ENTER":{target:`stack`,actions:[`pauseToasts`,`expandToasts`]},"REGION.FOCUS":{target:`stack`,actions:[`setLastFocusedEl`,`pauseToasts`,`expandToasts`]}}}},implementations:{guards:{isOverlapping:({computed:e})=>e(`overlap`)},effects:{subscribeToStore({context:e,prop:t}){return t(`store`).subscribe(t=>{if(t.dismiss){e.set(`toasts`,e=>e.filter(e=>e.id!==t.id));return}e.set(`toasts`,e=>{let n=e.findIndex(e=>e.id===t.id);return n===-1?[t,...e]:[...e.slice(0,n),{...e[n],...t},...e.slice(n+1)]})})},trackHotKeyPress({prop:e,send:t}){let n=n=>{let{hotkey:r}=e(`store`).attrs,i=r.every(e=>n[e]||n.code===e);i&&t({type:`DOC.HOTKEY`})};return l(document,`keydown`,n,{capture:!0})},trackDocumentVisibility({prop:e,send:t,scope:n}){let{pauseOnPageIdle:r}=e(`store`).attrs;if(!r)return;let i=n.getDoc();return l(i,`visibilitychange`,()=>{let e=i.visibilityState===`hidden`;t({type:e?`PAUSE_ALL`:`RESUME_ALL`})})}},actions:{setDismissableBranch({refs:e,context:t,computed:n,scope:r}){let i=t.get(`toasts`),a=n(`placement`),o=i.length>0;if(!o){var s;(s=e.get(`dismissableCleanup`))?.();return}if(o&&e.get(`dismissableCleanup`))return;let c=()=>M(r,a),l=C(c,{defer:!0});e.set(`dismissableCleanup`,l)},clearDismissableBranch({refs:e}){var t;(t=e.get(`dismissableCleanup`))?.()},focusRegionEl({scope:e,computed:t}){queueMicrotask(()=>{var n;(n=M(e,t(`placement`)))?.focus()})},pauseToasts({prop:e}){e(`store`).pause()},resumeToasts({prop:e}){e(`store`).resume()},expandToasts({prop:e}){e(`store`).expand()},collapseToasts({prop:e}){e(`store`).collapse()},removeToast({prop:e,event:t}){e(`store`).remove(t.id)},removeHeight({event:e,context:t}){e?.id!=null&&queueMicrotask(()=>{t.set(`heights`,t=>t.filter(t=>t.id!==e.id))})},collapsedIfEmpty({send:e,computed:t}){!t(`overlap`)||t(`count`)>1||e({type:`REGION.OVERLAP`})},setLastFocusedEl({refs:e,event:t}){e.get(`isFocusWithin`)||!t.target||(e.set(`isFocusWithin`,!0),e.set(`lastFocusedEl`,t.target))},restoreLastFocusedEl({refs:e}){var t;e.get(`lastFocusedEl`)&&((t=e.get(`lastFocusedEl`))?.focus({preventScroll:!0}),e.set(`lastFocusedEl`,null),e.set(`isFocusWithin`,!1))},clearLastFocusedEl({refs:e}){var t;e.get(`lastFocusedEl`)&&((t=e.get(`lastFocusedEl`))?.focus({preventScroll:!0}),e.set(`lastFocusedEl`,null),e.set(`isFocusWithin`,!1))}}}});function me(e,t){let{state:n,send:r,prop:i,scope:a,context:o,computed:s}=e,c=n.hasTag(`visible`),l=n.hasTag(`paused`),u=o.get(`mounted`),d=s(`frontmost`),f=i(`parent`).computed(`placement`),p=i(`type`),m=i(`stacked`),g=i(`title`),_=i(`description`),v=i(`action`),[y,b=`center`]=f.split(`-`);return{type:p,title:g,description:_,placement:f,visible:c,paused:l,closable:!!i(`closable`),pause(){r({type:`PAUSE`})},resume(){r({type:`RESUME`})},dismiss(){r({type:`DISMISS`,src:`programmatic`})},getRootProps(){return t.element({...j.root.attrs,dir:i(`dir`),id:N(a),"data-state":c?`open`:`closed`,"data-type":p,"data-placement":f,"data-align":b,"data-side":y,"data-mounted":h(u),"data-paused":h(l),"data-first":h(d),"data-sibling":h(!d),"data-stack":h(m),"data-overlap":h(!m),role:`status`,"aria-atomic":`true`,"aria-describedby":_?I(a):void 0,"aria-labelledby":g?F(a):void 0,tabIndex:0,style:le(e,c),onKeyDown(e){e.defaultPrevented||e.key==`Escape`&&(r({type:`DISMISS`,src:`keyboard`}),e.preventDefault())}})},getGhostBeforeProps(){return t.element({"data-ghost":`before`,style:ue(e,c)})},getGhostAfterProps(){return t.element({"data-ghost":`after`,style:de()})},getTitleProps(){return t.element({...j.title.attrs,id:F(a)})},getDescriptionProps(){return t.element({...j.description.attrs,id:I(a)})},getActionTriggerProps(){return t.button({...j.actionTrigger.attrs,type:`button`,onClick(e){var t;e.defaultPrevented||(v==null||(t=v.onClick)==null||t.call(v),r({type:`DISMISS`,src:`user`}))}})},getCloseTriggerProps(){return t.button({id:oe(a),...j.closeTrigger.attrs,type:`button`,"aria-label":`Dismiss notification`,onClick(e){e.defaultPrevented||r({type:`DISMISS`,src:`user`})}})}}}var{not:he}=p(),ge=m({props({props:e}){return g(e,[`id`,`type`,`parent`,`removeDelay`],`toast`),{closable:!0,...e,duration:R(e.duration,e.type)}},initialState({prop:e}){let t=e(`type`)===`loading`||e(`duration`)===1/0;return t?`visible:persist`:`visible`},context({prop:e,bindable:t}){return{remainingTime:t(()=>({defaultValue:R(e(`duration`),e(`type`))})),createdAt:t(()=>({defaultValue:Date.now()})),mounted:t(()=>({defaultValue:!1})),initialHeight:t(()=>({defaultValue:0}))}},refs(){return{closeTimerStartTime:Date.now(),lastCloseStartTimerStartTime:0}},computed:{zIndex:({prop:e})=>{let t=e(`parent`).context.get(`toasts`),n=t.findIndex(t=>t.id===e(`id`));return t.length-n},height:({prop:e})=>{let t=e(`parent`).context.get(`heights`),n=t.find(t=>t.id===e(`id`));return n?.height??0},heightIndex:({prop:e})=>{let t=e(`parent`).context.get(`heights`);return t.findIndex(t=>t.id===e(`id`))},frontmost:({prop:e})=>e(`index`)===0,heightBefore:({prop:e})=>{let t=e(`parent`).context.get(`heights`),n=t.findIndex(t=>t.id===e(`id`));return t.reduce((e,t,r)=>r>=n?e:e+t.height,0)},shouldPersist:({prop:e})=>e(`type`)===`loading`||e(`duration`)===1/0},watch({track:e,prop:t,send:n}){e([()=>t(`message`)],()=>{let e=t(`message`);e&&n({type:e,src:`programmatic`})}),e([()=>t(`type`),()=>t(`duration`)],()=>{n({type:`UPDATE`})})},on:{UPDATE:[{guard:`shouldPersist`,target:`visible:persist`,actions:[`resetCloseTimer`]},{target:`visible:updating`,actions:[`resetCloseTimer`]}],MEASURE:{actions:[`measureHeight`]}},entry:[`setMounted`,`measureHeight`,`invokeOnVisible`],effects:[`trackHeight`],states:{"visible:updating":{tags:[`visible`,`updating`],effects:[`waitForNextTick`],on:{SHOW:{target:`visible`}}},"visible:persist":{tags:[`visible`,`paused`],on:{RESUME:{guard:he(`isLoadingType`),target:`visible`,actions:[`setCloseTimer`]},DISMISS:{target:`dismissing`}}},visible:{tags:[`visible`],effects:[`waitForDuration`],on:{DISMISS:{target:`dismissing`},PAUSE:{target:`visible:persist`,actions:[`syncRemainingTime`]}}},dismissing:{entry:[`invokeOnDismiss`],effects:[`waitForRemoveDelay`],on:{REMOVE:{target:`unmounted`,actions:[`notifyParentToRemove`]}}},unmounted:{entry:[`invokeOnUnmount`]}},implementations:{effects:{waitForRemoveDelay({prop:e,send:t}){return b(()=>{t({type:`REMOVE`,src:`timer`})},e(`removeDelay`))},waitForDuration({send:e,context:t,computed:n}){if(!n(`shouldPersist`))return b(()=>{e({type:`DISMISS`,src:`timer`})},t.get(`remainingTime`))},waitForNextTick({send:e}){return b(()=>{e({type:`SHOW`,src:`timer`})},0)},trackHeight({scope:e,prop:t}){let n;return v(()=>{let r=P(e);if(!r)return;let i=()=>{let e=r.style.height;r.style.height=`auto`;let n=r.getBoundingClientRect().height;r.style.height=e;let i={id:t(`id`),height:n};z(t(`parent`),i)},a=e.getWin(),o=new a.MutationObserver(i);o.observe(r,{childList:!0,subtree:!0,characterData:!0}),n=()=>o.disconnect()}),()=>n?.()}},guards:{isLoadingType:({prop:e})=>e(`type`)===`loading`,shouldPersist:({computed:e})=>e(`shouldPersist`)},actions:{setMounted({context:e}){v(()=>{e.set(`mounted`,!0)})},measureHeight({scope:e,prop:t,context:n}){queueMicrotask(()=>{let r=P(e);if(!r)return;let i=r.style.height;r.style.height=`auto`;let a=r.getBoundingClientRect().height;r.style.height=i,n.set(`initialHeight`,a);let o={id:t(`id`),height:a};z(t(`parent`),o)})},setCloseTimer({refs:e}){e.set(`closeTimerStartTime`,Date.now())},resetCloseTimer({context:e,refs:t,prop:n}){t.set(`closeTimerStartTime`,Date.now()),e.set(`remainingTime`,R(n(`duration`),n(`type`)))},syncRemainingTime({context:e,refs:t}){e.set(`remainingTime`,e=>{let n=t.get(`closeTimerStartTime`),r=Date.now()-n;return t.set(`lastCloseStartTimerStartTime`,Date.now()),e-r})},notifyParentToRemove({prop:e}){let t=e(`parent`);t.send({type:`TOAST.REMOVE`,id:e(`id`)})},invokeOnDismiss({prop:e,event:t}){var n;(n=e(`onStatusChange`))?.({status:`dismissing`,src:t.src})},invokeOnUnmount({prop:e}){var t;(t=e(`onStatusChange`))?.({status:`unmounted`})},invokeOnVisible({prop:e}){var t;(t=e(`onStatusChange`))?.({status:`visible`})}}}});function z(e,t){let{id:n,height:r}=t;e.context.set(`heights`,e=>{let t=e.find(e=>e.id===n);return t?e.map(e=>e.id===n?{...e,height:r}:e):[{id:n,height:r},...e]})}var _e=(e,t)=>({...t,...u(e)});function ve(e){let t=_e(e,{placement:`bottom`,overlap:!1,max:24,gap:16,offsets:`1rem`,hotkey:[`altKey`,`KeyT`],removeDelay:200,pauseOnPageIdle:!0}),n=[],r=[],i=new Set,a=[],o=e=>(n.push(e),()=>{let t=n.indexOf(e);n.splice(t,1)}),s=e=>(n.forEach(t=>t(e)),e),c=e=>{if(r.length>=t.max){a.push(e);return}s(e),r.unshift(e)},l=()=>{for(;a.length>0&&r.length<t.max;){let e=a.shift();e&&(s(e),r.unshift(e))}},u=e=>{let n=e.id??`toast:${S()}`,a=r.find(e=>e.id===n);return i.has(n)&&i.delete(n),a?r=r.map(t=>t.id===n?s({...t,...e,id:n}):t):c({id:n,duration:t.duration,removeDelay:t.removeDelay,type:`info`,...e,stacked:!t.overlap,gap:t.gap}),n},d=e=>(i.add(e),e?(n.forEach(t=>t({id:e,dismiss:!0})),r=r.filter(t=>t.id!==e),l()):(r.forEach(e=>{n.forEach(t=>t({id:e.id,dismiss:!0}))}),r=[],a=[]),e),f=e=>u({...e,type:`error`}),p=e=>u({...e,type:`success`}),m=e=>u({...e,type:`info`}),h=e=>u({...e,type:`warning`}),g=e=>u({...e,type:`loading`}),_=()=>r.filter(e=>!i.has(e.id)),v=()=>r.length,b=(e,t,n={})=>{if(!t||!t.loading){ee(`[zag-js > toast] toaster.promise() requires at least a 'loading' option to be specified`);return}let r=u({...n,...t.loading,promise:e,type:`loading`}),i=!0,a,o=y(e).then(async e=>{if(a=[`resolve`,e],ye(e)&&!e.ok){i=!1;let a=y(t.error,`HTTP Error! status: ${e.status}`);u({...n,...a,id:r,type:`error`})}else if(t.success!==void 0){i=!1;let a=y(t.success,e);u({...n,...a,id:r,type:`success`})}}).catch(async e=>{if(a=[`reject`,e],t.error!==void 0){i=!1;let a=y(t.error,e);u({...n,...a,id:r,type:`error`})}}).finally(()=>{var e;i&&d(r),(e=t.finally)?.call(t)}),s=()=>new Promise((e,t)=>o.then(()=>a[0]===`reject`?t(a[1]):e(a[1])).catch(t));return{id:r,unwrap:s}},x=(e,t)=>u({id:e,...t}),C=e=>{r=e==null?r.map(e=>s({...e,message:`PAUSE`})):r.map(t=>t.id===e?s({...t,message:`PAUSE`}):t)},w=e=>{r=e==null?r.map(e=>s({...e,message:`RESUME`})):r.map(t=>t.id===e?s({...t,message:`RESUME`}):t)},T=e=>{r=e==null?r.map(e=>s({...e,message:`DISMISS`})):r.map(t=>t.id===e?s({...t,message:`DISMISS`}):t)},te=e=>!i.has(e)&&!!r.find(t=>t.id===e),E=e=>i.has(e),D=()=>{r=r.map(e=>s({...e,stacked:!0}))},O=()=>{r=r.map(e=>s({...e,stacked:!1}))};return{attrs:t,subscribe:o,create:u,update:x,remove:d,dismiss:T,error:f,success:p,info:m,warning:h,loading:g,getVisibleToasts:_,getCount:v,promise:b,pause:C,resume:w,isVisible:te,isDismissed:E,expand:D,collapse:O}}var ye=e=>e&&typeof e==`object`&&`ok`in e&&typeof e.ok==`boolean`&&`status`in e&&typeof e.status==`number`,B={connect:fe,machine:pe};const V=i({base:{display:`flex`,gap:`{spacing.4}`,alignItems:`center`,width:`388px`,borderRadius:`{radii.2xl}`,border:`1px solid {colors.slate.200}`,padding:`{spacing.6}`,boxShadow:`0 5px 10px 0 rgba(0, 0, 0, .12)`,overflowWrap:`anywhere`,translate:`var(--x) var(--y)`,scale:`var(--scale)`,zIndex:`var(--z-index)`,height:`var(--height)`,opacity:`var(--opacity)`,willChange:`translate, opacity, scale`,transition:`translate .4s, scale .4s, opacity .4s`,transitionTimingFunction:`cubic-bezier(.21,1.02,.73,1)`,"&[data-type=info]":{background:`white`,color:`black`},"&[data-type=success]":{background:`{colors.teal.50}`},'&[data-type=success] [data-part="title"]':{color:`{colors.teal.500}`},'&[data-type=success] [data-part="description"]':{color:`{colors.teal.500}`},'&[data-type=success] [data-part="prefix"]':{color:`{colors.teal.500}`},'&[data-type=success] [data-part="suffix"]':{color:`{colors.teal.500}`},"&[data-type=warning]":{background:`{colors.amber.100}`},'&[data-type=warning] [data-part="title"]':{color:`{colors.amber.800}`},'&[data-type=warning] [data-part="description"]':{color:`{colors.amber.800}`},'&[data-type=warning] [data-part="prefix"]':{color:`{colors.amber.800}`},'&[data-type=warning] [data-part="suffix"]':{color:`{colors.amber.800}`},"&[data-type=error]":{background:`{colors.rose.200}`},'&[data-type=error] [data-part="title"]':{color:`{colors.rose.600}`},'&[data-type=error] [data-part="description"]':{color:`{colors.rose.600}`},'&[data-type=error] [data-part="prefix"]':{color:`{colors.rose.600}`},'&[data-type=error] [data-part="suffix"]':{color:`{colors.rose.600}`},"&[data-type=loading]":{background:`{colors.slate.100}`,color:`{colors.slate.800}`}}}),H=e=>{let t=V.getVariantProps(e);return{group:r({}),root:V(t),title:r({fontSize:`md`,fontWeight:`700`,color:`{colors.slate.800}`}),description:r({fontSize:`sm`,fontWeight:`400`,color:`{colors.slate.800}`}),prefix:r({flexShrink:0}),suffix:r({flexShrink:0}),content:r({flexGrow:1})}},be=V.variantMap;var U=e(t()),W=e(n());const G=(0,U.createContext)(null),K=()=>{let e=U.useContext(G);if(!e)throw Error(`useToastContext must be used within a ToastProvider`);return e},xe=e=>!!(e&&[`info`,`success`,`warning`,`error`,`loading`].includes(e));function q({...e}={}){let t=ve({overlap:!0,placement:`top-end`,...e});function n(){var e,t;let n=K(),r={...n.actor,parent:n.parent,index:n.index},i=x(ge,r),s=me(i,_),c=s.title,l=s.description,u=(e=n.actor.meta)?.prefix,d=(t=n.actor.meta)?.suffix,f=n.actor.type===`loading`;return(0,W.jsxs)(`div`,{className:n.styles.root,...s.getRootProps(),children:[f?(0,W.jsx)(`div`,{"data-part":`prefix`,className:n.styles.prefix,children:(0,W.jsx)(o,{})}):u&&(0,W.jsx)(`div`,{"data-part":`prefix`,className:n.styles.prefix,children:u}),(0,W.jsxs)(`div`,{"data-part":`content`,className:n.styles.content,children:[(0,W.jsx)(`h3`,{className:n.styles.title,...s.getTitleProps(),children:c}),(0,W.jsx)(`p`,{className:n.styles.description,...s.getDescriptionProps(),children:l})]}),f?(0,W.jsx)(`div`,{"data-part":`suffix`,className:n.styles.suffix,children:(0,W.jsx)(a,{size:`small`,shape:`icon`,variant:`text`,...s.getCloseTriggerProps(),children:(0,W.jsx)(w,{})})}):d&&(0,W.jsx)(`div`,{"data-part":`suffix`,className:n.styles.suffix,children:d})]})}function r({children:e,render:t,component:n}){var r,i,a;let o=K(),s={index:o.index,styles:o.styles,titleNode:o.actor.title,descriptionNode:o.actor.description,prefixNode:(r=o.actor.meta)?.prefix,suffixNode:(i=o.actor.meta)?.suffix,data:(a=o.actor.meta)?.data};return n?(0,W.jsx)(n,{...s}):t?t(s):e}function i({children:e}){let i=x(B.machine,{id:(0,U.useId)(),store:t}),a=B.connect(i,_),o=e=>(0,U.isValidElement)(e)&&e.type===r,s=U.Children.toArray(e).filter(o);return(0,W.jsx)(c,{children:(0,W.jsx)(`div`,{className:H().group,...a.getGroupProps(),children:a.getToasts().map((e,t)=>{let r=s.find(t=>{var n;return t.props.variant===(n=e.meta)?.variant}),a={actor:e,parent:i,index:t,styles:H()};return(0,W.jsx)(G.Provider,{value:a,children:r??(0,W.jsx)(n,{})},e.id)})})})}let s=e=>{let n=t.create({duration:e.duration||5e3,type:xe(e.type)?e.type:`info`,title:e.titleNode,description:e.descriptionNode,meta:{data:e.data,variant:e.type||`info`,prefix:e.prefixNode,suffix:e.suffixNode},onStatusChange:({status:t})=>{var n,r,i,a;(n=e.onStatusChange)?.call(e,t),t===`visible`?(r=e.onVisible)?.call(e):t===`dismissing`?(i=e.onDismissing)?.call(e):t===`unmounted`&&(a=e.onUnmounted)?.call(e)}});return()=>t.dismiss(n)};return{open:s,Root:i,Wrapper:r}}try{q.displayName=`createToast`,q.__docgenInfo={description:``,displayName:`createToast`,props:{}}}catch{}const J=e=>{let{placement:t,max:n,overlap:r,gap:i,offsets:o,hotkey:s,removeDelay:c,pauseOnPageIdle:l,...u}=e,d={placement:t??`top-end`,max:n,overlap:r,gap:i,offsets:o,hotkey:s,removeDelay:c,pauseOnPageIdle:l},f=(0,U.useRef)(q(d)),p=t=>{f.current.open({type:e[`type(variant)`]||t.type||`info`,titleNode:t.titleNode??`Uh oh! Something went wrong.`,descriptionNode:t.descriptionNode??`There was a problem with your request.`,prefixNode:t.prefixNode??(0,W.jsx)(T,{style:{fontSize:`24px`}}),...t})};return(0,W.jsxs)(`div`,{children:[(0,W.jsx)(`div`,{style:{display:`flex`,gap:`10px`,marginBottom:`20px`},children:(0,W.jsx)(a,{onClick:()=>p(u),children:`Show Info`})}),(0,W.jsx)(f.current.Root,{})]})},Se={title:`Example/Toast`,component:J,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{placement:{control:{type:`select`},options:[`top-start`,`top-end`,`bottom-start`,`bottom-end`],description:`Placement of the toast`,table:{category:`CreateToast`,type:{summary:`top-start | top-end | bottom-start | bottom-end`},defaultValue:{summary:`top-end`}}},max:{control:{type:`number`},description:`Maximum number of toasts to display at once`,table:{category:`CreateToast`,type:{summary:`number`},defaultValue:{summary:`24`}}},overlap:{control:{type:`boolean`},description:`Whether to allow toasts to overlap each other`,table:{category:`CreateToast`,type:{summary:`boolean`},defaultValue:{summary:`true`}}},gap:{control:{type:`number`},description:`Gap between toasts in pixels`,table:{category:`CreateToast`,type:{summary:`number`},defaultValue:{summary:`16`}}},offsets:{control:{type:`object`},description:`Offsets from the edges of the viewport for toast placement`,table:{category:`CreateToast`,type:{summary:`string | Record<"left" | "right" | "bottom" | "top", string>`},defaultValue:{summary:`"1rem"`}}},hotkey:{control:{type:`object`},description:`Hotkey to focus the toast group`,table:{category:`CreateToast`,type:{summary:`string[]`},defaultValue:{summary:`["altKey", "KeyT"]`}}},removeDelay:{control:{type:`number`},description:`Delay in milliseconds before a toast is removed after it is dismissed`,table:{category:`CreateToast`,type:{summary:`number`},defaultValue:{summary:`200`}}},pauseOnPageIdle:{control:{type:`boolean`},description:`Whether to pause toast animations when the page is idle`,table:{category:`CreateToast`,type:{summary:`boolean`},defaultValue:{summary:`false`}}},type:{control:{type:`select`},options:[`info`,`success`,`warning`,`error`,`loading`],description:`Type of toast to display`,table:{category:`ShowToast`,type:{summary:`info | success | warning | error | loading`},defaultValue:{summary:`info`}}},"type(variant)":{control:{type:`text`},description:`Variant of the toast based on its type`,table:{category:`ShowToast`,type:{summary:`string`},defaultValue:{summary:`info`}}},duration:{control:{type:`number`},description:`Duration in milliseconds for which the toast will be visible`,table:{category:`ShowToast`,type:{summary:`number`},defaultValue:{summary:`5000`}}},titleNode:{description:`Title of the toast`,table:{category:`ShowToast`,type:{summary:`React.ReactNode`}}},descriptionNode:{description:`Description of the toast`,table:{category:`ShowToast`,type:{summary:`React.ReactNode`}}},prefixNode:{description:`Prefix node for the toast, can be an icon or any React node`,table:{category:`ShowToast`,type:{summary:`React.ReactNode`}}},suffixNode:{description:`Suffix node for the toast, can be an icon or any React node`,table:{category:`ShowToast`,type:{summary:`React.ReactNode`}}},data:{description:`Additional data to pass to the toast`,table:{category:`ShowToast`,type:{summary:`unknown`}}},onStatusChange:{description:`Callback when the status of the toast changes`,table:{category:`ShowToast`,type:{summary:`(status: Status) => void`,detail:`
          type Status = 'visible' | 'dismissing' | 'unmounted';
          `}}},onVisible:{description:`Callback when the toast becomes visible`,table:{category:`ShowToast`,type:{summary:`() => void`}}},onDismissing:{description:`Callback when the toast is about to be dismissed`,table:{category:`ShowToast`,type:{summary:`() => void`}}},onUnmounted:{description:`Callback when the toast is unmounted`,table:{category:`ShowToast`,type:{summary:`() => void`}}}}};var Ce=Se;const Y={render:e=>(0,W.jsx)(J,{...e}),parameters:{docs:{codePanel:!0,source:{language:`tsx`,code:`
const toast = createToast()

const App = () => {
  return (
  <>
    <Button
      onClick={() => {
        toast.open({
          titleNode: 'Info Toast',
          descriptionNode: 'This is an info toast message',
          type: 'info',
        })
      }
    }>
      Show Info Toast
    </Button>
    <toast.Root />
  </>
  )
}
      `}}}},X=q(),we=()=>{let[e,t]=(0,U.useState)(0),n=n=>{t(e=>e+1),X.open({titleNode:`${n.charAt(0).toUpperCase()+n.slice(1)} Toast #${e+1}`,descriptionNode:`This is a ${n} toast message`,prefixNode:(0,W.jsx)(T,{style:{fontSize:`24px`}}),type:n})},r={padding:`10px 20px`,borderRadius:`4px`,border:`none`,cursor:`pointer`,fontSize:`16px`};return(0,W.jsxs)(`div`,{children:[(0,W.jsxs)(`div`,{style:{display:`flex`,gap:`10px`,marginBottom:`20px`},children:[(0,W.jsx)(`button`,{style:{background:`#e0f7fa`,...r},onClick:()=>n(`info`),children:`Show Info`}),(0,W.jsx)(`button`,{style:{background:`#c8e6c9`,...r},onClick:()=>n(`success`),children:`Show Success`}),(0,W.jsx)(`button`,{style:{background:`#fff9c4`,...r},onClick:()=>n(`warning`),children:`Show Warning`}),(0,W.jsx)(`button`,{style:{background:`#ffccbc`,...r},onClick:()=>n(`error`),children:`Show Error`}),(0,W.jsx)(`button`,{style:{background:`#e0e0e0`,...r},onClick:()=>n(`loading`),children:`Show Loading`})]}),(0,W.jsx)(X.Root,{})]})},Z={render:()=>(0,W.jsx)(we,{}),parameters:{docs:{codePanel:!0,source:{language:`tsx`,code:`
const toast = createToast()

const App = () => {
  return (
  <>
    <Button
      onClick={() => {
        toast.open({
          titleNode: 'Info Toast',
          descriptionNode: 'This is an info toast message',
          type: 'info',
        })
      }
    }>
      Show Info Toast
    </Button>
    <toast.Root />
  </>
  )
}
      `}}}},Q={render:()=>{let e=q({placement:`bottom-end`}),t=()=>{e.open({titleNode:`Custom Toast`,descriptionNode:`This toast has custom placement`,type:`info`})};return(0,W.jsxs)(`div`,{children:[(0,W.jsx)(a,{onClick:t,children:`Show Custom Toast`}),(0,W.jsx)(e.Root,{children:(0,W.jsx)(e.Wrapper,{variant:`custom`,render:({titleNode:e,descriptionNode:t,styles:n})=>(0,W.jsxs)(`div`,{className:n.root,style:{backgroundColor:`#f0f9ff`,border:`1px solid #0ea5e9`},children:[(0,W.jsx)(`h3`,{className:n.title,style:{color:`#0ea5e9`},children:e}),(0,W.jsx)(`p`,{className:n.description,style:{color:`#0369a1`},children:t})]})})})]})}},$={render:()=>{let e=q({placement:`top-start`}),t=({titleNode:e,descriptionNode:t,styles:n})=>(0,W.jsx)(`div`,{className:n.root,style:{backgroundColor:`#fef3c7`,border:`1px solid #f59e0b`},children:(0,W.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`8px`},children:[(0,W.jsx)(`span`,{style:{fontSize:`20px`},children:`⚠️`}),(0,W.jsxs)(`div`,{children:[(0,W.jsx)(`h3`,{className:n.title,style:{color:`#92400e`,margin:0},children:e}),(0,W.jsx)(`p`,{className:n.description,style:{color:`#78350f`,margin:0},children:t})]})]})}),n=()=>{e.open({titleNode:`Component Toast`,descriptionNode:`This toast uses a custom component`,type:`component`})};return(0,W.jsxs)(`div`,{children:[(0,W.jsx)(a,{onClick:n,children:`Show Component Toast`}),(0,W.jsx)(e.Root,{children:(0,W.jsx)(e.Wrapper,{variant:`component`,component:t})})]})}};Y.parameters={...Y.parameters,docs:{...(te=Y.parameters)?.docs,source:{originalSource:`{
  render: args => <ToastExample {...args} />,
  parameters: {
    docs: {
      codePanel: true,
      source: {
        language: 'tsx',
        code: \`
const toast = createToast()

const App = () => {
  return (
  <>
    <Button
      onClick={() => {
        toast.open({
          titleNode: 'Info Toast',
          descriptionNode: 'This is an info toast message',
          type: 'info',
        })
      }
    }>
      Show Info Toast
    </Button>
    <toast.Root />
  </>
  )
}
      \`
      }
    }
  }
}`,...(E=Y.parameters)==null||(E=E.docs)==null?void 0:E.source}}},Z.parameters={...Z.parameters,docs:{...(D=Z.parameters)?.docs,source:{originalSource:`{
  render: () => <OverviewToast />,
  parameters: {
    docs: {
      codePanel: true,
      source: {
        language: 'tsx',
        code: \`
const toast = createToast()

const App = () => {
  return (
  <>
    <Button
      onClick={() => {
        toast.open({
          titleNode: 'Info Toast',
          descriptionNode: 'This is an info toast message',
          type: 'info',
        })
      }
    }>
      Show Info Toast
    </Button>
    <toast.Root />
  </>
  )
}
      \`
      }
    }
  }
}`,...(O=Z.parameters)==null||(O=O.docs)==null?void 0:O.source}}},Q.parameters={...Q.parameters,docs:{...(ne=Q.parameters)?.docs,source:{originalSource:`{
  render: () => {
    const toast = createToast({
      placement: 'bottom-end'
    });
    const showCustomToast = () => {
      toast.open({
        titleNode: 'Custom Toast',
        descriptionNode: 'This toast has custom placement',
        type: 'info'
      });
    };
    return <div>
        <Button onClick={showCustomToast}>Show Custom Toast</Button>
        <toast.Root>
          <toast.Wrapper variant="custom" render={({
          titleNode,
          descriptionNode,
          styles
        }) => <div className={styles.root} style={{
          backgroundColor: '#f0f9ff',
          border: '1px solid #0ea5e9'
        }}>
                <h3 className={styles.title} style={{
            color: '#0ea5e9'
          }}>
                  {titleNode}
                </h3>
                <p className={styles.description} style={{
            color: '#0369a1'
          }}>
                  {descriptionNode}
                </p>
              </div>} />
        </toast.Root>
      </div>;
  }
}`,...(k=Q.parameters)==null||(k=k.docs)==null?void 0:k.source}}},$.parameters={...$.parameters,docs:{...(re=$.parameters)?.docs,source:{originalSource:`{
  render: () => {
    const toast = createToast({
      placement: 'top-start'
    });
    const CustomToastComponent = ({
      titleNode,
      descriptionNode,
      styles
    }: RenderToastParams) => <div className={styles.root} style={{
      backgroundColor: '#fef3c7',
      border: '1px solid #f59e0b'
    }}>
        <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
      }}>
          <span style={{
          fontSize: '20px'
        }}>⚠️</span>
          <div>
            <h3 className={styles.title} style={{
            color: '#92400e',
            margin: 0
          }}>
              {titleNode}
            </h3>
            <p className={styles.description} style={{
            color: '#78350f',
            margin: 0
          }}>
              {descriptionNode}
            </p>
          </div>
        </div>
      </div>;
    const showComponentToast = () => {
      toast.open({
        titleNode: 'Component Toast',
        descriptionNode: 'This toast uses a custom component',
        type: 'component'
      });
    };
    return <div>
        <Button onClick={showComponentToast}>Show Component Toast</Button>
        <toast.Root>
          <toast.Wrapper variant="component" component={CustomToastComponent} />
        </toast.Root>
      </div>;
  }
}`,...(A=$.parameters)==null||(A=A.docs)==null?void 0:A.source}}};const Te=[`Base`,`Overview`,`WithCustomVariant`,`WithComponent`];export{Y as Base,Z as Overview,$ as WithComponent,Q as WithCustomVariant,Te as __namedExportsOrder,Ce as default};