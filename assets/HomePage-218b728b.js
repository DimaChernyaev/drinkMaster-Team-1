import{n as i,L as c,j as t,c as l,r as d}from"./index-2b494c94.js";import{g as h}from"./operationsDrinks-73054b77.js";i.li`
@media (min-width: 375px) {
    width: 335px;
    &:nth-child(2) {
     display: none;
    }
    &:nth-child(3) {
     display: none;
    }
  }

  @media (min-width: 1280px) {
    width: 400px;
    height: 400px;
    &:nth-child(2) {
     display: block;
    }
    &:nth-child(3) {
     display: block;
    }
  }
`;const m=i.img`
  display: block;
  border-radius: 8px;
  display: flex;
width: 335px;
flex-direction: column;
align-items: flex-start;
gap: 14px;
  /* flex-basis: calc(100% - 40px / 3); */

  @media (min-width: 375px) {
    width: 335px;
    height: 360px;
    /* /* flex-direction: column;
    align-items: flex-start;
    gap: 14px; */
  }

  @media (min-width: 768px) {
    width: 342px;
    height: 360px;
  }

  @media (min-width: 1280px) {
    width: 400px;
    height: 400px;
  }
`,p=i.p`
  font-size: 500;
  line-height: 1.3;
  word-wrap: break-word;

  @media (min-width: 375px) {
    font-size: 16px;
  }

  @media (min-width: 768px) {
    font-size: 18px;
  }
`,w=i(c)`
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
`,_=i.div`
  display: flex;
  margin-top: 14px;
  align-items: center;
  justify-content: space-between;
`,k=({_id:s,drink:n,drinkThumb:r})=>t.jsxs("li",{children:[t.jsx(m,{src:r,alt:n}),t.jsxs(_,{children:[t.jsx(p,{children:n}),t.jsx(w,{to:`drink/${s}`,children:"See more"})]})]},s),f=i.ul`
  display: flex;
  gap: 20px;
  flex-basis: calc(100% - 40px / 3);
`,g=i.h2`
  margin-bottom: 40px;
  font-size: 40px;
  font-weight: 600;
`,y=({drinks:s})=>t.jsx(t.Fragment,{children:s.map(([n,r])=>t.jsxs("div",{children:[t.jsx(g,{children:n}),t.jsx(f,{children:r.map(({_id:o,drink:a,drinkThumb:x})=>t.jsx(k,{_id:o,drink:a,drinkThumb:x},o))})]},n))}),b=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 80px;
`,j=i(c)`
  font-size: 16px;
  color: ${l.colorBlue};
  background-color: ${l.colorWhite};
  padding: 18px 44px;
  font-weight: 600;
  line-height: 18px;
  word-wrap: break-word;
  border-radius: 42px;
  cursor: pointer;
`,u=()=>{const[s,n]=d.useState([]);return d.useEffect(()=>{(async()=>{try{const o=await h(),a=Object.entries(o);n([...a])}catch(o){console.error("Error fetching drinks:",o)}})()},[]),t.jsxs(b,{children:[t.jsx(y,{drinks:s}),t.jsx(j,{to:"/drinks",children:"Other Drinks"})]})},D="_container_yewh8_1",C="_cont_yewh8_1",v="_imgmain_yewh8_21",N="_title_yewh8_39",O="_text_yewh8_67",z="_btnAddDrinks_yewh8_92",L="_box_yewh8_100",A="_boxtwo_yewh8_107",S="_boxtree_yewh8_125",E="_boxfour_yewh8_156",H="_titleOrdinary_yewh8_187",U="_titleCocktail_yewh8_197",M="_titleShake_yewh8_207",P="_titleOtherUnknow_yewh8_218",$="_list_yewh8_227",B="_item_yewh8_235",F="_itemContent_yewh8_243",T="_btnOtherDrinks_yewh8_249",W="_otherDrinks_yewh8_260",I="_namecoktail_yewh8_267",R="_nameCoktailLi_yewh8_271",e={container:D,cont:C,imgmain:v,title:N,text:O,btnAddDrinks:z,box:L,boxtwo:A,boxtree:S,boxfour:E,titleOrdinary:H,titleCocktail:U,titleShake:M,titleOtherUnknow:P,list:$,item:B,itemContent:F,btnOtherDrinks:T,otherDrinks:W,namecoktail:I,nameCoktailLi:R},Y="/drinkMaster-Team-1/assets/desktop2x-93bacedb.png",q=()=>t.jsx("div",{className:e.container,children:t.jsxs("div",{className:e.cont,children:[t.jsxs("div",{className:e.box,children:[t.jsxs("h1",{className:e.title,children:["Craft Your Perfect ",t.jsx("b",{})," Drink with Drink Master"]}),t.jsx("p",{className:e.text,children:"Unlock your inner mixologist with Drink Master, your one-stop destination for exploring, crafting, and mastering the world´s finest beverages."}),t.jsx(c,{className:e.btnAddDrinks,to:"/add",children:"Add drink"})]}),t.jsx("img",{className:e.imgmain,src:Y,alt:"main-coctail"}),t.jsx("div",{className:e.boxtwo}),t.jsx("div",{className:e.boxtree}),t.jsx("div",{className:e.boxfour}),t.jsx("div",{})]})}),K=()=>t.jsxs(t.Fragment,{children:[t.jsx(q,{}),t.jsx(u,{})]});export{K as default};
