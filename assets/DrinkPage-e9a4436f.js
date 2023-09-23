import{j as e,c as t,r as d,e as l}from"./index-068529d7.js";import{s as i,P as c}from"./styled-components.browser.esm-12caea26.js";const m=()=>e.jsx("div",{children:"Drink Ingredients List"}),p=i.button`
  color: ${t.colorBlue};
  background-color: ${t.colorWhite};
  border-radius: 42px;
  border-color: transparent;
  font-size: 14px;
  font-weight: 600;
  padding: 14px 40px;
  margin-bottom: 80px;

  &:hover {
    background-color: ${t.colorBlue} ;
    color: ${t.colorWhite};
  }
  &:focus {
    background-color: ${t.colorBlue} ;
    color: ${t.colorWhite};
  }

  @media (min-width: 768px) {
    font-size: 16px;
    padding: 18px 44px;
}

@media (min-width: 1440px) {
    font-size: 16px;
    padding: 18px 44px;
    margin-bottom: 216px;
}
`,x=({text:n,onClick:o})=>e.jsx(p,{onClick:o,children:n}),g=i.p`
  margin-bottom: 20px;

  color: ${t.colorWhiteFifty};
  font-size: 12px;
  font-weight: 400;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`,h=i.p`
  margin-bottom: 40px;
width: 335px;
  color: ${t.colorWhite};
  font-size: 14px;
  font-weight: 200;

  @media (min-width: 768px) {
    width: 593px;
    font-size: 16px;
  }

`,u=()=>{const[n,o]=d.useState(!1),r=()=>{o(a=>!a)};return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"Coctaile name",style:{marginBottom:"10px"}}),e.jsx(g,{children:"Highball glass / Non alcoholic"}),e.jsx(h,{children:"Just a Moonmint is a refreshing and minty cocktail that combines the flavors of vodka, lime juice, and mint syrup. It is made by shaking vodka, lime juice, mint syrup, and ice together and straining it into a glass."}),e.jsx(x,{text:n?"Add to favorite drinks":"Remove from favorites",onClick:r})]})},b="/drinkMaster-Team-1/assets/desktop@1x-8eda6905.jpg",f="/drinkMaster-Team-1/assets/desktop@2x-0896e2bb.jpg",j="/drinkMaster-Team-1/assets/tablet@1x-1ce56edb.jpg",k="/drinkMaster-Team-1/assets/tablet@2x-11f63109.jpg",s="/drinkMaster-Team-1/assets/mob@1x-b65eaffd.jpg",w="/drinkMaster-Team-1/assets/mob@2x-d2eb580b.jpg",v=i.img`
@media (min-width: 1440px) {
 width: 631;
}
@media (min-width: 768px) {
    width: 704;
}
@media (min-width: 375px) {
    width: 335;
}
`,y=()=>e.jsxs("picture",{children:[e.jsx("source",{media:"(min-width: 1440px)",srcSet:`${b}, ${f} 2x`,type:"image/jpg"}),e.jsx("source",{media:"(min-width: 768px)",srcSet:`${j}, ${k} 2x`,type:"image/jpg"}),e.jsx("source",{media:"(min-width: 375px)",srcSet:`${s}, ${w} 2x`,type:"image/jpg"}),e.jsx(v,{src:s,alt:"Coctails"})]}),$=i.div`
  @media (min-width: 1440px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`,I=i.h3`
  margin-bottom: 40px;
  font-size: 28px;
`,z=i.p`

    width: 335px;
    color: ${t.colorWhite};
    font-size: 14px;
    margin-bottom: 40px;

  @media (min-width: 768px) {
    width: 704px;
  }

  @media (min-width: 1440px) {
    width: 549px;
    font-size: 16px;
    margin-bottom: 0;
  }
`,P=()=>e.jsxs(e.Fragment,{children:[e.jsx(I,{children:"Recipe Preparation"}),e.jsxs($,{children:[e.jsxs(z,{children:["Placer tous les ingrédients dans le bol du mélangeur - couvrir et fouetter à vitesse moyenne jusquà ce que le tout soit bien mélangé. Verser dans un grand, 2 moyens ou 3 petits verres et boire. Mettere tutti gli ingredienti nella caraffa del frullatore - coprire e montare a velocità media fino a quando non sono ben amalgamati.Versare in un bicchiere alto, 2 medi o 3 piccoli e bere. ",e.jsx("br",{})," Place all ingredients in the blender jar - cover and whiz on medium speed until well blended. Pour in one tall, 2 medium or 3 small glasses and drink up. Coloque todos los ingredientes en el vaso de la licuadora, tape y mezcle a velocidad media hasta que estén bien mezclados. Vierta en un vaso alto, 2 medianos o 3 pequeños y beba.Alle Zutaten in den Mixer geben - abdecken und bei mittlerer Geschwindigkeit schaumig schlagen, bis sie gut vermischt sind. In ein großes, 2 mittlere oder 3 kleine Gläser füllen und geniessen. ",e.jsx("br",{}),"Just a Moonmint is a refreshing and minty cocktail that combines the flavors of vodka, lime juice, and mint syrup. It is made by shaking vodka, lime juice, mint syrup, and ice together and straining it into a glass. The result is a crisp and invigorating drink with a hint of sweetness from the mint syrup. Sip on this cocktail and let the coolness of the mint refresh your palate."]}),e.jsx(y,{})]})]}),T=()=>e.jsxs(e.Fragment,{children:[e.jsx(u,{}),e.jsx(m,{}),e.jsx(P,{})]}),S=()=>{const{drinkId:n}=l();return e.jsx(T,{id:n})};export{S as default};
