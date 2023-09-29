import{s as r,c as n,r as l,a as _,j as o,u as q}from"./index-b554c368.js";import{P as J}from"./PageTitle-2ba272d0.js";import{g as K,b as Q,a as Y}from"./operationsFilters-6de00694.js";import{u as Z,S as ee}from"./useStateManager-7e1e8489.esm-4dd51dbf.js";const oe=r.button`
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
`,te=e=>l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:29,height:28,...e},l.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.8,d:"M14.5 5.833v16.334M6.332 14h16.333"}));var ne=l.forwardRef(function(e,s){var t=Z(e);return l.createElement(ee,_({ref:s},t))}),z=ne;const m=r.div`
  font-size: 12px;
  color: #da1414;
  line-height: 14px;
  margin-top: 8px;
`,re=r.div`
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
`,ie=r.img`
  width: 100%; /* Максимальная ширина изображения равна ширине родителя */
  height: auto; /* Автоматическая высота, чтобы сохранить соотношение сторон */
  display: block;
`,se=r.div`
  font-size: 16px;
  text-align: center;
  margin-bottom: 18px;
`,ae=r.input`
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
`,le=r.label`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 6px;

  cursor: pointer;
`,ce=r(te)`
  width: 28px;
  height: 28px;
  color: green;
  fill: red;
  stroke: ${n.colorBlue};
`,de=r.div`
  /* width: 100%;
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 14px; */
`,pe=r.div`
  position: relative;
  width: 100%;
`,I=r.label`
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
`,he=r.input`
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

  &:focus + ${I}, &:not(:placeholder-shown) + ${I} {
    transform: translate(10px, -30px) scale(0.8);
    font-size: 12px;
  }
`,ge=r.div`
  position: relative;
  width: 100%;
`,D=r.label`
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
`,ue=r.textarea`
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

  &:focus + ${D}, &:not(:placeholder-shown) + ${D} {
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
`,xe=r.div`
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
`,fe=r.label`
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
`,me=({options:e,...s})=>o.jsx(z,{...s,options:e,styles:{container:t=>({...t,width:"240px"}),control:(t,i)=>({...t,backgroundColor:"transparent",border:(i.isFocused,"none")}),placeholder:(t,i)=>({...t,margin:0,color:i.isFocused?`${n.colorWhite}`:`${n.colorWhiteFifty}`}),option:t=>({...t,padding:"14px",color:`${n.colorWhiteFifty}`,background:"#161F37",borderRadius:"20px",overflow:"hidden",cursor:"pointer","&:hover":{color:`${n.colorWhite}`}}),input:t=>({...t,padding:0,margin:0,border:"none",color:`${n.colorWhite}`}),menu:t=>({...t,padding:"14px",background:"#161F37",borderRadius:"20px",overflow:"hidden"}),indicatorSeparator:t=>({...t,display:"none"}),singleValue:(t,i)=>({...t,textAlign:"right",color:i.isFocused?`${n.colorWhiteFifty}`:`${n.colorWhite}`}),valueContainer:t=>({...t,padding:0}),dropdownIndicator:(t,i)=>({...t,transform:i.isFocused?"rotate(180deg)":"rotate(0deg)"})}}),be=r.div`
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
`,Fe=r.label`
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
`,$e=({options:e,...s})=>o.jsx(z,{...s,options:e,styles:{container:t=>({...t,width:"240px"}),control:(t,i)=>({...t,backgroundColor:"transparent",border:(i.isFocused,"none")}),placeholder:(t,i)=>({...t,margin:0,color:i.isFocused?`${n.colorWhite}`:`${n.colorWhiteFifty}`}),option:t=>({...t,padding:"14px",color:`${n.colorWhiteFifty}`,background:"#161F37",borderRadius:"20px",overflow:"hidden",cursor:"pointer","&:hover":{color:`${n.colorWhite}`}}),input:t=>({...t,padding:0,margin:0,border:"none",color:`${n.colorWhite}`}),menu:t=>({...t,padding:"14px",background:"#161F37",borderRadius:"20px",overflow:"hidden"}),indicatorSeparator:t=>({...t,display:"none"}),singleValue:(t,i)=>({...t,textAlign:"right",color:i.isFocused?`${n.colorWhiteFifty}`:`${n.colorWhite}`}),valueContainer:t=>({...t,padding:0}),dropdownIndicator:(t,i)=>({...t,transform:i.isFocused?"rotate(180deg)":"rotate(0deg)"})}}),ve=r.div`
  font-family: Arial, sans-serif;
  display: flex;
  flex-direction: row;
  align-items: center;

  margin-top: 40px;
  margin-left: 4px;
`;r.label`
  font-weight: bold;
  margin-right: 10px;
`;const we=r.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`,B=r.label`
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
`,C=r.input`
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
`,L=r.span`
  position: relative;
  width: 16px;
  height: 16px;
  margin-right: 4px;
  border: 1.3px solid ${n.colorWhiteFifty};
  border-radius: 50%;
  box-sizing: border-box;

  ${C}:checked + & {
    border-color: ${n.colorWhite};
  }

  ${C}:checked + &::before {
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
`,je=({values:e,errors:s,touched:t,handleChange:i,handleBlur:u,setFieldValue:h})=>{const[f,b]=l.useState([]),[F,y]=l.useState([]),[p,$]=l.useState([]),[k,W]=l.useState([]);l.useEffect(()=>{async function a(){try{const S=(await K()).map(j=>({value:j,label:j}));b(S)}catch(w){console.error("Ошибка при загрузке категорий:",w)}}async function g(){try{const S=(await Q()).map(j=>({value:j,label:j}));$(S)}catch(w){console.error("Ошибка при загрузке категорий:",w)}}a(),g()},[]);const[d,c]=l.useState(null),[x,v]=l.useState(!1),[E,M]=l.useState(!1),[O,V]=l.useState(!1),[P,G]=l.useState(!1),N=a=>{const g=a.target.files[0];h("image",g),c(g?URL.createObjectURL(g):null)},H=a=>{const{value:g}=a.target;M(g.trim().length>1)},T=a=>{const{value:g}=a.target;G(g.trim().length>25)},U=a=>{y(a),h("category",a.value)},X=a=>{W(a),h("serving",a.value)};return o.jsxs(o.Fragment,{children:[o.jsxs(re,{children:[o.jsxs(se,{children:[o.jsx(ae,{type:"file",id:"image",name:"image",onChange:a=>N(a),accept:"image/*"}),o.jsx(le,{htmlFor:"image",children:o.jsx(ce,{})})]}),o.jsx("p",{children:"Add image"}),d&&o.jsx(ie,{src:d,alt:"Selected"}),t.image&&s.image?o.jsx(m,{children:s.image}):null]}),o.jsx(de,{children:o.jsxs(pe,{children:[o.jsx(I,{htmlFor:"name",$isFocused:x,$hasValue:E,children:"Enter item title"}),o.jsx(he,{type:"text",id:"name",name:"name",onChange:a=>{H(a),i(a)},onBlur:a=>{v(!1),u(a)},onFocus:()=>v(!0),value:e.name,placeholder:" "}),t.name&&s.name?o.jsx(m,{children:s.name}):null]})}),o.jsxs(ge,{children:[o.jsx(D,{htmlFor:"description",$isFocusedDescription:O,$hasValueDescription:P,children:"Enter about recipe"}),o.jsx(ue,{rows:1,maxLength:234,id:"description",name:"description",onChange:a=>{T(a),i(a)},onBlur:a=>{V(!1),u(a)},onFocus:()=>V(!0),value:e.description,placeholder:" "}),t.description&&s.description?o.jsx(m,{children:s.description}):null]}),o.jsxs(xe,{children:["Category",o.jsx(fe,{htmlFor:"category"}),o.jsx(me,{name:"category",options:f,value:F,onChange:a=>U(a),placeholder:""})]}),t.category&&s.category?o.jsx(m,{children:s.category}):null,o.jsxs(be,{children:["Glass",o.jsx(Fe,{htmlFor:"serving"}),o.jsx($e,{name:"serving",options:p,value:k,onChange:a=>X(a),placeholder:"",children:o.jsx("option",{value:"",children:"Serving"})})]}),t.serving&&s.serving?o.jsx(m,{children:s.serving}):null,o.jsxs(ve,{children:[o.jsxs(we,{children:[o.jsxs(B,{className:e.isAlcoholic==="true"?"checked":"",children:[o.jsx(C,{type:"radio",name:"isAlcoholic",value:"true",checked:e.isAlcoholic==="true",onChange:i}),o.jsx(L,{}),"Alcoholic"]}),o.jsxs(B,{className:e.isAlcoholic==="false"?"checked":"",children:[o.jsx(C,{type:"radio",name:"isAlcoholic",value:"false",checked:e.isAlcoholic==="false",onChange:i}),o.jsx(L,{}),"Non-alcoholic"]})]}),t.isAlcoholic&&s.isAlcoholic?o.jsx(m,{children:s.isAlcoholic}):null]})]})},ye=e=>l.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},l.createElement("path",{d:"M2.5 8H13.5",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}),l.createElement("path",{d:"M8 2.5V13.5",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),ke=e=>l.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},l.createElement("path",{d:"M2.5 8H13.5",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),We=e=>l.createElement("svg",{width:20,height:20,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},l.createElement("path",{d:"M15.625 4.375L4.375 15.625",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}),l.createElement("path",{d:"M15.625 15.625L4.375 4.375",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),Ce=r.div`
  flex-basis: 100%;
  font-size: 12px;
  color: #da1414;
  line-height: 14px;
  margin-top: 4px;
  padding-left: 20px;
  margin-top: 8px;
`,Se=r.div`
  margin-top: 80px;
`,Ie=r.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
`,De=r.h3`
  font-size: 28px;
`,ze=r.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  width: 104px;
  height: 38px;
  border-radius: 200px;
  border: 1px solid ${n.colorWhiteFifty};
`,R=r(ke)`
  stroke: ${n.colorWhite};
`,A=r.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  background: transparent;
  border: none;
  &:disabled ${R} {
    stroke: ${n.colorWhiteFifty};
  }
`,Re=r.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  margin-bottom: 24px;
`,Ve=({options:e,...s})=>o.jsx(z,{...s,options:e,styles:{container:t=>({...t,minWidth:"60%"}),control:(t,i)=>({...t,height:"auto",padding:"16px",backgroundColor:"transparent",border:i.isFocused?`1px solid ${n.colorWhite}`:`1px solid ${n.colorWhiteFifty}`,borderRadius:"200px","&:hover":{borderColor:`${n.colorWhite}`}}),placeholder:(t,i)=>({...t,margin:0,color:i.isFocused?`${n.colorWhite}`:`${n.colorWhiteFifty}`}),option:t=>({...t,padding:"14px",color:`${n.colorWhiteFifty}`,background:"#161F37",borderRadius:"20px",overflow:"hidden",cursor:"pointer","&:hover":{color:`${n.colorWhite}`}}),input:t=>({...t,padding:0,margin:0,border:"none",color:`${n.colorWhite}`}),menu:t=>({...t,padding:"14px",background:"#161F37",borderRadius:"20px",overflow:"hidden"}),indicatorSeparator:t=>({...t,display:"none"}),singleValue:(t,i)=>({...t,color:i.isFocused?`${n.colorWhiteFifty}`:`${n.colorWhite}`}),valueContainer:t=>({...t,padding:0}),dropdownIndicator:(t,i)=>({...t,transform:i.isFocused?"rotate(180deg)":"rotate(0deg)"})}}),Be=r.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  margin-left: 40px;

  font-size: 14px;
  background: transparent;
  border: none;
  &:disabled ${R} {
    stroke: ${n.colorWhiteFifty};
  }
`,Le=r(ye)`
  stroke: ${n.colorWhite};
`,Ae=r(We)`
  stroke: ${n.colorWhiteFifty};
  &:hover {
    stroke: ${n.colorWhite};
  }
`,Ee=r.input`
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
`,Me=({values:e,errors:s,touched:t,handleChange:i,handleBlur:u,setFieldValue:h})=>{const[f,b]=l.useState([]),[F,y]=l.useState([]);l.useEffect(()=>{async function d(){try{const x=(await Y()).map(v=>({label:v.title,value:v.title}));b(x)}catch(c){console.error("Ошибка при загрузке ингридиента:",c)}}d()},[]);const p=(d,c)=>{const{value:x}=d;h(`ingredients[${c}].name`,x)},$=()=>{const d={name:""};h("ingredients",[...e.ingredients,d])},k=d=>{const c=[...e.ingredients];c.splice(d,1),h("ingredients",c)},W=e.ingredients.length===1;return o.jsxs(Se,{children:[o.jsxs(Ie,{children:[o.jsx(De,{children:"Ingredients"}),o.jsxs(ze,{children:[o.jsx(A,{type:"button",onClick:()=>k(e.ingredients.length-1),disabled:W,children:o.jsx(R,{})}),o.jsx("div",{children:e.ingredients.length}),o.jsx(A,{type:"button",onClick:$,children:o.jsx(Le,{})})]})]}),e.ingredients.map((d,c)=>o.jsxs(Re,{children:[o.jsx(Ve,{name:`ingredients[${c}].name`,options:f,value:F[c],onChange:x=>p(x,c),onBlur:u,children:o.jsx("option",{value:"",children:"Выберите ингредиент"})}),o.jsx(Ee,{type:"text",name:`ingredients[${c}].amount`,placeholder:"1 cl",value:d.amount||"",onChange:i,onBlur:u}),o.jsx(Be,{type:"button",onClick:()=>{k(c)},disabled:W,children:o.jsx(Ae,{})}),t.ingredients&&s.ingredients&&t.ingredients[c]&&s.ingredients[c]?o.jsx(Ce,{children:s.ingredients[c].name}):null]},c))]})},Oe=r.div`
  font-size: 12px;
  color: #da1414;
  line-height: 14px;
  margin-top: 8px;
`,Pe=r.h3`
  color: ${n.colorWhite};
  font-family: Manrope;
  font-size: 28px;
  font-weight: 600;
  line-height: 32px;
  word-wrap: break-word;
  margin-top: 80px;
  margin-bottom: 40px;
`,Ge=r.div`
  position: relative;
  width: 100%;
`,Ne=r.label`
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
`,He=r.textarea`
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
`,Te=({values:e,errors:s,touched:t,handleChange:i,handleBlur:u})=>{const[h,f]=l.useState(!1),[b,F]=l.useState(!1),y=p=>{const{value:$}=p.target;F($.trim().length>25)};return o.jsxs(o.Fragment,{children:[o.jsx(Pe,{children:"Recipe Preparation"}),o.jsxs(Ge,{children:[o.jsx(Ne,{htmlFor:"preparationInstructions",$isFocusedDescription:h,$hasValueDescription:b,children:"Enter the recipe"}),o.jsx(He,{id:"preparationInstructions",name:"preparationInstructions",rows:"6",onChange:p=>{y(p),i(p)},onBlur:p=>{f(!1),u(p)},onFocus:()=>f(!0),value:e.preparationInstructions,placeholder:" "}),t.preparationInstructions&&s.preparationInstructions?o.jsx(Oe,{children:s.preparationInstructions}):null]})]})},Ue=()=>{const e=q({initialValues:{name:"",ingredients:[{name:""}],preparationInstructions:"",category:"",serving:"",isAlcoholic:"false"},onSubmit:async s=>{console.log("values",s)}});return o.jsxs("form",{onSubmit:e.handleSubmit,children:[o.jsx(je,{values:e.values,errors:e.errors,touched:e.touched,handleChange:e.handleChange,handleBlur:e.handleBlur,setFieldValue:e.setFieldValue}),o.jsx(Me,{values:e.values,errors:e.errors,touched:e.touched,handleChange:e.handleChange,handleBlur:e.handleBlur,setFieldValue:e.setFieldValue}),o.jsx(Te,{values:e.values,errors:e.errors,touched:e.touched,handleChange:e.handleChange,handleBlur:e.handleBlur}),o.jsx(oe,{type:"submit",children:"Add"})]})},Xe=()=>o.jsx(o.Fragment,{children:o.jsx("div",{children:"FollowUs"})}),_e=()=>o.jsx(o.Fragment,{children:o.jsx("div",{children:"PopularDrink"})}),qe=()=>o.jsxs(o.Fragment,{children:[o.jsx(J,{title:"Add drink"}),o.jsx(Ue,{}),o.jsx(Xe,{}),o.jsx(_e,{})]}),Ze=()=>o.jsx(qe,{});export{Ze as default};
