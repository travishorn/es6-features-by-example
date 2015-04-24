'use strict';

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var alice;
var bob;

var Person = (function () {
  function Person(name, age) {
    _classCallCheck(this, Person);

    this.name = name;
    this.age = age;
  }

  _createClass(Person, [{
    key: 'printName',
    value: function printName() {
      return this.name;
    }
  }, {
    key: 'printAge',
    value: function printAge() {
      return this.age;
    }
  }]);

  return Person;
})();

var Child = (function (_Person) {
  function Child(name, age) {
    _classCallCheck(this, Child);

    _get(Object.getPrototypeOf(Child.prototype), 'constructor', this).call(this, name, age);
  }

  _inherits(Child, _Person);

  _createClass(Child, [{
    key: 'printName',
    value: function printName() {
      return _get(Object.getPrototypeOf(Child.prototype), 'printName', this).call(this).toUpperCase();
    }
  }]);

  return Child;
})(Person);

alice = new Person('Alice', 27);
console.log(alice.printName());
console.log(alice.printAge());

bob = new Child('Bob', 7);
console.log(bob.printName());