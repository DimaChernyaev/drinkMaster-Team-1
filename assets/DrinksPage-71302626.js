import{r,n as l,c as e,t as w,j as o,E as F,a as I,T as _}from"./index-1c3dd7f2.js";import{g as D,a as R}from"./operationsFilters-d9592577.js";import{S as v}from"./react-select.esm-1427ca66.js";import{C as T}from"./CardCoctail-f1c8ffc7.js";import{a as O}from"./operationsDrinks-1f01e623.js";import{P}from"./PageTitle-2e0f5221.js";import{P as z}from"./Paginator-a35b6652.js";const M=n=>n.split(" ").map(i=>i[0].toUpperCase()+i.slice(1)).join(" "),U=(n="")=>({label:M(n),value:n}),L=(n=[])=>n.length===0?[]:n.map(d=>U(d)),A=n=>r.createElement("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n},r.createElement("path",{d:"M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z",strokeLinecap:"round",strokeLinejoin:"round"}),r.createElement("path",{d:"M17.5 17.5L13.875 13.875",strokeLinecap:"round",strokeLinejoin:"round"})),B=l.div`

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
  
`,H=l.form`

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
  
`,N=l.label`

  

`,K=l.span`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
`,V=l.input`

// mobile
  font-family: Manrope;
  font-weight: 400;
  font-size: 14px;
  font-height : 1.56;
  width: 100%;
  padding: 14px 24px 14px 24px;
  border-radius: 20em;
  background-color: transparent;
  border: 1px solid ${e.colorWhiteTwenty};
  color: ${e.colorWhite};
  transition: border-color ${w.trs_600}, background-color ${w.trs_600};

  &::placeholder{
    color: ${e.colorWhite};
  }

  &:hover{
    border-color:  ${e.colorWhiteFifty};
    //color:  ${e.colorWhite};
  };

  &:focus{
    border-color:  ${e.colorWhiteFifty};
    //color:  ${e.colorWhite};
  };

  // tablet
    @media (min-width: 768px) {
      font-size: 17px;
      width: 264px;
    }
`,Z=l.span`
    position: absolute;
    //transform: translate(30, 0);
    right: 24px;
    top: 17px;
    padding:0;
    border: 0;
    background-color: transparent;
    //cursor: pointer;
    outline: none;
`,q=l(A)`
    width: 20px;
    height: 20px;
    stroke: ${e.colorWhite};

    &:hover{
      stroke-width: 1.8;
    };
  
    &:focus{
      stroke-width: 1.8;
    };

`,E=(n,h,d)=>({control:(t,i)=>({...t,padding:"10px 16px 10px 22px",fontFamily:"Manrope",fontWeight:"400",fontSize:"14px",fontHeight:"1.56",letterSpacing:"-0.04em",width:"100%",height:"56px",border:"none",borderRadius:"200px",backgroundColor:`${e.colorBlue}`,transition:"borderColor 650ms cubic-bezier(0.4, 0, 0.2, 1)",":hover":{border:`1px solid ${e.colorWhiteTwenty}`},":focus":{...t[":focus"],border:`1px solid ${e.colorWhiteTwenty}`},"@media only screen and (min-width: 768px)":{...t["@media only screen and (min-width: 768px)"],fontSize:"17px",width:"199px"}}),valueContainer:t=>({...t,padding:"0"}),input:t=>({...t,padding:"0",marging:"0",color:`${e.colorWhite}`,transition:`color ${w.trs_250}`}),singleValue:(t,i)=>({...t,color:i.isFocused?`${e.colorWhiteFifty}`:`${e.colorWhite}`,transition:`opacity ${w.trs_600}`}),placeholder:t=>({...t,color:`${e.colorWhite}`}),indicatorSeparator:t=>({display:"none"}),menu:t=>({...t,padding:"14px 8px 14px 8px",fontWeight:"400",fontSize:"14px",fontHeight:"1.56",backgroundColor:`${e.colorBlue}`,border:"none",borderRadius:"20px",transition:"all 600ms ease-in-out","@media only screen and (min-width: 768px)":{...t["@media only screen and (min-width: 768px)"],fontSize:"17px",width:"199px"}}),menuList:t=>({...t,padding:"0",maxHeight:`${n}`,minHeight:`${h}`,overflow:"scroll","::-webkit-scrollbar":{width:"8px"},"::-webkit-scrollbar-track":{background:"none"},"::-webkit-scrollbar-thumb":{background:`${e.buttonCancel}`},"::-webkit-scrollbar-corner":{background:"none"}}),option:(t,{data:i,isDisabled:c,isFocused:u,isSelected:p})=>({...t,padding:"8px 7px  8px 15px",backgroundColor:"transparent",color:d===""?`${e.colorWhite}`:p?`${e.colorWhite}`:`${e.colorWhiteFourty}`,cursor:c?"not-allowed":"default",transition:`color ${w.trs_250}`,":hover":{...t[":hover"],color:d===""?`${e.colorWhiteFifty}`:`${e.colorWhiteFifty}`},":active":{...t[":active"],color:`${e.colorWhiteFifty}`,borderRadius:"200px"}}),dropdownIndicator:(t,i)=>({...t,transform:i.isFocused?"rotate(180deg)":"rotate(0deg)",":hover":{...t[":hover"],color:`${e.colorWhite}`}}),clearIndicator:t=>({...t,display:"none"})}),G=({categoryList:n,ingredientList:h,onChangeFilter:d})=>{const[t,i]=r.useState([]),[c,u]=r.useState(""),[p,f]=r.useState("");r.useEffect(()=>{(()=>{d(t,c,p)})()},[t,c,p]);const $=a=>{i(a.target.value)},b=a=>{a.preventDefault(),i(""),d(t,c,p)},k=(a,C)=>{u(a?a.value:"")},y=(a,C)=>{f(a?a.value:"")};return o.jsx(B,{children:o.jsxs(H,{onSubmit:b,children:[o.jsx(N,{children:o.jsxs(K,{children:[o.jsx(V,{type:"text",placeholder:"Enter the text",id:"inputKeyword",value:t,onChange:$}),o.jsx(Z,{children:o.jsx(q,{})})]})}),o.jsx(v,{isClearable:!0,placeholder:"All categories",options:L(n),onChange:k,styles:E("405px","297px",c),name:"categories"}),o.jsx(v,{isClearable:!0,placeholder:"Ingredients",options:L(h),defaultValue:"Ingredients",onChange:y,styles:E("295px","276px",p),name:"ingredients"})]})})};l.div`
  position: relative;
  width: 100%; 
  padding-top: 72px;
  padding-bottom: 80px;
  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;
  margin-right: auto;
  
  @media screen and (min-width: 768px) {
    padding-top: 80px;
    padding-left: 32px;
    padding-right: 32px;
 }

  @media screen and (min-width: 1280px) {
      padding-left: 80px;
      padding-right: 80px;
  }
 
`;const J=l.div`
    
      //mobile
      margin-bottom: 40px;

      //tablet
      @media screen and (min-width: 768px) {
        margin-bottom: 80px;
      }
`,Q=l.ul`
  
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
`;const at=()=>{const[n,h]=r.useState([]),[d,t]=r.useState([]),[i,c]=r.useState([]),[u,p]=r.useState([]),[f,$]=r.useState(1),[b]=r.useState(window.innerWidth>1279?9:10),[k,y]=r.useState(!1),[a,C]=r.useState(!1);r.useEffect(()=>{(async()=>{try{const s=await D();h(s)}catch(s){if(s.code!=="ERR_CANCELED")throw console.log(s),Error("Oops! Something went wrong! Try reloading the page!")}})(),(async()=>{try{const m=(await R()).map(S=>S.title);t(m)}catch(s){if(s.code!=="ERR_CANCELED")throw console.log(s),Error("Oops! Something went wrong! Try reloading the page!")}})(),j("","","")},[]);const j=async(g="",x="",s="")=>{try{C(!0);const{drinks:m,total:S}=await O(g,x,s,f,b);p(S),m.length===0?y(!0):y(!1),c(X=>m)}catch(m){if(m.code!=="ERR_CANCELED")throw console.log(m),Error("Oops! Something went wrong! Try reloading the page!")}finally{C(!1)}},W=g=>{console.log("event=",g);const x=g.selected*b%u;console.log("totalDrinks=",u),console.log("newOffset=",x),setItemOffset(x)};return o.jsxs(o.Fragment,{children:[o.jsx(P,{title:"Drinks"}),o.jsx(G,{categoryList:n,ingredientList:d,onChangeFilter:j}),k?o.jsx(F,{}):o.jsx(J,{children:o.jsx(Q,{children:i.map(({_id:g,drink:x,drinkThumb:s})=>o.jsx(T,{_id:g,drink:x,drinkThumb:s},g))})}),a&&o.jsxs(I,{children:[" ",o.jsx(_,{color:"#f3f3f3",width:"60"})]}),o.jsx(z,{handlePageClick:W,pageCount:f})]})};export{at as default};
