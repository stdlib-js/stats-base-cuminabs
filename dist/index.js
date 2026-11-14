"use strict";var m=function(i,a){return function(){try{return a||i((a={exports:{}}).exports,a),a.exports}catch(c){throw (a=0, c)}};};var j=m(function(K,g){
var p=require('@stdlib/math-base-assert-is-nan/dist'),P=require('@stdlib/math-base-special-abs/dist');function C(i,a,c,b,e,n,x){var v,t,u,f,s,o,r,l,q;if(v=a.data,t=e.data,u=a.accessors[0],f=e.accessors[1],o=b,r=x,s=P(u(v,o)),f(t,r,s),r+=n,q=1,p(s)===!1)for(q;q<i;q++){if(o+=c,l=P(u(v,o)),p(l)){s=l;break}l<s&&(s=l),f(t,r,s),r+=n}if(p(s))for(q;q<i;q++)f(t,r,s),r+=n;return e}g.exports=C
});var y=m(function(L,h){
var k=require('@stdlib/math-base-assert-is-nan/dist'),O=require('@stdlib/math-base-special-abs/dist'),R=require('@stdlib/array-base-arraylike2object/dist'),D=j();function E(i,a,c,b,e,n,x){var v,t,u,f,s,o,r;if(i<=0)return e;if(f=R(a),s=R(e),f.accessorProtocol||s.accessorProtocol)return D(i,f,c,b,s,n,x),e;if(t=b,u=x,v=O(a[t]),e[u]=v,u+=n,r=1,k(v)===!1)for(r;r<i;r++){if(t+=c,o=O(a[t]),k(o)){v=o;break}o<v&&(v=o),e[u]=v,u+=n}if(k(v))for(r;r<i;r++)e[u]=v,u+=n;return e}h.exports=E
});var A=m(function(M,z){
var w=require('@stdlib/strided-base-stride2offset/dist'),F=y();function G(i,a,c,b,e){var n=w(i,c),x=w(i,e);return F(i,a,c,n,b,e,x)}z.exports=G
});var H=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),B=A(),I=y();H(B,"ndarray",I);module.exports=B;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
