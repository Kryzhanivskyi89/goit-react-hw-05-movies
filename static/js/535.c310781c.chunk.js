"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[535],{535:function(e,t,r){r.r(t),r.d(t,{default:function(){return f}});var s=r(439),a=r(791),c=r(87),o=r(534),n={searchbar:"styles_searchbar__WemNa",SearchForm:"styles_SearchForm__f4eKS",SearchformButton:"styles_SearchformButton__fVqBt",searchform__input:"styles_searchform__input__LYi6s",SearchformInput:"styles_SearchformInput__tKwpo"},u=r(184),l=function(e){var t,r=e.setSearchParams,s=null!==(t=e.searchParams.get("query"))&&void 0!==t?t:"";return(0,u.jsx)("div",{className:n.searchbar,children:(0,u.jsxs)("form",{className:n.SearchForm,onSubmit:function(e){e.preventDefault();var t=e.target.elements.search.value;r({query:t})},children:[(0,u.jsx)("button",{type:"submit",className:n.SearchformButton,children:(0,u.jsx)("span",{className:n.searchform__button__label,children:"Search"})}),(0,u.jsx)("input",{className:n.searchform__input,name:"search",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies",defaultValue:s})]})})},h=r(708),m=r(474),i=r(882),f=function(){var e=(0,c.lr)(),t=(0,s.Z)(e,2),r=t[0],n=t[1],f=(0,a.useState)([]),_=(0,s.Z)(f,2),p=_[0],S=_[1],d=(0,a.useState)(1),v=(0,s.Z)(d,2),x=v[0],j=v[1],b=(0,a.useState)(!1),y=(0,s.Z)(b,2),N=y[0],Z=y[1];return console.log(p),(0,a.useEffect)((function(){var e=r.get("query");e&&(Z(!0),S([]),(0,o.Z)("search/movie",e,1).then((function(e){S(e.results),j(e.total_results),Z(!1)})).catch((function(e){console.log(e),Z(!1)})))}),[r]),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(l,{setSearchParams:n,searchParams:r}),N&&(0,u.jsx)(m.Z,{}),p&&0!==p.length&&(0,u.jsx)("section",{className:i.Z.movieList,children:(0,u.jsx)(h.Z,{movieItems:p})}),0===x&&(0,u.jsx)("div",{children:"Not found movies"})]})}}}]);
//# sourceMappingURL=535.c310781c.chunk.js.map