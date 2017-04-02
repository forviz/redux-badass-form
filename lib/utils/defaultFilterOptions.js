'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createRegExp = function createRegExp(str) {
  return str;
};
// regex pattern '(cat)+\\s?(mat)|(mat)+\\s?(cat)';

/*
  isContain function to check searchValue contain in option or not ?
  Note*
    all of searchValue seperated by space (' ') should be contained
*/
var isContain = function isContain(option, searchValue) {
  var searchCriterias = searchValue.split(' '); // split by space
  var found = _lodash2.default.every(searchCriterias, function (searchCriteria) {
    var regex = new RegExp(createRegExp(searchCriteria), 'gi');
    return regex.test(option.label);
  });
  return found;
};

/*
 * filter options by searchValue
 */
var defaultFilterOptions = function defaultFilterOptions(options, searchValue) {
  var filterOption = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;

  var filterOptionFunc = filterOption || isContain;
  return options.filter(function (option) {
    return filterOptionFunc(option, searchValue);
  });
};

var _default = defaultFilterOptions;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(createRegExp, 'createRegExp', 'src/utils/defaultFilterOptions.js');

  __REACT_HOT_LOADER__.register(isContain, 'isContain', 'src/utils/defaultFilterOptions.js');

  __REACT_HOT_LOADER__.register(defaultFilterOptions, 'defaultFilterOptions', 'src/utils/defaultFilterOptions.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/utils/defaultFilterOptions.js');
}();

;