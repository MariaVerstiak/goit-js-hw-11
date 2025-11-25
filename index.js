import{a as y,S as g,i as c}from"./assets/vendor-W-4iDki6.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const h="https://pixabay.com/api/",b="53389210-1518ce0ab28dfc8ed2510f80a";function v(a,r={}){const o={key:b,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40,...r};return y.get(h,{params:o})}const d=document.getElementById("gallery"),n=document.getElementById("loader"),u=new g(".gallery a",{captionsData:"alt",captionDelay:200});function L(a){const r=a.map(o=>{const{webformatURL:i,largeImageURL:e,tags:t,likes:s,views:f,comments:m,downloads:p}=o;return`
      <li class="photo-card">
        <a href="${e}" data-lightbox="gallery" data-title="${t}">
          <img src="${i}" alt="${t}" loading="lazy" />
        </a>
        <div class="info">
          <div class="info-item"><span>Likes</span><b>${s}</b></div>
          <div class="info-item"><span>Views</span><b>${f}</b></div>
          <div class="info-item"><span>Comments</span><b>${m}</b></div>
          <div class="info-item"><span>Downloads</span><b>${p}</b></div>
        </div>
      </li>
    `}).join("");d.innerHTML=r,u.refresh()}function w(){d.innerHTML="",u.refresh()}function E(){n.setAttribute("aria-hidden","false"),n.style.display="flex"}function P(){n.setAttribute("aria-hidden","true"),n.style.display="none"}function I(){c.warning({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:4e3})}function l(a="Something went wrong. Please try again later."){c.error({title:"Error",message:a,position:"topRight",timeout:5e3})}const $=document.getElementById("search-form"),A=document.getElementById("search-input");$.addEventListener("submit",a=>{a.preventDefault();const r=A.value.trim();if(!r){l("Please enter a search query.");return}w(),E(),v(r).then(o=>{const i=o.data,e=Array.isArray(i.hits)?i.hits:[];if(e.length===0){I();return}L(e)}).catch(o=>{console.error("API error:",o),l("Failed to fetch images. Please check your network and try again.")}).finally(()=>{P()})});
//# sourceMappingURL=index.js.map
