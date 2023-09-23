import{n as t,j as n}from"./index-4d3ad070.js";const e=t.ul`
  padding-left: 0px;
`;t.li`
  width: 100%;
  max-width: 380px;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  background-color: #fff;
`;t.p`
  display: flex;
  font-size: 18px;
`;t.span`
  margin-left: 15px;
`;t.button`
  padding: 5px 20px;

  background-color: teal;
  border: none;
  outline: none;
  color: aliceblue;
  border-radius: 5px;

  &:hover,
  &:focus {
    background-color: #008080a8;
  }
`;t.button`
  margin: 0;
  // margin-right: 50px;
  padding: 10px;
  border: none;
  background-color: transparent;
  cursor: pointer;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  transform: scale(1);
  transition: transform 200ms;

  &:hover,
  &:focus {
    transform: scale(1.2);
  }
`;t.p`
  font-size: 14px;
  font-weight: 700;

  text-align: center;
  margin-bottom: 20px;
`;const i=({drinks:a,onDeleteDrinks:d})=>n.jsx(n.Fragment,{children:n.jsx(e,{})}),r=()=>n.jsx("div",{children:n.jsx("title",{children:"Paginator"})}),o=t.div`
  display: flex;
  // justify-content: center;
  // align-items: center;
  padding-top: 80px;
  padding-bottom: 80px;
  padding-left: 20px;
  padding-right: 20px;
`,s=t.h1`
  font-size: 32px;
  line-height: 1.18; /* 118.75% */
`,p=()=>n.jsxs(o,{children:[n.jsx(s,{children:"My drinks"}),n.jsx(i,{}),n.jsx(r,{})]});export{p as default};
