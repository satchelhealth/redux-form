(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["ReduxForm"] = factory(require("react"));
	else
		root["ReduxForm"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_31__) {
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

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(31);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(64);

	var _createAll2 = __webpack_require__(33);

	var _createAll3 = _interopRequireDefault(_createAll2);

	var _createAll = _createAll3['default'](false, _react2['default'], _reactRedux.connect);

	var actionTypes = _createAll.actionTypes;
	var blur = _createAll.blur;
	var change = _createAll.change;
	var changeWithKey = _createAll.changeWithKey;
	var destroy = _createAll.destroy;
	var focus = _createAll.focus;
	var reducer = _createAll.reducer;
	var reduxForm = _createAll.reduxForm;
	var getValues = _createAll.getValues;
	var initialize = _createAll.initialize;
	var initializeWithKey = _createAll.initializeWithKey;
	var propTypes = _createAll.propTypes;
	var reset = _createAll.reset;
	var startAsyncValidation = _createAll.startAsyncValidation;
	var startSubmit = _createAll.startSubmit;
	var stopAsyncValidation = _createAll.stopAsyncValidation;
	var stopSubmit = _createAll.stopSubmit;
	var touch = _createAll.touch;
	var touchWithKey = _createAll.touchWithKey;
	var untouch = _createAll.untouch;
	var untouchWithKey = _createAll.untouchWithKey;
	exports.actionTypes = actionTypes;
	exports.blur = blur;
	exports.change = change;
	exports.changeWithKey = changeWithKey;
	exports.destroy = destroy;
	exports.focus = focus;
	exports.reducer = reducer;
	exports.reduxForm = reduxForm;
	exports.getValues = getValues;
	exports.initialize = initialize;
	exports.initializeWithKey = initializeWithKey;
	exports.propTypes = propTypes;
	exports.reset = reset;
	exports.startAsyncValidation = startAsyncValidation;
	exports.startSubmit = startSubmit;
	exports.stopAsyncValidation = stopAsyncValidation;
	exports.stopSubmit = stopSubmit;
	exports.touch = touch;
	exports.touchWithKey = touchWithKey;
	exports.untouch = untouch;
	exports.untouchWithKey = untouchWithKey;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = isValid;

	function isValid(error) {
	  if (Array.isArray(error)) {
	    return error.reduce(function (valid, errorValue) {
	      return valid && isValid(errorValue);
	    }, true);
	  }
	  if (error && typeof error === 'object') {
	    return Object.keys(error).reduce(function (valid, key) {
	      return valid && isValid(error[key]);
	    }, true);
	  }
	  return !error;
	}

	module.exports = exports['default'];

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;
	var ADD_ARRAY_VALUE = 'redux-form/ADD_ARRAY_VALUE';
	exports.ADD_ARRAY_VALUE = ADD_ARRAY_VALUE;
	var BLUR = 'redux-form/BLUR';
	exports.BLUR = BLUR;
	var CHANGE = 'redux-form/CHANGE';
	exports.CHANGE = CHANGE;
	var DESTROY = 'redux-form/DESTROY';
	exports.DESTROY = DESTROY;
	var FOCUS = 'redux-form/FOCUS';
	exports.FOCUS = FOCUS;
	var INITIALIZE = 'redux-form/INITIALIZE';
	exports.INITIALIZE = INITIALIZE;
	var REMOVE_ARRAY_VALUE = 'redux-form/REMOVE_ARRAY_VALUE';
	exports.REMOVE_ARRAY_VALUE = REMOVE_ARRAY_VALUE;
	var RESET = 'redux-form/RESET';
	exports.RESET = RESET;
	var START_ASYNC_VALIDATION = 'redux-form/START_ASYNC_VALIDATION';
	exports.START_ASYNC_VALIDATION = START_ASYNC_VALIDATION;
	var START_SUBMIT = 'redux-form/START_SUBMIT';
	exports.START_SUBMIT = START_SUBMIT;
	var STOP_ASYNC_VALIDATION = 'redux-form/STOP_ASYNC_VALIDATION';
	exports.STOP_ASYNC_VALIDATION = STOP_ASYNC_VALIDATION;
	var STOP_SUBMIT = 'redux-form/STOP_SUBMIT';
	exports.STOP_SUBMIT = STOP_SUBMIT;
	var SUBMIT_FAILED = 'redux-form/SUBMIT_FAILED';
	exports.SUBMIT_FAILED = SUBMIT_FAILED;
	var TOUCH = 'redux-form/TOUCH';
	exports.TOUCH = TOUCH;
	var UNTOUCH = 'redux-form/UNTOUCH';
	exports.UNTOUCH = UNTOUCH;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	/**
	 * Maps all the values in the given object through the given function and saves them, by key, to a result object
	 */
	"use strict";

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports["default"] = mapValues;

	function mapValues(obj, fn) {
	  return obj ? Object.keys(obj).reduce(function (accumulator, key) {
	    var _extends2;

	    return _extends({}, accumulator, (_extends2 = {}, _extends2[key] = fn(obj[key], key), _extends2));
	  }, {}) : obj;
	}

	module.exports = exports["default"];

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	module.exports = isPromise;

	function isPromise(obj) {
	  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
	}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	if (true) {
	  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
	    Symbol.for &&
	    Symbol.for('react.element')) ||
	    0xeac7;

	  var isValidElement = function(object) {
	    return typeof object === 'object' &&
	      object !== null &&
	      object.$$typeof === REACT_ELEMENT_TYPE;
	  };

	  // By explicitly using `prop-types` you are opting into new development behavior.
	  // http://fb.me/prop-types-in-prod
	  var throwOnDirectAccess = true;
	  module.exports = __webpack_require__(58)(isValidElement, throwOnDirectAccess);
	} else {
	  // By explicitly using `prop-types` you are opting into new production behavior.
	  // http://fb.me/prop-types-in-prod
	  module.exports = require('./factoryWithThrowingShims')();
	}


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _actionTypes = __webpack_require__(2);

	var addArrayValue = function addArrayValue(path, value, index) {
	  return { type: _actionTypes.ADD_ARRAY_VALUE, path: path, value: value, index: index };
	};

	exports.addArrayValue = addArrayValue;
	var blur = function blur(field, value) {
	  return { type: _actionTypes.BLUR, field: field, value: value };
	};

	exports.blur = blur;
	var change = function change(field, value) {
	  return { type: _actionTypes.CHANGE, field: field, value: value };
	};

	exports.change = change;
	var destroy = function destroy() {
	  return { type: _actionTypes.DESTROY };
	};

	exports.destroy = destroy;
	var focus = function focus(field) {
	  return { type: _actionTypes.FOCUS, field: field };
	};

	exports.focus = focus;
	var initialize = function initialize(data, fields) {
	  if (!Array.isArray(fields)) {
	    throw new Error('must provide fields array to initialize() action creator');
	  }
	  return { type: _actionTypes.INITIALIZE, data: data, fields: fields };
	};

	exports.initialize = initialize;
	var removeArrayValue = function removeArrayValue(path, index) {
	  return { type: _actionTypes.REMOVE_ARRAY_VALUE, path: path, index: index };
	};

	exports.removeArrayValue = removeArrayValue;
	var reset = function reset() {
	  return { type: _actionTypes.RESET };
	};

	exports.reset = reset;
	var startAsyncValidation = function startAsyncValidation() {
	  return { type: _actionTypes.START_ASYNC_VALIDATION };
	};

	exports.startAsyncValidation = startAsyncValidation;
	var startSubmit = function startSubmit() {
	  return { type: _actionTypes.START_SUBMIT };
	};

	exports.startSubmit = startSubmit;
	var stopAsyncValidation = function stopAsyncValidation(errors) {
	  return { type: _actionTypes.STOP_ASYNC_VALIDATION, errors: errors };
	};

	exports.stopAsyncValidation = stopAsyncValidation;
	var stopSubmit = function stopSubmit(errors) {
	  return { type: _actionTypes.STOP_SUBMIT, errors: errors };
	};

	exports.stopSubmit = stopSubmit;
	var submitFailed = function submitFailed() {
	  return { type: _actionTypes.SUBMIT_FAILED };
	};

	exports.submitFailed = submitFailed;
	var touch = function touch() {
	  for (var _len = arguments.length, fields = Array(_len), _key = 0; _key < _len; _key++) {
	    fields[_key] = arguments[_key];
	  }

	  return { type: _actionTypes.TOUCH, fields: fields };
	};

	exports.touch = touch;
	var untouch = function untouch() {
	  for (var _len2 = arguments.length, fields = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	    fields[_key2] = arguments[_key2];
	  }

	  return { type: _actionTypes.UNTOUCH, fields: fields };
	};
	exports.untouch = untouch;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports['default'] = bindActionData;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _mapValues = __webpack_require__(3);

	var _mapValues2 = _interopRequireDefault(_mapValues);

	/**
	 * Adds additional properties to the results of the function or map of functions passed
	 */

	function bindActionData(action, data) {
	  if (typeof action === 'function') {
	    return function () {
	      return _extends({}, action.apply(undefined, arguments), data);
	    };
	  }
	  if (typeof action === 'object') {
	    return _mapValues2['default'](action, function (value) {
	      return bindActionData(value, data);
	    });
	  }
	  return action;
	}

	module.exports = exports['default'];

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;
	var dataKey = 'value';
	exports.dataKey = dataKey;
	var createOnDragStart = function createOnDragStart(name, getValue) {
	  return function (event) {
	    event.dataTransfer.setData(dataKey, getValue());
	  };
	};

	exports['default'] = createOnDragStart;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _isEvent = __webpack_require__(10);

	var _isEvent2 = _interopRequireDefault(_isEvent);

	var getSelectedValues = function getSelectedValues(options) {
	  var result = [];
	  if (options) {
	    for (var index = 0; index < options.length; index++) {
	      var option = options[index];
	      if (option.selected) {
	        result.push(option.value);
	      }
	    }
	  }
	  return result;
	};

	var getValue = function getValue(event, isReactNative) {
	  if (_isEvent2['default'](event)) {
	    if (!isReactNative && event.nativeEvent && event.nativeEvent.text !== undefined) {
	      return event.nativeEvent.text;
	    }
	    if (isReactNative && event.nativeEvent !== undefined) {
	      return event.nativeEvent.text;
	    }
	    var _event$target = event.target;
	    var type = _event$target.type;
	    var value = _event$target.value;
	    var checked = _event$target.checked;
	    var files = _event$target.files;
	    var dataTransfer = event.dataTransfer;

	    if (type === 'checkbox') {
	      return checked;
	    }
	    if (type === 'file') {
	      return files || dataTransfer && dataTransfer.files;
	    }
	    if (type === 'select-multiple') {
	      return getSelectedValues(event.target.options);
	    }
	    return value;
	  }
	  // not an event, so must be either our value or an object containing our value in the 'value' key
	  return event && typeof event === 'object' && event.value !== undefined ? event.value : // extract value from { value: value } structure. https://github.com/nikgraf/belle/issues/58
	  event;
	};

	exports['default'] = getValue;
	module.exports = exports['default'];

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	"use strict";

	exports.__esModule = true;
	var isEvent = function isEvent(candidate) {
	  return !!(candidate && candidate.stopPropagation && candidate.preventDefault);
	};

	exports["default"] = isEvent;
	module.exports = exports["default"];

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _isEvent = __webpack_require__(10);

	var _isEvent2 = _interopRequireDefault(_isEvent);

	var silenceEvent = function silenceEvent(event) {
	  var is = _isEvent2['default'](event);
	  if (is) {
	    event.preventDefault();
	  }
	  return is;
	};

	exports['default'] = silenceEvent;
	module.exports = exports['default'];

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = getDisplayName;

	function getDisplayName(Comp) {
	  return Comp.displayName || Comp.name || 'Component';
	}

	module.exports = exports['default'];

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;
	var getValue = function getValue(field, state, dest) {
	  var dotIndex = field.indexOf('.');
	  var openIndex = field.indexOf('[');
	  var closeIndex = field.indexOf(']');
	  if (openIndex > 0 && closeIndex !== openIndex + 1) {
	    throw new Error('found [ not followed by ]');
	  }
	  if (openIndex > 0 && (dotIndex < 0 || openIndex < dotIndex)) {
	    (function () {
	      // array field
	      var key = field.substring(0, openIndex);
	      var rest = field.substring(closeIndex + 1);
	      if (rest[0] === '.') {
	        rest = rest.substring(1);
	      }
	      var array = state && state[key] || [];
	      if (rest) {
	        if (!dest[key]) {
	          dest[key] = [];
	        }
	        array.forEach(function (item, index) {
	          if (!dest[key][index]) {
	            dest[key][index] = {};
	          }
	          getValue(rest, item, dest[key][index]);
	        });
	      } else {
	        dest[key] = array.map(function (item) {
	          return item.value;
	        });
	      }
	    })();
	  } else if (dotIndex > 0) {
	    // subobject field
	    var key = field.substring(0, dotIndex);
	    var rest = field.substring(dotIndex + 1);
	    if (!dest[key]) {
	      dest[key] = {};
	    }
	    getValue(rest, state && state[key] || {}, dest[key]);
	  } else {
	    dest[field] = state[field] && state[field].value;
	  }
	};

	var getValues = function getValues(fields, state) {
	  return fields.reduce(function (accumulator, field) {
	    getValue(field, state, accumulator);
	    return accumulator;
	  }, {});
	};

	exports['default'] = getValues;
	module.exports = exports['default'];

/***/ }),
/* 14 */
/***/ (function(module, exports) {

	/**
	 * A different version of getValues() that does not need the fields array
	 */
	'use strict';

	exports.__esModule = true;
	var getValuesFromState = function getValuesFromState(state) {
	  if (!state) {
	    return state;
	  }
	  var keys = Object.keys(state);
	  if (!keys.length) {
	    return undefined;
	  }
	  return keys.reduce(function (accumulator, key) {
	    var field = state[key];
	    if (field) {
	      if (field.hasOwnProperty && field.hasOwnProperty('value')) {
	        if (field.value !== undefined) {
	          accumulator[key] = field.value;
	        }
	      } else if (Array.isArray(field)) {
	        accumulator[key] = field.map(function (arrayField) {
	          return arrayField.value || getValuesFromState(arrayField);
	        });
	      } else if (typeof field !== 'string') {
	        accumulator[key] = getValuesFromState(field);
	      }
	    }
	    return accumulator;
	  }, {});
	};

	exports['default'] = getValuesFromState;
	module.exports = exports['default'];

/***/ }),
/* 15 */
/***/ (function(module, exports) {

	/**
	 * Reads any potentially deep value from an object using dot and array syntax
	 */
	'use strict';

	exports.__esModule = true;
	var read = function read(_x, _x2) {
	  var _again = true;

	  _function: while (_again) {
	    var path = _x,
	        object = _x2;
	    _again = false;

	    if (!path || !object) {
	      return object;
	    }
	    var dotIndex = path.indexOf('.');
	    if (dotIndex === 0) {
	      _x = path.substring(1);
	      _x2 = object;
	      _again = true;
	      dotIndex = undefined;
	      continue _function;
	    }
	    var openIndex = path.indexOf('[');
	    var closeIndex = path.indexOf(']');
	    if (dotIndex >= 0 && (openIndex < 0 || dotIndex < openIndex)) {
	      // iterate down object tree
	      _x = path.substring(dotIndex + 1);
	      _x2 = object[path.substring(0, dotIndex)];
	      _again = true;
	      dotIndex = openIndex = closeIndex = undefined;
	      continue _function;
	    }
	    if (openIndex >= 0 && (dotIndex < 0 || openIndex < dotIndex)) {
	      if (closeIndex < 0) {
	        throw new Error('found [ but no ]');
	      }
	      var key = path.substring(0, openIndex);
	      var index = path.substring(openIndex + 1, closeIndex);
	      if (!index.length) {
	        return object[key];
	      }
	      if (openIndex === 0) {
	        _x = path.substring(closeIndex + 1);
	        _x2 = object[index];
	        _again = true;
	        dotIndex = openIndex = closeIndex = key = index = undefined;
	        continue _function;
	      }
	      if (!object[key]) {
	        return undefined;
	      }
	      _x = path.substring(closeIndex + 1);
	      _x2 = object[key][index];
	      _again = true;
	      dotIndex = openIndex = closeIndex = key = index = undefined;
	      continue _function;
	    }
	    return object[path];
	  }
	};

	exports['default'] = read;
	module.exports = exports['default'];

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _behaviors;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var _actionTypes = __webpack_require__(2);

	var _mapValues = __webpack_require__(3);

	var _mapValues2 = _interopRequireDefault(_mapValues);

	var _read = __webpack_require__(15);

	var _read2 = _interopRequireDefault(_read);

	var _write = __webpack_require__(17);

	var _write2 = _interopRequireDefault(_write);

	var _getValuesFromState = __webpack_require__(14);

	var _getValuesFromState2 = _interopRequireDefault(_getValuesFromState);

	var _initializeState = __webpack_require__(44);

	var _initializeState2 = _interopRequireDefault(_initializeState);

	var _resetState = __webpack_require__(48);

	var _resetState2 = _interopRequireDefault(_resetState);

	var initialState = {
	  _active: undefined,
	  _asyncValidating: false,
	  _error: undefined,
	  _submitting: false,
	  _submitFailed: false
	};

	exports.initialState = initialState;
	var behaviors = (_behaviors = {}, _behaviors[_actionTypes.ADD_ARRAY_VALUE] = function (state, _ref) {
	  var path = _ref.path;
	  var index = _ref.index;
	  var value = _ref.value;

	  var array = _read2['default'](path, state);
	  var stateCopy = _extends({}, state);
	  var arrayCopy = array ? [].concat(array) : [];
	  var newValue = { value: value };
	  if (index === undefined) {
	    arrayCopy.push(newValue);
	  } else {
	    arrayCopy.splice(index, 0, newValue);
	  }
	  return _write2['default'](path, arrayCopy, stateCopy);
	}, _behaviors[_actionTypes.BLUR] = function (state, _ref2) {
	  var field = _ref2.field;
	  var value = _ref2.value;
	  var touch = _ref2.touch;

	  // remove _active from state
	  var _active = state._active;

	  var stateCopy = _objectWithoutProperties(state, ['_active']);

	  // eslint-disable-line prefer-const
	  return _write2['default'](field, function (previous) {
	    var result = _extends({}, previous);
	    if (value !== undefined) {
	      result.value = value;
	    }
	    if (touch) {
	      result.touched = true;
	    }
	    return result;
	  }, stateCopy);
	}, _behaviors[_actionTypes.CHANGE] = function (state, _ref3) {
	  var field = _ref3.field;
	  var value = _ref3.value;
	  var touch = _ref3.touch;

	  return _write2['default'](field, function (previous) {
	    var _extends9 = _extends({}, previous, { value: value });

	    var asyncError = _extends9.asyncError;
	    var submitError = _extends9.submitError;

	    var result = _objectWithoutProperties(_extends9, ['asyncError', 'submitError']);

	    if (touch) {
	      result.touched = true;
	    }
	    return result;
	  }, state);
	}, _behaviors[_actionTypes.DESTROY] = function () {
	  return undefined;
	}, _behaviors[_actionTypes.FOCUS] = function (state, _ref4) {
	  var field = _ref4.field;

	  var stateCopy = _write2['default'](field + '.visited', true, state);
	  stateCopy._active = field;
	  return stateCopy;
	}, _behaviors[_actionTypes.INITIALIZE] = function (state, _ref5) {
	  var data = _ref5.data;
	  var fields = _ref5.fields;

	  return _extends({}, _initializeState2['default'](data, fields, state), {
	    _asyncValidating: false,
	    _active: undefined,
	    _error: undefined,
	    _submitting: false,
	    _submitFailed: false
	  });
	}, _behaviors[_actionTypes.REMOVE_ARRAY_VALUE] = function (state, _ref6) {
	  var path = _ref6.path;
	  var index = _ref6.index;

	  var array = _read2['default'](path, state);
	  var stateCopy = _extends({}, state);
	  var arrayCopy = array ? [].concat(array) : [];
	  if (index === undefined) {
	    arrayCopy.pop();
	  } else if (isNaN(index)) {
	    delete arrayCopy[index];
	  } else {
	    arrayCopy.splice(index, 1);
	  }
	  return _write2['default'](path, arrayCopy, stateCopy);
	}, _behaviors[_actionTypes.RESET] = function (state) {
	  return _extends({}, _resetState2['default'](state), {
	    _active: undefined,
	    _asyncValidating: false,
	    _error: undefined,
	    _submitting: false,
	    _submitFailed: false
	  });
	}, _behaviors[_actionTypes.START_ASYNC_VALIDATION] = function (state) {
	  return _extends({}, state, {
	    _asyncValidating: true
	  });
	}, _behaviors[_actionTypes.START_SUBMIT] = function (state) {
	  return _extends({}, state, {
	    _submitting: true
	  });
	}, _behaviors[_actionTypes.STOP_ASYNC_VALIDATION] = function (state, _ref7) {
	  var errors = _ref7.errors;

	  return _extends({}, _mapValues2['default'](state, function (value) {
	    return value && value.asyncError ? _extends({}, value, { asyncError: undefined }) : value;
	  }), _mapValues2['default'](errors, function (error, key) {
	    return _extends({}, state[key], {
	      asyncError: error
	    });
	  }), {
	    _asyncValidating: false,
	    _error: errors && errors._error
	  });
	}, _behaviors[_actionTypes.STOP_SUBMIT] = function (state, _ref8) {
	  var errors = _ref8.errors;

	  return _extends({}, state, errors ? _mapValues2['default'](errors, function (error, key) {
	    return _extends({}, state[key], {
	      submitError: error
	    });
	  }) : {}, {
	    _error: errors && errors._error,
	    _submitting: false,
	    _submitFailed: !!(errors && Object.keys(errors).length)
	  });
	}, _behaviors[_actionTypes.SUBMIT_FAILED] = function (state) {
	  return _extends({}, state, {
	    _submitFailed: true
	  });
	}, _behaviors[_actionTypes.TOUCH] = function (state, _ref9) {
	  var fields = _ref9.fields;

	  return _extends({}, state, fields.reduce(function (accumulator, field) {
	    return _write2['default'](field, function (value) {
	      return _extends({}, value, { touched: true });
	    }, accumulator);
	  }, state));
	}, _behaviors[_actionTypes.UNTOUCH] = function (state, _ref10) {
	  var fields = _ref10.fields;

	  return _extends({}, state, fields.reduce(function (accumulator, field) {
	    return _write2['default'](field, function (value) {
	      if (value) {
	        var touched = value.touched;

	        var rest = _objectWithoutProperties(value, ['touched']);

	        return rest;
	      }
	      return value;
	    }, accumulator);
	  }, state));
	}, _behaviors);

	var reducer = function reducer() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
	  var action = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	  var behavior = behaviors[action.type];
	  return behavior ? behavior(state, action) : state;
	};

	function formReducer() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	  var _extends7;

	  var action = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	  var form = action.form;
	  var key = action.key;

	  var rest = _objectWithoutProperties(action, ['form', 'key']);

	  // eslint-disable-line no-redeclare
	  if (!form) {
	    return state;
	  }
	  if (key) {
	    var _extends4, _extends5;

	    if (action.type === _actionTypes.DESTROY) {
	      var _extends3;

	      return _extends({}, state, (_extends3 = {}, _extends3[form] = state[form] && Object.keys(state[form]).reduce(function (accumulator, stateKey) {
	        var _extends2;

	        return stateKey === key ? accumulator : _extends({}, accumulator, (_extends2 = {}, _extends2[stateKey] = state[form][stateKey], _extends2));
	      }, {}), _extends3));
	    }
	    return _extends({}, state, (_extends5 = {}, _extends5[form] = _extends({}, state[form], (_extends4 = {}, _extends4[key] = reducer((state[form] || {})[key], rest), _extends4)), _extends5));
	  }
	  if (action.type === _actionTypes.DESTROY) {
	    return Object.keys(state).reduce(function (accumulator, formName) {
	      var _extends6;

	      return formName === form ? accumulator : _extends({}, accumulator, (_extends6 = {}, _extends6[formName] = state[formName], _extends6));
	    }, {});
	  }
	  return _extends({}, state, (_extends7 = {}, _extends7[form] = reducer(state[form], rest), _extends7));
	}

	/**
	 * Adds additional functionality to the reducer
	 */
	function decorate(target) {
	  target.plugin = function plugin(reducers) {
	    var _this = this;

	    // use 'function' keyword to enable 'this'
	    return decorate(function () {
	      var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	      var action = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	      var result = _this(state, action);
	      return _extends({}, result, _mapValues2['default'](reducers, function (pluginReducer, key) {
	        return pluginReducer(result[key] || initialState, action);
	      }));
	    });
	  };

	  target.normalize = function normalize(normalizers) {
	    var _this2 = this;

	    // use 'function' keyword to enable 'this'
	    return decorate(function () {
	      var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	      var action = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	      var result = _this2(state, action);
	      return _extends({}, result, _mapValues2['default'](normalizers, function (formNormalizers, form) {
	        var runNormalize = function runNormalize(previous, currentResult) {
	          var previousValues = _getValuesFromState2['default'](_extends({}, initialState, previous));
	          var formResult = _extends({}, initialState, currentResult);
	          return _extends({}, formResult, _mapValues2['default'](formNormalizers, function (fieldNormalizer, field) {
	            return _extends({}, formResult[field], {
	              value: fieldNormalizer(formResult[field] ? formResult[field].value : undefined, // value
	              previous && previous[field] ? previous[field].value : undefined, // previous value
	              _getValuesFromState2['default'](formResult), // all field values
	              previousValues) // all previous field values
	            });
	          }));
	        };
	        if (action.key) {
	          var _extends8;

	          return _extends({}, result[form], (_extends8 = {}, _extends8[action.key] = runNormalize(state[form][action.key], result[form][action.key]), _extends8));
	        }
	        return runNormalize(state[form], result[form]);
	      }));
	    });
	  };

	  return target;
	}

	exports['default'] = decorate(formReducer);

/***/ }),
/* 17 */
/***/ (function(module, exports) {

	/**
	 * Writes any potentially deep value from an object using dot and array syntax,
	 * and returns a new copy of the object.
	 */
	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var write = function write(_x, _x2, _x3) {
	  var _again = true;

	  _function: while (_again) {
	    var path = _x,
	        value = _x2,
	        object = _x3;

	    var _extends7;

	    _again = false;

	    var dotIndex = path.indexOf('.');
	    if (dotIndex === 0) {
	      _x = path.substring(1);
	      _x2 = value;
	      _x3 = object;
	      _again = true;
	      _extends7 = dotIndex = undefined;
	      continue _function;
	    }
	    var openIndex = path.indexOf('[');
	    var closeIndex = path.indexOf(']');
	    if (dotIndex >= 0 && (openIndex < 0 || dotIndex < openIndex)) {
	      var _extends2;

	      // is dot notation
	      var key = path.substring(0, dotIndex);
	      return _extends({}, object, (_extends2 = {}, _extends2[key] = write(path.substring(dotIndex + 1), value, object[key] || {}), _extends2));
	    }
	    if (openIndex >= 0 && (dotIndex < 0 || openIndex < dotIndex)) {
	      var _extends6;

	      var _extends4;

	      var _extends3;

	      var _extends5;

	      var _ret = (function () {
	        // is array notation
	        if (closeIndex < 0) {
	          throw new Error('found [ but no ]');
	        }
	        var key = path.substring(0, openIndex);
	        var index = path.substring(openIndex + 1, closeIndex);
	        var array = object[key] || [];
	        var rest = path.substring(closeIndex + 1);
	        if (index) {
	          // indexed array
	          if (rest.length) {
	            // need to keep recursing
	            var dest = array[index] || {};
	            var arrayCopy = [].concat(array);
	            arrayCopy[index] = write(rest, value, dest);
	            return {
	              v: _extends({}, object || {}, (_extends3 = {}, _extends3[key] = arrayCopy, _extends3))
	            };
	          }
	          var copy = [].concat(array);
	          copy[index] = typeof value === 'function' ? value(copy[index]) : value;
	          return {
	            v: _extends({}, object || {}, (_extends4 = {}, _extends4[key] = copy, _extends4))
	          };
	        }
	        // indexless array
	        if (rest.length) {
	          // need to keep recursing
	          if ((!array || !array.length) && typeof value === 'function') {
	            return {
	              v: object
	            }; // don't even set a value under [key]
	          }
	          var arrayCopy = array.map(function (dest) {
	            return write(rest, value, dest);
	          });
	          return {
	            v: _extends({}, object || {}, (_extends5 = {}, _extends5[key] = arrayCopy, _extends5))
	          };
	        }
	        var result = undefined;
	        if (Array.isArray(value)) {
	          result = value;
	        } else if (object[key]) {
	          result = array.map(function (dest) {
	            return typeof value === 'function' ? value(dest) : value;
	          });
	        } else if (typeof value === 'function') {
	          return {
	            v: object
	          }; // don't even set a value under [key]
	        } else {
	            result = value;
	          }
	        return {
	          v: _extends({}, object || {}, (_extends6 = {}, _extends6[key] = result, _extends6))
	        };
	      })();

	      if (typeof _ret === 'object') return _ret.v;
	    }
	    return _extends({}, object, (_extends7 = {}, _extends7[path] = typeof value === 'function' ? value(object[path]) : value, _extends7));
	  }
	};

	exports['default'] = write;
	module.exports = exports['default'];

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	var pSlice = Array.prototype.slice;
	var objectKeys = __webpack_require__(54);
	var isArguments = __webpack_require__(53);

	var deepEqual = module.exports = function (actual, expected, opts) {
	  if (!opts) opts = {};
	  // 7.1. All identical values are equivalent, as determined by ===.
	  if (actual === expected) {
	    return true;

	  } else if (actual instanceof Date && expected instanceof Date) {
	    return actual.getTime() === expected.getTime();

	  // 7.3. Other pairs that do not both pass typeof value == 'object',
	  // equivalence is determined by ==.
	  } else if (!actual || !expected || typeof actual != 'object' && typeof expected != 'object') {
	    return opts.strict ? actual === expected : actual == expected;

	  // 7.4. For all other Object pairs, including Array objects, equivalence is
	  // determined by having the same number of owned properties (as verified
	  // with Object.prototype.hasOwnProperty.call), the same set of keys
	  // (although not necessarily the same order), equivalent values for every
	  // corresponding key, and an identical 'prototype' property. Note: this
	  // accounts for both named and indexed properties on Arrays.
	  } else {
	    return objEquiv(actual, expected, opts);
	  }
	}

	function isUndefinedOrNull(value) {
	  return value === null || value === undefined;
	}

	function isBuffer (x) {
	  if (!x || typeof x !== 'object' || typeof x.length !== 'number') return false;
	  if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {
	    return false;
	  }
	  if (x.length > 0 && typeof x[0] !== 'number') return false;
	  return true;
	}

	function objEquiv(a, b, opts) {
	  var i, key;
	  if (isUndefinedOrNull(a) || isUndefinedOrNull(b))
	    return false;
	  // an identical 'prototype' property.
	  if (a.prototype !== b.prototype) return false;
	  //~~~I've managed to break Object.keys through screwy arguments passing.
	  //   Converting to array solves the problem.
	  if (isArguments(a)) {
	    if (!isArguments(b)) {
	      return false;
	    }
	    a = pSlice.call(a);
	    b = pSlice.call(b);
	    return deepEqual(a, b, opts);
	  }
	  if (isBuffer(a)) {
	    if (!isBuffer(b)) {
	      return false;
	    }
	    if (a.length !== b.length) return false;
	    for (i = 0; i < a.length; i++) {
	      if (a[i] !== b[i]) return false;
	    }
	    return true;
	  }
	  try {
	    var ka = objectKeys(a),
	        kb = objectKeys(b);
	  } catch (e) {//happens when one is a string literal and the other isn't
	    return false;
	  }
	  // having the same number of owned properties (keys incorporates
	  // hasOwnProperty)
	  if (ka.length != kb.length)
	    return false;
	  //the same set of keys (although not necessarily the same order),
	  ka.sort();
	  kb.sort();
	  //~~~cheap key test
	  for (i = ka.length - 1; i >= 0; i--) {
	    if (ka[i] != kb[i])
	      return false;
	  }
	  //equivalent values for every corresponding key, and
	  //~~~possibly expensive deep test
	  for (i = ka.length - 1; i >= 0; i--) {
	    key = ka[i];
	    if (!deepEqual(a[key], b[key], opts)) return false;
	  }
	  return typeof a === typeof b;
	}


/***/ }),
/* 19 */
/***/ (function(module, exports) {

	"use strict";

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */

	function makeEmptyFunction(arg) {
	  return function () {
	    return arg;
	  };
	}

	/**
	 * This function accepts and discards inputs; it has no side effects. This is
	 * primarily useful idiomatically for overridable function endpoints which
	 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
	 */
	var emptyFunction = function emptyFunction() {};

	emptyFunction.thatReturns = makeEmptyFunction;
	emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
	emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
	emptyFunction.thatReturnsNull = makeEmptyFunction(null);
	emptyFunction.thatReturnsThis = function () {
	  return this;
	};
	emptyFunction.thatReturnsArgument = function (arg) {
	  return arg;
	};

	module.exports = emptyFunction;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */

	'use strict';

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var validateFormat = function validateFormat(format) {};

	if (true) {
	  validateFormat = function validateFormat(format) {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  };
	}

	function invariant(condition, format, a, b, c, d, e, f) {
	  validateFormat(format);

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	}

	module.exports = invariant;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2014-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */

	'use strict';

	var emptyFunction = __webpack_require__(19);

	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */

	var warning = emptyFunction;

	if (true) {
	  var printWarning = function printWarning(format) {
	    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      args[_key - 1] = arguments[_key];
	    }

	    var argIndex = 0;
	    var message = 'Warning: ' + format.replace(/%s/g, function () {
	      return args[argIndex++];
	    });
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };

	  warning = function warning(condition, format) {
	    if (format === undefined) {
	      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
	    }

	    if (format.indexOf('Failed Composite propType: ') === 0) {
	      return; // Ignore CompositeComponent proptype check.
	    }

	    if (!condition) {
	      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	        args[_key2 - 2] = arguments[_key2];
	      }

	      printWarning.apply(undefined, [format].concat(args));
	    }
	  };
	}

	module.exports = warning;

/***/ }),
/* 22 */
/***/ (function(module, exports) {

	/**
	 * Copyright 2015, Yahoo! Inc.
	 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
	 */
	'use strict';

	var REACT_STATICS = {
	    childContextTypes: true,
	    contextTypes: true,
	    defaultProps: true,
	    displayName: true,
	    getDefaultProps: true,
	    mixins: true,
	    propTypes: true,
	    type: true
	};

	var KNOWN_STATICS = {
	    name: true,
	    length: true,
	    prototype: true,
	    caller: true,
	    arguments: true,
	    arity: true
	};

	var isGetOwnPropertySymbolsAvailable = typeof Object.getOwnPropertySymbols === 'function';

	module.exports = function hoistNonReactStatics(targetComponent, sourceComponent, customStatics) {
	    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components
	        var keys = Object.getOwnPropertyNames(sourceComponent);

	        /* istanbul ignore else */
	        if (isGetOwnPropertySymbolsAvailable) {
	            keys = keys.concat(Object.getOwnPropertySymbols(sourceComponent));
	        }

	        for (var i = 0; i < keys.length; ++i) {
	            if (!REACT_STATICS[keys[i]] && !KNOWN_STATICS[keys[i]] && (!customStatics || !customStatics[keys[i]])) {
	                try {
	                    targetComponent[keys[i]] = sourceComponent[keys[i]];
	                } catch (error) {

	                }
	            }
	        }
	    }

	    return targetComponent;
	};


/***/ }),
/* 23 */
/***/ (function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

	module.exports = ReactPropTypesSecret;


/***/ }),
/* 24 */
/***/ (function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports["default"] = createStoreShape;

	function createStoreShape(PropTypes) {
	  return PropTypes.shape({
	    subscribe: PropTypes.func.isRequired,
	    dispatch: PropTypes.func.isRequired,
	    getState: PropTypes.func.isRequired
	  });
	}

	module.exports = exports["default"];

/***/ }),
/* 25 */
/***/ (function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports["default"] = compose;
	/**
	 * Composes single-argument functions from right to left. The rightmost
	 * function can take multiple arguments as it provides the signature for
	 * the resulting composite function.
	 *
	 * @param {...Function} funcs The functions to compose.
	 * @returns {Function} A function obtained by composing the argument functions
	 * from right to left. For example, compose(f, g, h) is identical to doing
	 * (...args) => f(g(h(...args))).
	 */

	function compose() {
	  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
	    funcs[_key] = arguments[_key];
	  }

	  if (funcs.length === 0) {
	    return function (arg) {
	      return arg;
	    };
	  }

	  if (funcs.length === 1) {
	    return funcs[0];
	  }

	  return funcs.reduce(function (a, b) {
	    return function () {
	      return a(b.apply(undefined, arguments));
	    };
	  });
	}

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.ActionTypes = undefined;
	exports['default'] = createStore;

	var _isPlainObject = __webpack_require__(30);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	var _symbolObservable = __webpack_require__(79);

	var _symbolObservable2 = _interopRequireDefault(_symbolObservable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/**
	 * These are private action types reserved by Redux.
	 * For any unknown actions, you must return the current state.
	 * If the current state is undefined, you must return the initial state.
	 * Do not reference these action types directly in your code.
	 */
	var ActionTypes = exports.ActionTypes = {
	  INIT: '@@redux/INIT'

	  /**
	   * Creates a Redux store that holds the state tree.
	   * The only way to change the data in the store is to call `dispatch()` on it.
	   *
	   * There should only be a single store in your app. To specify how different
	   * parts of the state tree respond to actions, you may combine several reducers
	   * into a single reducer function by using `combineReducers`.
	   *
	   * @param {Function} reducer A function that returns the next state tree, given
	   * the current state tree and the action to handle.
	   *
	   * @param {any} [preloadedState] The initial state. You may optionally specify it
	   * to hydrate the state from the server in universal apps, or to restore a
	   * previously serialized user session.
	   * If you use `combineReducers` to produce the root reducer function, this must be
	   * an object with the same shape as `combineReducers` keys.
	   *
	   * @param {Function} [enhancer] The store enhancer. You may optionally specify it
	   * to enhance the store with third-party capabilities such as middleware,
	   * time travel, persistence, etc. The only store enhancer that ships with Redux
	   * is `applyMiddleware()`.
	   *
	   * @returns {Store} A Redux store that lets you read the state, dispatch actions
	   * and subscribe to changes.
	   */
	};function createStore(reducer, preloadedState, enhancer) {
	  var _ref2;

	  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
	    enhancer = preloadedState;
	    preloadedState = undefined;
	  }

	  if (typeof enhancer !== 'undefined') {
	    if (typeof enhancer !== 'function') {
	      throw new Error('Expected the enhancer to be a function.');
	    }

	    return enhancer(createStore)(reducer, preloadedState);
	  }

	  if (typeof reducer !== 'function') {
	    throw new Error('Expected the reducer to be a function.');
	  }

	  var currentReducer = reducer;
	  var currentState = preloadedState;
	  var currentListeners = [];
	  var nextListeners = currentListeners;
	  var isDispatching = false;

	  function ensureCanMutateNextListeners() {
	    if (nextListeners === currentListeners) {
	      nextListeners = currentListeners.slice();
	    }
	  }

	  /**
	   * Reads the state tree managed by the store.
	   *
	   * @returns {any} The current state tree of your application.
	   */
	  function getState() {
	    return currentState;
	  }

	  /**
	   * Adds a change listener. It will be called any time an action is dispatched,
	   * and some part of the state tree may potentially have changed. You may then
	   * call `getState()` to read the current state tree inside the callback.
	   *
	   * You may call `dispatch()` from a change listener, with the following
	   * caveats:
	   *
	   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
	   * If you subscribe or unsubscribe while the listeners are being invoked, this
	   * will not have any effect on the `dispatch()` that is currently in progress.
	   * However, the next `dispatch()` call, whether nested or not, will use a more
	   * recent snapshot of the subscription list.
	   *
	   * 2. The listener should not expect to see all state changes, as the state
	   * might have been updated multiple times during a nested `dispatch()` before
	   * the listener is called. It is, however, guaranteed that all subscribers
	   * registered before the `dispatch()` started will be called with the latest
	   * state by the time it exits.
	   *
	   * @param {Function} listener A callback to be invoked on every dispatch.
	   * @returns {Function} A function to remove this change listener.
	   */
	  function subscribe(listener) {
	    if (typeof listener !== 'function') {
	      throw new Error('Expected listener to be a function.');
	    }

	    var isSubscribed = true;

	    ensureCanMutateNextListeners();
	    nextListeners.push(listener);

	    return function unsubscribe() {
	      if (!isSubscribed) {
	        return;
	      }

	      isSubscribed = false;

	      ensureCanMutateNextListeners();
	      var index = nextListeners.indexOf(listener);
	      nextListeners.splice(index, 1);
	    };
	  }

	  /**
	   * Dispatches an action. It is the only way to trigger a state change.
	   *
	   * The `reducer` function, used to create the store, will be called with the
	   * current state tree and the given `action`. Its return value will
	   * be considered the **next** state of the tree, and the change listeners
	   * will be notified.
	   *
	   * The base implementation only supports plain object actions. If you want to
	   * dispatch a Promise, an Observable, a thunk, or something else, you need to
	   * wrap your store creating function into the corresponding middleware. For
	   * example, see the documentation for the `redux-thunk` package. Even the
	   * middleware will eventually dispatch plain object actions using this method.
	   *
	   * @param {Object} action A plain object representing “what changed”. It is
	   * a good idea to keep actions serializable so you can record and replay user
	   * sessions, or use the time travelling `redux-devtools`. An action must have
	   * a `type` property which may not be `undefined`. It is a good idea to use
	   * string constants for action types.
	   *
	   * @returns {Object} For convenience, the same action object you dispatched.
	   *
	   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
	   * return something else (for example, a Promise you can await).
	   */
	  function dispatch(action) {
	    if (!(0, _isPlainObject2['default'])(action)) {
	      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
	    }

	    if (typeof action.type === 'undefined') {
	      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
	    }

	    if (isDispatching) {
	      throw new Error('Reducers may not dispatch actions.');
	    }

	    try {
	      isDispatching = true;
	      currentState = currentReducer(currentState, action);
	    } finally {
	      isDispatching = false;
	    }

	    var listeners = currentListeners = nextListeners;
	    for (var i = 0; i < listeners.length; i++) {
	      var listener = listeners[i];
	      listener();
	    }

	    return action;
	  }

	  /**
	   * Replaces the reducer currently used by the store to calculate the state.
	   *
	   * You might need this if your app implements code splitting and you want to
	   * load some of the reducers dynamically. You might also need this if you
	   * implement a hot reloading mechanism for Redux.
	   *
	   * @param {Function} nextReducer The reducer for the store to use instead.
	   * @returns {void}
	   */
	  function replaceReducer(nextReducer) {
	    if (typeof nextReducer !== 'function') {
	      throw new Error('Expected the nextReducer to be a function.');
	    }

	    currentReducer = nextReducer;
	    dispatch({ type: ActionTypes.INIT });
	  }

	  /**
	   * Interoperability point for observable/reactive libraries.
	   * @returns {observable} A minimal observable of state changes.
	   * For more information, see the observable proposal:
	   * https://github.com/tc39/proposal-observable
	   */
	  function observable() {
	    var _ref;

	    var outerSubscribe = subscribe;
	    return _ref = {
	      /**
	       * The minimal observable subscription method.
	       * @param {Object} observer Any object that can be used as an observer.
	       * The observer object should have a `next` method.
	       * @returns {subscription} An object with an `unsubscribe` method that can
	       * be used to unsubscribe the observable from the store, and prevent further
	       * emission of values from the observable.
	       */
	      subscribe: function subscribe(observer) {
	        if (typeof observer !== 'object') {
	          throw new TypeError('Expected the observer to be an object.');
	        }

	        function observeState() {
	          if (observer.next) {
	            observer.next(getState());
	          }
	        }

	        observeState();
	        var unsubscribe = outerSubscribe(observeState);
	        return { unsubscribe: unsubscribe };
	      }
	    }, _ref[_symbolObservable2['default']] = function () {
	      return this;
	    }, _ref;
	  }

	  // When a store is created, an "INIT" action is dispatched so that every
	  // reducer returns their initial state. This effectively populates
	  // the initial state tree.
	  dispatch({ type: ActionTypes.INIT });

	  return _ref2 = {
	    dispatch: dispatch,
	    subscribe: subscribe,
	    getState: getState,
	    replaceReducer: replaceReducer
	  }, _ref2[_symbolObservable2['default']] = observable, _ref2;
	}

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.compose = exports.applyMiddleware = exports.bindActionCreators = exports.combineReducers = exports.createStore = undefined;

	var _createStore = __webpack_require__(26);

	var _createStore2 = _interopRequireDefault(_createStore);

	var _combineReducers = __webpack_require__(70);

	var _combineReducers2 = _interopRequireDefault(_combineReducers);

	var _bindActionCreators = __webpack_require__(69);

	var _bindActionCreators2 = _interopRequireDefault(_bindActionCreators);

	var _applyMiddleware = __webpack_require__(68);

	var _applyMiddleware2 = _interopRequireDefault(_applyMiddleware);

	var _compose = __webpack_require__(25);

	var _compose2 = _interopRequireDefault(_compose);

	var _warning = __webpack_require__(28);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/*
	* This is a dummy function to check if the function name has been altered by minification.
	* If the function has been minified and NODE_ENV !== 'production', warn the user.
	*/
	function isCrushed() {}

	if (("development") !== 'production' && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
	  (0, _warning2['default'])('You are currently using minified code outside of NODE_ENV === \'production\'. ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' + 'to ensure you have the correct code for your production build.');
	}

	exports.createStore = _createStore2['default'];
	exports.combineReducers = _combineReducers2['default'];
	exports.bindActionCreators = _bindActionCreators2['default'];
	exports.applyMiddleware = _applyMiddleware2['default'];
	exports.compose = _compose2['default'];

/***/ }),
/* 28 */
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = warning;
	/**
	 * Prints a warning in the console if it exists.
	 *
	 * @param {String} message The warning message.
	 * @returns {void}
	 */
	function warning(message) {
	  /* eslint-disable no-console */
	  if (typeof console !== 'undefined' && typeof console.error === 'function') {
	    console.error(message);
	  }
	  /* eslint-enable no-console */
	  try {
	    // This error was thrown as a convenience so that if you enable
	    // "break on all exceptions" in your console,
	    // it would pause the execution at this line.
	    throw new Error(message);
	    /* eslint-disable no-empty */
	  } catch (e) {}
	  /* eslint-enable no-empty */
	}

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	var root = __webpack_require__(77);

	/** Built-in value references. */
	var Symbol = root.Symbol;

	module.exports = Symbol;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(71),
	    getPrototype = __webpack_require__(73),
	    isObjectLike = __webpack_require__(78);

	/** `Object#toString` result references. */
	var objectTag = '[object Object]';

	/** Used for built-in method references. */
	var funcProto = Function.prototype,
	    objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Used to infer the `Object` constructor. */
	var objectCtorString = funcToString.call(Object);

	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.8.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
	    return false;
	  }
	  var proto = getPrototype(value);
	  if (proto === null) {
	    return true;
	  }
	  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
	  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
	    funcToString.call(Ctor) == objectCtorString;
	}

	module.exports = isPlainObject;


/***/ }),
/* 31 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_31__;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _isPromise = __webpack_require__(4);

	var _isPromise2 = _interopRequireDefault(_isPromise);

	var _isValid = __webpack_require__(1);

	var _isValid2 = _interopRequireDefault(_isValid);

	var asyncValidation = function asyncValidation(fn, start, stop) {
	  start();
	  var promise = fn();
	  if (!_isPromise2['default'](promise)) {
	    throw new Error('asyncValidate function passed to reduxForm must return a promise');
	  }
	  var handleErrors = function handleErrors(rejected) {
	    return function (errors) {
	      if (!_isValid2['default'](errors)) {
	        stop(errors);
	        return Promise.reject();
	      } else if (rejected) {
	        stop();
	        throw new Error('Asynchronous validation promise was rejected without errors.');
	      }
	      stop();
	      return Promise.resolve();
	    };
	  };
	  return promise.then(handleErrors(false), handleErrors(true));
	};

	exports['default'] = asyncValidation;
	module.exports = exports['default'];

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports['default'] = createAll;

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _reducer = __webpack_require__(16);

	var _reducer2 = _interopRequireDefault(_reducer);

	var _createReduxForm = __webpack_require__(36);

	var _createReduxForm2 = _interopRequireDefault(_createReduxForm);

	var _mapValues = __webpack_require__(3);

	var _mapValues2 = _interopRequireDefault(_mapValues);

	var _bindActionData = __webpack_require__(7);

	var _bindActionData2 = _interopRequireDefault(_bindActionData);

	var _actions = __webpack_require__(6);

	var actions = _interopRequireWildcard(_actions);

	var _actionTypes = __webpack_require__(2);

	var actionTypes = _interopRequireWildcard(_actionTypes);

	var _createPropTypes = __webpack_require__(35);

	var _createPropTypes2 = _interopRequireDefault(_createPropTypes);

	var _getValuesFromState = __webpack_require__(14);

	var _getValuesFromState2 = _interopRequireDefault(_getValuesFromState);

	// bind form as first parameter of action creators
	var boundActions = _extends({}, _mapValues2['default'](_extends({}, actions, {
	  changeWithKey: function changeWithKey(key) {
	    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      args[_key - 1] = arguments[_key];
	    }

	    return _bindActionData2['default'](actions.change, { key: key }).apply(undefined, args);
	  },
	  initializeWithKey: function initializeWithKey(key) {
	    for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	      args[_key2 - 1] = arguments[_key2];
	    }

	    return _bindActionData2['default'](actions.initialize, { key: key }).apply(undefined, args);
	  },
	  reset: function reset(key) {
	    return _bindActionData2['default'](actions.reset, { key: key })();
	  },
	  touchWithKey: function touchWithKey(key) {
	    for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
	      args[_key3 - 1] = arguments[_key3];
	    }

	    return _bindActionData2['default'](actions.touch, { key: key }).apply(undefined, args);
	  },
	  untouchWithKey: function untouchWithKey(key) {
	    for (var _len4 = arguments.length, args = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
	      args[_key4 - 1] = arguments[_key4];
	    }

	    return _bindActionData2['default'](actions.untouch, { key: key }).apply(undefined, args);
	  },
	  destroy: function destroy(key) {
	    return _bindActionData2['default'](actions.destroy, { key: key })();
	  }
	}), function (action) {
	  return function (form) {
	    for (var _len5 = arguments.length, args = Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
	      args[_key5 - 1] = arguments[_key5];
	    }

	    return _bindActionData2['default'](action, { form: form }).apply(undefined, args);
	  };
	}));

	var blur = boundActions.blur;
	var change = boundActions.change;
	var changeWithKey = boundActions.changeWithKey;
	var destroy = boundActions.destroy;
	var focus = boundActions.focus;
	var initialize = boundActions.initialize;
	var initializeWithKey = boundActions.initializeWithKey;
	var reset = boundActions.reset;
	var startAsyncValidation = boundActions.startAsyncValidation;
	var startSubmit = boundActions.startSubmit;
	var stopAsyncValidation = boundActions.stopAsyncValidation;
	var stopSubmit = boundActions.stopSubmit;
	var submitFailed = boundActions.submitFailed;
	var touch = boundActions.touch;
	var touchWithKey = boundActions.touchWithKey;
	var untouch = boundActions.untouch;
	var untouchWithKey = boundActions.untouchWithKey;

	function createAll(isReactNative, React, connect) {
	  return {
	    actionTypes: actionTypes,
	    blur: blur,
	    change: change,
	    changeWithKey: changeWithKey,
	    destroy: destroy,
	    focus: focus,
	    getValues: _getValuesFromState2['default'],
	    initialize: initialize,
	    initializeWithKey: initializeWithKey,
	    propTypes: _createPropTypes2['default'](React),
	    reduxForm: _createReduxForm2['default'](isReactNative, React, connect),
	    reducer: _reducer2['default'],
	    reset: reset,
	    startAsyncValidation: startAsyncValidation,
	    startSubmit: startSubmit,
	    stopAsyncValidation: stopAsyncValidation,
	    stopSubmit: stopSubmit,
	    submitFailed: submitFailed,
	    touch: touch,
	    touchWithKey: touchWithKey,
	    untouch: untouch,
	    untouchWithKey: untouchWithKey
	  };
	}

	module.exports = exports['default'];

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _propTypes = __webpack_require__(5);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _actions = __webpack_require__(6);

	var importedActions = _interopRequireWildcard(_actions);

	var _getDisplayName = __webpack_require__(12);

	var _getDisplayName2 = _interopRequireDefault(_getDisplayName);

	var _reducer = __webpack_require__(16);

	var _deepEqual = __webpack_require__(18);

	var _deepEqual2 = _interopRequireDefault(_deepEqual);

	var _bindActionData = __webpack_require__(7);

	var _bindActionData2 = _interopRequireDefault(_bindActionData);

	var _getValues = __webpack_require__(13);

	var _getValues2 = _interopRequireDefault(_getValues);

	var _isValid = __webpack_require__(1);

	var _isValid2 = _interopRequireDefault(_isValid);

	var _readFields = __webpack_require__(47);

	var _readFields2 = _interopRequireDefault(_readFields);

	var _handleSubmit2 = __webpack_require__(43);

	var _handleSubmit3 = _interopRequireDefault(_handleSubmit2);

	var _asyncValidation = __webpack_require__(32);

	var _asyncValidation2 = _interopRequireDefault(_asyncValidation);

	var _eventsSilenceEvents = __webpack_require__(42);

	var _eventsSilenceEvents2 = _interopRequireDefault(_eventsSilenceEvents);

	var _eventsSilenceEvent = __webpack_require__(11);

	var _eventsSilenceEvent2 = _interopRequireDefault(_eventsSilenceEvent);

	var _wrapMapDispatchToProps = __webpack_require__(51);

	var _wrapMapDispatchToProps2 = _interopRequireDefault(_wrapMapDispatchToProps);

	var _wrapMapStateToProps = __webpack_require__(52);

	var _wrapMapStateToProps2 = _interopRequireDefault(_wrapMapStateToProps);

	/**
	 * Creates a HOC that knows how to create redux-connected sub-components.
	 */
	var createHigherOrderComponent = function createHigherOrderComponent(config, isReactNative, React, connect, WrappedComponent, mapStateToProps, mapDispatchToProps) {
	  var Component = React.Component;

	  return function (reduxMountPoint, formName, formKey, getFormState) {
	    var ReduxForm = (function (_Component) {
	      _inherits(ReduxForm, _Component);

	      function ReduxForm(props) {
	        _classCallCheck(this, ReduxForm);

	        _Component.call(this, props);
	        // bind functions
	        this.asyncValidate = this.asyncValidate.bind(this);
	        this.handleSubmit = this.handleSubmit.bind(this);
	        this.fields = _readFields2['default'](props, {}, this.asyncValidate, isReactNative);
	      }

	      ReduxForm.prototype.componentWillMount = function componentWillMount() {
	        var _props = this.props;
	        var fields = _props.fields;
	        var initialize = _props.initialize;
	        var initialValues = _props.initialValues;

	        if (initialValues) {
	          initialize(initialValues, fields);
	        }
	      };

	      ReduxForm.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	        if (!_deepEqual2['default'](this.props.fields, nextProps.fields) || !_deepEqual2['default'](this.props.form, nextProps.form)) {
	          this.fields = _readFields2['default'](nextProps, this.fields, this.asyncValidate, isReactNative);
	        }
	        if (!_deepEqual2['default'](this.props.initialValues, nextProps.initialValues)) {
	          this.props.initialize(nextProps.initialValues);
	        }
	      };

	      ReduxForm.prototype.componentWillUnmount = function componentWillUnmount() {
	        if (config.destroyOnUnmount) {
	          this.props.destroy();
	        }
	      };

	      ReduxForm.prototype.asyncValidate = function asyncValidate(name, value) {
	        var _this = this;

	        var _props2 = this.props;
	        var asyncValidate = _props2.asyncValidate;
	        var dispatch = _props2.dispatch;
	        var fields = _props2.fields;
	        var form = _props2.form;
	        var startAsyncValidation = _props2.startAsyncValidation;
	        var stopAsyncValidation = _props2.stopAsyncValidation;
	        var validate = _props2.validate;

	        if (asyncValidate) {
	          var _ret = (function () {
	            var values = _getValues2['default'](fields, form);
	            if (name) {
	              values[name] = value;
	            }
	            var syncErrors = validate(values, _this.props);

	            // if blur validating, only run async validate if sync validation passes
	            if (!name || _isValid2['default'](syncErrors[name])) {
	              return {
	                v: _asyncValidation2['default'](function () {
	                  return asyncValidate(values, dispatch, _this.props);
	                }, startAsyncValidation, stopAsyncValidation)
	              };
	            }
	          })();

	          if (typeof _ret === 'object') return _ret.v;
	        }
	      };

	      ReduxForm.prototype.handleSubmit = function handleSubmit(submitOrEvent) {
	        var _this2 = this;

	        var _props3 = this.props;
	        var onSubmit = _props3.onSubmit;
	        var fields = _props3.fields;
	        var form = _props3.form;

	        var check = function check(submit) {
	          if (!submit || typeof submit !== 'function') {
	            throw new Error('You must either pass handleSubmit() an onSubmit function or pass onSubmit as a prop');
	          }
	          return submit;
	        };
	        var values = _getValues2['default'](fields, form);
	        return !submitOrEvent || _eventsSilenceEvent2['default'](submitOrEvent) ?
	        // submitOrEvent is an event: fire submit
	        _handleSubmit3['default'](check(onSubmit), values, this.props, this.asyncValidate) :
	        // submitOrEvent is the submit function: return deferred submit thunk
	        _eventsSilenceEvents2['default'](function (event) {
	          _eventsSilenceEvent2['default'](event);
	          _handleSubmit3['default'](check(submitOrEvent), values, _this2.props, _this2.asyncValidate);
	        });
	      };

	      ReduxForm.prototype.render = function render() {
	        var _ref,
	            _this3 = this;

	        var allFields = this.fields;
	        var _props4 = this.props;
	        var addArrayValue = _props4.addArrayValue;
	        var asyncBlurFields = _props4.asyncBlurFields;
	        var blur = _props4.blur;
	        var change = _props4.change;
	        var destroy = _props4.destroy;
	        var focus = _props4.focus;
	        var fields = _props4.fields;
	        var form = _props4.form;
	        var initialValues = _props4.initialValues;
	        var initialize = _props4.initialize;
	        var onSubmit = _props4.onSubmit;
	        var propNamespace = _props4.propNamespace;
	        var reset = _props4.reset;
	        var removeArrayValue = _props4.removeArrayValue;
	        var returnRejectedSubmitPromise = _props4.returnRejectedSubmitPromise;
	        var startAsyncValidation = _props4.startAsyncValidation;
	        var startSubmit = _props4.startSubmit;
	        var stopAsyncValidation = _props4.stopAsyncValidation;
	        var stopSubmit = _props4.stopSubmit;
	        var submitFailed = _props4.submitFailed;
	        var touch = _props4.touch;
	        var untouch = _props4.untouch;
	        var validate = _props4.validate;

	        var passableProps = _objectWithoutProperties(_props4, ['addArrayValue', 'asyncBlurFields', 'blur', 'change', 'destroy', 'focus', 'fields', 'form', 'initialValues', 'initialize', 'onSubmit', 'propNamespace', 'reset', 'removeArrayValue', 'returnRejectedSubmitPromise', 'startAsyncValidation', 'startSubmit', 'stopAsyncValidation', 'stopSubmit', 'submitFailed', 'touch', 'untouch', 'validate']);

	        // eslint-disable-line no-redeclare
	        var _allFields$_meta = allFields._meta;
	        var allPristine = _allFields$_meta.allPristine;
	        var allValid = _allFields$_meta.allValid;
	        var errors = _allFields$_meta.errors;
	        var formError = _allFields$_meta.formError;
	        var values = _allFields$_meta.values;

	        var props = {
	          // State:
	          active: form._active,
	          asyncValidating: form._asyncValidating,
	          dirty: !allPristine,
	          error: formError,
	          errors: errors,
	          fields: allFields,
	          formKey: formKey,
	          invalid: !allValid,
	          pristine: allPristine,
	          submitting: form._submitting,
	          submitFailed: form._submitFailed,
	          valid: allValid,
	          values: values,

	          // Actions:
	          asyncValidate: _eventsSilenceEvents2['default'](function () {
	            return _this3.asyncValidate();
	          }),
	          // ^ doesn't just pass this.asyncValidate to disallow values passing
	          destroyForm: _eventsSilenceEvents2['default'](destroy),
	          handleSubmit: this.handleSubmit,
	          initializeForm: _eventsSilenceEvents2['default'](function (initValues) {
	            return initialize(initValues, fields);
	          }),
	          resetForm: _eventsSilenceEvents2['default'](reset),
	          touch: _eventsSilenceEvents2['default'](function () {
	            return touch.apply(undefined, arguments);
	          }),
	          touchAll: _eventsSilenceEvents2['default'](function () {
	            return touch.apply(undefined, fields);
	          }),
	          untouch: _eventsSilenceEvents2['default'](function () {
	            return untouch.apply(undefined, arguments);
	          }),
	          untouchAll: _eventsSilenceEvents2['default'](function () {
	            return untouch.apply(undefined, fields);
	          })
	        };
	        var passedProps = propNamespace ? (_ref = {}, _ref[propNamespace] = props, _ref) : props;
	        return React.createElement(WrappedComponent, _extends({}, passableProps, passedProps));
	      };

	      return ReduxForm;
	    })(Component);

	    ReduxForm.displayName = 'ReduxForm(' + _getDisplayName2['default'](WrappedComponent) + ')';
	    ReduxForm.WrappedComponent = WrappedComponent;
	    ReduxForm.propTypes = {
	      // props:
	      asyncBlurFields: _propTypes2['default'].arrayOf(_propTypes2['default'].string),
	      asyncValidate: _propTypes2['default'].func,
	      dispatch: _propTypes2['default'].func.isRequired,
	      fields: _propTypes2['default'].arrayOf(_propTypes2['default'].string).isRequired,
	      form: _propTypes2['default'].object,
	      initialValues: _propTypes2['default'].any,
	      onSubmit: _propTypes2['default'].func,
	      propNamespace: _propTypes2['default'].string,
	      readonly: _propTypes2['default'].bool,
	      returnRejectedSubmitPromise: _propTypes2['default'].bool,
	      validate: _propTypes2['default'].func,

	      // actions:
	      addArrayValue: _propTypes2['default'].func.isRequired,
	      blur: _propTypes2['default'].func.isRequired,
	      change: _propTypes2['default'].func.isRequired,
	      destroy: _propTypes2['default'].func.isRequired,
	      focus: _propTypes2['default'].func.isRequired,
	      initialize: _propTypes2['default'].func.isRequired,
	      removeArrayValue: _propTypes2['default'].func.isRequired,
	      reset: _propTypes2['default'].func.isRequired,
	      startAsyncValidation: _propTypes2['default'].func.isRequired,
	      startSubmit: _propTypes2['default'].func.isRequired,
	      stopAsyncValidation: _propTypes2['default'].func.isRequired,
	      stopSubmit: _propTypes2['default'].func.isRequired,
	      submitFailed: _propTypes2['default'].func.isRequired,
	      touch: _propTypes2['default'].func.isRequired,
	      untouch: _propTypes2['default'].func.isRequired
	    };
	    ReduxForm.defaultProps = {
	      asyncBlurFields: [],
	      form: _reducer.initialState,
	      readonly: false,
	      returnRejectedSubmitPromise: false,
	      validate: function validate() {
	        return {};
	      }
	    };

	    // bind touch flags to blur and change
	    var unboundActions = _extends({}, importedActions, {
	      blur: _bindActionData2['default'](importedActions.blur, {
	        touch: !!config.touchOnBlur
	      }),
	      change: _bindActionData2['default'](importedActions.change, {
	        touch: !!config.touchOnChange
	      })
	    });

	    // make redux connector with or without form key
	    var decorate = formKey !== undefined && formKey !== null ? connect(_wrapMapStateToProps2['default'](mapStateToProps, function (state) {
	      var formState = getFormState(state, reduxMountPoint);
	      if (!formState) {
	        throw new Error('You need to mount the redux-form reducer at "' + reduxMountPoint + '"');
	      }
	      return formState && formState[formName] && formState[formName][formKey];
	    }), _wrapMapDispatchToProps2['default'](mapDispatchToProps, _bindActionData2['default'](unboundActions, { form: formName, key: formKey }))) : connect(_wrapMapStateToProps2['default'](mapStateToProps, function (state) {
	      var formState = getFormState(state, reduxMountPoint);
	      if (!formState) {
	        throw new Error('You need to mount the redux-form reducer at "' + reduxMountPoint + '"');
	      }
	      return formState && formState[formName];
	    }), _wrapMapDispatchToProps2['default'](mapDispatchToProps, _bindActionData2['default'](unboundActions, { form: formName })));

	    return decorate(ReduxForm);
	  };
	};

	exports['default'] = createHigherOrderComponent;
	module.exports = exports['default'];
	// contains dispatch

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _propTypes = __webpack_require__(5);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var any = _propTypes2['default'].any;
	var bool = _propTypes2['default'].bool;
	var string = _propTypes2['default'].string;
	var func = _propTypes2['default'].func;
	var object = _propTypes2['default'].object;

	var createPropTypes = function createPropTypes() {
	  return {
	    // State:
	    active: string, // currently active field
	    asyncValidating: bool.isRequired, // true if async validation is running
	    dirty: bool.isRequired, // true if any values are different from initialValues
	    error: any, // form-wide error from '_error' key in validation result
	    errors: object, // a map of errors corresponding to structure of form data (result of validation)
	    fields: object.isRequired, // the map of fields
	    formKey: any, // the form key if one was provided (used when doing multirecord forms)
	    invalid: bool.isRequired, // true if there are any validation errors
	    pristine: bool.isRequired, // true if the values are the same as initialValues
	    submitting: bool.isRequired, // true if the form is in the process of being submitted
	    submitFailed: bool.isRequired, // true if the form was submitted and failed for any reason
	    valid: bool.isRequired, // true if there are no validation errors
	    values: object.isRequired, // the values of the form as they will be submitted

	    // Actions:
	    asyncValidate: func.isRequired, // function to trigger async validation
	    destroyForm: func.isRequired, // action to destroy the form's data in Redux
	    handleSubmit: func.isRequired, // function to submit the form
	    initializeForm: func.isRequired, // action to initialize form data
	    resetForm: func.isRequired, // action to reset the form data to previously initialized values
	    touch: func.isRequired, // action to mark fields as touched
	    touchAll: func.isRequired, // action to mark ALL fields as touched
	    untouch: func.isRequired, // action to mark fields as untouched
	    untouchAll: func.isRequired // action to mark ALL fields as untouched
	  };
	};

	exports['default'] = createPropTypes;
	module.exports = exports['default'];

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _createReduxFormConnector = __webpack_require__(37);

	var _createReduxFormConnector2 = _interopRequireDefault(_createReduxFormConnector);

	var _hoistNonReactStatics = __webpack_require__(22);

	var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

	/**
	 * The decorator that is the main API to redux-form
	 */
	var createReduxForm = function createReduxForm(isReactNative, React, connect) {
	  var Component = React.Component;

	  var reduxFormConnector = _createReduxFormConnector2['default'](isReactNative, React, connect);
	  return function (config, mapStateToProps, mapDispatchToProps) {
	    return function (WrappedComponent) {
	      var ReduxFormConnector = reduxFormConnector(WrappedComponent, mapStateToProps, mapDispatchToProps);
	      var configWithDefaults = _extends({
	        touchOnBlur: true,
	        touchOnChange: false,
	        destroyOnUnmount: true
	      }, config);

	      var ConnectedForm = (function (_Component) {
	        _inherits(ConnectedForm, _Component);

	        function ConnectedForm() {
	          _classCallCheck(this, ConnectedForm);

	          _Component.apply(this, arguments);
	        }

	        ConnectedForm.prototype.render = function render() {
	          return React.createElement(ReduxFormConnector, _extends({}, configWithDefaults, this.props));
	        };

	        return ConnectedForm;
	      })(Component);

	      return _hoistNonReactStatics2['default'](ConnectedForm, WrappedComponent);
	    };
	  };
	};

	exports['default'] = createReduxForm;
	module.exports = exports['default'];

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _reactLazyCache = __webpack_require__(59);

	var _reactLazyCache2 = _interopRequireDefault(_reactLazyCache);

	var _getDisplayName = __webpack_require__(12);

	var _getDisplayName2 = _interopRequireDefault(_getDisplayName);

	var _createHigherOrderComponent = __webpack_require__(34);

	var _createHigherOrderComponent2 = _interopRequireDefault(_createHigherOrderComponent);

	var _propTypes = __webpack_require__(5);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	/**
	 * This component tracks props that affect how the form is mounted to the store. Normally these should not change,
	 * but if they do, the connected components below it need to be redefined.
	 */
	var createReduxFormConnector = function createReduxFormConnector(isReactNative, React, connect) {
	  return function (WrappedComponent, mapStateToProps, mapDispatchToProps) {
	    var Component = React.Component;

	    var ReduxFormConnector = (function (_Component) {
	      _inherits(ReduxFormConnector, _Component);

	      function ReduxFormConnector(props) {
	        _classCallCheck(this, ReduxFormConnector);

	        _Component.call(this, props);
	        this.cache = _reactLazyCache2['default'](this, {
	          ReduxForm: {
	            params: [
	            // props that effect how redux-form connects to the redux store
	            'reduxMountPoint', 'form', 'formKey', 'getFormState'],
	            fn: _createHigherOrderComponent2['default'](props, isReactNative, React, connect, WrappedComponent, mapStateToProps, mapDispatchToProps)
	          }
	        });
	      }

	      ReduxFormConnector.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	        this.cache.componentWillReceiveProps(nextProps);
	      };

	      ReduxFormConnector.prototype.render = function render() {
	        var ReduxForm = this.cache.ReduxForm;

	        // remove some redux-form config-only props
	        var _props = this.props;
	        var reduxMountPoint = _props.reduxMountPoint;
	        var destroyOnUnmount = _props.destroyOnUnmount;
	        var form = _props.form;
	        var getFormState = _props.getFormState;
	        var touchOnBlur = _props.touchOnBlur;
	        var touchOnChange = _props.touchOnChange;

	        var passableProps = _objectWithoutProperties(_props, ['reduxMountPoint', 'destroyOnUnmount', 'form', 'getFormState', 'touchOnBlur', 'touchOnChange']);

	        // eslint-disable-line no-redeclare
	        return React.createElement(ReduxForm, passableProps);
	      };

	      return ReduxFormConnector;
	    })(Component);

	    ReduxFormConnector.displayName = 'ReduxFormConnector(' + _getDisplayName2['default'](WrappedComponent) + ')';
	    ReduxFormConnector.WrappedComponent = WrappedComponent;
	    ReduxFormConnector.propTypes = {
	      destroyOnUnmount: _propTypes2['default'].bool,
	      reduxMountPoint: _propTypes2['default'].string,
	      form: _propTypes2['default'].string.isRequired,
	      formKey: _propTypes2['default'].string,
	      getFormState: _propTypes2['default'].func,
	      touchOnBlur: _propTypes2['default'].bool,
	      touchOnChange: _propTypes2['default'].bool
	    };
	    ReduxFormConnector.defaultProps = {
	      reduxMountPoint: 'form',
	      getFormState: function getFormState(state, reduxMountPoint) {
	        return state[reduxMountPoint];
	      }
	    };
	    return ReduxFormConnector;
	  };
	};

	exports['default'] = createReduxFormConnector;
	module.exports = exports['default'];

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _getValue = __webpack_require__(9);

	var _getValue2 = _interopRequireDefault(_getValue);

	var createOnBlur = function createOnBlur(name, blur, isReactNative, afterBlur) {
	  return function (event) {
	    var value = _getValue2['default'](event, isReactNative);
	    blur(name, value);
	    if (afterBlur) {
	      afterBlur(name, value);
	    }
	  };
	};
	exports['default'] = createOnBlur;
	module.exports = exports['default'];

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _getValue = __webpack_require__(9);

	var _getValue2 = _interopRequireDefault(_getValue);

	var createOnChange = function createOnChange(name, change, isReactNative) {
	  return function (event) {
	    return change(name, _getValue2['default'](event, isReactNative));
	  };
	};
	exports['default'] = createOnChange;
	module.exports = exports['default'];

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _createOnDragStart = __webpack_require__(8);

	var createOnDrop = function createOnDrop(name, change) {
	  return function (event) {
	    change(name, event.dataTransfer.getData(_createOnDragStart.dataKey));
	  };
	};
	exports['default'] = createOnDrop;
	module.exports = exports['default'];

/***/ }),
/* 41 */
/***/ (function(module, exports) {

	"use strict";

	exports.__esModule = true;
	var createOnFocus = function createOnFocus(name, focus) {
	  return function () {
	    return focus(name);
	  };
	};
	exports["default"] = createOnFocus;
	module.exports = exports["default"];

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _silenceEvent = __webpack_require__(11);

	var _silenceEvent2 = _interopRequireDefault(_silenceEvent);

	var silenceEvents = function silenceEvents(fn) {
	  return function (event) {
	    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      args[_key - 1] = arguments[_key];
	    }

	    return _silenceEvent2['default'](event) ? fn.apply(undefined, args) : fn.apply(undefined, [event].concat(args));
	  };
	};

	exports['default'] = silenceEvents;
	module.exports = exports['default'];

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _isPromise = __webpack_require__(4);

	var _isPromise2 = _interopRequireDefault(_isPromise);

	var _isValid = __webpack_require__(1);

	var _isValid2 = _interopRequireDefault(_isValid);

	var handleSubmit = function handleSubmit(submit, values, props, asyncValidate) {
	  var dispatch = props.dispatch;
	  var fields = props.fields;
	  var startSubmit = props.startSubmit;
	  var stopSubmit = props.stopSubmit;
	  var submitFailed = props.submitFailed;
	  var returnRejectedSubmitPromise = props.returnRejectedSubmitPromise;
	  var touch = props.touch;
	  var validate = props.validate;

	  var syncErrors = validate(values, props);
	  touch.apply(undefined, fields); // touch all fields
	  if (_isValid2['default'](syncErrors)) {
	    var doSubmit = function doSubmit() {
	      var result = submit(values, dispatch);
	      if (_isPromise2['default'](result)) {
	        startSubmit();
	        return result.then(function (submitResult) {
	          stopSubmit();
	          return submitResult;
	        }, function (submitError) {
	          stopSubmit(submitError);
	          if (returnRejectedSubmitPromise) {
	            return Promise.reject(submitError);
	          }
	        });
	      }
	      return result;
	    };
	    var asyncValidateResult = asyncValidate();
	    return _isPromise2['default'](asyncValidateResult) ?
	    // asyncValidateResult will be rejected if async validation failed
	    asyncValidateResult.then(doSubmit, function () {
	      submitFailed();
	      return returnRejectedSubmitPromise ? Promise.reject() : Promise.resolve();
	    }) : doSubmit(); // no async validation, so submit
	  }
	  submitFailed();
	};

	exports['default'] = handleSubmit;
	module.exports = exports['default'];

/***/ }),
/* 44 */
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var updateEntry = function updateEntry(entry, value) {
	  if (entry && entry.value !== undefined) {
	    return { initial: value, value: entry.value };
	  }
	  return value === undefined ? {} : { initial: value, value: value };
	};

	/**
	 * Sets the initial values into the state and returns a new copy of the state
	 */
	var initializeState = function initializeState(values, fields) {
	  var state = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

	  if (!fields) {
	    throw new Error('fields must be passed when initializing state');
	  }
	  if (!values || !fields.length) {
	    return state;
	  }
	  var initializeField = function initializeField(_x2, _x3, _x4) {
	    var _again = true;

	    _function: while (_again) {
	      var path = _x2,
	          src = _x3,
	          dest = _x4;
	      _again = false;

	      var dotIndex = path.indexOf('.');
	      if (dotIndex === 0) {
	        _x2 = path.substring(1);
	        _x3 = src;
	        _x4 = dest;
	        _again = true;
	        dotIndex = undefined;
	        continue _function;
	      }
	      var openIndex = path.indexOf('[');
	      var closeIndex = path.indexOf(']');
	      var result = dest || {};
	      if (dotIndex >= 0 && (openIndex < 0 || dotIndex < openIndex)) {
	        // is dot notation
	        var key = path.substring(0, dotIndex);
	        result[key] = src[key] && initializeField(path.substring(dotIndex + 1), src[key], result[key] || {});
	      } else if (openIndex >= 0 && (dotIndex < 0 || openIndex < dotIndex)) {
	        (function () {
	          // is array notation
	          if (closeIndex < 0) {
	            throw new Error('found \'[\' but no \']\': \'' + path + '\'');
	          }
	          var key = path.substring(0, openIndex);
	          var srcArray = src[key];
	          var destArray = result[key];
	          var rest = path.substring(closeIndex + 1);
	          if (Array.isArray(srcArray)) {
	            if (rest.length) {
	              // need to keep recursing
	              result[key] = srcArray.map(function (srcValue, srcIndex) {
	                return initializeField(rest, srcValue, destArray && destArray[srcIndex]);
	              });
	            } else {
	              result[key] = srcArray.map(function (srcValue, srcIndex) {
	                return updateEntry(destArray && destArray[srcIndex], srcValue);
	              });
	            }
	          } else {
	            result[key] = updateEntry(destArray, srcArray);
	          }
	        })();
	      } else {
	        result[path] = updateEntry(result[path], src && src[path]);
	      }
	      return result;
	    }
	  };
	  return fields.reduce(function (accumulator, field) {
	    return initializeField(field, values, accumulator);
	  }, _extends({}, state));
	};

	exports['default'] = initializeState;
	module.exports = exports['default'];

/***/ }),
/* 45 */
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = isPristine;

	function isPristine(initial, data) {
	  if (initial === data) {
	    return true;
	  }
	  if (typeof initial === 'boolean' || typeof data === 'boolean') {
	    return initial === data;
	  } else if (initial instanceof Date && data instanceof Date) {
	    return initial.getTime() === data.getTime();
	  } else if (initial && typeof initial === 'object') {
	    if (!data || typeof data !== 'object') {
	      return false;
	    }
	    var initialKeys = Object.keys(initial);
	    var dataKeys = Object.keys(data);
	    if (initialKeys.length !== dataKeys.length) {
	      return false;
	    }
	    for (var index = 0; index < dataKeys.length; index++) {
	      var key = dataKeys[index];
	      if (!isPristine(initial[key], data[key])) {
	        return false;
	      }
	    }
	  } else if (initial || data) {
	    // allow '' to equate to undefined or null
	    return initial === data;
	  }
	  return true;
	}

	module.exports = exports['default'];

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _eventsCreateOnBlur = __webpack_require__(38);

	var _eventsCreateOnBlur2 = _interopRequireDefault(_eventsCreateOnBlur);

	var _eventsCreateOnChange = __webpack_require__(39);

	var _eventsCreateOnChange2 = _interopRequireDefault(_eventsCreateOnChange);

	var _eventsCreateOnDragStart = __webpack_require__(8);

	var _eventsCreateOnDragStart2 = _interopRequireDefault(_eventsCreateOnDragStart);

	var _eventsCreateOnDrop = __webpack_require__(40);

	var _eventsCreateOnDrop2 = _interopRequireDefault(_eventsCreateOnDrop);

	var _eventsCreateOnFocus = __webpack_require__(41);

	var _eventsCreateOnFocus2 = _interopRequireDefault(_eventsCreateOnFocus);

	var _silencePromise = __webpack_require__(49);

	var _silencePromise2 = _interopRequireDefault(_silencePromise);

	var _read = __webpack_require__(15);

	var _read2 = _interopRequireDefault(_read);

	var _updateField = __webpack_require__(50);

	var _updateField2 = _interopRequireDefault(_updateField);

	var readField = function readField(_x2, _x3, _x4, _x5, _x6, _x7, _x8, _x9) {
	  var _arguments = arguments;
	  var _again = true;

	  _function: while (_again) {
	    var state = _x2,
	        fieldName = _x3,
	        pathToHere = _x4,
	        fields = _x5,
	        syncErrors = _x6,
	        asyncValidate = _x7,
	        isReactNative = _x8,
	        props = _x9;
	    if (pathToHere === undefined) pathToHere = '';
	    _again = false;
	    var callback = _arguments.length <= 8 || _arguments[8] === undefined ? function () {
	      return null;
	    } : _arguments[8];
	    var asyncBlurFields = props.asyncBlurFields;
	    var blur = props.blur;
	    var change = props.change;
	    var focus = props.focus;
	    var form = props.form;
	    var initialValues = props.initialValues;
	    var readonly = props.readonly;
	    var addArrayValue = props.addArrayValue;
	    var removeArrayValue = props.removeArrayValue;

	    var dotIndex = fieldName.indexOf('.');
	    var openIndex = fieldName.indexOf('[');
	    var closeIndex = fieldName.indexOf(']');
	    if (openIndex > 0 && closeIndex !== openIndex + 1) {
	      throw new Error('found [ not followed by ]');
	    }
	    if (openIndex > 0 && (dotIndex < 0 || openIndex < dotIndex)) {
	      var _ret = (function () {
	        // array field
	        var key = fieldName.substring(0, openIndex);
	        var rest = fieldName.substring(closeIndex + 1);
	        if (rest[0] === '.') {
	          rest = rest.substring(1);
	        }
	        var stateArray = state && state[key] || [];
	        if (!fields[key]) {
	          fields[key] = [];
	          Object.defineProperty(fields[key], 'addField', {
	            value: function value(_value, index) {
	              return addArrayValue(pathToHere + key, _value, index);
	            }
	          });
	          Object.defineProperty(fields[key], 'removeField', {
	            value: function value(index) {
	              return removeArrayValue(pathToHere + key, index);
	            }
	          });
	        }
	        var fieldArray = fields[key];
	        stateArray.forEach(function (fieldState, index) {
	          if (rest && !fieldArray[index]) {
	            fieldArray[index] = {};
	          }
	          var dest = rest ? fieldArray[index] : {};
	          var result = readField(fieldState, rest, '' + pathToHere + key + '[' + index + ']' + (rest ? '.' : ''), dest, syncErrors, asyncValidate, isReactNative, props, callback);
	          if (!rest) {
	            // if nothing after [] in field name, assign directly to array
	            fieldArray[index] = result;
	          }
	        });
	        if (fieldArray.length > stateArray.length) {
	          // remove extra items that aren't in state array
	          fieldArray.splice(stateArray.length, fieldArray.length - stateArray.length);
	        }
	        return {
	          v: fieldArray
	        };
	      })();

	      if (typeof _ret === 'object') return _ret.v;
	    }
	    if (dotIndex > 0) {
	      // subobject field
	      var key = fieldName.substring(0, dotIndex);
	      var rest = fieldName.substring(dotIndex + 1);
	      if (!fields[key]) {
	        fields[key] = {};
	      }
	      _arguments = [_x2 = state[key] || {}, _x3 = rest, _x4 = pathToHere + key + '.', _x5 = fields[key], _x6 = syncErrors, _x7 = asyncValidate, _x8 = isReactNative, _x9 = props, callback];
	      _again = true;
	      callback = asyncBlurFields = blur = change = focus = form = initialValues = readonly = addArrayValue = removeArrayValue = dotIndex = openIndex = closeIndex = _ret = key = rest = undefined;
	      continue _function;
	    }
	    var name = pathToHere + fieldName;
	    var field = fields[fieldName] || {};
	    if (field.name !== name) {
	      var onChange = _eventsCreateOnChange2['default'](name, change, isReactNative);
	      var initialValue = _read2['default'](name, initialValues);
	      field.name = name;
	      field.defaultChecked = initialValue === true;
	      field.defaultValue = initialValue;
	      field.initialValue = initialValue;
	      if (!readonly) {
	        field.onBlur = _eventsCreateOnBlur2['default'](name, blur, isReactNative, ~asyncBlurFields.indexOf(name) && function (blurName, blurValue) {
	          return _silencePromise2['default'](asyncValidate(blurName, blurValue));
	        });
	        field.onChange = onChange;
	        field.onDragStart = _eventsCreateOnDragStart2['default'](name, function () {
	          return field.value;
	        });
	        field.onDrop = _eventsCreateOnDrop2['default'](name, change);
	        field.onFocus = _eventsCreateOnFocus2['default'](name, focus);
	        field.onUpdate = onChange; // alias to support belle. https://github.com/nikgraf/belle/issues/58
	      }
	      field.valid = true;
	      field.invalid = false;
	    }

	    var fieldState = (fieldName ? state[fieldName] : state) || {};
	    var syncError = _read2['default'](name, syncErrors);
	    var updated = _updateField2['default'](field, fieldState, name === form._active, syncError);
	    if (fieldName || fields[fieldName] !== updated) {
	      fields[fieldName] = updated;
	    }
	    callback(updated);
	    return updated;
	  }
	};

	exports['default'] = readField;
	module.exports = exports['default'];

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _readField = __webpack_require__(46);

	var _readField2 = _interopRequireDefault(_readField);

	var _write = __webpack_require__(17);

	var _write2 = _interopRequireDefault(_write);

	var _getValues = __webpack_require__(13);

	var _getValues2 = _interopRequireDefault(_getValues);

	/**
	 * Reads props and generates (or updates) field structure
	 */
	var readFields = function readFields(props, myFields, asyncValidate, isReactNative) {
	  var fields = props.fields;
	  var form = props.form;
	  var validate = props.validate;

	  var values = _getValues2['default'](fields, form);
	  var syncErrors = validate(values, props);
	  var errors = {};
	  var formError = syncErrors._error || form._error;
	  var allValid = !formError;
	  var allPristine = true;
	  var tally = function tally(field) {
	    if (field.error) {
	      errors = _write2['default'](field.name, field.error, errors);
	      allValid = false;
	    }
	    if (field.dirty) {
	      allPristine = false;
	    }
	  };
	  var fieldObjects = _extends({}, myFields);
	  fields.forEach(function (name) {
	    _readField2['default'](form, name, undefined, fieldObjects, syncErrors, asyncValidate, isReactNative, props, tally);
	  });
	  Object.defineProperty(fieldObjects, '_meta', {
	    value: {
	      allPristine: allPristine,
	      allValid: allValid,
	      values: values,
	      errors: errors,
	      formError: formError
	    }
	  });
	  return fieldObjects;
	};
	exports['default'] = readFields;
	module.exports = exports['default'];

/***/ }),
/* 48 */
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;
	var reset = function reset(value) {
	  return value === undefined || value && value.initial === undefined ? {} : { initial: value.initial, value: value.initial };
	};
	var isLeaf = function isLeaf(value) {
	  return value && typeof value === 'object' && (value.value !== undefined || value.initial !== undefined);
	};

	/**
	 * Sets the initial values into the state and returns a new copy of the state
	 */
	var resetState = function resetState(values) {
	  return values ? Object.keys(values).reduce(function (accumulator, key) {
	    var value = values[key];
	    if (Array.isArray(value)) {
	      accumulator[key] = value.map(function (item) {
	        return isLeaf(item) ? reset(item) : resetState(item);
	      });
	    } else if (value) {
	      if (isLeaf(value)) {
	        accumulator[key] = reset(value);
	      } else if (typeof value === 'object' && value !== null) {
	        accumulator[key] = resetState(value);
	      } else {
	        accumulator[key] = value;
	      }
	    }
	    return accumulator;
	  }, {}) : values;
	};

	exports['default'] = resetState;
	module.exports = exports['default'];

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _isPromise = __webpack_require__(4);

	var _isPromise2 = _interopRequireDefault(_isPromise);

	var noop = function noop() {
	  return undefined;
	};

	var silencePromise = function silencePromise(promise) {
	  return _isPromise2['default'](promise) ? promise.then(noop, noop) : promise;
	};

	exports['default'] = silencePromise;
	module.exports = exports['default'];

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _isPristine = __webpack_require__(45);

	var _isPristine2 = _interopRequireDefault(_isPristine);

	var _isValid = __webpack_require__(1);

	var _isValid2 = _interopRequireDefault(_isValid);

	/**
	 * Updates a field object from the store values
	 */
	var updateField = function updateField(field, formField, active, syncError) {
	  var diff = {};

	  // update field value
	  if (field.value !== formField.value) {
	    diff.value = formField.value;
	    diff.checked = typeof formField.value === 'boolean' ? formField.value : undefined;
	  }

	  // update dirty/pristine
	  var pristine = _isPristine2['default'](formField.value, formField.initial);
	  if (field.pristine !== pristine) {
	    diff.dirty = !pristine;
	    diff.pristine = pristine;
	  }

	  // update field error
	  var error = syncError || formField.submitError || formField.asyncError;
	  if (error !== field.error) {
	    diff.error = error;
	  }
	  var valid = _isValid2['default'](error);
	  if (field.valid !== valid) {
	    diff.invalid = !valid;
	    diff.valid = valid;
	  }

	  if (active !== field.active) {
	    diff.active = active;
	  }
	  var touched = !!formField.touched;
	  if (touched !== field.touched) {
	    diff.touched = touched;
	  }
	  var visited = !!formField.visited;
	  if (visited !== field.visited) {
	    diff.visited = visited;
	  }

	  return Object.keys(diff).length ? _extends({}, field, diff) : field;
	};
	exports['default'] = updateField;
	module.exports = exports['default'];

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _redux = __webpack_require__(27);

	var wrapMapDispatchToProps = function wrapMapDispatchToProps(mapDispatchToProps, actionCreators) {
	  if (mapDispatchToProps) {
	    if (typeof mapDispatchToProps === 'function') {
	      if (mapDispatchToProps.length > 1) {
	        return function (dispatch, ownProps) {
	          return _extends({}, mapDispatchToProps(dispatch, ownProps), _redux.bindActionCreators(actionCreators, dispatch), {
	            dispatch: dispatch
	          });
	        };
	      }
	      return function (dispatch) {
	        return _extends({}, mapDispatchToProps(dispatch), _redux.bindActionCreators(actionCreators, dispatch), {
	          dispatch: dispatch
	        });
	      };
	    }
	    return function (dispatch) {
	      return _extends({}, _redux.bindActionCreators(mapDispatchToProps, dispatch), _redux.bindActionCreators(actionCreators, dispatch), {
	        dispatch: dispatch
	      });
	    };
	  }
	  return function (dispatch) {
	    return _extends({}, _redux.bindActionCreators(actionCreators, dispatch), {
	      dispatch: dispatch
	    });
	  };
	};

	exports['default'] = wrapMapDispatchToProps;
	module.exports = exports['default'];

/***/ }),
/* 52 */
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var wrapMapStateToProps = function wrapMapStateToProps(mapStateToProps, getForm) {
	  if (mapStateToProps) {
	    if (typeof mapStateToProps !== 'function') {
	      throw new Error('mapStateToProps must be a function');
	    }
	    if (mapStateToProps.length > 1) {
	      return function (state, ownProps) {
	        return _extends({}, mapStateToProps(state, ownProps), {
	          form: getForm(state)
	        });
	      };
	    }
	    return function (state) {
	      return _extends({}, mapStateToProps(state), {
	        form: getForm(state)
	      });
	    };
	  }
	  return function (state) {
	    return {
	      form: getForm(state)
	    };
	  };
	};

	exports['default'] = wrapMapStateToProps;
	module.exports = exports['default'];

/***/ }),
/* 53 */
/***/ (function(module, exports) {

	var supportsArgumentsClass = (function(){
	  return Object.prototype.toString.call(arguments)
	})() == '[object Arguments]';

	exports = module.exports = supportsArgumentsClass ? supported : unsupported;

	exports.supported = supported;
	function supported(object) {
	  return Object.prototype.toString.call(object) == '[object Arguments]';
	};

	exports.unsupported = unsupported;
	function unsupported(object){
	  return object &&
	    typeof object == 'object' &&
	    typeof object.length == 'number' &&
	    Object.prototype.hasOwnProperty.call(object, 'callee') &&
	    !Object.prototype.propertyIsEnumerable.call(object, 'callee') ||
	    false;
	};


/***/ }),
/* 54 */
/***/ (function(module, exports) {

	exports = module.exports = typeof Object.keys === 'function'
	  ? Object.keys : shim;

	exports.shim = shim;
	function shim (obj) {
	  var keys = [];
	  for (var key in obj) keys.push(key);
	  return keys;
	}


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var invariant = function(condition, format, a, b, c, d, e, f) {
	  if (true) {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error(
	        'Minified exception occurred; use the non-minified dev environment ' +
	        'for the full error message and additional helpful warnings.'
	      );
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(
	        format.replace(/%s/g, function() { return args[argIndex++]; })
	      );
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};

	module.exports = invariant;


/***/ }),
/* 56 */
/***/ (function(module, exports) {

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/

	'use strict';
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	if (true) {
	  var invariant = __webpack_require__(20);
	  var warning = __webpack_require__(21);
	  var ReactPropTypesSecret = __webpack_require__(23);
	  var loggedTypeFailures = {};
	}

	/**
	 * Assert that the values match with the type specs.
	 * Error messages are memorized and will only be shown once.
	 *
	 * @param {object} typeSpecs Map of name to a ReactPropType
	 * @param {object} values Runtime values that need to be type-checked
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @param {string} componentName Name of the component for error messages.
	 * @param {?Function} getStack Returns the component stack.
	 * @private
	 */
	function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
	  if (true) {
	    for (var typeSpecName in typeSpecs) {
	      if (typeSpecs.hasOwnProperty(typeSpecName)) {
	        var error;
	        // Prop type validation may throw. In case they do, we don't want to
	        // fail the render phase where it didn't fail before. So we log it.
	        // After these have been cleaned up, we'll let them throw.
	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'the `prop-types` package, but received `%s`.', componentName || 'React class', location, typeSpecName, typeof typeSpecs[typeSpecName]);
	          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
	        } catch (ex) {
	          error = ex;
	        }
	        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
	        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	          // Only monitor this failure once because there tends to be a lot of the
	          // same error.
	          loggedTypeFailures[error.message] = true;

	          var stack = getStack ? getStack() : '';

	          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
	        }
	      }
	    }
	  }
	}

	module.exports = checkPropTypes;


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	var emptyFunction = __webpack_require__(19);
	var invariant = __webpack_require__(20);
	var warning = __webpack_require__(21);
	var assign = __webpack_require__(56);

	var ReactPropTypesSecret = __webpack_require__(23);
	var checkPropTypes = __webpack_require__(57);

	module.exports = function(isValidElement, throwOnDirectAccess) {
	  /* global Symbol */
	  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

	  /**
	   * Returns the iterator method function contained on the iterable object.
	   *
	   * Be sure to invoke the function with the iterable as context:
	   *
	   *     var iteratorFn = getIteratorFn(myIterable);
	   *     if (iteratorFn) {
	   *       var iterator = iteratorFn.call(myIterable);
	   *       ...
	   *     }
	   *
	   * @param {?object} maybeIterable
	   * @return {?function}
	   */
	  function getIteratorFn(maybeIterable) {
	    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
	    if (typeof iteratorFn === 'function') {
	      return iteratorFn;
	    }
	  }

	  /**
	   * Collection of methods that allow declaration and validation of props that are
	   * supplied to React components. Example usage:
	   *
	   *   var Props = require('ReactPropTypes');
	   *   var MyArticle = React.createClass({
	   *     propTypes: {
	   *       // An optional string prop named "description".
	   *       description: Props.string,
	   *
	   *       // A required enum prop named "category".
	   *       category: Props.oneOf(['News','Photos']).isRequired,
	   *
	   *       // A prop named "dialog" that requires an instance of Dialog.
	   *       dialog: Props.instanceOf(Dialog).isRequired
	   *     },
	   *     render: function() { ... }
	   *   });
	   *
	   * A more formal specification of how these methods are used:
	   *
	   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
	   *   decl := ReactPropTypes.{type}(.isRequired)?
	   *
	   * Each and every declaration produces a function with the same signature. This
	   * allows the creation of custom validation functions. For example:
	   *
	   *  var MyLink = React.createClass({
	   *    propTypes: {
	   *      // An optional string or URI prop named "href".
	   *      href: function(props, propName, componentName) {
	   *        var propValue = props[propName];
	   *        if (propValue != null && typeof propValue !== 'string' &&
	   *            !(propValue instanceof URI)) {
	   *          return new Error(
	   *            'Expected a string or an URI for ' + propName + ' in ' +
	   *            componentName
	   *          );
	   *        }
	   *      }
	   *    },
	   *    render: function() {...}
	   *  });
	   *
	   * @internal
	   */

	  var ANONYMOUS = '<<anonymous>>';

	  // Important!
	  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
	  var ReactPropTypes = {
	    array: createPrimitiveTypeChecker('array'),
	    bool: createPrimitiveTypeChecker('boolean'),
	    func: createPrimitiveTypeChecker('function'),
	    number: createPrimitiveTypeChecker('number'),
	    object: createPrimitiveTypeChecker('object'),
	    string: createPrimitiveTypeChecker('string'),
	    symbol: createPrimitiveTypeChecker('symbol'),

	    any: createAnyTypeChecker(),
	    arrayOf: createArrayOfTypeChecker,
	    element: createElementTypeChecker(),
	    instanceOf: createInstanceTypeChecker,
	    node: createNodeChecker(),
	    objectOf: createObjectOfTypeChecker,
	    oneOf: createEnumTypeChecker,
	    oneOfType: createUnionTypeChecker,
	    shape: createShapeTypeChecker,
	    exact: createStrictShapeTypeChecker,
	  };

	  /**
	   * inlined Object.is polyfill to avoid requiring consumers ship their own
	   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	   */
	  /*eslint-disable no-self-compare*/
	  function is(x, y) {
	    // SameValue algorithm
	    if (x === y) {
	      // Steps 1-5, 7-10
	      // Steps 6.b-6.e: +0 != -0
	      return x !== 0 || 1 / x === 1 / y;
	    } else {
	      // Step 6.a: NaN == NaN
	      return x !== x && y !== y;
	    }
	  }
	  /*eslint-enable no-self-compare*/

	  /**
	   * We use an Error-like object for backward compatibility as people may call
	   * PropTypes directly and inspect their output. However, we don't use real
	   * Errors anymore. We don't inspect their stack anyway, and creating them
	   * is prohibitively expensive if they are created too often, such as what
	   * happens in oneOfType() for any type before the one that matched.
	   */
	  function PropTypeError(message) {
	    this.message = message;
	    this.stack = '';
	  }
	  // Make `instanceof Error` still work for returned errors.
	  PropTypeError.prototype = Error.prototype;

	  function createChainableTypeChecker(validate) {
	    if (true) {
	      var manualPropTypeCallCache = {};
	      var manualPropTypeWarningCount = 0;
	    }
	    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
	      componentName = componentName || ANONYMOUS;
	      propFullName = propFullName || propName;

	      if (secret !== ReactPropTypesSecret) {
	        if (throwOnDirectAccess) {
	          // New behavior only for users of `prop-types` package
	          invariant(
	            false,
	            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	            'Use `PropTypes.checkPropTypes()` to call them. ' +
	            'Read more at http://fb.me/use-check-prop-types'
	          );
	        } else if (("development") !== 'production' && typeof console !== 'undefined') {
	          // Old behavior for people using React.PropTypes
	          var cacheKey = componentName + ':' + propName;
	          if (
	            !manualPropTypeCallCache[cacheKey] &&
	            // Avoid spamming the console because they are often not actionable except for lib authors
	            manualPropTypeWarningCount < 3
	          ) {
	            warning(
	              false,
	              'You are manually calling a React.PropTypes validation ' +
	              'function for the `%s` prop on `%s`. This is deprecated ' +
	              'and will throw in the standalone `prop-types` package. ' +
	              'You may be seeing this warning due to a third-party PropTypes ' +
	              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
	              propFullName,
	              componentName
	            );
	            manualPropTypeCallCache[cacheKey] = true;
	            manualPropTypeWarningCount++;
	          }
	        }
	      }
	      if (props[propName] == null) {
	        if (isRequired) {
	          if (props[propName] === null) {
	            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
	          }
	          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
	        }
	        return null;
	      } else {
	        return validate(props, propName, componentName, location, propFullName);
	      }
	    }

	    var chainedCheckType = checkType.bind(null, false);
	    chainedCheckType.isRequired = checkType.bind(null, true);

	    return chainedCheckType;
	  }

	  function createPrimitiveTypeChecker(expectedType) {
	    function validate(props, propName, componentName, location, propFullName, secret) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== expectedType) {
	        // `propValue` being instance of, say, date/regexp, pass the 'object'
	        // check, but we can offer a more precise error message here rather than
	        // 'of type `object`'.
	        var preciseType = getPreciseType(propValue);

	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createAnyTypeChecker() {
	    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
	  }

	  function createArrayOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
	      }
	      var propValue = props[propName];
	      if (!Array.isArray(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
	      }
	      for (var i = 0; i < propValue.length; i++) {
	        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
	        if (error instanceof Error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createElementTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!isValidElement(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createInstanceTypeChecker(expectedClass) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!(props[propName] instanceof expectedClass)) {
	        var expectedClassName = expectedClass.name || ANONYMOUS;
	        var actualClassName = getClassName(props[propName]);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createEnumTypeChecker(expectedValues) {
	    if (!Array.isArray(expectedValues)) {
	       true ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
	      return emptyFunction.thatReturnsNull;
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      for (var i = 0; i < expectedValues.length; i++) {
	        if (is(propValue, expectedValues[i])) {
	          return null;
	        }
	      }

	      var valuesString = JSON.stringify(expectedValues);
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createObjectOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
	      }
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
	      }
	      for (var key in propValue) {
	        if (propValue.hasOwnProperty(key)) {
	          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	          if (error instanceof Error) {
	            return error;
	          }
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createUnionTypeChecker(arrayOfTypeCheckers) {
	    if (!Array.isArray(arrayOfTypeCheckers)) {
	       true ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
	      return emptyFunction.thatReturnsNull;
	    }

	    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	      var checker = arrayOfTypeCheckers[i];
	      if (typeof checker !== 'function') {
	        warning(
	          false,
	          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
	          'received %s at index %s.',
	          getPostfixForTypeWarning(checker),
	          i
	        );
	        return emptyFunction.thatReturnsNull;
	      }
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	        var checker = arrayOfTypeCheckers[i];
	        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
	          return null;
	        }
	      }

	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createNodeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!isNode(props[propName])) {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      for (var key in shapeTypes) {
	        var checker = shapeTypes[key];
	        if (!checker) {
	          continue;
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createStrictShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      // We need to check all keys in case some are required but missing from
	      // props.
	      var allKeys = assign({}, props[propName], shapeTypes);
	      for (var key in allKeys) {
	        var checker = shapeTypes[key];
	        if (!checker) {
	          return new PropTypeError(
	            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
	            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
	            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
	          );
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }

	    return createChainableTypeChecker(validate);
	  }

	  function isNode(propValue) {
	    switch (typeof propValue) {
	      case 'number':
	      case 'string':
	      case 'undefined':
	        return true;
	      case 'boolean':
	        return !propValue;
	      case 'object':
	        if (Array.isArray(propValue)) {
	          return propValue.every(isNode);
	        }
	        if (propValue === null || isValidElement(propValue)) {
	          return true;
	        }

	        var iteratorFn = getIteratorFn(propValue);
	        if (iteratorFn) {
	          var iterator = iteratorFn.call(propValue);
	          var step;
	          if (iteratorFn !== propValue.entries) {
	            while (!(step = iterator.next()).done) {
	              if (!isNode(step.value)) {
	                return false;
	              }
	            }
	          } else {
	            // Iterator will provide entry [k,v] tuples rather than values.
	            while (!(step = iterator.next()).done) {
	              var entry = step.value;
	              if (entry) {
	                if (!isNode(entry[1])) {
	                  return false;
	                }
	              }
	            }
	          }
	        } else {
	          return false;
	        }

	        return true;
	      default:
	        return false;
	    }
	  }

	  function isSymbol(propType, propValue) {
	    // Native Symbol.
	    if (propType === 'symbol') {
	      return true;
	    }

	    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
	    if (propValue['@@toStringTag'] === 'Symbol') {
	      return true;
	    }

	    // Fallback for non-spec compliant Symbols which are polyfilled.
	    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
	      return true;
	    }

	    return false;
	  }

	  // Equivalent of `typeof` but with special handling for array and regexp.
	  function getPropType(propValue) {
	    var propType = typeof propValue;
	    if (Array.isArray(propValue)) {
	      return 'array';
	    }
	    if (propValue instanceof RegExp) {
	      // Old webkits (at least until Android 4.0) return 'function' rather than
	      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
	      // passes PropTypes.object.
	      return 'object';
	    }
	    if (isSymbol(propType, propValue)) {
	      return 'symbol';
	    }
	    return propType;
	  }

	  // This handles more types than `getPropType`. Only used for error messages.
	  // See `createPrimitiveTypeChecker`.
	  function getPreciseType(propValue) {
	    if (typeof propValue === 'undefined' || propValue === null) {
	      return '' + propValue;
	    }
	    var propType = getPropType(propValue);
	    if (propType === 'object') {
	      if (propValue instanceof Date) {
	        return 'date';
	      } else if (propValue instanceof RegExp) {
	        return 'regexp';
	      }
	    }
	    return propType;
	  }

	  // Returns a string that is postfixed to a warning about an invalid type.
	  // For example, "undefined" or "of type array"
	  function getPostfixForTypeWarning(value) {
	    var type = getPreciseType(value);
	    switch (type) {
	      case 'array':
	      case 'object':
	        return 'an ' + type;
	      case 'boolean':
	      case 'date':
	      case 'regexp':
	        return 'a ' + type;
	      default:
	        return type;
	    }
	  }

	  // Returns class name of the object, if any.
	  function getClassName(propValue) {
	    if (!propValue.constructor || !propValue.constructor.name) {
	      return ANONYMOUS;
	    }
	    return propValue.constructor.name;
	  }

	  ReactPropTypes.checkPropTypes = checkPropTypes;
	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _lazyCache = __webpack_require__(60);

	var _lazyCache2 = _interopRequireDefault(_lazyCache);

	exports['default'] = _lazyCache2['default'];
	module.exports = exports['default'];

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = lazyCache;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _deepEqual = __webpack_require__(18);

	var _deepEqual2 = _interopRequireDefault(_deepEqual);

	function lazyCache(component, calculators) {
	  var allProps = [];
	  var cache = {};
	  var api = {};
	  var uncache = function uncache(changedProp) {
	    Object.keys(cache).forEach(function (key) {
	      if (~cache[key].props.indexOf(changedProp)) {
	        delete cache[key].value;
	        uncache(key);
	      }
	    });
	  };

	  Object.keys(calculators).forEach(function (key) {
	    var fn = calculators[key].fn;
	    var props = calculators[key].params;
	    props.forEach(function (param) {
	      if (! ~allProps.indexOf(param)) {
	        allProps.push(param);
	      }
	    });
	    cache[key] = { props: props };
	    Object.defineProperty(api, key, {
	      get: function get() {
	        var cached = cache[key];
	        if (cached && cached.value !== undefined) {
	          return cached.value;
	        }
	        var params = props.map(function (prop) {
	          return component.props[prop] || api[prop];
	        });
	        var value = fn.apply(undefined, params);
	        cache[key] = { props: props, value: value };
	        return value;
	      }
	    });
	  });
	  api.componentWillReceiveProps = function (nextProps) {
	    var diffProps = [];
	    allProps.forEach(function (prop) {
	      if (!_deepEqual2['default'](component.props[prop], nextProps[prop])) {
	        diffProps.push(prop);
	      }
	    });
	    diffProps.forEach(uncache);
	  };
	  return api;
	}

	module.exports = exports['default'];

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = createAll;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _createProvider = __webpack_require__(63);

	var _createProvider2 = _interopRequireDefault(_createProvider);

	var _createConnect = __webpack_require__(62);

	var _createConnect2 = _interopRequireDefault(_createConnect);

	function createAll(React) {
	  var Provider = _createProvider2['default'](React);
	  var connect = _createConnect2['default'](React);

	  return { Provider: Provider, connect: connect };
	}

	module.exports = exports['default'];

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports['default'] = createConnect;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _utilsCreateStoreShape = __webpack_require__(24);

	var _utilsCreateStoreShape2 = _interopRequireDefault(_utilsCreateStoreShape);

	var _utilsShallowEqual = __webpack_require__(66);

	var _utilsShallowEqual2 = _interopRequireDefault(_utilsShallowEqual);

	var _utilsIsPlainObject = __webpack_require__(65);

	var _utilsIsPlainObject2 = _interopRequireDefault(_utilsIsPlainObject);

	var _utilsWrapActionCreators = __webpack_require__(67);

	var _utilsWrapActionCreators2 = _interopRequireDefault(_utilsWrapActionCreators);

	var _hoistNonReactStatics = __webpack_require__(22);

	var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

	var _invariant = __webpack_require__(55);

	var _invariant2 = _interopRequireDefault(_invariant);

	var defaultMapStateToProps = function defaultMapStateToProps() {
	  return {};
	};
	var defaultMapDispatchToProps = function defaultMapDispatchToProps(dispatch) {
	  return { dispatch: dispatch };
	};
	var defaultMergeProps = function defaultMergeProps(stateProps, dispatchProps, parentProps) {
	  return _extends({}, parentProps, stateProps, dispatchProps);
	};

	function getDisplayName(Component) {
	  return Component.displayName || Component.name || 'Component';
	}

	// Helps track hot reloading.
	var nextVersion = 0;

	function createConnect(React) {
	  var Component = React.Component;
	  var PropTypes = React.PropTypes;

	  var storeShape = _utilsCreateStoreShape2['default'](PropTypes);

	  return function connect(mapStateToProps, mapDispatchToProps, mergeProps) {
	    var options = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];

	    var shouldSubscribe = Boolean(mapStateToProps);
	    var finalMapStateToProps = mapStateToProps || defaultMapStateToProps;
	    var finalMapDispatchToProps = _utilsIsPlainObject2['default'](mapDispatchToProps) ? _utilsWrapActionCreators2['default'](mapDispatchToProps) : mapDispatchToProps || defaultMapDispatchToProps;
	    var finalMergeProps = mergeProps || defaultMergeProps;
	    var shouldUpdateStateProps = finalMapStateToProps.length > 1;
	    var shouldUpdateDispatchProps = finalMapDispatchToProps.length > 1;
	    var _options$pure = options.pure;
	    var pure = _options$pure === undefined ? true : _options$pure;

	    // Helps track hot reloading.
	    var version = nextVersion++;

	    function computeStateProps(store, props) {
	      var state = store.getState();
	      var stateProps = shouldUpdateStateProps ? finalMapStateToProps(state, props) : finalMapStateToProps(state);

	      _invariant2['default'](_utilsIsPlainObject2['default'](stateProps), '`mapStateToProps` must return an object. Instead received %s.', stateProps);
	      return stateProps;
	    }

	    function computeDispatchProps(store, props) {
	      var dispatch = store.dispatch;

	      var dispatchProps = shouldUpdateDispatchProps ? finalMapDispatchToProps(dispatch, props) : finalMapDispatchToProps(dispatch);

	      _invariant2['default'](_utilsIsPlainObject2['default'](dispatchProps), '`mapDispatchToProps` must return an object. Instead received %s.', dispatchProps);
	      return dispatchProps;
	    }

	    function _computeNextState(stateProps, dispatchProps, parentProps) {
	      var mergedProps = finalMergeProps(stateProps, dispatchProps, parentProps);
	      _invariant2['default'](_utilsIsPlainObject2['default'](mergedProps), '`mergeProps` must return an object. Instead received %s.', mergedProps);
	      return mergedProps;
	    }

	    return function wrapWithConnect(WrappedComponent) {
	      var Connect = (function (_Component) {
	        _inherits(Connect, _Component);

	        Connect.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
	          if (!pure) {
	            this.updateStateProps(nextProps);
	            this.updateDispatchProps(nextProps);
	            this.updateState(nextProps);
	            return true;
	          }

	          var storeChanged = nextState.storeState !== this.state.storeState;
	          var propsChanged = !_utilsShallowEqual2['default'](nextProps, this.props);
	          var mapStateProducedChange = false;
	          var dispatchPropsChanged = false;

	          if (storeChanged || propsChanged && shouldUpdateStateProps) {
	            mapStateProducedChange = this.updateStateProps(nextProps);
	          }

	          if (propsChanged && shouldUpdateDispatchProps) {
	            dispatchPropsChanged = this.updateDispatchProps(nextProps);
	          }

	          if (propsChanged || mapStateProducedChange || dispatchPropsChanged) {
	            this.updateState(nextProps);
	            return true;
	          }

	          return false;
	        };

	        function Connect(props, context) {
	          _classCallCheck(this, Connect);

	          _Component.call(this, props, context);
	          this.version = version;
	          this.store = props.store || context.store;

	          _invariant2['default'](this.store, 'Could not find "store" in either the context or ' + ('props of "' + this.constructor.displayName + '". ') + 'Either wrap the root component in a <Provider>, ' + ('or explicitly pass "store" as a prop to "' + this.constructor.displayName + '".'));

	          this.stateProps = computeStateProps(this.store, props);
	          this.dispatchProps = computeDispatchProps(this.store, props);
	          this.state = { storeState: null };
	          this.updateState();
	        }

	        Connect.prototype.computeNextState = function computeNextState() {
	          var props = arguments.length <= 0 || arguments[0] === undefined ? this.props : arguments[0];

	          return _computeNextState(this.stateProps, this.dispatchProps, props);
	        };

	        Connect.prototype.updateStateProps = function updateStateProps() {
	          var props = arguments.length <= 0 || arguments[0] === undefined ? this.props : arguments[0];

	          var nextStateProps = computeStateProps(this.store, props);
	          if (_utilsShallowEqual2['default'](nextStateProps, this.stateProps)) {
	            return false;
	          }

	          this.stateProps = nextStateProps;
	          return true;
	        };

	        Connect.prototype.updateDispatchProps = function updateDispatchProps() {
	          var props = arguments.length <= 0 || arguments[0] === undefined ? this.props : arguments[0];

	          var nextDispatchProps = computeDispatchProps(this.store, props);
	          if (_utilsShallowEqual2['default'](nextDispatchProps, this.dispatchProps)) {
	            return false;
	          }

	          this.dispatchProps = nextDispatchProps;
	          return true;
	        };

	        Connect.prototype.updateState = function updateState() {
	          var props = arguments.length <= 0 || arguments[0] === undefined ? this.props : arguments[0];

	          this.nextState = this.computeNextState(props);
	        };

	        Connect.prototype.isSubscribed = function isSubscribed() {
	          return typeof this.unsubscribe === 'function';
	        };

	        Connect.prototype.trySubscribe = function trySubscribe() {
	          if (shouldSubscribe && !this.unsubscribe) {
	            this.unsubscribe = this.store.subscribe(this.handleChange.bind(this));
	            this.handleChange();
	          }
	        };

	        Connect.prototype.tryUnsubscribe = function tryUnsubscribe() {
	          if (this.unsubscribe) {
	            this.unsubscribe();
	            this.unsubscribe = null;
	          }
	        };

	        Connect.prototype.componentDidMount = function componentDidMount() {
	          this.trySubscribe();
	        };

	        Connect.prototype.componentWillUnmount = function componentWillUnmount() {
	          this.tryUnsubscribe();
	        };

	        Connect.prototype.handleChange = function handleChange() {
	          if (!this.unsubscribe) {
	            return;
	          }

	          this.setState({
	            storeState: this.store.getState()
	          });
	        };

	        Connect.prototype.getWrappedInstance = function getWrappedInstance() {
	          return this.refs.wrappedInstance;
	        };

	        Connect.prototype.render = function render() {
	          return React.createElement(WrappedComponent, _extends({ ref: 'wrappedInstance'
	          }, this.nextState));
	        };

	        return Connect;
	      })(Component);

	      Connect.displayName = 'Connect(' + getDisplayName(WrappedComponent) + ')';
	      Connect.WrappedComponent = WrappedComponent;
	      Connect.contextTypes = {
	        store: storeShape
	      };
	      Connect.propTypes = {
	        store: storeShape
	      };

	      if (true) {
	        Connect.prototype.componentWillUpdate = function componentWillUpdate() {
	          if (this.version === version) {
	            return;
	          }

	          // We are hot reloading!
	          this.version = version;

	          // Update the state and bindings.
	          this.trySubscribe();
	          this.updateStateProps();
	          this.updateDispatchProps();
	          this.updateState();
	        };
	      }

	      return _hoistNonReactStatics2['default'](Connect, WrappedComponent);
	    };
	  };
	}

	module.exports = exports['default'];

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = createProvider;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _utilsCreateStoreShape = __webpack_require__(24);

	var _utilsCreateStoreShape2 = _interopRequireDefault(_utilsCreateStoreShape);

	function isUsingOwnerContext(React) {
	  var version = React.version;

	  if (typeof version !== 'string') {
	    return true;
	  }

	  var sections = version.split('.');
	  var major = parseInt(sections[0], 10);
	  var minor = parseInt(sections[1], 10);

	  return major === 0 && minor === 13;
	}

	function createProvider(React) {
	  var Component = React.Component;
	  var PropTypes = React.PropTypes;
	  var Children = React.Children;

	  var storeShape = _utilsCreateStoreShape2['default'](PropTypes);
	  var requireFunctionChild = isUsingOwnerContext(React);

	  var didWarnAboutChild = false;
	  function warnAboutFunctionChild() {
	    if (didWarnAboutChild || requireFunctionChild) {
	      return;
	    }

	    didWarnAboutChild = true;
	    console.error( // eslint-disable-line no-console
	    'With React 0.14 and later versions, you no longer need to ' + 'wrap <Provider> child into a function.');
	  }
	  function warnAboutElementChild() {
	    if (didWarnAboutChild || !requireFunctionChild) {
	      return;
	    }

	    didWarnAboutChild = true;
	    console.error( // eslint-disable-line no-console
	    'With React 0.13, you need to ' + 'wrap <Provider> child into a function. ' + 'This restriction will be removed with React 0.14.');
	  }

	  var didWarnAboutReceivingStore = false;
	  function warnAboutReceivingStore() {
	    if (didWarnAboutReceivingStore) {
	      return;
	    }

	    didWarnAboutReceivingStore = true;
	    console.error( // eslint-disable-line no-console
	    '<Provider> does not support changing `store` on the fly. ' + 'It is most likely that you see this error because you updated to ' + 'Redux 2.x and React Redux 2.x which no longer hot reload reducers ' + 'automatically. See https://github.com/rackt/react-redux/releases/' + 'tag/v2.0.0 for the migration instructions.');
	  }

	  var Provider = (function (_Component) {
	    _inherits(Provider, _Component);

	    Provider.prototype.getChildContext = function getChildContext() {
	      return { store: this.store };
	    };

	    function Provider(props, context) {
	      _classCallCheck(this, Provider);

	      _Component.call(this, props, context);
	      this.store = props.store;
	    }

	    Provider.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	      var store = this.store;
	      var nextStore = nextProps.store;

	      if (store !== nextStore) {
	        warnAboutReceivingStore();
	      }
	    };

	    Provider.prototype.render = function render() {
	      var children = this.props.children;

	      if (typeof children === 'function') {
	        warnAboutFunctionChild();
	        children = children();
	      } else {
	        warnAboutElementChild();
	      }

	      return Children.only(children);
	    };

	    return Provider;
	  })(Component);

	  Provider.childContextTypes = {
	    store: storeShape.isRequired
	  };
	  Provider.propTypes = {
	    store: storeShape.isRequired,
	    children: (requireFunctionChild ? PropTypes.func : PropTypes.element).isRequired
	  };

	  return Provider;
	}

	module.exports = exports['default'];

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(31);

	var _react2 = _interopRequireDefault(_react);

	var _componentsCreateAll = __webpack_require__(61);

	var _componentsCreateAll2 = _interopRequireDefault(_componentsCreateAll);

	var _createAll = _componentsCreateAll2['default'](_react2['default']);

	var Provider = _createAll.Provider;
	var connect = _createAll.connect;
	exports.Provider = Provider;
	exports.connect = connect;

/***/ }),
/* 65 */
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = isPlainObject;
	var fnToString = function fnToString(fn) {
	  return Function.prototype.toString.call(fn);
	};

	/**
	 * @param {any} obj The object to inspect.
	 * @returns {boolean} True if the argument appears to be a plain object.
	 */

	function isPlainObject(obj) {
	  if (!obj || typeof obj !== 'object') {
	    return false;
	  }

	  var proto = typeof obj.constructor === 'function' ? Object.getPrototypeOf(obj) : Object.prototype;

	  if (proto === null) {
	    return true;
	  }

	  var constructor = proto.constructor;

	  return typeof constructor === 'function' && constructor instanceof constructor && fnToString(constructor) === fnToString(Object);
	}

	module.exports = exports['default'];

/***/ }),
/* 66 */
/***/ (function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports["default"] = shallowEqual;

	function shallowEqual(objA, objB) {
	  if (objA === objB) {
	    return true;
	  }

	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);

	  if (keysA.length !== keysB.length) {
	    return false;
	  }

	  // Test for A's keys different from B.
	  var hasOwn = Object.prototype.hasOwnProperty;
	  for (var i = 0; i < keysA.length; i++) {
	    if (!hasOwn.call(objB, keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
	      return false;
	    }
	  }

	  return true;
	}

	module.exports = exports["default"];

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = wrapActionCreators;

	var _redux = __webpack_require__(27);

	function wrapActionCreators(actionCreators) {
	  return function (dispatch) {
	    return _redux.bindActionCreators(actionCreators, dispatch);
	  };
	}

	module.exports = exports['default'];

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports['default'] = applyMiddleware;

	var _compose = __webpack_require__(25);

	var _compose2 = _interopRequireDefault(_compose);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/**
	 * Creates a store enhancer that applies middleware to the dispatch method
	 * of the Redux store. This is handy for a variety of tasks, such as expressing
	 * asynchronous actions in a concise manner, or logging every action payload.
	 *
	 * See `redux-thunk` package as an example of the Redux middleware.
	 *
	 * Because middleware is potentially asynchronous, this should be the first
	 * store enhancer in the composition chain.
	 *
	 * Note that each middleware will be given the `dispatch` and `getState` functions
	 * as named arguments.
	 *
	 * @param {...Function} middlewares The middleware chain to be applied.
	 * @returns {Function} A store enhancer applying the middleware.
	 */
	function applyMiddleware() {
	  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
	    middlewares[_key] = arguments[_key];
	  }

	  return function (createStore) {
	    return function (reducer, preloadedState, enhancer) {
	      var store = createStore(reducer, preloadedState, enhancer);
	      var _dispatch = store.dispatch;
	      var chain = [];

	      var middlewareAPI = {
	        getState: store.getState,
	        dispatch: function dispatch(action) {
	          return _dispatch(action);
	        }
	      };
	      chain = middlewares.map(function (middleware) {
	        return middleware(middlewareAPI);
	      });
	      _dispatch = _compose2['default'].apply(undefined, chain)(store.dispatch);

	      return _extends({}, store, {
	        dispatch: _dispatch
	      });
	    };
	  };
	}

/***/ }),
/* 69 */
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = bindActionCreators;
	function bindActionCreator(actionCreator, dispatch) {
	  return function () {
	    return dispatch(actionCreator.apply(undefined, arguments));
	  };
	}

	/**
	 * Turns an object whose values are action creators, into an object with the
	 * same keys, but with every function wrapped into a `dispatch` call so they
	 * may be invoked directly. This is just a convenience method, as you can call
	 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
	 *
	 * For convenience, you can also pass a single function as the first argument,
	 * and get a function in return.
	 *
	 * @param {Function|Object} actionCreators An object whose values are action
	 * creator functions. One handy way to obtain it is to use ES6 `import * as`
	 * syntax. You may also pass a single function.
	 *
	 * @param {Function} dispatch The `dispatch` function available on your Redux
	 * store.
	 *
	 * @returns {Function|Object} The object mimicking the original object, but with
	 * every action creator wrapped into the `dispatch` call. If you passed a
	 * function as `actionCreators`, the return value will also be a single
	 * function.
	 */
	function bindActionCreators(actionCreators, dispatch) {
	  if (typeof actionCreators === 'function') {
	    return bindActionCreator(actionCreators, dispatch);
	  }

	  if (typeof actionCreators !== 'object' || actionCreators === null) {
	    throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
	  }

	  var keys = Object.keys(actionCreators);
	  var boundActionCreators = {};
	  for (var i = 0; i < keys.length; i++) {
	    var key = keys[i];
	    var actionCreator = actionCreators[key];
	    if (typeof actionCreator === 'function') {
	      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
	    }
	  }
	  return boundActionCreators;
	}

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = combineReducers;

	var _createStore = __webpack_require__(26);

	var _isPlainObject = __webpack_require__(30);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	var _warning = __webpack_require__(28);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function getUndefinedStateErrorMessage(key, action) {
	  var actionType = action && action.type;
	  var actionName = actionType && '"' + actionType.toString() + '"' || 'an action';

	  return 'Given action ' + actionName + ', reducer "' + key + '" returned undefined. ' + 'To ignore an action, you must explicitly return the previous state. ' + 'If you want this reducer to hold no value, you can return null instead of undefined.';
	}

	function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
	  var reducerKeys = Object.keys(reducers);
	  var argumentName = action && action.type === _createStore.ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

	  if (reducerKeys.length === 0) {
	    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
	  }

	  if (!(0, _isPlainObject2['default'])(inputState)) {
	    return 'The ' + argumentName + ' has unexpected type of "' + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
	  }

	  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
	    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
	  });

	  unexpectedKeys.forEach(function (key) {
	    unexpectedKeyCache[key] = true;
	  });

	  if (unexpectedKeys.length > 0) {
	    return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
	  }
	}

	function assertReducerShape(reducers) {
	  Object.keys(reducers).forEach(function (key) {
	    var reducer = reducers[key];
	    var initialState = reducer(undefined, { type: _createStore.ActionTypes.INIT });

	    if (typeof initialState === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined. If you don\'t want to set a value for this reducer, ' + 'you can use null instead of undefined.');
	    }

	    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
	    if (typeof reducer(undefined, { type: type }) === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + _createStore.ActionTypes.INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined, but can be null.');
	    }
	  });
	}

	/**
	 * Turns an object whose values are different reducer functions, into a single
	 * reducer function. It will call every child reducer, and gather their results
	 * into a single state object, whose keys correspond to the keys of the passed
	 * reducer functions.
	 *
	 * @param {Object} reducers An object whose values correspond to different
	 * reducer functions that need to be combined into one. One handy way to obtain
	 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
	 * undefined for any action. Instead, they should return their initial state
	 * if the state passed to them was undefined, and the current state for any
	 * unrecognized action.
	 *
	 * @returns {Function} A reducer function that invokes every reducer inside the
	 * passed object, and builds a state object with the same shape.
	 */
	function combineReducers(reducers) {
	  var reducerKeys = Object.keys(reducers);
	  var finalReducers = {};
	  for (var i = 0; i < reducerKeys.length; i++) {
	    var key = reducerKeys[i];

	    if (true) {
	      if (typeof reducers[key] === 'undefined') {
	        (0, _warning2['default'])('No reducer provided for key "' + key + '"');
	      }
	    }

	    if (typeof reducers[key] === 'function') {
	      finalReducers[key] = reducers[key];
	    }
	  }
	  var finalReducerKeys = Object.keys(finalReducers);

	  var unexpectedKeyCache = void 0;
	  if (true) {
	    unexpectedKeyCache = {};
	  }

	  var shapeAssertionError = void 0;
	  try {
	    assertReducerShape(finalReducers);
	  } catch (e) {
	    shapeAssertionError = e;
	  }

	  return function combination() {
	    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	    var action = arguments[1];

	    if (shapeAssertionError) {
	      throw shapeAssertionError;
	    }

	    if (true) {
	      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);
	      if (warningMessage) {
	        (0, _warning2['default'])(warningMessage);
	      }
	    }

	    var hasChanged = false;
	    var nextState = {};
	    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
	      var _key = finalReducerKeys[_i];
	      var reducer = finalReducers[_key];
	      var previousStateForKey = state[_key];
	      var nextStateForKey = reducer(previousStateForKey, action);
	      if (typeof nextStateForKey === 'undefined') {
	        var errorMessage = getUndefinedStateErrorMessage(_key, action);
	        throw new Error(errorMessage);
	      }
	      nextState[_key] = nextStateForKey;
	      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
	    }
	    return hasChanged ? nextState : state;
	  };
	}

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(29),
	    getRawTag = __webpack_require__(74),
	    objectToString = __webpack_require__(75);

	/** `Object#toString` result references. */
	var nullTag = '[object Null]',
	    undefinedTag = '[object Undefined]';

	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

	/**
	 * The base implementation of `getTag` without fallbacks for buggy environments.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  if (value == null) {
	    return value === undefined ? undefinedTag : nullTag;
	  }
	  return (symToStringTag && symToStringTag in Object(value))
	    ? getRawTag(value)
	    : objectToString(value);
	}

	module.exports = baseGetTag;


/***/ }),
/* 72 */
/***/ (function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

	module.exports = freeGlobal;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

	var overArg = __webpack_require__(76);

	/** Built-in value references. */
	var getPrototype = overArg(Object.getPrototypeOf, Object);

	module.exports = getPrototype;


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(29);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;

	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

	/**
	 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the raw `toStringTag`.
	 */
	function getRawTag(value) {
	  var isOwn = hasOwnProperty.call(value, symToStringTag),
	      tag = value[symToStringTag];

	  try {
	    value[symToStringTag] = undefined;
	    var unmasked = true;
	  } catch (e) {}

	  var result = nativeObjectToString.call(value);
	  if (unmasked) {
	    if (isOwn) {
	      value[symToStringTag] = tag;
	    } else {
	      delete value[symToStringTag];
	    }
	  }
	  return result;
	}

	module.exports = getRawTag;


/***/ }),
/* 75 */
/***/ (function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;

	/**
	 * Converts `value` to a string using `Object.prototype.toString`.
	 *
	 * @private
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 */
	function objectToString(value) {
	  return nativeObjectToString.call(value);
	}

	module.exports = objectToString;


/***/ }),
/* 76 */
/***/ (function(module, exports) {

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}

	module.exports = overArg;


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

	var freeGlobal = __webpack_require__(72);

	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();

	module.exports = root;


/***/ }),
/* 78 */
/***/ (function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return value != null && typeof value == 'object';
	}

	module.exports = isObjectLike;


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, module) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ponyfill = __webpack_require__(80);

	var _ponyfill2 = _interopRequireDefault(_ponyfill);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var root; /* global window */


	if (typeof self !== 'undefined') {
	  root = self;
	} else if (typeof window !== 'undefined') {
	  root = window;
	} else if (typeof global !== 'undefined') {
	  root = global;
	} else if (true) {
	  root = module;
	} else {
	  root = Function('return this')();
	}

	var result = (0, _ponyfill2['default'])(root);
	exports['default'] = result;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(81)(module)))

/***/ }),
/* 80 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports['default'] = symbolObservablePonyfill;
	function symbolObservablePonyfill(root) {
		var result;
		var _Symbol = root.Symbol;

		if (typeof _Symbol === 'function') {
			if (_Symbol.observable) {
				result = _Symbol.observable;
			} else {
				result = _Symbol('observable');
				_Symbol.observable = result;
			}
		} else {
			result = '@@observable';
		}

		return result;
	};

/***/ }),
/* 81 */
/***/ (function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ })
/******/ ])
});
;