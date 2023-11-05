import{s as i,r as l,j as o,u as Y,b as K,c as Q,d as Z,e as b,f as ee,g as oe,h as te,i as ie,M as re,k as L,F as V,S as ne,l as se,m as ae,L as le}from"./index-86883a60.js";import{g as ce,b as de,a as pe}from"./operationsFilters-d1ccc7aa.js";import{S as R}from"./react-select.esm-a0188161.js";import{b as he}from"./operationsDrinks-b2bcc2ba.js";const xe=i.button`
  margin-top: 20px;

  padding-top: 14px;
  padding-right: 40px;
  padding-bottom: 14px;
  padding-left: 40px;

  font-size: 14px;
  font-weight: 600;
  line-height: 18px;

  color: var(--btn-add-drink-color);
  background-color: var(--btn-add-drink-background);

  border: 1px solid #161f37;
  border-radius: 42px;
  word-wrap: break-word;
  transition:
    background-color var(--transition),
    color var(--transition);

  &:hover {
    background-color: var(--btn-add-drink-color);
    color: var(--btn-add-drink-background);
  }

  @media (min-width: 768px) {
    font-size: 16px;
  }
`,ge=e=>l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:29,height:28,...e},l.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.8,d:"M14.5 5.833v16.334M6.332 14h16.333"})),k=i.div`
  font-size: 12px;
  color: var(--errorred-color);
  line-height: 14px;
  margin-top: 8px;
`,ue=i.div`
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

  background: var(--background-image-color);
  border-radius: 8px;
  overflow: hidden;
  transition: background var(--transition);
  cursor: pointer;

  &:hover {
    background: var(--background-image-color-hover);
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
  min-width: 100%;
  min-height: 130%; /* Максимальная ширина изображения равна ширине родителя */
  height: auto; /* Автоматическая высота, чтобы сохранить соотношение сторон */
  object-fit: cover;
  display: block;
`,we=i.div`
  font-size: 16px;
  text-align: center;
  margin-bottom: 18px;
`,ve=i.input`
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
`,be=i.label`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 6px;

  cursor: pointer;
`,ke=i(ge)`
  width: 28px;
  height: 28px;
  color: green;
  fill: red;
  stroke: var(--blue-color);
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
`,je=i.div`
  position: relative;
  width: 100%;
`,T=i.label`
  position: absolute;
  top: ${e=>e.$isFocused||e.$hasValue?"-15px":"10px"};
  left: 0px;
  transform-origin: left;
  color: ${e=>e.$isFocused?"var(--whitefifty-color)":"var(--text-color)"};
  transition:
    transform 25ms,
    font-size var(--transition),
    color var(--transition);
  pointer-events: none;
  color: ${e=>e.$hasValue?"var(--successgren-color)":"var(--whitefifty-color)"};
  font-size: ${e=>e.$isFocused||e.$hasValue?"12px":"14px"};
  @media (min-width: 768px) {
    top: ${e=>e.$isFocused||e.$hasValue?"-20px":"10px"};
    font-size: ${e=>e.$isFocused||e.$hasValue?"14px":"16px"};
  }
`,$e=i.input`
  font-size: 14px;
  color: var(--text-color);
  padding: 8px;
  border: 1px solid transparent;
  border-bottom: 1px solid var(--whitefifty-color);
  background-color: transparent;
  transition:
    border-color var(--transition),
    transform var(--transition),
    font-size var(--transition);
  width: 100%;

  &:focus {
    border-bottom: 1px solid;
  }

  &:focus + ${T}, &:not(:placeholder-shown) + ${T} {
    transform: translate(10px, -30px) scale(0.8);
    font-size: 12px;
  }

  @media (min-width: 768px) {
    font-size: 16px;
  }
`,Fe=i.div`
  position: relative;
  width: 100%;
`,W=i.label`
  position: absolute;
  top: ${e=>e.$isFocusedDescription||e.$hasValueDescription?"-15px":"10px"};
  left: 0px;
  transform-origin: left;
  color: ${e=>e.$isFocusedDescription?"var(--whitefifty-color)":"var(--text-color)"};
  transition:
    transform 25ms,
    font-size var(--transition),
    color var(--transition);
  pointer-events: none;
  color: ${e=>e.$hasValueDescription?"var(--successgren-color)":"var(--whitefifty-color)"};
  font-size: ${e=>e.$isFocusedDescription||e.$hasValueDescription?"12px":"14px"};
  @media (min-width: 768px) {
    top: ${e=>e.$isFocusedDescription||e.$hasValueDescription?"-20px":"10px"};
    font-size: ${e=>e.$isFocusedDescription||e.$hasValueDescription?"14px":"16px"};
  }
`,Se=i.textarea`
  width: 100%;
  resize: none;
  font-size: 14px;
  color: var(--text-color);
  padding: 8px;
  border: 1px solid transparent;
  border-bottom: 1px solid var(--whitefifty-color);
  background-color: transparent;
  transition:
    border-color var(--transition),
    transform var(--transition),
    font-size var(--transition);

  &:focus {
    border-bottom: 1px solid;
  }

  &:focus + ${W}, &:not(:placeholder-shown) + ${W} {
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
  color: var(--whitefifty-color);
  border-bottom: 1px solid var(--whitefifty-color);
  background-color: transparent;
  transition: border-color var(--transition);
  width: 100%;
  font-size: 14px;
  @media (min-width: 768px) {
    font-size: 16px;
  }
`,ze=i.label`
  position: absolute;
  top: ${e=>e.$isFocusedDescription||e.$hasValueDescription?"5px":"30px"};
  left: 10px;
  transform-origin: left;
  color: ${e=>e.$isFocusedDescription?"var(--whitefifty-color)":"var(--white-color)"};
  transition:
    transform 25ms,
    font-size var(--transition),
    color var(--transition);
  pointer-events: none;
  color: ${e=>e.$hasValueDescription?"var(--successgren-color)":"var(--whitefifty-color)"};
  font-size: ${e=>e.$isFocusedDescription||e.$hasValueDescription?"12px":"14px"};
  @media (min-width: 768px) {
    font-size: ${e=>e.$isFocusedDescription||e.$hasValueDescription?"12px":"16px"};
  }
`,De=({options:e,...n})=>o.jsx(R,{...n,options:e,styles:{container:t=>({...t,width:"240px"}),control:(t,r)=>({...t,minHeight:"auto",borderColor:(r.isFocused,"red"),backgroundColor:"transparent",border:(r.isFocused,"none"),boxShadow:(r.isFocused,"none"),"&:hover":{cursor:"pointer"}}),placeholder:(t,r)=>({...t,margin:0,color:r.isFocused?"var(--text-color)":"var(--whitefifty-color)"}),option:t=>({...t,padding:"14px",color:"var(--whitefifty-color)",background:"var( --filter-background)",borderRadius:"20px",overflow:"hidden",cursor:"pointer",transition:"color var(--transition)","&:hover":{color:"var(--text-color)"}}),input:t=>({...t,padding:0,margin:0,border:"none",color:"var(--text-color)"}),menu:t=>({...t,padding:"14px",background:"var(--filter-background)",borderRadius:"20px",overflow:"hidden"}),menuList:t=>({...t,"&::-webkit-scrollbar":{display:"none"}}),indicatorSeparator:t=>({...t,display:"none"}),singleValue:(t,r)=>({...t,textAlign:"right",color:r.isFocused?"var(--whitefifty-color)":"var(--text-color)"}),valueContainer:t=>({...t,padding:0}),dropdownIndicator:(t,r)=>({...t,transform:r.isFocused?"rotate(180deg)":"rotate(0deg)"})}}),Ie=i.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--whitefifty-color);
  border: 1px solid transparent;
  border-bottom: 1px solid var(--whitefifty-color);
  background-color: transparent;
  transition: border-color var(--transition);
  width: 100%;
  font-size: 14px;
  @media (min-width: 768px) {
    font-size: 16px;
  }
`,Le=i.label`
  position: absolute;
  top: ${e=>e.$isFocusedDescription||e.$hasValueDescription?"5px":"30px"};
  left: 10px;
  transform-origin: left;
  color: ${e=>e.$isFocusedDescription?"var(whitefifty-color)":"var(--text-color)"};
  transition:
    transform 25ms,
    font-size var(--transition),
    color var(--transition);
  pointer-events: none;
  color: ${e=>e.$hasValueDescription?"var(--successgren-color)":"var(--whitefifty-color)"};
  font-size: ${e=>e.$isFocusedDescription||e.$hasValueDescription?"12px":"14px"};
`,Ve=({options:e,...n})=>o.jsx(R,{...n,options:e,styles:{container:t=>({...t,width:"240px"}),control:(t,r)=>({...t,borderColor:(r.isFocused,"red"),backgroundColor:"transparent",border:(r.isFocused,"none"),boxShadow:(r.isFocused,"none"),"&:hover":{cursor:"pointer"}}),placeholder:(t,r)=>({...t,margin:0,color:r.isFocused?"var(--text-color)":"var(--whitefifty-color)"}),option:t=>({...t,padding:"14px",color:"var(--whitefifty-color)",background:"var( --filter-background)",borderRadius:"20px",overflow:"hidden",cursor:"pointer",transition:"color var(--transition)","&:hover":{color:"var(--text-color)"}}),input:t=>({...t,padding:0,margin:0,border:"none",color:"var(--text-color)"}),menu:t=>({...t,padding:"14px",background:"var(--filter-background)",borderRadius:"20px",overflow:"hidden"}),menuList:t=>({...t,"&::-webkit-scrollbar":{display:"none"}}),indicatorSeparator:t=>({...t,display:"none"}),singleValue:(t,r)=>({...t,textAlign:"right",color:r.isFocused?"var(--whitefifty-color)":"var(--text-color)"}),valueContainer:t=>({...t,padding:0}),dropdownIndicator:(t,r)=>({...t,transform:r.isFocused?"rotate(180deg)":"rotate(0deg)"})}});i.label`
  font-weight: bold;
  margin-right: 10px;
`;const Te=i.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 26px;
`,B=i.label`
  display: flex;
  align-items: center;
  margin-right: 20px;
  cursor: pointer;
  font-size: 14px;
  color: ${e=>e.checked?"var(--text-color)":"var(--whitefifty-color)"};

  &.checked {
    color: var(--text-color);
  }

  @media (min-width: 768px) {
    font-size: 16px;
  }
`,z=i.input`
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
`,O=i.span`
  position: relative;
  width: 16px;
  height: 16px;
  margin-right: 4px;
  border: 1.3px solid var(--whitefifty-color);
  border-radius: 50%;
  box-sizing: border-box;

  ${z}:checked + & {
    border-color: var(--text-color);
  }

  ${z}:checked + &::before {
    content: '';
    width: 8px;
    height: 8px;
    background-color: var(--text-color);
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`,We=({values:e,errors:n,touched:t,handleChange:r,handleBlur:a,setFieldValue:d})=>{const[p,w]=l.useState([]),[x,v]=l.useState([]),[g,y]=l.useState([]),[F,S]=l.useState([]);l.useEffect(()=>{async function s(){try{const I=(await ce()).map($=>({value:$,label:$}));w(I)}catch(j){console.error("Ошибка при загрузке категорий:",j)}}async function f(){try{const I=(await de()).map($=>({value:$,label:$}));y(I)}catch(j){console.error("Ошибка при загрузке категорий:",j)}}s(),f()},[]);const[h,c]=l.useState(null),[m,u]=l.useState(!1),[D,C]=l.useState(!1),[M,P]=l.useState(!1),[N,G]=l.useState(!1),q=s=>{const f=s.target.files[0];d("drinkThumb",f),c(f?URL.createObjectURL(f):null)},H=()=>{document.getElementById("drinkThumb").click()},U=s=>{const{value:f}=s.target;C(f.trim().length>=1)},_=s=>{const{value:f}=s.target;G(f.trim().length>=1)},J=s=>{v(s),d("category",s.value)},X=s=>{S(s),d("glass",s.value)};return o.jsxs(ue,{children:[o.jsxs(me,{onClick:H,children:[o.jsxs(we,{children:[o.jsx(ve,{type:"file",id:"drinkThumb",name:"drinkThumb",onChange:s=>q(s),accept:"drinkThumb/*"}),o.jsx(be,{htmlFor:"drinkThumb",children:o.jsx(ke,{})})]}),o.jsx("p",{style:{color:"var(--white-color)"},children:"Add image"}),h&&o.jsx(fe,{src:h,alt:"Selected"}),t.drinkThumb&&n.drinkThumb?o.jsx(k,{children:n.drinkThumb}):null]}),o.jsxs(ye,{children:[o.jsxs(je,{children:[o.jsx(T,{htmlFor:"drink",$isFocused:m,$hasValue:D,children:"Enter item title"}),o.jsx($e,{type:"text",id:"drink",name:"drink",onChange:s=>{U(s),r(s)},onBlur:s=>{u(!1),a(s)},onFocus:()=>u(!0),value:e.drink}),t.drink&&n.drink?o.jsx(k,{children:n.drink}):null]}),o.jsxs(Fe,{children:[o.jsx(W,{htmlFor:"description",$isFocusedDescription:M,$hasValueDescription:N,children:"Enter about recipe"}),o.jsx(Se,{rows:1,maxLength:234,id:"description",name:"description",onChange:s=>{_(s),r(s)},onBlur:s=>{P(!1),a(s)},onFocus:()=>P(!0),value:e.description,placeholder:" "}),t.description&&n.description?o.jsx(k,{children:n.description}):null]}),o.jsxs(Ce,{children:["Category",o.jsx(ze,{htmlFor:"category"}),o.jsx(De,{name:"category",options:p,value:x,onChange:s=>J(s),placeholder:""})]}),t.category&&n.category?o.jsx(k,{children:n.category}):null,o.jsxs(Ie,{children:["Glass",o.jsx(Le,{htmlFor:"glass"}),o.jsx(Ve,{name:"glass",options:g,value:F,onChange:s=>X(s),placeholder:""})]}),t.glass&&n.glass?o.jsx(k,{children:n.glass}):null,o.jsxs(Te,{children:[o.jsxs(B,{className:e.alcoholic==="Alcoholic"?"checked":"",children:[o.jsx(z,{type:"radio",name:"alcoholic",value:"Alcoholic",checked:e.alcoholic==="Alcoholic",onChange:r}),o.jsx(O,{}),"Alcoholic"]}),o.jsxs(B,{className:e.alcoholic==="Non alcoholic"?"checked":"",children:[o.jsx(z,{type:"radio",name:"alcoholic",value:"Non alcoholic",checked:e.alcoholic==="Non alcoholic",onChange:r}),o.jsx(O,{}),"Non-alcoholic"]}),t.alcoholic&&n.alcoholic?o.jsx(k,{children:n.alcoholic}):null]})]})]})},Re=e=>l.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},l.createElement("path",{d:"M2.5 8H13.5",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}),l.createElement("path",{d:"M8 2.5V13.5",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),Ee=e=>l.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},l.createElement("path",{d:"M2.5 8H13.5",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),Pe=e=>l.createElement("svg",{width:20,height:20,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},l.createElement("path",{d:"M15.625 4.375L4.375 15.625",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}),l.createElement("path",{d:"M15.625 15.625L4.375 4.375",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),Be=i.div`
  flex-basis: 100%;
  font-size: 12px;
  color: var(--errorred-color);
  line-height: 14px;
  margin-top: 4px;
  padding-left: 20px;
  margin-top: 8px;
`,Oe=i.div`
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  margin-top: 80px;
  @media (min-width: 768px) {
    gap: 24px;
  }
  @media (min-width: 1280px) {
    width: 540px;
  }
`,Ae=i.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 16px;
`,Me=i.h3`
  font-size: 28px;
  @media (min-width: 768px) {
    font-size: 40px;
  }
`,Ne=i.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  width: 100px;
  height: 38px;
  border-radius: 200px;
  border: 1px solid var(--placeholder-color);
`,E=i(Ee)`
  stroke: var(--text-color);
`,A=i.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  background: transparent;
  border: none;
  &:disabled ${E} {
    stroke: var(--whitefifty-color);
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
`,qe=({options:e,...n})=>o.jsx(R,{...n,options:e,styles:{container:t=>({...t,minWidth:"140px","@media (min-width: 375px)":{minWidth:"200px"},"@media (min-width: 768px)":{minWidth:"332px"}}),control:(t,r)=>({...t,height:"auto",padding:"6px 16px",backgroundColor:"transparent",border:r.isFocused?"1px solid var(--text-color)":"1px solid var(--whitefifty-color)",boxShadow:(r.isFocused,"none"),borderRadius:"200px",transition:"border-color var(--transition)","&:hover":{borderColor:"var(--text-color)"},"@media (min-width: 768px)":{padding:"9px 19px"}}),placeholder:(t,r)=>({...t,margin:0,color:r.isFocused?"var(--text-color)":"var(--whitefifty-color)"}),option:t=>({...t,padding:"14px",color:"var(--whitefifty-color)",background:"var(--filter-background)",borderRadius:"20px",overflow:"hidden",cursor:"pointer",transition:"color var(--transition)","&:hover":{color:"var(--text-color)"}}),input:t=>({...t,padding:0,margin:0,border:"none",color:"var(--text-color)"}),menu:t=>({...t,padding:"14px",background:"var(--filter-background)",borderRadius:"20px",overflow:"hidden"}),menuList:t=>({...t,"&::-webkit-scrollbar":{display:"none"}}),indicatorSeparator:t=>({...t,display:"none"}),singleValue:(t,r)=>({...t,color:r.isFocused?"var(--whitefifty-color)":"var(--text-color)"}),valueContainer:t=>({...t,padding:0}),dropdownIndicator:(t,r)=>({...t,transform:r.isFocused?"rotate(180deg)":"rotate(0deg)"})}}),He=i.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  font-size: 14px;
  background: transparent;
  border: none;
  &:disabled ${E} {
    stroke: var(--whitefifty-color);
  }
  @media (min-width: 375px) {
    padding: 0;
  }
  @media (min-width: 768px) {
    margin-left: auto;
  }
`,Ue=i(Re)`
  stroke: var(--text-color);
`,_e=i(Pe)`
  stroke: var(--whitefifty-color);
  transition: stroke var(--transition);

  &:hover {
    stroke: var(--text-color);
  }
`,Je=i.input`
  width: 100px;
  padding: 15px 24px;

  font-size: 14px;
  line-height: 18px;
  color: var(--whitefifty-color);
  background-color: transparent;
  // background-color: var(--background-color-ingredients);

  border-radius: 200px;
  border: 1px solid var(--whitefifty-color);
  box-sizing: border-box;
  transition: border-color var(--transition);

  &:hover {
    border-color: var(--text-color);
  }
  &:focus {
    color: var(--text-color);
  }
  @media (min-width: 768px) {
    min-width: 150px;
    padding: 18px 24px;
  }
`,Xe=({values:e,errors:n,touched:t,handleChange:r,handleBlur:a,setFieldValue:d})=>{const[p,w]=l.useState([]),[x,v]=l.useState([]);l.useEffect(()=>{async function h(){try{const m=(await pe()).map(u=>({label:u.title,value:u._id}));w(m)}catch(c){console.error("Ошибка при загрузке ингридиента:",c)}}h()},[]);const g=(h,c)=>{const{value:m,label:u}=h;d(`ingredients[${c}].title`,u),d(`ingredients[${c}]._id`,m),v(D=>{const C=[...D];return C[c]=h,C})},y=()=>{const h={name:""};d("ingredients",[...e.ingredients,h]),v(c=>[...c,null])},F=h=>{const c=[...e.ingredients];c.splice(h,1),d("ingredients",c),v(m=>{const u=[...m];return u.splice(h,1),u})},S=e.ingredients.length===1;return o.jsxs(Oe,{children:[o.jsxs(Ae,{children:[o.jsx(Me,{children:"Ingredients"}),o.jsxs(Ne,{children:[o.jsx(A,{type:"button",onClick:()=>F(e.ingredients.length-1),disabled:S,children:o.jsx(E,{})}),o.jsx("div",{children:e.ingredients.length}),o.jsx(A,{type:"button",onClick:y,children:o.jsx(Ue,{})})]})]}),e.ingredients.map((h,c)=>o.jsxs(Ge,{children:[o.jsx(qe,{name:`ingredients[${c}].title`,options:p,value:x[c],onChange:m=>g(m,c),onBlur:a}),o.jsx(Je,{type:"text",name:`ingredients[${c}].measure`,placeholder:"1 cl",value:h.measure||"",onChange:r,onBlur:a}),o.jsx(He,{type:"button",onClick:()=>F(c),disabled:S,children:o.jsx(_e,{})}),t.ingredients&&n.ingredients&&t.ingredients[c]&&n.ingredients[c]?o.jsx(Be,{children:n.ingredients[c].title}):null]},c))]})},Ye=i.div`
  font-size: 12px;
  color: #da1414;
  line-height: 14px;
  margin-top: 8px;
`,Ke=i.h3`
  color: var(--text-color);
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
  top: ${e=>e.$isFocusedDescription||e.$hasValueDescription?"-30px":"30px"};
  left: 18px;
  transform-origin: left;
  color: ${e=>e.$isFocusedDescription?"var(--whitefifty-color)":"(--text-color)"};
  transition:
    transform 25ms,
    font-size var(--transition),
    color var(--transition);
  pointer-events: none;
  color: ${e=>e.$hasValueDescription?"var(--successgren-color)":"var(--whiteeighty-color)"};
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
  border: 1px solid var(--whitefifty-color);
  background-color: transparent;
  color: var(--text-color);
  font-size: 17px;
  font-weight: 600;
  line-height: 18px;
  word-wrap: break-word;

  &::placeholder {
    color: var(--placeholder-color);
    padding-top: 8px;
    padding-left: 10px;
    font-family: Manrope;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.28;
  }

  @media (min-width: 768px) {
    width: 480px;
    font-size: 17px;
    line-height: 1.56;
    padding-top: 6px;
    padding-left: 16px;
  }
`,oo=({values:e,errors:n,touched:t,handleChange:r,handleBlur:a})=>{const[d,p]=l.useState(!1),[w,x]=l.useState(!1),v=g=>{const{value:y}=g.target;x(y.trim().length>25)};return o.jsxs(o.Fragment,{children:[o.jsx(Ke,{children:"Recipe Preparation"}),o.jsxs(Qe,{children:[o.jsx(Ze,{htmlFor:"instructions",$isFocusedDescription:d,$hasValueDescription:w}),o.jsx(eo,{id:"instructions",name:"instructions",rows:"6",onChange:g=>{v(g),r(g)},onBlur:g=>{p(!1),a(g)},onFocus:()=>p(!0),value:e.instructions,placeholder:"Enter the recipe"}),t.instructions&&n.instructions?o.jsx(Ye,{children:n.instructions}):null]})]})},to=()=>{const[e,n]=l.useState(!1),t=Y(),r=K(),a=Q({initialValues:{drink:"",ingredients:[{title:""}],instructions:"",category:"",glass:"",alcoholic:"Non alcoholic"},validationSchema:Z().shape({drink:b().required("This field is mandatory"),description:b().required("This field is mandatory"),ingredients:ee().required("This field is mandatory"),instructions:b().required("This field is mandatory"),category:b().required("This field is mandatory"),glass:b().required("This field is mandatory"),alcoholic:b().required("Select the type of cocktail"),drinkThumb:oe().required("Select a drinkThumb")}),onSubmit:async d=>{const p=new FormData;p.append("drink",d.drink),p.append("category",d.category),p.append("description",d.description),p.append("alcoholic",d.alcoholic),p.append("instructions",d.instructions),p.append("glass",d.glass),p.append("drinkThumb",d.drinkThumb);const w=JSON.stringify(d.ingredients);p.append("ingredients",w);try{n(!0);const x=await r(te(p));n(!1),x?t("/my"):console.log("Ошибка на сервере:",x.statusText)}catch(x){console.error("Ошибка при отправке запроса:",x)}}});return o.jsx(o.Fragment,{children:e?o.jsx(ie,{text:"Please wait, we add your coctail..."}):o.jsxs("form",{onSubmit:a.handleSubmit,children:[o.jsx(We,{values:a.values,errors:a.errors,touched:a.touched,handleChange:a.handleChange,handleBlur:a.handleBlur,setFieldValue:a.setFieldValue}),o.jsx(Xe,{values:a.values,errors:a.errors,touched:a.touched,handleChange:a.handleChange,handleBlur:a.handleBlur,setFieldValue:a.setFieldValue}),o.jsx(oo,{values:a.values,errors:a.errors,touched:a.touched,handleChange:a.handleChange,handleBlur:a.handleBlur}),o.jsx(xe,{type:"submit",children:"Add"})]})})},io=i.h2`
  color: var(--text-color);
  font-size: 32px;
  font-weight: 600;
  line-height: 1.1875;
  margin-top: 80px;
  margin-bottom: 40px;

  @media (min-width: 768px) {
    font-size: 56px;
  }

  @media (min-width: 1280px) {
    font-size: 64px;
  }
`,ro=i.div`
  @media (min-width: 1280px) {
    display: flex;
    gap: 94px;
    margin-bottom: 140px;
  }
`,no=i.div`
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
  color: var(--white-color);
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  @media (min-width: 768px) {
    font-size: 24px;
  }
`,lo=()=>{const e={target:"_blank",rel:"noopener noreferrer"};return o.jsxs(so,{children:[o.jsx(ao,{children:"FollowUs"}),o.jsxs(re,{children:[o.jsx(L,{children:o.jsx(V,{to:"https://www.facebook.com/goITclub/",...e,children:o.jsx(ne,{})})}),o.jsx(L,{children:o.jsx(V,{to:"https://www.instagram.com/goitclub/",...e,children:o.jsx(se,{})})}),o.jsx(L,{children:o.jsx(V,{to:"https://www.youtube.com/c/GoIT",...e,children:o.jsx(ae,{})})})]})]})},co=i.div`
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
  color: var(--text-color);
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  word-wrap: break-word;
  margin-top: 40px;
  margin-bottom: 28px;
  @media (min-width: 768px) {
    margin-top: 80px;
    margin-bottom: 40px;
    font-size: 24px;
  }
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
`,go=i.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 89px;
  gap: 8px;
`,uo=i.p`
  color: var(--text-color);
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  word-wrap: break-word;
`,mo=i.p`
  height: 63px;
  color: var(--whitefifty-color);
  font-size: 14px;
  font-weight: 400;
  line-height: 19px;
`,fo=()=>{const[e,n]=l.useState([]);return l.useEffect(()=>{(async()=>{try{const r=await he();n(r)}catch(r){console.error("Error fetching drinks:",r)}})()},[]),o.jsxs(o.Fragment,{children:[o.jsx(po,{children:"PopularDrink"}),o.jsxs(co,{children:[" ",e.slice(0,4).map(({drinkThumb:t,drink:r,description:a,_id:d},p)=>o.jsx(le,{to:`/drink/${d}`,children:o.jsxs(ho,{children:[o.jsx(xo,{src:t,alt:r}),o.jsxs(go,{children:[o.jsx(uo,{children:r}),o.jsx(mo,{children:a})]})]})},p))]})]})},wo=()=>o.jsxs(o.Fragment,{children:[o.jsx(io,{children:"Add drink"}),o.jsxs(ro,{children:[o.jsx(to,{}),o.jsxs(no,{children:[o.jsx(lo,{}),o.jsx(fo,{})]})]})]}),jo=()=>o.jsx(wo,{});export{jo as default};
