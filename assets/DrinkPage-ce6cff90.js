import{s as n,j as t,r as c,A as f,z as j,D as v,I as k,J as u,a as y,T as D}from"./index-5ff4eabe.js";import{a as T}from"./operationsFilters-9e30a048.js";import{P as z}from"./PageTitle-6cc4ac3a.js";import{s as I}from"./favoriteSelectors-b4361c0f.js";import{b as P}from"./operationsDrinks-c9374ad6.js";const S=n.li`


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
    color:  var(--white-color);
  }

  span {
    font-size: 14px;
    color: var(--whitefifty-color);
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
`,C=n.div`
  margin-bottom: 8px;
border-radius:8px;
  width: 157px;
  height: 157px;
  padding: 25px;
  background-color:  var(--blue-color);

  @media (min-width: 768px) {
    width: 220px;
    height: 220px;
    padding: 22px;
    
  }
`,F="/drinkMaster-Team-1/assets/coctailPlaceholder-13631aa6.png",M=({photo:e,title:o,measure:r})=>t.jsxs(S,{children:[t.jsx(C,{children:t.jsx("img",{src:e||F})}),t.jsxs("div",{children:[t.jsx("p",{children:o}),t.jsx("span",{children:r})]})]}),$=n.p`
  color: var(--whitefifty-color);
  font-size: 16px;
  margin-bottom: 42px;

  @media (min-width: 768px) {
    margin-bottom: 24px;
  }
`,A=n.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 21px;
  margin-bottom: 80px;

  @media (min-width: 768px) {
    gap: 22px;
  }

  @media (min-width: 1280px) {
    margin-bottom: 100px;
    gap: 35px;
  }
`,E=({coctailInfo:e})=>{const[o,r]=c.useState([]),d=e!==null?e.ingredients:[],x=d.map(s=>s.ingredientId);c.useEffect(()=>{(async()=>{try{const i=await T();if(i.length!==0){const a=i.filter(p=>x.includes(p._id));r(a)}}catch(i){console.log(i.message)}})()},[e]);const m=d.map(s=>{const i=o.find(a=>a._id===s.ingredientId);return{...s,ingredientThumb:i?i.ingredientThumb:null}});return t.jsxs(t.Fragment,{children:[t.jsx($,{children:"Ingredients"}),t.jsx(A,{children:m.map(({title:s,measure:i,ingredientId:a,ingredientThumb:p})=>t.jsx(M,{title:s,measure:i,photo:p},a))})]})},L=n.button`
  width: 222px;
  color: var(--blue-color);
  background-color: var(--white-color);
  border-radius: 42px;
  border-color: transparent;
  font-size: 14px;
  font-weight: 600;
  padding-bottom: 14px;
  padding-top: 14px;
  margin-bottom: 80px;
  transition:
    background-color var(--transition),
    color var(--transition),
    box-shadow var(--transition);

  &:hover {
    background-color: var(--blue-color);
    color: var(--white-color);
  }

  &:active {
    background-color:  var(--blue-color);
    color:  var(--white-color);
    box-shadow: 0 0 10px  var(--whitefifty-color);
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
`,R=({text:e,onClick:o})=>t.jsx(L,{onClick:o,children:e}),B=n.p`
  margin-bottom: 20px;
  margin-top: 8px;
  color: var(--whitefifty-color);
  font-size: 12px;
  font-weight: 400;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`,_=n.p`
  margin-bottom: 40px;
  width: 335px;
  color: var(--white-color);
  font-size: 14px;
  font-weight: 200;

  @media (min-width: 768px) {
    width: 593px;
    font-size: 16px;
  }
`,H=n.div`
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
`,J=n.img`
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
`,O=({photo:e})=>t.jsx(J,{src:e}),q=({coctailInfo:e})=>{const o=f(I),r=e!==null?e.drink:"",d=e!==null?e.glass:"",x=e!==null?e.alcoholic:"",m=e!==null?e.shortDescription:"",s=e!==null?e.drinkThumb:"image",i=e!==null?e._id:"",a=j(),[p,l]=c.useState(!1);c.useEffect(()=>{o.find(b=>b._id===i)&&l(!0)},[o,i]);const w=()=>{a(p?v(i):k(i)),l(!p)};return t.jsxs(H,{children:[t.jsxs("div",{children:[t.jsx(z,{title:r,style:{marginBottom:"10px"}}),t.jsxs(B,{children:[d," / ",x]}),t.jsxs(_,{children:[m," "]}),t.jsx(R,{text:p?"Remove from favorites":"Add to favorite drinks",onClick:w})]}),t.jsx(O,{photo:s})]})},G="/drinkMaster-Team-1/assets/desktop@1x-8eda6905.jpg",K="/drinkMaster-Team-1/assets/desktop@2x-0896e2bb.jpg",N="/drinkMaster-Team-1/assets/tablet@1x-1ce56edb.jpg",Q="/drinkMaster-Team-1/assets/tablet@2x-11f63109.jpg",h="/drinkMaster-Team-1/assets/mob@1x-b65eaffd.jpg",U="/drinkMaster-Team-1/assets/mob@2x-d2eb580b.jpg",V=n.img`
@media (min-width: 1280px) {
 width: 631;
}
@media (min-width: 768px) {
    width: 704;
}
@media (min-width: 375px) {
    width: 335;
}
`,W=()=>t.jsxs("picture",{children:[t.jsx("source",{media:"(min-width: 1280px)",srcSet:`${G}, ${K} 2x`,type:"image/jpg"}),t.jsx("source",{media:"(min-width: 768px)",srcSet:`${N}, ${Q} 2x`,type:"image/jpg"}),t.jsx("source",{media:"(min-width: 375px)",srcSet:`${h}, ${U} 2x`,type:"image/jpg"}),t.jsx(V,{src:h,alt:"Coctails"})]}),X=n.div`
  @media (min-width: 1280px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`,Y=n.h3`
  margin-bottom: 40px;
  font-size: 28px;
`,g=n.p`

    width: 335px;
    color:  var(--white-color);
    font-size: 14px;
    margin-bottom: 40px;

  @media (min-width: 768px) {
    width: 704px;
  }

  @media (min-width: 1280px) {
    width: 549px;
    font-size: 16px;
    margin-bottom: 0;
  }
`,Z=({coctailInfo:e})=>{const o=e!==null?e.instructions:"",r=e!==null?e.description:"";return t.jsxs(t.Fragment,{children:[t.jsx(Y,{children:"Recipe Preparation"}),t.jsxs(X,{children:[t.jsxs("div",{children:[t.jsxs(g,{style:{marginBottom:40},children:[" ",r," "]}),t.jsxs(g,{children:[" ",o," "]})]}),t.jsx(W,{})]})]})},tt=()=>{const[e,o]=c.useState(null),[r,d]=c.useState(!1),{drinkId:x}=u();return c.useEffect(()=>{d(!0),(async()=>{try{const s=await P(x);o(s)}catch(s){console.error(s.message)}finally{d(!1)}})()},[x]),r?t.jsx(y,{children:t.jsx(D,{color:"#f3f3f3",width:"80"})}):t.jsxs(t.Fragment,{children:[t.jsx(q,{coctailInfo:e}),t.jsx(E,{coctailInfo:e}),t.jsx(Z,{coctailInfo:e})]})},rt=()=>{const{drinkId:e}=u();return t.jsx(tt,{id:e})};export{rt as default};
