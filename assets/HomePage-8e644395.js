import{n as o,j as i,L as c,r as s,s as n}from"./index-5ff4eabe.js";import{g as p}from"./operationsDrinks-c9374ad6.js";import{C as l}from"./CardCoctail-075b7bcf.js";const m=o.ul`
  display: flex;
  align-items: center;
  justifu-content: center;
  gap: 20px;

  @media (min-width: 768px) {
    flex-basis: calc(100% - 20px / 2);
  }

  @media (min-width: 1280px) {
    flex-basis: calc(100% - 40px / 3);
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
`,g=({drinks:r})=>i.jsx(i.Fragment,{children:r.map(([e,d])=>i.jsxs("div",{children:[i.jsx(h,{children:e}),i.jsx(m,{children:d.map(({_id:t,drink:a,drinkThumb:x})=>i.jsx(l,{_id:t,drink:a,drinkThumb:x},t))})]},e))}),f=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 80px;
`,w=o(c)`
  font-size: 16px;
  color: var(--blue-color);
  background-color: var(--white-color);
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

  &:hover {
    background-color: var(--blue-color);
    color: var(--white-color);
  }

  &:focus {
    background-color: var(--blue-color);
    color: var(--white-color);
  }

  @media screen and (min-width: 768px){
    margin-bottom: 140px;
  }
  @media screen and (min-width: 1440px){
    margin-bottom: 160px;
  }

`,b=()=>{const[r,e]=s.useState([]);return s.useEffect(()=>{(async()=>{try{const t=await p(),a=Object.entries(t);e([...a])}catch(t){console.error("Error fetching drinks:",t)}})()},[]),i.jsxs(f,{children:[i.jsx(g,{drinks:r}),i.jsx(w,{to:"/drinks",children:"Other Drinks"})]})},u="/drinkMaster-Team-1/assets/desktop2x-93bacedb.png",v=n.div`
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
`,k=n.img`
  @media screen and (max-width: 767px) {
    width: 252;
    height: 313px;
  }

  @media screen and (min-width: 768px) {
    width: 359px;
    height: 445px;
  }
`,j=n.h1`
  color: var(--white-color);
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
`,y=n.p`
  color: var(--white-color);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  padding-bottom: 32px;

  @media screen and (min-width: 768px) {
    color: var(--white-color);
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    padding-bottom: 48px;
  }

  @media screen and (min-width: 1280px) {
    color: var(--white-color);
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    margin: 0;
    padding-bottom: 40px;
  }
`,z=n(c)`
  border-radius: 42px;
  background: var(--white-color);
  color: var(--blue-color);
  padding: 18px 44px;
  cursor: pointer;
  margin-bottom: 47px;
  transition:
    color var(--transition),
    background var(--transition);

  &:hover,
  &:focus {
    background: var(--blue-color);
    color: var(--white-color);
  }

  @media screen and (min-width: 1280px) {
    border-radius: 42px;
    background: var(--white-color);
    color: var(--blue-color);
    padding: 18px 44px;
    cursor: pointer;
  }
`,D=n.div`
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
`,C=n.div`
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
`,B=n.div`
  @media screen and (max-width: 1279.5px) {
    margin-bottom: 45px;
  }

  @media screen and (min-width: 1280px) {
    margin-right: 130px;
  }
`,T=()=>i.jsx(v,{children:i.jsxs(D,{children:[i.jsxs(B,{children:[i.jsxs(j,{children:["Craft Your Perfect ",i.jsx("b",{})," Drink with Drink Master"]}),i.jsx(y,{children:"Unlock your inner mixologist with Drink Master, your one-stop destination for exploring, crafting, and mastering the world´s finest beverages."}),i.jsx(z,{to:"/add",children:"Add drink"})]}),i.jsx(k,{src:u,alt:"main-coctail"}),i.jsx(C,{})]})}),L=()=>i.jsxs(i.Fragment,{children:[i.jsx(T,{}),i.jsx(b,{})]});export{L as default};
