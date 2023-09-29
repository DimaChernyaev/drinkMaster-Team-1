import{R as U,r as se,n as j,x as xe,y as pe,j as y,L as ve,C as ye,D as Ce,G as Pe}from"./index-19cc327c.js";import{a as ke,b as we}from"./favoriteSelectors-b4361c0f.js";import{N as Le}from"./NotFound-11e1c3f5.js";var ge={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},ue=U.createContext&&U.createContext(ge),q=globalThis&&globalThis.__assign||function(){return q=Object.assign||function(s){for(var m,f=1,h=arguments.length;f<h;f++){m=arguments[f];for(var C in m)Object.prototype.hasOwnProperty.call(m,C)&&(s[C]=m[C])}return s},q.apply(this,arguments)},Ne=globalThis&&globalThis.__rest||function(s,m){var f={};for(var h in s)Object.prototype.hasOwnProperty.call(s,h)&&m.indexOf(h)<0&&(f[h]=s[h]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var C=0,h=Object.getOwnPropertySymbols(s);C<h.length;C++)m.indexOf(h[C])<0&&Object.prototype.propertyIsEnumerable.call(s,h[C])&&(f[h[C]]=s[h[C]]);return f};function de(s){return s&&s.map(function(m,f){return U.createElement(m.tag,q({key:f},m.attr),de(m.child))})}function fe(s){return function(m){return U.createElement(je,q({attr:q({},s.attr)},m),de(s.child))}}function je(s){var m=function(f){var h=s.attr,C=s.size,x=s.title,F=Ne(s,["attr","size","title"]),c=C||f.size||"1em",l;return f.className&&(l=f.className),s.className&&(l=(l?l+" ":"")+s.className),U.createElement("svg",q({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},f.attr,h,F,{className:l,style:q(q({color:s.color||f.color},f.style),s.style),height:c,width:c,xmlns:"http://www.w3.org/2000/svg"}),x&&U.createElement("title",null,x),s.children)};return ue!==void 0?U.createElement(ue.Consumer,null,function(f){return m(f)}):m(ge)}function Ze(){const[s,m]=se.useState();return se.useEffect(()=>{function f(){window.innerWidth<1438?m(6):m(9)}return window.addEventListener("resize",f),f(),()=>{window.removeEventListener("resize",f)}},[]),s}const Oe="/drinkMaster-Team-1/assets/trash-fc07c8dc.svg",Ee=j.ul`
  padding: 0;
  margin: 0;
  margin-top: 40px;

  @media (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    row-gap: 80px;
    column-gap: 20px;
    margin-top: 60px;
  }

  @media (min-width: 1280px) {
    margin-top: 62px;
  }

  // column-gap: <line-size>;
  // row-gap: <line-size>;
`,Re=j.div`
  display: block;
  // flex-wrap: wrap;
  padding: 0;
  margin: 0;
  margin-bottom: 40px;

  @media (min-width: 375px) {
    width: 335px;
  }

  @media (min-width: 768px) {
    width: 342px;
    margin-bottom: 0;
  }

  @media (min-width: 1280px) {
    width: 400px;
  }
`;j.li`
  width: 100%;
  max-width: 380px;
  padding: 5px;
  // display: flex;
  // align-items: center;
  // justify-content: space-between;
  margin-bottom: 10px;
  background-color: #fff;

  @media (min-width: 768px) {
    flex-basis: calc((100% - 2 * 20px) / 3);
  }

  @media (min-width: 1280px) {
    flex-basis: calc((100% - 3 * 20px) / 4);
  }
`;const Te=j.img`
  // width: 100%;
  width: 335px;
  display: block;
  // align-items: center;
  // justify-content: space-between;
  margin-bottom: 18px;
  // background-color: #fff;

  border-radius: 8px;
  background: linear-gradient(
    180deg,
    rgba(10, 10, 17, 0.02) 51.18%,
    rgba(10, 10, 17, 0.77) 97.66%
  );

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
`,Ae=j.div`
  margin-bottom: 18px;
`,Se=j.h5`
  font-size: 18px;
  line-height: 1.33;
  margin-bottom: 4px;
`,Be=j.p`
  color: rgba(243, 243, 243, 0.5);
  font-size: 14px;
  line-height: 1.28;
  margin-bottom: 18px;
`,De=j.p`
  font-size: 14px;
  line-height: 1.28;
  margin-bottom: 18px;
`;j.span`
  margin-left: 15px;
`;const _e=j.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
`,Ie=j.button`
  display: flex;
  padding: 14px 40px;
  align-items: flex-start;
  gap: 10px;

  font-weight: 600;
  font-size: 14px;
  line-height: 1.28;
  border: none;
  outline: none;
  border-radius: 42px;
  background: #161f37;
  color: #f3f3f3;

  transform: scale(1);
  transition: transform 800ms;

  &:hover,
  &:focus {
    transform: scale(1.1);
    background: #f3f3f3;
    color: #161f37;
  }
`,ze=j.button`
  display: flex;
  width: 46px;
  padding: 11px 32px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border: none;
  outline: none;
  border-radius: 40px;
  background: #161f37;

  transform: scale(1);
  transition: transform 800ms;

  &:hover,
  &:focus {
    background: #434d67;
    transform: scale(1.1);
  }
`;j.p`
  font-size: 14px;
  font-weight: 700;

  text-align: center;
  margin-bottom: 20px;
`;const Ge=({drinks:s})=>{const m=xe(),f=pe(ke),h=pe(we);return y.jsxs(y.Fragment,{children:[!h&&!f&&s.length===0&&y.jsx(Le,{}),y.jsx(Ee,{children:s.length>0&&s.map(({_id:C,drink:x,alcoholic:F,shortDescription:c,drinkThumb:l})=>y.jsxs(Re,{children:[y.jsx(Te,{src:l,alt:x}),y.jsxs(Ae,{children:[y.jsx(Se,{children:x}),y.jsx(Be,{children:F}),y.jsx(De,{children:c})]}),y.jsxs(_e,{children:[y.jsx(ve,{to:`/drink/${C}`,children:y.jsx(Ie,{children:"See more"})}),y.jsx(ze,{type:"button",onClick:()=>m(ye(C)),children:y.jsx("img",{src:Oe,alt:"trash"})})]})]},C))})]})};var me={exports:{}};(function(s,m){(function(f,h){s.exports=h(se)})(Ce,f=>(()=>{var h={703:(c,l,L)=>{var t=L(414);function Z(){}function Y(){}Y.resetWarningCache=Z,c.exports=function(){function k(le,D,ee,$,ce,Q){if(Q!==t){var te=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw te.name="Invariant Violation",te}}function A(){return k}k.isRequired=k;var G={array:k,bigint:k,bool:k,func:k,number:k,object:k,string:k,symbol:k,any:k,arrayOf:A,element:k,elementType:k,instanceOf:A,node:k,objectOf:A,oneOf:A,oneOfType:A,shape:A,exact:A,checkPropTypes:Y,resetWarningCache:Z};return G.PropTypes=G,G}},697:(c,l,L)=>{c.exports=L(703)()},414:c=>{c.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},98:c=>{c.exports=f}},C={};function x(c){var l=C[c];if(l!==void 0)return l.exports;var L=C[c]={exports:{}};return h[c](L,L.exports,x),L.exports}x.n=c=>{var l=c&&c.__esModule?()=>c.default:()=>c;return x.d(l,{a:l}),l},x.d=(c,l)=>{for(var L in l)x.o(l,L)&&!x.o(c,L)&&Object.defineProperty(c,L,{enumerable:!0,get:l[L]})},x.o=(c,l)=>Object.prototype.hasOwnProperty.call(c,l),x.r=c=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(c,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(c,"__esModule",{value:!0})};var F={};return(()=>{x.r(F),x.d(F,{default:()=>be});var c=x(98),l=x.n(c),L=x(697),t=x.n(L);function Z(){return Z=Object.assign?Object.assign.bind():function(r){for(var i=1;i<arguments.length;i++){var p=arguments[i];for(var u in p)Object.prototype.hasOwnProperty.call(p,u)&&(r[u]=p[u])}return r},Z.apply(this,arguments)}var Y=function(r){var i=r.pageClassName,p=r.pageLinkClassName,u=r.page,W=r.selected,J=r.activeClassName,S=r.activeLinkClassName,a=r.getEventListener,e=r.pageSelectedHandler,d=r.href,n=r.extraAriaContext,o=r.pageLabelBuilder,g=r.rel,v=r.ariaLabel||"Page "+u+(n?" "+n:""),w=null;return W&&(w="page",v=r.ariaLabel||"Page "+u+" is your current page",i=i!==void 0?i+" "+J:J,p!==void 0?S!==void 0&&(p=p+" "+S):p=S),l().createElement("li",{className:i},l().createElement("a",Z({rel:g,role:d?void 0:"button",className:p,href:d,tabIndex:W?"-1":"0","aria-label":v,"aria-current":w,onKeyPress:e},a(e)),o(u)))};Y.propTypes={pageSelectedHandler:t().func.isRequired,selected:t().bool.isRequired,pageClassName:t().string,pageLinkClassName:t().string,activeClassName:t().string,activeLinkClassName:t().string,extraAriaContext:t().string,href:t().string,ariaLabel:t().string,page:t().number.isRequired,getEventListener:t().func.isRequired,pageLabelBuilder:t().func.isRequired,rel:t().string};const k=Y;function A(){return A=Object.assign?Object.assign.bind():function(r){for(var i=1;i<arguments.length;i++){var p=arguments[i];for(var u in p)Object.prototype.hasOwnProperty.call(p,u)&&(r[u]=p[u])}return r},A.apply(this,arguments)}var G=function(r){var i=r.breakLabel,p=r.breakAriaLabel,u=r.breakClassName,W=r.breakLinkClassName,J=r.breakHandler,S=r.getEventListener,a=u||"break";return l().createElement("li",{className:a},l().createElement("a",A({className:W,role:"button",tabIndex:"0","aria-label":p,onKeyPress:J},S(J)),i))};G.propTypes={breakLabel:t().oneOfType([t().string,t().node]),breakAriaLabel:t().string,breakClassName:t().string,breakLinkClassName:t().string,breakHandler:t().func.isRequired,getEventListener:t().func.isRequired};const le=G;function D(r){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return r??i}function ee(r){return ee=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},ee(r)}function $(){return $=Object.assign?Object.assign.bind():function(r){for(var i=1;i<arguments.length;i++){var p=arguments[i];for(var u in p)Object.prototype.hasOwnProperty.call(p,u)&&(r[u]=p[u])}return r},$.apply(this,arguments)}function ce(r,i){for(var p=0;p<i.length;p++){var u=i[p];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(r,u.key,u)}}function Q(r,i){return Q=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(p,u){return p.__proto__=u,p},Q(r,i)}function te(r,i){if(i&&(ee(i)==="object"||typeof i=="function"))return i;if(i!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return E(r)}function E(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function ae(r){return ae=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(i){return i.__proto__||Object.getPrototypeOf(i)},ae(r)}function N(r,i,p){return i in r?Object.defineProperty(r,i,{value:p,enumerable:!0,configurable:!0,writable:!0}):r[i]=p,r}var ie=function(r){(function(a,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(e&&e.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),Object.defineProperty(a,"prototype",{writable:!1}),e&&Q(a,e)})(S,r);var i,p,u,W,J=(u=S,W=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var a,e=ae(u);if(W){var d=ae(this).constructor;a=Reflect.construct(e,arguments,d)}else a=e.apply(this,arguments);return te(this,a)});function S(a){var e,d;return function(n,o){if(!(n instanceof o))throw new TypeError("Cannot call a class as a function")}(this,S),N(E(e=J.call(this,a)),"handlePreviousPage",function(n){var o=e.state.selected;e.handleClick(n,null,o>0?o-1:void 0,{isPrevious:!0})}),N(E(e),"handleNextPage",function(n){var o=e.state.selected,g=e.props.pageCount;e.handleClick(n,null,o<g-1?o+1:void 0,{isNext:!0})}),N(E(e),"handlePageSelected",function(n,o){if(e.state.selected===n)return e.callActiveCallback(n),void e.handleClick(o,null,void 0,{isActive:!0});e.handleClick(o,null,n)}),N(E(e),"handlePageChange",function(n){e.state.selected!==n&&(e.setState({selected:n}),e.callCallback(n))}),N(E(e),"getEventListener",function(n){return N({},e.props.eventListener,n)}),N(E(e),"handleClick",function(n,o,g){var v=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},w=v.isPrevious,B=w!==void 0&&w,V=v.isNext,X=V!==void 0&&V,K=v.isBreak,R=K!==void 0&&K,_=v.isActive,I=_!==void 0&&_;n.preventDefault?n.preventDefault():n.returnValue=!1;var z=e.state.selected,b=e.props.onClick,T=g;if(b){var O=b({index:o,selected:z,nextSelectedPage:g,event:n,isPrevious:B,isNext:X,isBreak:R,isActive:I});if(O===!1)return;Number.isInteger(O)&&(T=O)}T!==void 0&&e.handlePageChange(T)}),N(E(e),"handleBreakClick",function(n,o){var g=e.state.selected;e.handleClick(o,n,g<n?e.getForwardJump():e.getBackwardJump(),{isBreak:!0})}),N(E(e),"callCallback",function(n){e.props.onPageChange!==void 0&&typeof e.props.onPageChange=="function"&&e.props.onPageChange({selected:n})}),N(E(e),"callActiveCallback",function(n){e.props.onPageActive!==void 0&&typeof e.props.onPageActive=="function"&&e.props.onPageActive({selected:n})}),N(E(e),"getElementPageRel",function(n){var o=e.state.selected,g=e.props,v=g.nextPageRel,w=g.prevPageRel,B=g.selectedPageRel;return o-1===n?w:o===n?B:o+1===n?v:void 0}),N(E(e),"pagination",function(){var n=[],o=e.props,g=o.pageRangeDisplayed,v=o.pageCount,w=o.marginPagesDisplayed,B=o.breakLabel,V=o.breakClassName,X=o.breakLinkClassName,K=o.breakAriaLabels,R=e.state.selected;if(v<=g)for(var _=0;_<v;_++)n.push(e.getPageElement(_));else{var I=g/2,z=g-I;R>v-g/2?I=g-(z=v-R):R<g/2&&(z=g-(I=R));var b,T,O=function(M){return e.getPageElement(M)},P=[];for(b=0;b<v;b++){var re=b+1;if(re<=w)P.push({type:"page",index:b,display:O(b)});else if(re>v-w)P.push({type:"page",index:b,display:O(b)});else if(b>=R-I&&b<=R+(R===0&&g>1?z-1:z))P.push({type:"page",index:b,display:O(b)});else if(B&&P.length>0&&P[P.length-1].display!==T&&(g>0||w>0)){var oe=b<R?K.backward:K.forward;T=l().createElement(le,{key:b,breakAriaLabel:oe,breakLabel:B,breakClassName:V,breakLinkClassName:X,breakHandler:e.handleBreakClick.bind(null,b),getEventListener:e.getEventListener}),P.push({type:"break",index:b,display:T})}}P.forEach(function(M,H){var ne=M;M.type==="break"&&P[H-1]&&P[H-1].type==="page"&&P[H+1]&&P[H+1].type==="page"&&P[H+1].index-P[H-1].index<=2&&(ne={type:"page",index:M.index,display:O(M.index)}),n.push(ne.display)})}return n}),a.initialPage!==void 0&&a.forcePage!==void 0&&console.warn("(react-paginate): Both initialPage (".concat(a.initialPage,") and forcePage (").concat(a.forcePage,") props are provided, which is discouraged.")+` Use exclusively forcePage prop for a controlled component.
See https://reactjs.org/docs/forms.html#controlled-components`),d=a.initialPage?a.initialPage:a.forcePage?a.forcePage:0,e.state={selected:d},e}return i=S,(p=[{key:"componentDidMount",value:function(){var a=this.props,e=a.initialPage,d=a.disableInitialCallback,n=a.extraAriaContext,o=a.pageCount,g=a.forcePage;e===void 0||d||this.callCallback(e),n&&console.warn("DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead."),Number.isInteger(o)||console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(o,"). Did you forget a Math.ceil()?")),e!==void 0&&e>o-1&&console.warn("(react-paginate): The initialPage prop provided is greater than the maximum page index from pageCount prop (".concat(e," > ").concat(o-1,").")),g!==void 0&&g>o-1&&console.warn("(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop (".concat(g," > ").concat(o-1,")."))}},{key:"componentDidUpdate",value:function(a){this.props.forcePage!==void 0&&this.props.forcePage!==a.forcePage&&(this.props.forcePage>this.props.pageCount-1&&console.warn("(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop (".concat(this.props.forcePage," > ").concat(this.props.pageCount-1,").")),this.setState({selected:this.props.forcePage})),Number.isInteger(a.pageCount)&&!Number.isInteger(this.props.pageCount)&&console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(this.props.pageCount,"). Did you forget a Math.ceil()?"))}},{key:"getForwardJump",value:function(){var a=this.state.selected,e=this.props,d=e.pageCount,n=a+e.pageRangeDisplayed;return n>=d?d-1:n}},{key:"getBackwardJump",value:function(){var a=this.state.selected-this.props.pageRangeDisplayed;return a<0?0:a}},{key:"getElementHref",value:function(a){var e=this.props,d=e.hrefBuilder,n=e.pageCount,o=e.hrefAllControls;if(d)return o||a>=0&&a<n?d(a+1,n,this.state.selected):void 0}},{key:"ariaLabelBuilder",value:function(a){var e=a===this.state.selected;if(this.props.ariaLabelBuilder&&a>=0&&a<this.props.pageCount){var d=this.props.ariaLabelBuilder(a+1,e);return this.props.extraAriaContext&&!e&&(d=d+" "+this.props.extraAriaContext),d}}},{key:"getPageElement",value:function(a){var e=this.state.selected,d=this.props,n=d.pageClassName,o=d.pageLinkClassName,g=d.activeClassName,v=d.activeLinkClassName,w=d.extraAriaContext,B=d.pageLabelBuilder;return l().createElement(k,{key:a,pageSelectedHandler:this.handlePageSelected.bind(null,a),selected:e===a,rel:this.getElementPageRel(a),pageClassName:n,pageLinkClassName:o,activeClassName:g,activeLinkClassName:v,extraAriaContext:w,href:this.getElementHref(a),ariaLabel:this.ariaLabelBuilder(a),page:a+1,pageLabelBuilder:B,getEventListener:this.getEventListener})}},{key:"render",value:function(){var a=this.props.renderOnZeroPageCount;if(this.props.pageCount===0&&a!==void 0)return a&&a(this.props);var e=this.props,d=e.disabledClassName,n=e.disabledLinkClassName,o=e.pageCount,g=e.className,v=e.containerClassName,w=e.previousLabel,B=e.previousClassName,V=e.previousLinkClassName,X=e.previousAriaLabel,K=e.prevRel,R=e.nextLabel,_=e.nextClassName,I=e.nextLinkClassName,z=e.nextAriaLabel,b=e.nextRel,T=this.state.selected,O=T===0,P=T===o-1,re="".concat(D(B)).concat(O?" ".concat(D(d)):""),oe="".concat(D(_)).concat(P?" ".concat(D(d)):""),M="".concat(D(V)).concat(O?" ".concat(D(n)):""),H="".concat(D(I)).concat(P?" ".concat(D(n)):""),ne=O?"true":"false",he=P?"true":"false";return l().createElement("ul",{className:g||v,role:"navigation","aria-label":"Pagination"},l().createElement("li",{className:re},l().createElement("a",$({className:M,href:this.getElementHref(T-1),tabIndex:O?"-1":"0",role:"button",onKeyPress:this.handlePreviousPage,"aria-disabled":ne,"aria-label":X,rel:K},this.getEventListener(this.handlePreviousPage)),w)),this.pagination(),l().createElement("li",{className:oe},l().createElement("a",$({className:H,href:this.getElementHref(T+1),tabIndex:P?"-1":"0",role:"button",onKeyPress:this.handleNextPage,"aria-disabled":he,"aria-label":z,rel:b},this.getEventListener(this.handleNextPage)),R)))}}])&&ce(i.prototype,p),Object.defineProperty(i,"prototype",{writable:!1}),S}(c.Component);N(ie,"propTypes",{pageCount:t().number.isRequired,pageRangeDisplayed:t().number,marginPagesDisplayed:t().number,previousLabel:t().node,previousAriaLabel:t().string,prevPageRel:t().string,prevRel:t().string,nextLabel:t().node,nextAriaLabel:t().string,nextPageRel:t().string,nextRel:t().string,breakLabel:t().oneOfType([t().string,t().node]),breakAriaLabels:t().shape({forward:t().string,backward:t().string}),hrefBuilder:t().func,hrefAllControls:t().bool,onPageChange:t().func,onPageActive:t().func,onClick:t().func,initialPage:t().number,forcePage:t().number,disableInitialCallback:t().bool,containerClassName:t().string,className:t().string,pageClassName:t().string,pageLinkClassName:t().string,pageLabelBuilder:t().func,activeClassName:t().string,activeLinkClassName:t().string,previousClassName:t().string,nextClassName:t().string,previousLinkClassName:t().string,nextLinkClassName:t().string,disabledClassName:t().string,disabledLinkClassName:t().string,breakClassName:t().string,breakLinkClassName:t().string,extraAriaContext:t().string,ariaLabelBuilder:t().func,eventListener:t().string,renderOnZeroPageCount:t().func,selectedPageRel:t().string}),N(ie,"defaultProps",{pageRangeDisplayed:2,marginPagesDisplayed:3,activeClassName:"selected",previousLabel:"Previous",previousClassName:"previous",previousAriaLabel:"Previous page",prevPageRel:"prev",prevRel:"prev",nextLabel:"Next",nextClassName:"next",nextAriaLabel:"Next page",nextPageRel:"next",nextRel:"next",breakLabel:"...",breakAriaLabels:{forward:"Jump forward",backward:"Jump backward"},disabledClassName:"disabled",disableInitialCallback:!1,pageLabelBuilder:function(r){return r},eventListener:"onClick",renderOnZeroPageCount:void 0,selectedPageRel:"canonical",hrefAllControls:!1});const be=ie})(),F})())})(me);var Me=me.exports;const He=Pe(Me),qe=j(He)`
  display: flex;
  width: 295px;
  padding: 14px 0;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  gap: 24px;

  @media (min-width: 768px) {
    width: 436px;
    padding: 14px 24px;
    // gap: 40px;
  }

  li {
    color: #f3f3f3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 28px;
    height: 28px;
    cursor: pointer;

    &:hover {
      background-color: rgba(64, 112, 205, 0.5);
      border-radius: 50%;
    }

    &.active {
      background-color: rgba(64, 112, 205, 0.5);
      border-radius: 50%;
    }

    &.selected {
      background-color: rgba(64, 112, 205, 0.5);
      border-radius: 50%;
    }
  }

  a {
    text-decoration: none;
    display: inline-block;
    text-align: center;
    color: #f3f3f3;

    font-size: 12px;
    // width: 27px;
    // height: 27px;
  }

  .previous {
    margin-right: 40px;

    &:hover {
      background-color: transparent;
    }
  }

  .next {
    margin-left: 40px;

    &:hover {
      background-color: transparent;
    }
  }
`;function Fe(s){return fe({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M17.77 3.77L16 2 6 12l10 10 1.77-1.77L9.54 12z"}}]})(s)}function We(s){return fe({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M6.23 20.23L8 22l10-10L8 2 6.23 3.77 14.46 12z"}}]})(s)}const Ve=({handlePageClick:s,pageCount:m})=>y.jsx(y.Fragment,{children:!!(m-1)&&y.jsx(qe,{breakLabel:"...",nextLabel:y.jsx(We,{fill:"rgba(243, 243, 243, 0.30)",size:15}),onPageChange:s,pageCount:m,previousLabel:y.jsx(Fe,{fill:"rgba(243, 243, 243, 0.30)",size:15}),renderOnZeroPageCount:null,onPageActive:window.scrollTo({top:0,behavior:"smooth"})})});export{Ge as D,Ve as P,Ze as u};
