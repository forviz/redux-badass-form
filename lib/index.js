'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PREFIX = undefined;

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _reactTransformHmr3 = require('react-transform-hmr');

var _reactTransformHmr4 = _interopRequireDefault(_reactTransformHmr3);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _pick2 = require('lodash/pick');

var _pick3 = _interopRequireDefault(_pick2);

var _map2 = require('lodash/map');

var _map3 = _interopRequireDefault(_map2);

var _find2 = require('lodash/find');

var _find3 = _interopRequireDefault(_find2);

var _get2 = require('lodash/get');

var _get3 = _interopRequireDefault(_get2);

var _filter2 = require('lodash/filter');

var _filter3 = _interopRequireDefault(_filter2);

var _isEmpty2 = require('lodash/isEmpty');

var _isEmpty3 = _interopRequireDefault(_isEmpty2);

var _compose = require('recompose/compose');

var _compose2 = _interopRequireDefault(_compose);

var _mapProps = require('recompose/mapProps');

var _mapProps2 = _interopRequireDefault(_mapProps);

var _OptionGroup = require('./OptionGroup');

var _OptionGroup2 = _interopRequireDefault(_OptionGroup);

var _Option = require('./Option');

var _Option2 = _interopRequireDefault(_Option);

var _Value = require('./Value');

var _Value2 = _interopRequireDefault(_Value);

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  Select: {
    displayName: 'Select'
  }
};

var _reactTransformHmr2 = (0, _reactTransformHmr4.default)({
  filename: 'src/index.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformHmr2(Component, id);
  };
}

// Utils


var PREFIX = exports.PREFIX = 'rselectr';

var enhance = (0, _compose2.default)((0, _mapProps2.default)(function (props) {
  return _extends({}, props, {
    options: (0, _utils.mapOptions)(props.options),
    groups: (0, _utils.mapOptionGroups)(props.options)
  });
}));

var Select = _wrapComponent('Select')((_temp2 = _class = function (_Component) {
  _inherits(Select, _Component);

  function Select() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Select);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Select.__proto__ || Object.getPrototypeOf(Select)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isOpen: false,
      focusAtIndex: 0, // indexToFocus
      searchValue: '', // searchValue for filter options
      optionPosition: _this.props.optionPosition || 'dropdown' }, _this._handleDetectClickOutside = function () {
      var _this2;

      return (_this2 = _this).___handleDetectClickOutside__REACT_HOT_LOADER__.apply(_this2, arguments);
    }, _this.handleChangeOptionPosition = function () {
      var _this3;

      return (_this3 = _this).__handleChangeOptionPosition__REACT_HOT_LOADER__.apply(_this3, arguments);
    }, _this.handleSelectOption = function () {
      var _this4;

      return (_this4 = _this).__handleSelectOption__REACT_HOT_LOADER__.apply(_this4, arguments);
    }, _this.handleSelectOptionAtIndex = function () {
      var _this5;

      return (_this5 = _this).__handleSelectOptionAtIndex__REACT_HOT_LOADER__.apply(_this5, arguments);
    }, _this.handleOpenMenu = function () {
      var _this6;

      return (_this6 = _this).__handleOpenMenu__REACT_HOT_LOADER__.apply(_this6, arguments);
    }, _this.handleCloseMenu = function () {
      var _this7;

      return (_this7 = _this).__handleCloseMenu__REACT_HOT_LOADER__.apply(_this7, arguments);
    }, _this.handleSearchInputChange = function () {
      var _this8;

      return (_this8 = _this).__handleSearchInputChange__REACT_HOT_LOADER__.apply(_this8, arguments);
    }, _this.handleFilterOption = function () {
      var _this9;

      return (_this9 = _this).__handleFilterOption__REACT_HOT_LOADER__.apply(_this9, arguments);
    }, _this.handleKeyDown = function () {
      var _this10;

      return (_this10 = _this).__handleKeyDown__REACT_HOT_LOADER__.apply(_this10, arguments);
    }, _this.focusAtOption = function () {
      var _this11;

      return (_this11 = _this).__focusAtOption__REACT_HOT_LOADER__.apply(_this11, arguments);
    }, _this.handleMouseDown = function () {
      var _this12;

      return (_this12 = _this).__handleMouseDown__REACT_HOT_LOADER__.apply(_this12, arguments);
    }, _this.handleDeleteValue = function () {
      var _this13;

      return (_this13 = _this).__handleDeleteValue__REACT_HOT_LOADER__.apply(_this13, arguments);
    }, _this.selectOptionsToRender = function () {
      var _this14;

      return (_this14 = _this).__selectOptionsToRender__REACT_HOT_LOADER__.apply(_this14, arguments);
    }, _this.renderSearchInput = function () {
      var _this15;

      return (_this15 = _this).__renderSearchInput__REACT_HOT_LOADER__.apply(_this15, arguments);
    }, _this.renderOptions = function () {
      var _this16;

      return (_this16 = _this).__renderOptions__REACT_HOT_LOADER__.apply(_this16, arguments);
    }, _this.renderOption = function () {
      var _this17;

      return (_this17 = _this).__renderOption__REACT_HOT_LOADER__.apply(_this17, arguments);
    }, _this.renderValueLabel = function () {
      var _this18;

      return (_this18 = _this).__renderValueLabel__REACT_HOT_LOADER__.apply(_this18, arguments);
    }, _this.renderValue = function () {
      var _this19;

      return (_this19 = _this).__renderValue__REACT_HOT_LOADER__.apply(_this19, arguments);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  /* Detect click Outside */


  _createClass(Select, [{
    key: '___handleDetectClickOutside__REACT_HOT_LOADER__',
    value: function ___handleDetectClickOutside__REACT_HOT_LOADER__(e) {
      if (this.component.contains(e.target)) return;
      this.handleCloseMenu();
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      document.addEventListener('mousedown', this._handleDetectClickOutside);
      window.addEventListener('load', this.handleChangeOptionPosition);
      window.addEventListener('scroll', this.handleChangeOptionPosition);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.removeEventListener('mousedown', this._handleDetectClickOutside);
      window.removeEventListener('scroll', this.handleChangeOptionPosition);
    }
    /* End of Detect click Outside */

  }, {
    key: '__handleChangeOptionPosition__REACT_HOT_LOADER__',
    value: function __handleChangeOptionPosition__REACT_HOT_LOADER__() {
      var hasPropOptionPosition = !this.props.optionPosition; // check if has props optionPosition
      if (hasPropOptionPosition) {
        var windowHeight = window.innerHeight; // current window height
        var componentTop = this.component.getBoundingClientRect().top; // select component offset top
        var optionHeight = this.menuOption && this.menuOption.offsetHeight + 50 || 400; // option component height
        var optionPosition = componentTop + optionHeight >= windowHeight ? 'dropup' : 'dropdown'; // option position
        this.setState({
          optionPosition: optionPosition
        });
      }
    }
  }, {
    key: '__handleSelectOption__REACT_HOT_LOADER__',
    value: function __handleSelectOption__REACT_HOT_LOADER__(currentValue) {
      var _props = this.props,
          multiple = _props.multiple,
          options = _props.options,
          extractValueOption = _props.extractValueOption,
          value = _props.value,
          onChange = _props.onChange;


      var _value = '';

      /* Multiple */
      if (multiple) {

        var multipleValue = [].concat(_toConsumableArray((0, _utils.getValueArray)(value)), _toConsumableArray(currentValue));
        var multipleValueOption = multipleValue.map(function (mv) {
          return (0, _utils.getValueSelected)(options, mv);
        });
        var multipleValueString = (0, _utils.getValueString)(multipleValue);
        _value = extractValueOption ? multipleValueOption : multipleValueString;
        onChange(_value);
      } else {

        _value = extractValueOption ? (0, _utils.getValueSelected)(options, currentValue) : currentValue;
        onChange(_value);

        /* Close options */
        this.handleCloseMenu();
      }
    }
  }, {
    key: '__handleSelectOptionAtIndex__REACT_HOT_LOADER__',
    value: function __handleSelectOptionAtIndex__REACT_HOT_LOADER__(index) {
      var option = this.props.options[index];
      this.handleSelectOption((0, _utils.getOptionValue)(option));
    }
  }, {
    key: '__handleOpenMenu__REACT_HOT_LOADER__',
    value: function __handleOpenMenu__REACT_HOT_LOADER__() {
      this.setState({
        isOpen: true
      });
    }
  }, {
    key: '__handleCloseMenu__REACT_HOT_LOADER__',
    value: function __handleCloseMenu__REACT_HOT_LOADER__() {
      var keepSearchValue = this.props.keepSearchValue;

      this.setState({
        isOpen: false,
        searchValue: keepSearchValue ? this.state.searchValue : ''
      });
    }
  }, {
    key: '__handleSearchInputChange__REACT_HOT_LOADER__',
    value: function __handleSearchInputChange__REACT_HOT_LOADER__(e) {
      this.handleFilterOption(e);
    }
  }, {
    key: '__handleFilterOption__REACT_HOT_LOADER__',
    value: function __handleFilterOption__REACT_HOT_LOADER__(e) {
      this.setState({
        searchValue: e.target.value
      });
    }
  }, {
    key: '__handleKeyDown__REACT_HOT_LOADER__',
    value: function __handleKeyDown__REACT_HOT_LOADER__(event) {
      if (this.props.disabled) return;

      if (typeof this.props.onInputKeyDown === 'function') {
        this.props.onInputKeyDown(event);
        if (event.defaultPrevented) {
          return;
        }
      }

      switch (event.keyCode) {

        case 38:
          // up
          this.focusAtOption(this.state.focusAtIndex - 1);
          break;
        case 40:
          // down
          this.focusAtOption(this.state.focusAtIndex + 1);
          break;
        case 13:
          // enter
          if (!this.state.isOpen) return;
          event.stopPropagation();
          this.handleSelectOptionAtIndex(this.state.focusAtIndex);
          break;
        case 27:
          // escape
          if (this.state.isOpen) {
            this.handleCloseMenu();
            event.stopPropagation();
          }
          break;
        default:
          return;
      }
      event.preventDefault();
    }
  }, {
    key: '__focusAtOption__REACT_HOT_LOADER__',
    value: function __focusAtOption__REACT_HOT_LOADER__(toIndex) {
      var _targetIndex = void 0;
      if (toIndex < 0) _targetIndex = 0;else if (toIndex > this.props.options.length - 1) _targetIndex = this.props.options.length - 1;else _targetIndex = toIndex;

      this.setState({
        focusAtIndex: _targetIndex
      });
    }
  }, {
    key: '__handleMouseDown__REACT_HOT_LOADER__',
    value: function __handleMouseDown__REACT_HOT_LOADER__(event) {
      // if the event was triggered by a mousedown and not the primary
      // button, or if the component is disabled, ignore it.
      if (this.props.disabled || event.type === 'mousedown' && event.button !== 0) {
        return;
      }

      if (event.target.tagName === 'INPUT') {
        return;
      }

      // prevent default event handlers
      event.stopPropagation();
      event.preventDefault();

      if (!this.state.isOpen) this.handleOpenMenu();else this.handleCloseMenu();
    }
  }, {
    key: '__handleDeleteValue__REACT_HOT_LOADER__',
    value: function __handleDeleteValue__REACT_HOT_LOADER__(valueToDelete) {
      var _props2 = this.props,
          multiple = _props2.multiple,
          extractValueOption = _props2.extractValueOption,
          value = _props2.value,
          onChange = _props2.onChange,
          options = _props2.options;


      var multipleValue = (0, _utils.getValueArray)(value);
      var multipleValueOptions = multipleValue.map(function (mv) {
        return (0, _utils.getValueSelected)(options, mv);
      }).filter(function (v) {
        return v.value !== valueToDelete;
      });
      var multipleValueString = (0, _utils.getValueString)(multipleValue.filter(function (v) {
        return v !== valueToDelete;
      }));
      var _value = extractValueOption ? multipleValueOptions : multipleValueString;
      onChange(_value);
    }
  }, {
    key: '__selectOptionsToRender__REACT_HOT_LOADER__',
    value: function __selectOptionsToRender__REACT_HOT_LOADER__(options, searchValue, _ref2) {
      var searchable = _ref2.searchable,
          filterOptions = _ref2.filterOptions,
          filterOption = _ref2.filterOption;

      if (!searchable) return options;
      if (filterOptions && _.isFunction(filterOptions)) return filterOptions(options, searchValue);
      if (filterOption && _.isFunction(filterOption)) return (0, _utils.defaultFilterOptions)(options, searchValue, filterOption);
      return (0, _utils.defaultFilterOptions)(options, searchValue);
    }
  }, {
    key: '__renderSearchInput__REACT_HOT_LOADER__',
    value: function __renderSearchInput__REACT_HOT_LOADER__() {
      var _this20 = this;

      var customRenderInput = this.props.customRenderInput;

      if (typeof customRenderInput === 'function') return customRenderInput();
      return _react3.default.createElement(
        'div',
        { className: PREFIX + '-searchInput-wrapper' },
        _react3.default.createElement('input', {
          className: PREFIX + '-searchInput',
          type: 'text',
          autoFocus: true,
          ref: function ref(c) {
            return _this20.searchInput = c;
          },
          onChange: this.handleSearchInputChange
        })
      );
    }
  }, {
    key: '__renderOptions__REACT_HOT_LOADER__',
    value: function __renderOptions__REACT_HOT_LOADER__(groups, options) {
      var _this21 = this;

      var searchValue = this.state.searchValue;

      var filteredOptions = this.selectOptionsToRender(options, searchValue, this.props);

      return (0, _map3.default)(groups, function (label, groupIndex) {
        var groupOptions = (0, _filter3.default)(filteredOptions, function (option) {
          return option.groupIndex === groupIndex;
        });
        if (groupOptions.length > 0) {
          return _react3.default.createElement(
            _OptionGroup2.default,
            {
              key: 'optgroup-' + label + '-' + groupIndex, label: label,
              customRenderOptionGroupLabel: _this21.props.customRenderOptionGroupLabel
            },
            (0, _map3.default)(groupOptions, function (option) {
              return _this21.renderOption(option);
            })
          );
        }

        return;
      });
    }
  }, {
    key: '__renderOption__REACT_HOT_LOADER__',
    value: function __renderOption__REACT_HOT_LOADER__(option) {

      var index = option.optionIndex;
      var _value = (0, _utils.getOptionValue)(option);

      var focusAtIndex = this.state.focusAtIndex;

      return _react3.default.createElement(_Option2.default, {
        key: 'option-' + _value + '-' + index,
        isFocus: focusAtIndex === index,
        index: index,
        option: option,
        onFocus: this.focusAtOption,
        onSelect: this.handleSelectOption,
        customRenderOption: this.props.customRenderOption
      });
    }
  }, {
    key: '__renderValueLabel__REACT_HOT_LOADER__',
    value: function __renderValueLabel__REACT_HOT_LOADER__(options, value) {
      return (0, _get3.default)((0, _find3.default)(options, function (option) {
        return option.value === value;
      }), 'label', '');
    }
  }, {
    key: '__renderValue__REACT_HOT_LOADER__',
    value: function __renderValue__REACT_HOT_LOADER__(options, value, multiple) {
      var _this22 = this;

      /* Value is Empty */
      if ((0, _isEmpty3.default)(value)) return false;

      /* Multiple */
      if (multiple) {
        var multipleValue = (0, _utils.getValueArray)(value);
        return multipleValue.map(function (v, i) {
          return _react3.default.createElement(
            _Value2.default,
            {
              key: PREFIX + '-' + v + '-' + i,
              value: v,
              onDelete: _this22.handleDeleteValue
            },
            _this22.renderValueLabel(options, v)
          );
        });
      }

      /* Single */
      return _react3.default.createElement(
        _Value2.default,
        { value: (0, _utils.getOptionValue)(value) },
        this.renderValueLabel(options, (0, _utils.getOptionValue)(value))
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _this23 = this;

      var _state = this.state,
          isOpen = _state.isOpen,
          optionPosition = _state.optionPosition;
      var _props3 = this.props,
          value = _props3.value,
          groups = _props3.groups,
          options = _props3.options,
          placeholder = _props3.placeholder,
          multiple = _props3.multiple,
          disabled = _props3.disabled;

      return _react3.default.createElement(
        'div',
        { className: PREFIX + '-container', ref: function ref(c) {
            return _this23.component = c;
          } },
        _react3.default.createElement(
          'div',
          {
            className: PREFIX + '-control ' + (isOpen ? 'isfocus' : '') + ' ' + (disabled ? 'isdisabled' : ''),
            tabIndex: 0,
            onClick: this.handleMouseDown
          },
          this.renderValue(options, value, multiple) || placeholder
        ),
        isOpen && _react3.default.createElement(
          'div',
          {
            className: PREFIX + '-menu ' + optionPosition,
            ref: function ref(mo) {
              return _this23.menuOption = mo;
            },
            onKeyDown: this.handleKeyDown
          },
          this.renderSearchInput(),
          _react3.default.createElement(
            'div',
            { className: PREFIX + '-option-list' },
            this.renderOptions(groups, options)
          )
        )
      );
    }
  }]);

  return Select;
}(_react2.Component), _class.displayName = PREFIX, _class.propTypes = {
  // Options
  disabled: _react2.PropTypes.bool,
  multiple: _react2.PropTypes.bool,
  searchable: _react2.PropTypes.bool,
  extractValueOption: _react2.PropTypes.bool,
  value: _react2.PropTypes.oneOfType([_react2.PropTypes.string, _react2.PropTypes.array]),
  options: _react2.PropTypes.arrayOf(_react2.PropTypes.shape({
    value: _react2.PropTypes.string,
    label: _react2.PropTypes.string,
    groupIndex: _react2.PropTypes.number
  })),
  optionPosition: _react2.PropTypes.string, // dropdown | dropup
  groups: _react2.PropTypes.arrayOf(_react2.PropTypes.string),
  placeholder: _react2.PropTypes.string,
  keepSearchValue: _react2.PropTypes.bool,

  // Events
  filterOption: _react2.PropTypes.func, // function to filer an option
  filterOptions: _react2.PropTypes.func, // function to filer options
  onChange: _react2.PropTypes.func,

  onInputChange: _react2.PropTypes.func,
  onInputKeydown: _react2.PropTypes.func,
  customRenderOption: _react2.PropTypes.func,
  customRenderOptionGroupLabel: _react2.PropTypes.func,
  customRenderInput: _react2.PropTypes.func
}, _class.defaultProps = {
  value: '',
  disabled: false,
  searchable: true,
  placeholder: 'Select...',
  optionPosition: false,
  keepSearchValue: false
}, _temp2));

;

var _default = enhance(Select);

exports.default = _default;
;

var _temp3 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(PREFIX, 'PREFIX', 'src/index.js');

  __REACT_HOT_LOADER__.register(enhance, 'enhance', 'src/index.js');

  __REACT_HOT_LOADER__.register(Select, 'Select', 'src/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/index.js');
}();

;