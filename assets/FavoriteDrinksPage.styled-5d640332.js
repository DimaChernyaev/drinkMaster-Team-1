import{r as o,n as i,j as e}from"./index-7fc966ae.js";function m(){const[t,a]=o.useState();return o.useEffect(()=>{function n(){window.innerWidth<1438?a(4):a(9)}return window.addEventListener("resize",n),n(),()=>{window.removeEventListener("resize",n)}},[]),t}const r="/drinkMaster-Team-1/assets/asr_blue_iced_tea_1-e64cabfc.png",p=i.div`
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
`,d=i.img`
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
`,s=i.p`
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
`,l=({text:t})=>e.jsxs(p,{children:[e.jsx(d,{src:r,alt:"blue iced tea"}),e.jsxs(s,{children:[" ",t]})]}),c="/drinkMaster-Team-1/assets/trash-fc07c8dc.svg",g=i.ul`
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
`,h=i.li`
  display: block;
  flex-wrap: wrap;
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
    flex-basis: calc((100% - 20px) / 2);
  }

  @media (min-width: 1280px) {
    flex-basis: calc((100% - 40px) / 3);
  }
`;const w=i.img`
  width: 335px;
  display: block;
  margin-bottom: 18px;

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
`,f=i.div`
  margin-bottom: 18px;
`,u=i.h5`
  font-size: 18px;
  line-height: 1.33;
  margin-bottom: 4px;
`,b=i.p`
  color: var(--whitefifty-color);
  font-size: 14px;
  line-height: 1.28;
  margin-bottom: 18px;
`,v=i.p`
  font-size: 14px;
  line-height: 1.28;
  margin-bottom: 18px;
`;i.span`
  margin-left: 15px;
`;const k=i.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
`,y=i.button`
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
  transition:
    transform var(--transition),
    background var(--transition),
    color var(--transition);

  &:hover,
  &:focus {
    transform: scale(1.05);
    background: var(--white-color);
    color: var(--blue-color);
  }
`,z=i.button`
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
  transition:
    transform var(--transition),
    background var(--transition);

  &:hover,
  &:focus {
    background: var(--buttoncancel-color);
    transform: scale(1.05);
  }
`;i.p`
  font-size: 14px;
  font-weight: 700;

  text-align: center;
  margin-bottom: 20px;
`;const T=i.div`
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
`;export{k as B,h as C,g as D,w as I,l as N,f as T,u as a,b,v as c,y as d,z as e,T as f,c as i,m as u};
