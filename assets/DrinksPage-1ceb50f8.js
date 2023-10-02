import{r,n as l,c as e,t as u,j as o,E as I,a as F,T as _}from"./index-5ff4eabe.js";import{g as D,a as R}from"./operationsFilters-9e30a048.js";import{S as v}from"./react-select.esm-5f748f67.js";import{C as T}from"./CardCoctail-075b7bcf.js";import{a as P}from"./operationsDrinks-c9374ad6.js";import{P as z}from"./PageTitle-6cc4ac3a.js";import{P as M}from"./Paginator-291b0343.js";const O=n=>n.split(" ").map(i=>i[0].toUpperCase()+i.slice(1)).join(" "),U=(n="")=>({label:O(n),value:n}),L=(n=[])=>n.length===0?[]:n.map(d=>U(d)),A=n=>r.createElement("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n},r.createElement("path",{d:"M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z",strokeLinecap:"round",strokeLinejoin:"round"}),r.createElement("path",{d:"M17.5 17.5L13.875 13.875",strokeLinecap:"round",strokeLinejoin:"round"})),B=l.div`

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
  transition: border-color ${u.trs_600}, background-color ${u.trs_600};

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

`,E=(n,g,d)=>({control:(t,i)=>({...t,padding:"10px 16px 10px 22px",fontFamily:"Manrope",fontWeight:"400",fontSize:"14px",fontHeight:"1.56",letterSpacing:"-0.04em",width:"100%",height:"56px",border:"none",borderRadius:"200px",backgroundColor:`${e.colorBlue}`,transition:"borderColor 650ms cubic-bezier(0.4, 0, 0.2, 1)",":hover":{border:`1px solid ${e.colorWhiteTwenty}`},":focus":{...t[":focus"],border:`1px solid ${e.colorWhiteTwenty}`},"@media only screen and (min-width: 768px)":{...t["@media only screen and (min-width: 768px)"],fontSize:"17px",width:"199px"}}),valueContainer:t=>({...t,padding:"0"}),input:t=>({...t,padding:"0",marging:"0",color:`${e.colorWhite}`,transition:`color ${u.trs_250}`}),singleValue:(t,i)=>({...t,color:i.isFocused?`${e.colorWhiteFifty}`:`${e.colorWhite}`,transition:`opacity ${u.trs_600}`}),placeholder:t=>({...t,color:`${e.colorWhite}`}),indicatorSeparator:t=>({display:"none"}),menu:t=>({...t,padding:"14px 8px 14px 8px",fontWeight:"400",fontSize:"14px",fontHeight:"1.56",backgroundColor:`${e.colorBlue}`,border:"none",borderRadius:"20px",transition:"all 600ms ease-in-out","@media only screen and (min-width: 768px)":{...t["@media only screen and (min-width: 768px)"],fontSize:"17px",width:"199px"}}),menuList:t=>({...t,padding:"0",maxHeight:`${n}`,minHeight:`${g}`,overflow:"scroll","::-webkit-scrollbar":{width:"8px"},"::-webkit-scrollbar-track":{background:"none"},"::-webkit-scrollbar-thumb":{background:`${e.buttonCancel}`},"::-webkit-scrollbar-corner":{background:"none"}}),option:(t,{data:i,isDisabled:c,isFocused:m,isSelected:p})=>({...t,padding:"8px 7px  8px 15px",backgroundColor:"transparent",color:d===""?`${e.colorWhite}`:p?`${e.colorWhite}`:`${e.colorWhiteFourty}`,cursor:c?"not-allowed":"default",transition:`color ${u.trs_250}`,":hover":{...t[":hover"],color:d===""?`${e.colorWhiteFifty}`:`${e.colorWhiteFifty}`},":active":{...t[":active"],borderRadius:"200px"}}),dropdownIndicator:(t,i)=>({...t,transform:i.isFocused?"rotate(180deg)":"rotate(0deg)",":hover":{...t[":hover"],color:`${e.colorWhite}`}}),clearIndicator:t=>({...t,display:"none"})}),G=({categoryList:n,ingredientList:g,onChangeFilter:d})=>{const[t,i]=r.useState([]),[c,m]=r.useState(""),[p,f]=r.useState("");r.useEffect(()=>{(()=>{d(t,c,p)})()},[t,c,p]);const $=a=>{i(a.target.value)},w=a=>{a.preventDefault(),i(""),d(t,c,p)},k=(a,y)=>{m(a?a.value:"")},b=(a,y)=>{f(a?a.value:"")};return o.jsx(B,{children:o.jsxs(H,{onSubmit:w,children:[o.jsx(N,{children:o.jsxs(K,{children:[o.jsx(V,{type:"text",placeholder:"Enter the text",id:"inputKeyword",value:t,onChange:$}),o.jsx(Z,{children:o.jsx(q,{})})]})}),o.jsx(v,{isClearable:!0,placeholder:"All categories",options:L(n),onChange:k,styles:E("405px","297px",c),name:"categories"}),o.jsx(v,{isClearable:!0,placeholder:"Ingredients",options:L(g),defaultValue:"Ingredients",onChange:b,styles:E("295px","276px",p),name:"ingredients"})]})})},J=l.div`
  width: 100%; 
  padding-top: 80px;
  padding-bottom: 80px; 

  //tablet 
  @media screen and (min-width: 768px) {
    padding-top: 72px;
    padding-bottom: 140px;
  }
`,Q=l.div`
    
      //mobile
      margin-bottom: 40px;

      //tablet
      @media screen and (min-width: 768px) {
        margin-bottom: 80px;
      }
`,X=l.ul`
  
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
`;const st=()=>{const[n,g]=r.useState([]),[d,t]=r.useState([]),[i,c]=r.useState([]),[m,p]=r.useState([]),[f,$]=r.useState(1),[w]=r.useState(window.innerWidth>1279?9:10),[k,b]=r.useState(!1),[a,y]=r.useState(!1);r.useEffect(()=>{(async()=>{try{const s=await D();g(s)}catch(s){if(s.code!=="ERR_CANCELED")throw console.log(s),Error("Oops! Something went wrong! Try reloading the page!")}})(),(async()=>{try{const h=(await R()).map(S=>S.title);t(h)}catch(s){if(s.code!=="ERR_CANCELED")throw console.log(s),Error("Oops! Something went wrong! Try reloading the page!")}})(),j("","","")},[]);const j=async(x="",C="",s="")=>{try{y(!0);const{drinks:h,totalResults:S}=await P(x,C,s,f,w);p(S),h.length===0?b(!0):b(!1),c(Y=>h)}catch(h){if(h.code!=="ERR_CANCELED")throw console.log(h),Error("Oops! Something went wrong! Try reloading the page!")}finally{y(!1)}},W=x=>{};return o.jsxs(J,{children:[o.jsx(z,{title:"Drinks"}),o.jsx(G,{categoryList:n,ingredientList:d,onChangeFilter:j}),k?o.jsx(I,{}):o.jsx(Q,{children:o.jsx(X,{children:i.map(({_id:x,drink:C,drinkThumb:s})=>o.jsx(T,{_id:x,drink:C,drinkThumb:s},x))})}),a&&o.jsxs(F,{children:[" ",o.jsx(_,{color:"#f3f3f3",width:"60"})]}),o.jsx(M,{handlePageClick:W,pageCount:Math.ceil(m/w)})]})};export{st as default};
