import{__toESM as e,require_react as t}from"./iframe-DtrdFlbQ.js";import{require_jsx_runtime as n}from"./jsx-runtime-B3cA1AA9.js";import"./react-dom-Br5RGlWS.js";import{sva as r}from"./css-IySnOQH9.js";/* empty css               */import{createAnatomy as i,createGuards as a,createMachine as o,createProps as s,createSplitProps as c,dataAttr as l,dispatchInputCheckedEvent as u,isLeftClick as d,isSafari as f,isString as p,mergeProps as m,normalizeProps as ee,queryAll as h,trackElementRect as te,trackFormControl as ne,useMachine as re,visuallyHiddenStyle as ie}from"./dist-D4mcTejo.js";import{isFocusVisible as ae,trackFocusVisible as oe}from"./dist-sxB4PUzF.js";import{defineArgs as se}from"./defineMeta-Dm8JdBon.js";var ce,g,le,_,ue,v,de,y,fe,b,pe,x,me,S,he,C,ge=i(`radio-group`).parts(`root`,`label`,`item`,`itemText`,`itemControl`,`indicator`),w=ge.build(),T=e=>{var t;return(t=e.ids)?.root??`radio-group:${e.id}`},_e=e=>{var t;return(t=e.ids)?.label??`radio-group:${e.id}:label`},ve=(e,t)=>{var n,r;return((n=e.ids)==null||(r=n.item)==null?void 0:r.call(n,t))??`radio-group:${e.id}:radio:${t}`},E=(e,t)=>{var n,r;return((n=e.ids)==null||(r=n.itemHiddenInput)==null?void 0:r.call(n,t))??`radio-group:${e.id}:radio:input:${t}`},ye=(e,t)=>{var n,r;return((n=e.ids)==null||(r=n.itemControl)==null?void 0:r.call(n,t))??`radio-group:${e.id}:radio:control:${t}`},be=(e,t)=>{var n,r;return((n=e.ids)==null||(r=n.itemLabel)==null?void 0:r.call(n,t))??`radio-group:${e.id}:radio:label:${t}`},xe=e=>{var t;return(t=e.ids)?.indicator??`radio-group:${e.id}:indicator`},D=e=>e.getById(T(e)),Se=(e,t)=>e.getById(E(e,t)),Ce=e=>e.getById(xe(e)),we=e=>{var t;return(t=D(e))?.querySelector(`input:not(:disabled)`)},Te=e=>{var t;return(t=D(e))?.querySelector(`input:not(:disabled):checked`)},Ee=e=>{let t=CSS.escape(T(e)),n=`input[type=radio][data-ownedby='${t}']:not([disabled])`;return h(D(e),n)},De=(e,t)=>{if(t)return e.getById(ve(e,t))},Oe=e=>({left:e?.offsetLeft??0,top:e?.offsetTop??0,width:e?.offsetWidth??0,height:e?.offsetHeight??0}),ke=e=>({width:`${e.width}px`,height:`${e.height}px`,left:`${e.left}px`,top:`${e.top}px`});function Ae(e,t){let{context:n,send:r,computed:i,prop:a,scope:o}=e,s=i(`isDisabled`),c=a(`readOnly`);function u(e){let t=n.get(`focusedValue`)===e.value,r=t&&ae();return{value:e.value,invalid:!!e.invalid,disabled:!!e.disabled||s,checked:n.get(`value`)===e.value,focused:t,focusVisible:r,hovered:n.get(`hoveredValue`)===e.value,active:n.get(`activeValue`)===e.value}}function p(e){let t=u(e);return{"data-focus":l(t.focused),"data-focus-visible":l(t.focusVisible),"data-disabled":l(t.disabled),"data-readonly":l(c),"data-state":t.checked?`checked`:`unchecked`,"data-hover":l(t.hovered),"data-invalid":l(t.invalid),"data-orientation":a(`orientation`),"data-ssr":l(n.get(`ssr`))}}let m=()=>{let e=Te(o)??we(o);e?.focus()};return{focus:m,value:n.get(`value`),setValue(e){r({type:`SET_VALUE`,value:e,isTrusted:!1})},clearValue(){r({type:`SET_VALUE`,value:null,isTrusted:!1})},getRootProps(){return t.element({...w.root.attrs,role:`radiogroup`,id:T(o),"aria-labelledby":_e(o),"data-orientation":a(`orientation`),"data-disabled":l(s),"aria-orientation":a(`orientation`),dir:a(`dir`),style:{position:`relative`}})},getLabelProps(){return t.element({...w.label.attrs,dir:a(`dir`),"data-orientation":a(`orientation`),"data-disabled":l(s),id:_e(o),onClick:m})},getItemState:u,getItemProps(e){let n=u(e);return t.label({...w.item.attrs,dir:a(`dir`),id:ve(o,e.value),htmlFor:E(o,e.value),...p(e),onPointerMove(){n.disabled||n.hovered||r({type:`SET_HOVERED`,value:e.value,hovered:!0})},onPointerLeave(){n.disabled||r({type:`SET_HOVERED`,value:null})},onPointerDown(t){n.disabled||d(t)&&(n.focused&&t.pointerType===`mouse`&&t.preventDefault(),r({type:`SET_ACTIVE`,value:e.value,active:!0}))},onPointerUp(){n.disabled||r({type:`SET_ACTIVE`,value:null})},onClick(){var t;!n.disabled&&f()&&(t=Se(o,e.value))?.focus()}})},getItemTextProps(e){return t.element({...w.itemText.attrs,dir:a(`dir`),id:be(o,e.value),...p(e)})},getItemControlProps(e){let n=u(e);return t.element({...w.itemControl.attrs,dir:a(`dir`),id:ye(o,e.value),"data-active":l(n.active),"aria-hidden":!0,...p(e)})},getItemHiddenInputProps(e){let n=u(e);return t.input({"data-ownedby":T(o),id:E(o,e.value),type:`radio`,name:a(`name`)||a(`id`),form:a(`form`),value:e.value,onClick(t){if(c){t.preventDefault();return}t.currentTarget.checked&&r({type:`SET_VALUE`,value:e.value,isTrusted:!0})},onBlur(){r({type:`SET_FOCUSED`,value:null,focused:!1})},onFocus(){r({type:`SET_FOCUSED`,value:e.value,focused:!0})},onKeyDown(t){t.defaultPrevented||t.key===` `&&r({type:`SET_ACTIVE`,value:e.value,active:!0})},onKeyUp(e){e.defaultPrevented||e.key===` `&&r({type:`SET_ACTIVE`,value:null})},disabled:n.disabled,defaultChecked:n.checked,style:ie})},getIndicatorProps(){let e=n.get(`indicatorRect`);return t.element({id:xe(o),...w.indicator.attrs,dir:a(`dir`),hidden:n.get(`value`)==null,"data-disabled":l(s),"data-orientation":a(`orientation`),style:{"--transition-property":`left, top, width, height`,"--left":e?.left,"--top":e?.top,"--width":e?.width,"--height":e?.height,position:`absolute`,willChange:`var(--transition-property)`,transitionProperty:`var(--transition-property)`,transitionDuration:n.get(`canIndicatorTransition`)?`var(--transition-duration, 150ms)`:`0ms`,transitionTimingFunction:`var(--transition-timing-function)`,[a(`orientation`)===`horizontal`?`left`:`top`]:a(`orientation`)===`horizontal`?`var(--left)`:`var(--top)`}})}}}var{not:je}=a(),Me=o({props({props:e}){return{orientation:`vertical`,...e}},initialState(){return`idle`},context({prop:e,bindable:t}){return{value:t(()=>({defaultValue:e(`defaultValue`),value:e(`value`),onChange(t){var n;(n=e(`onValueChange`))?.({value:t})}})),activeValue:t(()=>({defaultValue:null})),focusedValue:t(()=>({defaultValue:null})),hoveredValue:t(()=>({defaultValue:null})),indicatorRect:t(()=>({defaultValue:{}})),canIndicatorTransition:t(()=>({defaultValue:!1})),fieldsetDisabled:t(()=>({defaultValue:!1})),ssr:t(()=>({defaultValue:!0}))}},refs(){return{indicatorCleanup:null}},computed:{isDisabled:({prop:e,context:t})=>!!e(`disabled`)||t.get(`fieldsetDisabled`)},entry:[`syncIndicatorRect`,`syncSsr`],exit:[`cleanupObserver`],effects:[`trackFormControlState`,`trackFocusVisible`],watch({track:e,action:t,context:n}){e([()=>n.get(`value`)],()=>{t([`setIndicatorTransition`,`syncIndicatorRect`,`syncInputElements`])})},on:{SET_VALUE:[{guard:je(`isTrusted`),actions:[`setValue`,`dispatchChangeEvent`]},{actions:[`setValue`]}],SET_HOVERED:{actions:[`setHovered`]},SET_ACTIVE:{actions:[`setActive`]},SET_FOCUSED:{actions:[`setFocused`]}},states:{idle:{}},implementations:{guards:{isTrusted:({event:e})=>!!e.isTrusted},effects:{trackFormControlState({context:e,scope:t}){return ne(D(t),{onFieldsetDisabledChange(t){e.set(`fieldsetDisabled`,t)},onFormReset(){e.set(`value`,e.initial(`value`))}})},trackFocusVisible({scope:e}){var t;return oe({root:(t=e.getRootNode)?.call(e)})}},actions:{setValue({context:e,event:t}){e.set(`value`,t.value)},setHovered({context:e,event:t}){e.set(`hoveredValue`,t.value)},setActive({context:e,event:t}){e.set(`activeValue`,t.value)},setFocused({context:e,event:t}){e.set(`focusedValue`,t.value)},syncInputElements({context:e,scope:t}){let n=Ee(t);n.forEach(t=>{t.checked=t.value===e.get(`value`)})},setIndicatorTransition({context:e}){e.set(`canIndicatorTransition`,p(e.get(`value`)))},cleanupObserver({refs:e}){var t;(t=e.get(`indicatorCleanup`))?.()},syncSsr({context:e}){e.set(`ssr`,!1)},syncIndicatorRect({context:e,scope:t,refs:n}){var r;if((r=n.get(`indicatorCleanup`))?.(),!Ce(t))return;let i=e.get(`value`),a=De(t,i);if(i==null||!a){e.set(`canIndicatorTransition`,!1),e.set(`indicatorRect`,{});return}let o=te([a],{measure(e){return Oe(e)},onEntry({rects:t}){e.set(`indicatorRect`,ke(t[0]))}});n.set(`indicatorCleanup`,o)},dispatchChangeEvent({context:e,scope:t}){let n=Ee(t);n.forEach(t=>{let n=t.value===e.get(`value`);n!==t.checked&&u(t,{checked:n})})}}}}),Ne=s()([`dir`,`disabled`,`form`,`getRootNode`,`id`,`ids`,`name`,`onValueChange`,`orientation`,`readOnly`,`value`,`defaultValue`]),Pe=c(Ne),Fe=s()([`value`,`disabled`,`invalid`]),Ie=c(Fe);const O=r({slots:[`root`,`row`,`label`],base:{root:{},row:{display:`flex`,gap:`{spacing.2}`},label:{}},variants:{orientation:{horizontal:{row:{'&[data-part="root"]':{flexDirection:`row`}}},vertical:{row:{'&[data-part="root"]':{flexDirection:`column`}}}}}}),Le=e=>{let t=O.getVariantProps(e),n=O(t);return n},Re=O.variantMap;var k=e(t());const A=(0,k.createContext)({}),j=e=>{let t=(0,k.useContext)(A);if(!t)throw Error(`RadioGroupContext is not provided. Please wrap your component with RadioGroupRootProvider.`);let n=t[e];if(!n)throw Error(`RadioGroupContext does not have an API for name: ${e}`);return n},M=(0,k.createContext)(null);function N(){let e=(0,k.useContext)(M);if(!e)throw Error(`RadioItemContext is not provided. Please wrap your component with RadioItemProvider.`);return e}try{A.displayName=`RadioGroupContext`,A.__docgenInfo={description:``,displayName:`RadioGroupContext`,props:{}}}catch{}try{j.displayName=`useRadioGroupContext`,j.__docgenInfo={description:``,displayName:`useRadioGroupContext`,props:{}}}catch{}try{M.displayName=`RadioItemContext`,M.__docgenInfo={description:``,displayName:`RadioItemContext`,props:{}}}catch{}const P=r({slots:[`item`,`itemControl`,`input`,`itemText`],base:{item:{display:`flex`,alignItems:`center`,gap:`{spacing.2}`,cursor:`pointer`,fontSize:`{fontSizes.md}`,userSelect:`none`,transition:`background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease`},itemText:{},itemControl:{width:`{spacing.4}`,height:`{spacing.4}`,flexShrink:0,borderRadius:`{radii.full}`,borderWidth:`2px`,borderStyle:`solid`,borderColor:`{colors.radioGroup.default}`,padding:`2px`,backgroundColor:`transparent`,display:`flex`,alignItems:`center`,justifyContent:`center`,transition:`border-color 0.2s ease`,_after:{content:`""`,display:`block`,width:`100%`,height:`100%`,borderRadius:`{radii.full}`,backgroundColor:`{colors.radioGroup.selected}`,transform:`scale(0)`,transition:`transform 0.2s ease, background-color 0.2s ease`},"&[data-disabled]":{cursor:`not-allowed`,borderColor:`{colors.radioGroup.disabled}`},'&[data-state="checked"]':{borderColor:`{colors.radioGroup.selected}`,_after:{transform:`scale(1)`}},'&[data-state="checked"][data-disabled]':{borderColor:`{colors.radioGroup.selectedDisabled}`,_after:{backgroundColor:`{colors.radioGroup.selectedDisabled}`}},"&[data-invalid]":{borderColor:`{colors.radioGroup.invalid}`},'&[data-invalid][data-state="checked"]':{borderColor:`{colors.radioGroup.invalid}`,_after:{backgroundColor:`{colors.radioGroup.invalid}`}},"&[data-invalid][data-disabled]":{borderColor:`{colors.radioGroup.selectedInvalidDisabled}`},'&[data-invalid][data-state="checked"][data-disabled]':{borderColor:`{colors.radioGroup.selectedInvalidDisabled}`,_after:{backgroundColor:`{colors.radioGroup.selectedInvalidDisabled}`}}},input:{}},variants:{theme:{primary:{},secondary:{},primaryBlue:{}},variant:{label:{item:{fontWeight:`400`,border:`none`,backgroundColor:`transparent`,color:`{colors.radioGroup.default}`,_hover:{color:`{colors.radioGroup.hover}`},_active:{color:`{colors.radioGroup.active}`},_disabled:{color:`{colors.radioGroup.disabled}`}}},outlined:{item:{border:`1px solid {colors.radioGroup.default}`,backgroundColor:`transparent`,color:`{colors.radioGroup.default}`,_hover:{borderColor:`{colors.radioGroup.hover}`,color:`{colors.radioGroup.hover}`},_active:{borderColor:`{colors.radioGroup.active}`,color:`{colors.radioGroup.active}`},'&[data-state="checked"]':{borderColor:`{colors.radioGroup.selected}`,backgroundColor:`{colors.radioGroup.selected}`,color:`{colors.radioGroup.inverse}`,_hover:{borderColor:`{colors.radioGroup.selected}`,backgroundColor:`{colors.radioGroup.selected}`,color:`{colors.radioGroup.inverse}`},_active:{borderColor:`{colors.radioGroup.selected}`,backgroundColor:`{colors.radioGroup.selected}`,color:`{colors.radioGroup.inverse}`}},"&[data-invalid]":{},'&[data-invalid][data-state="checked"]':{},"&[data-disabled]":{},'&[data-disabled][data-state="checked"]':{borderColor:`{colors.radioGroup.selectedDisabled}`,backgroundColor:`{colors.radioGroup.selectedDisabled}`,color:`{colors.radioGroup.disabledInverse}`},"&[data-disabled][data-invalid]":{},'&[data-invalid][data-state="checked"][data-disabled]':{borderColor:`{colors.radioGroup.selectedInvalidDisabled}`,backgroundColor:`{colors.radioGroup.selectedInvalidDisabled}`,color:`{colors.radioGroup.disabledInverse}`}}}},size:{small:{item:{fontSize:`sm`}},medium:{item:{fontSize:`md`}},large:{item:{fontSize:`lg`}}},shape:{rounded:{item:{borderRadius:`md`}},square:{item:{borderRadius:`none`}},pill:{item:{borderRadius:`full`}},icon:{item:{borderRadius:`50%`}}}},defaultVariants:{variant:`label`,theme:`primary`,size:`medium`,shape:`rounded`},compoundVariants:[{variant:`outlined`,size:`small`,css:{item:{py:`{spacing.2}`,px:`{spacing.3}`,gap:`10px`}}},{variant:`outlined`,size:`medium`,css:{item:{py:`{spacing.3}`,px:`{spacing.4}`,gap:`10px`}}},{variant:`outlined`,size:`large`,css:{item:{py:`{spacing.4}`,px:`{spacing.5}`,gap:`10px`}}},{shape:`icon`,css:{item:{minWidth:`0`,fontSize:`xl`}}},{shape:`icon`,variant:`outlined`,css:{item:{padding:`16px`}}},{shape:`icon`,variant:`label`,css:{item:{padding:`0`}}}]}),ze=e=>{let t=P.getVariantProps(e);return P(t)},F=P.variantMap;var I=e(n());function Be({children:e,value:t}){return(0,I.jsx)(M.Provider,{value:t,children:e})}function L({...e}){let{styles:t,api:n,item:r}=N();return(0,I.jsx)(`input`,{...m(n.getItemHiddenInputProps(r),e,{className:t.input})})}function R({value:e,invalid:t,disabled:n,children:r,render:i,inputProps:a,variant:o,theme:s,shape:c,size:l,...u}){let{api:d,invalid:f}=j(u.name||`default`),p={value:e,invalid:f||t,disabled:n},ee={...d.getItemState(p)},h=ze({variant:o,theme:s,shape:c,size:l});return(0,I.jsx)(Be,{value:{api:d,item:p,styles:h},children:(0,I.jsxs)(`label`,{...m(d.getItemProps(p),u,{className:h.item}),children:[(0,I.jsx)(L,{...a}),i?i(ee):r]})})}function z({children:e,...t}){let{styles:n,api:r,item:i}=N();return(0,I.jsx)(`span`,{...m(r.getItemTextProps(i),t,{className:n.itemText}),children:e})}function B({...e}){let{styles:t,api:n,item:r}=N();return(0,I.jsx)(`div`,{...m(n.getItemControlProps(r),e,{className:t.itemControl})})}try{L.displayName=`RadioItemHiddenControl`,L.__docgenInfo={description:``,displayName:`RadioItemHiddenControl`,props:{}}}catch{}try{R.displayName=`RadioItem`,R.__docgenInfo={description:``,displayName:`RadioItem`,props:{name:{defaultValue:null,description:``,name:`name`,required:!1,type:{name:`string`}},value:{defaultValue:null,description:``,name:`value`,required:!0,type:{name:`string`}},invalid:{defaultValue:null,description:``,name:`invalid`,required:!1,type:{name:`boolean`}},disabled:{defaultValue:null,description:``,name:`disabled`,required:!1,type:{name:`boolean`}},render:{defaultValue:null,description:``,name:`render`,required:!1,type:{name:`((params: RadioRenderParams) => ReactNode)`}},inputProps:{defaultValue:null,description:``,name:`inputProps`,required:!1,type:{name:`Omit<InputHTMLAttributes<HTMLInputElement>, ExcludeAttributes>`}},variant:{defaultValue:null,description:``,name:`variant`,required:!1,type:{name:`enum`,value:[{value:`"label"`},{value:`"outlined"`}]}},theme:{defaultValue:null,description:``,name:`theme`,required:!1,type:{name:`enum`,value:[{value:`"primary"`},{value:`"secondary"`},{value:`"primaryBlue"`}]}},shape:{defaultValue:null,description:``,name:`shape`,required:!1,type:{name:`enum`,value:[{value:`"rounded"`},{value:`"square"`},{value:`"pill"`},{value:`"icon"`}]}},size:{defaultValue:null,description:``,name:`size`,required:!1,type:{name:`enum`,value:[{value:`"medium"`},{value:`"small"`},{value:`"large"`}]}}}}}catch{}try{z.displayName=`RadioItemText`,z.__docgenInfo={description:``,displayName:`RadioItemText`,props:{}}}catch{}try{B.displayName=`RadioItemControlBox`,B.__docgenInfo={description:``,displayName:`RadioItemControlBox`,props:{}}}catch{}function Ve({children:e,name:t,value:n}){let r=(0,k.useContext)(A),i={...r||{},[t]:n,default:n};return(0,I.jsx)(A.Provider,{value:i,children:e})}function V({id:e,name:t,onChange:n,invalid:r,children:i,...a}){let o=(0,k.useId)(),s=e||o,c=t||s,l=re(Me,{id:s,onValueChange:({value:e})=>n?.(e),name:c,...a}),u=Ae(l,ee),d=Le({orientation:a.orientation}),f={styles:d,invalid:r,api:u};return(0,I.jsx)(Ve,{name:c,value:f,children:i})}function H({children:e,...t}){let{styles:n,api:r}=j(`default`);return(0,I.jsx)(`div`,{...m(r.getLabelProps(),t,{className:n.label}),children:e})}function U({children:e,name:t,...n}){let{styles:r,api:i}=j(t||`default`);return(0,I.jsx)(`div`,{...m(i.getRootProps(),n,{className:r.row}),children:e})}const W=({options:e=[],labelNode:t,...n})=>(0,I.jsxs)(V,{...n,children:[t&&(0,I.jsx)(H,{...n.labelProps,children:t}),(0,I.jsx)(U,{...n.rowProps,children:e.map(({key:e,value:t,textNode:n,itemControlBoxProps:r,itemTextProps:i,...a})=>(0,I.jsxs)(R,{value:t,...a,children:[(0,I.jsx)(B,{...r}),(0,I.jsx)(z,{...i,children:n||t})]},e||t))})]});W.Root=V,W.Label=H,W.Row=U,W.Item=R,W.ItemControlBox=B,W.ItemText=z,W.ItemHiddenControl=L;try{V.displayName=`RadioGroupRoot`,V.__docgenInfo={description:``,displayName:`RadioGroupRoot`,props:{id:{defaultValue:null,description:``,name:`id`,required:!1,type:{name:`string`}},name:{defaultValue:null,description:``,name:`name`,required:!1,type:{name:`string`}},defaultValue:{defaultValue:null,description:``,name:`defaultValue`,required:!1,type:{name:`string | null`}},onChange:{defaultValue:null,description:``,name:`onChange`,required:!1,type:{name:`((value: string | null) => void)`}},disabled:{defaultValue:null,description:``,name:`disabled`,required:!1,type:{name:`boolean`}},invalid:{defaultValue:null,description:``,name:`invalid`,required:!1,type:{name:`boolean`}},dir:{defaultValue:null,description:``,name:`dir`,required:!1,type:{name:`enum`,value:[{value:`"ltr"`},{value:`"rtl"`}]}},form:{defaultValue:null,description:``,name:`form`,required:!1,type:{name:`string`}},orientation:{defaultValue:null,description:``,name:`orientation`,required:!1,type:{name:`enum`,value:[{value:`"horizontal"`},{value:`"vertical"`}]}},readOnly:{defaultValue:null,description:``,name:`readOnly`,required:!1,type:{name:`boolean`}},value:{defaultValue:null,description:``,name:`value`,required:!1,type:{name:`string | null`}}}}}catch{}try{H.displayName=`RadioGroupLabel`,H.__docgenInfo={description:``,displayName:`RadioGroupLabel`,props:{}}}catch{}try{U.displayName=`RadioGroupRow`,U.__docgenInfo={description:``,displayName:`RadioGroupRow`,props:{name:{defaultValue:null,description:``,name:`name`,required:!1,type:{name:`string`}}}}}catch{}try{W.displayName=`RadioGroup`,W.__docgenInfo={description:``,displayName:`RadioGroup`,props:{options:{defaultValue:{value:`[]`},description:``,name:`options`,required:!1,type:{name:`RadioGroupItemOptions[]`}},labelNode:{defaultValue:null,description:``,name:`labelNode`,required:!1,type:{name:`ReactNode`}},labelProps:{defaultValue:null,description:``,name:`labelProps`,required:!1,type:{name:`Omit<RadioGroupLabelProps, "children">`}},rowProps:{defaultValue:null,description:``,name:`rowProps`,required:!1,type:{name:`Omit<RadioGroupRowProps, "children">`}},disabled:{defaultValue:null,description:``,name:`disabled`,required:!1,type:{name:`boolean`}},form:{defaultValue:null,description:``,name:`form`,required:!1,type:{name:`string`}},name:{defaultValue:null,description:``,name:`name`,required:!1,type:{name:`string`}},readOnly:{defaultValue:null,description:``,name:`readOnly`,required:!1,type:{name:`boolean`}},value:{defaultValue:null,description:``,name:`value`,required:!1,type:{name:`string | null`}},onChange:{defaultValue:null,description:``,name:`onChange`,required:!1,type:{name:`((value: string | null) => void)`}},defaultValue:{defaultValue:null,description:``,name:`defaultValue`,required:!1,type:{name:`string | null`}},dir:{defaultValue:null,description:``,name:`dir`,required:!1,type:{name:`enum`,value:[{value:`"ltr"`},{value:`"rtl"`}]}},id:{defaultValue:null,description:``,name:`id`,required:!1,type:{name:`string`}},invalid:{defaultValue:null,description:``,name:`invalid`,required:!1,type:{name:`boolean`}},orientation:{defaultValue:null,description:``,name:`orientation`,required:!1,type:{name:`enum`,value:[{value:`"horizontal"`},{value:`"vertical"`}]}}}}}catch{}try{W.Root.displayName=`RadioGroup.Root`,W.Root.__docgenInfo={description:``,displayName:`RadioGroup.Root`,props:{id:{defaultValue:null,description:``,name:`id`,required:!1,type:{name:`string`}},name:{defaultValue:null,description:``,name:`name`,required:!1,type:{name:`string`}},defaultValue:{defaultValue:null,description:``,name:`defaultValue`,required:!1,type:{name:`string | null`}},onChange:{defaultValue:null,description:``,name:`onChange`,required:!1,type:{name:`((value: string | null) => void)`}},disabled:{defaultValue:null,description:``,name:`disabled`,required:!1,type:{name:`boolean`}},invalid:{defaultValue:null,description:``,name:`invalid`,required:!1,type:{name:`boolean`}},dir:{defaultValue:null,description:``,name:`dir`,required:!1,type:{name:`enum`,value:[{value:`"ltr"`},{value:`"rtl"`}]}},form:{defaultValue:null,description:``,name:`form`,required:!1,type:{name:`string`}},orientation:{defaultValue:null,description:``,name:`orientation`,required:!1,type:{name:`enum`,value:[{value:`"horizontal"`},{value:`"vertical"`}]}},readOnly:{defaultValue:null,description:``,name:`readOnly`,required:!1,type:{name:`boolean`}},value:{defaultValue:null,description:``,name:`value`,required:!1,type:{name:`string | null`}}}}}catch{}try{W.Label.displayName=`RadioGroup.Label`,W.Label.__docgenInfo={description:``,displayName:`RadioGroup.Label`,props:{}}}catch{}try{W.Row.displayName=`RadioGroup.Row`,W.Row.__docgenInfo={description:``,displayName:`RadioGroup.Row`,props:{name:{defaultValue:null,description:``,name:`name`,required:!1,type:{name:`string`}}}}}catch{}try{W.Item.displayName=`RadioGroup.Item`,W.Item.__docgenInfo={description:``,displayName:`RadioGroup.Item`,props:{name:{defaultValue:null,description:``,name:`name`,required:!1,type:{name:`string`}},value:{defaultValue:null,description:``,name:`value`,required:!0,type:{name:`string`}},invalid:{defaultValue:null,description:``,name:`invalid`,required:!1,type:{name:`boolean`}},disabled:{defaultValue:null,description:``,name:`disabled`,required:!1,type:{name:`boolean`}},render:{defaultValue:null,description:``,name:`render`,required:!1,type:{name:`((params: RadioRenderParams) => ReactNode)`}},inputProps:{defaultValue:null,description:``,name:`inputProps`,required:!1,type:{name:`Omit<InputHTMLAttributes<HTMLInputElement>, ExcludeAttributes>`}},variant:{defaultValue:null,description:``,name:`variant`,required:!1,type:{name:`enum`,value:[{value:`"label"`},{value:`"outlined"`}]}},theme:{defaultValue:null,description:``,name:`theme`,required:!1,type:{name:`enum`,value:[{value:`"primary"`},{value:`"secondary"`},{value:`"primaryBlue"`}]}},shape:{defaultValue:null,description:``,name:`shape`,required:!1,type:{name:`enum`,value:[{value:`"rounded"`},{value:`"square"`},{value:`"pill"`},{value:`"icon"`}]}},size:{defaultValue:null,description:``,name:`size`,required:!1,type:{name:`enum`,value:[{value:`"medium"`},{value:`"small"`},{value:`"large"`}]}}}}}catch{}try{W.ItemControlBox.displayName=`RadioGroup.ItemControlBox`,W.ItemControlBox.__docgenInfo={description:``,displayName:`RadioGroup.ItemControlBox`,props:{}}}catch{}try{W.ItemText.displayName=`RadioGroup.ItemText`,W.ItemText.__docgenInfo={description:``,displayName:`RadioGroup.ItemText`,props:{}}}catch{}try{W.ItemHiddenControl.displayName=`RadioGroup.ItemHiddenControl`,W.ItemHiddenControl.__docgenInfo={description:``,displayName:`RadioGroup.ItemHiddenControl`,props:{}}}catch{}const He={title:`Example/RadioGroup`,parameters:{layout:`centered`,docs:{description:{component:`A radio group component that allows users to select one option from a set.`}}},tags:[`autodocs`],argTypes:{options:{control:`object`,description:"Array of options for the radio group. Each option should have a `value` and `textNode`.",table:{type:{summary:`RadioGroupItemOptions[]`,detail:`
interface RadioGroupItemOptions extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string
  name?: string
  invalid?: boolean
  disabled?: boolean
  render?: (params: RadioRenderParams) => React.ReactNode
  inputProps?: Omit<React.InputHTMLAttributes<HTMLInputElement>, 'name' | 'value' | 'type' | 'checked' | 'disabled' | 'id' | 'readOnly'>
  variant?: VariantProps['variant']
  theme?: ${F.theme.map(e=>`"${e}"`).join(` | `)}
  shape?: ${F.shape.map(e=>`"${e}"`).join(` | `)}
  size?: ${F.size.map(e=>`"${e}"`).join(` | `)}
  key?: string
  textNode?: React.ReactNode
  children?: React.ReactNode
  itemControlBoxProps?: RadioItemControlBoxProps
  itemTextProps?: RadioItemTextProps
}
          `},defaultValue:{summary:`[]`}}},...se({Root:{value:{control:`text`,description:`The value of the radio group.`,table:{type:{summary:`string | null`},defaultValue:{summary:`null`},subcategory:`RadioGroup`}},name:{control:`text`,description:`The name of the radio group.`,table:{type:{summary:`string`},defaultValue:{summary:`{REACT_UUID}`},subcategory:`RadioGroup`}},defaultValue:{control:`text`,description:`The default value of the radio group.`,table:{type:{summary:`string | null`},defaultValue:{summary:`null`},subcategory:`RadioGroup`}},onChange:{description:`Callback function called when the radio group value changes.`,table:{type:{summary:`(value: string | null) => void`},subcategory:`RadioGroup`}},disabled:{control:`boolean`,description:`Whether the radio group is disabled.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`},subcategory:`RadioGroup`}},invalid:{control:`boolean`,description:`Whether the radio group is invalid.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`},subcategory:`RadioGroup`}},dir:{control:`select`,options:[`ltr`,`rtl`],description:`The text direction of the radio group.`,table:{type:{summary:`"ltr" | "rtl"`},defaultValue:{summary:`ltr`},subcategory:`RadioGroup`}},form:{control:`text`,description:`The form element the radio group belongs to.`,table:{type:{summary:`string`},defaultValue:{summary:`null`},subcategory:`RadioGroup`}},orientation:{control:`select`,options:Re.orientation,description:`The orientation of the radio group.`,table:{type:{summary:Re.orientation.map(e=>`"${e}"`).join(` | `)},defaultValue:{summary:`vertical`},subcategory:`RadioGroup`}},readOnly:{control:`boolean`,description:`Whether the radio group is read-only.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`},subcategory:`RadioGroup`}}},Item:{variant:{control:`select`,options:F.variant,description:`The variant of the radio item.`,table:{type:{summary:F.variant.map(e=>`"${e}"`).join(` | `)},defaultValue:{summary:`label`},subcategory:`RadioItem`}},theme:{control:`select`,options:F.theme,description:`The theme of the radio item.`,table:{type:{summary:F.theme.map(e=>`"${e}"`).join(` | `)},defaultValue:{summary:`primary`},subcategory:`RadioItem`}},shape:{control:`select`,options:F.shape,description:`The shape of the radio item.`,table:{type:{summary:F.shape.map(e=>`"${e}"`).join(` | `)},defaultValue:{summary:`rounded`},subcategory:`RadioItem`}},size:{control:`select`,options:F.size,description:`The size of the radio item.`,table:{type:{summary:F.size.map(e=>`"${e}"`).join(` | `)},defaultValue:{summary:`medium`},subcategory:`RadioItem`}},name:{control:`text`,description:`The name of the radio item.`,table:{type:{summary:`string`},defaultValue:{summary:`{REACT_UUID}`},subcategory:`RadioItem`}},value:{control:`text`,description:`The value of the radio item.`,table:{type:{summary:`string`},defaultValue:{summary:`null`},subcategory:`RadioItem`}},invalid:{control:`boolean`,description:`Whether the radio item is invalid.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`},subcategory:`RadioItem`}},disabled:{control:`boolean`,description:`Whether the radio item is disabled.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`},subcategory:`RadioItem`}},render:{description:`Custom render function for the radio item.`,table:{type:{summary:`(params: RadioRenderParams) => React.ReactNode`,detail:`
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
        `},subcategory:`RadioItem`}},inputProps:{control:`object`,description:`Props for the hidden input element.`,table:{type:{summary:`object`},subcategory:`RadioItem`}}}})},subcomponents:{Root:V,Row:U,Label:H,Item:R,ItemControlBox:B,ItemtextNode:z},render:e=>(0,I.jsx)(W,{...e})};var Ue=He;const G={args:{labelNode:`Select an option`,defaultValue:`a`,options:[{value:`a`,textNode:`Option A`},{value:`b`,textNode:`Option B`},{value:`c`,textNode:`Option C`}]}},K={args:{invalid:!0,defaultValue:`a`,options:[{value:`a`,textNode:`Option A`},{value:`b`,textNode:`Option B`},{value:`c`,textNode:`Option C`}]}},q={args:{disabled:!0,defaultValue:`a`,options:[{value:`a`,textNode:`Option A`},{value:`b`,textNode:`Option B`}]}},J={args:{invalid:!0,disabled:!0,defaultValue:`a`,options:[{value:`a`,textNode:`Option A`},{value:`b`,textNode:`Option B`}]}},We=()=>{let[e,t]=(0,k.useState)(`1`),[n,r]=(0,k.useState)(`1`),[i,a]=(0,k.useState)(`1`),o=e=>t=>{t&&e(t)};return(0,I.jsxs)(V,{name:`A`,value:e,onChange:o(t),children:[(0,I.jsxs)(H,{style:{display:`flex`,gap:`8px`,paddingBottom:`8px`},children:[(0,I.jsx)(`div`,{children:`A:`}),(0,I.jsx)(`div`,{children:e})]}),(0,I.jsxs)(R,{name:`A`,value:`1`,children:[(0,I.jsx)(B,{}),(0,I.jsx)(z,{children:`Option A - 1`})]}),(0,I.jsxs)(`div`,{style:{padding:`16px 24px`},children:[(0,I.jsxs)(H,{style:{display:`flex`,gap:`8px`,paddingBottom:`8px`},children:[(0,I.jsx)(`div`,{children:`B:`}),(0,I.jsx)(`div`,{children:`a - `+e+` - b - `+n})]}),(0,I.jsx)(V,{name:`B`,value:n,onChange:o(r),children:(0,I.jsxs)(U,{children:[(0,I.jsxs)(R,{name:`B`,value:`1`,children:[(0,I.jsx)(B,{}),(0,I.jsx)(z,{children:`Option A - B - 1`})]}),(0,I.jsxs)(R,{name:`B`,value:`2`,children:[(0,I.jsx)(B,{}),(0,I.jsx)(z,{children:`Option A - B - 2`})]})]})})]}),(0,I.jsxs)(R,{name:`A`,value:`2`,children:[(0,I.jsx)(B,{}),(0,I.jsx)(z,{children:`Option A - 2`})]}),(0,I.jsxs)(`div`,{style:{padding:`16px 24px`},children:[(0,I.jsxs)(H,{style:{display:`flex`,gap:`8px`,paddingBottom:`8px`},children:[(0,I.jsx)(`div`,{children:`C:`}),(0,I.jsx)(`div`,{children:`a - `+e+` - c - `+i})]}),(0,I.jsx)(V,{name:`C`,value:i,onChange:o(a),children:(0,I.jsxs)(U,{children:[(0,I.jsxs)(R,{name:`C`,value:`1`,children:[(0,I.jsx)(B,{}),(0,I.jsx)(z,{children:`Option A - C - 1`})]}),(0,I.jsxs)(R,{name:`C`,value:`2`,children:[(0,I.jsx)(B,{}),(0,I.jsx)(z,{children:`Option A - C - 2`})]})]})})]})]})},Y={render:()=>(0,I.jsx)(We,{}),parameters:{docs:{source:{language:`tsx`,code:`
const NestedGroupExample = () => {
  const [stateA, setStateA] = useState('1')
  const [stateB, setStateB] = useState('1')
  const [stateC, setStateC] = useState('1')
  const onChange = (cb: (value: string) => void) => {
    return (value: string | null) => {
      if (value) cb(value)
    }
  }
  return (
    <RadioGroupRoot name="A" value={stateA} onChange={onChange(setStateA)}>
      <RadioGroupLabel style={{ display: 'flex', gap: '8px', paddingBottom: '8px' }}>
        <div>A:</div>
        <div>{stateA}</div>
      </RadioGroupLabel>
      <RadioItem name="A" value="1">
        <RadioItemControlBox />
        <RadioItemText>Option A - 1</RadioItemText>
      </RadioItem>
      <div style={{ padding: '16px 24px' }}>
        <RadioGroupLabel style={{ display: 'flex', gap: '8px', paddingBottom: '8px' }}>
          <div>B:</div>
          <div>{'a - ' + stateA + ' - b - ' + stateB}</div>
        </RadioGroupLabel>
        <RadioGroupRoot name="B" value={stateB} onChange={onChange(setStateB)}>
          <RadioGroupRow>
            <RadioItem name="B" value="1">
              <RadioItemControlBox />
              <RadioItemText>Option A - B - 1</RadioItemText>
            </RadioItem>
            <RadioItem name="B" value="2">
              <RadioItemControlBox />
              <RadioItemText>Option A - B - 2</RadioItemText>
            </RadioItem>
          </RadioGroupRow>
        </RadioGroupRoot>
      </div>
      <RadioItem name="A" value="2">
        <RadioItemControlBox />
        <RadioItemText>Option A - 2</RadioItemText>
      </RadioItem>
      <div style={{ padding: '16px 24px' }}>
        <RadioGroupLabel style={{ display: 'flex', gap: '8px', paddingBottom: '8px' }}>
          <div>C:</div>
          <div>{'a - ' + stateA + ' - c - ' + stateC}</div>
        </RadioGroupLabel>
        <RadioGroupRoot name="C" value={stateC} onChange={onChange(setStateC)}>
          <RadioGroupRow>
            <RadioItem name="C" value="1">
              <RadioItemControlBox />
              <RadioItemText>Option A - C - 1</RadioItemText>
            </RadioItem>
            <RadioItem name="C" value="2">
              <RadioItemControlBox />
              <RadioItemText>Option A - C - 2</RadioItemText>
            </RadioItem>
          </RadioGroupRow>
        </RadioGroupRoot>
      </div>
    </RadioGroupRoot>
  )
}
        `}}}},X=({title:e,description:t})=>(0,I.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`4px`},children:[e&&(0,I.jsx)(z,{style:{fontSize:`16px`,lineHeight:`24px`,color:`#1D293D`},children:e}),t&&(0,I.jsx)(z,{style:{fontSize:`14px`,lineHeight:`20px`,color:`#90A1B9`},children:t})]}),Ge=()=>{let[e,t]=(0,k.useState)(`a`);return(0,I.jsx)(V,{name:`custom-control`,defaultValue:e,onChange:e=>t(e||`a`),children:(0,I.jsxs)(U,{children:[(0,I.jsxs)(R,{value:`a`,children:[(0,I.jsx)(B,{}),(0,I.jsx)(X,{title:`Accept terms and conditions A`,description:`You agree to our Terms of Service and Privacy Policy.`})]}),(0,I.jsxs)(R,{value:`b`,children:[(0,I.jsx)(B,{}),(0,I.jsx)(X,{title:`Accept terms and conditions B`,description:`You agree to our Terms of Service and Privacy Policy.`})]}),(0,I.jsxs)(R,{value:`c`,children:[(0,I.jsx)(B,{}),(0,I.jsx)(X,{title:`Accept terms and conditions C`,description:`You agree to our Terms of Service and Privacy Policy.`})]})]})})},Z={render:()=>(0,I.jsx)(Ge,{}),parameters:{docs:{source:{language:`tsx`,code:`
const CustomLabel = ({ title, description }: { title: string, description: string }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
    {title && <RadioItemText style={{ fontSize: '16px', lineHeight: '24px', color: '#1D293D' }}>{title}</RadioItemText>}
    {description && <RadioItemText style={{ fontSize: '14px', lineHeight: '20px', color: '#90A1B9' }}>{description}</RadioItemText>}
  </div>
)

const CustomExample = () => {
  const [value, setValue] = useState('a')
  return (
    <RadioGroupRoot name="custom-control" defaultValue={value} onChange={v => setValue(v || 'a')}>
      <RadioGroupRow>
        <RadioItem value="a">
          <RadioItemControlBox />
          <CustomLabel
            title="Accept terms and conditions A"
            description="You agree to our Terms of Service and Privacy Policy."
          />
        </RadioItem>
        <RadioItem value="b">
          <RadioItemControlBox />
          <CustomLabel
            title="Accept terms and conditions B"
            description="You agree to our Terms of Service and Privacy Policy."
          />
        </RadioItem>
        <RadioItem value="c">
          <RadioItemControlBox />
          <CustomLabel
            title="Accept terms and conditions C"
            description="You agree to our Terms of Service and Privacy Policy."
          />
        </RadioItem>
      </RadioGroupRow>
    </RadioGroupRoot>
  )
}
        `}}}};function Ke(){return(0,I.jsx)(V,{name:`button-radio`,orientation:`vertical`,defaultValue:`b`,children:(0,I.jsxs)(U,{children:[(0,I.jsx)(R,{value:`a`,variant:`outlined`,children:`Default Button`}),(0,I.jsx)(R,{value:`b`,variant:`outlined`,children:`Selected Button`}),(0,I.jsx)(R,{value:`c`,variant:`outlined`,invalid:!0,children:`Invalid Button`}),(0,I.jsx)(R,{value:`d`,variant:`outlined`,disabled:!0,children:`Disabled Button`}),(0,I.jsx)(R,{value:`b`,variant:`outlined`,disabled:!0,children:`Disabled Selected Button`}),(0,I.jsx)(R,{value:`b`,variant:`outlined`,invalid:!0,children:`Invalid Selected Button`}),(0,I.jsx)(R,{value:`b`,variant:`outlined`,invalid:!0,disabled:!0,children:`Disabled Invalid Selected Button`})]})})}const Q={render:()=>(0,I.jsx)(Ke,{}),parameters:{docs:{source:{language:`tsx`,code:`
function ButtonRadio() {
  return (
    <RadioGroupRoot name="button-radio" defaultValue="a">
      <RadioGroupRow>
        <RadioItem
          value="a"
          variant="outlined"
        >
          Selected A
        </RadioItem>
        {...}
      </RadioGroupRow>
    </RadioGroupRoot>
  )
}
        `}}}},qe=({checked:e})=>({display:`flex`,alignItems:`center`,gap:`16px`,background:`transparent`,color:`var(--radio-color-default)`,border:`1px solid`,borderColor:e?`var(--radio-color-selected)`:`var(--radio-color-default)`,padding:`12px 16px`,borderRadius:`8px`,cursor:`pointer`});function Je(){return(0,I.jsx)(V,{name:`button-radio`,defaultValue:`a`,children:(0,I.jsxs)(U,{children:[(0,I.jsx)(R,{value:`a`,render:({checked:e})=>(0,I.jsxs)(`div`,{style:qe({checked:e}),children:[(0,I.jsx)(z,{children:`Selected A`}),(0,I.jsx)(B,{})]})}),(0,I.jsx)(R,{value:`b`,render:({checked:e})=>(0,I.jsxs)(`div`,{style:qe({checked:e}),children:[(0,I.jsx)(z,{children:`Selected B`}),(0,I.jsx)(B,{})]})})]})})}const $={render:()=>(0,I.jsx)(Je,{}),parameters:{docs:{source:{language:`tsx`,code:`
function CustomButtonRadioExample() {
  return (
    <RadioGroupRoot name="button-radio" defaultValue="a">
      <RadioGroupRow>
        <RadioItem
          value="a"
          render={({ checked }) => (
            <div style={customStyles({ checked })}>
              <RadioItemText>Selected A</RadioItemText>
              <RadioItemControlBox />
            </div>
          )}
        />
        <RadioItem
          value="b"
          render={({ checked }) => (
            <div style={customStyles({ checked })}>
              <RadioItemText>Selected B</RadioItemText>
              <RadioItemControlBox />
            </div>
          )}
        />
      </RadioGroupRow>
    </RadioGroupRoot>
  )
}
        `}}}};G.parameters={...G.parameters,docs:{...(ce=G.parameters)?.docs,source:{originalSource:`{
  args: {
    labelNode: 'Select an option',
    defaultValue: 'a',
    options: [{
      value: 'a',
      textNode: 'Option A'
    }, {
      value: 'b',
      textNode: 'Option B'
    }, {
      value: 'c',
      textNode: 'Option C'
    }]
  }
}`,...(g=G.parameters)==null||(g=g.docs)==null?void 0:g.source}}},K.parameters={...K.parameters,docs:{...(le=K.parameters)?.docs,source:{originalSource:`{
  args: {
    invalid: true,
    defaultValue: 'a',
    options: [{
      value: 'a',
      textNode: 'Option A'
    }, {
      value: 'b',
      textNode: 'Option B'
    }, {
      value: 'c',
      textNode: 'Option C'
    }]
  }
}`,...(_=K.parameters)==null||(_=_.docs)==null?void 0:_.source}}},q.parameters={...q.parameters,docs:{...(ue=q.parameters)?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    defaultValue: 'a',
    options: [{
      value: 'a',
      textNode: 'Option A'
    }, {
      value: 'b',
      textNode: 'Option B'
    }]
  }
}`,...(v=q.parameters)==null||(v=v.docs)==null?void 0:v.source}}},J.parameters={...J.parameters,docs:{...(de=J.parameters)?.docs,source:{originalSource:`{
  args: {
    invalid: true,
    disabled: true,
    defaultValue: 'a',
    options: [{
      value: 'a',
      textNode: 'Option A'
    }, {
      value: 'b',
      textNode: 'Option B'
    }]
  }
}`,...(y=J.parameters)==null||(y=y.docs)==null?void 0:y.source}}},Y.parameters={...Y.parameters,docs:{...(fe=Y.parameters)?.docs,source:{originalSource:`{
  render: () => <NestedGroupExample />,
  parameters: {
    docs: {
      source: {
        language: 'tsx',
        code: \`
const NestedGroupExample = () => {
  const [stateA, setStateA] = useState('1')
  const [stateB, setStateB] = useState('1')
  const [stateC, setStateC] = useState('1')
  const onChange = (cb: (value: string) => void) => {
    return (value: string | null) => {
      if (value) cb(value)
    }
  }
  return (
    <RadioGroupRoot name="A" value={stateA} onChange={onChange(setStateA)}>
      <RadioGroupLabel style={{ display: 'flex', gap: '8px', paddingBottom: '8px' }}>
        <div>A:</div>
        <div>{stateA}</div>
      </RadioGroupLabel>
      <RadioItem name="A" value="1">
        <RadioItemControlBox />
        <RadioItemText>Option A - 1</RadioItemText>
      </RadioItem>
      <div style={{ padding: '16px 24px' }}>
        <RadioGroupLabel style={{ display: 'flex', gap: '8px', paddingBottom: '8px' }}>
          <div>B:</div>
          <div>{'a - ' + stateA + ' - b - ' + stateB}</div>
        </RadioGroupLabel>
        <RadioGroupRoot name="B" value={stateB} onChange={onChange(setStateB)}>
          <RadioGroupRow>
            <RadioItem name="B" value="1">
              <RadioItemControlBox />
              <RadioItemText>Option A - B - 1</RadioItemText>
            </RadioItem>
            <RadioItem name="B" value="2">
              <RadioItemControlBox />
              <RadioItemText>Option A - B - 2</RadioItemText>
            </RadioItem>
          </RadioGroupRow>
        </RadioGroupRoot>
      </div>
      <RadioItem name="A" value="2">
        <RadioItemControlBox />
        <RadioItemText>Option A - 2</RadioItemText>
      </RadioItem>
      <div style={{ padding: '16px 24px' }}>
        <RadioGroupLabel style={{ display: 'flex', gap: '8px', paddingBottom: '8px' }}>
          <div>C:</div>
          <div>{'a - ' + stateA + ' - c - ' + stateC}</div>
        </RadioGroupLabel>
        <RadioGroupRoot name="C" value={stateC} onChange={onChange(setStateC)}>
          <RadioGroupRow>
            <RadioItem name="C" value="1">
              <RadioItemControlBox />
              <RadioItemText>Option A - C - 1</RadioItemText>
            </RadioItem>
            <RadioItem name="C" value="2">
              <RadioItemControlBox />
              <RadioItemText>Option A - C - 2</RadioItemText>
            </RadioItem>
          </RadioGroupRow>
        </RadioGroupRoot>
      </div>
    </RadioGroupRoot>
  )
}
        \`
      }
    }
  }
}`,...(b=Y.parameters)==null||(b=b.docs)==null?void 0:b.source}}},Z.parameters={...Z.parameters,docs:{...(pe=Z.parameters)?.docs,source:{originalSource:`{
  render: () => <CustomExample />,
  parameters: {
    docs: {
      source: {
        language: 'tsx',
        code: \`
const CustomLabel = ({ title, description }: { title: string, description: string }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
    {title && <RadioItemText style={{ fontSize: '16px', lineHeight: '24px', color: '#1D293D' }}>{title}</RadioItemText>}
    {description && <RadioItemText style={{ fontSize: '14px', lineHeight: '20px', color: '#90A1B9' }}>{description}</RadioItemText>}
  </div>
)

const CustomExample = () => {
  const [value, setValue] = useState('a')
  return (
    <RadioGroupRoot name="custom-control" defaultValue={value} onChange={v => setValue(v || 'a')}>
      <RadioGroupRow>
        <RadioItem value="a">
          <RadioItemControlBox />
          <CustomLabel
            title="Accept terms and conditions A"
            description="You agree to our Terms of Service and Privacy Policy."
          />
        </RadioItem>
        <RadioItem value="b">
          <RadioItemControlBox />
          <CustomLabel
            title="Accept terms and conditions B"
            description="You agree to our Terms of Service and Privacy Policy."
          />
        </RadioItem>
        <RadioItem value="c">
          <RadioItemControlBox />
          <CustomLabel
            title="Accept terms and conditions C"
            description="You agree to our Terms of Service and Privacy Policy."
          />
        </RadioItem>
      </RadioGroupRow>
    </RadioGroupRoot>
  )
}
        \`
      }
    }
  }
}`,...(x=Z.parameters)==null||(x=x.docs)==null?void 0:x.source}}},Q.parameters={...Q.parameters,docs:{...(me=Q.parameters)?.docs,source:{originalSource:`{
  render: () => <ButtonRadioExample />,
  parameters: {
    docs: {
      source: {
        language: 'tsx',
        code: \`
function ButtonRadio() {
  return (
    <RadioGroupRoot name="button-radio" defaultValue="a">
      <RadioGroupRow>
        <RadioItem
          value="a"
          variant="outlined"
        >
          Selected A
        </RadioItem>
        {...}
      </RadioGroupRow>
    </RadioGroupRoot>
  )
}
        \`
      }
    }
  }
}`,...(S=Q.parameters)==null||(S=S.docs)==null?void 0:S.source}}},$.parameters={...$.parameters,docs:{...(he=$.parameters)?.docs,source:{originalSource:`{
  render: () => <CustomButtonRadioExample />,
  parameters: {
    docs: {
      source: {
        language: 'tsx',
        code: \`
function CustomButtonRadioExample() {
  return (
    <RadioGroupRoot name="button-radio" defaultValue="a">
      <RadioGroupRow>
        <RadioItem
          value="a"
          render={({ checked }) => (
            <div style={customStyles({ checked })}>
              <RadioItemText>Selected A</RadioItemText>
              <RadioItemControlBox />
            </div>
          )}
        />
        <RadioItem
          value="b"
          render={({ checked }) => (
            <div style={customStyles({ checked })}>
              <RadioItemText>Selected B</RadioItemText>
              <RadioItemControlBox />
            </div>
          )}
        />
      </RadioGroupRow>
    </RadioGroupRoot>
  )
}
        \`
      }
    }
  }
}`,...(C=$.parameters)==null||(C=C.docs)==null?void 0:C.source}}};const Ye=[`Base`,`Invalid`,`Disabled`,`InvalidDisabled`,`NestedGroup`,`CustomRadio`,`ButtonRadio`,`CustomButtonRadio`];export{G as Base,Q as ButtonRadio,$ as CustomButtonRadio,Z as CustomRadio,q as Disabled,K as Invalid,J as InvalidDisabled,Y as NestedGroup,Ye as __namedExportsOrder,Ue as default};