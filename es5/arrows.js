'use strict';

var evens = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
var odds = evens.map(function (v) {
  return v + 1;
});
var nums = evens.map(function (v, i) {
  return v + i;
});
var pairs = evens.map(function (v) {
  return { even: v, odd: v + 1 };
});
var fives = [];
var alice;

nums.forEach(function (v) {
  if (v % 5 === 0) {
    fives.push(v);
  }
});

alice = {
  _name: 'Alice',
  _friends: ['Bob', 'Carol', 'Dan'],
  printFriends: function printFriends() {
    var _this = this;

    this._friends.forEach(function (f) {
      return console.log(_this._name + ' knows ' + f);
    });
  }
};

console.log('odds: ' + odds);
console.log('nums: ' + nums);
console.log('pairs: ' + JSON.stringify(pairs));
console.log('fives: ' + fives);
alice.printFriends();