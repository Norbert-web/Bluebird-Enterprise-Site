// Bluebird Enterprise — theme toggle (mirrors Bluebird OS's light/dark logic)
(function(){
  var stored = localStorage.getItem('be-theme');
  var theme = stored || 'dark';
  document.documentElement.setAttribute('data-theme', theme);

  function apply(t){
    document.documentElement.setAttribute('data-theme', t);
    localStorage.setItem('be-theme', t);
  }

  document.addEventListener('DOMContentLoaded', function(){
    var btn = document.getElementById('theme-toggle');
    if (btn){
      btn.addEventListener('click', function(){
        var current = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
        apply(current);
      });
    }
  });
})();
