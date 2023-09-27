import{n as i,L as c,j as t,c as l,r as d}from"./index-e254bcc6.js";import{g as x}from"./operationsDrinks-35f791b1.js";const m=i.li`
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
`,p=i.img`
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
`,w=i.p`
  font-size: 500;
  line-height: 1.3;
  word-wrap: break-word;

  @media (min-width: 375px) {
    font-size: 16px;
  }

  @media (min-width: 768px) {
    font-size: 18px;
  }
`,_=i(c)`
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
`,k=i.div`
  display: flex;
  margin-top: 14px;
  align-items: center;
  justify-content: space-between;
`,y=({_id:o,drink:n,drinkThumb:r})=>t.jsxs(m,{children:[t.jsx(p,{src:r,alt:n}),t.jsxs(k,{children:[t.jsx(w,{children:n}),t.jsx(_,{to:`drink/${o}`,children:"See more"})]})]},o),f=i.ul`
  display: flex;
  gap: 20px;
  flex-basis: calc(100% - 40px / 3);
`,b=i.h2`
  margin-bottom: 40px;
  font-size: 40px;
  font-weight: 600;
`,g=({drinks:o})=>t.jsx(t.Fragment,{children:o.map(([n,r])=>t.jsxs("div",{children:[t.jsx(b,{children:n}),t.jsx(f,{children:r.map(({_id:s,drink:a,drinkThumb:h})=>t.jsx(y,{_id:s,drink:a,drinkThumb:h},s))})]},n))}),j=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 80px;
`,u=i(c)`
  font-size: 16px;
  color: ${l.colorBlue};
  background-color: ${l.colorWhite};
  padding: 18px 44px;
  font-weight: 600;
  line-height: 18px;
  word-wrap: break-word;
  border-radius: 42px;
  cursor: pointer;
`,C=()=>{const[o,n]=d.useState([]);return d.useEffect(()=>{(async()=>{try{const s=await x(),a=Object.entries(s);n([...a])}catch(s){console.error("Error fetching drinks:",s)}})()},[]),t.jsxs(j,{children:[t.jsx(g,{drinks:o}),t.jsx(u,{to:"/drinks",children:"Other Drinks"})]})},D="_container_yewh8_1",v="_cont_yewh8_1",N="_imgmain_yewh8_21",O="_title_yewh8_39",z="_text_yewh8_67",L="_btnAddDrinks_yewh8_92",A="_box_yewh8_100",S="_boxtwo_yewh8_107",E="_boxtree_yewh8_125",H="_boxfour_yewh8_156",U="_titleOrdinary_yewh8_187",M="_titleCocktail_yewh8_197",P="_titleShake_yewh8_207",$="_titleOtherUnknow_yewh8_218",B="_list_yewh8_227",F="_item_yewh8_235",T="_itemContent_yewh8_243",W="_btnOtherDrinks_yewh8_249",I="_otherDrinks_yewh8_260",R="_namecoktail_yewh8_267",Y="_nameCoktailLi_yewh8_271",e={container:D,cont:v,imgmain:N,title:O,text:z,btnAddDrinks:L,box:A,boxtwo:S,boxtree:E,boxfour:H,titleOrdinary:U,titleCocktail:M,titleShake:P,titleOtherUnknow:$,list:B,item:F,itemContent:T,btnOtherDrinks:W,otherDrinks:I,namecoktail:R,nameCoktailLi:Y},q="/drinkMaster-Team-1/assets/desktop2x-93bacedb.png",G=()=>t.jsx("div",{className:e.container,children:t.jsxs("div",{className:e.cont,children:[t.jsxs("div",{className:e.box,children:[t.jsxs("h1",{className:e.title,children:["Craft Your Perfect ",t.jsx("b",{})," Drink with Drink Master"]}),t.jsx("p",{className:e.text,children:"Unlock your inner mixologist with Drink Master, your one-stop destination for exploring, crafting, and mastering the world´s finest beverages."}),t.jsx(c,{className:e.btnAddDrinks,to:"/add",children:"Add drink"})]}),t.jsx("img",{className:e.imgmain,src:q,alt:"main-coctail"}),t.jsx("div",{className:e.boxtwo}),t.jsx("div",{className:e.boxtree}),t.jsx("div",{className:e.boxfour}),t.jsx("div",{})]})}),Q=()=>t.jsxs(t.Fragment,{children:[t.jsx(G,{}),t.jsx(C,{})]});export{Q as default};
