import{n as c,j as e,u as x,c as g,a as o,b as p}from"./index-a951da0b.js";const m=c.h2`
  font-size: 32px;
  font-weight: 600;
  line-height: 1.1875;

  margin-top: 80px;
  margin-bottom: 40px;
`,j=({title:n})=>e.jsx(e.Fragment,{children:e.jsx(m,{children:n})}),v=c.div`
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
`,b=c.div`
  font-size: 16px;
  text-align: center;
`,f=c.input`
  &[type='file'] {
    display: none;
  }
`,y=c.label`
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
`,k=({values:n,errors:i,touched:r,handleChange:s,handleBlur:l,setFieldValue:d})=>{const h=u=>{const a=u.target.files[0];d("image",a)};return e.jsxs("div",{children:[e.jsxs(v,{children:[e.jsxs(b,{children:[e.jsx(f,{type:"file",id:"image",name:"image",onChange:h,accept:"image/*"}),e.jsxs(y,{htmlFor:"image",children:[" ",e.jsx("span",{children:"+"}),"Add image"]})]}),r.image&&i.image?e.jsx("div",{children:i.image}):null]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"name",children:"Назва коктейлю"}),e.jsx("input",{type:"text",id:"name",name:"name",onChange:s,onBlur:l,value:n.name}),r.name&&i.name?e.jsx("div",{children:i.name}):null]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"description",children:"Опис коктейлю"}),e.jsx("textarea",{id:"description",name:"description",onChange:s,onBlur:l,value:n.description}),r.description&&i.description?e.jsx("div",{children:i.description}):null]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"category",children:"Категорія коктейлю"}),e.jsx("select",{id:"category",name:"category",onChange:s,onBlur:l,value:n.category}),r.category&&i.category?e.jsx("div",{children:i.category}):null]}),e.jsxs("div",{children:[e.jsx("label",{children:"Сервування"}),e.jsx("select",{id:"serving",name:"serving",onChange:s,onBlur:l,value:n.serving}),r.serving&&i.serving?e.jsx("div",{children:i.serving}):null]}),e.jsxs("div",{children:[e.jsx("label",{children:"Тип коктейлю"}),e.jsxs("div",{children:[e.jsxs("label",{children:[e.jsx("input",{type:"radio",name:"isAlcoholic",value:"true",checked:n.isAlcoholic==="true",onChange:s})," ","Алкогольний"]}),e.jsxs("label",{children:[e.jsx("input",{type:"radio",name:"isAlcoholic",value:"false",checked:n.isAlcoholic==="false",onChange:s})," ","Безалкогольний"]})]}),r.isAlcoholic&&i.isAlcoholic?e.jsx("div",{children:i.isAlcoholic}):null]})]})},F=({values:n,errors:i,touched:r,handleChange:s,handleBlur:l,setIngredientFieldValue:d})=>{const h=()=>{const a={name:""};d("ingredients",[...n.ingredients,a])},u=a=>{const t=[...n.ingredients];t.splice(a,1),d("ingredients",t)};return e.jsxs("div",{children:[e.jsx("h2",{children:"Інгредієнти"}),e.jsx("button",{type:"button",onClick:h,children:"Додати інгредієнт"}),n.ingredients.map((a,t)=>e.jsxs("div",{children:[e.jsxs("label",{htmlFor:`ingredients[${t}].name`,children:["Інгредієнт ",t+1]}),e.jsx("input",{type:"text",id:`ingredients[${t}].name`,name:`ingredients[${t}].name`,value:a.name,onChange:s,onBlur:l}),r.ingredients&&i.ingredients&&r.ingredients[t]&&i.ingredients[t]?e.jsx("div",{children:i.ingredients[t].name}):null,e.jsx("button",{type:"button",onClick:()=>u(t),children:"Видалити"})]},t))]})},I=({values:n,errors:i,touched:r,handleChange:s,handleBlur:l})=>e.jsxs("div",{children:[e.jsx("h2",{children:"Інструкції приготування"}),e.jsx("textarea",{id:"preparationInstructions",name:"preparationInstructions",rows:"6",onChange:s,onBlur:l,value:n.preparationInstructions}),r.preparationInstructions&&i.preparationInstructions?e.jsx("div",{children:i.preparationInstructions}):null]}),A=()=>{const n=x({initialValues:{name:"",ingredients:[{name:""}],preparationInstructions:"",category:"",serving:"",isAlcoholic:"false"},validationSchema:g({name:o().required("Це поле обовʼязкове для заповнення"),ingredients:p().of(g().shape({name:o().required("Це поле обовʼязкове для заповнення")})),preparationInstructions:o().required("Це поле обовʼязкове для заповнення"),category:o().required("Виберіть категорію коктейлю"),serving:o().required("Виберіть тип сервування"),isAlcoholic:o().required("Виберіть тип коктейлю")}),onSubmit:async i=>{}});return e.jsxs("form",{onSubmit:n.handleSubmit,children:[e.jsx(k,{values:n.values,errors:n.errors,touched:n.touched,handleChange:n.handleChange,handleBlur:n.handleBlur,setFieldValue:n.setFieldValue}),e.jsx(F,{values:n.values,errors:n.errors,touched:n.touched,handleChange:n.handleChange,handleBlur:n.handleBlur,setIngredientFieldValue:n.setFieldValue}),e.jsx(I,{values:n.values,errors:n.errors,touched:n.touched,handleChange:n.handleChange,handleBlur:n.handleBlur}),e.jsx("button",{type:"submit",children:"Додати"})]})},C=()=>e.jsx(e.Fragment,{children:e.jsx("div",{children:"FollowUs"})}),w=()=>e.jsx(e.Fragment,{children:e.jsx("div",{children:"PopularDrink"})}),B=()=>e.jsxs(e.Fragment,{children:[e.jsx(j,{title:"Add drink"}),e.jsx(A,{}),e.jsx(C,{}),e.jsx(w,{})]}),q=()=>e.jsx(B,{});export{q as default};
