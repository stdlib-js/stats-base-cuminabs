"use strict";var l=function(e,n){return function(){return n||e((n={exports:{}}).exports,n),n.exports}};var x=l(function(B,p){
var q=require('@stdlib/math-base-assert-is-nan/dist'),m=require('@stdlib/math-base-special-abs/dist');function h(e,n,t,u,f){var i,s,r,v,a;if(e<=0)return u;if(t<0?s=(1-e)*t:s=0,f<0?r=(1-e)*f:r=0,i=m(n[s]),u[r]=i,r+=f,a=1,q(i)===!1)for(a;a<e;a++){if(s+=t,v=m(n[s]),q(v)){i=v;break}v<i&&(i=v),u[r]=i,r+=f}if(q(i))for(a;a<e;a++)u[r]=i,r+=f;return u}p.exports=h
});var R=l(function(C,O){
var b=require('@stdlib/math-base-assert-is-nan/dist'),k=require('@stdlib/math-base-special-abs/dist');function j(e,n,t,u,f,i,s){var r,v,a,c,o;if(e<=0)return f;if(v=u,a=s,r=k(n[v]),f[a]=r,a+=i,o=1,b(r)===!1)for(o;o<e;o++){if(v+=t,c=k(n[v]),b(c)){r=c;break}c<r&&(r=c),f[a]=r,a+=i}if(b(r))for(o;o<e;o++)f[a]=r,a+=i;return f}O.exports=j
});var w=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),g=x(),z=R();w(g,"ndarray",z);module.exports=g;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
