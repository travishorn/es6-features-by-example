var fibonacci = {
  [Symbol.iterator]: function*fib() {
    var pre = 0;
    var cur = 1;
    var temp;

    for (;;) {
      temp = pre;
      pre = cur;
      cur += temp;
      yield cur;
    }
  }
};

for (let n of fibonacci) {
  if (n > 1000) {
    break;
  }

  console.log(n);
}
