(function(){
  document.querySelectorAll('[data-pill-group]').forEach(function(group){
    var tabs = group.querySelectorAll('.pill-tab');
    tabs.forEach(function(tab){
      tab.addEventListener('click', function(){
        tabs.forEach(function(t){
          var sel = t === tab;
          t.setAttribute('aria-selected', sel ? 'true' : 'false');
          var panel = document.getElementById(t.getAttribute('aria-controls'));
          if (panel) panel.hidden = !sel;
        });
      });
    });
  });
})();
