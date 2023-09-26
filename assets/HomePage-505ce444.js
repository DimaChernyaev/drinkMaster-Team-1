import{n as i,L as l,c,j as t,r as d}from"./index-75eface7.js";import{g as k}from"./operationsDrinks-073a24fe.js";const m=i.li``,h=i.img`
  display: block;
  border-radius: 8px;

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
`,p=i(l)`
  color: ${c.colorWhiteFifty};
  font-size: 16px;
  font-size: 500;
  line-height: 1.2;
  word-wrap: break-word;
  align-self: flex-start;

  @media (min-width: 375px) {
    font-size: 14px;
  }

  @media (min-width: 768px) {
    font-size: 14px;
  }
`,b=i.div`
  display: flex;
  margin-top: 14px;
  align-items: center;
  justify-content: space-between;
`,g=({_id:s,drink:n,drinkThumb:r})=>t.jsxs(m,{children:[t.jsx(h,{src:r,alt:n}),t.jsxs(b,{children:[t.jsx(_,{children:n}),t.jsx(p,{to:`drink/${s}`,children:"See more"})]})]},s),f=i.ul`
  display: flex;
  gap: 20px;
  flex-basis: calc(100% - 40px / 3);
`,w=i.h2`
  margin-bottom: 40px;
  font-size: 40px;
  font-weight: 600;
`,j=({drinks:s})=>t.jsx(t.Fragment,{children:s.map(([n,r])=>t.jsxs("div",{children:[t.jsx(w,{children:n}),t.jsx(f,{children:r.map(({_id:o,drink:a,drinkThumb:x})=>t.jsx(g,{_id:o,drink:a,drinkThumb:x},o))})]},n))}),u=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 80px;
`,C=i(l)`
  font-size: 16px;
  color: ${c.colorBlue};
  background-color: ${c.colorWhite};
  padding: 18px 44px;
  font-weight: 600;
  line-height: 18px;
  word-wrap: break-word;
  border-radius: 42px;
  cursor: pointer;
`,D=()=>{const[s,n]=d.useState([]);return d.useEffect(()=>{(async()=>{try{const o=await k(),a=Object.entries(o);n([...a])}catch(o){console.error("Error fetching drinks:",o)}})()},[]),t.jsxs(u,{children:[t.jsx(j,{drinks:s}),t.jsx(C,{to:"/drinks",children:"Other Drinks"})]})},y="_container_ak46e_1",v="_cont_ak46e_1",N="_imgmain_ak46e_17",O="_title_ak46e_24",z="_text_ak46e_37",L="_btnAddDrinks_ak46e_50",A="_box_ak46e_58",S="_boxtwo_ak46e_65",E="_boxtree_ak46e_77",H="_boxfour_ak46e_92",U="_titleOrdinary_ak46e_105",$="_titleCocktail_ak46e_115",F="_titleShake_ak46e_125",M="_titleOtherUnknow_ak46e_136",P="_list_ak46e_145",W="_item_ak46e_153",B="_itemContent_ak46e_161",T="_btnOtherDrinks_ak46e_167",I="_otherDrinks_ak46e_178",R="_namecoktail_ak46e_185",Y="_nameCoktailLi_ak46e_189",e={container:y,cont:v,imgmain:N,title:O,text:z,btnAddDrinks:L,box:A,boxtwo:S,boxtree:E,boxfour:H,titleOrdinary:U,titleCocktail:$,titleShake:F,titleOtherUnknow:M,list:P,item:W,itemContent:B,btnOtherDrinks:T,otherDrinks:I,namecoktail:R,nameCoktailLi:Y},q="/drinkMaster-Team-1/assets/desktop2x-93bacedb.png",G=()=>t.jsx("div",{className:e.container,children:t.jsxs("div",{className:e.cont,children:[t.jsx("div",{className:e.boxfour}),t.jsxs("div",{className:e.box,children:[t.jsxs("h1",{className:e.title,children:["Craft Your Perfect ",t.jsx("b",{})," Drink with Drink Master"]}),t.jsx("p",{className:e.text,children:"Unlock your inner mixologist with Drink Master, your one-stop destination for exploring, crafting, and mastering the world´s finest beverages."}),t.jsx(l,{className:e.btnAddDrinks,to:"/add",children:"Add drink"})]}),t.jsx("img",{className:e.imgmain,src:q,alt:"main-coctail"}),t.jsx("div",{className:e.boxtwo}),t.jsx("div",{className:e.boxtree}),t.jsx("div",{})]})}),Q=()=>t.jsxs(t.Fragment,{children:[t.jsx(G,{}),t.jsx(D,{})]});export{Q as default};
