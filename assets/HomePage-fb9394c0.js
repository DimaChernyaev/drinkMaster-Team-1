import{n as i,j as t,L as d,r as c}from"./index-57eb1812.js";import{g as l}from"./operationsDrinks-e52746c0.js";import{C as m}from"./CardCoctail-f2d85a0f.js";const _=i.ul`
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
`,p=i.h2`
  margin-bottom: 40px;
  font-size: 40px;
  font-weight: 600;

  @media (min-width: 375px) {
    font-size: 28px;
  }

  @media (min-width: 768px) {
    font-size: 40px;
  }
`,u=({drinks:r})=>t.jsx(t.Fragment,{children:r.map(([o,a])=>t.jsxs("div",{children:[t.jsx(p,{children:o}),t.jsx(_,{children:a.map(({_id:e,drink:s,drinkThumb:x})=>t.jsx(m,{_id:e,drink:s,drinkThumb:x},e))})]},o))}),k=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 80px;
`,h=i(d)`
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
`,b=()=>{const[r,o]=c.useState([]);return c.useEffect(()=>{(async()=>{try{const e=await l(),s=Object.entries(e);o([...s])}catch(e){console.error("Error fetching drinks:",e)}})()},[]),t.jsxs(k,{children:[t.jsx(u,{drinks:r}),t.jsx(h,{to:"/drinks",children:"Other Drinks"})]})},g="_container_xuzpd_1",f="_cont_xuzpd_1",j="_imgmain_xuzpd_30",w="_title_xuzpd_48",z="_text_xuzpd_92",v="_btnAddDrinks_xuzpd_132",D="_box_xuzpd_172",C="_boxtwo_xuzpd_179",y="_boxtree_xuzpd_197",O="_boxfour_xuzpd_228",N="_titleOrdinary_xuzpd_259",A="_titleCocktail_xuzpd_269",L="_titleShake_xuzpd_279",S="_titleOtherUnknow_xuzpd_290",E="_list_xuzpd_299",H="_item_xuzpd_307",U="_itemContent_xuzpd_315",M="_btnOtherDrinks_xuzpd_321",P="_otherDrinks_xuzpd_338",F="_namecoktail_xuzpd_345",T="_nameCoktailLi_xuzpd_349",n={container:g,cont:f,imgmain:j,title:w,text:z,btnAddDrinks:v,box:D,boxtwo:C,boxtree:y,boxfour:O,titleOrdinary:N,titleCocktail:A,titleShake:L,titleOtherUnknow:S,list:E,item:H,itemContent:U,btnOtherDrinks:M,otherDrinks:P,namecoktail:F,nameCoktailLi:T},B="/drinkMaster-Team-1/assets/desktop2x-93bacedb.png",R=()=>t.jsx("div",{className:n.container,children:t.jsxs("div",{className:n.cont,children:[t.jsxs("div",{className:n.box,children:[t.jsxs("h1",{className:n.title,children:["Craft Your Perfect ",t.jsx("br",{})," Drink with Drink Master"]}),t.jsx("p",{className:n.text,children:"Unlock your inner mixologist with Drink Master, your one-stop destination for exploring, crafting, and mastering the world´s finest beverages."}),t.jsx(d,{className:n.btnAddDrinks,to:"/add",children:"Add drink"})]}),t.jsx("img",{className:n.imgmain,src:B,alt:"main-coctail"}),t.jsx("div",{className:n.boxtwo}),t.jsx("div",{className:n.boxtree}),t.jsx("div",{className:n.boxfour}),t.jsx("div",{})]})}),I=()=>t.jsxs(t.Fragment,{children:[t.jsx(R,{}),t.jsx(b,{})]});export{I as default};
