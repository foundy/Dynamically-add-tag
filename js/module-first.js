(function (root, d) {

  var module = root['module'] = root['module'] || {};

  module['first'] = module['first'] || function () {
    var span = d.createElement('span');
    span.innerHTML = 'append module-first';

    var t = d.getElementById('first');
    t.appendChild(span);

    console.log('module.first()');
  };

  console.log('module-first.js');

}(window, document));
