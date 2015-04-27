'use strict';

var _obj;

var _defineProperty = function (obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: key == null || typeof Symbol == 'undefined' || key.constructor !== Symbol, configurable: true, writable: true }); };

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var alice;

var Person = {
    greet: function greet() {
        return 'Hello.';
    }
};

function greet() {
    return 'Greetings.';
}

alice = _obj = _defineProperty({
    // __proto__
    __proto__: Person,

    // Shorthand for "greet: greet"
    greet: greet,

    // Methods & super calls
    superGreet: function superGreet() {
        return _get(Object.getPrototypeOf(_obj), 'greet', this).call(this);
    } }, 'prop_' + (function () {
    return 42;
})(), 42);

console.log(alice.greet());
console.log(alice.superGreet());
console.log(alice.prop_42);

// Computed (dynamic) property names