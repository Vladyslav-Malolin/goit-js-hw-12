import{i as a}from"./assets/vendor-I1I71QQ2.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const g="48886495-377d6660b652cff1cfff8c7f1",p="https://pixabay.com/api/";async function y(t,n=1,s=40){const o=await fetch(`${p}?key=${g}&q=${encodeURIComponent(t)}&page=${n}&per_page=${s}&image_type=photo&orientation=horizontal`);if(!o.ok)throw new Error("Failed to fetch images");return(await o.json()).hits}function h(t){const n=document.getElementById("gallery");t.map(o=>{const e=document.createElement("img");return e.src=o.webformatURL,e.alt=o.tags,e.classList.add("gallery-image"),e}).forEach(o=>n.appendChild(o))}const E=document.getElementById("search-form"),L=document.getElementById("search-input"),m=document.getElementById("loader"),I=document.getElementById("gallery"),i=document.getElementById("load-more");let d="",c=1;const f=40;E.addEventListener("submit",async t=>{if(t.preventDefault(),d=L.value.trim(),c=1,I.innerHTML="",i.classList.add("hidden"),!d){a.error({title:"Error",message:"Please enter a search term!"});return}await u()});i.addEventListener("click",async()=>{c+=1,await u()});async function u(){m.classList.remove("hidden");try{const t=await y(d,c,f);t.length===0&&c===1?a.warning({title:"No Results",message:"Try another keyword!"}):(h(t),t.length<f?(i.classList.add("hidden"),a.info({title:"End",message:"You've reached the end of search results."})):i.classList.remove("hidden"))}catch{a.error({title:"Error",message:"Failed to load images!"})}finally{m.classList.add("hidden")}}
//# sourceMappingURL=index.js.map
