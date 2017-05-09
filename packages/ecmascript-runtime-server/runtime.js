// The ecmascript-runtime-server package depends on its own copy of
// core-js using Npm.depends, so we don't have to check that core-js is
// available (as we do in ecmascript-runtime-client/runtime.js).

require("core-js/modules/es6.symbol");
require("core-js/modules/es6.map");
require("core-js/modules/es6.set");

var core = require("core-js/modules/_core");
Symbol = exports.Symbol = core.Symbol;
Map = exports.Map = core.Map;
Set = exports.Set = core.Set;

// List of polyfills generated by babel-preset-env with the following
// .babelrc configuration:
//
// {
//   "presets": [
//     ["env", {
//       "targets": {
//         "node": 4
//       },
//       "polyfill": true,
//       "useBuiltIns": true
//     }]
//   ]
// }
//
// Note that the es6.reflect.* modules have been commented out for bundle
// size reasons.

require("core-js/modules/es6.typed.array-buffer");
require("core-js/modules/es6.typed.int8-array");
require("core-js/modules/es6.typed.uint8-array");
require("core-js/modules/es6.typed.uint8-clamped-array");
require("core-js/modules/es6.typed.int16-array");
require("core-js/modules/es6.typed.uint16-array");
require("core-js/modules/es6.typed.int32-array");
require("core-js/modules/es6.typed.uint32-array");
require("core-js/modules/es6.typed.float32-array");
require("core-js/modules/es6.typed.float64-array");
require("core-js/modules/es6.weak-map");
require("core-js/modules/es6.weak-set");
// require("core-js/modules/es6.reflect.apply");
// require("core-js/modules/es6.reflect.construct");
// require("core-js/modules/es6.reflect.define-property");
// require("core-js/modules/es6.reflect.delete-property");
// require("core-js/modules/es6.reflect.get");
// require("core-js/modules/es6.reflect.get-own-property-descriptor");
// require("core-js/modules/es6.reflect.get-prototype-of");
// require("core-js/modules/es6.reflect.has");
// require("core-js/modules/es6.reflect.is-extensible");
// require("core-js/modules/es6.reflect.own-keys");
// require("core-js/modules/es6.reflect.prevent-extensions");
// require("core-js/modules/es6.reflect.set");
// require("core-js/modules/es6.reflect.set-prototype-of");
require("core-js/modules/es6.function.bind");
require("core-js/modules/es6.function.name");
require("core-js/modules/es6.function.has-instance");
require("core-js/modules/es6.regexp.flags");
require("core-js/modules/es6.regexp.match");
require("core-js/modules/es6.regexp.replace");
require("core-js/modules/es6.regexp.split");
require("core-js/modules/es6.regexp.search");
require("core-js/modules/es6.array.from");
require("core-js/modules/es7.array.includes");
require("core-js/modules/es7.object.values");
require("core-js/modules/es7.object.entries");
require("core-js/modules/es7.object.get-own-property-descriptors");
require("core-js/modules/es7.string.pad-start");
require("core-js/modules/es7.string.pad-end");