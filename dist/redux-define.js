(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ReduxDefine"] = factory();
	else
		root["ReduxDefine"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _defineAction = __webpack_require__(1);

	Object.defineProperty(exports, 'defineAction', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_defineAction).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var NAMESPACE_SEPARATOR = '/';

	var defineAction = function defineAction(type) {
	  var subactions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
	  var namespace = arguments[2];

	  if (subactions && subactions.ACTION || typeof subactions === 'string') {
	    namespace = subactions;
	  }

	  if (!Array.isArray(subactions)) {
	    subactions = [];
	  }

	  var name = namespace ? [namespace, type].join(NAMESPACE_SEPARATOR) : type;

	  var action = subactions.reduce(function (r, i) {
	    return _extends({}, r, _defineProperty({}, i, name + '_' + i));
	  }, {});

	  action.ACTION = name;
	  action.defineAction = function (type, subactions) {
	    return defineAction(type, subactions, name);
	  };

	  action.toString = function () {
	    return name.toString();
	  };
	  return action;
	};

	exports.default = defineAction;

/***/ })
/******/ ])
});
;