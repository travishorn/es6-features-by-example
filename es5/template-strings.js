'use strict';

var _taggedTemplateLiteral = function (strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); };

var name = 'Bob';
var time = 'today';

function tag(literals) {
  // The first parameter is an array of all literals in the template.
  console.log(literals[0]);
  console.log(literals[1]);
  console.log(literals[2]);

  // The second is an array of all values.
  console.log(arguments[1]);
  console.log(arguments[2]);

  return 'Tags can also return an object.';
}

console.log('Multi-line strings are allowed\nin template strings.');

console.log('Hello ' + name + '. How are you ' + time + '?');

console.log(tag(_taggedTemplateLiteral(['Hello ', '. How are you ', '?'], ['Hello ', '. How are you ', '?']), name, time));