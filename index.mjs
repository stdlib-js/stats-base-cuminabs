// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@esm/index.mjs";var s=e,i=t;var n=e,a=t;var f=function(r,e,t,n,a){var f,d,o,m,l;if(r<=0)return n;if(o=a<0?(1-r)*a:0,f=i(e[d=t<0?(1-r)*t:0]),n[o]=f,o+=a,l=1,!1===s(f))for(;l<r;l++){if(m=i(e[d+=t]),s(m)){f=m;break}m<f&&(f=m),n[o]=f,o+=a}if(s(f))for(;l<r;l++)n[o]=f,o+=a;return n};r(f,"ndarray",(function(r,e,t,s,i,f,d){var o,m,l,p,b;if(r<=0)return i;if(l=d,o=a(e[m=s]),i[l]=o,l+=f,b=1,!1===n(o))for(;b<r;b++){if(p=a(e[m+=t]),n(p)){o=p;break}p<o&&(o=p),i[l]=o,l+=f}if(n(o))for(;b<r;b++)i[l]=o,l+=f;return i}));var d=f;export{d as default};
//# sourceMappingURL=index.mjs.map
