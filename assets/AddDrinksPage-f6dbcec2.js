import{s as i,r as l,j as o,u as Y,a as K,b as Q,c as Z,d as b,e as ee,f as oe,g as te,h as ie,M as re,i as L,F as V,S as ne,k as se,l as ae,L as le}from"./index-6fa5008b.js";import{g as ce,b as de,a as pe}from"./operationsFilters-ec8c26c4.js";import{S as R}from"./react-select.esm-0c8f6e2b.js";import{b as he}from"./operationsDrinks-40e7c5d2.js";import{L as xe}from"./LoaderDots-4966b1d0.js";const ge=i.button`
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
`,ue=e=>l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:29,height:28,...e},l.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.8,d:"M14.5 5.833v16.334M6.332 14h16.333"})),k=i.div`
  font-size: 12px;
  color: var(--errorred-color);
  line-height: 14px;
  margin-top: 8px;
`,me=i.div`
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
`,fe=i.div`
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
`,we=i.img`
  min-width: 100%;
  min-height: 130%; /* Максимальная ширина изображения равна ширине родителя */
  height: auto; /* Автоматическая высота, чтобы сохранить соотношение сторон */
  object-fit: cover;
  display: block;
`,ve=i.div`
  font-size: 16px;
  text-align: center;
  margin-bottom: 18px;
`,be=i.input`
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
`,ke=i.label`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 6px;

  cursor: pointer;
`,ye=i(ue)`
  width: 28px;
  height: 28px;
  color: green;
  fill: red;
  stroke: var(--blue-color);
`,je=i.div`
  width: 100%;
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 14px;
  @media (min-width: 768px) {
    gap: 27px;
  }
`,$e=i.div`
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
`,Fe=i.input`
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
`,Se=i.div`
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
`,Ce=i.textarea`
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
`,De=i.div`
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
`,Ie=({options:e,...n})=>o.jsx(R,{...n,options:e,styles:{container:t=>({...t,width:"240px"}),control:(t,r)=>({...t,minHeight:"auto",borderColor:(r.isFocused,"red"),backgroundColor:"transparent",border:(r.isFocused,"none"),boxShadow:(r.isFocused,"none"),"&:hover":{cursor:"pointer"}}),placeholder:(t,r)=>({...t,margin:0,color:r.isFocused?"var(--text-color)":"var(--whitefifty-color)"}),option:t=>({...t,padding:"14px",color:"var(--whitefifty-color)",background:"var( --filter-background)",borderRadius:"20px",overflow:"hidden",cursor:"pointer",transition:"color var(--transition)","&:hover":{color:"var(--text-color)"}}),input:t=>({...t,padding:0,margin:0,border:"none",color:"var(--text-color)"}),menu:t=>({...t,padding:"14px",background:"var(--filter-background)",borderRadius:"20px",overflow:"hidden"}),menuList:t=>({...t,"&::-webkit-scrollbar":{display:"none"}}),indicatorSeparator:t=>({...t,display:"none"}),singleValue:(t,r)=>({...t,textAlign:"right",color:r.isFocused?"var(--whitefifty-color)":"var(--text-color)"}),valueContainer:t=>({...t,padding:0}),dropdownIndicator:(t,r)=>({...t,transform:r.isFocused?"rotate(180deg)":"rotate(0deg)"})}}),Le=i.div`
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
`,Ve=i.label`
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
`,Te=({options:e,...n})=>o.jsx(R,{...n,options:e,styles:{container:t=>({...t,width:"240px"}),control:(t,r)=>({...t,borderColor:(r.isFocused,"red"),backgroundColor:"transparent",border:(r.isFocused,"none"),boxShadow:(r.isFocused,"none"),"&:hover":{cursor:"pointer"}}),placeholder:(t,r)=>({...t,margin:0,color:r.isFocused?"var(--text-color)":"var(--whitefifty-color)"}),option:t=>({...t,padding:"14px",color:"var(--whitefifty-color)",background:"var( --filter-background)",borderRadius:"20px",overflow:"hidden",cursor:"pointer",transition:"color var(--transition)","&:hover":{color:"var(--text-color)"}}),input:t=>({...t,padding:0,margin:0,border:"none",color:"var(--text-color)"}),menu:t=>({...t,padding:"14px",background:"var(--filter-background)",borderRadius:"20px",overflow:"hidden"}),menuList:t=>({...t,"&::-webkit-scrollbar":{display:"none"}}),indicatorSeparator:t=>({...t,display:"none"}),singleValue:(t,r)=>({...t,textAlign:"right",color:r.isFocused?"var(--whitefifty-color)":"var(--text-color)"}),valueContainer:t=>({...t,padding:0}),dropdownIndicator:(t,r)=>({...t,transform:r.isFocused?"rotate(180deg)":"rotate(0deg)"})}});i.label`
  font-weight: bold;
  margin-right: 10px;
`;const We=i.div`
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
`,D=i.input`
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

  ${D}:checked + & {
    border-color: var(--text-color);
  }

  ${D}:checked + &::before {
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
`,Re=({values:e,errors:n,touched:t,handleChange:r,handleBlur:a,setFieldValue:c})=>{const[p,m]=l.useState([]),[x,v]=l.useState([]),[g,y]=l.useState([]),[F,S]=l.useState([]);l.useEffect(()=>{async function s(){try{const I=(await ce()).map($=>({value:$,label:$}));m(I)}catch(j){console.error("Ошибка при загрузке категорий:",j)}}async function w(){try{const I=(await de()).map($=>({value:$,label:$}));y(I)}catch(j){console.error("Ошибка при загрузке категорий:",j)}}s(),w()},[]);const[h,d]=l.useState(null),[f,u]=l.useState(!1),[z,C]=l.useState(!1),[M,P]=l.useState(!1),[N,G]=l.useState(!1),q=s=>{const w=s.target.files[0];c("drinkThumb",w),d(w?URL.createObjectURL(w):null)},H=()=>{document.getElementById("drinkThumb").click()},U=s=>{const{value:w}=s.target;C(w.trim().length>=1)},_=s=>{const{value:w}=s.target;G(w.trim().length>=1)},J=s=>{v(s),c("category",s.value)},X=s=>{S(s),c("glass",s.value)};return o.jsxs(me,{children:[o.jsxs(fe,{onClick:H,children:[o.jsxs(ve,{children:[o.jsx(be,{type:"file",id:"drinkThumb",name:"drinkThumb",onChange:s=>q(s),accept:"drinkThumb/*"}),o.jsx(ke,{htmlFor:"drinkThumb",children:o.jsx(ye,{})})]}),o.jsx("p",{style:{color:"var(--white-color)"},children:"Add image"}),h&&o.jsx(we,{src:h,alt:"Selected"}),t.drinkThumb&&n.drinkThumb?o.jsx(k,{children:n.drinkThumb}):null]}),o.jsxs(je,{children:[o.jsxs($e,{children:[o.jsx(T,{htmlFor:"drink",$isFocused:f,$hasValue:z,children:"Enter item title"}),o.jsx(Fe,{type:"text",id:"drink",name:"drink",onChange:s=>{U(s),r(s)},onBlur:s=>{u(!1),a(s)},onFocus:()=>u(!0),value:e.drink}),t.drink&&n.drink?o.jsx(k,{children:n.drink}):null]}),o.jsxs(Se,{children:[o.jsx(W,{htmlFor:"description",$isFocusedDescription:M,$hasValueDescription:N,children:"Enter about recipe"}),o.jsx(Ce,{rows:1,maxLength:234,id:"description",name:"description",onChange:s=>{_(s),r(s)},onBlur:s=>{P(!1),a(s)},onFocus:()=>P(!0),value:e.description,placeholder:" "}),t.description&&n.description?o.jsx(k,{children:n.description}):null]}),o.jsxs(De,{children:["Category",o.jsx(ze,{htmlFor:"category"}),o.jsx(Ie,{name:"category",options:p,value:x,onChange:s=>J(s),placeholder:""})]}),t.category&&n.category?o.jsx(k,{children:n.category}):null,o.jsxs(Le,{children:["Glass",o.jsx(Ve,{htmlFor:"glass"}),o.jsx(Te,{name:"glass",options:g,value:F,onChange:s=>X(s),placeholder:""})]}),t.glass&&n.glass?o.jsx(k,{children:n.glass}):null,o.jsxs(We,{children:[o.jsxs(B,{className:e.alcoholic==="Alcoholic"?"checked":"",children:[o.jsx(D,{type:"radio",name:"alcoholic",value:"Alcoholic",checked:e.alcoholic==="Alcoholic",onChange:r}),o.jsx(O,{}),"Alcoholic"]}),o.jsxs(B,{className:e.alcoholic==="Non alcoholic"?"checked":"",children:[o.jsx(D,{type:"radio",name:"alcoholic",value:"Non alcoholic",checked:e.alcoholic==="Non alcoholic",onChange:r}),o.jsx(O,{}),"Non-alcoholic"]}),t.alcoholic&&n.alcoholic?o.jsx(k,{children:n.alcoholic}):null]})]})]})},Ee=e=>l.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},l.createElement("path",{d:"M2.5 8H13.5",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}),l.createElement("path",{d:"M8 2.5V13.5",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),Pe=e=>l.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},l.createElement("path",{d:"M2.5 8H13.5",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),Be=e=>l.createElement("svg",{width:20,height:20,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},l.createElement("path",{d:"M15.625 4.375L4.375 15.625",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}),l.createElement("path",{d:"M15.625 15.625L4.375 4.375",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),Oe=i.div`
  flex-basis: 100%;
  font-size: 12px;
  color: var(--errorred-color);
  line-height: 14px;
  margin-top: 4px;
  padding-left: 20px;
  margin-top: 8px;
`,Ae=i.div`
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
`,Me=i.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 16px;
`,Ne=i.h3`
  font-size: 28px;
  @media (min-width: 768px) {
    font-size: 40px;
  }
`,Ge=i.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  width: 100px;
  height: 38px;
  border-radius: 200px;
  border: 1px solid var(--placeholder-color);
`,E=i(Pe)`
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
`,qe=i.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 8px;
  @media (min-width: 768px) {
    gap: 14px;
    justify-content: flex-start;
  }
`,He=({options:e,...n})=>o.jsx(R,{...n,options:e,styles:{container:t=>({...t,minWidth:"140px","@media (min-width: 375px)":{minWidth:"200px"},"@media (min-width: 768px)":{minWidth:"332px"}}),control:(t,r)=>({...t,height:"auto",padding:"6px 16px",backgroundColor:"transparent",border:r.isFocused?"1px solid var(--text-color)":"1px solid var(--whitefifty-color)",boxShadow:(r.isFocused,"none"),borderRadius:"200px",transition:"border-color var(--transition)","&:hover":{borderColor:"var(--text-color)"},"@media (min-width: 768px)":{padding:"9px 19px"}}),placeholder:(t,r)=>({...t,margin:0,color:r.isFocused?"var(--text-color)":"var(--whitefifty-color)"}),option:t=>({...t,padding:"14px",color:"var(--whitefifty-color)",background:"var(--filter-background)",borderRadius:"20px",overflow:"hidden",cursor:"pointer",transition:"color var(--transition)","&:hover":{color:"var(--text-color)"}}),input:t=>({...t,padding:0,margin:0,border:"none",color:"var(--text-color)"}),menu:t=>({...t,padding:"14px",background:"var(--filter-background)",borderRadius:"20px",overflow:"hidden"}),menuList:t=>({...t,"&::-webkit-scrollbar":{display:"none"}}),indicatorSeparator:t=>({...t,display:"none"}),singleValue:(t,r)=>({...t,color:r.isFocused?"var(--whitefifty-color)":"var(--text-color)"}),valueContainer:t=>({...t,padding:0}),dropdownIndicator:(t,r)=>({...t,transform:r.isFocused?"rotate(180deg)":"rotate(0deg)"})}}),Ue=i.button`
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
`,_e=i(Ee)`
  stroke: var(--text-color);
`,Je=i(Be)`
  stroke: var(--whitefifty-color);
  transition: stroke var(--transition);

  &:hover {
    stroke: var(--text-color);
  }
`,Xe=i.input`
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
`,Ye=({values:e,errors:n,touched:t,handleChange:r,handleBlur:a,setFieldValue:c})=>{const[p,m]=l.useState([]),[x,v]=l.useState([]);l.useEffect(()=>{async function h(){try{const f=(await pe()).map(u=>({label:u.title,value:u._id}));m(f)}catch(d){console.error("Ошибка при загрузке ингридиента:",d)}}h()},[]);const g=(h,d)=>{const{value:f,label:u}=h;c(`ingredients[${d}].title`,u),c(`ingredients[${d}]._id`,f),v(z=>{const C=[...z];return C[d]=h,C})},y=()=>{const h={name:""};c("ingredients",[...e.ingredients,h]),v(d=>[...d,null])},F=h=>{const d=[...e.ingredients];d.splice(h,1),c("ingredients",d),v(f=>{const u=[...f];return u.splice(h,1),u})},S=e.ingredients.length===1;return o.jsxs(Ae,{children:[o.jsxs(Me,{children:[o.jsx(Ne,{children:"Ingredients"}),o.jsxs(Ge,{children:[o.jsx(A,{type:"button",onClick:()=>F(e.ingredients.length-1),disabled:S,children:o.jsx(E,{})}),o.jsx("div",{children:e.ingredients.length}),o.jsx(A,{type:"button",onClick:y,children:o.jsx(_e,{})})]})]}),e.ingredients.map((h,d)=>o.jsxs(qe,{children:[o.jsx(He,{name:`ingredients[${d}].title`,options:p,value:x[d],onChange:f=>g(f,d),onBlur:a}),o.jsx(Xe,{type:"text",name:`ingredients[${d}].measure`,placeholder:"1 cl",value:h.measure||"",onChange:r,onBlur:a}),o.jsx(Ue,{type:"button",onClick:()=>F(d),disabled:S,children:o.jsx(Je,{})}),t.ingredients&&n.ingredients&&t.ingredients[d]&&n.ingredients[d]?o.jsx(Oe,{children:n.ingredients[d].title}):null]},d))]})},Ke=i.div`
  font-size: 12px;
  color: #da1414;
  line-height: 14px;
  margin-top: 8px;
`,Qe=i.h3`
  color: var(--text-color);
  font-size: 28px;
  font-weight: 600;
  line-height: 32px;
  word-wrap: break-word;
  margin-top: 80px;
  margin-bottom: 40px;
`,Ze=i.div`
  position: relative;
  width: 100%;
`,eo=i.label`
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
`,oo=i.textarea`
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
`,to=({values:e,errors:n,touched:t,handleChange:r,handleBlur:a})=>{const[c,p]=l.useState(!1),[m,x]=l.useState(!1),v=g=>{const{value:y}=g.target;x(y.trim().length>25)};return o.jsxs(o.Fragment,{children:[o.jsx(Qe,{children:"Recipe Preparation"}),o.jsxs(Ze,{children:[o.jsx(eo,{htmlFor:"instructions",$isFocusedDescription:c,$hasValueDescription:m}),o.jsx(oo,{id:"instructions",name:"instructions",rows:"6",onChange:g=>{v(g),r(g)},onBlur:g=>{p(!1),a(g)},onFocus:()=>p(!0),value:e.instructions,placeholder:"Enter the recipe"}),t.instructions&&n.instructions?o.jsx(Ke,{children:n.instructions}):null]})]})},io=()=>{const[e,n]=l.useState(!1),t=Y(),r=K(),a=Q({initialValues:{drink:"",ingredients:[{title:""}],instructions:"",category:"",glass:"",alcoholic:"Non alcoholic"},validationSchema:Z().shape({drink:b().required("This field is mandatory"),description:b().required("This field is mandatory"),ingredients:ee().required("This field is mandatory"),instructions:b().required("This field is mandatory"),category:b().required("This field is mandatory"),glass:b().required("This field is mandatory"),alcoholic:b().required("Select the type of cocktail"),drinkThumb:oe().required("Select a drinkThumb")}),onSubmit:async c=>{const p=new FormData;p.append("drink",c.drink),p.append("category",c.category),p.append("description",c.description),p.append("alcoholic",c.alcoholic),p.append("instructions",c.instructions),p.append("glass",c.glass),p.append("drinkThumb",c.drinkThumb);const m=JSON.stringify(c.ingredients);p.append("ingredients",m);try{n(!0);const x=await r(te(p));n(!1),x?t("/my"):console.log("Ошибка на сервере:",x.statusText)}catch(x){console.error("Ошибка при отправке запроса:",x)}}});return o.jsx(o.Fragment,{children:e?o.jsx(ie,{text:"Please wait, we add your coctail..."}):o.jsxs("form",{onSubmit:a.handleSubmit,children:[o.jsx(Re,{values:a.values,errors:a.errors,touched:a.touched,handleChange:a.handleChange,handleBlur:a.handleBlur,setFieldValue:a.setFieldValue}),o.jsx(Ye,{values:a.values,errors:a.errors,touched:a.touched,handleChange:a.handleChange,handleBlur:a.handleBlur,setFieldValue:a.setFieldValue}),o.jsx(to,{values:a.values,errors:a.errors,touched:a.touched,handleChange:a.handleChange,handleBlur:a.handleBlur}),o.jsx(ge,{type:"submit",children:"Add"})]})})},ro=i.h2`
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
`,no=i.div`
  @media (min-width: 1280px) {
    display: flex;
    gap: 94px;
    margin-bottom: 140px;
  }
`,so=i.div`
  @media (min-width: 1280px) {
    display: flex;
    flex-direction: column;
  }
`,ao=i.div`
  margin-top: 80px;
  @media (min-width: 1280px) {
    margin-top: 0;
  }
`,lo=i.h4`
  color: var(--white-color);
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  @media (min-width: 768px) {
    font-size: 24px;
  }
`,co=()=>{const e={target:"_blank",rel:"noopener noreferrer"};return o.jsxs(ao,{children:[o.jsx(lo,{children:"FollowUs"}),o.jsxs(re,{children:[o.jsx(L,{children:o.jsx(V,{to:"https://www.facebook.com/goITclub/",...e,children:o.jsx(ne,{})})}),o.jsx(L,{children:o.jsx(V,{to:"https://www.instagram.com/goitclub/",...e,children:o.jsx(se,{})})}),o.jsx(L,{children:o.jsx(V,{to:"https://www.youtube.com/c/GoIT",...e,children:o.jsx(ae,{})})})]})]})},po=i.div`
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
`,ho=i.h4`
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
`,xo=i.div`
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
`,go=i.img`
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
`,mo=i.p`
  color: var(--text-color);
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  word-wrap: break-word;
`,fo=i.p`
  height: 63px;
  color: var(--whitefifty-color);
  font-size: 14px;
  font-weight: 400;
  line-height: 19px;
`,wo=()=>{const[e,n]=l.useState([]),[t,r]=l.useState(!1);return l.useEffect(()=>{r(!0),(async()=>{try{const c=await he();n(c)}catch(c){console.error("Error fetching drinks:",c)}finally{r(!1)}})()},[]),o.jsxs(o.Fragment,{children:[o.jsx(ho,{children:"PopularDrink"}),t?o.jsx(xe,{}):o.jsxs(po,{children:[" ",e.slice(0,4).map(({drinkThumb:a,drink:c,description:p,_id:m},x)=>o.jsx(le,{to:`/drink/${m}`,children:o.jsxs(xo,{children:[o.jsx(go,{src:a,alt:c}),o.jsxs(uo,{children:[o.jsx(mo,{children:c}),o.jsx(fo,{children:p})]})]})},x))]})]})},vo=()=>o.jsxs(o.Fragment,{children:[o.jsx(ro,{children:"Add drink"}),o.jsxs(no,{children:[o.jsx(io,{}),o.jsxs(so,{children:[o.jsx(co,{}),o.jsx(wo,{})]})]})]}),Fo=()=>o.jsx(vo,{});export{Fo as default};
