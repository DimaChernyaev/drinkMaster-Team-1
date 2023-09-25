import{e as j,c as n,j as t,r as c,f as h}from"./index-cd633c6a.js";import{s,P as w}from"./styled-components.browser.esm-91802ece.js";import{b}from"./operationsDrinks-7fec7844.js";async function f(e){try{const i=e.map(async r=>await j.get(`/ingredients/${r}`));return await Promise.all(i)}catch(i){console.log(i.message)}}const k=s.li`
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

`,y=({number:e,name:i})=>t.jsxs(k,{children:[t.jsx("p",{children:i}),t.jsx("span",{children:e})]}),$=s.p`
  color: ${n.colorWhiteFifty};
  font-size: 16px;
  margin-bottom: 42px;

  @media (min-width: 768px) {
    margin-bottom: 24px;
  }
`,D=s.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 21px;
  margin-bottom: 80px;

  @media (min-width: 1440px) {
    margin-bottom: 100px;
  }
`,z=({photo:e})=>t.jsx("li",{children:t.jsx("img",{src:e})}),P=({coctailInfo:e})=>{const[i,r]=c.useState([]),d=c.useMemo(()=>e!==null?e.ingredients:[],[e]);return c.useEffect(()=>{(async()=>{const p=d.map(o=>o.ingredientId);try{const o=await f(p);if(o.length!==0){const x=o.map(m=>m.data);r(x)}}catch(o){console.log(o.message)}})()},[d]),t.jsxs(t.Fragment,{children:[t.jsx($,{children:"Ingredients"}),t.jsx(D,{children:d.map(({title:a,measure:p,ingredientId:o})=>t.jsx(y,{name:a,number:p},o))}),i.map(({ingredientThumb:a,_id:p})=>t.jsx(z,{photo:a},p))]})},T=s.button`
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
`,v=({text:e,onClick:i})=>t.jsx(T,{onClick:i,children:e}),I=s.p`
  margin-bottom: 20px;
  margin-top: 8px;
  color: ${n.colorWhiteFifty};
  font-size: 12px;
  font-weight: 400;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`,C=s.p`
  margin-bottom: 40px;
  width: 335px;
  color: ${n.colorWhite};
  font-size: 14px;
  font-weight: 200;

  @media (min-width: 768px) {
    width: 593px;
    font-size: 16px;
  }
`,S=s.div`
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
`,W=s.img`
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
`,B=({photo:e})=>t.jsx(W,{src:e}),F=({coctailInfo:e})=>{const i=e!==null?e.drink:"",r=e!==null?e.glass:"",d=e!==null?e.alcoholic:"",a=e!==null?e.shortDescription:"",p=e!==null?e.drinkThumb:"image",[o,x]=c.useState(!0),m=()=>{x(u=>!u)};return t.jsxs(S,{children:[t.jsxs("div",{children:[t.jsx(w,{title:i,style:{marginBottom:"10px"}}),t.jsxs(I,{children:[r," / ",d]}),t.jsxs(C,{children:[a," "]}),t.jsx(v,{text:o?"Add to favorite drinks":"Remove from favorites",onClick:m})]}),t.jsx(B,{photo:p})]})},M="/drinkMaster-Team-1/assets/desktop@1x-8eda6905.jpg",R="/drinkMaster-Team-1/assets/desktop@2x-0896e2bb.jpg",A="/drinkMaster-Team-1/assets/tablet@1x-1ce56edb.jpg",E="/drinkMaster-Team-1/assets/tablet@2x-11f63109.jpg",l="/drinkMaster-Team-1/assets/mob@1x-b65eaffd.jpg",L="/drinkMaster-Team-1/assets/mob@2x-d2eb580b.jpg",O=s.img`
@media (min-width: 1440px) {
 width: 631;
}
@media (min-width: 768px) {
    width: 704;
}
@media (min-width: 375px) {
    width: 335;
}
`,H=()=>t.jsxs("picture",{children:[t.jsx("source",{media:"(min-width: 1440px)",srcSet:`${M}, ${R} 2x`,type:"image/jpg"}),t.jsx("source",{media:"(min-width: 768px)",srcSet:`${A}, ${E} 2x`,type:"image/jpg"}),t.jsx("source",{media:"(min-width: 375px)",srcSet:`${l}, ${L} 2x`,type:"image/jpg"}),t.jsx(O,{src:l,alt:"Coctails"})]}),q=s.div`
  @media (min-width: 1440px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`,G=s.h3`
  margin-bottom: 40px;
  font-size: 28px;
`,g=s.p`

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
`,J=({coctailInfo:e})=>{const i=e!==null?e.instructions:"",r=e!==null?e.description:"";return t.jsxs(t.Fragment,{children:[t.jsx(G,{children:"Recipe Preparation"}),t.jsxs(q,{children:[t.jsxs("div",{children:[t.jsxs(g,{style:{marginBottom:40},children:[" ",r," "]}),t.jsxs(g,{children:[" ",i," "]})]}),t.jsx(H,{})]})]})},K=()=>{const[e,i]=c.useState(null),{drinkId:r}=h();return c.useEffect(()=>{(async()=>{const a=await b(r);i(a)})()},[]),t.jsxs(t.Fragment,{children:[t.jsx(F,{coctailInfo:e}),t.jsx(P,{coctailInfo:e}),t.jsx(J,{coctailInfo:e})]})},V=()=>{const{drinkId:e}=h();return t.jsx(K,{id:e})};export{V as default};
