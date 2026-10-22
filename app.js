let memories=[];
const $=s=>document.querySelector(s);
const fmt=d=>new Date(d+'T12:00:00').toLocaleDateString(undefined,{month:'short',day:'numeric',year:'numeric'});

function render(){
  const q=$('#searchInput').value.toLowerCase();
  const list=memories.filter(m=>(m.title+' '+m.note).toLowerCase().includes(q)).sort((a,b)=>b.date.localeCompare(a.date));
  $('#memoryCount').textContent=list.length;
  const grid=$('#memoryGrid'); grid.innerHTML='';
  if(!list.length){grid.innerHTML='<div class="empty-state"><div class="empty-icon">✎</div><h3>No memories found</h3><p>Try another search or add a memory to memories.json.</p></div>';return}
  list.forEach((m,i)=>{
    const card=$('#memoryTemplate').content.cloneNode(true),article=card.querySelector('article');
    article.style.setProperty('--tilt',`${i%2?'.7':'-0.7'}deg`);
    const img=card.querySelector('.card-image'); img.src=m.images?.[0]||''; img.alt=m.title;
    if(!m.images?.[0]) img.style.display='none';
    card.querySelector('.date-badge').textContent=new Date(m.date+'T12:00:00').toLocaleDateString(undefined,{month:'short',day:'numeric'});
    card.querySelector('.card-date').textContent=fmt(m.date);
    card.querySelector('.card-title').textContent=m.title;
    card.querySelector('.card-note').textContent=m.note||'';
    grid.append(card);
  });
}

$('#searchInput').oninput=render;
$('#jsonGuide').onclick=()=>alert('Add a new object to memories.json, put your image in the images folder, then push the changes to GitHub.');
$('#themeToggle').onclick=()=>{const dark=document.documentElement.dataset.theme==='dark';document.documentElement.dataset.theme=dark?'':'dark';$('#themeToggle').textContent=dark?'☾':'☀'};
$('#year').textContent=new Date().getFullYear();
fetch('./memories.json').then(r=>r.json()).then(data=>{memories=data;render()}).catch(()=>{$('#memoryGrid').innerHTML='<div class="empty-state"><h3>Could not load memories.json</h3><p>Run the site through Vercel or a local web server.</p></div>'});
