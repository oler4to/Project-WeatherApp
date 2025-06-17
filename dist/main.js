/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/icons lazy recursive ^\\.\\/.*\\.svg$":
/*!********************************************************!*\
  !*** ./src/icons/ lazy ^\.\/.*\.svg$ namespace object ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var map = {\n\t\"./clear-day.svg\": [\n\t\t\"./src/icons/clear-day.svg\",\n\t\t\"src_icons_clear-day_svg\"\n\t],\n\t\"./clear-night.svg\": [\n\t\t\"./src/icons/clear-night.svg\",\n\t\t\"src_icons_clear-night_svg\"\n\t],\n\t\"./cloudy.svg\": [\n\t\t\"./src/icons/cloudy.svg\",\n\t\t\"src_icons_cloudy_svg\"\n\t],\n\t\"./fog.svg\": [\n\t\t\"./src/icons/fog.svg\",\n\t\t\"src_icons_fog_svg\"\n\t],\n\t\"./hail.svg\": [\n\t\t\"./src/icons/hail.svg\",\n\t\t\"src_icons_hail_svg\"\n\t],\n\t\"./partly-cloudy-day.svg\": [\n\t\t\"./src/icons/partly-cloudy-day.svg\",\n\t\t\"src_icons_partly-cloudy-day_svg\"\n\t],\n\t\"./partly-cloudy-night.svg\": [\n\t\t\"./src/icons/partly-cloudy-night.svg\",\n\t\t\"src_icons_partly-cloudy-night_svg\"\n\t],\n\t\"./rain-snow-showers-day.svg\": [\n\t\t\"./src/icons/rain-snow-showers-day.svg\",\n\t\t\"src_icons_rain-snow-showers-day_svg\"\n\t],\n\t\"./rain-snow-showers-night.svg\": [\n\t\t\"./src/icons/rain-snow-showers-night.svg\",\n\t\t\"src_icons_rain-snow-showers-night_svg\"\n\t],\n\t\"./rain-snow.svg\": [\n\t\t\"./src/icons/rain-snow.svg\",\n\t\t\"src_icons_rain-snow_svg\"\n\t],\n\t\"./rain.svg\": [\n\t\t\"./src/icons/rain.svg\",\n\t\t\"src_icons_rain_svg\"\n\t],\n\t\"./showers-day.svg\": [\n\t\t\"./src/icons/showers-day.svg\",\n\t\t\"src_icons_showers-day_svg\"\n\t],\n\t\"./showers-night.svg\": [\n\t\t\"./src/icons/showers-night.svg\",\n\t\t\"src_icons_showers-night_svg\"\n\t],\n\t\"./sleet.svg\": [\n\t\t\"./src/icons/sleet.svg\",\n\t\t\"src_icons_sleet_svg\"\n\t],\n\t\"./snow-showers-day.svg\": [\n\t\t\"./src/icons/snow-showers-day.svg\",\n\t\t\"src_icons_snow-showers-day_svg\"\n\t],\n\t\"./snow-showers-night.svg\": [\n\t\t\"./src/icons/snow-showers-night.svg\",\n\t\t\"src_icons_snow-showers-night_svg\"\n\t],\n\t\"./snow.svg\": [\n\t\t\"./src/icons/snow.svg\",\n\t\t\"src_icons_snow_svg\"\n\t],\n\t\"./thunder-rain.svg\": [\n\t\t\"./src/icons/thunder-rain.svg\",\n\t\t\"src_icons_thunder-rain_svg\"\n\t],\n\t\"./thunder-showers-day.svg\": [\n\t\t\"./src/icons/thunder-showers-day.svg\",\n\t\t\"src_icons_thunder-showers-day_svg\"\n\t],\n\t\"./thunder-showers-night.svg\": [\n\t\t\"./src/icons/thunder-showers-night.svg\",\n\t\t\"src_icons_thunder-showers-night_svg\"\n\t],\n\t\"./thunder.svg\": [\n\t\t\"./src/icons/thunder.svg\",\n\t\t\"src_icons_thunder_svg\"\n\t],\n\t\"./wind.svg\": [\n\t\t\"./src/icons/wind.svg\",\n\t\t\"src_icons_wind_svg\"\n\t]\n};\nfunction webpackAsyncContext(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\treturn Promise.resolve().then(() => {\n\t\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\t\te.code = 'MODULE_NOT_FOUND';\n\t\t\tthrow e;\n\t\t});\n\t}\n\n\tvar ids = map[req], id = ids[0];\n\treturn __webpack_require__.e(ids[1]).then(() => {\n\t\treturn __webpack_require__.t(id, 1 | 16);\n\t});\n}\nwebpackAsyncContext.keys = () => (Object.keys(map));\nwebpackAsyncContext.id = \"./src/icons lazy recursive ^\\\\.\\\\/.*\\\\.svg$\";\nmodule.exports = webpackAsyncContext;\n\n//# sourceURL=webpack://project-weatherapp/./src/icons/_lazy_^\\.\\/.*\\.svg$_namespace_object?");

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst ficksburg = JSON.parse(localStorage.getItem('ficksburg'));\n\nasync function getData(city){\n  \n  operateLoadingScreen(true);\n  \n  try {\n  \n    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=YA3JYGZUNLJTQX73DKKAMD87Q&unitGroup=uk`);\n    const data = await response.json();\n    const forecast = await currentForecast(data);\n    console.log(forecast);\n    fillDetails(forecast);\n \n \n  } catch(error){\n    console.error('There was a problem.');\n  } finally {\n    operateLoadingScreen(false);\n  }\n}\n\nfunction getPostalAddress(data){\n  if(data.resolvedAddress !== data.address)\n    return data.resolvedAddress\n            .split(\",\").filter((e) => e !== data.address)\n              .join(',').trim();\n  else return data.address;\n}\n\nfunction currentForecast(data){\n  \n  return {\n    city: data.address,\n    postalAddress: getPostalAddress(data),\n    description: data.description,\n    condition: data.currentConditions.icon,\n    currentTemp: data.currentConditions.temp,\n    minTemp: data.days[0].tempmin,\n    maxTemp: data.days[0].tempmax,\n    humidity: Math.round(data.currentConditions.humidity) + '%',\n    wind: Math.round(data.currentConditions.windspeed) + 'km/h',\n    sunrise: data.currentConditions.sunrise,\n    sunset: data.currentConditions.sunset\n  };\n}\n\n\n\nasync function ficks() {\n  \n  try{\n  operateLoadingScreen(true);\n   const h = await new Promise((resolve, reject) => {\n    setTimeout(() => { return resolve( JSON.parse(localStorage.getItem('ficks')))}\n      , 2000);\n   });\n   \n   console.log(currentForecast(h));\n\n  \n}catch (e){\n  console.error('Boom');\n} finally {\n  operateLoadingScreen(false);\n}\n}\n\nconst loadingScreen = document.getElementById('loading-screen');\n\nfunction operateLoadingScreen(status){\n  if(!status){\n    loadingScreen.innerHTML = 'Getting Data <br/>';\n    loadingScreen.style.display = 'none';\n  } else {\n    loadingScreen.style.display = \"block\";\n    setInterval(function(){\n      \n    if(!loadingScreen.innerHTML.includes('...')){\n        loadingScreen.innerHTML += '.';\n    } else loadingScreen.innerHTML = 'Getting Data <br/>';\n  } , 400);\n    \n  }\n}\n\ngetData('Cambridge');\n\nconst detailFields = document.querySelectorAll('#details span');\n\nfunction fillDetails(data){\n  detailFields.forEach((field) => {\n    \n    let fieldClass = field.classList[0];\n    \n    if(Object.keys(data).includes(fieldClass)){\n      \n      if(fieldClass == 'condition'){\n        __webpack_require__(\"./src/icons lazy recursive ^\\\\.\\\\/.*\\\\.svg$\")(`./${data.condition}.svg`)\n          .then((icon) => {\n            field\n              .firstElementChild\n                .src = icon.default;\n          });\n      } else field.innerHTML = data[fieldClass];\n      \n    } else if (Object.keys(data).includes(`${fieldClass}Temp`)){\n      field.innerHTML = data[`${fieldClass}Temp`] + '°C';\n    }\n  });\n}\n\n\n\n//# sourceURL=webpack://project-weatherapp/./src/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".main.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "project-weatherapp:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkproject_weatherapp"] = self["webpackChunkproject_weatherapp"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/script.js");
/******/ 	
/******/ })()
;