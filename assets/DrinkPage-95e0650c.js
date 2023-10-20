import{s,j as t,r as x,C as b,b as j,H as v,N as k,O as w,a as y}from"./index-8d00d9da.js";import{a as D}from"./operationsFilters-0a0b5b49.js";import{P as T}from"./PageTitle-90dee22d.js";import{b as z}from"./favoriteSelectors-c82fd15c.js";import{c as I}from"./operationsDrinks-28f9d68c.js";import{T as P}from"./Hourglass-730f7eb2.js";const S=s.li`


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
`,C=s.div`
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
`,F="/drinkMaster-Team-1/assets/coctailPlaceholder-13631aa6.png",M=({photo:i,title:o,measure:r})=>t.jsxs(S,{children:[t.jsx(C,{children:t.jsx("img",{src:i||F})}),t.jsxs("div",{children:[t.jsx("p",{children:o}),t.jsx("span",{children:r})]})]}),$=s.p`
  color: var(--whitefifty-color);
  font-size: 16px;
  margin-bottom: 42px;

  @media (min-width: 768px) {
    margin-bottom: 24px;
  }
`,E=s.ul`


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
`,L=({coctailInfo:i})=>{const[o,r]=x.useState([]),d=i!==null?i.ingredients:[],c=d.map(n=>n.ingredientId);x.useEffect(()=>{(async()=>{try{const e=await D();if(e.length!==0){const a=e.filter(p=>c.includes(p._id));r(a)}}catch(e){console.log(e.message)}})()},[i]);const m=d.map(n=>{const e=o.find(a=>a._id===n.ingredientId);return{...n,ingredientThumb:e?e.ingredientThumb:null}});return t.jsxs(t.Fragment,{children:[t.jsx($,{children:"Ingredients"}),t.jsx(E,{children:m.map(({title:n,measure:e,ingredientId:a,ingredientThumb:p})=>t.jsx(M,{title:n,measure:e,photo:p},a))})]})},R=s.button`


@media (max-width: 374px) {
      margin-left: 40px;
      
    }

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
    color var(--transition);



  &:hover {
    background-color: var(--blue-color);
    color: var(--white-color);
  }

  &:active {
    background-color: var(--blue-color);
    color: var(--white-color);
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
`,A=({text:i,onClick:o})=>t.jsx(R,{onClick:o,children:i}),B=s.p`

  margin-bottom: 20px;
  margin-top: 8px;
  color: var(--whitefifty-color);
  font-size: 12px;
  font-weight: 400;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`,_=s.p`

@media (max-width: 374px) {
    width: 310px;
  }

  margin-bottom: 40px;
  width: 335px;
  color: var(--white-color);
  font-size: 14px;
  font-weight: 200;

  @media (min-width: 768px) {
    width: 593px;
    font-size: 16px;
  }
`,H=s.div`
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
`,O=s.img`
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
`,N=({photo:i})=>t.jsx(O,{src:i}),q=({coctailInfo:i})=>{const o=b(z),r=i!==null?i.drink:"",d=i!==null?i.glass:"",c=i!==null?i.alcoholic:"",m=i!==null?i.shortDescription:"",n=i!==null?i.drinkThumb:"image",e=i!==null?i._id:"",a=j(),[p,l]=x.useState(!1);x.useEffect(()=>{o.find(f=>f._id===e)&&l(!0)},[o,e]);const u=()=>{a(p?v(e):k(e)),l(!p)};return t.jsxs(H,{children:[t.jsxs("div",{children:[t.jsx(T,{title:r,style:{marginBottom:"10px"}}),t.jsxs(B,{children:[d," / ",c]}),t.jsxs(_,{children:[m," "]}),t.jsx(A,{text:p?"Remove from favorites":"Add to favorite drinks",onClick:u})]}),t.jsx(N,{photo:n})]})},G="/drinkMaster-Team-1/assets/desktop@1x-8eda6905.jpg",J="/drinkMaster-Team-1/assets/desktop@2x-0896e2bb.jpg",K="/drinkMaster-Team-1/assets/tablet@1x-1ce56edb.jpg",Q="/drinkMaster-Team-1/assets/tablet@2x-11f63109.jpg",h="/drinkMaster-Team-1/assets/mob@1x-b65eaffd.jpg",U="/drinkMaster-Team-1/assets/mob@2x-d2eb580b.jpg",V=s.img`
@media (min-width: 1280px) {
 width: 631;
}
@media (min-width: 768px) {
    width: 704;
}
@media (min-width: 375px) {
    width: 335;
}
`,W=()=>t.jsxs("picture",{children:[t.jsx("source",{media:"(min-width: 1280px)",srcSet:`${G}, ${J} 2x`,type:"image/jpg"}),t.jsx("source",{media:"(min-width: 768px)",srcSet:`${K}, ${Q} 2x`,type:"image/jpg"}),t.jsx("source",{media:"(min-width: 375px)",srcSet:`${h}, ${U} 2x`,type:"image/jpg"}),t.jsx(V,{src:h,alt:"Coctails"})]}),X=s.div`
  margin-bottom: 80px;
  @media (min-width: 768px) {
    margin-bottom: 140px;
  }
  @media (min-width: 1280px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`,Y=s.h3`
  margin-bottom: 40px;
  font-size: 28px;
`,g=s.p`
  @media (max-width: 374px) {
    width: 300px;
  }
  
  width: 335px;
  color: var(--white-color);
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
`,Z=({coctailInfo:i})=>{const o=i!==null?i.instructions:"",r=i!==null?i.description:"";return t.jsxs(t.Fragment,{children:[t.jsx(Y,{children:"Recipe Preparation"}),t.jsxs(X,{children:[t.jsxs("div",{children:[t.jsxs(g,{style:{marginBottom:40},children:[" ",r," "]}),t.jsxs(g,{children:[" ",o," "]})]}),t.jsx(W,{})]})]})},tt=()=>{const[i,o]=x.useState(null),[r,d]=x.useState(!1),{drinkId:c}=w();return x.useEffect(()=>{d(!0),(async()=>{try{const n=await I(c);o(n)}catch(n){console.error(n.message)}finally{d(!1)}})()},[c]),r?t.jsx(y,{children:t.jsx(P,{color:"#f3f3f3",width:"80"})}):t.jsxs(t.Fragment,{children:[t.jsx(q,{coctailInfo:i}),t.jsx(L,{coctailInfo:i}),t.jsx(Z,{coctailInfo:i})]})},at=()=>{const{drinkId:i}=w();return t.jsx(tt,{id:i})};export{at as default};
