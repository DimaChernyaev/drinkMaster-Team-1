import{n as s,r as i,j as e,E as z,a as O}from"./index-8d00d9da.js";import{g as M,a as U}from"./operationsFilters-0a0b5b49.js";import{P as A}from"./PageTitle-90dee22d.js";import{S as C}from"./react-select.esm-917b0faf.js";import{P as H}from"./Paginator-38cb5617.js";import{T as W}from"./Hourglass-730f7eb2.js";import{C as $}from"./CardCoctail-7b8c9bf4.js";import{a as B}from"./operationsDrinks-28f9d68c.js";const K=s.div`
  width: 100%; 
  padding-top: 80px;
  padding-bottom: 80px; 

  //tablet 
  @media screen and (min-width: 768px) {
    padding-top: 72px;
    padding-bottom: 140px;
  }
`;s.div`
    
      //mobile
      margin-bottom: 40px;

      //tablet
      @media screen and (min-width: 768px) {
        margin-bottom: 80px;
      }
`;s.ul`
  
    //mobile
      display: flex;
      padding: 0;
      flex-wrap: wrap;
      gap: 28px;
      margin-bottom: 40px;
      

    //tablet
    @media screen and (min-width: 768px) {
      row-gap: 40px;
      column-gap: 20px;
      margin-bottom: 80px;
    }

    //desktop
    @media (min-width: 1280px) {
      row-gap: 80px;
    }
`;s.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
  margin-bottom: 160px;
  margin-right: auto;
  margin-left: auto;

  @media screen and (min-width: 768px) {
    margin-top: 175px;
    margin-bottom: 195px;
  }

  @media screen and (min-width: 12800px) {
    margin-top: 200px;
    margin-bottom: 140px;
  }
`;const N=o=>o.split(" ").map(a=>a[0].toUpperCase()+a.slice(1)).join(" "),V=(o="")=>({label:N(o),value:o}),j=(o=[])=>o.length===0?[]:o.map(r=>V(r)),G=o=>i.createElement("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...o},i.createElement("path",{d:"M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z",strokeLinecap:"round",strokeLinejoin:"round"}),i.createElement("path",{d:"M17.5 17.5L13.875 13.875",strokeLinecap:"round",strokeLinejoin:"round"})),Z=s.div`
  // modile
  // display: flex;
  // flex-direction: column;
  // padding: 0;
  // margin-bottom: 40px;
  // row-gap: 14px;

  // //tablet
  // @media (min-width: 768px) {
  //   flex-direction: row;
  //   column-gap: 8px;
  //   justify-content: flex-start;
  // }

  //desktop
`,q=s.form`
  // modile
  display: flex;
  flex-direction: column;
  padding: 0;
  margin-top: 40px;
  margin-bottom: 40px;
  row-gap: 14px;
  justify-content: center;

  //tablet
  @media (min-width: 768px) {
    flex-direction: row;
    column-gap: 8px;
    justify-content: flex-start;
    align-items: center;
  }

  //desktop
`,J=s.label``,Q=s.span`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
`,X=s.input`
  // mobile
  font-weight: 400;
  font-size: 14px;
  font-height: 1.56;
  width: 100%;
  padding: 14px 24px 14px 24px;
  border-radius: 20em;
  background-color: transparent;
  border: 1px solid var(--whitetwenty-color);
  color: var(--white-color);
  transition:
    border-color var(--transition),
    background-color var(--transition);

  &::placeholder {
    color: var(--white-color);
  }

  &:hover {
    border-color: var(--whitefifty-color);
    //color:  var(--white-color);
  }

  &:focus {
    border-color: var(--whitefifty-color);
    //color:  var(--white-color);
  }

  // tablet
  @media (min-width: 768px) {
    font-size: 17px;
    width: 264px;
  }
`,Y=s.span`
  position: absolute;
  //transform: translate(30, 0);
  right: 24px;
  top: 17px;
  padding: 0;
  border: 0;
  background-color: transparent;
  //cursor: pointer;
  outline: none;
`,tt=s(G)`
  width: 20px;
  height: 20px;
  stroke: var(--white-color);
  transition: stroke-width var(--transition);

  &:hover {
    stroke-width: 1.8;
  }

  &:focus {
    stroke-width: 1.8;
  }
`,S=(o,d,r)=>({control:(t,a)=>({...t,padding:"10px 16px 10px 22px",fontWeight:"400",fontSize:"14px",fontHeight:"1.56",letterSpacing:"-0.04em",width:"100%",height:"56px",border:"none",borderRadius:"200px",backgroundColor:"var(--blue-color)",transition:"border var(--transition)",":hover":{border:"1px solid var(--whitetwenty-color)"},":focus":{...t[":focus"],border:"1px solid var(--whitetwenty-color)"},"@media only screen and (min-width: 768px)":{...t["@media only screen and (min-width: 768px)"],fontSize:"17px",width:"199px"}}),valueContainer:t=>({...t,padding:"0"}),input:t=>({...t,padding:"0",marging:"0",color:"var(--white-color)",transition:"color var(--transition)"}),singleValue:(t,a)=>({...t,color:a.isFocused?"var(--whitefifty-color)":"var(--white-color)",transition:"opacity var(--transition)"}),placeholder:t=>({...t,color:"var(--white-color)"}),indicatorSeparator:t=>({display:"none"}),menu:t=>({...t,padding:"14px 8px 14px 8px",fontWeight:"400",fontSize:"14px",fontHeight:"1.56",backgroundColor:"var(--blue-color)",border:"none",borderRadius:"20px",transition:"all var(--transition)","@media only screen and (min-width: 768px)":{...t["@media only screen and (min-width: 768px)"],fontSize:"17px",width:"199px"}}),menuList:t=>({...t,padding:"0",maxHeight:`${o}`,minHeight:`${d}`,overflow:"scroll","::-webkit-scrollbar":{width:"8px"},"::-webkit-scrollbar-track":{background:"none"},"::-webkit-scrollbar-thumb":{background:"var(--buttoncancel-color)"},"::-webkit-scrollbar-corner":{background:"none"}}),option:(t,{data:a,isDisabled:p,isFocused:n,isSelected:l})=>({...t,padding:"8px 7px  8px 15px",backgroundColor:"transparent",color:r===""||l?"var(--white-color)":"var(--whitefourty-color)",cursor:p?"not-allowed":"default",transition:"color var(--transition)",":hover":{...t[":hover"],color:"var(--whitefifty-color)"},":active":{...t[":active"],borderRadius:"200px"}}),dropdownIndicator:(t,a)=>({...t,transform:a.isFocused?"rotate(180deg)":"rotate(0deg)",transition:"color var(--transition)",":hover":{...t[":hover"],color:"var(--white-color)"}}),clearIndicator:t=>({...t,display:"none"})}),et=({categoryList:o,ingredientList:d,onChangeFilter:r})=>{i.useState("");const[t,a]=i.useState(""),[p,n]=i.useState(""),l=c=>{r("keyword",c.target.value)},g=(c,f)=>{c?r("category",c.value):r("category","")},w=(c,f)=>{c?r("ingredient",c.value):r("ingredient","")};return e.jsx(Z,{children:e.jsxs(q,{children:[" ",e.jsx(J,{children:e.jsxs(Q,{children:[e.jsx(X,{type:"text",placeholder:"Enter the text",id:"inputKeyword",onChange:l}),e.jsx(Y,{children:e.jsx(tt,{})})]})}),e.jsx(C,{isClearable:!0,placeholder:"All categories",options:j(o),onChange:g,styles:S("405px","297px",t),name:"categories"}),e.jsx(C,{isClearable:!0,placeholder:"Ingredients",options:j(d),defaultValue:"Ingredients",onChange:w,styles:S("295px","276px",p),name:"ingredients"})]})})},ot=s.div`
    
      //mobile
      margin-bottom: 40px;

      //tablet
      @media screen and (min-width: 768px) {
        margin-bottom: 80px;
      }
`,rt=s.ul`
  
    //mobile
      display: flex;
      padding: 0;
      flex-wrap: wrap;
      gap: 28px;
      margin-bottom: 40px;
      

    //tablet
    @media screen and (min-width: 768px) {
      row-gap: 40px;
      column-gap: 20px;
      margin-bottom: 80px;
    }

    //desktop
    @media (min-width: 1280px) {
      row-gap: 80px;
    }
`;s.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
  margin-bottom: 160px;
  margin-right: auto;
  margin-left: auto;

  @media screen and (min-width: 768px) {
    margin-top: 175px;
    margin-bottom: 195px;
  }

  @media screen and (min-width: 12800px) {
    margin-top: 200px;
    margin-bottom: 140px;
  }
`;const nt=({drinkItems:o,isEmpty:d,isLoading:r,onClickPaginator:t,pageCount:a})=>{const p=n=>{t(n.selected)};return e.jsxs(e.Fragment,{children:[d?e.jsx(z,{}):e.jsx(ot,{children:e.jsx(rt,{children:o.map(({_id:n,drink:l,drinkThumb:g})=>e.jsx($,{_id:n,drink:l,drinkThumb:g},n))})}),r&&e.jsxs(O,{children:[" "," ",e.jsx(W,{color:"#f3f3f3",width:"60"})]}),e.jsx(H,{pageCount:a,handlePageClick:p})]})},it=({categoryList:o,ingredientList:d})=>{const[r,t]=i.useState(""),[a,p]=i.useState(""),[n,l]=i.useState(""),[g,w]=i.useState([]),[c,f]=i.useState(0),[y,u]=i.useState(1),[b]=i.useState(window.innerWidth>=1280?9:10),[L,v]=i.useState(!1),[E,k]=i.useState(!1);i.useEffect(()=>{(async(m="",P="",R="",_=1,F=10)=>{try{k(!0);const{drinks:h,totalResults:T}=await B(m,P,R,_,F);f(T),h.length===0?v(!0):v(!1),w(h)}catch(h){if(h.code!=="ERR_CANCELED")throw console.log(h),Error("Oops! Something went wrong! Try reloading the page!")}finally{k(!1)}})(r,a,n,y,b)},[r,a,n,y]);const I=(x,m="")=>{switch(x){case"keyword":t(m),u(1);break;case"category":p(m),u(1);break;case"ingredient":l(m),u(1);break}},D=x=>{x<Math.ceil(c/b)&&u(x+1)};return e.jsxs(e.Fragment,{children:[e.jsx(et,{categoryList:o,ingredientList:d,onChangeFilter:I}),e.jsx(nt,{keyword:r,category:a,ingredient:n,drinkItems:g,isEmpty:L,isLoading:E,onClickPaginator:D,pageCount:Math.ceil(c/b)})]})},mt=()=>{const[o,d]=i.useState([]),[r,t]=i.useState([]);return i.useEffect(()=>{(async()=>{try{const n=await M();d(n)}catch(n){if(n.code!=="ERR_CANCELED")throw console.log(n),Error("Oops! Something went wrong! Try reloading the page!")}})(),(async()=>{try{const l=(await U()).map(g=>g.title);t(l)}catch(n){if(n.code!=="ERR_CANCELED")throw console.log(n),Error("Oops! Something went wrong! Try reloading the page!")}})()},[]),e.jsxs(K,{children:[e.jsx(A,{title:"Drinks"}),e.jsx(it,{categoryList:o,ingredientList:r})]})};export{mt as default};
