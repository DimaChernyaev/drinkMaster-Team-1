import{n as i,L as c,j as t,c as l,r as d}from"./index-70fd4a7c.js";import{g as k}from"./operationsDrinks-445b92b1.js";const m=i.img`
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
`,h=i.p`
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
`,p=i.div`
  display: flex;
  margin-top: 14px;
  align-items: center;
  justify-content: space-between;
`,b=({_id:o,drink:n,drinkThumb:r})=>t.jsxs("li",{children:[t.jsx(m,{src:r,alt:n}),t.jsxs(p,{children:[t.jsx(h,{children:n}),t.jsx(_,{to:`drink/${o}`,children:"See more"})]})]},o),f=i.ul`
  display: flex;
  gap: 20px;
  flex-basis: calc(100% - 40px / 3);
`,g=i.h2`
  margin-bottom: 40px;
  font-size: 40px;
  font-weight: 600;
`,w=({drinks:o})=>t.jsx(t.Fragment,{children:o.map(([n,r])=>t.jsxs("div",{children:[t.jsx(g,{children:n}),t.jsx(f,{children:r.map(({_id:s,drink:a,drinkThumb:x})=>t.jsx(b,{_id:s,drink:a,drinkThumb:x},s))})]},n))}),j=i.div`
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
`,D=()=>{const[o,n]=d.useState([]);return d.useEffect(()=>{(async()=>{try{const s=await k(),a=Object.entries(s);n([...a])}catch(s){console.error("Error fetching drinks:",s)}})()},[]),t.jsxs(j,{children:[t.jsx(w,{drinks:o}),t.jsx(u,{to:"/drinks",children:"Other Drinks"})]})},C="_container_ak46e_1",v="_cont_ak46e_1",y="_imgmain_ak46e_17",N="_title_ak46e_24",O="_text_ak46e_37",z="_btnAddDrinks_ak46e_50",L="_box_ak46e_58",A="_boxtwo_ak46e_65",S="_boxtree_ak46e_77",E="_boxfour_ak46e_92",H="_titleOrdinary_ak46e_105",U="_titleCocktail_ak46e_115",M="_titleShake_ak46e_125",P="_titleOtherUnknow_ak46e_136",$="_list_ak46e_145",B="_item_ak46e_153",F="_itemContent_ak46e_161",T="_btnOtherDrinks_ak46e_167",W="_otherDrinks_ak46e_178",I="_namecoktail_ak46e_185",R="_nameCoktailLi_ak46e_189",e={container:C,cont:v,imgmain:y,title:N,text:O,btnAddDrinks:z,box:L,boxtwo:A,boxtree:S,boxfour:E,titleOrdinary:H,titleCocktail:U,titleShake:M,titleOtherUnknow:P,list:$,item:B,itemContent:F,btnOtherDrinks:T,otherDrinks:W,namecoktail:I,nameCoktailLi:R},Y="/drinkMaster-Team-1/assets/desktop2x-93bacedb.png",q=()=>t.jsx("div",{className:e.container,children:t.jsxs("div",{className:e.cont,children:[t.jsx("div",{className:e.boxfour}),t.jsxs("div",{className:e.box,children:[t.jsxs("h1",{className:e.title,children:["Craft Your Perfect ",t.jsx("b",{})," Drink with Drink Master"]}),t.jsx("p",{className:e.text,children:"Unlock your inner mixologist with Drink Master, your one-stop destination for exploring, crafting, and mastering the world´s finest beverages."}),t.jsx(c,{className:e.btnAddDrinks,to:"/add",children:"Add drink"})]}),t.jsx("img",{className:e.imgmain,src:Y,alt:"main-coctail"}),t.jsx("div",{className:e.boxtwo}),t.jsx("div",{className:e.boxtree}),t.jsx("div",{})]})}),K=()=>t.jsxs(t.Fragment,{children:[t.jsx(q,{}),t.jsx(D,{})]});export{K as default};
