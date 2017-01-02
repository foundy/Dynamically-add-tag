console.log('[begin] embed-append-child.js');

(function () {
  function createScriptTag(url) {
    var t = document.createElement('script');

    t.async = true;
    t.src = url;

    return t;
  }

  var head = document.getElementsByTagName('head')[0];

  head.appendChild(createScriptTag('/js/module-first.js'), head);
  head.appendChild(createScriptTag('/js/module-second.js'), head);
  head.appendChild(createScriptTag('/js/module-third.js'), head);
}());

console.log('[end] embed-append-child.js');
