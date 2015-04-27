var alice;

var Person = {
  greet() {
    return 'Hello.';
  }
};

function greet() {
  return 'Greetings.';
}

alice = {
    // __proto__
    __proto__: Person,

    // Shorthand for "greet: greet"
    greet,

    // Methods & super calls
    superGreet() {
      return super.greet();
    },

    // Computed (dynamic) property names
    [ 'prop_' + (() => 42)() ]: 42
};

console.log(alice.greet());
console.log(alice.superGreet());
console.log(alice.prop_42);
