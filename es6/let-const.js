function letTest() {
  let name = 'Alice';

  if (true) {
    let name = 'Bob';
    console.log('Inner let: ' + name);
  }

  console.log('Outer let: ' + name);
}

function constTest() {
  const name = 'Carol';

  // This would throw an error:
  // name = 'Dave';

  console.log('Const: ' + name);
}

letTest();
constTest();
