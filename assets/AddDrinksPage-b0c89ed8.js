import{s as r,c as i,r as l,j as o,u as q,b as K,d as Q,e as Z,M as ee,f as z,F as L,S as oe,g as te,h as ne,L as ie}from"./index-0c9e44b5.js";import{P as re}from"./PageTitle-e216c46e.js";import{g as se,b as ae,a as le}from"./operationsFilters-e3a734d3.js";import{S as R}from"./react-select.esm-9cf8f6c8.js";import{b as ce}from"./operationsDrinks-d0ad5325.js";const de=r.button`
  margin-top: 20px;

  padding-top: 14px;
  padding-right: 40px;
  padding-bottom: 14px;
  padding-left: 40px;

  font-size: 14px;
  font-family: Manrope;
  font-weight: 600;
  line-height: 18px;

  color: ${i.colorBlue};
  background-color: ${i.colorWhite};

  border: none;
  border-radius: 42px;
  word-wrap: break-word;
  &:hover {
    color: ${i.colorWhite};
    background-color: ${i.colorBlue};
  }
`,pe=t=>l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:29,height:28,...t},l.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.8,d:"M14.5 5.833v16.334M6.332 14h16.333"})),w=r.div`
  font-size: 12px;
  color: #da1414;
  line-height: 14px;
  margin-top: 8px;
`,he=r.div`
  width: 100%;
  height: 320px;
  margin-bottom: 40px;

  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: ${i.colorBlueFifty};
  border-radius: 8px;
  overflow: hidden;
  transition: background-color 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    background: ${i.colorBlue};
  }

  @media (min-width: 375px) {
    /* width: 335px; */
  }

   @media (min-width: 768px) {
     /* width: 342px; */
   }

   @media (min-width: 1280px) {
     /* width: 400px; */
   }
`,ge=r.img`
  width: 100%; /* Максимальная ширина изображения равна ширине родителя */
  height: auto; /* Автоматическая высота, чтобы сохранить соотношение сторон */
  display: block;
`,ue=r.div`
  font-size: 16px;
  text-align: center;
  margin-bottom: 18px;
`,xe=r.input`
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
`,fe=r.label`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 6px;
  

  cursor: pointer;
`,me=r(pe)`
  width: 28px;
  height: 28px;
  color: green;
  fill: red;
  stroke: ${i.colorBlue};
`,be=r.div`
  width: 100%;
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 14px;
`,we=r.div`
  position: relative;
  width: 100%;
`,V=r.label`
  position: absolute;
  top: ${t=>t.$isFocused||t.$hasValue?"-15px":"10px"};
  left: 0px;
  transform-origin: left;
  color: ${t=>t.$isFocused?"#F3F3F380":"#f3f3f3"};
  transition:
    transform 25ms,
    font-size 250ms,
    color 200ms;
  pointer-events: none;
  color: ${t=>t.$hasValue?"#3CBC81":"#F3F3F380"};
  font-size: ${t=>t.$isFocused||t.$hasValue?"12px":"14px"};
`,Fe=r.input`
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
`,$e=r.div`
  position: relative;
  width: 100%;
`,B=r.label`
  position: absolute;
  top: ${t=>t.$isFocusedDescription||t.$hasValueDescription?"-15px":"10px"};
  left: 0px;
  transform-origin: left;
  color: ${t=>t.$isFocusedDescription?"#F3F3F380":"#f3f3f3"};
  transition:
    transform 25ms,
    font-size 250ms,
    color 200ms;
  pointer-events: none;
  color: ${t=>t.$hasValueDescription?"#3CBC81":"#F3F3F380"};
  font-size: ${t=>t.$isFocusedDescription||t.$hasValueDescription?"12px":"14px"};
`,ke=r.textarea`
  resize: none;
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

  &:focus + ${B}, &:not(:placeholder-shown) + ${B} {
    transform: translate(10px, -30px) scale(0.8);
    font-size: 12px;
  }
  &::-webkit-scrollbar {
    display: none;
  }
`,je=r.div`
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
`,ye=r.label`
  position: absolute;
  top: ${t=>t.$isFocusedDescription||t.$hasValueDescription?"5px":"30px"};
  left: 10px;
  transform-origin: left;
  color: ${t=>t.$isFocusedDescription?"#F3F3F380":"#f3f3f3"};
  transition:
    transform 25ms,
    font-size 250ms,
    color 200ms;
  pointer-events: none;
  color: ${t=>t.$hasValueDescription?"#3CBC81":"#F3F3F380"};
  font-size: ${t=>t.$isFocusedDescription||t.$hasValueDescription?"12px":"14px"};
`,ve=({options:t,...a})=>o.jsx(R,{...a,options:t,styles:{container:e=>({...e,width:"240px"}),control:(e,n)=>({...e,minHeight:"auto",borderColor:(n.isFocused,"red"),backgroundColor:"transparent",border:(n.isFocused,"none"),boxShadow:(n.isFocused,"none"),"&:hover":{cursor:"pointer"}}),placeholder:(e,n)=>({...e,margin:0,color:n.isFocused?`${i.colorWhite}`:`${i.colorWhiteFifty}`}),option:e=>({...e,padding:"14px",color:`${i.colorWhiteFifty}`,background:"#161F37",borderRadius:"20px",overflow:"hidden",cursor:"pointer","&:hover":{color:`${i.colorWhite}`}}),input:e=>({...e,padding:0,margin:0,border:"none",color:`${i.colorWhite}`}),menu:e=>({...e,padding:"14px",background:"#161F37",borderRadius:"20px",overflow:"hidden"}),menuList:e=>({...e,"&::-webkit-scrollbar":{display:"none"}}),indicatorSeparator:e=>({...e,display:"none"}),singleValue:(e,n)=>({...e,textAlign:"right",color:n.isFocused?`${i.colorWhiteFifty}`:`${i.colorWhite}`}),valueContainer:e=>({...e,padding:0}),dropdownIndicator:(e,n)=>({...e,transform:n.isFocused?"rotate(180deg)":"rotate(0deg)"})}}),Ce=r.div`
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
`,We=r.label`
  position: absolute;
  top: ${t=>t.$isFocusedDescription||t.$hasValueDescription?"5px":"30px"};
  left: 10px;
  transform-origin: left;
  color: ${t=>t.$isFocusedDescription?"#F3F3F380":"#f3f3f3"};
  transition:
    transform 25ms,
    font-size 250ms,
    color 200ms;
  pointer-events: none;
  color: ${t=>t.$hasValueDescription?"#3CBC81":"#F3F3F380"};
  font-size: ${t=>t.$isFocusedDescription||t.$hasValueDescription?"12px":"14px"};
`,Se=({options:t,...a})=>o.jsx(R,{...a,options:t,styles:{container:e=>({...e,width:"240px"}),control:(e,n)=>({...e,borderColor:(n.isFocused,"red"),backgroundColor:"transparent",border:(n.isFocused,"none"),boxShadow:(n.isFocused,"none"),"&:hover":{cursor:"pointer"}}),placeholder:(e,n)=>({...e,margin:0,color:n.isFocused?`${i.colorWhite}`:`${i.colorWhiteFifty}`}),option:e=>({...e,padding:"14px",color:`${i.colorWhiteFifty}`,background:"#161F37",borderRadius:"20px",overflow:"hidden",cursor:"pointer","&:hover":{color:`${i.colorWhite}`}}),input:e=>({...e,padding:0,margin:0,border:"none",color:`${i.colorWhite}`}),menu:e=>({...e,padding:"14px",background:"#161F37",borderRadius:"20px",overflow:"hidden"}),menuList:e=>({...e,"&::-webkit-scrollbar":{display:"none"}}),indicatorSeparator:e=>({...e,display:"none"}),singleValue:(e,n)=>({...e,textAlign:"right",color:n.isFocused?`${i.colorWhiteFifty}`:`${i.colorWhite}`}),valueContainer:e=>({...e,padding:0}),dropdownIndicator:(e,n)=>({...e,transform:n.isFocused?"rotate(180deg)":"rotate(0deg)"})}});r.label`
  font-weight: bold;
  margin-right: 10px;
`;const De=r.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 40px;
`,T=r.label`
  // Ваши стили для RadioLabel
  display: flex;
  align-items: center;
  margin-right: 20px;
  cursor: pointer;
  font-size: 14px;
  color: ${t=>t.checked?"#F3F3F3":"#F3F3F380"};

  &.checked {
    color: #f3f3f3;
  }
`,S=r.input`
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
`,M=r.span`
  position: relative;
  width: 16px;
  height: 16px;
  margin-right: 4px;
  border: 1.3px solid ${i.colorWhiteFifty};
  border-radius: 50%;
  box-sizing: border-box;

  ${S}:checked + & {
    border-color: ${i.colorWhite};
  }

  ${S}:checked + &::before {
    content: '';
    width: 8px;
    height: 8px;
    background-color: ${i.colorWhite};
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`,Ie=({values:t,errors:a,touched:e,handleChange:n,handleBlur:d,setFieldValue:p})=>{const[g,F]=l.useState([]),[$,b]=l.useState([]),[u,k]=l.useState([]),[v,C]=l.useState([]);l.useEffect(()=>{async function s(){try{const I=(await se()).map(y=>({value:y,label:y}));F(I)}catch(j){console.error("Ошибка при загрузке категорий:",j)}}async function m(){try{const I=(await ae()).map(y=>({value:y,label:y}));k(I)}catch(j){console.error("Ошибка при загрузке категорий:",j)}}s(),m()},[]);const[h,c]=l.useState(null),[f,x]=l.useState(!1),[D,W]=l.useState(!1),[A,P]=l.useState(!1),[G,N]=l.useState(!1),H=s=>{const m=s.target.files[0];p("drinkThumb",m),c(m?URL.createObjectURL(m):null)},U=()=>{document.getElementById("drinkThumb").click()},_=s=>{const{value:m}=s.target;W(m.trim().length>1)},J=s=>{const{value:m}=s.target;N(m.trim().length>25)},X=s=>{b(s),p("category",s.value)},Y=s=>{C(s),p("glass",s.value)};return o.jsxs(o.Fragment,{children:[o.jsxs(he,{onClick:U,children:[o.jsxs(ue,{children:[o.jsx(xe,{type:"file",id:"drinkThumb",name:"drinkThumb",onChange:s=>H(s),accept:"drinkThumb/*"}),o.jsx(fe,{htmlFor:"drinkThumb",children:o.jsx(me,{})})]}),o.jsx("p",{children:"Add image"}),h&&o.jsx(ge,{src:h,alt:"Selected"}),e.drinkThumb&&a.drinkThumb?o.jsx(w,{children:a.drinkThumb}):null]}),o.jsxs(be,{children:[o.jsxs(we,{children:[o.jsx(V,{htmlFor:"drink",$isFocused:f,$hasValue:D,children:"Enter item title"}),o.jsx(Fe,{type:"text",id:"drink",name:"drink",onChange:s=>{_(s),n(s)},onBlur:s=>{x(!1),d(s)},onFocus:()=>x(!0),value:t.drink,placeholder:" "}),e.drink&&a.drink?o.jsx(w,{children:a.drink}):null]}),o.jsxs($e,{children:[o.jsx(B,{htmlFor:"description",$isFocusedDescription:A,$hasValueDescription:G,children:"Enter about recipe"}),o.jsx(ke,{rows:1,maxLength:234,id:"description",name:"description",onChange:s=>{J(s),n(s)},onBlur:s=>{P(!1),d(s)},onFocus:()=>P(!0),value:t.description,placeholder:" "}),e.description&&a.description?o.jsx(w,{children:a.description}):null]}),o.jsxs(je,{children:["Category",o.jsx(ye,{htmlFor:"category"}),o.jsx(ve,{name:"category",options:g,value:$,onChange:s=>X(s),placeholder:""})]}),e.category&&a.category?o.jsx(w,{children:a.category}):null,o.jsxs(Ce,{children:["Glass",o.jsx(We,{htmlFor:"glass"}),o.jsx(Se,{name:"glass",options:u,value:v,onChange:s=>Y(s),placeholder:""})]}),e.glass&&a.glass?o.jsx(w,{children:a.glass}):null,o.jsxs(De,{children:[o.jsxs(T,{className:t.alcoholic==="Alcoholic"?"checked":"",children:[o.jsx(S,{type:"radio",name:"alcoholic",value:"Alcoholic",checked:t.alcoholic==="true",onChange:n}),o.jsx(M,{}),"Alcoholic"]}),o.jsxs(T,{className:t.alcoholic==="Non alcoholic"?"checked":"",children:[o.jsx(S,{type:"radio",name:"alcoholic",value:"Non alcoholic",checked:t.alcoholic==="false",onChange:n}),o.jsx(M,{}),"Non-alcoholic"]}),e.alcoholic&&a.alcoholic?o.jsx(w,{children:a.alcoholic}):null]})]})]})},ze=t=>l.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},l.createElement("path",{d:"M2.5 8H13.5",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}),l.createElement("path",{d:"M8 2.5V13.5",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),Le=t=>l.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},l.createElement("path",{d:"M2.5 8H13.5",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),Ve=t=>l.createElement("svg",{width:20,height:20,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},l.createElement("path",{d:"M15.625 4.375L4.375 15.625",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}),l.createElement("path",{d:"M15.625 15.625L4.375 4.375",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),Be=r.div`
  flex-basis: 100%;
  font-size: 12px;
  color: #da1414;
  line-height: 14px;
  margin-top: 4px;
  padding-left: 20px;
  margin-top: 8px;
`,Re=r.div`
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  margin-top: 80px;
`,Ee=r.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 40px;
`,Pe=r.h3`
  font-size: 28px;
`,Te=r.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  width: 100px;
  height: 38px;
  border-radius: 200px;
  border: 1px solid ${i.colorWhiteFifty};
`,E=r(Le)`
  stroke: ${i.colorWhite};
`,O=r.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  background: transparent;
  border: none;
  &:disabled ${E} {
    stroke: ${i.colorWhiteFifty};
  }
`,Me=r.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 8px
`,Oe=({options:t,...a})=>o.jsx(R,{...a,options:t,styles:{container:e=>({...e,minWidth:"140px"}),control:(e,n)=>({...e,height:"auto",padding:"6px",backgroundColor:"transparent",border:n.isFocused?`1px solid ${i.colorWhite}`:`1px solid ${i.colorWhiteFifty}`,boxShadow:(n.isFocused,"none"),borderRadius:"200px","&:hover":{borderColor:`${i.colorWhite}`}}),placeholder:(e,n)=>({...e,margin:0,color:n.isFocused?`${i.colorWhite}`:`${i.colorWhiteFifty}`}),option:e=>({...e,padding:"14px",color:`${i.colorWhiteFifty}`,background:"#161F37",borderRadius:"20px",overflow:"hidden",cursor:"pointer","&:hover":{color:`${i.colorWhite}`}}),input:e=>({...e,padding:0,margin:0,border:"none",color:`${i.colorWhite}`}),menu:e=>({...e,padding:"14px",background:"#161F37",borderRadius:"20px",overflow:"hidden"}),menuList:e=>({...e,"&::-webkit-scrollbar":{display:"none"}}),indicatorSeparator:e=>({...e,display:"none"}),singleValue:(e,n)=>({...e,color:n.isFocused?`${i.colorWhiteFifty}`:`${i.colorWhite}`}),valueContainer:e=>({...e,padding:0}),dropdownIndicator:(e,n)=>({...e,transform:n.isFocused?"rotate(180deg)":"rotate(0deg)"})}}),Ae=r.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  font-size: 14px;
  background: transparent;
  border: none;
  &:disabled ${E} {
    stroke: ${i.colorWhiteFifty};
  }
`,Ge=r(ze)`
  stroke: ${i.colorWhite};
`,Ne=r(Ve)`
  stroke: ${i.colorWhiteFifty};
  &:hover {
    stroke: ${i.colorWhite};
  }
`,He=r.input`
  width: 100px;
  padding: 15px 24px;

  font-size: 14px;
  line-height: 18px;
  color: ${i.colorWhiteFifty};
  background-color: transparent;

  border-radius: 200px;
  border: 1px rgba(243, 243, 243, 0.5) solid;
  box-sizing: border-box;
  &:hover {
    border-color: ${i.colorWhite};
  }
  &:focus {
    color: ${i.colorWhite};
  }
`,Ue=({values:t,errors:a,touched:e,handleChange:n,handleBlur:d,setFieldValue:p})=>{const[g,F]=l.useState([]),[$,b]=l.useState([]);l.useEffect(()=>{async function h(){try{const c=await le();console.log("ingredients",c);const f=c.map(x=>({label:x.title,value:x._id}));F(f)}catch(c){console.error("Ошибка при загрузке ингридиента:",c)}}h()},[]);const u=(h,c)=>{const{value:f,label:x}=h;p(`ingredients[${c}].title`,x),p(`ingredients[${c}]._id`,f),b(D=>{const W=[...D];return W[c]=h,W})},k=()=>{const h={name:""};p("ingredients",[...t.ingredients,h]),b(c=>[...c,null])},v=h=>{const c=[...t.ingredients];c.splice(h,1),p("ingredients",c),b(f=>{const x=[...f];return x.splice(h,1),x})},C=t.ingredients.length===1;return o.jsxs(Re,{children:[o.jsxs(Ee,{children:[o.jsx(Pe,{children:"Ingredients"}),o.jsxs(Te,{children:[o.jsx(O,{type:"button",onClick:()=>v(t.ingredients.length-1),disabled:C,children:o.jsx(E,{})}),o.jsx("div",{children:t.ingredients.length}),o.jsx(O,{type:"button",onClick:k,children:o.jsx(Ge,{})})]})]}),t.ingredients.map((h,c)=>o.jsxs(Me,{children:[o.jsx(Oe,{name:`ingredients[${c}].title`,options:g,value:$[c],onChange:f=>u(f,c),onBlur:d}),o.jsx(He,{type:"text",name:`ingredients[${c}].measure`,placeholder:"1 cl",value:h.measure||"",onChange:n,onBlur:d}),o.jsx(Ae,{type:"button",onClick:()=>v(c),disabled:C,children:o.jsx(Ne,{})}),e.ingredients&&a.ingredients&&e.ingredients[c]&&a.ingredients[c]?o.jsx(Be,{children:a.ingredients[c].title}):null]},c))]})},_e=r.div`
  font-size: 12px;
  color: #da1414;
  line-height: 14px;
  margin-top: 8px;
`,Je=r.h3`
  color: ${i.colorWhite};
  font-family: Manrope;
  font-size: 28px;
  font-weight: 600;
  line-height: 32px;
  word-wrap: break-word;
  margin-top: 80px;
  margin-bottom: 40px;
`,Xe=r.div`
  position: relative;
  width: 100%;
`,Ye=r.label`
  position: absolute;
  top: ${t=>t.$isFocusedDescription||t.$hasValueDescription?"-30px":"30px"};
  left: 18px;
  transform-origin: left;
  color: ${t=>t.$isFocusedDescription?"#F3F3F380":"#f3f3f3"};
  transition:
    transform 25ms,
    font-size 250ms,
    color 200ms;
  pointer-events: none;
  color: ${t=>t.$hasValueDescription?"#3CBC81":"#F3F3F380"};
  font-size: 14px;
`,qe=r.textarea`
  resize: none;
  width: 100%;
  height: 184px;
  padding: 8px;
  border-radius: 14px;
  border: 1px solid ${i.colorWhiteFifty};
  background-color: transparent;
  color: ${i.colorWhite};
  font-size: 16px;
  font-family: Manrope;
  font-weight: 600;
  line-height: 18px;
  word-wrap: break-word;
`,Ke=({values:t,errors:a,touched:e,handleChange:n,handleBlur:d})=>{const[p,g]=l.useState(!1),[F,$]=l.useState(!1),b=u=>{const{value:k}=u.target;$(k.trim().length>25)};return o.jsxs(o.Fragment,{children:[o.jsx(Je,{children:"Recipe Preparation"}),o.jsxs(Xe,{children:[o.jsx(Ye,{htmlFor:"instructions",$isFocusedDescription:p,$hasValueDescription:F,children:"Enter the recipe"}),o.jsx(qe,{id:"instructions",name:"instructions",rows:"6",onChange:u=>{b(u),n(u)},onBlur:u=>{g(!1),d(u)},onFocus:()=>g(!0),value:t.instructions,placeholder:" "}),e.instructions&&a.instructions?o.jsx(_e,{children:a.instructions}):null]})]})},Qe=()=>{const t=q(),a=K(),e=Q({initialValues:{drink:"",ingredients:[{title:""}],instructions:"",category:"",glass:"",alcoholic:"Non alcoholic"},onSubmit:async n=>{console.log("values",n);const d=new FormData;d.append("drink",n.drink),d.append("category",n.category),d.append("description",n.description),d.append("alcoholic",n.alcoholic),d.append("instructions",n.instructions),d.append("glass",n.glass),d.append("drinkThumb",n.drinkThumb);const p=JSON.stringify(n.ingredients);console.log("ingredientsStr",p),d.append("ingredients",p);try{const g=await a(Z(d));g?t("/my"):console.log("Ошибка на сервере:",g.statusText)}catch(g){console.error("Ошибка при отправке запроса:",g)}}});return o.jsxs("form",{onSubmit:e.handleSubmit,children:[o.jsx(Ie,{values:e.values,errors:e.errors,touched:e.touched,handleChange:e.handleChange,handleBlur:e.handleBlur,setFieldValue:e.setFieldValue}),o.jsx(Ue,{values:e.values,errors:e.errors,touched:e.touched,handleChange:e.handleChange,handleBlur:e.handleBlur,setFieldValue:e.setFieldValue}),o.jsx(Ke,{values:e.values,errors:e.errors,touched:e.touched,handleChange:e.handleChange,handleBlur:e.handleBlur}),o.jsx(de,{type:"submit",children:"Add"})]})},Ze=r.div`
  margin-top: 80px;
`,eo=r.h4`
  color: ${i.colorWhite};
  font-size: 18px;
  font-family: Manrope;
  font-weight: 500;
  line-height: 24px;
`,oo=()=>{const t={target:"_blank",rel:"noopener noreferrer"};return o.jsxs(Ze,{children:[o.jsx(eo,{children:"FollowUs"}),o.jsxs(ee,{children:[o.jsx(z,{children:o.jsx(L,{to:"https://www.facebook.com/goITclub/",...t,children:o.jsx(oe,{})})}),o.jsx(z,{children:o.jsx(L,{to:"https://www.instagram.com/goitclub/",...t,children:o.jsx(te,{})})}),o.jsx(z,{children:o.jsx(L,{to:"https://www.youtube.com/c/GoIT",...t,children:o.jsx(ne,{})})})]})]})},to=r.h4`
  color: ${i.colorWhite};
  font-size: 18px;
  font-family: Manrope;
  font-weight: 500;
  line-height: 24px;
  word-wrap: break-word;
  margin-top: 40px;
  margin-bottom: 28px;
`,no=r.div`
display: inline-flex;
justify-content: flex-start;
align-items: center;
gap: 14px;
margin-bottom: 24px;
overflow: hidden;
`,io=r.img`
width: 90px;
height: 90px;
border-radius: 8px;
`,ro=r.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 89px;
  gap: 8px;
`,so=r.p`
  color: ${i.colorWhite};
  font-size: 16px;
  font-family: Manrope;
  font-weight: 500;
  line-height: 22px;
  word-wrap: break-word;
`,ao=r.p`
  height: 63px;
  color: rgba(243, 243, 243, 0.5);
  font-size: 14px;
  font-family: Manrope;
  font-weight: 400;
  line-height: 19px;
`,lo=()=>{const[t,a]=l.useState([]);return l.useEffect(()=>{(async()=>{try{const n=await ce();a(n)}catch(n){console.error("Error fetching drinks:",n)}})()},[]),o.jsxs(o.Fragment,{children:[o.jsx(to,{children:"PopularDrink"}),t.map(({drinkThumb:e,drink:n,description:d,_id:p},g)=>o.jsx(ie,{to:`/drink/${p}`,children:o.jsxs(no,{children:[o.jsx(io,{src:e,alt:n}),o.jsxs(ro,{children:[o.jsx(so,{children:n}),o.jsx(ao,{children:d})]})]})},g))]})},co=()=>o.jsxs(o.Fragment,{children:[o.jsx(re,{title:"Add drink"}),o.jsx(Qe,{}),o.jsx(oo,{}),o.jsx(lo,{})]}),fo=()=>o.jsx(co,{});export{fo as default};
