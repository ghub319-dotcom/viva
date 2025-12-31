// Extra JS for Reading Flow: small instructions
document.addEventListener('DOMContentLoaded', ()=>{
  const ref = document.getElementById('completeBookId'); if(ref) ref.placeholder = 'e.g. b1, b3';
  const select = document.getElementById('soundSelect'); const volume = document.getElementById('soundVolume'); const info = document.getElementById('soundInfo');
  function showInfo(){
    const trackText = select && select.value !== 'none' ? select.options[select.selectedIndex].text : 'No sound';
    const vol = volume ? parseFloat(volume.value) : 0; const playing = localStorage.getItem('readify-sound-playing') === '1';
    if(info) info.textContent = `${trackText} • Vol ${(vol*100).toFixed(0)}% • ${playing? 'Playing' : 'Paused'}`;
  }
  showInfo();
  select?.addEventListener('change', showInfo); volume?.addEventListener('input', showInfo);
  window.addEventListener('storage', (e)=>{ if(['readify-sound-choice','readify-sound-volume','readify-sound-playing'].includes(e.key)) showInfo(); });
  
  // Clear completed books button
  const clearBtn = document.getElementById('clearCompleted');
  clearBtn?.addEventListener('click', ()=>{
    localStorage.removeItem('readify-completed');
    document.getElementById('completeBookId').value = '';
    const completedList = document.getElementById('completedList');
    if(completedList) completedList.innerHTML = '<li style="color:var(--muted)">No books completed yet.</li>';
  });
});
