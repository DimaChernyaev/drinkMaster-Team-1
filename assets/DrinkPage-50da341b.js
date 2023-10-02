import{s,j as t,r as c,z as f,b as j,C as v,I as k,J as w,a as y}from"./index-40fe4082.js";import{a as D}from"./operationsFilters-148c35e4.js";import{P as T}from"./PageTitle-c8f92636.js";import{b as z}from"./favoriteSelectors-c82fd15c.js";import{c as I}from"./operationsDrinks-c26afdd0.js";import{T as P}from"./Hourglass-80bd0198.js";const S=s.li`


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
`,F="/drinkMaster-Team-1/assets/coctailPlaceholder-13631aa6.png",M=({photo:e,title:o,measure:r})=>t.jsxs(S,{children:[t.jsx(C,{children:t.jsx("img",{src:e||F})}),t.jsxs("div",{children:[t.jsx("p",{children:o}),t.jsx("span",{children:r})]})]}),$=s.p`
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

  @media (min-width: 768px) {
    gap: 22px;
  }

  @media (min-width: 1280px) {
    margin-bottom: 100px;
    gap: 35px;
  }
`,L=({coctailInfo:e})=>{const[o,r]=c.useState([]),d=e!==null?e.ingredients:[],x=d.map(n=>n.ingredientId);c.useEffect(()=>{(async()=>{try{const i=await D();if(i.length!==0){const a=i.filter(p=>x.includes(p._id));r(a)}}catch(i){console.log(i.message)}})()},[e]);const m=d.map(n=>{const i=o.find(a=>a._id===n.ingredientId);return{...n,ingredientThumb:i?i.ingredientThumb:null}});return t.jsxs(t.Fragment,{children:[t.jsx($,{children:"Ingredients"}),t.jsx(E,{children:m.map(({title:n,measure:i,ingredientId:a,ingredientThumb:p})=>t.jsx(M,{title:n,measure:i,photo:p},a))})]})},R=s.button`
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
`,A=({text:e,onClick:o})=>t.jsx(R,{onClick:o,children:e}),B=s.p`
  margin-bottom: 20px;
  margin-top: 8px;
  color: var(--whitefifty-color);
  font-size: 12px;
  font-weight: 400;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`,_=s.p`
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
`,J=s.img`
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
`,O=({photo:e})=>t.jsx(J,{src:e}),q=({coctailInfo:e})=>{const o=f(z),r=e!==null?e.drink:"",d=e!==null?e.glass:"",x=e!==null?e.alcoholic:"",m=e!==null?e.shortDescription:"",n=e!==null?e.drinkThumb:"image",i=e!==null?e._id:"",a=j(),[p,l]=c.useState(!1);c.useEffect(()=>{o.find(b=>b._id===i)&&l(!0)},[o,i]);const u=()=>{a(p?v(i):k(i)),l(!p)};return t.jsxs(H,{children:[t.jsxs("div",{children:[t.jsx(T,{title:r,style:{marginBottom:"10px"}}),t.jsxs(B,{children:[d," / ",x]}),t.jsxs(_,{children:[m," "]}),t.jsx(A,{text:p?"Remove from favorites":"Add to favorite drinks",onClick:u})]}),t.jsx(O,{photo:n})]})},G="/drinkMaster-Team-1/assets/desktop@1x-8eda6905.jpg",K="/drinkMaster-Team-1/assets/desktop@2x-0896e2bb.jpg",N="/drinkMaster-Team-1/assets/tablet@1x-1ce56edb.jpg",Q="/drinkMaster-Team-1/assets/tablet@2x-11f63109.jpg",h="/drinkMaster-Team-1/assets/mob@1x-b65eaffd.jpg",U="/drinkMaster-Team-1/assets/mob@2x-d2eb580b.jpg",V=s.img`
@media (min-width: 1280px) {
 width: 631;
}
@media (min-width: 768px) {
    width: 704;
}
@media (min-width: 375px) {
    width: 335;
}
`,W=()=>t.jsxs("picture",{children:[t.jsx("source",{media:"(min-width: 1280px)",srcSet:`${G}, ${K} 2x`,type:"image/jpg"}),t.jsx("source",{media:"(min-width: 768px)",srcSet:`${N}, ${Q} 2x`,type:"image/jpg"}),t.jsx("source",{media:"(min-width: 375px)",srcSet:`${h}, ${U} 2x`,type:"image/jpg"}),t.jsx(V,{src:h,alt:"Coctails"})]}),X=s.div`
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
`,Z=({coctailInfo:e})=>{const o=e!==null?e.instructions:"",r=e!==null?e.description:"";return t.jsxs(t.Fragment,{children:[t.jsx(Y,{children:"Recipe Preparation"}),t.jsxs(X,{children:[t.jsxs("div",{children:[t.jsxs(g,{style:{marginBottom:40},children:[" ",r," "]}),t.jsxs(g,{children:[" ",o," "]})]}),t.jsx(W,{})]})]})},tt=()=>{const[e,o]=c.useState(null),[r,d]=c.useState(!1),{drinkId:x}=w();return c.useEffect(()=>{d(!0),(async()=>{try{const n=await I(x);o(n)}catch(n){console.error(n.message)}finally{d(!1)}})()},[x]),r?t.jsx(y,{children:t.jsx(P,{color:"#f3f3f3",width:"80"})}):t.jsxs(t.Fragment,{children:[t.jsx(q,{coctailInfo:e}),t.jsx(L,{coctailInfo:e}),t.jsx(Z,{coctailInfo:e})]})},at=()=>{const{drinkId:e}=w();return t.jsx(tt,{id:e})};export{at as default};
