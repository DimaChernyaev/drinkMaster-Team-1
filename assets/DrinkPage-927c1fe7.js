import{s as n,c as s,j as t,r as p,v as b,t as k,z as y,A as $,B as j}from"./index-22a41d1f.js";import{a as z}from"./operationsFilters-6e82a72f.js";import{P as D}from"./PageTitle-38176964.js";import{s as v}from"./favoriteSelectors-b4361c0f.js";import{b as T}from"./operationsDrinks-9fbf7c6b.js";const C=n.li`
  display: flex;
  justify-content: space-between;
  width: 157px;

  p {
    font-size: 14px;
    color: ${s.colorWhite};
  }

  span {
    font-size: 14px;
    color: ${s.colorWhiteFifty};
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

`,F=({number:e,name:i})=>t.jsxs(C,{children:[t.jsx("p",{children:i}),t.jsx("span",{children:e})]}),I=n.p`
  color: ${s.colorWhiteFifty};
  font-size: 16px;
  margin-bottom: 42px;

  @media (min-width: 768px) {
    margin-bottom: 24px;
  }
`,P=n.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 21px;
  margin-bottom: 80px;

  @media (min-width: 1440px) {
    margin-bottom: 100px;
  }
`,S=({coctailInfo:e})=>{const[i,d]=p.useState([]),c=e!==null?e.ingredients:[],x=c.map(r=>r.ingredientId);return p.useEffect(()=>{(async()=>{try{const o=await z();if(o.length!==0){const a=o.filter(m=>x.includes(m._id));d(a)}}catch(o){console.log(o.message)}})()},[e]),t.jsxs(t.Fragment,{children:[t.jsx(I,{children:"Ingredients"}),t.jsx(P,{children:c.map(({title:r,measure:o,ingredientId:a})=>t.jsx(F,{name:r,number:o},a))}),i.map(({ingredientThumb:r,_id:o})=>t.jsxs("li",{children:[" ",t.jsx("img",{src:r,width:70})," "]},o))]})},W=n.button`

  color: ${s.colorBlue};
  background-color: ${s.colorWhite};
  border-radius: 42px;
  border-color: transparent;
  font-size: 14px;
  font-weight: 600;
  padding: 14px 40px;
  margin-bottom: 80px;

  &:hover {
    background-color: ${s.colorBlue};
    color: ${s.colorWhite};
  }
  &:focus {
    background-color: ${s.colorBlue};
    color: ${s.colorWhite};
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
`,B=({text:e,onClick:i})=>t.jsx(W,{onClick:i,children:e}),A=n.p`
  margin-bottom: 20px;
  margin-top: 8px;
  color: ${s.colorWhiteFifty};
  font-size: 12px;
  font-weight: 400;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`,M=n.p`
  margin-bottom: 40px;
  width: 335px;
  color: ${s.colorWhite};
  font-size: 14px;
  font-weight: 200;

  @media (min-width: 768px) {
    width: 593px;
    font-size: 16px;
  }
`,E=n.div`
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
`,R=n.img`
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
`,_=({photo:e})=>t.jsx(R,{src:e}),L=({coctailInfo:e})=>{const i=b(v),d=e!==null?e.drink:"",c=e!==null?e.glass:"",x=e!==null?e.alcoholic:"",r=e!==null?e.shortDescription:"",o=e!==null?e.drinkThumb:"image",a=e!==null?e._id:"",m=k(),[l,h]=p.useState(!1);p.useEffect(()=>{i.find(w=>w._id===a)&&h(!0)},[i,a]);const f=()=>{m(l?y(a):$(a)),h(!l)};return t.jsxs(E,{children:[t.jsxs("div",{children:[t.jsx(D,{title:d,style:{marginBottom:"10px"}}),t.jsxs(A,{children:[c," / ",x]}),t.jsxs(M,{children:[r," "]}),t.jsx(B,{text:l?"✔ Added to favorites":"Add to favorite drinks",onClick:f})]}),t.jsx(_,{photo:o})]})},H="/drinkMaster-Team-1/assets/desktop@1x-8eda6905.jpg",O="/drinkMaster-Team-1/assets/desktop@2x-0896e2bb.jpg",q="/drinkMaster-Team-1/assets/tablet@1x-1ce56edb.jpg",G="/drinkMaster-Team-1/assets/tablet@2x-11f63109.jpg",g="/drinkMaster-Team-1/assets/mob@1x-b65eaffd.jpg",J="/drinkMaster-Team-1/assets/mob@2x-d2eb580b.jpg",K=n.img`
@media (min-width: 1440px) {
 width: 631;
}
@media (min-width: 768px) {
    width: 704;
}
@media (min-width: 375px) {
    width: 335;
}
`,N=()=>t.jsxs("picture",{children:[t.jsx("source",{media:"(min-width: 1440px)",srcSet:`${H}, ${O} 2x`,type:"image/jpg"}),t.jsx("source",{media:"(min-width: 768px)",srcSet:`${q}, ${G} 2x`,type:"image/jpg"}),t.jsx("source",{media:"(min-width: 375px)",srcSet:`${g}, ${J} 2x`,type:"image/jpg"}),t.jsx(K,{src:g,alt:"Coctails"})]}),Q=n.div`
  @media (min-width: 1440px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`,U=n.h3`
  margin-bottom: 40px;
  font-size: 28px;
`,u=n.p`

    width: 335px;
    color: ${s.colorWhite};
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
`,V=({coctailInfo:e})=>{const i=e!==null?e.instructions:"",d=e!==null?e.description:"";return t.jsxs(t.Fragment,{children:[t.jsx(U,{children:"Recipe Preparation"}),t.jsxs(Q,{children:[t.jsxs("div",{children:[t.jsxs(u,{style:{marginBottom:40},children:[" ",d," "]}),t.jsxs(u,{children:[" ",i," "]})]}),t.jsx(N,{})]})]})},X=()=>{const[e,i]=p.useState(null),{drinkId:d}=j();return p.useEffect(()=>{(async()=>{const x=await T(d);i(x)})()},[]),t.jsxs(t.Fragment,{children:[t.jsx(L,{coctailInfo:e}),t.jsx(S,{coctailInfo:e}),t.jsx(V,{coctailInfo:e})]})},st=()=>{const{drinkId:e}=j();return t.jsx(X,{id:e})};export{st as default};
