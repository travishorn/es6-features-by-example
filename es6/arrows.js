var evens = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
var odds = evens.map(v => v + 1);
var nums = evens.map((v, i) => v + i);
var pairs = evens.map(v => ({even: v, odd: v + 1}));
var fives = [];
var alice;

nums.forEach(v => {
  if (v % 5 === 0) {
    fives.push(v);
  }
});

alice = {
  _name: 'Alice',
  _friends: ['Bob', 'Carol', 'Dan'],
  printFriends() {
    this._friends.forEach(f =>
      console.log(this._name + ' knows ' + f));
  }
};

console.log('odds: ' + odds);
console.log('nums: ' + nums);
console.log('pairs: ' + JSON.stringify(pairs));
console.log('fives: ' + fives);
alice.printFriends();
