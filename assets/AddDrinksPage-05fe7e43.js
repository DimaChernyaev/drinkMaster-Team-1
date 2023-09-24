import{c as x,r as h,j as e,u as C,a as v,b as d,d as D}from"./index-745c8caf.js";import{s as r,P as A}from"./styled-components.browser.esm-0b0cbf60.js";const V=r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 320px;

  background: ${x.colorBlueFifty};
  border-radius: 8px;

  position: relative;

  overflow: hidden;

  transition: background-color 0.3s ease-in-out;

  &:hover {
    background: #161f37;
  }
`,B=r.div`
  font-size: 16px;
  text-align: center;
`,S=r.input`
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
`,z=r.label`
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

    background: ${x.colorWhite};
    color: ${x.colorBlue};

    border-radius: 6px;
    transition: background-color 0.3s ease-in-out;
  }
`,W=r.div`
  /* width: 100%;
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 14px; */
`,q=r.div`
  position: relative;
  margin-bottom: 20px;
  width: 100%;
`,f=r.label`
  position: absolute;
  top: ${n=>n.$isFocused||n.$hasValue?"10px":"30px"};
  left: 10px;
  transform-origin: left;
  color: ${n=>n.$isFocused?"#F3F3F380":"#f3f3f3"};
  transition:
    transform 25ms,
    font-size 250ms,
    color 200ms;
  pointer-events: none;
  color: ${n=>n.$hasValue?"#3CBC81":"#F3F3F380"};
  font-size: ${n=>n.$isFocused||n.$hasValue?"12px":"14px"};
`,P=r.input`
  color: #f3f3f3;
  padding: 8px;
  outline: none;
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

  &:focus + ${f}, &:not(:placeholder-shown) + ${f} {
    transform: translate(10px, -30px) scale(0.8);
    font-size: 12px;
  }
`,R=r.div`
  position: relative;
  margin-bottom: 20px;
  width: 100%;
`,j=r.label`
  position: absolute;
  top: ${n=>n.$isFocusedDescription||n.$hasValueDescription?"10px":"30px"};
  left: 10px;
  transform-origin: left;
  color: ${n=>n.$isFocusedDescription?"#F3F3F380":"#f3f3f3"};
  transition:
    transform 25ms,
    font-size 250ms,
    color 200ms;
  pointer-events: none;
  color: ${n=>n.$hasValueDescription?"#3CBC81":"#F3F3F380"};
  font-size: ${n=>n.$isFocusedDescription||n.$hasValueDescription?"12px":"14px"};
`,T=r.textarea`
  resize: none;
  color: #f3f3f3;
  padding: 8px;
  outline: none;
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
    background-color: ${x.colorWhite};
    border-radius: 9em;
    /* box-shadow: inset 1px 1px 10px #f3faf7; */
  }
`,E=({values:n,errors:i,touched:o,handleChange:a,handleBlur:l,setFieldValue:u})=>{const m=t=>{const p=t.target.files[0];u("image",p)},[g,c]=h.useState(!1),[s,F]=h.useState(!1),[$,b]=h.useState(!1),[y,k]=h.useState(!1),I=t=>{const{value:p}=t.target;F(p.trim().length>1)},w=t=>{const{value:p}=t.target;k(p.trim().length>1)};return e.jsxs("div",{children:[e.jsxs(V,{children:[e.jsxs(B,{children:[e.jsx(S,{type:"file",id:"image",name:"image",onChange:m,accept:"image/*"}),e.jsxs(z,{htmlFor:"image",children:[" ",e.jsx("span",{children:"+"}),"Add image"]})]}),o.image&&i.image?e.jsx("div",{children:i.image}):null]}),e.jsxs(W,{children:[e.jsxs(q,{children:[e.jsx(f,{htmlFor:"name",$isFocused:g,$hasValue:s,children:"Enter item title"}),e.jsx(P,{type:"text",id:"name",name:"name",onChange:t=>{I(t),a(t)},onBlur:t=>{c(!1),l(t)},onFocus:()=>c(!0),value:n.name,placeholder:" "})]}),o.name&&i.name?e.jsx("div",{children:i.name}):null]}),e.jsxs(R,{children:[e.jsx(j,{htmlFor:"description",$isFocusedDescription:$,$hasValueDescription:y,children:"Enter about recipe"}),e.jsx(T,{rows:1,id:"description",name:"description",onChange:t=>{w(t),a(t)},onBlur:t=>{b(!1),l(t)},value:n.description,onFocus:()=>b(!0),placeholder:" "}),o.description&&i.description?e.jsx("div",{children:i.description}):null]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"category",children:"Категорія коктейлю"}),e.jsx("select",{id:"category",name:"category",onChange:a,onBlur:l,value:n.category}),o.category&&i.category?e.jsx("div",{children:i.category}):null]}),e.jsxs("div",{children:[e.jsx("label",{children:"Сервування"}),e.jsx("select",{id:"serving",name:"serving",onChange:a,onBlur:l,value:n.serving}),o.serving&&i.serving?e.jsx("div",{children:i.serving}):null]}),e.jsxs("div",{children:[e.jsx("label",{children:"Тип коктейлю"}),e.jsxs("div",{children:[e.jsxs("label",{children:[e.jsx("input",{type:"radio",name:"isAlcoholic",value:"true",checked:n.isAlcoholic==="true",onChange:a})," ","Алкогольний"]}),e.jsxs("label",{children:[e.jsx("input",{type:"radio",name:"isAlcoholic",value:"false",checked:n.isAlcoholic==="false",onChange:a})," ","Безалкогольний"]})]}),o.isAlcoholic&&i.isAlcoholic?e.jsx("div",{children:i.isAlcoholic}):null]})]})},N=({values:n,errors:i,touched:o,handleChange:a,handleBlur:l,setIngredientFieldValue:u})=>{const m=()=>{const c={name:""};u("ingredients",[...n.ingredients,c])},g=c=>{const s=[...n.ingredients];s.splice(c,1),u("ingredients",s)};return e.jsxs("div",{children:[e.jsx("h2",{children:"Інгредієнти"}),e.jsx("button",{type:"button",onClick:m,children:"Додати інгредієнт"}),n.ingredients.map((c,s)=>e.jsxs("div",{children:[e.jsxs("label",{htmlFor:`ingredients[${s}].name`,children:["Інгредієнт ",s+1]}),e.jsx("input",{type:"text",id:`ingredients[${s}].name`,name:`ingredients[${s}].name`,value:c.name,onChange:a,onBlur:l}),o.ingredients&&i.ingredients&&o.ingredients[s]&&i.ingredients[s]?e.jsx("div",{children:i.ingredients[s].name}):null,e.jsx("button",{type:"button",onClick:()=>g(s),children:"Видалити"})]},s))]})},L=({values:n,errors:i,touched:o,handleChange:a,handleBlur:l})=>e.jsxs("div",{children:[e.jsx("h2",{children:"Інструкції приготування"}),e.jsx("textarea",{id:"preparationInstructions",name:"preparationInstructions",rows:"6",onChange:a,onBlur:l,value:n.preparationInstructions}),o.preparationInstructions&&i.preparationInstructions?e.jsx("div",{children:i.preparationInstructions}):null]}),H=()=>{const n=C({initialValues:{name:"",ingredients:[{name:""}],preparationInstructions:"",category:"",serving:"",isAlcoholic:"false"},validationSchema:v({name:d().required("This field is mandatory"),ingredients:D().of(v().shape({name:d().required("This field is mandatory")})),preparationInstructions:d().required("This field is mandatory"),category:d().required("Select a cocktail category"),serving:d().required("Select the type of serving"),isAlcoholic:d().required("Select the type of cocktail")}),onSubmit:async i=>{}});return e.jsxs("form",{onSubmit:n.handleSubmit,children:[e.jsx(E,{values:n.values,errors:n.errors,touched:n.touched,handleChange:n.handleChange,handleBlur:n.handleBlur,setFieldValue:n.setFieldValue}),e.jsx(N,{values:n.values,errors:n.errors,touched:n.touched,handleChange:n.handleChange,handleBlur:n.handleBlur,setIngredientFieldValue:n.setFieldValue}),e.jsx(L,{values:n.values,errors:n.errors,touched:n.touched,handleChange:n.handleChange,handleBlur:n.handleBlur}),e.jsx("button",{type:"submit",children:"Додати"})]})},U=()=>e.jsx(e.Fragment,{children:e.jsx("div",{children:"FollowUs"})}),G=()=>e.jsx(e.Fragment,{children:e.jsx("div",{children:"PopularDrink"})}),J=()=>e.jsxs(e.Fragment,{children:[e.jsx(A,{title:"Add drink"}),e.jsx(H,{}),e.jsx(U,{}),e.jsx(G,{})]}),O=()=>e.jsx(J,{});export{O as default};
