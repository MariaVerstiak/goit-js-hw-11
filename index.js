import{a as g,S as c,i as d}from"./assets/vendor-Bp9HxXT5.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const h="https://pixabay.com/api/",b="53389210-1518ce0ab28dfc8ed2510f80a";async function v(o,r={}){const a={key:b,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40,...r};return(await g.get(h,{params:a})).data.hits}const u=document.getElementById("gallery"),n=document.getElementById("loader"),f=new c(".gallery a",{captionsData:"alt",captionDelay:200});function w(o){const r=o.map(a=>{const{webformatURL:s,largeImageURL:e,tags:t,likes:i,views:m,comments:p,downloads:y}=a;return`
      <li class="photo-card">
        <a href="${e}" data-lightbox="gallery" data-title="${t}">
          <img src="${s}" alt="${t}" loading="lazy" />
        </a>
        <div class="info">
          <div class="info-item"><span>Likes</span><b>${i}</b></div>
          <div class="info-item"><span>Views</span><b>${m}</b></div>
          <div class="info-item"><span>Comments</span><b>${p}</b></div>
          <div class="info-item"><span>Downloads</span><b>${y}</b></div>
        </div>
      </li>
    `}).join("");u.innerHTML=r,f.refresh()}function L(){u.innerHTML="",f.refresh()}function E(){n.setAttribute("aria-hidden","false"),n.style.display="flex"}function P(){n.setAttribute("aria-hidden","true"),n.style.display="none"}function $(){d.warning({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:4e3})}function l(o="Something went wrong. Please try again later."){d.error({title:"Error",message:o,position:"topRight",timeout:5e3})}const x=document.getElementById("search-form"),I=document.getElementById("search-input");let B=new c(".gallery a",{captionsData:"alt",captionDelay:250});x.addEventListener("submit",async o=>{o.preventDefault();const r=I.value.trim();if(!r){l("Please enter a search query.");return}L(),E();try{const a=await v(r);if(!a.length){$();return}w(a),B.refresh()}catch(a){console.error(a),l("Failed to fetch images. Please try again.")}finally{P()}});
//# sourceMappingURL=index.js.map
