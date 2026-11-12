/**
 * Offline preview support.
 * GitHub Pages serves /folder/ as /folder/index.html. Local file:// URLs do not.
 * On local files only, resolve directory-style navigation links to the actual HTML file.
 */
(() => {
  'use strict';
  if (window.location.protocol !== 'file:') return;
  function fixLocalLinks() {
    document.querySelectorAll('a[href]').forEach(link => {
      const href = link.getAttribute('href');
      if (!href || href.startsWith('#') || /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i.test(href)) return;
      const hashIndex = href.indexOf('#');
      const beforeHash = hashIndex === -1 ? href : href.slice(0, hashIndex);
      const fragment = hashIndex === -1 ? '' : href.slice(hashIndex);
      if (beforeHash.endsWith('/')) link.setAttribute('href', beforeHash + 'index.html' + fragment);
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', fixLocalLinks);
  else fixLocalLinks();
})();
