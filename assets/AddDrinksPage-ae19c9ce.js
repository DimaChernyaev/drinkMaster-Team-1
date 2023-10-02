import{s as i,c as n,r as l,j as o,u as Q,b as M,d as b,e as Z,M as _,f as z,F as V,S as ee,g as oe,h as te}from"./index-6ee93794.js";import{P as ne}from"./PageTitle-e68543f8.js";import{g as ie,b as re,a as se}from"./operationsFilters-a9835170.js";import{S as B}from"./react-select.esm-feb35c5b.js";const ae=i.button`
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
`,le=e=>l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:29,height:28,...e},l.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.8,d:"M14.5 5.833v16.334M6.332 14h16.333"})),$=i.div`
  font-size: 12px;
  color: #da1414;
  line-height: 14px;
  margin-top: 8px;
`,ce=i.div`
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
`,de=i.img`
  width: 100%; /* Максимальная ширина изображения равна ширине родителя */
  height: auto; /* Автоматическая высота, чтобы сохранить соотношение сторон */
  display: block;
`,pe=i.div`
  font-size: 16px;
  text-align: center;
  margin-bottom: 18px;
`,he=i.input`
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
`,ge=i.label`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 6px;

  cursor: pointer;
`,ue=i(le)`
  width: 28px;
  height: 28px;
  color: green;
  fill: red;
  stroke: ${n.colorBlue};
`,xe=i.div`
  /* width: 100%;
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 14px; */
`,fe=i.div`
  position: relative;
  width: 100%;
`,L=i.label`
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
`,me=i.input`
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
`,be=i.div`
  position: relative;
  width: 100%;
`,R=i.label`
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
`,Fe=i.textarea`
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
`,$e=i.div`
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
`,we=i.label`
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
`,je=({options:e,...a})=>o.jsx(B,{...a,options:e,styles:{container:t=>({...t,width:"240px"}),control:(t,r)=>({...t,backgroundColor:"transparent",border:(r.isFocused,"none")}),placeholder:(t,r)=>({...t,margin:0,color:r.isFocused?`${n.colorWhite}`:`${n.colorWhiteFifty}`}),option:t=>({...t,padding:"14px",color:`${n.colorWhiteFifty}`,background:"#161F37",borderRadius:"20px",overflow:"hidden",cursor:"pointer","&:hover":{color:`${n.colorWhite}`}}),input:t=>({...t,padding:0,margin:0,border:"none",color:`${n.colorWhite}`}),menu:t=>({...t,padding:"14px",background:"#161F37",borderRadius:"20px",overflow:"hidden"}),indicatorSeparator:t=>({...t,display:"none"}),singleValue:(t,r)=>({...t,textAlign:"right",color:r.isFocused?`${n.colorWhiteFifty}`:`${n.colorWhite}`}),valueContainer:t=>({...t,padding:0}),dropdownIndicator:(t,r)=>({...t,transform:r.isFocused?"rotate(180deg)":"rotate(0deg)"})}}),ve=i.div`
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
`,ye=i.label`
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
`,ke=({options:e,...a})=>o.jsx(B,{...a,options:e,styles:{container:t=>({...t,width:"240px"}),control:(t,r)=>({...t,backgroundColor:"transparent",border:(r.isFocused,"none")}),placeholder:(t,r)=>({...t,margin:0,color:r.isFocused?`${n.colorWhite}`:`${n.colorWhiteFifty}`}),option:t=>({...t,padding:"14px",color:`${n.colorWhiteFifty}`,background:"#161F37",borderRadius:"20px",overflow:"hidden",cursor:"pointer","&:hover":{color:`${n.colorWhite}`}}),input:t=>({...t,padding:0,margin:0,border:"none",color:`${n.colorWhite}`}),menu:t=>({...t,padding:"14px",background:"#161F37",borderRadius:"20px",overflow:"hidden"}),indicatorSeparator:t=>({...t,display:"none"}),singleValue:(t,r)=>({...t,textAlign:"right",color:r.isFocused?`${n.colorWhiteFifty}`:`${n.colorWhite}`}),valueContainer:t=>({...t,padding:0}),dropdownIndicator:(t,r)=>({...t,transform:r.isFocused?"rotate(180deg)":"rotate(0deg)"})}}),We=i.div`
  font-family: Arial, sans-serif;
  display: flex;
  flex-direction: row;
  align-items: center;

  margin-top: 40px;
  margin-left: 4px;
`;i.label`
  font-weight: bold;
  margin-right: 10px;
`;const Se=i.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`,O=i.label`
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
`,I=i.input`
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
`,G=i.span`
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
`,Ce=({values:e,errors:a,touched:t,handleChange:r,handleBlur:f,setFieldValue:g})=>{const[F,w]=l.useState([]),[j,m]=l.useState([]),[p,v]=l.useState([]),[W,S]=l.useState([]);l.useEffect(()=>{async function s(){try{const D=(await ie()).map(k=>({value:k,label:k}));w(D)}catch(y){console.error("Ошибка при загрузке категорий:",y)}}async function x(){try{const D=(await re()).map(k=>({value:k,label:k}));v(D)}catch(y){console.error("Ошибка при загрузке категорий:",y)}}s(),x()},[]);const[d,c]=l.useState(null),[u,h]=l.useState(!1),[C,T]=l.useState(!1),[q,E]=l.useState(!1),[N,U]=l.useState(!1),H=s=>{const x=s.target.files[0];g("image",x),c(x?URL.createObjectURL(x):null)},X=s=>{const{value:x}=s.target;T(x.trim().length>1)},Y=s=>{const{value:x}=s.target;U(x.trim().length>25)},J=s=>{m(s),g("category",s.value)},K=s=>{S(s),g("serving",s.value)};return o.jsxs(o.Fragment,{children:[o.jsxs(ce,{children:[o.jsxs(pe,{children:[o.jsx(he,{type:"file",id:"image",name:"image",onChange:s=>H(s),accept:"image/*"}),o.jsx(ge,{htmlFor:"image",children:o.jsx(ue,{})})]}),o.jsx("p",{children:"Add image"}),d&&o.jsx(de,{src:d,alt:"Selected"}),t.image&&a.image?o.jsx($,{children:a.image}):null]}),o.jsx(xe,{children:o.jsxs(fe,{children:[o.jsx(L,{htmlFor:"name",$isFocused:u,$hasValue:C,children:"Enter item title"}),o.jsx(me,{type:"text",id:"name",name:"name",onChange:s=>{X(s),r(s)},onBlur:s=>{h(!1),f(s)},onFocus:()=>h(!0),value:e.name,placeholder:" "}),t.name&&a.name?o.jsx($,{children:a.name}):null]})}),o.jsxs(be,{children:[o.jsx(R,{htmlFor:"description",$isFocusedDescription:q,$hasValueDescription:N,children:"Enter about recipe"}),o.jsx(Fe,{rows:1,maxLength:234,id:"description",name:"description",onChange:s=>{Y(s),r(s)},onBlur:s=>{E(!1),f(s)},onFocus:()=>E(!0),value:e.description,placeholder:" "}),t.description&&a.description?o.jsx($,{children:a.description}):null]}),o.jsxs($e,{children:["Category",o.jsx(we,{htmlFor:"category"}),o.jsx(je,{name:"category",options:F,value:j,onChange:s=>J(s),placeholder:""})]}),t.category&&a.category?o.jsx($,{children:a.category}):null,o.jsxs(ve,{children:["Glass",o.jsx(ye,{htmlFor:"serving"}),o.jsx(ke,{name:"serving",options:p,value:W,onChange:s=>K(s),placeholder:""})]}),t.serving&&a.serving?o.jsx($,{children:a.serving}):null,o.jsxs(We,{children:[o.jsxs(Se,{children:[o.jsxs(O,{className:e.isAlcoholic==="true"?"checked":"",children:[o.jsx(I,{type:"radio",name:"isAlcoholic",value:"true",checked:e.isAlcoholic==="true",onChange:r}),o.jsx(G,{}),"Alcoholic"]}),o.jsxs(O,{className:e.isAlcoholic==="false"?"checked":"",children:[o.jsx(I,{type:"radio",name:"isAlcoholic",value:"false",checked:e.isAlcoholic==="false",onChange:r}),o.jsx(G,{}),"Non-alcoholic"]})]}),t.isAlcoholic&&a.isAlcoholic?o.jsx($,{children:a.isAlcoholic}):null]})]})},Ie=e=>l.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},l.createElement("path",{d:"M2.5 8H13.5",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}),l.createElement("path",{d:"M8 2.5V13.5",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),De=e=>l.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},l.createElement("path",{d:"M2.5 8H13.5",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),ze=e=>l.createElement("svg",{width:20,height:20,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},l.createElement("path",{d:"M15.625 4.375L4.375 15.625",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}),l.createElement("path",{d:"M15.625 15.625L4.375 4.375",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),Ve=i.div`
  flex-basis: 100%;
  font-size: 12px;
  color: #da1414;
  line-height: 14px;
  margin-top: 4px;
  padding-left: 20px;
  margin-top: 8px;
`,Le=i.div`
  margin-top: 80px;
`,Re=i.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
`,Be=i.h3`
  font-size: 28px;
`,Ae=i.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  width: 104px;
  height: 38px;
  border-radius: 200px;
  border: 1px solid ${n.colorWhiteFifty};
`,A=i(De)`
  stroke: ${n.colorWhite};
`,P=i.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  background: transparent;
  border: none;
  &:disabled ${A} {
    stroke: ${n.colorWhiteFifty};
  }
`,Ee=i.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  margin-bottom: 24px;
`,Me=({options:e,...a})=>o.jsx(B,{...a,options:e,styles:{container:t=>({...t,minWidth:"60%"}),control:(t,r)=>({...t,height:"auto",padding:"16px",backgroundColor:"transparent",border:r.isFocused?`1px solid ${n.colorWhite}`:`1px solid ${n.colorWhiteFifty}`,borderRadius:"200px","&:hover":{borderColor:`${n.colorWhite}`}}),placeholder:(t,r)=>({...t,margin:0,color:r.isFocused?`${n.colorWhite}`:`${n.colorWhiteFifty}`}),option:t=>({...t,padding:"14px",color:`${n.colorWhiteFifty}`,background:"#161F37",borderRadius:"20px",overflow:"hidden",cursor:"pointer","&:hover":{color:`${n.colorWhite}`}}),input:t=>({...t,padding:0,margin:0,border:"none",color:`${n.colorWhite}`}),menu:t=>({...t,padding:"14px",background:"#161F37",borderRadius:"20px",overflow:"hidden"}),indicatorSeparator:t=>({...t,display:"none"}),singleValue:(t,r)=>({...t,color:r.isFocused?`${n.colorWhiteFifty}`:`${n.colorWhite}`}),valueContainer:t=>({...t,padding:0}),dropdownIndicator:(t,r)=>({...t,transform:r.isFocused?"rotate(180deg)":"rotate(0deg)"})}}),Oe=i.button`
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
`,Ge=i(Ie)`
  stroke: ${n.colorWhite};
`,Pe=i(ze)`
  stroke: ${n.colorWhiteFifty};
  &:hover {
    stroke: ${n.colorWhite};
  }
`,Te=i.input`
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
`,qe=({values:e,errors:a,touched:t,handleChange:r,handleBlur:f,setFieldValue:g})=>{const[F,w]=l.useState([]),[j,m]=l.useState([]);l.useEffect(()=>{async function d(){try{const u=(await se()).map(h=>({label:h.title,value:h.title}));w(u)}catch(c){console.error("Ошибка при загрузке ингридиента:",c)}}d()},[]);const p=(d,c)=>{const{value:u}=d;g(`ingredients[${c}].name`,u),m(h=>{const C=[...h];return C[c]=d,C})},v=()=>{const d={name:""};g("ingredients",[...e.ingredients,d]),m(c=>[...c,null])},W=d=>{const c=[...e.ingredients];c.splice(d,1),g("ingredients",c),m(u=>{const h=[...u];return h.splice(d,1),h})},S=e.ingredients.length===1;return o.jsxs(Le,{children:[o.jsxs(Re,{children:[o.jsx(Be,{children:"Ingredients"}),o.jsxs(Ae,{children:[o.jsx(P,{type:"button",onClick:()=>W(e.ingredients.length-1),disabled:S,children:o.jsx(A,{})}),o.jsx("div",{children:e.ingredients.length}),o.jsx(P,{type:"button",onClick:v,children:o.jsx(Ge,{})})]})]}),e.ingredients.map((d,c)=>o.jsxs(Ee,{children:[o.jsx(Me,{name:`ingredients[${c}].name`,options:F,value:j[c],onChange:u=>p(u,c),onBlur:f}),o.jsx(Te,{type:"text",name:`ingredients[${c}].amount`,placeholder:"1 cl",value:d.amount||"",onChange:r,onBlur:f}),o.jsx(Oe,{type:"button",onClick:()=>W(c),disabled:S,children:o.jsx(Pe,{})}),t.ingredients&&a.ingredients&&t.ingredients[c]&&a.ingredients[c]?o.jsx(Ve,{children:a.ingredients[c].name}):null]},c))]})},Ne=i.div`
  font-size: 12px;
  color: #da1414;
  line-height: 14px;
  margin-top: 8px;
`,Ue=i.h3`
  color: ${n.colorWhite};
  font-family: Manrope;
  font-size: 28px;
  font-weight: 600;
  line-height: 32px;
  word-wrap: break-word;
  margin-top: 80px;
  margin-bottom: 40px;
`,He=i.div`
  position: relative;
  width: 100%;
`,Xe=i.label`
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
`,Ye=i.textarea`
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
`,Je=({values:e,errors:a,touched:t,handleChange:r,handleBlur:f})=>{const[g,F]=l.useState(!1),[w,j]=l.useState(!1),m=p=>{const{value:v}=p.target;j(v.trim().length>25)};return o.jsxs(o.Fragment,{children:[o.jsx(Ue,{children:"Recipe Preparation"}),o.jsxs(He,{children:[o.jsx(Xe,{htmlFor:"preparationInstructions",$isFocusedDescription:g,$hasValueDescription:w,children:"Enter the recipe"}),o.jsx(Ye,{id:"preparationInstructions",name:"preparationInstructions",rows:"6",onChange:p=>{m(p),r(p)},onBlur:p=>{F(!1),f(p)},onFocus:()=>F(!0),value:e.preparationInstructions,placeholder:" "}),t.preparationInstructions&&a.preparationInstructions?o.jsx(Ne,{children:a.preparationInstructions}):null]})]})},Ke=()=>{const e=Q({initialValues:{name:"",ingredients:[{name:""}],preparationInstructions:"",category:"",serving:"",isAlcoholic:"false"},validationSchema:M({name:b().required("This field is mandatory"),description:b().required("This field is mandatory"),ingredients:Z().of(M().shape({name:b().required("This field is mandatory")})),preparationInstructions:b().required("This field is mandatory"),category:b().required("Select a cocktail category"),serving:b().required("Select the type of serving"),isAlcoholic:b().required("Select the type of cocktail")}),onSubmit:async a=>{console.log("values",a)}});return o.jsxs("form",{onSubmit:e.handleSubmit,children:[o.jsx(Ce,{values:e.values,errors:e.errors,touched:e.touched,handleChange:e.handleChange,handleBlur:e.handleBlur,setFieldValue:e.setFieldValue}),o.jsx(qe,{values:e.values,errors:e.errors,touched:e.touched,handleChange:e.handleChange,handleBlur:e.handleBlur,setFieldValue:e.setFieldValue}),o.jsx(Je,{values:e.values,errors:e.errors,touched:e.touched,handleChange:e.handleChange,handleBlur:e.handleBlur}),o.jsx(ae,{type:"submit",children:"Add"})]})},Qe=i.div`
  margin-top: 80px;
`,Ze=i.h4`
  color: ${n.colorWhite};
  font-size: 18px;
  font-family: Manrope;
  font-weight: 500;
  line-height: 24px;
`,_e=()=>o.jsxs(Qe,{children:[o.jsx(Ze,{children:"FollowUs"}),o.jsxs(_,{children:[o.jsx(z,{children:o.jsx(V,{children:o.jsx(ee,{})})}),o.jsx(z,{children:o.jsx(V,{children:o.jsx(oe,{})})}),o.jsx(z,{children:o.jsx(V,{children:o.jsx(te,{})})})]})]}),eo=()=>o.jsx(o.Fragment,{children:o.jsx("div",{children:"PopularDrink"})}),oo=()=>o.jsxs(o.Fragment,{children:[o.jsx(ne,{title:"Add drink"}),o.jsx(Ke,{}),o.jsx(_e,{}),o.jsx(eo,{})]}),so=()=>o.jsx(oo,{});export{so as default};
