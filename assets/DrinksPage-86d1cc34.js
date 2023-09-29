import{r as a,_ as V,a as K,n as x,c as u,j as r}from"./index-7eb288b3.js";import{g as z,a as Z}from"./operationsFilters-320e8857.js";import{_ as q,c as _,a as E,v as G,g as H,b as J,u as Q,S as X}from"./useStateManager-7e1e8489.esm-76404b67.js";import{a as Y}from"./operationsDrinks-aa6d8dca.js";import{C as ee}from"./CardCoctail-217a863d.js";import{C as te,T as oe,N as ne}from"./FavoriteDrinksPage.styled-55142097.js";var re=["allowCreateWhileLoading","createOptionPosition","formatCreateLabel","isValidNewOption","getNewOptionData","onCreateOption","options","onChange"],A=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",o=arguments.length>1?arguments[1]:void 0,i=arguments.length>2?arguments[2]:void 0,l=String(n).toLowerCase(),c=String(i.getOptionValue(o)).toLowerCase(),d=String(i.getOptionLabel(o)).toLowerCase();return c===l||d===l},F={formatCreateLabel:function(n){return'Create "'.concat(n,'"')},isValidNewOption:function(n,o,i,l){return!(!n||o.some(function(c){return A(n,c,l)})||i.some(function(c){return A(n,c,l)}))},getNewOptionData:function(n,o){return{label:o,value:n,__isNew__:!0}}};function ae(t){var n=t.allowCreateWhileLoading,o=n===void 0?!1:n,i=t.createOptionPosition,l=i===void 0?"last":i,c=t.formatCreateLabel,d=c===void 0?F.formatCreateLabel:c,C=t.isValidNewOption,w=C===void 0?F.isValidNewOption:C,b=t.getNewOptionData,h=b===void 0?F.getNewOptionData:b,m=t.onCreateOption,v=t.options,s=v===void 0?[]:v,p=t.onChange,e=q(t,re),g=e.getOptionValue,L=g===void 0?H:g,y=e.getOptionLabel,N=y===void 0?J:y,f=e.inputValue,P=e.isLoading,W=e.isMulti,j=e.value,D=e.name,O=a.useMemo(function(){return w(f,_(j),s,{getOptionValue:L,getOptionLabel:N})?h(f,d(f)):void 0},[d,h,N,L,f,w,s,j]),M=a.useMemo(function(){return(o||!P)&&O?l==="first"?[O].concat(E(s)):[].concat(E(s),[O]):s},[o,l,P,O,s]),B=a.useCallback(function(S,k){if(k.action!=="select-option")return p(S,k);var I=Array.isArray(S)?S:[S];if(I[I.length-1]===O){if(m)m(f);else{var $=h(f,f),U={action:"create-option",name:D,option:$};p(G(W,[].concat(E(_(j)),[$]),$),U)}return}p(S,k)},[h,f,W,D,O,m,p,j]);return V(V({},e),{},{options:M,onChange:B})}var ie=a.forwardRef(function(t,n){var o=Q(t),i=ae(o);return a.createElement(X,K({ref:n},i))}),R=ie;const T=(t=[])=>t.length===0?{}:t.map(o=>({value:o,label:o.toUpperCase()})),se=t=>a.createElement("svg",{width:20,height:20,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},a.createElement("path",{d:"M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z",stroke:"#F3F3F3",strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round"}),a.createElement("path",{d:"M17.5 17.5L13.875 13.875",stroke:"#F3F3F3",strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round"})),le=x.div`

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
  
`,ce=x.form`

  // modile
  display: flex;
  flex-direction: column;
  padding: 0;
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
  
`,pe=x.label`

  

`,de=x.input`
  width: 264px;
  padding: 14px 24px 14px 24px;
  //height: 56px;
  border-radius: 20em;
  background-color: transparent;
  border: 1px solid ${u.colorWhiteTwenty};
  font-family: Manrope;
  font-weight: 400;
  font-size: 17px;
  font-height : 1.56;
  color: ${u.colorWhiteFifty};

  &:hover{
    border-color:  ${u.colorWhiteFifty};
    color:  ${u.colorWhite};
  };

  &:focus{
    border-color:  ${u.colorWhiteFifty};
    color:  ${u.colorWhite};
  };

  &:active{
    border-color:  ${u.colorWhiteFifty};
    color:  ${u.colorWhite};
  };
`,ge=x.button`
    position: absolute;
    padding: 0;
    width: 20px;
    height: 20px;
    border: 0;
    background-color: transparent;
    cursor: pointer;
    outline: none;
`,ue=x.span`
  position: relative;
  display: block;
`,he=x(se)`

transform: translate(0, -50%);
position: absolute;
right: -226px;
stroke: ${u.colorWhite};

`,me=({categoryList:t,ingredientList:n,page:o,per_page:i,onChangeFilter:l})=>{const[c,d]=a.useState(""),[C,w]=a.useState(""),[b,h]=a.useState("");a.useEffect(()=>{(()=>{l(c,C,b,o="1",i="10")})()},[C,b,o,i]);const m=e=>{d(e.target.value)},v=e=>{e.preventDefault(),d(""),l(c,C,b,o,i)},s=(e,g)=>{w(e?e.value:"")},p=(e,g)=>{h(e?e.value:"")};return r.jsx(le,{children:r.jsxs(ce,{onSubmit:v,children:[r.jsx(pe,{children:r.jsx(de,{type:"text",placeholder:"Enter the text",id:"inputKeyword",value:c,onChange:m})}),r.jsx(ge,{type:"submit",children:r.jsx(ue,{children:r.jsx(he,{})})}),r.jsx(R,{isClearable:!0,placeholder:"All categories",options:T(t),onChange:s}),r.jsx(R,{isClearable:!0,placeholder:"Ingredients",options:T(n),onChange:p})]})})},fe=x.ul`
  
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
`,ye=()=>{const[t,n]=a.useState([]),[o,i]=a.useState([]),[l,c]=a.useState([]),[d,C]=a.useState(1),[w,b]=a.useState(window.innerWidth>1439&&9||10),[h,m]=a.useState(!1);a.useEffect(()=>{(async()=>{try{const e=await z();n(e)}catch(e){if(e.code!=="ERR_CANCELED")throw console.log(e),Error("Oops! Something went wrong! Try reloading the page!")}})(),(async()=>{try{const g=(await Z()).map(L=>L.title);i(g)}catch(e){if(e.code!=="ERR_CANCELED")throw console.log(e),Error("Oops! Something went wrong! Try reloading the page!")}})(),v("","","",d,w)},[]);const v=async(s="",p="",e="",g=1,L=10)=>{console.log("я в getPopularDrinks DrinksPage:",s,p,e,g,L);try{m(!0);const{drinks:y}=await Y(s,p,e,g,L);c(y)}catch(y){if(y.code!=="ERR_CANCELED")throw console.log(y),Error("Oops! Something went wrong! Try reloading the page!")}finally{m(!1)}};return r.jsxs(te,{children:[r.jsxs(oe,{children:[" ",r.jsx("h1",{children:"Drinks"})," "]}),r.jsx(me,{categoryList:t,ingredientList:o,onChangeFilter:v}),l.lenght!==0?r.jsx(r.Fragment,{children:r.jsx("div",{children:r.jsx(fe,{children:l.map(({_id:s,drink:p,drinkThumb:e})=>r.jsx(ee,{_id:s,drink:p,drinkThumb:e},s))})})}):r.jsx(ne,{})]})};export{ye as default};
