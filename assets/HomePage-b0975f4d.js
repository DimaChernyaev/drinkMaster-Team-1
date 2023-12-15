import{n as r,j as n,L as x,r as s,s as i}from"./index-6fa5008b.js";import{g as l}from"./operationsDrinks-40e7c5d2.js";import{C as m}from"./CardCoctail-251ad69f.js";import{L as h}from"./LoaderDots-4966b1d0.js";const g=r.ul`
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
`,f=r.h2`
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
`,b=({drinks:a})=>n.jsx(n.Fragment,{children:a.map(([o,d])=>n.jsxs("div",{children:[n.jsx(f,{children:o}),n.jsx(g,{children:d.map(({_id:t,drink:p,drinkThumb:e})=>n.jsx(m,{_id:t,drink:p,drinkThumb:e},t))})]},o))}),w=r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 80px;
`,u=r(x)`
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
`,k=()=>{const[a,o]=s.useState([]),[d,t]=s.useState(!1);return s.useEffect(()=>{(async()=>{t(!0);try{const e=await l(),c=Object.entries(e);o([...c])}catch(e){console.error("Error fetching drinks:",e)}finally{t(!1)}})()},[]),d?n.jsx(h,{}):n.jsxs(w,{children:[n.jsx(b,{drinks:a}),n.jsx(u,{to:"/drinks",children:"Other Drinks"})]})},y="/drinkMaster-Team-1/assets/coctailPhoto-1d38e785.png",v=i.div`
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
`,j=i.img`
  @media screen and (max-width: 767px) {
    width: 252;
    height: 313px;
  }

  @media screen and (min-width: 768px) {
    width: 359px;
    height: 445px;
  }
`,z=i.h1`
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
`,D=i.p`
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
`,C=i(x)`
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
`,L=i.div`
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
`,B=i.div`
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
`,T=i.div`
  @media screen and (max-width: 1279.5px) {
    margin-bottom: 45px;
  }

  @media screen and (min-width: 1280px) {
    margin-right: 130px;
  }
`,A=()=>n.jsx(v,{children:n.jsxs(L,{children:[n.jsxs(T,{children:[n.jsxs(z,{children:["Craft Your Perfect ",n.jsx("b",{})," Drink with Drink Master"]}),n.jsx(D,{children:"Unlock your inner mixologist with Drink Master, your one-stop destination for exploring, crafting, and mastering the world´s finest beverages."}),n.jsx(C,{to:"/add",children:"Add drink"})]}),n.jsx(j,{src:y,alt:"main-coctail"}),n.jsx(B,{})]})}),S=()=>n.jsxs(n.Fragment,{children:[n.jsx(A,{}),n.jsx(k,{})]});export{S as default};
