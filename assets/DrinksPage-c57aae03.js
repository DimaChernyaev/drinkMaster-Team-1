import{n as s,r as o,j as e,E as O}from"./index-6fa5008b.js";import{g as M,a as T}from"./operationsFilters-ec8c26c4.js";import{P as U}from"./PageTitle-cdd5383b.js";import{S}from"./react-select.esm-0c8f6e2b.js";import{P as A}from"./Paginator-d1745d14.js";import{C as H}from"./CardCoctail-251ad69f.js";import{a as W}from"./operationsDrinks-40e7c5d2.js";import{L as $}from"./LoaderDots-4966b1d0.js";const B=s.div`
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
`;const K=r=>r.split(" ").map(i=>i[0].toUpperCase()+i.slice(1)).join(" "),N=(r="")=>({label:K(r),value:r}),j=(r=[])=>r.length===0?[]:r.map(n=>N(n)),V=r=>o.createElement("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...r},o.createElement("path",{d:"M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z",strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement("path",{d:"M17.5 17.5L13.875 13.875",strokeLinecap:"round",strokeLinejoin:"round"})),G=s.div`
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
`,Z=s.form`
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
`,q=s.label``,J=s.span`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
`,Q=s.input`
  // mobile
  font-weight: 400;
  font-size: 14px;
  font-height: 1.56;
  width: 100%;
  padding: 14px 24px 14px 24px;
  border-radius: 20em;
  background-color: transparent;
  border: 1px solid var(--filter-border);
  color: var(--text-color);
  transition:
    border-color var(--transition),
    background-color var(--transition);

  &::placeholder {
    color: var(--text-color);
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
`,X=s.span`
  position: absolute;
  //transform: translate(30, 0);
  right: 24px;
  top: 17px;
  padding: 0;
  border: 0;
  background-color: transparent;
  //cursor: pointer;
  outline: none;
`,Y=s(V)`
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
`,L=(r,d,n)=>({control:(t,i)=>({...t,padding:"10px 16px 10px 22px",fontWeight:"400",fontSize:"14px",fontHeight:"1.56",letterSpacing:"-0.04em",width:"100%",height:"56px",border:"none",borderRadius:"200px",backgroundColor:"var(--blue-color)",transition:"border var(--transition)",":hover":{border:"1px solid var(--whitetwenty-color)"},":focus":{...t[":focus"],border:"1px solid var(--whitetwenty-color)"},"@media only screen and (min-width: 768px)":{...t["@media only screen and (min-width: 768px)"],fontSize:"17px",width:"199px"}}),valueContainer:t=>({...t,padding:"0"}),input:t=>({...t,padding:"0",marging:"0",color:"var(--white-color)",transition:"color var(--transition)"}),singleValue:(t,i)=>({...t,color:i.isFocused?"var(--whitefifty-color)":"var(--white-color)",transition:"opacity var(--transition)"}),placeholder:t=>({...t,color:"var(--white-color)"}),indicatorSeparator:t=>({display:"none"}),menu:t=>({...t,padding:"14px 8px 14px 8px",fontWeight:"400",fontSize:"14px",fontHeight:"1.56",backgroundColor:"var(--filter-background)",border:"none",borderRadius:"20px",transition:"all var(--transition)","@media only screen and (min-width: 768px)":{...t["@media only screen and (min-width: 768px)"],fontSize:"17px",width:"199px"}}),menuList:t=>({...t,padding:"0",maxHeight:`${r}`,minHeight:`${d}`,overflow:"scroll","::-webkit-scrollbar":{width:"8px"},"::-webkit-scrollbar-track":{background:"none"},"::-webkit-scrollbar-thumb":{background:"var(--buttoncancel-color)"},"::-webkit-scrollbar-corner":{background:"none"}}),option:(t,{data:i,isDisabled:c,isFocused:a,isSelected:p})=>({...t,padding:"8px 7px  8px 15px",backgroundColor:"transparent",color:n===""||p?"color: var(--text-color)":"var(--whitefourty-color)",cursor:c?"not-allowed":"default",transition:"color var(--transition)",":hover":{...t[":hover"],color:"var(--whitefifty-color)"},":active":{...t[":active"],borderRadius:"200px"}}),dropdownIndicator:(t,i)=>({...t,transform:i.isFocused?"rotate(180deg)":"rotate(0deg)",transition:"color var(--transition)",":hover":{...t[":hover"],color:"var(--white-color)"}}),clearIndicator:t=>({...t,display:"none"})}),tt=({categoryList:r,ingredientList:d,onChangeFilter:n})=>{o.useState("");const[t,i]=o.useState(""),[c,a]=o.useState(""),p=l=>{n("keyword",l.target.value)},g=(l,f)=>{l?n("category",l.value):n("category","")},w=(l,f)=>{l?n("ingredient",l.value):n("ingredient","")};return e.jsx(G,{children:e.jsxs(Z,{children:[" ",e.jsx(q,{children:e.jsxs(J,{children:[e.jsx(Q,{type:"text",placeholder:"Enter the text",id:"inputKeyword",onChange:p}),e.jsx(X,{children:e.jsx(Y,{})})]})}),e.jsx(S,{isClearable:!0,placeholder:"All categories",options:j(r),onChange:g,styles:L("405px","297px",t),name:"categories"}),e.jsx(S,{isClearable:!0,placeholder:"Ingredients",options:j(d),defaultValue:"Ingredients",onChange:w,styles:L("295px","276px",c),name:"ingredients"})]})})},et=s.div`
    
      //mobile
      margin-bottom: 40px;

      //tablet
      @media screen and (min-width: 768px) {
        margin-bottom: 80px;
      }
`,ot=s.ul`
  
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
`;const rt=({drinkItems:r,isEmpty:d,onClickPaginator:n,pageCount:t})=>{const i=c=>{n(c.selected)};return e.jsxs(e.Fragment,{children:[d?e.jsx(O,{}):e.jsx(et,{children:e.jsx(ot,{children:r.map(({_id:c,drink:a,drinkThumb:p})=>e.jsx(H,{_id:c,drink:a,drinkThumb:p},c))})}),e.jsx(A,{pageCount:t,handlePageClick:i})]})},nt=({categoryList:r,ingredientList:d})=>{const[n,t]=o.useState(""),[i,c]=o.useState(""),[a,p]=o.useState(""),[g,w]=o.useState([]),[l,f]=o.useState(0),[y,u]=o.useState(1),[b]=o.useState(window.innerWidth>=1280?9:10),[E,v]=o.useState(!1),[k,C]=o.useState(!1);o.useEffect(()=>{(async(m="",P="",R="",_=1,F=10)=>{C(!0);try{const{drinks:h,totalResults:z}=await W(m,P,R,_,F);f(z),h.length===0?v(!0):v(!1),w(h)}catch(h){if(h.code!=="ERR_CANCELED")throw console.log(h),Error("Oops! Something went wrong! Try reloading the page!")}finally{C(!1)}})(n,i,a,y,b)},[n,i,a,y]);const I=(x,m="")=>{switch(x){case"keyword":t(m),u(1);break;case"category":c(m),u(1);break;case"ingredient":p(m),u(1);break}},D=x=>{x<Math.ceil(l/b)&&u(x+1)};return e.jsxs(e.Fragment,{children:[e.jsx(tt,{categoryList:r,ingredientList:d,onChangeFilter:I}),k?e.jsx($,{}):e.jsx(rt,{keyword:n,category:i,ingredient:a,drinkItems:g,isEmpty:E,isLoading:k,onClickPaginator:D,pageCount:Math.ceil(l/b)})]})},xt=()=>{const[r,d]=o.useState([]),[n,t]=o.useState([]);return o.useState(!1),o.useEffect(()=>{(async()=>{try{const a=await M();d(a)}catch(a){if(a.code!=="ERR_CANCELED")throw console.log(a),Error("Oops! Something went wrong! Try reloading the page!")}})(),(async()=>{try{const p=(await T()).map(g=>g.title);t(p)}catch(a){if(a.code!=="ERR_CANCELED")throw console.log(a),Error("Oops! Something went wrong! Try reloading the page!")}})()},[]),e.jsxs(B,{children:[e.jsx(U,{title:"Drinks"}),e.jsx(nt,{categoryList:r,ingredientList:n})]})};export{xt as default};
