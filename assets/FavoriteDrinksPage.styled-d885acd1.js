import{n as i,t as c,v as o,j as t,L as m,z as h}from"./index-b3ac079c.js";import{N as g}from"./NotFound-0ce88079.js";const F=e=>e.favorites.items,f=e=>e.favorites.isLoading,b=e=>e.favorites.error,w="/drinkMaster-Team-1/assets/trash-fc07c8dc.svg",u=i.ul`
  // display: flex;
  padding: 0;
  margin: 0;

  @media (min-width: 768px) {
  // display: grid;
  // grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  // grid-gap: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  // }
`,j=i.div`
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
  }

  @media (min-width: 1280px) {
    width: 400px;
  }
`;i.li`
  width: 100%;
  max-width: 380px;
  padding: 5px;
  // display: flex;
  // align-items: center;
  // justify-content: space-between;
  margin-bottom: 10px;
  background-color: #fff;

  @media (min-width: 768px) {
    flex-basis: calc((100% - 2 * 20px) / 3);
  }

  @media (min-width: 1280px) {
    flex-basis: calc((100% - 3 * 20px) / 4);
  }
`;const y=i.img`
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
`,k=i.div`
  margin-bottom: 18px;
`,v=i.h5`
  font-size: 18px;
  line-height: 1.33;
  margin-bottom: 4px;
`,T=i.p`
  color: rgba(243, 243, 243, 0.5);
  font-size: 14px;
  font-weight: 400;
  line-height: 1.28;
  margin-bottom: 24px;
`,z=i.p`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.28;
  margin-bottom: 24px;
`;i.span`
  margin-left: 15px;
`;const L=i.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
`,D=i.button`
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
`,C=i.button`
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
`;i.p`
  font-size: 14px;
  font-weight: 700;

  text-align: center;
  margin-bottom: 20px;
`;const B=({drinks:e})=>{const r=c(),s=o(f),p=o(b);return t.jsxs(t.Fragment,{children:[!p&&!s&&e.length===0&&t.jsx(g,{}),t.jsx(u,{children:e.length>0&&e.map(({_id:n,drink:a,alcoholic:d,shortDescription:x,drinkThumb:l})=>t.jsxs(j,{children:[t.jsx(y,{src:l,alt:a}),t.jsxs(k,{children:[t.jsx(v,{children:a}),t.jsx(T,{children:d}),t.jsx(z,{children:x})]}),t.jsxs(L,{children:[t.jsx(m,{to:`/drink/${n}`,children:t.jsx(D,{children:"See more"})}),t.jsx(C,{type:"button",onClick:()=>r(h(n)),children:t.jsx("img",{src:w,alt:"trash"})})]})]},n))})]})},I=i.div`
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
`,W=i.h1`
  margin-bottom: 40px;
  font-size: 32px;
  line-height: 1.18; /* 118.75% */
`,M=i.div`
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
`,N=i.div`
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
`;export{I as C,B as D,M as E,W as T,N as a,f as b,b as c,F as s};
