// New form
console.log('\u{20BB7}');
console.log('\uD842\uDFB7');

// Same as ES5.1
console.log('Unicode length: ' + '𠮷'.length);

// New RegExp behaviour, opt-in ‘u’
console.log('u RegExp length: ' + '𠮷'.match(/./u)[0].length);

// for..of iterates code points
for (let c of '𠮷') {
  console.log(c);
}
