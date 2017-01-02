(function (root, d) {

  var module = root['module'] = root['module'] || {};

  module['second'] = module['second'] || function () {
    var span = d.createElement('span');
    span.innerHTML = 'append module-second';

    var t = d.getElementById('second');
    t.appendChild(span);

    console.log('module.second()');
  };

  console.log('module-second.js');

}(window, document));
