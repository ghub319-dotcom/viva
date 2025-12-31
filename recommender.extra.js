// Extra JS for the Recommender page: auto-show saver count
document.addEventListener('DOMContentLoaded', ()=>{
  const counter = document.getElementById('readingListSummary');
  function update(){ const list = JSON.parse(localStorage.getItem('readify-list')||'[]'); counter.textContent = list.length ? `Saved items: ${list.length}` : 'No saved items yet.'; }
  update();
  document.querySelector('#saveRec')?.addEventListener('click', update);
});
