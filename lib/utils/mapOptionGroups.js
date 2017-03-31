'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _map2 = require('lodash/map');

var _map3 = _interopRequireDefault(_map2);

var _memoize2 = require('lodash/memoize');

var _memoize3 = _interopRequireDefault(_memoize2);

var _isOptionGroup = require('./isOptionGroup');

var _isOptionGroup2 = _interopRequireDefault(_isOptionGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapOptionGroups = function mapOptionGroups(propOptions) {
  if ((0, _isOptionGroup2.default)(propOptions)) {
    // isOptionGroup
    return (0, _map3.default)(propOptions, function (optionGroup) {
      return optionGroup.label;
    });
  }

  // isNot optionGroups
  return [''];
};

var _default = (0, _memoize3.default)(mapOptionGroups);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(mapOptionGroups, 'mapOptionGroups', 'src/utils/mapOptionGroups.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/utils/mapOptionGroups.js');
}();

;