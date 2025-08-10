// Simple nav toggle and dynamic year
document.addEventListener('DOMContentLoaded', function(){
  const nav = document.getElementById('primaryNav');
  const btn = document.getElementById('navToggle');
  btn.addEventListener('click', function(){
    const expanded = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', String(!expanded));
    if(!expanded){
      nav.style.display = 'block';
    } else {
      nav.style.display = '';
    }
  });

  // Close nav when clicking a link (mobile)
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', ()=>{
    if(window.innerWidth < 640){
      nav.style.display = '';
      btn.setAttribute('aria-expanded','false');
    }
  }));

  // Set current year
  document.getElementById('year').textContent = new Date().getFullYear();
});