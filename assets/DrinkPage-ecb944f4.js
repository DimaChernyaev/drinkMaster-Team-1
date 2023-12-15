import{s,j as t,r as x,B as f,a as j,G as k,K as v,N as u}from"./index-6fa5008b.js";import{a as y}from"./operationsFilters-ec8c26c4.js";import{P as D}from"./PageTitle-cdd5383b.js";import{b as T}from"./favoriteSelectors-c82fd15c.js";import{c as z}from"./operationsDrinks-40e7c5d2.js";import{L as I}from"./LoaderDots-4966b1d0.js";const P=s.li`
  div {
    display: flex;
    justify-content: space-between;
    width: 157px;
  }

  img {
    width: 107px;
    height: 107px;
  }

  p {
    font-size: 14px;
    color: var(--text-color);
  }

  span {
    font-size: 14px;
    color: var(--ingridientTitle-color);
  }

  @media (min-width: 768px) {
    div {
      width: 220px;
      margin-bottom: 14px;
    }
    img {
      width: 175px;
      height: 175px;
    }
    p {
      font-size: 18px;
    }

    span {
      font-size: 16px;
    }
  }
`,S=s.div`
  margin-bottom: 8px;
  border-radius: 8px;
  width: 157px;
  height: 157px;
  padding: 25px;
  background-color: var(--blue-color);

  @media (min-width: 768px) {
    width: 220px;
    height: 220px;
    padding: 22px;
  }
`,C="/drinkMaster-Team-1/assets/coctailPlaceholder-13631aa6.png",F=({photo:i,title:r,measure:o})=>t.jsxs(P,{children:[t.jsx(S,{children:t.jsx("img",{src:i||C})}),t.jsxs("div",{children:[t.jsx("p",{children:r}),t.jsx("span",{children:o})]})]}),M=s.p`
  color: var(--whitefifty-color);
  font-size: 16px;
  margin-bottom: 42px;

  @media (min-width: 768px) {
    margin-bottom: 24px;
  }
`,$=s.ul`


  display: flex;
  flex-wrap: wrap;
  gap: 21px;
  margin-bottom: 80px;


  @media (max-width: 374px) {
justify-content: center;
}

  @media (min-width: 768px) {
    gap: 22px;
  }

  @media (min-width: 1280px) {
    margin-bottom: 100px;
    gap: 35px;
  }
`,L=({coctailInfo:i})=>{const[r,o]=x.useState([]),d=i!==null?i.ingredients:[],m=d.map(n=>n.ingredientId);x.useEffect(()=>{(async()=>{try{const e=await y();if(e.length!==0){const a=e.filter(p=>m.includes(p._id));o(a)}}catch(e){console.log(e.message)}})()},[i]);const c=d.map(n=>{const e=r.find(a=>a._id===n.ingredientId);return{...n,ingredientThumb:e?e.ingredientThumb:null}});return t.jsxs(t.Fragment,{children:[t.jsx(M,{children:"Ingredients"}),t.jsx($,{children:c.map(({title:n,measure:e,ingredientId:a,ingredientThumb:p})=>t.jsx(F,{title:n,measure:e,photo:p},a))})]})},B=s.button`
  @media (max-width: 374px) {
    margin-left: 40px;
  }

  width: 222px;
  color: var(--btn-add-drink-color);
  background-color: var(--btn-add-drink-background);
  border-radius: 42px;
  border-color: transparent;
  font-size: 14px;
  font-weight: 600;
  padding-bottom: 14px;
  padding-top: 14px;
  margin-bottom: 80px;
  transition:
    background-color var(--transition),
    color var(--transition);

  &:hover,
  &:focus {
    background: var(--btn-add-drink-color);
    color: var(--btn-add-drink-background);
  }

  &:active {
    babackground: var(--btn-add-drink-color);
    color: var(--btn-add-drink-background);
    box-shadow: 0 0 10px var(--whitefifty-color);
  }

  @media (min-width: 768px) {
    width: 250px;
    font-size: 16px;
    padding-bottom: 18px;
    padding-top: 18px;
  }

  @media (min-width: 1280px) {
    margin-bottom: 0;
  }
`,E=({text:i,onClick:r})=>t.jsx(B,{onClick:r,children:i}),R=s.p`
  margin-bottom: 20px;
  margin-top: 8px;
  color: var(--subTitle-color);
  font-size: 12px;
  font-weight: 400;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`,A=s.p`
  @media (max-width: 374px) {
    width: 310px;
  }

  margin-bottom: 40px;
  width: 335px;
  color: var(--text-color);
  font-size: 14px;
  font-weight: 400;

  @media (min-width: 768px) {
    width: 593px;
    font-size: 16px;
  }
`,_=s.div`
  margin-top: 80px;
  margin-bottom: 80px;

  @media (min-width: 768px) {
    margin-top: 140px;
  }

  @media (min-width: 1280px) {
    margin-top: 132px;
    margin-bottom: 100px;
    display: flex;
    justify-content: space-between;
  }
`,G=s.img`
width: 335px;
height: 400px;


@media (min-width: 768px) {
    width: 704px;
    height: 400px;
    object-fit: cover;
    object-position: center top;
}

@media (min-width: 1280px) {
    width: 400px;
    height: 400px;

}
`,H=({photo:i})=>t.jsx(G,{src:i}),K=({coctailInfo:i})=>{const r=f(T),o=i!==null?i.drink:"",d=i!==null?i.glass:"",m=i!==null?i.alcoholic:"",c=i!==null?i.shortDescription:"",n=i!==null?i.drinkThumb:"image",e=i!==null?i._id:"",a=j(),[p,l]=x.useState(!1);x.useEffect(()=>{r.find(w=>w._id===e)&&l(!0)},[r,e]);const b=()=>{a(p?k(e):v(e)),l(!p)};return t.jsxs(_,{children:[t.jsxs("div",{children:[t.jsx(D,{title:o,style:{marginBottom:"10px"}}),t.jsxs(R,{children:[d," / ",m]}),t.jsxs(A,{children:[c," "]}),t.jsx(E,{text:p?"Remove from favorites":"Add to favorite drinks",onClick:b})]}),t.jsx(H,{photo:n})]})},N="/drinkMaster-Team-1/assets/desktop@1x-8eda6905.jpg",O="/drinkMaster-Team-1/assets/desktop@2x-0896e2bb.jpg",q="/drinkMaster-Team-1/assets/tablet@1x-1ce56edb.jpg",J="/drinkMaster-Team-1/assets/tablet@2x-11f63109.jpg",g="/drinkMaster-Team-1/assets/mob@1x-b65eaffd.jpg",Q="/drinkMaster-Team-1/assets/mob@2x-d2eb580b.jpg",U=s.img`
@media (min-width: 1280px) {
 width: 631;
}
@media (min-width: 768px) {
    width: 704;
}
@media (min-width: 375px) {
    width: 335;
}
`,V=()=>t.jsxs("picture",{children:[t.jsx("source",{media:"(min-width: 1280px)",srcSet:`${N}, ${O} 2x`,type:"image/jpg"}),t.jsx("source",{media:"(min-width: 768px)",srcSet:`${q}, ${J} 2x`,type:"image/jpg"}),t.jsx("source",{media:"(min-width: 375px)",srcSet:`${g}, ${Q} 2x`,type:"image/jpg"}),t.jsx(U,{src:g,alt:"Coctails"})]}),W=s.div`
  margin-bottom: 80px;
  @media (min-width: 768px) {
    margin-bottom: 140px;
  }
  @media (min-width: 1280px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`,X=s.h3`
  margin-bottom: 40px;
  font-size: 28px;
`,h=s.p`
  @media (max-width: 374px) {
    width: 300px;
  }

  width: 335px;
  color: var(--text-color);
  font-size: 14px;
  font-weight: 400;
  line-height: 1.28;
  margin-bottom: 40px;

  @media (min-width: 768px) {
    width: 704px;
    line-height: 1.37;
  }

  @media (min-width: 1280px) {
    width: 549px;
    font-size: 16px;
    margin-bottom: 0;
  }
`,Y=({coctailInfo:i})=>{const r=i!==null?i.instructions:"",o=i!==null?i.description:"";return t.jsxs(t.Fragment,{children:[t.jsx(X,{children:"Recipe Preparation"}),t.jsxs(W,{children:[t.jsxs("div",{children:[t.jsxs(h,{style:{marginBottom:40},children:[" ",o," "]}),t.jsxs(h,{children:[" ",r," "]})]}),t.jsx(V,{})]})]})},Z=()=>{const[i,r]=x.useState(null),[o,d]=x.useState(!1),{drinkId:m}=u();return x.useEffect(()=>{d(!0),(async()=>{try{const n=await z(m);r(n)}catch(n){console.error(n.message)}finally{d(!1)}})()},[m]),o?t.jsx(I,{}):t.jsxs(t.Fragment,{children:[t.jsx(K,{coctailInfo:i}),t.jsx(L,{coctailInfo:i}),t.jsx(Y,{coctailInfo:i})]})},ot=()=>{const{drinkId:i}=u();return t.jsx(Z,{id:i})};export{ot as default};
