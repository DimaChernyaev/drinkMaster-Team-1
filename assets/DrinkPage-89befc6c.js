import{c as i,j as t,r as c,e as m,f as l}from"./index-3f501434.js";import{s as n,P as j}from"./styled-components.browser.esm-2afb4b1b.js";const b=n.li`
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

`,w=({number:e,name:s})=>t.jsxs(b,{children:[t.jsx("p",{children:s}),t.jsx("span",{children:e})]}),f=n.p`
  color: ${i.colorWhiteFifty};
  font-size: 16px;
  margin-bottom: 42px;

  @media (min-width: 768px) {
    margin-bottom: 24px;
  }
`,k=n.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 21px;
  margin-bottom: 80px;

  @media (min-width: 1440px) {
    margin-bottom: 100px;
  }
`,y=({coctailInfo:e})=>{const s=e!==null?e.ingredients:[];return t.jsxs(t.Fragment,{children:[t.jsx(f,{children:"Ingredients"}),t.jsx(k,{children:s.map(({title:o,measure:r,ingredientId:a})=>t.jsx(w,{name:o,number:r},a))})]})},I=n.button`
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
    margin-bottom: 216px;
}
`,$=({text:e,onClick:s})=>t.jsx(I,{onClick:s,children:e}),z=n.p`
  margin-bottom: 20px;

  color: ${i.colorWhiteFifty};
  font-size: 12px;
  font-weight: 400;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`,T=n.p`
  margin-bottom: 40px;
width: 335px;
  color: ${i.colorWhite};
  font-size: 14px;
  font-weight: 200;

  @media (min-width: 768px) {
    width: 593px;
    font-size: 16px;
  }

`,D=({coctailInfo:e})=>{const s=e!==null?e.drink:"",o=e!==null?e.glass:"",r=e!==null?e.alcoholic:"",a=e!==null?e.description:"",[d,h]=c.useState(!0),g=()=>{h(u=>!u)};return t.jsxs(t.Fragment,{children:[t.jsx(j,{title:s,style:{marginBottom:"10px"}}),t.jsxs(z,{children:[o," / ",r]}),t.jsxs(T,{children:[a," "]}),t.jsx($,{text:d?"Add to favorite drinks":"Remove from favorites",onClick:g})]})},M="/drinkMaster-Team-1/assets/desktop@1x-8eda6905.jpg",C="/drinkMaster-Team-1/assets/desktop@2x-0896e2bb.jpg",P="/drinkMaster-Team-1/assets/tablet@1x-1ce56edb.jpg",W="/drinkMaster-Team-1/assets/tablet@2x-11f63109.jpg",p="/drinkMaster-Team-1/assets/mob@1x-b65eaffd.jpg",v="/drinkMaster-Team-1/assets/mob@2x-d2eb580b.jpg",B=n.img`
@media (min-width: 1440px) {
 width: 631;
}
@media (min-width: 768px) {
    width: 704;
}
@media (min-width: 375px) {
    width: 335;
}
`,F=()=>t.jsxs("picture",{children:[t.jsx("source",{media:"(min-width: 1440px)",srcSet:`${M}, ${C} 2x`,type:"image/jpg"}),t.jsx("source",{media:"(min-width: 768px)",srcSet:`${P}, ${W} 2x`,type:"image/jpg"}),t.jsx("source",{media:"(min-width: 375px)",srcSet:`${p}, ${v} 2x`,type:"image/jpg"}),t.jsx(B,{src:p,alt:"Coctails"})]}),N=n.div`
  @media (min-width: 1440px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`,R=n.h3`
  margin-bottom: 40px;
  font-size: 28px;
`,x=n.p`

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
`,S=({coctailInfo:e})=>{const s=e!==null?e.instructions:"",o=e!==null?e.description:"";return t.jsxs(t.Fragment,{children:[t.jsx(R,{children:"Recipe Preparation"}),t.jsxs(N,{children:[t.jsxs("div",{children:[t.jsxs(x,{style:{marginBottom:40},children:[" ",o," "]}),t.jsxs(x,{children:[" ",s," "]})]}),t.jsx(F,{})]})]})};m.defaults.baseURL="https://drink-master-server.onrender.com";const Q=async e=>{try{const s="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MGM0ZTE3NDk3YWU1NzQ1ZjE2Y2FjOCIsImlhdCI6MTY5NTQ2MTc0NiwiZXhwIjoxNjk1NTQ0NTQ2fQ.RVHnsYgcK11oOJdJKd-i15H0deHEQQarVbMpZPhuoOM";return(await m.get(`/drinks/${e}`,{headers:{Authorization:`Bearer ${s}`}})).data}catch(s){return s.message}},E=()=>{const[e,s]=c.useState(null),{drinkId:o}=l(),r=async a=>{try{const d=await Q(a);s(d)}catch(d){console.error(d)}};return c.useEffect(()=>{r(o)},[]),t.jsxs(t.Fragment,{children:[t.jsx(D,{coctailInfo:e}),t.jsx(y,{coctailInfo:e}),t.jsx(S,{coctailInfo:e})]})},Y=()=>{const{drinkId:e}=l();return t.jsx(E,{id:e})};export{Y as default};
