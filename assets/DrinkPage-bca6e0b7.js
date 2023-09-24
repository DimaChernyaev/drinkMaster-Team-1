import{c as n,j as t,r as d,e as j,f as m}from"./index-b9c04ced.js";import{s,P as w}from"./styled-components.browser.esm-f2c86620.js";const b=s.li`
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

`,f=({number:e,name:i})=>t.jsxs(b,{children:[t.jsx("p",{children:i}),t.jsx("span",{children:e})]}),k=s.p`
  color: ${n.colorWhiteFifty};
  font-size: 16px;
  margin-bottom: 42px;

  @media (min-width: 768px) {
    margin-bottom: 24px;
  }
`,y=s.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 21px;
  margin-bottom: 80px;

  @media (min-width: 1440px) {
    margin-bottom: 100px;
  }
`,$=({coctailInfo:e})=>{const i=e!==null?e.ingredients:[],o=async()=>{};return d.useEffect(()=>{o()},[]),t.jsxs(t.Fragment,{children:[t.jsx(k,{children:"Ingredients"}),t.jsx(y,{children:i.map(({title:a,measure:r,ingredientId:p})=>t.jsx(f,{name:a,number:r},p))})]})},z=s.button`
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
`,D=({text:e,onClick:i})=>t.jsx(z,{onClick:i,children:e}),T=s.p`
  margin-bottom: 20px;
  margin-top: 8px;
  color: ${n.colorWhiteFifty};
  font-size: 12px;
  font-weight: 400;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`,v=s.p`
  margin-bottom: 40px;
  width: 335px;
  color: ${n.colorWhite};
  font-size: 14px;
  font-weight: 200;

  @media (min-width: 768px) {
    width: 593px;
    font-size: 16px;
  }
`,C=s.div`
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
`,P=s.img`
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
`,W=({photo:e})=>t.jsx(P,{src:e}),S=({coctailInfo:e})=>{const i=e!==null?e.drink:"",o=e!==null?e.glass:"",a=e!==null?e.alcoholic:"",r=e!==null?e.shortDescription:"",p=e!==null?e.drinkThumb:"image",[l,h]=d.useState(!0),g=()=>{h(u=>!u)};return t.jsxs(C,{children:[t.jsxs("div",{children:[t.jsx(w,{title:i,style:{marginBottom:"10px"}}),t.jsxs(T,{children:[o," / ",a]}),t.jsxs(v,{children:[r," "]}),t.jsx(D,{text:l?"Add to favorite drinks":"Remove from favorites",onClick:g})]}),t.jsx(W,{photo:p})]})},B="/drinkMaster-Team-1/assets/desktop@1x-8eda6905.jpg",F="/drinkMaster-Team-1/assets/desktop@2x-0896e2bb.jpg",I="/drinkMaster-Team-1/assets/tablet@1x-1ce56edb.jpg",M="/drinkMaster-Team-1/assets/tablet@2x-11f63109.jpg",c="/drinkMaster-Team-1/assets/mob@1x-b65eaffd.jpg",R="/drinkMaster-Team-1/assets/mob@2x-d2eb580b.jpg",E=s.img`
@media (min-width: 1440px) {
 width: 631;
}
@media (min-width: 768px) {
    width: 704;
}
@media (min-width: 375px) {
    width: 335;
}
`,A=()=>t.jsxs("picture",{children:[t.jsx("source",{media:"(min-width: 1440px)",srcSet:`${B}, ${F} 2x`,type:"image/jpg"}),t.jsx("source",{media:"(min-width: 768px)",srcSet:`${I}, ${M} 2x`,type:"image/jpg"}),t.jsx("source",{media:"(min-width: 375px)",srcSet:`${c}, ${R} 2x`,type:"image/jpg"}),t.jsx(E,{src:c,alt:"Coctails"})]}),L=s.div`
  @media (min-width: 1440px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`,H=s.h3`
  margin-bottom: 40px;
  font-size: 28px;
`,x=s.p`

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
`,O=({coctailInfo:e})=>{const i=e!==null?e.instructions:"",o=e!==null?e.description:"";return t.jsxs(t.Fragment,{children:[t.jsx(H,{children:"Recipe Preparation"}),t.jsxs(L,{children:[t.jsxs("div",{children:[t.jsxs(x,{style:{marginBottom:40},children:[" ",o," "]}),t.jsxs(x,{children:[" ",i," "]})]}),t.jsx(A,{})]})]})};async function q(e){try{const{data:i}=await j.get(`/drinks/${e}`);return console.log(i),i}catch(i){console.log(i.message)}}const G=()=>{const[e,i]=d.useState(null),{drinkId:o}=m();return d.useEffect(()=>{(async()=>{const r=await q(o);i(r)})()},[]),t.jsxs(t.Fragment,{children:[t.jsx(S,{coctailInfo:e}),t.jsx($,{coctailInfo:e}),t.jsx(O,{coctailInfo:e})]})},N=()=>{const{drinkId:e}=m();return t.jsx(G,{id:e})};export{N as default};
