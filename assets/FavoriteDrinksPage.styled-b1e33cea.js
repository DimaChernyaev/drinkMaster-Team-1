import{n as t,w as x,x as r,j as i,L as l,z as c}from"./index-fa7d53ca.js";import{N as g}from"./NotFound-55a9dd6f.js";const m=e=>e.favorites.items,h=e=>e.favorites.isLoading,E=e=>e.favorites.error,f="/drinkMaster-Team-1/assets/trash-fc07c8dc.svg",b=t.ul`
  // display: flex;
  padding: 0;
  margin: 0;
`,u=t.div`
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
`;t.img`
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
`;const w=t.div`
  margin-bottom: 18px;
`,k=t.h5`
  font-size: 18px;
  line-height: 1.33;
  margin-bottom: 4px;
`,j=t.p`
  color: rgba(243, 243, 243, 0.5);
  font-size: 14px;
  font-weight: 400;
  line-height: 1.28;
  margin-bottom: 24px;
`,y=t.p`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.28;
  margin-bottom: 24px;
`;t.span`
  margin-left: 15px;
`;const v=t.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
`,T=t.button`
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
`,z=t.button`
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
`;const S=()=>{const e=x(),n=r(m),s=r(h);return i.jsxs(i.Fragment,{children:[!s&&n.length===0&&i.jsx(g,{}),i.jsx(b,{children:n.length>0&&n.map(({_id:o,drink:a,alcoholic:p,shortDescription:d})=>i.jsxs(u,{children:[i.jsxs(w,{children:[i.jsx(k,{children:a}),i.jsx(j,{children:p}),i.jsx(y,{children:d})]}),i.jsxs(v,{children:[i.jsx(l,{to:`/drink/${_Id}`,children:i.jsx(T,{children:"See more"})}),i.jsx(z,{type:"button",onClick:()=>e(c(o)),children:i.jsx("img",{src:f,alt:"trash"})})]})]},o))})]})},C=t.div`
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
`,F=t.h1`
  margin-bottom: 40px;
  font-size: 32px;
  line-height: 1.18; /* 118.75% */
`,B=t.div`
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
`,I=t.div`
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
`;export{C,S as D,B as E,F as T,I as a,E as b,h as s};
