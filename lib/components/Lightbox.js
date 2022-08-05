"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactPortal = require("react-portal");

var _ScrollLock = _interopRequireDefault(require("../scrollLock/ScrollLock"));

var _UseTouch = _interopRequireDefault(require("../hooks/UseTouch"));

var _LightboxMain = _interopRequireDefault(require("./LightboxMain"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Lightbox = function Lightbox(props) {
  var images = props.images,
      isOpen = props.isOpen,
      onClose = props.onClose,
      onMovePrev = props.onMovePrev,
      onMoveNext = props.onMoveNext,
      onOpen = props.onOpen,
      preloadCount = props.preloadCount,
      currIndex = props.currIndex,
      imgCount = props.imgCount,
      openInPlace = props.openInPlace,
      showNavArrows = props.showNavArrows;
  var lightboxRef = (0, _react.useRef)(null);
  var touch = (0, _UseTouch["default"])({
    onTouchLeft: onMoveNext,
    onTouchRight: onMovePrev
  });

  var _useState = (0, _react.useState)(images ? images.slice(0, currIndex + preloadCount) : null),
      _useState2 = _slicedToArray(_useState, 2),
      loadedImages = _useState2[0],
      setLoadedImages = _useState2[1];

  var _useState3 = (0, _react.useState)(isOpen),
      _useState4 = _slicedToArray(_useState3, 2),
      isOpening = _useState4[0],
      setIsOpening = _useState4[1]; //* **************effects************** */
  // preLoad Images


  (0, _react.useEffect)(function () {
    setLoadedImages(images.slice(0, currIndex + preloadCount));
  }, [currIndex, images, preloadCount, isOpen]); // turns transition off on slide for better opening effect

  (0, _react.useLayoutEffect)(function () {
    if (isOpen) {
      setIsOpening(true);
    }
  }, [isOpen]); // turns transition back on once open

  (0, _react.useEffect)(function () {
    if (isOpening) {
      setIsOpening(false);
    }
  }, [isOpening]);

  var handleKeyDown = function handleKeyDown(e) {
    switch (e.key) {
      case 'ArrowLeft':
        onMovePrev(e);
        break;

      case 'ArrowRight':
        onMoveNext(e);
        break;

      case 'Escape':
        onClose(e);
        break;

      default:
        break;
    }
  };

  (0, _react.useEffect)(function () {
    if (lightboxRef.current) {
      lightboxRef.current.focus();
    }
  }, [lightboxRef]); // focus on open

  (0, _react.useEffect)(function () {
    if (isOpen && lightboxRef.current) {
      lightboxRef.current.focus();
    }
  }, [isOpen]);

  if (isOpen) {
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactPortal.Portal, {
      isOpen: isOpen,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_ScrollLock["default"], {
        scrollNode: lightboxRef,
        reserveScrollBarGap: true
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_LightboxMain["default"], {
        currIndex: currIndex,
        isOpen: isOpen,
        isOpening: isOpening,
        imgCount: imgCount,
        loadedImages: loadedImages,
        showNavArrows: showNavArrows,
        lightboxRef: lightboxRef,
        onClick: onOpen,
        onClose: onClose,
        onMoveNext: onMoveNext,
        onMovePrev: onMovePrev,
        onKeyDown: isOpen ? handleKeyDown : undefined,
        onTouchEnd: isOpen || openInPlace ? touch.onTouchEnd : undefined,
        onTouchStart: isOpen || openInPlace ? touch.onTouchStart : undefined,
        tabIndex: "0"
      })]
    });
  }

  return null;
};

Lightbox.defaultProps = {
  showNavArrows: true
};
var _default = Lightbox;
exports["default"] = _default;