import{a as g,B as i,j as s,L as C,C as I,r as n,D as L,E as y}from"./index-6fa5008b.js";import{N as D,D as k,C as w,I as E,T as O,a as S,b as T,c as B,B as M,d as F,e as W,i as b,u as N,f as $}from"./FavoriteDrinksPage.styled-8a84cf0f.js";import{P as v}from"./Paginator-d1745d14.js";import{P as R}from"./PageTitle-cdd5383b.js";import{s as Y,a as q}from"./favoriteSelectors-c82fd15c.js";import{L as z}from"./LoaderDots-4966b1d0.js";const A=e=>e.own.items,G=e=>e.own.error,H=({drinks:e})=>{const t=g(),l=i(Y),d=i(q);return s.jsxs(s.Fragment,{children:[!d&&!l&&e.length===0&&s.jsx(D,{text:"You haven't added any of your own cocktails yet"}),s.jsx(k,{children:e.length>0&&e.map(({_id:r,drink:o,alcoholic:m,shortDescription:f,drinkThumb:u})=>s.jsxs(w,{children:[s.jsx(E,{src:u,alt:o}),s.jsxs(O,{children:[s.jsx(S,{children:o}),s.jsx(T,{children:m}),s.jsx(B,{children:f})]}),s.jsxs(M,{children:[s.jsx(C,{to:`/drink/${r}`,children:s.jsx(F,{children:"See more"})}),s.jsx(W,{type:"button",onClick:()=>t(I(r)),children:s.jsx("img",{src:b,alt:"trash"})})]})]},r))})]})},Z=()=>{const e=g(),t=i(A),l=i(G),[d,r]=n.useState(!1),[o,m]=n.useState([]),[f,u]=n.useState(0),[h,j]=n.useState(0),c=N();n.useEffect(()=>{r(!0);try{e(L())}catch(a){console.log(a)}finally{r(!1)}},[e]),n.useEffect(()=>{const a=h+c,x=t.slice(h,a),P=Math.ceil(t.length/c);m(x),u(P)},[h,c,t]);const p=a=>{const x=a.selected*c%t.length;j(x)};return s.jsxs($,{children:[s.jsx(R,{title:"My drinks"}),d?s.jsx(z,{}):s.jsxs(s.Fragment,{children:[s.jsx(H,{drinks:o}),s.jsx(v,{handlePageClick:p})]}),l&&s.jsx(y,{})]})};export{Z as default};
