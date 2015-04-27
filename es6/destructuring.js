var a;
var b;
var c;
var d;

// List matching
[a, , b] = [1, 2, 3];

// Function assignment
function nums() {
  return [1, 2];
}

[c, d] = nums();

console.log(a + ' ' + b);
console.log(c + ' ' + d);
