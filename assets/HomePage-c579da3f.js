import{n,L as c,c as x,j as t,r as l}from"./index-adf344b2.js";import{g as k}from"./operationsDrinks-b7c644b1.js";const _="_container_ak46e_1",m="_cont_ak46e_1",h="_imgmain_ak46e_17",b="_title_ak46e_24",j="_text_ak46e_37",p="_btnAddDrinks_ak46e_50",g="_box_ak46e_58",f="_boxtwo_ak46e_65",u="_boxtree_ak46e_77",C="_boxfour_ak46e_92",D="_titleOrdinary_ak46e_105",w="_titleCocktail_ak46e_115",y="_titleShake_ak46e_125",v="_titleOtherUnknow_ak46e_136",N="_list_ak46e_145",O="_item_ak46e_153",A="_itemContent_ak46e_161",S="_btnOtherDrinks_ak46e_167",L="_otherDrinks_ak46e_178",E="_namecoktail_ak46e_185",U="_nameCoktailLi_ak46e_189",e={container:_,cont:m,imgmain:h,title:b,text:j,btnAddDrinks:p,box:g,boxtwo:f,boxtree:u,boxfour:C,titleOrdinary:D,titleCocktail:w,titleShake:y,titleOtherUnknow:v,list:N,item:O,itemContent:A,btnOtherDrinks:S,otherDrinks:L,namecoktail:E,nameCoktailLi:U},F=n.li``,H=n.img`
  display: block;
  width: 400px;
  height: 400px;
`,M=n.p`
  font-size: 24px;
`;n(c)`
  color: ${x.colorWhiteFifty};
  font-size: 18px;
`;const P=n.div`
  display: flex;
  margin-top: 14px;
  align-items: center;
  justify-content: space-between;
`,z=({_id:i,drink:s,drinkThumb:r})=>t.jsxs(F,{children:[t.jsx(H,{src:r,alt:s}),t.jsxs(P,{children:[t.jsx(M,{children:s}),t.jsx(c,{to:`drink/${i}`,children:"See more"})]})]}),W=n.ul`
  display: flex;
  gap: 20px;
  flex-basis: calc(100% - 40px / 3);
`,$=({drinks:i})=>t.jsx(t.Fragment,{children:i.map(([s,r])=>t.jsxs("div",{children:[t.jsx("h2",{children:s}),t.jsx(W,{children:r.map(({_id:o,drink:a,drinkThumb:d})=>t.jsx(z,{_id:o,drink:a,drinkThumb:d}))})]}))}),B=()=>{const[i,s]=l.useState([]);return l.useEffect(()=>{(async()=>{try{const o=await k(),a=Object.entries(o);s([...a])}catch(o){console.error("Error fetching drinks:",o)}})()},[]),t.jsx("div",{children:t.jsx($,{drinks:i})})},I="/drinkMaster-Team-1/assets/desktop2x-93bacedb.png",R=()=>t.jsx("div",{className:e.container,children:t.jsxs("div",{className:e.cont,children:[t.jsx("div",{className:e.boxfour}),t.jsxs("div",{className:e.box,children:[t.jsxs("h1",{className:e.title,children:["Craft Your Perfect ",t.jsx("b",{})," Drink with Drink Master"]}),t.jsx("p",{className:e.text,children:"Unlock your inner mixologist with Drink Master, your one-stop destination for exploring, crafting, and mastering the world´s finest beverages."}),t.jsx(c,{className:e.btnAddDrinks,to:"/add",children:"Add drink"})]}),t.jsx("img",{className:e.imgmain,src:I,alt:"main-coctail"}),t.jsx("div",{className:e.boxtwo}),t.jsx("div",{className:e.boxtree}),t.jsx("div",{})]})}),q=()=>t.jsxs(t.Fragment,{children:[t.jsx(R,{}),t.jsx(B,{}),";"]});export{q as default};
