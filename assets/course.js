/* ISP10: registered units. Add content by replacing the respective units/unitNN.js file. */
(() => {
  'use strict';
  const units=Object.assign({},window.ISP10_UNITS||{});
  const raw=Number(new URLSearchParams(location.search).get('unit')||1);
  const n=Number.isInteger(raw)&&raw>=1&&raw<=12?raw:1;
  const d=units[n]||units[1];
  window.ISP10_DATA=d;
  window.ISP10_COURSE={units,number:n};
  document.getElementById('current-unit-heading').textContent='CONTENIDOS · UNIDAD '+n;
  document.getElementById('unit-switcher-label').textContent=String(n).padStart(2,'0')+' · '+d.unit.title;
  const esc=s=>String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/"/g,'&quot;');
  document.getElementById('unit-nav').innerHTML=Array.from({length:12},(_,i)=>{
    const k=i+1,u=units[k],ready=!!u?.lessons?.length,selected=k===n;
    const title=esc(u?.unit?.title||'Unidad '+k);
    const label='<span class="unit-option-number">'+String(k).padStart(2,'0')+'</span><span class="unit-option-text"><strong>'+title+'</strong>'+(ready?'':'<small>Próximamente</small>')+'</span>';
    return ready
      ? '<a class="unit-option'+(selected?' is-selected':'')+'" href="?unit='+k+'#inicio"'+(selected?' aria-current="page"':'')+'>'+label+'<span class="unit-option-arrow" aria-hidden="true">'+(selected?'✓':'›')+'</span></a>'
      : '<span class="unit-option unavailable" aria-disabled="true">'+label+'</span>';
  }).join('');
})();