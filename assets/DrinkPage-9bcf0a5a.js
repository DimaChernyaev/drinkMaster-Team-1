import{s,c as i,j as t,r as p,p as f,o as k,w as $,x as y,y as b}from"./index-08481174.js";import{a as v}from"./operationsFilters-9e8b924d.js";import{P as z}from"./PageTitle-5e6dd64a.js";import{s as D}from"./favoriteSelectors-b4361c0f.js";import{b as T}from"./operationsDrinks-73a8a0f5.js";const I=s.li`
  margin: 0;

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
`,P=s.div`
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
`,F="/drinkMaster-Team-1/assets/coctailPlaceholder-13631aa6.png",W=({photo:e,title:o,measure:r})=>t.jsxs(I,{children:[t.jsx(P,{children:t.jsx("img",{src:e||F})}),t.jsxs("div",{children:[t.jsx("p",{children:o}),t.jsx("span",{children:r})]})]}),C=s.p`
  color: ${i.colorWhiteFifty};
  font-size: 16px;
  margin-bottom: 42px;

  @media (min-width: 768px) {
    margin-bottom: 24px;
  }
`,S=s.ul`
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
`,B=({coctailInfo:e})=>{const[o,r]=p.useState([]),x=e!==null?e.ingredients:[],m=x.map(d=>d.ingredientId);p.useEffect(()=>{(async()=>{try{const n=await v();if(n.length!==0){const a=n.filter(c=>m.includes(c._id));r(a)}}catch(n){console.log(n.message)}})()},[e]);const l=x.map(d=>{const n=o.find(a=>a._id===d.ingredientId);return{...d,ingredientThumb:n?n.ingredientThumb:null}});return t.jsxs(t.Fragment,{children:[t.jsx(C,{children:"Ingredients"}),t.jsx(S,{children:l.map(({title:d,measure:n,ingredientId:a,ingredientThumb:c})=>t.jsx(W,{title:d,measure:n,photo:c},a))})]})},M=s.button`
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
`,E=({text:e,onClick:o})=>t.jsx(M,{onClick:o,children:e}),R=s.p`
  margin-bottom: 20px;
  margin-top: 8px;
  color: ${i.colorWhiteFifty};
  font-size: 12px;
  font-weight: 400;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`,A=s.p`
  margin-bottom: 40px;
  width: 335px;
  color: ${i.colorWhite};
  font-size: 14px;
  font-weight: 200;

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


  @media (min-width: 1440px) {
    margin-top: 132px;
    margin-bottom: 100px;
    display: flex;
    justify-content: space-between;
  }
`,L=s.img`
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
`,H=({photo:e})=>t.jsx(L,{src:e}),O=({coctailInfo:e})=>{const o=f(D),r=e!==null?e.drink:"",x=e!==null?e.glass:"",m=e!==null?e.alcoholic:"",l=e!==null?e.shortDescription:"",d=e!==null?e.drinkThumb:"image",n=e!==null?e._id:"",a=k(),[c,h]=p.useState(!1);p.useEffect(()=>{o.find(j=>j._id===n)&&h(!0)},[o,n]);const w=()=>{a(c?$(n):y(n)),h(!c)};return t.jsxs(_,{children:[t.jsxs("div",{children:[t.jsx(z,{title:r,style:{marginBottom:"10px"}}),t.jsxs(R,{children:[x," / ",m]}),t.jsxs(A,{children:[l," "]}),t.jsx(E,{text:c?"Remove from favorites":"Add to favorite drinks",onClick:w})]}),t.jsx(H,{photo:d})]})},q="/drinkMaster-Team-1/assets/desktop@1x-8eda6905.jpg",G="/drinkMaster-Team-1/assets/desktop@2x-0896e2bb.jpg",J="/drinkMaster-Team-1/assets/tablet@1x-1ce56edb.jpg",K="/drinkMaster-Team-1/assets/tablet@2x-11f63109.jpg",g="/drinkMaster-Team-1/assets/mob@1x-b65eaffd.jpg",N="/drinkMaster-Team-1/assets/mob@2x-d2eb580b.jpg",Q=s.img`
@media (min-width: 1440px) {
 width: 631;
}
@media (min-width: 768px) {
    width: 704;
}
@media (min-width: 375px) {
    width: 335;
}
`,U=()=>t.jsxs("picture",{children:[t.jsx("source",{media:"(min-width: 1440px)",srcSet:`${q}, ${G} 2x`,type:"image/jpg"}),t.jsx("source",{media:"(min-width: 768px)",srcSet:`${J}, ${K} 2x`,type:"image/jpg"}),t.jsx("source",{media:"(min-width: 375px)",srcSet:`${g}, ${N} 2x`,type:"image/jpg"}),t.jsx(Q,{src:g,alt:"Coctails"})]}),V=s.div`
  @media (min-width: 1440px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`,X=s.h3`
  margin-bottom: 40px;
  font-size: 28px;
`,u=s.p`

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
`,Y=({coctailInfo:e})=>{const o=e!==null?e.instructions:"",r=e!==null?e.description:"";return t.jsxs(t.Fragment,{children:[t.jsx(X,{children:"Recipe Preparation"}),t.jsxs(V,{children:[t.jsxs("div",{children:[t.jsxs(u,{style:{marginBottom:40},children:[" ",r," "]}),t.jsxs(u,{children:[" ",o," "]})]}),t.jsx(U,{})]})]})},Z=()=>{const[e,o]=p.useState(null),{drinkId:r}=b();return p.useEffect(()=>{(async()=>{const m=await T(r);o(m)})()},[]),t.jsxs(t.Fragment,{children:[t.jsx(O,{coctailInfo:e}),t.jsx(B,{coctailInfo:e})," ",t.jsx(Y,{coctailInfo:e})]})},ot=()=>{const{drinkId:e}=b();return t.jsx(Z,{id:e})};export{ot as default};
