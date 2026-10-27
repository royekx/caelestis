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

  // A link to an anchor inside a hidden panel (page.html#terrain) opens that
  // panel first, then scrolls to the anchor.
  function reveal(){
    var id = decodeURIComponent(location.hash.slice(1));
    var target = id && document.getElementById(id);
    if (!target) return;
    var row = target.tagName === 'DETAILS' ? target : null;
    if (row) row.open = true;
    var panel = target.closest('.pill-panel');
    if (row && (!panel || !panel.hidden)) { target.scrollIntoView(); return; }
    if (!panel || !panel.hidden) return;
    var tab = document.querySelector('.pill-tab[aria-controls="' + panel.id + '"]');
    if (tab) { tab.click(); target.scrollIntoView(); }
  }
  reveal();
  window.addEventListener('hashchange', reveal);
})();
