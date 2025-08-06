import{__toESM as e,require_react as t}from"./iframe-BY-LnZHQ.js";import{require_jsx_runtime as n}from"./jsx-runtime-DfGPuKEZ.js";import"./react-dom-DaWwqrzT.js";import{cx as r,sva as i}from"./css-IySnOQH9.js";import{createAnatomy as a,createMachine as o,createProps as s,createSplitProps as c,dataAttr as l,getComputedStyle as u,getEventTarget as d,mergeProps as f,nextTick as p,normalizeProps as m,raf as h,setStyle as ee,useMachine as g}from"./dist-CzG4t0AR.js";var _,v,y,b,x,S,C,w,T,E,D=a(`collapsible`).parts(`root`,`trigger`,`content`,`indicator`),O=D.build(),k=e=>{var t;return(t=e.ids)?.root??`collapsible:${e.id}`},A=e=>{var t;return(t=e.ids)?.content??`collapsible:${e.id}:content`},j=e=>{var t;return(t=e.ids)?.trigger??`collapsible:${e.id}:trigger`},M=e=>e.getById(A(e));function N(e,t){let{state:n,send:r,context:i,scope:a,prop:o}=e,s=n.matches(`open`)||n.matches(`closing`),c=n.matches(`open`),{width:u,height:d}=i.get(`size`),f=!!o(`disabled`),p=!i.get(`initial`)&&c,m=`ltr`;return{disabled:f,visible:s,open:c,measureSize(){r({type:`size.measure`})},setOpen(e){let t=n.matches(`open`);t!==e&&r({type:e?`open`:`close`})},getRootProps(){return t.element({...O.root.attrs,"data-state":c?`open`:`closed`,dir:m,id:k(a)})},getContentProps(){return t.element({...O.content.attrs,"data-collapsible":``,"data-state":p?void 0:c?`open`:`closed`,id:A(a),"data-disabled":l(f),hidden:!s,style:{"--height":d==null?void 0:`${d}px`,"--width":u==null?void 0:`${u}px`}})},getTriggerProps(){return t.element({...O.trigger.attrs,id:j(a),dir:m,type:`button`,"data-state":c?`open`:`closed`,"data-disabled":l(f),"aria-controls":A(a),"aria-expanded":s||!1,onClick(e){e.defaultPrevented||f||r({type:c?`close`:`open`})}})},getIndicatorProps(){return t.element({...O.indicator.attrs,dir:m,"data-state":c?`open`:`closed`,"data-disabled":l(f)})}}}var P=o({initialState({prop:e}){let t=e(`open`)||e(`defaultOpen`);return t?`open`:`closed`},context({bindable:e}){return{size:e(()=>({defaultValue:{height:0,width:0},sync:!0})),initial:e(()=>({defaultValue:!1}))}},refs(){return{cleanup:void 0,stylesRef:void 0}},watch({track:e,prop:t,action:n}){e([()=>t(`open`)],()=>{n([`setInitial`,`computeSize`,`toggleVisibility`])})},exit:[`clearInitial`,`cleanupNode`],states:{closed:{on:{"controlled.open":{target:`open`},open:[{guard:`isOpenControlled`,actions:[`invokeOnOpen`]},{target:`open`,actions:[`setInitial`,`computeSize`,`invokeOnOpen`]}]}},closing:{effects:[`trackExitAnimation`],on:{"controlled.close":{target:`closed`},"controlled.open":{target:`open`},open:[{guard:`isOpenControlled`,actions:[`invokeOnOpen`]},{target:`open`,actions:[`setInitial`,`invokeOnOpen`]}],close:[{guard:`isOpenControlled`,actions:[`invokeOnExitComplete`]},{target:`closed`,actions:[`setInitial`,`computeSize`,`invokeOnExitComplete`]}],"animation.end":{target:`closed`,actions:[`invokeOnExitComplete`,`clearInitial`]}}},open:{effects:[`trackEnterAnimation`],on:{"controlled.close":{target:`closing`},close:[{guard:`isOpenControlled`,actions:[`invokeOnClose`]},{target:`closing`,actions:[`setInitial`,`computeSize`,`invokeOnClose`]}],"size.measure":{actions:[`measureSize`]},"animation.end":{actions:[`clearInitial`]}}}},implementations:{guards:{isOpenControlled:({prop:e})=>e(`open`)!=null},effects:{trackEnterAnimation:({send:e,scope:t})=>{let n,r=h(()=>{let r=M(t);if(!r)return;let i=u(r).animationName,a=!i||i===`none`;if(a){e({type:`animation.end`});return}let o=t=>{let n=d(t);n===r&&e({type:`animation.end`})};r.addEventListener(`animationend`,o),n=()=>{r.removeEventListener(`animationend`,o)}});return()=>{r(),n?.()}},trackExitAnimation:({send:e,scope:t})=>{let n,r=h(()=>{let r=M(t);if(!r)return;let i=u(r).animationName,a=!i||i===`none`;if(a){e({type:`animation.end`});return}let o=t=>{let n=d(t);n===r&&e({type:`animation.end`})};r.addEventListener(`animationend`,o);let s=ee(r,{animationFillMode:`forwards`});n=()=>{r.removeEventListener(`animationend`,o),p(()=>s())}});return()=>{r(),n?.()}}},actions:{setInitial:({context:e,flush:t})=>{t(()=>{e.set(`initial`,!0)})},clearInitial:({context:e})=>{e.set(`initial`,!1)},cleanupNode:({refs:e})=>{e.set(`stylesRef`,null)},measureSize:({context:e,scope:t})=>{let n=M(t);if(!n)return;let{height:r,width:i}=n.getBoundingClientRect();e.set(`size`,{height:r,width:i})},computeSize:({refs:e,scope:t,context:n})=>{var r;(r=e.get(`cleanup`))?.();let i=h(()=>{let e=M(t);if(!e)return;let r=e.hidden;e.style.animationName=`none`,e.style.animationDuration=`0s`,e.hidden=!1;let i=e.getBoundingClientRect();n.set(`size`,{height:i.height,width:i.width}),n.get(`initial`)&&(e.style.animationName=``,e.style.animationDuration=``),e.hidden=r});e.set(`cleanup`,i)},invokeOnOpen:({prop:e})=>{var t;(t=e(`onOpenChange`))?.({open:!0})},invokeOnClose:({prop:e})=>{var t;(t=e(`onOpenChange`))?.({open:!1})},invokeOnExitComplete:({prop:e})=>{var t;(t=e(`onExitComplete`))?.()},toggleVisibility:({prop:e,send:t})=>{t({type:e(`open`)?`controlled.open`:`controlled.close`})}}}}),F=s()([`dir`,`disabled`,`getRootNode`,`id`,`ids`,`onExitComplete`,`onOpenChange`,`defaultOpen`,`open`]),te=c(F);const I=i({slots:[`root`,`trigger`,`content`,`icon`],base:{root:{display:`flex`,flexDirection:`column`,width:`100%`},trigger:{all:`unset`,display:`flex`,alignItems:`center`,justifyContent:`space-between`,cursor:`pointer`,borderRadius:`md`,transition:`all 0.2s ease-in-out`,fontWeight:`medium`,outline:`2px solid transparent`,outlineOffset:`2px`,_hover:{backgroundColor:`gray.50`},_focus:{outlineColor:`button.primary.default`},_disabled:{cursor:`not-allowed`,opacity:`0.5`}},content:{overflow:`hidden`,transition:`all 0.2s ease-in-out`,"&[data-state=open]":{animation:`collapsibleSlideDown 0.2s ease-out`},"&[data-state=closed]":{animation:`collapsibleSlideUp 0.2s ease-out`}},icon:{flexShrink:`0`,transition:`transform 0.2s ease-in-out`,"&[data-state=open]":{transform:`rotate(180deg)`}}},variants:{variant:{default:{trigger:{backgroundColor:`transparent`,color:`text.default`,borderWidth:`1px`,borderColor:`gray.200`,_hover:{backgroundColor:`gray.50`,borderColor:`gray.300`}}},ghost:{trigger:{backgroundColor:`transparent`,color:`text.default`,_hover:{backgroundColor:`gray.50`}}},solid:{trigger:{backgroundColor:`button.primary.default`,color:`button.primary.fg`,_hover:{backgroundColor:`button.primary.hover`}}}},size:{sm:{root:{gap:`1`},trigger:{padding:`2`,fontSize:`sm`},content:{padding:`2`},icon:{width:`3`,height:`3`}},md:{root:{gap:`2`},trigger:{padding:`3`,fontSize:`md`},content:{padding:`3`},icon:{width:`4`,height:`4`}},lg:{root:{gap:`3`},trigger:{padding:`4`,fontSize:`lg`},content:{padding:`4`},icon:{width:`5`,height:`5`}}}},defaultVariants:{variant:`default`,size:`md`}});var L=e(t()),R=e(n());const z=(0,L.createContext)(null),B=()=>{let e=(0,L.useContext)(z);if(!e)throw Error(`Collapsible components must be used within a CollapsibleRoot`);return e};function V({size:e=`md`,variant:t=`default`,children:n,...r}){let i=(0,L.useId)(),a=g(P,{...r,id:i}),o=N(a,m),s=(0,L.useMemo)(()=>({api:o,size:e,variant:t}),[o,e,t]),c=I({size:e,variant:t});return(0,R.jsx)(z.Provider,{value:s,children:(0,R.jsx)(`div`,{...f(o.getRootProps(),{className:c.root}),children:n})})}function H({variant:e,size:t,children:n,...i}){let{api:a,size:o,variant:s}=B(),c=t??o,l=e??s,u=I({variant:l,size:c});return(0,R.jsx)(`button`,{...f(a.getTriggerProps(),i,{className:r(u.trigger,i.className)}),children:n})}function U({size:e,children:t,...n}){let{api:i,size:a,variant:o}=B(),s=e??a,c=I({variant:o,size:s});return(0,R.jsx)(`div`,{...f(i.getContentProps(),n,{className:r(c.content,n.className)}),children:t})}function W({size:e,children:t,...n}){let{api:i,size:a,variant:o}=B(),s=e??a,c=I({variant:o,size:s});return(0,R.jsx)(`span`,{"data-state":i.open?`open`:`closed`,...f(n,{className:r(c.icon,n.className)}),children:t})}function G({triggerNode:e,iconNode:t,children:n,...r}){return(0,R.jsxs)(V,{...r,children:[e&&(0,R.jsxs)(H,{children:[e,t&&(0,R.jsx)(W,{children:t})]}),(0,R.jsx)(U,{children:n})]})}G.Root=V,G.Trigger=H,G.Content=U,G.Icon=W;try{V.displayName=`CollapsibleRoot`,V.__docgenInfo={description:``,displayName:`CollapsibleRoot`,props:{size:{defaultValue:{value:`md`},description:``,name:`size`,required:!1,type:{name:`enum`,value:[{value:`"sm"`},{value:`"md"`},{value:`"lg"`}]}},variant:{defaultValue:{value:`default`},description:``,name:`variant`,required:!1,type:{name:`enum`,value:[{value:`"default"`},{value:`"solid"`},{value:`"ghost"`}]}}}}}catch{}try{H.displayName=`CollapsibleTrigger`,H.__docgenInfo={description:``,displayName:`CollapsibleTrigger`,props:{variant:{defaultValue:null,description:``,name:`variant`,required:!1,type:{name:`enum`,value:[{value:`"default"`},{value:`"solid"`},{value:`"ghost"`}]}},size:{defaultValue:null,description:``,name:`size`,required:!1,type:{name:`enum`,value:[{value:`"sm"`},{value:`"md"`},{value:`"lg"`}]}}}}}catch{}try{U.displayName=`CollapsibleContent`,U.__docgenInfo={description:``,displayName:`CollapsibleContent`,props:{size:{defaultValue:null,description:``,name:`size`,required:!1,type:{name:`enum`,value:[{value:`"sm"`},{value:`"md"`},{value:`"lg"`}]}}}}}catch{}try{W.displayName=`CollapsibleIcon`,W.__docgenInfo={description:``,displayName:`CollapsibleIcon`,props:{size:{defaultValue:null,description:``,name:`size`,required:!1,type:{name:`enum`,value:[{value:`"sm"`},{value:`"md"`},{value:`"lg"`}]}}}}}catch{}try{G.displayName=`Collapsible`,G.__docgenInfo={description:``,displayName:`Collapsible`,props:{triggerNode:{defaultValue:null,description:``,name:`triggerNode`,required:!1,type:{name:`ReactNode`}},iconNode:{defaultValue:null,description:``,name:`iconNode`,required:!1,type:{name:`ReactNode`}},size:{defaultValue:null,description:``,name:`size`,required:!1,type:{name:`enum`,value:[{value:`"sm"`},{value:`"md"`},{value:`"lg"`}]}},variant:{defaultValue:null,description:``,name:`variant`,required:!1,type:{name:`enum`,value:[{value:`"default"`},{value:`"solid"`},{value:`"ghost"`}]}}}}}catch{}try{G.Root.displayName=`Collapsible.Root`,G.Root.__docgenInfo={description:``,displayName:`Collapsible.Root`,props:{size:{defaultValue:{value:`md`},description:``,name:`size`,required:!1,type:{name:`enum`,value:[{value:`"sm"`},{value:`"md"`},{value:`"lg"`}]}},variant:{defaultValue:{value:`default`},description:``,name:`variant`,required:!1,type:{name:`enum`,value:[{value:`"default"`},{value:`"solid"`},{value:`"ghost"`}]}}}}}catch{}try{G.Trigger.displayName=`Collapsible.Trigger`,G.Trigger.__docgenInfo={description:``,displayName:`Collapsible.Trigger`,props:{variant:{defaultValue:null,description:``,name:`variant`,required:!1,type:{name:`enum`,value:[{value:`"default"`},{value:`"solid"`},{value:`"ghost"`}]}},size:{defaultValue:null,description:``,name:`size`,required:!1,type:{name:`enum`,value:[{value:`"sm"`},{value:`"md"`},{value:`"lg"`}]}}}}}catch{}try{G.Content.displayName=`Collapsible.Content`,G.Content.__docgenInfo={description:``,displayName:`Collapsible.Content`,props:{size:{defaultValue:null,description:``,name:`size`,required:!1,type:{name:`enum`,value:[{value:`"sm"`},{value:`"md"`},{value:`"lg"`}]}}}}}catch{}try{G.Icon.displayName=`Collapsible.Icon`,G.Icon.__docgenInfo={description:``,displayName:`Collapsible.Icon`,props:{size:{defaultValue:null,description:``,name:`size`,required:!1,type:{name:`enum`,value:[{value:`"sm"`},{value:`"md"`},{value:`"lg"`}]}}}}}catch{}const K={title:`Example/Collapsible`,component:G.Root,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{size:{control:{type:`select`},options:[`sm`,`md`,`lg`]},disabled:{control:{type:`boolean`}},open:{control:{type:`boolean`}}},args:{size:`md`,disabled:!1,open:!1}};var q=K;const J={render:e=>(0,R.jsx)(`div`,{className:`w-80`,children:(0,R.jsxs)(G.Root,{...e,children:[(0,R.jsxs)(G.Trigger,{children:[(0,R.jsx)(`span`,{children:`Toggle Content`}),(0,R.jsx)(G.Icon,{children:(0,R.jsx)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 16 16`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,children:(0,R.jsx)(`path`,{d:`M4 6L8 10L12 6`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`})})})]}),(0,R.jsx)(G.Content,{children:(0,R.jsxs)(`div`,{className:`p-4 bg-gray-50 rounded`,children:[(0,R.jsx)(`p`,{children:`This is the collapsible content. It can contain any elements you want to show or hide.`}),(0,R.jsx)(`p`,{className:`mt-2`,children:`You can add multiple paragraphs, buttons, forms, or any other content here.`})]})})]})})},Y={render:e=>(0,R.jsxs)(`div`,{className:`space-y-4 w-80`,children:[(0,R.jsxs)(`div`,{children:[(0,R.jsx)(`h3`,{className:`text-sm font-medium mb-2`,children:`Default`}),(0,R.jsxs)(G.Root,{...e,children:[(0,R.jsxs)(G.Trigger,{variant:`default`,children:[(0,R.jsx)(`span`,{children:`Default Trigger`}),(0,R.jsx)(G.Icon,{children:(0,R.jsx)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 16 16`,fill:`none`,children:(0,R.jsx)(`path`,{d:`M4 6L8 10L12 6`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`})})})]}),(0,R.jsx)(G.Content,{children:(0,R.jsx)(`div`,{className:`p-4 bg-gray-50 rounded`,children:(0,R.jsx)(`p`,{children:`Content for default variant`})})})]})]}),(0,R.jsxs)(`div`,{children:[(0,R.jsx)(`h3`,{className:`text-sm font-medium mb-2`,children:`Ghost`}),(0,R.jsxs)(G.Root,{...e,children:[(0,R.jsxs)(G.Trigger,{variant:`ghost`,children:[(0,R.jsx)(`span`,{children:`Ghost Trigger`}),(0,R.jsx)(G.Icon,{children:(0,R.jsx)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 16 16`,fill:`none`,children:(0,R.jsx)(`path`,{d:`M4 6L8 10L12 6`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`})})})]}),(0,R.jsx)(G.Content,{children:(0,R.jsx)(`div`,{className:`p-4 bg-gray-50 rounded`,children:(0,R.jsx)(`p`,{children:`Content for ghost variant`})})})]})]}),(0,R.jsxs)(`div`,{children:[(0,R.jsx)(`h3`,{className:`text-sm font-medium mb-2`,children:`Solid`}),(0,R.jsxs)(G.Root,{...e,children:[(0,R.jsxs)(G.Trigger,{variant:`solid`,children:[(0,R.jsx)(`span`,{children:`Solid Trigger`}),(0,R.jsx)(G.Icon,{children:(0,R.jsx)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 16 16`,fill:`none`,children:(0,R.jsx)(`path`,{d:`M4 6L8 10L12 6`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`})})})]}),(0,R.jsx)(G.Content,{children:(0,R.jsx)(`div`,{className:`p-4 bg-gray-50 rounded`,children:(0,R.jsx)(`p`,{children:`Content for solid variant`})})})]})]})]})},X={render:e=>(0,R.jsxs)(`div`,{className:`space-y-4 w-80`,children:[(0,R.jsxs)(`div`,{children:[(0,R.jsx)(`h3`,{className:`text-sm font-medium mb-2`,children:`Small`}),(0,R.jsxs)(G.Root,{...e,size:`sm`,children:[(0,R.jsxs)(G.Trigger,{children:[(0,R.jsx)(`span`,{children:`Small Size`}),(0,R.jsx)(G.Icon,{children:(0,R.jsx)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 16 16`,fill:`none`,children:(0,R.jsx)(`path`,{d:`M4 6L8 10L12 6`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`})})})]}),(0,R.jsx)(G.Content,{children:(0,R.jsx)(`div`,{className:`p-2 bg-gray-50 rounded`,children:(0,R.jsx)(`p`,{className:`text-sm`,children:`Small content area`})})})]})]}),(0,R.jsxs)(`div`,{children:[(0,R.jsx)(`h3`,{className:`text-sm font-medium mb-2`,children:`Medium`}),(0,R.jsxs)(G.Root,{...e,size:`md`,children:[(0,R.jsxs)(G.Trigger,{children:[(0,R.jsx)(`span`,{children:`Medium Size`}),(0,R.jsx)(G.Icon,{children:(0,R.jsx)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 16 16`,fill:`none`,children:(0,R.jsx)(`path`,{d:`M4 6L8 10L12 6`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`})})})]}),(0,R.jsx)(G.Content,{children:(0,R.jsx)(`div`,{className:`p-3 bg-gray-50 rounded`,children:(0,R.jsx)(`p`,{children:`Medium content area`})})})]})]}),(0,R.jsxs)(`div`,{children:[(0,R.jsx)(`h3`,{className:`text-sm font-medium mb-2`,children:`Large`}),(0,R.jsxs)(G.Root,{...e,size:`lg`,children:[(0,R.jsxs)(G.Trigger,{children:[(0,R.jsx)(`span`,{children:`Large Size`}),(0,R.jsx)(G.Icon,{children:(0,R.jsx)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 16 16`,fill:`none`,children:(0,R.jsx)(`path`,{d:`M4 6L8 10L12 6`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`})})})]}),(0,R.jsx)(G.Content,{children:(0,R.jsx)(`div`,{className:`p-4 bg-gray-50 rounded`,children:(0,R.jsx)(`p`,{className:`text-lg`,children:`Large content area`})})})]})]})]})},Z=()=>{let[e,t]=(0,L.useState)(!1);return(0,R.jsxs)(`div`,{className:`w-80`,children:[(0,R.jsx)(`div`,{className:`mb-4`,children:(0,R.jsxs)(`button`,{onClick:()=>t(!e),className:`px-3 py-1 bg-blue-500 text-white rounded text-sm`,children:[`External Toggle (Currently:`,` `,e?`Open`:`Closed`,`)`]})}),(0,R.jsxs)(G.Root,{open:e,onOpenChange:e=>t(!e.open),children:[(0,R.jsxs)(G.Trigger,{children:[(0,R.jsx)(`span`,{children:`Controlled Collapsible`}),(0,R.jsx)(G.Icon,{children:(0,R.jsx)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 16 16`,fill:`none`,children:(0,R.jsx)(`path`,{d:`M4 6L8 10L12 6`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`})})})]}),(0,R.jsx)(G.Content,{children:(0,R.jsx)(`div`,{className:`p-4 bg-gray-50 rounded`,children:(0,R.jsx)(`p`,{children:`This collapsible is controlled by external state. You can toggle it using the button above or by clicking the trigger.`})})})]})]})},Q={render:()=>(0,R.jsx)(Z,{})},$={args:{disabled:!0},render:e=>(0,R.jsx)(`div`,{className:`w-80`,children:(0,R.jsxs)(G.Root,{...e,children:[(0,R.jsxs)(G.Trigger,{children:[(0,R.jsx)(`span`,{children:`Disabled Collapsible`}),(0,R.jsx)(G.Icon,{children:(0,R.jsx)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 16 16`,fill:`none`,children:(0,R.jsx)(`path`,{d:`M4 6L8 10L12 6`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`})})})]}),(0,R.jsx)(G.Content,{children:(0,R.jsx)(`div`,{className:`p-4 bg-gray-50 rounded`,children:(0,R.jsx)(`p`,{children:`This content cannot be toggled because the collapsible is disabled.`})})})]})})};J.parameters={...J.parameters,docs:{...(_=J.parameters)?.docs,source:{originalSource:`{
  render: args => <div className="w-80">
      <Collapsible.Root {...args}>
        <Collapsible.Trigger>
          <span>Toggle Content</span>
          <Collapsible.Icon>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Collapsible.Icon>
        </Collapsible.Trigger>
        <Collapsible.Content>
          <div className="p-4 bg-gray-50 rounded">
            <p>
              This is the collapsible content. It can contain any elements you
              want to show or hide.
            </p>
            <p className="mt-2">
              You can add multiple paragraphs, buttons, forms, or any other
              content here.
            </p>
          </div>
        </Collapsible.Content>
      </Collapsible.Root>
    </div>
}`,...(v=J.parameters)==null||(v=v.docs)==null?void 0:v.source}}},Y.parameters={...Y.parameters,docs:{...(y=Y.parameters)?.docs,source:{originalSource:`{
  render: args => <div className="space-y-4 w-80">
      <div>
        <h3 className="text-sm font-medium mb-2">Default</h3>
        <Collapsible.Root {...args}>
          <Collapsible.Trigger variant="default">
            <span>Default Trigger</span>
            <Collapsible.Icon>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Collapsible.Icon>
          </Collapsible.Trigger>
          <Collapsible.Content>
            <div className="p-4 bg-gray-50 rounded">
              <p>Content for default variant</p>
            </div>
          </Collapsible.Content>
        </Collapsible.Root>
      </div>

      <div>
        <h3 className="text-sm font-medium mb-2">Ghost</h3>
        <Collapsible.Root {...args}>
          <Collapsible.Trigger variant="ghost">
            <span>Ghost Trigger</span>
            <Collapsible.Icon>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Collapsible.Icon>
          </Collapsible.Trigger>
          <Collapsible.Content>
            <div className="p-4 bg-gray-50 rounded">
              <p>Content for ghost variant</p>
            </div>
          </Collapsible.Content>
        </Collapsible.Root>
      </div>

      <div>
        <h3 className="text-sm font-medium mb-2">Solid</h3>
        <Collapsible.Root {...args}>
          <Collapsible.Trigger variant="solid">
            <span>Solid Trigger</span>
            <Collapsible.Icon>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Collapsible.Icon>
          </Collapsible.Trigger>
          <Collapsible.Content>
            <div className="p-4 bg-gray-50 rounded">
              <p>Content for solid variant</p>
            </div>
          </Collapsible.Content>
        </Collapsible.Root>
      </div>
    </div>
}`,...(b=Y.parameters)==null||(b=b.docs)==null?void 0:b.source}}},X.parameters={...X.parameters,docs:{...(x=X.parameters)?.docs,source:{originalSource:`{
  render: args => <div className="space-y-4 w-80">
      <div>
        <h3 className="text-sm font-medium mb-2">Small</h3>
        <Collapsible.Root {...args} size="sm">
          <Collapsible.Trigger>
            <span>Small Size</span>
            <Collapsible.Icon>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Collapsible.Icon>
          </Collapsible.Trigger>
          <Collapsible.Content>
            <div className="p-2 bg-gray-50 rounded">
              <p className="text-sm">Small content area</p>
            </div>
          </Collapsible.Content>
        </Collapsible.Root>
      </div>

      <div>
        <h3 className="text-sm font-medium mb-2">Medium</h3>
        <Collapsible.Root {...args} size="md">
          <Collapsible.Trigger>
            <span>Medium Size</span>
            <Collapsible.Icon>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Collapsible.Icon>
          </Collapsible.Trigger>
          <Collapsible.Content>
            <div className="p-3 bg-gray-50 rounded">
              <p>Medium content area</p>
            </div>
          </Collapsible.Content>
        </Collapsible.Root>
      </div>

      <div>
        <h3 className="text-sm font-medium mb-2">Large</h3>
        <Collapsible.Root {...args} size="lg">
          <Collapsible.Trigger>
            <span>Large Size</span>
            <Collapsible.Icon>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Collapsible.Icon>
          </Collapsible.Trigger>
          <Collapsible.Content>
            <div className="p-4 bg-gray-50 rounded">
              <p className="text-lg">Large content area</p>
            </div>
          </Collapsible.Content>
        </Collapsible.Root>
      </div>
    </div>
}`,...(S=X.parameters)==null||(S=S.docs)==null?void 0:S.source}}},Q.parameters={...Q.parameters,docs:{...(C=Q.parameters)?.docs,source:{originalSource:`{
  render: () => <ExampleControlled />
}`,...(w=Q.parameters)==null||(w=w.docs)==null?void 0:w.source}}},$.parameters={...$.parameters,docs:{...(T=$.parameters)?.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  render: args => <div className="w-80">
      <Collapsible.Root {...args}>
        <Collapsible.Trigger>
          <span>Disabled Collapsible</span>
          <Collapsible.Icon>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Collapsible.Icon>
        </Collapsible.Trigger>
        <Collapsible.Content>
          <div className="p-4 bg-gray-50 rounded">
            <p>This content cannot be toggled because the collapsible is disabled.</p>
          </div>
        </Collapsible.Content>
      </Collapsible.Root>
    </div>
}`,...(E=$.parameters)==null||(E=E.docs)==null?void 0:E.source}}};const ne=[`Default`,`Variants`,`Sizes`,`Controlled`,`Disabled`];export{Q as Controlled,J as Default,$ as Disabled,X as Sizes,Y as Variants,ne as __namedExportsOrder,q as default};