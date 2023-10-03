import{s as i,c as r,r as l,j as t,u as Q,b as Z,d as ee,e as P,f as w,g as oe,h as te,i as ie,M as ne,k as L,F as T,S as re,l as se,m as ae,L as le}from"./index-afc9367a.js";import{g as ce,b as de,a as pe}from"./operationsFilters-366c1c6f.js";import{S as R}from"./react-select.esm-c1421621.js";import{b as he}from"./operationsDrinks-eafa36e4.js";const xe=i.button`
  margin-top: 20px;

  padding-top: 14px;
  padding-right: 40px;
  padding-bottom: 14px;
  padding-left: 40px;

  font-size: 14px;
  font-family: Manrope;
  font-weight: 600;
  line-height: 18px;

  color: ${r.colorBlue};
  background-color: ${r.colorWhite};

  border: none;
  border-radius: 42px;
  word-wrap: break-word;
  &:hover {
    color: ${r.colorWhite};
    background-color: ${r.colorBlue};
  }
`,ue=o=>l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:29,height:28,...o},l.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.8,d:"M14.5 5.833v16.334M6.332 14h16.333"})),$=i.div`
  font-size: 12px;
  color: #da1414;
  line-height: 14px;
  margin-top: 8px;
`,ge=i.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  @media (min-width: 375px) {
  }

  @media (min-width: 768px) {
    flex-direction: row;
  }

  @media (min-width: 1280px) {
    width: 833px;
  }
`,me=i.div`
  width: 100%;
  height: 320px;
  margin-bottom: 40px;

  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: ${r.colorBlueFifty};
  border-radius: 8px;
  overflow: hidden;
  transition: background-color 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    background: ${r.colorBlue};
  }

  @media (min-width: 375px) {
    /* width: 335px; */
  }

  @media (min-width: 768px) {
    margin-bottom: 0;
  }

  @media (min-width: 1280px) {
    height: 400px;
  }
`,fe=i.img`
  width: 100%; /* Максимальная ширина изображения равна ширине родителя */
  height: auto; /* Автоматическая высота, чтобы сохранить соотношение сторон */
  display: block;
`,be=i.div`
  font-size: 16px;
  text-align: center;
  margin-bottom: 18px;
`,we=i.input`
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
    pointer-events: none;
  }
`,$e=i.label`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 6px;

  cursor: pointer;
`,Fe=i(ue)`
  width: 28px;
  height: 28px;
  color: green;
  fill: red;
  stroke: ${r.colorBlue};
`,ye=i.div`
  width: 100%;
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 14px;
  @media (min-width: 768px) {
    gap: 27px;
  }
`,ke=i.div`
  position: relative;
  width: 100%;
`,V=i.label`
  position: absolute;
  top: ${o=>o.$isFocused||o.$hasValue?"-15px":"10px"};
  left: 0px;
  transform-origin: left;
  color: ${o=>o.$isFocused?"#F3F3F380":"#f3f3f3"};
  transition:
    transform 25ms,
    font-size 250ms,
    color 200ms;
  pointer-events: none;
  color: ${o=>o.$hasValue?"#3CBC81":"#F3F3F380"};
  font-size: ${o=>o.$isFocused||o.$hasValue?"12px":"14px"};
      @media (min-width: 768px) {
    font-size: ${o=>o.$isFocusedDescription||o.$hasValueDescription?"12px":"16px"};
  }
`,je=i.input`
  color: #f3f3f3;
  padding: 8px;
  border: 1px solid transparent;
  border-bottom: 1px solid #f3f3f380;
  background-color: transparent;
  transition: border-color 250ms;
  width: 100%;
  font-size: 14px;

  &:focus {
    border-bottom: 1px solid;
  }

  &:focus + ${V}, &:not(:placeholder-shown) + ${V} {
    transform: translate(10px, -30px) scale(0.8);
    font-size: 12px;
  }
  @media (min-width: 768px) {
    font-size: 16px;
  }
`,ve=i.div`
  position: relative;
  width: 100%;
`,B=i.label`
  position: absolute;
  top: ${o=>o.$isFocusedDescription||o.$hasValueDescription?"-15px":"10px"};
  left: 0px;
  transform-origin: left;
  color: ${o=>o.$isFocusedDescription?"#F3F3F380":"#f3f3f3"};
  transition:
    transform 25ms,
    font-size 250ms,
    color 200ms;
  pointer-events: none;
  color: ${o=>o.$hasValueDescription?"#3CBC81":"#F3F3F380"};
  font-size: ${o=>o.$isFocusedDescription||o.$hasValueDescription?"12px":"14px"};
  @media (min-width: 768px) {
    font-size: ${o=>o.$isFocusedDescription||o.$hasValueDescription?"12px":"16px"};
  }
`,We=i.textarea`
  width: 100%;
  resize: none;
  font-family: Manrope;
  font-size: 14px;
  color: #f3f3f3;
  padding: 8px;
  border: 1px solid transparent;
  border-bottom: 1px solid #f3f3f380;
  background-color: transparent;
  transition: border-color 250ms;
 


  &:focus {
    border-bottom: 1px solid;
  }

  &:focus + ${B}, &:not(:placeholder-shown) + ${B} {
    transform: translate(10px, -30px) scale(0.8);
    font-size: 12px;
  }
  &::-webkit-scrollbar {
    display: none;
  }
  @media (min-width: 768px) {
    font-size: 16px;
  }
`,Ce=i.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  color: #f3f3f380;
  border-bottom: 1px solid #f3f3f380;
  background-color: transparent;
  transition: border-color 250ms;
  width: 100%;
  font-size: 14px;
  @media (min-width: 768px) {
    font-size: 16px;
  }
`,Se=i.label`
  position: absolute;
  top: ${o=>o.$isFocusedDescription||o.$hasValueDescription?"5px":"30px"};
  left: 10px;
  transform-origin: left;
  color: ${o=>o.$isFocusedDescription?"#F3F3F380":"#f3f3f3"};
  transition:
    transform 25ms,
    font-size 250ms,
    color 200ms;
  pointer-events: none;
  color: ${o=>o.$hasValueDescription?"#3CBC81":"#F3F3F380"};
  font-size: ${o=>o.$isFocusedDescription||o.$hasValueDescription?"12px":"14px"};
  @media (min-width: 768px) {
    font-size: ${o=>o.$isFocusedDescription||o.$hasValueDescription?"12px":"16px"};
  }
`,De=({options:o,...a})=>t.jsx(R,{...a,options:o,styles:{container:e=>({...e,width:"240px"}),control:(e,n)=>({...e,minHeight:"auto",borderColor:(n.isFocused,"red"),backgroundColor:"transparent",border:(n.isFocused,"none"),boxShadow:(n.isFocused,"none"),"&:hover":{cursor:"pointer"}}),placeholder:(e,n)=>({...e,margin:0,color:n.isFocused?`${r.colorWhite}`:`${r.colorWhiteFifty}`}),option:e=>({...e,padding:"14px",color:`${r.colorWhiteFifty}`,background:"#161F37",borderRadius:"20px",overflow:"hidden",cursor:"pointer","&:hover":{color:`${r.colorWhite}`}}),input:e=>({...e,padding:0,margin:0,border:"none",color:`${r.colorWhite}`}),menu:e=>({...e,padding:"14px",background:"#161F37",borderRadius:"20px",overflow:"hidden"}),menuList:e=>({...e,"&::-webkit-scrollbar":{display:"none"}}),indicatorSeparator:e=>({...e,display:"none"}),singleValue:(e,n)=>({...e,textAlign:"right",color:n.isFocused?`${r.colorWhiteFifty}`:`${r.colorWhite}`}),valueContainer:e=>({...e,padding:0}),dropdownIndicator:(e,n)=>({...e,transform:n.isFocused?"rotate(180deg)":"rotate(0deg)"})}}),ze=i.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #f3f3f380;
  border: 1px solid transparent;
  border-bottom: 1px solid #f3f3f380;
  background-color: transparent;
  transition: border-color 250ms;
  width: 100%;
  font-size: 14px;
  @media (min-width: 768px) {
    font-size: 16px;
  }
`,Ie=i.label`
  position: absolute;
  top: ${o=>o.$isFocusedDescription||o.$hasValueDescription?"5px":"30px"};
  left: 10px;
  transform-origin: left;
  color: ${o=>o.$isFocusedDescription?"#F3F3F380":"#f3f3f3"};
  transition:
    transform 25ms,
    font-size 250ms,
    color 200ms;
  pointer-events: none;
  color: ${o=>o.$hasValueDescription?"#3CBC81":"#F3F3F380"};
  font-size: ${o=>o.$isFocusedDescription||o.$hasValueDescription?"12px":"14px"};
`,Le=({options:o,...a})=>t.jsx(R,{...a,options:o,styles:{container:e=>({...e,width:"240px"}),control:(e,n)=>({...e,borderColor:(n.isFocused,"red"),backgroundColor:"transparent",border:(n.isFocused,"none"),boxShadow:(n.isFocused,"none"),"&:hover":{cursor:"pointer"}}),placeholder:(e,n)=>({...e,margin:0,color:n.isFocused?`${r.colorWhite}`:`${r.colorWhiteFifty}`}),option:e=>({...e,padding:"14px",color:`${r.colorWhiteFifty}`,background:"#161F37",borderRadius:"20px",overflow:"hidden",cursor:"pointer","&:hover":{color:`${r.colorWhite}`}}),input:e=>({...e,padding:0,margin:0,border:"none",color:`${r.colorWhite}`}),menu:e=>({...e,padding:"14px",background:"#161F37",borderRadius:"20px",overflow:"hidden"}),menuList:e=>({...e,"&::-webkit-scrollbar":{display:"none"}}),indicatorSeparator:e=>({...e,display:"none"}),singleValue:(e,n)=>({...e,textAlign:"right",color:n.isFocused?`${r.colorWhiteFifty}`:`${r.colorWhite}`}),valueContainer:e=>({...e,padding:0}),dropdownIndicator:(e,n)=>({...e,transform:n.isFocused?"rotate(180deg)":"rotate(0deg)"})}});i.label`
  font-weight: bold;
  margin-right: 10px;
`;const Te=i.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 40px;
`,O=i.label`
  // Ваши стили для RadioLabel
  display: flex;
  align-items: center;
  margin-right: 20px;
  cursor: pointer;
  font-size: 14px;
  color: ${o=>o.checked?"#F3F3F3":"#F3F3F380"};

  &.checked {
    color: #f3f3f3;
  }
`,D=i.input`
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
`,A=i.span`
  position: relative;
  width: 16px;
  height: 16px;
  margin-right: 4px;
  border: 1.3px solid ${r.colorWhiteFifty};
  border-radius: 50%;
  box-sizing: border-box;

  ${D}:checked + & {
    border-color: ${r.colorWhite};
  }

  ${D}:checked + &::before {
    content: '';
    width: 8px;
    height: 8px;
    background-color: ${r.colorWhite};
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`,Ve=({values:o,errors:a,touched:e,handleChange:n,handleBlur:d,setFieldValue:p})=>{const[x,F]=l.useState([]),[y,b]=l.useState([]),[u,k]=l.useState([]),[W,C]=l.useState([]);l.useEffect(()=>{async function s(){try{const I=(await ce()).map(v=>({value:v,label:v}));F(I)}catch(j){console.error("Ошибка при загрузке категорий:",j)}}async function f(){try{const I=(await de()).map(v=>({value:v,label:v}));k(I)}catch(j){console.error("Ошибка при загрузке категорий:",j)}}s(),f()},[]);const[h,c]=l.useState(null),[m,g]=l.useState(!1),[z,S]=l.useState(!1),[G,M]=l.useState(!1),[q,H]=l.useState(!1),U=s=>{const f=s.target.files[0];p("drinkThumb",f),c(f?URL.createObjectURL(f):null)},_=()=>{document.getElementById("drinkThumb").click()},J=s=>{const{value:f}=s.target;S(f.trim().length>1)},X=s=>{const{value:f}=s.target;H(f.trim().length>25)},Y=s=>{b(s),p("category",s.value)},K=s=>{C(s),p("glass",s.value)};return t.jsxs(ge,{children:[t.jsxs(me,{onClick:_,children:[t.jsxs(be,{children:[t.jsx(we,{type:"file",id:"drinkThumb",name:"drinkThumb",onChange:s=>U(s),accept:"drinkThumb/*"}),t.jsx($e,{htmlFor:"drinkThumb",children:t.jsx(Fe,{})})]}),t.jsx("p",{children:"Add image"}),h&&t.jsx(fe,{src:h,alt:"Selected"}),e.drinkThumb&&a.drinkThumb?t.jsx($,{children:a.drinkThumb}):null]}),t.jsxs(ye,{children:[t.jsxs(ke,{children:[t.jsx(V,{htmlFor:"drink",$isFocused:m,$hasValue:z,children:"Enter item title"}),t.jsx(je,{type:"text",id:"drink",name:"drink",onChange:s=>{J(s),n(s)},onBlur:s=>{g(!1),d(s)},onFocus:()=>g(!0),value:o.drink,placeholder:" "}),e.drink&&a.drink?t.jsx($,{children:a.drink}):null]}),t.jsxs(ve,{children:[t.jsx(B,{htmlFor:"description",$isFocusedDescription:G,$hasValueDescription:q,children:"Enter about recipe"}),t.jsx(We,{rows:1,maxLength:234,id:"description",name:"description",onChange:s=>{X(s),n(s)},onBlur:s=>{M(!1),d(s)},onFocus:()=>M(!0),value:o.description,placeholder:" "}),e.description&&a.description?t.jsx($,{children:a.description}):null]}),t.jsxs(Ce,{children:["Category",t.jsx(Se,{htmlFor:"category"}),t.jsx(De,{name:"category",options:x,value:y,onChange:s=>Y(s),placeholder:""})]}),e.category&&a.category?t.jsx($,{children:a.category}):null,t.jsxs(ze,{children:["Glass",t.jsx(Ie,{htmlFor:"glass"}),t.jsx(Le,{name:"glass",options:u,value:W,onChange:s=>K(s),placeholder:""})]}),e.glass&&a.glass?t.jsx($,{children:a.glass}):null,t.jsxs(Te,{children:[t.jsxs(O,{className:o.alcoholic==="Alcoholic"?"checked":"",children:[t.jsx(D,{type:"radio",name:"alcoholic",value:"Alcoholic",checked:o.alcoholic==="Alcoholic",onChange:n}),t.jsx(A,{}),"Alcoholic"]}),t.jsxs(O,{className:o.alcoholic==="Non alcoholic"?"checked":"",children:[t.jsx(D,{type:"radio",name:"alcoholic",value:"Non alcoholic",checked:o.alcoholic==="Non alcoholic",onChange:n}),t.jsx(A,{}),"Non-alcoholic"]}),e.alcoholic&&a.alcoholic?t.jsx($,{children:a.alcoholic}):null]})]})]})},Be=o=>l.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...o},l.createElement("path",{d:"M2.5 8H13.5",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}),l.createElement("path",{d:"M8 2.5V13.5",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),Re=o=>l.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...o},l.createElement("path",{d:"M2.5 8H13.5",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),Ee=o=>l.createElement("svg",{width:20,height:20,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...o},l.createElement("path",{d:"M15.625 4.375L4.375 15.625",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}),l.createElement("path",{d:"M15.625 15.625L4.375 4.375",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),Me=i.div`
  flex-basis: 100%;
  font-size: 12px;
  color: #da1414;
  line-height: 14px;
  margin-top: 4px;
  padding-left: 20px;
  margin-top: 8px;
`,Pe=i.div`
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  margin-top: 80px;
  @media (min-width: 1280px) {
    width: 540px;
  }
`,Oe=i.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 40px;
`,Ae=i.h3`
  font-size: 28px;
`,Ne=i.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  width: 100px;
  height: 38px;
  border-radius: 200px;
  border: 1px solid ${r.colorWhiteFifty};
`,E=i(Re)`
  stroke: ${r.colorWhite};
`,N=i.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  background: transparent;
  border: none;
  &:disabled ${E} {
    stroke: ${r.colorWhiteFifty};
  }
`,Ge=i.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 8px;
  @media (min-width: 768px) {
    gap: 14px;
    justify-content: flex-start;
  }
`,qe=({options:o,...a})=>t.jsx(R,{...a,options:o,styles:{container:e=>({...e,minWidth:"140px","@media (min-width: 375px)":{minWidth:"200px"},"@media (min-width: 768px)":{minWidth:"332px"}}),control:(e,n)=>({...e,height:"auto",padding:"6px",backgroundColor:"transparent",border:n.isFocused?`1px solid ${r.colorWhite}`:`1px solid ${r.colorWhiteFifty}`,boxShadow:(n.isFocused,"none"),borderRadius:"200px","&:hover":{borderColor:`${r.colorWhite}`}}),placeholder:(e,n)=>({...e,margin:0,color:n.isFocused?`${r.colorWhite}`:`${r.colorWhiteFifty}`}),option:e=>({...e,padding:"14px",color:`${r.colorWhiteFifty}`,background:"#161F37",borderRadius:"20px",overflow:"hidden",cursor:"pointer","&:hover":{color:`${r.colorWhite}`}}),input:e=>({...e,padding:0,margin:0,border:"none",color:`${r.colorWhite}`}),menu:e=>({...e,padding:"14px",background:"#161F37",borderRadius:"20px",overflow:"hidden"}),menuList:e=>({...e,"&::-webkit-scrollbar":{display:"none"}}),indicatorSeparator:e=>({...e,display:"none"}),singleValue:(e,n)=>({...e,color:n.isFocused?`${r.colorWhiteFifty}`:`${r.colorWhite}`}),valueContainer:e=>({...e,padding:0}),dropdownIndicator:(e,n)=>({...e,transform:n.isFocused?"rotate(180deg)":"rotate(0deg)"})}}),He=i.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  font-size: 14px;
  background: transparent;
  border: none;
  &:disabled ${E} {
    stroke: ${r.colorWhiteFifty};
  }
  @media (min-width: 375px) {
    padding: 0;
  }
  @media (min-width: 768px) {
    margin-left: auto;
  }
`,Ue=i(Be)`
  stroke: ${r.colorWhite};
`,_e=i(Ee)`
  stroke: ${r.colorWhiteFifty};
  &:hover {
    stroke: ${r.colorWhite};
  }
`,Je=i.input`
  width: 100px;
  padding: 15px 24px;

  font-size: 14px;
  line-height: 18px;
  color: ${r.colorWhiteFifty};
  background-color: transparent;

  border-radius: 200px;
  border: 1px rgba(243, 243, 243, 0.5) solid;
  box-sizing: border-box;
  &:hover {
    border-color: ${r.colorWhite};
  }
  &:focus {
    color: ${r.colorWhite};
  }
  @media (min-width: 768px) {
    min-width: 150px;
  }
`,Xe=({values:o,errors:a,touched:e,handleChange:n,handleBlur:d,setFieldValue:p})=>{const[x,F]=l.useState([]),[y,b]=l.useState([]);l.useEffect(()=>{async function h(){try{const m=(await pe()).map(g=>({label:g.title,value:g._id}));F(m)}catch(c){console.error("Ошибка при загрузке ингридиента:",c)}}h()},[]);const u=(h,c)=>{const{value:m,label:g}=h;p(`ingredients[${c}].title`,g),p(`ingredients[${c}]._id`,m),b(z=>{const S=[...z];return S[c]=h,S})},k=()=>{const h={name:""};p("ingredients",[...o.ingredients,h]),b(c=>[...c,null])},W=h=>{const c=[...o.ingredients];c.splice(h,1),p("ingredients",c),b(m=>{const g=[...m];return g.splice(h,1),g})},C=o.ingredients.length===1;return t.jsxs(Pe,{children:[t.jsxs(Oe,{children:[t.jsx(Ae,{children:"Ingredients"}),t.jsxs(Ne,{children:[t.jsx(N,{type:"button",onClick:()=>W(o.ingredients.length-1),disabled:C,children:t.jsx(E,{})}),t.jsx("div",{children:o.ingredients.length}),t.jsx(N,{type:"button",onClick:k,children:t.jsx(Ue,{})})]})]}),o.ingredients.map((h,c)=>t.jsxs(Ge,{children:[t.jsx(qe,{name:`ingredients[${c}].title`,options:x,value:y[c],onChange:m=>u(m,c),onBlur:d}),t.jsx(Je,{type:"text",name:`ingredients[${c}].measure`,placeholder:"1 cl",value:h.measure||"",onChange:n,onBlur:d}),t.jsx(He,{type:"button",onClick:()=>W(c),disabled:C,children:t.jsx(_e,{})}),e.ingredients&&a.ingredients&&e.ingredients[c]&&a.ingredients[c]?t.jsx(Me,{children:a.ingredients[c].title}):null]},c))]})},Ye=i.div`
  font-size: 12px;
  color: #da1414;
  line-height: 14px;
  margin-top: 8px;
`,Ke=i.h3`
  color: ${r.colorWhite};
  font-family: Manrope;
  font-size: 28px;
  font-weight: 600;
  line-height: 32px;
  word-wrap: break-word;
  margin-top: 80px;
  margin-bottom: 40px;
`,Qe=i.div`
  position: relative;
  width: 100%;
`,Ze=i.label`
  position: absolute;
  top: ${o=>o.$isFocusedDescription||o.$hasValueDescription?"-30px":"30px"};
  left: 18px;
  transform-origin: left;
  color: ${o=>o.$isFocusedDescription?"#F3F3F380":"#f3f3f3"};
  transition:
    transform 25ms,
    font-size 250ms,
    color 200ms;
  pointer-events: none;
  color: ${o=>o.$hasValueDescription?"#3CBC81":"#F3F3F380"};
  font-size: 14px;
    @media (min-width: 768px) {
    font-size: 17px;
  }

`,eo=i.textarea`
  resize: none;
  width: 100%;
  height: 184px;
  padding: 8px;
  border-radius: 14px;
  border: 1px solid ${r.colorWhiteFifty};
  background-color: transparent;
  color: ${r.colorWhite};
  font-size: 17px;
  font-family: Manrope;
  font-weight: 600;
  line-height: 18px;
  word-wrap: break-word;
  @media (min-width: 768px) {
    width: 480px;
  }
`,oo=({values:o,errors:a,touched:e,handleChange:n,handleBlur:d})=>{const[p,x]=l.useState(!1),[F,y]=l.useState(!1),b=u=>{const{value:k}=u.target;y(k.trim().length>25)};return t.jsxs(t.Fragment,{children:[t.jsx(Ke,{children:"Recipe Preparation"}),t.jsxs(Qe,{children:[t.jsx(Ze,{htmlFor:"instructions",$isFocusedDescription:p,$hasValueDescription:F,children:"Enter the recipe"}),t.jsx(eo,{id:"instructions",name:"instructions",rows:"6",onChange:u=>{b(u),n(u)},onBlur:u=>{x(!1),d(u)},onFocus:()=>x(!0),value:o.instructions,placeholder:" "}),e.instructions&&a.instructions?t.jsx(Ye,{children:a.instructions}):null]})]})},to=()=>{const o=Q(),a=Z(),e=ee({initialValues:{drink:"",ingredients:[{title:""}],instructions:"",category:"",glass:"",alcoholic:"Non alcoholic"},validationSchema:P().shape({drink:w().required("This field is mandatory"),description:w().required("This field is mandatory"),ingredients:oe().of(P().shape({title:w().required("This field is mandatory")})),instructions:w().required("This field is mandatory"),category:w().required("This field is mandatory"),glass:w().required("This field is mandatory"),alcoholic:w().required("Select the type of cocktail"),drinkThumb:te().required("Select a drinkThumb")}),onSubmit:async n=>{const d=new FormData;d.append("drink",n.drink),d.append("category",n.category),d.append("description",n.description),d.append("alcoholic",n.alcoholic),d.append("instructions",n.instructions),d.append("glass",n.glass),d.append("drinkThumb",n.drinkThumb);const p=JSON.stringify(n.ingredients);d.append("ingredients",p);try{const x=await a(ie(d));x?o("/my"):console.log("Ошибка на сервере:",x.statusText)}catch(x){console.error("Ошибка при отправке запроса:",x)}}});return t.jsxs("form",{onSubmit:e.handleSubmit,children:[t.jsx(Ve,{values:e.values,errors:e.errors,touched:e.touched,handleChange:e.handleChange,handleBlur:e.handleBlur,setFieldValue:e.setFieldValue}),t.jsx(Xe,{values:e.values,errors:e.errors,touched:e.touched,handleChange:e.handleChange,handleBlur:e.handleBlur,setFieldValue:e.setFieldValue}),t.jsx(oo,{values:e.values,errors:e.errors,touched:e.touched,handleChange:e.handleChange,handleBlur:e.handleBlur}),t.jsx(xe,{type:"submit",children:"Add"})]})},io=i.h2`
  font-size: 32px;
  font-weight: 600;
  line-height: 1.1875;
  margin-top: 80px;
  margin-bottom: 40px;

  @media (min-width: 768px) {
    font-size: 56px;
  }

  @media (min-width: 1440px) {
    font-size: 64px;
  }


  @media (min-width: 1280px) {

  }
`,no=i.div`
  @media (min-width: 1280px) {
    display: flex;
    gap: 94px;
    margin-bottom: 140px;
  }
`,ro=i.div`
  @media (min-width: 1280px) {
    display: flex;
    flex-direction: column;
  }
`,so=i.div`
  margin-top: 80px;
  @media (min-width: 1280px) {
    margin-top: 0;
  }
`,ao=i.h4`
  color: ${r.colorWhite};
  font-size: 18px;
  font-family: Manrope;
  font-weight: 500;
  line-height: 24px;
`,lo=()=>{const o={target:"_blank",rel:"noopener noreferrer"};return t.jsxs(so,{children:[t.jsx(ao,{children:"FollowUs"}),t.jsxs(ne,{children:[t.jsx(L,{children:t.jsx(T,{to:"https://www.facebook.com/goITclub/",...o,children:t.jsx(re,{})})}),t.jsx(L,{children:t.jsx(T,{to:"https://www.instagram.com/goitclub/",...o,children:t.jsx(se,{})})}),t.jsx(L,{children:t.jsx(T,{to:"https://www.youtube.com/c/GoIT",...o,children:t.jsx(ae,{})})})]})]})},co=i.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 80px;
  @media (min-width: 768px) {
    margin-bottom: 140px;
    flex-direction: row;
    gap: 32px;
  }
  @media (min-width: 1280px) {
    flex-direction: column;
    gap: 24px;
    margin-bottom: 0;
  }
`,po=i.h4`
  color: ${r.colorWhite};
  font-size: 18px;
  font-family: Manrope;
  font-weight: 500;
  line-height: 24px;
  word-wrap: break-word;
  margin-top: 40px;
  margin-bottom: 28px;
`,ho=i.div`
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  gap: 14px;
  margin-bottom: 24px;
  overflow: hidden;
  @media (min-width: 768px) {
    width: 336px;
    margin-bottom: 0;
  }
  @media (min-width: 1280px) {
    width: 312px;
  }
`,xo=i.img`
  width: 90px;
  height: 90px;
  border-radius: 8px;
`,uo=i.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 89px;
  gap: 8px;
`,go=i.p`
  color: ${r.colorWhite};
  font-size: 16px;
  font-family: Manrope;
  font-weight: 500;
  line-height: 22px;
  word-wrap: break-word;
`,mo=i.p`
  height: 63px;
  color: rgba(243, 243, 243, 0.5);
  font-size: 14px;
  font-family: Manrope;
  font-weight: 400;
  line-height: 19px;
`,fo=()=>{const[o,a]=l.useState([]);return l.useEffect(()=>{(async()=>{try{const n=await he();a(n)}catch(n){console.error("Error fetching drinks:",n)}})()},[]),t.jsxs(t.Fragment,{children:[t.jsx(po,{children:"PopularDrink"}),t.jsxs(co,{children:[" ",o.slice(0,4).map(({drinkThumb:e,drink:n,description:d,_id:p},x)=>t.jsx(le,{to:`/drink/${p}`,children:t.jsxs(ho,{children:[t.jsx(xo,{src:e,alt:n}),t.jsxs(uo,{children:[t.jsx(go,{children:n}),t.jsx(mo,{children:d})]})]})},x))]})]})},bo=()=>t.jsxs(t.Fragment,{children:[t.jsx(io,{children:"Add drink"}),t.jsxs(no,{children:[t.jsx(to,{}),t.jsxs(ro,{children:[t.jsx(lo,{}),t.jsx(fo,{})]})]})]}),ko=()=>t.jsx(bo,{});export{ko as default};
