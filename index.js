import{a as L,S as v,i as p}from"./assets/vendor-BjRz3xa9.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const f of r.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&n(f)}).observe(document,{childList:!0,subtree:!0});function s(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(o){if(o.ep)return;o.ep=!0;const r=s(o);fetch(o.href,r)}})();const E="49479745-ecb2a9650ccad432b929afb0a",P="https://pixabay.com/api/",S=15;async function m(e,t){try{return(await L.get(P,{params:{key:E,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:S,page:t}})).data}catch(s){throw console.log(s),s}}let y=null;function g(e){e.classList.remove("hidden")}function b(e){e.classList.add("hidden")}function q(e){e.innerHTML=""}function w(e,t){const s=t.map(n=>`
        <li class="gallery-item">
            <a href="${n.largeImageURL}">
                <img class="img-set" src="${n.webformatURL}" alt="${n.tags}"  width="360"
            height="200"/>
            </a>
            <div class="info">
                <p>Likes: ${n.likes}</p>
                <p>Views: ${n.views}</p>
                <p>Comments: ${n.comments}</p>
                <p>Downloads: ${n.downloads}</p>
                
            </div>
        </li>
    `).join("");e.insertAdjacentHTML("beforeend",s),y?y.refresh():y=new v(".gallery a",{captionsData:"alt",captionDelay:250})}async function $(e){return new Promise(t=>{if(e.firstElementChild){const s=e.firstElementChild.getBoundingClientRect().height;s>0&&window.scrollBy({top:s*2,behavior:"smooth"})}t()})}const h=document.querySelector(".form"),d=document.querySelector(".gallery"),u=document.querySelector(".loader"),i=document.querySelector(".load-more");let l="",c=1,a=0;h.addEventListener("submit",H);i.addEventListener("click",I);async function H(e){if(e.preventDefault(),l=h.elements["search-text"].value.trim(),l===""){p.error({title:"Error",message:"Please enter a search query.",position:"center"});return}c=1,a=0,i.style.display="none",g(u),q(d);try{const t=await m(l);a=t.totalHits,t.hits.length===0?p.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again!",position:"center"}):(w(d,t.hits),a>t.hits.length&&(i.style.display="block"))}catch(t){console.log(t)}finally{b(u)}h.reset()}async function I(){c+=1,g(u),i.style.display="none";try{const e=await m(l,c);a=e.totalHits,await w(d,e.hits),await $(d),c*15>=a?(p.info({title:"End of Results",message:"We're sorry, but you've reached the end of search results.",position:"bottomCenter"}),i.style.display="none"):i.style.display="block"}catch(e){console.log(e)}finally{b(u)}}
//# sourceMappingURL=index.js.map
