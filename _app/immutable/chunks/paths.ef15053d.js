import{n as b,s as p}from"./scheduler.7a274a43.js";const t=[];function q(o,l=b){let i;const n=new Set;function r(e){if(p(o,e)&&(o=e,i)){const f=!t.length;for(const s of n)s[1](),t.push(s,o);if(f){for(let s=0;s<t.length;s+=2)t[s][0](t[s+1]);t.length=0}}}function c(e){r(e(o))}function _(e,f=b){const s=[e,f];return n.add(s),n.size===1&&(i=l(r,c)||b),e(o),()=>{n.delete(s),n.size===0&&i&&(i(),i=null)}}return{set:r,update:c,subscribe:_}}var u;const h=((u=globalThis.__sveltekit_wyqf5e)==null?void 0:u.base)??"/msse-portfolio";var a;const d=((a=globalThis.__sveltekit_wyqf5e)==null?void 0:a.assets)??h;export{d as a,h as b,q as w};
