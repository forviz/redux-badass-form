'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isOptionGroup = function isOptionGroup(options) {
  if (_lodash2.default.every(options, function (option) {
    return option.options !== undefined;
  })) {
    return true;
  }
  return false;
};

var _default = isOptionGroup;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(isOptionGroup, 'isOptionGroup', 'src/utils/isOptionGroup.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/utils/isOptionGroup.js');
}();

;