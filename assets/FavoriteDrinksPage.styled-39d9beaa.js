import{r as s,n as i,j as t,z as m,A as p,L as h,D as g}from"./index-865138ce.js";import{b as w,a as f}from"./favoriteSelectors-3a4120d2.js";function M(){const[e,a]=s.useState();return s.useEffect(()=>{function n(){window.innerWidth<1438?a(4):a(9)}return window.addEventListener("resize",n),n(),()=>{window.removeEventListener("resize",n)}},[]),e}const u="/drinkMaster-Team-1/assets/asr_blue_iced_tea_1-e64cabfc.png",b=i.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  margin-top: 91px;

  @media (min-width: 768px) {
    margin-top: 100px;
    margin-bottom: 60px;
  }

  @media (min-width: 1440px) {
    margin-top: 67px;
  }
`,v=i.img`
  width: 198px;
  height: 247px;

  margin-left: 0;
  pading: 0;
  text-align: center;

  @media (min-width: 768px) {
    width: 261px;
    height: 326px;
  }

  @media (min-width: 1440px) {
  }
`,j=i.p`
  width: 205px;
  color: var(--white-color);
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.28;

  @media (min-width: 768px) {
    width: 236px;
    font-size: 16px;
    line-height: 1.37;
  }

  @media (min-width: 1440px) {
    // margin-top: 27px;
  }
`,y=()=>t.jsxs(b,{children:[t.jsx(v,{src:u,alt:"blue iced tea"}),t.jsx(j,{children:" You haven't added any favorite cocktails yet"})]}),k="/drinkMaster-Team-1/assets/trash-fc07c8dc.svg",z=i.ul`
  padding: 0;
  margin: 0;
  margin-top: 40px;

  @media (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    row-gap: 80px;
    column-gap: 20px;
    margin-top: 60px;
  }

  @media (min-width: 1280px) {
    margin-top: 62px;
  }

  // column-gap: <line-size>;
  // row-gap: <line-size>;
`,L=i.div`
  display: block;
  // flex-wrap: wrap;
  padding: 0;
  margin: 0;
  margin-bottom: 40px;

  @media (min-width: 375px) {
    width: 335px;
  }

  @media (min-width: 768px) {
    width: 342px;
    margin-bottom: 0;
  }

  @media (min-width: 1280px) {
    width: 400px;
  }
`;i.li`
  width: 100%;
  max-width: 380px;
  padding: 5px;
  margin-bottom: 10px;
  background-color: #fff;

  @media (min-width: 768px) {
    flex-basis: calc((100% - 2 * 20px) / 3);
  }

  @media (min-width: 1280px) {
    flex-basis: calc((100% - 3 * 20px) / 4);
  }
`;const T=i.img`
  // width: 100%;
  width: 335px;
  display: block;
  // align-items: center;
  // justify-content: space-between;
  margin-bottom: 18px;
  // background-color: #fff;

  border-radius: 8px;
  background: linear-gradient(
    180deg,
    rgba(10, 10, 17, 0.02) 51.18%,
    rgba(10, 10, 17, 0.77) 97.66%
  );

  @media (min-width: 375px) {
    width: 335px;
    height: 360px;
  }

  @media (min-width: 768px) {
    width: 342px;
    height: 360px;
  }

  @media (min-width: 1280px) {
    width: 400px;
    height: 400px;
  }
`,D=i.div`
  margin-bottom: 18px;
`,C=i.h5`
  font-size: 18px;
  line-height: 1.33;
  margin-bottom: 4px;
`,E=i.p`
  color: var(--whitefifty-color);
  font-size: 14px;
  line-height: 1.28;
  margin-bottom: 18px;
`,P=i.p`
  font-size: 14px;
  line-height: 1.28;
  margin-bottom: 18px;
`;i.span`
  margin-left: 15px;
`;const S=i.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
`,I=i.button`
  display: flex;
  padding: 14px 40px;
  align-items: flex-start;
  gap: 10px;

  font-weight: 600;
  font-size: 14px;
  line-height: 1.28;
  border: none;
  outline: none;
  border-radius: 42px;
  background: var(--blue-color);
  color: var(--white-color);

  transform: scale(1);
  transition: transform 800ms;

  &:hover,
  &:focus {
    transform: scale(1.1);
    background: var(--white-color);
    color: var(--blue-color);
  }
`,W=i.button`
  display: flex;
  width: 46px;
  padding: 11px 32px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border: none;
  outline: none;
  border-radius: 40px;
  background: var(--blue-color);

  transform: scale(1);
  transition: transform 800ms;

  &:hover,
  &:focus {
    background: var(--buttoncancel-color);
    transform: scale(1.1);
  }
`;i.p`
  font-size: 14px;
  font-weight: 700;

  text-align: center;
  margin-bottom: 20px;
`;const R=({drinks:e})=>{const a=m(),n=p(w),d=p(f);return t.jsxs(t.Fragment,{children:[!d&&!n&&e.length===0&&t.jsx(y,{}),t.jsx(z,{children:e.length>0&&e.map(({_id:r,drink:o,alcoholic:x,shortDescription:c,drinkThumb:l})=>t.jsxs(L,{children:[t.jsx(T,{src:l,alt:o}),t.jsxs(D,{children:[t.jsx(C,{children:o}),t.jsx(E,{children:x}),t.jsx(P,{children:c})]}),t.jsxs(S,{children:[t.jsx(h,{to:`/drink/${r}`,children:t.jsx(I,{children:"See more"})}),t.jsx(W,{type:"button",onClick:()=>a(g(r)),children:t.jsx("img",{src:k,alt:"trash"})})]})]},r))})]})},_=i.div`
  width: 100%;
  padding-top: 80px;
  padding-bottom: 80px;
  margin-left: auto;
  margin-right: auto;
  position: relative;

  // @media (min-width: 768px) {
  //   display: flex;
  //   width: 768px;
  //   padding: 140px 32px;
  // }

  //   @media (min-width: 768px) {
  //     max-width: 700px;
  //     padding: 158px 100px;
  //   }
  //
`;export{_ as C,R as D,M as u};
