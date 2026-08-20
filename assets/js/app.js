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

// Bluebird Enterprise — cookie / analytics notice
(function(){
  var KEY = 'be-notice-ack';
  document.addEventListener('DOMContentLoaded', function(){
    if (localStorage.getItem(KEY)) return;

    var bar = document.createElement('div');
    bar.className = 'cookie-notice';
    bar.setAttribute('role', 'region');
    bar.setAttribute('aria-label', 'Cookie notice');
    bar.innerHTML =
      '<p>This site uses basic analytics to understand traffic. See our ' +
      '<a href="' + (location.pathname.indexOf('/bluebird-os/') !== -1 ? '../privacy.html' : 'privacy.html') + '">Privacy Policy</a>.</p>' +
      '<button type="button" class="btn btn-line" id="cookie-ack">Got it</button>';
    document.body.appendChild(bar);

    document.getElementById('cookie-ack').addEventListener('click', function(){
      localStorage.setItem(KEY, '1');
      bar.remove();
    });
  });
})();
