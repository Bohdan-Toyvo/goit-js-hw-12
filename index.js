import{a as v,S as E,i as p}from"./assets/vendor-BjRz3xa9.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const f of r.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();const P="https://pixabay.com/api/",m=15;async function g(e,t){try{return(await v.get(P,{params:{key:API_KEY,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:m,page:t}})).data}catch(n){throw console.log(n),n}}let y=null;function w(e){e.classList.remove("hidden")}function L(e){e.classList.add("hidden")}function S(e){e.innerHTML=""}function b(e,t){const n=t.map(s=>`
        <li class="gallery-item">
            <a href="${s.largeImageURL}">
                <img class="img-set" src="${s.webformatURL}" alt="${s.tags}"  width="360"
            height="200"/>
            </a>
            <div class="info">
                <p>Likes: ${s.likes}</p>
                <p>Views: ${s.views}</p>
                <p>Comments: ${s.comments}</p>
                <p>Downloads: ${s.downloads}</p>
                
            </div>
        </li>
    `).join("");e.insertAdjacentHTML("beforeend",n),y?y.refresh():y=new E(".gallery a",{captionsData:"alt",captionDelay:250})}async function q(e){return new Promise(t=>{if(e.firstElementChild){const n=e.firstElementChild.getBoundingClientRect().height;window.scrollBy({top:n*2,behavior:"smooth"})}t()})}const h=document.querySelector(".form"),d=document.querySelector(".gallery"),u=document.querySelector(".loader"),i=document.querySelector(".load-more");let l="",c=1,a=0;h.addEventListener("submit",$);i.addEventListener("click",H);async function $(e){if(e.preventDefault(),l=h.elements["search-text"].value.trim(),l===""){p.error({title:"Error",message:"Please enter a search query.",position:"center"});return}c=1,a=0,i.style.display="none",w(u),S(d);try{const t=await g(l);a=t.totalHits,t.hits.length===0?p.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again!",position:"center"}):(b(d,t.hits),a>t.hits.length&&(i.style.display="block"))}catch(t){console.log(t)}finally{L(u)}h.reset()}async function H(){c+=1,w(u),i.style.display="none";try{const e=await g(l,c);a=e.totalHits,await b(d,e.hits),await q(d),c*m>=a?(p.info({title:"End of Results",message:"We're sorry, but you've reached the end of search results.",position:"bottomCenter"}),i.style.display="none"):i.style.display="block"}catch(e){console.log(e)}finally{L(u)}}
//# sourceMappingURL=index.js.map
