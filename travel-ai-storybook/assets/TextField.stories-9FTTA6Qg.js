import{__toESM as e}from"./iframe-DTweaop1.js";import{require_jsx_runtime as t}from"./jsx-runtime-OfONc6Te.js";import"./global-BFiYQvx2.js";import"./useForkRef-C5o5W9_v.js";import{Button_default as n}from"./Button-B-q8OOzX.js";import"./Spin-CWA_ve4e.js";import"./Button-BzTym43C.js";import{Input_default as r}from"./Input-CCugrFoV.js";import{TextField_default as i}from"./TextField-CjQBzYd-.js";import{check_circle_default as a}from"./check-circle-B6yUDXnE.js";var o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S=e(t());const C={title:`Example/TextField`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{label:{control:`text`,description:`Label for the input field`,table:{type:{summary:`ReactNode`},category:`TextField`}},titleNode:{control:`text`,description:`Title for the input field`,table:{type:{summary:`ReactNode`},category:`TextField`}},messageNode:{control:`text`,description:`Message for the input field`,table:{type:{summary:`ReactNode`},category:`TextField`}},helperNode:{control:`text`,description:`Helper text for the input field`,table:{type:{summary:`ReactNode`},category:`TextField`}},prefixNode:{control:`text`,description:`Prefix node for the input field`,table:{type:{summary:`ReactNode`},category:`TextField`}},suffixNode:{control:`text`,description:`Suffix node for the input field`,table:{type:{summary:`ReactNode`},category:`TextField`}},isInvalid:{control:`boolean`,description:`Indicates if the input is invalid`,table:{category:`TextField`}},disabled:{control:`boolean`,description:`Disables the input field`,table:{category:`Input`}},type:{control:`select`,options:[`date`,`email`,`number`,`password`,`search`,`tel`,`text`,`time`,`url`,`datetime-local`,`week`],description:`Type of the input field`,table:{category:`Input`,defaultValue:{summary:`text`}}},placeholder:{control:`text`,description:`Placeholder text for the input field`,table:{category:`Input`}},value:{control:`text`,description:`Value of the input field`,table:{category:`Input`}}}};var w=C;const T={args:{placeholder:`Please enter text`}},E={args:{disabled:!0,placeholder:`Please enter text`}},D={render:()=>(0,S.jsx)(i,{placeholder:`Please enter text`,children:(0,S.jsx)(r,{})}),args:{}},O={args:{value:`Enter text`,prefixNode:(0,S.jsx)(a,{})}},k={args:{value:`Enter text`,suffixNode:(0,S.jsx)(a,{})}},A={args:{titleNode:`標題`,isInvalid:!0,value:`Enter text`,messageNode:`這是錯誤訊息`}},j={args:{titleNode:`標題`,placeholder:`Please enter text`,helperNode:(0,S.jsx)(n,{variant:`link`,children:`忘記密碼？`})}},M={args:{type:`password`,value:`thisispassword`}};T.parameters={...T.parameters,docs:{...(o=T.parameters)?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Please enter text'
  }
}`,...(s=T.parameters)==null||(s=s.docs)==null?void 0:s.source}}},E.parameters={...E.parameters,docs:{...(c=E.parameters)?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    placeholder: 'Please enter text'
  }
}`,...(l=E.parameters)==null||(l=l.docs)==null?void 0:l.source}}},D.parameters={...D.parameters,docs:{...(u=D.parameters)?.docs,source:{originalSource:`{
  render: () => <TextField placeholder="Please enter text">
      <Input />
    </TextField>,
  args: {}
}`,...(d=D.parameters)==null||(d=d.docs)==null?void 0:d.source}}},O.parameters={...O.parameters,docs:{...(f=O.parameters)?.docs,source:{originalSource:`{
  args: {
    value: 'Enter text',
    prefixNode: <CheckCircle />
  }
}`,...(p=O.parameters)==null||(p=p.docs)==null?void 0:p.source}}},k.parameters={...k.parameters,docs:{...(m=k.parameters)?.docs,source:{originalSource:`{
  args: {
    value: 'Enter text',
    suffixNode: <CheckCircle />
  }
}`,...(h=k.parameters)==null||(h=h.docs)==null?void 0:h.source}}},A.parameters={...A.parameters,docs:{...(g=A.parameters)?.docs,source:{originalSource:`{
  args: {
    titleNode: '標題',
    isInvalid: true,
    value: 'Enter text',
    messageNode: '這是錯誤訊息'
  }
}`,...(_=A.parameters)==null||(_=_.docs)==null?void 0:_.source}}},j.parameters={...j.parameters,docs:{...(v=j.parameters)?.docs,source:{originalSource:`{
  args: {
    titleNode: '標題',
    placeholder: 'Please enter text',
    helperNode: <Button variant="link">忘記密碼？</Button>
  }
}`,...(y=j.parameters)==null||(y=y.docs)==null?void 0:y.source}}},M.parameters={...M.parameters,docs:{...(b=M.parameters)?.docs,source:{originalSource:`{
  args: {
    type: 'password',
    value: 'thisispassword'
  }
}`,...(x=M.parameters)==null||(x=x.docs)==null?void 0:x.source}}};const N=[`Base`,`InputDisabled`,`InputChildren`,`InputPrefix`,`InputSuffix`,`InputInvalid`,`ShowHelper`,`InputPassword`];export{T as Base,D as InputChildren,E as InputDisabled,A as InputInvalid,M as InputPassword,O as InputPrefix,k as InputSuffix,j as ShowHelper,N as __namedExportsOrder,w as default};