import{n as l,r as a,c as o,t as f,j as e,E as z,a as M,T as O}from"./index-b3f88f3f.js";import{g as U,a as A}from"./operationsFilters-5d870a72.js";import{P as B}from"./PageTitle-9729ca8f.js";import{S as j}from"./react-select.esm-25a75d90.js";import{P as H}from"./Paginator-4caccb9c.js";import{C as K}from"./CardCoctail-2990dea3.js";import{a as V}from"./operationsDrinks-f5849611.js";const G=l.div`
  width: 100%; 
  padding-top: 80px;
  padding-bottom: 80px; 

  //tablet 
  @media screen and (min-width: 768px) {
    padding-top: 72px;
    padding-bottom: 140px;
  }
`;l.div`
    
      //mobile
      margin-bottom: 40px;

      //tablet
      @media screen and (min-width: 768px) {
        margin-bottom: 80px;
      }
`;l.ul`
  
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
`;l.div`
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
`;const N=r=>r.split(" ").map(s=>s[0].toUpperCase()+s.slice(1)).join(" "),Z=(r="")=>({label:N(r),value:r}),$=(r=[])=>r.length===0?[]:r.map(n=>Z(n)),q=r=>a.createElement("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...r},a.createElement("path",{d:"M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z",strokeLinecap:"round",strokeLinejoin:"round"}),a.createElement("path",{d:"M17.5 17.5L13.875 13.875",strokeLinecap:"round",strokeLinejoin:"round"})),J=l.div`

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
  
`,Q=l.form`

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
  
`,X=l.label`

  

`,Y=l.span`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
`,tt=l.input`

// mobile
  font-family: Manrope;
  font-weight: 400;
  font-size: 14px;
  font-height : 1.56;
  width: 100%;
  padding: 14px 24px 14px 24px;
  border-radius: 20em;
  background-color: transparent;
  border: 1px solid ${o.colorWhiteTwenty};
  color: ${o.colorWhite};
  transition: border-color ${f.trs_600}, background-color ${f.trs_600};

  &::placeholder{
    color: ${o.colorWhite};
  }

  &:hover{
    border-color:  ${o.colorWhiteFifty};
    //color:  ${o.colorWhite};
  };

  &:focus{
    border-color:  ${o.colorWhiteFifty};
    //color:  ${o.colorWhite};
  };

  // tablet
    @media (min-width: 768px) {
      font-size: 17px;
      width: 264px;
    }
`,et=l.span`
    position: absolute;
    //transform: translate(30, 0);
    right: 24px;
    top: 17px;
    padding:0;
    border: 0;
    background-color: transparent;
    //cursor: pointer;
    outline: none;
`,ot=l(q)`
    width: 20px;
    height: 20px;
    stroke: ${o.colorWhite};

    &:hover{
      stroke-width: 1.8;
    };
  
    &:focus{
      stroke-width: 1.8;
    };

`,v=(r,d,n)=>({control:(t,s)=>({...t,padding:"10px 16px 10px 22px",fontFamily:"Manrope",fontWeight:"400",fontSize:"14px",fontHeight:"1.56",letterSpacing:"-0.04em",width:"100%",height:"56px",border:"none",borderRadius:"200px",backgroundColor:`${o.colorBlue}`,transition:"borderColor 650ms cubic-bezier(0.4, 0, 0.2, 1)",":hover":{border:`1px solid ${o.colorWhiteTwenty}`},":focus":{...t[":focus"],border:`1px solid ${o.colorWhiteTwenty}`},"@media only screen and (min-width: 768px)":{...t["@media only screen and (min-width: 768px)"],fontSize:"17px",width:"199px"}}),valueContainer:t=>({...t,padding:"0"}),input:t=>({...t,padding:"0",marging:"0",color:`${o.colorWhite}`,transition:`color ${f.trs_250}`}),singleValue:(t,s)=>({...t,color:s.isFocused?`${o.colorWhiteFifty}`:`${o.colorWhite}`,transition:`opacity ${f.trs_600}`}),placeholder:t=>({...t,color:`${o.colorWhite}`}),indicatorSeparator:t=>({display:"none"}),menu:t=>({...t,padding:"14px 8px 14px 8px",fontWeight:"400",fontSize:"14px",fontHeight:"1.56",backgroundColor:`${o.colorBlue}`,border:"none",borderRadius:"20px",transition:"all 600ms ease-in-out","@media only screen and (min-width: 768px)":{...t["@media only screen and (min-width: 768px)"],fontSize:"17px",width:"199px"}}),menuList:t=>({...t,padding:"0",maxHeight:`${r}`,minHeight:`${d}`,overflow:"scroll","::-webkit-scrollbar":{width:"8px"},"::-webkit-scrollbar-track":{background:"none"},"::-webkit-scrollbar-thumb":{background:`${o.buttonCancel}`},"::-webkit-scrollbar-corner":{background:"none"}}),option:(t,{data:s,isDisabled:g,isFocused:i,isSelected:p})=>({...t,padding:"8px 7px  8px 15px",backgroundColor:"transparent",color:n===""?`${o.colorWhite}`:p?`${o.colorWhite}`:`${o.colorWhiteFourty}`,cursor:g?"not-allowed":"default",transition:`color ${f.trs_250}`,":hover":{...t[":hover"],color:n===""?`${o.colorWhiteFifty}`:`${o.colorWhiteFifty}`},":active":{...t[":active"],borderRadius:"200px"}}),dropdownIndicator:(t,s)=>({...t,transform:s.isFocused?"rotate(180deg)":"rotate(0deg)",":hover":{...t[":hover"],color:`${o.colorWhite}`}}),clearIndicator:t=>({...t,display:"none"})}),rt=({categoryList:r,ingredientList:d,onChangeFilter:n})=>{a.useState("");const[t,s]=a.useState(""),[g,i]=a.useState(""),p=c=>{console.log("e.target.value",c.target.value),n("keyword",c.target.value)},m=(c,b)=>{c?n("category",c.value):n("category","")},w=(c,b)=>{c?n("ingredient",c.value):n("ingredient","")};return e.jsx(J,{children:e.jsxs(Q,{children:[" ",e.jsx(X,{children:e.jsxs(Y,{children:[e.jsx(tt,{type:"text",placeholder:"Enter the text",id:"inputKeyword",onChange:p}),e.jsx(et,{children:e.jsx(ot,{})})]})}),e.jsx(j,{isClearable:!0,placeholder:"All categories",options:$(r),onChange:m,styles:v("405px","297px",t),name:"categories"}),e.jsx(j,{isClearable:!0,placeholder:"Ingredients",options:$(d),defaultValue:"Ingredients",onChange:w,styles:v("295px","276px",g),name:"ingredients"})]})})},nt=l.div`
    
      //mobile
      margin-bottom: 40px;

      //tablet
      @media screen and (min-width: 768px) {
        margin-bottom: 80px;
      }
`,it=l.ul`
  
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
`;l.div`
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
`;const at=({drinkItems:r,isEmpty:d,isLoading:n,onClickPaginator:t,pageCount:s})=>{const g=i=>{t(i.selected)};return e.jsxs(e.Fragment,{children:[d?e.jsx(z,{}):e.jsx(nt,{children:e.jsx(it,{children:r.map(({_id:i,drink:p,drinkThumb:m})=>e.jsx(K,{_id:i,drink:p,drinkThumb:m},i))})}),n&&e.jsxs(M,{children:[" "," ",e.jsx(O,{color:"#f3f3f3",width:"60"})]}),e.jsx(H,{pageCount:s,handlePageClick:g})]})},st=({categoryList:r,ingredientList:d})=>{const[n,t]=a.useState(""),[s,g]=a.useState(""),[i,p]=a.useState(""),[m,w]=a.useState([]),[c,b]=a.useState(0),[k,L]=a.useState(1),[y]=a.useState(window.innerWidth>=1280?9:10),[E,C]=a.useState(!1),[W,S]=a.useState(!1);a.useEffect(()=>{(async(h="",F="",D="",P=1,R=10)=>{try{S(!0);const{drinks:u,totalResults:T}=await V(h,F,D,P,R);b(T),u.length===0?C(!0):C(!1),w(u)}catch(u){if(u.code!=="ERR_CANCELED")throw console.log(u),Error("Oops! Something went wrong! Try reloading the page!")}finally{S(!1)}})(n,s,i,k,y)},[n,s,i,k]);const I=(x,h="")=>{switch(console.log("label=",x),console.log("value=",h),x){case"keyword":t(h);break;case"category":g(h);break;case"ingredient":p(h);break}},_=x=>{console.log(x),x<Math.ceil(c/y)&&L(x+1)};return e.jsxs(e.Fragment,{children:[e.jsx(rt,{categoryList:r,ingredientList:d,onChangeFilter:I}),e.jsx(at,{keyword:n,category:s,ingredient:i,drinkItems:m,isEmpty:E,isLoading:W,onClickPaginator:_,pageCount:Math.ceil(c/y)})]})},ht=()=>{const[r,d]=a.useState([]),[n,t]=a.useState([]);return a.useEffect(()=>{(async()=>{try{const i=await U();d(i)}catch(i){if(i.code!=="ERR_CANCELED")throw console.log(i),Error("Oops! Something went wrong! Try reloading the page!")}})(),(async()=>{try{const p=(await A()).map(m=>m.title);t(p)}catch(i){if(i.code!=="ERR_CANCELED")throw console.log(i),Error("Oops! Something went wrong! Try reloading the page!")}})()},[]),e.jsxs(G,{children:[e.jsx(B,{title:"Drinks"}),e.jsx(st,{categoryList:r,ingredientList:n})]})};export{ht as default};
