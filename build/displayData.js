"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.displayData = void 0;
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
var displayData = exports.displayData = function displayData(data) {
  var weatherDiv = document.querySelector('.card-body');
  try {
    var weatherInfo = "<h1>\u041F\u043E\u0433\u043E\u0434\u0430 \u0432 ".concat(data.name, "</h1>");
    weatherInfo += "<p><span>\u041A\u043E\u043E\u0440\u0434\u0438\u043D\u0430\u0442\u044B:</span> (".concat(data.coord.lat, ", ").concat(data.coord.lon, ")</p>");
    weatherInfo += "<h2>\u041E\u0441\u043D\u043E\u0432\u043D\u044B\u0435 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B:</h2>";
    for (var key in data.main) {
      weatherInfo += "<p><span>".concat(key, ":</span> ").concat(data.main[key], "</p>");
    }
    weatherInfo += "<h2>\u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u0443\u0441\u043B\u043E\u0432\u0438\u044F:</h2>";
    var _iterator = _createForOfIteratorHelper(data.weather),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var condition = _step.value;
        weatherInfo += "<p><span>".concat(condition.main, ":</span> ").concat(condition.description, "</p>");
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    weatherDiv.innerHTML = weatherInfo;
  } catch (error) {
    weatherDiv.innerHTML = "<p>".concat(error.message, "</p>");
  }
};