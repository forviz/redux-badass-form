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
  Value: {
    displayName: 'Value'
  }
};

var _reactTransformHmr2 = (0, _reactTransformHmr4.default)({
  filename: 'src/Value.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformHmr2(Component, id);
  };
}

var Value = _wrapComponent('Value')((_temp2 = _class = function (_Component) {
  _inherits(Value, _Component);

  function Value() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Value);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Value.__proto__ || Object.getPrototypeOf(Value)).call.apply(_ref, [this].concat(args))), _this), _this.handleDeleteValue = function () {
      var _this2;

      return (_this2 = _this).__handleDeleteValue__REACT_HOT_LOADER__.apply(_this2, arguments);
    }, _this.renderValueItem = function () {
      var _this3;

      return (_this3 = _this).__renderValueItem__REACT_HOT_LOADER__.apply(_this3, arguments);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Value, [{
    key: '__handleDeleteValue__REACT_HOT_LOADER__',
    value: function __handleDeleteValue__REACT_HOT_LOADER__(e) {
      var _props = this.props,
          onDelete = _props.onDelete,
          value = _props.value;

      e.stopPropagation();
      onDelete(value);
    }
  }, {
    key: '__renderValueItem__REACT_HOT_LOADER__',
    value: function __renderValueItem__REACT_HOT_LOADER__() {
      var isMultiValue = this.props.onDelete;
      if (isMultiValue) {
        return _react3.default.createElement(
          'div',
          { className: _index.PREFIX + '-value-item' },
          _react3.default.createElement(
            'span',
            { className: _index.PREFIX + '-value-delete', onClick: this.handleDeleteValue },
            '\xD7'
          ),
          _react3.default.createElement(
            'span',
            { className: _index.PREFIX + '-value' },
            this.props.children
          )
        );
      }
      return this.props.children;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react3.default.createElement(
        'div',
        { className: _index.PREFIX + '-value-wrap' },
        this.renderValueItem()
      );
    }
  }]);

  return Value;
}(_react2.Component), _class.propTypes = {
  onDelete: _react2.PropTypes.func,
  value: _react2.PropTypes.string
}, _temp2));

var _default = (0, _utils.pureRender)(Value);

exports.default = _default;
;

var _temp3 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Value, 'Value', 'src/Value.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/Value.js');
}();

;