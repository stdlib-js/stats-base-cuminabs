"use strict";var q=function(e,u){return function(){return u||e((u={exports:{}}).exports,u),u.exports}};var x=q(function(E,p){
var b=require('@stdlib/math-base-assert-is-nan/dist'),l=require('@stdlib/math-base-special-abs/dist');function w(e,u,o,v,n){var i,s,r,f,a;if(e<=0)return v;if(o<0?s=(1-e)*o:s=0,n<0?r=(1-e)*n:r=0,i=l(u[s]),v[r]=i,r+=n,a=1,b(i)===!1)for(a;a<e;a++){if(s+=o,f=l(u[s]),b(f)){i=f;break}f<i&&(i=f),v[r]=i,r+=n}if(b(i))for(a;a<e;a++)v[r]=i,r+=n;return v}p.exports=w
});var R=q(function(F,O){
var m=require('@stdlib/math-base-assert-is-nan/dist'),k=require('@stdlib/math-base-special-abs/dist');function z(e,u,o,v,n,i,s){var r,f,a,c,t;if(e<=0)return n;if(f=v,a=s,r=k(u[f]),n[a]=r,a+=i,t=1,m(r)===!1)for(t;t<e;t++){if(f+=o,c=k(u[f]),m(c)){r=c;break}c<r&&(r=c),n[a]=r,a+=i}if(m(r))for(t;t<e;t++)n[a]=r,a+=i;return n}O.exports=z
});var j=q(function(G,h){
var A=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),g=x(),B=R();A(g,"ndarray",B);h.exports=g
});var C=j();module.exports=C;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
