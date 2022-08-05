"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _jsxRuntime = require("react/jsx-runtime");

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledCounter = _styledComponents["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: absolute;\n  right: 16px;\n  bottom: 16px;\n  color: white;\n  padding: 8px;\n  border-radius: 3px;\n  background-color: rgba(74, 74, 74, 0.5);\n  font-family: 'Open Sans', sans-serif;\n  font-size: 14px;\n  font-weight: bold;\n  z-index: 1000;\n"])));

var LightboxCounter = function LightboxCounter(_ref) {
  var currIndex = _ref.currIndex,
      imgCount = _ref.imgCount;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(StyledCounter, {
    children: [currIndex + 1, "/", imgCount]
  });
};

var _default = LightboxCounter;
exports["default"] = _default;