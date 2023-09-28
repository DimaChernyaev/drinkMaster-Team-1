import{n as i,L as d,j as t,c as r,r as l}from"./index-5d4b85d7.js";import{g as p}from"./operationsDrinks-56b83c26.js";const h=i.li`
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
`,m=i.img`
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
`,_=i.p`
  font-size: 500;
  line-height: 1.3;
  word-wrap: break-word;

  @media (min-width: 375px) {
    font-size: 16px;
  }

  @media (min-width: 768px) {
    font-size: 18px;
  }
`,k=i(d)`
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
`,u=i.div`
  display: flex;
  margin-top: 14px;
  align-items: center;
  justify-content: space-between;
`,f=({_id:o,drink:n,drinkThumb:a})=>t.jsxs(h,{children:[t.jsx(m,{src:a,alt:n}),t.jsxs(u,{children:[t.jsx(_,{children:n}),t.jsx(k,{to:`drink/${o}`,children:"See more"})]})]},o),b=i.ul`
  display: flex;
  gap: 20px;
  flex-basis: calc(100% - 40px / 3);
`,g=i.h2`
  margin-bottom: 40px;
  font-size: 40px;
  font-weight: 600;
`,w=({drinks:o})=>t.jsx(t.Fragment,{children:o.map(([n,a])=>t.jsxs("div",{children:[t.jsx(g,{children:n}),t.jsx(b,{children:a.map(({_id:s,drink:c,drinkThumb:x})=>t.jsx(f,{_id:s,drink:c,drinkThumb:x},s))})]},n))}),j=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 80px;
`,z=i(d)`
  font-size: 16px;
  color: ${r.colorBlue};
  background-color: ${r.colorWhite};
  padding: 18px 44px;
  font-weight: 600;
  line-height: 18px;
  word-wrap: break-word;
  border-radius: 42px;
  cursor: pointer;

   &:hover {
    background-color: ${r.colorBlue};
    color: ${r.colorWhite};
  }

  
  &:focus {
    background-color: ${r.colorBlue};
    color: ${r.colorWhite};
  }

`,y=()=>{const[o,n]=l.useState([]);return l.useEffect(()=>{(async()=>{try{const s=await p(),c=Object.entries(s);n([...c])}catch(s){console.error("Error fetching drinks:",s)}})()},[]),t.jsxs(j,{children:[t.jsx(w,{drinks:o}),t.jsx(z,{to:"/drinks",children:"Other Drinks"})]})},C="_container_xuzpd_1",D="_cont_xuzpd_1",v="_imgmain_xuzpd_30",N="_title_xuzpd_48",O="_text_xuzpd_92",L="_btnAddDrinks_xuzpd_132",A="_box_xuzpd_172",S="_boxtwo_xuzpd_179",$="_boxtree_xuzpd_197",B="_boxfour_xuzpd_228",E="_titleOrdinary_xuzpd_259",H="_titleCocktail_xuzpd_269",U="_titleShake_xuzpd_279",W="_titleOtherUnknow_xuzpd_290",M="_list_xuzpd_299",P="_item_xuzpd_307",F="_itemContent_xuzpd_315",T="_btnOtherDrinks_xuzpd_321",I="_otherDrinks_xuzpd_338",R="_namecoktail_xuzpd_345",Y="_nameCoktailLi_xuzpd_349",e={container:C,cont:D,imgmain:v,title:N,text:O,btnAddDrinks:L,box:A,boxtwo:S,boxtree:$,boxfour:B,titleOrdinary:E,titleCocktail:H,titleShake:U,titleOtherUnknow:W,list:M,item:P,itemContent:F,btnOtherDrinks:T,otherDrinks:I,namecoktail:R,nameCoktailLi:Y},q="/drinkMaster-Team-1/assets/desktop2x-93bacedb.png",G=()=>t.jsx("div",{className:e.container,children:t.jsxs("div",{className:e.cont,children:[t.jsxs("div",{className:e.box,children:[t.jsxs("h1",{className:e.title,children:["Craft Your Perfect ",t.jsx("b",{})," Drink with Drink Master"]}),t.jsx("p",{className:e.text,children:"Unlock your inner mixologist with Drink Master, your one-stop destination for exploring, crafting, and mastering the world´s finest beverages."}),t.jsx(d,{className:e.btnAddDrinks,to:"/add",children:"Add drink"})]}),t.jsx("img",{className:e.imgmain,src:q,alt:"main-coctail"}),t.jsx("div",{className:e.boxtwo}),t.jsx("div",{className:e.boxtree}),t.jsx("div",{className:e.boxfour}),t.jsx("div",{})]})}),Q=()=>t.jsxs(t.Fragment,{children:[t.jsx(G,{}),t.jsx(y,{})]});export{Q as default};
