import{c as n,j as t,r as d,e as u,f as x}from"./index-745c8caf.js";import{s,P as j}from"./styled-components.browser.esm-0b0cbf60.js";const w=s.li`
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

`,b=({number:e,name:i})=>t.jsxs(w,{children:[t.jsx("p",{children:i}),t.jsx("span",{children:e})]}),f=s.p`
  color: ${n.colorWhiteFifty};
  font-size: 16px;
  margin-bottom: 42px;

  @media (min-width: 768px) {
    margin-bottom: 24px;
  }
`,k=s.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 21px;
  margin-bottom: 80px;

  @media (min-width: 1440px) {
    margin-bottom: 100px;
  }
`,$=({coctailInfo:e})=>{const i=e!==null?e.ingredients:[];return t.jsxs(t.Fragment,{children:[t.jsx(f,{children:"Ingredients"}),t.jsx(k,{children:i.map(({title:o,measure:a,ingredientId:r})=>t.jsx(b,{name:o,number:a},r))})]})},y=s.button`
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
    margin-bottom: 216px;
}
`,z=({text:e,onClick:i})=>t.jsx(y,{onClick:i,children:e}),T=s.p`
  margin-bottom: 20px;

  color: ${n.colorWhiteFifty};
  font-size: 12px;
  font-weight: 400;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`,D=s.p`
  margin-bottom: 40px;
width: 335px;
  color: ${n.colorWhite};
  font-size: 14px;
  font-weight: 200;

  @media (min-width: 768px) {
    width: 593px;
    font-size: 16px;
  }

`,P=({coctailInfo:e})=>{const i=e!==null?e.drink:"",o=e!==null?e.glass:"",a=e!==null?e.alcoholic:"",r=e!==null?e.description:"",[l,m]=d.useState(!0),g=()=>{m(h=>!h)};return t.jsxs(t.Fragment,{children:[t.jsx(j,{title:i,style:{marginBottom:"10px"}}),t.jsxs(T,{children:[o," / ",a]}),t.jsxs(D,{children:[r," "]}),t.jsx(z,{text:l?"Add to favorite drinks":"Remove from favorites",onClick:g})]})},W="/drinkMaster-Team-1/assets/desktop@1x-8eda6905.jpg",v="/drinkMaster-Team-1/assets/desktop@2x-0896e2bb.jpg",C="/drinkMaster-Team-1/assets/tablet@1x-1ce56edb.jpg",F="/drinkMaster-Team-1/assets/tablet@2x-11f63109.jpg",c="/drinkMaster-Team-1/assets/mob@1x-b65eaffd.jpg",I="/drinkMaster-Team-1/assets/mob@2x-d2eb580b.jpg",S=s.img`
@media (min-width: 1440px) {
 width: 631;
}
@media (min-width: 768px) {
    width: 704;
}
@media (min-width: 375px) {
    width: 335;
}
`,B=()=>t.jsxs("picture",{children:[t.jsx("source",{media:"(min-width: 1440px)",srcSet:`${W}, ${v} 2x`,type:"image/jpg"}),t.jsx("source",{media:"(min-width: 768px)",srcSet:`${C}, ${F} 2x`,type:"image/jpg"}),t.jsx("source",{media:"(min-width: 375px)",srcSet:`${c}, ${I} 2x`,type:"image/jpg"}),t.jsx(S,{src:c,alt:"Coctails"})]}),M=s.div`
  @media (min-width: 1440px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`,R=s.h3`
  margin-bottom: 40px;
  font-size: 28px;
`,p=s.p`

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
`,A=({coctailInfo:e})=>{const i=e!==null?e.instructions:"",o=e!==null?e.description:"";return t.jsxs(t.Fragment,{children:[t.jsx(R,{children:"Recipe Preparation"}),t.jsxs(M,{children:[t.jsxs("div",{children:[t.jsxs(p,{style:{marginBottom:40},children:[" ",o," "]}),t.jsxs(p,{children:[" ",i," "]})]}),t.jsx(B,{})]})]})};async function E(e){try{console.log(e);const{data:i}=await u.get(`/drinks/${e}`);return console.log(i),i}catch(i){console.log(i.message)}}const L=()=>{const[e,i]=d.useState(null),{drinkId:o}=x();return console.log(o),d.useEffect(()=>{(async()=>{const r=await E(o);console.log(r),i(r)})()},[]),t.jsxs(t.Fragment,{children:[t.jsx(P,{coctailInfo:e}),t.jsx($,{coctailInfo:e}),t.jsx(A,{coctailInfo:e})]})},q=()=>{const{drinkId:e}=x();return t.jsx(L,{id:e})};export{q as default};
