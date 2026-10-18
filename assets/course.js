/* ISP10: registered units. Add content by replacing the respective units/unitNN.js file. */
(() => {
  'use strict';
  const units=Object.assign({},window.ISP10_UNITS||{});
  const raw=Number(new URLSearchParams(location.search).get('unit')||1);
  const n=Number.isInteger(raw)&&raw>=1&&raw<=12?raw:1;
  const d=units[n]||units[1];
  window.ISP10_DATA=d;
  window.ISP10_COURSE={units,number:n};
  document.getElementById('current-unit-heading').textContent='UNIDAD '+n+' · '+d.unit.title.toLocaleUpperCase('es');
  const esc=s=>String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/"/g,'&quot;');
  document.getElementById('unit-nav').innerHTML=Array.from({length:12},(_,i)=>{
    const k=i+1, u=units[k], ready=!!u?.lessons?.length;
    return '<a class="nav-link'+(k===n?' active':'')+'" href="?unit='+k+'#inicio"'+(k===n?' aria-current="page"':'')+'><span class="nav-icon">'+String(k).padStart(2,'0')+'</span><span>'+esc(u?.unit?.title||'Unidad '+k)+'</span><span class="nav-tail">'+(ready?'›':'·')+'</span></a>';
  }).join('');
})();