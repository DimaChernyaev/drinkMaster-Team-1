import{a as f,B as c,j as s,L as P,G as C,r as n,H as I,E as v}from"./index-6fa5008b.js";import{N as F,D as k,C as D,I as E,T as S,a as T,b as L,c as B,B as y,d as O,e as b,i as W,u as M,f as N}from"./FavoriteDrinksPage.styled-8a84cf0f.js";import{s as w,a as j,b as G}from"./favoriteSelectors-c82fd15c.js";import{P as H}from"./Paginator-d1745d14.js";import{P as R}from"./PageTitle-cdd5383b.js";const Y=({drinks:e})=>{const t=f(),l=c(w),d=c(j);return s.jsxs(s.Fragment,{children:[!d&&!l&&e.length===0&&s.jsx(F,{text:"You haven't added any favorites cocktails yet"}),s.jsx(k,{children:e.length>0&&e.map(({_id:a,drink:o,alcoholic:h,shortDescription:r,drinkThumb:m})=>s.jsxs(D,{children:[s.jsx(E,{src:m,alt:o}),s.jsxs(S,{children:[s.jsx(T,{children:o}),s.jsx(L,{children:h}),s.jsx(B,{children:r})]}),s.jsxs(y,{children:[s.jsx(P,{to:`/drink/${a}`,children:s.jsx(O,{children:"See more"})}),s.jsx(b,{type:"button",onClick:()=>t(C(a)),children:s.jsx("img",{src:W,alt:"trash"})})]})]},a))})]})},K=()=>{const e=f(),t=c(G),l=c(j),[d,a]=n.useState([]),[o,h]=n.useState(0),[r,m]=n.useState(0),i=M();n.useEffect(()=>{e(I())},[e]),n.useEffect(()=>{const u=r+i,x=t.slice(r,u),g=Math.ceil(t.length/i);a(x),h(g)},[r,i,t]);const p=u=>{const x=u.selected*i%t.length;m(x)};return s.jsxs(N,{children:[s.jsx(R,{title:"Favorites"}),s.jsx(Y,{drinks:d}),s.jsx(H,{handlePageClick:p,pageCount:o}),l&&s.jsx(v,{})]})};export{K as default};