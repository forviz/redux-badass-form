'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _map2 = require('lodash/map');

var _map3 = _interopRequireDefault(_map2);

var _flatten2 = require('lodash/flatten');

var _flatten3 = _interopRequireDefault(_flatten2);

var _isString2 = require('lodash/isString');

var _isString3 = _interopRequireDefault(_isString2);

var _memoize2 = require('lodash/memoize');

var _memoize3 = _interopRequireDefault(_memoize2);

var _isOptionGroup = require('./isOptionGroup');

var _isOptionGroup2 = _interopRequireDefault(_isOptionGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapOptions = function mapOptions(propOptions) {
  if ((0, _isOptionGroup2.default)(propOptions)) {
    var allOptions = (0, _flatten3.default)((0, _map3.default)(propOptions, function (optionGroup, groupIndex) {
      return (0, _map3.default)(optionGroup.options, function (opt) {
        if ((0, _isString3.default)(opt)) return { label: opt, value: opt, groupIndex: groupIndex };
        return _extends({}, opt, { groupIndex: groupIndex });
      });
    }));

    return (0, _map3.default)(allOptions, function (opt, optionIndex) {
      return _extends({}, opt, { optionIndex: optionIndex });
    });
  }

  // Not Option Group
  return (0, _map3.default)(propOptions, function (opt, index) {
    if ((0, _isString3.default)(opt)) return { label: opt, value: opt, optionIndex: index, groupIndex: 0 };
    return _extends({}, opt, { optionIndex: index, groupIndex: 0 });
  });
};

var _default = (0, _memoize3.default)(mapOptions);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(mapOptions, 'mapOptions', 'src/utils/mapOptions.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/utils/mapOptions.js');
}();

;