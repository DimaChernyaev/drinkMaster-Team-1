import{c as i,j as t,r as c,A as g}from"./index-b2cac593.js";import{b as j}from"./operationsFilters-8597c617.js";import{s as n,P as w}from"./styled-components.browser.esm-1bec77ed.js";import{b}from"./operationsDrinks-1ced5525.js";const f=n.li`
  display: flex;
  justify-content: space-between;
  width: 157px;

  p {
    font-size: 14px;
    color: ${i.colorWhite};
  }

  span {
    font-size: 14px;
    color: ${i.colorWhiteFifty};
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

`,k=({number:e,name:s})=>t.jsxs(f,{children:[t.jsx("p",{children:s}),t.jsx("span",{children:e})]}),y=n.p`
  color: ${i.colorWhiteFifty};
  font-size: 16px;
  margin-bottom: 42px;

  @media (min-width: 768px) {
    margin-bottom: 24px;
  }
`,$=n.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 21px;
  margin-bottom: 80px;

  @media (min-width: 1440px) {
    margin-bottom: 100px;
  }
`,D=({photo:e})=>t.jsx("li",{children:t.jsx("img",{src:e})}),z=({coctailInfo:e})=>{const[s,a]=c.useState([]),p=c.useMemo(()=>e!==null?e.ingredients:[],[e]);return c.useEffect(()=>{(async()=>{const d=p.map(o=>o.ingredientId);try{const o=await j(d);if(o.length!==0){const x=o.map(m=>m.data);a(x)}}catch(o){console.log(o.message)}})()},[p]),t.jsxs(t.Fragment,{children:[t.jsx(y,{children:"Ingredients"}),t.jsx($,{children:p.map(({title:r,measure:d,ingredientId:o})=>t.jsx(k,{name:r,number:d},o))}),s.map(({ingredientThumb:r,_id:d})=>t.jsx(D,{photo:r},d))]})},T=n.button`
  color: ${i.colorBlue};
  background-color: ${i.colorWhite};
  border-radius: 42px;
  border-color: transparent;
  font-size: 14px;
  font-weight: 600;
  padding: 14px 40px;
  margin-bottom: 80px;

  &:hover {
    background-color: ${i.colorBlue} ;
    color: ${i.colorWhite};
  }
  &:focus {
    background-color: ${i.colorBlue} ;
    color: ${i.colorWhite};
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
`,v=({text:e,onClick:s})=>t.jsx(T,{onClick:s,children:e}),I=n.p`
  margin-bottom: 20px;
  margin-top: 8px;
  color: ${i.colorWhiteFifty};
  font-size: 12px;
  font-weight: 400;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`,P=n.p`
  margin-bottom: 40px;
  width: 335px;
  color: ${i.colorWhite};
  font-size: 14px;
  font-weight: 200;

  @media (min-width: 768px) {
    width: 593px;
    font-size: 16px;
  }
`,C=n.div`
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
`,S=n.img`
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
`,W=({photo:e})=>t.jsx(S,{src:e}),B=({coctailInfo:e})=>{const s=e!==null?e.drink:"",a=e!==null?e.glass:"",p=e!==null?e.alcoholic:"",r=e!==null?e.shortDescription:"",d=e!==null?e.drinkThumb:"image",[o,x]=c.useState(!0),m=()=>{x(u=>!u)};return t.jsxs(C,{children:[t.jsxs("div",{children:[t.jsx(w,{title:s,style:{marginBottom:"10px"}}),t.jsxs(I,{children:[a," / ",p]}),t.jsxs(P,{children:[r," "]}),t.jsx(v,{text:o?"Add to favorite drinks":"Remove from favorites",onClick:m})]}),t.jsx(W,{photo:d})]})},F="/drinkMaster-Team-1/assets/desktop@1x-8eda6905.jpg",M="/drinkMaster-Team-1/assets/desktop@2x-0896e2bb.jpg",A="/drinkMaster-Team-1/assets/tablet@1x-1ce56edb.jpg",R="/drinkMaster-Team-1/assets/tablet@2x-11f63109.jpg",l="/drinkMaster-Team-1/assets/mob@1x-b65eaffd.jpg",E="/drinkMaster-Team-1/assets/mob@2x-d2eb580b.jpg",L=n.img`
@media (min-width: 1440px) {
 width: 631;
}
@media (min-width: 768px) {
    width: 704;
}
@media (min-width: 375px) {
    width: 335;
}
`,H=()=>t.jsxs("picture",{children:[t.jsx("source",{media:"(min-width: 1440px)",srcSet:`${F}, ${M} 2x`,type:"image/jpg"}),t.jsx("source",{media:"(min-width: 768px)",srcSet:`${A}, ${R} 2x`,type:"image/jpg"}),t.jsx("source",{media:"(min-width: 375px)",srcSet:`${l}, ${E} 2x`,type:"image/jpg"}),t.jsx(L,{src:l,alt:"Coctails"})]}),O=n.div`
  @media (min-width: 1440px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`,q=n.h3`
  margin-bottom: 40px;
  font-size: 28px;
`,h=n.p`

    width: 335px;
    color: ${i.colorWhite};
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
`,G=({coctailInfo:e})=>{const s=e!==null?e.instructions:"",a=e!==null?e.description:"";return t.jsxs(t.Fragment,{children:[t.jsx(q,{children:"Recipe Preparation"}),t.jsxs(O,{children:[t.jsxs("div",{children:[t.jsxs(h,{style:{marginBottom:40},children:[" ",a," "]}),t.jsxs(h,{children:[" ",s," "]})]}),t.jsx(H,{})]})]})},J=()=>{const[e,s]=c.useState(null),{drinkId:a}=g();return c.useEffect(()=>{(async()=>{const r=await b(a);s(r)})()},[]),t.jsxs(t.Fragment,{children:[t.jsx(B,{coctailInfo:e}),t.jsx(z,{coctailInfo:e}),t.jsx(G,{coctailInfo:e})]})},V=()=>{const{drinkId:e}=g();return t.jsx(J,{id:e})};export{V as default};
