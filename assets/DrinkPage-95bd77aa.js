import{s as o,c as n,j as t,r as p,v as w,t as k,z as v,A as y,B as j}from"./index-5d4b85d7.js";import{a as $}from"./operationsFilters-cecc219f.js";import{P as D}from"./PageTitle-e4fd7ca6.js";import{s as z}from"./favoriteSelectors-b4361c0f.js";import{b as T}from"./operationsDrinks-56b83c26.js";const I=o.li`
  margin: 0;

  div {
    display: flex;
    justify-content: space-between;
    width: 157px;
  }

  img {
    width: 157px;
    height: 157px;
    margin-bottom: 8px;
  }

  p {
    font-size: 14px;
    color: ${n.colorWhite};
  }

  span {
    font-size: 14px;
    color: ${n.colorWhiteFifty};
  }

  @media (min-width: 768px) {
    div {
      width: 220px;
    }
    img {
      width: 220px;
      height: 220px;
      margin-bottom: 14px;
    }
    p {
      font-size: 18px;
    }

    span {
      font-size: 16px;
    }
  }
`,P="/drinkMaster-Team-1/assets/coctailPlaceholder-13631aa6.png",C=({photo:e,title:s,measure:r})=>(console.log(e),t.jsxs(I,{children:[t.jsx("img",{src:e||P}),t.jsxs("div",{children:[t.jsx("p",{children:s}),t.jsx("span",{children:r})]})]})),F=o.p`
  color: ${n.colorWhiteFifty};
  font-size: 16px;
  margin-bottom: 42px;

  @media (min-width: 768px) {
    margin-bottom: 24px;
  }
`,S=o.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 21px;
  margin-bottom: 80px;

  @media (min-width: 1440px) {
    margin-bottom: 100px;
  }
`,W=({coctailInfo:e})=>{const[s,r]=p.useState([]),m=e!==null?e.ingredients:[],x=m.map(a=>a.ingredientId);p.useEffect(()=>{(async()=>{try{const i=await $();if(i.length!==0){const d=i.filter(c=>x.includes(c._id));r(d)}}catch(i){console.log(i.message)}})()},[e]);const l=m.map(a=>{const i=s.find(d=>d._id===a.ingredientId);return{...a,ingredientThumb:i?i.ingredientThumb:null}});return t.jsxs(t.Fragment,{children:[t.jsx(F,{children:"Ingredients"}),t.jsx(S,{children:l.map(({title:a,measure:i,ingredientId:d,ingredientThumb:c})=>t.jsx(C,{title:a,measure:i,photo:c},d))})]})},B=o.button`

  color: ${n.colorBlue};
  background-color: ${n.colorWhite};
  border-radius: 42px;
  border-color: transparent;
  font-size: 14px;
  font-weight: 600;
  padding: 14px 40px;
  margin-bottom: 80px;

  &:hover {
    background-color: ${n.colorBlue};
    color: ${n.colorWhite};
  }
  &:focus {
    background-color: ${n.colorBlue};
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
`,M=({text:e,onClick:s})=>t.jsx(B,{onClick:s,children:e}),A=o.p`
  margin-bottom: 20px;
  margin-top: 8px;
  color: ${n.colorWhiteFifty};
  font-size: 12px;
  font-weight: 400;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`,E=o.p`
  margin-bottom: 40px;
  width: 335px;
  color: ${n.colorWhite};
  font-size: 14px;
  font-weight: 200;

  @media (min-width: 768px) {
    width: 593px;
    font-size: 16px;
  }
`,R=o.div`
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
`,_=o.img`
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
`,L=({photo:e})=>t.jsx(_,{src:e}),H=({coctailInfo:e})=>{const s=w(z),r=e!==null?e.drink:"",m=e!==null?e.glass:"",x=e!==null?e.alcoholic:"",l=e!==null?e.shortDescription:"",a=e!==null?e.drinkThumb:"image",i=e!==null?e._id:"",d=k(),[c,g]=p.useState(!1);p.useEffect(()=>{s.find(b=>b._id===i)&&g(!0)},[s,i]);const f=()=>{d(c?v(i):y(i)),g(!c)};return t.jsxs(R,{children:[t.jsxs("div",{children:[t.jsx(D,{title:r,style:{marginBottom:"10px"}}),t.jsxs(A,{children:[m," / ",x]}),t.jsxs(E,{children:[l," "]}),t.jsx(M,{text:c?"Remove from favorites":"Add to favorite drinks",onClick:f})]}),t.jsx(L,{photo:a})]})},O="/drinkMaster-Team-1/assets/desktop@1x-8eda6905.jpg",q="/drinkMaster-Team-1/assets/desktop@2x-0896e2bb.jpg",G="/drinkMaster-Team-1/assets/tablet@1x-1ce56edb.jpg",J="/drinkMaster-Team-1/assets/tablet@2x-11f63109.jpg",h="/drinkMaster-Team-1/assets/mob@1x-b65eaffd.jpg",K="/drinkMaster-Team-1/assets/mob@2x-d2eb580b.jpg",N=o.img`
@media (min-width: 1440px) {
 width: 631;
}
@media (min-width: 768px) {
    width: 704;
}
@media (min-width: 375px) {
    width: 335;
}
`,Q=()=>t.jsxs("picture",{children:[t.jsx("source",{media:"(min-width: 1440px)",srcSet:`${O}, ${q} 2x`,type:"image/jpg"}),t.jsx("source",{media:"(min-width: 768px)",srcSet:`${G}, ${J} 2x`,type:"image/jpg"}),t.jsx("source",{media:"(min-width: 375px)",srcSet:`${h}, ${K} 2x`,type:"image/jpg"}),t.jsx(N,{src:h,alt:"Coctails"})]}),U=o.div`
  @media (min-width: 1440px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`,V=o.h3`
  margin-bottom: 40px;
  font-size: 28px;
`,u=o.p`

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
`,X=({coctailInfo:e})=>{const s=e!==null?e.instructions:"",r=e!==null?e.description:"";return t.jsxs(t.Fragment,{children:[t.jsx(V,{children:"Recipe Preparation"}),t.jsxs(U,{children:[t.jsxs("div",{children:[t.jsxs(u,{style:{marginBottom:40},children:[" ",r," "]}),t.jsxs(u,{children:[" ",s," "]})]}),t.jsx(Q,{})]})]})},Y=()=>{const[e,s]=p.useState(null),{drinkId:r}=j();return p.useEffect(()=>{(async()=>{const x=await T(r);s(x)})()},[]),t.jsxs(t.Fragment,{children:[t.jsx(H,{coctailInfo:e}),t.jsx(W,{coctailInfo:e})," ",t.jsx(X,{coctailInfo:e})]})},nt=()=>{const{drinkId:e}=j();return t.jsx(Y,{id:e})};export{nt as default};
