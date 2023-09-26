import{s,c as n,j as t,r as x,t as w,A as b,B as g}from"./index-5601ffc7.js";import{a as f}from"./operationsFilters-4a1e7585.js";import{P as k}from"./PageTitle-baa5ac17.js";import{b as y}from"./operationsDrinks-0a7c584a.js";const $=s.li`
  display: flex;
  justify-content: space-between;
  width: 157px;

  p {
    font-size: 14px;
    color: ${n.colorWhite};
  }

  span {
    font-size: 14px;
    color: ${n.colorWhiteFifty};
  }

  @media (min-width: 768px) {
    width: 220px;

    p {
      font-size: 18px;
    }

    span {
      font-size: 16px;
    }
  }

`,D=({number:e,name:i})=>t.jsxs($,{children:[t.jsx("p",{children:i}),t.jsx("span",{children:e})]}),z=s.p`
  color: ${n.colorWhiteFifty};
  font-size: 16px;
  margin-bottom: 42px;

  @media (min-width: 768px) {
    margin-bottom: 24px;
  }
`,v=s.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 21px;
  margin-bottom: 80px;

  @media (min-width: 1440px) {
    margin-bottom: 100px;
  }
`,T=({coctailInfo:e})=>{const[i,a]=x.useState([]),d=e!==null?e.ingredients:[],p=d.map(r=>r.ingredientId);return x.useEffect(()=>{(async()=>{try{const o=await f();if(o.length!==0){const c=o.filter(m=>p.includes(m._id));a(c)}}catch(o){console.log(o.message)}})()},[e]),console.log(i),t.jsxs(t.Fragment,{children:[t.jsx(z,{children:"Ingredients"}),t.jsx(v,{children:d.map(({title:r,measure:o,ingredientId:c})=>t.jsx(D,{name:r,number:o},c))}),i.map(({ingredientThumb:r,_id:o})=>t.jsxs("li",{children:[" ",t.jsx("img",{src:r,width:70})," "]},o))]})},C=s.button`
  color: ${n.colorBlue};
  background-color: ${n.colorWhite};
  border-radius: 42px;
  border-color: transparent;
  font-size: 14px;
  font-weight: 600;
  padding: 14px 40px;
  margin-bottom: 80px;

  &:hover {
    background-color: ${n.colorBlue} ;
    color: ${n.colorWhite};
  }
  &:focus {
    background-color: ${n.colorBlue} ;
    color: ${n.colorWhite};
  }

  @media (min-width: 768px) {
    font-size: 16px;
    padding: 18px 44px;
}

@media (min-width: 1440px) {
    font-size: 16px;
    padding: 18px 44px;
    margin-bottom: 0;
}
`,I=({text:e,onClick:i})=>t.jsx(C,{onClick:i,children:e}),P=s.p`
  margin-bottom: 20px;
  margin-top: 8px;
  color: ${n.colorWhiteFifty};
  font-size: 12px;
  font-weight: 400;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`,S=s.p`
  margin-bottom: 40px;
  width: 335px;
  color: ${n.colorWhite};
  font-size: 14px;
  font-weight: 200;

  @media (min-width: 768px) {
    width: 593px;
    font-size: 16px;
  }
`,W=s.div`
margin-top: 80px;
margin-bottom: 80px;


@media (min-width: 768px) {
    margin-top: 140px;

  }


  @media (min-width: 1440px) {
    margin-top: 132px;
    margin-bottom: 100px;
    display: flex;
    justify-content: space-between;
  }
`,B=s.img`
width: 335px;
height: 400px;


@media (min-width: 768px) {
    width: 704px;
    height: 400px;
    object-fit: cover;
    object-position: center top;
}

@media (min-width: 1440px) {
    width: 400px;
    height: 400px;

}
`,F=({photo:e})=>t.jsx(B,{src:e}),M=({coctailInfo:e})=>{const i=e!==null?e.drink:"",a=e!==null?e.glass:"",d=e!==null?e.alcoholic:"",p=e!==null?e.shortDescription:"",r=e!==null?e.drinkThumb:"image",[o,c]=x.useState(!0),m=w(),u=()=>{c(j=>!j),m(b(e))};return t.jsxs(W,{children:[t.jsxs("div",{children:[t.jsx(k,{title:i,style:{marginBottom:"10px"}}),t.jsxs(P,{children:[a," / ",d]}),t.jsxs(S,{children:[p," "]}),t.jsx(I,{text:o?"Add to favorite drinks":"Remove from favorites",onClick:u})]}),t.jsx(F,{photo:r})]})},A="/drinkMaster-Team-1/assets/desktop@1x-8eda6905.jpg",R="/drinkMaster-Team-1/assets/desktop@2x-0896e2bb.jpg",E="/drinkMaster-Team-1/assets/tablet@1x-1ce56edb.jpg",L="/drinkMaster-Team-1/assets/tablet@2x-11f63109.jpg",l="/drinkMaster-Team-1/assets/mob@1x-b65eaffd.jpg",H="/drinkMaster-Team-1/assets/mob@2x-d2eb580b.jpg",O=s.img`
@media (min-width: 1440px) {
 width: 631;
}
@media (min-width: 768px) {
    width: 704;
}
@media (min-width: 375px) {
    width: 335;
}
`,_=()=>t.jsxs("picture",{children:[t.jsx("source",{media:"(min-width: 1440px)",srcSet:`${A}, ${R} 2x`,type:"image/jpg"}),t.jsx("source",{media:"(min-width: 768px)",srcSet:`${E}, ${L} 2x`,type:"image/jpg"}),t.jsx("source",{media:"(min-width: 375px)",srcSet:`${l}, ${H} 2x`,type:"image/jpg"}),t.jsx(O,{src:l,alt:"Coctails"})]}),q=s.div`
  @media (min-width: 1440px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`,G=s.h3`
  margin-bottom: 40px;
  font-size: 28px;
`,h=s.p`

    width: 335px;
    color: ${n.colorWhite};
    font-size: 14px;
    margin-bottom: 40px;

  @media (min-width: 768px) {
    width: 704px;
  }

  @media (min-width: 1440px) {
    width: 549px;
    font-size: 16px;
    margin-bottom: 0;
  }
`,J=({coctailInfo:e})=>{const i=e!==null?e.instructions:"",a=e!==null?e.description:"";return t.jsxs(t.Fragment,{children:[t.jsx(G,{children:"Recipe Preparation"}),t.jsxs(q,{children:[t.jsxs("div",{children:[t.jsxs(h,{style:{marginBottom:40},children:[" ",a," "]}),t.jsxs(h,{children:[" ",i," "]})]}),t.jsx(_,{})]})]})},K=()=>{const[e,i]=x.useState(null),{drinkId:a}=g();return x.useEffect(()=>{(async()=>{const p=await y(a);i(p)})()},[]),t.jsxs(t.Fragment,{children:[t.jsx(M,{coctailInfo:e}),t.jsx(T,{coctailInfo:e}),t.jsx(J,{coctailInfo:e})]})},X=()=>{const{drinkId:e}=g();return t.jsx(K,{id:e})};export{X as default};
