'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getOptionValue = function getOptionValue(option) {
  return _lodash2.default.get(option, 'value', option);
}; // Extract string value from either Objet or String
// { value: '', label: ''} or 'value'
var _default = getOptionValue;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(getOptionValue, 'getOptionValue', 'src/utils/getOptionValue.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/utils/getOptionValue.js');
}();

;