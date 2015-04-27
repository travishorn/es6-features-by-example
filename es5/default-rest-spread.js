// Default
// y is 12 if not passed (or passed as undefined)
'use strict';

function f1(x) {
  var y = arguments[1] === undefined ? 12 : arguments[1];

  return x + y;
}

console.log(f1(3));

// Rest
// y is an Array of the rest of the variables
function f2(x) {
  for (var _len = arguments.length, y = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    y[_key - 1] = arguments[_key];
  }

  return x * y.length;
}

console.log(f2(3, 'hello', true));

// Spread
function f3(x, y, z) {
  return x + y + z;
}

// The array will be split and assigned to each parameter
console.log(f3.apply(undefined, [1, 2, 3]));