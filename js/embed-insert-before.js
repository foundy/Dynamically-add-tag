console.log('[begin] embed-insert-before.js');

(function () {
  function createScriptTag(url) {
    var t = document.createElement('script');

    t.async = true;
    t.src = url;

    return t;
  }

  var s = document.getElementsByTagName('script')[0];

  s.parentNode.insertBefore(createScriptTag('/js/module-first.js'), s);
  s.parentNode.insertBefore(createScriptTag('/js/module-second.js'), s);
  s.parentNode.insertBefore(createScriptTag('/js/module-third.js'), s);
}());

console.log('[end] embed-insert-before.js');
