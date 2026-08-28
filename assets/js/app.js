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


// Bluebird Enterprise — scroll reveal for a calm, premium browsing experience
(function(){
  document.addEventListener('DOMContentLoaded', function(){
    var items = document.querySelectorAll('.reveal');
    if (!items.length) return;
    if (!('IntersectionObserver' in window)) {
      items.forEach(function(el){ el.classList.add('is-visible'); });
      return;
    }
    var observer = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {threshold:0.12, rootMargin:'0px 0px -30px 0px'});
    items.forEach(function(el){ observer.observe(el); });
  });
})();

// Close the mobile navigation after choosing a page.
(function(){
  document.addEventListener('DOMContentLoaded', function(){
    document.querySelectorAll('#primary-menu a').forEach(function(link){
      link.addEventListener('click', function(){
        var menu=document.getElementById('primary-menu');
        var toggle=document.querySelector('.nav-toggle');
        if(menu) menu.classList.remove('open');
        if(toggle){ toggle.setAttribute('aria-expanded','false'); toggle.textContent='☰'; }
      });
    });
  });
})();


// Project register filters
(function(){
  const buttons=document.querySelectorAll('.filter-btn');
  const items=document.querySelectorAll('.project-list li[data-category]');
  if(!buttons.length || !items.length) return;
  buttons.forEach(btn=>btn.addEventListener('click',()=>{
    const filter=btn.dataset.filter;
    buttons.forEach(b=>b.classList.toggle('active',b===btn));
    items.forEach(item=>item.classList.toggle('is-hidden',filter!=='all' && item.dataset.category!==filter));
  }));
})();


// Bluebird Enterprise — accessible mobile navigation and back-to-top control
(function(){
  document.addEventListener('DOMContentLoaded', function(){
    var menu=document.getElementById('primary-menu');
    var toggle=document.querySelector('.nav-toggle');
    if(menu && toggle){
      function closeMenu(){
        menu.classList.remove('open');
        toggle.setAttribute('aria-expanded','false');
        toggle.textContent='☰';
        document.body.classList.remove('menu-open');
      }
      document.addEventListener('keydown', function(e){ if(e.key==='Escape') closeMenu(); });
      toggle.addEventListener('click', function(){
        setTimeout(function(){ document.body.classList.toggle('menu-open', menu.classList.contains('open')); }, 0);
      });
      menu.querySelectorAll('a').forEach(function(a){a.addEventListener('click', closeMenu);});
    }

    var top=document.getElementById('back-to-top');
    if(top){
      var update=function(){top.classList.toggle('is-visible', window.scrollY>520);};
      window.addEventListener('scroll', update, {passive:true});
      update();
      top.addEventListener('click', function(){window.scrollTo({top:0,behavior:'smooth'});});
    }
  });
})();
