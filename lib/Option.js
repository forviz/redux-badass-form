'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _reactTransformHmr3 = require('react-transform-hmr');

var _reactTransformHmr4 = _interopRequireDefault(_reactTransformHmr3);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2;

var _index = require('./index');

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  Option: {
    displayName: 'Option'
  }
};

var _reactTransformHmr2 = (0, _reactTransformHmr4.default)({
  filename: 'src/Option.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformHmr2(Component, id);
  };
}

var defaultRenderOption = function defaultRenderOption(option) {
  return _react3.default.createElement(
    'span',
    null,
    option.label
  );
};

var Option = _wrapComponent('Option')((_temp2 = _class = function (_Component) {
  _inherits(Option, _Component);

  function Option() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Option);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Option.__proto__ || Object.getPrototypeOf(Option)).call.apply(_ref, [this].concat(args))), _this), _this.handleMouseEnter = function () {
      var _this2;

      return (_this2 = _this).__handleMouseEnter__REACT_HOT_LOADER__.apply(_this2, arguments);
    }, _this.handleMouseDown = function () {
      var _this3;

      return (_this3 = _this).__handleMouseDown__REACT_HOT_LOADER__.apply(_this3, arguments);
    }, _this.handleTouchStart = function () {
      var _this4;

      return (_this4 = _this).__handleTouchStart__REACT_HOT_LOADER__.apply(_this4, arguments);
    }, _this.handleMouseMove = function () {
      var _this5;

      return (_this5 = _this).__handleMouseMove__REACT_HOT_LOADER__.apply(_this5, arguments);
    }, _this.handleTouchMove = function () {
      var _this6;

      return (_this6 = _this).__handleTouchMove__REACT_HOT_LOADER__.apply(_this6, arguments);
    }, _this.handleMouseUp = function () {
      var _this7;

      return (_this7 = _this).__handleMouseUp__REACT_HOT_LOADER__.apply(_this7, arguments);
    }, _this.handleTouchEnd = function () {
      var _this8;

      return (_this8 = _this).__handleTouchEnd__REACT_HOT_LOADER__.apply(_this8, arguments);
    }, _this.handleSelectOption = function () {
      var _this9;

      return (_this9 = _this).__handleSelectOption__REACT_HOT_LOADER__.apply(_this9, arguments);
    }, _this.optionRender = function () {
      var _this10;

      return (_this10 = _this).__optionRender__REACT_HOT_LOADER__.apply(_this10, arguments);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  // Do focus option when mouse enter


  _createClass(Option, [{
    key: '__handleMouseEnter__REACT_HOT_LOADER__',


    // MouseDown for mouse & TouchStart for touch devices
    // set dragging to false, back to normal.
    value: function __handleMouseEnter__REACT_HOT_LOADER__(event) {
      this.props.onFocus(this.props.index);
    }
  }, {
    key: '__handleMouseDown__REACT_HOT_LOADER__',
    value: function __handleMouseDown__REACT_HOT_LOADER__(e) {
      this.dragging = false;this.pressing = true;
    }
  }, {
    key: '__handleTouchStart__REACT_HOT_LOADER__',


    // MouseMove for mouse & TouchMove for touch devices
    // If start moving while pressing, set dragging = true;
    value: function __handleTouchStart__REACT_HOT_LOADER__(e) {
      this.handleMouseDown(e.touches[0]);
    }
  }, {
    key: '__handleMouseMove__REACT_HOT_LOADER__',
    value: function __handleMouseMove__REACT_HOT_LOADER__(e) {
      if (this.pressing) {
        this.dragging = true;
      }
    }
  }, {
    key: '__handleTouchMove__REACT_HOT_LOADER__',


    // MouseUp for mouse & TouchEnd for touch devices
    // If mouseUp/TouchEnd if user was draggin then not fire handleSelectOption;
    value: function __handleTouchMove__REACT_HOT_LOADER__(e) {
      this.handleMouseMove(e.touches[0]);
    }
  }, {
    key: '__handleMouseUp__REACT_HOT_LOADER__',
    value: function __handleMouseUp__REACT_HOT_LOADER__(e) {
      this.pressing = false;
      if (this.dragging) return;

      // TODO: Not sure why, but this prevent double selectOption from touch devices
      e.preventDefault();
      e.stopPropagation();

      this.handleSelectOption(e);
    }
  }, {
    key: '__handleTouchEnd__REACT_HOT_LOADER__',
    value: function __handleTouchEnd__REACT_HOT_LOADER__(e) {
      this.handleMouseUp(e);
    }
  }, {
    key: '__handleSelectOption__REACT_HOT_LOADER__',
    value: function __handleSelectOption__REACT_HOT_LOADER__(e) {
      this.props.onSelect((0, _utils.getOptionValue)(this.props.option));
    }
  }, {
    key: '__optionRender__REACT_HOT_LOADER__',
    value: function __optionRender__REACT_HOT_LOADER__() {
      return this.props.customRenderOption || defaultRenderOption;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          option = _props.option,
          isFocus = _props.isFocus;


      var optionRenderer = this.optionRender();

      return _react3.default.createElement(
        'div',
        {
          className: _index.PREFIX + '-option ' + (isFocus ? 'isFocus' : ''),
          role: 'option',
          onMouseEnter: this.handleMouseEnter,
          onMouseDown: this.handleMouseDown,
          onTouchStart: this.handleTouchStart,
          onMouseMove: this.handleMouseMove,
          onTouchMove: this.handleTouchMove,
          onMouseUp: this.handleMouseUp,
          onTouchEnd: this.handleTouchEnd
        },
        optionRenderer(option)
      );
    }
  }]);

  return Option;
}(_react2.Component), _class.propTypes = {
  index: _react2.PropTypes.number,
  option: _react2.PropTypes.shape({
    label: _react2.PropTypes.string,
    value: _react2.PropTypes.string,
    disabled: _react2.PropTypes.bool
  }),

  isFocus: _react2.PropTypes.bool,

  onFocus: _react2.PropTypes.func,
  onSelect: _react2.PropTypes.func,

  customRenderOption: _react2.PropTypes.func
}, _temp2));

var _default = (0, _utils.pureRender)(Option);

exports.default = _default;
;

var _temp3 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(defaultRenderOption, 'defaultRenderOption', 'src/Option.js');

  __REACT_HOT_LOADER__.register(Option, 'Option', 'src/Option.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/Option.js');
}();

;