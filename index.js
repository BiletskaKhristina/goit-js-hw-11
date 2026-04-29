import{a as u,S as f,i as s}from"./assets/vendor-D1AWmRWP.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const d="55650574-c6a86cff692a63e47839b2642",p="https://pixabay.com/api/";function m(i){return u.get(p,{params:{key:d,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(o=>o.data)}const c=document.querySelector(".gallery"),h=new f(".gallery a",{captionsData:"alt",captionDelay:250});function y(i){const o=i.map(t=>`
    <li class="gallery-item">
      <a href="${t.largeImageURL}">
        <img src="${t.webformatURL}" alt="${t.tags}" />
      </a>
      <div class="info">
        <p><b>Likes</b>${t.likes}</p>
        <p><b>Views</b>${t.views}</p>
        <p><b>Comments</b>${t.comments}</p>
        <p><b>Downloads</b>${t.downloads}</p>
      </div>
    </li>
  `).join("");c.insertAdjacentHTML("beforeend",o),h.refresh()}function g(){c.innerHTML=""}function b(){document.querySelector(".loader").classList.add("active")}function L(){document.querySelector(".loader").classList.remove("active")}const l=document.querySelector(".form");l.addEventListener("submit",v);function v(i){i.preventDefault();const o=i.target.elements["search-text"].value.trim();if(!o){s.warning({message:"Please fill in the field!",position:"topRight"});return}g(),b(),m(o).then(t=>{if(t.hits.length===0){s.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}y(t.hits)}).catch(()=>{s.error({message:"Something went wrong!",position:"topRight"})}).finally(()=>{L()}),l.reset()}
//# sourceMappingURL=index.js.map
