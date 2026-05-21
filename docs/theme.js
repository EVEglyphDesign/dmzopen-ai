(function () {
  var btn = document.querySelector('[data-theme-toggle]');
  var root = document.documentElement;
  var current = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'dark'; // default dark
  // Honor any pre-set on <html>
  if (root.getAttribute('data-theme')) {
    current = root.getAttribute('data-theme');
  } else {
    root.setAttribute('data-theme', current);
  }
  var sunSvg = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>';
  var moonSvg = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
  function render() {
    if (!btn) return;
    btn.innerHTML = current === 'dark' ? sunSvg : moonSvg;
    btn.setAttribute('aria-label', 'Switch to ' + (current === 'dark' ? 'light' : 'dark') + ' mode');
  }
  render();
  if (btn) {
    btn.addEventListener('click', function () {
      current = current === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', current);
      render();
    });
  }
})();
