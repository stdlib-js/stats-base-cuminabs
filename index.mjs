// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@v0.2.0-esm/index.mjs";function s(r,s,i,n,f){var a,d,o,m,l;if(r<=0)return n;if(o=f<0?(1-r)*f:0,a=t(s[d=i<0?(1-r)*i:0]),n[o]=a,o+=f,l=1,!1===e(a))for(;l<r;l++){if(m=t(s[d+=i]),e(m)){a=m;break}m<a&&(a=m),n[o]=a,o+=f}if(e(a))for(;l<r;l++)n[o]=a,o+=f;return n}r(s,"ndarray",(function(r,s,i,n,f,a,d){var o,m,l,p,b;if(r<=0)return f;if(l=d,o=t(s[m=n]),f[l]=o,l+=a,b=1,!1===e(o))for(;b<r;b++){if(p=t(s[m+=i]),e(p)){o=p;break}p<o&&(o=p),f[l]=o,l+=a}if(e(o))for(;b<r;b++)f[l]=o,l+=a;return f}));export{s as default};
//# sourceMappingURL=index.mjs.map
