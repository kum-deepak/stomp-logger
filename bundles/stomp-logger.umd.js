(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("StompLogger", [], factory);
	else if(typeof exports === 'object')
		exports["StompLogger"] = factory();
	else
		root["StompLogger"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: LogLevel, LoggerConfig, Logger, StompAppenderConfig, StompAppender, ConsoleAppenderConfig, ConsoleAppender */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_logger_log_level__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/logger/log-level */ "./src/lib/logger/log-level.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LogLevel", function() { return _lib_logger_log_level__WEBPACK_IMPORTED_MODULE_0__["LogLevel"]; });

/* harmony import */ var _lib_logger_logger_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/logger/logger-config */ "./src/lib/logger/logger-config.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoggerConfig", function() { return _lib_logger_logger_config__WEBPACK_IMPORTED_MODULE_1__["LoggerConfig"]; });

/* harmony import */ var _lib_logger_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/logger/logger */ "./src/lib/logger/logger.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Logger", function() { return _lib_logger_logger__WEBPACK_IMPORTED_MODULE_2__["Logger"]; });

/* harmony import */ var _lib_stomp_appender_stomp_appender_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/stomp-appender/stomp-appender-config */ "./src/lib/stomp-appender/stomp-appender-config.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StompAppenderConfig", function() { return _lib_stomp_appender_stomp_appender_config__WEBPACK_IMPORTED_MODULE_3__["StompAppenderConfig"]; });

/* harmony import */ var _lib_stomp_appender_stomp_appender__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/stomp-appender/stomp-appender */ "./src/lib/stomp-appender/stomp-appender.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StompAppender", function() { return _lib_stomp_appender_stomp_appender__WEBPACK_IMPORTED_MODULE_4__["StompAppender"]; });

/* harmony import */ var _lib_console_appender_console_appender_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/console-appender/console-appender-config */ "./src/lib/console-appender/console-appender-config.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConsoleAppenderConfig", function() { return _lib_console_appender_console_appender_config__WEBPACK_IMPORTED_MODULE_5__["ConsoleAppenderConfig"]; });

/* harmony import */ var _lib_console_appender_console_appender__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/console-appender/console-appender */ "./src/lib/console-appender/console-appender.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConsoleAppender", function() { return _lib_console_appender_console_appender__WEBPACK_IMPORTED_MODULE_6__["ConsoleAppender"]; });

/*
 * Public API Surface of logger
 */









/***/ }),

/***/ "./src/lib/console-appender/console-appender-config.ts":
/*!*************************************************************!*\
  !*** ./src/lib/console-appender/console-appender-config.ts ***!
  \*************************************************************/
/*! exports provided: ConsoleAppenderConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsoleAppenderConfig", function() { return ConsoleAppenderConfig; });
class ConsoleAppenderConfig {
}


/***/ }),

/***/ "./src/lib/console-appender/console-appender.ts":
/*!******************************************************!*\
  !*** ./src/lib/console-appender/console-appender.ts ***!
  \******************************************************/
/*! exports provided: ConsoleAppender */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsoleAppender", function() { return ConsoleAppender; });
// methods to call on console for corresponding logger methods.
// `fatal` is mapped to `error`
const MAP = [
    // tslint:disable-next-line:no-console
    console.debug,
    // tslint:disable-next-line:no-console
    console.info,
    // tslint:disable-next-line:no-console
    console.warn,
    // tslint:disable-next-line:no-console
    console.error,
    // tslint:disable-next-line:no-console
    console.error,
];
class ConsoleAppender {
    constructor(config) {
        this.config = config;
    }
    add(severity, message) {
        const toLog = typeof this.config.formatter === 'function'
            ? this.config.formatter(message)
            : [message];
        MAP[severity].call(console, ...toLog);
    }
}


/***/ }),

/***/ "./src/lib/logger/log-level.ts":
/*!*************************************!*\
  !*** ./src/lib/logger/log-level.ts ***!
  \*************************************/
/*! exports provided: LogLevel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogLevel", function() { return LogLevel; });
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["DEBUG"] = 0] = "DEBUG";
    LogLevel[LogLevel["INFO"] = 1] = "INFO";
    LogLevel[LogLevel["WARN"] = 2] = "WARN";
    LogLevel[LogLevel["ERROR"] = 3] = "ERROR";
    LogLevel[LogLevel["FATAL"] = 4] = "FATAL";
})(LogLevel || (LogLevel = {}));


/***/ }),

/***/ "./src/lib/logger/logger-config.ts":
/*!*****************************************!*\
  !*** ./src/lib/logger/logger-config.ts ***!
  \*****************************************/
/*! exports provided: LoggerConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggerConfig", function() { return LoggerConfig; });
class LoggerConfig {
}


/***/ }),

/***/ "./src/lib/logger/logger.ts":
/*!**********************************!*\
  !*** ./src/lib/logger/logger.ts ***!
  \**********************************/
/*! exports provided: Logger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Logger", function() { return Logger; });
/* harmony import */ var _log_level__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./log-level */ "./src/lib/logger/log-level.ts");

class Logger {
    constructor(config) {
        this.config = config;
    }
    add(severity, message) {
        this.config.appenders.forEach(appender => {
            if (severity >= appender.config.level) {
                appender.add(severity, message);
            }
        });
    }
    debug(message) {
        this.add(_log_level__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].DEBUG, message);
    }
    info(message) {
        this.add(_log_level__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].INFO, message);
    }
    warn(message) {
        this.add(_log_level__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].WARN, message);
    }
    error(message) {
        this.add(_log_level__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].ERROR, message);
    }
    fatal(message) {
        this.add(_log_level__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].FATAL, message);
    }
}


/***/ }),

/***/ "./src/lib/stomp-appender/stomp-appender-config.ts":
/*!*********************************************************!*\
  !*** ./src/lib/stomp-appender/stomp-appender-config.ts ***!
  \*********************************************************/
/*! exports provided: StompAppenderConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StompAppenderConfig", function() { return StompAppenderConfig; });
class StompAppenderConfig {
}


/***/ }),

/***/ "./src/lib/stomp-appender/stomp-appender.ts":
/*!**************************************************!*\
  !*** ./src/lib/stomp-appender/stomp-appender.ts ***!
  \**************************************************/
/*! exports provided: StompAppender */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StompAppender", function() { return StompAppender; });
class StompAppender {
    constructor(config, rxStomp) {
        this.config = config;
        this.rxStomp = rxStomp;
    }
    add(severity, message) {
        const { headers: headers, message: msg } = this.config.formatter(message);
        this.rxStomp.publish({
            destination: this.config.dest,
            headers: Object.assign(Object.assign({}, headers), { severity: `${severity}` }),
            body: msg,
        });
    }
}


/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/kdeepak/MyWork/Tech/stomp/stomp-logger/src/index.ts */"./src/index.ts");


/***/ })

/******/ });
});
//# sourceMappingURL=stomp-logger.umd.js.map