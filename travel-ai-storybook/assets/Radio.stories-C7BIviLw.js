import{__toESM as e,require_react as t}from"./iframe-DvnfEkQm.js";import{require_jsx_runtime as n}from"./jsx-runtime-CBPNik_Q.js";import"./react-dom-BYJgZGuD.js";import{css as r,cva as i,cx as a}from"./global-DV47c4oA.js";import{createAnatomy as o,createGuards as s,createMachine as c,createProps as l,createSplitProps as u,dataAttr as d,dispatchInputCheckedEvent as f,getDocument as p,getEventTarget as m,getWindow as h,isLeftClick as ee,isMac as te,isSafari as ne,isString as re,isVirtualClick as ie,normalizeProps as ae,queryAll as oe,trackElementRect as se,trackFormControl as ce,useMachine as le,visuallyHiddenStyle as ue}from"./dist-DD8r8H-2.js";var de,g,fe,_,pe,v,me,y,he,b,ge,x,_e,S,ve,C;function ye(e){return!(e.metaKey||!te()&&e.altKey||e.ctrlKey||e.key===`Control`||e.key===`Shift`||e.key===`Meta`)}var be=new Set([`checkbox`,`radio`,`range`,`color`,`file`,`image`,`button`,`submit`,`reset`]);function xe(e,t,n){let r=n?m(n):null,i=h(r);return e=e||r instanceof i.HTMLInputElement&&!be.has(r?.type)||r instanceof i.HTMLTextAreaElement||r instanceof i.HTMLElement&&r.isContentEditable,!(e&&t===`keyboard`&&n instanceof i.KeyboardEvent&&!Reflect.has(we,n.key))}var w=null,Se=new Set,T=new Map,E=!1,Ce=!1,we={Tab:!0,Escape:!0};function D(e,t){for(let n of Se)n(e,t)}function Te(e){E=!0,ye(e)&&(w=`keyboard`,D(`keyboard`,e))}function O(e){w=`pointer`,(e.type===`mousedown`||e.type===`pointerdown`)&&(E=!0,D(`pointer`,e))}function Ee(e){ie(e)&&(E=!0,w=`virtual`)}function De(e){let t=m(e);t===h(t)||t===p(t)||(!E&&!Ce&&(w=`virtual`,D(`virtual`,e)),E=!1,Ce=!1)}function Oe(){E=!1,Ce=!0}function ke(e){if(typeof window>`u`||T.get(h(e)))return;let t=h(e),n=p(e),r=t.HTMLElement.prototype.focus;function i(){w=`virtual`,D(`virtual`,null),E=!0,r.apply(this,arguments)}Object.defineProperty(t.HTMLElement.prototype,`focus`,{configurable:!0,value:i}),n.addEventListener(`keydown`,Te,!0),n.addEventListener(`keyup`,Te,!0),n.addEventListener(`click`,Ee,!0),t.addEventListener(`focus`,De,!0),t.addEventListener(`blur`,Oe,!1),t.PointerEvent===void 0?(n.addEventListener(`mousedown`,O,!0),n.addEventListener(`mousemove`,O,!0),n.addEventListener(`mouseup`,O,!0)):(n.addEventListener(`pointerdown`,O,!0),n.addEventListener(`pointermove`,O,!0),n.addEventListener(`pointerup`,O,!0)),t.addEventListener(`beforeunload`,()=>{Ae(e)},{once:!0}),T.set(t,{focus:r})}var Ae=(e,t)=>{let n=h(e),r=p(e);T.has(n)&&(n.HTMLElement.prototype.focus=T.get(n).focus,r.removeEventListener(`keydown`,Te,!0),r.removeEventListener(`keyup`,Te,!0),r.removeEventListener(`click`,Ee,!0),n.removeEventListener(`focus`,De,!0),n.removeEventListener(`blur`,Oe,!1),n.PointerEvent===void 0?(r.removeEventListener(`mousedown`,O,!0),r.removeEventListener(`mousemove`,O,!0),r.removeEventListener(`mouseup`,O,!0)):(r.removeEventListener(`pointerdown`,O,!0),r.removeEventListener(`pointermove`,O,!0),r.removeEventListener(`pointerup`,O,!0)),T.delete(n))};function je(){return w===`keyboard`}function Me(e={}){let{isTextInput:t,autoFocus:n,onChange:r,root:i}=e;ke(i),r?.({isFocusVisible:n||je(),modality:w});let a=(e,n)=>{xe(!!t,e,n)&&r?.({isFocusVisible:je(),modality:e})};return Se.add(a),()=>{Se.delete(a)}}var Ne=o(`radio-group`).parts(`root`,`label`,`item`,`itemText`,`itemControl`,`indicator`),k=Ne.build(),A=e=>{var t;return(t=e.ids)?.root??`radio-group:${e.id}`},Pe=e=>{var t;return(t=e.ids)?.label??`radio-group:${e.id}:label`},Fe=(e,t)=>{var n,r;return((n=e.ids)==null||(r=n.item)==null?void 0:r.call(n,t))??`radio-group:${e.id}:radio:${t}`},Ie=(e,t)=>{var n,r;return((n=e.ids)==null||(r=n.itemHiddenInput)==null?void 0:r.call(n,t))??`radio-group:${e.id}:radio:input:${t}`},Le=(e,t)=>{var n,r;return((n=e.ids)==null||(r=n.itemControl)==null?void 0:r.call(n,t))??`radio-group:${e.id}:radio:control:${t}`},Re=(e,t)=>{var n,r;return((n=e.ids)==null||(r=n.itemLabel)==null?void 0:r.call(n,t))??`radio-group:${e.id}:radio:label:${t}`},ze=e=>{var t;return(t=e.ids)?.indicator??`radio-group:${e.id}:indicator`},j=e=>e.getById(A(e)),Be=(e,t)=>e.getById(Ie(e,t)),Ve=e=>e.getById(ze(e)),He=e=>{var t;return(t=j(e))?.querySelector(`input:not(:disabled)`)},Ue=e=>{var t;return(t=j(e))?.querySelector(`input:not(:disabled):checked`)},We=e=>{let t=CSS.escape(A(e)),n=`input[type=radio][data-ownedby='${t}']:not([disabled])`;return oe(j(e),n)},Ge=(e,t)=>{if(t)return e.getById(Fe(e,t))},Ke=e=>({left:e?.offsetLeft??0,top:e?.offsetTop??0,width:e?.offsetWidth??0,height:e?.offsetHeight??0}),qe=e=>({width:`${e.width}px`,height:`${e.height}px`,left:`${e.left}px`,top:`${e.top}px`});function Je(e,t){let{context:n,send:r,computed:i,prop:a,scope:o}=e,s=i(`isDisabled`),c=a(`readOnly`);function l(e){let t=n.get(`focusedValue`)===e.value,r=t&&je();return{value:e.value,invalid:!!e.invalid,disabled:!!e.disabled||s,checked:n.get(`value`)===e.value,focused:t,focusVisible:r,hovered:n.get(`hoveredValue`)===e.value,active:n.get(`activeValue`)===e.value}}function u(e){let t=l(e);return{"data-focus":d(t.focused),"data-focus-visible":d(t.focusVisible),"data-disabled":d(t.disabled),"data-readonly":d(c),"data-state":t.checked?`checked`:`unchecked`,"data-hover":d(t.hovered),"data-invalid":d(t.invalid),"data-orientation":a(`orientation`),"data-ssr":d(n.get(`ssr`))}}let f=()=>{let e=Ue(o)??He(o);e?.focus()};return{focus:f,value:n.get(`value`),setValue(e){r({type:`SET_VALUE`,value:e,isTrusted:!1})},clearValue(){r({type:`SET_VALUE`,value:null,isTrusted:!1})},getRootProps(){return t.element({...k.root.attrs,role:`radiogroup`,id:A(o),"aria-labelledby":Pe(o),"data-orientation":a(`orientation`),"data-disabled":d(s),"aria-orientation":a(`orientation`),dir:a(`dir`),style:{position:`relative`}})},getLabelProps(){return t.element({...k.label.attrs,dir:a(`dir`),"data-orientation":a(`orientation`),"data-disabled":d(s),id:Pe(o),onClick:f})},getItemState:l,getItemProps(e){let n=l(e);return t.label({...k.item.attrs,dir:a(`dir`),id:Fe(o,e.value),htmlFor:Ie(o,e.value),...u(e),onPointerMove(){n.disabled||n.hovered||r({type:`SET_HOVERED`,value:e.value,hovered:!0})},onPointerLeave(){n.disabled||r({type:`SET_HOVERED`,value:null})},onPointerDown(t){n.disabled||ee(t)&&(n.focused&&t.pointerType===`mouse`&&t.preventDefault(),r({type:`SET_ACTIVE`,value:e.value,active:!0}))},onPointerUp(){n.disabled||r({type:`SET_ACTIVE`,value:null})},onClick(){var t;!n.disabled&&ne()&&(t=Be(o,e.value))?.focus()}})},getItemTextProps(e){return t.element({...k.itemText.attrs,dir:a(`dir`),id:Re(o,e.value),...u(e)})},getItemControlProps(e){let n=l(e);return t.element({...k.itemControl.attrs,dir:a(`dir`),id:Le(o,e.value),"data-active":d(n.active),"aria-hidden":!0,...u(e)})},getItemHiddenInputProps(e){let n=l(e);return t.input({"data-ownedby":A(o),id:Ie(o,e.value),type:`radio`,name:a(`name`)||a(`id`),form:a(`form`),value:e.value,onClick(t){if(c){t.preventDefault();return}t.currentTarget.checked&&r({type:`SET_VALUE`,value:e.value,isTrusted:!0})},onBlur(){r({type:`SET_FOCUSED`,value:null,focused:!1})},onFocus(){r({type:`SET_FOCUSED`,value:e.value,focused:!0})},onKeyDown(t){t.defaultPrevented||t.key===` `&&r({type:`SET_ACTIVE`,value:e.value,active:!0})},onKeyUp(e){e.defaultPrevented||e.key===` `&&r({type:`SET_ACTIVE`,value:null})},disabled:n.disabled,defaultChecked:n.checked,style:ue})},getIndicatorProps(){let e=n.get(`indicatorRect`);return t.element({id:ze(o),...k.indicator.attrs,dir:a(`dir`),hidden:n.get(`value`)==null,"data-disabled":d(s),"data-orientation":a(`orientation`),style:{"--transition-property":`left, top, width, height`,"--left":e?.left,"--top":e?.top,"--width":e?.width,"--height":e?.height,position:`absolute`,willChange:`var(--transition-property)`,transitionProperty:`var(--transition-property)`,transitionDuration:n.get(`canIndicatorTransition`)?`var(--transition-duration, 150ms)`:`0ms`,transitionTimingFunction:`var(--transition-timing-function)`,[a(`orientation`)===`horizontal`?`left`:`top`]:a(`orientation`)===`horizontal`?`var(--left)`:`var(--top)`}})}}}var{not:Ye}=s(),Xe=c({props({props:e}){return{orientation:`vertical`,...e}},initialState(){return`idle`},context({prop:e,bindable:t}){return{value:t(()=>({defaultValue:e(`defaultValue`),value:e(`value`),onChange(t){var n;(n=e(`onValueChange`))?.({value:t})}})),activeValue:t(()=>({defaultValue:null})),focusedValue:t(()=>({defaultValue:null})),hoveredValue:t(()=>({defaultValue:null})),indicatorRect:t(()=>({defaultValue:{}})),canIndicatorTransition:t(()=>({defaultValue:!1})),fieldsetDisabled:t(()=>({defaultValue:!1})),ssr:t(()=>({defaultValue:!0}))}},refs(){return{indicatorCleanup:null}},computed:{isDisabled:({prop:e,context:t})=>!!e(`disabled`)||t.get(`fieldsetDisabled`)},entry:[`syncIndicatorRect`,`syncSsr`],exit:[`cleanupObserver`],effects:[`trackFormControlState`,`trackFocusVisible`],watch({track:e,action:t,context:n}){e([()=>n.get(`value`)],()=>{t([`setIndicatorTransition`,`syncIndicatorRect`,`syncInputElements`])})},on:{SET_VALUE:[{guard:Ye(`isTrusted`),actions:[`setValue`,`dispatchChangeEvent`]},{actions:[`setValue`]}],SET_HOVERED:{actions:[`setHovered`]},SET_ACTIVE:{actions:[`setActive`]},SET_FOCUSED:{actions:[`setFocused`]}},states:{idle:{}},implementations:{guards:{isTrusted:({event:e})=>!!e.isTrusted},effects:{trackFormControlState({context:e,scope:t}){return ce(j(t),{onFieldsetDisabledChange(t){e.set(`fieldsetDisabled`,t)},onFormReset(){e.set(`value`,e.initial(`value`))}})},trackFocusVisible({scope:e}){var t;return Me({root:(t=e.getRootNode)?.call(e)})}},actions:{setValue({context:e,event:t}){e.set(`value`,t.value)},setHovered({context:e,event:t}){e.set(`hoveredValue`,t.value)},setActive({context:e,event:t}){e.set(`activeValue`,t.value)},setFocused({context:e,event:t}){e.set(`focusedValue`,t.value)},syncInputElements({context:e,scope:t}){let n=We(t);n.forEach(t=>{t.checked=t.value===e.get(`value`)})},setIndicatorTransition({context:e}){e.set(`canIndicatorTransition`,re(e.get(`value`)))},cleanupObserver({refs:e}){var t;(t=e.get(`indicatorCleanup`))?.()},syncSsr({context:e}){e.set(`ssr`,!1)},syncIndicatorRect({context:e,scope:t,refs:n}){var r;if((r=n.get(`indicatorCleanup`))?.(),!Ve(t))return;let i=e.get(`value`),a=Ge(t,i);if(i==null||!a){e.set(`canIndicatorTransition`,!1),e.set(`indicatorRect`,{});return}let o=se([a],{measure(e){return Ke(e)},onEntry({rects:t}){e.set(`indicatorRect`,qe(t[0]))}});n.set(`indicatorCleanup`,o)},dispatchChangeEvent({context:e,scope:t}){let n=We(t);n.forEach(t=>{let n=t.value===e.get(`value`);n!==t.checked&&f(t,{checked:n})})}}}}),Ze=l()([`dir`,`disabled`,`form`,`getRootNode`,`id`,`ids`,`name`,`onValueChange`,`orientation`,`readOnly`,`value`,`defaultValue`]),Qe=u(Ze),$e=l()([`value`,`disabled`,`invalid`]),et=u($e);const tt=i({base:{},variants:{orientation:{horizontal:{'&[data-part="root"]':{flexDirection:`row`}},vertical:{'&[data-part="root"]':{flexDirection:`column`}}}}}),nt=e=>{let t=tt.getVariantProps(e);return{root:tt(t),group:r({display:`flex`,gap:`{spacing.2}`}),label:r({})}},rt=tt.variantMap;var M=e(t());const N=(0,M.createContext)({}),P=e=>{let t=(0,M.useContext)(N);if(!t)throw Error(`RadioGroupContext is not provided. Please wrap your component with RadioGroupRootProvider.`);let n=t[e];if(!n)throw Error(`RadioGroupContext does not have an API for name: ${e}`);return n},F=(0,M.createContext)(null);function it(){let e=(0,M.useContext)(F);if(!e)throw Error(`RadioItemContext is not provided. Please wrap your component with RadioItemProvider.`);return e}try{N.displayName=`RadioGroupContext`,N.__docgenInfo={description:``,displayName:`RadioGroupContext`,props:{}}}catch{}try{P.displayName=`useRadioGroupContext`,P.__docgenInfo={description:``,displayName:`useRadioGroupContext`,props:{}}}catch{}try{F.displayName=`RadioItemContext`,F.__docgenInfo={description:``,displayName:`RadioItemContext`,props:{}}}catch{}var I=e(n());function at({children:e,name:t,value:n}){let r=(0,M.useContext)(N),i={...r||{},[t]:n,default:n};return(0,I.jsx)(N.Provider,{value:i,children:e})}function L({id:e,name:t,onChange:n,invalid:r,children:i,...a}){let o=(0,M.useId)(),s=e||o,c=t||s,l=le(Xe,{id:s,onValueChange:({value:e})=>n?.(e),name:c,...a}),u=Je(l,ae),d={classNames:nt({orientation:a.orientation}),invalid:r,api:u};return(0,I.jsx)(at,{name:c,value:d,children:i})}function R({children:e,...t}){let{classNames:n,api:r}=P(`default`);return(0,I.jsx)(`div`,{className:a(n.label),...r.getLabelProps(),...t,children:e})}function z({children:e,name:t,style:n,...r}){let{classNames:i,api:o}=P(t||`default`),s=o.getRootProps();return(0,I.jsx)(`div`,{...s,...r,className:a(i.group,s.className),style:{...n,...s.style},children:e})}try{L.displayName=`RadioGroupRoot`,L.__docgenInfo={description:``,displayName:`RadioGroupRoot`,props:{id:{defaultValue:null,description:``,name:`id`,required:!1,type:{name:`string`}},name:{defaultValue:null,description:``,name:`name`,required:!1,type:{name:`string`}},defaultValue:{defaultValue:null,description:``,name:`defaultValue`,required:!1,type:{name:`string | null`}},onChange:{defaultValue:null,description:``,name:`onChange`,required:!1,type:{name:`((value: string | null) => void)`}},disabled:{defaultValue:null,description:``,name:`disabled`,required:!1,type:{name:`boolean`}},invalid:{defaultValue:null,description:``,name:`invalid`,required:!1,type:{name:`boolean`}},dir:{defaultValue:null,description:``,name:`dir`,required:!1,type:{name:`enum`,value:[{value:`"ltr"`},{value:`"rtl"`}]}},form:{defaultValue:null,description:``,name:`form`,required:!1,type:{name:`string`}},orientation:{defaultValue:null,description:``,name:`orientation`,required:!1,type:{name:`enum`,value:[{value:`"horizontal"`},{value:`"vertical"`}]}},readOnly:{defaultValue:null,description:``,name:`readOnly`,required:!1,type:{name:`boolean`}},value:{defaultValue:null,description:``,name:`value`,required:!1,type:{name:`string | null`}}}}}catch{}try{R.displayName=`RadioGroupLabel`,R.__docgenInfo={description:``,displayName:`RadioGroupLabel`,props:{}}}catch{}try{z.displayName=`RadioGroupRow`,z.__docgenInfo={description:``,displayName:`RadioGroupRow`,props:{name:{defaultValue:null,description:``,name:`name`,required:!1,type:{name:`string`}}}}}catch{}const B={colorDefault:{name:`--radio-color-default`,value:`var(--radio-color-default)`},colorInverse:{name:`--button-color-inverse`,value:`var(--button-color-inverse)`},colorHover:{name:`--button-color-hover`,value:`var(--button-color-hover)`},colorActive:{name:`--button-color-active`,value:`var(--button-color-active)`},colorSelected:{name:`--radio-color-selected`,value:`var(--radio-color-selected)`},colorInvalid:{name:`--radio-color-invalid`,value:`var(--radio-color-invalid)`},colorDisabled:{name:`--radio-color-disabled`,value:`var(--radio-color-disabled)`},colorDisabledInverse:{name:`--radio-color-disabled-inverse`,value:`var(--radio-color-disabled-inverse)`},colorSelectedDisabled:{name:`--radio-color-selected-disabled`,value:`var(--radio-color-selected-disabled)`},colorSelectedInvalidDisabled:{name:`--radio-color-selected-invalid-disabled`,value:`var(--radio-color-selected-invalid-disabled)`}},ot=i({base:{display:`flex`,alignItems:`center`,gap:`{spacing.2}`,cursor:`pointer`,fontSize:`{fontSizes.md}`,userSelect:`none`,transition:`background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease`},variants:{theme:{primary:{},secondary:{},primaryBlue:{}},variant:{label:{fontWeight:`400`,border:`none`,backgroundColor:`transparent`,color:B.colorDefault.value,_hover:{color:B.colorHover.value},_active:{color:B.colorActive.value},_disabled:{color:B.colorDisabled.value}},outlined:{border:`1px solid ${B.colorDefault.value}`,backgroundColor:`transparent`,color:B.colorDefault.value,_hover:{borderColor:B.colorHover.value,color:B.colorHover.value},_active:{borderColor:B.colorActive.value,color:B.colorActive.value},'&[data-state="checked"]':{borderColor:B.colorSelected.value,backgroundColor:B.colorSelected.value,color:B.colorInverse.value,_hover:{borderColor:B.colorSelected.value,backgroundColor:B.colorSelected.value,color:B.colorInverse.value},_active:{borderColor:B.colorSelected.value,backgroundColor:B.colorSelected.value,color:B.colorInverse.value}},"&[data-invalid]":{},'&[data-invalid][data-state="checked"]':{},"&[data-disabled]":{},'&[data-disabled][data-state="checked"]':{borderColor:B.colorSelectedDisabled.value,backgroundColor:B.colorSelectedDisabled.value,color:B.colorDisabledInverse.value},"&[data-disabled][data-invalid]":{},'&[data-invalid][data-state="checked"][data-disabled]':{borderColor:B.colorSelectedInvalidDisabled.value,backgroundColor:B.colorSelectedInvalidDisabled.value,color:B.colorDisabledInverse.value}}},size:{small:{fontSize:`sm`},medium:{fontSize:`md`},large:{fontSize:`lg`}},shape:{rounded:{borderRadius:`md`},square:{borderRadius:`0`},pill:{borderRadius:`full`},icon:{borderRadius:`50%`}}},defaultVariants:{variant:`label`,theme:`primary`,size:`medium`,shape:`rounded`},compoundVariants:[{variant:`outlined`,size:`small`,css:{py:`{spacing.2}`,px:`{spacing.3}`,gap:`10px`}},{variant:`outlined`,size:`medium`,css:{py:`{spacing.3}`,px:`{spacing.4}`,gap:`10px`}},{variant:`outlined`,size:`large`,css:{py:`{spacing.4}`,px:`{spacing.5}`,gap:`10px`}},{shape:`icon`,css:{minWidth:`0`,fontSize:`xl`}},{shape:`icon`,variant:`outlined`,css:{padding:`16px`}},{shape:`icon`,variant:`label`,css:{padding:`0`}}]}),st=e=>{if(!e)throw Error(`No parameters provided for getComponentTokens`);return r({[B.colorDefault.name]:`{colors.slate.400}`,[B.colorInverse.name]:`white`,[B.colorHover.name]:`{colors.slate.500}`,[B.colorActive.name]:`{colors.slate.600}`,[B.colorSelected.name]:`{colors.sky.500}`,[B.colorInvalid.name]:`{colors.rose.400}`,[B.colorDisabled.name]:`{colors.slate.200}`,[B.colorDisabledInverse.name]:`{colors.slate.300}`,[B.colorSelectedDisabled.name]:`{colors.sky.200}`,[B.colorSelectedInvalidDisabled.name]:`{colors.rose.200}`})},ct=e=>{let t=ot.getVariantProps(e);return{root:r(t),group:r({display:`flex`,flexDirection:`column`,gap:`{spacing.2}`}),label:r({}),item:a(st(t),ot(t)),input:r({}),itemText:r({}),itemControl:r({width:`{spacing.4}`,height:`{spacing.4}`,borderRadius:`{radii.full}`,borderWidth:`2px`,borderStyle:`solid`,borderColor:B.colorDefault.value,padding:`2px`,backgroundColor:`transparent`,display:`flex`,alignItems:`center`,justifyContent:`center`,transition:`border-color 0.2s ease`,_after:{content:`""`,display:`block`,width:`100%`,height:`100%`,borderRadius:`{radii.full}`,backgroundColor:B.colorSelected.value,transform:`scale(0)`,transition:`transform 0.2s ease, background-color 0.2s ease`},"&[data-disabled]":{cursor:`not-allowed`,borderColor:B.colorDisabled.value},'&[data-state="checked"]':{borderColor:B.colorSelected.value,_after:{transform:`scale(1)`}},'&[data-state="checked"][data-disabled]':{borderColor:B.colorSelectedDisabled.value,_after:{backgroundColor:B.colorSelectedDisabled.value}},"&[data-invalid]":{borderColor:B.colorInvalid.value},'&[data-invalid][data-state="checked"]':{borderColor:B.colorInvalid.value,_after:{backgroundColor:B.colorInvalid.value}},"&[data-invalid][data-disabled]":{borderColor:B.colorSelectedInvalidDisabled.value},'&[data-invalid][data-state="checked"][data-disabled]':{borderColor:B.colorSelectedInvalidDisabled.value,_after:{backgroundColor:B.colorSelectedInvalidDisabled.value}}})}},V=ot.variantMap;function lt({children:e,value:t}){return(0,I.jsx)(F.Provider,{value:t,children:e})}function ut({...e}){let{classNames:t,api:n,item:r}=it();return(0,I.jsx)(`input`,{className:a(t.input),...n.getItemHiddenInputProps(r),...e})}function H({value:e,invalid:t,disabled:n,children:r,render:i,inputProps:o,variant:s,theme:c,shape:l,size:u,...d}){let{api:f,invalid:p}=P(d.name||`default`),m={value:e,invalid:p||t,disabled:n},h={...f.getItemState(m)},ee=ct({variant:s,theme:c,shape:l,size:u});return(0,I.jsx)(lt,{value:{api:f,item:m,classNames:ee},children:(0,I.jsxs)(`label`,{className:a(ee.item),...f.getItemProps(m),...d,children:[(0,I.jsx)(ut,{...o}),i?i(h):r]})})}function U({children:e,...t}){let{classNames:n,api:r,item:i}=it();return(0,I.jsx)(`span`,{className:a(n.itemText),...r.getItemTextProps(i),...t,children:e})}function W({...e}){let{classNames:t,api:n,item:r}=it();return(0,I.jsx)(`div`,{className:a(t.itemControl),...n.getItemControlProps(r),...e})}try{ut.displayName=`RadioItemHiddenControl`,ut.__docgenInfo={description:``,displayName:`RadioItemHiddenControl`,props:{}}}catch{}try{H.displayName=`RadioItem`,H.__docgenInfo={description:``,displayName:`RadioItem`,props:{name:{defaultValue:null,description:``,name:`name`,required:!1,type:{name:`string`}},value:{defaultValue:null,description:``,name:`value`,required:!0,type:{name:`string`}},invalid:{defaultValue:null,description:``,name:`invalid`,required:!1,type:{name:`boolean`}},disabled:{defaultValue:null,description:``,name:`disabled`,required:!1,type:{name:`boolean`}},render:{defaultValue:null,description:``,name:`render`,required:!1,type:{name:`((params: RadioRenderParams) => ReactNode)`}},inputProps:{defaultValue:null,description:``,name:`inputProps`,required:!1,type:{name:`Omit<InputHTMLAttributes<HTMLInputElement>, ExcludeAttributes>`}},variant:{defaultValue:null,description:``,name:`variant`,required:!1,type:{name:`enum`,value:[{value:`"label"`},{value:`"outlined"`}]}},theme:{defaultValue:null,description:``,name:`theme`,required:!1,type:{name:`enum`,value:[{value:`"primary"`},{value:`"secondary"`},{value:`"primaryBlue"`}]}},shape:{defaultValue:null,description:``,name:`shape`,required:!1,type:{name:`enum`,value:[{value:`"rounded"`},{value:`"square"`},{value:`"pill"`},{value:`"icon"`}]}},size:{defaultValue:null,description:``,name:`size`,required:!1,type:{name:`enum`,value:[{value:`"medium"`},{value:`"small"`},{value:`"large"`}]}}}}}catch{}try{U.displayName=`RadioItemText`,U.__docgenInfo={description:``,displayName:`RadioItemText`,props:{}}}catch{}try{W.displayName=`RadioItemControlBox`,W.__docgenInfo={description:``,displayName:`RadioItemControlBox`,props:{}}}catch{}const G=({...e})=>(0,I.jsx)(L,{...e.groupProps,children:(0,I.jsx)(z,{...e.rowProps,children:e.options.map(({controlProps:e,textProps:t,itemProps:n})=>(0,I.jsxs)(H,{...n,children:[(0,I.jsx)(W,{...e}),(0,I.jsx)(U,{...t})]},n?.value))})}),dt={title:`Example/Radio`,parameters:{layout:`centered`,docs:{description:{component:`A radio group component that allows users to select one option from a set.`}}},tags:[`autodocs`],subcomponents:{RadioGroupRoot:L,RadioGroupRow:z,RadioGroupLabel:R,RadioItem:H,RadioItemControlBox:W,RadioItemText:U},argTypes:{options:{control:`object`,description:`The options for testing the radio group.`},value:{control:`text`,description:`The value of the radio group.`,table:{type:{summary:`string | null`},defaultValue:{summary:`null`},category:`RadioGroup`}},name:{control:`text`,description:`The name of the radio group.`,table:{type:{summary:`string`},defaultValue:{summary:`{REACT_UUID}`},category:`RadioGroup`}},defaultValue:{control:`text`,description:`The default value of the radio group.`,table:{type:{summary:`string | null`},defaultValue:{summary:`null`},category:`RadioGroup`}},onChange:{description:`Callback function called when the radio group value changes.`,table:{type:{summary:`(value: string | null) => void`},defaultValue:{summary:`() => {}`},category:`RadioGroup`}},disabled:{control:`boolean`,description:`Whether the radio group is disabled.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`},category:`RadioGroup`}},invalid:{control:`boolean`,description:`Whether the radio group is invalid.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`},category:`RadioGroup`}},dir:{control:`select`,options:[`ltr`,`rtl`],description:`The text direction of the radio group.`,table:{type:{summary:`"ltr" | "rtl"`},defaultValue:{summary:`ltr`},category:`RadioGroup`}},form:{control:`text`,description:`The form element the radio group belongs to.`,table:{type:{summary:`string`},defaultValue:{summary:`null`},category:`RadioGroup`}},orientation:{control:`select`,options:rt.orientation,description:`The orientation of the radio group.`,table:{type:{summary:rt.orientation.map(e=>`"${e}"`).join(` | `)},defaultValue:{summary:`vertical`},category:`RadioGroup`}},readOnly:{control:`boolean`,description:`Whether the radio group is read-only.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`},category:`RadioGroup`}},variant:{control:`select`,options:V.variant,description:`The variant of the radio item.`,table:{type:{summary:V.variant.map(e=>`"${e}"`).join(` | `)},defaultValue:{summary:`label`},category:`RadioItem`}},theme:{control:`select`,options:V.theme,description:`The theme of the radio item.`,table:{type:{summary:V.theme.map(e=>`"${e}"`).join(` | `)},defaultValue:{summary:`primary`},category:`RadioItem`}},shape:{control:`select`,options:V.shape,description:`The shape of the radio item.`,table:{type:{summary:V.shape.map(e=>`"${e}"`).join(` | `)},defaultValue:{summary:`rounded`},category:`RadioItem`}},size:{control:`select`,options:V.size,description:`The size of the radio item.`,table:{type:{summary:V.size.map(e=>`"${e}"`).join(` | `)},defaultValue:{summary:`medium`},category:`RadioItem`}},"name(item)":{control:`text`,description:`The name of the radio item.`,table:{type:{summary:`string`},defaultValue:{summary:`{REACT_UUID}`},category:`RadioItem`}},"value(item)":{control:`text`,description:`The value of the radio item.`,table:{type:{summary:`string`},defaultValue:{summary:`null`},category:`RadioItem`}},"invalid(item)":{control:`boolean`,description:`Whether the radio item is invalid.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`},category:`RadioItem`}},"disabled(item)":{control:`boolean`,description:`Whether the radio item is disabled.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`},category:`RadioItem`}},render:{description:`Custom render function for the radio item.`,table:{type:{summary:`(params: RadioRenderParams) => React.ReactNode`,detail:`
interface RadioRenderParams {
  /**
   * The value of the item
   */
  value: string;
  /**
   * Whether the item is invalid
   */
  invalid: boolean;
  /**
   * Whether the item is disabled
   */
  disabled: boolean;
  /**
   * Whether the item is checked
   */
  checked: boolean;
  /**
   *  Whether the item is focused
   */
  focused: boolean;
  /**
   * Whether the item is focused and the focus is visible
   */
  focusVisible: boolean;
  /**
   * Whether the item is hovered
   */
  hovered: boolean;
  /**
   * Whether the item is active or pressed
   */
  active: boolean;
}
          `},category:`RadioItem`}},inputProps:{control:`object`,description:`Props for the hidden input element.`,table:{type:{summary:`object`},category:`RadioItem`}}},args:{groupProps:{defaultValue:`c`},rowProps:{},labelProps:{},options:[{itemProps:{value:`a`},controlProps:{},textProps:{children:`Option A`}},{itemProps:{value:`b`},controlProps:{},textProps:{children:`Option B`}},{itemProps:{value:`c`},controlProps:{},textProps:{children:`Option C`}}]}};var ft=dt;const K={render:e=>(0,I.jsx)(G,{...e})},q={render:()=>(0,I.jsx)(G,{groupProps:{invalid:!0,defaultValue:`a`},options:[{itemProps:{value:`a`},textProps:{children:`Option A`}},{itemProps:{value:`b`},textProps:{children:`Option B`}},{itemProps:{value:`c`},textProps:{children:`Option C`}}]}),parameters:{docs:{description:{story:`An invalid radio group indicates an error state, typically used in forms.`},source:{code:`
const options = [
  {
    value: 'a',
    label: 'Option A',
  },
  {
    value: 'b',
    label: 'Option B',
  },
  {
    value: 'c',
    label: 'Option C',
  },
]
const Example = () => (
  <RadioGroupRoot>
    <RadioGroupRow>
      {options.map(({ value, label }) => (
        <RadioItem key={value} value={value}>
          <RadioItemControlBox />
          <RadioItemText>{label}</RadioItemText>
        </RadioItem>
      ))}
    </RadioGroupRow>
  </RadioGroupRoot>
)
        `}}},args:{}},J={render:()=>(0,I.jsx)(G,{groupProps:{disabled:!0,defaultValue:`a`},options:[{itemProps:{value:`a`},textProps:{children:`Option A`}},{itemProps:{value:`b`},textProps:{children:`Option B`}}]}),args:{}},Y={render:()=>(0,I.jsx)(G,{groupProps:{disabled:!0,invalid:!0,defaultValue:`a`},options:[{itemProps:{value:`a`},textProps:{children:`Option A`}},{itemProps:{value:`b`},textProps:{children:`Option B`}}]}),args:{}},pt=()=>{let[e,t]=(0,M.useState)(`1`),[n,r]=(0,M.useState)(`1`),[i,a]=(0,M.useState)(`1`),o=e=>t=>{t&&e(t)};return(0,I.jsxs)(L,{name:`A`,value:e,onChange:o(t),children:[(0,I.jsxs)(R,{style:{display:`flex`,gap:`8px`,paddingBottom:`8px`},children:[(0,I.jsx)(`div`,{children:`A:`}),(0,I.jsx)(`div`,{children:e})]}),(0,I.jsxs)(H,{name:`A`,value:`1`,children:[(0,I.jsx)(W,{}),(0,I.jsx)(U,{children:`Option A - 1`})]}),(0,I.jsxs)(`div`,{style:{padding:`16px 24px`},children:[(0,I.jsxs)(R,{style:{display:`flex`,gap:`8px`,paddingBottom:`8px`},children:[(0,I.jsx)(`div`,{children:`B:`}),(0,I.jsx)(`div`,{children:`a - `+e+` - b - `+n})]}),(0,I.jsx)(L,{name:`B`,value:n,onChange:o(r),children:(0,I.jsxs)(z,{children:[(0,I.jsxs)(H,{name:`B`,value:`1`,children:[(0,I.jsx)(W,{}),(0,I.jsx)(U,{children:`Option A - B - 1`})]}),(0,I.jsxs)(H,{name:`B`,value:`2`,children:[(0,I.jsx)(W,{}),(0,I.jsx)(U,{children:`Option A - B - 2`})]})]})})]}),(0,I.jsxs)(H,{name:`A`,value:`2`,children:[(0,I.jsx)(W,{}),(0,I.jsx)(U,{children:`Option A - 2`})]}),(0,I.jsxs)(`div`,{style:{padding:`16px 24px`},children:[(0,I.jsxs)(R,{style:{display:`flex`,gap:`8px`,paddingBottom:`8px`},children:[(0,I.jsx)(`div`,{children:`C:`}),(0,I.jsx)(`div`,{children:`a - `+e+` - c - `+i})]}),(0,I.jsx)(L,{name:`C`,value:i,onChange:o(a),children:(0,I.jsxs)(z,{children:[(0,I.jsxs)(H,{name:`C`,value:`1`,children:[(0,I.jsx)(W,{}),(0,I.jsx)(U,{children:`Option A - C - 1`})]}),(0,I.jsxs)(H,{name:`C`,value:`2`,children:[(0,I.jsx)(W,{}),(0,I.jsx)(U,{children:`Option A - C - 2`})]})]})})]})]})},X={render:()=>(0,I.jsx)(pt,{}),args:{}},mt=({title:e,description:t})=>(0,I.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`4px`},children:[e&&(0,I.jsx)(U,{style:{fontSize:`16px`,lineHeight:`24px`,color:`#1D293D`},children:e}),t&&(0,I.jsx)(U,{style:{fontSize:`14px`,lineHeight:`20px`,color:`#90A1B9`},children:t})]}),ht=()=>{let[e,t]=(0,M.useState)(`a`);return(0,I.jsx)(L,{name:`custom-control`,defaultValue:e,onChange:e=>t(e||`a`),children:(0,I.jsxs)(z,{children:[(0,I.jsxs)(H,{value:`a`,children:[(0,I.jsx)(W,{}),(0,I.jsx)(mt,{title:`Accept terms and conditions A`,description:`You agree to our Terms of Service and Privacy Policy.`})]}),(0,I.jsxs)(H,{value:`b`,children:[(0,I.jsx)(W,{}),(0,I.jsx)(mt,{title:`Accept terms and conditions B`,description:`You agree to our Terms of Service and Privacy Policy.`})]}),(0,I.jsxs)(H,{value:`c`,children:[(0,I.jsx)(W,{}),(0,I.jsx)(mt,{title:`Accept terms and conditions C`,description:`You agree to our Terms of Service and Privacy Policy.`})]})]})})},Z={render:()=>(0,I.jsx)(ht,{}),args:{}};function gt(){return(0,I.jsx)(L,{name:`button-radio`,defaultValue:`a`,children:(0,I.jsxs)(z,{children:[(0,I.jsx)(H,{value:`a`,variant:`outlined`,children:`Selected A`}),(0,I.jsx)(H,{value:`b`,variant:`outlined`,children:`Selected B`})]})})}const Q={render:()=>(0,I.jsx)(gt,{}),args:{}},_t=({checked:e})=>({display:`flex`,alignItems:`center`,gap:`16px`,background:`transparent`,color:`var(--radio-color-default)`,border:`1px solid`,borderColor:e?`var(--radio-color-selected)`:`var(--radio-color-default)`,padding:`12px 16px`,borderRadius:`8px`,cursor:`pointer`});function vt(){return(0,I.jsx)(L,{name:`button-radio`,defaultValue:`a`,children:(0,I.jsxs)(z,{children:[(0,I.jsx)(H,{value:`a`,render:({checked:e})=>(0,I.jsxs)(`div`,{style:_t({checked:e}),children:[(0,I.jsx)(U,{children:`Selected A`}),(0,I.jsx)(W,{})]})}),(0,I.jsx)(H,{value:`b`,render:({checked:e})=>(0,I.jsxs)(`div`,{style:_t({checked:e}),children:[(0,I.jsx)(U,{children:`Selected B`}),(0,I.jsx)(W,{})]})})]})})}const $={render:()=>(0,I.jsx)(vt,{}),args:{}};K.parameters={...K.parameters,docs:{...(de=K.parameters)?.docs,source:{originalSource:`{
  render: (args: object) => <RadioExample {...args as RadioExampleProps} />
}`,...(g=K.parameters)==null||(g=g.docs)==null?void 0:g.source}}},q.parameters={...q.parameters,docs:{...(fe=q.parameters)?.docs,source:{originalSource:`{
  render: () => <RadioExample groupProps={{
    invalid: true,
    defaultValue: 'a'
  }} options={[{
    itemProps: {
      value: 'a'
    },
    textProps: {
      children: 'Option A'
    }
  }, {
    itemProps: {
      value: 'b'
    },
    textProps: {
      children: 'Option B'
    }
  }, {
    itemProps: {
      value: 'c'
    },
    textProps: {
      children: 'Option C'
    }
  }]} />,
  parameters: {
    docs: {
      description: {
        story: 'An invalid radio group indicates an error state, typically used in forms.'
      },
      source: {
        code: \`
const options = [
  {
    value: 'a',
    label: 'Option A',
  },
  {
    value: 'b',
    label: 'Option B',
  },
  {
    value: 'c',
    label: 'Option C',
  },
]
const Example = () => (
  <RadioGroupRoot>
    <RadioGroupRow>
      {options.map(({ value, label }) => (
        <RadioItem key={value} value={value}>
          <RadioItemControlBox />
          <RadioItemText>{label}</RadioItemText>
        </RadioItem>
      ))}
    </RadioGroupRow>
  </RadioGroupRoot>
)
        \`
      }
    }
  },
  args: {}
}`,...(_=q.parameters)==null||(_=_.docs)==null?void 0:_.source}}},J.parameters={...J.parameters,docs:{...(pe=J.parameters)?.docs,source:{originalSource:`{
  render: () => <RadioExample groupProps={{
    disabled: true,
    defaultValue: 'a'
  }} options={[{
    itemProps: {
      value: 'a'
    },
    textProps: {
      children: 'Option A'
    }
  }, {
    itemProps: {
      value: 'b'
    },
    textProps: {
      children: 'Option B'
    }
  }]} />,
  args: {}
}`,...(v=J.parameters)==null||(v=v.docs)==null?void 0:v.source}}},Y.parameters={...Y.parameters,docs:{...(me=Y.parameters)?.docs,source:{originalSource:`{
  render: () => <RadioExample groupProps={{
    disabled: true,
    invalid: true,
    defaultValue: 'a'
  }} options={[{
    itemProps: {
      value: 'a'
    },
    textProps: {
      children: 'Option A'
    }
  }, {
    itemProps: {
      value: 'b'
    },
    textProps: {
      children: 'Option B'
    }
  }]} />,
  args: {}
}`,...(y=Y.parameters)==null||(y=y.docs)==null?void 0:y.source}}},X.parameters={...X.parameters,docs:{...(he=X.parameters)?.docs,source:{originalSource:`{
  render: () => <NestedGroupExample />,
  args: {}
}`,...(b=X.parameters)==null||(b=b.docs)==null?void 0:b.source}}},Z.parameters={...Z.parameters,docs:{...(ge=Z.parameters)?.docs,source:{originalSource:`{
  render: () => <CustomExample />,
  args: {}
}`,...(x=Z.parameters)==null||(x=x.docs)==null?void 0:x.source}}},Q.parameters={...Q.parameters,docs:{...(_e=Q.parameters)?.docs,source:{originalSource:`{
  render: () => <ButtonRadioExample />,
  args: {}
}`,...(S=Q.parameters)==null||(S=S.docs)==null?void 0:S.source}}},$.parameters={...$.parameters,docs:{...(ve=$.parameters)?.docs,source:{originalSource:`{
  render: () => <CustomButtonRadioExample />,
  args: {}
}`,...(C=$.parameters)==null||(C=C.docs)==null?void 0:C.source}}};const yt=[`Base`,`Invalid`,`Disabled`,`InvalidDisabled`,`NestedGroup`,`CustomRadio`,`ButtonRadio`,`CustomButtonRadio`];export{K as Base,Q as ButtonRadio,$ as CustomButtonRadio,Z as CustomRadio,J as Disabled,q as Invalid,Y as InvalidDisabled,X as NestedGroup,yt as __namedExportsOrder,ft as default};