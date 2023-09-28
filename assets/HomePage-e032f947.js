import{n as e,L as c,j as t,r as d}from"./index-94d1b50c.js";import{g as x}from"./operationsDrinks-dad9b4bf.js";const p=e.li`
  @media (min-width: 375px) {
    &:nth-of-type(2) {
      display: none;
    }
    &:nth-of-type(3) {
      display: none;
    }
  }

  @media (min-width: 768px) {
    &:nth-of-type(2) {
      display: block;
    }
    &:nth-of-type(3) {
      display: none;
    }
  }

  @media (min-width: 1280px) {
    &:nth-of-type(2) {
      display: block;
    }
    &:nth-of-type(3) {
      display: block;
    }
  }
`,m=e.img`
  display: block;
  border-radius: 8px;
  display: flex;
  width: 335px;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;

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
`,h=e.p`
  font-size: 500;
  line-height: 1.3;
  word-wrap: break-word;

  @media (min-width: 375px) {
    font-size: 16px;
  }

  @media (min-width: 768px) {
    font-size: 18px;
  }
`,_=e(c)`
  font-size: 16px;
  font-size: 500;
  line-height: 1.2;
  word-wrap: break-word;
  align-self: flex-start;
  color: var(--whitefifty-color);
  transition: color var(--transition);

  &:hover {
    color: var(--white-color);
  }

  @media (min-width: 375px) {
    font-size: 14px;
  }

  @media (min-width: 768px) {
    font-size: 14px;
  }
`,k=e.div`
  display: flex;
  margin-top: 14px;
  align-items: center;
  justify-content: space-between;
`,u=({_id:o,drink:n,drinkThumb:s})=>t.jsxs(p,{children:[t.jsx(m,{src:s,alt:n}),t.jsxs(k,{children:[t.jsx(h,{children:n}),t.jsx(_,{to:`drink/${o}`,children:"See more"})]})]},o),f=e.ul`
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
`,b=e.h2`
  margin-bottom: 40px;
  font-size: 40px;
  font-weight: 600;

  @media (min-width: 375px) {
    font-size: 28px;
  }

  @media (min-width: 768px) {
    font-size: 40px;
  }
`,w=({drinks:o})=>t.jsx(t.Fragment,{children:o.map(([n,s])=>t.jsxs("div",{children:[t.jsx(b,{children:n}),t.jsx(f,{children:s.map(({_id:r,drink:a,drinkThumb:l})=>t.jsx(u,{_id:r,drink:a,drinkThumb:l},r))})]},n))}),g=e.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 80px;
`,j=e(c)`
  font-size: 16px;
  color: var(--blue-color);
  background-color: var(--white-color);
  padding: 18px 44px;
  font-weight: 600;
  line-height: 18px;
  word-wrap: break-word;
  border-radius: 42px;
  cursor: pointer;
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
`,z=()=>{const[o,n]=d.useState([]);return d.useEffect(()=>{(async()=>{try{const r=await x(),a=Object.entries(r);n([...a])}catch(r){console.error("Error fetching drinks:",r)}})()},[]),t.jsxs(g,{children:[t.jsx(w,{drinks:o}),t.jsx(j,{to:"/drinks",children:"Other Drinks"})]})},y="_container_xuzpd_1",v="_cont_xuzpd_1",C="_imgmain_xuzpd_30",D="_title_xuzpd_48",N="_text_xuzpd_92",O="_btnAddDrinks_xuzpd_132",L="_box_xuzpd_172",A="_boxtwo_xuzpd_179",S="_boxtree_xuzpd_197",E="_boxfour_xuzpd_228",H="_titleOrdinary_xuzpd_259",U="_titleCocktail_xuzpd_269",M="_titleShake_xuzpd_279",P="_titleOtherUnknow_xuzpd_290",F="_list_xuzpd_299",T="_item_xuzpd_307",B="_itemContent_xuzpd_315",I="_btnOtherDrinks_xuzpd_321",R="_otherDrinks_xuzpd_338",W="_namecoktail_xuzpd_345",Y="_nameCoktailLi_xuzpd_349",i={container:y,cont:v,imgmain:C,title:D,text:N,btnAddDrinks:O,box:L,boxtwo:A,boxtree:S,boxfour:E,titleOrdinary:H,titleCocktail:U,titleShake:M,titleOtherUnknow:P,list:F,item:T,itemContent:B,btnOtherDrinks:I,otherDrinks:R,namecoktail:W,nameCoktailLi:Y},$="/drinkMaster-Team-1/assets/desktop2x-93bacedb.png",q=()=>t.jsx("div",{className:i.container,children:t.jsxs("div",{className:i.cont,children:[t.jsxs("div",{className:i.box,children:[t.jsxs("h1",{className:i.title,children:["Craft Your Perfect ",t.jsx("b",{})," Drink with Drink Master"]}),t.jsx("p",{className:i.text,children:"Unlock your inner mixologist with Drink Master, your one-stop destination for exploring, crafting, and mastering the world´s finest beverages."}),t.jsx(c,{className:i.btnAddDrinks,to:"/add",children:"Add drink"})]}),t.jsx("img",{className:i.imgmain,src:$,alt:"main-coctail"}),t.jsx("div",{className:i.boxtwo}),t.jsx("div",{className:i.boxtree}),t.jsx("div",{className:i.boxfour}),t.jsx("div",{})]})}),K=()=>t.jsxs(t.Fragment,{children:[t.jsx(q,{}),t.jsx(z,{})]});export{K as default};
