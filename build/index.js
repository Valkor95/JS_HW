"use strict";

var _fetch = require("./fetch.js");
var _displayData = require("./displayData.js");
(function () {
  var weatherDiv = document.querySelector('.card-body');
  var buttonRechange = document.querySelector('.btn');
  (0, _fetch.getWeather)(_displayData.displayData)["catch"](function (error) {
    weatherDiv.innerHTML = "<p>\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u0438 \u0434\u0430\u043D\u043D\u044B\u0445 \u043E \u043F\u043E\u0433\u043E\u0434\u0435: ".concat(error.message, "</p>");
  });
  buttonRechange.addEventListener('click', function () {
    return (0, _fetch.getWeather)(_displayData.displayData)["catch"](function (error) {
      weatherDiv.innerHTML = "<p>\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u0438 \u0434\u0430\u043D\u043D\u044B\u0445 \u043E \u043F\u043E\u0433\u043E\u0434\u0435: ".concat(error.message, "</p>");
    });
  });
})();