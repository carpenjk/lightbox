"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propX = require("@carpenjk/prop-x");

var _css = require("@carpenjk/prop-x/css");

var _react = _interopRequireWildcard(require("react"));

var _LightboxArrow = _interopRequireDefault(require("./LightboxArrow"));

var _LightboxHeader = _interopRequireDefault(require("./LightboxHeader"));

var _LightboxCounter = _interopRequireDefault(require("./LightboxCounter"));

var _jsxRuntime = require("react/jsx-runtime");

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledLightboxMain = _styledComponents["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 35vh;\n  max-height: 450px;\n\n  overflow: hidden;\n  z-index: 10003;\n  z-index: 9999999;\n\n  ", "\n"])), (0, _css.condition)('isOpen')(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    height: 100%;\n    max-height: none;\n    background-color: black;\n    \n    -ms-content-zooming: none;\n    -ms-user-select: none;\n    -ms-touch-select: none;\n    touch-action: none;\n\n    position: fixed;\n    top: 0;\n    left: 0;\n    width:100%;\n    height: 100%;\n  "]))));

var StyledOuterContainer = _styledComponents["default"].div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100%;\n"])));

var StyledInnerContainer = _styledComponents["default"].div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n  overflow: hidden;\n  cursor: pointer;\n\n  ", "\n\n  > div {\n    z-index: 1;\n  }\n\n  ", "\n"])), (0, _css.condition)('isOpen')(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    position: relative;\n    top: 50px;\n    margin: 0 auto;\n    height: calc(100% - 100px);\n    cursor: revert;\n  "]))), (0, _css.breakpoint)(1)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    position: relative;\n    top: 112px !important;\n    margin: 0 auto;\n    height: calc(100% - 224px) !important;\n    width: calc(100% - 192px) !important;\n\n"]))));

var StyledTrack = _styledComponents["default"].div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  display: inline-block;\n  height: 100%;\n  width: ", "%;\n  position: relative;\n  top: 0;\n  left: 0;\n\n  transform: translate(\n    ", "%\n  );\n  transition: transform 1s;\n\n  ", "\n\n  > div {\n    display: inline-block;\n    position: relative;\n    height: 100%;\n    width: ", "%;\n  }\n\n  > div > img {\n    touch-action: pinch-zoom;\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    ", "\n  }\n  ", "\n"])), function (_ref) {
  var count = _ref.count;
  return count * 100;
}, function (_ref2) {
  var count = _ref2.count,
      slideIndex = _ref2.slideIndex;
  return slideIndex * (1 / count) * -100;
}, (0, _css.condition)('isOpening')(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    transition: none;\n  "]))), function (_ref3) {
  var count = _ref3.count;
  return 1 / count * 100;
}, (0, _css.condition)('isOpen')(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n      object-fit: contain;\n    "]))), (0, _css.breakpoint)(1)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n    > div > picture > img {\n      width: 100%;\n      height: 100%;\n      object-fit: contain;\n    }   \n  "]))));

var StyledArrowWrapper = _styledComponents["default"].div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 50%;\n  left: ", ";\n  right: ", ";\n  width: 70px;\n  height: 70px;\n  z-index: 1000;\n  font-size: 16px;\n  font-weight: bold;\n  color: white;\n  background: transparent;\n"])), function (_ref4) {
  var left = _ref4.left;
  return left || 'unset';
}, function (_ref5) {
  var right = _ref5.right;
  return right || 'unset';
});

var LightBoxMain = function LightBoxMain(props) {
  var currIndex = props.currIndex,
      isOpen = props.isOpen,
      isOpening = props.isOpening,
      imgCount = props.imgCount,
      loadedImages = props.loadedImages,
      showNavArrows = props.showNavArrows,
      lightboxRef = props.lightboxRef,
      onClick = props.onClick,
      onClose = props.onClose,
      onKeyDown = props.onKeyDown,
      onMoveNext = props.onMoveNext,
      onMovePrev = props.onMovePrev,
      onTouchEnd = props.onTouchEnd,
      onTouchStart = props.onTouchStart;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isHovered = _useState2[0],
      setIsHovered = _useState2[1];

  var leftButtonRef = (0, _react.useRef)(null);
  var rightButtonRef = (0, _react.useRef)(null);
  var isLeftButtonDisabled = currIndex === 0;
  var isRightButtonDisabled = currIndex === imgCount - 1;
  (0, _react.useEffect)(function () {
    if (isLeftButtonDisabled && rightButtonRef.current) {
      rightButtonRef.current.focus();
      return undefined;
    }

    if (isRightButtonDisabled && leftButtonRef.current) {
      leftButtonRef.current.focus();
    }
  }, [isLeftButtonDisabled, isRightButtonDisabled]);

  function handleMouseEnter() {
    setIsHovered(true);
  }

  function handleMouseLeave() {
    setIsHovered(false);
  }

  var hideArrows = (0, _react.useMemo)(function () {
    return (0, _propX.unwindProps)({
      showNavArrows: showNavArrows
    }).map(function (v) {
      return !isHovered && v.showNavArrows === 'hover' || v.showNavArrows === false;
    });
  }, [showNavArrows, isHovered]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(StyledLightboxMain, {
    isOpen: isOpen,
    ref: lightboxRef,
    onClick: onClick,
    onKeyDown: onKeyDown,
    onTouchStart: onTouchStart,
    onTouchEnd: onTouchEnd,
    tabIndex: "0",
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(StyledOuterContainer, {
      children: [isOpen && /*#__PURE__*/(0, _jsxRuntime.jsx)(_LightboxHeader["default"], {
        currIndex: currIndex,
        imgCount: imgCount,
        onClose: onClose
      }), !isOpen && /*#__PURE__*/(0, _jsxRuntime.jsx)(_LightboxCounter["default"], {
        currIndex: currIndex,
        imgCount: imgCount
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(StyledInnerContainer, {
        isOpen: isOpen,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(StyledTrack, {
          slideIndex: currIndex,
          count: imgCount,
          isOpen: isOpen,
          isOpening: isOpening,
          children: loadedImages && loadedImages.map(function (img) {
            return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)("img", _objectSpread({
                alt: "test"
              }, img))
            }, img.src);
          })
        })
      }), isOpen && showNavArrows && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(StyledArrowWrapper, {
          left: "calc(0.5% + 10px)",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_LightboxArrow["default"], {
            direction: "left",
            onClick: onMovePrev,
            disabled: isLeftButtonDisabled,
            buttonRef: leftButtonRef,
            hide: hideArrows
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(StyledArrowWrapper, {
          right: "calc(0.5% + 10px)",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_LightboxArrow["default"], {
            direction: "right",
            onClick: onMoveNext,
            disabled: isRightButtonDisabled,
            buttonRef: rightButtonRef,
            hide: hideArrows
          })
        })]
      })]
    })
  });
};

var _default = LightBoxMain;
exports["default"] = _default;