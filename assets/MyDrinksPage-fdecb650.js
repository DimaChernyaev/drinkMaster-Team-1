import{b as j,z as c,j as s,L as g,A as P,r as a,B as C,E as I}from"./index-0c9e44b5.js";import{N as E,D as O,C as k,I as w,T as D,a as S,b as T,c as L,B,d as y,e as M,i as b,u as W,f as F}from"./FavoriteDrinksPage.styled-2d914d72.js";import{P as N}from"./Paginator-9ce29e71.js";import{P as $}from"./PageTitle-e216c46e.js";import{s as z,a as A}from"./favoriteSelectors-c82fd15c.js";const R=e=>e.own.items,q=e=>e.own.error,v=({drinks:e})=>{const t=j(),i=c(z),l=c(A);return s.jsxs(s.Fragment,{children:[!l&&!i&&e.length===0&&s.jsx(E,{}),s.jsx(O,{children:e.length>0&&e.map(({_id:r,drink:m,alcoholic:d,shortDescription:n,drinkThumb:h})=>s.jsxs(k,{children:[s.jsx(w,{src:h,alt:m}),s.jsxs(D,{children:[s.jsx(S,{children:m}),s.jsx(T,{children:d}),s.jsx(L,{children:n})]}),s.jsxs(B,{children:[s.jsx(g,{to:`/drink/${r}`,children:s.jsx(y,{children:"See more"})}),s.jsx(M,{type:"button",onClick:()=>t(P(r)),children:s.jsx("img",{src:b,alt:"trash"})})]})]},r))})]})},U=()=>{const e=j(),t=c(R),i=c(q),[l,r]=a.useState([]),[m,d]=a.useState(0),[n,h]=a.useState(0),o=W();a.useEffect(()=>{e(C())},[e]),a.useEffect(()=>{const u=n+o,x=t.slice(n,u),p=Math.ceil(t.length/o);r(x),d(p)},[n,o,t]);const f=u=>{const x=u.selected*o%t.length;h(x)};return s.jsxs(F,{children:[s.jsx($,{title:"My drinks"}),s.jsx(v,{drinks:l}),s.jsx(N,{handlePageClick:f}),i&&s.jsx(I,{})]})};export{U as default};
