import{s as n,c as i,j as t,r as x,y as j,x as k,C as y,H as $,I as b,A as v,T as D}from"./index-0a375c73.js";import{a as T}from"./operationsFilters-6d8acc24.js";import{P as z}from"./PageTitle-572725e0.js";import{s as I}from"./favoriteSelectors-b4361c0f.js";import{b as P}from"./operationsDrinks-0c113f9a.js";const F=n.li`
  /* margin: 0; */

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
    color: ${i.colorWhite};
  }

  span {
    font-size: 14px;
    color: ${i.colorWhiteFifty};
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
`,S=n.div`
  margin-bottom: 8px;
border-radius:8px;
  width: 157px;
  height: 157px;
  padding: 25px;
  background-color: ${i.colorBlue};

  @media (min-width: 768px) {
    width: 220px;
    height: 220px;
    padding: 22px;
    
  }
`,W="/drinkMaster-Team-1/assets/coctailPlaceholder-13631aa6.png",B=({photo:e,title:r,measure:a})=>t.jsxs(F,{children:[t.jsx(S,{children:t.jsx("img",{src:e||W})}),t.jsxs("div",{children:[t.jsx("p",{children:r}),t.jsx("span",{children:a})]})]}),C=n.p`
  color: ${i.colorWhiteFifty};
  font-size: 16px;
  margin-bottom: 42px;

  @media (min-width: 768px) {
    margin-bottom: 24px;
  }
`,M=n.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 21px;
  margin-bottom: 80px;

  @media (min-width: 768px) {
    gap: 22px;
  }

  @media (min-width: 1440px) {
    margin-bottom: 100px;
    gap: 35px;
  }
`,A=({coctailInfo:e})=>{const[r,a]=x.useState([]),c=e!==null?e.ingredients:[],m=c.map(o=>o.ingredientId);x.useEffect(()=>{(async()=>{try{const s=await T();if(s.length!==0){const d=s.filter(p=>m.includes(p._id));a(d)}}catch(s){console.log(s.message)}})()},[e]);const l=c.map(o=>{const s=r.find(d=>d._id===o.ingredientId);return{...o,ingredientThumb:s?s.ingredientThumb:null}});return t.jsxs(t.Fragment,{children:[t.jsx(C,{children:"Ingredients"}),t.jsx(M,{children:l.map(({title:o,measure:s,ingredientId:d,ingredientThumb:p})=>t.jsx(B,{title:o,measure:s,photo:p},d))})]})},E=n.button`
  width: 222px;
  color: ${i.colorBlue};
  background-color: ${i.colorWhite};
  border-radius: 42px;
  border-color: transparent;
  font-size: 14px;
  font-weight: 600;
  padding-bottom: 14px;
  padding-top: 14px;
  margin-bottom: 80px;
  transition:
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: ${i.colorBlue};
    color: ${i.colorWhite};
  }

  /* &:focus {
    background-color: ${i.colorBlue};
    color: ${i.colorWhite};
  }  */

  &:active {
    background-color: ${i.colorBlue};
    color: ${i.colorWhite};
    box-shadow: 0 0 10px ${i.colorWhiteFifty};
  }

  @media (min-width: 768px) {
    width: 250px;
    font-size: 16px;
    padding-bottom: 18px;
    padding-top: 18px;
  }

  @media (min-width: 1440px) {
    margin-bottom: 0;
  }
`,L=({text:e,onClick:r})=>t.jsx(E,{onClick:r,children:e}),R=n.p`
  margin-bottom: 20px;
  margin-top: 8px;
  color: ${i.colorWhiteFifty};
  font-size: 12px;
  font-weight: 400;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`,_=n.p`
  margin-bottom: 40px;
  width: 335px;
  color: ${i.colorWhite};
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


  @media (min-width: 1440px) {
    margin-top: 132px;
    margin-bottom: 100px;
    display: flex;
    justify-content: space-between;
  }
`,O=n.img`
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
`,q=({photo:e})=>t.jsx(O,{src:e}),G=({coctailInfo:e})=>{const r=j(I),a=e!==null?e.drink:"",c=e!==null?e.glass:"",m=e!==null?e.alcoholic:"",l=e!==null?e.shortDescription:"",o=e!==null?e.drinkThumb:"image",s=e!==null?e._id:"",d=k(),[p,h]=x.useState(!1);x.useEffect(()=>{r.find(w=>w._id===s)&&h(!0)},[r,s]);const f=()=>{d(p?y(s):$(s)),h(!p)};return t.jsxs(H,{children:[t.jsxs("div",{children:[t.jsx(z,{title:a,style:{marginBottom:"10px"}}),t.jsxs(R,{children:[c," / ",m]}),t.jsxs(_,{children:[l," "]}),t.jsx(L,{text:p?"Remove from favorites":"Add to favorite drinks",onClick:f})]}),t.jsx(q,{photo:o})]})},J="/drinkMaster-Team-1/assets/desktop@1x-8eda6905.jpg",K="/drinkMaster-Team-1/assets/desktop@2x-0896e2bb.jpg",N="/drinkMaster-Team-1/assets/tablet@1x-1ce56edb.jpg",Q="/drinkMaster-Team-1/assets/tablet@2x-11f63109.jpg",g="/drinkMaster-Team-1/assets/mob@1x-b65eaffd.jpg",U="/drinkMaster-Team-1/assets/mob@2x-d2eb580b.jpg",V=n.img`
@media (min-width: 1440px) {
 width: 631;
}
@media (min-width: 768px) {
    width: 704;
}
@media (min-width: 375px) {
    width: 335;
}
`,X=()=>t.jsxs("picture",{children:[t.jsx("source",{media:"(min-width: 1440px)",srcSet:`${J}, ${K} 2x`,type:"image/jpg"}),t.jsx("source",{media:"(min-width: 768px)",srcSet:`${N}, ${Q} 2x`,type:"image/jpg"}),t.jsx("source",{media:"(min-width: 375px)",srcSet:`${g}, ${U} 2x`,type:"image/jpg"}),t.jsx(V,{src:g,alt:"Coctails"})]}),Y=n.div`
  @media (min-width: 1440px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`,Z=n.h3`
  margin-bottom: 40px;
  font-size: 28px;
`,u=n.p`

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
`,tt=({coctailInfo:e})=>{const r=e!==null?e.instructions:"",a=e!==null?e.description:"";return t.jsxs(t.Fragment,{children:[t.jsx(Z,{children:"Recipe Preparation"}),t.jsxs(Y,{children:[t.jsxs("div",{children:[t.jsxs(u,{style:{marginBottom:40},children:[" ",a," "]}),t.jsxs(u,{children:[" ",r," "]})]}),t.jsx(X,{})]})]})},et=()=>{const[e,r]=x.useState(null),[a,c]=x.useState(!1),{drinkId:m}=b();return x.useEffect(()=>{c(!0),(async()=>{try{const o=await P(m);r(o)}catch(o){console.error(o.message)}finally{c(!1)}})()},[m]),a?t.jsx(v,{children:t.jsx(D,{color:"#f3f3f3",width:"80"})}):t.jsxs(t.Fragment,{children:[t.jsx(G,{coctailInfo:e}),t.jsx(A,{coctailInfo:e}),t.jsx(tt,{coctailInfo:e})]})},at=()=>{const{drinkId:e}=b();return t.jsx(et,{id:e})};export{at as default};
