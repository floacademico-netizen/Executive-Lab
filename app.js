
const menuBtn=document.getElementById('menuBtn');
const nav=document.getElementById('nav');
menuBtn.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

function openCourse(name){
  document.getElementById('modalTitle').textContent=name;
  const modal=document.getElementById('modal');
  modal.classList.add('show');
  modal.setAttribute('aria-hidden','false');
}
function closeModal(){
  const modal=document.getElementById('modal');
  modal.classList.remove('show');
  modal.setAttribute('aria-hidden','true');
}
document.getElementById('modal').addEventListener('click',e=>{
  if(e.target.id==='modal') closeModal();
});
