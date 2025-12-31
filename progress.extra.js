// Extra JS for Progress page: show saved time in a friendly format
document.addEventListener('DOMContentLoaded', ()=>{
  const saveBtn = document.getElementById('saveProgress');
  const progressMsg = document.createElement('div'); progressMsg.className='small-muted';
  saveBtn?.parentElement?.appendChild(progressMsg);
  // show last saved info from storage
  const saved = JSON.parse(localStorage.getItem('readify-progress')||'{}');
  if(saved && saved.lastSaved){ progressMsg.textContent = `Last save: ${new Date(saved.lastSaved).toLocaleString()}`; }
  saveBtn?.addEventListener('click', ()=>{ setTimeout(()=>{ const s = JSON.parse(localStorage.getItem('readify-progress')||'{}'); if(s && s.lastSaved) progressMsg.textContent = `Last save: ${new Date(s.lastSaved).toLocaleString()}`; },200); });
});
