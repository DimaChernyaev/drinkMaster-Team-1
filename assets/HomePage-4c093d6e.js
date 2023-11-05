import{n as o,j as n,L as p,r as s,s as i}from"./index-86883a60.js";import{g as c}from"./operationsDrinks-b2bcc2ba.js";import{C as l}from"./CardCoctail-bb050e1f.js";const m=o.ul`
  display: flex;
  align-items: center;
  justifu-content: center;
  gap: 20px;

  @media (max-width: 767px) {
    li:nth-of-type(2) {
      display: none;
    }
    li:nth-of-type(3) {
      display: none;
    }
  }

  @media (min-width: 768px) {
    flex-basis: calc(100% - 20px / 2);
    li:nth-of-type(2) {
      display: block;
    }
    li:nth-of-type(3) {
      display: none;
    }
  }

  @media (min-width: 1280px) {
    flex-basis: calc(100% - 40px / 3);
    li:nth-of-type(2) {
      display: block;
    }
    li:nth-of-type(3) {
      display: block;
    }
  }
`,h=o.h2`
  margin-bottom: 40px;
  font-size: 40px;
  font-weight: 600;

  @media (max-width: 320px) {
    font-size: 26px;
    text-align: center;
  }

  @media (min-width: 375px) {
    font-size: 28px;
  }

  @media (min-width: 768px) {
    font-size: 40px;
  }
`,g=({drinks:r})=>n.jsx(n.Fragment,{children:r.map(([e,d])=>n.jsxs("div",{children:[n.jsx(h,{children:e}),n.jsx(m,{children:d.map(({_id:t,drink:a,drinkThumb:x})=>n.jsx(l,{_id:t,drink:a,drinkThumb:x},t))})]},e))}),f=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 80px;
`,b=o(p)`
  font-size: 16px;
  background: var(--btn-add-drink-background);
  color: var(--btn-add-drink-color);
  padding: 18px 44px;
  font-weight: 600;
  line-height: 18px;
  word-wrap: break-word;
  border-radius: 42px;
  cursor: pointer;
  margin-bottom: 80px;
  transition:
    color var(--transition),
    background var(--transition);

  &:hover,
  &:focus {
    background: var(--btn-add-drink-color);
    color: var(--btn-add-drink-background);
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 140px;
  }
  @media screen and (min-width: 1280px) {
    margin-bottom: 160px;
  }
`,w=()=>{const[r,e]=s.useState([]);return s.useEffect(()=>{(async()=>{try{const t=await c(),a=Object.entries(t);e([...a])}catch(t){console.error("Error fetching drinks:",t)}})()},[]),n.jsxs(f,{children:[n.jsx(g,{drinks:r}),n.jsx(b,{to:"/drinks",children:"Other Drinks"})]})},u="/drinkMaster-Team-1/assets/coctailPhoto-1d38e785.png",k=i.div`
  display: flex;

  @media screen and (max-width: 767px) {
    padding-top: 80px;
    padding-bottom: 80px;
  }

  @media screen and (min-width: 768px) {
    padding-top: 120px;
    padding-bottom: 140px;
  }

  @media screen and (min-width: 1280px) {
    padding-top: 185px;
    padding-bottom: 140px;
  }
`,y=i.img`
  @media screen and (max-width: 767px) {
    width: 252;
    height: 313px;
  }

  @media screen and (min-width: 768px) {
    width: 359px;
    height: 445px;
  }
`,v=i.h1`
  color: var(--text-color);
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 38px;
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    font-size: 56px;
    font-style: normal;
    font-weight: 600;
    line-height: 68px;
    display: flex;
    flex-direction: column;
    margin-bottom: 28px;
  }

  @media screen and (min-width: 1280px) {
    size: 64px;
    font-style: normal;
    font-weight: 600;
    line-height: 68px;
    display: flex;
    flex-direction: column;
    margin-bottom: 28px;
  }
`,j=i.p`
  color: var(--text-color);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  padding-bottom: 32px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    // font-style: normal;
    // font-weight: 400;
    line-height: 20px;
    padding-bottom: 48px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 18px;
    // font-style: normal;
    // font-weight: 400;
    line-height: 24px;
    margin: 0;
    padding-bottom: 40px;
  }
`,z=i(p)`
  border-radius: 42px;
  background: var(--btn-add-drink-background);
  color: var(--btn-add-drink-color);
  font-style: normal;
  font-weight: 600;
  padding: 18px 44px;
  cursor: pointer;
  margin-bottom: 47px;
  transition:
    color var(--transition),
    background var(--transition);

  &:hover,
  &:focus {
    background: var(--btn-add-drink-color);
    color: var(--btn-add-drink-background);
  }

  @media screen and (min-width: 1280px) {
    border-radius: 42px;
    // background: var(--white-color);
    // color: var(--blue-color);
    padding: 18px 44px;
    cursor: pointer;
  }
`,D=i.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  @media screen and (max-width: 1279.5px) {
    flex-direction: column;
  }

  @media screen and (min-width: 1280px) {
    flex-direction: row;
  }
`,C=i.div`
  @media screen and (max-width: 1279.5px) {
    display: none;
  }

  @media screen and (min-width: 1280px) {
    position: absolute;
    bottom: -140px;
    right: 80px;
    display: flex;
    z-index: -1;
    width: 387px;
    height: 381px;
    border-radius: 387px;
    background: rgba(188, 230, 210, 0.3);
    filter: blur(104.8543701171875px);
  }
`,B=i.div`
  @media screen and (max-width: 1279.5px) {
    margin-bottom: 45px;
  }

  @media screen and (min-width: 1280px) {
    margin-right: 130px;
  }
`,T=()=>n.jsx(k,{children:n.jsxs(D,{children:[n.jsxs(B,{children:[n.jsxs(v,{children:["Craft Your Perfect ",n.jsx("b",{})," Drink with Drink Master"]}),n.jsx(j,{children:"Unlock your inner mixologist with Drink Master, your one-stop destination for exploring, crafting, and mastering the world´s finest beverages."}),n.jsx(z,{to:"/add",children:"Add drink"})]}),n.jsx(y,{src:u,alt:"main-coctail"}),n.jsx(C,{})]})}),L=()=>n.jsxs(n.Fragment,{children:[n.jsx(T,{}),n.jsx(w,{})]});export{L as default};
