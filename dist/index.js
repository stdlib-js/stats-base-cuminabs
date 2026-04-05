"use strict";var m=function(e,i){return function(){return i||e((i={exports:{}}).exports,i),i.exports}};var j=m(function(K,g){
var p=require('@stdlib/math-base-assert-is-nan/dist'),P=require('@stdlib/math-base-special-abs/dist');function C(e,i,f,b,a,n,x){var v,c,u,t,s,o,r,l,q;if(v=i.data,c=a.data,u=i.accessors[0],t=a.accessors[1],o=b,r=x,s=P(u(v,o)),t(c,r,s),r+=n,q=1,p(s)===!1)for(q;q<e;q++){if(o+=f,l=P(u(v,o)),p(l)){s=l;break}l<s&&(s=l),t(c,r,s),r+=n}if(p(s))for(q;q<e;q++)t(c,r,s),r+=n;return a}g.exports=C
});var y=m(function(L,h){
var k=require('@stdlib/math-base-assert-is-nan/dist'),O=require('@stdlib/math-base-special-abs/dist'),R=require('@stdlib/array-base-arraylike2object/dist'),D=j();function E(e,i,f,b,a,n,x){var v,c,u,t,s,o,r;if(e<=0)return a;if(t=R(i),s=R(a),t.accessorProtocol||s.accessorProtocol)return D(e,t,f,b,s,n,x),a;if(c=b,u=x,v=O(i[c]),a[u]=v,u+=n,r=1,k(v)===!1)for(r;r<e;r++){if(c+=f,o=O(i[c]),k(o)){v=o;break}o<v&&(v=o),a[u]=v,u+=n}if(k(v))for(r;r<e;r++)a[u]=v,u+=n;return a}h.exports=E
});var A=m(function(M,z){
var w=require('@stdlib/strided-base-stride2offset/dist'),F=y();function G(e,i,f,b,a){var n=w(e,f),x=w(e,a);return F(e,i,f,n,b,a,x)}z.exports=G
});var H=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),B=A(),I=y();H(B,"ndarray",I);module.exports=B;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
