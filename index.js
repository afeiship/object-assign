if (typeof Object.assign != 'function') {
  var OBJECT = 'object';
  var Object_TYPE = '[object Object]';


  Object.assign = function (inTarget) {
    'use strict';
    if (inTarget && Object_TYPE !== toString.apply(inTarget)){
      throw new TypeError('The first argument must be an object');
    }

    for (var index = 1; index < arguments.length; index++) {
      var source = arguments[index];
      if (source != null) {
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            inTarget[key] = source[key];
          }
        }
      }
    }
    return inTarget;
  };
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = Object.assign;
}
  