import{c as i,j as t,r as d,e as m}from"./index-adf344b2.js";import{s as n,P as j}from"./styled-components.browser.esm-71594f6d.js";import{b as w}from"./operationsDrinks-b7c644b1.js";const b=n.li`
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

`,f=({number:e,name:s})=>t.jsxs(b,{children:[t.jsx("p",{children:s}),t.jsx("span",{children:e})]}),k=n.p`
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
`,y=({coctailInfo:e})=>{const s=e!==null?e.ingredients:[],o=async()=>{};return d.useEffect(()=>{o()},[]),t.jsxs(t.Fragment,{children:[t.jsx(k,{children:"Ingredients"}),t.jsx($,{children:s.map(({title:a,measure:r,ingredientId:p})=>t.jsx(f,{name:a,number:r},p))})]})},z=n.button`
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
`,D=({text:e,onClick:s})=>t.jsx(z,{onClick:s,children:e}),T=n.p`
  margin-bottom: 20px;
  margin-top: 8px;
  color: ${i.colorWhiteFifty};
  font-size: 12px;
  font-weight: 400;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`,v=n.p`
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
`,P=n.img`
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
`,W=({photo:e})=>t.jsx(P,{src:e}),S=({coctailInfo:e})=>{const s=e!==null?e.drink:"",o=e!==null?e.glass:"",a=e!==null?e.alcoholic:"",r=e!==null?e.shortDescription:"",p=e!==null?e.drinkThumb:"image",[l,h]=d.useState(!0),g=()=>{h(u=>!u)};return t.jsxs(C,{children:[t.jsxs("div",{children:[t.jsx(j,{title:s,style:{marginBottom:"10px"}}),t.jsxs(T,{children:[o," / ",a]}),t.jsxs(v,{children:[r," "]}),t.jsx(D,{text:l?"Add to favorite drinks":"Remove from favorites",onClick:g})]}),t.jsx(W,{photo:p})]})},B="/drinkMaster-Team-1/assets/desktop@1x-8eda6905.jpg",F="/drinkMaster-Team-1/assets/desktop@2x-0896e2bb.jpg",I="/drinkMaster-Team-1/assets/tablet@1x-1ce56edb.jpg",M="/drinkMaster-Team-1/assets/tablet@2x-11f63109.jpg",x="/drinkMaster-Team-1/assets/mob@1x-b65eaffd.jpg",R="/drinkMaster-Team-1/assets/mob@2x-d2eb580b.jpg",E=n.img`
@media (min-width: 1440px) {
 width: 631;
}
@media (min-width: 768px) {
    width: 704;
}
@media (min-width: 375px) {
    width: 335;
}
`,A=()=>t.jsxs("picture",{children:[t.jsx("source",{media:"(min-width: 1440px)",srcSet:`${B}, ${F} 2x`,type:"image/jpg"}),t.jsx("source",{media:"(min-width: 768px)",srcSet:`${I}, ${M} 2x`,type:"image/jpg"}),t.jsx("source",{media:"(min-width: 375px)",srcSet:`${x}, ${R} 2x`,type:"image/jpg"}),t.jsx(E,{src:x,alt:"Coctails"})]}),L=n.div`
  @media (min-width: 1440px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`,H=n.h3`
  margin-bottom: 40px;
  font-size: 28px;
`,c=n.p`

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
`,O=({coctailInfo:e})=>{const s=e!==null?e.instructions:"",o=e!==null?e.description:"";return t.jsxs(t.Fragment,{children:[t.jsx(H,{children:"Recipe Preparation"}),t.jsxs(L,{children:[t.jsxs("div",{children:[t.jsxs(c,{style:{marginBottom:40},children:[" ",o," "]}),t.jsxs(c,{children:[" ",s," "]})]}),t.jsx(A,{})]})]})},q=()=>{const[e,s]=d.useState(null),{drinkId:o}=m();return d.useEffect(()=>{(async()=>{const r=await w(o);s(r)})()},[]),t.jsxs(t.Fragment,{children:[t.jsx(S,{coctailInfo:e}),t.jsx(y,{coctailInfo:e}),t.jsx(O,{coctailInfo:e})]})},N=()=>{const{drinkId:e}=m();return t.jsx(q,{id:e})};export{N as default};
