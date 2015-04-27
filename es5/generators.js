"use strict";

var _fibonacci;

var fibonacci = (_fibonacci = {}, _fibonacci[Symbol.iterator] = regeneratorRuntime.mark(function fib() {
  var pre, cur, temp;
  return regeneratorRuntime.wrap(function fib$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        pre = 0;
        cur = 1;

      case 2:
        temp = pre;
        pre = cur;
        cur += temp;
        context$1$0.next = 7;
        return cur;

      case 7:
        context$1$0.next = 2;
        break;

      case 9:
      case "end":
        return context$1$0.stop();
    }
  }, fib, this);
}), _fibonacci);

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