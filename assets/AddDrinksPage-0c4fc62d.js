import{n as c,j as e,u as p,c as g,a as o,b as x}from"./index-4d3ad070.js";import{P as m}from"./PageTitle-aa7f2093.js";const j=c.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 335px;
  height: 320px;

  background: rgba(22, 31, 55, 0.5);
  border-radius: 8px;

  position: relative;

  overflow: hidden;

  transition: background-color 0.3s ease-in-out;

  &:hover {
    background: #161f37;
  }
`,v=c.div`
  font-size: 16px;
  text-align: center;
`,b=c.input`
  &[type='file'] {
    display: none;
  }
`,f=c.label`
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

    background: #f3f3f3;
    color: #161f37;

    border-radius: 6px;
    transition: background-color 0.3s ease-in-out;
  }
`,y=({values:n,errors:i,touched:s,handleChange:t,handleBlur:l,setFieldValue:d})=>{const u=h=>{const a=h.target.files[0];d("image",a)};return e.jsxs("div",{children:[e.jsxs(j,{children:[e.jsxs(v,{children:[e.jsx(b,{type:"file",id:"image",name:"image",onChange:u,accept:"image/*"}),e.jsxs(f,{htmlFor:"image",children:[" ",e.jsx("span",{children:"+"}),"Add image"]})]}),s.image&&i.image?e.jsx("div",{children:i.image}):null]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"name",children:"Назва коктейлю"}),e.jsx("input",{type:"text",id:"name",name:"name",onChange:t,onBlur:l,value:n.name}),s.name&&i.name?e.jsx("div",{children:i.name}):null]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"description",children:"Опис коктейлю"}),e.jsx("textarea",{id:"description",name:"description",onChange:t,onBlur:l,value:n.description}),s.description&&i.description?e.jsx("div",{children:i.description}):null]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"category",children:"Категорія коктейлю"}),e.jsx("select",{id:"category",name:"category",onChange:t,onBlur:l,value:n.category}),s.category&&i.category?e.jsx("div",{children:i.category}):null]}),e.jsxs("div",{children:[e.jsx("label",{children:"Сервування"}),e.jsx("select",{id:"serving",name:"serving",onChange:t,onBlur:l,value:n.serving}),s.serving&&i.serving?e.jsx("div",{children:i.serving}):null]}),e.jsxs("div",{children:[e.jsx("label",{children:"Тип коктейлю"}),e.jsxs("div",{children:[e.jsxs("label",{children:[e.jsx("input",{type:"radio",name:"isAlcoholic",value:"true",checked:n.isAlcoholic==="true",onChange:t})," ","Алкогольний"]}),e.jsxs("label",{children:[e.jsx("input",{type:"radio",name:"isAlcoholic",value:"false",checked:n.isAlcoholic==="false",onChange:t})," ","Безалкогольний"]})]}),s.isAlcoholic&&i.isAlcoholic?e.jsx("div",{children:i.isAlcoholic}):null]})]})},k=({values:n,errors:i,touched:s,handleChange:t,handleBlur:l,setIngredientFieldValue:d})=>{const u=()=>{const a={name:""};d("ingredients",[...n.ingredients,a])},h=a=>{const r=[...n.ingredients];r.splice(a,1),d("ingredients",r)};return e.jsxs("div",{children:[e.jsx("h2",{children:"Інгредієнти"}),e.jsx("button",{type:"button",onClick:u,children:"Додати інгредієнт"}),n.ingredients.map((a,r)=>e.jsxs("div",{children:[e.jsxs("label",{htmlFor:`ingredients[${r}].name`,children:["Інгредієнт ",r+1]}),e.jsx("input",{type:"text",id:`ingredients[${r}].name`,name:`ingredients[${r}].name`,value:a.name,onChange:t,onBlur:l}),s.ingredients&&i.ingredients&&s.ingredients[r]&&i.ingredients[r]?e.jsx("div",{children:i.ingredients[r].name}):null,e.jsx("button",{type:"button",onClick:()=>h(r),children:"Видалити"})]},r))]})},I=({values:n,errors:i,touched:s,handleChange:t,handleBlur:l})=>e.jsxs("div",{children:[e.jsx("h2",{children:"Інструкції приготування"}),e.jsx("textarea",{id:"preparationInstructions",name:"preparationInstructions",rows:"6",onChange:t,onBlur:l,value:n.preparationInstructions}),s.preparationInstructions&&i.preparationInstructions?e.jsx("div",{children:i.preparationInstructions}):null]}),F=()=>{const n=p({initialValues:{name:"",ingredients:[{name:""}],preparationInstructions:"",category:"",serving:"",isAlcoholic:"false"},validationSchema:g({name:o().required("Це поле обовʼязкове для заповнення"),ingredients:x().of(g().shape({name:o().required("Це поле обовʼязкове для заповнення")})),preparationInstructions:o().required("Це поле обовʼязкове для заповнення"),category:o().required("Виберіть категорію коктейлю"),serving:o().required("Виберіть тип сервування"),isAlcoholic:o().required("Виберіть тип коктейлю")}),onSubmit:async i=>{}});return e.jsxs("form",{onSubmit:n.handleSubmit,children:[e.jsx(y,{values:n.values,errors:n.errors,touched:n.touched,handleChange:n.handleChange,handleBlur:n.handleBlur,setFieldValue:n.setFieldValue}),e.jsx(k,{values:n.values,errors:n.errors,touched:n.touched,handleChange:n.handleChange,handleBlur:n.handleBlur,setIngredientFieldValue:n.setFieldValue}),e.jsx(I,{values:n.values,errors:n.errors,touched:n.touched,handleChange:n.handleChange,handleBlur:n.handleBlur}),e.jsx("button",{type:"submit",children:"Додати"})]})},A=()=>e.jsx(e.Fragment,{children:e.jsx("div",{children:"FollowUs"})}),C=()=>e.jsx(e.Fragment,{children:e.jsx("div",{children:"PopularDrink"})}),w=()=>e.jsxs(e.Fragment,{children:[e.jsx(m,{title:"Add drink"}),e.jsx(F,{}),e.jsx(A,{}),e.jsx(C,{})]}),q=()=>e.jsx(w,{});export{q as default};
