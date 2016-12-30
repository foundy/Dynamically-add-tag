(function (root, d) {

  var module = root['module'] = root['module'] || {};

  module['third'] = module['third'] || function () {
    var span = d.createElement('span');
    span.innerHTML = 'append module-third';

    var t = d.getElementById('third');
    t.appendChild(span);

    console.log('module.third()');
  };

  console.log('module-third.js');

}(window, document));
