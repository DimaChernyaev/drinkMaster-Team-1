import{b as f,z as c,j as s,L as g,A as P,r as a,B as C,E as I}from"./index-f6e3e287.js";import{N as k,D as w,C as E,I as O,T as y,a as D,b as S,c as T,B as L,d as B,e as M,i as b,u as W,f as F}from"./FavoriteDrinksPage.styled-bcb6b90e.js";import{P as N}from"./Paginator-e6b7b975.js";import{P as $}from"./PageTitle-648c41eb.js";import{s as v,a as z}from"./favoriteSelectors-c82fd15c.js";const A=e=>e.own.items,R=e=>e.own.error,Y=({drinks:e})=>{const t=f(),i=c(v),l=c(z);return s.jsxs(s.Fragment,{children:[!l&&!i&&e.length===0&&s.jsx(k,{text:"You haven't added any of your own cocktails yet"}),s.jsx(w,{children:e.length>0&&e.map(({_id:r,drink:d,alcoholic:m,shortDescription:n,drinkThumb:u})=>s.jsxs(E,{children:[s.jsx(O,{src:u,alt:d}),s.jsxs(y,{children:[s.jsx(D,{children:d}),s.jsx(S,{children:m}),s.jsx(T,{children:n})]}),s.jsxs(L,{children:[s.jsx(g,{to:`/drink/${r}`,children:s.jsx(B,{children:"See more"})}),s.jsx(M,{type:"button",onClick:()=>t(P(r)),children:s.jsx("img",{src:b,alt:"trash"})})]})]},r))})]})},Q=()=>{const e=f(),t=c(A),i=c(R),[l,r]=a.useState([]),[d,m]=a.useState(0),[n,u]=a.useState(0),o=W();a.useEffect(()=>{e(C())},[e]),a.useEffect(()=>{const h=n+o,x=t.slice(n,h),p=Math.ceil(t.length/o);r(x),m(p)},[n,o,t]);const j=h=>{const x=h.selected*o%t.length;u(x)};return s.jsxs(F,{children:[s.jsx($,{title:"My drinks"}),s.jsx(Y,{drinks:l}),s.jsx(N,{handlePageClick:j}),i&&s.jsx(I,{})]})};export{Q as default};
