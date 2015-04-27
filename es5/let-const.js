'use strict';

function letTest() {
  var name = 'Alice';

  if (true) {
    var _name = 'Bob';
    console.log('Inner let: ' + _name);
  }

  console.log('Outer let: ' + name);
}

function constTest() {
  var name = 'Carol';

  // This would throw an error:
  // name = 'Dave';

  console.log('Const: ' + name);
}

letTest();
constTest();