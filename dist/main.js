(()=>{"use strict";const n="https://rickandmortyapi.com/api/character/",a=async a=>{const e=a?`${n}${a}`:n;try{const n=await fetch(e);return await n.json()}catch(n){console.log("Fetch Error",n)}},e=()=>location.hash.slice(1).toLocaleLowerCase().split("/")[1]||"/",t=()=>'\n    <div class="Error404">\n      <h2>Error 404</h2>\n    </div>\n  ',i={"/home":async()=>`\n    <div class="Characters">\n      ${(await a()).results.map((n=>`\n        <article class="Character-item">\n          <a href="#/${n.id}/">\n            <img src="${n.image}" alt="${n.name}">\n            <h2>${n.name}</h2>\n          </a>\n        </article>\n      `)).join("")}\n    </div>\n  `,"/:id":async()=>{const n=e(),t=await a(n);return`\n    <div class="Characters-inner">\n      <article class="Characters-card">\n        <img src="${t.image}" alt="${t.name}">\n        <h2>${t.name}</h2>\n      </article>\n      <article class="Characters-card">\n        <h3>Episodes: ${t.episode.length}</h3>\n        <h3>Status: ${t.status}</h3>\n        <h3>Species: ${t.species}</h3>\n        <h3>Gender: ${t.gender}</h3>\n        <h3>Origin: ${t.origin.name}</h3>\n        <h3>Last Location: ${t.location.name}</h3>\n      </article>\n    </div>\n  `},"/about":()=>"\n  <h1>About</h1>\n  ","/..":""},r=async()=>{const n=document.getElementById("header"),a=document.getElementById("content");n.innerHTML=await'\n    <div class="Header-main">\n      <div class="Header-logo">\n        <h1>\n          <a href="/home">\n            Rick And Morty\n          </a>\n        </h1>\n      </div>\n      <div class="Header-nav">\n        <a href="#/about/">\n          About\n        </a>\n        <a href="#/contact/">\n          Contact\n        </a>\n      </div>\n    </div>\n  ';let r=e(),c=await(n=>n.length<=3?"/"===n?n:"/:id":`/${n}`)(r),s=i[c]?i[c]:t;a.innerHTML=await s()};window.addEventListener("load",r),window.addEventListener("hashchange",r)})();