import{b as f,D as c,j as s,L as g,G as P,r as a,H as C,E as I}from"./index-e5ba5edb.js";import{N as k,D as w,C as D,I as E,T as O,a as y,b as S,c as T,B as L,d as B,e as M,i as b,u as W,f as F}from"./FavoriteDrinksPage.styled-a1ad8cd2.js";import{P as N}from"./Paginator-079cc0e3.js";import{P as $}from"./PageTitle-b51751e7.js";import{s as v,a as G}from"./favoriteSelectors-c82fd15c.js";const H=e=>e.own.items,R=e=>e.own.error,Y=({drinks:e})=>{const t=f(),i=c(v),l=c(G);return s.jsxs(s.Fragment,{children:[!l&&!i&&e.length===0&&s.jsx(k,{text:"You haven't added any of your own cocktails yet"}),s.jsx(w,{children:e.length>0&&e.map(({_id:r,drink:d,alcoholic:m,shortDescription:n,drinkThumb:u})=>s.jsxs(D,{children:[s.jsx(E,{src:u,alt:d}),s.jsxs(O,{children:[s.jsx(y,{children:d}),s.jsx(S,{children:m}),s.jsx(T,{children:n})]}),s.jsxs(L,{children:[s.jsx(g,{to:`/drink/${r}`,children:s.jsx(B,{children:"See more"})}),s.jsx(M,{type:"button",onClick:()=>t(P(r)),children:s.jsx("img",{src:b,alt:"trash"})})]})]},r))})]})},Q=()=>{const e=f(),t=c(H),i=c(R),[l,r]=a.useState([]),[d,m]=a.useState(0),[n,u]=a.useState(0),o=W();a.useEffect(()=>{e(C())},[e]),a.useEffect(()=>{const h=n+o,x=t.slice(n,h),p=Math.ceil(t.length/o);r(x),m(p)},[n,o,t]);const j=h=>{const x=h.selected*o%t.length;u(x)};return s.jsxs(F,{children:[s.jsx($,{title:"My drinks"}),s.jsx(Y,{drinks:l}),s.jsx(N,{handlePageClick:j}),i&&s.jsx(I,{})]})};export{Q as default};