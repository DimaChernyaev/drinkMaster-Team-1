import{s as r,c as n,r as l,a as K,j as o,u as Q,b as M,d as b,e as Z,M as ee,f as z,F as V,S as oe,g as te,h as ne}from"./index-934362ea.js";import{P as re}from"./PageTitle-fe0048f9.js";import{g as ie,b as se,a as ae}from"./operationsFilters-0acefc41.js";import{u as le,S as ce}from"./useStateManager-7e1e8489.esm-74ce711d.js";const de=r.button`
  margin-top: 20px;

  padding-top: 14px;
  padding-right: 40px;
  padding-bottom: 14px;
  padding-left: 40px;

  font-size: 14px;
  font-family: Manrope;
  font-weight: 600;
  line-height: 18px;

  color: ${n.colorBlue};
  background-color: ${n.colorWhite};

  border: none;
  border-radius: 42px;
  word-wrap: break-word;
  &:hover {
    color: ${n.colorWhite};
    background-color: ${n.colorBlue};
  }
`,pe=e=>l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:29,height:28,...e},l.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.8,d:"M14.5 5.833v16.334M6.332 14h16.333"}));var he=l.forwardRef(function(e,s){var t=le(e);return l.createElement(ce,K({ref:s},t))}),B=he;const $=r.div`
  font-size: 12px;
  color: #da1414;
  line-height: 14px;
  margin-top: 8px;
`,ge=r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 320px;

  background: ${n.colorBlueFifty};
  border-radius: 8px;

  position: relative;

  overflow: hidden;

  transition: background-color 0.3s ease-in-out;

  &:hover {
    background: #161f37;
  }
`,ue=r.img`
  width: 100%; /* Максимальная ширина изображения равна ширине родителя */
  height: auto; /* Автоматическая высота, чтобы сохранить соотношение сторон */
  display: block;
`,xe=r.div`
  font-size: 16px;
  text-align: center;
  margin-bottom: 18px;
`,fe=r.input`
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
`,me=r.label`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 6px;

  cursor: pointer;
`,be=r(pe)`
  width: 28px;
  height: 28px;
  color: green;
  fill: red;
  stroke: ${n.colorBlue};
`,Fe=r.div`
  /* width: 100%;
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 14px; */
`,$e=r.div`
  position: relative;
  width: 100%;
`,L=r.label`
  position: absolute;
  top: ${e=>e.$isFocused||e.$hasValue?"3px":"30px"};
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
`,we=r.input`
  color: #f3f3f3;
  padding: 8px;
  border: 1px solid transparent;
  border-bottom: 1px solid #f3f3f380;
  background-color: transparent;
  transition: border-color 250ms;
  width: 100%;
  font-size: 14px;
  margin-top: 19px;

  &:focus {
    border-bottom: 1px solid;
  }

  &:focus + ${L}, &:not(:placeholder-shown) + ${L} {
    transform: translate(10px, -30px) scale(0.8);
    font-size: 12px;
  }
`,je=r.div`
  position: relative;
  width: 100%;
`,R=r.label`
  position: absolute;
  top: ${e=>e.$isFocusedDescription||e.$hasValueDescription?"3px":"30px"};
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
`,ve=r.textarea`
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

  &:focus + ${R}, &:not(:placeholder-shown) + ${R} {
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
    background-color: ${n.colorWhite};
    border-radius: 9em;
    /* box-shadow: inset 1px 1px 10px #f3faf7; */
  }
`,ye=r.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  color: #f3f3f380;
  padding: 8px;
  border: 2px solid transparent;
  border-bottom: 1px solid #f3f3f380;
  background-color: transparent;
  transition: border-color 250ms;
  width: 100%;
  font-size: 14px;
`,ke=r.label`
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
`,We=({options:e,...s})=>o.jsx(B,{...s,options:e,styles:{container:t=>({...t,width:"240px"}),control:(t,i)=>({...t,backgroundColor:"transparent",border:(i.isFocused,"none")}),placeholder:(t,i)=>({...t,margin:0,color:i.isFocused?`${n.colorWhite}`:`${n.colorWhiteFifty}`}),option:t=>({...t,padding:"14px",color:`${n.colorWhiteFifty}`,background:"#161F37",borderRadius:"20px",overflow:"hidden",cursor:"pointer","&:hover":{color:`${n.colorWhite}`}}),input:t=>({...t,padding:0,margin:0,border:"none",color:`${n.colorWhite}`}),menu:t=>({...t,padding:"14px",background:"#161F37",borderRadius:"20px",overflow:"hidden"}),indicatorSeparator:t=>({...t,display:"none"}),singleValue:(t,i)=>({...t,textAlign:"right",color:i.isFocused?`${n.colorWhiteFifty}`:`${n.colorWhite}`}),valueContainer:t=>({...t,padding:0}),dropdownIndicator:(t,i)=>({...t,transform:i.isFocused?"rotate(180deg)":"rotate(0deg)"})}}),Se=r.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #f3f3f380;
  padding: 8px;
  border: 2px solid transparent;
  border-bottom: 1px solid #f3f3f380;
  background-color: transparent;
  transition: border-color 250ms;
  width: 100%;
  font-size: 14px;
  margin-top: 20px;
`,Ce=r.label`
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
`,Ie=({options:e,...s})=>o.jsx(B,{...s,options:e,styles:{container:t=>({...t,width:"240px"}),control:(t,i)=>({...t,backgroundColor:"transparent",border:(i.isFocused,"none")}),placeholder:(t,i)=>({...t,margin:0,color:i.isFocused?`${n.colorWhite}`:`${n.colorWhiteFifty}`}),option:t=>({...t,padding:"14px",color:`${n.colorWhiteFifty}`,background:"#161F37",borderRadius:"20px",overflow:"hidden",cursor:"pointer","&:hover":{color:`${n.colorWhite}`}}),input:t=>({...t,padding:0,margin:0,border:"none",color:`${n.colorWhite}`}),menu:t=>({...t,padding:"14px",background:"#161F37",borderRadius:"20px",overflow:"hidden"}),indicatorSeparator:t=>({...t,display:"none"}),singleValue:(t,i)=>({...t,textAlign:"right",color:i.isFocused?`${n.colorWhiteFifty}`:`${n.colorWhite}`}),valueContainer:t=>({...t,padding:0}),dropdownIndicator:(t,i)=>({...t,transform:i.isFocused?"rotate(180deg)":"rotate(0deg)"})}}),De=r.div`
  font-family: Arial, sans-serif;
  display: flex;
  flex-direction: row;
  align-items: center;

  margin-top: 40px;
  margin-left: 4px;
`;r.label`
  font-weight: bold;
  margin-right: 10px;
`;const ze=r.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`,O=r.label`
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
`,I=r.input`
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
`,P=r.span`
  position: relative;
  width: 16px;
  height: 16px;
  margin-right: 4px;
  border: 1.3px solid ${n.colorWhiteFifty};
  border-radius: 50%;
  box-sizing: border-box;

  ${I}:checked + & {
    border-color: ${n.colorWhite};
  }

  ${I}:checked + &::before {
    content: '';
    width: 8px;
    height: 8px;
    background-color: ${n.colorWhite};
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`,Ve=({values:e,errors:s,touched:t,handleChange:i,handleBlur:f,setFieldValue:g})=>{const[F,w]=l.useState([]),[j,m]=l.useState([]),[p,v]=l.useState([]),[W,S]=l.useState([]);l.useEffect(()=>{async function a(){try{const D=(await ie()).map(k=>({value:k,label:k}));w(D)}catch(y){console.error("Ошибка при загрузке категорий:",y)}}async function x(){try{const D=(await se()).map(k=>({value:k,label:k}));v(D)}catch(y){console.error("Ошибка при загрузке категорий:",y)}}a(),x()},[]);const[d,c]=l.useState(null),[u,h]=l.useState(!1),[C,T]=l.useState(!1),[q,E]=l.useState(!1),[N,U]=l.useState(!1),H=a=>{const x=a.target.files[0];g("image",x),c(x?URL.createObjectURL(x):null)},X=a=>{const{value:x}=a.target;T(x.trim().length>1)},Y=a=>{const{value:x}=a.target;U(x.trim().length>25)},_=a=>{m(a),g("category",a.value)},J=a=>{S(a),g("serving",a.value)};return o.jsxs(o.Fragment,{children:[o.jsxs(ge,{children:[o.jsxs(xe,{children:[o.jsx(fe,{type:"file",id:"image",name:"image",onChange:a=>H(a),accept:"image/*"}),o.jsx(me,{htmlFor:"image",children:o.jsx(be,{})})]}),o.jsx("p",{children:"Add image"}),d&&o.jsx(ue,{src:d,alt:"Selected"}),t.image&&s.image?o.jsx($,{children:s.image}):null]}),o.jsx(Fe,{children:o.jsxs($e,{children:[o.jsx(L,{htmlFor:"name",$isFocused:u,$hasValue:C,children:"Enter item title"}),o.jsx(we,{type:"text",id:"name",name:"name",onChange:a=>{X(a),i(a)},onBlur:a=>{h(!1),f(a)},onFocus:()=>h(!0),value:e.name,placeholder:" "}),t.name&&s.name?o.jsx($,{children:s.name}):null]})}),o.jsxs(je,{children:[o.jsx(R,{htmlFor:"description",$isFocusedDescription:q,$hasValueDescription:N,children:"Enter about recipe"}),o.jsx(ve,{rows:1,maxLength:234,id:"description",name:"description",onChange:a=>{Y(a),i(a)},onBlur:a=>{E(!1),f(a)},onFocus:()=>E(!0),value:e.description,placeholder:" "}),t.description&&s.description?o.jsx($,{children:s.description}):null]}),o.jsxs(ye,{children:["Category",o.jsx(ke,{htmlFor:"category"}),o.jsx(We,{name:"category",options:F,value:j,onChange:a=>_(a),placeholder:""})]}),t.category&&s.category?o.jsx($,{children:s.category}):null,o.jsxs(Se,{children:["Glass",o.jsx(Ce,{htmlFor:"serving"}),o.jsx(Ie,{name:"serving",options:p,value:W,onChange:a=>J(a),placeholder:""})]}),t.serving&&s.serving?o.jsx($,{children:s.serving}):null,o.jsxs(De,{children:[o.jsxs(ze,{children:[o.jsxs(O,{className:e.isAlcoholic==="true"?"checked":"",children:[o.jsx(I,{type:"radio",name:"isAlcoholic",value:"true",checked:e.isAlcoholic==="true",onChange:i}),o.jsx(P,{}),"Alcoholic"]}),o.jsxs(O,{className:e.isAlcoholic==="false"?"checked":"",children:[o.jsx(I,{type:"radio",name:"isAlcoholic",value:"false",checked:e.isAlcoholic==="false",onChange:i}),o.jsx(P,{}),"Non-alcoholic"]})]}),t.isAlcoholic&&s.isAlcoholic?o.jsx($,{children:s.isAlcoholic}):null]})]})},Le=e=>l.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},l.createElement("path",{d:"M2.5 8H13.5",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}),l.createElement("path",{d:"M8 2.5V13.5",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),Re=e=>l.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},l.createElement("path",{d:"M2.5 8H13.5",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),Be=e=>l.createElement("svg",{width:20,height:20,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},l.createElement("path",{d:"M15.625 4.375L4.375 15.625",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}),l.createElement("path",{d:"M15.625 15.625L4.375 4.375",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),Ae=r.div`
  flex-basis: 100%;
  font-size: 12px;
  color: #da1414;
  line-height: 14px;
  margin-top: 4px;
  padding-left: 20px;
  margin-top: 8px;
`,Ee=r.div`
  margin-top: 80px;
`,Me=r.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
`,Oe=r.h3`
  font-size: 28px;
`,Pe=r.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  width: 104px;
  height: 38px;
  border-radius: 200px;
  border: 1px solid ${n.colorWhiteFifty};
`,A=r(Re)`
  stroke: ${n.colorWhite};
`,G=r.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  background: transparent;
  border: none;
  &:disabled ${A} {
    stroke: ${n.colorWhiteFifty};
  }
`,Ge=r.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  margin-bottom: 24px;
`,Te=({options:e,...s})=>o.jsx(B,{...s,options:e,styles:{container:t=>({...t,minWidth:"60%"}),control:(t,i)=>({...t,height:"auto",padding:"16px",backgroundColor:"transparent",border:i.isFocused?`1px solid ${n.colorWhite}`:`1px solid ${n.colorWhiteFifty}`,borderRadius:"200px","&:hover":{borderColor:`${n.colorWhite}`}}),placeholder:(t,i)=>({...t,margin:0,color:i.isFocused?`${n.colorWhite}`:`${n.colorWhiteFifty}`}),option:t=>({...t,padding:"14px",color:`${n.colorWhiteFifty}`,background:"#161F37",borderRadius:"20px",overflow:"hidden",cursor:"pointer","&:hover":{color:`${n.colorWhite}`}}),input:t=>({...t,padding:0,margin:0,border:"none",color:`${n.colorWhite}`}),menu:t=>({...t,padding:"14px",background:"#161F37",borderRadius:"20px",overflow:"hidden"}),indicatorSeparator:t=>({...t,display:"none"}),singleValue:(t,i)=>({...t,color:i.isFocused?`${n.colorWhiteFifty}`:`${n.colorWhite}`}),valueContainer:t=>({...t,padding:0}),dropdownIndicator:(t,i)=>({...t,transform:i.isFocused?"rotate(180deg)":"rotate(0deg)"})}}),qe=r.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  margin-left: 40px;

  font-size: 14px;
  background: transparent;
  border: none;
  &:disabled ${A} {
    stroke: ${n.colorWhiteFifty};
  }
`,Ne=r(Le)`
  stroke: ${n.colorWhite};
`,Ue=r(Be)`
  stroke: ${n.colorWhiteFifty};
  &:hover {
    stroke: ${n.colorWhite};
  }
`,He=r.input`
  min-width: 20%;
  height: 60px;
  padding: 16px 24px;

  font-size: 14px;
  line-height: 18px;
  color: ${n.colorWhiteFifty};
  background-color: transparent;

  border-radius: 200px;
  border: 1px rgba(243, 243, 243, 0.5) solid;
  box-sizing: border-box;
  &:hover {
    border-color: ${n.colorWhite};
  }
  &:focus {
    color: ${n.colorWhite};
  }
`,Xe=({values:e,errors:s,touched:t,handleChange:i,handleBlur:f,setFieldValue:g})=>{const[F,w]=l.useState([]),[j,m]=l.useState([]);l.useEffect(()=>{async function d(){try{const u=(await ae()).map(h=>({label:h.title,value:h.title}));w(u)}catch(c){console.error("Ошибка при загрузке ингридиента:",c)}}d()},[]);const p=(d,c)=>{const{value:u}=d;g(`ingredients[${c}].name`,u),m(h=>{const C=[...h];return C[c]=d,C})},v=()=>{const d={name:""};g("ingredients",[...e.ingredients,d]),m(c=>[...c,null])},W=d=>{const c=[...e.ingredients];c.splice(d,1),g("ingredients",c),m(u=>{const h=[...u];return h.splice(d,1),h})},S=e.ingredients.length===1;return o.jsxs(Ee,{children:[o.jsxs(Me,{children:[o.jsx(Oe,{children:"Ingredients"}),o.jsxs(Pe,{children:[o.jsx(G,{type:"button",onClick:()=>W(e.ingredients.length-1),disabled:S,children:o.jsx(A,{})}),o.jsx("div",{children:e.ingredients.length}),o.jsx(G,{type:"button",onClick:v,children:o.jsx(Ne,{})})]})]}),e.ingredients.map((d,c)=>o.jsxs(Ge,{children:[o.jsx(Te,{name:`ingredients[${c}].name`,options:F,value:j[c],onChange:u=>p(u,c),onBlur:f}),o.jsx(He,{type:"text",name:`ingredients[${c}].amount`,placeholder:"1 cl",value:d.amount||"",onChange:i,onBlur:f}),o.jsx(qe,{type:"button",onClick:()=>W(c),disabled:S,children:o.jsx(Ue,{})}),t.ingredients&&s.ingredients&&t.ingredients[c]&&s.ingredients[c]?o.jsx(Ae,{children:s.ingredients[c].name}):null]},c))]})},Ye=r.div`
  font-size: 12px;
  color: #da1414;
  line-height: 14px;
  margin-top: 8px;
`,_e=r.h3`
  color: ${n.colorWhite};
  font-family: Manrope;
  font-size: 28px;
  font-weight: 600;
  line-height: 32px;
  word-wrap: break-word;
  margin-top: 80px;
  margin-bottom: 40px;
`,Je=r.div`
  position: relative;
  width: 100%;
`,Ke=r.label`
  position: absolute;
  top: ${e=>e.$isFocusedDescription||e.$hasValueDescription?"-30px":"30px"};
  left: 18px;
  transform-origin: left;
  color: ${e=>e.$isFocusedDescription?"#F3F3F380":"#f3f3f3"};
  transition:
    transform 25ms,
    font-size 250ms,
    color 200ms;
  pointer-events: none;
  color: ${e=>e.$hasValueDescription?"#3CBC81":"#F3F3F380"};
  font-size: 14px;
`,Qe=r.textarea`
  resize: none;
  width: 100%;
  height: 184px;
  padding: 8px;
  border-radius: 14px;
  border: 1px solid ${n.colorWhiteFifty};
  background-color: transparent;
  color: ${n.colorWhite};
  font-size: 16px;
  font-family: Manrope;
  font-weight: 600;
  line-height: 18px;
  word-wrap: break-word;
`,Ze=({values:e,errors:s,touched:t,handleChange:i,handleBlur:f})=>{const[g,F]=l.useState(!1),[w,j]=l.useState(!1),m=p=>{const{value:v}=p.target;j(v.trim().length>25)};return o.jsxs(o.Fragment,{children:[o.jsx(_e,{children:"Recipe Preparation"}),o.jsxs(Je,{children:[o.jsx(Ke,{htmlFor:"preparationInstructions",$isFocusedDescription:g,$hasValueDescription:w,children:"Enter the recipe"}),o.jsx(Qe,{id:"preparationInstructions",name:"preparationInstructions",rows:"6",onChange:p=>{m(p),i(p)},onBlur:p=>{F(!1),f(p)},onFocus:()=>F(!0),value:e.preparationInstructions,placeholder:" "}),t.preparationInstructions&&s.preparationInstructions?o.jsx(Ye,{children:s.preparationInstructions}):null]})]})},eo=()=>{const e=Q({initialValues:{name:"",ingredients:[{name:""}],preparationInstructions:"",category:"",serving:"",isAlcoholic:"false"},validationSchema:M({name:b().required("This field is mandatory"),description:b().required("This field is mandatory"),ingredients:Z().of(M().shape({name:b().required("This field is mandatory")})),preparationInstructions:b().required("This field is mandatory"),category:b().required("Select a cocktail category"),serving:b().required("Select the type of serving"),isAlcoholic:b().required("Select the type of cocktail")}),onSubmit:async s=>{console.log("values",s)}});return o.jsxs("form",{onSubmit:e.handleSubmit,children:[o.jsx(Ve,{values:e.values,errors:e.errors,touched:e.touched,handleChange:e.handleChange,handleBlur:e.handleBlur,setFieldValue:e.setFieldValue}),o.jsx(Xe,{values:e.values,errors:e.errors,touched:e.touched,handleChange:e.handleChange,handleBlur:e.handleBlur,setFieldValue:e.setFieldValue}),o.jsx(Ze,{values:e.values,errors:e.errors,touched:e.touched,handleChange:e.handleChange,handleBlur:e.handleBlur}),o.jsx(de,{type:"submit",children:"Add"})]})},oo=r.div`
  margin-top: 80px;
`,to=r.h4`
  color: ${n.colorWhite};
  font-size: 18px;
  font-family: Manrope;
  font-weight: 500;
  line-height: 24px;
`,no=()=>o.jsxs(oo,{children:[o.jsx(to,{children:"FollowUs"}),o.jsxs(ee,{children:[o.jsx(z,{children:o.jsx(V,{children:o.jsx(oe,{})})}),o.jsx(z,{children:o.jsx(V,{children:o.jsx(te,{})})}),o.jsx(z,{children:o.jsx(V,{children:o.jsx(ne,{})})})]})]}),ro=()=>o.jsx(o.Fragment,{children:o.jsx("div",{children:"PopularDrink"})}),io=()=>o.jsxs(o.Fragment,{children:[o.jsx(re,{title:"Add drink"}),o.jsx(eo,{}),o.jsx(no,{}),o.jsx(ro,{})]}),po=()=>o.jsx(io,{});export{po as default};
