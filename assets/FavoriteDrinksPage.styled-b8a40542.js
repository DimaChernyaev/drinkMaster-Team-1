import{n as t,j as i,L as n}from"./index-1a14c5c7.js";import"./NotFound.styled-f755f3f8.js";const e="/drinkMaster-Team-1/assets/Weeks-47fea261.jpg",r="/drinkMaster-Team-1/assets/trash-fc07c8dc.svg",g=t.ul`
  // display: flex;
  padding: 0;
  margin: 0;
`,s=t.div`
  display: block;
  // flex-wrap: wrap;
  padding: 0;
  margin: 0;
  margin-bottom: 40px;
`;t.li`
  width: 100%;
  max-width: 380px;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  background-color: #fff;
`;const o=t.img`
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
`,a=t.div`
  margin-bottom: 18px;
`,d=t.h5`
  font-size: 18px;
  line-height: 1.33;
  margin-bottom: 4px;
`,p=t.p`
  color: rgba(243, 243, 243, 0.5);
  font-size: 14px;
  font-weight: 400;
  line-height: 1.28;
  margin-bottom: 24px;
`,x=t.p`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.28;
  margin-bottom: 24px;
`;t.span`
  margin-left: 15px;
`;const l=t.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
`,c=t.button`
  display: flex;
  padding: 14px 40px;
  align-items: flex-start;
  gap: 10px;

  font-weight: 600;
  line-height: 1.12;

  border: none;
  outline: none;
  border-radius: 42px;
  background: #161f37;
  color: #f3f3f3;

  transform: scale(1);
  transition: transform 200ms;

  &:hover,
  &:focus {
    // transform: scale(1.1);
    background: #f3f3f3;
    color: #161f37;
  }
`,h=t.button`
  display: flex;
  width: 46px;
  padding: 11px 32px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border: none;
  outline: none;
  border-radius: 40px;
  background: #161f37;

  transform: scale(1);
  transition: transform 500ms;

  &:hover,
  &:focus {
    background: #434d67;
  }
`;t.p`
  font-size: 14px;
  font-weight: 700;

  text-align: center;
  margin-bottom: 20px;
`;const j=({drinks:m,onDeleteDrinks:f})=>i.jsx(i.Fragment,{children:i.jsxs(g,{children:[i.jsxs(s,{children:[i.jsx(o,{src:e,alt:"drink"}),i.jsxs(a,{children:[i.jsx(d,{children:"drink"}),i.jsx(p,{children:"alcoholic"}),i.jsx(x,{children:"shortDescription"})]}),i.jsxs(l,{children:[i.jsx(n,{to:"/drink/:drinkId",children:i.jsx(c,{children:"See more"})}),i.jsx(h,{type:"button",children:i.jsx("img",{src:r,alt:"trash"})})]})]}),i.jsxs(s,{children:[i.jsx(o,{src:e,alt:"drink"}),i.jsxs(a,{children:[i.jsx(d,{children:"drink"}),i.jsx(p,{children:"alcoholic"}),i.jsx(x,{children:"shortDescription"})]}),i.jsxs(l,{children:[i.jsx(n,{to:"/drink/:drinkId",children:i.jsx(c,{children:"See more"})}),i.jsx(h,{type:"button",children:i.jsx("img",{src:r,alt:"trash"})})]})]})]})}),k=t.div`
  width: 100%;
  // display: flex;
  // flex-direction: row;
  // justify-content: center;
  // align-items: center;
  // padding: 80px 20px;
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
`,w=t.h1`
  margin-bottom: 40px;
  font-size: 32px;
  line-height: 1.18; /* 118.75% */
`,y=t.div`
  width: 520px;
  height: 550px;
  flex-shrink: 0;

  border-radius: 550px;
  background: rgba(64, 112, 205, 0.5);
  filter: blur(104.8543701171875px);
  z-index: -1;
  position: absolute;
  top: 20px;
  left: -399px;

  @media (min-width: 768px) {
    width: 784px;
    height: 829.931px;
    border-radius: 830px;
  }

  @media (min-width: 1440px) {
    height: 849px;
    border-radius: 849px;
  }
`,v=t.div`
  @media (min-width: 768px) {
    width: 549px;
    height: 543px;
    flex-shrink: 0;

    border-radius: 549px;
    background: rgba(64, 112, 205, 0.5);
    filter: blur(104.8543701171875px);
    z-index: -1;
    position: absolute;
    top: 498px;
    left: 651px;
  }

  @media (min-width: 1440px) {
    top: 458px;
    left: 1181px;
  }
`;export{k as C,j as D,y as E,w as T,v as a};
