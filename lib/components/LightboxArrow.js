"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propX = require("@carpenjk/prop-x");

var _css = require("@carpenjk/prop-x/css");

var _jsxRuntime = require("react/jsx-runtime");

var _templateObject, _templateObject2, _templateObject3;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledArrowContainer = _styledComponents["default"].button(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height 100%;\n  border-radius: 50%;\n  border: 2px solid white;\n  background: transparent;\n  color: inherit;\n  opacity: ", ";\n\n  &:hover {\n    background: rgb(74, 74, 74);\n    opacity: 100%;\n    transition: opacity .5s ease-in;\n  }\n\n  ", "\n  ", "\n"])), (0, _css.getProp)('opacity'), (0, _css.condition)('disabled')(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    color: rgb(74,74,74);\n    border-color: rgb(74,74,74);\n    &:hover {\n      background: transparent;  \n    }\n  "]))), (0, _css.breakpoint)(1)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    opacity: ", ";\n  "])), (0, _css.getProp)('opacity')));

var LightboxArrow = function LightboxArrow(_ref) {
  var direction = _ref.direction,
      onClick = _ref.onClick,
      disabled = _ref.disabled,
      hide = _ref.hide,
      buttonRef = _ref.buttonRef;

  function handleClick(e) {
    onClick(e);
    e.stopPropagation();
  }

  var opacity = (0, _propX.unwindProps)({
    hide: hide
  }).map(function (v) {
    return !v.hide ? '100%' : '0';
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(StyledArrowContainer, {
    onClick: handleClick,
    disabled: disabled,
    ref: buttonRef,
    opacity: opacity,
    children: [direction === 'left' && '<', direction === 'right' && '>']
  });
};

var _default = LightboxArrow;
exports["default"] = _default;