"use strict";

var _fibonacci;

var fibonacci = (_fibonacci = {}, _fibonacci[Symbol.iterator] = function () {
  var pre = 0;
  var cur = 1;

  return {
    next: function next() {
      var _ref = [cur, pre + cur];
      pre = _ref[0];
      cur = _ref[1];

      return { done: false, value: cur };
    }
  };
}, _fibonacci);

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = fibonacci[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var n = _step.value;

    if (n > 1000) {
      break;
    }
    console.log(n);
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator["return"]) {
      _iterator["return"]();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}