import{c as l,r as g,j as o,u as A,a as v,b as p,d as S}from"./index-109cdff6.js";import{s as i,P as W}from"./styled-components.browser.esm-1cb5ef82.js";const x=i.div`
  font-size: 12px;
  color: #da1414;
  line-height: 14px;
  margin-top: 8px;
`,B=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 320px;

  background: ${l.colorBlueFifty};
  border-radius: 8px;

  position: relative;

  overflow: hidden;

  transition: background-color 0.3s ease-in-out;

  &:hover {
    background: #161f37;
  }
`,R=i.div`
  font-size: 16px;
  text-align: center;
`,L=i.input`
  &[type='file'] {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
    white-space: nowrap;
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;
  }
`,q=i.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  & span {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 40px;
    height: 40px;

    margin-bottom: 18px;

    background: ${l.colorWhite};
    color: ${l.colorBlue};

    border-radius: 6px;
    transition: background-color 0.3s ease-in-out;
  }
`,N=i.div`
  /* width: 100%;
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 14px; */
`,P=i.div`
  position: relative;
  width: 100%;
`,F=i.label`
  position: absolute;
  top: ${e=>e.$isFocused||e.$hasValue?"5px":"30px"};
  left: 10px;
  transform-origin: left;
  color: ${e=>e.$isFocused?"#F3F3F380":"#f3f3f3"};
  transition:
    transform 25ms,
    font-size 250ms,
    color 200ms;
  pointer-events: none;
  color: ${e=>e.$hasValue?"#3CBC81":"#F3F3F380"};
  font-size: ${e=>e.$isFocused||e.$hasValue?"12px":"14px"};
`,T=i.input`
  color: #f3f3f3;
  padding: 8px;
  border: 2px solid transparent;
  border-bottom: 1px solid #f3f3f380;
  background-color: transparent;
  transition: border-color 250ms;
  width: 100%;
  font-size: 14px;
  margin-top: 19px;

  &:focus {
    border-bottom: 1px solid;
  }

  &:focus + ${F}, &:not(:placeholder-shown) + ${F} {
    transform: translate(10px, -30px) scale(0.8);
    font-size: 12px;
  }
`,E=i.div`
  position: relative;
  width: 100%;
`,j=i.label`
  position: absolute;
  top: ${e=>e.$isFocusedDescription||e.$hasValueDescription?"5px":"30px"};
  left: 10px;
  transform-origin: left;
  color: ${e=>e.$isFocusedDescription?"#F3F3F380":"#f3f3f3"};
  transition:
    transform 25ms,
    font-size 250ms,
    color 200ms;
  pointer-events: none;
  color: ${e=>e.$hasValueDescription?"#3CBC81":"#F3F3F380"};
  font-size: ${e=>e.$isFocusedDescription||e.$hasValueDescription?"12px":"14px"};
`,H=i.textarea`
  resize: none;
  color: #f3f3f3;
  padding: 8px;
  border: 2px solid transparent;
  border-bottom: 1px solid #f3f3f380;
  background-color: transparent;
  transition: border-color 250ms;
  width: 100%;
  font-size: 14px;
  margin-top: 19px;

  &:focus {
    border-bottom: 1px solid;
  }

  &:focus + ${j}, &:not(:placeholder-shown) + ${j} {
    transform: translate(10px, -30px) scale(0.8);
    font-size: 12px;
  }
  &::-webkit-scrollbar {
    width: 8px; /* ширина для вертикального скролла */
    height: 8px; /* высота для горизонтального скролла */
    background-color: rgba(22, 31, 55, 0.5);
    border-radius: 9em;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${l.colorWhite};
    border-radius: 9em;
    /* box-shadow: inset 1px 1px 10px #f3faf7; */
  }
`,U=i.div`
  position: relative;
  color: #f3f3f380;
  padding: 8px;
  border: 2px solid transparent;
  border-bottom: 1px solid #f3f3f380;
  background-color: transparent;
  transition: border-color 250ms;
  width: 100%;
  font-size: 14px;
  margin-top: 20px;
`,G=i.label`
  position: absolute;
  top: ${e=>e.$isFocusedDescription||e.$hasValueDescription?"5px":"30px"};
  left: 10px;
  transform-origin: left;
  color: ${e=>e.$isFocusedDescription?"#F3F3F380":"#f3f3f3"};
  transition:
    transform 25ms,
    font-size 250ms,
    color 200ms;
  pointer-events: none;
  color: ${e=>e.$hasValueDescription?"#3CBC81":"#F3F3F380"};
  font-size: ${e=>e.$isFocusedDescription||e.$hasValueDescription?"12px":"14px"};
`,J=i.select`
  position: absolute;
  right: 10px;
  bottom: 50%;

  font-size: 14px;
  color: #f3f3f3;
  border: transparent;
  background-color: transparent;
  width: 80px;
  font-size: 14px;
  &::-webkit-scrollbar {
    width: 8px; /* ширина для вертикального скролла */
    height: 8px; /* высота для горизонтального скролла */
    background-color: rgba(22, 31, 55, 0.5);
    border-radius: 9em;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${l.colorWhite};
    border-radius: 9em;
    box-shadow: inset 1px 1px 10px #f3faf7;
  }
`,K=i.div`
  position: relative;
  color: #f3f3f380;
  padding: 8px;
  border: 2px solid transparent;
  border-bottom: 1px solid #f3f3f380;
  background-color: transparent;
  transition: border-color 250ms;
  width: 100%;
  font-size: 14px;
  margin-top: 20px;
`,M=i.label`
  position: absolute;
  top: ${e=>e.$isFocusedDescription||e.$hasValueDescription?"5px":"30px"};
  left: 10px;
  transform-origin: left;
  color: ${e=>e.$isFocusedDescription?"#F3F3F380":"#f3f3f3"};
  transition:
    transform 25ms,
    font-size 250ms,
    color 200ms;
  pointer-events: none;
  color: ${e=>e.$hasValueDescription?"#3CBC81":"#F3F3F380"};
  font-size: ${e=>e.$isFocusedDescription||e.$hasValueDescription?"12px":"14px"};
`,O=i.select`
  position: absolute;
  right: 10px;
  bottom: 50%;

  font-size: 14px;
  color: #f3f3f3;
  border: transparent;
  background-color: transparent;
  width: 80px;
  font-size: 14px;
  &::-webkit-scrollbar {
    width: 8px; /* ширина для вертикального скролла */
    height: 8px; /* высота для горизонтального скролла */
    background-color: rgba(22, 31, 55, 0.5);
    border-radius: 9em;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${l.colorWhite};
    border-radius: 9em;
    /* box-shadow: inset 1px 1px 10px #f3faf7; */
  }
`,Q=i.div`
  font-family: Arial, sans-serif;
  display: flex;
  flex-direction: row;
  align-items: center;

  margin-top: 40px;
  margin-left: 4px;
`;i.label`
  font-weight: bold;
  margin-right: 10px;
`;const X=i.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`,k=i.label`
  // Ваши стили для RadioLabel
  display: flex;
  align-items: center;
  margin-right: 20px;
  cursor: pointer;
  font-size: 14px;
  color: ${e=>e.checked?"#F3F3F3":"#F3F3F380"};

  &.checked {
    color: #f3f3f3;
  }
`,f=i.input`
  // Ваши стили для RadioInput
  &[type='radio'] {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
    white-space: nowrap;
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;
  }

`,y=i.span`
  position: relative;
  width: 16px;
  height: 16px;
  margin-right: 4px;
  border: 1.3px solid ${l.colorWhiteFifty};
  border-radius: 50%;
  box-sizing: border-box;


  ${f}:checked + & {
    border-color: ${l.colorWhite};
  }

  ${f}:checked + &::before {
    content: '';
    width: 8px;
    height: 8px;
    background-color: ${l.colorWhite};
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`,Y=({values:e,errors:t,touched:s,handleChange:a,handleBlur:c,setFieldValue:u})=>{const m=n=>{const h=n.target.files[0];u("image",h)},[b,d]=g.useState(!1),[r,w]=g.useState(!1),[D,$]=g.useState(!1),[C,I]=g.useState(!1),z=n=>{const{value:h}=n.target;w(h.trim().length>1)},V=n=>{const{value:h}=n.target;I(h.trim().length>25)};return o.jsxs(o.Fragment,{children:[o.jsxs(B,{children:[o.jsxs(R,{children:[o.jsx(L,{type:"file",id:"image",name:"image",onChange:m,accept:"image/*"}),o.jsxs(q,{htmlFor:"image",children:[" ",o.jsx("span",{children:"+"}),"Add image"]})]}),s.image&&t.image?o.jsx("div",{children:t.image}):null]}),o.jsx(N,{children:o.jsxs(P,{children:[o.jsx(F,{htmlFor:"name",$isFocused:b,$hasValue:r,children:"Enter item title"}),o.jsx(T,{type:"text",id:"name",name:"name",onChange:n=>{z(n),a(n)},onBlur:n=>{d(!1),c(n)},onFocus:()=>d(!0),value:e.name,placeholder:" "}),s.name&&t.name?o.jsx(x,{children:t.name}):null]})}),o.jsxs(E,{children:[o.jsx(j,{htmlFor:"description",$isFocusedDescription:D,$hasValueDescription:C,children:"Enter about recipe"}),o.jsx(H,{rows:1,maxLength:234,id:"description",name:"description",onChange:n=>{V(n),a(n)},onBlur:n=>{$(!1),c(n)},onFocus:()=>$(!0),value:e.description,placeholder:" "}),s.description&&t.description?o.jsx(x,{children:t.description}):null]}),o.jsxs(U,{children:["Category",o.jsx(G,{htmlFor:"category"}),o.jsx(J,{id:"category",name:"category",onChange:a,onBlur:c,value:e.category,children:o.jsx("option",{value:"",children:"Cocktail"})})]}),s.category&&t.category?o.jsx(x,{children:t.category}):null,o.jsxs(K,{children:["Glass",o.jsx(M,{htmlFor:"serving"}),o.jsx(O,{id:"serving",name:"serving",onChange:a,onBlur:c,value:e.serving,children:o.jsx("option",{value:"",children:"Serving"})})]}),s.serving&&t.serving?o.jsx(x,{children:t.serving}):null,o.jsxs(Q,{children:[o.jsxs(X,{children:[o.jsxs(k,{className:e.isAlcoholic==="true"?"checked":"",children:[o.jsx(f,{type:"radio",name:"isAlcoholic",value:"true",checked:e.isAlcoholic==="true",onChange:a}),o.jsx(y,{}),"Alcoholic"]}),o.jsxs(k,{className:e.isAlcoholic==="false"?"checked":"",children:[o.jsx(f,{type:"radio",name:"isAlcoholic",value:"false",checked:e.isAlcoholic==="false",onChange:a}),o.jsx(y,{}),"Non-alcoholic"]})]}),s.isAlcoholic&&t.isAlcoholic?o.jsx(x,{children:t.isAlcoholic}):null]})]})},Z=({values:e,errors:t,touched:s,handleChange:a,handleBlur:c,setIngredientFieldValue:u})=>{const m=()=>{const d={name:""};u("ingredients",[...e.ingredients,d])},b=d=>{const r=[...e.ingredients];r.splice(d,1),u("ingredients",r)};return o.jsxs("div",{children:[o.jsx("h2",{children:"Інгредієнти"}),o.jsx("button",{type:"button",onClick:m,children:"Додати інгредієнт"}),e.ingredients.map((d,r)=>o.jsxs("div",{children:[o.jsxs("label",{htmlFor:`ingredients[${r}].name`,children:["Інгредієнт ",r+1]}),o.jsx("input",{type:"text",id:`ingredients[${r}].name`,name:`ingredients[${r}].name`,value:d.name,onChange:a,onBlur:c}),s.ingredients&&t.ingredients&&s.ingredients[r]&&t.ingredients[r]?o.jsx("div",{children:t.ingredients[r].name}):null,o.jsx("button",{type:"button",onClick:()=>b(r),children:"Видалити"})]},r))]})},_=({values:e,errors:t,touched:s,handleChange:a,handleBlur:c})=>o.jsxs("div",{children:[o.jsx("h2",{children:"Інструкції приготування"}),o.jsx("textarea",{id:"preparationInstructions",name:"preparationInstructions",rows:"6",onChange:a,onBlur:c,value:e.preparationInstructions}),s.preparationInstructions&&t.preparationInstructions?o.jsx("div",{children:t.preparationInstructions}):null]}),ee=()=>{const e=A({initialValues:{name:"",ingredients:[{name:""}],preparationInstructions:"",category:"",serving:"",isAlcoholic:"false"},validationSchema:v({name:p().required("This field is mandatory"),description:p().required("This field is mandatory"),ingredients:S().of(v().shape({name:p().required("This field is mandatory")})),preparationInstructions:p().required("This field is mandatory"),category:p().required("Select a cocktail category"),serving:p().required("Select the type of serving"),isAlcoholic:p().required("Select the type of cocktail")}),onSubmit:async t=>{}});return o.jsxs("form",{onSubmit:e.handleSubmit,children:[o.jsx(Y,{values:e.values,errors:e.errors,touched:e.touched,handleChange:e.handleChange,handleBlur:e.handleBlur,setFieldValue:e.setFieldValue}),o.jsx(Z,{values:e.values,errors:e.errors,touched:e.touched,handleChange:e.handleChange,handleBlur:e.handleBlur,setIngredientFieldValue:e.setFieldValue}),o.jsx(_,{values:e.values,errors:e.errors,touched:e.touched,handleChange:e.handleChange,handleBlur:e.handleBlur}),o.jsx("button",{type:"submit",children:"Додати"})]})},oe=()=>o.jsx(o.Fragment,{children:o.jsx("div",{children:"FollowUs"})}),ie=()=>o.jsx(o.Fragment,{children:o.jsx("div",{children:"PopularDrink"})}),te=()=>o.jsxs(o.Fragment,{children:[o.jsx(W,{title:"Add drink"}),o.jsx(ee,{}),o.jsx(oe,{}),o.jsx(ie,{})]}),se=()=>o.jsx(te,{});export{se as default};
