"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _css = require("@carpenjk/prop-x/css");

var _jsxRuntime = require("react/jsx-runtime");

var _templateObject, _templateObject2, _templateObject3;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledHeader = _styledComponents["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 32px;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  color: white;\n  font-family: 'Open Sans', sans-serif;\n  font-size: 16px;\n  font-weight: bold;\n\n  ", "\n\n  > span {\n    position: relative;\n    margin: 0 auto;\n  }\n"])), (0, _css.breakpoint)(1)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    top: calc(112px - 64px);\n  "]))));

var StyledCloseBtn = _styledComponents["default"].button(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  position: absolute;\n  left: 0;\n  padding: 16px;\n  background: transparent;\n  color: inherit;\n  font-family: inherit;\n  font-size: inherit;\n  font-weight: inherit;\n  border-radius: 3px;\n\n  &:hover {\n    background: rgb(74, 74, 74);\n  }\n"])));

var LightboxHeader = function LightboxHeader(_ref) {
  var currIndex = _ref.currIndex,
      imgCount = _ref.imgCount,
      onClose = _ref.onClose;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(StyledHeader, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(StyledCloseBtn, {
      onClick: onClose,
      children: "X Close"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      children: "".concat(currIndex + 1, "/").concat(imgCount)
    })]
  });
};

var _default = LightboxHeader;
exports["default"] = _default;