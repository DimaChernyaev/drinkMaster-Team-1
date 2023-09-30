import{n as o,j as i,L as x,r as d,s as n}from"./index-0ba36fd2.js";import{g as l}from"./operationsDrinks-11f51a25.js";import{C as c}from"./CardCoctail-c86a2c00.js";const m=o.ul`
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

  @media (min-width: 375px) {
    font-size: 28px;
  }

  @media (min-width: 768px) {
    font-size: 40px;
  }
`,f=({drinks:r})=>i.jsx(i.Fragment,{children:r.map(([e,s])=>i.jsxs("div",{children:[i.jsx(h,{children:e}),i.jsx(m,{children:s.map(({_id:t,drink:a,drinkThumb:p})=>i.jsx(c,{_id:t,drink:a,drinkThumb:p},t))})]},e))}),g=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 80px;
`,w=o(x)`
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

`,b=()=>{const[r,e]=d.useState([]);return d.useEffect(()=>{(async()=>{try{const t=await l(),a=Object.entries(t);e([...a])}catch(t){console.error("Error fetching drinks:",t)}})()},[]),i.jsxs(g,{children:[i.jsx(f,{drinks:r}),i.jsx(w,{to:"/drinks",children:"Other Drinks"})]})},u="/drinkMaster-Team-1/assets/desktop2x-93bacedb.png",k=n.div`
  background-color: #0A0A11;
  max-width: 375px;

  @media screen and (min-width: 1440px) {
    display: flex;
    margin-top: 185px;
  }
`,y=n.div`
  

  @media screen and (min-width: 768px) {

  }

  @media screen and (min-width: 1440px) {
    display: flex;
    margin-bottom: 160px;
  }
`,j=n.img`
  width: 252px;
  color: #F3F3F3;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  margin: auto;
  margin-bottom: 112px;
  
  @media screen and (min-width: 768px) {
    margin-bottom: 123px;
    margin-left: 205px;
}

  @media screen and (min-width: 1440px) {
    width: 359px;
    flex-shrink: 0;
    margin: 0px;
    top: 212px;
    position: absolute;
    left: 831px;
    
  }
`,F=n.h1`
  width: 335px;
  color: #F3F3F3;
  font-family: Manrope;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 38px;
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    width: 641px;
    color: #F3F3F3;
    font-family: Manrope;
    font-size: 56px;
    font-style: normal;
    font-weight: 600;
    line-height: 68px;
    display: flex;
    flex-direction: column;
    margin-bottom: 28px;
  }

  @media screen and (min-width: 1440px) {
    width: 715px;
    color: #F3F3F3;
    font-family: Manrope;
    size: 64px;
    font-style: normal;
    font-weight: 600;
    line-height: 68px;
    display: flex;
    flex-direction: column;
    margin-bottom: 28px;
  }
`,v=n.p`
  width: 335px;
  color: #F3F3F3;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  padding-bottom: 32px;

  @media screen and (min-width: 768px) {
    width: 619px;
    color: #F3F3F3;
    font-family: Manrope;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    padding-bottom: 48px;
  }

  @media screen and (min-width: 1440px) {
    width: 500px;
    color: #F3F3F3;
    font-family: Manrope;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    margin: 0;
    padding-bottom: 40px;
  }
`,z=n(x)`
  border-radius: 42px;
  background: #f3f3f3;
  color: #161f37;
  padding: 18px 44px;
  cursor: pointer;
  margin-bottom: 47px;

  &:hover,
  &:focus {
    background: #161f37;
    color: #f3f3f3;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 58px;
  }

  @media screen and (min-width: 1440px) {
    border-radius: 42px;
    background: #f3f3f3;
    color: #161f37;
    padding: 18px 44px;
    cursor: pointer;
  }
`,M=n.div`
    margin-top: 80px;
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;

    @media screen and (min-width: 768px){
        margin: 0px;

    }

    @media screen and (min-width: 1440px){
        margin: 0px;
    }
`,C=n.div`
  display: none;

  @media screen and (min-width: 1440px) {
    position: absolute;
    top: 520px;
    left: 860px;
    display: inline;
    width: 387px;
    height: 381px;
    flex-shrink: 0;
    border-radius: 387px;
    background: rgba(188, 230, 210, 0.30);
    filter: blur(104.8543701171875px);
  }
`,D=n.div`
  position: absolute;
  top: 498px;
  left: 331px;
  width: 549px;
  height: 543px;
  flex-shrink: 0;
  border-radius: 549px;
  background: rgba(64, 112, 205, 0.50);
  filter: blur(104.8543701171875px);

  @media screen and (min-width: 768px){
    left: 651px; 
  }

  @media screen and (min-width: 1440px) {
    width: 549px;
    height: 543px;
    flex-shrink: 0;
    top: 700px;
    left: 1146px;
    border-radius: 549px;
    background: rgba(64, 112, 205, 0.50);
    filter: blur(104.8543701171875px);
  }
`,A=n.div`

  @media screen and (min-width: 1440px) {
    
}
    `,B=()=>i.jsx(k,{children:i.jsxs(y,{children:[i.jsxs(M,{children:[i.jsxs(F,{children:["Craft Your Perfect ",i.jsx("b",{})," Drink with Drink Master"]}),i.jsx(v,{children:"Unlock your inner mixologist with Drink Master, your one-stop destination for exploring, crafting, and mastering the world´s finest beverages."}),i.jsx(z,{to:"/add",children:"Add drink"})]}),i.jsx(j,{src:u,alt:"main-coctail"}),i.jsx(C,{}),i.jsx(D,{}),i.jsx(A,{})]})}),L=()=>i.jsxs(i.Fragment,{children:[i.jsx(B,{}),i.jsx(b,{})]});export{L as default};
