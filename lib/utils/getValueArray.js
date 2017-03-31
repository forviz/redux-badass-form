'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _default = function _default(value) {

  if (Array.isArray(value)) {
    return value.map(function (v) {
      return v.value;
    });
  }

  var typeOfValue = typeof value === 'undefined' ? 'undefined' : _typeof(value);

  switch (typeOfValue) {
    case 'object':
      {
        return [value.value];
      }
    case 'string':
      {
        return value === '' ? [] : value.split(',');
      }
    default:
      break;
  }
  return value;
};

// Extract value to Array

/**
 * @return array = ['a', 'b', 'c']
 */
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/utils/getValueArray.js');
}();

;