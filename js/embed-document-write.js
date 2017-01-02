console.log('[begin] embed-document-write.js');

(function () {
  document.write('<script src="/js/module-first.js"><\/script>');
  document.write('<script src="/js/module-second.js"><\/script>');
  document.write('<script src="/js/module-third.js"><\/script>');
}());

console.log('[end] embed-document-write.js');
