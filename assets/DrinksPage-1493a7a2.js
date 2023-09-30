import{r as n,n as l,c as o,j as r}from"./index-afa0e541.js";import{g as v,a as $}from"./operationsFilters-5fc51e95.js";import{S}from"./react-select.esm-ab1b672e.js";import{C as E}from"./CardCoctail-a89244bb.js";import{C as W,N as F}from"./NotFound-96365374.js";import{a as I}from"./operationsDrinks-4724f6f9.js";import{P as D}from"./PageTitle-cf50b889.js";const R=(i="")=>({label:i,value:i.toLowerCase().replace(/\W/g,"")}),j=(i=[])=>i.length===0?[]:i.map(t=>R(t)),P=i=>n.createElement("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...i},n.createElement("path",{d:"M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z",strokeLinecap:"round",strokeLinejoin:"round"}),n.createElement("path",{d:"M17.5 17.5L13.875 13.875",strokeLinecap:"round",strokeLinejoin:"round"})),O=l.div`

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
  
`,_=l.form`

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
  
`,B=l.label`

  

`,M=l.span`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
`,N=l.input`

// mobile
  font-family: Manrope;
  font-weight: 400;
  font-size: 17px;
  font-height : 1.56;
  width: 100%;
  padding: 14px 24px 14px 24px;
  border-radius: 20em;
  background-color: transparent;
  border: 1px solid ${o.colorWhiteTwenty};
  color: ${o.colorWhite};

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
      width: 264px;
    }
`,T=l.button`
    position: absolute;
    //transform: translate(30, 0);
    right: 24px;
    top: 17px;
    padding:0;
    border: 0;
    background-color: transparent;
    cursor: pointer;
    outline: none;
`,A=l(P)`
    width: 20px;
    height: 20px;
    stroke: ${o.colorWhite};

    &:hover{
      stroke-width: 1.8;
    };
  
    &:focus{
      stroke-width: 1.8;
    };

`,L=(i,p)=>({control:(t,a)=>({...t,padding:"10px 16px 10px 22px",fontFamily:"Manrope",fontWeight:"400",fontSize:"17px",fontHeight:"1.56",letterSpacing:"-0.04em",width:"199px",height:"56px",border:"none",borderRadius:"200px",backgroundColor:`${o.colorBlue}`}),valueContainer:t=>({...t,padding:"0"}),input:t=>({...t,padding:"0",marging:"0",color:`${o.colorWhite}`}),singleValue:(t,a)=>({...t,color:a.isFocused?`${o.colorWhiteFifty}`:`${o.colorWhite}`}),placeholder:t=>({...t,color:`${o.colorWhite}`}),indicatorSeparator:t=>({display:"none"}),menu:t=>({...t,padding:"14px 8px 14px 8px",fontWeight:"400",fontSize:"17px",fontHeight:"1.56",backgroundColor:`${o.colorBlue}`,border:"none",borderRadius:"20px"}),menuList:t=>({...t,padding:"0",maxHeight:`${i}`,minHeight:`${p}`,overflow:"scroll","::-webkit-scrollbar":{width:"8px"},"::-webkit-scrollbar-track":{background:"none"},"::-webkit-scrollbar-thumb":{background:`${o.buttonCancel}`},"::-webkit-scrollbar-corner":{background:"none"}}),option:(t,{data:a,isDisabled:c,isFocused:g,isSelected:h})=>({...t,padding:"8px 7px  8px 15px",backgroundColor:"transparent",color:h?`${o.colorWhite}`:`${o.colorWhiteFourty}`,cursor:c?"not-allowed":"default",":hover":{...t[":hover"],color:`${o.colorWhite}`},":active":{...t[":active"],color:`${o.colorWhiteFifty}`,borderRadius:"200px"}}),dropdownIndicator:(t,a)=>({...t,transform:a.isFocused?"rotate(180deg)":"rotate(0deg)"})}),H=({categoryList:i,ingredientList:p,page:t,per_page:a,onChangeFilter:c})=>{const[g,h]=n.useState(""),[u,m]=n.useState(""),[f,k]=n.useState("");n.useEffect(()=>{(()=>{c(g,u,f,t="1",a="10")})()},[u,f,t,a]);const w=e=>{h(e.target.value)},b=e=>{e.preventDefault(),h(""),c(g,u,f,t,a)},s=(e,x)=>{m(e?e.value:"")},d=(e,x)=>{k(e?e.value:"")};return r.jsx(O,{children:r.jsxs(_,{onSubmit:b,children:[r.jsx(B,{children:r.jsxs(M,{children:[r.jsx(N,{type:"text",placeholder:"Enter the text",id:"inputKeyword",value:g,onChange:w}),r.jsx(T,{type:"submit",children:r.jsx(A,{})})]})}),r.jsx(S,{placeholder:"All categories",options:j(i),onChange:s,styles:L("405px","297px"),emotion:"any"}),r.jsx(S,{placeholder:"Ingredients",options:j(p),onChange:d,styles:L("295px","276px")})]})})},z=l.ul`
  
    //mobile
      display: flex;
      flex-wrap: wrap;
      gap: 28px;
      margin-bottom: 40px;
      

    //tablet
    @media (min-width: 768px) {
      row-gap: 40px;
      column-gap: 20px;
      margin-bottom: 80px;
    }

    //desktop
    @media (min-width: 1440px) {
      row-gap: 80px;
    }
`,Q=()=>{const[i,p]=n.useState([]),[t,a]=n.useState([]),[c,g]=n.useState([]),[h,u]=n.useState(1),[m,f]=n.useState(window.innerWidth>1439&&9||10),[k,w]=n.useState(!1);n.useEffect(()=>{(async()=>{try{const e=await v();p(e)}catch(e){if(e.code!=="ERR_CANCELED")throw console.log(e),Error("Oops! Something went wrong! Try reloading the page!")}})(),(async()=>{try{const x=(await $()).map(y=>y.title);a(x)}catch(e){if(e.code!=="ERR_CANCELED")throw console.log(e),Error("Oops! Something went wrong! Try reloading the page!")}})(),b("","","",h,m)},[]);const b=async(s="",d="",e="",x=1,y=10)=>{console.log("я в getPopularDrinks DrinksPage:",s,d,e,x,y);try{w(!0);const{drinks:C}=await I(s,d,e,x,y);g(C)}catch(C){if(C.code!=="ERR_CANCELED")throw console.log(C),Error("Oops! Something went wrong! Try reloading the page!")}finally{w(!1)}};return r.jsxs(W,{children:[r.jsx(D,{title:"Drinks"}),r.jsx(H,{categoryList:i,ingredientList:t,onChangeFilter:b}),c.lenght!==0?r.jsx("div",{children:r.jsx(z,{children:c.map(({_id:s,drink:d,drinkThumb:e})=>r.jsx(E,{_id:s,drink:d,drinkThumb:e},s))})}):r.jsx(F,{})]})};export{Q as default};
