var name = 'Bob';
var time = 'today';

function tag(literals, ...values) {
  // The first parameter is an array of all literals in the template.
  console.log(literals[0]);
  console.log(literals[1]);
  console.log(literals[2]);

  // The second is an array of all values.
  console.log(values[0]);
  console.log(values[1]);

  return 'Tags can also return an object.';
}

console.log(`Multi-line strings are allowed
in template strings.`);

console.log(`Hello ${name}. How are you ${time}?`);

console.log(tag`Hello ${name}. How are you ${time}?`);
