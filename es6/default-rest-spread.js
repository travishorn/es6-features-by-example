// Default
// y is 12 if not passed (or passed as undefined)
function f1(x, y=12) {
  return x + y;
}

console.log(f1(3));

// Rest
// y is an Array of the rest of the variables
function f2(x, ...y) {
  return x * y.length;
}

console.log(f2(3, 'hello', true));


// Spread
function f3(x, y, z) {
  return x + y + z;
}

// The array will be split and assigned to each parameter
console.log(f3(...[1, 2, 3]));
