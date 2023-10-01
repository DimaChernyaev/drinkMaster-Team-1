import{n as t,L as p,j as i}from"./index-606e2233.js";const a=t.li`
  @media (max-width: 374px) {
    &:nth-of-type(2) {
      display: none;
    }
    &:nth-of-type(3) {
      display: none;
    }
  }

  @media (min-width: 375px) {
    &:nth-of-type(2) {
      display: none;
    }
    &:nth-of-type(3) {
      display: none;
    }
  }

  @media (min-width: 768px) {
    &:nth-of-type(2) {
      display: block;
    }
    &:nth-of-type(3) {
      display: none;
    }
  }

  @media (min-width: 1280px) {
    &:nth-of-type(2) {
      display: block;
    }
    &:nth-of-type(3) {
      display: block;
    }
  }
`,d=t.img`
  display: block;
  border-radius: 8px;
  display: flex;
  width: 335px;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;

  @media (max-width: 350px) {
    width: 100%;
    min-width: 290px;
  }

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
`,s=t.p`
  font-size: 500;
  line-height: 1.3;
  word-wrap: break-word;

  @media (min-width: 375px) {
    font-size: 16px;
  }

  @media (min-width: 768px) {
    font-size: 18px;
  }
`,r=t(p)`
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
`,h=t.div`
  display: flex;
  margin-top: 14px;
  align-items: center;
  justify-content: space-between;
`,l=({_id:e,drink:n,drinkThumb:o})=>i.jsxs(a,{children:[i.jsx(d,{src:o,alt:n}),i.jsxs(h,{children:[i.jsx(s,{children:n}),i.jsx(r,{to:`drink/${e}`,children:"See more"})]})]},e);export{l as C};
